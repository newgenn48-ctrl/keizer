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
    <section className="py-12 md:py-16 bg-secondary-950 border-y border-white/10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-secondary-400 text-sm md:text-base uppercase tracking-widest mb-2">
            Vertrouwd door
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Onze Partners
          </h2>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center"
            >
              <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner van Keizer Logistics BV`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
