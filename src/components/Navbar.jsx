import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Braces,
  FolderKanban,
  House,
  Mail,
  Menu,
  UserRound,
  X,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', id: 'hero', Icon: House },
  { label: 'About', id: 'about', Icon: UserRound },
  { label: 'Skills', id: 'skills', Icon: Braces },
  { label: 'Projects', id: 'projects', Icon: FolderKanban },
  { label: 'Contact', id: 'contact', Icon: Mail },
]

function useActiveSection(enabled) {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    if (!enabled) return undefined
    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [enabled])

  return activeId
}

function NavLinks({ activeId, onNavigate, variant = 'row' }) {
  return (
    <ul className={variant === 'rail' ? 'nav-rail-links' : 'nav-row-links'}>
      {NAV_ITEMS.map(({ label, id, Icon }) => {
        const active = activeId === id
        return (
          <li key={id}>
            <Link
              to={`/#${id}`}
              onClick={onNavigate}
              aria-label={label}
              aria-current={active ? 'location' : undefined}
              title={variant === 'rail' ? label : undefined}
              className={`nav-link${active ? ' is-active' : ''}`}
            >
              {variant === 'rail' ? (
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
              ) : (
                label
              )}
              {variant === 'rail' && <span className="sr-only">{label}</span>}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function Navbar() {
  const { pathname, hash, key } = useLocation()
  const reduceMotion = useReducedMotion()
  const headerRef = useRef(null)
  const buttonRef = useRef(null)
  const [openKey, setOpenKey] = useState(null)
  const isOpen = openKey === key
  const isHome = pathname === '/'
  const observedSection = useActiveSection(isHome)
  const hashSection = hash.slice(1)
  const activeId = isHome
    ? NAV_ITEMS.some(({ id }) => id === hashSection)
      ? hashSection
      : observedSection
    : pathname.startsWith('/projects/')
      ? 'projects'
      : 'hero'
  const closeMenu = () => setOpenKey(null)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 48rem)')
    const onChange = (event) => {
      if (event.matches) setOpenKey(null)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenKey(null)
        buttonRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isOpen])

  return (
    <>
      <aside className="desktop-rail" aria-label="Portfolio navigation">
        <Link to="/#hero" className="rail-mark" aria-label="Daffa, home">
          D<span>.</span>
        </Link>
        <nav aria-label="Primary">
          <NavLinks activeId={activeId} variant="rail" />
        </nav>
        <span className="rail-index" aria-hidden="true">DAP / 01</span>
      </aside>

      <header ref={headerRef} className="mobile-header">
        <div className="container-page mobile-header-inner">
          <Link to="/#hero" onClick={closeMenu} className="mobile-brand">
            D<span>.</span>
          </Link>

          <nav aria-label="Primary" className="tablet-nav">
            <NavLinks activeId={activeId} />
          </nav>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpenKey(isOpen ? null : key)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="menu-toggle"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <motion.div
          id="mobile-menu"
          className="mobile-menu"
          aria-hidden={!isOpen}
          inert={!isOpen}
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
        >
          <nav aria-label="Mobile">
            <NavLinks activeId={activeId} onNavigate={closeMenu} />
          </nav>
        </motion.div>
      </header>
    </>
  )
}

export default Navbar
