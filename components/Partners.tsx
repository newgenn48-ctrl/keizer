'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const partners = [
  { name: 'Keizer Logistics', logo: '/images/partners/Keizer Logistics.png' },
  { name: 'S&F Holding', logo: '/images/partners/S&F Holding.png' },
  { name: 'Keizer Snack&Bar', logo: '/images/partners/Keizer Snack&Bar.png' },
  { name: 'SKR Transport', logo: '/images/partners/SKR TRANSPORT.png' },
  { name: 'Invicta Group BV', logo: '/images/partners/INVICTA GROUP BV.png' },
]

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft || 0))
    setScrollLeft(trackRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume animation after 3 seconds of no interaction
    setTimeout(() => setIsPaused(false), 3000)
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
    setIsPaused(true)
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
    setTimeout(() => setIsPaused(false), 3000)
  }

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary-950 via-secondary-900 to-secondary-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom mb-10 md:mb-12 relative z-10">
        <div className="text-center">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-3 block">
            Samenwerkingen
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Onze Partners
          </h2>
        </div>
      </div>

      {/* Draggable scrolling container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-transparent z-10 pointer-events-none" />

        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-secondary-900 via-secondary-900/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track with drag support */}
        <div
          ref={trackRef}
          className={`flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-4 ${
            !isPaused ? 'animate-scroll' : ''
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
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8 lg:mx-10"
            >
              <div className="relative w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-36 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hover:bg-white/10 hover:border-primary-500/30 hover:scale-105 transition-all duration-300 select-none group">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner van Keizer Logistics BV`}
                  fill
                  className="object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 224px"
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
