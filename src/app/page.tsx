'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, } from 'framer-motion';
import Title from './components/Title/Title';
import Preloader from "./components/Preloader"
import About from "./components/About/about"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"
import Project from "./components/Projects/page"
import Cinematics from "./components/Cinematics/page"
import CustomCursor from "./components/Cursor/Cursor";
import AboutSection from './components/aboutsection/AboutSection';
import Footer from './components/Footer/Footer';

export default function Home() {
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'none';
                window.scrollTo(0, 0);

                setTimeout(() => setIsShow(true), 200);
            }, 2000);
        })();
    }, []);

    return (
        <main className='tracking-tighter w-full overflow-x-hidden'>
            <CustomCursor />
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <AnimatePresence>
                {isShow && (
                    <div id="title">
                        <Title />
                    </div>
                )}
            </AnimatePresence>
            {isShow && (
                <>
                    <div id="aboutsection">
                        <AboutSection />
                    </div>
                    {/* <div id="about">
                        <About />
                    </div> */}
                    <div id="projects">
                        <Project />
                    </div>
                    <div id="cinematics">
                        <Cinematics />
                    </div>
                    <div id="services">
                        <Services />
                    </div>
                    <div id="testimonials">
                        <Testimonials />
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </>
            )}
        </main>
    );
}
