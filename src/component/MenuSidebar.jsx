// components/MenuSidebar.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MenuSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "WorkFolio", href: "/work" },
    { label: "Green Louts", href: "/green" },
    { label: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleMenuItemClick = (href) => {
    navigate(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Blurred dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Fullscreen menu panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="relative h-full w-full flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            {/* Top bar */}
            <div className="w-full border-t border-white/10 px-6 py-4 md:px-8 lg:px-20 flex items-center justify-end">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-8 h-6" />
              </a>

              
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col justify-between pt-8 pb-12">
              {/* Navigation Menu */}
              <div className="px-6 md:px-8 lg:px-20">
                <nav className="space-y-6 md:space-y-8 lg:space-y-12">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 * idx, 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="relative group hover:cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => onClose()}
                          className="block text-white uppercase font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl hover:text-amber-300 transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                        
                        {/* Arrow button - visible on all screens */}
                        <button
                          onClick={() => handleMenuItemClick(item.href)}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 text-white hover:bg-white/10 hover:scale-110 hover:border-white/40 transition-all duration-300 ml-4 flex-shrink-0"
                          aria-label={`Navigate to ${item.label}`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12h14M13 5l6 7-6 7"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Bottom border effect */}
                      <div className="h-px bg-gradient-to-r from-white/20 to-transparent mt-2 md:mt-4 group-hover:from-amber-400/50 transition-all duration-300" />
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom section */}
              <div className="px-6 md:px-8 lg:px-20 mt-8">
                <div className="border-t border-white/10 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-white/70 text-sm">
                      <p>Ready to start your next project?</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href="mailto:hello@example.com"
                        className="text-white hover:text-amber-300 transition-colors"
                      >
                        openmind@gmail.com
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-amber-300 transition-colors"
                      >
                        +91 97270 33377
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MenuSidebar;