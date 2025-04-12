"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section2 from '@/components/services-components/Section2';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section6 from '@/components/services-components/Section6';
import Section7 from '@/components/services-components/Section7';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';
import Cards3dSections from '@/components/services-components/Cards3dSections';

//logos
import { TbListSearch } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { GiOnTarget } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import {SiMicrostrategy } from "react-icons/si";


//logos
import { IoMdAnalytics } from "react-icons/io";
import { SiPivotaltracker } from "react-icons/si";
import { FcAdvertising } from "react-icons/fc";
import { SiTestcafe } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";


//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';
import DynamicContentCard from '@/components/services-components/DynamicContentCard';

const heroContent = {
    heading: "Google Ads Services",
    para: "Since 2004, we’ve been a paid search marketing agency focused on Google Ads management – our services boosting paid search conversions by more than 485%. We’ll apply proven Ads management strategies to your campaign – increasing conversions and eliminating wasted spend!",
}
const section2 = [
  {
    id: 1,
    imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/Smokey.webp",
    customer: "Smokey",
    industry: "Restaurant"
  },
  {
      id: 2,
      imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/Blinds.webp",
      customer: "Blinds",
      industry: "Interior"
  },
  {
      id: 3,
      imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/PGroomer.webp",
      customer: "PGroomer",
      industry: "Tools..."
  },
  {
    id: 4,
    imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/Silsi.webp",
    customer: "Silsi",
    industry: "Restaurant"
  },
  {
    id: 5,
    imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/IQ%20Home%20Care.webp",
    customer: "IQ Home Care",
    industry: "Cleaning..."
  },
  
  {
      id: 6,
      imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/Canada%20View.webp",
      customer: "Canada View",
      industry: "Cleaning..."
  },
  {
      id: 7,
      imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/Jen%20Thomson.webp",
      customer: "Jen Thomson",
      industry: "Realtor..."
  },
  {
    id: 8,
    imgUrl: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/company/DonGon.webp",
    customer: "DonGon",
    industry: "Restaurant"
  },
]


const section3 = {
    mainpara: "OPTIMIZED FOR GROWTH, VISIBILITY & ROI",
    heading: [
      {  
        text: "Google",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Ads",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Solutions",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {   
        text: "that",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Drive",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "Results",
        className: "text-black dark:text-white-500 tracking-wider",
      },
    ],
    para1: "In a competitive digital landscape, targeted Google Ads can elevate your brand’s visibility and drive high-quality traffic to your website. Our tailored Google Ads services help you reach the right audience effectively and maximize your ROI.",
    para2: "Our team of certified Google Ads specialists provides end-to-end solutions, from keyword research and ad creation to performance tracking and optimization, ensuring you achieve the best possible outcomes for your ad spend.",
    image: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/google%20ads%20sec3%20img.webp"
  };
  


const section4 = {
    mainpara: "MULTIFACETED SOLUTIONS",
    head: "Our Google Ads experts will ensure the success of your paid search campaigns.",
    para: "At ACM, we manage your Google Ads account with precision, targeting the keywords and strategies that convert leads into loyal customers. Through in-depth keyword research, competitor analysis, and data-driven optimizations, we build campaigns that maximize your ROI and support your business goals.",
    cards: [
      {
        logo: <TbListSearch className='text-3xl' />,
        head: "Keyword Research & Competitor Ads Analysis",
        para: "Choosing the right keywords is key to success. We’ll research keywords and competition to create a Google Ads campaign that boosts sales and ensures a positive ROI."
      },
      {
        logo: <FaRegEdit className='text-3xl' />,
        head: "Campaign Creation & Ad Copy Creation",
        para: "We'll set up your Ads campaign, create ad copy, and configure all settings. Multiple ad variations will be created and modified to achieve the highest conversion rates possible."
      },
      {
        logo: <HiDocumentReport className='text-3xl' />,
        head: "Detailed Reporting & Team Meetings",
        para: "Each month, we will deliver a comprehensive report on campaign performance and arrange review meetings to discuss strategies and continuous improvements."
      },
      {
        logo: <GiOnTarget className='text-3xl' />,
        head: "Audience Targeting & Remarketing",
        para: "We fine-tune audience targeting to reach the right people and set up remarketing strategies to re-engage users, maximizing conversions from every interaction."
      },
      {
        logo: <GrOptimize  className='text-3xl' />,
        head: "Conversion Tracking & Optimization",
        para: "Implement robust tracking tools to monitor conversions and optimize campaigns, ensuring continuous improvements in performance and ROI across all ads."
      },
      {
        logo: <SiMicrostrategy className='text-3xl' />,
        head: "Performance Analysis & Strategy Adjustments",
        para: "Analyze campaign data to assess results and make strategic adjustments, ensuring ad spend is optimized and aligned with your business objectives."
      },
    ]
  };
  



const section6 = { 
    mainpara: "PLATFORM PROFICIENCY",
    heading: [
      {
        text: "In-depth",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Google Ads",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "platform",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "expertise",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "for",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "maximum",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "ROI",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para: "Achieving success with Google Ads requires expertise across multiple tools and platforms. Our team leverages a wide array of specialized software to deliver impactful results, ensuring your campaigns are optimized for performance, reach, and conversions.",
    social: [
      {
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/icons8-google-ads.svg",
        name: "Google Ads Manager",
        para: "Optimize campaigns with Google Ads Manager to reach the right audience and maximize ad spend."
      },
      {
        img: "/images/services page/google ads/tools/02.webp",
        name: "Google Analytics",
        para: "Track campaign performance and user behavior with Google Analytics for data-driven decisions."
      },
      {
        img: "/images/services page/google ads/tools/03.svg",
        name: "Google Tag Manager",
        para: "Track user interactions and manage tags for retargeting and conversion tracking with ease."
      },
      {
        img: "/images/services page/google ads/tools/04.webp",
        name: "Optmyzr",
        para: "Use Optmyzr to automate bid optimization, keyword analysis, and A/B testing for better ads."
      },
      {
        img: "/images/services page/google ads/tools/05.webp",
        name: "ClickCease",
        para: "Protect your ad budget with ClickCease by detecting and stopping click fraud to boost ROI."
      },
    ]
    
};
  
  

const section7 = { 
    mainpara: "FUTURE-READY EFFICIENCY",
    heading: [
      {  
        text: "AI",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "-",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Powered",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "Google",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Ads",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Solutions",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Harness AI to elevate your Google Ads campaigns. Our AI-driven techniques analyze data in real-time, delivering high-quality leads and maximizing ROI.",
    para2: "Our AI-powered approach ensures continuous optimization of your ads for performance, targeting, and efficiency. Stay ahead and achieve outstanding results with our innovative Google Ads solutions.",
    button: "AI-Driven G.A. Service"
  };
  

  const section3dCards: { 
    mainpara: string; 
    head: string; 
    cards: { head: string; para: string; img: string; }[] 
  } = {
    mainpara: "WORKING WITH ACM",
    head: "Master Google Ads with our expertise",
    cards: [
      {
        head: "Campaign Strategy",
        para: "Develop customized Google Ads strategies tailored to your business goals, ensuring maximum reach and conversions.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/01.webp"
      },
      {
        head: "Keyword Research",
        para: "Leverage in-depth keyword research to target the right audience and maximize the efficiency of your ad spend.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/02.webp"
      },
      {
        head: "Ad Copy Creation",
        para: "Craft compelling ad copies that engage users, drive traffic, and boost click-through rates across campaigns.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/03.webp"
      },
      {
        head: "Performance Optimization",
        para: "Monitor and optimize ad performance for ROI by analyzing metrics and implementing changes.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/04.webp"
      },
      {
        head: "Remarketing Campaigns",
        para: "Re-engage your audience with strategic remarketing campaigns that increase conversions and brand loyalty.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/05.webp"
      },
      {
        head: "Analytics & Reporting",
        para: "Receive detailed insights and reports to understand your campaign’s performance and make informed decisions.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/googleads/06.webp"
      },
    ]
  };
  

const dynamicContentSec: {heading: string; content: {id: number; title: string; logo: React.ReactNode; para: string;}[]} = {
  heading: "How Do Google Ads Campaign Management Services Work?",
    content: [
      {
        id:1,
        title: "Paid Campaign Analysis & Implementation",
        logo: <IoMdAnalytics className='text-6xl' />,
        para: "With an established Google Ads account, we will analyze historical data to find what performs most favorably and tailor other parts to act similarly. We will then change bidding options, keywords, ad text, and destination links to align with our goals. The goal is to drive as many leads and sales as possible per dollar spent."
        
    },
    {
        id:2,
        title: "Conversion Tracking & ROI Analysis",
        logo: <SiPivotaltracker className='text-6xl' />,
        para: "Our reports show which keywords are creating leads or sales and which are not. We monitor this to be sure we are focusing on the keywords that are working best and targeting specific phrases."
        
    },
    {
        id:3,
        title: "Search Network Advertising",
        logo: <FcAdvertising className='text-6xl' />,
        para: "We monitor your search network advertising progress and engagement to adjust bids, ads, and keywords to reflect best the traffic that will engage most positively on your site."
    
    },
    {
        id:4,
        title: "Ad Variation & Testing",
        logo: <SiTestcafe className='text-6xl' />,
        para: "Multiple ads are tested using A/B testing methods to determine which ads lead to the highest click-through and conversion rates. We will also develop landing pages, copy variations, and test which works best."
    },
    {
        id:5,
        title: "Monthly Maintenance",
        logo: <GrHostMaintenance className='text-6xl' />,
        para: "All aspects of the account will be reviewed each month to determine what areas can be improved and ensure the campaign is running smoothly. Negative keywords and changes to your keywords will continuously improve results."
    },
]
}
  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your Google Ads success",
    cards: [
      {
        title: "CAMPAIGNS MANAGED",
        count: "10000+",
        para: "Google Ads campaigns managed for clients across diverse industries."
      },
      {
        title: "TOTAL CLIENTS",
        count: "900+",
        para: "Clients who have entrusted us with their Google Ads strategy and management."
      },
      {
        title: "AD SPEND MANAGED",
        count: "150000+",
        para: "Total ad spend managed to drive optimal results and maximize ROI."
      },
      {
        title: "CLIENT SATISFACTION 5/5",
        count: "4",
        para: "Average client satisfaction rating for Google Ads campaigns."
      },
    ]
};
  
  
const faq = { 
    mainpara: "Google Ads Service FAQs",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/john%20doe.webp",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/robert%20johnson.webp",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/jane%20smith.webp",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/emily%20davis.webp",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/tyler%20durden.webp",
      },
      {
        id: 6,
        name: "Dora",
        designation: "The ad expert",
        image:
          "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/adcreative/dora%20explorer.webp",
      },
    ],
    list: [
      {
        id: "1",
        title: "Do you offer Google Ads management services?",
        description: "Yes, ACM specializes in managing Google Ads campaigns, from keyword research to ad copy creation and optimization, ensuring your ads reach the right audience and deliver maximum ROI."
      },
      {
        id: "2",
        title: "What makes ACM’s Google Ads services unique?",
        description: "Our approach combines deep industry knowledge, AI-driven optimization, and tailored strategies to achieve high-performance campaigns that drive leads, sales, and brand awareness."
      },
      {
        id: "3",
        title: "Who benefits from Google Ads services?",
        description: "Our services cater to businesses of all sizes, from startups to established enterprises, aiming to increase online visibility and drive qualified traffic through targeted paid search campaigns."
      },
      {
        id: "4",
        title: "Can you help optimize existing Google Ads campaigns?",
        description: "Yes, we specialize in auditing and optimizing existing Google Ads accounts to improve ad performance, increase conversions, and reduce wasted ad spend."
      },
      {
        id: "5",
        title: "What is the average cost for Google Ads management?",
        description: "The cost varies depending on your campaign size, goals, and ad spend. We provide customized quotes based on your requirements, ensuring that you get the best value for your investment."
      },
      {
        id: "6",
        title: "How do you measure success in Google Ads campaigns?",
        description: "We measure success based on key performance indicators (KPIs) like click-through rate (CTR), conversion rate, and cost per acquisition (CPA), ensuring that each campaign aligns with your business objectives."
      },
      {
        id: "7",
        title: "What platforms do you advertise on within Google Ads?",
        description: "We manage campaigns across Google Search, Google Display Network, YouTube, and Google Shopping to maximize reach and engagement for your brand."
      },
      {
        id: "8",
        title: "Why is Google Ads important for my business?",
        description: "Google Ads allows businesses to reach a highly targeted audience at the moment they are searching for your products or services, making it one of the most effective online marketing strategies."
      },
      {
        id: "9",
        title: "Do you provide ongoing support and reporting?",
        description: "Yes, we provide continuous optimization and detailed monthly reports to track your campaign’s performance, with regular meetings to discuss strategy and next steps."
      }
    ]
};
  
  

function GoogleAds() { 
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (arg?: boolean) => {
    setIsOpen(arg ?? !isOpen);

    if (pageMainRef.current) {
      if (!isOpen) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };
  
  return (
    <>
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div ref={pageMainRef} className='page-main'>
          <div className='tracing-beam'>
            <TracingBeam>

                <HeroSection heading={heroContent.heading} para={heroContent.para} />
            
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb='rounded-b-[50px] h-[200vh]'/>
              <Section6 content={section6} />
              <DynamicContentCard content={dynamicContentSec}  />
              <Cards3dSections translate='-55%' responsiveTraslate="-90%" end="+=1000" content={section3dCards} className="rounded-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb='rounded-b-[50px] h-[200vh]'/>
              <Section6 content={section6} />
              <DynamicContentCard content={dynamicContentSec}/>
              <Cards3dSections translate='-83%' end="+=1000" content={section3dCards} className="rounded-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
          </div>
        </div>

    </>
  )
}

export default GoogleAds