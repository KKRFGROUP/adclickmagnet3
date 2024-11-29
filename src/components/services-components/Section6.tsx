"use client"

import React, { useState } from 'react'
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';



function Section6({content, translate, responsiveTranslate}: {content: {mainpara: string; heading: {text: string; className: string;}[]; para: string; social: {img: string;name: string; para: string}[]}; translate?: string;responsiveTranslate?: string;}) {
    const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      
    }
    
    const hscroll = gsap.fromTo(
      sectionRef.current,
      {translateY:0},
      {
        translateY: windowWidth <= 1280 ? responsiveTranslate : translate || "-100%",
        ease: "none",
        duration: 2,
        scrollTrigger:{
          trigger: triggerRef.current,
          scroller: "body",
          start: windowWidth <= 1280 ? "top -5%" : "top -15%",
          end: windowWidth <= 1280 ? "100% top" : "100% top" ,
          scrub: 2,
          pin: true,
        }
      }
    )
    return () => {
      hscroll.kill();
    }

  }, [windowWidth, responsiveTranslate,translate])


  return (
    <>
      <div className={`mobile-services-sec6-main-container`}>
        <div className="services-sec6-left-content">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <TypewriterEffect className="services-secs-head" words={content.heading} />
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
        </div>
        <div className="services-sec6-right-content">
          {content.social.map((each,index) => (
              <div key={index} className="flex items-center gap-9 mb-9 services-sec6-right-content-card">
                      <Image className='rounded-[20px] services-sec6-right-content-card-img' src={each.img} alt="social" height={100} width={100} />
                  <div className='services-sec6-right-content-card-content'>
                      <h2 className='services-sec6-right-content-card-content-head font-semibold mb-2 text-2xl'>{each.name}</h2>
                      <p className='services-sec6-right-content-card-content-para'>{each.para}</p>
                  </div>
              </div>
          ))}
          
        </div> 
      </div>

      <div ref={triggerRef} className={`services-sec6-main-container`}>
        <div className="services-sec6-left-content">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <TypewriterEffect className="services-secs-head" words={content.heading} />
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
        </div>
        
        <div ref={sectionRef} className="services-sec6-right-content">
          {content.social.map((each,index) => (
            <div key={index} className="flex items-center services-sec6-right-content-card mb-8">
                      <Image className='rounded-[20px] services-sec6-right-content-card-img' src={each.img} alt="social" height={100} width={100} />
                  <div className='services-sec6-right-content-card-content'>
                      <h2 className='services-sec6-right-content-card-content-head'>{each.name}</h2>
                      <p className='services-sec6-right-content-card-content-para'>{each.para}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Section6