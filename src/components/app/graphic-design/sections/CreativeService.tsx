"use client"

import React, { useState,useRef } from 'react'
import useGsapAnimation from '../../../components/UseGsapAnimation';
import { PiPaperPlaneRightBold } from "react-icons/pi";
import Image from 'next/image';
import { Input, Label,PhoneInput } from '@/components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import '../graphic.css';
import "@/components/services-components/components.css";





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



export default function CreativeService() {
  const creativeRef = useRef(null);
  const router = useRouter();
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
        }
        

  useGsapAnimation(creativeRef, {
    opacity: 1,
    y: -50,
    duration: 1,
  });

    return (
      <>
      <section ref={creativeRef} className="creative-service-section-container">
        <div className="text-white">
          <div className="flex justify-between items-center">
            <p className='portfolio'>DRIVING GREAT OUTCOMES</p>
            <button onClick={() => setIsPopupOpen(true)} type='button' className="flex items-center gap-4 portfolio animate__headShake">Book a Demo
              <PiPaperPlaneRightBold />
            </button>
          </div>
          <hr className='mt-3'/>
        </div>

        

        <div className='creative-service-head-card-container'>
          <h2 className='creative-service-head'>Innovation Meets </h2>
          <h2 className='creative-service-head-second mb-9'>Elegance.</h2>
          <div className="flex justify-between items-start creative-service-card-container">
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/Elegace-1.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Precision-driven designs that enhance brand identity, focusing on high-quality, impactful visuals crafted for long-term success.</p>
              <hr className='creative-service-card-content-line ' />
            </div>
            <div className="creative-service-card">
              <video className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl creative-service-card-img" autoPlay preload='auto' loop muted playsInline > <source src="https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/Elegance-2.mp4" /></video>
              <p className='creative-service-card-content' >Delivering sophisticated, creative solutions that blend modern aesthetics with strategic design to effectively communicate your message.              </p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/Elegance-3.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Pushing the boundaries of design, we create innovative and visually compelling graphics that set your brand apart in a competitive market.</p>
              <hr className='creative-service-card-content-line' />
            </div>
            <div className="creative-service-card">
              <Image className='creative-service-card-img' src="https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Graphicdesign/Elegance-4.gif" alt="crative image" height={300} width={300} />
              <p className='creative-service-card-content' >Focused on results, we design with purpose. Our graphics are built for performance, ensuring maximum engagement and effectiveness.</p>
              <hr className='creative-service-card-content-line' />
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
          <div className="fixed inset-0 bg-black  flex items-center justify-center pt-[20%] md:pt-[7%] h-[100vh] popup-z-index">
            <div className="service-page-popup" style={{backgroundImage: "url(/images/form-popup-bg.webp)"}}>
              <div className="bg-blur rounded-2xl flex-col">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <IoMdCloseCircle className="text-4xl text-white"/>
              </button>
              
              <h2 className="service-page-popup-head">Get Started</h2>
              
              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname"  placeholder="First name" type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastname" >Last name</Label>
                    <Input id="lastname" placeholder="Last name" type="text"
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
                    required placeholder="Your Email" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                      <PhoneInput
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="flex-1"
                        name="phoneNumber"
                      />
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
      </>
    );
  };
  

  