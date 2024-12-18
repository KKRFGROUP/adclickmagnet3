"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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
    <div className="sec3-model">
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/KHokVySkT2jgUhp4/scene.splinecode"
          height="100vh"
        />
    </div>
  );
}

