import React, { useState } from "react";
import { TextGenerateEffect } from '../ui/TextGenerateEffect';

import "./components.css";
import { Spotlight } from "../ui/Spotlight";
import { IoMdCloseCircle } from "react-icons/io";
import { Input, Label } from '../ui/Form';
import { cn } from "@/lib/utils";

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



function HeroSection({heading, preheading, para}: {
  heading: string;
  preheading?: string;
  para: string;
}) {
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

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus({ message: "Submitting...", isError: false });
  
      try {
        const response = await fetch("/api/contact", {
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
        console.log(error);
        setStatus({ 
          message: "An error occurred while submitting the form.", 
          isError: true 
        });
      }
    };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const scrollToSection = () => {
    const targetElement = document.getElementById("service-section3");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="hidden md:block">
        <Spotlight
          className="-top-40 left-0 md:right-60 md:-top-20"
          fill="white"
          />
        <Spotlight
          className="-top-40 right-0 spotlight2"
          fill="white"
          />
      </div>
      <div className="flex-col justify-center items-center text-center service-hero-sec-container mt-12">
        <TextGenerateEffect 
          className="font-syne" 
          color={"contact-us-main-head"} 
          words={preheading || "Professional"} 
        />
        <TextGenerateEffect 
          className="font-syne" 
          color={"contact-us-main-head"} 
          words={heading} 
        />
        <p className='service-hero-sec-content-para mt-9'>{para}</p>
        <div className="flex justify-center items-center h-[30%] service-hero-sec-content-buttons-card">
          <button 
            onClick={() => setIsPopupOpen(true)} 
            className="service-hero-sec-content-button" 
            type="button"
          >
            Get Started
          </button>
          
            <button onClick={scrollToSection} className="service-hero-sec-content-button see-more" type="button">
              See More
            </button>
        </div>
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
    </div>
  );
}

export default HeroSection;