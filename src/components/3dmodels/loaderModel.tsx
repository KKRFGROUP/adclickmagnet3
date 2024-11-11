"use client";

import Cube from '../../public/model/cube/Cube';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
//import Spline from '@splinetool/react-spline/next';

export default function Loader() {
  return (
    <main>
      <Canvas className="h-[100vh]">
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
      
    </main>
  );
}


//<Spline
//        scene="https://prod.spline.design/KLexcFs7SerOk1Es/scene.splinecode" 
///>
