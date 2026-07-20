'use client'

import { Film, MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'
import { Reveal, Stagger, StaggerItem } from './reveal'

export type VideoItem = {
  id: string
  title: string
  method: string
  location: string
  src: string
  description: string
  highlight: string
}

const realVideos: VideoItem[] = [
  {
    id: 'site-action-1',
    title: 'Heavy Hydraulic Wall & Concrete Cutting Action',
    method: 'Hydraulic Wall Saw + Water Cooling',
    location: 'Major Infrastructure & Bridge Site',
    src: '/videos/site-action-1.mp4',
    description:
      'Watch our heavy-duty diamond wall saw slicing cleanly through densely reinforced RCC concrete. Water suppression keeps the blade cool while virtually eliminating airborne dust.',
    highlight: 'Zero Vibration & 100% Dust Controlled',
  },
  {
    id: 'site-action-2',
    title: 'Precision On-Site Diamond Core & Slab Cutting',
    method: 'Diamond Core Rig & Floor Sawing',
    location: 'Commercial & Industrial Project',
    src: '/videos/site-action-2.mp4',
    description:
      'Real on-site execution showing disciplined operator control, rapid mobilization, and millimetre-accurate cutting without damaging surrounding structural reinforcement.',
    highlight: 'Millimetre-Precise Structural Safety',
  },
  {
    id: 'site-action-3',
    title: 'Controlled RCC Wall & Parapet Opening Work',
    method: 'VEREX Precision Diamond Saw',
    location: 'Flyover & High-Altitude Execution',
    src: '/videos/site-action-3.mp4',
    description:
      'High-altitude and confined-access concrete cutting delivered safely. Our operators follow strict RAMS procedures to ensure zero accidents and smooth-edged finishes.',
    highlight: 'High-Altitude & Confined Access',
  },
]

export function Videos() {
  return (
    <section id="videos" className="scroll-mt-16 sm:scroll-mt-20 bg-steel py-20 text-steel-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
              <Film className="h-3.5 w-3.5 text-primary" />
              Official Live Site Videos
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Watch our diamond blades <span className="text-primary">in live action</span>
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              We believe real field execution speaks louder than words. Watch our official on-site video clips showing precision hydraulic wall sawing, core drilling and controlled demolition across India.
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
              Watch More on Instagram (@siva.lingam.923519)
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Request Video Quotation
            </a>
          </div>
        </div>

        {/* 3 Real Video Players Grid */}
        <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {realVideos.map((v) => (
            <StaggerItem key={v.id}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
                {/* HTML5 Video Player */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-black">
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  {/* Top Badge */}
                  <div className="absolute left-3 top-3 pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md border border-white/10">
                      <Sparkles className="h-3 w-3 text-primary" /> {v.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {v.method}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-white/70">
                        <MapPin className="h-3 w-3 text-primary shrink-0" /> {v.location}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {v.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold">
                    <a
                      href={site.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-primary"
                    >
                      <InstagramIcon className="h-4 w-4 text-primary" /> Reel Profile
                    </a>
                    <a
                      href={`https://wa.me/918778760661?text=${encodeURIComponent(`Hi SRI Cutting Technologies, I saw your video "${v.title}" on the website. Please share quote/details for a similar requirement.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-white shadow-sm transition-transform hover:scale-105"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Ask Quote
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
