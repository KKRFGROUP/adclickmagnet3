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
        video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1743535700/Chris_jph9o9_aqjjhz.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.04_PM_1_ldz4l0.png" // Add your poster URLs
    },
    {
        name: "Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1743535803/Elisha_flls56_dtk4zl.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.36_PM_1_fu67qs.png"
    },
    {
        name: "Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1743535898/Mark_aqnnlg_izzb9l.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526081/Screenshot_2025-01-10_at_9.34.46_PM_2_fip862.png"
    },
    {
        name: "Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1743535977/Avnish_dux08g_jn0ufw.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.58_PM_1_mvte8x.png"
    }
];


function ClientVideSec() {
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);
    const playPromiseRef = useRef<Map<number, Promise<void>>>(new Map());

    
    // Handle initial user interaction
    useEffect(() => {
        const handleInteraction = () => {
            setHasInteracted(true);
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

    // Initialize video elements
    const setVideoRef = useCallback((index: number, element: HTMLVideoElement | null) => {
        if (element) {
            videoRefs.current.set(index, element);
        }
    }, []);

    const stopVideo = useCallback(async (index: number) => {
        const video = videoRefs.current.get(index);
        if (!video) return;

        const playPromise = playPromiseRef.current.get(index);
        if (playPromise) {
            try {
                // Wait for any pending play operation to complete
                await playPromise;
                video.pause();
                video.currentTime = 0;
                video.muted = true;
            } catch (error) {
                console.error('Error stopping video:', error);
            }
        } else {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
        }
        playPromiseRef.current.delete(index);
    }, []);

    const handleMouseEnter = useCallback(async (index: number) => {
        if (!hasInteracted) return;

        const video = videoRefs.current.get(index);
        if (!video) return;

        // Stop any currently playing video
        if (activeVideoIndex !== null && activeVideoIndex !== index) {
            await stopVideo(activeVideoIndex);
        }

        try {
            video.muted = false;
            video.currentTime = 0;
            const playPromise = video.play();
            playPromiseRef.current.set(index, playPromise);
            
            // Wait for the play operation to complete
            await playPromise;
            setActiveVideoIndex(index);
        } catch (error) {
            console.warn('Unmuted playback failed, trying muted:', error);
            try {
                video.muted = true;
                const mutedPlayPromise = video.play();
                playPromiseRef.current.set(index, mutedPlayPromise);
                await mutedPlayPromise;
            } catch (mutedError) {
                console.error('Muted playback also failed:', mutedError);
                playPromiseRef.current.delete(index);
            }
        }
    }, [activeVideoIndex, hasInteracted, stopVideo]);

    const handleMouseLeave = useCallback(async (index: number) => {
        await stopVideo(index);
        setActiveVideoIndex(null);
    }, [stopVideo]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            videoRefs.current.forEach((video, index) => {
                stopVideo(index);
            });
        };
    }, [stopVideo]);

    return (
        <div className="client-video-section">
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
                                muted={activeVideoIndex !== index}
                            >
                                <source src={each.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {!hasInteracted && (<div></div>)}
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
