# Takyan X website

Frontend-only site (Vite + React) for Takyan X. It has a QR code and download links, game modes, skills, gameplay clips and the team credits. It installs as an app (PWA) and works offline once visited.

## Run

    npm install
    npm run dev       # dev server (the offline service worker is off here on purpose)
    npm run build     # production build in dist/
    npm run preview   # serve dist/ to try the build, including install and offline

## Downloads and the QR code

The builds (APK ~1 GB, PC) are not bundled. Both downloads currently point at the shared Drive folder in `src/config.js`
(or set `VITE_APK_DRIVE_URL` and `VITE_PC_DRIVE_URL` in `.env.local` to point them at separate files).

The QR code is a fixed image: `src/assets/img/qr-code.webp`. If the Drive link changes, replace that image too,
or it will keep pointing at the old link.

## Offline / PWA

`vite build` also writes `dist/sw.js` (from `sw/sw.template.js`) listing every built file, so the first visit saves the whole site,
including the gameplay GIFs (about 30 MB), and it then opens with no internet. The Drive links still need a connection.

To test it: `npm run build`, `npm run preview`, open the page, wait for "Saved on this device", then stop the server and reload.
It needs HTTPS (or localhost). Paths are root-absolute (`/sw.js`, `/manifest.webmanifest`), so serve it from the root of a domain.
Deploying under a sub-path (for example a GitHub Pages project site) needs a Vite `base` and matching manifest and worker paths.

## Assets

Art and fonts come from the game project. Screen images and the team credits were exported from the game's Figma UI boards,
and the gameplay GIFs were made from screen recordings.
`npm run assets` re-generates some of the web-sized images in `src/assets/img`.
