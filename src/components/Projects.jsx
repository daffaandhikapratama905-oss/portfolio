import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../data/projects'

const allProjects = [...featuredProjects, ...otherProjects]

function ProjectCard({ project, lead = false }) {
  return (
    <article className={`project-card${lead ? ' project-card-lead' : ''}`}>
      <div className="project-card-meta">
        <span>{project.category}</span>
        {project.type && <span>{project.type}</span>}
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      {project.role && <p className="project-card-role">Role / <span>{project.role}</span></p>}
      <ul aria-label={`${project.title} technologies`} className="editorial-chip-list project-tech-list">
        {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <Link to={`/projects/${project.slug}`} className="editorial-link project-card-link">
        View project <ArrowRight aria-hidden="true" />
      </Link>
    </article>
  )
}

function ProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = allProjects[activeIndex]
  const move = (direction) => {
    setActiveIndex((current) => (current + direction + allProjects.length) % allProjects.length)
  }

  return (
    <>
      <div className="project-deck-topline">
        <p className="eyebrow">{project.featured ? 'Featured project' : 'Other project'}</p>
        <p className="project-count" aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(allProjects.length).padStart(2, '0')}
        </p>
      </div>
      <ProjectCard project={project} lead={project.featured && activeIndex === 0} />
      <div className="project-deck-controls" aria-label="Project navigation">
        <button type="button" onClick={() => move(-1)} aria-label="Previous project">
          <ArrowLeft aria-hidden="true" />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next project">
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </>
  )
}

function ProjectList() {
  return (
    <>
      <section className="project-group" aria-labelledby="featured-projects-title">
        <h3 id="featured-projects-title" className="eyebrow project-group-title">Selected projects / 01—03</h3>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} lead={index === 0} />
          ))}
        </div>
      </section>
      <section className="project-group" aria-labelledby="other-projects-title">
        <h3 id="other-projects-title" className="eyebrow project-group-title">Additional work / 04—05</h3>
        <div className="project-grid project-grid-secondary">
          {otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </>
  )
}

function Projects({ deck = false }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="editorial-section projects-section">
      <div className="container-page">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="eyebrow">04 — Selected work</p>
            <h2 id="projects-title" className="section-title">Projects</h2>
          </div>
          <p className="section-intro">
            A selection of academic, competition, and personal projects.
          </p>
        </div>
        {deck ? <ProjectDeck /> : <ProjectList />}
      </div>
    </section>
  )
}

export default Projects
