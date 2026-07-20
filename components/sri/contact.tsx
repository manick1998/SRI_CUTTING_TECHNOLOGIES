'use client'

import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
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

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-lift lg:grid-cols-5">
          {/* Info panel */}
          <div className="relative bg-steel p-8 text-steel-foreground sm:p-10 lg:col-span-2">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Get in Touch
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Request your free site quote
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-white/70">
                Call, WhatsApp or send the form. Our engineers respond fast &mdash; usually within
                the hour during working times.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a href={site.phoneHref} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">Call us</span>
                    <span className="font-semibold">{site.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">WhatsApp</span>
                    <span className="font-semibold">Chat instantly</span>
                  </span>
                </a>
                <a href={site.emailHref} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">Email</span>
                    <span className="font-semibold">{site.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">{site.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">
                    Mon&ndash;Sat, 8:00 AM &ndash; 8:00 PM &middot; 24/7 for emergencies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 sm:p-10 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Your enquiry has been received. Our team will contact you shortly. For urgent
                  works, call us directly at {site.phoneDisplay}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <Reveal>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.currentTarget)
                    const message = [
                      'Hi SRI Cutting Technologies, I would like a quote.',
                      `Name: ${data.get('name')}`,
                      `Phone: ${data.get('phone')}`,
                      `Email: ${data.get('email') || 'Not provided'}`,
                      `Service: ${data.get('service')}`,
                      `Location: ${data.get('location') || 'Not provided'}`,
                      `Project details: ${data.get('message') || 'Not provided'}`,
                    ].join('\n')
                    window.open(`https://wa.me/918778760661?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
                    setSubmitted(true)
                  }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="input-base"
                      />
                    </Field>
                    <Field label="Phone number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91"
                        className="input-base"
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
                        className="input-base"
                      />
                    </Field>
                    <Field label="Service needed" htmlFor="service">
                      <select id="service" name="service" required defaultValue="" className="input-base">
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Project location" htmlFor="location">
                    <input
                      id="location"
                      name="location"
                      placeholder="City / site address"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Project details" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your cutting or demolition requirement..."
                      className="input-base resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    Send Enquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your enquiry. We never share your
                    details.
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
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  )
}
