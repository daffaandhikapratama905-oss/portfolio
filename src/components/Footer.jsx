import { Link } from 'react-router'

function Footer({ home = false }) {
  return (
    <footer className={`site-footer${home ? ' home-footer' : ' detail-footer'}`}>
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Daffa Andhika Pratama</p>
        <Link to="/#hero" className="footer-top-link">Back to top ↑</Link>
      </div>
    </footer>
  )
}

export default Footer
