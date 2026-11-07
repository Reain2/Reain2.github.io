import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const TOKEN = '[USER INPUT REQUIRED]'
const roots = ['dist', 'src']
// Files allowed to contain the literal token: the definition itself, this script, and the docs.
const skip = new Set(['src/content/index.js', 'scripts/check-placeholders.mjs'])

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(path)))
    else if (/\.(html|js|css|json|md|txt)$/.test(entry.name)) out.push(path)
  }
  return out
}

const hits = []
for (const root of roots) {
  try {
    await stat(root)
  } catch {
    if (root === 'dist') {
      console.error('dist/ not found. Run the build first.')
      process.exit(1)
    }
    continue
  }
  for (const file of await walk(root)) {
    if (skip.has(file)) continue
    const text = await readFile(file, 'utf8')
    if (text.includes(TOKEN)) hits.push(file)
  }
}

if (hits.length) {
  console.error(`Release gate failed: ${hits.length} file(s) still contain "${TOKEN}".`)
  for (const file of hits) console.error(`  ${file}`)
  process.exit(1)
}

console.log('Release gate passed: no placeholder tokens found.')
