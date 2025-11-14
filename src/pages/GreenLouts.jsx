import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Header from '../component/Header'
import Footer from '../component/Footer'

const GreenLouts = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Hero section animation
    tl.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )

    // Content section animation
    tl.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )

    // CTA section animation
    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  return (
    <>
    <Header/>
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br max-w-7xl mx-auto rounded-3xl from-gray-100 from-gray-50 to-gray-200 overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] items-center">
          <div className="relative h-full min-h-[350px] lg:min-h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=350&fit=crop" 
              alt="Lotus in water"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="px-8 lg:px-16 py-12 lg:py-16 flex flex-col justify-center text-center lg:text-right order-2 lg:order-first">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-widest mb-2 text-gray-700 leading-tight">
              BE THOUGHTFUL.
            </h1>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-widest text-gray-700 leading-tight">
              BE REMEMBERED.
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-wider mb-10 text-black uppercase leading-tight">
            BECKONING A NEW ERA OF CORPORATE GIFTING
          </h2>
          
          <div className="max-w-5xl">
            <p className="text-base lg:text-lg leading-relaxed text-gray-700 mb-8">
              Green Lotus is the gifting arm of OPENMIND that brings its clients a unique and never-before seen gifting experience that is tailor-made for the occasion, 
              resembling and reflecting the client's brand values. These gifts come in various shapes and sizes, quantum and quality, depending on your particular need and budget.
            </p>
            
            <p className="text-base lg:text-lg font-medium text-gray-800">
              Check out some of the gifting ideas by Green Lotus
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-wider mb-5 text-black uppercase">
            NEED GIFTING SOLUTIONS?
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-gray-600 mb-8">
            Contact the team at Green Lotus to create something truly unique for you.
          </p>
          <a 
            href="https://www.green-lotus.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-base lg:text-lg text-orange-600 font-medium hover:text-orange-700 transition-all duration-300 border-b-2 border-transparent hover:border-orange-700 hover:-translate-y-0.5"
          >
            www.green-lotus.in
          </a>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default GreenLouts