import pierre from '../assets/img/pierre-famador.webp'

// Wording follows the in-game Special Thanks credits page.
export default function Thanks() {
  return (
    <section className="section" id="thanks">
      <div className="thanks">
        <h2 className="thanks__title">Special thanks</h2>
        <figure className="thanks__photo">
          <img src={pierre} alt="Pierre Famador II in his art studio" loading="lazy" />
          <figcaption>IG: P.FAMADOR</figcaption>
        </figure>
        <div className="thanks__text">
          <p className="thanks__name">Pierre Famador</p>
          <p>
            We sincerely thank Mr. Pierre Famador II for allowing us to draw
            inspiration from his distinctive art style in developing the visual
            direction of our game.
          </p>
        </div>
      </div>
    </section>
  )
}
