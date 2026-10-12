const skillGroups = [
  { title: 'Programming', items: ['PHP', 'JavaScript', 'Python'] },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'Laravel', 'Blade', 'Bootstrap', 'SCSS', 'Ionic Angular', 'React', 'Tailwind CSS'],
  },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Game', items: ['Unity', 'Game Development'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Android Studio'] },
  { title: 'Design', items: ['Aseprite', 'Pixel Studio', 'Affinity'] },
]

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="editorial-section">
      <div className="container-page">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="eyebrow">03 — Toolkit</p>
            <h2 id="skills-title" className="section-title">Skills</h2>
          </div>
          <p className="section-intro">
            Technologies, tools, and areas used across academic, personal, and project-based work.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <section key={group.title} className="skill-group" aria-labelledby={`skill-group-${index}`}>
              <h3 id={`skill-group-${index}`} className="skill-group-title">
                <span aria-hidden="true">0{index + 1}</span>{group.title}
              </h3>
              <ul className="editorial-chip-list">
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
