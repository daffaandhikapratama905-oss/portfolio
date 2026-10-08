import { Link, useParams } from 'react-router'

import { getProjectBySlug } from '../data/projects'

function DetailSection({ title, children }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function ChipList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="min-h-dvh py-12 sm:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-bold tracking-tight">
            Project not found
          </h1>

          <p className="mt-4 text-muted">
            No project matches &quot;{slug}&quot;.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:bg-card"
          >
            Back to home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-dvh py-12 sm:py-16 lg:py-20">
      <div className="container-page">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-accent-hover"
        >
          ← Back to home
        </Link>

        {/* Header */}
        <header className="mt-10 max-w-3xl">
          <p className="text-sm font-medium text-accent">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            <span>{project.role}</span>

            {project.type && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.type}</span>
              </>
            )}

            {project.context && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.context}</span>
              </>
            )}
          </div>

          {project.team && (
            <p className="mt-3 text-sm text-muted">
              Team of {project.team.size}
              {project.team.size === 1 ? ' · Individual project' : ''}
            </p>
          )}
        </header>

        {/* Description */}
        <div className="mt-10 max-w-3xl">
          <p className="text-lg leading-8 text-muted">
            {project.description}
          </p>
        </div>

        <div className="mt-12 max-w-4xl space-y-10">
          {/* Overview */}
          {project.overview && (
            <DetailSection title="Overview">
              <p className="leading-7 text-muted">{project.overview}</p>
            </DetailSection>
          )}

          {/* Technology */}
          {project.tech?.length > 0 && (
            <DetailSection title="Technology">
              <ChipList items={project.tech} />
            </DetailSection>
          )}

          {/* Technology groups */}
          {project.techGroups?.length > 0 && (
            <DetailSection title="Technology by area">
              <div className="space-y-6">
                {project.techGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-medium text-muted">
                      {group.label}
                    </h3>

                    <div className="mt-3">
                      <ChipList items={group.items} />
                    </div>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          {/* Features */}
          {project.features?.length > 0 && (
            <DetailSection title="Features">
              <div className="space-y-6">
                {project.features.map((feature) => (
                  <div key={feature.group}>
                    <h3 className="font-medium">
                      {feature.group}
                    </h3>

                    <ul className="mt-3 space-y-2 text-muted">
                      {feature.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          {/* Contributions */}
          {project.contributions?.length > 0 && (
            <DetailSection title="My contribution">
              <ul className="space-y-3 text-muted">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Architecture */}
          {project.architecture?.length > 0 && (
            <DetailSection title="Architecture">
              <ul className="space-y-3 text-muted">
                {project.architecture.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <DetailSection title="Challenges">
              <ul className="space-y-3 text-muted">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Problem solving */}
          {project.problemSolving?.length > 0 && (
            <DetailSection title="Problem solving">
              <ul className="space-y-3 text-muted">
                {project.problemSolving.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Development approach */}
          {project.developmentApproach?.length > 0 && (
            <DetailSection title="Development approach">
              <ul className="space-y-3 text-muted">
                {project.developmentApproach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* AI assistance */}
          {project.aiAssistance && (
            <DetailSection title="AI assistance">
              <div className="rounded-card border border-line bg-card p-5">
                {project.aiAssistance.tool && (
                  <p className="font-medium">
                    {project.aiAssistance.tool}
                  </p>
                )}

                {project.aiAssistance.note && (
                  <p className="mt-2 leading-7 text-muted">
                    {project.aiAssistance.note}
                  </p>
                )}
              </div>
            </DetailSection>
          )}

          {/* Known limitations */}
          {project.knownLimitations?.length > 0 && (
            <DetailSection title="Known limitations">
              <ul className="space-y-3 text-muted">
                {project.knownLimitations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Links */}
          {(project.links?.github ||
            project.links?.githubWeb ||
            project.links?.githubMobile ||
            project.links?.videoDemo ||
            project.links?.liveDemo) && (
            <DetailSection title="Links">
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                  >
                    GitHub
                  </a>
                )}

                {project.links.githubWeb && (
                  <a
                    href={project.links.githubWeb}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                  >
                    GitHub — Web
                  </a>
                )}

                {project.links.githubMobile && (
                  <a
                    href={project.links.githubMobile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                  >
                    GitHub — Ionic Mobile
                  </a>
                )}

                {project.links.videoDemo && (
                  <a
                    href={project.links.videoDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:bg-card"
                  >
                    Video Demo
                  </a>
                )}

                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:bg-card"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </DetailSection>
          )}
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail