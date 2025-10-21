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
          sceneUrl="https://prod.spline.design/OIogab2K3RnhDy-R/scene.splinecode"
          
        />
    </div>
  );
}