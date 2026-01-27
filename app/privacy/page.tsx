import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacybeleid van Keizer Logistics BV. Lees hoe wij omgaan met uw persoonsgegevens.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacybeleid
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-secondary-600 mb-6">
              Laatste update: januari 2025
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              1. Inleiding
            </h2>
            <p className="text-secondary-600 mb-4">
              Keizer Logistics BV respecteert uw privacy en zorgt ervoor dat uw
              persoonlijke gegevens vertrouwelijk worden behandeld. In dit
              privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom
              wij dat doen en hoe wij deze gegevens gebruiken.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              2. Welke gegevens verzamelen wij?
            </h2>
            <p className="text-secondary-600 mb-4">
              Wij verzamelen de volgende persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4 space-y-2">
              <li>Naam en contactgegevens</li>
              <li>Bedrijfsnaam en functie</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>Informatie over transportaanvragen</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              3. Waarvoor gebruiken wij uw gegevens?
            </h2>
            <p className="text-secondary-600 mb-4">
              Wij gebruiken uw gegevens om:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4 space-y-2">
              <li>Contact met u op te nemen naar aanleiding van uw aanvraag</li>
              <li>Onze dienstverlening uit te voeren</li>
              <li>Facturen te versturen en betalingen te verwerken</li>
              <li>Te voldoen aan wettelijke verplichtingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              4. Bewaartermijn
            </h2>
            <p className="text-secondary-600 mb-4">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor
              de doeleinden waarvoor zij zijn verzameld, tenzij er een wettelijke
              bewaartermijn van toepassing is.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              5. Uw rechten
            </h2>
            <p className="text-secondary-600 mb-4">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren
              of te verwijderen. Neem hiervoor contact met ons op via
              Info@keizer-logistics.nl.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              6. Contact
            </h2>
            <p className="text-secondary-600 mb-4">
              Voor vragen over dit privacybeleid kunt u contact opnemen met:
            </p>
            <address className="text-secondary-600 not-italic">
              Keizer Logistics BV<br />
              Schietlood 14 D<br />
              2495AN 's-Gravenhage<br />
              E-mail: Info@keizer-logistics.nl<br />
              Telefoon: 06 84903364
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
