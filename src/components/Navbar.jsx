import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Menu mengikuti wireframe di docs/04_TECH_ARCHITECTURE.md
const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

// Section dianggap aktif jika bagian atasnya sudah melewati garis ini (px dari atas viewport)
const ACTIVE_OFFSET = 120

/** true jika halaman sudah di-scroll sedikit (untuk background/blur navbar) */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    const frame = requestAnimationFrame(update)
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
    }
  }, [threshold])

  return scrolled
}

/** id section yang sedang aktif di Home (null jika belum ada / di atas section pertama) */
function useActiveSection(enabled) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!enabled) return undefined

    let frame = 0

    const compute = () => {
      frame = 0

      const existing = SECTION_IDS.filter((id) => document.getElementById(id))
      let current = null

      for (const id of existing) {
        const top = document.getElementById(id).getBoundingClientRect().top
        if (top <= ACTIVE_OFFSET) current = id
      }

      // Section terakhir bisa terlalu pendek untuk mencapai garis aktif
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      if (atBottom && existing.length > 0) {
        current = existing[existing.length - 1]
      }

      setActiveId(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }

    frame = requestAnimationFrame(compute)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled])

  return enabled ? activeId : null
}

function Navbar() {
  const { pathname, key } = useLocation()
  const reduceMotion = useReducedMotion()
  const headerRef = useRef(null)
  const buttonRef = useRef(null)

  // Menu dianggap terbuka hanya untuk location.key tempat ia dibuka.
  // Setiap navigasi mengubah key, sehingga menu otomatis tertutup.
  const [openKey, setOpenKey] = useState(null)
  const isOpen = openKey === key

  const scrolled = useScrolled()
  const isHome = pathname === '/'
  const sectionActive = useActiveSection(isHome)

  // Di Home: ikuti section yang terlihat. Di halaman project: tandai "Projects".
  const activeId = isHome
    ? sectionActive
    : pathname.startsWith('/projects/')
      ? 'projects'
      : null

  const isProjectDetail = pathname.startsWith('/projects/')
  const closeMenu = () => setOpenKey(null)

  // Tutup menu jika layar membesar ke breakpoint desktop (md = 48rem = 768px)
  useEffect(() => {
    const query = window.matchMedia('(min-width: 48rem)')
    const onChange = (event) => {
      if (event.matches) setOpenKey(null)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // Escape menutup menu (fokus kembali ke tombol), klik di luar navbar juga menutup
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenKey(null)
        buttonRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenKey(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isOpen])

  const showBackground = scrolled || isOpen

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        showBackground
          ? 'border-line bg-background/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="rounded-md font-heading text-lg font-bold tracking-wide text-foreground transition-colors hover:text-accent-hover"
          >
            DAFFA
          </Link>

          {/* Desktop / tablet navigation */}
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <Link
                      to={`/#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-indicator"
                          initial={false}
                          className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent"
                          transition={
                            isProjectDetail
                              ? { duration: 0 }
                              : {
                                  type: 'tween',
                                  duration: 0.35,
                                  ease: 'easeOut',
                                }
                          }
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpenKey(isOpen ? null : key)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-foreground transition-colors hover:border-accent md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile expandable menu */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="overflow-hidden md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            >
              <nav aria-label="Mobile" className="pb-4 pt-1">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeId === item.id
                    return (
                      <li key={item.id}>
                        <Link
                          to={`/#${item.id}`}
                          onClick={closeMenu}
                          aria-current={isActive ? 'true' : undefined}
                          className={`flex min-h-12 items-center gap-3 rounded-lg px-3 text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-card text-foreground'
                              : 'text-muted hover:bg-surface hover:text-foreground'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-5 w-0.5 rounded-full ${
                              isActive ? 'bg-accent' : 'bg-transparent'
                            }`}
                          />
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar