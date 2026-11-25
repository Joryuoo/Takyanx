/* Takyan X service worker.
 *
 * Goal: after the first visit the whole site (pages, fonts, art and the gameplay GIFs) is
 * saved on the device, so it can be opened and shown with no internet at all.
 *
 * The version and the list of files to save are filled in by the build (see vite.config.js),
 * so every deploy gets its own cache and the old one is deleted when the new worker activates.
 *
 * - install:  save every built file. If any file fails, the install fails and the browser
 *             retries later, so "ready offline" always means the full set is saved.
 * - navigations: network first (so a connected visitor gets the latest page), but give up
 *             after NAV_TIMEOUT_MS and use the saved page. Wi-Fi with no internet hangs
 *             instead of failing, and this keeps the site from stalling there.
 * - everything else (same origin): saved copy first, network only if it is missing.
 * - other origins (the Drive download links) are never touched.
 */
const VERSION = '__VERSION__'
const CACHE = `takyanx-${VERSION}`
const PRECACHE = __PRECACHE__
const NAV_TIMEOUT_MS = 3000

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k.startsWith('takyanx-') && k !== CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  )
})

function networkFirstWithTimeout(request) {
  return new Promise((resolve) => {
    let settled = false
    const useSaved = () =>
      caches.match('/index.html').then((saved) => {
        if (!settled) {
          settled = true
          resolve(saved || Response.error())
        }
      })
    const timer = setTimeout(useSaved, NAV_TIMEOUT_MS)
    fetch(request)
      .then((response) => {
        clearTimeout(timer)
        if (settled) return
        settled = true
        if (response.ok && response.type === 'basic') {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put('/index.html', copy))
        }
        resolve(response)
      })
      .catch(() => {
        clearTimeout(timer)
        useSaved()
      })
  })
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstWithTimeout(request))
    return
  }

  // ignoreVary: static hosts send "Vary: Origin", and module scripts send an Origin header
  // while the files were saved without one, so a strict lookup would miss them and break
  // the offline page.
  event.respondWith(
    caches.match(request, { ignoreVary: true }).then(
      (saved) =>
        saved ||
        fetch(request).then((response) => {
          if (response.ok && response.type === 'basic') {
            const copy = response.clone()
            caches.open(CACHE).then((cache) => cache.put(request, copy))
          }
          return response
        }),
    ),
  )
})
