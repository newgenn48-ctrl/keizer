'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setLoaded(true)

    // Lazy load video after initial content is visible
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-secondary-950 py-20 md:py-0">
      {/* Video Background with lazy loading */}
      <div className="absolute inset-0">
        {/* Poster image shown while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: 'url(/images/keizer-hero.jpg)' }}
          aria-hidden="true"
        />

        {/* Lazy loaded video */}
        {videoLoaded && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/keizer-hero.jpg"
            className="w-full h-full object-cover"
            aria-label="Achtergrondvideo van transport en logistiek"
          >
            <source src="/images/hero-bg.mp4" type="video/mp4" />
            Uw browser ondersteunt geen video.
          </video>
        )}
        {/* Overlay - subtle for 4K crisp look */}
        <div className="absolute inset-0 bg-secondary-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/70 via-secondary-950/30 to-transparent" />
        {/* Gloss/shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/5" />
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/2 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Keizer Logistics BV
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">Uw betrouwbare transportpartner</span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl md:text-2xl text-white/60 mb-8 md:mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Uw partner voor efficiënt nationaal en internationaal transport.
            Van distributie tot spoedvervoer — wij leveren altijd op tijd.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 text-secondary-900 font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact opnemen
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              Bekijk diensten
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className={`hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-primary-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
