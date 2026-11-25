import Nav from './components/Nav'
import Hero from './components/Hero'
import QrSection from './components/QrSection'
import Downloads from './components/Downloads'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QrSection />
        <Downloads />
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
