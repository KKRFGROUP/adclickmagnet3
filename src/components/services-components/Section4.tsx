import React from 'react'
import "./components.css";
import { TypewriterEffect } from "../ui/typewriter-effect";

function Section4({content , roundb}: {content: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]}; roundb?: string;}) {
  return (
    <div className={`services-secs-main-container h-[150vh] flex-col justify-center items-center text-center ${roundb}`}>
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.head}</h2>
        <p className="services-secs-content-para" >{content.para}</p>
        <div className="flex flex-wrap mt-[60px]">
            {content.cards.map((each, index) => (
                <div key={index} className="m-4 w-[30%] text-left">
                    <div  className="services-sec4-card-logo flex justify-center items-center">
                        {each.logo}
                    </div>
                    <h2 className='services-sec4-card-head'>{each.head}</h2>
                    <p className="services-sec4-card-para">{each.para}</p>
                    <hr  className="services-sec4-card-line"/>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Section4