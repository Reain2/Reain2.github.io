// Dev-only audit: responsive overflow, axe accessibility, tab order.
// Not part of `npm run build`. Requires `npm run build` first (dist/).
import { chromium } from 'playwright'
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { readFile as rf, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const PORT = 4455
const WIDTHS = [320, 390, 768, 1024, 1440]
const PAGES = ['/', '/about.html', '/experience.html', '/contact.html', '/blog.html', '/404.html']

const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png',
}

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0])
  let file = join('dist', path === '/' ? 'index.html' : path)
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html')
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' })
    res.end(await rf(file))
  } catch {
    const body = await rf('dist/404.html')
    res.writeHead(404, { 'content-type': 'text/html' })
    res.end(body)
  }
})
await new Promise((r) => server.listen(PORT, r))

const axeSource = await readFile('node_modules/axe-core/axe.min.js', 'utf8')
const browser = await chromium.launch()
const page = await browser.newPage()

const problems = []
console.log('overflow: page @ width -> scrollWidth vs clientWidth\n')

for (const path of PAGES) {
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 })
    const res = await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'load' })
    if (res.status() !== 200 && path !== '/404.html') problems.push(`${path}: HTTP ${res.status()}`)
    const m = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
      wide: [...document.querySelectorAll('body *')]
        .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
        .slice(0, 3)
        .map((el) => `${el.tagName.toLowerCase()}.${el.className}`),
    }))
    const over = m.scroll > m.client
    if (over) problems.push(`${path} @${width}px: horizontal overflow ${m.scroll}>${m.client} ${JSON.stringify(m.wide)}`)
    console.log(`${over ? 'OVER' : ' ok '}  ${path.padEnd(18)} ${width}`)
  }
}

// axe at 390 and 1440
for (const width of [390, 1440]) {
  await page.setViewportSize({ width, height: 900 })
  for (const path of PAGES) {
    await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'load' })
    await page.addScriptTag({ content: axeSource })
    const result = await page.evaluate(async () => {
      // eslint-disable-next-line no-undef
      const r = await axe.run(document, { resultTypes: ['violations'] })
      return r.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }))
    })
    for (const v of result) {
      if (v.impact === 'serious' || v.impact === 'critical') {
        problems.push(`axe ${v.id} (${v.impact}) ${path} @${width}: ${v.nodes} node(s) — ${v.help}`)
      }
    }
    console.log(`\naxe ${path} @${width}: ${result.length ? result.map((v) => `${v.id}[${v.impact}]x${v.nodes}`).join(', ') : 'no violations'}`)
  }
}

// tab order at 390 on home
await page.setViewportSize({ width: 390, height: 900 })
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load' })
const tab = []
for (let i = 0; i < 12; i++) {
  await page.keyboard.press('Tab')
  const info = await page.evaluate(() => {
    const el = document.activeElement
    if (!el || el === document.body) return null
    const cs = getComputedStyle(el)
    return {
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 24),
      outline: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`,
    }
  })
  if (!info) break
  tab.push(info)
}
console.log('\ntab order (home, 390px):')
for (const [i, t] of tab.entries()) console.log(`  ${i + 1}. ${t.tag} "${t.text}" outline=${t.outline}`)
const noRing = tab.filter((t) => t.outline.startsWith('none') || t.outline.includes('0px'))
if (noRing.length) problems.push(`focus ring missing on ${noRing.length} element(s)`)

// unknown path must serve the not-found page with a 404 status
await page.setViewportSize({ width: 390, height: 900 })
const miss = await page.goto(`http://localhost:${PORT}/no-such-page`, { waitUntil: 'load' })
const notFound = await page.evaluate(() => document.querySelector('h1')?.textContent ?? '')
if (miss.status() !== 404) problems.push(`unknown path returned ${miss.status()}, expected 404`)
if (!notFound.includes('does not exist')) problems.push(`unknown path served "${notFound}" instead of the not-found page`)
console.log(`\nunknown path: ${miss.status()} "${notFound}"`)

// target size (SC 2.5.8): every interactive element at least 24x24 CSS px
await page.setViewportSize({ width: 390, height: 900 })
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load' })
const small = await page.evaluate(() =>
  [...document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .map((el) => {
      const r = el.getBoundingClientRect()
      return { text: (el.textContent || '').trim().slice(0, 20), w: Math.round(r.width), h: Math.round(r.height) }
    })
    .filter((x) => x.w < 24 || x.h < 24),
)
if (small.length) problems.push(`targets under 24x24: ${JSON.stringify(small)}`)
console.log(`\ntarget size: ${small.length ? small.length + ' under 24x24' : 'all interactive elements >= 24x24'}`)

await browser.close()
server.close()

console.log('')
if (problems.length) {
  console.error(`${problems.length} problem(s):`)
  for (const p of problems) console.error(`  - ${p}`)
  process.exit(1)
}
console.log('Audit clean: no overflow, no serious axe violations, focus ring present on all tab stops.')
