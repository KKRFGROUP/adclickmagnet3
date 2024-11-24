"use client"
import React from "react";
import AboutHeroSec from './sections/AboutHeroSec'
import ImpactMatrics from './sections/ImpactMatrics'
import InspiredBy from "./sections/InspiredBy";
import LetsGrow from "./sections/LetsGrow";
import Founders from "./sections/Founders";
import Footer from "@/components/Footer";
function AboutUs() {
  return (
    <div className="about-us-main-page dark:bg-black bg-black">
        <AboutHeroSec />
        <ImpactMatrics />
        <InspiredBy />
        <Founders />
        <LetsGrow />
        <Footer />
    </div >
  )
}

export default AboutUs