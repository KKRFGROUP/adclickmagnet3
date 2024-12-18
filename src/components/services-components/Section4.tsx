import React from 'react'
import "./components.css";

function Section4({content , roundb}: {content: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]}; roundb?: string;}) {
  return (
    <div className={` flex-col justify-center items-center text-center services-secs-main-container services-sec4-main-container ${roundb}`}>
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.head}</h2>
        <p className="services-secs-content-para" >{content.para}</p>
        <div className="flex justify-center flex-wrap mt-[60px] services-sec4-content-cards">
            {content.cards.map((each, index) => (
                <div key={index} className={`m-4  text-left ${index%2==1 ? "services-sec4-content-card-right" : "services-sec4-content-card"}`} >
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