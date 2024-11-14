import React from 'react'
import { TypewriterEffect } from '../ui/TypewriterEffect';
import {Accordion, AccordionItem} from "@nextui-org/accordion";

import { AnimatedTooltip } from "../ui/AnimatedTooltip";




const words1 = [
    { 
      text: "Answers",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "to",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "frequently",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "asked",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "questions",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    
];


function FAQ({content}: {content: {mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]}}) {
  return (
    <div className="p-[90px] h-[150vh] flex justify-between items-start">
       <div className="services-sec3-content w-[50%]">
            <p className='services-secs-main-para'>{content.mainpara}</p>
            <div className='w-[35vw] mt-7 mb-9'>
                <TypewriterEffect className="services-secs-head" words={words1} />
            </div>
            <div className='flex mt-4'>

            <AnimatedTooltip items={content.people} />
            </div>
        </div>

        <div className="faq-right-container w-[50%] h-[90%]">
        <Accordion variant="splitted">
            {content.list.map(each => (
                <AccordionItem className='mb-2'  key={each.id} aria-label={`Accordion ${each.id}`} title={each.title}>
                    {each.description}
                </AccordionItem>
            ))}
            
            
            
        </Accordion>
        </div>
    </div>
  )
}

export default FAQ


//animation card alternative

//<div className="faq-card">
//                <div className='faq-card-inner'>
//                    <Image className='faq-card-inner-img mb-5' src="https://cdn.sanity.io/images/k0dlbavy/production/f4c1cf92a058f2aa534cf36cf25f2ae2d772cc5c-793x240.png?w=960&auto=format&h=291&fit=min" alt="faq" height={300} width={300} />
//                    <p className="faq-card-inner-para text-black font-semibold mb-4 text-2xl">Find the right solution for you now</p>
//                    <button type="button" className='flex items-center justify-center faq-card-inner-button'>Book a quick call
//                        <FaAngleRight />
//                    </button>
//                </div>
//</div>