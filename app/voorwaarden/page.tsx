import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van Keizer Logistics BV voor transport- en logistieke diensten.',
}

export default function VoorwaardenPage() {
  return (
    <>
      <PageHero
        title="Algemene Voorwaarden"
        description="De algemene voorwaarden van Keizer Logistics BV voor al onze transport- en logistieke diensten."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-secondary-500 text-sm md:text-base mb-8">
              Laatste update: januari 2025
            </p>

            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 1 - Definities
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed mb-4">
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul className="space-y-2">
                  {[
                    { term: 'Keizer Logistics:', def: 'Keizer Logistics BV, gevestigd te \'s-Gravenhage.' },
                    { term: 'Opdrachtgever:', def: 'De natuurlijke of rechtspersoon die met Keizer Logistics BV een overeenkomst aangaat.' },
                    { term: 'Diensten:', def: 'Alle transport- en logistieke diensten die door Keizer Logistics BV worden uitgevoerd.' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      </div>
                      <span className="text-secondary-600 text-sm md:text-base">
                        <strong>{item.term}</strong> {item.def}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 2 - Toepasselijkheid
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
                  offertes en overeenkomsten tussen Keizer Logistics BV en opdrachtgever.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 3 - Offertes en overeenkomsten
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders
                  vermeld. Een overeenkomst komt tot stand na schriftelijke
                  bevestiging door Keizer Logistics BV.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 4 - Uitvoering van diensten
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Keizer Logistics BV zal de overeengekomen diensten naar beste inzicht
                  en vermogen uitvoeren. Opgegeven levertijden gelden als indicatie
                  en niet als fatale termijn.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 5 - Prijzen en betaling
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Alle prijzen zijn exclusief BTW, tenzij anders vermeld. Betaling
                  dient te geschieden binnen 30 dagen na factuurdatum.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 6 - Aansprakelijkheid
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  De aansprakelijkheid van Keizer Logistics BV is beperkt conform de
                  AVC 2002 (Algemene Vervoercondities) en de CMR (bij internationaal
                  vervoer).
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 7 - Overmacht
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Keizer Logistics BV is niet aansprakelijk voor tekortkomingen als
                  gevolg van overmacht, waaronder begrepen: verkeersbelemmeringen,
                  stakingen, weersomstandigheden en overheidsmaatregelen.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Artikel 8 - Toepasselijk recht
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  Op alle overeenkomsten is uitsluitend Nederlands recht van
                  toepassing. Geschillen worden voorgelegd aan de bevoegde rechter
                  te 's-Gravenhage.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
                  Contact
                </h2>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
                </p>
                <div className="bg-secondary-950 rounded-xl p-5 md:p-6">
                  <address className="text-secondary-300 not-italic text-sm md:text-base leading-relaxed">
                    <strong className="text-white">Keizer Logistics BV</strong><br />
                    Schietlood 14 D<br />
                    2495AN 's-Gravenhage<br /><br />
                    E-mail: <a href="mailto:Info@keizer-logistics.nl" className="text-primary-400 hover:text-primary-300 transition-colors">Info@keizer-logistics.nl</a><br />
                    Telefoon: <a href="tel:+31684903364" className="text-primary-400 hover:text-primary-300 transition-colors">06 84903364</a><br /><br />
                    <span className="text-secondary-500">KvK: 92059902</span><br />
                    <span className="text-secondary-500">BTW: NL865869492B01</span>
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
