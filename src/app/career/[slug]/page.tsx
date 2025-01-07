"use client"

import React, { useRef, useState } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '../../../components/services-components/components.css'
import '../style.css'
import './style.css'
import { GrDocumentText } from "react-icons/gr";
import { TbCaretRightFilled } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { Input, Label, PhoneInput} from '@/components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

const content = {
        title: "Laravel Developer",
        experience: [2, 4],
        package: [3.6, 4.8],
        openings: 3,
        location: "Cybercity, gurugram",
        description: "We are looking for a Laravel Developer with a minimum experience of 2 years in website and/or web application development using Laravel. Key role in creating and maintaining Websites based on Laravel, including design, configurations, and customizations.",
        responsbilities: [
            "Designing and building enterprise-level Website based on Laravel.", 
            "Theme customisation.",
            "Excellent experience in API implementation.",
            "Experience with DB architecture MYSQL.",
            "Implementation in Woo-commerce / WordPress custom themes.",
            "HTML, CSS, JavaScript, jQuery, PHP, AJAX, My SQL."
        ],
        skills: [
            "Laravel dev.",
            "PHP, Laravel",
            "CSS, MySQL",
            "Javascript",
            "HTML",
            "JQuery & Ajax."
        ]
}


function CareerSlug() {
  const router = useRouter();
    const pageMainRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

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
              console.log("Form Data:", formData);
              console.log("Uploaded File:", uploadedFile);
              router.push("/career/thank-you");
          
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
        <div className="career-slug-hero" style={{backgroundImage: "url(https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735383745/entrepreneur-593371_jbjpey.jpg)", backgroundSize: "cover"}}>
        </div>
          <div className="career-slug-hero-content">
            <h1 className="career-slug-hero-content-head">Be Part of Our Dynamic Team</h1>
            <p className="career-slug-hero-content-para">At our company, we empower every team member to excel, innovate, and make a meaningful impact.</p>
          </div>

        <div className="career-current-openings">
            <div className="career-current-openings-flex">
              <div className="career-slug-job-details-left">
                <h2 className="career-slug-job-details-left-head">{content.title}</h2>
                <p className="career-current-opening-list-item-left-para">EXPERENCE: {content.experience[0]} - {content.experience[1]} years</p>
                <p className="career-current-opening-list-item-left-para">PACKAGE: {content.package[0]} - {content.package[1]} LPA</p>
                <p className="career-current-opening-list-item-left-para">LOCATION: {content.location}</p>
              </div>

              <div className="career-current-opening-list">
                  <h2 className="career-slug-job-details-right-head">Job Descripton</h2>
                  <p className="career-slug-job-details-right-para">{content.description}</p>
                  <hr className="career-current-opening-list-item-line mb-5" />

                  <div className="flex items-center gap-[10px]">
                    <GrDocumentText />
                    <h2 className="career-slug-job-details-right-head">Responsibilities:</h2>
                  </div>
                  <ul className='p-0 mb-3 mt-3'>
                    {content.responsbilities.map((each,id) => (
                      <li key={id} className="flex items-center mb-1">
                          <TbCaretRightFilled /> {each}
                      </li>
                    ))}
                  </ul>


                  <div className="flex items-center gap-[10px]">
                    <GiSkills />
                    
                    <h2 className="career-slug-job-details-right-head">Skills:</h2>
                  </div>
                  <ul className='p-0 mb-3 mt-3'>
                    {content.skills.map((each,id) => (
                      <li key={id} className="flex items-center mb-1 w-full">
                          <TbCaretRightFilled /> {each}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setIsPopupOpen(true)} type="button" className="service-hero-sec-content-button dark:bg-black dark:text-white mt-5">Apply Now</button>
              </div>
                
            </div>

            {/* Popup Modal */}
        {isPopupOpen && (
        <div className="career-popup-container">
          <div className="career-apply-popup">
            <div className=" rounded-2xl flex-col">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-gray-700"
            >
              <IoMdCloseCircle className="text-4xl text-black"/>
            </button>
            
            <h2 className="service-page-popup-head career-popup-head">APPLY FOR YOUR DREAM JOB!</h2>
            
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label className="dark:text-black" htmlFor="firstname">First name</Label>
                  <Input id="firstname"  placeholder="Tyler" type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label className="dark:text-black" htmlFor="lastname" >Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text"
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
                  required placeholder="projectmayhem@fc.com" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label className="dark:text-black" htmlFor="phoneNumber">Phone Number</Label>
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
              <LabelInputContainer className="">
                <Label className="dark:text-black" htmlFor="message">Drop a Message</Label>
                <Input id="message" type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required placeholder="What can we help you with?" />
              </LabelInputContainer>

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


              {/*<Label className="dark:text-black" htmlFor="dropdown">How did you found us?</Label>
              <Dropdown className='w-full mb-4'>
                <DropdownTrigger placeholder='How did you find out about us?' >
                    <Label className="dark:text-black">Choose an option</Label>
                </DropdownTrigger>
                <DropdownContent className="max-h-60 overflow-y-auto">
              
                  <DropdownItem value="Social Media">Social Media</DropdownItem>
                  <DropdownItem value="Company Website">Company Website</DropdownItem>
                  <DropdownItem value="Job Portal">Job Portal</DropdownItem>
                  <DropdownItem value="Friends">Friends</DropdownItem>
                  <DropdownItem value="Other">Other</DropdownItem>
                </DropdownContent>
              </Dropdown>*/}
              
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

        
        <Footer />
      </div>
    </>
  )
}

export default CareerSlug




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
