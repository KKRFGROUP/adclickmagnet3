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

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";

// logos
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GrTechnology } from "react-icons/gr";
import {SiPagespeedinsights } from "react-icons/si";
import { LiaPagerSolid } from "react-icons/lia";
import { VscSymbolKeyword } from "react-icons/vsc";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';


const heroContent = {
    heading: "SEO Services for Enhanced Visibility",
    para: "Boost your online presence and drive targeted traffic with our expert SEO strategies. We optimize your website to rank higher on search engines, helping you reach the right audience and make a lasting impression.",
};

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
    mainpara: "BUILT FOR TECH, STRATEGY & DIGITAL EXCELLENCE",
    heading: [
      {  
        text: "Expert",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "SEO",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Services",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {   
        text: "for",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "US",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "&",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Canadian",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "Businesses",
        className: "text-black dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Achieve a strong digital presence with a site built for optimal performance, speed, and search visibility. At ACM, we specialize in web development with SEO as a core focus, ensuring your website is seen and trusted by users and search engines alike.",
    para2: "Our team of SEO-savvy developers and strategists collaborates globally to deliver full-stack solutions, from front-end to back-end, elevating your site’s functionality and search visibility for an unparalleled digital experience.",
    image: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/seo%20sec3%20img.webp"
};


const section4: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "MULTIFACETED SOLUTIONS",
  head: "SEO Ranking Factors We Care For Are As Follows",
  para: "Several key factors influence a website’s SEO ranking and our SEO services help you to improve your:",
  cards: [
    {
      logo: <MdOutlineContentPasteSearch className='text-3xl' />,
      head: "Content Quality",
      para: "We write high-quality, relevant, and engaging content that provides value to users is crucial."
    },
    {
      logo: <HiDevicePhoneMobile className='text-3xl' />,
      head: "Mobile Optimization",
      para: "With mobile-first indexing, your site must perform well on mobile devices. We optimize websites for mobiles."
    },
    {
      logo: <GrTechnology className='text-3xl' />,
      head: "Technical SEO",
      para: "We optimize factors like site speed, mobile-friendliness, secure connections (HTTPS), and a well-structured URL hierarchy."
    },
    {
      logo: <LiaPagerSolid className='text-3xl' />,
      head: "On-Page SEO",
      para: "We optimise meta titles, descriptions, and header tags, and ensure proper keyword usage."
    },
    {
      logo: <SiPagespeedinsights className='text-3xl' />,
      head: "Page Speed",
      para: "Fast-loading pages improve user experience. We speed up your website to pass Core Web Vitals."
    },
    {
      logo: <VscSymbolKeyword className='text-3xl' />,
      head: "Keywords",
      para: "Properly researched and strategically placed keywords in titles and headings throughout the content help search engines understand the relevance of your pages."
    },
  ]
}



const section6 = { 
    mainpara: "SEO TOOLKIT MASTERY",
    heading: [
      {
        text: "Advanced",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "SEO",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Tools",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "for",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Performance",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "and",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "Growth",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para: "Achieving top-tier SEO results requires a mastery of powerful tools that enhance keyword targeting, performance analytics, and technical SEO. ACM leverages industry-leading software for robust analysis, content optimization, and sustained rankings.",
    social: [
      {
        img: "/images/services page/seo/tools/01.webp",
        name: "SEMrush",
        para: "Comprehensive insights into competitor strategies, keyword trends, and backlink analysis to fine-tune your SEO approach."
      },
      {
        img: "/images/services page/seo/tools/02.webp",
        name: "Ahrefs",
        para: "Powerful backlink analysis, content exploration, and site audits to elevate your SEO strategy and drive meaningful results."
      },
      {
        img: "/images/services page/seo/tools/03.webp",
        name: "Google Analytics",
        para: "Real-time traffic analysis, user behavior insights, and conversion tracking to measure and optimize performance effectively."
      },
      {
        img: "/images/services page/seo/tools/04.webp",
        name: "Google Search Console",
        para: "Monitor your website’s indexing status, optimize visibility in Google search results, and fix technical SEO issues."
      },
    ]
};
  

const section7 = {  
    mainpara: "FUTURE-READY SEO PERFORMANCE",
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
        text: "SEO",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Optimization",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Utilize AI-powered tools to optimize every facet of your SEO strategy. From automated keyword research to predictive analytics, ACM's AI-driven approach delivers insights and precision to boost your rankings and online presence.",
    para2: "Our AI-enhanced SEO solutions enable faster, data-backed decisions, improving campaign efficiency and effectiveness. Elevate your search visibility and stay ahead of competitors with ACM's cutting-edge SEO technology.",
    button: "AI SEO Services",
}

const section3dCards: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = { 
  mainpara: "Why is SEO Still So Important?",
  head: "SEO boosts visibility and reach. Here's why it's essential:",
  cards: [
    {
        head: "Organic Search",
        para: "Organic search results drive most website traffic, with over 50% coming from organic search. If your website isn’t search-optimized, you’re missing a major traffic opportunity.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/01.webp"
    },
    {
        head: "Helps Build Trust And Credibility",
        para: "People trust search engines, and a high rank in search results builds credibility. It shows your site is relevant and authoritative to your audience.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/02.webp"
    },
    {
        head: "Improves User Experience",
        para: "SEO optimizes your site’s structure and content for search engines, improving user experience by making your site organized, informative, and user-friendly.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/03.webp"
    },
    {
      head: "Cost-Effective",
      para: "SEO is a cost-effective strategy to drive traffic. Unlike paid ads requiring ongoing investment, SEO offers long-term results with minimal costs.",
      img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/04.webp"
  },
  {
      head: "Competitive Advantage",
      para: "SEO is highly competitive. Businesses investing in SEO attract more traffic, leading to increased leads, sales, and a stronger market position.",
      img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/seo/05.webp"
  },
]
}


  

const section8 = {
    mainpara: "PROVEN SEO EXPERTISE",
    heading: "Boosting your digital presence with our SEO-driven approach",
    cards: [
      {
        title: "PROJECTS COMPLETED",
        count: "150000+",
        para: "SEO projects completed to date"
      },
      {
        title: "TOTAL CLIENTS",
        count: "1200+",
        para: "Total customers used our SEO services."
      },
      {
        title: "SEO HOURS INVESTED",
        count: "500000",
        para: "Hours dedicated to SEO audits."
      },
      {
        title: "CLIENT SATISFACTION 5/5",
        count: "4",
        para: "Average SEO project approval rating."
      },
    ]
};
  
const faq = { 
    mainpara: "SEO FAQs",
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
        title: "What is SEO and why is it important?",
        description: "SEO (Search Engine Optimization) is the practice of optimizing your website to improve its visibility in search engine results. It’s essential for increasing organic traffic, boosting brand awareness, and enhancing the overall user experience."
      },
      {
        id: "2",
        title: "How long does it take to see results from SEO?",
        description: "SEO is a long-term strategy. It typically takes 3-6 months to see noticeable results, but continuous optimization can yield sustainable growth in traffic and rankings over time."
      },
      {
        id: "3",
        title: "What are the key components of SEO?",
        description: "SEO involves multiple components, including keyword research, on-page optimization (like content and meta tags), technical SEO (site structure and performance), and off-page SEO (like backlinks and social signals)."
      },
      {
        id: "4",
        title: "Can SEO guarantee first-page rankings?",
        description: "No SEO service can guarantee first-page rankings, as search engines like Google use complex algorithms. However, through best practices, SEO can significantly improve your rankings and visibility."
      },
      {
        id: "5",
        title: "How does content affect SEO?",
        description: "High-quality, relevant, and optimized content is key to SEO success. Well-structured content with targeted keywords can improve rankings, enhance user engagement, and increase conversion rates."
      },
      {
        id: "6",
        title: "What is technical SEO?",
        description: "Technical SEO involves optimizing the technical aspects of your website, such as page speed, mobile-friendliness, site architecture, and secure connections (SSL), to ensure it’s accessible and properly indexed by search engines."
      },
      {
        id: "7",
        title: "How do backlinks impact SEO?",
        description: "Backlinks from reputable websites serve as a vote of confidence in your content, signaling to search engines that your website is credible and trustworthy. Quality backlinks can significantly improve SEO rankings."
      },
      {
        id: "8",
        title: "Why is mobile optimization important for SEO?",
        description: "With the rise of mobile usage, Google now prioritizes mobile-friendly websites. A responsive design ensures your site is accessible on any device, which is essential for SEO and user experience."
      },
      {
        id: "9",
        title: "Do you offer SEO services for e-commerce websites?",
        description: "Yes, we offer SEO services tailored to e-commerce websites. We focus on product optimization, enhancing product pages, improving site navigation, and driving organic traffic to increase sales and conversions."
      }
    ]
};
  

function Seo() { 
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
        <Navbar  mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div ref={pageMainRef} className="page-main">
          <div className='tracing-beam'>
                  <TracingBeam >
                      <section data-bgcolor="#070707" data-textcolor="#ffffff">
                      <HeroSection heading={heroContent.heading} para={heroContent.para} />
                      </section>
                      <Section2 Cards={section2}/>
                      <Section3  content={section3} roundb="rounded-t-[50px]" />
                      <Section4 content={section4} roundb='rounded-b-[50px]'/>
                      <Section6 content={section6}/>
                      <Cards3dSections translate='-40%' responsiveTraslate="-90%" end="+=600" content={section3dCards} className="rounded-[50px]"/>
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
                  <Section4 content={section4} roundb='rounded-b-[50px]'/>
                  <Section6 content={section6} />
                  <Cards3dSections translate='-80%' responsiveTraslate="-90%" end="+=600" content={section3dCards} className="rounded-[50px]"/>
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

export default Seo
