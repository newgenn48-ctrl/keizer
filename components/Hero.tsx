import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/95 via-secondary-900/80 to-secondary-900/50" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/20 backdrop-blur-sm border border-primary-400/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary-300 text-sm font-semibold tracking-wide uppercase">
              Transport & Logistiek
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Betrouwbaar transport
            <span className="block text-primary-400">
              voor uw bedrijf
            </span>
          </h1>

          {/* Divider */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full mb-6" />

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Uw partner voor efficiënt nationaal en internationaal transport.
            Van distributie tot spoedvervoer, wij leveren op tijd.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-secondary-900 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact opnemen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Onze diensten
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
