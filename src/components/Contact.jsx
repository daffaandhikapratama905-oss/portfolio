import profilePhoto from '../assets/photo-profile.png'

const CONTACT_LINKS = [
  { label: 'Email', value: 'daffaandhikapratama905@gmail.com', href: 'mailto:daffaandhikapratama905@gmail.com' },
  { label: 'GitHub', value: 'DaffaAndhikaPratama', href: 'https://github.com/DaffaAndhikaPratama' },
  { label: 'GitHub OSS', value: 'daffaandhikapratama905-oss', href: 'https://github.com/daffaandhikapratama905-oss' },
  { label: 'LinkedIn', value: 'Daffa Andhika Pratama', href: 'https://www.linkedin.com/in/daffa-andhika-pratama-93ab20437/' },
]

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="editorial-section contact-section">
      <div className="container-page">
        <div className="section-heading">
          <p className="eyebrow">05 — Conversation</p>
          <h2 id="contact-title" className="section-title">Contact</h2>
        </div>
        <div className="contact-layout">
          <p className="contact-copy">
            Feel free to reach out through email or connect with me on GitHub and LinkedIn.
          </p>
          <div className="contact-links-group">
            <ul className="contact-list">
              {CONTACT_LINKS.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="contact-link"
                  >
                    <span className="contact-link-index" aria-hidden="true">0{index + 1}</span>
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact-profile">
              <img
                className="contact-profile-photo"
                src={profilePhoto}
                alt="Daffa Andhika Pratama"
                loading="lazy"
              />
              <div className="contact-profile-copy">
                <p className="contact-profile-title">The person behind the records</p>
                <p className="contact-profile-details">
                  Informatics Engineering<br />Universitas Buana Perjuangan Karawang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
