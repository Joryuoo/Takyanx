// Small pointer on the home page to the Press & events page.
export default function PressTeaser() {
  return (
    <section className="section" id="in-the-news">
      <article className="panel panel--teaser">
        <header className="panel__head">
          <h2>In the news</h2>
        </header>
        <div className="panel__body">
          <p>Takyan X by The Interns was named Grand Champion of the Next Level: Esports Game Dev Challenge.</p>
          <a className="btn btn--play" href="#/press">
            See press &amp; events
          </a>
        </div>
      </article>
    </section>
  )
}
