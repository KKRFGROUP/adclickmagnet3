import React from 'react'
import { TypewriterEffect } from "../ui/TypewriterEffect";





function Section7({content}: {content: {mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; button: string}}) {
  return (
    <div className="flex justify-center items-center services-sec7-main-container">
        <div className="services-sec7-card" style={{backgroundImage: "url(https://res.cloudinary.com/dgdgrniut/image/upload/v1734714495/Screenshot_2024-12-20_at_10.34.33_PM_am2skb.png)"}}>
            <div className="w-[50%] services-sec7-card-content">

                <p className="services-secs-main-para mb-4">{content.mainpara}</p>
                <TypewriterEffect className="services-secs-head" words={content.heading} />
                <p className="services-sec7-content-para mt-4">{content.para1}</p>
                <br />
                <p className="services-sec7-content-para mb-9">{content.para2}</p>
                <div className="flex items-center">
                    <button type="button" className='book-a-call'>Book a call</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7