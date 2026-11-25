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
          <article className="panel panel--narrow" key={key}>
            <header className="panel__head">
              <h3>{d.label}</h3>
            </header>
            <div className="panel__body">
              <p className="card__meta">
                {d.file} · {d.size}
              </p>
              <p className="card__note">{d.note}</p>
              <a
                className="btn btn--play"
                href={d.url}
                target="_blank"
                rel="noreferrer"
              >
                Download from Drive
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
