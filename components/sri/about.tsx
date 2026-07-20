import Image from 'next/image'
import { CheckCircle2, Ruler, Target } from 'lucide-react'
import { Reveal } from './reveal'

const points = [
  'Diamond-tooled precision cutting with millimetre accuracy',
  'Structure-safe methods that preserve load-bearing integrity',
  'In-house engineers for planning, method statements & RAMS',
  'Nationwide mobilisation for infrastructure & industrial sites',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
              <Image
                src="/images/core-drilling.png"
                alt="SRI Cutting Technologies technician operating a diamond concrete core drilling machine"
                width={720}
                height={820}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lift sm:-right-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl font-bold leading-none">0.5mm</p>
                <p className="text-xs text-muted-foreground">cutting tolerance</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            About SRI Cutting Technologies
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Engineering-grade concrete cutting, trusted by India&apos;s builders
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              For over a decade, SRI Cutting Technologies has delivered clean, controlled and
              damage-free concrete cutting and demolition across residential, commercial,
              industrial and infrastructure projects. We combine advanced diamond machinery with
              rigorous safety engineering to solve the toughest structural challenges &mdash; on
              time, on budget and without compromising your building.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal as="li" key={p} delay={0.05 * i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/85">{p}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Ruler className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-foreground/80">
                <span className="font-semibold text-foreground">Free site assessment.</span> Our
                engineers survey your site and recommend the safest, most cost-effective cutting
                method before a single blade touches concrete.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
