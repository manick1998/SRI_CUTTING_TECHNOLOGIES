import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  HardHat,
  Sparkles,
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/sri/site-nav'
import { SiteFooter } from '@/components/sri/site-footer'
import { FloatingActions } from '@/components/sri/floating-actions'
import { services, getService } from '@/lib/services-data'
import { SITE_URL, site } from '@/lib/site'

const whyUs = [
  { icon: ShieldCheck, title: 'Structurally safe', body: 'Engineered methods that protect load paths and adjacent elements.' },
  { icon: Sparkles, title: 'Dust & vibration controlled', body: 'Water-cooled diamond tooling for clean, low-impact cutting.' },
  { icon: HardHat, title: 'Safety-first crews', body: 'Disciplined operators following Indian safety standards.' },
  { icon: Clock, title: 'Fast mobilisation', body: 'Quick site response and clear, fixed quotes.' },
]

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: `${s.title} Services in India | SRI Cutting Technologies`,
    description: `${s.short} Expert ${s.title.toLowerCase()} across Puducherry, Tamil Nadu & India. Get a free site quote from SRI Cutting Technologies.`,
    alternates: { canonical: `${SITE_URL}/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | SRI Cutting Technologies`,
      description: s.short,
      url: `${SITE_URL}/services/${s.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const Icon = service.icon
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.long,
        provider: { '@type': 'LocalBusiness', name: site.name, url: SITE_URL, telephone: '+91-8778760661' },
        areaServed: { '@type': 'Country', name: 'India' },
        url: `${SITE_URL}/services/${service.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
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
              <a href="/#services" className="hover:text-white">Services</a>
              <span className="mx-2">/</span>
              <span className="text-white/90">{service.title}</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Specialist concrete cutting
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">{service.short}</p>
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

        {/* Intro + applications */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">About this service</h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{service.long}</p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Every {service.title.toLowerCase()} job starts with a site assessment, a clear method statement and a fixed quote — so you know exactly what to expect before we begin. Need help choosing the right method? Our engineers will recommend the safest, most cost-effective approach.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-lg font-semibold">Typical applications</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {service.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/80">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-secondary/40 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Why choose SRI Cutting for {service.title.toLowerCase()}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Related services</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <a key={r.slug} href={`/services/${r.slug}`} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                </a>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-steel p-8 text-center text-steel-foreground sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">Ready to start your project?</h3>
                <p className="mt-1 text-sm text-white/70">Share your drawings or site photos for a clear, fixed quote.</p>
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
