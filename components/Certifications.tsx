import Image from 'next/image'

const certifications = [
  {
    name: 'NIWO Vergunning',
    description: 'Erkende vergunning voor beroepsgoederenvervoer over de weg',
    logo: '/images/niwo-certificaat.png',
  },
  {
    name: 'Loongarantie',
    description: 'Gegarandeerde en betrouwbare uitbetaling voor al ons personeel',
    logo: '/images/pay-checked.png',
  },
]

export default function Certifications() {
  return (
    <section className="py-12 md:py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-primary-600 text-sm font-medium tracking-wider uppercase mb-3 block">
            Kwaliteit & Betrouwbaarheid
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900">
            Gecertificeerd & Erkend
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain p-3"
                  sizes="112px"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-secondary-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-secondary-600 text-base md:text-lg leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
