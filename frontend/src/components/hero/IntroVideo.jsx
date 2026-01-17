import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWatched, setHasWatched] = useState(false);
  const videoRef = useRef(null);
  const STORAGE_KEY = 'rtf_intro_watched';

  useEffect(() => {
    // Check if user has already watched the intro
    const watched = localStorage.getItem(STORAGE_KEY);
    
    if (!watched) {
      // First time visit - play the video
      setIsPlaying(true);
      // Prevent scrolling while video plays
      document.body.style.overflow = 'hidden';
    } else {
      setHasWatched(true);
    }
  }, []);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  const handleVideoEnd = () => {
    // Mark as watched in localStorage
    localStorage.setItem(STORAGE_KEY, 'true');
    setHasWatched(true);
    
    // Smooth fade out
    setTimeout(() => {
      setIsPlaying(false);
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    }, 500);
  };

  const handleSkip = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setHasWatched(true);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  };

  // Don't render anything if already watched
  if (hasWatched && !isPlaying) {
    return null;
  }

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Video Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              onEnded={handleVideoEnd}
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/assets/img/mobile-banner.jpg" // Optional poster if user has it
              onLoadedData={() => {
                // Video loaded
              }}
            >
              <source src="/assets/Videos/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Cinematic Overlay - Top/Bottom Bars */}
            <motion.div 
               initial={{ height: "50%" }}
               animate={{ height: "0%" }}
               transition={{ duration: 1.5, ease: "circInOut", delay: 0.5 }}
               className="absolute top-0 left-0 w-full bg-black z-20"
            />
            <motion.div 
               initial={{ height: "50%" }}
               animate={{ height: "0%" }}
               transition={{ duration: 1.5, ease: "circInOut", delay: 0.5 }}
               className="absolute bottom-0 left-0 w-full bg-black z-20"
            />

            {/* Skip Button - Tech Style */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-10 right-10 group flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-md border border-rtf-blue/30 rounded-full text-white font-mono text-xs uppercase tracking-widest hover:bg-rtf-blue/10 hover:border-rtf-blue/60 transition-all duration-300 z-30"
            >
              <span>Skip Intro</span>
              <div className="w-4 h-4 rounded-full border border-rtf-blue/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 bg-rtf-blue rounded-full"></div>
              </div>
            </motion.button>

            {/* Loading/Status Indicator */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black pointer-events-none z-10"
            >
               <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-1 bg-rtf-dark overflow-hidden rounded-full">
                     <motion.div 
                       className="h-full bg-rtf-blue"
                       initial={{ width: "0%" }}
                       animate={{ width: "100%" }}
                       transition={{ duration: 1.5, ease: "easeInOut" }}
                     />
                  </div>
                  <p className="text-rtf-blue font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">Initializing System</p>
               </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
