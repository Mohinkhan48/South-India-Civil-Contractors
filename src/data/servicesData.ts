import { ServiceDetailData } from '../types';

export const servicesDetailData: Record<string, ServiceDetailData> = {
  'residential-construction': {
    slug: 'residential-construction',
    id: 'res-const',
    title: 'Residential Construction Services',
    seoTitle: 'Residential Construction Services | South India Civil Contractors',
    metaDescription: 'Custom residential villa, house & duplex construction across South India. High structural precision, transparent BOQ & 10-year structural warranty.',
    shortDesc: 'End-to-end custom residential construction, luxury villas, duplex homes and modern bungalows built to strict civil engineering standards.',
    heroImage: '/images/project_villa.jpg',
    heroImageAlt: 'Modern luxury residential villa construction project in South India',
    targetAudience: 'Homeowners, villa clients & real estate investors seeking high-end bespoke house construction.',
    overview: 'South India Civil Contractors specializes in premium residential construction across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, and Mysore. We manage every phase of home construction from soil testing and structural foundation engineering to interior joinery and final handover.',
    whatIsIncluded: [
      'Site survey, soil contour analysis & structural engineering drawings',
      'High-grade M30/M35 RCC foundation, columns & beam slab execution',
      'Anti-corrosive Fe 550D TMT steel and 53-grade cement structural framework',
      'Weatherproof external plastering, stone cladding & water management',
      'Complete MEP (mechanical, electrical, plumbing) concealed installation',
      'Comprehensive 5-layer waterproofing on terraces, basements & wet areas',
      'Final structural audit & 10-year structural warranty documentation'
    ],
    constructionProcess: [
      { step: '01', title: 'Architectural & BOQ Finalization', desc: 'Detailed architectural review, structural load calculations, and itemized transparent BOQ cost lock.' },
      { step: '02', title: 'Foundation & Earthwork', desc: 'Soil testing, excavation, footing pile casting, and subterranean damp-proof membrane laying.' },
      { step: '03', title: 'Superstructure RCC Framing', desc: 'Monolithic beam, column, and slab casting using laser-screed levelling and high-grade concrete.' },
      { step: '04', title: 'Masonry & Utility Concealment', desc: 'Precision AAC block masonry, electrical conduit chasing, and plumbing line pressure testing.' },
      { step: '05', title: 'Finishes & Quality Audit', desc: 'Plastering, stone cladding, glass fitting, interior joinery, and 50-point quality compliance inspection.' }
    ],
    whyChooseUs: [
      'Uncompromising structural engineering and 100% certified raw materials',
      'Transparent itemized Bill of Quantities (BOQ) with zero hidden charges',
      '10-Year written structural guarantee and dedicated site engineers',
      'Dedicated project manager providing weekly digital progress reports'
    ],
    faqs: [
      {
        question: 'How much does residential house construction cost per sq.ft in South India?',
        answer: 'Residential construction costs typically range from ₹2,200 to ₹4,200 per sq.ft depending on specifications (Standard, Luxury, or Ultra-Luxury). We provide a detailed itemized BOQ before construction starts.'
      },
      {
        question: 'How long does a custom villa construction project take to complete?',
        answer: 'A typical 3,500 to 5,000 sq.ft luxury villa takes between 12 to 15 months from ground-breaking to final handover.'
      },
      {
        question: 'Do you provide structural engineering drawings and site supervision?',
        answer: 'Yes, full structural calculations, soil testing, civil engineering drawings, and daily site engineer supervision are included in our scope.'
      },
      {
        question: 'Which cities do you serve for residential construction?',
        answer: 'We undertake residential construction across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Mysore, and Trivandrum.'
      }
    ]
  },

  'commercial-construction': {
    slug: 'commercial-construction',
    id: 'comm-const',
    title: 'Commercial Construction Services',
    seoTitle: 'Commercial Construction Services | South India Civil Contractors',
    metaDescription: 'Grade-A commercial office buildings, retail complexes & corporate headquarters construction across South India. High-span RCC & curtain wall engineering.',
    shortDesc: 'Engineering modern corporate headquarters, retail plazas, IT parks and commercial hubs with post-tensioned spans and curtain-wall glass facades.',
    heroImage: '/images/project_commercial.jpg',
    heroImageAlt: 'Grade-A commercial building construction project in South India',
    targetAudience: 'Commercial developers, corporate enterprises, retail chains & institutional investors.',
    overview: 'We construct high-performance commercial facilities, office buildings, tech parks, and commercial retail complexes. Our commercial engineering team handles deep basement shoring, large column-free post-tensioned floor plates, unitized glass curtain walls, and fire-safety compliance.',
    whatIsIncluded: [
      'Deep foundation piling, anchor shoring & retaining diaphragm walls',
      'Post-tensioned beam-less concrete slabs for maximized ceiling height',
      'Unitized Low-E glass curtain wall facade & louver engineering',
      'High-speed elevator shaft civil construction & multi-tier basement parking',
      'Fire-rated compartmentation, staircases & emergency evacuation cores',
      'Centralized HVAC ducting channels, transformer yards & DG backup rooms',
      'LEED & green building compliance structural integration'
    ],
    constructionProcess: [
      { step: '01', title: 'Site Feasibility & Shoring', desc: 'Geotechnical analysis, deep basement pile shoring, and retaining diaphragm wall construction.' },
      { step: '02', title: 'Core & Shell RCC Superstructure', desc: 'High-strength M35 concrete core elevator walls and post-tensioned floor slab casting.' },
      { step: '03', title: 'Curtain Wall Facade Glazing', desc: 'Unitized structural glass curtain wall installation and thermal louver mounting.' },
      { step: '04', title: 'Heavy MEP & Safety Network', desc: 'Central HVAC ductwork, high-capacity electrical risers, and automatic sprinkler systems.' },
      { step: '05', title: 'Handover & Occupancy Compliance', desc: 'Fire NOC structural readiness, elevator testing, and commercial occupancy handover.' }
    ],
    whyChooseUs: [
      'Proven expertise in large-scale column-free commercial floor plate execution',
      'Strict adherence to IS 456, IS 1893 seismic safety, and commercial fire NOC codes',
      'On-time delivery with penalty-backed milestone schedules',
      'Experienced commercial civil contracting teams across major South Indian IT hubs'
    ],
    faqs: [
      {
        question: 'What types of commercial buildings do you construct?',
        answer: 'We construct corporate office buildings, commercial complexes, IT tech parks, retail shopping centers, and commercial warehouses.'
      },
      {
        question: 'Do you handle basement shoring and multi-level parking civil work?',
        answer: 'Yes, we specialize in deep excavation, diaphragm retaining walls, continuous pile shoring, and multi-tier basement parking civil construction.'
      },
      {
        question: 'Can you build according to LEED green building standards?',
        answer: 'Yes, we integrate low-E glazing, rainwater harvesting, solar roof readiness, and energy-efficient AAC masonry required for LEED certification.'
      }
    ]
  },

  'turnkey-construction': {
    slug: 'turnkey-construction',
    id: 'turnkey-const',
    title: 'Turnkey Construction Services',
    seoTitle: 'Turnkey Construction Services | South India Civil Contractors',
    metaDescription: 'End-to-end turnkey construction solutions from design & civil execution to interior fitouts across South India. Single-point accountability.',
    shortDesc: 'Single-point accountability from architectural planning and foundation casting to interior millwork, landscaping, and final key handover.',
    heroImage: '/images/hero_residence.jpg',
    heroImageAlt: 'Turnkey luxury construction project by South India Civil Contractors',
    targetAudience: 'Clients seeking hassle-free, single-contractor execution without managing multiple vendors.',
    overview: 'Our turnkey construction service provides a complete single-point solution for clients who want an effortless construction experience. We assume complete responsibility for architectural coordination, structural civil engineering, raw material procurement, interior joinery, MEP utilities, and final property commissioning.',
    whatIsIncluded: [
      'Architectural planning, structural design & municipal approval assistance',
      'Complete civil core & shell construction with quality-tested materials',
      'Custom interior millwork, teakwood joinery & Italian marble flooring',
      'Integrated MEP utilities, solar backup & automated lighting controls',
      'Landscaping, infinity pools, water features & security perimeter walls',
      'Fixed lump-sum budget lock with zero cost overruns',
      'Final turnkey handover with key commissioning & maintenance manual'
    ],
    constructionProcess: [
      { step: '01', title: 'Concept & Fixed-Budget Contract', desc: 'Unified design approval, itemized specification lock, and fixed lump-sum contract agreement.' },
      { step: '02', title: 'Civil Foundation & Superstructure', desc: 'Complete foundation, RCC framework, and weather-proof shell completion.' },
      { step: '03', title: 'Concealed MEP & Interior Fitout', desc: 'Electrical risers, plumbing line installation, ceiling framing, and custom millwork.' },
      { step: '04', title: 'Exterior Hardscaping & Finishes', desc: 'Stone cladding, landscape planting, swimming pool hydraulic setup, and illumination.' },
      { step: '05', title: 'Final Commissioning & Key Handover', desc: 'System testing, deep cleaning, quality compliance sign-off, and formal key handover.' }
    ],
    whyChooseUs: [
      'Single-point accountability eliminating friction between architects and civil contractors',
      'Guaranteed fixed budget with complete transparency and zero unexpected price spikes',
      'Dedicated project director managing procurement, civil site, and interior teams',
      'Comprehensive post-handover warranty and maintenance support'
    ],
    faqs: [
      {
        question: 'What does turnkey construction mean?',
        answer: 'Turnkey construction means we manage the entire project from architectural drawings and civil structural foundation to interior finishes and final key handover under one contract.'
      },
      {
        question: 'Are material brands specified in the turnkey agreement?',
        answer: 'Yes, every brand of steel, cement, fixtures, flooring, and paint is explicitly documented in the BOQ contract before work starts.'
      },
      {
        question: 'How do you prevent cost overruns in turnkey projects?',
        answer: 'We lock in fixed-budget lump-sum contracts backed by detailed pre-construction engineering audits, preventing cost escalation.'
      }
    ]
  },

  'civil-construction': {
    slug: 'civil-construction',
    id: 'civil-const',
    title: 'Civil & Structural Construction Services',
    seoTitle: 'Civil Construction Services | South India Civil Contractors',
    metaDescription: 'Heavy civil engineering, concrete superstructure, structural foundations & industrial civil contracting across South India.',
    shortDesc: 'Heavy civil engineering, reinforced concrete superstructure casting, deep pile foundations, retaining walls, and industrial civil infrastructure.',
    heroImage: '/images/enquiry_construction.jpg',
    heroImageAlt: 'Heavy civil construction and concrete structural framing site',
    targetAudience: 'Developers, infrastructure clients & industrial plant owners needing structural concrete expertise.',
    overview: 'South India Civil Contractors delivers heavy civil contracting and structural concrete engineering. Our civil construction teams handle pile foundations, post-tensioned beams, industrial floor slabs, retaining walls, and heavy concrete frames for complex developments across South India.',
    whatIsIncluded: [
      'Geotechnical soil testing, load calculation & pile foundation driving',
      'Reinforced cement concrete (RCC) beam, pillar & slab structural casting',
      'Post-tensioned beam-less concrete floor slabs for industrial & commercial spans',
      'Laser-screed flat industrial flooring (FM2 tolerance) for warehouses',
      'Diaphragm retaining walls, storm drainage networks & heavy paving',
      'Ultrasonic & rebound hammer non-destructive concrete quality testing',
      'IS 456 & IS 1893 seismic compliance structural certification'
    ],
    constructionProcess: [
      { step: '01', title: 'Geotechnical Soil & Pile Test', desc: 'Core drilling, soil load capacity analysis, and pile driving depth determination.' },
      { step: '02', title: 'Foundation & Retaining Structures', desc: 'Pile cap reinforcement, footing casting, and subterranean water-bar membrane installation.' },
      { step: '03', title: 'RCC Superstructure Casting', desc: 'Monolithic column, beam, and slab pour using ready-mix concrete and ultrasonic testing.' },
      { step: '04', title: 'Masonry & Structural Curing', desc: 'Acoustic masonry block laying, 28-day water/chemical curing, and load audit.' },
      { step: '05', title: 'Shell Completion & Handover', desc: 'Structural core handover to MEP and architectural fitting teams.' }
    ],
    whyChooseUs: [
      'Senior civil engineers with over 25+ years of heavy concrete execution expertise',
      'Rigorous on-site cube testing for every concrete batch pour',
      'State-of-the-art aluminum shuttering and laser-screed flooring equipment',
      'Flawless safety record adhering to national NBC and OSHA safety standards'
    ],
    faqs: [
      {
        question: 'Do you undertake core & shell civil construction contracts?',
        answer: 'Yes, we frequently execute standalone Core & Shell civil contracts for commercial developers, industrial plants, and private estate owners.'
      },
      {
        question: 'What concrete grades do you use for structural casting?',
        answer: 'We use high-performance concrete grades ranging from M25 up to M45 depending on structural design and ultrasonic testing requirements.'
      },
      {
        question: 'How do you ensure concrete quality on site?',
        answer: 'Every concrete pour undergoes slump cone testing on arrival and compression cube testing at 7, 14, and 28-day intervals.'
      }
    ]
  },

  'renovation': {
    slug: 'renovation',
    id: 'renovation-const',
    title: 'Renovation & Structural Modification Services',
    seoTitle: 'Renovation & Expansion Services | South India Civil Contractors',
    metaDescription: 'Structural renovation, building expansion, floor additions & heritage modernization across South India. Certified civil retrofitting.',
    shortDesc: 'Structural retrofitting, building vertical expansion, floor additions, heritage modernizations, and coastal property strengthening.',
    heroImage: '/images/project_renovation.jpg',
    heroImageAlt: 'Structural renovation and glass pavilion expansion project in Kerala',
    targetAudience: 'Property owners expanding existing structures, modernizing legacy homes, or retrofitting older buildings.',
    overview: 'Our structural renovation and expansion team breathes new life into existing residential and commercial properties. We specialize in vertical floor additions, structural column retrofitting, heritage manor modernizations, coastal damp-proofing, and architectural glass pavilion extensions.',
    whatIsIncluded: [
      'Non-destructive structural integrity audit & load-bearing capacity assessment',
      'Carbon-fiber composite wrapping & micro-concrete column strengthening',
      'Vertical floor addition civil execution with steel structural framing',
      'Subterranean & coastal anti-damp injection & zero-leakage waterproofing',
      'Architectural glass pavilion & courtyard extension construction',
      'Complete electrical rewiring, plumbing line replacement & tile refitting',
      'Minimal structural disruption during ongoing property tenancy'
    ],
    constructionProcess: [
      { step: '01', title: 'Structural Audit & Retrofit Plan', desc: 'Non-destructive rebound hammer tests, load calculations, and strengthening strategy.' },
      { step: '02', title: 'Underpinning & Column Jacket', desc: 'Micro-concrete jacketing and carbon-fiber beam wrapping for added load capacity.' },
      { step: '03', title: 'Civil Demolition & Floor Addition', desc: 'Controlled structural removal and steel/concrete upper floor extension.' },
      { step: '04', title: 'Envelope & MEP Overhaul', desc: 'Waterproof membrane application, new plumbing manifolds, and electrical risers.' },
      { step: '05', title: 'Refined Finishing & Handover', desc: 'Architectural finishes, stone polishing, glass installation, and final handover.' }
    ],
    whyChooseUs: [
      'Certified civil retrofitting expertise preventing structural distress during expansion',
      'Specialized experience in preserving heritage granite/wood while integrating modern glass',
      'Dust-controlled, safe execution minimizing disruption to surrounding structures',
      'Written 10-year waterproofing and structural retrofitting warranty'
    ],
    faqs: [
      {
        question: 'Can you add an additional floor to an existing building safely?',
        answer: 'Yes, we first conduct a non-destructive structural audit of the existing foundation and pillars. If required, we retrofit columns with carbon-fiber or concrete jacketing before adding the upper floor.'
      },
      {
        question: 'Do you renovate heritage properties in South India?',
        answer: 'Yes, we specialize in restoring traditional Chettinad, Kerala, and colonial structures while adding modern amenities and structural glass pavilions.'
      },
      {
        question: 'How long does a full home structural renovation take?',
        answer: 'Major structural renovations typically range from 6 to 10 months depending on structural retrofitting requirements.'
      }
    ]
  }
};
