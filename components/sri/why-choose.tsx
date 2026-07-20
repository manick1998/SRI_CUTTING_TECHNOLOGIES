import { Droplets, Gauge, HeartHandshake, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Safety-First Engineering',
    body: 'Documented RAMS, trained operators and strict site protocols keep your people and structure protected on every job.',
  },
  {
    icon: Droplets,
    title: 'Dust & Vibration Controlled',
    body: 'Water-cooled diamond tooling delivers clean cuts with minimal dust, noise and vibration — ideal for live sites.',
  },
  {
    icon: Gauge,
    title: 'Precision Accuracy',
    body: 'Millimetre-accurate cuts and cores that hit specification the first time, avoiding costly rework and delays.',
  },
  {
    icon: Wrench,
    title: 'Advanced Machinery',
    body: 'A modern fleet of hydraulic wall saws, wire saws and core rigs handles depth and reinforcement others cannot.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Pricing',
    body: 'Clear, itemised quotes with no hidden costs — approved before we mobilise, so your budget stays intact.',
  },
  {
    icon: Sparkles,
    title: 'Clean Handover',
    body: 'We leave your site tidy and safe, with debris cleared and openings finished to a professional standard.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SRI Cutting"
          title={<>The precision partner serious projects rely on</>}
          description="From homeowners to government contractors, clients choose us for cuts that are safe, clean and right the first time."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
