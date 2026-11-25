# Takyan X website

Frontend-only site (Vite + React) for Takyan X: a QR code and download links for the game.

## Run

    npm install
    npm run dev       # local dev server
    npm run build     # production build in dist/

## Download link

The builds (APK ~1 GB, PC) are not bundled. They are shared only through the QR code and Drive links.
Replace the placeholders in `src/config.js` (or set `VITE_APK_DRIVE_URL` and `VITE_PC_DRIVE_URL` in `.env.local`).
The QR code encodes the same link unless `VITE_QR_TARGET` is set.

## Assets

Art and fonts come from the game project (`../Takyanx/Assets`). Screen images in `src/assets/img/screens` and the team credits are exported from the game's Figma UI boards.
`npm run assets` re-generates the web-sized images in `src/assets/img`.
