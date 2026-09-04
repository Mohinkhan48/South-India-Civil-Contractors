import React, { useState, useEffect } from 'react';
import { servicesDetailData } from '../data/servicesData';
import { Breadcrumbs } from './Breadcrumbs';
import { siteConfig } from '../config/site';
import { CheckCircle2, ChevronDown, Phone, MessageSquare, ArrowRight, ShieldCheck, HardHat } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateToServices: () => void;
  onNavigateToServiceSlug: (slug: string) => void;
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigateHome: _onNavigateHome,
  onNavigateToServices,
  onNavigateToServiceSlug,
  onOpenQuote,
}) => {
  const service = servicesDetailData[slug] || servicesDetailData['residential-construction'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const canonicalUrl = `${siteConfig.siteUrl}/services/${service.slug}`;

  useEffect(() => {
    // 1. Page Title & Meta Description
    document.title = service.seoTitle;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', service.metaDescription);

    // 2. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 3. Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: service.seoTitle },
      { property: 'og:description', content: service.metaDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: `${siteConfig.siteUrl}${service.heroImage}` },
    ];

    ogTags.forEach(({ property, content }) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });
  }, [service, canonicalUrl]);

  // Schema.org Structured Data: Service + FAQPage
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'ConstructionBusiness',
      name: siteConfig.companyName,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      url: siteConfig.siteUrl,
    },
    areaServed: siteConfig.serviceAreas.map((city) => ({
      '@type': 'City',
      name: city,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* Schema.org Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO BANNER ── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 bg-gradient-to-b from-[#1C1510] to-[#131D23] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Services', onClick: onNavigateToServices },
              { name: service.title },
            ]}
          />

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              SOUTH INDIA CIVIL CONTRACTORS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              {/* ONE CLEAR H1 */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#EDE3D3] leading-[1.1] tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed mb-6 font-normal">
                {service.shortDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-terracotta-glow transition-all flex items-center gap-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-[#45382F] hover:bg-[#57483C] text-[#EDE3D3] border border-[#EDE3D3]/18 text-xs font-semibold uppercase tracking-wider py-3.5 px-5 rounded-full flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B78A55]" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#EDE3D3]/14 shadow-editorial-dark aspect-video lg:aspect-square">
              <img
                src={service.heroImage}
                alt={service.heroImageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#1C1510]/85 backdrop-blur-md p-3.5 rounded-lg border border-[#EDE3D3]/15">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#B78A55]">Target Audience</div>
                <div className="text-xs text-[#D4C9BC] font-medium mt-0.5">{service.targetAudience}</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ── OVERVIEW & INCLUSIONS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" aria-label="Service Overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#EDE3D3] mb-4">
                Service Overview & Execution Scope
              </h2>
              <p className="text-sm sm:text-base text-[#D4C9BC]/90 leading-relaxed font-normal">
                {service.overview}
              </p>
            </div>

            {/* What is Included Checklist */}
            <div className="bg-[#45382F]/50 border border-[#EDE3D3]/12 p-6 sm:p-8 rounded-2xl">
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-5 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#9A6048]" />
                What is Included in Our {service.title}
              </h3>
              <ul className="space-y-3.5">
                {service.whatIsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4C9BC]">
                    <span className="w-5 h-5 rounded-full bg-[#9A6048]/20 border border-[#9A6048] flex items-center justify-center text-[10px] font-bold text-[#B78A55] flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5-Step Process */}
            <div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#EDE3D3] mb-6">
                How Our {service.title} Process Works
              </h3>
              <div className="space-y-4">
                {service.constructionProcess.map((step, idx) => (
                  <div key={idx} className="bg-[#45382F]/40 border border-[#EDE3D3]/10 p-5 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#131D23] border border-[#B78A55]/30 flex items-center justify-center text-sm font-bold text-[#B78A55] flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-serif-heading text-base font-bold text-[#EDE3D3] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#D4C9BC]/80 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Why Choose & Quote CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Why Choose Us Box */}
            <div className="bg-[#1C1510] border border-[#EDE3D3]/14 p-6 sm:p-8 rounded-2xl">
              <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3] mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B78A55]" />
                Why Choose Us for {service.title}
              </h3>
              <ul className="space-y-3">
                {service.whyChooseUs.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#D4C9BC]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A6048] mt-2 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Request Quote CTA Card */}
            <div className="bg-gradient-to-br from-[#9A6048] to-[#86513B] p-6 sm:p-8 rounded-2xl shadow-xl text-[#EDE3D3]">
              <div className="flex items-center gap-2 mb-2">
                <HardHat className="w-4 h-4 text-[#EDE3D3]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EDE3D3]/80">Free Estimation</span>
              </div>
              <h4 className="font-serif-heading text-2xl font-bold mb-2">
                Request a Custom Quote
              </h4>
              <p className="text-xs text-[#EDE3D3]/90 mb-6 leading-relaxed">
                Contact our senior civil engineers today to discuss your project specifications and receive an itemized BOQ.
              </p>
              <div className="space-y-3">
                <button
                  onClick={onOpenQuote}
                  className="w-full bg-[#131D23] hover:bg-[#1C1510] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all shadow-md text-center"
                >
                  Request Consultation
                </button>
                <div className="flex gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-[#EDE3D3] font-semibold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-[#45382F]/40 border border-[#EDE3D3]/10 p-5 rounded-2xl">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#B78A55] mb-3">Other Construction Services</div>
              <div className="space-y-2">
                {Object.values(servicesDetailData)
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => onNavigateToServiceSlug(s.slug)}
                      className="w-full text-left text-xs text-[#D4C9BC] hover:text-[#EDE3D3] py-1.5 px-3 rounded-lg hover:bg-[#131D23] transition-colors flex items-center justify-between group"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9A6048] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION SECTION ── */}
      <section className="bg-[#1C1510] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EDE3D3]/10" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#B78A55] block mb-2">COMMON QUESTIONS</span>
            <h2 className="font-serif-heading text-3xl font-bold text-[#EDE3D3]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#131D23] border border-[#EDE3D3]/12 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif-heading text-base font-bold text-[#EDE3D3] hover:text-[#B78A55] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#9A6048] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#D4C9BC] leading-relaxed border-t border-[#EDE3D3]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
};
