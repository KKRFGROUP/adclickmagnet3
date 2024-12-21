"use client"

import React,{useState} from 'react'
import Image from 'next/image';
import "../../analyze.css";
import { Input, Label,DropdownTrigger,Dropdown, DropdownContent,DropdownItem} from '../../../../components/ui/Form';
import { cn } from "@/lib/utils";


function Report() {
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
          console.error(error);
          setStatus({ 
            message: "An error occurred while submitting the form.", 
            isError: true 
          });
        }
      };



  return (
      <div className="analyze-your-web-loader-main-container">
        <div className="backdrop-blur-2xl rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl analyze-your-web-loader">
          <Image 
            src="https://res.cloudinary.com/dgdgrniut/image/upload/v1732186526/adclickmagnetlogoblacklogo_reqzpl.png" 
            alt="analyzer-logo" 
            height={200} 
            width={200}
            priority
          />

        <h1 className="analyze-your-web-report-head">Your report is ready, and we've found many marketing opportunities. Want to learn more?</h1>
        <p className="analyze-your-web-report-para">
          Fill out the form below to receive your results on your email.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="mb-4">
          <Input id="email" type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required placeholder="projectmayhem@fc.com" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Input id="phoneNumber" value={formData.phoneNumber}
            onChange={handleChange} name="phoneNumber" placeholder="+911234567889" type="text" />
        </LabelInputContainer>
        </div>


        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Input id="firstname"  placeholder="Tyler" type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input id="lastname" placeholder="Durden" type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required />
          </LabelInputContainer>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <Dropdown >
            <DropdownTrigger  >
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

        <Dropdown >
            <DropdownTrigger>
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

        <LabelInputContainer className="mb-4">
          <Input id="email" type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required placeholder="projectmayhem@fc.com" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
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