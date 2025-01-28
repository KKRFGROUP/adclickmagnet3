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
import { SiMicrostrategy } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";


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
    heading: "Meta Ads Services",
    para: "Since 2004, we’ve specialized in Meta Ads (Facebook & Instagram) management, creating targeted campaigns that drive engagement, generate quality leads, and increase conversions. Our proven strategies ensure your ad spend creates maximum impact with minimal waste, helping your business grow efficiently on the world’s leading social platforms.",
}

const section2 = [
  {
    id: 1,
    imgUrl: "/images/companies/Smokey.webp",
    customer: "Smokey",
    industry: "Restaurant"
  },
  {
      id: 2,
      imgUrl: "/images/companies/Blinds.webp",
      customer: "Blinds",
      industry: "Interior"
  },
  {
      id: 3,
      imgUrl: "/images/companies/PGroomer.webp",
      customer: "PGroomer",
      industry: "Tools..."
  },
  {
    id: 4,
    imgUrl: "/images/companies/Silsi.webp",
    customer: "Silsi",
    industry: "Restaurant"
  },
  {
    id: 5,
    imgUrl: "/images/companies/IQ Home Care.webp",
    customer: "IQ Home Care",
    industry: "Cleaning..."
  },
  
  {
      id: 6,
      imgUrl: "/images/companies/Canada View.webp",
      customer: "Canada View",
      industry: "Cleaning..."
  },
  {
      id: 7,
      imgUrl: "/images/companies/Jen Thomson.webp",
      customer: "Jen Thomson",
      industry: "Realtor..."
  },
  {
    id: 8,
    imgUrl: "/images/companies/DonGon.webp",
    customer: "DonGon",
    industry: "Restaurant"
  },
]


const section3 = {
    mainpara: "DRIVEN BY STRATEGY, IMPACT & ROI",
    heading: [
      {  
        text: "Meta",
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
        text: "Deliver",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "Growth",
        className: "text-black dark:text-white-500 tracking-wider",
      },
    ],
    para1: "In today’s social media-driven world, Meta Ads (Facebook & Instagram) offer a powerful way to boost your brand's presence, engage with potential customers, and drive significant business growth. Our customized Meta Ads services ensure that your campaigns reach the right audience for maximum engagement and ROI.",
    para2: "Our team of Meta Ads specialists offers a full range of services, from audience targeting and creative ad design to performance tracking and continuous optimization, ensuring that your ad spend is impactful and efficient for optimal results.",
    image: "/images/services page/meta ads/meta sec3 img.webp"
};


  
const section4 = {
    mainpara: "MULTIFACETED SOLUTIONS",
    head: "Our Meta Ads experts will ensure the success of your social media ad campaigns.",
    para: "At ACM, we manage your Meta Ads accounts with precision, targeting the right audience on Facebook and Instagram. Through in-depth audience analysis, creative ad designs, and data-driven optimizations, we build campaigns that maximize your ROI and support your business goals.",
    cards: [
      {
        logo: <TbListSearch className='text-3xl' />,
        head: "Audience Research & Competitor Ads Analysis",
        para: "Identifying the right audience and analyzing competitors is crucial for success. We'll research audience behavior and competitor strategies to create Meta Ads campaigns that drive sales and ensure a positive ROI."
      },
      {
        logo: <FaRegEdit className='text-3xl' />,
        head: "Campaign Creation & Ad Copy Design",
        para: "We'll set up your Meta Ads campaigns, design compelling ad copy, and optimize ad settings. Multiple creative variations will be tested to achieve the highest conversion rates possible."
      },
      {
        logo: <HiDocumentReport className='text-3xl' />,
        head: "Detailed Reporting & Strategy Sessions",
        para: "Each month, we deliver a comprehensive report on campaign performance and arrange strategy meetings to discuss results and ongoing improvements."
      },
      {
        logo: <GiOnTarget className='text-3xl' />,
        head: "Targeting & Retargeting",
        para: "We fine-tune audience targeting for Facebook and Instagram, using retargeting strategies to reach previous website visitors and maximize conversions."
      },
      {
        logo: <GrOptimize className='text-3xl' />,
        head: "Conversion Tracking & Optimization",
        para: "Implement advanced tracking tools to monitor conversions and optimize Meta Ads campaigns, ensuring continuous improvements in performance and ROI."
      },
      {
        logo: <SiMicrostrategy className='text-3xl' />,
        head: "Performance Analysis & Adjustment",
        para: "We analyze data and campaign performance to make strategic adjustments, optimizing ad spend and aligning campaigns with your business goals."
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
        text: "Meta Ads",
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
    para: "Achieving success with Meta Ads requires expertise across multiple tools and platforms. Our team leverages a wide array of specialized software to deliver impactful results, ensuring your campaigns are optimized for performance, reach, and conversions.",
    social: [
      {
        img: "/images/services page/meta ads/tools/Facebook Ads Manager.webp",
        name: "Facebook Ads Manager",
        para: "Manage and optimize campaigns with Facebook Ads Manager, ensuring every ad reaches the right audience and maximizes your ad spend."
      },
      {
        img: "/images/services page/meta ads/tools/Instagram Ads Manager.webp",
        name: "Instagram Ads Manager",
        para: "Design and manage Instagram ad campaigns to reach a targeted audience and achieve business objectives with visual and creative engagement."
      },
      {
        img: "/images/services page/meta ads/tools/Facebook Pixel.webp",
        name: "Facebook Pixel",
        para: "Track and analyze website interactions to create custom audiences and optimize ad targeting with Facebook Pixel."
      },
      {
        img: "/images/services page/meta ads/tools/Meta Analytics.webp",
        name: "Meta Analytics",
        para: "Monitor campaign performance across Facebook and Instagram with Meta's robust analytics to drive data-driven decisions and optimize strategies."
      },
      {
        img: "/images/services page/meta ads/tools/AdEspresso.webp",
        name: "AdEspresso",
        para: "Enhance your Meta Ads management with AdEspresso, automating campaign A/B testing, optimization, and creative variation management."
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
        text: "Meta",
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
    para1: "Harness AI to elevate your Meta Ads campaigns. Our AI-driven techniques analyze data in real-time, delivering high-quality leads and maximizing ROI across Facebook and Instagram.",
    para2: "Our AI-powered approach ensures continuous optimization of your ads for performance, targeting, and efficiency. Stay ahead and achieve outstanding results with our innovative Meta Ads solutions.",
    button: "AI-Driven Meta Ads Service"
};


  

const section3dCards = { 
    mainpara: "WORKING WITH ACM",
    head: "Master Meta Ads with our expertise",
    cards: [
      {
        head: "Campaign Strategy",
        para: "Develop customized Meta Ads strategies tailored to your business goals, ensuring maximum reach and conversions on Facebook and Instagram.",
        img: "/images/services page/meta ads/3dcards/01.webp"
      },
      {
        head: "Audience Research",
        para: "Leverage in-depth audience research to target the right users on Facebook and Instagram, maximizing the efficiency of your ad spend.",
        img: "/images/services page/meta ads/3dcards/02.webp"
      },
      {
        head: "Ad Copy & Creative Design",
        para: "Create engaging ad copies and visually appealing creatives that resonate with your target audience, boosting interaction and engagement.",
        img: "/images/services page/meta ads/3dcards/03.webp"
      },
      {
        head: "Performance Optimization",
        para: "Continuously monitor and optimize Meta Ads performance by analyzing metrics and implementing data-driven changes to enhance ROI.",
        img: "/images/services page/meta ads/3dcards/04.webp"
      },
      {
        head: "Remarketing Campaigns",
        para: "Re-engage users who have interacted with your ads or website with strategic remarketing campaigns, driving more conversions.",
        img: "/images/services page/meta ads/3dcards/05.webp"
      },
      {
        head: "Analytics & Reporting",
        para: "Receive detailed reports on Meta Ads performance, helping you understand results and make informed decisions for further improvements.",
        img: "/images/services page/meta ads/3dcards/06.webp"
      },
    ]
};

  

const dynamicContentSec = {
  heading: "How Do Meta Ads Campaign Management Services Work?",
  content: [ {
        id: 1,
        title: "Boost ROI with Precision",
        logo: <IoMdAnalytics className='text-6xl' />,
        para: "Take your Meta campaigns to the next level with data-driven strategies designed to maximize returns and minimize costs."
    },
    {
        id: 2,
        title: "Smart Ads, Smarter Results",
        logo: <SiPivotaltracker className='text-6xl' />,
        para: "Unlock the full potential of Meta's platforms with expert campaign management that delivers measurable success."
    },
    {
        id: 3,
        title: "Target Optimize Convert",
        logo: <FcAdvertising className='text-6xl' />,
        para: "Reach the right audience at the right time with finely-tuned Meta ads that drive meaningful engagement."
    },
    {
        id: 4,
        title: "Your Ads, Perfectly Managed",
        logo: <SiTestcafe className='text-6xl' />,
        para: "From strategy to execution, we handle every detail of your Meta campaigns to ensure peak performance."
    },
    {
        id: 5,
        title: "Effortless Growth on Meta",
        logo: <GrHostMaintenance className='text-6xl' />,
        para: "Sit back and watch your business grow as our Meta specialists manage, optimize, and scale your ad campaigns."
    },
]
}


  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your Meta Ads success",
    cards: [
      {
        title: "CAMPAIGNS MANAGED",
        count: "150000+",
        para: "Meta Ads campaigns managed for clients across diverse industries on Facebook and Instagram."
      },
      {
        title: "TOTAL CLIENTS",
        count: "400+",
        para: "Clients who have entrusted us with their Meta Ads strategy and management."
      },
      {
        title: "AD SPEND MANAGED",
        count: "30000+",
        para: "Total ad spend managed across Meta Ads platforms to drive optimal results and maximize ROI."
      },
      {
        title: "CLIENT SATISFACTION",
        count: "390",
        para: "Average client satisfaction rating for Meta Ads campaigns."
      },
    ]
};

  
  
const faq = { 
    mainpara: "Meta Ads Service FAQs",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Senior Meta Ads Specialist",
        image:
          "/images/services page/faq/john doe.webp",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Meta Ads Campaign Manager",
        image:
          "/images/services page/faq/Robert Johnson.webp",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "PPC Strategist",
        image:
          "/images/services page/faq/Jane Smith.webp",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "Meta Ads Analyst",
        image:
          "/images/services page/faq/Emily Davis.webp",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Paid Search Specialist",
        image:
          "/images/services page/faq/Tyler Durden.webp",
      },
      {
        id: 6,
        name: "Dora",
        designation: "Conversion Optimization Expert",
        image:
          "/images/services page/faq/Dora Explorer.webp",
      },
    ],
    list: [
      {
        id: "1",
        title: "Do you offer Meta Ads management services?",
        description: "Yes, we specialize in managing Meta Ads campaigns across Facebook and Instagram, from audience targeting to ad creative optimization, ensuring your campaigns reach the right people and deliver measurable results."
      },
      {
        id: "2",
        title: "What makes ACM’s Meta Ads services unique?",
        description: "Our approach combines in-depth audience research, creative optimization, and continuous performance analysis to ensure that your Meta Ads campaigns achieve optimal results and drive conversions on Facebook and Instagram."
      },
      {
        id: "3",
        title: "Who benefits from Meta Ads services?",
        description: "Our Meta Ads services are ideal for businesses looking to increase their brand visibility, engage with potential customers, and drive conversions through Facebook and Instagram advertising."
      },
      {
        id: "4",
        title: "Can you help optimize existing Meta Ads campaigns?",
        description: "Yes, we conduct thorough audits of your existing Meta Ads campaigns and implement optimization strategies that improve targeting, ad creatives, and overall campaign performance."
      },
      {
        id: "5",
        title: "What is the average cost for Meta Ads management?",
        description: "The cost varies depending on your campaign objectives, target audience, and ad spend. We offer customized pricing tailored to your business goals and budget."
      },
      {
        id: "6",
        title: "How do you measure success in Meta Ads campaigns?",
        description: "Success is measured using key performance indicators (KPIs) such as click-through rates (CTR), conversion rates, cost per conversion, and return on ad spend (ROAS)."
      },
      {
        id: "7",
        title: "What ad formats do you use on Meta Ads?",
        description: "We use a variety of Meta Ads formats, including Carousel Ads, Video Ads, Image Ads, and Collection Ads, depending on your goals and target audience."
      },
      {
        id: "8",
        title: "Why are Meta Ads important for my business?",
        description: "Meta Ads allow you to reach a highly targeted audience on Facebook and Instagram, making it an essential tool for businesses seeking to expand their reach and drive meaningful interactions with their customers."
      },
      {
        id: "9",
        title: "Do you provide ongoing support and reporting?",
        description: "Yes, we provide continuous campaign monitoring, optimization, and monthly reporting to track performance and ensure that your Meta Ads campaigns are always aligned with your business objectives."
      }
    ]
};


  
  

function MetaAds() { 
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
              <Section6 content={section6} translate="-65%" responsiveTranslate="-100%"/>
              <DynamicContentCard content={dynamicContentSec}/>
              <Cards3dSections translate='-50%' end="+=500" content={section3dCards} className="rounded-[50px]"/>
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
              <Section6 content={section6} translate="-60%" responsiveTranslate="-95%"/>
              <DynamicContentCard content={dynamicContentSec}/>
              <Cards3dSections translate='-85%' end="+=900" content={section3dCards} className="rounded-[50px]"/>
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

export default MetaAds