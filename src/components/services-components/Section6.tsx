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

  // Debounced resize handler like in Cards3dSections
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const width = window.innerWidth;
        setWindowWidth(width);
        setIsMobile(width < 768);
      }, 150);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      clearTimeout(timeout);
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // GSAP animation setup following Cards3dSections pattern
  useEffect(() => {
    if (!triggerRef.current || !sectionRef.current || isMobile) return;

    // Kill existing ScrollTriggers for this section only
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === triggerRef.current) {
        trigger.kill();
      }
    });

    // Create GSAP context
    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        sectionRef.current,
        {
          y: 0,
        },
        {
          y: windowWidth <= 1280 ? responsiveTranslate || "-85%" : translate || "-70%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start:  "top 0%",
            end: windowWidth <= 768 ? "+=1000" : "bottom center",
            scrub: 2,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            markers: false, // Remove in production
          }
        }
      );

      return () => {
        animation.kill();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [windowWidth, translate, responsiveTranslate, isMobile]);

  return (
    <div ref={containerRef} className="relative">
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
                  <h2 className='services-sec6-right-content-card-content-head'>
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
        <div 
          ref={triggerRef} 
          className="services-sec6-main-container overflow-hidden"
        >
          <div className="services-sec6-left-content">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <TypewriterEffect className="services-secs-head" words={content.heading} />
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
          </div>
          <div ref={sectionRef} className="services-sec6-right-content">
            {content.social.map((each, index) => (
              <div key={index} className="flex items-center services-sec6-right-content-card">
                <Image
                  className='rounded-[20px] services-sec6-right-content-card-img'
                  src={each.img}
                  alt={each.name}
                  height={100}
                  width={100}
                />
                <div className='services-sec6-right-content-card-content'>
                  <h2 className='services-sec6-right-content-card-content-head'>
                    {each.name}
                  </h2>
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