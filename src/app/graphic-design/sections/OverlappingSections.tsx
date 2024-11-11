"use client";

import gsap from "gsap";
import { useEffect } from "react";
import Image from "next/image";

const OverlappingSections = () => {

  useEffect(() => {
    //const tl = gsap.timeline({
    //  scrollTrigger: {
    //    trigger: ".overlapping-cards",
    //    pin: true,
    //    pinSpacing: true,
    //    markers: false,
    //    start: "top 30%", // when the top of the trigger hits the top of the viewport
    //    end: "+=1000", // end after scrolling 1000px beyond the start
    //    scrub: 7 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //  }
    //});
    
    //tl.from(".card1", {
    //  yPercent: 100,
    //  opacity: 0
    //});
    //tl.from(".card2", {
    //  yPercent: 200,
    //  opacity: 0
    //});
    //tl.from(".card3", {
    //  yPercent: 200,
    //  opacity: 0
    //});

    gsap.to(".card1", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger:{
        trigger: ".card1",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      }
    })
    gsap.to(".card2", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger:{
        trigger: ".card2",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      }
    })
    gsap.to(".card3", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger:{
        trigger: ".card3",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      }
    })
  })
    return (
      <section className="overlapping-cards">
        <div className="flex custom-card card1 sticky top-[10vh]" >
          <div className="graphic-page-sec2-content text-black">
            <p className="graphic-page-sec2-content-variety mb-4">Customer Stories</p>
            <h2 className="graphic-page-sec2-content-head mb-4">Brio Revamps To<br /> Build Trust &<br /> Reputation at Scale</h2>
            <p className="graphic-page-sec2-content-para">During COVID, Brio required a revamp of their brand, marketing and creative to build trust and reputation amid healthcare skepticism. With no internal design team, Brio worked with ACM to develop and implement a new brand, design a new website and all marketing marketials to help scale their business.</p>
            <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button>
          </div>
          <div className="graphic-page-sec2-graphic flex justify-center">
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-sec2-gif" src="https://cdn.sanity.io/images/k0dlbavy/production/f88e1b003c40f368954177828408674bf35ada35-2400x1600.jpg?auto=format&fit=max&q=100&w=1800" alt="gif" width={100} height={100} />
            </div>
          </div>
        </div>


        <div className="flex custom-card card2 sticky top-[10vh]" >
          <div className="graphic-page-sec2-graphic flex justify-center">
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-sec2-gif" src="https://cdn.sanity.io/images/k0dlbavy/production/52bfaef9d3c7b13d75f292805e10f21bf16e6f43-1200x800.png?auto=format&fit=max&q=100&w=1200" alt="gif" width={250} height={100} />
            </div>
          </div>
          <div className="graphic-page-sec2-content text-black">
            <p className="graphic-page-sec2-content-variety mb-4">Customer Stories</p>
            <h2 className="graphic-page-sec2-content-head mb-4">Using ACM to<br /> untangle the flow of<br /> creative assets</h2>
            <p className="graphic-page-sec2-content-para">The velocity and volume of Imperfect Food&apos;s growth teams creative needs were outpacing their internal design teams capacity. ACM was able to jump into action supporting their rigourous ad creative needs and contribute to customer acquisition.</p>
            <button className="read-customer-stories mt-[40px]" type="button">Get Customer Stories</button>
          </div>
        </div>
        

        <div className="flex custom-card card3 sticky top-[10vh]" >
          <div className="graphic-page-sec2-content text-black">
            <h2 className="graphic-page-sec2-content-head mb-4">What makes our design services different?</h2>
            <p className="graphic-page-sec2-content-para">We deliver speedy, high-quality graphic design services through a transparent subscription model. We are a tech-enabled company, developing its own proprietary software to brief, manage, and coordinate a high-volume of design projects, making it possible to keep pace with teams at Amazon, Puma, Facebook, and more.

Learn how we can revolutionize the way your organization gets design work done. Book a call today.</p>
            <button className="read-customer-stories mt-[40px]" type="button">Book A Call</button>
          </div>
          <div className="graphic-page-sec2-graphic flex justify-center">
            <div className="graphic-page-sec2-graphic-card">
              <Image className="graphic-page-sec2-gif" src="https://i.gifer.com/fxVE.gif" alt="gif" width={100} height={100} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OverlappingSections;
  