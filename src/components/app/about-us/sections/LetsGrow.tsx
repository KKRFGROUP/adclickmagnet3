"use client"
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import React, { Suspense, useEffect, useState, useRef }  from 'react'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
import { Canvas,useFrame } from "@react-three/fiber";
import Cube2 from '@/components/3dmodels/Cube2';
import { Input, Label,PhoneInput } from '@/components/ui/Form';
import { cn } from "@/lib/utils";
import { IoMdCloseCircle } from "react-icons/io";
import "@/components/services-components/components.css";
import { useRouter } from "next/navigation";
import { Group } from 'three';


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




const words = [
  { 
    text: "Let's",
    className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
  },
    { 
        text: "Grow",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    
];

const AutoRotate = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Cube2 />
    </group>
  );
};


function LetsGrow() {
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
        }
    }, [windowWidth])
  return (
    <div className='lets-grow-main-container'>
        <div className="lets-grow-head">

            <TypewriterEffect className='impact-matric-head'  words={words}/>
        </div>
        <div className="about-lets-model">
            <Canvas camera={{ position: [windowWidth <= 768 ? 20 : 10, 0, 5], fov: 25 }}>
                <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 2, 5]} />
                {windowWidth <= 768 ? (<AutoRotate />) : (<>
                  <Cube2 />
                  <OrbitControls 
                      enableZoom={false} 
                      />
                  </>
                  )}
                
                </Suspense>
            </Canvas>
        </div>
        <div className="flex justify-center items-center  lets-grow-btn-card">
        <button onClick={() => setIsPopupOpen(true)} type="button" className='lets-grow-btn'>GET STARTED •</button>
        </div>
        {/* Popup Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black flex items-center justify-center pt-[20%] md:pt-[7%] h-[100vh] popup-z-index">
                  <div className="service-page-popup" >
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

    </div>
  )
}

export default LetsGrow