'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Logo3D from './Logo3D'

export default function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '5+', label: 'Jaar ervaring' },
    { value: '500+', label: 'Tevreden klanten' },
    { value: '99%', label: 'Op tijd geleverd' },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* 3D Logo */}
          <div
            className={`flex justify-center order-2 md:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            {/* Responsive logo container */}
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]">
              <Logo3D size={280} />
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-8 md:translate-x-8'}`}>
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs md:text-sm font-semibold mb-4">
              Over Ons
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 md:mb-6 leading-tight">
              Uw betrouwbare partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                transport
              </span>
            </h2>

            <p className="text-secondary-600 text-sm md:text-base lg:text-lg mb-3 md:mb-4 leading-relaxed">
              Keizer Logistics BV is een transportbedrijf met meer dan 5 jaar ervaring in nationaal
              en internationaal transport. Wij staan voor betrouwbaarheid, flexibiliteit
              en persoonlijke service.
            </p>
            <p className="text-secondary-600 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Met ons moderne wagenpark en ervaren chauffeurs zorgen wij ervoor dat uw
              goederen veilig en op tijd op de plaats van bestemming aankomen.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                    {stat.value}
                  </p>
                  <p className="text-secondary-500 text-[10px] sm:text-xs md:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-secondary-900 text-white text-sm md:text-base font-semibold rounded-full hover:bg-secondary-800 transition-all hover:scale-105"
            >
              Meer over ons
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
