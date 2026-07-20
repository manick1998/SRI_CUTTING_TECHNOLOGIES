import { Award, Building2, HardHat, Landmark, ShieldCheck, Timer } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'ISO-Aligned Safety Protocols' },
  { icon: Award, label: '12+ Years of Field Expertise' },
  { icon: HardHat, label: 'Certified & Insured Operators' },
  { icon: Landmark, label: 'Approved Govt. Contractor' },
  { icon: Building2, label: 'Trusted by 500+ Builders' },
  { icon: Timer, label: 'Rapid 24/7 Mobilisation' },
]

export function TrustBadges() {
  const loop = [...badges, ...badges]
  return (
    <section aria-label="Trust and credentials" className="border-y border-border bg-card py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted across construction, industrial &amp; government projects
        </p>
      </div>
      <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4">
          {loop.map((b, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-5 py-2.5"
            >
              <b.icon className="h-4 w-4 text-primary" />
              <span className="whitespace-nowrap text-sm font-medium text-foreground/80">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
