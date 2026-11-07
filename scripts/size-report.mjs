import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

// Budgets: BUILD.md §9
const budgets = {
  js: 100 * 1024,
  css: 30 * 1024,
  image: 300 * 1024,
  totalCss: 30 * 1024,
}

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(path)))
    else out.push(path)
  }
  return out
}

let cssTotal = 0
const failures = []
const rows = []

for (const file of await walk('dist')) {
  const { size } = await stat(file)
  const ext = file.split('.').pop()
  let gz = null
  if (ext === 'js' || ext === 'css' || ext === 'html' || ext === 'svg') {
    gz = gzipSync(await readFile(file)).length
  }

  if (ext === 'js' && gz > budgets.js) failures.push(`${file}: ${kb(gz)} gzip > ${kb(budgets.js)}`)
  if (ext === 'css' && gz > budgets.css) failures.push(`${file}: ${kb(gz)} gzip > ${kb(budgets.css)}`)
  if (/^(png|jpg|jpeg|webp|avif|gif)$/.test(ext) && size > budgets.image)
    failures.push(`${file}: ${kb(size)} > ${kb(budgets.image)}`)

  if (ext === 'css') cssTotal += gz ?? 0
  rows.push([file, kb(size), gz === null ? '—' : kb(gz)])
}

if (cssTotal > budgets.totalCss) failures.push(`total CSS: ${kb(cssTotal)} gzip > ${kb(budgets.totalCss)}`)

const width = Math.max(...rows.map((r) => r[0].length), 10)
for (const [file, raw, gz] of rows.sort((a, b) => b[1].localeCompare(a[1]))) {
  console.log(`${file.padEnd(width)}  ${raw.padStart(9)}  ${gz.padStart(9)}`)
}
console.log(`\ntotal CSS gzip: ${kb(cssTotal)}`)

if (failures.length) {
  console.error('\nBudget failures:')
  for (const failure of failures) console.error(`  ${failure}`)
  process.exit(1)
}
console.log('All size budgets met.')

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}
