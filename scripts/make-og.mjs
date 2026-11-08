// Regenerates public/og.png (1200x630) from the live palette in src/styles/tokens.css.
// Run: node scripts/make-og.mjs
import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const tokens = await readFile('src/styles/tokens.css', 'utf8')
const token = (name) => tokens.match(new RegExp(`${name}:\\s*(#[0-9A-Fa-f]{6})`))?.[1] ?? '#000000'
const font = pathToFileURL(resolve('src/assets/fonts/space-grotesk-latin.woff2')).href

const html = `<!doctype html><meta charset="utf-8">
<style>
  @font-face { font-family: SG; src: url('${font}') format('woff2-variations'); font-weight: 300 700; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: ${token('--ground')}; color: ${token('--ink-on-ground')};
         font-family: SG, system-ui, sans-serif; padding: 56px 72px; display: flex; flex-direction: column; justify-content: space-between;
         border: 8px solid ${token('--accent')}; }
  header { display: flex; justify-content: space-between; font-size: 24px; font-weight: 500; }
  h1 { font-size: 92px; line-height: 0.95; letter-spacing: -0.04em; font-weight: 600; max-width: 900px; }
  footer { font-size: 26px; color: ${token('--accent')}; font-weight: 500; }
</style>
<header><span>Samuel Rain Gunawan</span><span>reain2.github.io</span></header>
<h1>Tech Enthusiast, Exploring New Things</h1>
<footer>Photography · Video · New tools · AI</footer>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await writeFile('public/og.png', await page.screenshot({ type: 'png' }))
await browser.close()
console.log('public/og.png regenerated from tokens.css')
