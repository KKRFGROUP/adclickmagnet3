import Image from "next/image";
import { TypewriterEffect } from "../ui/TypewriterEffect";

const words = [
    {
        text: "The",
    },
    {
      text: "best",
    },
    {
        text: "brands",
    },
    {
      text: "choose",
    },
    {
      text: "ACM",
      className: "text-black dark:text-black tracking-widest leading-normal",
      
    },
  ];

export default function Section7() {
    return (
        <div className="sec7-container flex-col justify-center items-center w-full">
            <TypewriterEffect  words={words} />
            <div className="sec7-logo-container flex justify-between mt-10">
                <Image className="sec7-logo" width={130} height={100} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/jolie-1.svg" alt="company log" />
                <Image className="sec7-logo" width={130} height={100} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/caridad.svg" alt="company log" />
                <Image className="sec7-logo" width={50} height={80} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/F7.svg" alt="company log" />
             
                <Image className="sec7-logo" width={130} height={100} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/Scuola_Logo_OnlyTop-1.svg" alt="company log" />
                <Image className="sec7-logo" width={130} height={100} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/petmania.svg" alt="company log" />
                <Image className="sec7-logo" width={130} height={100} src="https://numerique.vamtam.com/wp-content/uploads/2023/06/tecnologia.svg" alt="company log" />
                                

            </div>
        </div>
    );
}

//<div className="sec7-container">
//            <h1 className="sec7-head text-center">Helping Businesses in <span className="blue-text">200+ Different Industries</span>
//            <br />Reach Their Business Goals</h1>
//            <div className="flex">
//                <div className="sec7-companies-logos flex items-center flex-wrap">
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/O_Reilly_Auto_Parts_Logo.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/Hilton-logo.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/arrowquip_logo_black_vertical.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/bars-leaks-logo_03.png" alt="company" />
//        
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/YMCA_logo_logotype.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/jiffy-lube.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/Hannaford_Brothers_Company-Logo.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/auntie-annes.png" alt="company" />
//        
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/Fujifilm_logo.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/Verizon_2015_logo_-vector.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/Subway-1.png" alt="company" />
//        
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/1200px-Wrangler_Logo.png" alt="company" />
//                    <Image className="company-img" width={120} height={70} src="https://www.webfx.com/wp-content/uploads/2024/07/1280px-Northrop_Grumman.png" alt="company" />
//                </div>
//                <div className="sec7-right-card">
//                    <h2 className="sec7-right-card-head"> <span className="yellow-text">Reach Your Business<br />Goals</span> in 2024 with ACM</h2>
//                    <button className="sec7-right-card-button" type="button">Get a free proposal</button>
//                    <p className="sec7-right-card-para">“ACM has always worked hard to make sure that we’re getting what we need out of the partnership, not just what may seem like the best result”</p>
//                    <span className="sec7-right-card-span">HydroWorx</span>
//                </div>
//            </div>
//        </div>