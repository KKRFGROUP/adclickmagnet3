"use client"
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import React, { Suspense, useEffect }  from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Cube2 from '@/components/3dmodels/Cube2';
let windowWidth: number;
const words = [
    { 
        text: "Let's",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    { 
        text: "Grow",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    
];

function LetsGrow() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            windowWidth = window.innerWidth;
        }
    })
  return (
    <div className='lets-grow-main-container'>
        <div className=" lets-grow-head">

            <TypewriterEffect className='impact-matric-head'  words={words}/>
        </div>
        <div className="about-lets-model">
            <Canvas camera={{ position: [windowWidth <= 768 ? 25 : 10, 0, 5], fov: 25 }}>
                <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 2, 5]} />
                <Cube2 />
                <OrbitControls 
                    enableZoom={false} 
                    />
                </Suspense>
            </Canvas>
        </div>
        <div className="flex justify-center items-center  lets-grow-btn-card">
        <button type="button" className='lets-grow-btn'>GET STARTED •</button>
        </div>
    </div>
  )
}

export default LetsGrow