import championSlide from '../assets/img/press/champion-slide.webp'
import championPoster from '../assets/img/press/champion-poster.webp'
import teamEvent from '../assets/img/press/team-event.webp'
import nationalRep from '../assets/img/press/national-rep.webp'
import boothMenu from '../assets/img/press/booth-menu.webp'
import boothVisitor from '../assets/img/press/booth-visitor.webp'
import iconShowcase from '../assets/img/press/icon-showcase.webp'

// Captions only say what each photo shows or what its own graphic says.
const PHOTOS = [
  {
    src: championSlide,
    alt: 'A slide reading Takyan X by The Interns, Next Level: Esports Game Dev Challenge, Grand Champion',
    caption: 'Takyan X by The Interns: Grand Champion of the Next Level: Esports Game Dev Challenge',
  },
  {
    src: championPoster,
    alt: 'The Takyan X team holding a Grand Winner prize check of 25,000 pesos and the Takyan X poster, on a Takyan X Champion graphic',
    caption: 'The team with the Grand Winner prize and the Takyan X poster',
  },
  {
    src: teamEvent,
    alt: 'The team and guests standing together at the event in matching event shirts',
    caption: 'At the event with DOST Central Visayas',
  },
  {
    src: nationalRep,
    alt: 'A group on stage in front of the Level Up 3.0 screen, with a headline graphic dated November 27, 2026',
    caption: 'CIT-University once again represents Central Visayas in the national game development challenge (November 27, 2026)',
  },
  {
    src: boothMenu,
    alt: 'A tablet on a table showing the Takyan X main menu with Play, Credits, Settings and Quit',
    caption: 'Takyan X on a tablet at the exhibit booth',
  },
  {
    src: boothVisitor,
    alt: 'A visitor playing Takyan X on a tablet at the exhibit, with the Takyan banner in the background',
    caption: 'Visitors trying the game at the exhibit',
  },
  {
    src: iconShowcase,
    alt: 'Imaginators Convention 2026 graphic of The Interns, showing the Takyan X poster with a takyan and a boy kicking it, Sipa!',
    caption: 'The Interns at Imaginators Convention 2026',
  },
]

// Only the Manila Times page was read in full. The Cebu Daily News headline comes from its link
// (the site refused my request), and the blog entry is shown by its page title. The Facebook
// entries are described from screenshots of the posts.
const LINKS = [
  {
    outlet: 'The Manila Times',
    title: 'Students vie for C. Visayas’ best e-sports game dev challenge',
    date: 'July 22, 2026',
    note: 'Reports on the Central Visayas finalists, including Takyan X by CIT-U’s The Interns.',
    url: 'https://www.manilatimes.net/2026/07/22/tmt-newswire/students-vie-for-c-visayas-best-e-sports-game-dev-challenge/2388169',
  },
  {
    outlet: 'Cebu Daily News',
    title: 'CIT-U opens doors for game developers and creatives at ICON 2026',
    url: 'https://cebudailynews.inquirer.net/766756/cit-u-opens-doors-for-game-developers-and-creatives-at-icon-2026',
  },
  {
    outlet: 'Cebu Upcoming Events',
    title: 'Imaginators Convention (ICon) 2026',
    url: 'https://cebu-upcomingeventscebu.blogspot.com/2026/09/blog-post_145.html',
  },
  {
    outlet: 'Facebook · DOST Central Visayas',
    title: 'Relive the good old days of playing “Takyan”',
    note: 'On Takyan X and the young developers from CIT-University representing Central Visayas at Level Up 3.0 during NSTW 2026.',
    url: 'https://www.facebook.com/share/p/1JDv4Vh5DA/',
  },
  {
    outlet: 'Facebook · Wildcats PlayLab',
    title: 'Taking the schoolyard classic straight to the digital arena!',
    date: 'September 13',
    url: 'https://www.facebook.com/watch/?v=1447037280688478',
  },
  {
    outlet: 'Instagram · Wildcats PlayLab',
    title: 'GAMEDEV SHOWCASE | Takyan X by The Interns',
    date: 'September 5',
    note: 'Introduces Takyan X and its student developers.',
    url: 'https://www.instagram.com/p/Dc4WEJUAZPQ/',
  },
  {
    outlet: 'Facebook · The Minkay Life',
    title: 'Cebu’s gaming & creative scene is leveling up',
    date: 'September 12',
    note: 'A visitor’s write-up of ICon 2026 at SM Seaside City Cebu, with Takyan X among the student games.',
    url: 'https://www.facebook.com/share/p/1Gur44nD1g/',
  },
]

export default function Press() {
  return (
    <section className="section press" id="press">
      <a className="press__back" href="#top">
        ← Back to the game
      </a>
      <h1 className="section__title">Press &amp; events</h1>
      <p className="section__lead">
        Takyan X by The Interns was named Grand Champion of the Next Level: Esports Game Dev Challenge.
      </p>

      <h2 className="press__heading">Photos</h2>
      <div className="press-grid">
        {PHOTOS.map((p) => (
          <figure className="shot" key={p.caption}>
            <img src={p.src} alt={p.alt} loading="lazy" />
            <figcaption>
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <h2 className="press__heading">Links</h2>
      <article className="panel press__links">
        <div className="panel__body">
          <ul className="press-list">
            {LINKS.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noreferrer noopener">
                  <span className="press-list__outlet">{l.outlet}</span>
                  <span className="press-list__title">{l.title}</span>
                  {l.date && <span className="press-list__date">{l.date}</span>}
                  {l.note && <span className="press-list__note">{l.note}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}
