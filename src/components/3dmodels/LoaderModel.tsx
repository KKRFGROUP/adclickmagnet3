"use client";
import { useEffect, useState, useRef, useCallback } from 'react';
import { useLoading } from "../Loading";
import dynamic from 'next/dynamic';

const OptimizedModel = dynamic(
  () => import('./OptimizedModel').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="w-full h-[100vh] bg-black" />
  }
);


const useAudio = (url: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.volume = 1;

    const playAudio = () => audioRef.current?.play().catch(console.error);
    const events = ['click', 'touchstart'];
    events.forEach(event => document.addEventListener(event, playAudio, { once: true }));

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
      events.forEach(event => document.removeEventListener(event, playAudio));
    };
  }, [url]);

  return audioRef;
};

export default function PreloaderPage({ minimumLoadingTime = 2000 }) {
  const { progress, setProgress, setIsLoading } = useLoading();
  const [showContent, setShowContent] = useState(false);
  const startTimeRef = useRef(Date.now());
  const audioRef = useAudio('/preloader-sound.mp3');

  const handleComplete = useCallback(() => {
    const fadeOutAudio = () => {
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current?.volume > 0) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
        } else {
          audioRef.current?.pause();
          clearInterval(fadeOut);
          setShowContent(true);
        }
      }, 50);
    };

    const timeElapsed = Date.now() - startTimeRef.current;
    const remainingTime = Math.max(0, minimumLoadingTime - timeElapsed);

    setTimeout(() => {
      setIsLoading(false);
      setTimeout(fadeOutAudio, 500);
    }, remainingTime);
  }, [setIsLoading, minimumLoadingTime]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      const progressValue = Math.min(100, (elapsedTime / minimumLoadingTime) * 100);
      setProgress(progressValue);
      if (progressValue >= 100) clearInterval(progressInterval);
    }, 20);

    return () => clearInterval(progressInterval);
  }, [setProgress, minimumLoadingTime]);

  useEffect(() => {
    if (progress === 100) handleComplete();
  }, [progress, handleComplete]);

  return (
    <div className={`h-[100vh] bg-black transition-opacity duration-500 ${showContent ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute top-[75%] left-[70%] md:left-[75%] xl:left-[80%]">
        <div className="text-right">
          <span className="text-6xl font-semibold inline-block text-white" style={{fontFamily: "Syne"}}>
            {Math.round(progress)}
          </span>
        </div>
      </div>
      <div className="w-full h-[100vh]">
        <OptimizedModel sceneUrl="https://prod.spline.design/kIf7eG6J9WtNLzN4/scene.splinecode" />
      </div>        
    </div>
  );
}