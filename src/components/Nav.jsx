export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        <img src="/favicon.png" alt="" width="36" height="36" />
        <span>Takyan X</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#download">Download</a>
        <a href="#clips">See it in action</a>
      </nav>
    </header>
  )
}
