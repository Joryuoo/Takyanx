// Single place to point the site at the real builds.
// The builds are huge (APK ~1 GB), so they are NOT bundled into this site. They are
// shared only through the QR code and Drive links.
//
// TODO: replace the placeholders below with the real Google Drive links, or set
// VITE_APK_DRIVE_URL / VITE_PC_DRIVE_URL in .env.local.

const env = import.meta.env

export const APK_DRIVE_URL =
  env.VITE_APK_DRIVE_URL || 'https://drive.google.com/PLACEHOLDER-takyanx-apk'

export const PC_DRIVE_URL =
  env.VITE_PC_DRIVE_URL || 'https://drive.google.com/PLACEHOLDER-takyanx-pc'

export const DOWNLOADS = {
  android: {
    label: 'Android',
    file: 'TakyanX.apk',
    size: '~1 GB',
    note: 'Opens Google Drive.',
    url: APK_DRIVE_URL,
  },
  pc: {
    label: 'PC',
    file: 'TakyanX (Windows)',
    size: 'Size TBA',
    note: 'Opens Google Drive.',
    url: PC_DRIVE_URL,
  },
}

// What the QR code encodes. The Android Drive link by default.
export const QR_TARGET = env.VITE_QR_TARGET || APK_DRIVE_URL

export const REPO_URL = 'https://github.com/Tech-Wrightttt/Takyan_X'
