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
        video: "https://kkrf.s3.eu-north-1.amazonaws.com/adclickmagnet/videos/testimonial/Chris.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGJBFIGJD2VPY%2F20250123%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250123T132711Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEAl%2Bd3QyiRRBnaNLudaFByF7nLTD7cXP%2BrO%2FZNSoy0FUQCIB7NHmVurmNOKFrCUEhyR%2FLa2MxfkRHsw9DHOxAE6M1tKvECCO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzQzMjE4MjEwODkwIgy4LiRY%2FB5%2F2F31VCQqxQK%2BxBGwMDNSZQWiC3sTfKirhuWaccwPNkPX3tsKfmVNOgfE%2BjmV90S4C3sZF7IRoLa37UnV%2F8x28tIoJAhgWgPaEqmbgZpFLk%2BKqSYrZrQs%2FujjH6nam5hl%2FFTv%2FlsbFRcOBQ6nKuCFdGlhqcE9GK1crIAWN%2F5dqvTVTy3mEvP6Z99i8p%2Bep9zygq3w45dG1OmcNtIzcePwNFVO1f5JPmOFO1D2cQVB62upkszIb1tsWqe0R7XtZwYIzPqdOHboTanQMFRPCLsR2%2FPo%2BgPF1kcxbtK4gFk5%2Foge17SZnQ8Z8KuSXud2opnvbqa6jw7ZWEsGjIfg8HabDfJ3kpF4jjyoGy91zQv0yVCiV1jJLDm2IwaSFEETBF5ibF9IlWcls4ErefKZ5CgOiC6A9fSI61qFZ63hnrykkpQkfQ58D6OEhRw%2FqeFgMP61yLwGOrMC4AplulcmYqsO9dQAquTVnKJpU2xp2eWm71AUNxphjWATVBfvoE%2F6nqGTG5B25N8IivRILl6eYNVheC9j6bHKnmmBoBwnI1FmEUyQ1fu0m1JOZ8ARaDUyCIsYg0oR%2F21gPvxE5eTzvpBgBxRbGN6GKMviyPr1aO2MJVyPt5lGSArcwUX4rFC66hKh1ZozBubBKHRKQhyhTAaE%2BfDNxdCtYsXGRdGeH4Uby83vrDZU4zNushPB9GhVojOCxKoI%2B1MI2V5WcYObJcO%2BM3GdJew9JmFatboV1BhpcT8LgfVABCMYvrzC8miyLIdfVQ%2FMpCaCN9o5BLt0sfiELHsYZAZOv8IXDGJkpsepbKW8duqxWYM6QgZthh1qjxeGlED%2BBmRLWOutUQlSRL6pqTosFxXULtFMjA%3D%3D&X-Amz-Signature=b343fcbad4df1455011d6ba5576dd651ab0b792d7c1efd2a8f2764d1cd28adfb&X-Amz-SignedHeaders=host&response-content-disposition=inline",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.04_PM_1_ldz4l0.png" // Add your poster URLs
    },
    {
        name: "Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://kkrf.s3.eu-north-1.amazonaws.com/adclickmagnet/videos/testimonial/Elisha.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGJBFH5CJHG4V%2F20250123%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250123T132803Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEAhwCg9Ab5LXJ2rn6a2f%2Fj1%2BnEXEaPrTqtXMuaGwDmh2ACIBK0fSgr5kk6tNJZY4dmkteboaUo24sSlCQTh%2Btc5c1MKvECCO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzQzMjE4MjEwODkwIgwL%2Bp3zdMCev4QOgGQqxQKbFsBxzm6qt1us9USY0syq9qn1BCJwIzc%2FYzeIW2bSsstvXYB1eDZAL7WiSQScs7bw1O7nFURGD9uIwvToM%2FpwZPjksmmodjDKto5cAGXxST4Z05215wgueakiQhAlqoqRB80jBTbs4vSKWQhYarrHAiiaNucicL%2FQVbqSwCRlDSReZNx7m3Fps7AjXko%2F%2F7cmbKcxdB8BGIKRYG3zlfuSBQ%2FGNL6fMQJ9%2BEsRALtv9c3nhBP68bccSzf3giGU6FsXWVs8lDZj8Xv8lCeswqfP%2BySwwf8iSJfC4Y1r1o3fj7I8RXx6uGqIau23TEzMC%2BOn4ksr%2Fxo6VINsCyJ87dhIhG%2Blqqn0DuzA%2FjJmRi47xMIzjUo2AinvNHoqEwhnGcnb9uUaaT%2FmfWejgJ4p4%2BGvWeb%2B5yIPhRR0BLqSWREYH9%2FVio5DMP61yLwGOrMC9aMPm4MhrXIkS6zcWUV8aFGKpEjbpKzKI6UwCzpZTQJ9%2BVY3I9zndRWitAmfVII0R0w0fXrE2nqa2cUaqaWSTPfNM62pU2wbkLFVZ%2BTzwFJehFGKv0i4ZyCY2DihZd2RVpuwyqimIBlOc9DaSU6thHDXToxFjRc7HQ5HtS4fe5anNKpkjFh2CSTl5MshAqoHW1QxcablZvYxaaUYcrdypyhiXFVEv2odMPXstKaSGymQB0MIiAvJs1aObVE6t%2FHlHxMuZaizrXirhxD7ovqE6dJ%2BJe0xwMLs3MKJmDKsX%2F53IRoxYXl3IT2CmdBIdsfWJOgNImzyJrZyxoADWXCacS9zvymMAycxK7UhTfqycRSxU0xA4iI%2BvK2dNgkOIFmQHp67DM0%2FNFhtfGqLNgBtrLXwkQ%3D%3D&X-Amz-Signature=b823bc88b65c07cb177a3bb43bfb606b9cf580b442dc6da9e29519487b08c7ca&X-Amz-SignedHeaders=host&response-content-disposition=inline",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526079/Screenshot_2025-01-10_at_9.34.36_PM_1_fu67qs.png"
    },
    {
        name: "Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://kkrf.s3.eu-north-1.amazonaws.com/adclickmagnet/videos/testimonial/Mark.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGJBFMLMXAPJO%2F20250123%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250123T132842Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEArrxN3m3nn2q3Z60Rg0SXUuek%2B575eOxExDTA09cs9qYCIBa3jox7IMmdF2LqUjmXW71fmqJtjQrAxz5XBiEEkTjxKvECCO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzQzMjE4MjEwODkwIgwwajUqhRCd29xdNwwqxQLaGn530slhT9aBJ1qE%2B3Wk%2B1D857iZTVDLPJD%2Bv2%2BPPf08JCk8GFM8muY70b%2BBZ7R%2Belc04hm%2Fdk9fyeyqBtrx8nt8FuV%2B8rP3LJ%2FHNwHAF3xPBlMblaSpADZWh0LS95GWjeN3SAxl6nUJBCUiW%2BlBtBEbYXR36UaPi8A50%2BEkTzDls13LMirbrzaivEnzJObyfdYM3qcv5LkzUGd0qUUONSatG3zedw%2Bl0tGWrRndbYZhoFakw2BwTv1%2B%2B3m5PKGFps57LV5dAgDvCKqAyzZ2DAhsQq9fz2h7VHy6x5RIEOKOZrAM0bi7odxyNa1XEZI1D%2FOcg0zAXeM9kbPoYytxDkbwyVSUQ4dR5mGllBU6bQEPdNVZFuDOKqIRHFu3LDOzLVj9P6A1fW0dWz%2FyIyklxADoSdeMc08i7JmC3SCVp4p3XKFpMP61yLwGOrMCvZ2kCEyTMAA%2Fi0kaJi%2FZ%2B%2BR6AqjW0JDDzRy1pnBnjp%2FyNthiPvlCTmLILzjSKFqzAgQIjtfqT9M10W9i7Cd5we7otFbHO28eUgNmS7ZrI%2BGuWB05AaXJV1Fl9GkOuvg1sXrRLBWGC26I8SZcz5E6OF5jhYeBTS5fTdyBXPL60oeG87%2BqMDJJK2N%2BXi4GWmWCAbwIG1I664EMCrIE0x0tGy046gjAit0FaVlGPloNK3SaImOe2Zf8OcIa4IUfxyZmjBDJCJfyYNsmnrHEjBXYV7UFLvaawO6TOYlrNzaKorC%2BkowGrCmXXBHDfRiZ1YbKWLjSu8WHfVUv9%2F7rHotpnIKKh8FQHrCFJITBTAXdaRLOssXHEZH%2FDUY7FN0ebzEV%2FCjoltlcrgEClhN5%2Fv2mScTODg%3D%3D&X-Amz-Signature=dac4c689fd6f0e4936c750d1fc587e279aebe01483908f7ff37d8707830cf683&X-Amz-SignedHeaders=host&response-content-disposition=inline",
        poster: "https://res.cloudinary.com/dgdgrniut/image/upload/v1736526081/Screenshot_2025-01-10_at_9.34.46_PM_2_fip862.png"
    },
    {
        name: "Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://kkrf.s3.eu-north-1.amazonaws.com/adclickmagnet/videos/testimonial/Avnish.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAU72LGJBFEX6KY5NY%2F20250123%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250123T132401Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAzYpFsl%2Fk%2FuPXTsOijQlTSD7tSzPCv9CUnE4d6p6d4CcCIQDtCKirmK2o%2F3RC%2FPsTkJo0M39KMH72TKI4WCPgDiS5%2FCrxAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM0MzIxODIxMDg5MCIMrbYnSLjdZDNiFWmLKsUCtETIaTGaPhTXXK6I%2FmRkT1pyU7ETpS%2BnmW2oxeLYNX%2BlzWDRCXto8tIVKC7lMWY90PoHpCvtqeYyv065ifYQAJSt%2FCq%2BeVqeuLFGjC%2B7sZnSQVzeImkUckZQpzmP8BuwJTScza6WopVo6IlDsSxlFrO%2F8m%2F3SCiP0tWL%2BwuN9PxyrxqNJKZ3ABKDHlWKEu94WQzkkX9VFtxR5dFCFl5P0CNOTEDc1V8ok3nv8zLt087QrTwtGCnr3YFBqCpQvkDBadowL8JJ5zwg0En5SIqq8E63n6lBpRwkojO5UPUoBZanFd%2FA9hyjXZBrIU1tMohuq3BYNNrEy8CJWSl6IXypJACTOcq63bQH4jUZ3R%2BlwoAT5aT5EjZuKE6wie%2FqhzBL%2BvEuKiDo7%2BVhkDMNU0%2F5bbDIpZRGx1W%2F%2FqKeL77L4kwOeI9vMDD%2Btci8BjqyArdmEHTcMkoH1p8DEO1GhxQKLOZfuqCuiI55bO53bJRZ6M%2FK4KORK13AmWyPV%2Be6XCQf2A9yu9Q%2BpsX5p6RkrTynFmtld18xwbDP9juJp2%2B6K0fIYB3mYlBcUDG3ZoYtVAGF7btuVeQa2puoBwJOW10YCqS16NSNZz7HXWsqSpbkpgP7KZCRAsO6kUS1Gh%2FIe5R45PIzGU6wWAZEeBU4jC5Lg7aDq%2F%2By9HJ4TB1%2BWZywIX7aAhm7TnaNly3NCQjXLv%2BOK9JIpdXs8CuPfPdO8q5NhMQlWtCWaYNZg4bDlaCPEiqapxmubP4bWU7InKatFzeSzTV7YSaV6rzk%2F6IW75gwedFCCKUVRmQXxb3u0zDv2By9miCGwfQeSnM%2BH58Mddrnx6mCs%2FpZlIhEvHmN6Tv9wA%3D%3D&X-Amz-Signature=bfae36ba5d6d3f3160832bb9842568c29d1cacb36dea49307f0197360c94ccae&X-Amz-SignedHeaders=host&response-content-disposition=inline",
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
                            {!hasInteracted && (
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