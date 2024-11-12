"use client";

import { useEffect } from "react";

export default function InfiniteText() {

    useEffect(() => {
        //window.addEventListener("wheel", (dets) => {
        //    if(dets.deltaY>0) {
        //        gsap.to(".scrolling-text-item", {
        //            transform: "translateX(-200%)",
        //            repeat: -1,
        //            duration:4,
        //            ease: "none"
        //        })
        //    }
        //    else {
        //        gsap.to(".scrolling-text-item", {
        //            transform: "translateX(0%)",
        //            repeat: -1,
        //            duration:4,
        //            ease: "none"
        //        })
        //    }
        //})
        
    })
    return (
        <section className="infinite-text-section-container flex-col">

        <div className="scrolling-text-container flex items-center">
            <div className="scrolling-text-inner"  >
                <div className="scrolling-text">
                    <div className="scrolling-text-item">BENEFITS</div>
                    <div className="scrolling-text-item">BENEFITS</div>
                    <div className="scrolling-text-item">BENEFITS</div>
                    <div className="scrolling-text-item">BENEFITS</div>
                    <div className="scrolling-text-item">BENEFITS</div>
                    <div className="scrolling-text-item">BENEFITS</div>
                </div>
            </div>
        </div>

        <div className="scrolling-text-container-second flex items-center">
            <div className="scrolling-text-inner" >
                <div className="scrolling-text">
                    <div className="scrolling-text-item-second">UNIQUE DESIGN</div>
                    <div className="scrolling-text-item-second">PREMIUM SUPPORT</div>
                    <div className="scrolling-text-item-second">UNIQUE DESIGN</div>
                    <div className="scrolling-text-item-second">PREMIUM SUPPORT</div>
                    <div className="scrolling-text-item-second">UNIQUE DESIGN</div>
                    <div className="scrolling-text-item-second">PREMIUM SUPPORT</div>
                </div>
            </div>
        </div>
          </section>
    )
}


