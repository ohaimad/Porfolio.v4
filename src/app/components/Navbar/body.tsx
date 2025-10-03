import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import styles from './style.module.css';
import { blur, translate } from '../Navbar/nav_animation';

interface Link {
    title: string;
    href: string;
}

interface SelectedLink {
    isActive: boolean;
    index: number;
}

interface BodyProps {
    links: Link[];
    selectedLink: SelectedLink;
    setSelectedLink: (selectedLink: SelectedLink) => void;
}

export default function Body({links, selectedLink, setSelectedLink}: BodyProps) {

    const getChars = (word: string) => {
        const chars: ReactElement[] = [];
        word.split("").forEach( (char: string, i: number) => {
          chars.push(
            <motion.span 
                custom={[i * 0.02, (word.length - i) * 0.01]} 
                variants={translate} initial="initial" 
                animate="enter" 
                exit="exit" 
                key={char + i}>
                {char}
            </motion.span>
            )
        })
        return chars;
    }

    const handleClick = (href: string) => {
        const targetElement = document.querySelector(href) as HTMLElement;
        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // 1.5 seconds for smooth slow scrolling
            let start: number | null = null;

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                // Easing function for smoother animation (easeInOutCubic)
                const easeInOutCubic = (t: number): number => {
                    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                };
                
                const easedPercentage = easeInOutCubic(percentage);
                
                window.scrollTo(0, startPosition + distance * easedPercentage);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            };
            
            window.requestAnimationFrame(step);
        }
    }

    return (
        <div className={styles.body}>
        {
            links.map( (link, index) => {
                const { title, href } = link;
                return <div key={`l_${index}`} onClick={() => handleClick(href)} style={{ cursor: 'pointer' }}>
                <motion.p 
                    onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                    onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
                    variants={blur} 
                    animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                    {getChars(title)}
                </motion.p>
                </div>
            })
        }
        </div>
    )
}