'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

const services = [
  {
    id: 'nationaal',
    title: 'Nationaal Transport',
    description: 'Betrouwbare transportoplossingen door heel Nederland. Van enkele pallets tot volledige vrachtwagens.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
        <path d="M16 16V6H2V16H16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'internationaal',
    title: 'Internationaal Transport',
    description: 'Grensoverschrijdend transport naar alle Europese bestemmingen met ons uitgebreide netwerk.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'distributie',
    title: 'Distributie & Logistiek',
    description: 'Complete logistieke oplossingen voor uw supply chain. Van warehousing tot last-mile delivery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
        <path d="M21 8V21H3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 3H1V8H23V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'spoed',
    title: 'Spoedtransport',
    description: '24/7 beschikbaar voor urgente transporten. Uw kritieke zendingen binnen de kortste tijd.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary-950 relative overflow-hidden">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-white">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-secondary-50">
          <path d="M0,50 C360,0 720,100 1080,50 C1260,25 1380,50 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="container-custom relative pt-6 md:pt-8">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-primary-300 text-xs md:text-sm font-semibold mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Wat wij voor u kunnen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              betekenen
            </span>
          </h2>
          <p className="text-secondary-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Keizer Logistics BV biedt een compleet pakket aan professionele transportdiensten
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary-400 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Meer info</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-5 right-5 md:left-6 md:right-6 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 md:mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 text-secondary-900 text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:scale-105"
          >
            Bekijk alle diensten
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
