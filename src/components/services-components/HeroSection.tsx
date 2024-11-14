import React, { Suspense } from "react";
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import Link from 'next/link';
import "./components.css";
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function HeroSection({heading, para, imgUrl}: {heading: string; para: string; imgUrl: string;}) {
  return (
    <div className="service-hero-sec-container flex justify-between items-center">
        <div className="service-hero-sec-content w-[45%]">
            <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={"Professional"} />
            <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={heading} />
            <p className='service-hero-sec-content-para mt-9'>{para}</p>
            <div className="flex items-center mt-9 h-[30%]">
              <Link href=""><button className="service-hero-sec-content-button" type="button" >Get Started</button></Link>
              <Link href=""><button className="service-hero-sec-content-button see-more" type="button" >See More</button></Link>
            </div>
        </div>
        <div className="w-[70%] hero-right-container h-full flex justify-center items-center">

          <Canvas className="relative left-[30%]  ">
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100,200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#4dd2ff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    />
                </Sphere>
              </Suspense>
          </Canvas>
          <Image className="service-hero-sec-content-img rounded-[20px]"  src={imgUrl} alt="hero-logo" height={300} width={300} />
        </div>

    </div>
  )
}

export default HeroSection


//<Image className='service-hero-sec-content-img' height={400} width={400} src={imgUrl} alt="hero-image" />