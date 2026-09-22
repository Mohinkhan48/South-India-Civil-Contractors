import React, { useState, useEffect, useRef, useCallback } from 'react';
import { siteConfig } from '../config/site';
import { ChevronDown, Shield, Award, FileCheck, HardHat, BookOpen } from 'lucide-react';
import { brandListRow1, brandListRow2 } from './BrandMarquee';

interface ResourcesPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
  initialSectionId?: string;
}

const qualityStandards = [
  { icon: Shield, title: 'ISO 9001:2015 Certified', description: 'Quality management system ensuring consistent, high-quality service delivery.' },
  { icon: Award, title: 'National Building Code', description: 'Full compliance with NBC standards for structural safety and construction practices.' },
  { icon: FileCheck, title: 'Quality Assurance Protocol', description: 'Multi-stage inspection and testing at every phase of construction.' },
  { icon: HardHat, title: 'Safety Standards', description: 'OSHA-compliant safety measures and regular safety audits.' },
];

const techSpecItems = [
  {
    id: 'footings',
    label: 'TYPES OF FOOTINGS',
    items: [
      'Combined Footings',
      'Spread Footings',
      'Raft Mat Foundation',
      'Isolated Footings',
      'Strapped Footings',
      'Pile Foundation',
      'Stepped Footings',
      'Shallow Foundations',
      'Strip Footings',
      'Individual Footings',
      'Deep Foundation',
    ],
  },
  {
    id: 'columns',
    label: 'TYPES OF COLUMNS',
    items: [
      'L and T shaped Column',
      'Square or Rectangular Column',
      'Spiral Column',
      'Tied Column',
      'Circular Column',
      'Composite Column',
      'Reinforced Concrete Column',
      'Axially Loaded Column',
      'Uniaxial Eccentrically Loaded Column',
    ],
  },
  {
    id: 'retaining-wall',
    label: 'RETAINING WALL',
    items: [
      'Gravity Retaining Wall',
      'Cantilever Retaining Wall',
      'Piled Retaining Wall',
      'Counter-Fort/Buttressed Retaining Wall',
      'Crib Retaining Wall',
      'Mechanically Stabilized Earth (MSE) Retaining Wall',
    ],
  },
  {
    id: 'partition-wall',
    label: 'PARTITION WALL',
    items: [
      'Load Bearing Wall',
      'Shear Wall',
      'Brick Masonry Wall',
      'Course Rubble Stone Masonry Walls',
      'Parapet Walls',
      'Curtain Walls',
      'Boundary Wall or Compound Walls',
    ],
  },
  {
    id: 'beams',
    label: 'BEAMS',
    items: [
      'Fixed beam',
      'Overhanging beam',
      'T-beam',
      'L-beam',
      'I-beams',
      'H-beams',
      'Truss beam',
      'Steel beam',
      'Curved beam',
      'Deep beam',
      'Simply Supported Beam',
      'Continuous Beam',
      'Cantilever Beam',
      'HIP Beam',
      'Trussed Beam',
      'Lattice Beam',
      'Composite Beam',
      'Beam Bridge',
      'Tie Beam',
    ],
  },
  {
    id: 'staircase',
    label: 'STAIRCASE',
    items: [
      'Chain Stairs',
      'Straight Stairs',
      'Quarter Turn Stairs (L Shaped Stairs)',
      'Switchback Stairs (U-Shaped Stairs)',
      'Alternating Tread Stairs',
      'Crossover Stairs',
      'Ladder Stairs (Ship Stairs)',
      'Circular Stairs',
      'Floating Stairs (Cantilever Stairs)',
      'Spiral Stairs',
    ],
  },
  {
    id: 'slabs',
    label: 'SLABS',
    items: [
      'One Way Slab',
      'Two-Way Slab',
      'Flat Plate',
      'Waffle Slab',
      'Grid Slab',
      'Ribbed Slab',
      'Hardy Slab',
      'Dome Slab',
      'Post-tensioned Slabs',
      'Prefabricated Slabs',
      'Arched Slab',
      'Cantilever Slab',
      'Low Roof Slab',
      'Sunken Slab',
      'Composite Slab',
    ],
  },
  {
    id: 'bricks-wall',
    label: 'BRICKS WALL',
    items: [
      'Hollow concrete blocks',
      'Solid concrete blocks',
      'ACC blocks',
      'Stone Wall',
      'Concrete Wall',
      'Curtain Wall',
      'Retaining Wall',
      'Non-retaining Wall',
    ],
  },
  {
    id: 'concrete',
    label: 'CONCRETE',
    items: [
      'Normal Strength Concrete',
      'Plain or Ordinary Concrete',
      'Reinforced Concrete',
      'Prestressed Concrete',
      'Precast Concrete',
      'High-Density Concrete',
      'Ready Mix Concrete',
      'High Strength Concrete',
      'High-Performance Concrete',
      'Shotcrete Concrete',
      'Pervious Concrete',
      'Rapid Strength Concrete',
      'Screed Concrete',
    ],
  },
];

const materialItems: {
  id: string;
  label: string;
  labelColor?: string;
  groups: { heading?: string; items: string[] }[];
}[] = [
    {
      id: 'steel',
      label: 'STEEL',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Trusted Steel Brands:',
          items: ['Tata Tiscon', 'JSW Neosteel', 'Indus', 'Jindal Panther', 'SK Super', 'Kamdhenu'],
        },
        {
          heading: 'Steel Grades:',
          items: ['Fe 415', 'Fe 500', 'Fe 550', 'Fe 600'],
        },
      ],
    },
    {
      id: 'cement',
      label: 'CEMENT',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Premium Cement Brands:',
          items: ['ACC', 'Birla Super', 'Ultra Tech', 'Ramco', 'Zuari'],
        },
      ],
    },
    {
      id: 'wood',
      label: 'WOOD',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Quality Wood Types:',
          items: ['Karnataka Teak Wood', 'Gujarat Neem Wood', 'Assam Redsal & Gumsal Wood', 'Malaysia Honne Wood'],
        },
      ],
    },
    {
      id: 'electrical',
      label: 'ELECTRICAL',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Electrical Systems:',
          items: ['Havells', 'V Guard'],
        },
      ],
    },
    {
      id: 'painting',
      label: 'PAINTING',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Premium Paint Brands:',
          items: ['Asian Paint', 'Berger Paint'],
        },
      ],
    },
    {
      id: 'plumbing',
      label: 'PLUMBING',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Plumbing Systems:',
          items: ['Astral', 'Ashirvad', 'Supreme'],
        },
      ],
    },
    {
      id: 'flooring',
      label: 'FLOORING VITRIFIED TILES',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Premium Tile Brands:',
          items: ['Kajaria', 'Somany', 'Nitco'],
        },
      ],
    },
    {
      id: 'bathroom',
      label: 'BATHROOM & SANITARY FITTINGS',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Luxury Bathroom Fittings:',
          items: ['Jaguar', 'Hindware', 'Parryware', 'Cera', 'Huda'],
        },
      ],
    },
    {
      id: 'doors',
      label: 'DOORS & FITTINGS',
      labelColor: '#1A2B5A',
      groups: [
        {
          heading: 'Door Solutions:',
          items: ['Flush & Panel Doors', 'Godrej', 'Europa'],
        },
      ],
    },
  ];

const constructionMethodologies = [
  {
    number: '1',
    title: 'Site Survey & Planning',
    description: 'Comprehensive site analysis, soil testing, and detailed project planning before commencement.',
  },
  {
    number: '2',
    title: 'Foundation Engineering',
    description: 'Advanced foundation techniques including pile foundation, raft foundation based on soil conditions.',
  },
  {
    number: '3',
    title: 'Structural Construction',
    description: 'Modern formwork systems, precision in reinforcement, and quality concrete pouring methods.',
  },
  {
    number: '4',
    title: 'MEP Integration',
    description: 'Coordinated Mechanical, Electrical, and Plumbing systems integration during construction.',
  },
  {
    number: '5',
    title: 'Finishing Works',
    description: 'Precision in flooring, painting, and all finishing touches with attention to detail.',
  },
  {
    number: '6',
    title: 'Quality Control',
    description: 'Regular testing, inspections, and documentation at every construction stage.',
  },
];

const safetyProtocols = [
  'Personal Protective Equipment (PPE) mandatory for all workers',
  'Regular safety training and toolbox talks',
  'Scaffolding inspection and maintenance protocols',
  'Emergency response and first-aid provisions',
  'Fire safety measures and equipment',
  'Proper signage and barricading',
  'Electrical safety compliance',
  'Material handling and storage safety',
];

const complianceStandards = [
  {
    title: 'Building Regulations',
    description: 'Local building authority approvals and regulations',
  },
  {
    title: 'Environmental Norms',
    description: 'Eco-friendly construction practices and waste management',
  },
  {
    title: 'Labor Laws',
    description: 'Compliance with labor welfare and safety regulations',
  },
  {
    title: 'Fire Safety Code',
    description: 'Fire NOC and safety system installations',
  },
  {
    title: 'Structural Safety',
    description: 'Structural stability certificates and load calculations',
  },
  {
    title: 'Occupancy Certificate',
    description: 'Final OC procurement from authorities',
  },
];

interface AccordionGroup {
  heading?: string;
  items: string[];
}

interface AccordionItemProps {
  id: string;
  label: string;
  labelColor?: string;
  content?: string;
  items?: string[];
  groups?: AccordionGroup[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ label, labelColor = '#1A2B5A', content, items, groups, isOpen, onToggle }) => (
  <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.06)', overflow: 'hidden', border: '1px solid #e2e8f0', transition: 'box-shadow 0.3s, border-color 0.3s' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 14.5, letterSpacing: '0.04em', color: labelColor, fontFamily: 'inherit' }}>{label}</span>
      <ChevronDown style={{ width: 20, height: 20, color: '#64748B', flexShrink: 0, transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
    </button>
    <div
      style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            padding: '16px 24px 22px 24px',
            fontSize: 14,
            color: '#475569',
            lineHeight: 1.65,
            borderTop: '1px solid #f1f5f9',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {groups && groups.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {groups.map((group, gIdx) => (
                <div key={gIdx}>
                  {group.heading && (
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#1A2B5A', marginBottom: 6 }}>
                      {group.heading}
                    </div>
                  )}
                  <ul style={{ margin: 0, paddingLeft: 18, listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ color: '#334155', fontSize: 14, fontWeight: 500 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : items && items.length > 0 ? (
            <ul style={{ margin: 0, paddingLeft: 18, listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((item, index) => (
                <li key={index} style={{ color: '#334155', fontSize: 14, fontWeight: 500 }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  </div>
);



export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onOpenQuote: _onOpenQuote,
  onNavigateContact: _onNavigateContact,
  initialSectionId,
}) => {
  const canonicalUrl = `${siteConfig.siteUrl}/resources`;
  const [openTechSpec, setOpenTechSpec] = useState<string | null>('footings');
  const [openMaterial, setOpenMaterial] = useState<string | null>(null);

  // ── Scroll reveal ──────────────────────────────────────────
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const addRevealRef = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-revealed'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  // ───────────────────────────────────────────────────────────

  useEffect(() => {
    document.title = 'Resources | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Technical specifications, quality standards, premium brands and materials used by South India Civil Contractors.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  useEffect(() => {
    if (initialSectionId && initialSectionId !== 'hero' && initialSectionId !== 'technical-specifications') {
      setTimeout(() => {
        const el = document.getElementById(initialSectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialSectionId]);

  const toggleTechSpec = (id: string) => setOpenTechSpec(prev => (prev === id ? null : id));
  const toggleMaterial = (id: string) => setOpenMaterial(prev => (prev === id ? null : id));

  return (
    <main style={{ minHeight: '100vh', fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* SECTION 1 - HERO */}
      <section id="hero" style={{ position: 'relative', minHeight: 380, display: 'flex', alignItems: 'center', padding: '140px 0 90px', overflow: 'hidden' }}>
        <img src="/images/resources_hero.jpg" alt="Construction site" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,43,74,0.92) 0%, rgba(26,43,74,0.75) 50%, rgba(26,43,74,0.55) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', margin: '0 0 12px 0', lineHeight: 1.15 }}>
            Technical <span style={{ color: '#E86C38' }}>Specifications</span>
          </h1>
          <p style={{ color: '#CBD5E0', fontSize: 15, margin: 0, maxWidth: 480, lineHeight: 1.6 }}>
            Our commitment to quality through rigorous standards and best practices
          </p>
        </div>
      </section>

      {/* SECTION 2 - PREMIUM BRANDS MARQUEE */}
      <section
        id="brands"
        style={{
          backgroundColor: '#F3EFE6',
          padding: '64px 0',
          overflow: 'hidden',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
        aria-label="Brands We Work With"
      >
        <style>{`
          @keyframes rp-marqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes rp-marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .rp-animate-left {
            display: flex;
            width: max-content;
            animation: rp-marqueeLeft 38s linear infinite;
          }
          .rp-animate-right {
            display: flex;
            width: max-content;
            animation: rp-marqueeRight 38s linear infinite;
          }
          .rp-animate-left:hover,
          .rp-animate-right:hover {
            animation-play-state: paused;
          }

          /* Responsive Grids & Spacing */
          .rp-grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .rp-grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .rp-grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .rp-fade-mask-left {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 120px;
            z-index: 10;
            pointer-events: none;
            background: linear-gradient(to right, #F3EFE6, transparent);
          }
          .rp-fade-mask-right {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 120px;
            z-index: 10;
            pointer-events: none;
            background: linear-gradient(to left, #F3EFE6, transparent);
          }

          @media (max-width: 1024px) {
            .rp-grid-4 {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
            }
            .rp-grid-3 {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 14px !important;
            }
            .rp-grid-2 {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
            }
            .rp-section-pad {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }

          @media (max-width: 640px) {
            .rp-grid-4 {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 14px !important;
            }
            .rp-grid-3 {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 12px !important;
            }
            .rp-grid-2 {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 10px !important;
            }
            .rp-section-pad {
              padding-left: 16px !important;
              padding-right: 16px !important;
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }
            .rp-fade-mask-left,
            .rp-fade-mask-right {
              width: 40px !important;
            }
          }
        `}</style>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 32px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#163048', margin: '0 0 12px 0', letterSpacing: '-0.01em' }}>
            Premium Brands We Use
          </h2>
          <p style={{ color: '#4E5D70', fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)', margin: 0, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Only the finest branded materials for lasting quality and durability
          </p>
        </div>

        {/* Marquee tracks — full bleed edge to edge */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Left fade */}
          <div className="rp-fade-mask-left" />
          {/* Right fade */}
          <div className="rp-fade-mask-right" />

          {/* ROW 1 — scrolls left */}
          <div style={{ display: 'flex', overflow: 'hidden', width: '100%', marginBottom: 20 }}>
            <div className="rp-animate-left" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {[...brandListRow1, ...brandListRow1, ...brandListRow1, ...brandListRow1].map((brand, idx) => (
                <div
                  key={`r1-${brand.id}-${idx}`}
                  style={{
                    flexShrink: 0,
                    background: '#fff',
                    borderRadius: 16,
                    padding: '18px 40px',
                    minHeight: 88,
                    minWidth: 250,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                    border: '1px solid #EAE3D6',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                  title={`${brand.name} - ${brand.category}`}
                >
                  {brand.logoSvg}
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 — scrolls right */}
          <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
            <div className="rp-animate-right" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {[...brandListRow2, ...brandListRow2, ...brandListRow2, ...brandListRow2].map((brand, idx) => (
                <div
                  key={`r2-${brand.id}-${idx}`}
                  style={{
                    flexShrink: 0,
                    background: '#fff',
                    borderRadius: 16,
                    padding: '18px 40px',
                    minHeight: 88,
                    minWidth: 250,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                    border: '1px solid #EAE3D6',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                  title={`${brand.name} - ${brand.category}`}
                >
                  {brand.logoSvg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - QUALITY STANDARDS */}
      <section id="quality-standards" className="rp-section-pad" style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#1A2B5A', margin: '0 0 10px 0' }}>Quality Standards</h2>
            <p style={{ color: '#000000', fontSize: 13.5, margin: 0 }}>Industry-leading certifications and quality benchmarks</p>
          </div>
          <div className="rp-grid-4">
            {qualityStandards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={addRevealRef}
                  className={`reveal-scale reveal-delay-${i + 1} card-popup-hover`}
                  style={{
                    background: '#fff',
                    border: '1.5px solid #e8e8e8',
                    borderRadius: 14,
                    padding: '32px 24px',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} color="#8B4513" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: '#1A2B5A', margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 12.5, color: '#666', margin: 0, lineHeight: 1.6 }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - TECHNICAL SPECIFICATIONS ACCORDIONS */}
      <section id="technical-specifications" className="rp-section-pad" style={{ background: '#F0F0F0', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 800, color: '#1A2B5A', margin: '0 0 12px 0' }}>Technical Specifications</h2>
            <p style={{ color: '#64748B', fontSize: 16, margin: 0 }}>Comprehensive range of construction elements and structural components</p>
          </div>
          <div className="rp-grid-3">
            {techSpecItems.map((item, idx) => (
              <div
                key={item.id}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${(idx % 3) + 1} card-popup-hover`}
                style={{ borderRadius: 12 }}
              >
                <AccordionItem id={item.id} label={item.label} items={item.items} isOpen={openTechSpec === item.id} onToggle={() => toggleTechSpec(item.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - PREMIUM MATERIALS & BRANDS ACCORDIONS */}
      <section id="materials-brands" className="rp-section-pad" style={{ background: '#F0F0F0', padding: '0 32px 72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 36, paddingTop: 48 }}>
            <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 800, color: '#1A2B5A', margin: '0 0 10px 0' }}>Premium Materials &amp; Brands</h2>
          </div>
          <div className="rp-grid-3">
            {materialItems.map((item, idx) => (
              <div
                key={item.id}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${(idx % 3) + 1} card-popup-hover`}
                style={{ borderRadius: 12 }}
              >
                <AccordionItem id={item.id} label={item.label} labelColor={item.labelColor} groups={item.groups} isOpen={openMaterial === item.id} onToggle={() => toggleMaterial(item.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - CONSTRUCTION METHODOLOGIES */}
      <section id="construction-methodologies" className="rp-section-pad" style={{ background: '#ffffff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#163048', margin: '0 0 10px 0' }}>Construction Methodologies</h2>
            <p style={{ color: '#666', fontSize: 14, margin: 0 }}>Modern techniques and systematic approach to construction</p>
          </div>
          <div className="rp-grid-3">
            {constructionMethodologies.map((item, idx) => (
              <div
                key={idx}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${(idx % 3) + 1} card-popup-hover`}
                style={{
                  background: '#F7F3E9',
                  borderRadius: 12,
                  padding: '26px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#2D1F17', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                    {item.number}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#163048', margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: '#555', margin: '12px 0 0 0', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - SAFETY PROTOCOLS */}
      <section id="safety-protocols" className="rp-section-pad" style={{ background: '#19334C', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0' }}>Safety Protocols</h2>
            <p style={{ color: '#94A3B8', fontSize: 14, margin: 0 }}>Safety first - Our comprehensive safety measures for every project</p>
          </div>
          <div className="rp-grid-2">
            {safetyProtocols.map((protocol, idx) => (
              <div
                key={idx}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${(idx % 2) + 1} card-popup-hover`}
                style={{
                  background: '#26435F',
                  borderRadius: 10,
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <HardHat size={18} color="#8B4513" style={{ flexShrink: 0 }} />
                <span style={{ color: '#ffffff', fontSize: 13.5, fontWeight: 500, lineHeight: 1.4 }}>{protocol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - COMPLIANCE & INDUSTRY STANDARDS */}
      <section id="compliance-standards" className="rp-section-pad" style={{ background: '#F5F0E6', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#163048', margin: '0 0 10px 0' }}>Compliance &amp; Industry Standards</h2>
            <p style={{ color: '#666', fontSize: 14, margin: 0 }}>We ensure full compliance with all regulatory and industry requirements</p>
          </div>
          <div className="rp-grid-3">
            {complianceStandards.map((item, idx) => (
              <div
                key={idx}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${(idx % 3) + 1} card-popup-hover`}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: '24px 24px 28px 24px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <BookOpen size={20} color="#8B4513" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#163048', margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: '#666', margin: 0, lineHeight: 1.55 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};