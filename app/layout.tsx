import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = 'https://sricuttingtech.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SRI Cutting Technologies | Concrete Cutting & Controlled Demolition in India',
    template: '%s | SRI Cutting Technologies',
  },
  description:
    'India\u2019s trusted concrete cutting and controlled demolition specialists. Core cutting, wall & wire saw cutting, RCC cutting, groove cutting and industrial demolition delivered with precision, safety and zero-damage engineering. Get a free site quote.',
  keywords: [
    'concrete cutting India',
    'concrete core cutting',
    'wall saw cutting',
    'wire saw cutting',
    'RCC cutting',
    'controlled demolition',
    'industrial demolition',
    'floor saw cutting',
    'expansion joint cutting',
    'concrete breaking services',
  ],
  authors: [{ name: 'SRI Cutting Technologies' }],
  creator: 'SRI Cutting Technologies',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SRI Cutting Technologies',
    title: 'SRI Cutting Technologies | Precision Concrete Cutting & Controlled Demolition',
    description:
      'Precision concrete cutting and controlled demolition across India. Dust-controlled, vibration-free, structurally safe. Trusted by builders, engineers and government contractors.',
    images: [
      {
        url: '/images/hero-wall-saw.png',
        width: 1200,
        height: 630,
        alt: 'SRI Cutting Technologies operator performing precision wall saw concrete cutting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRI Cutting Technologies | Precision Concrete Cutting & Demolition',
    description:
      'India\u2019s trusted concrete cutting & controlled demolition company. Precision. Safety. Zero-damage engineering.',
    images: ['/images/hero-wall-saw.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0f1115',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'SRI Cutting Technologies',
      image: `${SITE_URL}/images/hero-wall-saw.png`,
      description:
        'Concrete cutting and controlled demolition company providing core cutting, wall saw, wire saw, RCC cutting and industrial demolition services across India.',
      url: SITE_URL,
      telephone: '+91-8778760661',
      email: 'manick1323@gmail.com',
      areaServed: ['Tamil Nadu', 'Puducherry'],
    },
    {
      '@type': 'Service',
      serviceType: 'Concrete Cutting & Controlled Demolition',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Concrete Cutting Services',
        itemListElement: [
          'Concrete Core Cutting',
          'Wall Saw Cutting',
          'Wire Saw Cutting',
          'Slab Saw Cutting',
          'Groove Cutting',
          'Beam Cutting',
          'Floor Saw Cutting',
          'RCC Cutting',
          'Expansion Joint Cutting',
          'Concrete Breaking',
          'Controlled Demolition',
          'Industrial Demolition',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer dust-free and vibration-free concrete cutting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We use water-cooled diamond tooling and controlled cutting techniques that virtually eliminate dust and vibration, protecting the surrounding structure and occupants.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which locations do you serve across India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We operate across major cities and industrial corridors including Chennai, Bengaluru, Hyderabad, Coimbatore, Mumbai and Pune, and mobilise nationwide for large infrastructure projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work on live and occupied sites such as hospitals and factories?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Our low-noise, dust-controlled methods and strict safety protocols are designed for sensitive environments including hospitals, schools and running factories.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
        { '@type': 'ListItem', position: 3, name: 'Contact', item: `${SITE_URL}/#contact` },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
