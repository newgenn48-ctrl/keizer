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
        className="w-6 h-6"
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
    content: ['06 84903364'],
    href: 'tel:+31684903364',
    icon: (
      <svg
        className="w-6 h-6"
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
    title: 'E-mail',
    content: ['Info@keizer-logistics.nl'],
    href: 'mailto:Info@keizer-logistics.nl',
    icon: (
      <svg
        className="w-6 h-6"
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
        className="w-6 h-6"
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-secondary-100 p-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  Stuur ons een bericht
                </h2>
                <p className="text-secondary-600 mb-8">
                  Vul het onderstaande formulier in en wij nemen binnen 24 uur
                  contact met u op.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      {item.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-secondary-600">
                          {item.href && lineIndex === 0 ? (
                            <a
                              href={item.href}
                              className="hover:text-primary-600 transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-accent-500 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Spoedtransport?</h3>
                <p className="text-white/90 mb-4">
                  Voor urgente transporten zijn wij 24/7 bereikbaar.
                </p>
                <a
                  href="tel:+31684903364"
                  className="inline-flex items-center gap-2 bg-white text-accent-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
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
      <section className="bg-secondary-100">
        <div className="container-custom py-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.7!2d4.4791!3d51.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzIxLjAiTiA0wrAyOCc0NC44IkU!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Keizer Logistics locatie"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Schietlood+14+D,+2495AN+'s-Gravenhage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
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
      </section>
    </>
  )
}
