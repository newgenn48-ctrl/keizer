'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Nationaal transport', href: '/services#nationaal' },
  { name: 'Internationaal transport', href: '/services#internationaal' },
  { name: 'Distributie & logistiek', href: '/services#distributie' },
  { name: 'Spoedtransport', href: '/services#spoed' },
]

const company = [
  { name: 'Over ons', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Algemene voorwaarden', href: '/voorwaarden' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-950 text-white relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-primary-500">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary-600/5 rounded-full blur-[100px]" />

      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="container-custom pt-16 md:pt-20 pb-8 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-4 lg:gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="Keizer Logistics BV"
                width={160}
                height={45}
                className="h-12 md:h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-400 text-sm md:text-base leading-relaxed max-w-xs">
              Uw betrouwbare partner voor transport en logistiek. Met jarenlange
              ervaring leveren wij kwalitatieve oplossingen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-4 md:mb-5 text-white">Diensten</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 text-sm md:text-base transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-4 md:mb-5 text-white">Bedrijf</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 text-sm md:text-base transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4 mt-6 text-white">Juridisch</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 text-sm md:text-base transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm md:text-base font-bold mb-4 md:mb-5 text-white">Contact</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-secondary-400 text-sm md:text-base">
                  <p>Schietlood 14 D</p>
                  <p>2495AN 's-Gravenhage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+31684903364" className="text-secondary-400 hover:text-primary-400 text-sm md:text-base transition-colors">
                  06 84903364
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Info@keizer-logistics.nl" className="text-secondary-400 hover:text-primary-400 text-sm md:text-base transition-colors break-all">
                  Info@keizer-logistics.nl
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-500 text-xs md:text-sm text-center md:text-left">
              <p>&copy; {currentYear} Keizer Logistics BV. Alle rechten voorbehouden.</p>
            </div>
            <div className="text-secondary-500 text-xs md:text-sm flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-500/50" />
                KvK: 92059902
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-500/50" />
                BTW: NL865869492B01
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
