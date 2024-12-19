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

export default function loader() {
  return (
    <div className="h-[100vh] w-full">
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/7dwYguRwiqBWu8a6/scene.splinecode"
          
        />
    </div>
  );
}





