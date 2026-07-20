import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const projects = [
  {
    img: '/images/real/site-work-2.jpeg',
    alt: 'SRI Cutting Technologies operator cutting reinforced concrete barrier on flyover with heavy diamond wall saw',
    tag: 'Wall Sawing',
    title: 'High-Altitude Flyover Parapet Wall Sawing',
    location: 'Bridge & Flyover Infrastructure',
    desc: 'Heavy-duty hydraulic wall saw slicing through densely reinforced concrete bridge parapet with water suppression and zero structural vibration.',
  },
  {
    img: '/images/real/site-work-1.jpeg',
    alt: 'Precision concrete core and wire saw cutting inside a submerged water trench',
    tag: 'Wet Site Core & Wire',
    title: 'Submerged Trench Core & Wire Cutting',
    location: 'Infrastructure & Deep Trench Work',
    desc: 'Executing high-precision diamond cutting in submerged and wet site conditions where standard machinery cannot operate safely.',
  },
  {
    img: '/images/real/project-1.jpeg',
    alt: 'SRI Cutting Technologies operator performing diamond core drilling in an RCC slab',
    tag: 'Core Cutting',
    title: 'RCC Slab Core Drilling',
    location: 'On-site execution',
    desc: 'Multiple clean circular openings created using diamond core drilling for service and structural requirements.',
  },
  {
    img: '/images/real/project-2.jpeg',
    alt: 'Finished circular core-cut openings in a concrete slab',
    tag: 'Core Cutting',
    title: 'Precision Service Openings',
    location: 'On-site execution',
    desc: 'Neatly aligned core-cut openings delivered for a planned installation layout.',
  },
  {
    img: '/images/real/project-3.jpeg',
    alt: 'Completed rectangular opening cut through a wall',
    tag: 'Wall Opening',
    title: 'Controlled Wall Opening',
    location: 'Residential project',
    desc: 'A carefully prepared wall opening for renovation work, completed with controlled cutting methods.',
  },
  {
    img: '/images/real/project-4.jpeg',
    alt: 'Operator using a floor saw in an industrial facility',
    tag: 'Floor Sawing',
    title: 'Industrial Floor Saw Cutting',
    location: 'Industrial facility',
    desc: 'Floor cutting work executed inside a working industrial environment.',
  },
  {
    img: '/images/real/project-5.jpeg',
    alt: 'Worker cutting a concrete slab section on site',
    tag: 'Slab Cutting',
    title: 'Concrete Slab Modification',
    location: 'Residential project',
    desc: 'Concrete slab cutting and removal to create a new opening safely and accurately.',
  },
  {
    img: '/images/real/project-6.jpeg',
    alt: 'Wire saw cutting equipment set up at an industrial project',
    tag: 'Wire Sawing',
    title: 'Industrial Wire Saw Setup',
    location: 'Industrial project',
    desc: 'Specialised equipment mobilised for controlled heavy concrete cutting work.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 sm:scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Work. Real Results."
          title={<>See SRI Cutting Technologies in action</>}
          description="A selection of actual core cutting, floor sawing, wall-opening and industrial cutting work carried out by our team."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" />{p.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
