import { useEffect, useState } from 'react'
import rally from '../assets/gifs/rally.gif'
import juggle from '../assets/gifs/juggle-and-defend.gif'
import shagit from '../assets/gifs/shagit-skill-cast.gif'
import taghoy from '../assets/gifs/taghoy-skill-cast.gif'
import hit from '../assets/gifs/getting-hit.gif'
import showoff from '../assets/gifs/showoff-pasikat.gif'
import rallyStill from '../assets/img/clips/rally.webp'
import juggleStill from '../assets/img/clips/juggle-and-defend.webp'
import shagitStill from '../assets/img/clips/shagit-skill-cast.webp'
import taghoyStill from '../assets/img/clips/taghoy-skill-cast.webp'
import hitStill from '../assets/img/clips/getting-hit.webp'
import showoffStill from '../assets/img/clips/showoff-pasikat.webp'

// One clip plays at a time. `seconds` is the real length of each clip, used to move on to the
// next one. Captions are just the clip titles; nothing here claims more than the footage shows.
const CLIPS = [
  { gif: showoff, still: showoffStill, title: 'Show-off (Pasikat)', seconds: 7.8 },
  { gif: juggle, still: juggleStill, title: 'Juggle and defend', seconds: 29.3 },
  { gif: rally, still: rallyStill, title: 'Rally', seconds: 17.8 },
  { gif: shagit, still: shagitStill, title: 'Casting Shagit', seconds: 7.6 },
  { gif: taghoy, still: taghoyStill, title: 'Casting Taghoy (Panaghoy)', seconds: 5.8 },
  { gif: hit, still: hitStill, title: 'Getting hit by Shagit and Taghoy', seconds: 15.1 },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

export default function Clips() {
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()
  const clip = CLIPS[index]

  // Move to the next clip when this one has played once. Picking a thumbnail resets the timer.
  useEffect(() => {
    if (reduced) return undefined
    const id = setTimeout(() => setIndex((i) => (i + 1) % CLIPS.length), clip.seconds * 1000)
    return () => clearTimeout(id)
  }, [index, clip.seconds, reduced])

  return (
    <section className="section" id="clips">
      <h2 className="section__title">See it in action</h2>
      <p className="section__lead">Pick a clip, or just watch: they play one after another.</p>

      <div className="stage" aria-live="polite">
        <div className="stage__frame">
          {reduced ? (
            <img src={clip.still} alt={`Gameplay clip: ${clip.title}`} />
          ) : (
            // The key remounts the image so the GIF starts from its first frame.
            <img key={index} src={clip.gif} alt={`Gameplay clip: ${clip.title}`} draggable="false" />
          )}
          {!reduced && (
            <span className="stage__bar" key={`bar-${index}`} style={{ animationDuration: `${clip.seconds}s` }} />
          )}
        </div>
        <p className="stage__title">
          <span className="stage__count">
            {index + 1} / {CLIPS.length}
          </span>{' '}
          {clip.title}
        </p>
      </div>

      <ul className="thumbs">
        {CLIPS.map((c, i) => (
          <li key={c.title}>
            <button
              type="button"
              className={`thumb${i === index ? ' thumb--on' : ''}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <img src={c.still} alt="" loading="lazy" />
              <span>{c.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
