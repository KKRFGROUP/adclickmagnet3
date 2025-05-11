"use client"

import React,{useState, useRef} from 'react'
import Image from 'next/image';
import "../../analyze.css";
import { Input, Label, PhoneInput ,DropdownTrigger,Dropdown, DropdownContent,DropdownItem} from '../../../../components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import "../../../../components/services-components/components.css"
import "../../../../components/app.css"
import './style.css'
import Link from 'next/link';
import {AuroraBackground} from '../../../../components/ui/AuroraBackground'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';





function Report() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
      const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    
      
    
      const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        setIsPopupOpen(true)
        //try {
          //const response = await fetch("/api/contact", {
          //  method: "POST",
          //  headers: { "Content-Type": "application/json" },
          //  body: JSON.stringify(formData),
          //});
    //
          //const result = await response.json();
    //
          //if (result.success) {
          //  setStatus({ message: "Form submitted successfully!", isError: false });
          //  setFormData({
          //    firstName: "",
          //    lastName: "",
          //    email: "",
          //    phoneNumber: "",
          //    message: "",
          //  });
          //} else {
          //  setStatus({ 
          //    message: result.error || "Failed to submit form.", 
          //    isError: true 
          //  });
          //}
        //} catch (error) {
        //  console.error(error);
        //  setStatus({ 
        //    message: "An error occurred while submitting the form.", 
        //    isError: true 
        //  });
        //}
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
        <div ref={pageMainRef} className='page-main'>

      
          <AuroraBackground className="seo-report-aurora-bg">
        <div className="analyze-your-web-loader-main-container">
        {isPopupOpen === false ?  
          <div className="backdrop-blur-2xl rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl analyze-your-web-loader">
            <Image 
              src="/images/logos/white logo bigger.webp" 
              alt="analyzer-logo" 
              height={200} 
              width={200}
              priority
              className='report-page-logo'
            />

          <h1 className="analyze-your-web-report-head">Your report is ready, and we've found many marketing opportunities. Want to learn more?</h1>
          <p className="analyze-your-web-report-para mt-6">
            Fill out the form below to receive your results on your email.
          </p>

          <form className="mt-8 w-[85%]" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-2 mb-4">
          <LabelInputContainer className="">
            <Input id="email" type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required placeholder="Your Email" />
          </LabelInputContainer>

          <LabelInputContainer>
                    <PhoneInput
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="flex-1"
                      name="phoneNumber"
                    />
          </LabelInputContainer>

          
          </div>


          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Input id="firstname"  placeholder="First Name" type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Input id="lastname" placeholder="Last Name" type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <Dropdown className='w-full'>
                <DropdownTrigger placeholder='Monthly Budget' >
                    <Label>Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent>
                
                    <DropdownItem value="750">Under $750</DropdownItem>
                    <DropdownItem value="1500">$750 to $1,500</DropdownItem>
                    <DropdownItem value="5000">$1,500 to $5,000</DropdownItem>
                    <DropdownItem value="10000">$5000 to $10,000</DropdownItem>
                    <DropdownItem value="25000">$10,000 to $25,000</DropdownItem>
                    <DropdownItem value="50000">$25,000 to $50,000</DropdownItem>
                </DropdownContent>
            </Dropdown>

            <Dropdown className='w-full'>
                <DropdownTrigger  placeholder='Monthly Team Size'>
                    <Label>Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent>
                    <DropdownItem value="0">I don't have marketing team</DropdownItem>
                    <DropdownItem value="1">1 Person</DropdownItem>
                    <DropdownItem value="2">2-5 People</DropdownItem>
                    <DropdownItem value="6">6-10 People</DropdownItem>
                    <DropdownItem value="10">10+ People</DropdownItem>
                </DropdownContent>
            </Dropdown>
          </div>


          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <Dropdown className='w-full'>
                <DropdownTrigger placeholder='Business Type' >
                    <Label>Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent>
                
                    <DropdownItem value="Ecommerce">Ecommerce</DropdownItem>
                    <DropdownItem value="Professional Services">Professional Services</DropdownItem>
                    <DropdownItem value="SaaS">SaaS</DropdownItem>
                    <DropdownItem value="Other">Other</DropdownItem>
                </DropdownContent>
            </Dropdown>

            <Dropdown className='w-full'>
                <DropdownTrigger  placeholder='Industry'>
                    <Label>Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent>
                    <DropdownItem value="Art & Entertainment">Art & Entertainment</DropdownItem>
                    <DropdownItem value="Attorneys, Laws & Legal">Attorneys, Laws & Legal</DropdownItem>
                    <DropdownItem value="Automotive">Automotive</DropdownItem>
                    <DropdownItem value="Education, Coaching & Instruction">Education, Coaching & Instruction</DropdownItem>
                    <DropdownItem value="Finance, Banks, Investments & Accounting">Finance, Banks, Investments & Accounting</DropdownItem>
                    <DropdownItem value="Marketing, Advertising, PR & Digital Services">Marketing, Advertising, PR & Digital Services</DropdownItem>
                    <DropdownItem value="Other">Other</DropdownItem>
                </DropdownContent>
            </Dropdown>
          </div>

          <Dropdown className='w-full mb-4'>
                <DropdownTrigger placeholder='Your Urgency for hiring help' >
                    <Label>Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent>
                
                    <DropdownItem value="I Need Help IMMEDIATELY">I need help immediately</DropdownItem>
                    <DropdownItem value="I Need to start working on this quarter">I Need to start working on it this quarter</DropdownItem>
                    <DropdownItem value="I Have 6 months to decide">I Have 6 months to decide</DropdownItem>
                    <DropdownItem value="I Have more than A year">I Have more than a year</DropdownItem>
                    <DropdownItem value="Not a Priority">Not a Priority</DropdownItem>
                </DropdownContent>
            </Dropdown>

        
          

          

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-neutral-400 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] report-page-submit-btn"
            onClick={() => setIsPopupOpen(true)}
            type="button"
          >
            Send the Report &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />

          
        </form>
            
        </div>
          
          

          : (
                <div className="fixed inset-0 flex items-center justify-center pt-[20%] md:pt-[0%] h-[100vh] popup-z-index">
                  <div className="report-popup" >
                    <div className="bg-blur rounded-2xl flex-col text-center items-center h-[50vh] ">
                      <button
                        onClick={() => setIsPopupOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                      >
                        <IoMdCloseCircle className="text-4xl text-white"/>
                      </button>
                      <div className="flex-col">
                    
                        <h2 className="service-page-popup-head mt-6 mb-6">Your SEO Analysis Report is on the Way to {formData.email}</h2>
                        <p className='report-popup-para'>Thank you for submitting your website URL for analysis! Our advanced SEO tools are crunching the data to provide you with actionable insights to optimize your site.</p>

                        <Link href="/"><button className='report-popup-button' type="button">Back to Home</button> </Link>

                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          </AuroraBackground>
          <Footer />
        </div>
      </>
    );
}

export default Report



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