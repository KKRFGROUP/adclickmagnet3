"use client"

import React from 'react'
import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
//import Navbar from '@/components/Navbar'
//import Footer from '@/components/Footer'
import '../components/app.css'
import '../components/services-components/components.css'
import './globals.css'



function NotFound() {
  


  return (
    <>

      <AuroraBackground>
        <div className="not-found-content">
          <h1 className="not-found-content-head">404</h1>
          <p className="not-found-content-para">Page Not Found!</p>
          <Link href="/"> <button className="service-hero-sec-content-button w-[100%]">Back To Home</button></Link>
        </div>
      </AuroraBackground>
    </>
  )
}

export default NotFound