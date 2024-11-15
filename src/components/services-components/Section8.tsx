import React from 'react'
import { CardSpotlight } from "@/components/ui/CardSpotlight";

function Section8({content, roundt}: {content: {mainpara: string; heading: string;para?:string; cards: {title: string; count: string; para: string;}[]}; roundt?: string;}) {
  return (
    <div className={`rounded-[50px] flex-col justify-center items-center text-center services-sec8-main-container ${roundt}`}>
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.heading}</h2>
        <p className="services-secs-content-para" >{content.para}</p>
        <div className="flex justify-between flex-wrap mt-[60px] services-sec8-content-cards">
            {content.cards.map(each => (
                <CardSpotlight key={each.title} className="h-96 w-96 text-left services-sec8-card">
                    <p className="services-sec8-card-title font-medium mb-5">{each.title}</p>
                    <h2 className="services-sec8-card-count mb-2 text-6xl font-medium" >{each.count}</h2>
                    <p className="services-sec8-card-para font-light" >{each.para}</p>
                </CardSpotlight>
            ))}
        </div>
    </div>
  )
}

export default Section8

//<div key={each.title} className="services-sec8-card text-left">