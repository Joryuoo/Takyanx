import { useEffect, useState } from 'react'

// Only meaningful in the production build, where the service worker is registered.
const SUPPORTED = typeof navigator !== 'undefined' && 'serviceWorker' in navigator && import.meta.env.PROD

const isStandalone = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)

export default function InstallApp() {
  const [installPrompt, setInstallPrompt] = useState(null)
  const [saved, setSaved] = useState(false)
  const [online, setOnline] = useState(() => navigator.onLine)
  const [installed, setInstalled] = useState(isStandalone)

  useEffect(() => {
    if (!SUPPORTED) return undefined
    let alive = true
    // Resolves once a worker is active, which only happens after every file is saved.
    navigator.serviceWorker.ready.then(() => alive && setSaved(true))

    const onPrompt = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    const onInstalled = () => {
      setInstalled(true)
      setInstallPrompt(null)
    }
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      alive = false
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  if (!SUPPORTED) return null

  const install = async () => {
    if (!installPrompt) return
    installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }

  let status
  if (!online) status = 'You’re offline. Everything here still works, except the Drive downloads.'
  else if (saved) status = 'Saved on this device. It opens without any internet.'
  else status = 'Saving the site for offline use…'

  return (
    <div className="install">
      <p className="install__title">{installed ? 'Installed' : 'Show it anywhere, even with no internet'}</p>
      <p className="install__status" role="status">
        {status}
      </p>
      {installPrompt && !installed && (
        <button type="button" className="btn btn--play" onClick={install}>
          Install app
        </button>
      )}
      {!installPrompt && !installed && saved && (
        <p className="install__hint">To install, use your browser menu: Install app, or Add to Home Screen.</p>
      )}
    </div>
  )
}
