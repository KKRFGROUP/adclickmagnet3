import React from "react";
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import Link from 'next/link';
import "./components.css";

import { Spotlight } from "../ui/Spotlight";


function HeroSection({heading, para, imgUrl}: {heading: string; para: string; imgUrl?: string;}) {
  return (
    
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
          className="-top-40 left-0 md:right-60 md:-top-20"
          fill="white"
        />
      <div className="flex-col justify-center items-center text-center service-hero-sec-container h-[100vh] mt-12">
          
        <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={"Professional"} />
        <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={heading} />
        <p className='service-hero-sec-content-para mt-9'>{para}</p>
        <div className="flex justify-center items-center h-[30%] service-hero-sec-content-buttons-card">
          <Link href="/contact-us"><button className="service-hero-sec-content-button" type="button" >Get Started</button></Link>
          <Link href="#service-section3"><button className="service-hero-sec-content-button see-more" type="button" >See More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection


