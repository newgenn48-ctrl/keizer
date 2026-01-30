'use client'

import { useEffect, useState, useRef } from 'react'

const features = [
  {
    title: 'Betrouwbaar & Punctueel',
    description: 'Met een leveringspercentage van 99% op tijd kunt u op ons rekenen.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flexibel & Schaalbaar',
    description: 'Van een enkele zending tot structureel transport, wij passen ons aan.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: '24/7 Bereikbaar',
    description: 'Voor spoedtransport zijn wij dag en nacht beschikbaar.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Modern Wagenpark',
    description: 'Goed onderhouden en milieubewust wagenpark voor efficiënt transport.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
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
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 rotate-180 -mt-px">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-white block">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <div className="container-custom relative pt-6 md:pt-8">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-primary-300 text-xs md:text-sm font-semibold mb-4">
            Waarom Keizer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Waarom kiezen voor{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Keizer Logistics BV?
            </span>
          </h2>
          <p className="text-secondary-400 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Al meer dan 5 jaar de betrouwbare partner voor bedrijven die waarde hechten aan kwaliteit
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-secondary-400 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-5 right-5 md:left-6 md:right-6 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
