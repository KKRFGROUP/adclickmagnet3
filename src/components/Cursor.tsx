"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    
    useEffect(() => {
        let animationFrameId: number;
        const cursor = cursorRef.current;
        
        // Check for desktop once on mount
        const checkIsDesktop = () => window.innerWidth > 1028;
        setIsDesktop(checkIsDesktop());

        if (!cursor || !isDesktop) return;

        const links = document.querySelectorAll("a");
        let cursorPosition = { x: 0, y: 0 };
        let isAnimating = false;

        const animateCursor = () => {
            if (!isAnimating) return;
            
            gsap.to(cursor, {
                x: cursorPosition.x,
                y: cursorPosition.y,
                duration: 0.2,
                ease: "power2.out"
            });
            
            animationFrameId = requestAnimationFrame(animateCursor);
        };

        const onMouseMove = (e: MouseEvent) => {
            cursorPosition = { x: e.clientX, y: e.clientY };
            
            if (!isAnimating) {
                isAnimating = true;
                animationFrameId = requestAnimationFrame(animateCursor);
            }
        };

        const onMouseEnterLink = () => {
            gsap.to(cursor, {
                scale: 4,
                duration: 0.3
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        };

        // Event listeners with proper cleanup
        document.addEventListener("mousemove", onMouseMove);
        
        links.forEach(link => {
            link.addEventListener("mouseenter", onMouseEnterLink);
            link.addEventListener("mouseleave", onMouseLeaveLink);
        });

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            links.forEach(link => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
            });
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <div ref={cursorRef} className="custom-cursor">
            <span className="cursor-text">View</span>
        </div>
    );
}