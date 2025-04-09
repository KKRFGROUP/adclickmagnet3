import React, { useState, useEffect, useRef } from 'react';
import { CardSpotlight } from "@/components/ui/CardSpotlight";


interface Card {
  title: string;
  count: string;
  para: string;
}

interface ContentProps {
  mainpara: string;
  heading: string;
  para?: string;
  cards: Card[];
}

interface Section8Props {
  content: ContentProps;
  roundt?: string;
}

// Custom hook for the counting animation
const useCountAnimation = (
  targetNumber: string,
  duration: number = 2000,
  shouldStart: boolean = false
): string => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = parseInt(targetNumber.replace(/,/g, ''), 10);
    
    // Handle invalid number strings
    if (isNaN(endValue)) {
      console.warn('Invalid number format provided to counter animation');
      return;
    }

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    const animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [targetNumber, duration, shouldStart]);
  
  // Format the count to match the original format (with commas if present)
  const formattedCount = targetNumber.includes(',') 
    ? count.toLocaleString()
    : count.toString();
    
  return formattedCount;
};

// Custom hook for intersection observer
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options.threshold, options.root, options.rootMargin]);

  return [elementRef, isVisible] as const;
};

// Separate card component to handle individual animations
const AnimatedCard: React.FC<{
  card: Card;
  isVisible: boolean;
}> = ({ card, isVisible }) => {
  const animatedCount = useCountAnimation(card.count, 2000, isVisible);
  
  return (
    <CardSpotlight className="text-left services-sec8-card">
      <p className="services-sec8-card-title font-medium">{card.title}</p>
      <h2 className="services-sec8-card-count text-6xl font-medium">
        {animatedCount}+
      </h2>
      <p className="services-sec8-card-para font-light">{card.para}</p>
    </CardSpotlight>
  );
};

const Section8: React.FC<Section8Props> = ({ content, roundt = '' }) => {
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px'
  });

  return (
    <div 
      ref={containerRef}
      className={`rounded-[50px] flex-col justify-center items-center text-center services-sec8-main-container ${roundt}`}
    >
      <p className="services-secs-para">{content.mainpara}</p>
      <h2 className="services-secs-head">{content.heading}</h2>
      {content.para && <p className="services-secs-content-para">{content.para}</p>}
      <div className="flex justify-between flex-wrap mt-[60px] services-sec8-content-cards">
        {content.cards.map(card => (
          <AnimatedCard 
            key={card.title} 
            card={card} 
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default Section8;