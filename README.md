# Takyan X website

Frontend-only site (Vite + React) for Takyan X: a QR code and download links for the game.

## Run

    npm install
    npm run dev       # local dev server
    npm run build     # production build in dist/

## Download link

The APK (~1 GB) is not bundled. It is shared only through the QR code and a Drive link.
Replace the placeholder in `src/config.js` (or set `VITE_APK_DRIVE_URL` in `.env.local`).
The QR code encodes the same link unless `VITE_QR_TARGET` is set.

## Assets

Art and fonts come from the game project (`../Takyanx/Assets`). Screen images in `src/assets/img/screens` and the team credits are exported from the game's Figma UI boards.
`npm run assets` re-generates the web-sized images in `src/assets/img`.
