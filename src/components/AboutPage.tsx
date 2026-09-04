import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import { CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome: _onNavigateHome, onOpenQuote }) => {
  const canonicalUrl = `${siteConfig.siteUrl}/about`;

  useEffect(() => {
    document.title = 'About South India Civil Contractors | Trusted Construction Company';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about South India Civil Contractors — 25+ years of civil engineering, residential villa & commercial construction excellence across South India.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About South India Civil Contractors',
    url: canonicalUrl,
    description: 'Learn about South India Civil Contractors — 25+ years of civil engineering excellence across South India.',
    publisher: {
      '@type': 'ConstructionBusiness',
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
    },
  };

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* Schema.org AboutPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── HEADER BANNER ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 bg-gradient-to-b from-[#1C1510] to-[#131D23]">
        <div className="max-w-7xl mx-auto">
          
          <Breadcrumbs items={[{ name: 'About Us' }]} />

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              25+ YEARS OF ENGINEERING MASTERY
            </span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDE3D3] leading-[1.1] tracking-tight mb-4">
            About South India Civil Contractors
          </h1>
          <p className="text-sm sm:text-base text-[#D4C9BC] max-w-2xl leading-relaxed">
            Delivering precision civil contracting, bespoke residential villas, and Grade-A commercial construction across South India.
          </p>

        </div>
      </header>

      {/* ── COMPANY PHILOSOPHY & METRICS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" aria-label="Company Overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-heading text-3xl font-bold text-[#EDE3D3]">
              Uncompromising Civil Engineering Quality
            </h2>
            <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed">
              Founded in 2009, South India Civil Contractors has established itself as one of the region's premier civil contracting firms. We manage full-spectrum construction projects across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, and Mysore.
            </p>
            <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed">
              Our philosophy centers on structural integrity, transparent Bill of Quantities (BOQ) estimations, daily site engineer supervision, and strict adherence to NBC national building safety standards.
            </p>

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: '100% Certified Raw Materials', desc: 'Fe 550D TMT steel and 53-grade OPC/PPC cement.' },
                { title: '10-Year Structural Guarantee', desc: 'Written warranty backing structural civil framework.' },
                { title: 'Zero Cost Overruns', desc: 'Itemized transparent BOQ with fixed contract budget.' },
                { title: 'Daily Engineering Audits', desc: 'Slump testing, ultrasonic checks & cube strength tests.' },
              ].map((val, i) => (
                <div key={i} className="bg-[#45382F]/40 border border-[#EDE3D3]/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B78A55] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#9A6048]" />
                    <span>{val.title}</span>
                  </div>
                  <div className="text-[11px] text-[#D4C9BC]/80">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#EDE3D3]/14 shadow-editorial-dark aspect-square">
            <img
              src="/images/about_craft.jpg"
              alt="South India Civil Contractors civil engineering team on site"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/80 via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-[#1C1510] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EDE3D3]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="font-serif-heading text-3xl font-bold text-[#EDE3D3]">
            Partner with South India's Trusted Civil Contractors
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C9BC]">
            Speak with our senior structural engineers today for a complimentary project consultation.
          </p>
          <button
            onClick={onOpenQuote}
            className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-all"
          >
            Request Consultation
          </button>
        </div>
      </section>

    </main>
  );
};
