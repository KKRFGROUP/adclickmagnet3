'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

//import HeroSection from "@/components/homeSections/HeroSection";
const SovereignChains = dynamic(() => import('@/components/SovereignChains/SovereignChains'), {
  ssr: false, // Optional: Disable SSR for this component
});

const NewsletterSection = dynamic(() => import('@/components/Nesletter/NewsletterSection'), {
  ssr: false,
});

//import Section3 from "@/components/homeSections/Section3";
const Section2 = dynamic(() => import('@/components/homeSections/Section2'), {
  ssr: false, // Optional: Disable SSR for this component
});

const Section5 = dynamic(() => import('@/components/homeSections/Section5'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section5 from "@/components/homeSections/Section5";

//import Section6 from "@/components/homeSections/Section6";
import AboutSection from "@/components/homeSections/AboutSection";
import TeamSection from "@/components/homeSections/TeamSection";
const Section7 = dynamic(() => import('@/components/homeSections/Section7'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section7 from "@/components/homeSections/Section7";
const Section8 = dynamic(() => import('@/components/homeSections/Section8'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section8 from "@/components/homeSections/Section8";
import Section9 from "@/components/homeSections/Section9";
import Footer from "@/components/Footer";

const ClientVideSec = dynamic(() => import('@/components/homeSections/ClientVideSec'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import ClientVideSec from "@/components/homeSections/ClientVideSec";

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Navbar from "@/components/Navbar";

import MobileDevicePopup from '@/components/MobileDevicePopup';

export default function Home() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (arg?: boolean) => {
    setIsOpen(arg ?? !isOpen);
    
    if (pageMainRef.current) {
      if (!isOpen) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };
  
  return (
    <>
      <main className="opacity-100">
        {/* Your main content here */}
        <MobileDevicePopup />
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div ref={pageMainRef} className="dark:bg-balck bg-black overflow-hidden page-main">
          {/* Add SovereignChains section here */}
          <SovereignChains />
          <Section2 />
          <NewsletterSection />
          
          <div className="after-hero-sec">
            <Section5 />
            <ClientVideSec />
            <AboutSection />
            <TeamSection />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}