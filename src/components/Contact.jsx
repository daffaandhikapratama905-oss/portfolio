const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'daffaandhikapratama905@gmail.com',
    href: 'mailto:daffaandhikapratama905@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'DaffaAndhikaPratama',
    href: 'https://github.com/DaffaAndhikaPratama',
  },
  {
    label: 'GitHub OSS',
    value: 'daffaandhikapratama905-oss',
    href: 'https://github.com/daffaandhikapratama905-oss',
  },
  {
    label: 'LinkedIn',
    value: 'Daffa Andhika Pratama',
    href: 'https://www.linkedin.com/in/daffa-andhika-pratama-93ab20437/',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="min-w-0">
            <p className="text-sm font-medium text-accent">Get in touch</p>

            <h2
              id="contact-title"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Contact
            </h2>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              Feel free to reach out through email or connect with me on
              GitHub and LinkedIn.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noreferrer'
                  }
                  className="group min-w-0 rounded-card border border-line bg-card p-4 transition-colors hover:border-accent hover:bg-surface"
                >
                  <span className="block text-sm font-medium text-muted">
                    {link.label}
                  </span>

                  <span className="mt-1 block truncate text-sm font-semibold text-foreground">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact