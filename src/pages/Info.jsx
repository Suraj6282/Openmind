import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Info = () => {
  const sectionsRef = useRef([])
  const animatedSections = useRef(new Set())

  useEffect(() => {
    // One-time animation on component mount
    const tl = gsap.timeline()
    
    // Animate all sections once when component loads
    tl.fromTo('.info-section',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )
    .fromTo('.section-image',
      { scale: 1.1, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power2.out" 
      },
      "-=0.6"
    )
    .fromTo('.content-item',
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.08, 
        ease: "power2.out" 
      },
      "-=0.4"
    )
  }, [])

  const infoSections = [
    {
      id: 1,
      title: "Creative Strategy",
      subtitle: "Transforming Ideas",
      description: "We believe in the power of creative thinking to solve complex business challenges. Our strategic approach combines innovative design with data-driven insights.",
      features: [
        "Brand Identity Development",
        "Market Research & Analysis", 
        "Creative Campaign Design",
        "Digital Strategy Planning"
      ],
      buttonText: "Explore Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Digital Innovation",
      subtitle: "Technology Meets",
      description: "Our team leverages cutting-edge technology to create digital experiences that engage, inspire, and convert. We build solutions that grow with your business.",
      features: [
        "Web Development & Design",
        "Mobile App Development",
        "E-commerce Solutions",
        "Custom Software Development"
      ],
      buttonText: "View Solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Brand Excellence",
      subtitle: "Building Experiences",
      description: "We craft brand experiences that resonate with your audience and create lasting connections. Every touchpoint is designed to reinforce your brand's unique value.",
      features: [
        "Visual Identity Systems",
        "Brand Guidelines & Standards",
        "Marketing Collateral Design",
        "Brand Experience Strategy"
      ],
      buttonText: "Build Brand",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },

  ]

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="info-page">
      {/* Info Sections */}
      <div className="info-sections">
        {infoSections.map((section, index) => (
          <div 
            key={section.id}
            ref={addToRefs}
            className={`info-section ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="section-container">
              
              {/* Image Side */}
              <div className="info-image">
                <div className="image-container">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="section-image"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="info-content">
                <div className="content-wrapper">
                  <div className="content-header content-item">
                    <h3 className="section-subtitle text-5xl font-bold">{section.subtitle}</h3>
                  </div>

                  <p className="section-description content-item">
                    {section.description}
                  </p>

                  <div className="features-list content-item">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-dot"></span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="section-button content-item">
                    {section.buttonText}
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's discuss how we can help bring your vision to life through our comprehensive approach
          </p>
          <button className="cta-button">
            Get Started Today
            <span className="cta-arrow">↗</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .info-page {
          background: #ffffff;
          color: #000000;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }

        /* Info Sections */
        .info-sections {
          padding: 40px 0;
        }

        .info-section {
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 50px 0;
          position: relative;
          border-bottom: 1px solid #f0f0f0;
        }

        .info-section:nth-child(even) {
          background: linear-gradient(135deg, #fafafa 0%, #f8f8f8 100%);
        }

        .info-section:last-child {
          border-bottom: none;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .info-section.reverse .section-container {
          direction: rtl;
        }

        .info-section.reverse .section-container > * {
          direction: ltr;
        }

        /* Image Side */
        .info-image {
          position: relative;
        }

        .image-container {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .image-container:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .section-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .image-container:hover .section-image {
          transform: scale(1.02);
        }

        /* Content Side */
        .info-content {
          padding: 0;
        }

        .content-wrapper {
          max-width: 100%;
        }

        .content-header {
          margin-bottom: 18px;
        }


        .section-subtitle {
          font-weight: 400;
          color: #666666;
          margin: 0 0 12px 0;
          letter-spacing: 0.2px;
          line-height: 1.4;
        }

        .section-description {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #555555;
          margin: 0 0 18px 0;
        }

        /* Features List */
        .features-list {
          margin: 18px 0 20px 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          padding: 3px 0;
          transition: all 0.2s ease;
        }

        .feature-item:hover {
          transform: translateX(2px);
        }

        .feature-dot {
          width: 5px;
          height: 5px;
          background: #000000;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 0.9rem;
          color: #444444;
          font-weight: 500;
          letter-spacing: 0.1px;
        }

        /* Section Button */
        .section-button {
          background: #000000;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          margin-top: 8px;
        }

        .section-button:hover {
          background: #333333;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .button-arrow {
          transition: transform 0.3s ease;
          font-size: 0.7rem;
        }

        .section-button:hover .button-arrow {
          transform: translateX(2px);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
          color: #000000;
          padding: 50px 20px;
          text-align: center;
          border-top: 1px solid #e8e8e8;
        }

        .cta-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
          color: #000000;
        }

        .cta-description {
          font-size: clamp(0.9rem, 1.6vw, 1rem);
          line-height: 1.5;
          margin: 0 0 25px 0;
          color: #555555;
        }

        .cta-button {
          background: #000000;
          color: #ffffff;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cta-button:hover {
          background: #333333;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .cta-arrow {
          transition: transform 0.3s ease;
          font-size: 0.8rem;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(2px) translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-container {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
            padding: 0 20px;
          }

          .info-section.reverse .section-container {
            direction: ltr;
          }

          .info-section {
            padding: 40px 0;
          }

          .info-sections {
            padding: 20px 0;
          }

          .image-container {
            max-width: 400px;
            margin: 0 auto;
          }

          .features-list {
            text-align: left;
            max-width: 350px;
            margin-left: auto;
            margin-right: auto;
          }

         

          .content-header {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 480px) {
          .info-section {
            padding: 30px 0;
          }

          .section-container {
            gap: 25px;
            padding: 0 15px;
          }

          .section-button,
          .cta-button {
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .cta-section {
            padding: 40px 15px;
          }

          .content-header {
            margin-bottom: 12px;
          }

          .features-list {
            margin: 15px 0 18px 0;
          }

          .feature-item {
            margin-bottom: 6px;
          }

          .section-description {
            margin: 0 0 15px 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Info