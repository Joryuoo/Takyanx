# Takyan X website

Frontend-only site (Vite + React) for Takyan X: a QR code and download links for the game.

## Run

    npm install
    npm run dev       # local dev server
    npm run build     # production build in dist/

## Point it at the real builds

The game files are too large to bundle (APK ~1 GB, Windows ~580 MB). Host them
(e.g. GitHub Releases) and set the URLs in `src/config.js`, or via `.env.local`:

    VITE_APK_URL=https://...
    VITE_WINDOWS_URL=https://...
    VITE_QR_TARGET=https://...   # optional, defaults to the APK URL

## Assets

Art and fonts come from the game project (`../Takyanx/Assets`).
`npm run assets` re-generates the web-sized images in `src/assets/img`.
