import { MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

const cities = [
  'Chennai',
  'Bengaluru',
  'Hyderabad',
  'Coimbatore',
  'Mumbai',
  'Pune',
  'Madurai',
  'Trichy',
  'Vijayawada',
  'Kochi',
  'Salem',
  'Vellore',
]

export function Locations() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Locations"
          title={<>Serving projects across India</>}
          description="Based in Chennai with nationwide reach for infrastructure, industrial and commercial works."
        />

        <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <StaggerItem key={c}>
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {c}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t see your city? We mobilise nationwide for larger projects &mdash;{' '}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            ask about your location
          </a>
          .
        </p>
      </div>
    </section>
  )
}
