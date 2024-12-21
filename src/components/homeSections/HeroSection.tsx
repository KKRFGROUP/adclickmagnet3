"use client"

import "../../components/app.css";
//import Link from "next/link";
//import { Button } from "./ui/moving-border";
//import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
//import { FaArrowRightLong } from "react-icons/fa6";

import dynamic from 'next/dynamic';

const HeroModel = dynamic(() => import("../3dmodels/HeroModel"), {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    ),
  });



export default function HeroSection() {
    
    return (
        <div >
            
                <HeroModel />
                    

            <div className="flex flex-col justify-center hero-content">
                <TextGenerateEffect color={"inner-color-title"} words={"Drive More Growth"}  />
                <TextGenerateEffect color={"inner-color-title"} words={"Digital Marketing"}  />
                <br />
                <br />
                    
            </div>
            
        </div>
        );
    }
            

        