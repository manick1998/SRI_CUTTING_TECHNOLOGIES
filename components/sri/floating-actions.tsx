'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Film, MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'

export function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Fixed Bottom Action Bar — 100% Mobile Optimized */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-2 border-t border-border/80 bg-background/95 p-2.5 shadow-2xl backdrop-blur-xl sm:hidden"
          >
            <a
              href={site.phoneHref}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground shadow-sm active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-3 text-xs font-bold text-white shadow-sm active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full border border-border bg-card px-3.5 py-3 text-xs font-bold text-foreground shadow-sm active:scale-95"
              aria-label="Instagram Reels"
            >
              <InstagramIcon className="h-4 w-4 text-primary" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circular Actions — Tablet & Desktop */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 sm:flex"
          >
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with SRI Cutting on WhatsApp"
              className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
              <MessageCircle className="relative h-6 w-6" />
            </a>
            <a
              href={site.phoneHref}
              aria-label="Call SRI Cutting Technologies"
              className="group grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110"
            >
              <Phone className="h-6 w-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
