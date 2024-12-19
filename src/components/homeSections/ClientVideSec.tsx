
import React from 'react'
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
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734614484/Chris_Testimonial_nd0kjc_ddvtrb.mov"
    },
    {
        name:"Elisha",
        position: "Marketing Head",
        company: "RockWood Kitchen",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734614633/Elisha_-_Testimonial_qbzohz_p93dhi.mov"
    },
    {
        name:"Mark",
        position: "Founder",
        company: "Real Result Sales Training",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734614638/Mark_Testimonial_w5rn63_yjreuk.mov"
    },
    {
        name:"Avnish",
        position: "Founder",
        company: "Spartan Tattoos",
        video: "https://res.cloudinary.com/dgdgrniut/video/upload/v1734629696/WhatsApp_Video_2024-12-19_at_21.13.13_m9icpo.mp4"
    }
]

function ClientVideSec() {


    const handleMouseEnter = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.target as HTMLVideoElement;
        video.play();
    };
    
    const handleMouseLeave = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.target as HTMLVideoElement; // Cast target to HTMLVideoElement
        video.pause();
        video.currentTime = 0; // Reset to the start
        
    };
        
  return (
    <div className="client-video-section">
        <TypewriterEffect className="data-driven-head client-video-section-head" words={words} />
        <div className='client-videos-card'>
            {clientVideos.map((each,index) => (
                <div key={index} className="client-video-card">
                    <div className="client-video-card-div">
                        <video className={`client-video-card-video ${index%2 ==1 ? "mt-9": ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} preload='auto' loop muted controls src={each.video}></video>
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