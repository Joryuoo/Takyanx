// Converts the game's source art into web-sized webp files in src/assets/img.
import sharp from 'sharp'
import path from 'node:path'

const GAME = path.resolve('..', 'Takyanx', 'Assets', 'Images')
const OUT = path.resolve('src', 'assets', 'img')

const jobs = [
  ['Graffiti/takyanx.png', 'logo.webp', 1400],
  ['Blue Takyan.png', 'takyan-blue.webp', 700],
  ['TakyanX_Banner.png', 'finalist-banner.webp', 1100],
  ['Graffiti/The Interns.png', 'graffiti-interns.webp', 1000],
  ['Graffiti/Level Up.png', 'graffiti-levelup.webp', 1000],
  ['Graffiti/Wildcats.png', 'graffiti-wildcats.webp', 1000],
  ['Graffiti/dost7.png', 'graffiti-dost.webp', 1000],
  ['moutain2.png', 'mountains.webp', 1600],
  ['city bg.png', 'city.webp', 1920],
]

for (const [src, dest, width] of jobs) {
  const info = await sharp(path.join(GAME, src))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, dest))
  console.log(dest, Math.round(info.size / 1024) + ' KB')
}
await sharp(path.resolve('public', 'icon.png')).resize(256).png().toFile(path.resolve('public', 'favicon.png'))
