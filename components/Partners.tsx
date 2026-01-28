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
    <section className="py-12 md:py-16 bg-secondary-900 overflow-hidden">
      <div className="container-custom mb-8 md:mb-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Onze Partners
          </h2>
        </div>
      </div>

      {/* Draggable scrolling container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-secondary-900 to-transparent z-10 pointer-events-none" />

        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-secondary-900 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track with drag support */}
        <div
          ref={trackRef}
          className={`flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing ${
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
              className="flex-shrink-0 mx-6 md:mx-10 lg:mx-12"
            >
              <div className="relative w-40 h-28 md:w-52 md:h-36 lg:w-64 lg:h-44 hover:scale-105 transition-all duration-300 select-none">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner van Keizer Logistics BV`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
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
