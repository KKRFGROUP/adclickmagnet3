"use client"

import React, { useRef, useState, useCallback } from 'react'
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
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734703822/website_video_3_1_e3yc02.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.04_PM_1_ldz4l0.png" // Add your poster URLs
    },
    {
        name: "Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734699962/website_video_2_afsyhy.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.36_PM_1_fu67qs.png"
    },
    {
        name: "Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734699453/website_video_4_icesty.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526081/Screenshot_2025-01-10_at_9.34.46_PM_2_fip862.png"
    },
    {
        name: "Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734697861/website_video_1_rhydtt.mp4",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.58_PM_1_mvte8x.png"
    }
];

function ClientVideSec() {
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

    const setVideoRef = useCallback((index: number, element: HTMLVideoElement | null) => {
        if (element) {
            videoRefs.current.set(index, element);
        }
    }, []);

    const handleMouseEnter = useCallback(async (index: number) => {
        const video = videoRefs.current.get(index);
        if (video) {
            try {
                video.currentTime = 0; // Reset to start
                video.muted = false;
                setActiveVideoIndex(index);
                await video.play();
            } catch (error) {
                console.error('Playback failed:', error);
                video.muted = true;
                try {
                    await video.play();
                } catch (mutedError) {
                    console.error('Muted playback failed:', mutedError);
                }
            }
        }
    }, []);

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
        <div className="client-video-section">
            <TypewriterEffect 
                className="data-driven-head client-video-section-head" 
                words={words} 
            />
            <div className="client-videos-card">
                {clientVideos.map((each, index) => (
                    <div key={index} className="client-video-card">
                        <div className="client-video-card-div">
                            <video 
                                ref={(el) => setVideoRef(index, el)}
                                className={`client-video-card-video ${index % 2 === 1 ? "mt-9" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                poster={each.poster}
                                preload="metadata"
                                loop
                                playsInline
                                muted={activeVideoIndex !== index}
                                src={each.video}
                            >
                                Your browser does not support the video tag.
                            </video>
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