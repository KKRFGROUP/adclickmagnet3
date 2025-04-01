'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './SovereignChains.module.css';

const SovereignChains = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setMousePos({ x, y });
    };

    // Function to ensure video plays
    const ensureVideoPlays = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(error => {
            console.log('Auto-play was prevented:', error);
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('focus', ensureVideoPlays);
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        ensureVideoPlays();
      }
    });

    // Initial play attempt
    ensureVideoPlays();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('focus', ensureVideoPlays);
      window.removeEventListener('visibilitychange', ensureVideoPlays);
    };
  }, []);

  return (
    <section className={styles.sovereignHeroSection}>
      {/* Video Background */}
      <div className={styles.sovereignVideoContainer}>
        <video 
          ref={videoRef}
          className={styles.sovereignBackgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/compressed/vivek.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Center glow effect */}
      <div 
        className={styles.sovereignGlow}
        style={{
          transform: `translate(calc(-50% + ${(mousePos.x - 0.5) * 100}px), calc(-50% + ${(mousePos.y - 0.5) * 100}px))`,
        }}
      ></div>
      
      {/* Content */}
      <div className={styles.sovereignContentContainer}>
        <div className={styles.sovereignBadge}>ACM</div>
        
        <h1 className={styles.sovereignTitle}>Drive More Growth With Digital Marketing</h1>
<p className={styles.sovereignDescription}>
  Boost your business's online presence and customer acquisition through data-driven digital marketing strategies, targeted campaigns, and performance analytics to maximize your ROI and market reach.
</p>  
      
      </div>
    </section>
  );
};

export default SovereignChains;