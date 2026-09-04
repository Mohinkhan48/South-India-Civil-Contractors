import React, { useEffect } from 'react';
import { Home, Building2, Phone } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateToServices,
  onNavigateToContact,
}) => {
  useEffect(() => {
    document.title = '404 Page Not Found | South India Civil Contractors';
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
  }, []);

  return (
    <main className="min-h-screen bg-[#131D23] text-[#EDE3D3] flex items-center justify-center px-4 py-24 selection:bg-[#9A6048]/40">
      <div className="max-w-md w-full text-center space-y-6">
        
        <div className="w-16 h-16 rounded-2xl bg-[#9A6048]/20 border border-[#9A6048] flex items-center justify-center mx-auto text-[#B78A55]">
          <Building2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#B78A55] block">
          404 ERROR
        </span>

        {/* ONE CLEAR H1 */}
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#EDE3D3]">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#D4C9BC] leading-relaxed">
          The page you are looking for does not exist or may have been moved. Explore our construction services or return home.
        </p>

        <div className="pt-2 flex flex-col gap-3">
          <button
            onClick={onNavigateHome}
            className="w-full bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <div className="flex gap-3">
            <button
              onClick={onNavigateToServices}
              className="flex-1 bg-[#45382F] hover:bg-[#57483C] text-[#EDE3D3] border border-[#EDE3D3]/18 font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-all text-center"
            >
              View Services
            </button>
            <button
              onClick={onNavigateToContact}
              className="flex-1 bg-[#45382F] hover:bg-[#57483C] text-[#EDE3D3] border border-[#EDE3D3]/18 font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B78A55]" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};
