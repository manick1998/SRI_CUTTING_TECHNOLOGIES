import {
  CircleDot,
  Grid2x2,
  Hammer,
  Layers,
  Minus,
  Rows3,
  Ruler,
  Scissors,
  SquareStack,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type ServiceDetail = {
  slug: string
  title: string
  icon: LucideIcon
  /** Short line used on the homepage service cards */
  short: string
  /** Longer intro for the dedicated service page */
  long: string
  /** Typical applications / use-cases */
  applications: string[]
}

/**
 * Single source of truth for services. Used by:
 *  - the homepage Services grid (cards link to /services/[slug])
 *  - the dedicated /services/[slug] pages (generateStaticParams)
 *  - the sitemap
 */
export const services: ServiceDetail[] = [
  {
    slug: 'concrete-core-cutting',
    title: 'Concrete Core Cutting',
    icon: CircleDot,
    short:
      'Clean circular holes for plumbing, HVAC, electrical and structural anchoring — any diameter, any depth.',
    long: 'Diamond core drilling produces perfectly round, clean-edged openings through reinforced concrete, brick and blockwork. From small service penetrations to large-diameter cores, we deliver precise holes with minimal vibration and zero structural damage — ideal for live and occupied buildings.',
    applications: [
      'Plumbing, drainage & HVAC penetrations',
      'Electrical & data cable routing',
      'Anchor bolt & structural fixing holes',
      'Core sampling & testing',
    ],
  },
  {
    slug: 'wall-saw-cutting',
    title: 'Wall Saw Cutting',
    icon: SquareStack,
    short:
      'Precise openings for doors, windows and ducts in thick reinforced concrete walls.',
    long: 'Track-mounted hydraulic wall saws cut accurate vertical and horizontal openings in reinforced concrete walls up to great depths. We create clean door, window, lift-shaft and duct openings with controlled, dust-suppressed cutting that protects the surrounding structure.',
    applications: [
      'New door & window openings',
      'Lift shafts & stair openings',
      'Duct & service penetrations',
      'Wall modifications & retrofits',
    ],
  },
  {
    slug: 'wire-saw-cutting',
    title: 'Wire Saw Cutting',
    icon: Waves,
    short:
      'Diamond wire cutting for massive sections, piers and hard-to-reach structures.',
    long: 'Diamond wire sawing is the solution for oversized or heavily reinforced elements that other methods cannot reach — thick foundations, bridge piers, large beams and underwater or confined structures. It delivers deep, accurate cuts with no depth limitation and exceptional safety control.',
    applications: [
      'Massive foundations & pile heads',
      'Bridge piers & marine structures',
      'Heavily reinforced beams & columns',
      'Confined or hard-to-access sections',
    ],
  },
  {
    slug: 'slab-saw-cutting',
    title: 'Slab & Floor Saw Cutting',
    icon: Layers,
    short:
      'Accurate horizontal and straight cuts through slabs, floors and pavements.',
    long: 'Walk-behind and ride-on slab saws cut precise horizontal openings and long straight lines through concrete slabs, industrial floors, roads and pavements. We produce clean edges for openings, trenches and joints while keeping sites safe and operational.',
    applications: [
      'Floor & slab openings',
      'Road, pavement & runway cutting',
      'Service trenches in floors',
      'Industrial floor modifications',
    ],
  },
  {
    slug: 'rcc-cutting',
    title: 'RCC Cutting',
    icon: Wrench,
    short:
      'Heavy reinforced concrete cutting through dense rebar without structural damage.',
    long: 'Cutting heavily reinforced cement concrete demands the right tooling and method. Our diamond blades and saws slice cleanly through dense rebar and high-grade concrete, allowing precise structural alterations while safeguarding load paths and adjacent elements.',
    applications: [
      'Reinforced beam & column alterations',
      'Slab & wall openings in RCC',
      'Staircase & opening modifications',
      'Structural retrofitting works',
    ],
  },
  {
    slug: 'groove-cutting',
    title: 'Groove Cutting',
    icon: Minus,
    short:
      'Controlled grooving for cables, joints and anti-skid surface treatments.',
    long: 'Precision groove cutting creates neat channels for concealed cabling, pipework and control joints, as well as anti-skid grooving on ramps and floors. We cut to exact depth and width for a clean, professional finish every time.',
    applications: [
      'Concealed cabling & pipe channels',
      'Control & contraction joints',
      'Anti-skid ramp & floor grooving',
      'Surface preparation lines',
    ],
  },
  {
    slug: 'beam-cutting',
    title: 'Beam Cutting',
    icon: Rows3,
    short:
      'Careful sectioning of RCC beams while safeguarding the surrounding structure.',
    long: 'Beam cutting requires careful planning to protect structural integrity. We section and remove reinforced beams using controlled methods and temporary support where needed, ensuring safe, precise alterations without compromising the building.',
    applications: [
      'Beam removal & modification',
      'Headroom & opening creation',
      'Structural alteration works',
      'Selective dismantling',
    ],
  },
  {
    slug: 'expansion-joint-cutting',
    title: 'Expansion Joint Cutting',
    icon: Ruler,
    short:
      'Precise joints that manage thermal movement and prevent cracking.',
    long: 'Properly cut expansion and isolation joints control cracking caused by thermal movement and shrinkage. We cut straight, true joints to the correct depth and spacing to extend the life of slabs, floors and pavements.',
    applications: [
      'Slab & floor isolation joints',
      'Pavement & car-park joints',
      'Crack-control joint cutting',
      'Joint re-cutting & repair',
    ],
  },
  {
    slug: 'concrete-breaking',
    title: 'Concrete Breaking',
    icon: Hammer,
    short:
      'Controlled breaking and removal for renovations and structural alterations.',
    long: 'Where cutting is combined with removal, we provide controlled concrete breaking and debris handling. Using the right breakers and techniques, we remove concrete cleanly and safely while protecting reinforcement and surrounding finishes.',
    applications: [
      'Renovation & strip-out works',
      'Foundation & plinth breaking',
      'Selective concrete removal',
      'Debris handling & clearing',
    ],
  },
  {
    slug: 'controlled-demolition',
    title: 'Controlled Demolition',
    icon: Zap,
    short:
      'Engineered, low-impact demolition that protects adjacent structures and occupants.',
    long: 'Our controlled demolition is engineered for safety and precision — dismantling structures piece by piece with minimal noise, dust and vibration. It is the right choice for sensitive, occupied or built-up sites where neighbouring structures must remain untouched.',
    applications: [
      'Occupied & live-site demolition',
      'Partial / selective demolition',
      'Built-up urban sites',
      'Hospitals, schools & factories',
    ],
  },
  {
    slug: 'industrial-demolition',
    title: 'Industrial Demolition',
    icon: Scissors,
    short:
      'Large-scale dismantling of factories and plants with full safety compliance.',
    long: 'From factory floors to plant structures, we handle large-scale industrial demolition with rigorous safety planning, method statements and compliant waste handling. We keep projects on schedule while protecting people, assets and the environment.',
    applications: [
      'Factory & warehouse dismantling',
      'Plant & machinery removal',
      'Chimney & structure demolition',
      'Site clearance & handover',
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
