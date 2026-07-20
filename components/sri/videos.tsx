'use client'

import { Film, MessageCircle, Play, ShieldCheck, Sparkles } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'
import { Reveal } from './reveal'

export function Videos() {
  return (
    <section id="videos" className="scroll-mt-20 bg-steel py-20 text-steel-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
              <Film className="h-3.5 w-3.5 text-primary" />
              Official Video &amp; Reels Showcase
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Watch our diamond cutting <span className="text-primary">in live action</span>
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              We believe real on-site work speaks louder than words. Watch our official live video footage directly from the field—showing vibration-free hydraulic wall sawing and precision core drilling across India.
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
              Follow &amp; Watch Reels (@siva.lingam.923519)
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Request Site Videos via WhatsApp
            </a>
          </div>
        </div>

        {/* Real Video Player & Reel Showcase Container */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-center rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-10 shadow-2xl">
            
            {/* Left Box: Embedded Reel Player / Direct Action Card */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/50 p-6 text-center shadow-inner aspect-[4/3] sm:aspect-[16/10] lg:aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
              
              {/* Animated Glow Background */}
              <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-20 max-w-md mx-auto flex flex-col items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl ring-8 ring-white/15 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </span>

                <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-primary" /> Live On-Site Video Footage
                </span>

                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                  High-Altitude &amp; Precision Concrete Cutting Reel
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Click below to watch the official video posted on our Instagram profile <strong className="text-white">@siva.lingam.923519</strong>.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={site.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary"
                  >
                    <InstagramIcon className="h-4.5 w-4.5" /> Watch Video Reel Now
                  </a>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" /> Ask Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box: Why We Document Our Cuts */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                <ShieldCheck className="h-5 w-5" /> Verified Field Footage
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                No mockups. No stock videos. Only genuine SRI Cutting field execution.
              </h3>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                When you hire SRI Cutting Technologies, you get exactly the precision, safety, and specialized machinery shown in our official videos. Every video posted represents actual projects completed across South India and infrastructure sites nationwide.
              </p>

              <div className="space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary text-xs font-bold">1</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Real Hydraulic Wall &amp; Wire Saws</h4>
                    <p className="text-xs text-white/60 mt-0.5">High-torque diamond systems slicing through densely reinforced RCC without vibration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary text-xs font-bold">2</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Water-Suppressed Dust Control</h4>
                    <p className="text-xs text-white/60 mt-0.5">Watch our clean cooling sprays keeping occupied hospitals and factories 100% dust-free.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary text-xs font-bold">3</span>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Disciplined PPE &amp; Safety Protocols</h4>
                    <p className="text-xs text-white/60 mt-0.5">Certified operators operating machinery strictly under documented RAMS procedures.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Need our team for your project? Request a Free Site Assessment →
                </a>
              </div>
            </div>

          </div>
        </Reveal>

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
