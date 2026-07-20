'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Film, MapPin, MessageCircle, Play, ShieldCheck, Sparkles } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'
import { SectionHeading } from './section-heading'
import { Reveal, Stagger, StaggerItem } from './reveal'

export type VideoItem = {
  id: string
  title: string
  method: string
  location: string
  thumbnail: string
  duration: string
  description: string
  highlight: string
}

const siteVideos: VideoItem[] = [
  {
    id: 'flyover-wall-saw',
    title: 'High-Altitude Flyover Parapet Wall Saw Cutting',
    method: 'Hydraulic Wall Sawing + Water Suppression',
    location: 'Bridge & Flyover Infrastructure Site',
    thumbnail: '/images/real/site-work-2.jpeg',
    duration: '0:45',
    description:
      'Our operator cutting through a heavy reinforced concrete barrier on an elevated flyover using high-torque diamond wall sawing with zero structural vibration.',
    highlight: 'Zero Vibration & Dust Control',
  },
  {
    id: 'submerged-core-wire',
    title: 'Submerged Concrete Core & Wire Saw Cutting',
    method: 'Diamond Core & Wire Cutting',
    location: 'Deep Trench / Submerged RCC Structure',
    thumbnail: '/images/real/site-work-1.jpeg',
    duration: '0:38',
    description:
      'Precision cutting inside water-filled structural trenches. Our specialized diamond tooling performs flawlessly under submerged and challenging site conditions.',
    highlight: 'All-Weather & Wet Site Execution',
  },
  {
    id: 'rcc-slab-core',
    title: 'Heavy RCC Slab & Anchor Core Drilling',
    method: 'Electric Diamond Core Rig',
    location: 'Commercial Building & Tech Campus',
    thumbnail: '/images/real/project-1.jpeg',
    duration: '0:52',
    description:
      'Millimetre-accurate circular penetrations cut cleanly through densely rebar-reinforced structural slabs for MEP and HVAC service routing.',
    highlight: 'Millimetre Accuracy',
  },
  {
    id: 'wire-saw-dismantling',
    title: 'Heavy Industrial Plant Wire Saw Dismantling',
    method: 'Diamond Wire Saw System',
    location: 'Industrial Facility Demolition',
    thumbnail: '/images/real/project-6.jpeg',
    duration: '1:10',
    description:
      'Setting up and operating diamond wire sawing machinery to slice through massive concrete foundations and plant piers of unlimited thickness.',
    highlight: 'Unlimited Depth Cutting',
  },
  {
    id: 'floor-saw-expansion',
    title: 'Industrial Floor Sawing & Joint Cutting',
    method: 'Walk-Behind Floor Sawing Rig',
    location: 'Manufacturing Plant Floor',
    thumbnail: '/images/real/project-4.jpeg',
    duration: '0:40',
    description:
      'Rapid, clean floor cutting across occupied industrial warehouses with water cooling to ensure zero dust contamination for running assembly lines.',
    highlight: 'Occupied Site Safe',
  },
  {
    id: 'wall-opening-cut',
    title: 'Controlled RCC Wall & Doorway Opening',
    method: 'Precision Wall Saw Cut',
    location: 'Residential & Renovation Project',
    thumbnail: '/images/real/project-3.jpeg',
    duration: '0:35',
    description:
      'Creating perfectly squared, smooth-edged structural openings in load-bearing walls without micro-cracking adjacent concrete.',
    highlight: 'No Micro-Cracking',
  },
]

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  return (
    <section id="videos" className="scroll-mt-20 bg-steel py-20 text-steel-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
              <Film className="h-3.5 w-3.5 text-primary" />
              Live Site Action &amp; Reels
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Watch our diamond blades <span className="text-primary">in action</span>
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              We believe real on-site work speaks louder than words. See how our disciplined operators handle high-altitude wall saws, submerged core drilling and heavy industrial dismantling across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-4 w-4" />
              Watch All Reels (@siva.lingam.923519)
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Request Site Videos on WhatsApp
            </a>
          </div>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteVideos.map((v) => (
            <StaggerItem key={v.id}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/10 hover:shadow-lift">
                {/* Thumbnail with Action Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={site.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch Reel: ${v.title}`}
                      className="group/btn relative grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl ring-4 ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40" />
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </a>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-primary" /> {v.highlight}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-black/80 px-2.5 py-1 font-mono text-xs font-bold text-white/90 backdrop-blur-md">
                      ▶ {v.duration}
                    </span>
                  </div>

                  {/* Bottom Title inside Thumbnail */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> {v.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {v.method}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                      {v.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold">
                    <a
                      href={site.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-primary"
                    >
                      <InstagramIcon className="h-4 w-4 text-primary" /> Watch on Instagram Reel
                    </a>
                    <a
                      href={`https://wa.me/918778760661?text=${encodeURIComponent(`Hi SRI Cutting Technologies, I saw the video of "${v.title}" on your website. Please share more details/quote.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366]" /> Ask Quote
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lift">
              <Film className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Have a live site requirement that needs precise execution?
              </h3>
              <p className="text-sm text-white/75">
                Our team shares video method statements and on-site progress clips directly with your project managers.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-steel shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get Free Site Assessment
          </a>
        </div>
      </div>
    </section>
  )
}
