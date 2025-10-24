'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './aboutsection.css';

const AboutSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const servicesCopyRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize Lenis smooth scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();

      // Animate text elements on scroll
      const animateTextElements = document.querySelectorAll('.animate-text');
      animateTextElements.forEach((textElement) => {
        const htmlElement = textElement as HTMLElement;
        const textContent = htmlElement.textContent?.trim() || '';
        htmlElement.setAttribute('data-text', textContent);

        ScrollTrigger.create({
          trigger: textElement,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          onUpdate: (self) => {
            const clipValue = Math.max(0, 100 - self.progress * 100);
            htmlElement.style.setProperty('--clip-value', `${clipValue}%`);
          },
        });
      });

      // Services section scroll animations
      const servicesSection = servicesRef.current;
      if (servicesSection) {
        // Initial slide-in animation
        ScrollTrigger.create({
          trigger: servicesSection,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
          onUpdate: (self) => {
            const headers = servicesSection.querySelectorAll('.services-header');
            if (headers.length >= 3) {
              // Increased movement range from 100% to 150% for better alignment
              gsap.set(headers[0], { x: `${150 - self.progress * 150}%` });
              gsap.set(headers[1], { x: `${-150 + self.progress * 150}%` });
              gsap.set(headers[2], { x: `${150 - self.progress * 150}%` });
            }
          },
        });

        // Pin and scale animation
        ScrollTrigger.create({
          trigger: servicesSection,
          start: 'top top',
          end: `+=${window.innerHeight * 2}`,
          pin: true,
          scrub: 1,
          pinSpacing: false,
          onUpdate: (self) => {
            const headers = servicesSection.querySelectorAll('.services-header');

            if (headers.length >= 3) {
              if (self.progress <= 0.5) {
                const yProgress = self.progress / 0.5;
                gsap.set(headers[0], { y: `${yProgress * 130}%` });
                gsap.set(headers[2], { y: `${yProgress * -130}%` });
              } else {
                gsap.set(headers[0], { y: '132%' });
                gsap.set(headers[2], { y: '-132%' });

                const scaleProgress = (self.progress - 0.5) / 0.5;
                const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
                const scale = 1 - scaleProgress * (1 - minScale);

                headers.forEach((header) => gsap.set(header, { scale }));
              }
            }
          },
        });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.ticker.remove(() => {
        if (lenisRef.current) {
          lenisRef.current.raf(0);
        }
      });
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="about-section-container">
      <section className="hero" ref={heroRef}>
        <div className="hero-img">
          <img src="/images/img.jpeg" alt="Hero" />
        </div>
      </section>

      <section className="about" ref={aboutRef}>
        <h1 className="animate-text">
          A space for work shaped with clarity and intention. Each project follows
          a simple path from thought to form, from form to function.
        </h1>
      </section>

      <section className="services" ref={servicesRef}>
        <div className="services-header">
          <img src="/images/whatido.svg" alt="What I Do" />
        </div>
        <div className="services-header">
          <img src="/images/whatido.svg" alt="What I Do" />
        </div>
        <div className="services-header">
          <img src="/images/whatido.svg" alt="What I Do" />
        </div>
      </section>

      <section className="services-copy" ref={servicesCopyRef}>
        <h1 className="animate-text">I entered the web industry in 2020,
          studying various technologies on my own.
          I&apos;m currently working as a UI/UX designer.
          Besides implementation, I have an interest
          in design and actively create various things daily.
        </h1>
      </section>
      {/* <section className="outro" ref={outroRef}> */}
      {/* <div className="outro-img">
          <img src="/images/img.jpeg" alt="Outro" />
        </div>
      </section> */}
    </div>
  );
};

export default AboutSection;