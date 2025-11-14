import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const containerRef = useRef(null)
  const numberRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate 404 number with bounce effect
    tl.fromTo(numberRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    )

    // Animate text content
    tl.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )

    // Animate button
    tl.fromTo(buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    )

    // Add floating animation to the 404 number
    gsap.to(numberRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div ref={containerRef} className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div ref={numberRef} className="mb-8">
          <h1 className="text-[12rem] lg:text-[16rem] font-black text-transparent bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text leading-none select-none">
            404
          </h1>
        </div>

        {/* Error Content */}
        <div ref={textRef} className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
          <p className="text-base text-gray-500">
            Let's get you back on track to discover amazing content.
          </p>
        </div>

        {/* Action Buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              Take Me Home
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg 
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </span>
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Need help finding what you're looking for?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              to="/work" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Our Work
            </Link>
            <Link 
              to="/services" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gray-200 rounded-full opacity-50 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-300 rounded-full opacity-30 animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gray-200 rounded-full opacity-40 animate-pulse hidden lg:block"></div>
      </div>
    </div>
  )
}

export default NotFound