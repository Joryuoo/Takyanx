import pierre from '../assets/img/pierre-famador.webp'

const PIERRE_URL = 'https://cargocollective.com/pierrefamador'

// Wording follows the in-game Special Thanks credits page.
export default function Thanks() {
  return (
    <section className="section" id="thanks">
      <h2 className="section__title">Special thanks</h2>
      <div className="thanks">
        <figure className="thanks__photo">
          <img src={pierre} alt="Pierre Famador II in his art studio" loading="lazy" />
          <figcaption>IG: P.FAMADOR</figcaption>
        </figure>
        <div className="thanks__text">
          <p className="thanks__name">
            <a href={PIERRE_URL} target="_blank" rel="noreferrer noopener">
              Pierre Famador
            </a>
          </p>
          <p>
            We sincerely thank Mr.{' '}
            <a href={PIERRE_URL} target="_blank" rel="noreferrer noopener">
              Pierre Famador II
            </a>{' '}
            for allowing us to draw
            inspiration from his distinctive art style in developing the visual
            direction of our game.
          </p>
        </div>
      </div>
    </section>
  )
}
