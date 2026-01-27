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
      'Keizer Logistics verzorgt betrouwbaar transport door heel Nederland. Of het nu gaat om een enkele pallet, deelladingen of volledige vrachtwagens - wij brengen uw goederen veilig en efficiënt naar elke bestemming in Nederland.',
    features: [
      'Dagelijkse ritten naar alle regio\'s',
      'Flexibele laad- en lostijden',
      'Pallets, stukgoed en volledige ladingen',
      'Real-time track & trace',
      'Ervaren en betrouwbare chauffeurs',
      'Competitieve tarieven',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: 'internationaal',
    title: 'Internationaal Transport',
    subtitle: 'Uw partner voor grensoverschrijdend vervoer',
    description:
      'Met ons uitgebreide Europese netwerk verzorgen wij betrouwbaar internationaal transport. Van de Benelux tot Scandinavië, van Oost-Europa tot het Iberisch schiereiland - Keizer Logistics brengt uw goederen waar ze moeten zijn.',
    features: [
      'Transport naar alle Europese bestemmingen',
      'Ervaring met douaneformaliteiten',
      'Groupage en volledige ladingen',
      'Gecertificeerde chauffeurs (ADR, GDP)',
      'Multimodaal transport',
      'Complete documentatie en afhandeling',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'distributie',
    title: 'Distributie & Logistiek',
    subtitle: 'Optimaliseer uw supply chain',
    description:
      'Van warehousing tot last-mile delivery: Keizer Logistics biedt complete logistieke oplossingen. Wij nemen uw distributie uit handen zodat u zich kunt focussen op uw kernactiviteiten.',
    features: [
      'Warehousing en voorraadbeheer',
      'Order picking en verpakking',
      'Cross-docking',
      'Retourlogistiek',
      'Dedicated distributie',
      'Supply chain consultancy',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: 'koerier',
    title: 'Koeriersdiensten',
    subtitle: 'Snelle en flexibele bezorging',
    description:
      'Voor tijdgevoelige zendingen bieden wij flexibele koeriersdiensten. Dezelfde dag, volgende dag of op een specifiek tijdstip - wij zorgen dat uw pakket op tijd aankomt.',
    features: [
      'Same-day en next-day delivery',
      'Tijdslotleveringen',
      'Handtekening bij ontvangst',
      'Verzekerde verzending',
      'Retourservice',
      'Speciale behandeling mogelijk',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 'spoed',
    title: 'Spoedtransport',
    subtitle: '24/7 beschikbaar voor urgente zendingen',
    description:
      'Wanneer het écht snel moet, staat Keizer Logistics voor u klaar. Onze spoedservice is 24 uur per dag, 7 dagen per week beschikbaar voor kritieke transporten die geen uitstel dulden.',
    features: [
      '24/7 bereikbaarheid',
      'Directe ophaling mogelijk',
      'Dedicated voertuig',
      'Real-time communicatie',
      'Europa-dekking',
      'Nachtritten mogelijk',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'maatwerk',
    title: 'Zakelijk Maatwerk',
    subtitle: 'Logistieke oplossingen op maat',
    description:
      'Elke onderneming is uniek, en dat geldt ook voor de logistieke behoeften. Keizer Logistics ontwikkelt samen met u een op maat gemaakte transportoplossing die perfect aansluit bij uw bedrijfsprocessen.',
    features: [
      'Dedicated accountmanager',
      'Logistieke analyse en advies',
      'Geïntegreerde IT-oplossingen',
      'SLA\'s op maat',
      'Flexibele contractvormen',
      'Periodieke evaluatie en optimalisatie',
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Onze Diensten"
        description="Van nationaal transport tot complete logistieke oplossingen. Keizer Logistics biedt een breed scala aan professionele diensten voor bedrijven die waarde hechten aan betrouwbaarheid en kwaliteit."
      />

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex"
                  >
                    Vraag een offerte aan
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-secondary-50 rounded-2xl p-8">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-6">
                      Wat wij bieden
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
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
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
