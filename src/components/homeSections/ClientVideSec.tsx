
import React, {useRef, useState} from 'react'
import { TypewriterEffect } from '../ui/TypewriterEffect'

const words = [
    {
        text: "Our",
    },
    {
      text: "Clients",
    },
    {
        text: "Are",
    },
    {
      text: "Our",
    },
    {
        text: "Superheroes.",
    },
    {
        text: "We",
    },
    {
        text: "Prioritize",
    },
    {
        text: "Delivering",
    },
    {
        text: "Excellence",
    },
    {
        text: "Products,",
    },
    {
        text: "Thorough",
    },
    {
        text: "Training",
    },
    {
        text: "And",
    },
    {
        text: "Optimal",
    },
    {
        text: "Execution",
    },
    {
        text: "At",
    },
    {
      text: "ACM.",
      className: "text-black dark:text-black ",
      
    },
  ];

const clientVideos = [
    {
        name:"Chris",
        position: "Founder",
        company: "PGroomer",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734703822/website_video_3_1_e3yc02.mp4"
    },
    {
        name:"Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734699962/website_video_2_afsyhy.mp4"
    },
    {
        name:"Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734699453/website_video_4_icesty.mp4"
    },
    {
        name:"Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734697861/website_video_1_rhydtt.mp4"
    }
]

function ClientVideSec() {
    const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

    const setVideoRef = (index: number, element: HTMLVideoElement | null) => {
        if (element) {
            videoRefs.current.set(index, element);
        }
    };

    const handleMouseEnter = async (index: number) => {
        const video = videoRefs.current.get(index);
        if (video) {
            try {
                video.muted = false;
                setActiveVideoIndex(index);
                await video.play();
            } catch (error) {
                console.error('Playback failed:', error);
                // Fallback: try playing muted if unmuted playback fails
                video.muted = true;
                try {
                    await video.play();
                } catch (mutedError) {
                    console.error('Muted playback also failed:', mutedError);
                }
            }
        }
    };

    const handleMouseLeave = (index: number) => {
        const video = videoRefs.current.get(index);
        if (video) {
            video.muted = true;
            video.pause();
            video.currentTime = 0;
            setActiveVideoIndex(null);
        }
    };

    // Function to handle initial interaction with the page
    const handleInitialInteraction = async (index: number) => {
        const video = videoRefs.current.get(index);
        if (video) {
            try {
                // Try to play unmuted first
                video.muted = false;
                await video.play();
                setActiveVideoIndex(index);
            } catch (error) {
                console.error('Unmuted playback failed:', error);
                // Fall back to muted playback
                video.muted = true;
                try {
                    await video.play();
                } catch (mutedError) {
                    console.error('Muted playback also failed:', mutedError);
                }
            }
        }
    };

    return (
        <div className="client-video-section">
            <TypewriterEffect 
                className="data-driven-head client-video-section-head" 
                words={words} 
            />
            <div className='client-videos-card'>
                {clientVideos.map((each, index) => (
                    <div key={index} className="client-video-card">
                        <div className="client-video-card-div">
                            <video 
                                ref={(el) => setVideoRef(index, el)}
                                className={`client-video-card-video ${index % 2 === 1 ? "mt-9" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={() => handleInitialInteraction(index)}
                                preload='auto'
                                loop
                                playsInline
                                muted={activeVideoIndex !== index}
                                src={each.video}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p>{each.name}</p>
                        <p className='w-[80%] mt-2'>{each.position}, {each.company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientVideSec