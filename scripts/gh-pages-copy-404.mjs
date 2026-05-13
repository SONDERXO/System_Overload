import { copyFileSync, existsSync } from 'node:fs'

const src = 'dist/index.html'
const dest = 'dist/404.html'

if (!existsSync(src)) {
  console.error('Missing', src, '- run vite build first')
  process.exit(1)
}

copyFileSync(src, dest)
console.log('Copied index.html -> 404.html (GitHub Pages SPA fallback)')
