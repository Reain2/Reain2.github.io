import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { renderPage, pageFiles } from '../.prerender/prerender.js'

let count = 0
for (const file of pageFiles) {
  const path = join('dist', file)
  const html = await readFile(path, 'utf8')
  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`${file}: root container not found, cannot inject markup`)
  }
  const markup = renderPage(file)
  await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`))
  count += 1
}

console.log(`Prerendered ${count} pages.`)
