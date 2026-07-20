'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Minus, Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Do you offer dust-free and vibration-free concrete cutting?',
    a: 'Yes. We use water-cooled diamond tooling and controlled cutting techniques that virtually eliminate dust and vibration, protecting the surrounding structure, equipment and occupants.',
  },
  {
    q: 'Can you work on live and occupied sites like hospitals and factories?',
    a: 'Absolutely. Our low-noise, dust-controlled methods and strict safety protocols are designed for sensitive environments. We regularly work overnight or in phases to avoid disrupting operations.',
  },
  {
    q: 'How thick and how heavily reinforced can you cut?',
    a: 'Our wall and wire saws cut through very thick, densely reinforced concrete. Wire sawing in particular has effectively unlimited depth, making it ideal for piers, foundations and massive sections.',
  },
  {
    q: 'How quickly can you mobilise to my site?',
    a: 'We offer rapid 24/7 mobilisation for urgent works and typically schedule standard jobs within a few days of quote approval, depending on scope and location.',
  },
  {
    q: 'Do you provide a free quote and site survey?',
    a: 'Yes. Share your drawings or site photos and our engineers will assess the safest, most cost-effective method and provide a clear, fixed quote at no charge.',
  },
  {
    q: 'Which areas across India do you serve?',
    a: 'We operate across major cities and industrial corridors including Chennai, Bengaluru, Hyderabad, Coimbatore, Mumbai and Pune, and mobilise nationwide for large infrastructure projects.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Answers before you enquire</>}
          description="Everything builders, engineers and owners commonly ask before a project."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                    isOpen ? 'border-primary/40 shadow-soft' : 'border-border'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
