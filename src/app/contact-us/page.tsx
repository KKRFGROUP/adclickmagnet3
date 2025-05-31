"use client"

import React,{useRef,useState} from 'react'
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

import Link from "next/link";
// logos
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedinIn   } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import "./contact.css"
import '../../components/app.css'
import "../../components/services-components/components.css"
//ui animation
import { Input, Label, PhoneInput } from '../../components/ui/Form';
import { TracingBeam } from "../../components/ui/TracingBeam";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    });
    
    const [status, setStatus] = useState({
      message: "",
      isError: false
    });
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const contactNumberApi = {
      contactNumber: "+1-718-577-2718"
    }

    const payNowLink = "https://rzp.io/rzp/5UThEojT/";
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus({ message: "Submitting...", isError: false });
      router.push("/thank-you");
  
      try {
        const apiUrl = "https://api.adclickmagnet.us/api/contact";  // Default API URL

       const response = await fetch(apiUrl, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });
  
       const result = await response.json();
  
       if (result.success) {
         setStatus({ message: "Form submitted successfully!", isError: false });
         setFormData({
           firstName: "",
           lastName: "",
           email: "",
           companyName: "",
           phoneNumber: "",
           message: "",
         });
       } else {
         setStatus({ 
           message: result.error || "Failed to submit form.", 
           isError: true 
         });
       }
      } catch (error) {
       console.error(error);
       setStatus({ 
         message: "An error occurred while submitting the form.", 
         isError: true 
       });
      }
    };
  

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
            <div className='tracing-beam'>
                <TracingBeam>
                    <div className="contact-us-page-main-container"> 
                        <div className="contact-us-page-layout-left">
                            <h2 className="contact-us-page-layout-left-head">Get in Touch</h2>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Visit us</p>
                                <p className="contact-us-page-layout-left-para">Come say hello at our office HQ.</p>
                                <p className="contact-us-page-layout-left-para">27/489, <br />Road/Street: New Delhi, <br />PIN Code: 110091</p>
                            </div>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Chat to us</p>
                                <p className="contact-us-page-layout-left-para">Our friendly team is here to help.</p>
                                <p className="contact-us-page-layout-left-para">info@adclickmagnet.com</p>
                            </div>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Call us</p>
                                <p className="contact-us-page-layout-left-para">Monday to Friday from 8am to 5pm. EST</p>
                                <p className="contact-us-page-layout-left-para">{contactNumberApi.contactNumber}</p>
                            </div>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Connect to Us</p>
                                <div className="flex items-center justify-between w-[50%] mt-4 contact-us-page-layout-left-logos">
                                    <Link href="https://www.linkedin.com/company/adclickmagnet/"><FaLinkedinIn className='social-media-handle-logo'/> </Link>
                                    <Link href="https://www.instagram.com/adclickmagnet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" ><FaInstagram className='social-media-handle-logo'/></Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61552551834420" ><FaFacebook className='social-media-handle-logo'/></Link>
                                    <Link href="https://wa.me/+918800262061"><RiWhatsappFill className='social-media-handle-logo'/> </Link>
                                </div>    
                            </div>

                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Cancellations & Refund Policies</p>
                                <p className="contact-us-page-layout-left-para">Once a payment is processed, cancellations & refunds are not permitted.</p>
                                
                            </div>
                        </div>
                        <div className="contact-us-page-layout-right">
                            <form className="contact-us-page-layout-right-form" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row  md:space-y-0 md:space-x-2 mb-4">
                                    <LabelInputContainer className="contact-us-page-layout-right-form-label-input">
                                        <Label htmlFor="firstname">First name</Label>
                                        <Input id="firstname"  placeholder="First Name" type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required />
                                    </LabelInputContainer>
                                    <LabelInputContainer className="contact-us-page-layout-right-form-label-input">
                                        <Label htmlFor="lastname" >Last name</Label>
                                        <Input id="lastname" placeholder="Last Name" type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required />
                                    </LabelInputContainer>
                                </div>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="email" >Company Name</Label>
                                    <Input id="companyName" type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required placeholder="Your Company" />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="email" >Email Address</Label>
                                    <Input id="email" type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required placeholder="Your Email" />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                    <PhoneInput
                                      id="phoneNumber"
                                      value={formData.phoneNumber}
                                      onChange={handleChange}
                                      placeholder="Phone number"
                                      className="flex-1"
                                      name="phoneNumber"
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="message">Drop a Message</Label>
                                    <Input id="message" type="text"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required placeholder="What can we help you with?" />
                                </LabelInputContainer>


                                {status.message && (
                                  <div className={`mb-4 p-4 rounded ${
                                    status.isError 
                                      ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100' 
                                      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                                  }`}>
                                    {status.message}
                                  </div>
                                )}
                                

                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                    >
                                    Submit &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />

                                
                            </form>
                        </div>
                    
                    </div>



                    {/* Footer for contact us */}
                    <div className="footer-container-2">
                        <h2 className="solutions" >SOLUTIONS</h2>
                        <div className="flex flex-wrap justify-between solution-paras">
                        <Link href="web-development" className="solution-para"><p >Web Development</p></Link>
                        <Link href="google-ads" className="solution-para"><p >Google Ads</p></Link>
                        <Link href="seo" className="solution-para"><p >SEO</p></Link>
                        <Link href="graphic-design" className="solution-para"><p >Graphic Design</p></Link>
                        
                        <Link href="ad-creative" className="solution-para"><p >Ad Creative</p></Link>
                        <Link href="motion-design" className="solution-para"><p >Motion Design</p></Link>
                        <Link href="video-production" className="solution-para"><p >Video Production</p></Link>
                        <Link href="presentation-design" className="solution-para"><p >Presentation Design</p></Link>
                        
                        
                        </div>
                        
                        <hr className='solution-gap-line'/>

                        
                        <div className="flex justify-between lg:px-10 pt-3 footer-links">
                          <Link href="/press-release" className="solution-page-link">Press Release</Link>
                          <Link href="/blogs" className="solution-page-link">Blog</Link>
                          <Link href="/career" className="solution-page-link">Careers</Link>
                          <Link href="/case-studies" className="solution-page-link">Case Studies</Link>
                          <Link href={payNowLink} className="solution-page-link">Pay Now</Link>
                          <Link href="/contact-us" className="solution-page-link">Contact</Link>
                        </div>


                        <hr className="solution-gap-line" />
                    
                        <div className="term-and-condition-cont flex justify-between items-center">
                        <div className="term-and-condition-content flex items-center gap-6">
                            <p>© 2025
                            ACM</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className="social-media-handles-card flex items-center gap-7">
                            <Link href="https://www.instagram.com/adclickmagnet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='social-media-handle-logo'/> </Link>
                            <Link href="https://wa.me/+918800262061"><RiWhatsappFill className='social-media-handle-logo'/> </Link>
                            <Link href="https://www.facebook.com/profile.php?id=61552551834420"><FaFacebook className='social-media-handle-logo'/> </Link>
                            <Link href="mailto:info@adclickmagnet.com"><MdAttachEmail className='social-media-handle-logo'/> </Link>
                            
                        </div>
                        </div>
                    </div>


              </TracingBeam>
              </div>

              <div className='mobile-tracing-beam'>
                    <div className="contact-us-page-main-container"> 
                        <div className="contact-us-page-layout-left">
                            <h2 className="contact-us-page-layout-left-head">Get in Touch</h2>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Visit us</p>
                                <p className="contact-us-page-layout-left-para">Come say hello at our office HQ.</p>
                                <p className="contact-us-page-layout-left-para">Building No./Flat No.: 27/489, <br />Road/Street: TRILOKPURI, New Delhi, <br />PIN Code: 110091</p>
                            </div>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Chat to us</p>
                                <p className="contact-us-page-layout-left-para">Our friendly team is here to help.</p>
                                <p className="contact-us-page-layout-left-para">info@adclickmagnet.com</p>
                            </div>
                            <div className="mb-3">
                                <p className="contact-us-page-layout-left-subhead">Call us</p>
                                <p className="contact-us-page-layout-left-para">Monday to Friday from 8am to 5pm.</p>
                                <p className="contact-us-page-layout-left-para">+1 718 577 2718</p>
                            </div>
                            <div className="mb-3 ">
                                <p className="contact-us-page-layout-left-subhead">Connect To Us</p>
                                <div className="flex items-center justify-between w-[50%] mt-4 contact-us-page-layout-left-logos">
                                    <Link href="https://www.linkedin.com/company/adclickmagnet/"><FaLinkedinIn className='social-media-handle-logo'/> </Link>
                                    <Link href="https://www.instagram.com/adclickmagnet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" ><FaInstagram className='social-media-handle-logo'/></Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61552551834420" ><FaFacebook className='social-media-handle-logo'/></Link>
                                    <Link href="https://wa.me/+918800262061"><RiWhatsappFill className='social-media-handle-logo'/> </Link>
                                </div>    
                            </div>

                            <div className="mt-3">
                                <p className="contact-us-page-layout-left-subhead mb-2">Cancellations & Refund Policies</p>
                                <p className="contact-us-page-layout-left-para">Once a payment is processed, cancellations & refunds are not permitted.</p>
                                
                            </div>
                        </div>
                        <div className="contact-us-page-layout-right">
                            <form className="contact-us-page-layout-right-form" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row  md:space-y-0 md:space-x-2 mb-4">
                                    <LabelInputContainer className="contact-us-page-layout-right-form-label-input">
                                        <Label htmlFor="firstname">First name</Label>
                                        <Input id="firstname"  placeholder="First Name" type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required />
                                    </LabelInputContainer>
                                    <LabelInputContainer className="contact-us-page-layout-right-form-label-input">
                                        <Label htmlFor="lastname" >Last name</Label>
                                        <Input id="lastname" placeholder="Last Name" type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required />
                                    </LabelInputContainer>
                                </div>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="companyName" >Company Name</Label>
                                    <Input id="companyName" type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required placeholder="Company Name" />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="email" >Email Address</Label>
                                    <Input id="email" type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required placeholder="Your Email" />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                    <PhoneInput
                                      id="phoneNumber"
                                      value={formData.phoneNumber}
                                      onChange={handleChange}
                                      placeholder="Phone number"
                                      className="flex-1"
                                      name="phoneNumber"
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-4 contact-us-page-layout-right-form-label-input">
                                    <Label htmlFor="message">Drop a Message</Label>
                                    <Input id="message" type="text"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required placeholder="What can we help you with?" />
                                </LabelInputContainer>

                                {status.message && (
                                  <div className={`mb-4 p-4 rounded ${
                                    status.isError 
                                      ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100' 
                                      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                                  }`}>
                                    {status.message}
                                  </div>
                                )}
                                

                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                    >
                                    Submit &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />

                                
                            </form>
                        </div>
                    
                    </div>



                    {/* Footer for contact us */}
                    <div className="footer-container-2">
                        <h2 className="solutions" >SOLUTIONS</h2>
                        <div className="flex flex-wrap justify-between solution-paras">
                        <Link href="web-development" className="solution-para"><p >Web Development</p></Link>
                        <Link href="google-ads" className="solution-para"><p >Google Ads</p></Link>
                        <Link href="seo" className="solution-para"><p >SEO</p></Link>
                        <Link href="graphic-design" className="solution-para"><p >Graphic Design</p></Link>
                        
                        <Link href="ad-creative" className="solution-para"><p >Ad Creative</p></Link>
                        <Link href="motion-design" className="solution-para"><p >Motion Design</p></Link>
                        <Link href="video-production" className="solution-para"><p >Video Production</p></Link>
                        <Link href="presentation-design" className="solution-para"><p >Presentation Design</p></Link>
                        
                        
                        </div>
                        
                        <hr className='solution-gap-line'/>

                        <div className="flex justify-between lg:px-10 pt-3 footer-links">
                          <Link href="/press-release" className="solution-page-link">Press Release</Link>
                          <Link href="/blogs" className="solution-page-link">Blog</Link>
                          <Link href="/career" className="solution-page-link">Careers</Link>
                          <Link href="/case-studies" className="solution-page-link">Case Studies</Link>
                          <Link href={payNowLink} className="solution-page-link">Pay Now</Link>
                          <Link href="/contact-us" className="solution-page-link">Contact</Link>
                        </div>

                        <hr className="solution-gap-line" />
                    
                        <div className="term-and-condition-cont flex justify-between items-center">
                        <div className="term-and-condition-content flex items-center gap-6">
                            <p>© 2025
                            ACM</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className="social-media-handles-card flex items-center gap-7">
                            <Link href="https://www.instagram.com/adclickmagnet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='social-media-handle-logo'/> </Link>
                            <Link href="https://wa.me/+918800262061"><RiWhatsappFill className='social-media-handle-logo'/> </Link>
                            <Link href="https://www.facebook.com/profile.php?id=61552551834420"><FaFacebook className='social-media-handle-logo'/> </Link>
                            <Link href="mailto:info@adclickmagnet.com"><MdAttachEmail className='social-media-handle-logo'/> </Link>
                            
                        </div>
                        </div>
                    </div>
              </div>
            </div>
        </>
    )
}


const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  
  
  
  
