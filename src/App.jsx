import Nav from './components/Nav'
import Hero from './components/Hero'
import QrSection from './components/QrSection'
import Downloads from './components/Downloads'
import About from './components/About'
import Gallery from './components/Gallery'
import Characters from './components/Characters'
import Modes from './components/Modes'
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
        <About />
        <Characters />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </>
  )
}
