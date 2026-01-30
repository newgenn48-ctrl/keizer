import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Keizer Logistics BV voor al uw transport- en logistieke vragen. Vraag een vrijblijvende offerte aan of bel direct voor spoedtransport.',
  openGraph: {
    title: 'Contact | Keizer Logistics BV',
    description:
      'Neem contact op met Keizer Logistics BV voor al uw transport- en logistieke vragen. Vraag een vrijblijvende offerte aan of bel direct voor spoedtransport.',
  },
}

const contactInfo = [
  {
    title: 'Adres',
    content: ['Schietlood 14 D', '2495AN \'s-Gravenhage'],
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Telefoon',
    content: ['+31 6 84903364'],
    href: 'tel:+31684903364',
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Planning',
    content: ['+31 6 34195280', '+31 6 42069593'],
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'E-mail',
    content: ['Info@keizer-logistics.nl'],
    href: 'mailto:Info@keizer-logistics.nl',
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Openingstijden',
    content: ['Ma - Vr: 07:00 - 18:00', 'Za - Zo: Gesloten', 'Spoed: 24/7 bereikbaar'],
    icon: (
      <svg
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Neem gerust contact met ons op. Wij staan u graag te woord."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-2">
                  Stuur ons een bericht
                </h2>
                <p className="text-secondary-600 text-base md:text-lg mb-6 md:mb-8">
                  Vul het onderstaande formulier in en wij nemen binnen 24 uur
                  contact met u op.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary-950 rounded-xl p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-lg md:rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm md:text-base mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      {item.content.map((line, lineIndex) => {
                        const isPhone = line.startsWith('+31')
                        const phoneHref = isPhone ? `tel:${line.replace(/\s/g, '')}` : null
                        return (
                          <p key={lineIndex} className="text-secondary-400 text-base md:text-lg">
                            {item.href && lineIndex === 0 ? (
                              <a
                                href={item.href}
                                className="hover:text-primary-400 transition-colors"
                              >
                                {line}
                              </a>
                            ) : phoneHref ? (
                              <a
                                href={phoneHref}
                                className="hover:text-primary-400 transition-colors"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-5 md:p-6">
                <h3 className="font-semibold text-secondary-900 text-base md:text-lg mb-2">Spoedtransport?</h3>
                <p className="text-secondary-800/80 text-base md:text-lg mb-4">
                  Voor urgente transporten zijn wij 24/7 bereikbaar.
                </p>
                <a
                  href="tel:+31684903364"
                  className="inline-flex items-center gap-2 bg-secondary-900 text-white px-4 py-2.5 rounded-full text-sm md:text-base font-medium hover:bg-secondary-800 transition-all hover:scale-105"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Bel nu direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary-50 relative overflow-hidden">
        <div className="container-custom py-16 md:py-20">
          <div className="text-center mb-8">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs md:text-sm font-semibold mb-4">
              Locatie
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
              Vind ons hier
            </h2>
            <p className="text-secondary-600 text-base md:text-lg">
              Schietlood 14 D, 2495AN 's-Gravenhage
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8!2d4.3!3d52.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7348d7d5555%3A0x0!2sSchietlood%2014D%2C%202495%20AN%20Den%20Haag!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Keizer Logistics BV locatie - Schietlood 14 D, 2495AN 's-Gravenhage"
              className="w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Schietlood+14D+2495AN+Den+Haag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm md:text-base font-medium transition-colors"
            >
              Open in Google Maps
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Wave bottom - transition to footer */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block fill-primary-500">
            <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}
