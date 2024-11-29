"use client"

import React, { useState } from 'react'
import Image from "next/image";
import google3dimage from '../../public/images/pngwing.com.png'

function DynamicContentCard({content} : {content: {id: number; title: string; logo: React.ReactNode; para: string;}[]}) {
    const [active, setActive] = useState(1);
    const activeCard = content[active -1];
  return (
        <div className="relative  rounded-[50px] dark:bg-black dark:text-white  flex-col justify-center items-center text-center services-dynamic-main-container">
        <h2 className="services-secs-head mb-5">How Do Google Ads Campaign Management Services Work?</h2>

        <Image alt="google logo" className="dynamic-content-card-right-object" src={google3dimage} height={200} width={200} />
        <div className="dynamic-content-card flex">
            <div className="dynamic-content-card-left  rounded-l-[50px]">
                <ul className='p-0 list-decimal'>
                    {content.map((each,index) => (
                        <div className="mb-9" key={index}>
                            <li key={each.id} className={`dynamic-content-card-left-para ${active=== each.id? "active-para": ""}`} onClick={() => setActive(each.id)} >{each.title}</li>
                            <hr className="dynamic-content-card-left-line"/>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="dynamic-content-card-right rounded-r-[50px] h-full flex-col justify-center items-center">
                {activeCard.logo}
                <p className="services-secs-content-para dark:text-white text-left mt-9">{activeCard.para}</p>
            </div>
        </div>
    </div>
  )
}

export default DynamicContentCard