"use client"

import React, { useEffect,useState } from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'

const words = [
    { 
        text: "•Inspired",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    { 
        text: "By",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    {
        text: "Innovation",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-2",
    },
    
];

function InspiredBy() {
    const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    
    
    }, [windowWidth]);

    

  return (
    <>
    <div className='inspired-us-main-container'>
        <TypewriterEffect className='impact-matric-head'  words={words}/>
        <div className='inspired-us-content-card'>
            <p className='inspired-us-content-card-para' >Our story is one of creativity, collaboration, and growth — fueled by a relentless desire to push boundaries and unlock potential.</p>
            <hr className="inspired-us-content-card-line" />
        </div>
        <div className='inspired-us-content-card-right'>
            <hr className="inspired-us-content-card-line" />
            <p className='inspired-us-content-card-para' >With a passion for helping brands stand out in a crowded digital landscape. Founded by a group of creative thinkers and strategists, we started as a small team determined to make a big impact.</p>
            <button type="button" className='inspired-us-content-card-btn' >GET IN TOUCH •</button>
        </div>
        <div className="inspired-us-content-card-between">
            <div className='inspired-us-content-card'>
                <h2 className='inspired-us-content-card-head'>1. DISCOVER</h2>
                <p className='inspired-us-content-card-para'>We begin by understanding your business goals, target audience, and current challenges. This discovery phase allows us to tailor strategies that align with your vision and set the foundation for success.</p>
                <hr className="inspired-us-content-card-line"/>
            </div>
            <div className='inspired-us-content-card'>
                <h2 className='inspired-us-content-card-head'>2. STRATEGIZE</h2>
                <p className='inspired-us-content-card-para'>Based on our findings, we develop a custom marketing plan. This involves selecting the right channels, creating impactful messaging, and setting measurable goals to ensure a data-driven approach.</p>
                <hr className="inspired-us-content-card-line"/>
            </div>  
        </div>
        <button type="button" className='inspired-us-content-card-btn-case'>CASE STUDIES •</button>

    </div>
    {/*video card section */}
        <div className='inspired-video-card'>
            <div className='inspired-video-content'>
                <h2 className='inspired-video-content-head'>Our Mission</h2>
                <p className='inspired-video-content-para' >Our mission is to empower businesses to reach their full potential through innovative marketing strategies and data-driven solutions.</p>
                <br />
                <p className='inspired-video-content-para' >We are committed to delivering measurable results, fostering meaningful connections between brands and their audiences, and helping our clients achieve sustainable growth.</p>
            </div>
            <video style={{ width: windowWidth <= 768 ? "100%": "100%", height: windowWidth <= 1028? "90vh": "130vh", borderRadius: "50px" }} autoPlay preload='auto' loop muted playsInline src="https://res.cloudinary.com/dgdgrniut/video/upload/v1732097945/rewards-desktop-final_yqhhyy.mp4"></video>
        </div> 
        </>
  )
}

export default InspiredBy