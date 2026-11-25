import { DOWNLOADS } from '../config'
import InstallApp from './InstallApp'

export default function Downloads() {
  return (
    <section className="section" id="download">
      <h2 className="section__title">Download</h2>
      <div className="cards">
        {Object.entries(DOWNLOADS).map(([key, d]) => (
          <article className={`panel panel--narrow panel--${key}`} key={key}>
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
      <InstallApp />
    </section>
  )
}
