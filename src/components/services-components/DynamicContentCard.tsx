import React, { useState } from 'react'
import { Spotlight } from "../ui/Spotlight";


function DynamicContentCard({content} : {content: {id: number; title: string; logo: React.ReactNode; para: string;}[]}) {
    const [active, setActive] = useState(1);
    const activeCard = content[active -1];
  return (
      <div className="h-[120vh] w-full rounded-[50px] flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:right-60 md:-top-20"
            fill="white"
          />
        <div className="services-secs-main-container dark:bg-black dark:text-white  flex-col justify-center items-center text-center">
        <h2 className="services-secs-head mb-5">How Do Google Ads Campaign Management Services Work?</h2>

        <div className="dynamic-content-card flex">
            <div className="dynamic-content-card-left overflow-y-hidden rounded-l-[50px]">
                <ul className='p-0 list-decimal'>
                    {content.map(each => (
                        <li key={each.id} className={`text-2xl mb-9 ${active=== each.id? "active-para": ""}`} onClick={() => setActive(each.id)} >{each.title}</li>
                    ))}
                </ul>
            </div>
            <div className="dynamic-content-card-right rounded-r-[50px] h-full flex-col justify-center items-center">
                {activeCard.logo}
                <p className="services-secs-content-para dark:text-white text-left mt-9">{activeCard.para}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DynamicContentCard