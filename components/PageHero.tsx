'use client'

import Image from 'next/image'

interface PageHeroProps {
  title: string
  description: string
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/keizer-hero.jpg"
          alt="Keizer Logistics transport achtergrond"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/80 via-secondary-950/50 to-transparent" />
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="container-custom relative py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-300 text-xs md:text-sm font-semibold mb-4 md:mb-6">
            Keizer Logistics BV
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-white">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
