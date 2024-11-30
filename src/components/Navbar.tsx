"use client";

import React from 'react'
import { useState,useEffect } from "react";

import { Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
//logos
import { CgMenuHotdog } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";


export default function Navbar({className}: {className?: string}) {
    const [active, setActive] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState(false);
    const [graphicDesign, setGraphicDesign] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Hide navbar if scrolling down, show if scrolling up
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  


  return (
    <>
    
    <div style={{
        transition: "top 0.4s",
        top: isVisible ? "10px" : "-120px", // Adjust "-80px" to the height of your navbar
        zIndex: 1000,
    }} className={cn(" fixed inset-x-0 mx-auto z-50", className)}>
                    <Menu setActive={setActive}>
                            <Link href="/" className="cursor-none">
                                <MenuItem setActive={setActive} active={active} item="Home" />
                            </Link>
                            <MenuItem setActive={setActive} active={active} item="What We Do">
                                <div className="what-we-do-hover-sec1">
                                    <h2 className="what-we-do-hover-sec1-head">Built to Elevate Your Growth</h2>
                                    <p className="what-we-do-hover-sec1-para">Our digital services are designed to transform your vision into measurable success.</p>
                                    <hr className="what-we-do-hover-sec1-line"/>
                                    <div className="what-we-do-hover-sec1-img-card">
                                        
                                        <p className="what-we-do-hover-sec1-img-card-para">See How we made graphic design solution for our clients.</p>
                                    </div>
                                    <hr className="what-we-do-hover-sec1-line"/>
                                    <p className="what-we-do-hover-sec1-para">What We Think</p>
                                    <p className="what-we-do-hover-sec1-para-company">Blogs</p>
                                    <p className="what-we-do-hover-sec1-para-company">Press Release</p>
                                </div>
                                <div className="what-we-do-hover-secs">  
                                    <Link href="/graphic-design"><h2 className="what-we-do-hover-secs-head">Graphic Design</h2></Link>
                                    <Link href="/ad-creative"><p className="what-we-do-hover-secs-para">Ad Creative</p></Link>
                                    <Link href="/branding-services"><p className="what-we-do-hover-secs-para">Branding Services</p></Link>
                                    <Link href="/presentation-design"><p className="what-we-do-hover-secs-para">Presentation Design</p></Link>
                                    <Link href="/video-production"><p className="what-we-do-hover-secs-para">Video Production</p></Link>
                                    <Link href="/motion-design"><p className="what-we-do-hover-secs-para">Motion Design</p></Link>
                                    <Link href="/web-development"><h2 className="what-we-do-hover-secs-head mt-10">Web Development</h2></Link>
                                </div>
                                <div className="what-we-do-hover-secs">
                                    <h2 className="what-we-do-hover-secs-head">Digital Ads Services</h2>
                                    <Link href="/google-ads"><p className="what-we-do-hover-secs-para">Google Ads</p></Link>
                                    <Link href="/meta-ads"><p className="what-we-do-hover-secs-para">Meta Ads</p></Link>
                                    <Link href="/linkedin-ads"><p className="what-we-do-hover-secs-para">Linkedin Ads</p></Link>
                                    
                                </div>
                                <div className="what-we-do-hover-secs">
                                    <Link href="/seo"><p className="what-we-do-hover-secs-para">Search Engine Optimization</p></Link>
                                    <Link href="/web-development"><p className="what-we-do-hover-secs-para">Web Development</p></Link>
                                    
                                </div>
                            </MenuItem>
                        
                        <Link href="/about-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Who We Are" />
                        </Link>
                        <Link href="/contact-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>

                    
                        
                        
                    
                    
    </div>


    <div className="mobile-view-navbar-container fixed inset-x-0 z-50 mx-2 top-[10px] rounded-[20px] border border-transparent dark:bg-white/[0.4] dark:border-black bg-white shadow-input space-x-4 py-1 px-3 mx-1">
                        <Link href="/" className=" font-bold">
                            <Image className="mobile-view-navbar-logo" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1732186526/adclickmagnetlogoblacklogo_reqzpl.png" alt="logo" height={100} width={150} />
                        </Link>

                        
                        <button type="button" className="navbar-menu-container" onClick={() => setIsOpen(!isOpen)}>
                            <CgMenuHotdog className="text-4xl text-black bg:text-black"/>
                        </button>

                        {/* Fullscreen Overlay */}
                       
                    </div>
                        <div
                            className={`fixed top-0 left-0 w-[100vw] inset-0 h-[120vh] bg-black bg-opacity-95 z-50 flex flex-col   transition-transform duration-300 ${
                            isOpen ? 'scale-100' : 'scale-0'
                            }`}
                        >
                            <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-6"
                            >
                            <RxCross2 className="text-4xl text-white bg:text-black"/>
                            </button>

                            <nav className="mobile-navlinks">
                                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link href="/about-us" onClick={() => setIsOpen(false)}>Who We Are</Link>
                                <Link href="/press-release" onClick={() => setIsOpen(false)}>Press Release</Link>
                                <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
                                <div className="flex justify-between items-center">
                                    <p>services</p>
                                    <div onClick={() => setServices(!services)}>
                                        <FaChevronDown /> 
                                    </div>
                                </div>
                                {services && (
                                    <div className="services-drop-down">
                                        
                                        <div className="flex justify-between items-center w-full mb-3" >
                                            <Link href="/graphic-design" onClick={() => setIsOpen(false)}>Graphic Design</Link>
                                            <div onClick={() => setGraphicDesign(!graphicDesign)}>
                                                <FaChevronDown /> 
                                            </div>
                                        </div>
                                            {graphicDesign && (
                                                <div className="services-drop-down dark:text-white">
                                                <Link className="w-full mb-3" href="/ad-creative" onClick={() => setIsOpen(false)}>Ad Creative</Link>
                                                <Link className="w-full mb-3" href="/motion-design" onClick={() => setIsOpen(false)}>Motion Design</Link>
                                                <Link className="w-full mb-3" href="/branding-design" onClick={() => setIsOpen(false)}>Branding Service</Link>
                                                <Link className="w-full mb-3" href="/video-production" onClick={() => setIsOpen(false)}>Video Production</Link>
                                                <Link className="w-full mb-3" href="/presentation-design" onClick={() => setIsOpen(false)}>Presentation Design</Link>
                                                </div>
                                            )}
                                        <Link className="w-full mb-3" href="/google-ads" onClick={() => setIsOpen(false)}>google ads</Link>
                                        <Link className="w-full mb-3" href="/web-development" onClick={() => setIsOpen(false)}>web development</Link>
                                        <Link className="w-full mb-3" href="/seo" onClick={() => setIsOpen(false)}>seo</Link>
                                        <Link className="w-full mb-3" href="/linkedin-ads" onClick={() => setIsOpen(false)}>Linkedin Ads</Link>
                                        <Link className="w-full mb-3" href="/meta-ads" onClick={() => setIsOpen(false)}>Meta Ads</Link>
                                    </div>
                                )}
                                
                                <Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact</Link>
                            </nav>
                        </div>
    </>
  )
}

