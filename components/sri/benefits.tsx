import { Banknote, Clock, Leaf, Ruler, ShieldCheck, Volume2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const benefits = [
  { icon: Clock, title: 'Faster Turnaround', body: 'Rapid mobilisation and efficient cutting keep your schedule on track.' },
  { icon: ShieldCheck, title: 'Zero Structural Damage', body: 'Controlled methods preserve the integrity of the surrounding structure.' },
  { icon: Volume2, title: 'Low Noise & Vibration', body: 'Ideal for hospitals, schools and occupied buildings that stay operational.' },
  { icon: Leaf, title: 'Dust-Controlled & Clean', body: 'Water suppression keeps sites healthier and cleaner during works.' },
  { icon: Ruler, title: 'Precise, Repeatable Results', body: 'Cuts match specification exactly, reducing rework and wastage.' },
  { icon: Banknote, title: 'Better Value', body: 'Right method, first-time accuracy and no hidden costs protect your budget.' },
]

export function Benefits() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Benefits"
          title={<>Why precision cutting beats the alternatives</>}
          description="Choosing engineered diamond cutting over crude breaking protects your structure, budget and timeline."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
