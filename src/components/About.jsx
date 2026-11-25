const FEATURES = [
  {
    title: 'What is takyan?',
    body: 'A traditional Filipino street game: keep a feathered, weighted shuttle in the air using only your feet. Think hacky sack meets shuttlecock.',
  },
  {
    title: '3D physics kicks',
    body: 'Charge, jump and time every kick. Physics-based movement makes each rally feel different.',
  },
  {
    title: 'Local LAN multiplayer',
    body: 'Host a room or join one with the host’s code. No servers, no accounts, just the same Wi-Fi.',
  },
  {
    title: 'Made in the Philippines',
    body: 'Jeepneys, tricycles, slums and basketball courts — the neighborhood is the arena.',
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About the game</h2>
      <div className="features">
        {FEATURES.map((f) => (
          <article className="feature" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
