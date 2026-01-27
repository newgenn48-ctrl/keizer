import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 tracking-tight">
            Klaar om samen te werken?
          </h2>

          <div className="w-20 h-1.5 bg-secondary-900/20 rounded-full mx-auto mb-8" />

          <p className="text-xl md:text-2xl text-secondary-800/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ontdek hoe Keizer Logistics uw transportprocessen kan optimaliseren.
            Neem vandaag nog contact met ons op.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-500 bg-secondary-900 rounded-full hover:bg-secondary-800 transition-all duration-300 shadow-xl shadow-secondary-900/30 hover:-translate-y-0.5"
            >
              Contact opnemen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+31684903364"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-secondary-900 bg-white/20 backdrop-blur-sm border-2 border-secondary-900/20 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel ons direct
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
