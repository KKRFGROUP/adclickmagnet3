"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import "./analyze.css";

const AnalyzeProgress = ({ 
  url, 
  onProgressChange 
}: { 
  url: string;
  onProgressChange: (progress: number) => void;
}) => {
  
  const [progress, setProgress] = useState(10);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First API call to start the analysis
        const response = await fetch(`/api/analyze/${url}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Analysis failed');
        }

        // Setup event source for progress updates with the same URL
        const eventSource = new EventSource(`/api/analyze/${url}`);
        
        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setProgress(data.progress);
          
          onProgressChange(data.progress);
          
          if (data.progress === 100) {
            eventSource.close();
          }
        };

        eventSource.onerror = () => {
          eventSource.close();
          setError('Connection lost');
        };

        return () => {
          eventSource.close();
        };
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };

    fetchData();
  }, [url, onProgressChange]);

  return (
    <div className="analyzing-progress-bar">
      <div className="relative pt-1">
        <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center rounded-full progress-bar-gradient shadow-none"
          />
        </div>
        {error && (
          <div className="mt-2 text-red-500 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

function Analyze({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [analysisProgress, setAnalysisProgress] = useState(50);

  const handleProgressChange = (newProgress: number) => {
    setAnalysisProgress(newProgress);
  };

  const getAnalysisStatus = (progress: number) => {
    if (progress === 0) return "Initializing analysis...";
    if (progress < 25) return "Scanning website structure...";
    if (progress < 50) return "Analyzing SEO elements...";
    if (progress < 75) return "Checking performance metrics...";
    if (progress < 100) return "Finalizing results...";
    return "Analysis complete!";
  };

  return (
    <div className="analyze-your-web-loader-main-container">
      <div className="backdrop-blur-2xl rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl analyze-your-web-loader">
        <Image 
          src="https://res.cloudinary.com/dgdgrniut/image/upload/v1732186526/adclickmagnetlogoblacklogo_reqzpl.png" 
          alt="analyzer-logo" 
          height={200} 
          width={200}
          priority
        />
        <h1 className="analyze-your-web-loader-head">Analyzing {slug}</h1>
        <p className="analyze-your-web-loader-para">
          {getAnalysisStatus(analysisProgress)}
        </p>
          <AnalyzeProgress 
            url={slug} 
            onProgressChange={handleProgressChange}
          />
      </div>
    </div>
  );
}

export default Analyze;