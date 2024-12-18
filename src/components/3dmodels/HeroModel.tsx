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
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/xGBBKsEMeyKcN8gb/scene.splinecode"
        />
  );
}

