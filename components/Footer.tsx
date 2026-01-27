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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Keizer Logistics"
                width={180}
                height={50}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-400 mb-8 leading-relaxed">
              Uw betrouwbare partner voor transport en logistiek. Met jarenlange
              ervaring leveren wij kwalitatieve oplossingen voor al uw
              transportbehoeften.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/keizer-logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-full flex items-center justify-center text-secondary-400 hover:text-secondary-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Diensten</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Bedrijf</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-4 mt-8 text-white">Juridisch</h3>
            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <address className="not-italic space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-secondary-400">
                  <p>Schietlood 14 D</p>
                  <p>2495AN 's-Gravenhage</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+31684903364" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  06 84903364
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Info@keizer-logistics.nl" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  Info@keizer-logistics.nl
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-500 text-sm">
              <p>&copy; {currentYear} Keizer Logistics BV. Alle rechten voorbehouden.</p>
            </div>
            <div className="text-secondary-500 text-sm flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span>KvK: 92059902</span>
              <span>BTW: NL865869492B01</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
