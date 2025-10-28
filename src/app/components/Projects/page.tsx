'use client';

import { useState, useEffect, useRef } from 'react';
import Project from './project';
import { ArrowUpRight } from 'lucide-react';
import Modal from './modal';
import ScrollVelocity from './loop';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import "./page.module.css";

const projects = [
  {
    title: "BMJ",
    src: "1.webp",
    color: "#000000",
    url: "https://www.behance.net/gallery/214693301/BMJ"
  },
  {
    title: "VELOXFORCE",
    src: "2.webp",
    color: "#000000",
    url: "https://www.behance.net/gallery/213726105/Modern-Landing-Page-Design"
  },
  {
    title: "BRANDING",
    src: "3.webp",
    color: "#000000",
    url: "https://www.behance.net/gallery/175450147/LOGOFOLIO"
  },
  {
    title: "TSHIRTS",
    src: "4.webp",
    color: "#000000",
    url: "https://www.behance.net/gallery/215114009/ODYSSEY-2024"
  },
  {
    title: "CUB3D",
    src: "5.webp",
    color: "#000000",
    url: "https://github.com/ohaimad/Cub3D"
  }
]

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const runAnimation = () => {
      if (hasAnimated.current || !titleRef.current) return;

      // Animate the icon first
      if (iconRef.current) {
        gsap.fromTo(iconRef.current,
          {
            scale: 0,
            rotation: -45,
            opacity: 0
          },
          {
            duration: 0.6,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: "back.out(1.7)",
          }
        );
      }

      // Animate the title
      const splitElement = titleRef.current.querySelector('.split');
      if (splitElement) {
        gsap.set(splitElement, { opacity: 1 });

        const splitInstance = SplitText.create(splitElement, {
          type: "words,lines",
          linesClass: "line",
        });

        gsap.from(splitInstance.lines, {
          duration: 0.8,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.2, // Start after icon
        });
      }

      // Animate the project grid
      if (gridRef.current) {
        const gridItems = gridRef.current.querySelectorAll('.grid-item');
        gsap.fromTo(gridItems,
          {
            y: 50,
            opacity: 0
          },
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "expo.out",
            delay: 0.8, // Start after title animation
          }
        );
      }

      hasAnimated.current = true;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if fonts are ready, otherwise just run the animation
            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(runAnimation);
            } else {
              setTimeout(runAnimation, 100);
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit before the element is fully visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen p-2 text-white">
      <ScrollVelocity
        texts={['⏳ PROJECT SECTION']}
        velocity={60}
        className="custom-scroll-text text-[40px] font-bold"
      />
      <div className="px-8 mb-16">
        <div className="flex items-center gap-4 mb-12 mt-8">
          <div className="services-icon-container">
            <ArrowUpRight className="services-icon" />
          </div>
          <div ref={titleRef}>
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-light ">PROJECTS</h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* UI\UX Column */}
          <div className="space-y-6 grid-item opacity-0">
            <h3 className="text-lg font-medium text-gray-300">WEB DESIGN</h3>
            <div className="space-y-4 grid">
              <a
                href="https://www.behance.net/gallery/228611433/Keeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Keeya
              </a>
              <a
                href="https://www.behance.net/gallery/213726105/Modern-Landing-Page-Design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Veloxforce
              </a>
              <a
                href="https://www.behance.net/gallery/214693301/BMJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                BMJ
              </a>
              <a
                href="https://www.wedesign.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                WeDesign
              </a>
            </div>
          </div>

          {/* Graphic Design Column */}
          <div className="space-y-6 grid-item opacity-0">
            <h3 className="text-lg font-medium text-gray-300">GRAPHIC DESIGN</h3>
            <div className="space-y-4 grid">
              <a
                href="https://www.behance.net/gallery/175450147/LOGOFOLIO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Branding
              </a>
              <a
                href="https://www.behance.net/gallery/215114009/ODYSSEY-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Tshirts
              </a>
            </div>
          </div>

          {/* C\C++ Column */}
          <div className="space-y-6 grid-item opacity-0">
            <h3 className="text-lg font-medium text-gray-300">C \ C++</h3>
            <div className="space-y-4 grid">
              <a
                href="https://github.com/ohaimad/Cub3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Cub3d
              </a>
              <a
                href="https://github.com/ohaimad/inception"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Inception
              </a>
              <a
                href="https://github.com/ohaimad/inception"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                IRC
              </a>
              {/* <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Fractol</div> */}
            </div>
          </div>

          {/* Shell Column */}
          <div className="space-y-6 grid-item opacity-0">
            <h3 className="text-lg font-medium text-gray-300">Shell</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/ohaimad/Minishell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Minishell
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-4 px-8 mb-16">
        <div className="w-1 h-12 bg-white rounded-full flex items-center justify-center"> */}
      {/* <SquareMenu className="w-5 h-5 text-black" /> */}
      {/* </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-light">Summary</h2>
      </div> */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
            url={project.url}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
