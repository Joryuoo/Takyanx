import match from '../assets/img/screens/game-match.webp'
import mainMenu from '../assets/img/screens/game-main-menu.webp'
import modeMenu from '../assets/img/screens/game-mode-menu.webp'
import lobby from '../assets/img/screens/game-lobby.webp'
import createJoin from '../assets/img/screens/game-create-join.webp'
import createRoom from '../assets/img/screens/game-create-room.webp'
import settings from '../assets/img/screens/game-settings.webp'

// Real in-game screenshots. Captions only state what each screen shows.
const SHOTS = [
  {
    src: match,
    featured: true,
    alt: 'A 1v1 match on the street court: points on both sides, a timer, a Next Burak counter, a stamina bar and the Shagit and Taghoy skills',
    caption: 'In a match: points, timer, Next Burak, stamina and your two skills',
  },
  {
    src: mainMenu,
    alt: 'Main menu with Play, Credits, Settings and Quit',
    caption: 'Main menu',
  },
  {
    src: modeMenu,
    alt: 'Mode screen with Solo and Multiplayer',
    caption: 'Pick Solo or Multiplayer',
  },
  {
    src: lobby,
    alt: 'Lobby with boy and girl characters, outfit colors, a name field and Play, Vs Bot and Tutorial buttons',
    caption: 'Dress your player, then Play, Vs Bot or Tutorial',
  },
  {
    src: createJoin,
    alt: 'Create or Join screen for multiplayer',
    caption: 'Create a room or join one',
  },
  {
    src: createRoom,
    alt: 'Create Room screen with One vs One and Rambol modes, a room name, a room code and a players list',
    caption: 'Create a room: mode, name and room code',
  },
  {
    src: settings,
    alt: 'Settings screen with mouse sensitivity, auto kicker and height bar options',
    caption: 'Settings: mouse sensitivity, auto kicker, height bar',
  },
]

export default function Gallery() {
  return (
    <section className="section" id="in-game">
      <h2 className="section__title">In the game</h2>
      <p className="section__lead">Screenshots from the game itself.</p>
      <div className="shots">
        {SHOTS.map((s) => (
          <figure className={`shot${s.featured ? ' shot--featured' : ''}`} key={s.caption}>
            <img src={s.src} alt={s.alt} loading="lazy" />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
