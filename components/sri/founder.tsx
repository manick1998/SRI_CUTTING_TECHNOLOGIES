import Image from 'next/image'
import { Award, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from './reveal'

export function Founder() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28" aria-labelledby="founder-heading">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[280px_1fr] lg:px-8">
        <Reveal direction="right">
          <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
            <Image src="/images/real/founder.jpeg" alt="Sivalingam R, Founder of SRI Cutting Technologies" width={1402} height={1122} className="aspect-[4/5] w-full object-cover object-top" />
          </div>
        </Reveal>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><Award className="h-3.5 w-3.5" />Founder-led service</span>
          <Reveal delay={0.05}><h2 id="founder-heading" className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">Direct accountability on every project</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">SRI Cutting Technologies is led by <strong className="text-foreground">Sivalingam R</strong>. We bring practical on-site focus to every cutting requirement—from the first site discussion through safe execution and handover.</p></Reveal>
          <Reveal delay={0.15}><a href={site.phoneHref} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"><Phone className="h-4 w-4" />Speak with {site.founder}</a></Reveal>
        </div>
      </div>
    </section>
  )
}
