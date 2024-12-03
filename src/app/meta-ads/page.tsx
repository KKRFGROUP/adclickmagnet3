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
import { SiGoogleoptimize, SiMicrostrategy } from "react-icons/si";


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
    imgUrl: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const section2 = [
  {
      id: 1,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6WuTXjtoN-PTU45bBM00_Kpcy70O4aKDrA&s",
      customer: "ABB",
      industry: "Robotics"
  },
  {
      id: 2,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZDWl8q0aIfgVqwy9POKEKEsM_D-9b3sdXw&s",
      customer: "Matco Tools",
      industry: "Hardware"
  },
  {
      id: 3,
      imgUrl: "https://c8.alamy.com/comp/PFWB5T/close-up-of-sign-with-logo-on-facade-of-erp-software-company-epicor-in-dublin-california-april-9-2018-PFWB5T.jpg",
      customer: "epicor",
      industry: "Tech"
  },
  {
      id: 4,
      imgUrl: "https://t3.ftcdn.net/jpg/05/58/48/98/360_F_558489893_wSk1j0CxHMMgnFJ1BD1ZkenF2kBcQobJ.jpg",
      customer: "Atlas",
      industry: "Substain..."
  },
  {
      id: 5,
      imgUrl: "https://img.foodprocessing.com/files/base/ebm/foodprocessing/image/2023/09/Pepsico.650cc18c5f449.png?auto=format%2Ccompress&w=640&width=640",
      customer: "Pepsico",
      industry: "Food"
  },
  {
      id: 6,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOo6Qs4bmldUhw7s_yufF3XHwbwK7bRr2pQ&s",
      customer: "Lockheed...",
      industry: "Defence"
  },
  {
      id: 7,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/736472e7079951373aa33646f75d519428026466-1200x678.png?auto=format&fit=max&q=100&w=1200",
      customer: "Opa!",
      industry: "Consumer ..."
  },
  {
      id: 8,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/4f986ebd49b52907be569e401ef25b191b412700-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Shopify",
      industry: "E-commerce & ..."
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgREW9pcOkR9fdzIW9vMvOCd28E7NjTFuyGg&s"
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
        logo: <SiGoogleoptimize className='text-3xl' />,
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWK2nVTguVf7cLwkJqDVwDOKiMMlRaT2joDQ&s",
        name: "Facebook Ads Manager",
        para: "Manage and optimize campaigns with Facebook Ads Manager, ensuring every ad reaches the right audience and maximizes your ad spend."
      },
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-analytics-3d-logo-download-in-png-blend-fbx-gltf-file-formats--statistics-graph-social-media-pack-company-brand-logos-4781242.png",
        name: "Instagram Ads Manager",
        para: "Design and manage Instagram ad campaigns to reach a targeted audience and achieve business objectives with visual and creative engagement."
      },
      {
        img: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg",
        name: "Facebook Pixel",
        para: "Track and analyze website interactions to create custom audiences and optimize ad targeting with Facebook Pixel."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjXOKHUfK3gOaM_dxWFnHggOUWUZvvKxF0w&s",
        name: "Meta Analytics",
        para: "Monitor campaign performance across Facebook and Instagram with Meta's robust analytics to drive data-driven decisions and optimize strategies."
      },
      {
        img: "https://cdn.shopify.com/app-store/listing_images/415acef59ea18c992554e646bb315f54/icon/CNnqi5_U0fUCEAE=.png",
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
        img: "https://images.unsplash.com/photo-1606741964586-7a0b2a2f51ab?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Audience Research",
        para: "Leverage in-depth audience research to target the right users on Facebook and Instagram, maximizing the efficiency of your ad spend.",
        img: "https://images.unsplash.com/photo-1595254082351-bf2238b1f07a?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Ad Copy & Creative Design",
        para: "Create engaging ad copies and visually appealing creatives that resonate with your target audience, boosting interaction and engagement.",
        img: "https://images.unsplash.com/photo-1581299895126-16e6fd62140b?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Performance Optimization",
        para: "Continuously monitor and optimize Meta Ads performance by analyzing metrics and implementing data-driven changes to enhance ROI.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Remarketing Campaigns",
        para: "Re-engage users who have interacted with your ads or website with strategic remarketing campaigns, driving more conversions.",
        img: "https://images.unsplash.com/photo-1560264280-88b68371db91?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Analytics & Reporting",
        para: "Receive detailed reports on Meta Ads performance, helping you understand results and make informed decisions for further improvements.",
        img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
    ]
};

  

const dynamicContentSec = [
    {
        id: 1,
        title: "Campaign Analysis & Optimization",
        logo: <IoMdAnalytics className='text-6xl' />,
        para: "We analyze the performance of your Meta Ads campaigns on Facebook and Instagram, identifying key trends, top-performing ads, and areas for improvement. Based on these insights, we optimize targeting, ad creatives, bidding strategies, and campaign structure to ensure maximum engagement and ROI."
    },
    {
        id: 2,
        title: "Lead Tracking & ROI Measurement",
        logo: <SiPivotaltracker className='text-6xl' />,
        para: "Our advanced tracking system provides deep insights into which campaigns, audiences, and ad creatives generate the best-quality leads. This data allows us to refine strategies and improve lead conversion rates while maximizing return on investment (ROI)."
    },
    {
        id: 3,
        title: "Audience Targeting & Sponsored Content",
        logo: <FcAdvertising className='text-6xl' />,
        para: "We leverage Meta's powerful audience targeting tools, including demographics, interests, behaviors, and location targeting, to reach key decision-makers. Our Sponsored Content is designed to engage users, increase brand visibility, and drive meaningful interactions."
    },
    {
        id: 4,
        title: "Ad Testing & Iteration",
        logo: <SiTestcafe className='text-6xl' />,
        para: "We conduct A/B testing across different ad variations to determine which headlines, images, and calls-to-action perform the best. Continuous testing and iteration ensure that your Meta Ads campaigns achieve the highest click-through and conversion rates possible."
    },
    {
        id: 5,
        title: "Ongoing Campaign Management",
        logo: <GrHostMaintenance className='text-6xl' />,
        para: "We provide ongoing management and optimization of your Meta Ads campaigns. Monthly performance reviews allow us to adjust targeting, creatives, budgets, and bidding strategies to continuously improve results and maintain high campaign performance."
    },
];


  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your Meta Ads success",
    cards: [
      {
        title: "CAMPAIGNS MANAGED",
        count: "5K+",
        para: "Meta Ads campaigns managed for clients across diverse industries on Facebook and Instagram."
      },
      {
        title: "TOTAL CLIENTS",
        count: "400+",
        para: "Clients who have entrusted us with their Meta Ads strategy and management."
      },
      {
        title: "AD SPEND MANAGED",
        count: "$30M+",
        para: "Total ad spend managed across Meta Ads platforms to drive optimal results and maximize ROI."
      },
      {
        title: "CLIENT SATISFACTION",
        count: "4.8/5",
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
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Meta Ads Campaign Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "PPC Strategist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "Meta Ads Analyst",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Paid Search Specialist",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora Explorer",
        designation: "Conversion Optimization Expert",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
              <Cards3dSections translate='-75%' responsiveTraslate="-100%" end="+=500" content={section3dCards} className="rounded-[50px]"/>
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
              <Cards3dSections translate='-60%' responsiveTraslate="-90%" end="+=500" content={section3dCards} className="rounded-[50px]"/>
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