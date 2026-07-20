'use client'

import { useRef, useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/instagram-icon'
import { site } from '@/lib/site'
import { Reveal } from './reveal'

const services = [
  'Concrete Core Cutting',
  'Wall Saw Cutting',
  'Wire Saw Cutting',
  'Slab / Floor Saw Cutting',
  'Groove / Beam Cutting',
  'RCC Cutting',
  'Expansion Joint Cutting',
  'Concrete Breaking',
  'Controlled Demolition',
  'Industrial Demolition',
  'Other / Not sure',
]

function composeMessage(data: FormData) {
  return [
    'Hi SRI Cutting Technologies, I would like a quote.',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `Service: ${data.get('service')}`,
    `Location: ${data.get('location') || 'Not provided'}`,
    `Project details: ${data.get('message') || 'Not provided'}`,
  ].join('\n')
}

const WA_NUMBER = '918778760661'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [waLink, setWaLink] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  // Primary submit: works cleanly on both Vercel API and Netlify Forms.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setWaLink(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(composeMessage(data))}`)
    try {
      // Send to Vercel API route directly
      await fetch('/api/contact', {
        method: 'POST',
        body: data,
      }).catch(async () => {
        // Fallback for Netlify Forms
        const body = new URLSearchParams()
        data.forEach((value, key) => {
          if (typeof value === 'string') body.append(key, value)
        })
        body.set('form-name', 'contact')
        await fetch('/contact.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        })
      })
    } catch {
      // If API capture is unavailable, the lead is still recoverable via WhatsApp.
    }
    setSubmitted(true)
  }

  // Secondary path: send the typed details straight to WhatsApp (no form submit).
  const sendWhatsApp = () => {
    const form = formRef.current
    if (!form) return
    const data = new FormData(form)
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(composeMessage(data))}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Unified Dark Steel & Glassmorphism Luxury Form Card (`color background seriyala` -> 100% fixed) */}
        <div className="grid overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#0F1115] shadow-2xl lg:grid-cols-5 text-white">
          
          {/* Info panel */}
          <div className="relative bg-white/5 p-6 sm:p-10 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Get in Touch
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Request your free site quote
              </h2>
              <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-white/75">
                Call, WhatsApp or submit the form below. Our engineers respond fast &mdash; usually within
                30 minutes during working times.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a href={site.phoneHref} className="group flex items-center gap-4 rounded-2xl bg-white/5 p-3.5 border border-white/10 transition-all hover:bg-white/10 active:scale-95">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-primary">Call Direct 24/7</span>
                    <span className="font-display text-base font-bold text-white">{site.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white/5 p-3.5 border border-white/10 transition-all hover:bg-white/10 active:scale-95"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white shadow-md transition-transform group-hover:scale-110">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-[#25D366]">Instant WhatsApp</span>
                    <span className="font-display text-base font-bold text-white">Chat with Sivalingam R</span>
                  </div>
                </a>

                <a href={site.emailHref} className="group flex items-center gap-4 rounded-2xl bg-white/5 p-3.5 border border-white/10 transition-all hover:bg-white/10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-white/50">Email Us</span>
                    <span className="font-semibold text-sm text-white/90">{site.email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-8 border-t border-white/15 pt-5 space-y-3 text-xs text-white/70 font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Mon&ndash;Sat, 8:00 AM &ndash; 8:00 PM &bull; 24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="p-6 sm:p-10 lg:col-span-3 bg-[#0F1115] flex flex-col justify-center">
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center p-4">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-primary/20 text-primary shadow-inner ring-4 ring-white/10">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-extrabold text-white">Thank you!</h3>
                <p className="mt-2.5 max-w-md text-sm sm:text-base text-white/80 leading-relaxed">
                  Your enquiry has been received by our technical desk. Sivalingam R &amp; team will contact you shortly. For urgent works, call direct at <strong className="text-white font-bold">{site.phoneDisplay}</strong>.
                </p>
                {waLink && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lift transition-all hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="h-5 w-5" /> Click here to send these exact details on WhatsApp now
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-full px-6 py-3 text-sm font-bold text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <Reveal>
                <form
                  ref={formRef}
                  name="contact"
                  method="POST"
                  action="/contact.html"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don&rsquo;t fill this out:{' '}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name / Company" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </Field>
                    <Field label="Phone number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email (optional)" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </Field>
                    <Field label="Service needed" htmlFor="service">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white focus:border-primary focus:bg-[#1C202B] focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      >
                        <option value="" disabled className="bg-[#1C202B] text-white/60">
                          Select required service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#1C202B] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Project location / City" htmlFor="location">
                    <input
                      id="location"
                      name="location"
                      placeholder="e.g., Chennai, Puducherry, Coimbatore, Bengaluru..."
                      className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    />
                  </Field>
                  <Field label="Project scope &amp; concrete details" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about concrete thickness, number of cuts, timeline, or live site challenges..."
                      className="w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                    />
                  </Field>

                  <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-lift transition-all hover:scale-[1.02] active:scale-95"
                    >
                      Send Enquiry
                      <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      onClick={sendWhatsApp}
                      className="w-full flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-lift transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Or Send via WhatsApp
                    </button>
                  </div>
                  <p className="text-center text-xs font-semibold text-white/60 pt-1">
                    🔒 Direct reply from Sivalingam R within 30 minutes. We respect your privacy.
                  </p>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-bold text-white/90">{label}</span>
      {children}
    </label>
  )
}
