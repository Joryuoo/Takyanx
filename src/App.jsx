import Nav from './components/Nav'
import Hero from './components/Hero'
import QrSection from './components/QrSection'
import Downloads from './components/Downloads'
import About from './components/About'
import Gallery from './components/Gallery'
import Clips from './components/Clips'
import Modes from './components/Modes'
import Skills from './components/Skills'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QrSection />
        <Downloads />
        <Modes />
        <Skills />
        <About />
        <Gallery />
        <Clips />
        <Team />
      </main>
      <Footer />
    </>
  )
}
