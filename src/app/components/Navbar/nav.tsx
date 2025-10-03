'use client';

import styles from './style.module.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './slide';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

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
        </div>
    );
}
