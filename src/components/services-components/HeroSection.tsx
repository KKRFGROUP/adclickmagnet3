import React, { Suspense } from "react";
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import Link from 'next/link';
import "./components.css";
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Spotlight } from "../ui/Spotlight";


function HeroSection({heading, para, imgUrl}: {heading: string; para: string; imgUrl: string;}) {
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
          <Link href=""><button className="service-hero-sec-content-button" type="button" >Get Started</button></Link>
          <Link href=""><button className="service-hero-sec-content-button see-more" type="button" >See More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection


//<Image className='service-hero-sec-content-img' height={400} width={400} src={imgUrl} alt="hero-image" />

//<Canvas className="relative left-[30%]  ">
//              <Suspense fallback={null}>
//                <OrbitControls enableZoom={false} />
//                <ambientLight intensity={1} />
//                <directionalLight position={[3, 2, 1]} />
//                <Sphere args={[1, 100,200]} scale={2.4}>
//                  <MeshDistortMaterial
//                    color="#4dd2ff"
//                    attach="material"
//                    distort={0.5}
//                    speed={2}
//                    />
//                </Sphere>
//              </Suspense>
//          </Canvas>