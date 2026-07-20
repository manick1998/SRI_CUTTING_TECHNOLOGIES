import { ClipboardCheck, Headset, PhoneCall, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Enquiry & Consultation',
    body: 'Call, WhatsApp or send us your drawings. We understand your scope, timeline and site conditions.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Site Survey & Quote',
    body: 'Our engineers assess access, reinforcement and risk, then issue a clear method statement and fixed quote.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Precision Execution',
    body: 'Certified operators mobilise with the right machinery and deliver clean, dust-controlled, on-spec cutting.',
  },
  {
    icon: Headset,
    step: '04',
    title: 'Clean Handover & Support',
    body: 'We clear debris, hand over a safe finished opening and stay available for any follow-up works.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Working Process"
          title={<>A disciplined path from enquiry to handover</>}
          description="Four clear steps that keep your project safe, predictable and free of surprises."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-primary shadow-soft">
                    <s.icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <span className="mt-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Step {s.step}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
