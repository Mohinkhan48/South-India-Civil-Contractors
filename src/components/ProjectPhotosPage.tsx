import React, { useState, useEffect, useRef, useCallback } from 'react';
import { constructionImages } from '../data/constructionImages';
import { projectVideos } from '../data/projectVideos';
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  Film,

  Building2,
} from 'lucide-react';

interface ProjectPhotosPageProps {
  onNavigateHome: () => void;
  onOpenQuote: () => void;
}

type TabType = 'All' | 'Residential & Commercial Photos' | 'Ongoing Work';

const photoTabs: TabType[] = [
  'All',
  'Residential & Commercial Photos',
  'Ongoing Work',
];

const uniqueConstructionImages = Array.from(new Set(constructionImages));

const categorizedPhotos = uniqueConstructionImages.map((src, index) => {
  return { id: `photo-${index}`, src, title: `Construction Project #${index + 1}` };
});

export const ProjectPhotosPage: React.FC<ProjectPhotosPageProps> = ({
  onNavigateHome,
  onOpenQuote,
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>('All');
  const [visibleCount, setVisibleCount] = useState<number>(32);
  const [visibleVideoCount, setVisibleVideoCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoRefsMap = useRef<Map<string, HTMLVideoElement>>(new Map());

  const handleVideoPlay = useCallback((playingId: string) => {
    videoRefsMap.current.forEach((videoEl, id) => {
      if (id !== playingId && !videoEl.paused) {
        videoEl.pause();
      }
    });
  }, []);

  useEffect(() => {
    document.title = 'Project Photos & Ongoing Work | South India Civil Contractors';
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedPhotos.length);
    }
  };

  const displayedPhotos = categorizedPhotos.slice(0, visibleCount);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displayedPhotos.length) % displayedPhotos.length : null));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displayedPhotos.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayedPhotos.length]);

  const showPhotos = selectedTab === 'All' || selectedTab === 'Residential & Commercial Photos';
  const showVideos = selectedTab === 'All' || selectedTab === 'Ongoing Work';

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          1. HERO HEADER BANNER
      ────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Projects Gallery & Ongoing Work
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-normal max-w-2xl">
            Explore our portfolio of completed projects and watch real-time video coverage of active construction sites across South India.
          </p>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          2. FILTER TABS STRIP
      ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start gap-2 sm:gap-3 min-w-max">
            {photoTabs.map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedTab(tab);
                    setVisibleCount(32);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#4A2328] text-white shadow-sm scale-102'
                      : 'bg-[#F4ECE1] text-[#1C3549] hover:bg-[#EBE2D4] hover:text-gray-900'
                  }`}
                >
                  {tab === 'Ongoing Work' && <Film className="w-4 h-4 text-amber-300" />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. PHOTO GALLERY SECTION
      ────────────────────────────────────────────────────────── */}
      {showPhotos && (
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {selectedTab === 'All' && (
              <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#4A2328]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C3549]">
                    Residential & Commercial Projects Gallery
                  </h2>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {displayedPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/5]"
                >
                  <div className="w-full h-full overflow-hidden relative bg-gray-100">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading={idx < 29 ? "eager" : "lazy"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out text-transparent font-normal"
                      style={{ imageRendering: 'auto' }}
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < categorizedPhotos.length && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="bg-[#1C3549] hover:bg-[#132838] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Load More Photos</span>
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────
          4. ONGOING WORK VIDEO SECTION
      ────────────────────────────────────────────────────────── */}
      {showVideos && (
        <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${showPhotos ? 'bg-white border-t border-gray-200' : 'bg-gray-50/50'}`}>
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Ongoing Work Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A2328]/10 border border-[#4A2328]/20 text-[#4A2328] text-xs font-bold uppercase tracking-wider">
                <Film className="w-4 h-4 text-[#4A2328]" />
                <span>Live Site Videos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C3549] tracking-tight">
                Ongoing Work & Active Site Coverage
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Experience structural precision, heavy civil engineering, and live site operations in real-time.
              </p>
            </div>

            {/* Videos Structural Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projectVideos.slice(2, visibleVideoCount + 2).map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Video Player */}
                  <div className="relative w-full aspect-video bg-black overflow-hidden">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                      ref={(el) => {
                        if (el) videoRefsMap.current.set(video.id, el);
                        else videoRefsMap.current.delete(video.id);
                      }}
                      onPlay={() => handleVideoPlay(video.id)}
                      onLoadedMetadata={(e) => {
                        try {
                          if (e.currentTarget.currentTime === 0) {
                            e.currentTarget.currentTime = 0.1;
                          }
                        } catch {
                          // ignore
                        }
                      }}
                    >
                      <source src={`${video.videoUrl}#t=0.1`} type="video/mp4" />
                      Your browser does not support playing this video.
                    </video>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Videos Button */}
            {visibleVideoCount + 2 < projectVideos.length && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setVisibleVideoCount((prev) => prev + 12)}
                  className="bg-[#4A2328] hover:bg-[#3D1D21] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Load More Videos ({projectVideos.length - 2 - visibleVideoCount} remaining)</span>
                  <Film className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────
          5. FULLSCREEN LIGHTBOX MODAL (For Photos)
      ────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && displayedPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayedPhotos[lightboxIndex].src}
              alt={displayedPhotos[lightboxIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          6. BOTTOM CTA BANNER
      ────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Build Your Project With Us?
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Get in touch with our expert civil engineering team for a personalized consultation and project quote.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#4A2328] hover:bg-[#3D1D21] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              Get Free Consultation & Quote
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};
