"use client";

import dynamic from 'next/dynamic';

const OptimizedModel = dynamic(() => import('./OptimizedModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      Loading Model...
    </div>
  ),
});

export default function Section3Model() {
  return (
    <div className="sec3-model">
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/KHokVySkT2jgUhp4/scene.splinecode"
          
        />
    </div>
  );
}

