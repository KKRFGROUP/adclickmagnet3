"use client";

import { Suspense } from 'react';
import { Application } from '@splinetool/runtime';

// Initialize Application globally
if (typeof window !== 'undefined' && !globalThis.Application) {
  (globalThis as any).Application = Application;
}

// Import Spline directly
import Spline from '@splinetool/react-spline';

const LoadingFallback = () => (
  <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
    <div className="animate-pulse">
      <div className="text-lg">Loading 3D Model...</div>
    </div>
  </div>
);

interface OptimizedModelProps {
  sceneUrl: string;
  height?: string;
}

const OptimizedModel = ({ sceneUrl }: OptimizedModelProps) => {
  return (
      <div className="home-model">
          <Spline 
            scene={sceneUrl} 
            onLoad={() => console.log('Model loaded')}
            onError={(e) => console.error(e)}
          />
      </div>
  );
};

export default OptimizedModel;