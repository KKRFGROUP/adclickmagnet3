import React, { useEffect,  useRef } from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const words = [
    { 
        text: "•IMPACT",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    {
        text: "METRICS",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-2",
    },
    
];


function ImpactMatrics() {
    const counterRef = useRef<HTMLParagraphElement[]>([]);
    useEffect(() => {
        const targetValues = [25, 99, 98]; // Example values for avg, years, experience
        counterRef.current.forEach((el, index) => {
            if (!el) return;
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: targetValues[index],
                duration: 2,
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: true,
                },
                snap: { innerText: 1 }, // Ensures whole numbers
                onUpdate: function () {
                    el.innerText = Math.floor(Number(this.targets()[0].innerText)).toString();
                },
              }
            );
          });
    }, []);

    const setRef = (el: HTMLParagraphElement | null, index: number) => {
        if (el) {
          counterRef.current[index] = el;
        }
      };
  return (
    <div  className="flex-col justify-center items-center impact-matrics-main-container">
        <hr className="impact-matrics-line"/>
        <div className='flex justify-center items-center impact-matrics-head-card'>
            <TypewriterEffect className='impact-matric-head'  words={words}/>
        </div>

        <div  className="flex justify-between items-center impact-matrics-count-cards">
            <div className="impact-matric-count-card">
                <div className="flex items-center">
                    <span className="impact-matric-count-card-numbers-sign">+</span><p ref={(el) => setRef(el, 0)} className="impact-matric-count-card-numbers">0</p>
                </div>
                <p  className='impact-matric-count-card-para'>Years of Experience</p>
            </div>
            <div className="impact-matric-count-card">
                <div className="flex items-center">
                    <p ref={(el) => setRef(el, 1)} className="impact-matric-count-card-numbers">0</p>
                    <span className='impact-matric-count-card-numbers-sign' >%</span>
                </div>
                <p  className='impact-matric-count-card-para'>Average ROI</p>
            </div>
            <div className="impact-matric-count-card">
                <div className="flex items-center">

                <p ref={(el) => setRef(el, 2)} className="impact-matric-count-card-numbers">0</p>
                <span className='impact-matric-count-card-numbers-sign' >%</span>
                </div>
                <p  className='impact-matric-count-card-para'>Client Satisfaction</p>
            </div>
        </div>
    </div>
  )
}

export default ImpactMatrics