import { Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const testimonials = [
  {
    quote:
      'SRI cut six large openings through our RCC shear walls without a single crack elsewhere. Their method statement gave our structural consultant complete confidence.',
    name: 'Rajesh Menon',
    role: 'Project Manager, Skyline Builders',
  },
  {
    quote:
      'They worked overnight inside a running hospital wing. Dust-free, near-silent and spotless afterwards. Genuinely the most professional cutting team we have engaged.',
    name: 'Dr. Anita Rao',
    role: 'Facilities Head, City Care Hospital',
  },
  {
    quote:
      'On a live highway flyover, precision and safety are everything. SRI delivered clean expansion joints on schedule with zero disruption to traffic.',
    name: 'Suresh Iyer',
    role: 'Site Engineer, Infra Constructions',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title={<>Trusted by the people who build India</>}
          description="Engineers, builders and facility managers rely on SRI Cutting Technologies for work that has to be right."
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="mt-3 flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                  <div>
                    <p className="font-semibold leading-none">{t.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
