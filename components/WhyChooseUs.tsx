const features = [
  {
    title: 'Betrouwbaar & Punctueel',
    description: 'Met een leveringspercentage van 99% op tijd, kunt u rekenen op ons.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flexibel & Schaalbaar',
    description: 'Van een enkele zending tot structureel transport, wij passen ons aan.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: 'Ervaren Team',
    description: 'Meer dan 5 jaar ervaring in transport en logistiek.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Modern Wagenpark',
    description: 'Onderhouden en milieubewust wagenpark voor efficiënt transport.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Waarom wij
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Waarom kiezen voor
              <span className="text-primary-400"> Keizer Logistics?</span>
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full mb-8" />

            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
              Al meer dan 5 jaar de betrouwbare partner voor bedrijven die waarde
              hechten aan kwaliteit, flexibiliteit en service.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-primary-400">99%</p>
                <p className="text-white/60 text-sm">Op tijd geleverd</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-400">500+</p>
                <p className="text-white/60 text-sm">Tevreden klanten</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-400">24/7</p>
                <p className="text-white/60 text-sm">Beschikbaar</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center text-secondary-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
