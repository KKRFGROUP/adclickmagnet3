"use client"
import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopCaseStudies from "./sections/TopCaseStudies"

import '../blogs/blogs.css'
function CaseStudies() {
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
        <div ref={pageMainRef} className='page-main'>
          <TopCaseStudies />
          <Footer />
        </div>
    </>
  )
}

export default CaseStudies