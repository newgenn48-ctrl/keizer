'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/services' },
  { name: 'Over ons', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-secondary-100/50 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom" aria-label="Hoofdnavigatie">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Keizer Logistics BV - Logo met gouden kroon, transport en logistiek bedrijf"
                width={220}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-secondary-600 hover:text-primary-600 font-medium rounded-lg hover:bg-secondary-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Link href="/contact" className="btn-primary">
              Contact opnemen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-secondary-600 hover:text-primary-600 p-2 rounded-lg hover:bg-secondary-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-100 animate-fade-in" id="mobile-menu">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-secondary-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-secondary-100">
                <Link
                  href="/contact"
                  className="btn-primary text-center mx-4 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
