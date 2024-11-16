"use client";
import { useState } from "react";
import React from 'react';
import Link from 'next/link';
import { Input, Label } from './ui/Form';
import { cn } from "@/lib/utils";
import { FaInstagram, FaFacebook  } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
    <div className="footer-container-1">
      <div className="flex justify-between footer-container-1-head-form">
        <div className="footer-content flex-col justify-between">
          <h2 className="footer-head">See how we can help<br /> your business grow with<br /> digital marketing</h2>
          <p className='avg-para'><span className='six'>6.<span className='seven'>7</span></span>
          / Average ROAS</p>
          <p className="footer-para">across our 100+ Global<br /> Clients on SEO, PPC & Social</p>
        </div>
        <SignupFormDemo />
      </div>
    </div>
    <div className="footer-container-2">
        <h2 className="solutions" >SOLUTIONS</h2>
        <div className="solution-paras flex flex-wrap justify-between">
          <Link href="web-development" className="solution-para"><p >Web Development</p></Link>
          <Link href="google-ads" className="solution-para"><p >Google Ads</p></Link>
          <Link href="seo" className="solution-para"><p >SEO</p></Link>
          <Link href="graphic-design" className="solution-para"><p >Graphic Design</p></Link>
          <br />
          <br />
          <Link href="ad-creative" className="solution-para"><p >Ad Creative</p></Link>
          <Link href="motion-design" className="solution-para"><p >Motion Design</p></Link>
          <Link href="video-production" className="solution-para"><p >Video Production</p></Link>
          <Link href="presentation-design" className="solution-para"><p >Presentation Design</p></Link>
          
          <br />
          <br />
        </div>
        
        <hr className='solution-gap-line'/>

        <div className="flex justify-between lg:px-10 pt-3 footer-links">
          <Link href="/" className='solution-page-link'>Press Release</Link>
          <Link href="/" className='solution-page-link'>Blog</Link>
          <Link href="/" className='solution-page-link'>Careers</Link>
          <Link href="/" className='solution-page-link'>Case Studies</Link>
          <Link href="/" className='solution-page-link'>Awards</Link>
          <Link href="/contact-us" className='solution-page-link'>Contact</Link>
        </div>

        <hr className="solution-gap-line" />
      
        <div className="term-and-condition-cont flex justify-between items-center">
          <div className="term-and-condition-content flex items-center gap-6">
            <p>© 2024
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
    </>
  );
};





export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatus("Failed to submit form.");
      }
    } catch (error) {
      setStatus("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="max-w-md w-full  rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      We’re here to help you grow
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and explore how our digital marketing team can contribute to your success.
      </p>

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
            onChange={handleChange} placeholder="+911234567889" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Drop a Message</Label>
          <Input id="message" type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required placeholder="What can we help you with?" />
        </LabelInputContainer>
        

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
  );
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



