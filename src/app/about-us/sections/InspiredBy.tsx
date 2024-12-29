"use client"

import React, { useEffect,useState } from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import { Input, Label } from '@/components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import "@/components/services-components/components.css";
import { useRouter } from "next/navigation";

const words = [
    { 
        text: "•Inspired",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
      },
    { 
        text: "By",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    {
        text: "Innovation",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-2",
    },
    
];



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


function InspiredBy() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
      const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
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
        
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setStatus({ message: "Submitting...", isError: false });
          router.push("/thank-you");
      
          //try {
          //  const response = await fetch("/api/contact", {
          //    method: "POST",
          //    headers: { "Content-Type": "application/json" },
          //    body: JSON.stringify(formData),
          //  });
      //
          //  const result = await response.json();
      //
          //  if (result.success) {
          //    setStatus({ message: "Form submitted successfully!", isError: false });
          //    setFormData({
          //      firstName: "",
          //      lastName: "",
          //      email: "",
          //      phoneNumber: "",
          //      message: "",
          //    });
          //  } else {
          //    setStatus({ 
          //      message: result.error || "Failed to submit form.", 
          //      isError: true 
          //    });
          //  }
          //} catch (error) {
          //  console.error(error);
          //  setStatus({ 
          //    message: "An error occurred while submitting the form.", 
          //    isError: true 
          //  });
          //}
        };



  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    
    
    }, [windowWidth]);

    

  return (
    <>
    <div className='inspired-us-main-container'>
        <TypewriterEffect className='impact-matric-head'  words={words}/>
        <div className='inspired-us-content-card'>
            <p className='inspired-us-content-card-para' >Our story is one of creativity, collaboration, and growth — fueled by a relentless desire to push boundaries and unlock potential.</p>
            <hr className="inspired-us-content-card-line" />
        </div>
        <div className='inspired-us-content-card-right'>
            <hr className="inspired-us-content-card-line" />
            <p className='inspired-us-content-card-para' >With a passion for helping brands stand out in a crowded digital landscape. Founded by a group of creative thinkers and strategists, we started as a small team determined to make a big impact.</p>
            <button onClick={() => setIsPopupOpen(true)}  type="button" className='inspired-us-content-card-btn' >GET IN TOUCH •</button>
        </div>
        <div className="inspired-us-content-card-between">
            <div className='inspired-us-content-card'>
                <h2 className='inspired-us-content-card-head'>1. DISCOVER</h2>
                <p className='inspired-us-content-card-para'>We begin by understanding your business goals, target audience, and current challenges. This discovery phase allows us to tailor strategies that align with your vision and set the foundation for success.</p>
                <hr className="inspired-us-content-card-line"/>
            </div>
            <div className='inspired-us-content-card'>
                <h2 className='inspired-us-content-card-head'>2. STRATEGIZE</h2>
                <p className='inspired-us-content-card-para'>Based on our findings, we develop a custom marketing plan. This involves selecting the right channels, creating impactful messaging, and setting measurable goals to ensure a data-driven approach.</p>
                <hr className="inspired-us-content-card-line"/>
            </div>  
        </div>
        <button type="button" className='inspired-us-content-card-btn-case'>CASE STUDIES •</button>

    </div>

    {/* Popup Modal */}
    {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-[20%] md:pt-[7%] h-[100vh] popup-z-index">
          <div className="service-page-popup">
            <div className="bg-blur rounded-2xl flex-col">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoMdCloseCircle className="text-4xl text-white"/>
            </button>
            
            <h2 className="service-page-popup-head">Get Started</h2>
            
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname"  placeholder="Tyler" type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" >Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required />
                </LabelInputContainer>
              </div>
                
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" >Email Address</Label>
                <Input id="email" type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required placeholder="projectmayhem@fc.com" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" value={formData.phoneNumber}
                  onChange={handleChange} name="phoneNumber" placeholder="+911234567889" type="text" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
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
        </div>
      )}

    {/*video card section */}
        <div className='inspired-video-card'>
            <div className='inspired-video-content'>
                <h2 className='inspired-video-content-head'>Our Mission</h2>
                <p className='inspired-video-content-para' >Our mission is to empower businesses to reach their full potential through innovative marketing strategies and data-driven solutions.</p>
                <br />
                <p className='inspired-video-content-para' >We are committed to delivering measurable results, fostering meaningful connections between brands and their audiences, and helping our clients achieve sustainable growth.</p>
            </div>
            <video style={{ width: windowWidth <= 768 ? "100%": "100%", height: windowWidth <= 1028? "90vh": "130vh", borderRadius: "50px" }} autoPlay preload='auto' loop muted playsInline src="https://res.cloudinary.com/dgdgrniut/video/upload/v1732097945/rewards-desktop-final_yqhhyy.mp4"></video>
        </div> 
        </>
  )
}

export default InspiredBy