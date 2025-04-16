'use client';

import React, { useRef, useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Full-screen loading component with logo
const FullScreenLoader = () => (
  <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
    <div className="mb-8">
      {/* Logo image */}
      <img 
        src="/images/logos/white logo bigger.webp" 
        alt="ACM Logo" 
        className="h-56 w-auto" 
      />
    </div>
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
  </div>
);

// Create a custom Space Circle Cursor component
const SpaceCircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Only run on client-side
  React.useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return; // Don't initialize cursor on touch devices
    }

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  if (isTouchDevice) return null;
  
  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(24,24,24,0.8) 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0) 100%)',
        boxShadow: '0 0 10px 2px rgba(255,255,255,0.1)'
      }}
    />
  );
};

// Import the custom cursor with dynamic import to avoid SSR issues
const Cursor = dynamic(() => Promise.resolve(SpaceCircleCursor), {
  ssr: false
});

// Lazily load all components
const SovereignChains = lazy(() => import('@/components/SovereignChains/SovereignChains'));
const NewsletterSection = lazy(() => import('@/components/Nesletter/NewsletterSection'));
const Section2 = lazy(() => import('@/components/homeSections/Section2'));
const Section5 = lazy(() => import('@/components/homeSections/Section5'));
const AboutSection = lazy(() => import('@/components/homeSections/AboutSection'));
const TeamSection = lazy(() => import('@/components/homeSections/TeamSection'));
const Section7 = lazy(() => import('@/components/homeSections/Section7'));
const Section8 = lazy(() => import('@/components/homeSections/Section8'));
const Section9 = lazy(() => import('@/components/homeSections/Section9'));
const ClientVideSec = lazy(() => import('@/components/homeSections/ClientVideSec'));
const Navbar = lazy(() => import('@/components/Navbar'));
const Footer = lazy(() => import('@/components/Footer'));

// Use intersection observer for viewport-based loading
const LazyLoadOnVisible = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load when within 200px of viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ height: '100px' }} />}
    </div>
  );
};

export default function Home() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Set loading state to false after initial load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second minimum loading time for better UX
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleMenu = (arg?: boolean) => {
    setIsOpen(arg ?? !isOpen);
    
    if (pageMainRef.current) {
      if (!isOpen) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };
  
  return (
    <>
      {/* Main full-screen loader */}
      {isLoading && <FullScreenLoader />}
      
      <main className={`opacity-100 ${isLoading ? 'invisible' : 'visible'}`}>
        {/* Add the space circle cursor component */}
        <Cursor />
        
        {/* Your main content here */}
        <Suspense fallback={<FullScreenLoader />}>
          <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        </Suspense>
        
        <div ref={pageMainRef} className="dark:bg-balck bg-black overflow-hidden page-main">
          {/* Add SovereignChains section here */}
          <Suspense fallback={<FullScreenLoader />}>
            <SovereignChains />
          </Suspense>
          
          <Suspense fallback={<FullScreenLoader />}>
            <Section2 />
          </Suspense>
          
          <LazyLoadOnVisible>
            <Suspense fallback={<FullScreenLoader />}>
              <NewsletterSection />
            </Suspense>
          </LazyLoadOnVisible>
          
          <div className="after-hero-sec">
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <Section5 />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <ClientVideSec />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <AboutSection />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <TeamSection />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <Section7 />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <Section8 />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <Section9 />
              </Suspense>
            </LazyLoadOnVisible>
            
            <LazyLoadOnVisible>
              <Suspense fallback={<FullScreenLoader />}>
                <Footer />
              </Suspense>
            </LazyLoadOnVisible>
          </div>
        </div>
      </main>
    </>
  );
}