"use client";


import { Application } from '@splinetool/runtime';

declare global {
  interface Window {
    Application: typeof Application;
  }
}

// Initialize Application globally
if (typeof window !== 'undefined' && !window.Application) {
  window.Application = Application;
}

// Import Spline directly
import Spline from '@splinetool/react-spline';



interface OptimizedModelProps {
  sceneUrl: string;
  height?: string;
}

const OptimizedModel = ({ sceneUrl }: OptimizedModelProps) => {
  return (
          <Spline 
            scene={sceneUrl} 
          />
  );
};

export default OptimizedModel;