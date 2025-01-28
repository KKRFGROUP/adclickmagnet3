import React from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import Image from 'next/image';
import { FaChevronCircleRight,FaChevronCircleLeft } from "react-icons/fa";

const words = [
    { 
        text: "Words",
        className: "text-white dark:text-white-500 tracking-wider words-from-our-founders",
    },
    { 
        text: "from",
        className: "text-white dark:text-white-500 tracking-wider words-from-our-founders",
    },
    { 
        text: "Our",
        className: "text-white dark:text-white-500 tracking-wider words-from-our-founders",
    },
    { 
        text: "Founders",
        className: "text-white dark:text-white-500 tracking-wider words-from-our-founders",
    },
    
];


function Founders() {
  return (
    <div className="founders-main-container">
        <div className='founder-card'>
            <TypewriterEffect className='impact-matric-head'  words={words}/>
            <div className="founder-img-cards">
                <div className='founder-img-card'>
                    <Image className="founder-img" src="/images/founders/abhi jain.webp" alt="founder" height={600} width={600} />
                    <div className="founder-content-card">
                        <div className="flex items-center gap-3 mb-3">
                            <FaChevronCircleRight />
                            <h2 className='inspired-us-content-card-head'>Abhi Jain</h2>
                        </div>
                        <p className="founder-content-para">As the founder of adClickMagnet, I am thrilled to be part of a dynamic team that is dedicated to transforming the digital landscape. Our company thrives on creativity, innovation, and an unwavering commitment to delivering exceptional digital services.<br /><br /> We are passionate about helping businesses elevate their online presence, increase their reach, and achieve measurable success.</p>
                    </div>
                </div>
                <div className="founder-img-card items-end">
                    <Image className="founder-img" src="/images/founders/aftab khan.webp" alt="founder" height={600} width={600} />
                    {/*<Image className="founder-img " src="https://res.cloudinary.com/dgdgrniut/image/upload/v1731761906/Untitled_design_isejv4.png" alt="founder" height={600} width={600} />*/}
                    <div className="founder-content-card items-end text-right">
                        <div className="flex items-center justify-end gap-3 mb-3">
                            <h2 className='inspired-us-content-card-head'>Aftab Khan</h2>
                            <FaChevronCircleLeft />
                        </div>
                        <p className="founder-content-para">As the founder of adClickMagnet, I am proud to lead a company that is driven by creativity, innovation, and a passion for digital excellence.<br /><br /> Our mission is to empower businesses with cutting-edge digital solutions that not only enhance their online presence but also drive growth and engagement. We believe that every brand has a unique story to tell, and our team is here to help you tell it in the most impactful way possible.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Founders