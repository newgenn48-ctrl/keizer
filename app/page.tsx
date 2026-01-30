import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import AboutPreview from '@/components/AboutPreview'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Certifications from '@/components/Certifications'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <Certifications />
      <CTASection />
    </>
  )
}
