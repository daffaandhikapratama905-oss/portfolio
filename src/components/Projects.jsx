import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../data/projects'

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-card p-6 transition-colors hover:border-accent">
      <div>
        <p className="text-sm font-medium text-accent">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          View project
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  )
}

function ProjectGroup({ title, items }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">What I built</p>

          <h2
            id="projects-title"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Projects
          </h2>

          <p className="mt-4 text-base text-muted sm:text-lg">
            A selection of academic, competition, and personal projects.
          </p>
        </div>

        <ProjectGroup title="Featured Projects" items={featuredProjects} />

        <ProjectGroup title="Other Projects" items={otherProjects} />
      </div>
    </section>
  )
}

export default Projects