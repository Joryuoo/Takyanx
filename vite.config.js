import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Writes dist/sw.js from sw/sw.template.js with the list of every built file, so the service
// worker can save the whole site for offline use. Only runs for `vite build`.
function offlineServiceWorker() {
  let outDir = ''
  const walk = (dir, base = '') =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const rel = path.posix.join(base, entry.name)
      return entry.isDirectory() ? walk(path.join(dir, entry.name), rel) : [rel]
    })

  return {
    name: 'offline-service-worker',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const files = walk(outDir).filter((f) => f !== 'sw.js' && !f.endsWith('.map'))
      const urls = ['/', ...files.map((f) => `/${f}`)].sort()
      // The version changes whenever any file's name or size changes.
      const hash = crypto.createHash('sha1')
      for (const f of files) hash.update(f + fs.statSync(path.join(outDir, f)).size)
      const version = hash.digest('hex').slice(0, 10)
      const template = fs.readFileSync(path.resolve('sw', 'sw.template.js'), 'utf8')
      if ((template.match(/__VERSION__/g) || []).length !== 1 || (template.match(/__PRECACHE__/g) || []).length !== 1) {
        throw new Error('sw.template.js must contain each placeholder exactly once')
      }
      const source = template.replace('__VERSION__', version).replace('__PRECACHE__', JSON.stringify(urls))
      fs.writeFileSync(path.join(outDir, 'sw.js'), source)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), offlineServiceWorker()],
})
