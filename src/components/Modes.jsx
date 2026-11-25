import { Fragment } from 'react'
import takyan from '../assets/img/takyan.webp'
import c1 from '../assets/img/characters/character1.webp'
import c1Hover from '../assets/img/characters/character1-hover.webp'
import c2 from '../assets/img/characters/character2.webp'
import c2Hover from '../assets/img/characters/character2-hover.webp'

const MODES = [
  {
    name: 'Solo',
    tone: 'solo',
    tagline: 'You vs. the takyan.',
    points: [
      'Vs Bot.',
      'Endless solo mode: beat your previous best.',
    ],
    art: { idle: c1, hover: c1Hover, alt: 'Takyan X player mid-kick with a blue slipper' },
  },
  {
    name: 'Multiplayer',
    tone: 'multi',
    tagline: 'Make room for a rival.',
    points: [
      'Host a room or join one.',
      '1v1, or Rambol with up to 5 players.',
    ],
    art: { idle: c2, hover: c2Hover, alt: 'Takyan X player leaning back on a giant red slipper' },
  },
]

export default function Modes() {
  return (
    <section className="section" id="modes">
      <h2 className="section__title">Game modes</h2>
      <p className="section__lead">
        Play solo, or host a room for friends. Hover or tap a player to power
        up.
      </p>
      <div className="modes">
        {MODES.map((m, i) => (
          <Fragment key={m.name}>
            {i === 1 && (
              <div className="modes__takyan">
                <img src={takyan} alt="A red takyan, the feathered shuttle players kick" loading="lazy" />
              </div>
            )}
          <article className="mode">
            <div className="character" tabIndex={0}>
              <div className="character__art">
                <img className="character__idle" src={m.art.idle} alt={m.art.alt} loading="lazy" />
                <img className="character__hover" src={m.art.hover} alt="" aria-hidden="true" loading="lazy" />
              </div>
            </div>
            <div className={`panel panel--${m.tone}`}>
              {/* Phones only: the takyan moves from between the cards into the Solo card's free corner. */}
              {i === 0 && <img className="modes__takyan-in-card" src={takyan} alt="" aria-hidden="true" />}
              <header className={`panel__head`}>
                <h3>{m.name}</h3>
              </header>
              <div className="panel__body">
                <p className="modes__tag">{m.tagline}</p>
                <ul className="modes__list">
                  {m.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
