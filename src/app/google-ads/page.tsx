"use client";

import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Scrollbar  from 'smooth-scrollbar';
import Section2 from '@/components/services-components/Section2';
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from 'react';
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
    heading: "Google Ads Management Services",
    para: "Since 2004, we’ve been a paid search marketing agency focused on Google Ads management – our services boosting paid search conversions by more than 485%. We’ll apply proven Ads management strategies to your campaign – increasing conversions and eliminating wasted spend!",
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
      customer: "Lockheed Martin",
      industry: "Defence"
  },
  {
      id: 7,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/736472e7079951373aa33646f75d519428026466-1200x678.png?auto=format&fit=max&q=100&w=1200",
      customer: "Opa!",
      industry: "Consumer Goo..."
  },
  {
      id: 8,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/4f986ebd49b52907be569e401ef25b191b412700-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Shopify",
      industry: "E-commerce & ..."
  },
]

const section3 = {
    mainpara: "OPTIMIZED FOR GROWTH, VISIBILITY & ROI",
    heading: [
      {  
        text: "Google",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Ads",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Solutions",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Drive",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "Results",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "In a competitive digital landscape, targeted Google Ads can elevate your brand’s visibility and drive high-quality traffic to your website. Our tailored Google Ads services help you reach the right audience effectively and maximize your ROI.",
    para2: "Our team of certified Google Ads specialists provides end-to-end solutions, from keyword research and ad creation to performance tracking and optimization, ensuring you achieve the best possible outcomes for your ad spend.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgREW9pcOkR9fdzIW9vMvOCd28E7NjTFuyGg&s"
  };
  


const section4 = {
    mainpara: "MULTIFACETED SOLUTIONS",
    head: "Our Google Ads experts will ensure the success of your paid search campaigns.",
    para: "At ACM, we manage your Google Ads account with precision, targeting the keywords and strategies that convert leads into loyal customers. Through in-depth keyword research, competitor analysis, and data-driven optimizations, we build campaigns that maximize your ROI and support your business goals.",
    cards: [
      {
        logo: <TbListSearch className='text-3xl' />,
        head: "Keyword Research & Competitor Ads Analysis",
        para: "Choosing the right keywords to bid on is the foundation of success. We'll research keywords and the competition to create a Google Ads campaign that drives sales and a positive ROI."
      },
      {
        logo: <FaRegEdit className='text-3xl' />,
        head: "Campaign Creation & Ad Copy Creation",
        para: "We'll set up your Ads campaign, create ad copy, and configure all settings. Multiple ad variations will be created and modified to achieve the highest conversion rates possible."
      },
      {
        logo: <HiDocumentReport className='text-3xl' />,
        head: "Detailed Reporting & Team Meetings",
        para: "Each month, we’ll provide a detailed report on campaign performance, and schedule review meetings to discuss strategies and ongoing improvements."
      },
      {
        logo: <GiOnTarget className='text-3xl' />,
        head: "Audience Targeting & Remarketing",
        para: "We fine-tune audience targeting to reach the right people and set up remarketing strategies to re-engage users, maximizing conversions from every interaction."
      },
      {
        logo: <SiGoogleoptimize className='text-3xl' />,
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWK2nVTguVf7cLwkJqDVwDOKiMMlRaT2joDQ&s",
        name: "Google Ads Manager",
        para: "Manage and optimize campaigns with Google Ads Manager, ensuring that every ad reaches the right audience and maximizes your ad spend."
      },
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-analytics-3d-logo-download-in-png-blend-fbx-gltf-file-formats--statistics-graph-social-media-pack-company-brand-logos-4781242.png",
        name: "Google Analytics",
        para: "Analyze campaign performance and user behavior on your site with Google Analytics, helping you make data-driven decisions."
      },
      {
        img: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg",
        name: "Google Tag Manager",
        para: "Easily track user interactions across your site and manage tags for effective retargeting and conversion tracking."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjXOKHUfK3gOaM_dxWFnHggOUWUZvvKxF0w&s",
        name: "Optmyzr",
        para: "Automate and enhance your Google Ads management with Optmyzr’s tools for bid optimization, keyword analysis, and A/B testing."
      },
      {
        img: "https://cdn.shopify.com/app-store/listing_images/415acef59ea18c992554e646bb315f54/icon/CNnqi5_U0fUCEAE=.png",
        name: "ClickCease",
        para: "Protect your Google Ads budget with ClickCease by detecting and preventing click fraud to improve campaign ROI and ad performance."
      },
      {
        img: "https://w7.pngwing.com/pngs/679/637/png-transparent-hotjar-logo-thumbnail-tech-companies-thumbnail.png",
        name: "Hotjar",
        para: "Gain insights into user experience with Hotjar, allowing for optimization of landing pages to improve conversion rates."
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
    para1: "Utilize the power of AI to enhance your Google Ads campaigns. Our AI-driven optimization techniques analyze vast amounts of data in real-time to deliver the highest quality leads and maximize ROI.",
    para2: "With our AI-powered approach, we ensure that your ads are continuously optimized for performance, targeting, and efficiency. Stay ahead of the competition and drive exceptional results with our innovative Google Ads solutions.",
    button: "AI-Driven G.A. Service"
  };
  

const section3dCards: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
    mainpara: "WORKING WITH ACM",
    head: "Experience video excellence in every frame",
    cards: [
      {
          head: "Static Website Designing",
          para: "A static website is a type of website that consists of a set of HTML pages that remain unchanged until they are manually updated.",
          img: "https://5.imimg.com/data5/SELLER/Default/2024/6/428433457/KL/LG/NL/224212668/static-website-designing-service-500x500.jpg"
      },
      {
          head: "Website Designing Services",
          para: "Having a strong online presence is crucial for any business in today’s digital world. A well-designed website is the foundation of your online presence.",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
          head: "E- commerce websites",
          para: "An e-commerce website is an online platform where businesses sell their products or services to customers over the internet.",
          img: "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        head: "Idea based websites",
        para: "An idea-based website is a digital platform centered around sharing and exploring concepts, innovations, or creative thoughts.",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6f5bc0101084519.5f170c2bc09c7.png"
    },
    {
        head: "Corporate Website",
        para: "A corporate website serves as the digital face of a company, providing a comprehensive overview of its identity, offerings, and values to various stakeholders",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrj86bI16uGV1kXMZjFqkjm5Svokh6nAbBg&s"
    },
    {
        head: "Web Portals",
        para: "A web portal website serves as a gateway or centralized access point to a variety of information, services, and resources available on the internet.",
        img: "https://plus.unsplash.com/premium_photo-1681433426886-3d6d17f79d53?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
} 

const dynamicContentSec: {id: number; title: string; logo: React.ReactNode; para: string;}[] = [
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
  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your Google Ads success",
    cards: [
      {
        title: "CAMPAIGNS MANAGED",
        count: "10K+",
        para: "Google Ads campaigns successfully managed for clients across diverse industries."
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
    mainpara: "Google Ads Service FAQs",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Senior Google Ads Specialist",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Google Ads Campaign Manager",
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
        designation: "Google Ads Analyst",
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
  useEffect(() => {
  const scrollBar = Scrollbar.init(document.querySelector(".page-main"),{
    damping: 0.01,
    thumbMinSize: 20,
    delegateTo: document,
    alwaysShowTracks: false,
    speed: 3,

  });

  ScrollTrigger.defaults({
    scroller: ".page-main",

  });

  ScrollTrigger.scrollerProxy(".page-main",{
    scrollTop(value) {
      if (arguments.length) {
        scrollBar.scrollTop = value;
      }
      return scrollBar.scrollTop; 
    },
  });

  scrollBar.addListener(ScrollTrigger.update);

  const sectionColor = document.querySelectorAll('[data-bgcolor]');

  sectionColor.forEach((each,i) => {
    const prevBgColor = i ===0 ? "" : sectionColor[i-1].dataset.bgcolor;
    const prevTextColor = i ===0 ? "" : sectionColor[i-1].dataset.textcolor;
    
    ScrollTrigger.create({
      trigger: each,
      scroller: ".page-main",
      start: "top 50%",
      onEnter: () => 
        gsap.to(".page-main", {
          backgroundColor: each.dataset.bgcolor,
          color: each.dataset.textcolor,
          overwrite: "auto",

        }),
        onLeaveBack: () =>
          gsap.to(".page-main", {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: "auto",

          })
    })
  })

    return () => {};
  }, []);
  return (
    <div className='page-main'>
      <TracingBeam>

        <Navbar />
        <section data-bgcolor="#070707" data-textcolor="#ffffff">
          <HeroSection heading={heroContent.heading} para={heroContent.para} imgUrl={heroContent.imgUrl}/>
        </section>
        <Section2 Cards={section2}/>
        <Section3  content={section3}/>
        <Section4 content={section4} roundb='rounded-b-[50px] h-[170vh]'/>
        <Section6 content={section6}/>
        <DynamicContentCard content={dynamicContentSec}/>
        <Cards3dSections translate='-150%' content={section3dCards} className="rounded-[50px]"/>
        <Section7 content={section7}/>
        <Section8 content={section8}/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
  )
}

export default GoogleAds