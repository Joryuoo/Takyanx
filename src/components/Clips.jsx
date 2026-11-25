import rally from '../assets/gifs/rally.gif'
import juggle from '../assets/gifs/juggle-and-defend.gif'
import shagit from '../assets/gifs/shagit-skill-cast.gif'
import taghoy from '../assets/gifs/taghoy-skill-cast.gif'
import hit from '../assets/gifs/getting-hit.gif'
import showoff from '../assets/gifs/showoff-pasikat.gif'

// Short gameplay captures. Captions are just the clip titles; nothing here claims more than
// the footage shows.
const CLIPS = [
  { src: rally, title: 'Rally' },
  { src: juggle, title: 'Juggle and defend' },
  { src: shagit, title: 'Casting Shagit' },
  { src: taghoy, title: 'Casting Taghoy (Panaghoy)' },
  { src: hit, title: 'Getting hit by Shagit and Taghoy' },
  { src: showoff, title: 'Show-off (Pasikat)' },
]

export default function Clips() {
  return (
    <section className="section" id="clips">
      <h2 className="section__title">See it in action</h2>
      <p className="section__lead">Short clips straight from the game.</p>
      <div className="clips">
        {CLIPS.map((c) => (
          <figure className="shot" key={c.title}>
            <img src={c.src} alt={`Gameplay clip: ${c.title}`} loading="lazy" />
            <figcaption>{c.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
