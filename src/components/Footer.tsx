"use client";

import React, { memo, useState } from 'react';
import Link from 'next/link';
import { Input, Label, PhoneInput } from './ui/Form';
import { cn } from "@/lib/utils";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

// Memoized solution links component


const payNowLink = "https://razorpay.com/";


const SolutionLinks = memo(() => (
  <div className="flex flex-wrap justify-between solution-paras">
    <Link href="web-development" className="solution-para"><p>Web Development</p></Link>
    <Link href="google-ads" className="solution-para"><p>Google Ads</p></Link>
    <Link href="seo" className="solution-para"><p>SEO</p></Link>
    <Link href="graphic-design" className="solution-para"><p>Graphic Design</p></Link>
    <Link href="ad-creative" className="solution-para"><p>Ad Creative</p></Link>
    <Link href="motion-design" className="solution-para"><p>Motion Design</p></Link>
    <Link href="video-production" className="solution-para"><p>Video Production</p></Link>
    <Link href="presentation-design" className="solution-para"><p>Presentation Design</p></Link>
  </div>
));

SolutionLinks.displayName = 'SolutionLinks';

// Memoized footer links component
const FooterLinks = memo(() => (
  <div className="flex justify-between lg:px-10 pt-3 footer-links">
    <Link href="/press-release" className="solution-page-link">Press Release</Link>
    <Link href="/blogs" className="solution-page-link">Blog</Link>
    <Link href="/career" className="solution-page-link">Careers</Link>
    <Link href="/case-studies" className="solution-page-link">Case Studies</Link>
    <Link href={payNowLink} className="solution-page-link">Pay Now</Link>
    <Link href="/contact-us" className="solution-page-link">Contact</Link>
  </div>
));

FooterLinks.displayName = 'FooterLinks';

// Memoized social links component
const SocialLinks = memo(() => (
  <div className="social-media-handles-card flex items-center gap-7">
    <Link href="https://www.instagram.com/adclickmagnet" aria-label="Instagram">
      <FaInstagram className="social-media-handle-logo"/>
    </Link>
    <Link href="https://wa.me/+918800262061" aria-label="WhatsApp">
      <RiWhatsappFill className="social-media-handle-logo"/>
    </Link>
    <Link href="https://www.facebook.com/profile.php?id=61552551834420" aria-label="Facebook">
      <FaFacebook className="social-media-handle-logo"/>
    </Link>
    <Link href="mailto:info@adclickmagnet.com" aria-label="Email">
      <MdAttachEmail className="social-media-handle-logo"/>
    </Link>
  </div>
));

SocialLinks.displayName = 'SocialLinks';

// Form component with optimized state management
function SignupFormDemo() {
  const router = useRouter();
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
  
  // Updated handleChange to handle both regular inputs and phone input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
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
      const response = await fetch('https://api.shareconnection.in/public/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient_email: 'pankajjha0191@gmail.com', // Use the email from the form data
          subject: "AdClickMagnet Inquiry", // You can set a default subject or include it in the form
          body: `
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Email: ${formData.email}
            Phone Number: ${formData.phoneNumber}
            Message: ${formData.message}
          `, // Construct the email body with form data
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data);
        setStatus({ message: "Message sent successfully!", isError: false });
        router.push("/thank-you"); // Redirect on successful submission
      } else {
        console.log("Email sent successfully:", data);
        setStatus({ message: `Failed to send message: ${data.message || 'Something went wrong.'}`, isError: true });
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      setStatus({ message: "Failed to send message. Please try again later.", isError: true });
    }
  };
  

  return (
    <div className="max-w-md w-full rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        We're here to help you grow
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Feel free to reach out through your preferred contact method.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
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

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What can we help you with?"
          />
        </LabelInputContainer>

        {status.message && (
          <div className={cn(
            "mb-4 p-4 rounded",
            status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          )}>
            {status.message}
          </div>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

// Memoized label input container
const LabelInputContainer = memo(({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
));

LabelInputContainer.displayName = 'LabelInputContainer';

// Button gradient effect component
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

// Main Footer component
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="footer-container-1">
        <div className="flex justify-between footer-container-1-head-form">
          <div className="footer-content flex-col justify-between">
            <h2 className="footer-head">
              See how we can help<br /> your business grow with<br /> digital marketing
            </h2>
            <p className='avg-para'>
              <span className='six'>6.<span className='seven'>7</span></span> / Average ROAS
            </p>
            <p className="footer-para">
              across our 100+ Global<br /> Clients on SEO, PPC & Social
            </p>
          </div>
          <div className="footer-mobile-signup-form">
            <SignupFormDemo />
          </div>
        </div>
      </div>

      <div className="footer-container-2">
        <h2 className="solutions">SOLUTIONS</h2>
        <SolutionLinks />
        <hr className='solution-gap-line'/>
        <FooterLinks />
        <hr className="solution-gap-line" />
        
        <div className="term-and-condition-cont flex justify-between items-center">
          <div className="term-and-condition-content flex items-center gap-6">
            <p>© 2025 ACM</p>
            <Link href="/terms-and-conditions"><p>Terms & Conditions</p></Link>
            <Link href="/privacy-policy"><p>Privacy Policy</p></Link>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}