'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600" />

      {/* Flowing shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-60 md:w-80 h-60 md:h-80 rounded-full bg-white/10 animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-40 md:w-60 h-40 md:h-60 rounded-full bg-white/10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-white/5 animate-blob animation-delay-4000" />
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -mt-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block fill-secondary-50">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div
          className={`max-w-3xl mx-auto text-center px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 md:mb-6">
            Klaar om samen te werken?
          </h2>
          <p className="text-secondary-800/80 text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Ontdek hoe Keizer Logistics BV uw transportprocessen kan optimaliseren.
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-secondary-900 text-white text-sm md:text-base font-semibold rounded-full hover:bg-secondary-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary-900/20"
            >
              <span className="flex items-center gap-2">
                Contact opnemen
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <a
              href="tel:+31684903364"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/20 backdrop-blur-sm text-secondary-900 text-sm md:text-base font-semibold rounded-full hover:bg-white/30 transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
