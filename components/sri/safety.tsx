import { FileCheck2, HardHat, ScanEye, ShieldCheck, Siren, UserCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'
import { Counter } from './counter'

const standards = [
  { icon: FileCheck2, title: 'Documented RAMS', body: 'Risk Assessments & Method Statements prepared for every job before work begins.' },
  { icon: HardHat, title: 'Full PPE Compliance', body: 'Operators equipped with certified protective gear and continuous safety training.' },
  { icon: ScanEye, title: 'Structural Assessment', body: 'Load paths and reinforcement checked to prevent collapse or structural damage.' },
  { icon: Siren, title: 'Site Hazard Control', body: 'Exclusion zones, signage and dust/noise control protect workers and the public.' },
  { icon: UserCheck, title: 'Certified Operators', body: 'Only trained, experienced technicians operate our precision machinery.' },
  { icon: ShieldCheck, title: 'Fully Insured', body: 'Comprehensive liability cover for total peace of mind on every project.' },
]

export function Safety() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Safety Standards"
          title={<>Safety engineered into every cut</>}
          description="We treat safety as a design discipline, not a checkbox. That is how we protect a 100% incident-free record."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <StaggerItem key={s.title}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[
            { to: 100, suffix: '%', label: 'Incident-free record' },
            { to: 3500, suffix: '+', label: 'Safe cuts completed' },
            { to: 12, suffix: '+', label: 'Years without a lost-time injury' },
          ].map((m) => (
            <div key={m.label} className="bg-card p-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">
                <Counter to={m.to} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
