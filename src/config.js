// Single place to point the site at the real builds.
// The game builds are huge (APK ~1 GB, Windows ~580 MB), so they are NOT bundled
// into this site. Host them (GitHub Releases, Drive, S3...) and paste the URLs here.
// Override per-environment with VITE_* variables, e.g. in .env.local.

const env = import.meta.env

export const DOWNLOADS = {
  android: {
    label: 'Android',
    file: 'TakyanX.apk',
    size: '~1 GB',
    note: 'Android 8+ · allow "install unknown apps" when prompted',
    url:
      env.VITE_APK_URL ||
      'https://github.com/Tech-Wrightttt/Takyan_X/releases/latest/download/TakyanX.apk',
  },
  windows: {
    label: 'Windows',
    file: 'TakyanX-Windows.exe',
    size: '~580 MB',
    note: 'Windows 10 / 11 · 64-bit',
    url:
      env.VITE_WINDOWS_URL ||
      'https://github.com/Tech-Wrightttt/Takyan_X/releases/latest/download/TakyanX-Windows.exe',
  },
}

// What the QR code encodes. Defaults to the direct Android download so a phone
// scan starts the install; set VITE_QR_TARGET to the site URL if you prefer.
export const QR_TARGET = env.VITE_QR_TARGET || DOWNLOADS.android.url

export const REPO_URL = 'https://github.com/Tech-Wrightttt/Takyan_X'
