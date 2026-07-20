import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const projects = [
  {
    img: '/images/project-bridge.png',
    alt: 'Highway flyover expansion joint cutting project',
    tag: 'Infrastructure',
    title: 'Highway Flyover Expansion Joints',
    location: 'National Highway, Tamil Nadu',
    desc: 'Precision joint and deck cutting across a live flyover with zero disruption to traffic below.',
  },
  {
    img: '/images/project-industrial.png',
    alt: 'Industrial factory slab cutting for machinery installation',
    tag: 'Industrial',
    title: 'Factory Slab Openings',
    location: 'Manufacturing Plant, Chennai',
    desc: 'Clean slab openings for heavy machinery foundations, executed during a running production shift.',
  },
  {
    img: '/images/project-demolition.png',
    alt: 'Controlled demolition of a multi-storey commercial building',
    tag: 'Commercial',
    title: 'Controlled Structural Demolition',
    location: 'Commercial Tower, Bengaluru',
    desc: 'Engineered partial demolition that protected adjacent occupied floors and neighbouring structures.',
  },
  {
    img: '/images/floor-saw.png',
    alt: 'Road floor saw cutting project',
    tag: 'Civil',
    title: 'Road & Pavement Saw Cutting',
    location: 'Urban Road Project, Coimbatore',
    desc: 'Long, straight, clean-edge floor cutting for utility trenching and resurfacing works.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Precision proven on real sites</>}
          description="A snapshot of the infrastructure, industrial and commercial work our team delivers across India."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group relative overflow-hidden rounded-3xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel/90 via-steel/25 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {p.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-steel-foreground">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/75">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {p.location}
                    </p>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/0 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:text-white/80 group-hover:opacity-100">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
