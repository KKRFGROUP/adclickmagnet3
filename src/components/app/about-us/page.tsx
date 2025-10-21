"use client"
import React,{useRef, useState} from "react";
import AboutHeroSec from './sections/AboutHeroSec'
import ImpactMatrics from './sections/ImpactMatrics'
import InspiredBy from "./sections/InspiredBy";
import LetsGrow from "./sections/LetsGrow";
import Founders from "./sections/Founders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import './about.css'
import "../../components/app.css"
function AboutUs() {
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
    <div ref={pageMainRef} className="page-main dark:bg-black bg-black">
        <AboutHeroSec />
        <ImpactMatrics />
        <InspiredBy />
        <Founders />
        <LetsGrow />
        <Footer />
    </div >
    </>
  )
}

export default AboutUs