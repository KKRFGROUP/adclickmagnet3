// components/ContactFormComponent.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Input, PhoneInput } from './ui/Form'; // Adjust path based on your project structure
import { cn } from "@/lib/utils"; // Assuming you have this utility for class merging

// Define props interface for the component
interface ContactFormProps {
  apiEndpoint: string; // The API URL to send form data to
  recipientEmail: string; // The email address the form submission should be sent to
  onSuccess?: () => void; // Optional callback for successful submission (e.g., redirect)
  formTitle?: string; // Optional title for the form
  imageSrc?: string; // Optional image for the form card
}

const ContactFormComponent: React.FC<ContactFormProps> = ({
  apiEndpoint,
  recipientEmail,
  onSuccess,
  formTitle = "Let's Build Digital Excellence Together", // Default title
  imageSrc = "/images/slug-page-contact-us.webp", // Default image
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setStatus(null); // Clear previous status

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient_email: recipientEmail,
          subject: `AdClickMagnet Contact Inquiry from ${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ message: result.message || "Form submitted successfully!", isError: false });
        // Clear form fields on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        if (onSuccess) {
          onSuccess(); // Call the success callback provided by the parent
        }
      } else {
        // Handle API errors (e.g., validation errors from Laravel)
        const errorMessage = result.message || "Failed to submit form.";
        setStatus({
          message: errorMessage,
          isError: true,
        });
        console.error("API Error:", result);
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      setStatus({
        message: "An unexpected error occurred. Please try again.",
        isError: true,
      });
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="blog-slug-contact-form-card">
      <div className="blog-slug-contact-form">
        <Image className="blog-slug-contact-form-img" src={imageSrc} alt="contact form img" height={500} width={500} />
        <form onSubmit={handleSubmit} className="blog-slug-contact-form-content">
          <h2 className='blog-slug-contact-form-content-head'>{formTitle}</h2>
          <div className="blog-slug-contact-form-content-label-input">
            <Input id="firstname" placeholder="First Name" type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required />
          </div>
          <div className="blog-slug-contact-form-content-label-input">
            <Input id="lastname" placeholder="Last Name" type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required />
          </div>

          <div className="blog-slug-contact-form-content-label-input">
            <Input id="email" type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required placeholder="Your Email" />
          </div>

          <div className="blog-slug-contact-form-content-label-input">
            <PhoneInput
              value={formData.phoneNumber}
              onChange={(e: { target: { name: string; value: string } }) => {
                setFormData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }));
              }}
              placeholder="Phone Number"
              className="flex-1"
              name="phoneNumber"
            />
          </div>

          <div className="blog-slug-contact-form-content-label-input">
            {/* Changed to textarea for multi-line message input */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="What can we help you with?"
              rows={4} // Added rows for better textarea sizing
              className="flex h-10 w-full border-none bg-zinc-800 dark:bg-zinc-800 py-3 px-4 text-sm placeholder:text-neutral-600 dark:placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 font-sans rounded-md text-black dark:text-white"
            />
          </div>

          {status && (
            <div className={cn(
              "mb-4 p-4 rounded text-center",
              status.isError
                ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
                : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
            )}>
              {status.message}
            </div>
          )}

          <button type="submit" className='blog-slug-contact-form-content-btn' disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormComponent;
