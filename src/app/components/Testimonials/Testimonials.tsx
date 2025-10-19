'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import './style.css';

const spotlightTestimonials = [
  {
    id: 1,
    name: "Alexandra Thompson",
    position: "Creative Director",
    company: "Pixel Perfect Agency",
    rating: 5,
    testimonial: "Absolutely blown away by the quality of work! The design exceeded our expectations and the attention to detail was phenomenal. Our clients have been raving about the new interface."
  },
  {
    id: 2,
    name: "Marcus Williams",
    position: "Founder & CEO",
    company: "InnovateNow",
    rating: 5,
    testimonial: "From concept to delivery, everything was flawless. The team's expertise in modern web technologies really shows. Our conversion rate increased by 240% after launch!"
  },
  {
    id: 3,
    name: "Sofia Martinez",
    position: "Head of Digital",
    company: "Global Ventures",
    rating: 5,
    testimonial: "Professional, responsive, and incredibly talented. They transformed our vision into a stunning reality. The user experience is seamless and our brand now stands out."
  },
  {
    id: 4,
    name: "James Chen",
    position: "Product Manager",
    company: "TechForward",
    rating: 5,
    testimonial: "The development process was smooth and transparent. Every milestone was met on time. The final product is robust, scalable, and exactly what we needed for our growth."
  },
  {
    id: 5,
    name: "Rebecca Davis",
    position: "Marketing Lead",
    company: "BrandBoost",
    rating: 5,
    testimonial: "Exceptional creative work! The branding and web design perfectly captured our company's essence. Our online presence has never looked better. Highly recommend this team!"
  },
  {
    id: 6,
    name: "Daniel Rodriguez",
    position: "CTO",
    company: "NextGen Solutions",
    rating: 5,
    testimonial: "Outstanding technical expertise and clean code architecture. The performance optimizations were impressive. Our application now runs 3x faster than before!"
  }
];

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <div className="testimonials-tag">Testimonials</div>
          <h2 className="testimonials-title">
            Trusted by leaders
            <br />
            <span className="testimonials-subtitle">from various industries</span>
          </h2>
        </motion.div>

        <motion.div
          className="testimonials-description"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <p>
            Learn why professionals trust our solutions to
            <br />
            complete their customer journeys.
          </p>
        </motion.div>

        {/* SpotlightCard Section */}
        <motion.div
          className="spotlight-testimonials-section"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          style={{ 
            marginTop: '60px'
          }}
        >
          <motion.div
            className="spotlight-cards-grid"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              maxWidth: '1600px',
              margin: '0 auto'
            }}
          >
            {spotlightTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
              >
                <SpotlightCard 
                  className="h-full"
                  spotlightColor="rgba(255, 165, 0, 0.25)"
                >
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    minHeight: '300px' 
                  }}>
                    {/* Star Rating */}
                    <div style={{ 
                      display: 'flex', 
                      gap: '4px', 
                      marginBottom: '20px' 
                    }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#FFD700"
                          style={{ flexShrink: 0 }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p style={{ 
                      color: '#e5e5e5', 
                      fontSize: '1rem', 
                      lineHeight: '1.6',
                      marginBottom: '24px',
                      flex: 1,
                      fontStyle: 'italic'
                    }}>
                      "{testimonial.testimonial}"
                    </p>

                    {/* Author Info */}
                    <div style={{ 
                      marginTop: 'auto',
                      paddingTop: '20px',
                      borderTop: '1px solid #333',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      {/* Avatar */}
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${
                          index % 6 === 0 ? '#667eea, #764ba2' :
                          index % 6 === 1 ? '#f093fb, #f5576c' :
                          index % 6 === 2 ? '#4facfe, #00f2fe' :
                          index % 6 === 3 ? '#43e97b, #38f9d7' :
                          index % 6 === 4 ? '#fa709a, #fee140' :
                          '#a8edea, #fed6e3'
                        })`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        flexShrink: 0
                      }}>
                        {testimonial.name.split(' ').map(name => name[0]).join('')}
                      </div>
                      
                      {/* Name and Position */}
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          color: 'white', 
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          marginBottom: '4px'
                        }}>
                          {testimonial.name}
                        </div>
                        <div style={{ 
                          color: '#888', 
                          fontSize: '0.9rem'
                        }}>
                          {testimonial.position} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;