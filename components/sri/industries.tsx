import {
  Building,
  Factory,
  GraduationCap,
  HardHat,
  Home,
  Hospital,
  Landmark,
  PencilRuler,
  TrainFront,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const industries = [
  { icon: Home, label: 'Home Owners' },
  { icon: HardHat, label: 'Builders' },
  { icon: Wrench, label: 'Civil Engineers' },
  { icon: PencilRuler, label: 'Architects' },
  { icon: Building, label: 'Construction Companies' },
  { icon: Factory, label: 'Factories & Industrial' },
  { icon: Hospital, label: 'Hospitals' },
  { icon: GraduationCap, label: 'Schools' },
  { icon: Landmark, label: 'Government Contractors' },
  { icon: TrainFront, label: 'Infrastructure Projects' },
]

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-16 sm:scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={<>From single homes to national infrastructure</>}
          description="Our precision cutting adapts to every environment, scale and compliance requirement across the built world."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((it) => (
            <StaggerItem key={it.label}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                  <it.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground/85">
                  {it.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
