"use client"
// Loading.tsx
import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  setProgress: (value: number | ((prev: number) => number)) => void;
  setIsLoading: (value: boolean) => void;
  audioElement: HTMLAudioElement | null;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize audio only once at the provider level
  if (typeof window !== 'undefined' && !audioRef.current) {
    audioRef.current = new Audio('/preloader-sound.mp3');
    audioRef.current.volume = 1;
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateZ(0)'; // Force GPU acceleration
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading, 
      progress, 
      setProgress,
      audioElement: audioRef.current
    }}> 
    {children}
    
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};
