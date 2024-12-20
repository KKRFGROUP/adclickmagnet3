"use client"
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
import Cube from "../../../components/3dmodels/Cube";
import { Group } from 'three';

// Custom auto-rotation component for mobile
const AutoRotate = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Cube />
    </group>
  );
};

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
        <div className="about-hero-infinite-text-1 flex justify-around">
          <span className="about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
          <span className="about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
          <span className="about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
          <span className="about-hero-para-1">ABOUT <span className="font-news">US - </span></span>
        </div>
      </div>
      <div className="about-hero-model">
        <Canvas camera={{ position: [windowWidth <= 768 ? 15 : 11, 0, 5], fov: 25 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 2, 5]} />
            {windowWidth <= 768 ? (
              <AutoRotate />
            ) : (
              <>
                <Cube />
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate 
                  autoRotateSpeed={5}
                />
              </>
            )}
          </Suspense>
        </Canvas>
      </div>
      <div className='w-[100vw]'>
        <div className="about-hero-infinite-text-2 flex items-center">
          <span className="about-hero-para-2">WHO WE <span className="font-news">ARE - </span></span>
          <span className="about-hero-para-2">WHO WE <span className="font-news">ARE - </span></span>
          <span className="about-hero-para-2">WHO WE <span className="font-news">ARE - </span></span>
          <span className="about-hero-para-2">WHO WE <span className="font-news">ARE - </span></span>
        </div>
      </div>
      <div className='flex justify-center absolute top-[90vh] w-[100vw]'>
        <div className='flex justify-between items-center w-[90%] mx-5'>
          <p className="about-hero-bottom-para">Marketing Agency©</p>
          <p className="about-hero-bottom-para">adClickMagnet ACM</p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSec;