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
    <div className="flex justify-between items-start faq-container">
       <div className="w-[50%] faq-content">
            <p className='services-secs-main-para'>{content.mainpara}</p>
            <div className='w-[35vw] mt-7 mb-9 faq-content-head'>
                <TypewriterEffect className="services-secs-head" words={words1} />
            </div>
            <div className='flex justify-center mt-4 mb-7'>

            <AnimatedTooltip items={content.people} />
            </div>
        </div>

        <div className="w-[50%] h-[90%] faq-right-container" style={{color: "#fff"}}>
        <Accordion variant="splitted">
            {content.list.map(each => (
                <AccordionItem className='mb-2 faq-right-content'  key={each.id} aria-label={`Accordion ${each.id}`} title={<span style={{ color: "#fff" }}>{each.title}</span>}>
                    {each.description}
                </AccordionItem>
        ))}
            
            
            
        </Accordion>
        </div>
    </div>
  )
}

export default FAQ


