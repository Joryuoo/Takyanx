import banner from '../assets/img/finalist-banner.webp'
import levelup from '../assets/img/graffiti-levelup.webp'
import wildcats from '../assets/img/graffiti-wildcats.webp'
import dost from '../assets/img/graffiti-dost.webp'

const TAGS = [
  { src: levelup, alt: 'Level Up graffiti tag' },
  { src: wildcats, alt: 'Wildcats graffiti tag' },
  { src: dost, alt: 'DOST graffiti tag' },
]

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <h2 className="section__title">Street art from the game</h2>
      <p className="section__lead">
        Takyan X ships with hand-painted graffiti and a cardboard-and-crayon look.
      </p>
      <div className="gallery">
        {TAGS.map((t) => (
          <img key={t.alt} src={t.src} alt={t.alt} loading="lazy" />
        ))}
      </div>
      <figure className="finalist">
        <img
          src={banner}
          alt="Takyan X by The Interns, Level Up 3.0 Esports Game Dev Challenge finalist, student category"
          loading="lazy"
        />
        <figcaption>
          Finalist, Level Up 3.0 Esports Game Dev Challenge (Student Category)
        </figcaption>
      </figure>
    </section>
  )
}
