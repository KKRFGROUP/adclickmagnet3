"use client";

import React from 'react'
import { useState,useEffect } from "react";

import { Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

//logos
import { CgMenuHotdog } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { FaInstagram, FaFacebook  } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const hoverImageArr = [
    {
        name: "Creative services",
        img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg"
    },
    {
        name: "Digital Ads Services",
        img: "https://unctad.org/sites/default/files/inline-images/2019-03-29_DigitalServices_400x225.jpg"
    },
    {
        name: "Graphic Design",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468025/unions___highlights_up12yg.jpg"
    },
    {
        name: "Ad Creative",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468145/lovesbitesberlin_cg61ks.jpg"
    },
    {
        name: "Branding Services",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468488/emerald_postermockup_003_jpg_by_Emily_Xie_llqglz.jpg"
    },
    {
        name: "Presentation Design",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468588/Premium_PSD___Interface_presentation_mockup_with_frosted_glass_morphism_effects_3D_Render_fszpnk.jpg"
    },
    {
        name: "Video Production",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468646/Video_Production_Agency_Website_tj2bxd.jpg"
    },
    {
        name: "Motion Design",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734468750/join_us__Photo_jhlnet.gif"
    },
    {
        name: "Google Ads",
        img: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734627623/-m_lcxuia.png"
    },
    {
        name: "Meta Ads",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518219/meta_logo_white_grvgck.jpg"
    },
    {
        name: "Search Engine Optimization",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734442064/seo_logo_white_tgmpnn.jpg"
    },
    {
        name: "Linkedin Ads",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734524683/Untitled_design_11_gknymx.png"
    },
    {
        name: "Web Development",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734434830/a83bd63c2147df066ce4c89f3adbabff_wqlp7s.gif"
    },
   
    
]

const defaultImage =  "https://res.cloudinary.com/dgdgrniut/image/upload/v1734527641/acm_white_logo-removebg-preview_qgn8qq_hs2io7.png"



export default function Navbar({className, mobileOverlayOpen, isOpen }: {className?: string; mobileOverlayOpen:  (arg?: boolean) => void; isOpen: boolean;}) {
    const [active, setActive] = useState<string | null>(null);
    const [whoWeAre, setWhoWeAre] = useState(false);
    const [services, setServices] = useState(false);
    const [graphicDesign, setGraphicDesign] = useState(false);
    const [adServices, setAdServices] = useState(false);
   const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hoverImage, setHoverImage] = useState(defaultImage);
  

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

    

  

  

  const handleHoverImage = (name: string) => {
    const object = hoverImageArr.find((each) => each.name === name)
    setHoverImage(object?.img || defaultImage);
  }
  

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
                                <div className='what-we-do-hover-header'>
                                    <div className="bg-blur">
                                    <div className="what-we-do-hover-sec1">
                                        <h2 className="what-we-do-hover-sec1-head">Built to Elevate Your Growth</h2>
                                        <p className="what-we-do-hover-sec1-para">Our digital services are designed to transform your vision into measurable success.</p>
                                        <hr className="what-we-do-hover-sec1-line"/>
                                        <div className="what-we-do-hover-sec1-img-card">
                                            
                                            <p className="what-we-do-hover-sec1-img-card-para">See How we made graphic design solution for our clients.</p>
                                        </div>
                                        <hr className="what-we-do-hover-sec1-line"/>
                                        <p className="what-we-do-hover-sec1-para">What We Think</p>
                                        <Link href="/blogs"><p className="what-we-do-hover-sec1-para-company">Blogs</p></Link>
                                        <Link href="/press-release"><p className="what-we-do-hover-sec1-para-company">Press Release</p></Link>
                                    </div>
                                    <div className="what-we-do-hover-secs">  
                                        <h2 className="what-we-do-hover-secs-head" onMouseEnter={() => handleHoverImage("Creative services")} onMouseLeave={() => handleHoverImage(defaultImage)}>Creative services</h2>
                                        <Link href="/graphic-design" onMouseEnter={() => handleHoverImage("Graphic Design")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Graphic Design</p></Link>
                                        <Link href="/ad-creative" onMouseEnter={() => handleHoverImage("Ad Creative")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Ad Creative</p></Link>
                                        <Link href="/branding-services" onMouseEnter={() => handleHoverImage("Branding Services")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Branding Services</p></Link>
                                        <Link href="/presentation-design" onMouseEnter={() => handleHoverImage("Presentation Design")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Presentation Design</p></Link>
                                        <Link href="/video-production" onMouseEnter={() => handleHoverImage("Video Production")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Video Production</p></Link>
                                        <Link href="/motion-design" onMouseEnter={() => handleHoverImage("Motion Design")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Motion Design</p></Link>
                                    </div>
                                    <div className="what-we-do-hover-secs">
                                        <h2 className="what-we-do-hover-secs-head" onMouseEnter={() => handleHoverImage("Digital Ads Services")} onMouseLeave={() => handleHoverImage(defaultImage)}>Digital Ads Services</h2>
                                        <Link href="/google-ads" onMouseEnter={() => handleHoverImage("Google Ads")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Google Ads</p></Link>
                                        <Link href="/meta-ads" onMouseEnter={() => handleHoverImage("Meta Ads")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Meta Ads</p></Link>
                                        <Link href="/seo" onMouseEnter={() => handleHoverImage("Search Engine Optimization")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Search Engine Optimization</p></Link>
                                        <Link href="/linkedin-ads" onMouseEnter={() => handleHoverImage("Linkedin Ads")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Linkedin Ads</p></Link>
                                        <Link href="/web-development" onMouseEnter={() => handleHoverImage("Web Development")} onMouseLeave={() => handleHoverImage(defaultImage)}><p className="what-we-do-hover-secs-para">Web Development</p></Link>
                                        
                                    </div>
                                    <div className="what-we-do-hover-secs text-center">
                                        <Image className="what-we-do-hover-secs-img" src={hoverImage} alt="" height={300} width={300} />
                                        
                                    </div>
                                    </div>
                                </div>
                                <div className="what-we-do-hover-footer">
                                    <p>Need a dedicated solution tailored to your needs?<br />Contact us, we will create it especially for you!</p>
                                    <p>or call  +1 718 577 2718</p>
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

                        
                        <button type="button" className="navbar-menu-container" onClick={() => mobileOverlayOpen()}>
                            <CgMenuHotdog className="text-4xl text-black bg:text-black"/>
                        </button>

                        {/* Fullscreen Overlay */}
                       
                    </div>
                        <div
                            className={`${isOpen ? "relative" : "fixed top-0 left-0"}  w-[100vw] inset-0  bg-black  z-50 flex flex-col   transition-transform duration-300 mobile-navbar-fullscreen-overlay ${
                            isOpen ? 'scale-100' : 'scale-0'
                            }`}
                        >
                            <div>
                                <div className="mobile-overlay-logo-cross mx-4">
                                    <Link href="/" className=" font-bold">
                                        <Image className="w-[37vw] h-[90px]" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1732186526/adclickmagnetlogogrey_xs0elw.png" alt="logo" height={100} width={150} />
                                    </Link>

                                    <button
                                        onClick={() => mobileOverlayOpen()}
                                        className="mr-3"
                                        >
                                        <RxCross2 className="text-4xl text-white bg:text-black"/>
                                    </button>

                                </div>

                                <nav className="mobile-navlinks">
                                    <Link className="w-full mb-7" href="/" onClick={() => mobileOverlayOpen(false)}>Home</Link>
                                    <div className="flex gap-4 items-center mb-7">
                                        <p>Who We Are</p>
                                        <div onClick={() => setWhoWeAre(!whoWeAre)}>
                                            <IoMdAdd /> 
                                        </div>
                                    </div>
                                    <div className={`services-drop-down ${whoWeAre ? "scale-100" : "scale-0 h-0"}`}>
                                            <Link className="w-full mb-2" href="/about-us" onClick={() => mobileOverlayOpen(false)}>Who We Are</Link>
                                            <hr className="w-full mb-3"/>
                                            <Link className="w-full mb-2" href="/careers" onClick={() => mobileOverlayOpen(false)}>Careers</Link>
                                            <hr className="w-full mb-3"/>
                                            <Link className="w-full mb-2" href="/press-release" onClick={() => mobileOverlayOpen(false)}>Press Release</Link>
                                            <hr className="w-full mb-3"/>
                                            <Link className="w-full mb-2" href="/blogs" onClick={() => mobileOverlayOpen(false)}>Blogs</Link>
                                            <hr className="w-full mb-3"/>
                                            <Link className="w-full mb-2" href="/case-studies" onClick={() => mobileOverlayOpen(false)}>Case Studies</Link>
                                            <hr className="w-full mb-5"/>
                                        </div>

                                    <div className="flex gap-4 items-center mb-7">
                                        <p>services</p>
                                        <div onClick={() => setServices(!services)}>
                                            <IoMdAdd /> 
                                        </div>
                                    </div>
                                    
                                    
                                    <div className={`services-drop-down ${services ? "scale-100" : "scale-0 h-0"}`}>
                                            
                                            <div className="flex gap-4 items-center mb-2" >
                                                <p>Creative Design</p>
                                                <div onClick={() => setGraphicDesign(!graphicDesign)}>
                                                    <IoMdAdd /> 
                                                </div>
                                            </div>
                                            <hr className="w-full mb-5"/>
                                                
                                                    <div className={`services-drop-down dark:text-white ${graphicDesign ? "animate__backInUp" : "animate__backOutDown scale-0 h-0"}`}>
                                                        <Link className="w-full mb-2" href="/graphic-design" onClick={() => mobileOverlayOpen(false)}>Graphic Design</Link>
                                                        <hr className="w-full mb-3"/>
                                                        <Link className="w-full mb-2" href="/ad-creative" onClick={() => mobileOverlayOpen(false)}>Ad Creative</Link>
                                                        <hr className="w-full mb-3"/>
                                                        <Link className="w-full mb-2" href="/motion-design" onClick={() => mobileOverlayOpen(false)}>Motion Design</Link>
                                                        <hr className="w-full mb-3"/>
                                                        <Link className="w-full mb-2" href="/branding-design" onClick={() => mobileOverlayOpen(false)}>Branding Service</Link>
                                                        <hr className="w-full mb-3"/>
                                                        <Link className="w-full mb-2" href="/video-production" onClick={() => mobileOverlayOpen(false)}>Video Production</Link>
                                                        <hr className="w-full mb-3"/>
                                                        <Link className="w-full mb-2" href="/presentation-design" onClick={() => mobileOverlayOpen(false)}>Presentation Design</Link>
                                                        <hr className="w-full mb-5"/>
                                                    </div>
                                            <div className="flex gap-4 items-center mb-2" >
                                                <p>Digital Ads Services</p>
                                                <div onClick={() => setAdServices(!adServices)}>
                                                    <IoMdAdd /> 
                                                </div>
                                            </div>
                                            <hr className="w-full mb-5"/>
                                            <div className={`services-drop-down dark:text-white ${adServices ? "animate__backInUp " : "animate__backOutDown scale-0 h-0"}`}>
                                                <Link className="w-full mb-2" href="/google-ads" onClick={() => mobileOverlayOpen(false)}>google ads</Link>
                                                <hr className="w-full mb-3"/>
                                                <Link className="w-full mb-2" href="/linkedin-ads" onClick={() => mobileOverlayOpen(false)}>Linkedin Ads</Link>
                                                <hr className="w-full mb-3"/>
                                                <Link className="w-full mb-2" href="/meta-ads" onClick={() => mobileOverlayOpen(false)}>Meta Ads</Link>
                                                <hr className="w-full mb-3"/>
                                                <Link className="w-full mb-2" href="/seo" onClick={() => mobileOverlayOpen(false)}>seo</Link>
                                                <hr className="w-full mb-3"/>
                                                <Link className="w-full mb-2" href="/web-development" onClick={() => mobileOverlayOpen(false)}>web development</Link>
                                                <hr className="w-full mb-5"/>
                                            </div>
                                        </div>
                                </nav>
                            </div>
                            <div className=' flex-col justify-end items-center text-center mb-10' >
                                <Link className="w-full mb-2" href="/contact-us" onClick={() => mobileOverlayOpen(false)}><button type="button" className='mobile-overlay-btn'>Contact</button></Link>
                                <div className="flex items-center justify-center gap-10 mt-5 text-2xl">
                                    <Link href="https://www.instagram.com/adclickmagnet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='social-media-handle-logo'/> </Link>
                                    <Link href="https://wa.me/+918800262061"><RiWhatsappFill className='social-media-handle-logo'/> </Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61552551834420"><FaFacebook className='social-media-handle-logo'/> </Link>
              
                                </div>
                            </div>
                        </div>
    </>
  )
}

