'use client'

import Image from 'next/image'

const partners = [
  { name: 'Keizer Logistics', logo: '/images/partners/Keizer Logistics.png' },
  { name: 'S&F Holding', logo: '/images/partners/S&F Holding.png' },
  { name: 'Keizer Snack&Bar', logo: '/images/partners/Keizer Snack&Bar.png' },
  { name: 'SKR Transport', logo: '/images/partners/SKR TRANSPORT.png' },
  { name: 'Invicta Group BV', logo: '/images/partners/INVICTA GROUP BV.png' },
]

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-secondary-950 border-y border-white/10 overflow-hidden">
      <div className="container-custom mb-8 md:mb-10">
        <div className="text-center">
          <p className="text-primary-400 text-sm md:text-base uppercase tracking-widest mb-2 font-medium">
            Vertrouwd door toonaangevende bedrijven
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Onze Partners
          </h2>
        </div>
      </div>

      {/* Infinite scrolling container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-secondary-950 to-transparent z-10 pointer-events-none" />

        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-secondary-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
            >
              <div className="relative w-28 h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner van Keizer Logistics BV`}
                  fill
                  className="object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-500"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
