import logo from '../assets/img/logo-new.webp'
import takyan from '../assets/img/takyan-blue.webp'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__takyan" src={takyan} alt="" aria-hidden="true" />
      <div className="hero__inner">
        <img className="hero__logo" src={logo} alt="Takyan X" />
        <h1 className="hero__title">Don’t let the takyan drop.</h1>
        <p className="hero__tag">
          A 3D street-court take on the Filipino kick-game. Juggle solo for a
          personal best, or take on a rival over your local network.
        </p>
        <div className="hero__cta">
          <a className="btn btn--play" href="#download">
            Get the game
          </a>
          <a className="btn btn--cream" href="#in-game">
            See it in action
          </a>
        </div>
        <ul className="chips" aria-label="Highlights">
          <li>3D physics kicking</li>
          <li>Local LAN multiplayer</li>
          <li>Android + PC</li>
        </ul>
      </div>
    </section>
  )
}
