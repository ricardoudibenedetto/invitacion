import React, { ReactElement } from 'react'
import { useState, useEffect, useRef } from "react";
import './style.css'
interface Props {
    children: ReactElement
}
export const FadeInComponent: React.FC<Props> = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && targetRef.current) {
                    setIsVisible(true);
                    observer.unobserve(targetRef.current);
                }
            },
            {
                rootMargin: "0px",
                threshold: 1.0
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className={`fade-in ${isVisible ? 'active' : ''}`} ref={targetRef}>
            {children}
        </div>
    )
}
