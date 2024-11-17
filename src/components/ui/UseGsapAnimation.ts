import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGsapAnimation = (ref: React.RefObject<HTMLElement>, animation: any) => {
  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        ...animation,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, [ref, animation]);
};

export default useGsapAnimation;
