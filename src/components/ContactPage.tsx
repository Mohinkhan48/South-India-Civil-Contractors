import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Breadcrumbs } from './Breadcrumbs';
import { Contact } from './Contact';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome: _onNavigateHome }) => {
  const canonicalUrl = `${siteConfig.siteUrl}/contact`;

  useEffect(() => {
    document.title = 'Contact South India Civil Contractors | Get a Quote';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Contact South India Civil Contractors for residential, commercial & civil construction quotes across South India. Offices in Chennai, Bangalore, Hyderabad & Kochi.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact South India Civil Contractors',
    url: canonicalUrl,
    description: 'Contact South India Civil Contractors for construction inquiries.',
    mainEntity: {
      '@type': 'ConstructionBusiness',
      name: siteConfig.companyName,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.headquarters.address,
        addressLocality: siteConfig.headquarters.city,
        addressRegion: siteConfig.headquarters.state,
        postalCode: siteConfig.headquarters.pincode,
        addressCountry: 'IN',
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] selection:bg-[#9A6048]/40">
      
      {/* Schema.org ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Header Banner */}
      <header className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#EDE3D3]/10 bg-gradient-to-b from-[#1C1510] to-[#131D23]">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Contact Us' }]} />
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#EDE3D3]">
            Contact South India Civil Contractors
          </h1>
          <p className="text-sm text-[#D4C9BC] mt-2 max-w-xl">
            Reach out to our corporate headquarters or regional project offices across Chennai, Bangalore, Hyderabad, Kochi, and Coimbatore.
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <Contact />
    </main>
  );
};
