import React from 'react'
import { TypewriterEffect } from "../ui/typewriter-effect";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';



function Section6({content}: {content: {mainpara: string; heading: {text: string; className: string;}[]; para: string; social: {img: string;name: string; para: string}[]}}) {
    const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const hscroll = gsap.fromTo(
      sectionRef.current,
      {translateY:0},
      {
        translateY: "-50%",
        ease: "none",
        duration: 2,
        scrollTrigger:{
          trigger: triggerRef.current,
          scroller: "body",
          start: "top -10%",
          end: "-150% top",
          scrub: 2,
          pin: true
        }
      }
    )
    return () => {
      hscroll.kill();
    }

  })


  return (
    <div ref={triggerRef} className="services-sec6-main-container gap-9 flex justify-between ">
        <div className="services-sec6-left-content w-[50%]">
            <p className='mb-8 services-secs-main-para'>{content.mainpara}</p>
            <div className='w-[90%]'>

            <TypewriterEffect className="services-secs-head" words={content.heading} />
            </div>
            <p className="mt-9 services-sec6-left-content-para">{content.para}</p>
        </div>
        <div ref={sectionRef} className="services-sec6-right-content w-[50%]">
        {content.social.map((each,index) => (
            <div key={index} className="flex items-center services-sec6-right-content-card gap-9 mb-9">
                    <Image className='rounded-[20px]' src={each.img} alt="social" height={100} width={100} />
                <div className='services-sec6-right-content-card-content'>
                    <h2 className='services-sec6-right-content-card-content-head font-semibold mb-2 text-2xl'>{each.name}</h2>
                    <p className='services-sec6-right-content-card-content-para'>{each.para}</p>
                </div>
            </div>
        ))}
        
        </div>
    </div>
  )
}

export default Section6