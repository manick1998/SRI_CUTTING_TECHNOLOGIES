export type LocationDetail = {
  slug: string
  city: string
  state: string
  /** Localised intro paragraph */
  blurb: string
  /** Areas / localities covered near this city */
  areas: string[]
}

/**
 * Single source of truth for location landing pages. Used by:
 *  - /locations/[slug] pages (generateStaticParams)
 *  - the sitemap
 */
export const locations: LocationDetail[] = [
  {
    slug: 'puducherry',
    city: 'Puducherry',
    state: 'Puducherry',
    blurb:
      'Based in the Puducherry region, SRI Cutting Technologies delivers precision concrete cutting and controlled demolition across Pondicherry and nearby towns. From residential renovations to industrial and government projects, our team mobilises fast with the right diamond machinery and strict safety discipline.',
    areas: ['Pondicherry', 'Villianur', 'Ariyankuppam', 'Bahour', 'Cuddalore'],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    blurb:
      'We provide concrete core cutting, wall saw, wire saw and controlled demolition services throughout Chennai and its industrial corridors. Builders, MEP contractors and facility managers across the city rely on us for dust-controlled, vibration-free cutting on live and occupied sites.',
    areas: ['Anna Nagar', 'T. Nagar', 'OMR', 'Ambattur', 'Guindy', 'Sriperumbudur'],
  },
  {
    slug: 'coimbatore',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    blurb:
      'Serving Coimbatore and the western Tamil Nadu industrial belt, we handle everything from RCC openings in factories to controlled demolition of plant structures. Our engineered methods keep production environments running while we cut safely and precisely.',
    areas: ['Peelamedu', 'Avinashi Road', 'Saravanampatti', 'Pollachi', 'Tiruppur'],
  },
  {
    slug: 'madurai',
    city: 'Madurai',
    state: 'Tamil Nadu',
    blurb:
      'Across Madurai and southern Tamil Nadu we deliver reliable concrete cutting and demolition for residential, commercial and infrastructure works. Expect clear quotes, on-time mobilisation and zero-damage engineering on every project.',
    areas: ['K. K. Nagar', 'Goripalayam', 'Simmakkal', 'Sivaganga', 'Dindigul'],
  },
  {
    slug: 'bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    blurb:
      'For Bengaluru’s fast-moving construction and tech-campus projects, we provide precise core drilling, slab and wall sawing, and low-impact demolition. Our quiet, dust-controlled techniques are ideal for occupied offices, hospitals and residential towers.',
    areas: ['Whitefield', 'Electronic City', 'Hebbal', 'HSR Layout', 'Peenya'],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    blurb:
      'We mobilise to Hyderabad and the surrounding growth corridors for concrete cutting and controlled demolition assignments of any scale. From high-rise openings to industrial dismantling, we deliver with precision, safety and full compliance.',
    areas: ['HITEC City', 'Gachibowli', 'Kukatpally', 'Secunderabad', 'Shamshabad'],
  },
]

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug)
}
