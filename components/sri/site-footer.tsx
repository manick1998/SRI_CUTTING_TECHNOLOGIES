import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { navLinks, site } from '@/lib/site'
import { getService } from '@/lib/services-data'

const footerServiceSlugs = [
  'concrete-core-cutting',
  'wall-saw-cutting',
  'wire-saw-cutting',
  'rcc-cutting',
  'controlled-demolition',
  'industrial-demolition',
]

export function SiteFooter() {
  const footerServices = footerServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a
              href="/"
              aria-label={`${site.name} home`}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3.5 shadow-lift ring-1 ring-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <Image
                src="/images/real/logo.jpeg"
                alt="SRI Cutting Technologies"
                width={563}
                height={297}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Concrete cutting and controlled demolition services for residential, commercial and industrial requirements.
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
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="text-white/60 transition-colors hover:text-primary">
                    {s.title}
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
              <li>
                <a href={site.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 hover:text-primary">
                  <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Instagram @siva.lingam.923519</span>
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={site.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-primary">
              <InstagramIcon className="h-4 w-4 text-primary" />
              <span>Follow on Instagram</span>
            </a>
            <span className="hidden sm:inline">&middot;</span>
            <p>Precision Concrete Cutting &middot; Controlled Demolition</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
