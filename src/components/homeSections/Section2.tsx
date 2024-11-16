

import Image from "next/image";
import adclickImage from "../../public/images/logo/adclickmagnetlogoblacklogo.png"

import { TypewriterEffect } from "../ui/TypewriterEffect";
 

const words = [
    {
      text: "Bondless",
      className:"text-3xl tracking-wide leading-normal",
    },
    {
      text: "Talents",
      className:"text-3xl",
    },
    {
      text: "One",
      className:"text-3xl",
    },
    {
      text: "Team",
      className:"text-3xl",
    },
    {
      text: "ACM.",
      className: "text-grey dark:text-grey text-3xl",
    },
  ];

export default function Section2() {
    
    return (
      <>
      <div className="Companies-partner flex-col items-center">
        <h2 className="partner-not-ventor">A PARTNER, NOT<br /> A VENDOR</h2>
        <div className="flex items-center flex-wrap">

        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/meta-partner.svg" width={90} height={90} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/google-cloud.svg" width={90} height={90} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/google-partner.svg" width={90} height={90} alt="company logo"  />
        <Image className="sec2-company-logo hidden lg:block" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/tiktok.svg" width={90} height={90} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/shopify.svg" width={90} height={90} alt="company logo"  />
        </div>
      </div>  
        <div className="sec2-container">
            <Image width={200} height={200} src={adclickImage} alt="acmlogo" className="sec-2company-logo relative "/>
            
            <TypewriterEffect className="sec2-head" words={words} />
        </div>
      </>
    )
}

// text hover animation
//<div className="text-area">Bondless Talents One Team Acm</div>
//<div className="text-area-hover">Bondless Talents One Team Acm</div>