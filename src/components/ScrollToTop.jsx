import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  const previousPathname = useRef(null)

  useEffect(() => {
    // Di halaman yang sama: ikuti scroll-behavior CSS (smooth, atau auto jika reduced motion).
    // Pindah halaman: langsung loncat tanpa animasi.
    const isSamePage = previousPathname.current === pathname
    previousPathname.current = pathname

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior: isSamePage ? 'auto' : 'instant' })
        return
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isSamePage ? 'auto' : 'instant',
    })
  }, [pathname, hash, key])

  return null
}

export default ScrollToTop