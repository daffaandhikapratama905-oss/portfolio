import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const PANELS = [
  { id: 'hero', Component: Hero },
  { id: 'about', Component: About },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects },
  { id: 'contact', Component: Contact },
]

const DECK_QUERY = '(min-width: 64rem) and (min-height: 48rem)'

function useDesktopDeck() {
  const [isDeck, setIsDeck] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(DECK_QUERY).matches,
  )

  useEffect(() => {
    const query = window.matchMedia(DECK_QUERY)
    const update = (event) => setIsDeck(event.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isDeck
}

function Home() {
  const { hash } = useLocation()
  const reduceMotion = useReducedMotion()
  const isDeck = useDesktopDeck()
  const requestedPanel = hash.slice(1)
  const activePanel = PANELS.some(({ id }) => id === requestedPanel)
    ? requestedPanel
    : 'hero'
  const ActivePanel = PANELS.find(({ id }) => id === activePanel)?.Component ?? Hero

  if (!isDeck) {
    return (
      <main id="main-content" tabIndex="-1" className="home-page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    )
  }

  return (
    <main id="main-content" tabIndex="-1" className="home-deck home-page">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activePanel}
          className={`home-stage home-panel${activePanel === 'contact' ? ' home-panel--contact' : ''}`}
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: 'easeOut' }}
        >
          <ActivePanel deck />
          {activePanel === 'contact' && <Footer home />}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default Home
