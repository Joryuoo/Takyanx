import cutout from '../assets/img/logo-cutout.webp'
import interns from '../assets/img/graffiti-interns.webp'
import { REPO_URL } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={cutout} alt="Takyan" className="footer__logo" />
      <img src={interns} alt="The Interns" className="footer__interns" />
      <p>Takyan X by The Interns · Cebu Institute of Technology – University</p>
      <p className="footer__small">
        <a href={REPO_URL} target="_blank" rel="noreferrer">
          Source on GitHub
        </a>
      </p>
    </footer>
  )
}
