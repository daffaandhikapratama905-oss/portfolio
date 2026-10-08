import { Link } from 'react-router'
import { ArrowRight, Mail } from 'lucide-react'

/**
 * Hero visual PLACEHOLDER (abstrak, dekoratif).
 * Keputusan final hero visual masih OPEN (foto / avatar / visual abstrak).
 * Ini bukan foto, bukan screenshot, dan tidak merepresentasikan project apa pun.
 * Jika nanti diganti foto/ilustrasi, ganti komponen ini saja.
 */
function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full min-w-0 max-w-xs justify-self-center overflow-hidden rounded-card border border-line bg-surface sm:max-w-sm lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-md lg:self-center lg:justify-self-end"
    >
      {/* Glow lembut (rgb 59 130 246 = token accent #3B82F6) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgb(59 130 246 / 0.18), transparent 62%)',
        }}
      />

      {/* Grid halus yang memudar ke tepi */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(circle at 50% 50%, black 25%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 50%, black 25%, transparent 75%)',
        }}
      />

      {/* Cincin dan node abstrak */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        {/* Cincin */}
        <circle cx="200" cy="200" r="60" className="fill-none stroke-line" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" className="fill-none stroke-line" strokeWidth="1" />
        <circle
          cx="200"
          cy="200"
          r="160"
          className="fill-none stroke-line"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Garis dari pusat ke node */}
        <line x1="200" y1="200" x2="270.7" y2="115.7" className="stroke-accent/40" strokeWidth="1" />
        <line x1="200" y1="200" x2="350.4" y2="254.7" className="stroke-accent/40" strokeWidth="1" />
        <line x1="200" y1="200" x2="104.7" y2="255" className="stroke-accent/40" strokeWidth="1" />
        <line x1="200" y1="200" x2="108.2" y2="68.9" className="stroke-accent/40" strokeWidth="1" />

        {/* Titik tekstur kecil */}
        <circle cx="318" cy="72" r="2" className="fill-muted/50" />
        <circle cx="62" cy="318" r="2" className="fill-muted/50" />
        <circle cx="336" cy="336" r="2" className="fill-muted/50" />
        <circle cx="66" cy="160" r="2" className="fill-muted/50" />

        {/* Node */}
        <circle cx="270.7" cy="115.7" r="6" className="fill-card stroke-accent" strokeWidth="1.5" />
        <circle cx="350.4" cy="254.7" r="6" className="fill-card stroke-accent" strokeWidth="1.5" />
        <circle cx="104.7" cy="255" r="6" className="fill-card stroke-accent" strokeWidth="1.5" />
        <circle cx="108.2" cy="68.9" r="6" className="fill-card stroke-accent" strokeWidth="1.5" />

        {/* Pusat */}
        <circle cx="200" cy="200" r="28" className="fill-accent/15 stroke-accent" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6" className="fill-accent" />
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="py-14 sm:py-20 lg:py-24">
      <div className="container-page">
        {/*
          Mobile (1 kolom): teks → visual → tombol (sesuai wireframe mobile).
          Desktop (lg+): 2 kolom; teks + tombol di kiri, visual di kanan.
        */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
          {/* Teks */}
          <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            {/* Availability — wording final: TBD */}
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-accent"
              />
              Open to IT Internship Opportunities
            </p>

            <p className="mt-6 text-base font-medium text-muted sm:text-lg">
              Hi, I&apos;m
            </p>
            <h1
              id="hero-title"
              className="mt-1 text-balance break-words text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl"
            >
              Daffa Andhika Pratama
            </h1>
            <p className="mt-4 font-heading text-lg font-medium text-accent-hover sm:text-xl lg:text-2xl">
              Informatics Student &amp; IT Enthusiast
            </p>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              Exploring web development, software development, mobile
              applications, and game development.
            </p>
          </div>

          {/* Visual abstrak (placeholder) */}
          <HeroVisual />

          {/* CTA */}
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-2 lg:self-start">
            <Link
              to="/#projects"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover sm:w-auto sm:text-base"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:bg-card sm:w-auto sm:text-base"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero