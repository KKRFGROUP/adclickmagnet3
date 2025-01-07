"use client"

import React,{useRef,useState} from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
              <div className="thankyou-main-container" style={{backgroundImage: "url(https://res.cloudinary.com/dgdgrniut/image/upload/v1734538406/DALL_E_2024-12-18_20.22.23_-_A_minimalist_background_image_for_a_website_featuring_a_black_theme_with_subtle_glowing_light_effects_or_abstract_objects_in_the_center._The_objects_zin44f.webp)"}}>
                  <div className="thanks-bg-blur">
                      <Image src="https://res.cloudinary.com/dgdgrniut/image/upload/c_crop,ar_16:9/v1734527641/acm_white_logo-removebg-preview_qgn8qq_hs2io7.png" alt="" height={300} width={300} />
                      <h1 className="thankyou-head">Thank you for Contacting us!</h1>
                      <p className="thankyou-para">We have received your message and will contat you shortly to follow up, If you would like to speak to someone immidiately feel free to call.</p>
                      <Link href="/"> <button className="service-hero-sec-content-button thankyou-btn">Back To Home</button></Link>
                  </div>
              </div>
            <Footer />
          </div>
    </>
  )
}

export default ThankYou