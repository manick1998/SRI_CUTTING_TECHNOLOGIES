'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        'group flex items-center justify-center rounded-2xl bg-white px-3.5 py-2 ring-1 ring-black/10 transition-all duration-300 sm:px-4 sm:py-2.5',
        scrolled ? 'shadow-soft hover:shadow-lift hover:ring-primary/40' : 'shadow-lift hover:scale-[1.02]'
      )}
    >
      <Image
        src="/images/real/logo-mark.jpeg"
        alt="SRI Cutting Technologies"
        width={520}
        height={221}
        priority
        className="h-8 w-auto object-contain sm:h-11"
      />
    </a>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Ensure page navigation starts precisely at the top (`load agumpothu top of the pagela irukanum`)
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

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

  // Precision Top-Scroll Anchor Handler (`top la vanthu nikanum seriya okava`)
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const wasOpen = open
    if (open) setOpen(false)

    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.split('#')[1]
      if (targetId) {
        if (typeof window !== 'undefined' && (window.location.pathname === '/' || href.startsWith('#'))) {
          e.preventDefault()
          // If mobile menu drawer was open, wait 60ms for DOM height to settle after collapse
          setTimeout(() => {
            const el = document.getElementById(targetId)
            if (el) {
              const headerOffset = 76 // Exactly aligns section heading below fixed header
              const elementPosition = el.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth',
              })
            }
          }, wasOpen ? 60 : 0)
        }
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/70 bg-background/90 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo scrolled={scrolled || open} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
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
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, '/#contact')}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden',
            scrolled || open ? 'border-border bg-card text-foreground' : 'border-white/20 bg-white/10 text-white',
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden animate-in fade-in duration-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="rounded-lg px-4 py-3.5 text-base font-bold text-foreground hover:bg-secondary active:scale-[0.99] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, '/#contact')}
              className="mt-3 rounded-full bg-primary px-5 py-3.5 text-center text-base font-bold text-primary-foreground shadow-soft active:scale-[0.98] transition-transform"
            >
              Get a Free Quote
            </a>
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-bold text-foreground active:scale-[0.98] transition-transform"
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
