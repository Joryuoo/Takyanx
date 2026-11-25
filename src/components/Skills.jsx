import shagit from '../assets/img/skills/shagit.webp'
import taghoy from '../assets/img/skills/taghoy.webp'

// Wording follows the in-game Skills tutorial page.
const SKILLS = [
  {
    name: 'Shagit',
    key: 'Q',
    tag: 'A shout',
    icon: shagit,
    alt: 'Shagit skill icon: a player shouting',
    body: 'Distract the kicker for 1 second. If they kick in that time, the takyan shoots sky-high and flies off wild.',
  },
  {
    name: 'Taghoy',
    key: 'R',
    tag: 'A whistle',
    icon: taghoy,
    alt: 'Taghoy skill icon: swirling wind',
    body: 'While the takyan is in the air, a sideways gust of wind pushes it off course.',
    note: 'Panaghoy: whistling to call the wind, a Visayan folk habit for summoning a cool breeze.',
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__lead">
        In multiplayer, the player who isn’t kicking can use two skills to
        throw the kicker off.
      </p>
      <div className="skills">
        {SKILLS.map((s) => (
          <article className="feature skill" key={s.name}>
            <img className="skill__icon" src={s.icon} alt={s.alt} loading="lazy" />
            <div className="skill__text">
              <h3>
                {s.name} <span className="skill__key">{s.key}</span>
              </h3>
              <p className="skill__tag">{s.tag}</p>
              <p>{s.body}</p>
              {s.note && <p className="skill__note">{s.note}</p>}
            </div>
          </article>
        ))}
      </div>
      <p className="skills__foot">
        Press the key on PC, or tap the skill on mobile. In a 1v1 you get 3
        Shagits and 2 Taghoys, with a refill for the last minute.
      </p>
    </section>
  )
}
