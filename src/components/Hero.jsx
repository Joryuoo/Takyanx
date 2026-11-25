import logo from '../assets/img/logo-new.webp'
import takyan from '../assets/img/takyan-blue.webp'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__takyan" src={takyan} alt="" aria-hidden="true" />
      <div className="hero__inner">
        <img className="hero__logo" src={logo} alt="Takyan X" />
        <h1 className="hero__title">Make room for a rival.</h1>
        <p className="hero__tag">
          A 3D take on the Filipino kick-game. Play solo, or host a room for
          friends on your local network.
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
