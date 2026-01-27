import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-secondary-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual element */}
          <div className="relative">
            <div className="relative">
              {/* Logo image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-secondary-900/10 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center p-12">
                <Image
                  src="/images/logo.png"
                  alt="Keizer Logistics"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="badge mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              Over ons
            </div>

            <h2 className="section-title mb-6">
              Uw betrouwbare
              <span className="block text-primary-500">partner in transport</span>
            </h2>

            <div className="divider mb-8" />

            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Keizer Logistics is een transportbedrijf met jarenlange ervaring in nationaal
              en internationaal transport. Wij staan voor betrouwbaarheid, flexibiliteit
              en persoonlijke service.
            </p>
            <p className="text-lg text-secondary-600 mb-10 leading-relaxed">
              Met ons moderne wagenpark en ervaren chauffeurs zorgen wij ervoor dat uw
              goederen veilig en op tijd op de plaats van bestemming aankomen.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-secondary-900 font-semibold text-lg hover:text-primary-600 transition-colors"
            >
              <span className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                <svg className="w-5 h-5 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              Meer over ons
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
