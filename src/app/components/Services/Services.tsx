'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './style.css';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '00:1',
    title: 'WEB DESIGN',
    description: 'Creating stunning and functional websites that captivate audiences and drive results.'
  },
  {
    number: '00:2',
    title: 'UX/UI DESIGN',
    description: 'Designing intuitive user experiences and beautiful interfaces that users love.'
  },
  {
    number: '00:3',
    title: 'CREATIVE DESIGN',
    description: 'Bringing creative visions to life through innovative design solutions.'
  },
  {
    number: '00:4',
    title: 'PRODUCT AND APP DESIGN',
    description: 'Crafting digital products and mobile applications with user-centered design principles.'
  },
  {
    number: '00:5',
    title: 'DEVELOPMENT',
    description: 'Building robust and scalable solutions with cutting-edge technologies.'
  }
];

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
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
    <section className="services-section" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-10 h-10 text-black" />
            </div>
            <h2 className="services-title">SERVICES</h2>
          </div>
          <div className="services-subtitle">DSGN/4</div>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-border"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
