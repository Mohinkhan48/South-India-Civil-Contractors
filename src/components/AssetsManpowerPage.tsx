import React, { useEffect, useRef, useCallback } from 'react';
import { siteConfig } from '../config/site';
import {
  Briefcase,
  HardHat,
  Users,
  TrendingUp,
  Truck,
  Box,
  Grid,
  Wrench,
  Hammer,
  Activity,
  Layers,
  Settings,
  Tractor,
} from 'lucide-react';

interface AssetsManpowerPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
  onNavigateContact?: () => void;
}

const professionalTeam = [
  {
    icon: Briefcase,
    number: '7',
    label: 'Architects',
    subLabel: 'Certified Architects',
  },
  {
    icon: HardHat,
    number: '5',
    label: 'Structural Engineers',
    subLabel: 'Expert Engineers',
  },
  {
    icon: Users,
    number: '48',
    label: 'Technical Team',
    subLabel: 'Engineers & Technical Staff',
  },
  {
    icon: TrendingUp,
    number: '435+',
    label: 'Total Workforce',
    subLabel: 'Skilled Professionals',
  },
];

const equipmentAssets = [
  { icon: Truck, name: 'Concrete Mixer Machines', quantity: '14', unit: 'Units' },
  { icon: Box, name: 'Centering Material', quantity: '2,85,000', unit: 'sqft' },
  { icon: Grid, name: 'Scaffolding', quantity: '1,25,000', unit: 'sqft' },
  { icon: Wrench, name: 'Bar Bending Machines', quantity: '11', unit: 'Units' },
  { icon: Hammer, name: 'Bar Cutting Machines', quantity: '15', unit: 'Units' },
  { icon: Activity, name: 'Chipping Hammering Machines', quantity: '18', unit: 'Units' },
  { icon: Layers, name: 'Material Shifting Lifts', quantity: '7', unit: 'Units' },
  { icon: Settings, name: 'Centering Machines', quantity: '130', unit: 'Units' },
  { icon: Truck, name: 'Commercial Transport Vehicles', quantity: '5', unit: 'Units' },
  { icon: Tractor, name: 'JCB', quantity: '2', unit: 'Units' },
  { icon: Tractor, name: 'Tractors', quantity: '5', unit: 'Units' },
];

const capabilities = [
  {
    icon: Users,
    title: 'Workforce Excellence',
    description: 'Our 435+ strong workforce is the backbone of our success. Each member is trained, certified, and committed to delivering excellence.',
  },
  {
    icon: Settings,
    title: 'Modern Equipment',
    description: 'State-of-the-art machinery and equipment ensure efficient project execution with highest quality standards.',
  },
  {
    icon: TrendingUp,
    title: 'Resource Management',
    description: 'Systematic planning and allocation of resources to ensure timely project completion without compromises.',
  },
  {
    icon: HardHat,
    title: 'Safety First',
    description: 'All equipment and personnel follow strict safety protocols to maintain accident-free work environments.',
  },
];

const capacityPerformance = [
  {
    number: '400+',
    title: 'Workers',
    subtitle: 'Daily Workforce Capacity',
  },
  {
    number: '500+',
    title: 'Cu.M/Day',
    subtitle: 'Concrete Mixing Capacity',
  },
  {
    number: '50,000+',
    title: 'Sqft',
    subtitle: 'Material Storage',
  },
  {
    number: '99%',
    title: 'Uptime',
    subtitle: 'Equipment Maintenance',
  },
];

const whyTeamStandsOut = [
  {
    number: '1',
    title: 'Certified Professionals',
    description: 'All team members are certified and regularly trained in latest construction techniques and safety protocols.',
  },
  {
    number: '2',
    title: 'Experience Matters',
    description: 'Average team experience of 10+ years in civil construction ensures quality and efficiency.',
  },
  {
    number: '3',
    title: 'Modern Training',
    description: 'Regular training programs on new technologies, tools, and construction methodologies.',
  },
  {
    number: '4',
    title: 'Safety Culture',
    description: 'Zero-accident focus with comprehensive safety training and equipment for all personnel.',
  },
];

export const AssetsManpowerPage: React.FC<AssetsManpowerPageProps> = () => {
  const canonicalUrl = `${siteConfig.siteUrl}/assets-manpower`;

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Assets & Manpower | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Discover our 435+ workforce, expert team, modern machinery, and equipment capacity at South India Civil Contractors.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  return (
    <main style={{ minHeight: '100vh', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <style>{`
        .amp-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .amp-grid-equipment {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .amp-grid-why {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .amp-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .amp-grid-equipment {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .amp-grid-why {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .amp-section-pad {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .amp-grid-4,
          .amp-grid-equipment {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 14px !important;
          }
          .amp-section-pad {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 44px !important;
            padding-bottom: 44px !important;
          }
        }
      `}</style>

      {/* SECTION 1 - HERO */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: 380,
          display: 'flex',
          alignItems: 'center',
          padding: '140px 0 90px',
          overflow: 'hidden',
          background: '#19334C',
        }}
      >
        <img
          src="/images/resources_hero.jpg"
          alt="Assets & Manpower background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.58,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(25, 51, 76, 0.75) 0%, rgba(25, 51, 76, 0.60) 50%, rgba(25, 51, 76, 0.45) 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#ffffff', margin: '0 0 14px 0', lineHeight: 1.15 }}>
            Assets &amp; <span style={{ color: '#8B3A2B' }}>Manpower</span>
          </h1>
          <p style={{ color: '#CBD5E0', fontSize: 16, margin: 0, maxWidth: 540, lineHeight: 1.6 }}>
            Our strength lies in our people and resources - 435+ professionals and modern equipment
          </p>
        </div>
      </section>

      {/* SECTION 2 - PROFESSIONAL TEAM */}
      <section id="professional-team" className="amp-section-pad" style={{ background: '#ffffff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: '#163048', margin: '0 0 10px 0' }}>Professional Team</h2>
            <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Experienced professionals across all specializations</p>
          </div>
          <div className="amp-grid-4">
            {professionalTeam.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={addRevealRef}
                  className={`reveal-scale reveal-delay-${i + 1} card-popup-hover`}
                  style={{
                    background: '#26435F',
                    borderRadius: 14,
                    padding: '36px 24px',
                    textAlign: 'center',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: '#4A2328',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} color="#ffffff" strokeWidth={1.75} />
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginTop: 4 }}>{item.number}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.label}</h3>
                  <p style={{ fontSize: 12.5, color: '#CBD5E0', margin: 0 }}>{item.subLabel}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - EQUIPMENT & ASSETS */}
      <section id="equipment-assets" className="amp-section-pad" style={{ background: '#F8FAFC', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: '#163048', margin: '0 0 10px 0' }}>Equipment &amp; Assets</h2>
            <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Modern machinery and equipment for efficient project execution</p>
          </div>
          <div className="amp-grid-equipment">
            {equipmentAssets.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={addRevealRef}
                  className={`reveal-scale reveal-delay-${(i % 4) + 1} card-popup-hover`}
                  style={{
                    background: '#ffffff',
                    borderRadius: 12,
                    padding: '20px 22px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      background: '#F5F0E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#8B4513" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: '#163048', lineHeight: 1.3 }}>{item.name}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#2D1F17', marginTop: 3 }}>
                      {item.quantity} <span style={{ fontSize: 11.5, fontWeight: 600, color: '#64748B' }}>{item.unit}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - OUR CAPABILITIES */}
      <section id="capabilities" className="amp-section-pad" style={{ background: '#19334C', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0' }}>Our Capabilities</h2>
            <p style={{ color: '#94A3B8', fontSize: 15, margin: 0 }}>How our assets and manpower deliver exceptional results</p>
          </div>
          <div className="amp-grid-4">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={addRevealRef}
                  className={`reveal-scale reveal-delay-${i + 1} card-popup-hover`}
                  style={{
                    background: '#26435F',
                    borderRadius: 14,
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'rgba(139, 58, 43, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} color="#8B4513" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#CBD5E0', margin: 0, lineHeight: 1.6 }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - CAPACITY & PERFORMANCE */}
      <section id="capacity-performance" className="amp-section-pad" style={{ background: '#F5F0E6', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div ref={addRevealRef} className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, color: '#163048', margin: '0 0 10px 0' }}>Capacity &amp; Performance</h2>
            <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Our operational capabilities in numbers</p>
          </div>
          <div className="amp-grid-4">
            {capacityPerformance.map((item, i) => (
              <div
                key={i}
                ref={addRevealRef}
                className={`reveal-scale reveal-delay-${i + 1} card-popup-hover`}
                style={{
                  background: '#ffffff',
                  borderRadius: 14,
                  padding: '32px 20px',
                  textAlign: 'center',
                  boxShadow: '0 3px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 800, color: '#2D1F17', lineHeight: 1.1 }}>{item.number}</div>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: '#64748B', marginTop: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#163048', marginTop: 4 }}>{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - WHY OUR TEAM STANDS OUT */}
      <section id="why-team-stands-out" className="amp-section-pad" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="amp-grid-why">
            {/* Left Content */}
            <div ref={addRevealRef} className="reveal-on-scroll">
              <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 800, color: '#163048', margin: '0 0 28px 0', lineHeight: 1.2 }}>
                Why Our Team <br />
                Stands Out
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {whyTeamStandsOut.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: '#2D1F17',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 13,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {item.number}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#163048', margin: '0 0 4px 0' }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.6 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div ref={addRevealRef} className="reveal-scale">
              <img
                src="/images/Why Our Team Stands Out.png"
                alt="Why Our Team Stands Out"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 460,
                  objectFit: 'cover',
                  borderRadius: 16,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
