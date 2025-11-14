import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Footer from '../component/Footer'
import Header from '../component/Header'

const WorkFolio = () => {
  const [activeTab, setActiveTab] = useState('all')
  const headerRef = useRef(null)
  const tabsRef = useRef(null)
  const gridRef = useRef(null)

  // Portfolio categories
  const categories = [
    { id: 'all', name: 'All Work', count: 24 },
    { id: 'advertisement', name: 'Advertisement', count: 8 },
    { id: 'branding', name: 'Branding', count: 6 },
    { id: 'brochures', name: 'Brochures', count: 4 },
    { id: 'hoarding', name: 'Hoarding', count: 3 },
    { id: 'logo', name: 'Logo Design', count: 7 },
    { id: 'social-media', name: 'Social Media', count: 5 },
    { id: 'stall', name: 'Stall Design', count: 3 }
  ]

  // Portfolio items with categories
  const portfolioItems = [
    // Advertisement
    { id: 1, title: 'Premium TV Commercial', category: 'advertisement', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop' },
    { id: 2, title: 'Digital Billboard Campaign', category: 'advertisement', image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop' },
    { id: 3, title: 'Print Media Advertisement', category: 'advertisement', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop' },
    { id: 4, title: 'Radio Campaign Creative', category: 'advertisement', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop' },
    { id: 5, title: 'Social Advertisement', category: 'advertisement', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
    { id: 6, title: 'Outdoor Campaign', category: 'advertisement', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop' },
    { id: 7, title: 'Product Launch Ad', category: 'advertisement', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop' },
    { id: 8, title: 'Brand Awareness Campaign', category: 'advertisement', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop' },

    // Branding
    { id: 9, title: 'Corporate Brand Identity', category: 'branding', image: 'https://images.unsplash.com/photo-1541451378359-acdede43fdf4?w=600&h=400&fit=crop' },
    { id: 10, title: 'Startup Branding Package', category: 'branding', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop' },
    { id: 11, title: 'Restaurant Brand Design', category: 'branding', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop' },
    { id: 12, title: 'Tech Company Rebrand', category: 'branding', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop' },
    { id: 13, title: 'Fashion Brand Identity', category: 'branding', image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop' },
    { id: 14, title: 'Healthcare Branding', category: 'branding', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop' },

    // Brochures
    { id: 15, title: 'Corporate Brochure Design', category: 'brochures', image: 'https://images.unsplash.com/photo-1586953362059-ee18e85ee764?w=600&h=400&fit=crop' },
    { id: 16, title: 'Product Catalog', category: 'brochures', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop' },
    { id: 17, title: 'Event Brochure', category: 'brochures', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop' },
    { id: 18, title: 'Service Brochure', category: 'brochures', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=400&fit=crop' },

    // Hoarding
    { id: 19, title: 'Highway Billboard', category: 'hoarding', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop' },
    { id: 20, title: 'Metro Station Hoarding', category: 'hoarding', image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop' },
    { id: 21, title: 'Shopping Mall Display', category: 'hoarding', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop' },

    // Logo Design
    { id: 22, title: 'Minimalist Tech Logo', category: 'logo', image: 'https://images.unsplash.com/photo-1541451378359-acdede43fdf4?w=600&h=400&fit=crop' },
    { id: 23, title: 'Restaurant Logo Design', category: 'logo', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop' },
    { id: 24, title: 'Fashion Brand Logo', category: 'logo', image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop' },
    { id: 25, title: 'Corporate Logo Redesign', category: 'logo', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop' },
    { id: 26, title: 'Startup Logo Creation', category: 'logo', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop' },
    { id: 27, title: 'Sports Team Logo', category: 'logo', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop' },
    { id: 28, title: 'Non-profit Logo', category: 'logo', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop' },

    // Social Media
    { id: 29, title: 'Instagram Campaign', category: 'social-media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop' },
    { id: 30, title: 'Facebook Ad Creative', category: 'social-media', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
    { id: 31, title: 'LinkedIn Content Design', category: 'social-media', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop' },
    { id: 32, title: 'Twitter Campaign', category: 'social-media', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop' },
    { id: 33, title: 'YouTube Thumbnail', category: 'social-media', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop' },

    // Stall Design
    { id: 34, title: 'Trade Show Stall', category: 'stall', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop' },
    { id: 35, title: 'Exhibition Booth', category: 'stall', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop' },
    { id: 36, title: 'Pop-up Store Design', category: 'stall', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=400&fit=crop' }
  ]

  // Filter items based on active tab
  const getFilteredItems = () => {
    if (activeTab === 'all') return portfolioItems
    return portfolioItems.filter(item => item.category === activeTab)
  }

  // Handle tab change with smooth animation
  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId)
      
      // Animate grid items
      gsap.fromTo('.portfolio-item', 
        { opacity: 0, y: 20, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.5, 
          stagger: 0.05,
          ease: "power2.out"
        }
      )
    }
  }

  // Animate items when activeTab changes
  useEffect(() => {
    if (activeTab) {
      gsap.fromTo('.portfolio-item', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          stagger: 0.06,
          ease: "power2.out"
        }
      )
    }
  }, [activeTab])

  // Initial animations
  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(tabsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    
    // Delay the grid animation slightly
    setTimeout(() => {
      gsap.fromTo('.portfolio-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" }
      )
    }, 600)
  }, [])

  return (
    <>
    <Header/>
    <div className="workfolio-page">
      {/* Header */}
      <div ref={headerRef} className="header-section">
        <h1 className="page-title">Our Work Portfolio</h1>
      </div>

      {/* Tabs */}
      <div ref={tabsRef} className="tabs-section">
        <div className="tabs-container">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            >
              {category.name}
              <span className="tab-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div ref={gridRef} className="portfolio-grid">
        {getFilteredItems().map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="item-container">
              <img 
                src={item.image} 
                alt={item.title}
                className="portfolio-image"
              />
              <div className="item-overlay">
                <h3 className="item-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .workfolio-page {
          background: #ffffff;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 60px 0;
        }

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 50px;
          padding: 0 20px;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #000000;
          letter-spacing: 2px;
          margin: 0;
          text-transform: uppercase;
        }

        /* Tabs */
        .tabs-section {
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .tabs-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .tab-button {
          background: #f8f8f8;
          border: 2px solid #e8e8e8;
          color: #666666;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tab-button:hover {
          background: #f0f0f0;
          border-color: #d0d0d0;
          color: #444444;
          transform: translateY(-1px);
        }

        .tab-button.active {
          background: #000000;
          border-color: #000000;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .tab-count {
          background: rgba(255,255,255,0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .tab-button.active .tab-count {
          background: rgba(255,255,255,0.2);
        }

        .tab-button:not(.active) .tab-count {
          background: rgba(0,0,0,0.1);
          color: #888888;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .portfolio-item {
          opacity: 1;
          transition: all 0.3s ease;
        }

        .item-container {
          position: relative;
          aspect-ratio: 3/2;
          border-radius: 12px;
          overflow: hidden;
          background: #f8f8f8;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .item-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .item-container:hover .portfolio-image {
          transform: scale(1.05);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 30px 20px 20px;
          color: #ffffff;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .item-container:hover .item-overlay {
          opacity: 1;
        }

        .item-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          letter-spacing: 0.5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .workfolio-page {
            padding: 40px 0;
          }

          .header-section {
            margin-bottom: 40px;
          }

          .tabs-section {
            margin-bottom: 40px;
          }

          .tabs-container {
            gap: 6px;
          }

          .tab-button {
            padding: 10px 16px;
            font-size: 0.8rem;
          }

          .portfolio-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .item-overlay {
            opacity: 1;
            background: linear-gradient(transparent 40%, rgba(0,0,0,0.7));
          }
        }

        @media (max-width: 480px) {
          .tabs-container {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .tabs-container::-webkit-scrollbar {
            display: none;
          }

          .tab-button {
            flex-shrink: 0;
            padding: 8px 14px;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  )
}

export default WorkFolio