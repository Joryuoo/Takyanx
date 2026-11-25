import banner from '../assets/img/finalist-banner.webp'

// Mirrors the in-game Team credits screen.
const TEAM = [
  { name: 'Aaron Rey Jacalan', roles: ['VFX Artist', 'Environment Integration'], tone: 'olive' },
  { name: 'Jarold Mikel Banogon', roles: ['Music + SFX', 'Backend Developer'], tone: 'blue' },
  { name: 'Ruhmer Jairus Espina', roles: ['Project Lead', 'Backend Developer'], tone: 'red' },
  { name: 'Zendy Mariel Dy', roles: ['UI Design', 'Frontend Developer'], tone: 'green' },
  { name: 'Jhon Ryan Ledon', roles: ['3D + 2D Artist', 'Frontend Developer'], tone: 'tan' },
  { name: 'Lance Vincente Salera', roles: ['Coach'], tone: 'blue' },
]

export default function Team() {
  return (
    <section className="section" id="team">
      <h2 className="section__title">The Interns</h2>
      <p className="tag">
        <span className="tag__label">Honed at</span> Cebu Institute of Technology – University
      </p>
      <ul className="pennants">
        {TEAM.map((m) => (
          <li className={`pennant pennant--${m.tone}`} key={m.name}>
            <svg className="pennant__stitch" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon className="pennant__edge" points="0.5,0.5 99.5,0.5 99.5,87 50,99.5 0.5,87" />
              <polygon className="pennant__dash" points="7,4.5 93,4.5 93,84 50,94.5 7,84" />
            </svg>
            <h3>{m.name}</h3>
            <ul>
              {m.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <figure className="finalist">
        <img
          src={banner}
          alt="Takyan X by The Interns, Level Up 3.0 Esports Game Dev Challenge finalist, student category"
          loading="lazy"
        />
        <figcaption>
          Finalist, Level Up 3.0 Esports Game Dev Challenge (Student Category)
        </figcaption>
      </figure>
    </section>
  )
}
