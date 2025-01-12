"use client"

import React, { useRef, useState,useEffect, useCallback } from 'react'
import { TypewriterEffect } from '../ui/TypewriterEffect'


interface ClientVideo {
    name: string;
    position: string;
    company: string;
    video: string;
    poster: string; // Add poster URLs to your clientVideos array
}

const words = [
    { text: "Our" },
    { text: "Clients" },
    { text: "Are" },
    { text: "Our" },
    { text: "Superheroes." },
    { text: "We" },
    { text: "Prioritize" },
    { text: "Delivering" },
    { text: "Excellence" },
    { text: "Products," },
    { text: "Thorough" },
    { text: "Training" },
    { text: "And" },
    { text: "Optimal" },
    { text: "Execution" },
    { text: "At" },
    { text: "ACM.", className: "text-black dark:text-black" },
];

const clientVideos: ClientVideo[] = [
    {
        name: "Chris",
        position: "Founder",
        company: "PGroomer",
        video: "/videos/compressed/Chris.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.04_PM_1_ldz4l0.png" // Add your poster URLs
    },
    {
        name: "Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "/videos/compressed/Elisha.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.36_PM_1_fu67qs.png"
    },
    {
        name: "Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "/videos/compressed/Mark.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526081/Screenshot_2025-01-10_at_9.34.46_PM_2_fip862.png"
    },
    {
        name: "Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "/videos/compressed/Avnish.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.58_PM_1_mvte8x.png"
    }
];

function ClientVideSec() {
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Add interaction listener to document
        const handleInteraction = () => {
            setHasInteracted(true);
            // Remove listeners after first interaction
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    const setVideoRef = useCallback((index: number, element: HTMLVideoElement | null) => {
        if (element) {
            videoRefs.current.set(index, element);
            // Always start with muted state
            element.muted = true;
        }
    }, []);

    const handleMouseEnter = useCallback(async (index: number) => {
        const video = videoRefs.current.get(index);
        if (!video) return;

        try {
            video.currentTime = 0; // Reset to start
            
            // If user has interacted, try unmuted playback
            if (hasInteracted) {
                video.muted = false;
                setActiveVideoIndex(index);
                await video.play();
            } else {
                // If no interaction yet, always play muted
                video.muted = true;
                setActiveVideoIndex(index);
                await video.play();
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            console.warn('Playback with sound failed, falling back to muted playback');
            try {
                video.muted = true;
                setActiveVideoIndex(index);
                await video.play();
            } catch (mutedError) {
                console.error('Muted playback also failed:', mutedError);
            }
        }
    }, [hasInteracted]);

    const handleMouseLeave = useCallback((index: number) => {
        const video = videoRefs.current.get(index);
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
            setActiveVideoIndex(null);
        }
    }, []);

    return (
        <div className="client-video-section" onClick={() => setHasInteracted(true)}>
            <TypewriterEffect 
                className="data-driven-head client-video-section-head" 
                words={words} 
            />
            <div className="client-videos-card">
                {clientVideos.map((each, index) => (
                    <div key={index} className="client-video-card">
                        <div 
                            className="client-video-card-div relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <video 
                                ref={(el) => setVideoRef(index, el)}
                                className={`client-video-card-video ${index % 2 === 1 ? "mt-9" : ""}`}
                                //poster={each.poster}
                                preload="metadata"
                                loop
                                playsInline
                                muted={true}  // Start muted by default
                            >
                                <source src={each.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {!hasInteracted && activeVideoIndex === index && (
                                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                    Click anywhere to enable sound
                                </div>
                            )}
                        </div>
                        <p>{each.name}</p>
                        <p className="w-[80%] mt-2">{each.position}, {each.company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientVideSec