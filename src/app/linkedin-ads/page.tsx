"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section2 from '@/components/services-components/Section2';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section6 from '@/components/services-components/Section6';
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
    heading: "LinkedIn Ads Services",
    para: "Since 2004, we’ve specialized in LinkedIn Ads management, delivering targeted campaigns that drive engagement, generate quality leads, and boost conversions. Our proven strategies ensure your ad spend creates maximum impact with minimal waste, helping your business grow efficiently.",
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
        text: "LinkedIn",
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
    para1: "In today’s professional network-driven world, LinkedIn Ads offer a powerful way to amplify your brand, connect with decision-makers, and drive meaningful business growth. Our customized LinkedIn Ads services ensure your campaigns resonate with the right audience for maximum visibility and ROI.",
    para2: "Our team of LinkedIn Ads experts provides a complete suite of services, from audience targeting and content creation to performance analytics and continuous optimization, ensuring your ad spend is both effective and efficient.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgREW9pcOkR9fdzIW9vMvOCd28E7NjTFuyGg&s"
};

  


const section4 = {
    mainpara: "TAILORED STRATEGIES FOR PROFESSIONAL GROWTH",
    head: "Our LinkedIn Ads experts will help you achieve impactful campaign results.",
    para: "At ACM, we manage your LinkedIn Ads campaigns with precision, leveraging data-driven strategies and platform expertise to convert leads into lasting business relationships. From advanced audience targeting to continuous optimization, our services maximize ROI and align with your professional growth objectives.",
    cards: [
      {
        logo: <TbListSearch className='text-3xl' />,
        head: "Audience Research & Competitor Analysis",
        para: "Understanding your audience is crucial for campaign success. We analyze your target demographic and competitors to craft LinkedIn Ads that drive meaningful engagement and conversions."
      },
      {
        logo: <FaRegEdit className='text-3xl' />,
        head: "Campaign Setup & Content Creation",
        para: "We’ll design your LinkedIn Ads campaign, create compelling ad content, and configure settings to ensure optimal performance. Multiple variations will be tested to achieve the best results."
      },
      {
        logo: <HiDocumentReport className='text-3xl' />,
        head: "Comprehensive Reporting & Strategic Reviews",
        para: "Receive detailed monthly reports on campaign performance, paired with regular strategy review meetings to refine and enhance results consistently."
      },
      {
        logo: <GiOnTarget className='text-3xl' />,
        head: "Precise Audience Targeting & Retargeting",
        para: "We fine-tune audience segmentation to engage the right professionals and implement retargeting strategies to re-engage and convert potential leads effectively."
      },
      {
        logo: <SiGoogleoptimize className='text-3xl' />,
        head: "Conversion Tracking & Campaign Optimization",
        para: "Implement advanced tracking tools to monitor performance, optimize campaigns in real-time, and ensure consistent improvement in ROI."
      },
      {
        logo: <SiMicrostrategy className='text-3xl' />,
        head: "Performance Insights & Strategic Adjustments",
        para: "Leverage in-depth campaign analysis to refine strategies, ensuring ad spend is efficiently utilized and aligned with your business objectives."
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
        text: "LinkedIn Ads",
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
    para: "Achieving success with LinkedIn Ads requires a deep understanding of the platform's unique tools and targeting capabilities. Our team uses an array of advanced software and strategies to maximize campaign impact, ensuring your ads achieve optimal reach, engagement, and conversions.",
    social: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWK2nVTguVf7cLwkJqDVwDOKiMMlRaT2joDQ&s",
        name: "LinkedIn Campaign Manager",
        para: "Create, manage, and optimize LinkedIn Ads campaigns, ensuring your content resonates with the right professional audience for maximum impact."
      },
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-analytics-3d-logo-download-in-png-blend-fbx-gltf-file-formats--statistics-graph-social-media-pack-company-brand-logos-4781242.png",
        name: "LinkedIn Analytics",
        para: "Measure campaign performance and audience engagement with LinkedIn Analytics, enabling data-driven decisions to refine your ads."
      },
      {
        img: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg",
        name: "LinkedIn Insight Tag",
        para: "Track conversions, retarget website visitors, and unlock audience insights with the LinkedIn Insight Tag for precise targeting."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjXOKHUfK3gOaM_dxWFnHggOUWUZvvKxF0w&s",
        name: "Hootsuite",
        para: "Streamline LinkedIn Ads management with Hootsuite, ensuring consistent campaign monitoring and optimization across multiple channels."
      },
      {
        img: "https://cdn.shopify.com/app-store/listing_images/415acef59ea18c992554e646bb315f54/icon/CNnqi5_U0fUCEAE=.png",
        name: "ClickCease",
        para: "Safeguard your LinkedIn Ads budget with ClickCease by identifying and preventing fraudulent clicks for better campaign performance."
      },
    ]
};

  
    



  

const section3dCards = { 
    mainpara: "WORKING WITH ACM",
    head: "Master LinkedIn Ads with our expertise",
    cards: [
      {
        head: "Campaign Strategy",
        para: "Design personalized LinkedIn Ads strategies that align with your business goals, enhancing professional reach and engagement.",
        img: "https://images.unsplash.com/photo-1606741964586-7a0b2a2f51ab?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Audience Targeting",
        para: "Utilize LinkedIn’s advanced targeting options to connect with the right professionals and decision-makers for impactful results.",
        img: "https://images.unsplash.com/photo-1595254082351-bf2238b1f07a?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Ad Copy Optimization",
        para: "Create persuasive ad copies tailored to LinkedIn’s professional audience to boost click-through rates and conversions.",
        img: "https://images.unsplash.com/photo-1581299895126-16e6fd62140b?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Performance Optimization",
        para: "Continuously analyze campaign metrics to fine-tune strategies, ensuring the best ROI for your LinkedIn Ads campaigns.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Remarketing Campaigns",
        para: "Reconnect with professionals who’ve interacted with your brand using LinkedIn’s remarketing tools to drive conversions.",
        img: "https://images.unsplash.com/photo-1560264280-88b68371db91?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        head: "Analytics & Reporting",
        para: "Gain in-depth insights into your campaign performance with detailed reports, enabling data-driven improvements.",
        img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
    ]
};

  

const dynamicContentSec = [
    {
        id: 1,
        title: "Campaign Analysis & Optimization",
        logo: <IoMdAnalytics className='text-6xl' />,
        para: "We analyze historical LinkedIn Ads performance to identify high-performing campaigns and areas for improvement. Based on insights, we optimize targeting, bidding, ad creatives, and campaign structure to maximize professional engagement and ROI."
    },
    {
        id: 2,
        title: "Lead Tracking & ROI Measurement",
        logo: <SiPivotaltracker className='text-6xl' />,
        para: "Our detailed tracking system provides insights into which campaigns, audiences, and ad creatives generate the highest-quality leads. This data enables us to refine strategies for improved conversions and ROI."
    },
    {
        id: 3,
        title: "Audience Targeting & Sponsored Content",
        logo: <FcAdvertising className='text-6xl' />,
        para: "We fine-tune your audience targeting using LinkedIn's robust filters, such as industry, job title, and seniority, to reach key decision-makers. Sponsored content is optimized to drive meaningful engagement and brand visibility."
    },
    {
        id: 4,
        title: "Ad Testing & Iteration",
        logo: <SiTestcafe className='text-6xl' />,
        para: "We conduct A/B testing on ad variations to determine which headlines, images, and calls-to-action deliver the best performance. Continuous iteration ensures your campaigns achieve the highest click-through and conversion rates."
    },
    {
        id: 5,
        title: "Ongoing Campaign Management",
        logo: <GrHostMaintenance className='text-6xl' />,
        para: "Each month, we review and refine your LinkedIn Ads campaigns to maintain optimal performance. Adjustments include negative keyword strategies, audience updates, and bidding enhancements to continuously improve results."
    },
];

  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your Google Ads success",
    cards: [
      {
        title: "CAMPAIGNS MANAGED",
        count: "10K+",
        para: "Google Ads campaigns managed for clients across diverse industries."
      },
      {
        title: "TOTAL CLIENTS",
        count: "900+",
        para: "Clients who have entrusted us with their Google Ads strategy and management."
      },
      {
        title: "AD SPEND MANAGED",
        count: "$50M+",
        para: "Total ad spend managed to drive optimal results and maximize ROI."
      },
      {
        title: "CLIENT SATISFACTION",
        count: "4.9/5",
        para: "Average client satisfaction rating for Google Ads campaigns."
      },
    ]
};
  
  
const faq = { 
    mainpara: "LinkedIn Ads Service FAQs",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Senior LinkedIn Ads Specialist",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "LinkedIn Ads Campaign Manager",
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
        designation: "LinkedIn Ads Analyst",
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
        title: "Do you offer LinkedIn Ads management services?",
        description: "Yes, we specialize in managing LinkedIn Ads campaigns, from audience targeting to ad copy optimization, ensuring your campaigns reach the right professionals and deliver measurable ROI."
      },
      {
        id: "2",
        title: "What makes ACM’s LinkedIn Ads services unique?",
        description: "Our approach combines industry insights, advanced targeting strategies, and personalized ad formats to ensure that your LinkedIn campaigns generate high-quality leads and enhance brand visibility."
      },
      {
        id: "3",
        title: "Who benefits from LinkedIn Ads services?",
        description: "Our LinkedIn Ads services are ideal for businesses looking to target professionals, executives, and decision-makers across various industries. We help B2B companies expand their reach and drive engagement with a highly relevant audience."
      },
      {
        id: "4",
        title: "Can you help optimize existing LinkedIn Ads campaigns?",
        description: "Yes, we audit and optimize your existing LinkedIn Ads campaigns to enhance targeting, improve ad copy, and boost engagement, ensuring maximum ROI from your ad spend."
      },
      {
        id: "5",
        title: "What is the average cost for LinkedIn Ads management?",
        description: "Costs vary depending on your objectives and campaign scale. We offer customized pricing based on your business goals and desired outcomes, ensuring cost-effective LinkedIn Ads solutions."
      },
      {
        id: "6",
        title: "How do you measure success in LinkedIn Ads campaigns?",
        description: "Success is measured using key performance indicators (KPIs) such as click-through rates (CTR), conversion rates, and cost per lead (CPL), ensuring that each campaign aligns with your business objectives."
      },
      {
        id: "7",
        title: "What ad formats do you use on LinkedIn?",
        description: "We use a variety of LinkedIn ad formats, including Sponsored Content, Text Ads, InMail, and Dynamic Ads, to engage with your audience in the most impactful way."
      },
      {
        id: "8",
        title: "Why is LinkedIn Ads important for my business?",
        description: "LinkedIn Ads offers a unique opportunity to target professionals and decision-makers in your industry, making it an essential tool for B2B marketing, recruitment, and lead generation."
      },
      {
        id: "9",
        title: "Do you provide ongoing support and reporting?",
        description: "Yes, we offer continuous optimization and in-depth monthly reporting to track campaign performance, with regular strategy sessions to ensure campaigns remain aligned with your goals."
      }
    ]
};

  
  

function LinkedInAds() { 
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
              <Section6 content={section6} translate="-55%" responsiveTranslate="-95%"/>
              <DynamicContentCard content={dynamicContentSec}/>
              <Cards3dSections translate='-75%' responsiveTraslate="-90%" end="+=500" content={section3dCards} className="rounded-[50px]"/>
              
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
              <section data-bgcolor="#070707" data-textcolor="#ffffff">
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              </section>
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb='rounded-b-[50px] h-[200vh]'/>
              <Section6 content={section6} translate="-65%" responsiveTranslate="-85%"/>
              <DynamicContentCard content={dynamicContentSec}/>
              <Cards3dSections translate='-60%' responsiveTraslate="-90%" end="+=500" content={section3dCards} className="rounded-[50px]"/>
              
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
          </div>
        </div>
    </>
  )
}

export default LinkedInAds