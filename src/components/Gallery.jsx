import localPlay from '../assets/img/screens/local-play.webp'
import bato from '../assets/img/screens/bato-bato-pik.webp'
import thanks from '../assets/img/screens/special-thanks.webp'

const SHOTS = [
  {
    src: localPlay,
    alt: 'Room setup screen: pick one vs one or free for all, set the match timer, and invite players on the same Wi-Fi',
    caption: 'Set up a room',
  },
  {
    src: bato,
    alt: 'Bato Bato Pik, a rock-paper-scissors showdown between host and player',
    caption: 'Bato Bato Pik decides who serves',
  },
  {
    src: thanks,
    alt: 'Special thanks credits screen with the Takyan X logo',
    caption: 'Hand-painted, cardboard-and-crayon look',
  },
]

export default function Gallery() {
  return (
    <section className="section" id="in-game">
      <h2 className="section__title">In the game</h2>
      <div className="shots">
        {SHOTS.map((s) => (
          <figure className="shot" key={s.caption}>
            <img src={s.src} alt={s.alt} loading="lazy" />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
