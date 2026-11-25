export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        <img src="/favicon.png" alt="" width="36" height="36" />
        <span>Takyan X</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#scan">Scan</a>
        <a href="#download">Download</a>
        <a href="#modes">Modes</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#in-game">In game</a>
        <a href="#team">Team</a>
      </nav>
    </header>
  )
}
