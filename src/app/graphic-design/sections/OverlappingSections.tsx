"use client";

import gsap from "gsap";
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from 'gsap/ScrollTrigger';

const demoCaseStudies = [
  {
    id: 1,
    heading: "10 Tips for Writing Clean Code",
    paragraph: "Writing clean code is essential for maintainability and scalability. Here are 10 tips to help you write better code.",
    time: "2024-11-22T09:00:00Z",
    category: "web development",
    name: "John Doe",
    image: "/images/blog-img-template.jpg",
    link: "10-tips-for-writing-clean-code"
  },
  {
    id: 2,
    heading: "The Future of Responsive Design",
    paragraph: "Learn how responsive design is evolving and why it's critical for modern web development.",
    time: "2024-11-21T12:00:00Z",
    category: "web development",
    name: "Jane Smith",
    image: "/images/blog-img-template.jpg",
    link: "the-future-of-responsive-design"
  },
]

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
            <h2 className="graphic-page-sec2-content-head mb-4">{demoCaseStudies[0].heading}</h2>
            <p className="graphic-page-sec2-content-para">{demoCaseStudies[0].paragraph}</p>
            <Link href={`/case-studies/${demoCaseStudies[0].link}`}>  <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button></Link>
          </div>
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-overlap-gif overlapping-cards-img" src={demoCaseStudies[0].image} alt="gif" width={300} height={300} />
            </div>
          
        </div>


        <div className="flex card2   custom-card" >
            <div className="graphic-page-sec2-graphic-card graphic-page-sec2-graphic-card-second">
              <Image className="graphic-page-overlap-gif overlapping-cards-img" src={demoCaseStudies[1].image} alt="gif" width={300} height={300} />
            </div>
          
          <div className="graphic-page-sec2-content text-black">
            <p className="graphic-page-sec2-content-variety mb-4">Customer Stories</p>
            <h2 className="graphic-page-sec2-content-head mb-4">{demoCaseStudies[1].heading}</h2>
            <p className="graphic-page-sec2-content-para">{demoCaseStudies[1].paragraph}</p>
            <Link href={`/case-studies/${demoCaseStudies[1].link}`}>  <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button></Link>
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
              <Image className="graphic-page-overlap-gif overlapping-cards-img" src="https://i.gifer.com/fxVE.gif" alt="gif" width={300} height={300} />
            </div>
          
        </div>
      </section>
    );
  };
  
  export default OverlappingSections;
  