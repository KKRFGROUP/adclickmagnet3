

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

            <div className="hero-content flex flex-col justify-center absolute  h-80">
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
            
/* <div className="flex flex-col space-y-4 text-sm">
                                    
<ProductItem title="design" description="Website Design
Website Redesign
Rapid Web Design
Social Media Design
Ecommerce Website Design
Email Marketing Testing & Design" href="/ui-ux-design" src='https://tse4.mm.bing.net/th?id=OIP.doYHfVKgVncrGIL5jmSOMgHaE8&pid=Api&P=0&h=180'  />
</div> 

*/
        