"use client";

import React, { useRef, useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '../../../components/services-components/components.css';
import '../style.css';
import './style.css';
import { GrDocumentText } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { Input, Label, PhoneInput } from '@/components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter, useParams } from "next/navigation";

interface CareerApiResponse {
  status: string;
  message: string;
  data: {
    id: number;
    title: string;
    slug: string;
    department: string;
    location: string;
    employment_type: string;
    description: string;
    requirements: string;
    benefits: string;
    application_deadline: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    meta_title: string | null;
    meta_description: string | null;
    featured_image: string | null;
    salary_range: string | null;
    contact_email: string | null;
    apply_url: string | null;
  };
}

function CareerSlug() {
  const router = useRouter();
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [careerData, setCareerData] = useState<CareerApiResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    linkedin: "",
    location: ""
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [status, setStatus] = useState({ message: "", isError: false });
  const params = useParams();
  const slug = params?.slug as string | undefined; // Get the slug from the router params (for app directory)

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`https://api.adclickmagnet.us/api/career/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CareerApiResponse = await response.json();
        setCareerData(data.data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchCareer();
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: "Submitting...", isError: false });
    router.push("/career/thank-you");
    // ... (Your actual form submission logic here)
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

  if (loading) {
    return <div>Loading career details...</div>;
  }

  if (error) {
    return <div>Error loading career details: {error}</div>;
  }

  if (!careerData) {
    return <div>Could not find career details.</div>;
  }

  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
      <div ref={pageMainRef} className='page-main'>
        <div className="career-slug-hero" style={{ backgroundImage: `url("/images/background images/career-slug-page-bg.webp")`, backgroundSize: "cover" }}>
        </div>
        <div className="career-slug-hero-content">
          <h1 className="career-slug-hero-content-head">Be Part of Our Dynamic Team</h1>
          <p className="career-slug-hero-content-para">At our company, we empower every team member to excel, innovate, and make a meaningful impact.</p>
        </div>

        <div className="career-current-openings">
          <div className="career-current-openings-flex">
            <div className="career-slug-job-details-left">
              <h2 className="career-slug-job-details-left-head">{careerData.title}</h2>
              <p className="career-current-opening-list-item-left-para">DEPARTMENT: {careerData.department}</p>
              <p className="career-current-opening-list-item-left-para">EMPLOYMENT TYPE: {careerData.employment_type}</p>
              <p className="career-current-opening-list-item-left-para">LOCATION: {careerData.location}</p>
              {careerData.salary_range && (
                <p className="career-current-opening-list-item-left-para">SALARY: {careerData.salary_range}</p>
              )}
            </div>

            <div className="career-current-opening-list">
              <h2 className="career-slug-job-details-right-head">Job Description</h2>
              <p className="career-slug-job-details-right-para">{careerData.description}</p>
              <hr className="career-current-opening-list-item-line mb-5" />

              <div className="flex items-center gap-[10px]">
                <GrDocumentText />
                <h2 className="career-slug-job-details-right-head">Requirements:</h2>
              </div>
              <p className='p-0 mb-3 mt-3'>{careerData.requirements}</p>
              <hr className="career-current-opening-list-item-line mb-5" />

              {careerData.benefits && (
                <>
                  <div className="flex items-center gap-[10px]">
                    <GiSkills />
                    <h2 className="career-slug-job-details-right-head">Benefits:</h2>
                  </div>
                  <p className='p-0 mb-3 mt-3'>{careerData.benefits}</p>
                  <hr className="career-current-opening-list-item-line mb-5" />
                </>
              )}

              <button onClick={() => setIsPopupOpen(true)} type="button" className="service-hero-sec-content-button dark:bg-black dark:text-white mt-5" style={{ width: "150px" }}>Apply Now</button>
            </div>
          </div>

          {isPopupOpen && (
            <div className="career-popup-container">
              <div className="career-apply-popup">
                <div className=" rounded-2xl flex-col">
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="absolute top-4 right-4 text-black hover:text-gray-700"
                  >
                    <IoMdCloseCircle className="text-4xl text-black" />
                  </button>

                  <h2 className="service-page-popup-head career-popup-head">APPLY FOR YOUR DREAM JOB!</h2>

                  <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                      <LabelInputContainer>
                        <Label className="dark:text-black" htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="First Name" type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required />
                      </LabelInputContainer>
                      <LabelInputContainer>
                        <Label className="dark:text-black" htmlFor="lastname" >Last name</Label>
                        <Input id="lastname" placeholder="Last Name" type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required />
                      </LabelInputContainer>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                      <LabelInputContainer className="mb-4">
                        <Label className="dark:text-black" htmlFor="email" >Email Address</Label>
                        <Input id="email" type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required placeholder="Your Email" />
                      </LabelInputContainer>

                      <LabelInputContainer className="mb-4">
                        <Label className="dark:text-black" htmlFor="phoneNumber">Phone Number</Label>
                        <PhoneInput
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className="flex-1"
                          name="phoneNumber"
                        />
                      </LabelInputContainer>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                      <LabelInputContainer className="">
                        <Label className="dark:text-black" htmlFor="linkedin">Linkedin Profile</Label>
                        <Input id="linkedin" type="text"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          required placeholder="Enter Linkedin Profile URL" />
                      </LabelInputContainer>
                    </div>

                    <LabelInputContainer className="mb-4">
                      <Label className="dark:text-black" htmlFor="location">Your Current Location</Label>
                      <Input id="location" type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required placeholder="Your Current Location" />
                    </LabelInputContainer>

                    <div className="drag-and-drop-container mb-4">
                      <div
                        className={`drag-area ${dragActive ? "active" : ""}`}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                      >
                        <p>
                          {uploadedFile
                            ? uploadedFile.name
                            : "Drag and drop your file here or click to upload"}
                        </p>
                        <Input
                          id="fileUpload"
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>

                    {status.message && (
                      <div className={`mb-4 p-4 rounded ${status.isError ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'}`}>
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
        <Footer />
      </div>
    </>
  );
}

export default CareerSlug;

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);