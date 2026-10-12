import { Link } from 'react-router'
import { ArrowDownRight, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import profilePhoto from '../assets/photo-profile.png'

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="editorial-section hero-section"
    >
      <div className="container-page">
        <div className="hero-grid">
          <p className="eyebrow hero-meta">
            <span>DAP / Portfolio</span> <span>01 — Introduction</span>
          </p>
          <div className="hero-copy">
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1 id="hero-title" className="hero-title">
              Daffa <span>Andhika</span> Pratama
            </h1>
            <p className="hero-role">Informatics Student &amp; IT Enthusiast</p>
            <p className="availability">
              <span className="availability-mark" aria-hidden="true" />
              Open to IT Internship Opportunities
            </p>
            <p className="hero-description">
              Exploring web development, software development, mobile applications, and game development.
            </p>
            <div className="hero-actions">
              <Link to="/#projects" className="editorial-link editorial-link-primary">
                Explore selected work <ArrowDownRight aria-hidden="true" />
              </Link>
              <Link to="/#contact" className="editorial-link">
                <Mail aria-hidden="true" /> Contact
              </Link>
            </div>
          </div>

          <motion.figure
            className="hero-photo-frame"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <img
              className="hero-photo"
              src={profilePhoto}
              alt="Daffa Andhika Pratama"
              fetchPriority="high"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
