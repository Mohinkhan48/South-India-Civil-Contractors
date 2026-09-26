import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, X, Film } from 'lucide-react';
import { projectVideos, ProjectVideo } from '../data/projectVideos';

interface ProjectVideosPageProps {
  onNavigateHome: () => void;
  onOpenQuote?: () => void;
  onNavigateToContact?: () => void;
}

export const ProjectVideosPage: React.FC<ProjectVideosPageProps> = ({
  onNavigateHome,
  onOpenQuote,
  onNavigateToContact,
}) => {
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    document.title = 'Project Videos | South India Civil Contractors';
  }, []);

  const displayedVideos = projectVideos.slice(0, visibleCount);

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
  };

  // Keyboard Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* ──────────────────────────────────────────────────────────
          1. HERO HEADER BANNER (Project Videos Title)
      ────────────────────────────────────────────────────────── */}
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white overflow-hidden">
        {/* Pattern backdrop overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          
          {/* Back Navigation */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Project Videos
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-normal max-w-2xl">
            Watch our construction journey through detailed project videos and testimonials
          </p>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────────
          2. STRUCTURED VIDEOS GRID SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {displayedVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/5]"
              >
                {/* Video Preview */}
                <video
                  src={vid.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* Center Play Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/40 border-2 border-white/80 text-white flex items-center justify-center shadow-lg group-hover:bg-[#4A2328] group-hover:border-white group-hover:scale-115 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Video Title & Tag */}
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 z-10 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#4A2328] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    {vid.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Videos Button */}
          {visibleCount < projectVideos.length && (
            <div className="text-center pt-10 sm:pt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="bg-[#1C3549] hover:bg-[#132838] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Load More Videos ({projectVideos.length - visibleCount} remaining)</span>
                <Film className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. FULLSCREEN VIDEO PLAYER MODAL
      ────────────────────────────────────────────────────────── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeVideoModal}
        >
          {/* Close Button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Video Modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Player Box */}
          <div
            className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 bg-gradient-to-b from-gray-900 to-black border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[#C9846A]" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#4A2328] text-white text-xs font-semibold">
                {activeVideo.category}
              </span>
            </div>

            <div className="w-full aspect-video bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          4. BOTTOM CTA BANNER (Want to See Your Project Here?)
      ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#1C3549] text-white text-center" aria-label="Want to See Your Project Here?">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Want to See Your Project Here?
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-normal">
            Let's discuss your construction needs and bring your vision to life
          </p>
          <div className="pt-3">
            <button
              onClick={() => {
                if (onNavigateToContact) onNavigateToContact();
                else if (onOpenQuote) onOpenQuote();
                else onNavigateHome();
              }}
              className="bg-[#4A2328] hover:bg-[#3D1D21] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Start Your Project</span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProjectVideosPage;
