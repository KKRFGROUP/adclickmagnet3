"use client";

import dynamic from 'next/dynamic';
//import { Suspense } from 'react';

const OptimizedModel = dynamic(() => import('./OptimizedModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      Loading Model...
    </div>
  ),
});


export default function HeroModel() {
  return (
    <div className="home-model">
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/jGFRigHr1utzE3TT/scene.splinecode"
          />
    </div>
  );
}