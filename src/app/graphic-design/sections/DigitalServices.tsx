"use client";
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);



const items: {
  id: number;
  imageUrl: string;
  head: string;
  page: string;
  para: string;
  video? : string;
}[] = [
    {
        id: 1,
        imageUrl: 'https://assets.pinterest.com/ext/embed.html?id=17310779813421983',
        video: "/videos/graphic design/services/01.mp4",
        //video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1737809741/57124bc04f286670b7b126d11f2c0055_izib7c.mp4",
        head: "Ad Creative",
        page: "/ad-creative",
        para: "Get static and motion ad creatives, concepts, and variations to test your way to better results on social media."
      },
      {
        id: 2,
        imageUrl: 'https://assets.pinterest.com/ext/embed.html?id=289074869851146379',
        video: "/videos/graphic design/services/02.mp4",
        //video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1733660227/2fc3296e70d1efba5915a76712eabf87_orx5z9.mp4",
        head: "Branding Services",
        page: "/branding-services",
        para: "Get the brand expertise you need, from brand development and design to custom branding solutions."
      },
      {
        id: 3,
        imageUrl: 'https://assets.pinterest.com/ext/embed.html?id=3025924744020565',
        video: "/videos/graphic design/services/03.mp4",
        //video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1733659254/b2c9669c5de9f04909df5e71d2d6eea5_afsbbh.mp4",
        head: "Video Production",
        page: "/video-production",
        para: "Receive strategy-aligned video content services, from pre-production to final edit, to maximize your online success."
      },
      {
        id: 4,
        imageUrl: "https://assets.pinterest.com/ext/embed.html?id=448319337916941456" ,
        video: "/videos/graphic design/services/04.mp4",
        //video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1733681971/e7179a38ce0e25b77ac5c3c15b92dccc_tfhsfw.mp4",
        head: "Presentation Design",
        page: "/presentation-design",
        para: "Get original presentations designed for your persuasive pitch decks, sales decks, or PowerPoint presentations."
      },
      {
        id: 5,
        imageUrl: "/videos/graphic design/services/05.gif",
        head: "Motion Design",
        page: "/motion-design",
        para: "Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads."
    },
]


function DigitalServices() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const updateWidth = () => setWindowWidth(window.innerWidth);
      updateWidth();
      window.addEventListener("resize", updateWidth);
    
      const hscroll = gsap.fromTo(
        sectionRef.current,
        {translateX: 0},
        {
          translateX: windowWidth <= 1280 ? "-120%" : "-40%",
          ease: "none",
          duration: 2,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: windowWidth <= 1280 ? "top 0%" : "top -45%",
            end: "180% top",
            scrub: 2,
            pin: true
          }
        }
      );

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("resize", updateWidth);
        ScrollTrigger.killAll();
        hscroll.kill();
      };
    }
  }, [windowWidth]);

  const setVideoRef = (id: number, element: HTMLVideoElement | null) => {
    if (element) {
      element.muted = true;
      element.volume = 0;
      videoRefs.current.set(id, element);
    }
  };

  const handleMouseEnter = async (id: number) => {
    const video = videoRefs.current.get(id);
    if (video) {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch (error) {
        console.error(`Video playback failed for id ${id}:`, error);
        // Fallback to muted playback
        try {
          video.muted = true;
          video.volume = 0;
          await video.play();
        } catch (mutedError) {
          console.error(`Muted video playback also failed for id ${id}:`, mutedError);
        }
      }
    }
  };

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current.get(id);
    if (video) {
      video.muted = true;
      video.volume = 0;
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className='graphic-page-services-sec-container' ref={triggerRef}>
      <h2 className="graphic-page-services-sec-head">Design</h2>
      <h2 className="graphic-page-services-sec-head-second">Services</h2>

      <div className='flex graphic-page-services-cards-container' ref={sectionRef}>
        {items.map((item) => (
          <Link key={item.id} href={item.page}>
            <div 
              className="flex-col justify-between graphic-page-services-card"
              onMouseEnter={() => item.video && handleMouseEnter(item.id)}
              onMouseLeave={() => item.video && handleMouseLeave(item.id)}
            >
              <div className="mobile-graphic-page-services-card-content">
                {item.video ? (
                  <video 
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl graphic-page-services-card-img"
                    height={500}
                    ref={(element) => setVideoRef(item.id, element)}
                    preload="auto"
                    loop
                    playsInline
                  >
                     <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image 
                    className='graphic-page-services-card-img'
                    height={500}
                    width={500}
                    src={item.imageUrl}
                    alt={item.head}
                  />
                )}
                
                <h1 className='graphic-page-services-card-head'>{item.head}</h1>
                <p className='graphic-page-services-card-para'>{item.para}</p>
              </div>
              
              <hr className='graphic-page-services-card-line' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DigitalServices;