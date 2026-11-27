// Single place to point the site at the real builds.
// The builds are huge (over 1 GB each), so they are NOT bundled into this site. They are
// shared only through the QR code and Drive links.
//
// Android and PC each have their own Drive folder. To change them, edit the URLs below or set
// VITE_APK_DRIVE_URL / VITE_PC_DRIVE_URL in .env.local.

const env = import.meta.env

// The shared TakyanXExport folder. The QR code image (src/assets/img/qr-code.webp) encodes this
// link, so the "Open download link" button next to it uses the same one.
export const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1S1UyX_tz_cugpD4Mku45ltkX9K_mQ1Za?usp=sharing'

export const APK_DRIVE_URL =
  env.VITE_APK_DRIVE_URL || 'https://drive.google.com/drive/folders/1IWNLLITs3_IydwqhCbr5UcWbB6pRuQPq'

export const PC_DRIVE_URL =
  env.VITE_PC_DRIVE_URL || 'https://drive.google.com/drive/folders/1-w7GJZIP61_eAAdfgMj49CS3hSS6UcmX'

export const DOWNLOADS = {
  android: {
    label: 'Android',
    file: 'TakyanX.apk',
    size: '~1.25 GB',
    note: 'Opens Google Drive.',
    url: APK_DRIVE_URL,
  },
  pc: {
    label: 'PC',
    file: 'TakyanX.exe',
    size: '~1.35 GB',
    note: 'Opens Google Drive.',
    disclaimer: {
      game: 'TakyanX.exe',
      tracker: 'TakyanXTracker',
    },
    url: PC_DRIVE_URL,
  },
}

// What the QR code (and the button beside it) opens. It must match the link inside the QR image.
export const QR_TARGET = env.VITE_QR_TARGET || DRIVE_FOLDER_URL

export const REPO_URL = 'https://github.com/Tech-Wrightttt/Takyan_X'
