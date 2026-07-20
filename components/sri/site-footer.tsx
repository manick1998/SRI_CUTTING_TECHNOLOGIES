import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

const serviceLinks = [
  'Concrete Core Cutting',
  'Wall Saw Cutting',
  'Wire Saw Cutting',
  'RCC Cutting',
  'Controlled Demolition',
  'Industrial Demolition',
]

export function SiteFooter() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-display text-lg font-bold leading-none">S</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold">SRI Cutting</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Technologies
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              India&apos;s trusted concrete cutting and controlled demolition specialists.
              Precision, safety and zero-damage engineering on every project.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 text-white/60 hover:text-primary">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-start gap-3 text-white/60 hover:text-primary">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Precision Concrete Cutting &middot; Controlled Demolition &middot; Made in India</p>
        </div>
      </div>
    </footer>
  )
}
