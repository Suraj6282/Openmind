import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './EsteemedClientele.css';

const EsteemedClientele = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const carouselRef = useRef(null)
  const intervalRef = useRef(null)

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Sample client logos data - replace with your actual client logos
  const clientLogos = [
    { id: 1, name: 'A.SHRIDHAR', subtitle: 'BUILDING THOUGHTFULLY', logo: 'http://openmindindia.com/wp-content/uploads/2025/06/10-1.png' },
    { id: 2, name: 'SOHAM GROUP', subtitle: 'SINCE 1986', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/11-1.png' },
    { id: 3, name: 'DSK GROUP', subtitle: '', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/14-1.png' },
    { id: 4, name: 'ARISTO', subtitle: 'LIFESPACES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/02.png' },
    { id: 5, name: 'BLUVIAN', subtitle: 'PILLAR OF TRUST', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/18-1.png' },
    { id: 6, name: 'GODREJ', subtitle: 'PROPERTIES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/20-1.png'},
    { id: 7, name: 'MAHINDRA', subtitle: 'LIFESPACES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/28-1.png' },
    { id: 8, name: 'MAHINDRA', subtitle: 'LIFESPACES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/28-1.png' },
    { id: 9, name: 'MAHINDRA', subtitle: 'LIFESPACES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/28-1.png' },
    { id: 10, name: 'MAHINDRA', subtitle: 'LIFESPACES', logo: 'https://openmindindia.com/wp-content/uploads/2025/06/28-1.png' },

  ]

  // Dynamic slides to show based on screen size
  const getSlidesToShow = () => {
    if (window.innerWidth <= 360) return 1
    if (window.innerWidth <= 768) return 2
    if (window.innerWidth <= 1024) return 3
    return 4
  }

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow())
  
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(clientLogos.length / slidesToShow)

  // Auto-play functionality with mobile considerations
  useEffect(() => {
    if (isAutoPlaying && !isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides)
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, totalSlides, isMobile])

  // Animation for title and subtitle on mount ONLY
  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
  }, []) // Empty dependency array - runs only once on mount

  // Separate animation for carousel slide changes
  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(carouselRef.current,
        { opacity: 0.8, x: 20 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [currentSlide]) // Only runs when currentSlide changes

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1)
    if (!isMobile) {
      setIsAutoPlaying(false)
      setTimeout(() => setIsAutoPlaying(true), 5000)
    }
  }

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
    if (!isMobile) {
      setIsAutoPlaying(false)
      setTimeout(() => setIsAutoPlaying(true), 5000)
    }
  }

  const getCurrentLogos = () => {
    const startIndex = currentSlide * slidesToShow
    return clientLogos.slice(startIndex, startIndex + slidesToShow)
  }

  return (
    <section className="esteemed-clientele border-t-2 border-b-2 border-zinc-200">
      {/* Header Section */}
      <div className="header-section">
        <div className="container">
          <h1 ref={titleRef} className="main-title">ESTEEMED CLIENTELE</h1>
          <p ref={subtitleRef} className="main-subtitle">THEIR TRUST IS OUR GREATEST REWARD.</p>
        </div>
      </div>

      {/* Inspiration Section */}
      

      {/* Client Carousel */}
      <div className="carousel-section">
        <div className="container">
          <div className="carousel-wrapper">
            <button 
              className="carousel-btn prev-btn"
              onClick={handlePrevSlide}
              aria-label="Previous clients"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="carousel-container" ref={carouselRef}>
              <div className="client-logos">
                {getCurrentLogos().map((client) => (
                  <div key={client.id} className="client-logo-item">
                    <div className="logo-container">
                      <div className="logo-placeholder">
           
                        <img className='w-full' src={client.logo} alt="logo"  />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="carousel-btn next-btn"
              onClick={handleNextSlide}
              aria-label="Next clients"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlide(index)
                  if (!isMobile) {
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 5000)
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="container">
          <h2 className="cta-title">LET'S OPEN-UP!</h2>
          <p className="cta-subtitle">COME OVER FOR A GREAT BRAND CONVERSATION.</p>
          <button className="cta-button">Start Conversation</button>
        </div>
      </div>

    </section>
  )
}

export default EsteemedClientele