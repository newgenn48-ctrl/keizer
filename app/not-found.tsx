'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-secondary-950 relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="container-custom relative text-center px-4">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* 404 Number */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Pagina niet gevonden
          </h2>

          {/* Description */}
          <p className="text-secondary-400 text-lg md:text-xl max-w-md mx-auto mb-8">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 text-secondary-900 font-semibold hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Terug naar home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact opnemen
            </Link>
          </div>
        </div>

        {/* Decorative truck icon */}
        <div className={`mt-12 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-24 h-24 md:w-32 md:h-32 mx-auto text-white/10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M16 16V6H2V16H16Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1"/>
            <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
