"use client";

import { useRef } from 'react';
import useGsapAnimation from '../../../components/ui/UseGsapAnimation';
import '../graphic.css';
//import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const HeroSection = () => {
  const heroRef = useRef(null);

  useGsapAnimation(heroRef, {
    opacity: 0,
    y: -50,
    duration: 1,
  });
    return (
      <section  className="graphic-page-hero-sec-container flex justify-center items-center text-white py-16 text-center">
        <div className="graphic-page-hero-sec-content flex-col justify-center items-center mt-10">
          <span className="graphic-page-hero-sec-head">AD CLICK MAGNET</span>
          <div className="flex justify-between items-center">
            <span className="graphic-page-hero-sec-head">CREATIVE</span>
            <div className='flex justify-center items-center'>
              <p className="graphic-page-hero-sec-para" >We are a full-service creative studio creating beautiful digital experiences and products. Our mission is to make work process meaningful.</p>
            </div>
          </div>
          <span className="graphic-page-hero-sec-head">STADIO</span>
          <p className="graphic-page-hero-sec-para-last">Specialized in Branding, Web Design and Photography</p>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  