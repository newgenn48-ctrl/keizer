'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const partners = [
  { name: 'Keizer Logistics', logo: '/images/partners/v2_Keizer Logistics.png', darkBg: false },
  { name: 'S&F Holding', logo: '/images/partners/v3_S&F Holding.png', darkBg: false },
  { name: 'S&F Keizer Logistics', logo: '/images/partners/v3_S&F Keizer Logistics.png', darkBg: false },
  { name: 'Keizer Snack&Bar', logo: '/images/partners/v2_Keizer Snack&Bar.png', darkBg: false },
  { name: 'SKR Transport', logo: '/images/partners/v2_SKR TRANSPORT.png', darkBg: false },
  { name: 'Invicta Group BV', logo: '/images/partners/v2_INVICTA GROUP BV.png', darkBg: true },
  { name: 'Dilan Market', logo: '/images/partners/v2_Dilan market.png', darkBg: false },
]

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft || 0))
    setScrollLeft(trackRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (trackRef.current?.offsetLeft || 0))
    setScrollLeft(trackRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      
      
      <div className="container-custom mb-6 md:mb-8 relative z-10">
        <div className="text-center">
          <span className="text-primary-600 text-sm font-medium tracking-wider uppercase mb-3 block">
            Samenwerkingen
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900">
            Onze Partners
          </h2>
        </div>
      </div>

      {/* Draggable scrolling container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous scrolling track with drag support */}
        <div
          ref={trackRef}
          className={`flex py-4 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide ${
            isDragging ? '' : 'animate-scroll'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10"
            >
              <div className={`relative w-36 h-28 sm:w-44 sm:h-32 md:w-52 md:h-40 lg:w-60 lg:h-44 rounded-2xl border-2 p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 select-none group overflow-hidden ${
                  partner.darkBg
                    ? 'bg-secondary-900 border-secondary-700 hover:border-primary-500/50'
                    : 'bg-white border-secondary-200 hover:border-primary-500/50'
                }`}>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner van Keizer Logistics BV`}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  sizes="(max-width: 768px) 144px, (max-width: 1024px) 208px, 240px"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
