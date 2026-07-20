export const SITE_URL = 'https://sricuttingtech.in'

export const site = {
  name: 'SRI Cutting Technologies',
  shortName: 'SRI Cutting',
  tagline: 'Precision Concrete Cutting & Controlled Demolition',
  founder: 'Sivalingam R',
  phoneDisplay: '+91 87787 60661',
  phoneHref: 'tel:+918778760661',
  whatsappHref:
    'https://wa.me/918778760661?text=Hi%20SRI%20Cutting%20Technologies%2C%20I%20would%20like%20a%20quote%20for%20a%20concrete%20cutting%20project.',
  instagramHref: 'https://www.instagram.com/siva.lingam.923519/',
  instagramHandle: '@siva.lingam.923519',
  // Professional email on your own domain.
  // ⚠️ Make sure the mailbox (e.g. via Zoho Mail / Google Workspace) is set up so mails are received.
  email: 'info@sricuttingtech.in',
  emailHref: 'mailto:info@sricuttingtech.in',
  address: 'Puducherry, India — serving Tamil Nadu, Karnataka, Telangana & projects across India',
  // Structured fields for schema / SEO
  addressLocality: 'Puducherry',
  addressRegion: 'Puducherry',
  addressCountry: 'IN',
  coords: { latitude: 11.9416, longitude: 79.8083 },
  serviceAreas: [
    'Puducherry',
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Bengaluru',
    'Hyderabad',
    'Tamil Nadu',
    'India',
  ],
} as const

export const navLinks = [
  { label: 'Videos', href: '/#videos' },
  { label: 'Our Work', href: '/#projects' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
] as const
