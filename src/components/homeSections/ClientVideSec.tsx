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
        video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/0408(2).mp4",
        poster: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/0408(2)-Cover.jpg" // Add your poster URLs
    },
    {
        name: "Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/04009.mp4",
        poster: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/0409.jpg"
    },
    {
        name: "Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/njsdj.mp4",
        poster: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/njsdj.jpg"
    },
    {
        name: "Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/0410.mp4",
        poster: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/0410.jpg"
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
