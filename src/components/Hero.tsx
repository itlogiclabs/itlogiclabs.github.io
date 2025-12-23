import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// 1. Import your local images
import heroImage1 from '../assets/gbp_photo1.jpg'; // Example: Download and add your Google photos here
import heroImage2 from '../assets/gbp_photo2.jpg';
import heroImage3 from '../assets/gbp_video_poster.jpg'; // For a video, use a poster frame

interface HeroProps {
  onBookRepair: () => void;
}

// 2. Create an array of your media items
const mediaItems = [
  { id: 1, type: 'image', src: heroImage1, alt: 'IT Logic Labs Workshop' },
  { id: 2, type: 'image', src: heroImage2, alt: 'Laptop Repair Service' },
  { id: 3, type: 'image', src: heroImage3, alt: 'Customer Service' },
  // You could also add a video item in the future:
  // { id: 4, type: 'video', src: '/videos/workshop-tour.mp4', poster: heroImage3 }
];

export default function Hero({ onBookRepair }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Auto-rotate the background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Section */}
      <div className="absolute inset-0">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {mediaItems[currentIndex].type === 'image' ? (
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                poster={mediaItems[currentIndex].poster}
              >
                <source src={mediaItems[currentIndex].src} type="video/mp4" />
              </video>
            )}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
          </motion.div>
        </AnimatePresence>
        
      
      </div>

      {/* Navigation Arrows for the Gallery */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Rest of your Hero content (text, button) remains exactly the same */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* ... (Keep your existing logo, headline, subtitle, and button code here) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-4 bg-orange-500/10 rounded-full mb-4"
          >
            <Wrench className="w-16 h-16 text-orange-500" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your Laptop's <span className="text-orange-500">Doctor</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl text-gray-300 font-light"
          >
            IT LOGIC LABS
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Expert chip-level repairs, screen replacements, and complete laptop solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <button
              onClick={onBookRepair}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Book a Repair
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}