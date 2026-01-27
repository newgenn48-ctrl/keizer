import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van Keizer Logistics BV voor transport- en logistieke diensten.',
}

export default function VoorwaardenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Algemene Voorwaarden
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
              Artikel 1 - Definities
            </h2>
            <p className="text-secondary-600 mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4 space-y-2">
              <li><strong>Keizer Logistics:</strong> Keizer Logistics BV, gevestigd te 's-Gravenhage.</li>
              <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die met Keizer Logistics een overeenkomst aangaat.</li>
              <li><strong>Diensten:</strong> Alle transport- en logistieke diensten die door Keizer Logistics worden uitgevoerd.</li>
            </ul>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 2 - Toepasselijkheid
            </h2>
            <p className="text-secondary-600 mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
              offertes en overeenkomsten tussen Keizer Logistics en opdrachtgever.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 3 - Offertes en overeenkomsten
            </h2>
            <p className="text-secondary-600 mb-4">
              Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders
              vermeld. Een overeenkomst komt tot stand na schriftelijke
              bevestiging door Keizer Logistics.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 4 - Uitvoering van diensten
            </h2>
            <p className="text-secondary-600 mb-4">
              Keizer Logistics zal de overeengekomen diensten naar beste inzicht
              en vermogen uitvoeren. Opgegeven levertijden gelden als indicatie
              en niet als fatale termijn.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 5 - Prijzen en betaling
            </h2>
            <p className="text-secondary-600 mb-4">
              Alle prijzen zijn exclusief BTW, tenzij anders vermeld. Betaling
              dient te geschieden binnen 30 dagen na factuurdatum.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 6 - Aansprakelijkheid
            </h2>
            <p className="text-secondary-600 mb-4">
              De aansprakelijkheid van Keizer Logistics is beperkt conform de
              AVC 2002 (Algemene Vervoercondities) en de CMR (bij internationaal
              vervoer).
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 7 - Overmacht
            </h2>
            <p className="text-secondary-600 mb-4">
              Keizer Logistics is niet aansprakelijk voor tekortkomingen als
              gevolg van overmacht, waaronder begrepen: verkeersbelemmeringen,
              stakingen, weersomstandigheden en overheidsmaatregelen.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Artikel 8 - Toepasselijk recht
            </h2>
            <p className="text-secondary-600 mb-4">
              Op alle overeenkomsten is uitsluitend Nederlands recht van
              toepassing. Geschillen worden voorgelegd aan de bevoegde rechter
              te 's-Gravenhage.
            </p>

            <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
              Contact
            </h2>
            <p className="text-secondary-600 mb-4">
              Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
            </p>
            <address className="text-secondary-600 not-italic">
              Keizer Logistics BV<br />
              Schietlood 14 D<br />
              2495AN 's-Gravenhage<br />
              E-mail: Info@keizer-logistics.nl<br />
              Telefoon: 06 84903364<br /><br />
              KvK: 92059902<br />
              BTW: NL865869492B01
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
