'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MessageCircle, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
        >
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with SRI Cutting on WhatsApp"
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <MessageCircle className="relative h-6 w-6" />
          </a>
          <a
            href={site.phoneHref}
            aria-label="Call SRI Cutting Technologies"
            className="group grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105"
          >
            <Phone className="h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
