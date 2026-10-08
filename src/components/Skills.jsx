import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Programming',
    items: ['PHP', 'JavaScript', 'Python', 'C#'],
  },
  {
    title: 'Web',
    items: [
      'HTML',
      'CSS',
      'Laravel',
      'Blade',
      'Bootstrap',
      'SCSS',
      'Ionic Angular',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
  {
    title: 'Game',
    items: ['Unity', 'Game Development'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Android Studio'],
  },
  {
    title: 'Design',
    items: ['Aseprite', 'Pixel Studio', 'Affinity'],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-line py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium text-accent">What I use</p>

          <h2
            id="skills-title"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Technologies, tools, and areas I have worked with across academic,
            personal, and project-based work.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-card border border-line bg-card p-5"
              >
                <h3 className="font-heading text-lg font-semibold">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills