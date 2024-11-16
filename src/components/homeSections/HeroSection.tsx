

import "../../components/app.css";
import Link from "next/link";
//import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../Navbar";
import HeroModel from "../3dmodels/HeroModel";


export default function HeroSection() {
    
    return (
        <div>
            <HeroModel />
            <header>
                <Navbar />
            </header>

            <div className="flex flex-col justify-center absolute hero-content">
                <TextGenerateEffect color={"inner-color-title"} words={"Drive More Growth"}  />
                <TextGenerateEffect color={"inner-color-title"} words={"Digital Marketing"}  />
                <br />
                <br />
                    <Link href="/">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="text-center dark:bg-black bg-white text-black dark:text-white flex items-center "
                    >
                        
                        <span>All Case Studies</span>
                        <FaArrowRightLong />
                        </HoverBorderGradient>
                    </Link>
            </div>
            
        </div>
        );
    }
            

        