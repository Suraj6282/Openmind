import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: isMobile ? 15 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative md:h-[90vh] min-h-[600px] sm:min-h-[650px] w-full overflow-hidden bg-black">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://openmindindia.com/wp-content/uploads/2025/01/Home-Page-06-01-25.mp4"
        aria-hidden="true"
        style={{ 
          objectPosition: isMobile ? 'center center' : 'center center'
        }}
      />

      {/* Dark Overlay - Stronger on mobile for better text readability */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/40" />

      {/* Content - Responsive Layout */}
      <div className="relative bottom-12 md:bottom-20 z-10 min-h-screen flex flex-col justify-end pb-6 md:pb-12">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            {/* Left Side - Description */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="w-full md:w-1/2"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wider font-bold uppercase max-w-full md:max-w-[550px] text-white mb-3 md:mb-2 leading-tight"
              >
                Crafting Digital Experiences That <span className="text-orange-500 md:text-orange-800">Inspire & Engage</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-[18px] text-gray-200 md:text-gray-300 max-w-full md:max-w-md leading-relaxed"
              >
                Whether through intuitive interfaces, immersive 3D, or bold
                visual storytelling, we design moments that people don't just
                see – <span className="text-white font-medium">they feel.</span>
              </motion.p>
            </motion.div>

            {/* Right Side - CTA and Tags */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="w-full md:w-1/2 flex flex-col items-start md:items-end space-y-4 md:space-y-6 mt-6 md:mt-0"
            >
              {/* CTA Button */}
              <Link
                to="/services"
                variants={fadeInUp}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-gray-100 transition-all duration-300 group touch-manipulation"
              >
                SERVICES
                <ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Service Tags */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-start md:justify-end gap-1.5 md:gap-2"
              >
                {["GRAPHIC DESIGN", "DIGITAL MARKETING", "BRANDING", "+"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-orange-400 transition-all duration-500 cursor-pointer touch-manipulation"
                    >
                      {tag}
                    </span>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
