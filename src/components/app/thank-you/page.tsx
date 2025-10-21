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
              <div className="thankyou-main-container" >
                  <div className="thanks-bg-blur">
                      <Image src="/images/logos/white logo.webp" alt="" height={300} width={300} />
                      <h1 className="thankyou-head">Thank you for Contacting us!</h1>
                      <p className="thankyou-para">We have received your message and we will contact you shortly to follow up, If you would like to speak to someone immidiately feel free to call.</p>
                      <Link href="/"> <button className="service-hero-sec-content-button thankyou-btn">Back To Home</button></Link>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ThankYou