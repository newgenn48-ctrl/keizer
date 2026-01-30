import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacybeleid van Keizer Logistics BV. Lees hoe wij omgaan met uw persoonsgegevens.',
  alternates: {
    canonical: 'https://keizer-logistics.nl/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacybeleid"
        description="Keizer Logistics BV respecteert uw privacy en zorgt ervoor dat uw persoonlijke gegevens vertrouwelijk worden behandeld."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-secondary-500 text-base md:text-lg mb-8">
              Laatste update: januari 2025
            </p>

            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  1. Inleiding
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed">
                  Keizer Logistics BV respecteert uw privacy en zorgt ervoor dat uw
                  persoonlijke gegevens vertrouwelijk worden behandeld. In dit
                  privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom
                  wij dat doen en hoe wij deze gegevens gebruiken.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  2. Welke gegevens verzamelen wij?
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed mb-4">
                  Wij verzamelen de volgende persoonsgegevens:
                </p>
                <ul className="space-y-2">
                  {['Naam en contactgegevens', 'Bedrijfsnaam en functie', 'E-mailadres en telefoonnummer', 'Informatie over transportaanvragen'].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      </div>
                      <span className="text-secondary-600 text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  3. Waarvoor gebruiken wij uw gegevens?
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed mb-4">
                  Wij gebruiken uw gegevens om:
                </p>
                <ul className="space-y-2">
                  {['Contact met u op te nemen naar aanleiding van uw aanvraag', 'Onze dienstverlening uit te voeren', 'Facturen te versturen en betalingen te verwerken', 'Te voldoen aan wettelijke verplichtingen'].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      </div>
                      <span className="text-secondary-600 text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  4. Bewaartermijn
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed">
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor
                  de doeleinden waarvoor zij zijn verzameld, tenzij er een wettelijke
                  bewaartermijn van toepassing is.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  5. Uw rechten
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed">
                  U heeft het recht om uw persoonsgegevens in te zien, te corrigeren
                  of te verwijderen. Neem hiervoor contact met ons op via{' '}
                  <a href="mailto:Info@keizer-logistics.nl" className="text-primary-600 hover:text-primary-700 transition-colors">
                    Info@keizer-logistics.nl
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  6. Contact
                </h2>
                <p className="text-secondary-600 text-base md:text-lg leading-relaxed mb-4">
                  Voor vragen over dit privacybeleid kunt u contact opnemen met:
                </p>
                <div className="bg-secondary-950 rounded-xl p-5 md:p-6">
                  <address className="text-secondary-300 not-italic text-base md:text-lg leading-relaxed">
                    <strong className="text-white">Keizer Logistics BV</strong><br />
                    Schietlood 14 D<br />
                    2495AN 's-Gravenhage<br /><br />
                    E-mail: <a href="mailto:Info@keizer-logistics.nl" className="text-primary-400 hover:text-primary-300 transition-colors">Info@keizer-logistics.nl</a><br />
                    Telefoon: <a href="tel:+31684903364" className="text-primary-400 hover:text-primary-300 transition-colors">+31 6 84903364</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
