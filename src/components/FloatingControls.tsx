import React from 'react';
import { siteConfig } from '../config/site';
import { Phone, ArrowUp } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.2 4.488L3 21l4.604-1.208a8.944 8.944 0 0 0 4.447 1.186h.004c4.947 0 8.976-4.027 8.978-8.977 0-2.398-.934-4.653-2.63-6.368zM12.053 19.43v-.003a7.447 7.447 0 0 1-3.797-1.036l-.272-.162-2.82.739.753-2.75-.178-.283a7.443 7.443 0 0 1-1.144-3.957c.002-4.116 3.351-7.464 7.468-7.464 1.994 0 3.868.777 5.276 2.187 1.408 1.41 2.184 3.285 2.183 5.28-.002 4.117-3.35 7.465-7.47 7.465zm4.097-5.592c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.113-.15.224-.58.73-.711.879-.13.15-.262.169-.486.056-.225-.113-.949-.349-1.808-1.114-.668-.596-1.12-1.332-1.251-1.557-.13-.225-.014-.347.098-.459.102-.101.225-.262.338-.393.112-.132.15-.225.225-.376.075-.15.037-.281-.019-.393-.056-.113-.505-1.217-.692-1.666-.182-.438-.368-.379-.504-.386-.13-.007-.28-.007-.43-.007-.15 0-.393.056-.599.281-.206.225-.786.768-.786 1.872 0 1.104.803 2.17 0.915 2.32.112.15 1.58 2.413 3.828 3.383.535.231.953.369 1.278.472.537.171 1.026.147 1.412.09.43-.064 1.327-.543 1.514-1.067.187-.524.187-.973.131-1.067-.056-.094-.206-.15-.43-.262z"/>
  </svg>
);

export const FloatingControls: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = siteConfig.whatsapp.replace('+', '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello South India Civil Contractors, I would like to inquire about your construction and civil contracting services.'
  )}`;

  return (
    <>
      {/* Desktop Floating Actions Widget */}
      <aside aria-label="Quick contact" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-[#131D23]/95 backdrop-blur-md border border-[#EDE3D3]/20 hover:border-[#9A6048] text-[#EDE3D3] hover:text-[#B78A55] flex items-center justify-center shadow-lg transition-all hover:scale-105"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp +91 97405 56799"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
          <span className="absolute right-16 bg-[#131D23] text-[#EDE3D3] text-xs font-semibold px-3 py-1.5 rounded-md border border-[#EDE3D3]/15 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp ({siteConfig.whatsappDisplay})
          </span>
        </a>

        {/* Phone Call Floating Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          aria-label="Call direct"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#9A6048] text-[#EDE3D3] hover:bg-[#B78A55] shadow-2xl hover:shadow-terracotta-glow transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6 stroke-[2]" />
          <span className="absolute right-16 bg-[#131D23] text-[#EDE3D3] text-xs font-semibold px-3 py-1.5 rounded-md border border-[#EDE3D3]/15 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call {siteConfig.phoneDisplay}
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Dock Bar */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#131D23]/98 backdrop-blur-lg border-t border-[#EDE3D3]/12 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 bg-[#45382F] hover:bg-[#9A6048] border border-[#EDE3D3]/15 text-[#EDE3D3] text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all"
        >
          <Phone className="w-4 h-4 text-[#B78A55]" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 shadow-lg"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
