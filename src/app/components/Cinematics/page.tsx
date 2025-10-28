'use client'

import InfiniteMenu from './Visual'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import './style.css';

const items = [
    {
        image: '/images/Cyberodysey.webp',
        imageFallback: '/images/fallback/Cyberodysey.png',
        video: '/videos/Odyseyy.mp4',
        title: 'Akasec',
        description: 'Cyberodysei is always a great experience'
    },
    {
        image: '/images/Inception.webp',
        imageFallback: '/images/fallback/Inception.png',
        video: '/videos/Inception.mp4',
        title: 'Inception',
        description: 'Only the Mobb will know what it is'
    },
    {
        image: '/images/ANTICHABTA.webp',
        imageFallback: '/images/fallback/ANTICHABTA.png',
        video: '/videos/Antichabta.mp4',
        title: 'Antichbata',
        description: 'Um6p was cool with the fam, right?'
    },
    {
        image: '/images/Biri.webp',
        imageFallback: '/images/fallback/Biri.png',
        video: '/videos/Biri.mp4',
        title: 'Conference',
        description: 'Biri doing Biri things'
    }
];

const Videos = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const runAnimation = () => {
            if (hasAnimated.current || !titleRef.current) return;
            
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
                });
            }

            // Animate the description
            if (descriptionRef.current) {
                gsap.fromTo(descriptionRef.current,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        duration: 0.6,
                        y: 0,
                        opacity: 1,
                        ease: "expo.out",
                        delay: 0.5, // Start after title
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
        <>
            <div className='text-black bg-[#f4f0ea] relative w-full'>
                <div className='min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-8 w-full'>
                    <div className="flex flex-col items-center justify-center gap-4 mb-8 w-full max-w-4xl">
                        <div ref={titleRef} className="w-full text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tighter split">Cinematics</h2>
                        </div>
                        <span ref={descriptionRef} className='text-center text-sm sm:text-base opacity-0 max-w-2xl px-4'>
                            Navigate between videos by swiping on touch screens or clicking and dragging with a mouse. <br />
                            The video will play when you click.
                        </span>
                    </div>
                    <div className='relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] text-white p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-7xl'>
                        <InfiniteMenu items={items} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Videos;