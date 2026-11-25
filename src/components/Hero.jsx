import logo from '../assets/img/logo.webp'
import takyan from '../assets/img/takyan-blue.webp'
import city from '../assets/img/city.webp'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__city" src={city} alt="" aria-hidden="true" />
      <img className="hero__takyan" src={takyan} alt="" aria-hidden="true" />
      <div className="hero__inner">
        <img className="hero__logo" src={logo} alt="Takyan X" />
        <p className="hero__tag">
          The Filipino kick-game, in 3D. Grab your friends on the same Wi-Fi and
          keep the takyan in the air.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#download">
            Download the game
          </a>
          <a className="btn btn--ghost" href="#scan">
            Scan QR
          </a>
        </div>
        <ul className="chips" aria-label="Highlights">
          <li>3D physics kicking</li>
          <li>Local LAN multiplayer</li>
          <li>Android + Windows</li>
        </ul>
      </div>
    </section>
  )
}
