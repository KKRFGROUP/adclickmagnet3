"use client";

import React from 'react'
import { useState, useEffect } from "react";
import { Menu,HoveredLink, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { FaChevronDown } from "react-icons/fa6";
//logos
import { CgMenuHotdog } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import companylogo from '../public/images/logo/adclickmagnetlogoblacklogo.png';


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
                                <div className="flex flex-col space-y-4 text-sm">  
                                    <HoveredLink href="/web-development">Web Development</HoveredLink>
                                    <HoveredLink href="/graphic-design">Graphic Design</HoveredLink>
                                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                    <HoveredLink href="/branding-services">Branding Services</HoveredLink>
                                    <HoveredLink href="/presentation-design">Presentation Design</HoveredLink>
                                    <HoveredLink href="/video-production">Video Production</HoveredLink>
                                    <HoveredLink href="/motion-design">Motion Design</HoveredLink>
                                    <HoveredLink href="/ad-creative">Ad Creative</HoveredLink>
                                    <HoveredLink href="/google-ads">Google Ads</HoveredLink>
                                </div>
                            </MenuItem>
                        
                        <Link href="/about" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Who We Are" />
                        </Link>
                        <Link href="/contact-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>

                    
                        
                        
                    <div className="mobile-view-navbar-container rounded-[20px] border border-transparent dark:bg-white/[0.4] dark:border-black bg-white shadow-input space-x-4 py-1 px-3 mx-1">
                        <Link href="/" className=" font-bold">
                            <Image className="mobile-view-navbar-logo" src={companylogo} alt="logo" height={100} width={150} />
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
                                <Link href="/about" onClick={() => setIsOpen(false)}>Who We Are</Link>
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
                                    </div>
                                )}
                                
                                <Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact</Link>
                            </nav>
                        </div>
                    
    </div>
  )
}

