"use client"

import React,{useRef,useState} from 'react'
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/homeSections/HeroSection'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import HeroSection from "@/components/homeSections/HeroSection";

import Section2 from "@/components/homeSections/Section2";
const Section3 = dynamic(() => import('@/components/homeSections/Section3'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section3 from "@/components/homeSections/Section3";
const Section5 = dynamic(() => import('@/components/homeSections/Section5'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section5 from "@/components/homeSections/Section5";
const Section6 = dynamic(() => import('@/components/homeSections/Section6'), {
  ssr: false, // Optional: Disable SSR for this component
});
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

import { useLoading } from '@/components/Loading';
const PreloaderPage = dynamic(() => import('@/components/3dmodels/LoaderModel'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import PreloaderPage from '@/components/3dmodels/LoaderModel';
import MobileDevicePopup from '@/components/MobileDevicePopup';


export default function Home() {
  const { isLoading } = useLoading();
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
      {isLoading ?  <PreloaderPage minimumLoadingTime={10000} /> : <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Your main content here */}
        <MobileDevicePopup />
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div ref={pageMainRef} className="dark:bg-balck bg-black overflow-hidden page-main">
          
          <HeroSection />
          <div className="after-hero-sec">
            <Section2 />
            <Section3 />
            <Section5 />
            <ClientVideSec />
            <AboutSection />
            <TeamSection />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
          </div>
        </div>
      </main>}
      
      </>
    );

}

//<>
//      {isLoading && <PreloaderPage minimumLoadingTime={2000} />}
//      <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
//        {/* Your main content here */}
//      </main>
//</>

