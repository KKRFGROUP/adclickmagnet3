"use client";

import { useRef } from 'react';
import useGsapAnimation from '../../../components/UseGsapAnimation';
import { PiPaperPlaneRightBold } from "react-icons/pi";
import Image from 'next/image';
import '../graphic.css';


export default function CreativeService() {
  const creativeRef = useRef(null);

  useGsapAnimation(creativeRef, {
    opacity: 1,
    y: -50,
    duration: 1,
  });

    return (
      <section ref={creativeRef} className="creative-service-section-container">
        <div className="text-white">
          <div className="flex justify-between items-center">
            <p className='portfolio'>DRIVING GREAT OUTCOMES</p>
            <button type='button' className="flex items-center gap-4 portfolio animate__headShake">Book a Demo
              <PiPaperPlaneRightBold />
            </button>
          </div>
          <hr className='mt-3'/>
        </div>

        <div className='creative-service-head-card-container'>
          <h2 className='creative-service-head'>Innovation Meets </h2>
          <h2 className='creative-service-head-second mb-9'>Elegance.</h2>
          <div className="flex justify-between items-start creative-service-card-container">
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://res.cloudinary.com/dvhmy6a4u/image/upload/v1733682584/4501ec186308f5038f02eb919dbf80f7_azjpct.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Precision-driven designs that enhance brand identity, focusing on high-quality, impactful visuals crafted for long-term success.</p>
              <hr className='creative-service-card-content-line ' />
            </div>
            <div className="creative-service-card">
              <video className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl creative-service-card-img" autoPlay preload='auto' loop muted src="https://res.cloudinary.com/dvhmy6a4u/video/upload/v1733738086/534d6aff87e86b29b17312ba147078a9_yplz9m.mp4" onLoadedData={(e) => {
                              const videoElement = e.target as HTMLVideoElement; // Explicitly cast to HTMLVideoElement
                              videoElement
                                .play()
                                .catch((error: DOMException) => { // Provide a type for `error`
                                  console.error('Autoplay failed:', error);
                                });
                }}></video>
              <p className='creative-service-card-content' >Delivering sophisticated, creative solutions that blend modern aesthetics with strategic design to effectively communicate your message.              </p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://res.cloudinary.com/dvhmy6a4u/image/upload/v1733744640/pinterestdownloader.com-1733744603.09512_x4zzrx.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Pushing the boundaries of design, we create innovative and visually compelling graphics that set your brand apart in a competitive market.</p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://res.cloudinary.com/dvhmy6a4u/image/upload/v1733749999/05ba8567214b5d0c0bdeb73a0d908d7a_c1aatc.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Focused on results, we design with purpose. Our graphics are built for performance, ensuring maximum engagement and effectiveness.</p>
              <hr className='creative-service-card-content-line' />
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  