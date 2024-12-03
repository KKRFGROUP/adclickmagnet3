"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import CreativeService from './sections/CreativeService';

import DesignProcess from './sections/DesignProcess';
import Portfolio from './sections/Portfolio';
import InfiniteText from './sections/InfiniteText';
import OverlappingSections from './sections/OverlappingSections';
//import ContactSection from './sections/ContactSection';
import "../../components/app.css";
import "./graphic.css";
import "../../components/services-components/components.css";
import DigitalServices from './sections/DigitalServices';

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";


//const heroSecContent = {
//    heading: "adClickMagnet Graphic Design",
//    para: "Since 2004, we’ve been a paid search marketing agency focused on Google Ads management – our services boosting paid search conversions by more than 485%. We’ll apply proven Ads management strategies to your campaign – increasing conversions and eliminating wasted spend!",
//    imgUrl: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//}

const GraphicDesignPage = () => {
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
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div  ref={pageMainRef} className='page-main'>
          <div className='tracing-beam'>
            <TracingBeam>
              <HeroSection />
              <DesignProcess />
              <DigitalServices />
              
              <Portfolio />
              <CreativeService />
              <OverlappingSections />
              <InfiniteText />
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
              <HeroSection />
              <DesignProcess />
              <DigitalServices />
              
              <Portfolio />
              <CreativeService />
              <OverlappingSections />
              <InfiniteText />
              <Footer />
          </div>
        </div>

    </>
  );
};

export default GraphicDesignPage;
