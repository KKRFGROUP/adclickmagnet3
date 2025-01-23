"use client"

import React,{useRef,useState} from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import '../../components/app.css'
import '../../components/services-components/components.css'
import "./thank.css"

function ThankYou() {
    const pageMainRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

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
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
          <div ref={pageMainRef} className="page-main">
              <div className="thankyou-main-container" style={{backgroundImage: "url(https://i.pinimg.com/1200x/5a/6b/50/5a6b5014f1c4e9e04fb8c0d78c72b193.jpg)"}}>
                  <div className="thanks-bg-blur">
                      <Image src="/images/logos/white logo.webp" alt="" height={300} width={300} />
                      <h1 className="thankyou-head">Thank you for Contacting us!</h1>
                      <p className="thankyou-para">We have received your message and will contat you shortly to follow up, If you would like to speak to someone immidiately feel free to call.</p>
                      <Link href="/"> <button className="service-hero-sec-content-button thankyou-btn">Back To Home</button></Link>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ThankYou