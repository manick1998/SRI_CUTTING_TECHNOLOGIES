import { SiteNav } from '@/components/sri/site-nav'
import { Hero } from '@/components/sri/hero'
import { TrustBadges } from '@/components/sri/trust-badges'
import { About } from '@/components/sri/about'
import { WhyChoose } from '@/components/sri/why-choose'
import { Services } from '@/components/sri/services'
import { Videos } from '@/components/sri/videos'
import { Industries } from '@/components/sri/industries'
import { Process } from '@/components/sri/process'
import { Equipment } from '@/components/sri/equipment'
import { Projects } from '@/components/sri/projects'
import { Founder } from '@/components/sri/founder'
import { Safety } from '@/components/sri/safety'
import { Benefits } from '@/components/sri/benefits'
import { Faq } from '@/components/sri/faq'
import { Locations } from '@/components/sri/locations'
import { Contact } from '@/components/sri/contact'
import { FinalCta } from '@/components/sri/final-cta'
import { SiteFooter } from '@/components/sri/site-footer'
import { FloatingActions } from '@/components/sri/floating-actions'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Founder />
        <WhyChoose />
        <Services />
        <Videos />
        <Industries />
        <Process />
        <Equipment />
        <Projects />
        <Safety />
        <Benefits />
        <Faq />
        <Locations />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
