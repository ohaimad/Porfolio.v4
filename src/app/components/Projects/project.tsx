'use client';
import React from 'react'
import styles from './page.module.css';

interface ProjectProps {
    index: number;
    title: string;
    url: string;
    setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function Projects({ index, title, setModal, url }: ProjectProps) {
    const handleClick = () => {
        window.open(url, '_blank');
    };
    return (
        <div onClick={handleClick} onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>View</p>
        </div>
    )
}