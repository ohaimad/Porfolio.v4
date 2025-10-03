'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, } from 'framer-motion';
import Title from './components/Title/Title';
import Preloader from "./components/Preloader"
import About from "./components/About/about"
import Project from "./components/Projects/page"
import Cinematics from "./components/Cinematics/page"
import EarthComponent from "./components/Earth/test";
import CustomCursor from "./components/Cursor/Cursor";

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
                    <div id="about">
                        <About />
                    </div>
                    <div id="projects">
                        <Project />
                    </div>
                    <div id="cinematics">
                        <Cinematics />
                    </div>
                    <div id="earth" className='relative h-screen w-full border text-white overflow-hidden'>
                        <EarthComponent />
                    </div>
                </>
            )}
        </main>
    );
}
