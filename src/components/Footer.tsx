import React from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (section: string) => void;
  onNavigateToProjects: () => void;
  onNavigateToServiceSlug?: (slug: string) => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToResources?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onNavigateToProjects,
  onNavigateToServiceSlug,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToResources,
}) => {
  const servicesList = [
    { name: 'Residential Construction', slug: 'residential-construction' },
    { name: 'Commercial Construction', slug: 'commercial-construction' },
    { name: 'Turnkey Contracting', slug: 'turnkey-construction' },
    { name: 'Civil & Structural Works', slug: 'civil-construction' },
    { name: 'Renovation & Expansion', slug: 'renovation' },
  ];

  return (
    <footer className="bg-[#131D23] text-[#EDE3D3] relative overflow-hidden">
      
      {/* Warm decorative upper strip */}
      <div className="h-[3px] bg-gradient-to-r from-[#9A6048] via-[#B78A55] to-[#9A6048]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5 group">
              {/* Architectural Geometric Mark */}
              <div className="w-10 h-10 rounded-sm bg-[#45382F] border border-[#B78A55]/40 flex items-center justify-center relative overflow-hidden shadow-md">
                <div className="w-5 h-5 border-t-2 border-l-2 border-[#B78A55] absolute top-2 left-2"></div>
                <div className="w-3.5 h-3.5 border-b-2 border-r-2 border-[#9A6048] absolute bottom-2 right-2"></div>
                <span className="font-serif-heading text-xs font-bold text-[#EDE3D3] tracking-tighter">
                  SIBC
                </span>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-serif-heading text-sm sm:text-base font-bold text-[#EDE3D3] tracking-wider leading-tight">
                  SOUTH INDIA
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B78A55] uppercase leading-tight">
                  CIVIL CONTRACTORS
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#D4C9BC]/70 leading-relaxed mb-6 max-w-xs">
              Engineering excellence, architectural precision, and transparent construction delivery across South India since 2009.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.social?.instagram || '#' },
                { icon: Facebook, href: siteConfig.social?.facebook || '#' },
                { icon: Youtube, href: siteConfig.social?.youtube || '#' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-sm bg-[#131D23] hover:bg-[#9A6048] border border-[#EDE3D3]/10 flex items-center justify-center text-[#D4C9BC] hover:text-[#EDE3D3] transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-heading text-[#EDE3D3] font-bold text-base mb-5 pb-2 border-b border-[#EDE3D3]/10">
              Construction Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D4C9BC]/80">
              {servicesList.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/services/${item.slug}`}
                    onClick={(e) => {
                      if (onNavigateToServiceSlug) {
                        e.preventDefault();
                        onNavigateToServiceSlug(item.slug);
                      }
                    }}
                    className="hover:text-[#B78A55] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#9A6048] transition-transform group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-heading text-[#EDE3D3] font-bold text-base mb-5 pb-2 border-b border-[#EDE3D3]/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D4C9BC]/80">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    if (onNavigateToAbout) {
                      e.preventDefault();
                      onNavigateToAbout();
                    }
                  }}
                  className="hover:text-[#B78A55] transition-colors"
                >
                  About Our Company
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToProjects();
                  }}
                  className="hover:text-[#B78A55] transition-colors"
                >
                  Project Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  onClick={(e) => {
                    if (onNavigateToResources) {
                      e.preventDefault();
                      onNavigateToResources();
                    }
                  }}
                  className="hover:text-[#B78A55] transition-colors"
                >
                  Resources & Technical Standards
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (onNavigateToContact) {
                      e.preventDefault();
                      onNavigateToContact();
                    }
                  }}
                  className="hover:text-[#B78A55] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#estimator"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToSection('estimator');
                  }}
                  className="hover:text-[#B78A55] transition-colors"
                >
                  Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-heading text-[#EDE3D3] font-bold text-base mb-5 pb-2 border-b border-[#EDE3D3]/10">
              Corporate Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-[#D4C9BC]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9A6048] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#EDE3D3] text-xs">{siteConfig.headquarters.title}</div>
                  <div className="text-[11px] leading-relaxed">
                    {siteConfig.headquarters.address},<br />
                    {siteConfig.headquarters.city}, {siteConfig.headquarters.state} - {siteConfig.headquarters.pincode}
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9A6048] flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#B78A55] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9A6048] flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#B78A55] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-[#EDE3D3]/8">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B78A55] mb-2">Regional Presence</h5>
              <div className="flex flex-wrap gap-1.5">
                {(siteConfig.serviceAreas || ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Coimbatore', 'Mysore', 'Trivandrum']).map((city) => (
                  <span key={city} className="text-[10px] bg-[#131D23] text-[#D4C9BC]/75 px-2.5 py-1 rounded-full border border-[#EDE3D3]/8">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-5 border-t border-[#EDE3D3]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D4C9BC]/50 gap-4">
          <p>{siteConfig.companyName}</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
