import { motion } from 'framer-motion'

/**
 * Isi About HANYA berasal dari core message di docs/03_DESIGN_SPEC.md:
 * "Daffa is an Informatics student with practical experience from academic,
 *  competition, and personal projects. His projects cover web, full-stack
 *  systems, mobile applications, game development, and digital art."
 *
 * Final paragraph: TBD. Teks di bawah adalah DRAFT dari core message tersebut.
 * Jangan menambah klaim (tahun, kampus, angka, skill level) yang tidak ada di dokumentasi.
 */
const ABOUT_PARAGRAPH =
  'Daffa is an Informatics student with practical experience from academic, competition, and personal projects. His projects cover web, full-stack systems, mobile applications, game development, and digital art.'

// Diambil langsung dari kalimat di atas
const PROJECT_BACKGROUNDS = ['Academic', 'Competition', 'Personal']

const PROJECT_AREAS = [
  'Web',
  'Full-stack systems',
  'Mobile applications',
  'Game development',
  'Digital art',
]

function ChipGroup({ id, title, items }) {
  return (
    <div>
      <h3 id={id} className="text-sm font-medium text-muted">
        {title}
      </h3>
      <ul aria-labelledby={id} className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <motion.div
          className="grid gap-8 lg:grid-cols-3 lg:gap-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Judul */}
          <div className="min-w-0 lg:col-span-1">
            <p className="text-sm font-medium text-accent">Who I am</p>
            <h2
              id="about-title"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              About
            </h2>
          </div>

          {/* Isi */}
          <div className="min-w-0 lg:col-span-2">
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              {ABOUT_PARAGRAPH}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ChipGroup
                id="about-backgrounds"
                title="Project background"
                items={PROJECT_BACKGROUNDS}
              />
              <ChipGroup
                id="about-areas"
                title="Areas covered"
                items={PROJECT_AREAS}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About