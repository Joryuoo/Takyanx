// Single place to point the site at the real build.
// The APK is huge (~1 GB), so it is NOT bundled into this site. It is shared only
// through the QR code and a Drive link.
//
// TODO: replace the placeholder below with the real Google Drive link, or set
// VITE_APK_DRIVE_URL in .env.local.

const env = import.meta.env

export const APK_DRIVE_URL =
  env.VITE_APK_DRIVE_URL || 'https://drive.google.com/PLACEHOLDER-takyanx-apk'

export const DOWNLOADS = {
  android: {
    label: 'Android',
    file: 'TakyanX.apk',
    size: '~1 GB',
    note: 'Opens Google Drive. Allow "install unknown apps" when prompted.',
    url: APK_DRIVE_URL,
  },
}

// What the QR code encodes. Same Drive link by default.
export const QR_TARGET = env.VITE_QR_TARGET || APK_DRIVE_URL

export const REPO_URL = 'https://github.com/Tech-Wrightttt/Takyan_X'
