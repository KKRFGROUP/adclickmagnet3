import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopBlogs from "./sections/TopBlogs"
import "./blogs.css"

function page() {
  return (
    <>
        <Navbar />
        <TopBlogs />
        <Footer />
    </>
  )
}

export default page