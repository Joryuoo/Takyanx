import duel from '../assets/img/takyan-duel.webp'

const MODES = [
  {
    name: 'Solo',
    tone: 'solo',
    tagline: 'You vs. the takyan.',
    points: [
      'Keep the takyan in the air with a juggling combo.',
      'Time each kick: Perfect, Good or Late scores points.',
      'Beat your saved high score.',
    ],
  },
  {
    name: 'Multiplayer',
    tone: 'multi',
    tagline: 'Make room for a rival.',
    points: [
      'Host a room or join one on the same Wi-Fi. No accounts needed.',
      'Head-to-head 1 vs 1 matches against a friend.',
      'Free for all rooms are in the works.',
    ],
  },
]

export default function Modes() {
  return (
    <section className="section" id="modes">
      <h2 className="section__title">Game modes</h2>
      <p className="section__lead">Practice on your own, or take on a rival.</p>
      <img
        className="modes__art"
        src={duel}
        alt="Two Takyan X players leaping toward a red takyan"
        loading="lazy"
      />
      <div className="modes">
        {MODES.map((m) => (
          <article className="panel" key={m.name}>
            <header className={`panel__head panel__head--${m.tone}`}>
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
          </article>
        ))}
      </div>
    </section>
  )
}
