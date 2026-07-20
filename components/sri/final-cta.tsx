import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-grid opacity-[0.15] mix-blend-overlay" />
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-5xl">
                Ready to cut with precision and total confidence?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                Get a free, no-obligation site assessment and fixed quote from India&apos;s trusted
                concrete cutting specialists.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-steel px-7 py-3.5 text-sm font-semibold text-steel-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Request Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/15 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/15 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
