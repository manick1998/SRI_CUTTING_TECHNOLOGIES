'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
        <span className="font-display text-lg font-bold leading-none">S</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[15px] font-bold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          SRI Cutting
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.2em] transition-colors',
            scrolled ? 'text-muted-foreground' : 'text-white/60',
          )}
        >
          Technologies
        </span>
      </span>
    </a>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo scrolled={scrolled} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                  : 'text-white/80 hover:bg-white/10 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              'flex items-center gap-2 text-sm font-semibold transition-colors',
              scrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/90 hover:text-white',
            )}
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden',
            scrolled ? 'border-border bg-card text-foreground' : 'border-white/20 bg-white/10 text-white',
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Get a Free Quote
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-semibold"
            >
              <Phone className="h-4 w-4 text-primary" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
