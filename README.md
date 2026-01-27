# Keizer Logistics BV - Website

Professionele website voor Keizer Logistics BV, een transport- en logistiekbedrijf.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Taal**: TypeScript
- **Styling**: TailwindCSS
- **Testing**: Jest + React Testing Library

## Vereisten

- Node.js 18.x of hoger (LTS)
- npm 9.x of hoger

## Installatie

```bash
# Clone de repository
cd keizer-logistics

# Installeer dependencies
npm install
```

## Development

```bash
# Start de development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Productie Build

```bash
# Maak een productie build
npm run build

# Start de productie server
npm start
```

## Testing

```bash
# Run alle tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Projectstructuur

```
keizer-logistics/
├── app/                    # Next.js App Router pagina's
│   ├── layout.tsx         # Root layout met metadata en structured data
│   ├── page.tsx           # Homepage
│   ├── services/          # Dienstenpagina
│   ├── about/             # Over ons pagina
│   ├── contact/           # Contactpagina
│   ├── actions/           # Server Actions
│   ├── sitemap.ts         # Dynamische sitemap
│   ├── robots.ts          # Robots.txt configuratie
│   └── globals.css        # Globale styles
├── components/            # React componenten
│   ├── Header.tsx        # Navigatie header
│   ├── Footer.tsx        # Footer met bedrijfsinfo
│   ├── Hero.tsx          # Hero sectie homepage
│   ├── ServicesOverview.tsx
│   ├── WhyChooseUs.tsx
│   ├── CTASection.tsx
│   └── ContactForm.tsx   # Contactformulier met validatie
├── public/               # Statische bestanden
│   └── images/
├── tests/                # Test bestanden
│   └── unit/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Pagina's

| Pagina | Route | Beschrijving |
|--------|-------|--------------|
| Home | `/` | Homepage met hero, diensten overzicht, USPs |
| Diensten | `/services` | Gedetailleerd overzicht van alle diensten |
| Over ons | `/about` | Bedrijfsinformatie, geschiedenis, kernwaarden |
| Contact | `/contact` | Contactformulier en bedrijfsgegevens |

## Features

- Mobile-first responsive design
- SEO geoptimaliseerd (meta tags, structured data, sitemap)
- Contactformulier met server-side validatie (Next.js Server Actions)
- Toegankelijkheid (WCAG AA basis)
- Performance geoptimaliseerd (image optimization, lazy loading)

## SEO

De website bevat:

- Dynamische meta titles en descriptions per pagina
- Open Graph en Twitter Cards voor social sharing
- Structured data (Organization, LocalBusiness)
- Automatisch gegenereerde sitemap.xml
- robots.txt configuratie

## Deployment

De website is geoptimaliseerd voor deployment op Vercel:

```bash
# Via Vercel CLI
npx vercel

# Of koppel de repository aan Vercel voor automatische deploys
```

## Configuratie

### Bedrijfsgegevens aanpassen

De bedrijfsgegevens staan op meerdere plekken:

1. `app/layout.tsx` - Structured data en meta informatie
2. `components/Footer.tsx` - Footer contactgegevens
3. `app/contact/page.tsx` - Contactpagina informatie

### Kleuren aanpassen

De kleurenschema's zijn geconfigureerd in `tailwind.config.js` onder `theme.extend.colors`.

## Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## Licentie

Alle rechten voorbehouden - Keizer Logistics BV
