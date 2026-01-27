import Link from 'next/link'

const services = [
  {
    id: 'nationaal',
    title: 'Nationaal Transport',
    description:
      'Betrouwbare transportoplossingen door heel Nederland. Van enkele pallet tot volledige vrachtwagens.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: 'internationaal',
    title: 'Internationaal Transport',
    description:
      'Grensoverschrijdend transport naar alle Europese bestemmingen met ons uitgebreide netwerk.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'distributie',
    title: 'Distributie & Logistiek',
    description:
      'Complete logistieke oplossingen voor uw supply chain. Van warehousing tot last-mile delivery.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'spoed',
    title: 'Spoedtransport',
    description:
      '24/7 beschikbaar voor urgente transporten. Uw kritieke zendingen binnen de kortste tijd op bestemming.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            Onze diensten
          </div>
          <h2 className="section-title mb-6">
            Wat wij voor u
            <span className="text-primary-500"> kunnen betekenen</span>
          </h2>
          <div className="divider mx-auto mb-8" />
          <p className="section-subtitle mx-auto">
            Van nationaal transport tot complexe logistieke oplossingen. Keizer
            Logistics biedt een compleet pakket aan transportdiensten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-secondary-100 hover:border-primary-200 shadow-lg shadow-secondary-900/5 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Number badge */}
              <span className="absolute top-8 right-8 text-7xl font-bold text-secondary-100 group-hover:text-primary-100 transition-colors">
                0{index + 1}
              </span>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center text-secondary-900 mb-6 shadow-lg shadow-primary-400/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-secondary-900 font-semibold hover:text-primary-600 transition-colors group/link"
                >
                  Meer informatie
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary">
            Bekijk alle diensten
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
