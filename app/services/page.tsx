import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Ontdek het complete dienstenpakket van Keizer Logistics BV: nationaal en internationaal transport, distributie, koeriersdiensten, spoedtransport en zakelijk maatwerk.',
  openGraph: {
    title: 'Diensten | Keizer Logistics BV',
    description:
      'Ontdek het complete dienstenpakket van Keizer Logistics BV: nationaal en internationaal transport, distributie, koeriersdiensten, spoedtransport en zakelijk maatwerk.',
  },
}

const services = [
  {
    id: 'nationaal',
    title: 'Nationaal Transport',
    subtitle: 'Door heel Nederland, altijd op tijd',
    description:
      'Keizer Logistics BV verzorgt betrouwbaar transport door heel Nederland. Of het nu gaat om een enkele pallet, deelladingen of volledige vrachtwagens - wij brengen uw goederen veilig en efficiënt naar elke bestemming in Nederland.',
    features: [
      'Dagelijkse ritten naar alle regio\'s',
      'Flexibele laad- en lostijden',
      'Pallets, stukgoed en volledige ladingen',
      'Real-time track & trace',
      'Ervaren en betrouwbare chauffeurs',
      'Competitieve tarieven',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M16 16V6H2V16H16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'internationaal',
    title: 'Internationaal Transport',
    subtitle: 'Uw partner voor grensoverschrijdend vervoer',
    description:
      'Met ons uitgebreide Europese netwerk verzorgen wij betrouwbaar internationaal transport. Van de Benelux tot Scandinavië, van Oost-Europa tot het Iberisch schiereiland - Keizer Logistics BV brengt uw goederen waar ze moeten zijn.',
    features: [
      'Transport naar alle Europese bestemmingen',
      'Ervaring met douaneformaliteiten',
      'Groupage en volledige ladingen',
      'Gecertificeerde chauffeurs (ADR, GDP)',
      'Multimodaal transport',
      'Complete documentatie en afhandeling',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'distributie',
    title: 'Distributie & Logistiek',
    subtitle: 'Optimaliseer uw supply chain',
    description:
      'Van warehousing tot last-mile delivery: Keizer Logistics BV biedt complete logistieke oplossingen. Wij nemen uw distributie uit handen zodat u zich kunt focussen op uw kernactiviteiten.',
    features: [
      'Warehousing en voorraadbeheer',
      'Order picking en verpakking',
      'Cross-docking',
      'Retourlogistiek',
      'Dedicated distributie',
      'Supply chain consultancy',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M21 8V21H3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 3H1V8H23V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'spoed',
    title: 'Spoedtransport',
    subtitle: '24/7 beschikbaar voor urgente zendingen',
    description:
      'Wanneer het écht snel moet, staat Keizer Logistics BV voor u klaar. Onze spoedservice is 24 uur per dag, 7 dagen per week beschikbaar voor kritieke transporten die geen uitstel dulden.',
    features: [
      '24/7 bereikbaarheid',
      'Directe ophaling mogelijk',
      'Dedicated voertuig',
      'Real-time communicatie',
      'Europa-dekking',
      'Nachtritten mogelijk',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Onze Diensten"
        description="Van nationaal transport tot complete logistieke oplossingen. Keizer Logistics BV biedt een breed scala aan professionele diensten voor bedrijven die waarde hechten aan betrouwbaarheid en kwaliteit."
      />

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}>
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-primary-600 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-secondary-600 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 text-secondary-900 text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
                    >
                      Vraag een offerte aan
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <div className="bg-secondary-950 rounded-2xl p-6 md:p-8">
                      <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">
                        Wat wij bieden
                      </h3>
                      <ul className="space-y-3 md:space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-3 h-3 md:w-4 md:h-4 text-primary-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-secondary-300 text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
