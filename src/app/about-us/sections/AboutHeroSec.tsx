"use client"
import React, { Suspense, useEffect,useState } from 'react'

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "../../../components/3dmodels/Cube";

import "../about.css"


function AboutHeroSec() {
    const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
    return (
        <div className="about-us-hero-sec-container">
        
        <div className='w-[100vw]'>
            <div className="about-hero-infinite-text-1  flex justify-around">
                <span className="infinite-text-para about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
                <span className="infinite-text-para about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
                <span className="infinite-text-para about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
                <span className="infinite-text-para about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
            </div>
        </div>
        <div className="about-hero-model">
            <Canvas camera={{ position: [windowWidth <= 768 ? 15 : 11, 0, 5], fov: 25 }}>
                <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 2, 5]} />
                <Cube />
                <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
        </div>
        <div className='w-[100vw]'>
            <div className="about-hero-infinite-text-2  flex items-center">
                <span className="infinite-text-para about-hero-para-2">WHO WE <span className="font-news" >ARE - </span></span>
                <span className="infinite-text-para about-hero-para-2">WHO WE <span className="font-news" >ARE - </span></span>
                <span className="infinite-text-para about-hero-para-2">WHO WE <span className="font-news" >ARE - </span></span>
                <span className="infinite-text-para about-hero-para-2">WHO WE <span className="font-news" >ARE - </span></span>
            </div>
        </div>
        <div className='flex justify-center absolute top-[90vh] w-[100vw]'>
            <div className='flex justify-between items-center w-[90%]  mx-5'>
                <p className="about-hero-bottom-para">Marketing Agency©</p>
                <p className="about-hero-bottom-para">adClickMagnet ACM</p>
            </div>
        </div>
        
    </div>
  )

}

export default AboutHeroSec