import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Footer from '../component/Footer'
import Header from '../component/Header'

const AboutUs = () => {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const statsRef = useRef(null)

  // Company values
  const values = [
    {
      id: 1,
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities in everything we create.',
      icon: '💡'
    },
    {
      id: 2,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering outstanding results.',
      icon: '⭐'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'We work closely with our clients to bring their visions to life.',
      icon: '🤝'
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.',
      icon: '🎯'
    }
  ]

  // Team members
  const team = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Creative Director',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Brand Strategist',
      experience: '8+ Years',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Design Lead',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Digital Specialist',
      experience: '6+ Years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ]

  // Company stats
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' }
  ]

  // Animations
  useEffect(() => {
    const tl = gsap.timeline()

    // Hero section animation
    tl.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    // Story section animation
    tl.fromTo(storyRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )

    // Values animation
    tl.fromTo('.value-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    )

    // Team animation
    tl.fromTo('.team-member',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.2"
    )

    // Stats animation
    tl.fromTo('.stat-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    )
  }, [])

  return (
    <>
    <Header/>
    <div className="about-page">

      {/* Story Section */}
      <section ref={storyRef} className="story-section">
        <div className="container">
             <div className="container">
          <h1 className="text-center text-5xl mb-5 font-bold uppercase">About OpenMind</h1>
        </div>
          <div className="story-grid">
            
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                Founded in 2010, OpenMind began as a small creative studio with a big vision: 
                to help brands tell their stories in meaningful and impactful ways. Over the years, 
                we've grown into a full-service creative agency, but our core mission remains the same.
              </p>
              <p className="story-text">
                We believe that great design has the power to change perspectives, influence decisions, 
                and create lasting connections. Our multidisciplinary team combines strategic thinking 
                with creative excellence to deliver solutions that not only look beautiful but also drive results.
              </p>
              <div className="story-highlight">
                <h3 className="highlight-title">Our Mission</h3>
                <p className="highlight-text">
                  To empower brands with innovative design solutions that create meaningful connections 
                  and drive sustainable growth in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our team collaborating"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="values-section">
        <div className="container">
          <h2 className="section-title center">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="team-section">
        <div className="container">
          <h2 className="section-title center">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                  <div className="member-overlay">
                    <span className="member-experience">{member.experience}</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <style jsx>{`
        .about-page {
          background: #ffffff;
          color: #000000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          background: ;
          color: #000;
          font-weight: bold;
          padding: 40px 0 50px;
          text-align: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          margin: 0 0 20px 0;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          line-height: 1.6;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Story Section */
        .story-section {
          padding: 80px 0;
          background: #fafafa;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin: 0 0 30px 0;
          color: #000000;
          letter-spacing: 1px;
        }

        .section-title.center {
          text-align: center;
          margin-bottom: 50px;
        }

        .story-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444444;
          margin: 0 0 20px 0;
        }

        .story-highlight {
          background: #f8f8f8;
          padding: 25px;
          border-radius: 10px;
          border-left: 4px solid #000000;
          margin-top: 30px;
        }

        .highlight-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 10px 0;
          color: #000000;
        }

        .highlight-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }

        .story-image {
          position: relative;
        }

        .image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Values Section */
        .values-section {
          padding: 80px 0;
          background: #ffffff;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          background: #fafafa;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          background: #ffffff;
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .value-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 15px 0;
          color: #000000;
        }

        .value-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #666666;
          margin: 0;
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          background: #f8f8f8;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .team-member {
          text-align: center;
          transition: all 0.3s ease;
        }

        .member-image-container {
          position: relative;
          margin-bottom: 20px;
        }

        .member-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          margin: 0 auto;
          display: block;
          transition: all 0.3s ease;
          border: 4px solid #ffffff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .team-member:hover .member-image {
          transform: scale(1.05);
        }

        .member-overlay {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.8);
          color: #ffffff;
          padding: 5px 15px;
          border-radius: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .team-member:hover .member-overlay {
          opacity: 1;
        }

        .member-experience {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .member-name {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 5px 0;
          color: #000000;
        }

        .member-role {
          font-size: 1rem;
          color: #666666;
          margin: 0;
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: #000000;
          color: #ffffff;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .stat-number {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #ffffff;
        }

        .stat-label {
          font-size: 1rem;
          color: #cccccc;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
          text-align: center;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin: 0 0 20px 0;
          color: #000000;
        }

        .cta-description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.6;
          color: #555555;
          margin: 0 0 40px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 40px;
        }

        .cta-button {
          background: #000000;
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cta-button:hover {
          background: #333333;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(3px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-section {
            padding: 80px 0 60px;
          }

          .story-section,
          .values-section,
          .team-section,
          .cta-section {
            padding: 60px 0;
          }

          .stats-section {
            padding: 50px 0;
          }

          .values-grid,
          .team-grid {
            gap: 30px;
          }

          .stats-grid {
            gap: 30px;
          }

          .member-image {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .story-section,
          .values-section,
          .team-section,
          .cta-section {
            padding: 50px 0;
          }

          .value-card {
            padding: 30px 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }
      `}</style>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs