import React from 'react'
import Image from 'next/image';
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { IoMdCheckmark } from "react-icons/io";



function Section3({content, order, roundb, hide}: {content: {mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;}; order?: string;roundb?: string;hide?: string;}) {
    const lines = content.para2.split('\n');
    
    
  return (
    <div id="service-section3" className={` pt-[130px]   flex justify-between services-sec3-flex-main-component ${roundb}`}>
       <div className={` services-sec3-content ${order}`}>
            <p className='services-secs-main-para'>{content.mainpara}</p>
            <div className=' mt-7 mb-9'>
                <TypewriterEffect className="services-secs-head" words={content.heading} />
            </div>
            <p className="services-secs-content-para">{content.para1}</p>
            <br />
            <p className="services-secs-content-para">
                {lines.map((line, index) => (
                    <span key={index}>
                    {line}
                    <br />
                    </span>
                ))}
            </p>
            <div className={`flex flex-wrap items-center mt-5 gap-5 ${hide}`} >
                <div className='services-sec3-content-features flex justify-center items-center'>
                    Cost-effective
                    <IoMdCheckmark />
                </div>
                <div className='services-sec3-content-features flex justify-center items-center'>
                    Hassle-free
                    <IoMdCheckmark />
                </div>
                <div className='services-sec3-content-features flex justify-center items-center'>
                    Efficiency-driven
                    <IoMdCheckmark />
                </div>
            </div>
       </div>

       <Image className="services-sec3-img" src={content.image} alt="sec3-img" height={300} width={300} />
    </div>
  )
}

export default Section3