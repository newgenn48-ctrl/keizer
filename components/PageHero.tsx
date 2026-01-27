import Image from 'next/image'

interface PageHeroProps {
  title: string
  description: string
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative bg-primary-900 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/keizer-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-primary-900/75" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
