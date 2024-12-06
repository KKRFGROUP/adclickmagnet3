"use client";

import gsap from "gsap";
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from 'gsap/ScrollTrigger';



const OverlappingSections = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Update windowWidth on resize
      const updateWidth = () => setWindowWidth(window.innerWidth);
      updateWidth();
      window.addEventListener("resize", updateWidth);

          if (windowWidth > 1280) {
            gsap.to(".card1", {
              scale: 0.7,
              opacity: 0,
              scrollTrigger: {
                trigger: ".card1",
                start:  "top 15%",
                end: "bottom 15%",
                scrub: true,
                
              },
            });
            gsap.to(".card2", {
              scale: 0.7,
              opacity: 0,
              scrollTrigger: {
                trigger: ".card2",
                start: "top 15%",
                end: "bottom 15%",
                scrub: true,
              },
            });
            gsap.to(".card3", {
              scale: 0.7,
              opacity: 0,
              scrollTrigger: {
                trigger: ".card3",
                start: "top 15%",
                end: "bottom 15%",
                scrub: true,
              },
            });
          } 
      
        ScrollTrigger.refresh();
        
        

        return () => {
          window.removeEventListener("resize", updateWidth);
          ScrollTrigger.killAll(); // Clean up triggers
        };
    }
  
  }, [windowWidth]);
  
  

  
  
    return (
      <section className="overlapping-cards">
        <div className={`flex card1  custom-card ${windowWidth <= 768 ? "" : ""}`} >
          <div className="graphic-page-sec2-content text-black">
            <p className="graphic-page-sec2-content-variety mb-4">Customer Stories</p>
            <h2 className="graphic-page-sec2-content-head mb-4">ACM Revamps To<br /> Build Trust &<br /> Reputation at Scale</h2>
            <p className="graphic-page-sec2-content-para">ACM is transforming its digital marketing strategies to build trust and reputation at scale. By focusing on data-driven tactics, innovative campaigns, and a customer-first approach, ACM aims to enhance credibility, deliver measurable growth, and become the go-to partner for businesses seeking long-term success.</p>
            <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button>
          </div>
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-sec2-gif" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1733497938/Untitled_design_6_bm5rhg.png" alt="gif" width={500} height={500} />
            </div>
          
        </div>


        <div className="flex card2   custom-card" >
            <div className="graphic-page-sec2-graphic-card graphic-page-sec2-graphic-card-second">
              <Image className="graphic-page-sec2-gif" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1733497938/Untitled_design_7_digizs.png" alt="gif" width={500} height={500} />
            </div>
          
          <div className="graphic-page-sec2-content text-black">
            <p className="graphic-page-sec2-content-variety mb-4">Customer Stories</p>
            <h2 className="graphic-page-sec2-content-head mb-4">Using ACM to<br /> untangle the flow of<br /> creative assets</h2>
            <p className="graphic-page-sec2-content-para">The velocity and volume of Imperfect Food&apos;s growth teams creative needs were outpacing their internal design teams capacity. ACM was able to jump into action supporting their rigourous ad creative needs and contribute to customer acquisition.</p>
            <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button>
          </div>
        </div>
        

        <div className="flex custom-card card3   mb-4" >
          <div className="graphic-page-sec2-content text-black">
            <h2 className="graphic-page-sec2-content-head mb-4">What makes our design services different?</h2>
            <p className="graphic-page-sec2-content-para">We deliver speedy, high-quality graphic design services through a transparent subscription model. We are a tech-enabled company, developing its own proprietary software to brief, manage, and coordinate a high-volume of design projects, making it possible to keep pace with teams at Amazon, Puma, Facebook, and more.
                Learn how we can revolutionize the way your organization gets design work done. Book a call today.</p>
            <Link href="/contact-us"><button className="read-customer-stories mt-[40px]" type="button">Book A Call</button></Link>
          </div>
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-sec2-gif" src="https://i.gifer.com/fxVE.gif" alt="gif" width={500} height={500} />
            </div>
          
        </div>
      </section>
    );
  };
  
  export default OverlappingSections;
  