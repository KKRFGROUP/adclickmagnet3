import React from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import Image from 'next/image';
import { FaChevronCircleRight,FaChevronCircleLeft } from "react-icons/fa";

const words = [
    { 
        text: "CO-FOUNDER",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    
];
const words2 = [
    { 
        text: "CO-FOUNDER",
        className: "text-white dark:text-white-500 tracking-wider impact-matric-head-1",
    },
    
];

function Founders() {
  return (
    <div className="founders-main-container">
        <div className='cofounder-card'>
            <TypewriterEffect className='impact-matric-head'  words={words2}/>
            <div className="cofounder-img-card">
                <div className="cofounder-img-content">
                    <h2 className='founder-head'>Meet The CO-Founder</h2>
                    <p className='founder-para' >Ad Click Magnet</p>
                </div>
                <Image className="founder-img" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1731761908/Untitled_design_1_yidmus.png" alt="founder" height={600} width={600} />
            </div>
                <div className="cofounder-content-card">
                    <div className="flex items-center gap-3">
                        <h2 className='inspired-us-content-card-head'>Abhi Jain</h2>
                        <FaChevronCircleLeft />
                    </div>
                    <p className="founder-content-para">As the co-founder of adClickMagnet, I am thrilled to be part of a dynamic team that is dedicated to transforming the digital landscape. Our company thrives on creativity, innovation, and an unwavering commitment to delivering exceptional digital services.<br /><br /> We are passionate about helping businesses elevate their online presence, increase their reach, and achieve measurable success.</p>
                </div>
        </div>
        <div className='mb-5'>
            <TypewriterEffect className='impact-matric-head'  words={words}/>
            <div className="founder-img-card">
                <Image className="founder-img" src="https://res.cloudinary.com/dgdgrniut/image/upload/v1731761906/Untitled_design_isejv4.png" alt="founder" height={600} width={600} />
                <div className="founder-img-content">
                    <h2 className='founder-head'>Meet The CO-Founder</h2>
                    <p className='founder-para' >Ad Click Magnet</p>
                </div>
            </div>
            <div className='founder-content-card-flex'>
                <div className="founder-content-card">
                    <div className="flex items-center gap-3">
                        <FaChevronCircleRight />
                        <h2 className='inspired-us-content-card-head'>Aftab</h2>
                    </div>
                    <p className="founder-content-para">As the founder of adClickMagnet, I am proud to lead a company that is driven by creativity, innovation, and a passion for digital excellence.<br /><br /> Our mission is to empower businesses with cutting-edge digital solutions that not only enhance their online presence but also drive growth and engagement. We believe that every brand has a unique story to tell, and our team is here to help you tell it in the most impactful way possible.</p>
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default Founders