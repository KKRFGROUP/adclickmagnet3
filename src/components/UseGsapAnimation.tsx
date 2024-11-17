import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (
  ref: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
  scrollTriggerOptions?: gsap.plugins.ScrollTriggerInstanceVars
) => {
  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        ...animation,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTriggerOptions,
        },
      });
    }
  }, [ref, animation, scrollTriggerOptions]);
};

export default useGsapAnimation;
