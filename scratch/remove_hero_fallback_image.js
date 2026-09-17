import fs from 'fs';

const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace component code to remove videoError state and img fallback completely
const oldVideoBlock = `  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play immediately
    video.play().catch(() => {
      // Autoplay blocked or error
      setVideoError(true);
    });
  }, []);`;

const newVideoBlock = `  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);`;

content = content.replace(oldVideoBlock, newVideoBlock);

// Remove onError from video element and remove fallback img element
const oldVideoElement = `        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover object-center opacity-100"
          aria-hidden="true"
        >
          {/*
           * Primary — Modern architectural skyscraper glass building exterior
           */}
          <source
            src="/videos/hero_skyscraper_glass.mp4"
            type="video/mp4"
          />
          {/*
           * Secondary — Multi-story building civil construction tower
           */}
          <source
            src="/videos/hero_construction_building.mp4"
            type="video/mp4"
          />
          {/*
           * Tertiary — Modern luxury apartment architectural building exterior
           */}
          <source
            src="/videos/hero_luxury_apartments.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback image — shown only if video fails or is blocked */}
        {videoError && (
          <img
            src="/images/hero_residence.jpg"
            alt="Premium residential construction by South India Civil Contractors"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}`;

const newVideoElement = `        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-100"
          aria-hidden="true"
        >
          <source
            src="/videos/hero_construction_building.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/hero_skyscraper_glass.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/building_2887460.mp4"
            type="video/mp4"
          />
        </video>`;

content = content.replace(oldVideoElement, newVideoElement);

fs.writeFileSync(filePath, content);
console.log("Successfully removed home hero fallback image and enforced background video!");
