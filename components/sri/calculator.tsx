'use client'

import { useState } from 'react'
import { Calculator as CalcIcon, CheckCircle2, MessageCircle, Ruler, Sparkles } from 'lucide-react'
import { site } from '@/lib/site'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Calculator() {
  const [service, setService] = useState('Concrete Core Cutting')
  const [thickness, setThickness] = useState('150mm (Standard RCC Slab)')
  const [quantity, setQuantity] = useState('1 to 5 Openings / Cuts')
  const [urgency, setUrgency] = useState('Standard (Within 2-3 days)')

  // Simple estimated mobilization + scope bracket for transparency indicator
  const getEstimate = () => {
    let base = 4500
    if (service.includes('Wall Saw')) base = 12000
    if (service.includes('Wire Saw')) base = 25000
    if (service.includes('Demolition')) base = 35000

    let mult = 1
    if (quantity.includes('6 to 15')) mult = 2.2
    if (quantity.includes('15+')) mult = 4.5
    if (urgency.includes('24/7')) mult *= 1.3

    const min = Math.round(base * mult)
    const max = Math.round(min * 1.4)
    return { min: min.toLocaleString('en-IN'), max: max.toLocaleString('en-IN') }
  }

  const est = getEstimate()
  const waText = `Hi SRI Cutting Technologies, I checked the Cost Calculator on your site:\n• Service: ${service}\n• Thickness/Spec: ${thickness}\n• Quantity/Scope: ${quantity}\n• Urgency: ${urgency}\n• Estimated Budget Bracket: ₹${est.min} - ₹${est.max}\nPlease review my scope and provide exact fixed quotation.`

  return (
    <section id="calculator" className="scroll-mt-16 sm:scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Instant Scope Calculator"
          title={<>Estimate your concrete cutting budget in 30 seconds</>}
          description="Select your requirement below for an immediate ballpark estimate and direct WhatsApp fixed quotation."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-sm font-bold text-foreground">1. Select Service Requirement</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Concrete Core Cutting">Concrete Core Cutting (Circular Service Holes)</option>
                  <option value="Hydraulic Wall Saw Cutting">Hydraulic Wall Saw Cutting (RCC Walls &amp; Barriers)</option>
                  <option value="Diamond Wire Saw Cutting">Diamond Wire Saw Cutting (Heavy Foundations &amp; Piers)</option>
                  <option value="Slab / Floor Saw Cutting">Slab / Floor Saw Cutting (Roads, Floors &amp; Trenches)</option>
                  <option value="Controlled Industrial Demolition">Controlled &amp; Industrial Demolition Work</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground">2. Concrete Thickness / Specification</label>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="100mm - 150mm (Standard RCC Slab)">100mm - 150mm (Standard RCC Slab)</option>
                  <option value="200mm - 300mm (Thick RCC Wall / Beam)">200mm - 300mm (Thick RCC Wall / Beam)</option>
                  <option value="350mm - 500mm (Heavy Foundation / Retaining Wall)">350mm - 500mm (Heavy Foundation / Retaining Wall)</option>
                  <option value="500mm+ / Heavy Submerged / Bridge Pier">500mm+ / Heavy Submerged / Bridge Pier</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-foreground">3. Estimated Scope / Volume</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="1 to 5 Openings / Cuts">1 to 5 Openings / Cuts</option>
                    <option value="6 to 15 Openings / Cuts">6 to 15 Openings / Cuts</option>
                    <option value="15+ Large Project Volume">15+ Large Project Volume</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground">4. Mobilization Speed</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="Standard (Within 2-3 days)">Standard (Within 2-3 days)</option>
                    <option value="Urgent 24/7 Rapid Mobilization">Urgent 24/7 Rapid Mobilization</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Output Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border bg-secondary/50 p-6 text-center sm:p-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3 w-3" /> Ballpark Estimate
                </span>

                <h3 className="mt-4 font-display text-sm font-medium text-muted-foreground uppercase">
                  Estimated Mobilization &amp; Scope Bracket
                </h3>
                
                <div className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  ₹{est.min} <span className="text-lg font-normal text-muted-foreground">–</span> ₹{est.max}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  *This is an indicative estimate based on Indian standard cutting rates. Exact fixed quote is confirmed instantly upon reviewing drawings or site photos.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/918778760661?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="h-5 w-5" /> Send This Scope to WhatsApp Now
                </a>
                <p className="text-[11px] font-medium text-muted-foreground">
                  No obligation &bull; Direct reply from Sivalingam R within 30 minutes
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
