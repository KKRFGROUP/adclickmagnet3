"use client"

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
const Services = () => {
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const elApp: any = document.querySelector("#app");

// What we need...
// Mouse position
// Currently hovered item

document.body.addEventListener("mousemove", (event) => {
  console.log({
    x: event.clientX,
    y: event.clientY
  });

  elApp.style.setProperty("--x", event.clientX);
  elApp.style.setProperty("--y", event.clientY);
  });

  // Replay animation by hiding & showing the element again
  const el = document.body;
  el.addEventListener("click", function () {
  el.hidden = true;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});
    })

    return (
      <section className="graphic-page-services-sec-container">
        <h2 className="graphic-page-services-sec-head">Design Services</h2>
        <div id="app" >
          <nav className="main-nav" style={{
                //'--total': 4, 
              }} >
            <Link href="/ad-creative" className="image-hover" style={{
                //'--i': 0, 
              }} >
              <span className="title" data-title="Keyframers">Ad Creative</span>
              <Image className="img" height={300} width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBCGe4_RfMWFFvNvsGUnWSofVdRGES62pXw&s" alt=""/>
            </Link>
            <Link href="/social-media" className="image-hover" style={{
                //'--i': 1, 
              }}>
              <span className="title" data-title="Animation Amigos">Social Media Creative</span>
              <Image className="img" height={300} width={300} src="https://djdesignerlab.com/wp-content/uploads/2020/08/creative-graphic-design-tips-social-media.jpg" alt=""/>
            </Link>
            <Link href="/web-design" className="image-hover" style={{
                //'--i': 2, 
              }}>
              <span className="title" data-title="CSS Tutorials">Web Design</span>
              <Image className="img" height={300} width={300} src="https://img.freepik.com/premium-photo/computer-monitor-with-yellow-bottle-wine-plants-it-with-responsive-web-design_1277187-48302.jpg?semt=ais_hybrid" alt=""/>
            </Link>
            <Link href="/illustration-design" className="image-hover" style={{
                //'--i': 3, 
              }}>
              <span className="title" data-title="JavaScript Bits">Illustration Design</span>
              <Image className="img" height={300} width={300} src="https://i.graphicmama.com/blog/wp-content/uploads/2022/04/13145559/3D_Illustration.png" alt=""/>
            </Link>
            <Link href="/concept-creation" className="image-hover" style={{
                //'--i': 4, 
              }}>
              <span className="title" data-title="Boolean Buddies">Concept Creation</span>
              <Image className="img" height={300} width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoA86QJmGf98j0Lv27QOCHU-thz67UN4PmQ&s" alt=""/>
            </Link>
          </nav>
        </div>
        <div className="flex-col justify-center items-center graphic-page-service-sec-line-content px-9">
          <hr className="graphic-page-service-sec-line" />
          <div className="flex justify-between items-center mt-9 px-10 mx-4 ">
            <p className="graphic-page-service-sec-para" >We use the power of design to solve complex<br /> problems and cultivate business solutions.</p>
            <button type="button" className="graphic-page-service-sec-button">Get a Proposal</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  