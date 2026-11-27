import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import QrSection from './components/QrSection'
import Downloads from './components/Downloads'
import HowTo from './components/HowTo'
import About from './components/About'
import Gallery from './components/Gallery'
import Clips from './components/Clips'
import Modes from './components/Modes'
import Skills from './components/Skills'
import Team from './components/Team'
import Thanks from './components/Thanks'
import PressTeaser from './components/PressTeaser'
import Press from './components/Press'
import Footer from './components/Footer'

// A tiny hash router: "#/press" is the Press & events page, every other hash is the home page
// (so the "#download" style links keep working). Hash routes need no server setup and work
// offline from the saved app shell.
const PRESS_HASH = '#/press'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const onPress = hash === PRESS_HASH

  useEffect(() => {
    document.title = onPress ? 'Press & events | Takyan X' : 'Takyan X | Download'
    if (onPress) {
      window.scrollTo(0, 0)
      return undefined
    }
    // Back on the home page: jump to the section the link pointed at. The browser tried this
    // before the home page was on screen again, so it has to be repeated here.
    const id = hash.replace(/^#/, '')
    if (!id) return undefined
    const jump = () => document.getElementById(id)?.scrollIntoView()
    jump()
    // Images above the section can still shift the layout just after the first jump, so repeat
    // once. (Timers rather than requestAnimationFrame: rAF never fires in a background tab.)
    const again = setTimeout(jump, 400)
    return () => clearTimeout(again)
  }, [onPress, hash])

  return (
    <>
      <Nav />
      <main>
        {onPress ? (
          <Press />
        ) : (
          <>
            <Hero />
            <QrSection />
            <Downloads />
            <HowTo />
            <Modes />
            <Skills />
            <About />
            <Gallery />
            <Clips />
            <Team />
            <Thanks />
            <PressTeaser />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
