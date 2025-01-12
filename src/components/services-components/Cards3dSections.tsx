"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register GSAP plugin outside component
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Cards3dSections({
  content,
  className,
  translate,
  responsiveTraslate,
  end
}: {
  content: {
    mainpara: string;
    head: string;
    cards: {
      head: string;
      para: string;
      img: string;
      video?: string;
    }[];
  };
  className?: string;
  translate?: string;
  end?: string;
  responsiveTraslate?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const card3dTriggerRef = useRef<HTMLDivElement>(null);
  const card3dSectionRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      clearTimeout(timeout);
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!card3dTriggerRef.current || !card3dSectionRef.current) return;

    // Kill existing ScrollTriggers for this section
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === card3dTriggerRef.current) {
        trigger.kill();
      }
    });

    // Create GSAP context
    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        card3dSectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: translate,
          ease: "none",
          scrollTrigger: {
            trigger: card3dTriggerRef.current,
            start:windowWidth <= 1028 ? "top -10%" : "top -5%",
            end: windowWidth <= 768 ? "+=1000" : end,
            scrub: 2,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true, // Recalculate on resize
            
          }
        }
      );

      return () => {
        animation.kill();
      };
    }, containerRef); // Scope to container

    return () => {
      ctx.revert();
    };
  }, [windowWidth, end, translate, responsiveTraslate]);

  return (
    <div ref={containerRef}>
      <div
        ref={card3dTriggerRef}
        className={`services-secs-main-container overflow-hidden flex-col justify-center items-center text-center services-3dcard-main-container ${className}`}
      >
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.head}</h2>
        <div ref={card3dSectionRef} className="flex mobile-card-3d-container">
          {content.cards.map((each, index) => (
            <CardContainer
              key={index}
              className="inter-var text-left w-[100%] md:w-[30vw]"
              containerClassName=""
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border mobile-card-3d">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white mobile-card-3d-head"
                >
                  {each.head}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mobile-card-3d-para"
                >
                  {each.para}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  {each.video ? (
                    <video
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mobile-card-3d-img"
                      autoPlay
                      preload="auto"
                      loop
                      muted
                      playsInline
                      
                      onLoadedData={(e) => {
                        const videoElement = e.target as HTMLVideoElement;
                        videoElement.play().catch((error: DOMException) => {
                          console.error('Autoplay failed:', error);
                        });
                      }}
                    >
                      <source src={each.video}/>
                    </video>
                  ) : (
                    <Image
                      src={each.img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mobile-card-3d-img"
                      alt="thumbnail"
                    />
                  )}
                </CardItem>
                <div className="flex justify-start items-center mt-10"></div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards3dSections;