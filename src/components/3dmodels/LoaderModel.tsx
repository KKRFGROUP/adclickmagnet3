// PreloaderPage.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import { useLoading } from "../Loading";
import dynamic from 'next/dynamic';

const OptimizedModel = dynamic(() => import('./OptimizedModel'), {
  ssr: false,
});

interface PreloaderProps {
  minimumLoadingTime?: number;
}

export default function PreloaderPage({ minimumLoadingTime = 2000 }: PreloaderProps) {
  const { progress, setProgress, setIsLoading, audioElement } = useLoading();
  const [showContent, setShowContent] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const hasTriedPlayRef = useRef(false);

  // Handle audio playback
  useEffect(() => {
    if (!audioElement || hasTriedPlayRef.current) return;
    hasTriedPlayRef.current = true;

    const playAudio = () => {
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Initial autoplay failed, adding interaction listener:', error);
          
          const handleInteraction = () => {
            audioElement.play().catch(console.error);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          };

          document.addEventListener('click', handleInteraction);
          document.addEventListener('touchstart', handleInteraction);
        });
      }
    };

    playAudio();
  }, [audioElement]);

  // Progress handling
  useEffect(() => {
    startTimeRef.current = Date.now();
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + 1, 100);
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, [setProgress]);

  // Transition handling
  useEffect(() => {
    if (progress === 100) {
      const timeElapsed = Date.now() - startTimeRef.current;
      const remainingTime = Math.max(0, minimumLoadingTime - timeElapsed);

      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
        const contentTimeout = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(contentTimeout);
      }, remainingTime);

      return () => clearTimeout(loadingTimeout);
    }
  }, [progress, minimumLoadingTime, setIsLoading]);

  return (
    <div className={`h-[100vh] bg-black transition-opacity duration-500 ${showContent ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute top-[75%] left-[80%] ">
        <div className="text-right">
          <span className="text-6xl font-semibold inline-block text-white" style={{fontFamily: "Syne"}}>
            {progress}
          </span>
        </div>
      </div>
      <div className="w-full h-[100vh]">
        <OptimizedModel 
          sceneUrl="https://prod.spline.design/kIf7eG6J9WtNLzN4/scene.splinecode"
        />
      </div>        
    </div>
  );
}