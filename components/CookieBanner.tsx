'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'keizer-cookie-consent'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay to prevent layout shift on load
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="container-custom">
        <div className="bg-secondary-950 border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Icon */}
            <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 id="cookie-title" className="text-white font-semibold mb-1">
                Cookie-instellingen
              </h3>
              <p id="cookie-description" className="text-secondary-400 text-sm leading-relaxed">
                Wij gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren.{' '}
                <Link href="/privacy" className="text-primary-400 hover:text-primary-300 underline">
                  Lees ons privacybeleid
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-5 py-2.5 text-sm font-medium text-secondary-400 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={acceptCookies}
                className="px-5 py-2.5 text-sm font-semibold text-secondary-900 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all"
              >
                Alle cookies accepteren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
