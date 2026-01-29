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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Klantgerichtheid',
    description: 'Wij luisteren naar onze klanten en denken actief mee. Elke uitdaging zien wij als een kans om te excelleren.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Duurzaamheid',
    description: 'Wij investeren continu in milieuvriendelijke oplossingen en streven naar een kleinere ecologische voetafdruk.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovatie',
    description: 'Moderne technologie en continue verbetering staan centraal in onze operatie voor optimale efficiëntie.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '18+', label: 'Bakwagens' },
  { value: '50+', label: 'Bussen' },
  { value: '15+', label: 'Vrachtwagens' },
  { value: '15+', label: 'Elektrische auto\'s' },
  { value: '1', label: 'Fiets' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Over Keizer Logistics BV"
        description="Al meer dan 5 jaar uw betrouwbare partner in transport en logistiek. Wij combineren ervaring met innovatie om uw goederen veilig en efficiënt te vervoeren."
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs md:text-sm font-semibold mb-4">
                Ons Verhaal
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6 leading-tight">
                Een familiebedrijf met grote{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                  ambities
                </span>
              </h2>
              <div className="space-y-4 text-secondary-600 text-base md:text-lg leading-relaxed">
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
                  klanten door heel Nederland en Europa.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-secondary-900 text-white text-sm md:text-base font-semibold rounded-full hover:bg-secondary-800 transition-all hover:scale-105"
                >
                  Neem contact op
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {/* Bakwagen Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bakwagen.jpg"
                  alt="Witte bakwagen van Keizer Logistics BV met bedrijfslogo, geparkeerd voor transport en distributie"
                  width={800}
                  height={695}
                  className="w-full h-auto"
                />
              </div>
              {/* Stats */}
              <div className="bg-secondary-950 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center ${index === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-1">
                        {stat.value}
                      </p>
                      <p className="text-secondary-400 text-xs md:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary-950 relative overflow-hidden">
        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 60" className="w-full h-auto fill-white">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

        <div className="container-custom relative pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-primary-300 text-xs md:text-sm font-semibold mb-4">
              Onze Waarden
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Onze{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                Kernwaarden
              </span>
            </h2>
            <p className="text-secondary-400 text-base md:text-lg lg:text-xl">
              De principes die ons dagelijks handelen bepalen en de basis vormen
              voor ons succes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-secondary-400 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
                <div className="absolute bottom-0 left-5 right-5 md:left-6 md:right-6 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto fill-white">
            <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <CTASection />
    </>
  )
}
