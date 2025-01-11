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
    imgUrl: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const section2 = [
  {
    id: 1,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/smokey_white_logo_wdokst.jpg",
    customer: "Smokey",
    industry: "Restaurant"
  },
  {
      id: 2,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/blind_by_design_white_logo_vfpxim.jpg",
      customer: "Blinds",
      industry: "Interior"
  },
  {
      id: 3,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/pgroomer_white_logo_geg0ou.jpg",
      customer: "PGroomer",
      industry: "Tools..."
  },
  {
    id: 4,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/sisli_white_logo_ohjfsp.jpg",
    customer: "Silsi",
    industry: "Restaurant"
  },
  {
    id: 5,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/iq_white_logo_cufpld.jpg",
    customer: "IQ Home Care",
    industry: "Cleaning..."
  },
  
  {
      id: 6,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696499/canada_view_white_logo_zdclw9.jpg",
      customer: "Canada View",
      industry: "Cleaning..."
  },
  {
      id: 7,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/jen_thomsan_white_logo_mkjyma.jpg",
      customer: "Jen Thomson",
      industry: "Realtor..."
  },
  {
    id: 8,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/donjon_white_logo_wb1gvt.jpg",
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
    image: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734466565/Untitled_design_10_xynrvx.png"
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
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518375/Facebook_ads_campaign_expert_u126ir.jpg"
      },
      {
        head: "Audience Research",
        para: "Leverage in-depth audience research to target the right users on Facebook and Instagram, maximizing the efficiency of your ad spend.",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518375/I_will_manage_and_setup_your_facebook_ads_campaign_efficiently_kcmq7s.jpg"
      },
      {
        head: "Ad Copy & Creative Design",
        para: "Create engaging ad copies and visually appealing creatives that resonate with your target audience, boosting interaction and engagement.",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518220/Screenshot_2024-12-17_at_7.02.29_PM_j42f67.png"
      },
      {
        head: "Performance Optimization",
        para: "Continuously monitor and optimize Meta Ads performance by analyzing metrics and implementing data-driven changes to enhance ROI.",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518219/facebook-meta-business_sfwicr.webp"
      },
      {
        head: "Remarketing Campaigns",
        para: "Re-engage users who have interacted with your ads or website with strategic remarketing campaigns, driving more conversions.",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518219/word-image-11_aor4gr.png"
      },
      {
        head: "Analytics & Reporting",
        para: "Receive detailed reports on Meta Ads performance, helping you understand results and make informed decisions for further improvements.",
        img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734518219/Screenshot_2024-12-17_at_7.00.34_PM_pg0ajr.png"
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