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
          <h2 className='creative-service-head'>Where sophistication </h2>
          <h2 className='creative-service-head-second mb-9'>meets creativity.</h2>
          <div className="flex justify-between items-start creative-service-card-container">
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://cdn.sanity.io/images/k0dlbavy/production/3663db6035f44498f43f218cc084314cfe3b9da4-632x320.jpg?auto=format&fit=max&q=100&w=632" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Precision-driven designs that enhance brand identity, focusing on high-quality, impactful visuals crafted for long-term success.</p>
              <hr className='creative-service-card-content-line ' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://cdn.sanity.io/images/k0dlbavy/production/ab1b600a1065802a161343b72e7367e3c779f301-632x320.jpg?auto=format&fit=max&q=100&w=632" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Delivering sophisticated, creative solutions that blend modern aesthetics with strategic design to effectively communicate your message.              </p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://cdn.sanity.io/images/k0dlbavy/production/e9711069938bd5fbeecf62d125a32a317b2543da-2528x1280.jpg?auto=format&fit=max&q=100&w=1896" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Pushing the boundaries of design, we create innovative and visually compelling graphics that set your brand apart in a competitive market.</p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://cdn.sanity.io/images/k0dlbavy/production/483f93680d2e68ec33ab24d1a397bf19fff1186a-632x320.jpg?auto=format&fit=max&q=100&w=632" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Focused on results, we design with purpose. Our graphics are built for performance, ensuring maximum engagement and effectiveness.</p>
              <hr className='creative-service-card-content-line' />
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  