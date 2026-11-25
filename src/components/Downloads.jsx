import { DOWNLOADS } from '../config'

export default function Downloads() {
  return (
    <section className="section" id="download">
      <h2 className="section__title">Download</h2>
      <p className="section__lead">
        Free to play. Everyone in the match needs the game installed and to be
        on the same local network.
      </p>
      <div className="cards">
        {Object.entries(DOWNLOADS).map(([key, d]) => (
          <article className="card" key={key}>
            <h3>{d.label}</h3>
            <p className="card__meta">
              {d.file} · {d.size}
            </p>
            <p className="card__note">{d.note}</p>
            <a className="btn btn--primary" href={d.url} download>
              Download for {d.label}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
