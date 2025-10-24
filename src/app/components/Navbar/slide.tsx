'use client';

import styles from './style.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../Navbar/nav_animation';
import Body from './body';

const links = [
  {
    title: "Home",
    href: "#title",
  },
  {
    title: "About Me",
    href: "#aboutsection",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Cinematics",
    href: "#cinematics",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
      </div>
    </motion.div>
  )
}