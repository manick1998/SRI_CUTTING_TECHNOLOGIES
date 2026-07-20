import {
  ArrowUpRight,
  CircleDot,
  Grid2x2,
  Hammer,
  Layers,
  Minus,
  Rows3,
  Ruler,
  Scissors,
  SquareStack,
  Waves,
  Wrench,
  Zap,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'
import { site } from '@/lib/site'

const services = [
  { icon: CircleDot, title: 'Concrete Core Cutting', body: 'Clean circular holes for plumbing, HVAC, electrical and structural anchoring — any diameter, any depth.' },
  { icon: SquareStack, title: 'Wall Saw Cutting', body: 'Precise openings for doors, windows and ducts in thick reinforced concrete walls.' },
  { icon: Layers, title: 'Slab Saw Cutting', body: 'Accurate horizontal cuts through floors and slabs for openings and modifications.' },
  { icon: Minus, title: 'Groove Cutting', body: 'Controlled grooving for cables, joints and anti-skid surface treatments.' },
  { icon: Rows3, title: 'Beam Cutting', body: 'Careful sectioning of RCC beams while safeguarding surrounding structure.' },
  { icon: Grid2x2, title: 'Floor Saw Cutting', body: 'Long straight cuts in roads, pavements and industrial floors with clean edges.' },
  { icon: Wrench, title: 'RCC Cutting', body: 'Heavy reinforced concrete cutting through dense rebar without structural damage.' },
  { icon: Waves, title: 'Wire Saw Cutting', body: 'Diamond wire cutting for massive sections, piers and hard-to-reach structures.' },
  { icon: Ruler, title: 'Expansion Joint Cutting', body: 'Precise joints that manage thermal movement and prevent cracking.' },
  { icon: Hammer, title: 'Concrete Breaking', body: 'Controlled breaking and removal for renovations and structural alterations.' },
  { icon: Zap, title: 'Controlled Demolition', body: 'Engineered, low-impact demolition that protects adjacent structures and occupants.' },
  { icon: Scissors, title: 'Industrial Demolition', body: 'Large-scale dismantling of factories and plants with full safety compliance.' },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Complete concrete cutting &amp; demolition solutions</>}
          description="One specialist team for every cutting and demolition challenge — backed by advanced diamond machinery and disciplined method engineering."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-steel p-8 text-center text-steel-foreground sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Not sure which method your project needs?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Send us your drawings or site photos — we&apos;ll recommend the safest approach and a fixed quote.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Talk to an Engineer
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
