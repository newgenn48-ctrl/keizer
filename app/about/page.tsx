import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Leer Keizer Logistics BV kennen: meer dan 5 jaar ervaring in transport en logistiek. Een betrouwbare partner met een modern wagenpark en toegewijd team.',
  openGraph: {
    title: 'Over ons | Keizer Logistics BV',
    description:
      'Leer Keizer Logistics BV kennen: meer dan 5 jaar ervaring in transport en logistiek. Een betrouwbare partner met een modern wagenpark en toegewijd team.',
  },
}

const values = [
  {
    title: 'Betrouwbaarheid',
    description: 'Wat wij beloven, maken wij waar. Onze klanten kunnen rekenen op consistente kwaliteit en tijdige leveringen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Klantgerichtheid',
    description: 'Wij luisteren naar onze klanten en denken actief mee. Elke uitdaging zien wij als een kans om te excelleren.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Duurzaamheid',
    description: 'Wij investeren continu in milieuvriendelijke oplossingen en streven naar een kleinere ecologische voetafdruk.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovatie',
    description: 'Moderne technologie en continue verbetering staan centraal in onze operatie voor optimale efficiëntie.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '5+', label: 'Jaar ervaring' },
  { value: '500+', label: 'Tevreden klanten' },
  { value: '25+', label: 'Voertuigen' },
  { value: '35', label: 'Medewerkers' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Over Keizer Logistics"
        description="Al meer dan 5 jaar uw betrouwbare partner in transport en logistiek. Wij combineren ervaring met innovatie om uw goederen veilig en efficiënt te vervoeren."
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Een familiebedrijf met grote ambities
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Keizer Logistics BV is ontstaan vanuit een passie voor transport en
                  een drive om klanten de beste service te bieden. Wat begon als een
                  eenmanszaak met één vrachtwagen is uitgegroeid tot een gevestigde
                  naam in de logistieke sector.
                </p>
                <p>
                  Ondanks onze groei zijn wij trouw gebleven aan onze kernwaarden:
                  persoonlijke aandacht, betrouwbaarheid en flexibiliteit. Bij ons
                  bent u geen nummer, maar een gewaardeerde partner waarmee wij
                  graag langdurige relaties opbouwen.
                </p>
                <p>
                  Vanuit ons moderne distributiecentrum in 's-Gravenhage bedienen wij
                  klanten door heel Nederland en Europa. Met een toegewijd team en
                  een modern wagenpark staan wij garant voor kwaliteit in elke
                  schakel van de logistieke keten.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Neem contact op
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              {/* Bakwagen Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bakwagen.jpg"
                  alt="Keizer Logistics bakwagen"
                  width={800}
                  height={695}
                  className="w-full h-auto"
                />
              </div>
              {/* Stats */}
              <div className="bg-secondary-100 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-secondary-600 font-medium">{stat.label}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-lg text-secondary-600">
              De principes die ons dagelijks handelen bepalen en de basis vormen
              voor ons succes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Culture Section */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ons Team
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Achter Keizer Logistics staat een team van 35 gedreven professionals.
              Van planners tot chauffeurs, van magazijnmedewerkers tot
              klantenservice - iedereen draagt bij aan onze gezamenlijke missie:
              uitstekende logistieke dienstverlening leveren.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Wij investeren in onze mensen door continue training en
              ontwikkelmogelijkheden. Want wij geloven dat tevreden medewerkers de
              sleutel zijn tot tevreden klanten.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
