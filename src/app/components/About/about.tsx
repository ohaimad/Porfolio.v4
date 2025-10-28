import Image from 'next/image';
import logo1 from '../../../../public/images/1337.svg';
import logo2 from '../../../../public/images/behance.webp';
import logo3 from '../../../../public/images/UM6P.webp';
import About_img from '../../../../public/images/About.svg';
import pdf from '../../../../public/images/pdf.jpeg';
import "./style.css"
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useEffect, useRef } from 'react';

const About = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);
    
    const experiences = [
        {
            logo: logo1,
            title: "1337 School",
            duration: "2022-Present"
        },
        {
            logo: logo2,
            title: "Freelance Designer",
            duration: "2021-Present"
        },
        {
            logo: logo3,
            title: "UM6P - Université Mohammed VI",
            duration: "2024-2025"
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        const runAnimation = () => {
            if (hasAnimated.current || !textRef.current) return;
            
            // Animate the title
            if (titleRef.current) {
                gsap.fromTo(titleRef.current, 
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        duration: 0.8,
                        y: 0,
                        opacity: 1,
                        ease: "expo.out",
                    }
                );
            }

            // Animate the main paragraph text
            const splitElement = textRef.current.querySelector('.split');
            if (splitElement) {
                gsap.set(splitElement, { opacity: 1 });

                const splitInstance = SplitText.create(splitElement, {
                    type: "words,lines",
                    linesClass: "line",
                });

                gsap.fromTo(splitInstance.lines,
                    {
                        yPercent: 100,
                        opacity: 0
                    },
                    {
                        duration: 0.6,
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: "expo.out",
                        delay: 0.3, // Delay to start after title
                    }
                );
            }

            // Animate the experience section
            if (experienceRef.current) {
                const experienceItems = experienceRef.current.querySelectorAll('.experience-item');
                gsap.fromTo(experienceItems,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        duration: 0.6,
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                        ease: "expo.out",
                        delay: 0.8, // Delay to start after paragraph
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

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section 
                className="relative text-black bg-[#f4f0ea] min-h-screen overflow-hidden"
                aria-label="About Otmane Haimad"
                role="main"
            >
                {/* Centered Content */}
                <div className="flex flex-col justify-center items-center min-h-screen px-5 md:px-10 relative py-10">
                    <div className="flex flex-col lg:flex-row lg:items-center w-full max-w-7xl gap-8 lg:gap-4">
                        {/* Profile Image */}
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                            <div className="w-64 lg:w-full p-3 rounded-2xl overflow-hidden">
                                <Image 
                                    alt="Profile photo of Otmane Haimad, UI/UX Designer" 
                                    src={pdf} 
                                    className="rounded-2xl w-full h-auto" 
                                    role="img"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="lg:ml-10 flex-1 text-center lg:text-left">
                            <h1 
                                ref={titleRef} 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold opacity-0"
                                role="heading"
                                aria-level={1}
                            >
                                Otmane Haimad
                            </h1>
                            
                            <div 
                                ref={textRef} 
                                className="container text-lg sm:text-2xl lg:text-4xl font-light leading-normal mt-6 lg:mt-10"
                                role="region"
                                aria-label="About description"
                            >
                                <p className="split">I entered the web industry in 2022,
                                    studying various technologies on my own.
                                    I&apos;m currently working as a UI/UX designer.
                                    Besides implementation, I have an interest
                                    in design and actively create various things daily.
                                </p>
                            </div>

                            {/* Experience */}
                            <section 
                                ref={experienceRef} 
                                className="flex flex-col sm:flex-row gap-6 lg:gap-10 mt-8 lg:mt-10"
                                aria-label="Professional Experience"
                                role="region"
                            >
                                <h2 className="sr-only">Professional Experience</h2>
                                {experiences.map((experience, index) => (
                                    <article 
                                        key={index} 
                                        className="flex items-center gap-3 w-full sm:w-1/3 experience-item opacity-0 justify-center lg:justify-start"
                                        role="article"
                                        aria-label={`Experience at ${experience.title}`}
                                    >
                                        <Image 
                                            alt={`${experience.title} logo`} 
                                            src={experience.logo} 
                                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex-shrink-0" 
                                            role="img"
                                        />
                                        <div className="text-base sm:text-lg lg:text-xl">
                                            <span className="font-medium block" role="text">{experience.title}</span>
                                            <span className="font-light" role="text">{experience.duration}</span>
                                        </div>
                                    </article>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>

                {/* Background Image at Bottom */}
                <div className="absolute bottom-0 left-0 w-full opacity-30 z-0" aria-hidden="true">
                    <Image alt="" src={About_img} className="w-full" role="presentation" />
                </div>
            </section>
        </>
    );
};

export default About;