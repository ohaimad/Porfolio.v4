"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.css';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.y = e.pageY - window.scrollY;
      positionRef.current.x = e.pageX - window.scrollX;
      gsap.to(bigBallRef.current, {
        duration: 0.4,
        x: positionRef.current.x,
        y: positionRef.current.y,
      });
      gsap.to(smallBallRef.current, {
        duration: 0.1,
        x: positionRef.current.x,
        y: positionRef.current.y,
      });
    };

    // Only track mouse movement for cursor position - no hover effects
    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
