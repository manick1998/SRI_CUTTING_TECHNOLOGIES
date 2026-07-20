'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react'
import { site } from '@/lib/site'
import { Counter } from './counter'

const stats = [
  { to: 12, suffix: '+', label: 'Years of expertise' },
  { to: 3500, suffix: '+', label: 'Projects delivered' },
  { to: 100, suffix: '%', label: 'Safety record' },
  { to: 24, suffix: '/7', label: 'Rapid mobilisation' },
]

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const imgX = useTransform(sx, [-0.5, 0.5], [-16, 16])
  const imgY = useTransform(sy, [-0.5, 0.5], [-16, 16])

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      className="relative overflow-hidden bg-steel text-steel-foreground"
    >
      {/* background image */}
      <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero-wall-saw.png"
          alt="SRI Cutting Technologies operator performing precision hydraulic wall saw concrete cutting with sparks"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-steel/95 via-steel/85 to-steel/70" />
      <div className="absolute inset-0 bg-grid opacity-40 mix-blend-soft-light" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8 lg:pb-36 lg:pt-44">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md"
          >
            <span className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-white/80">Rated 4.9/5 by 200+ builders & engineers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Precision Concrete Cutting.{' '}
            <span className="text-primary">Zero-Damage</span> Demolition.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            India&apos;s trusted specialists for core cutting, wall &amp; wire saw cutting, RCC
            cutting and controlled demolition. Dust-controlled, vibration-free and engineered to
            protect your structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Request a Free Site Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-primary" />
              {site.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 flex items-center gap-2 text-sm text-white/70"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            Licensed, insured &amp; fully compliant with Indian safety standards
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-steel/40 p-5 sm:p-6">
              <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60 sm:text-sm">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
