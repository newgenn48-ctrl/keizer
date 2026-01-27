import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://keizer-logistics.nl'),
  title: {
    default: 'Keizer Logistics BV | Transport & Logistiek Nederland',
    template: '%s | Keizer Logistics BV',
  },
  description:
    'Keizer Logistics BV is uw betrouwbare partner voor nationaal en internationaal transport, distributie en logistieke oplossingen. Professioneel, flexibel en altijd op tijd.',
  keywords: [
    'transport',
    'logistiek',
    'distributie',
    'vrachtvervoer',
    'koeriersdiensten',
    'spoedtransport',
    'Nederland',
    'internationaal transport',
  ],
  authors: [{ name: 'Keizer Logistics BV' }],
  creator: 'Keizer Logistics BV',
  publisher: 'Keizer Logistics BV',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://keizer-logistics.nl',
    siteName: 'Keizer Logistics BV',
    title: 'Keizer Logistics BV | Transport & Logistiek Nederland',
    description:
      'Uw betrouwbare partner voor nationaal en internationaal transport, distributie en logistieke oplossingen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keizer Logistics BV | Transport & Logistiek Nederland',
    description:
      'Uw betrouwbare partner voor nationaal en internationaal transport, distributie en logistieke oplossingen.',
  },
  alternates: {
    canonical: 'https://keizer-logistics.nl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Keizer Logistics BV',
              url: 'https://keizer-logistics.nl',
              logo: 'https://keizer-logistics.nl/images/logo.png',
              description:
                'Betrouwbare partner voor nationaal en internationaal transport, distributie en logistieke oplossingen.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Schietlood 14 D',
                addressLocality: '\'s-Gravenhage',
                postalCode: '2495AN',
                addressCountry: 'NL',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+31684903364',
                contactType: 'customer service',
                availableLanguage: ['Dutch', 'English', 'German'],
              },
              sameAs: [
                'https://www.linkedin.com/company/keizer-logistics',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://keizer-logistics.nl',
              name: 'Keizer Logistics BV',
              legalName: 'Keizer Logistics BV',
              image: 'https://keizer-logistics.nl/images/logo.png',
              telephone: '+31684903364',
              email: 'Info@keizer-logistics.nl',
              taxID: '92059902',
              vatID: 'NL865869492B01',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Schietlood 14 D',
                addressLocality: "'s-Gravenhage",
                postalCode: '2495AN',
                addressCountry: 'NL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.9225,
                longitude: 4.47917,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00',
                },
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 52.1326,
                  longitude: 5.2913,
                },
                geoRadius: '500000',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
