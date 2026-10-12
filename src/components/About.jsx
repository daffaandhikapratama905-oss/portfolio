const ABOUT_PARAGRAPH =
  'Daffa is an Informatics student with practical experience from academic, competition, and personal projects. His projects cover web, full-stack systems, mobile applications, game development, and digital art.'

const PROJECT_BACKGROUNDS = ['Academic', 'Competition', 'Personal']
const PROJECT_AREAS = ['Web', 'Full-stack systems', 'Mobile applications', 'Game development', 'Digital art']

function ChipGroup({ id, title, items }) {
  return (
    <div className="editorial-chip-group">
      <h3 id={id} className="eyebrow">{title}</h3>
      <ul aria-labelledby={id} className="editorial-chip-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="editorial-section">
      <div className="container-page">
        <div className="section-heading">
          <p className="eyebrow">02 — Profile</p>
          <h2 id="about-title" className="section-title">About</h2>
        </div>
        <div className="about-layout">
          <p className="about-copy">{ABOUT_PARAGRAPH}</p>
          <div className="about-groups">
            <ChipGroup id="about-backgrounds" title="Project background" items={PROJECT_BACKGROUNDS} />
            <ChipGroup id="about-areas" title="Areas covered" items={PROJECT_AREAS} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
