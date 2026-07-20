import Image from 'next/image'
import { Award, CheckCircle2, HardHat, MessageCircle, Phone, ShieldCheck, Sparkles, UserCheck } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'
import { Reveal, Stagger, StaggerItem } from './reveal'

const founderPillars = [
  {
    icon: UserCheck,
    title: 'Direct On-Site Supervision',
    description: 'Sivalingam R personally reviews complex site drawings, method statements and safety setups for zero-tolerance projects.',
  },
  {
    icon: HardHat,
    title: '10+ Years Diamond Cutting Mastery',
    description: 'Extensive hands-on field expertise in hydraulic wall sawing, deep-core drilling, wire sawing and structural dismantling.',
  },
  {
    icon: ShieldCheck,
    title: '100% Safety Compliance & RAMS',
    description: 'Strict adherence to Indian and international construction safety standards, PPE discipline and structural integrity checks.',
  },
  {
    icon: Sparkles,
    title: 'Transparent Fixed Quotes',
    description: 'No surprise bills or hidden extras. Every scope is itemised clearly before mobilization begins.',
  },
]

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-16 sm:scroll-mt-20 bg-secondary/40 py-20 sm:py-28" aria-labelledby="founder-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Founder Photo & Badges */}
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                  <Image
                    src="/images/real/founder.jpeg"
                    alt="Sivalingam R, Founder and Technical Director of SRI Cutting Technologies"
                    width={1402}
                    height={1122}
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-border bg-card/95 p-5 shadow-lift backdrop-blur-md sm:left-8 sm:right-8">
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Award className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">Sivalingam R</h3>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider">Founder &amp; Technical Director</p>
                    </div>
                  </div>
                  <div className="text-right hidden xs:block">
                    <span className="font-display text-2xl font-black text-foreground">10+</span>
                    <span className="block text-[10px] uppercase font-bold text-muted-foreground">Years Field Exp.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Founder Content */}
          <div className="lg:col-span-7 mt-6 lg:mt-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
              <Award className="h-3.5 w-3.5" /> About Leadership &amp; Philosophy
            </span>

            <Reveal delay={0.05}>
              <h2 id="founder-heading" className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Direct accountability &amp; practical engineering on every cut
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                SRI Cutting Technologies was established by <strong className="text-foreground font-semibold">Sivalingam R</strong> with a singular mission: to provide India’s construction, industrial and infrastructure sectors with world-class, dust-controlled and zero-damage concrete cutting services.
              </p>
              <p className="mt-3.5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Unlike contractors where owners sit far from the field, Sivalingam R brings intense on-site involvement to every project—ensuring right diamond selection, fast mobilization, and strict safety adherence from the first drill to clean handover.
              </p>
            </Reveal>

            {/* Founder 4 Pillars Grid */}
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {founderPillars.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/40 hover:shadow-lift">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
                    </div>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Direct Contact Row */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
                <a
                  href={site.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Speak Directly with Sivalingam R
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card px-7 py-4 text-sm font-bold text-foreground shadow-soft transition-colors hover:bg-secondary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card px-7 py-4 text-sm font-bold text-foreground shadow-soft transition-colors hover:bg-secondary hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4 text-primary" />
                  Follow @siva.lingam.923519
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
