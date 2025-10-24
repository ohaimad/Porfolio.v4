'use client';

import styles from './style.module.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './slide';
// import StaggeredMenu from './StaggeredMenu';


export default function Header() {
    const [isActive, setIsActive] = useState(false);
    // const menuItems = [
    //     { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    //     { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    //     { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    //     { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    // ];

    // const socialItems = [
    //     { label: 'Twitter', link: 'https://twitter.com' },
    //     { label: 'GitHub', link: 'https://github.com' },
    //     { label: 'LinkedIn', link: 'https://linkedin.com' }
    // ];

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <div className='font-manga text-xl' id="title">OH</div>
                <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Slide />}
            </AnimatePresence>

{/* 
            <div style={{ height: '100vh', background: '#1a1a1a' }}>
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    isFixed={true}
                    menuButtonColor="#fff"
                    openMenuButtonColor="#fff"
                    changeMenuColorOnOpen={true}
                    colors={['#B19EEF', '#5227FF']}
                    logoUrl="/path-to-your-logo.svg"
                    accentColor="#ff6b6b"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div> */}
        </div>
    );
}
