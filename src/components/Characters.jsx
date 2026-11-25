import c1 from '../assets/img/characters/character1.webp'
import c1Hover from '../assets/img/characters/character1-hover.webp'
import c2 from '../assets/img/characters/character2.webp'
import c2Hover from '../assets/img/characters/character2-hover.webp'

const CHARACTERS = [
  {
    name: 'The Striker',
    alt: 'Takyan X character mid-kick with a blue slipper',
    idle: c1,
    hover: c1Hover,
  },
  {
    name: 'The Slider',
    alt: 'Takyan X character leaning back on a giant red slipper',
    idle: c2,
    hover: c2Hover,
  },
]

export default function Characters() {
  return (
    <section className="section" id="characters">
      <h2 className="section__title">Meet the players</h2>
      <p className="section__lead">Hover or tap a player to power up.</p>
      <ul className="characters">
        {CHARACTERS.map((c) => (
          <li className="character" key={c.name} tabIndex={0}>
            <div className="character__art">
              <img className="character__idle" src={c.idle} alt={c.alt} loading="lazy" />
              <img className="character__hover" src={c.hover} alt="" aria-hidden="true" loading="lazy" />
            </div>
            <p className="character__name">{c.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
