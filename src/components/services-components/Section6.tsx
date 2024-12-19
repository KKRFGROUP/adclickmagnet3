"use client"

import React, { useState, useEffect, useRef } from 'react'
import { TypewriterEffect } from "../ui/TypewriterEffect";
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Section6Props {
  content: {
    mainpara: string;
    heading: {
      text: string;
      className: string;
    }[];
    para: string;
    social: {
      img: string;
      name: string;
      para: string;
    }[];
  };
  translate?: string;
  responsiveTranslate?: string;
}

function Section6({ content, translate, responsiveTranslate }: Section6Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768); // Adjust breakpoint as needed
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!triggerRef.current || !sectionRef.current) return;

    // Kill existing ScrollTriggers
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
          pinSpacing: true, // Changed to false
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.fromTo(
        sectionRef.current,
        {
          y: 0,
        },
        {
          y: windowWidth <= 1280 ? responsiveTranslate : translate || "-100%",
          ease: "none",
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [windowWidth, responsiveTranslate, translate]);

  // Render based on device type
  return (
    <div ref={containerRef}>
      {isMobile ? (
        // Mobile View
        <div className="mobile-services-sec6-main-container">
          <div className="services-sec6-left-content">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <TypewriterEffect className="services-secs-head" words={content.heading} />
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
          </div>
          <div className="services-sec6-right-content">
            {content.social.map((each, index) => (
              <div key={index} className="flex items-center gap-9 mb-9 services-sec6-right-content-card">
                <Image
                  className='rounded-[20px] services-sec6-right-content-card-img'
                  src={each.img}
                  alt={each.name}
                  height={100}
                  width={100}
                />
                <div className='services-sec6-right-content-card-content'>
                  <h2 className='services-sec6-right-content-card-content-head font-semibold mb-2 text-2xl'>
                    {each.name}
                  </h2>
                  <p className='services-sec6-right-content-card-content-para'>{each.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop View with Animation
        <div ref={triggerRef} className="services-sec6-main-container">
          <div className="services-sec6-left-content">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <TypewriterEffect className="services-secs-head" words={content.heading} />
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
          </div>
          <div ref={sectionRef} className="services-sec6-right-content">
            {content.social.map((each, index) => (
              <div key={index} className="flex items-center services-sec6-right-content-card mb-8">
                <Image
                  className='rounded-[20px] services-sec6-right-content-card-img'
                  src={each.img}
                  alt={each.name}
                  height={100}
                  width={100}
                />
                <div className='services-sec6-right-content-card-content'>
                  <h2 className='services-sec6-right-content-card-content-head'>{each.name}</h2>
                  <p className='services-sec6-right-content-card-content-para'>{each.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Section6;