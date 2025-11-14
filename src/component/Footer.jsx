import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const footerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for footer animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRef.current) {
            animationRef.current = true
            animateFooter()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateFooter = () => {
    const tl = gsap.timeline()
    
    tl.fromTo('.footer-content > *',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )
    .fromTo('.social-icon',
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "back.out(1.7)" 
      },
      "-=0.4"
    )
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '📊' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'YouTube', url: '#', icon: '🎬' },
    { name: 'Behance', url: '#', icon: '🎨' }
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ]

  const services = [
    { name: 'Brand Strategy', path: '/services/brand-strategy' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UI/UX Design', path: '/services/design' },
    { name: 'Content Creation', path: '/services/content' },
    { name: 'Consulting', path: '/services/consulting' }
  ]

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content px-5">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            
            {/* Company Info Section */}
            <div className="footer-section company-info px-5">
              <div className="logo-section">
                <h2 className="footer-logo">OpenMind</h2>
                <p className="company-tagline">Innovating Tomorrow, Today</p>
              </div>
              
              <p className="company-description">
                We are a creative agency that specializes in building unique digital experiences 
                that inspire and engage. Our mission is to help brands tell their story through 
                innovative design and strategic thinking.
              </p>
              
             
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="section-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.path} className="footer-link">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="footer-section newsletter-section">
              <h3 className="section-title">Stay Connected</h3>
              <p className="newsletter-description">
                Subscribe to our newsletter for the latest updates, insights, and creative inspiration.
              </p>
              
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className={`newsletter-btn ${isSubscribed ? 'subscribed' : ''}`}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </button>
                </div>
              </form>

             
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} OpenMind. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="/privacy" className="bottom-link">Privacy Policy</a>
              <a href="/terms" className="bottom-link">Terms of Service</a>
              <a href="/cookies" className="bottom-link">Cookie Policy</a>
              <a href="/sitemap" className="bottom-link">Sitemap</a>
            </div>
            
            <div className="back-to-top">
              <button 
                className="back-to-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
              >
                ↑ Top
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          opacity: 0.3;
        }

        .footer-content {
          max-width: full;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .footer-main {
          padding: 80px 20px 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 50px;
          margin-bottom: 40px;
        }

        /* Company Info Section */
        .company-info {
          max-width: 400px;
        }

        .footer-logo {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          background: linear-gradient(45deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .company-tagline {
          font-size: 0.9rem;
          color: #888;
          margin: 0 0 20px 0;
          font-style: italic;
        }

        .company-description {
          line-height: 1.6;
          margin: 0 0 30px 0;
          color: #ccc;
          font-size: 0.95rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        .contact-item p {
          margin: 0;
          color: #ddd;
          font-size: 0.9rem;
        }

        /* Footer Sections */
        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 20px 0;
          color: #ffffff;
          position: relative;
          padding-bottom: 10px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(45deg, #ffffff, #888);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: #ccc;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          padding: 5px 0;
          position: relative;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        /* Newsletter Section */
        .newsletter-section {
          background: rgba(255,255,255,0.02);
          padding: 30px 25px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .newsletter-description {
          color: #ccc;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0 0 20px 0;
        }

        .newsletter-form {
          margin-bottom: 30px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .newsletter-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          padding: 12px 15px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: #888;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.08);
        }

        .newsletter-btn {
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          color: #000000;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.2);
        }

        .newsletter-btn.subscribed {
          background: linear-gradient(45deg, #4CAF50, #45a049);
          color: #ffffff;
        }

        .newsletter-btn:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }

        /* Social Media */
        .social-section {
          margin-top: 20px;
        }

        .social-title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 15px 0;
          color: #ffffff;
        }

        .social-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-3px) scale(1.1);
        }

        .social-emoji {
          font-size: 1.2rem;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 30px 20px;
          background: rgba(0,0,0,0.3);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright p {
          margin: 0;
          color: #888;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .bottom-link {
          color: #aaa;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .bottom-link:hover {
          color: #ffffff;
        }

        .back-to-top-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .back-to-top-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .company-info {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-main {
            padding: 60px 20px 30px;
          }

          .newsletter-section {
            padding: 25px 20px;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            justify-content: center;
            gap: 20px;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 50px 15px 25px;
          }

          .footer-logo {
            font-size: 2rem;
          }

          .input-group {
            gap: 8px;
          }

          .newsletter-input,
          .newsletter-btn {
            padding: 10px 12px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .social-emoji {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
