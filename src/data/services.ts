import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Construction',
    shortDesc: 'Bespoke luxury villas, modern residences, and custom duplexes crafted with architectural finesse and durable engineering.',
    fullDesc: 'We specialize in executing custom-designed luxury residences, villas, and independent homes across South India. From soil testing and deep foundation engineering to architectural stonework, double-height glazing, and climate-responsive thermal insulation, our residential builds combine unmatched durability with luxury aesthetics.',
    iconName: 'Home',
    deliverables: [
      'Architectural Layout & 3D Structural Modeling',
      'High-grade RCC Foundation & Superstructure',
      'Premium Teak Woodwork, Glazing & Stone Masonry',
      'Smart Home Electrical & Concealed Plumbing Integration',
      'Vastu-compliant Civil Engineering Execution'
    ],
    specs: [
      'M25 / M30 Grade Certified Concrete',
      'Tata Tiscon / JSW 550D Fe Steel TMT Bars',
      'Double-layer Polymer Waterproofing Guarantee',
      'Acoustic-grade UPVC & Thermal-break Aluminum Windows'
    ],
    featuredImage: '/images/project_villa.jpg'
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Construction',
    shortDesc: 'State-of-the-art office buildings, tech parks, retail spaces, and institutional facilities engineered for performance.',
    fullDesc: 'Delivering robust commercial infrastructure tailored to modern corporate enterprise needs. We execute structural steel frames, high-load concrete framing, curtain-wall facades, acoustic partitions, and energy-efficient HVAC-ready civil envelopes with strict adherence to industrial building safety codes.',
    iconName: 'Building2',
    deliverables: [
      'Large-span Post-Tensioned (PT) Concrete Slabs',
      'Unitized Glass Curtain-wall & Kinetic Louver Facades',
      'Multi-level Basement Construction & Retaining Walls',
      'Fire Safety, STP, Rainwater Harvesting & LEED Compliance',
      'High-traffic Floor Loading & Industrial Flooring'
    ],
    specs: [
      'Heavy-load RCC Framed Superstructures',
      'NBC (National Building Code) Safety Certified',
      'Integrated BMS (Building Management System) Raceways',
      'Seismic Zone III & IV Compliant Structural Engineering'
    ],
    featuredImage: '/images/project_commercial.jpg'
  },
  {
    id: 'renovation',
    number: '03',
    title: 'Renovation & Remodeling',
    shortDesc: 'Structural transformations, floor additions, heritage restorations, and modern spatial reconfigurations.',
    fullDesc: 'Breathe new life into existing buildings with precision structural retrofitting, beam strengthening, floor expansions, and modern architectural facelifts. We combine traditional stone masonry with cutting-edge steel and glass pavilions without compromising the building’s structural core.',
    iconName: 'Hammer',
    deliverables: [
      'Non-destructive Structural Strength Assessment (NDT)',
      'Carbon-fiber Wrapping & Steel Jacketing Retrofits',
      'Modern Facade Upgrades & Glass Sunroom Additions',
      'Electrical Rewiring, Plumbing Modernization & Wet-area Waterproofing',
      'Heritage Stone Restoration & Teak Wood Preservation'
    ],
    specs: [
      'Minimal Disturbance Dust-barrier Enclosures',
      'Chemical Anchor Fastening with Hilti Systems',
      'Laser-leveling for Flat Structural Alignment',
      'Comprehensive 5-Year Waterproofing Warranty'
    ],
    featuredImage: '/images/project_renovation.jpg'
  },
  {
    id: 'civil-structural',
    number: '04',
    title: 'Civil & Structural Works',
    shortDesc: 'Precision earthworks, deep pile foundations, retaining walls, heavy RCC casting, and structural steel fabrication.',
    fullDesc: 'The backbone of enduring architecture. Our civil engineering division excels in complex geotechnical solutions, contiguous pile shoring, deep basements, precision shuttering, laser-screed concrete laying, and heavy structural steel erection with rigorous on-site laboratory testing.',
    iconName: 'Compass',
    deliverables: [
      'Geotechnical Soil Investigation & Deep Pile Foundations',
      'Contiguous Piles & Diaphragm Retaining Walls',
      'Pre-engineered Steel Building (PEB) Structures',
      'Industrial Slabs with Heavy-duty Hardener Finishes',
      'Stormwater Drainage Networks & Water Retention Sumps'
    ],
    specs: [
      'On-site Slump & 7/28-day Cube Compressive Strength Tests',
      'High-precision Total Station & Laser Theodolite Alignment',
      'Corrosion-inhibiting Epoxy Bar Coatings',
      'High-grade Mivan Aluminum Formwork Available'
    ],
    featuredImage: '/images/why_us_arch.jpg'
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Project Management & PMC',
    shortDesc: 'Independent site supervision, quality audits, cost control, vendor coordination, and strict timeline governance.',
    fullDesc: 'Ensuring your construction investment is executed with zero compromise. Our Project Management Consultancy (PMC) team conducts daily site inspections, checks bar-bending schedules, monitors curing cycles, verifies raw material test reports, and provides live digital reporting to clients.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Critical Path Method (CPM) Schedule Monitoring',
      'Vendor Bill Verification & Quantity Surveying (QS)',
      'Multi-point Quality Assurance (QA/QC) Site Audits',
      'Safety Audits & Worker HSE Compliance',
      'Weekly 4K Drone Footage & Client Progress Dashboards'
    ],
    specs: [
      'ISO 9001:2015 Quality Management Protocols',
      'Transparent Cloud-based Milestone Tracking',
      'Third-party Material Laboratory Test Validation',
      'Zero-tolerance Punch-list Rectification Process'
    ],
    featuredImage: '/images/hero_residence.jpg'
  }
];
