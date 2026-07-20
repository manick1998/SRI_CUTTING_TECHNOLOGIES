'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <a
      href="/"
      aria-label={`${site.name} home`}
      className="group flex items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-md ring-1 ring-black/10 transition-transform sm:px-4 sm:py-2 hover:scale-105"
    >
      <Image
        src="/images/real/logo-mark.jpeg"
        alt="SRI Cutting Technologies"
        width={520}
        height={221}
        priority
        className="h-8 w-auto object-contain sm:h-10"
      />
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

  // Precision Top-Scroll Anchor Handler (`starting la varanum seriya okava puriyutha`)
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (open) setOpen(false)

    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.split('#')[1]
      if (targetId) {
        if (typeof window !== 'undefined' && (window.location.pathname === '/' || href.startsWith('#'))) {
          e.preventDefault()
          setTimeout(() => {
            const el = document.getElementById(targetId)
            if (el) {
              // Exactly 64px on mobile (h-16 header), 80px on desktop (h-20 header)
              const headerOffset = window.innerWidth < 640 ? 64 : 80
              const elementPosition = el.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth',
              })
            }
          }, 15)
        }
      }
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0F1115] shadow-lg',
          scrolled || open ? 'bg-[#0F1115]' : 'bg-[#0F1115]/95',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Fixed Top SRI Logo (`evlo scroll pannalum default-ah mela irukanum`) */}
          <Logo />

          <div className="hidden items-center gap-1.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary shrink-0" />
              {site.phoneDisplay}
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, '/#contact')}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Fixed Top Menu Icon (`default-ah mela irukanum`) */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/10 text-white shadow-sm transition-colors hover:bg-white/20 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer (Sits directly under fixed 64px header without touching body overflow!) */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#0F1115]/98 overflow-y-auto lg:hidden border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-6 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold text-white/90 hover:bg-white/10 active:scale-[0.99] transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs text-white/50">→</span>
              </a>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                Call Direct
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, '/#contact')}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform"
              >
                Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
