import Image from 'next/image'
import { Cog, Cpu, Droplets, Gauge } from 'lucide-react'
import { Reveal } from './reveal'

const specs = [
  { icon: Cog, title: 'Hydraulic Wall & Wire Saws', body: 'High-torque diamond systems that slice reinforced concrete of virtually any thickness.' },
  { icon: Cpu, title: 'Electric & Remote Rigs', body: 'Precision core rigs and remote-controlled units for confined or hazardous access.' },
  { icon: Droplets, title: 'Water-Cooled Diamond Tooling', body: 'Premium segmented blades and bits that stay sharp, cool and dust-suppressed.' },
  { icon: Gauge, title: 'Calibrated & Maintained', body: 'Every machine is serviced, calibrated and safety-checked before it reaches your site.' },
]

export function Equipment() {
  return (
    <section className="bg-steel py-20 text-steel-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Equipment & Machinery
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Advanced machinery for the toughest cuts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-white/70">
              Our investment in a modern, well-maintained fleet means we take on the depth,
              reinforcement and access challenges other contractors turn away &mdash; safely and
              without structural damage.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {specs.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <s.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="left">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
            <Image
              src="/images/wire-saw-equipment.png"
              alt="Advanced diamond wire saw machinery cutting a large concrete structure"
              width={720}
              height={860}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-steel/70 p-4 backdrop-blur-md">
              <div>
                <p className="font-display text-lg font-bold">Diamond Wire System</p>
                <p className="text-xs text-white/60">Unlimited depth &middot; zero vibration</p>
              </div>
              <span className="animate-floaty rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                In fleet
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
