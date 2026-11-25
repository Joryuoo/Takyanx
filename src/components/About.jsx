const FEATURES = [
  {
    title: 'What is takyan?',
    body: 'The traditional Filipino kick-game, similar to hacky sack or shuttlecock kicking.',
  },
  {
    title: '3D physics kicks',
    body: 'Physics-based kicking and movement, in full 3D.',
  },
  {
    title: 'Multiplayer rooms',
    body: 'Host a room and share its code, or join one from the room list. Play 1v1, or Rambol with up to 5 players.',
  },
  {
    title: 'A street-court arena',
    body: 'Play on a basketball court in a neighborhood street, with jeepneys, graffiti walls and shanty houses around you.',
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
