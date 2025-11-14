import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuSidebar from "./MenuSidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <>
      {/* ────── HEADER ────── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-black border-b border-gray-800 sticky top-0 z-50"
        style={{ fontFamily: "MyFont" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* LEFT – LOGO */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="text-end">
              <p className="tracking-widest text-xs text-gray-300">
                BE DIFFERENT!
              </p>
              <h1 className="text-3xl font-bold tracking-widest uppercase text-white">
                OpenMInd
              </h1>
            </div>
          </motion.div>

          {/* CENTER – NAV (desktop) */}
          {/* <nav className="hidden md:flex space-x-10">
            {["Home", "Work", "Services"].map((item, i) => (
              <motion.a
                key={item}
                // click home show navigate / only not /home for others perfcat work
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-300 text-sm font-medium tracking-wide transition-colors hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-[-3px] left-0 w-full min-h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav> */}

          <nav className="hidden md:flex space-x-10">
            {["Home", "Work", "Services"].map((item, i) => (
              <motion.div
                key={item}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-300 text-sm font-medium tracking-wide transition-colors hover:text-white"
                >
                  {item}
                </Link>

                {/* UNDERLINE */}
                <span className=" absolute  bottom-[-3px]  left-0  w-full  h-[1px]  bg-orange-300  scale-x-0  origin-left  transition-transform  duration-300  group-hover:scale-x-100"></span>
              </motion.div>
            ))}
          </nav>

          {/* RIGHT – LET'S TALK + HAMBURGER */}
          <motion.div
            className="flex items-center space-x-8 lg:space-x-12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {/* LET'S TALK */}
            <motion.a
              href="#contact"
              className="group hidden md:flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white cursor-pointer"
              whileHover={{ x: 2 }}
            >
              <span className="text-xl decoration-white">
                Let's <span className="text-orange-400">talk</span>
              </span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                />
              </motion.svg>
            </motion.a>

            {/* HAMBURGER → CROSS */}
            <motion.button
              onClick={toggleMenu}
              className="relative p-2 rounded-lg cursor-pointer group transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-8 h-8 flex group items-center justify-center">
                {/* TOP LINE */}
                <motion.span
                  className="absolute h-0.5 w-14 bg-white origin-center transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                  animate={{
                    rotate: isMenuOpen ? 0 : 0,
                    y: isMenuOpen ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* BOTTOM LINE */}
                <motion.span
                  className="absolute h-0.5 w-14 bg-white origin-center transform translate-x-[10px] group-hover:translate-x-0 transition-all duration-300"
                  animate={{
                    rotate: isMenuOpen ? 0 : 0,
                    y: isMenuOpen ? 0 : 8,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* MIDDLE LINE (fades out) */}
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* ────── SIDEBAR ────── */}
      <MenuSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
