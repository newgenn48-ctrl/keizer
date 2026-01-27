import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
