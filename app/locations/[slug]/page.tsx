import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/sri/site-nav'
import { SiteFooter } from '@/components/sri/site-footer'
import { FloatingActions } from '@/components/sri/floating-actions'
import { locations, getLocation } from '@/lib/locations-data'
import { services } from '@/lib/services-data'
import { SITE_URL, site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const l = getLocation(slug)
  if (!l) return {}
  return {
    title: `Concrete Cutting & Demolition in ${l.city} | SRI Cutting Technologies`,
    description: `Precision concrete cutting, core drilling, wall & wire saw cutting and controlled demolition in ${l.city}, ${l.state}. Trusted local specialists — get a free site quote.`,
    alternates: { canonical: `${SITE_URL}/locations/${l.slug}` },
    openGraph: {
      title: `Concrete Cutting in ${l.city} | SRI Cutting Technologies`,
      description: `Concrete cutting & controlled demolition services in ${l.city}, ${l.state}.`,
      url: `${SITE_URL}/locations/${l.slug}`,
    },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Concrete Cutting & Controlled Demolition in ${loc.city}`,
        description: loc.blurb,
        provider: { '@type': 'LocalBusiness', name: site.name, url: SITE_URL, telephone: '+91-8778760661' },
        areaServed: [
          { '@type': 'City', name: loc.city },
          { '@type': 'State', name: loc.state },
        ],
        url: `${SITE_URL}/locations/${loc.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/#locations` },
          { '@type': 'ListItem', position: 3, name: loc.city, item: `${SITE_URL}/locations/${loc.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden bg-steel pt-28 pb-16 text-steel-foreground sm:pt-36">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-white/60" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <a href="/#locations" className="hover:text-white">Locations</a>
              <span className="mx-2">/</span>
              <span className="text-white/90">{loc.city}</span>
            </nav>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Now serving {loc.city}, {loc.state}
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Concrete Cutting &amp; Demolition in <span className="text-primary">{loc.city}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
              Precision concrete cutting, core drilling and controlled demolition for residential, commercial and industrial projects across {loc.city} and nearby areas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="/#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5">
                Request a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-semibold text-white/85 hover:text-white">
                <Phone className="h-4 w-4 text-primary" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Intro + areas */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {loc.city} concrete cutting specialists
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{loc.blurb}</p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Whether it’s a small core-drilling job or a large controlled-demolition contract, our team brings the same precision, safety and zero-damage engineering to every site in {loc.city}.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <MapPin className="h-5 w-5 text-primary" /> Areas we cover
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {loc.areas.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services in this city */}
        <section className="bg-secondary/40 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Services available in {loc.city}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 9).map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Trust + CTA */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, t: 'Licensed & insured', d: 'Compliant with Indian safety standards.' },
                { icon: CheckCircle2, t: 'Zero-damage methods', d: 'Dust & vibration controlled cutting.' },
                { icon: Phone, t: 'Fast local response', d: 'Clear quotes, quick mobilisation.' },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-steel p-8 text-center text-steel-foreground sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">Have a project in {loc.city}?</h3>
                <p className="mt-1 text-sm text-white/70">Tell us about your site — we’ll respond fast with a free quote.</p>
              </div>
              <a href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
