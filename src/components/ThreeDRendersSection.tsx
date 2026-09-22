import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

interface ThreeDRendersSectionProps {
  onNavigateTo3DRenders?: () => void;
}

export interface RenderItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export const renderData: RenderItem[] = [
  {
    id: 'render-1',
    title: 'Modern Luxury Villa Elevation',
    subtitle: '3-Story Contemporary Residence with Wooden Louvers',
    image: '/images/renders/render_3d_1.jpg',
  },
  {
    id: 'render-2',
    title: 'Contemporary Multi-Tier Residence',
    subtitle: 'Travertine Stone Cladding & Glass Railings',
    image: '/images/renders/render_3d_2.jpg',
  },
  {
    id: 'render-3',
    title: 'Suburban Villa Elevation',
    subtitle: 'Modern Slate & Textured Tile Exterior Design',
    image: '/images/renders/render_3d_3.jpg',
  },
  {
    id: 'render-4',
    title: 'Minimalist Bungalow Elevation',
    subtitle: '2-Story Travertine Finish with Slat Accents',
    image: '/images/renders/render_3d_4.jpg',
  },
];

export const ThreeDRendersSection: React.FC<ThreeDRendersSectionProps> = ({
  onNavigateTo3DRenders,
}) => {
  const [activeRender, setActiveRender] = useState<RenderItem | null>(null);

  return (
    <section
      id="3d-renders-section"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 transition-colors"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-[#163048]">3D</span>{' '}
            <span className="text-[#4A2328]">Renders</span>
          </h2>
          <p className="text-sm sm:text-base text-[#556987] font-normal leading-relaxed">
            Explore our photorealistic 3D architectural renders and visualizations
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {renderData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveRender(item)}
              className="group relative bg-[#F9F8F6] rounded-[18px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-[#EBE7DF]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-[#163048] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button */}
        <div className="flex justify-center">
          <button
            onClick={onNavigateTo3DRenders}
            className="px-7 py-3.5 bg-[#163048] hover:bg-[#0f2334] text-white font-semibold rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer group"
          >
            <span>View All 3D Renders</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeRender && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Header / Close */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#163048] text-white">
              <div>
                <h3 className="text-base sm:text-lg font-bold">{activeRender.title}</h3>
                <p className="text-xs text-[#D4C9BC]">{activeRender.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveRender(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image View */}
            <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={activeRender.image}
                alt={activeRender.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
