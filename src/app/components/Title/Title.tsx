"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Scroll from './Scroll';
import ColorBends from '@/app/components/Title/bg';

const Title = () => {
  useEffect(() => {
    gsap.to(".title span", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <ColorBends colors={["#ff5c7a", "#ff8c00", "#ff8c00"]}/>

      {/* Centered Animated Title */}
      <div className="absolute inset-0 flex justify-center items-center select-none">
        <div
          className="font-Milven text-[#f4f0ea] title overflow-hidden flex"
        >
          {"OHAIMAD".split("").map((letter, index) => (
            <span key={index} className="inline-block transform translate-y-[100%]">
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Component Positioned at the Left End */}
      <div className="absolute left-1/2 bottom-0 transform -translate-y-1/2">
        <Scroll />
      </div>
    </div>
  );
};

export default Title;
