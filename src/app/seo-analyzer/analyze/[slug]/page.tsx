"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "../../analyze.css";
import { AuroraBackground } from '@/components/ui/AuroraBackground';

interface ProgressData {
  progress: number;
  status: string;
}

const AnalyzeProgress = ({ 
  url, 
  onProgressChange 
}: { 
  url: string;
  onProgressChange: (progress: number, status: string) => void;
}) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url })
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch progress');
        }

        const data: ProgressData = await response.json();
        
        if (isMounted) {
          setProgress(data.progress);
          onProgressChange(data.progress, data.status);

          // If not complete, schedule next fetch
          if (data.progress < 100) {
            setTimeout(fetchProgress, 1000);
          }
          else {
            router.push(`/seo-analyzer/analyze/report`);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          onProgressChange(0, 'Error in analysis');
        }
      }
    };

    fetchProgress();

    return () => {
      isMounted = false;
    };
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

function generateURLFromName(name: string, domain: string = "com"): string {
  if (!name) {
    throw new Error("Invalid name provided.");
  }

  // Construct the URL
  const url = `https://${name}.${domain}`;
  return url;
}

function Analyze({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const url = generateURLFromName(slug);
  const [analysisStatus, setAnalysisStatus] = useState("Initializing analysis...");

  const handleProgressChange = (_progress: number, newStatus: string) => {
    setAnalysisStatus(newStatus);
  };

  return (
    <AuroraBackground>

      <div className="backdrop-blur-2xl rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl analyze-your-web-loader">
        <Image 
          src="/images/logos/mobile-navbar-logo.webp" 
          alt="analyzer-logo" 
          className="seo-analyze-logo"
          height={200} 
          width={200}
          priority
        />
        <h1 className="analyze-your-web-loader-head">Analyzing {slug}</h1>
        <p className="analyze-your-web-loader-para">
          {analysisStatus}
        </p>
        <AnalyzeProgress 
          url={url} 
          onProgressChange={handleProgressChange}
        />
      </div>
    </AuroraBackground>
  );
}

export default Analyze;