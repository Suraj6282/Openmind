import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://openmindindia.com/wp-content/uploads/2025/01/Home-Page-06-01-25.mp4"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Only Bottom Left and Right */}
      <div className="relative bottom-20 z-10 min-h-screen flex flex-col justify-end pb-12">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            {/* Left Side - Description */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="md:w-1/2"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-xl tracking-wider font-bold uppercase md:text-2xl lg:text-3xl w-[550px] text-white mb-2 leading-tight"
              >
                Crafting Digital Experiences That <span className="text-orange-800">Inspire & Engage</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base md:text-[18px] text-gray-300 max-w-md leading-relaxed"
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
              className="md:w-1/2 flex flex-col items-end space-y-6"
            >
              {/* CTA Button */}
              <Link
                to="/services"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                SERVICES
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Service Tags */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-end gap-2"
              >
                {["GRAPHIC DESIGN", "DIGITAL MARKETING", "BRANDING", "+"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-orange-400 transition-all duration-500 cursor-pointer"
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
