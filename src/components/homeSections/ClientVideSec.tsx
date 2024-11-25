"use client"
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
        name:"Edgar",
        position: "CEO",
        company: "xyz",
        video: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/tourist-testimonial.mp4"
    },
    {
        name:"Tushar Patel",
        position: "CEO",
        company: "xyz",
        video: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/healthcare-product-testimonial.mp4"
    },
    {
        name:"Daniel Zukich",
        position: "Co-founder",
        company: "xyz",
        video: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/plandid-testimonial.mp4"
    },
    {
        name:"Edgar",
        position: "CEO",
        company: "xyz",
        video: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/saying-about-appinventiv.mp4"
    }
]

function ClientVideSec() {


    const handleMouseEnter = (event) => {
      event.target.pause();
    };
    
    const handleMouseLeave = (event) => {
      event.target.pause();
      event.target.currentTime = 0; // Reset to the start
    };
        
  return (
    <div className="client-video-section">
        <TypewriterEffect className="data-driven-head client-video-section-head" words={words} />
        <div className='client-videos-card'>
            {clientVideos.map((each,index) => (
                <div key={index} className="client-video-card">
                    <div className="client-video-card-div">
                        <video className={`client-video-card-video ${index%2 ==1 ? "mt-9": ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} preload='auto' loop muted src={each.video}></video>
                    </div>
                    <p>{each.name}</p>
                    <p>{each.position}, {each.company}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ClientVideSec