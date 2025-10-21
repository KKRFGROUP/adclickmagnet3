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
// logos
import { FcCollect } from "react-icons/fc";
import { GrPlan } from "react-icons/gr";
import { GiWireframeGlobe } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { BiSolidBookContent } from "react-icons/bi";
import { SiTestcafe } from "react-icons/si";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';

const heroContent = {
    heading: "Website Development",
    para: "Your website is the first impression of your company and speaks volumes about your work, not just in terms of the information that it carries but more importantly through the experience it gives to website visitors. ",
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
    mainpara: "BUILT FOR TECH, STRATEGY & DIGITAL TEAMS",
    heading: [
          {  
        text: "Custom",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "Web",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "development",
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
        text: "USA",
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
        text: "Brands",
        className: "text-black dark:text-white-500 tracking-wider",
      },
    ],
    para1: "The need for reliable, scalable websites has never been greater. When your priority is a seamless digital experience, ACM’s flexible web development services are the solution.",
    para2: "Our global team of expert web developers can help with everything from concept and planning to implementation, integrating the latest in front-end, back-end, and full-stack solutions for a truly comprehensive digital presence.",
    image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png",
    video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/web/web%20dev%20sec3%20vdo.mp4"
  };


const section4: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "MULTIFACETED SOLUTIONS",
  head: "Comprehensive web development services",
  para: "The website design and development process is an essential aspect of creating an effective online presence. Whether you’re starting a new website or revamping an existing one, it’s important to understand the steps involved in the process. In this guide, we’ll cover the key stages of the website design and development process, from concept to launch.",
  cards: [
    {
      logo: <FcCollect className='text-3xl' />,
      head: "Requirements Gathering",
      para: "Define your website’s objectives, audience, and content focus. This foundation provides a clear vision to guide design and development, ensuring the website achieves its goals."
    },
    {
      logo: <GrPlan className='text-3xl' />,
      head: "Research and Planning",
      para: "Analyze your audience and competitors, and explore design trends. Use this research to inform decisions about website functionality, and content for a focused user experience."
    },
    {
      logo: <SiTestcafe className='text-3xl' />,
      head: "Testing",
      para: "Complete rigorous testing, including device compatibility. Detect and resolve bugs to ensure your website runs smoothly, meeting high-quality standards for performance."
    },
    {
      logo: <GiWireframeGlobe className='text-3xl' />,
      head: "Wireframe Designing",
      para: "Create wireframes to map your website’s layout and structure. This step visualizes each page’s design and guides the development process with a strong blueprint."
    },
    {
      logo: <CgWebsite className='text-3xl' />,
      head: "Website Development",
      para: "Translate designs into code, add functionalities, and ensure a seamless user experience. This phase includes debugging and quality checks for a fully functional, high-quality website."
    },
    {
      logo: <BiSolidBookContent className='text-3xl' />,
      head: "Content Creation",
      para: "Craft engaging, SEO-optimized content that reflects your brand. This includes text, images, and media, contributing to a consistent and impactful user experience."
    },
  ]
}



const section6 = { 
    mainpara: "PLATFORM PROFICIENCY",
    heading: [
      {
        text: "In-depth",
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
        text: "web",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "solutions",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "perform",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para: "Developing robust, multi-platform web solutions requires a deep understanding of each digital ecosystem. ACM’s expert web developers bring platform-specific knowledge and a commitment to building solutions that adapt and excel, no matter the requirements.",
    social: [
      {
        img: "/images/services page/web dev/tools/01.webp",
        name: "WordPress",
        para: "Create dynamic websites with customized themes and plugins designed to maximize WordPress’s flexibility and extensive capabilities."
      },
      {
        img: "/images/services page/web dev/tools/02.webp",
        name: "Shopify",
        para: "Launch e-commerce platforms with advanced Shopify solutions, tailored for seamless shopping experiences and powerful sales management tools."
      },
      {
        img: "/images/services page/web dev/tools/03.webp",
        name: "Magento",
        para: "Elevate your online store with Magento’s robust, scalable e-commerce capabilities, ideal for businesses needing extensive customization and integrations."
      },
      {
        img: "/images/services page/web dev/tools/04.webp",
        name: "React & Angular",
        para: "Develop fast, responsive applications with React and Angular, offering unparalleled performance and seamless user experiences across all devices."
      },
      {
        img: "/images/services page/web dev/tools/05.webp",
        name: "Drupal",
        para: "Utilize Drupal’s powerful CMS features to create content-rich websites that adapt to complex requirements and high levels of customization."
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
        text: "Enhanced",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "Web",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Development",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Use AI to streamline and speed up web development. ACM’s AI workflows optimize coding, debugging, and testing, cutting project timelines by up to 60%.",
    para2: "Our AI-driven approach delivers precision, speed, and quality, enhancing project efficiency. Boost your digital presence with our innovative web development services.",
    button: "AI Web Development Service"
};

const section3dCards: {mainpara: string; head: string; cards: {head: string; para: string; img?: string; video?: string;}[]} = {
    mainpara: "WORKING WITH ACM",
    head: "Experience video excellence in every frame",
    cards: [
      {
          head: "Static Website Designing",
          para: "A static website is a type of website that consists of a set of HTML pages that remain unchanged until they are manually updated.",
          video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/web/01.mp4"
        },
      {
          head: "E- commerce websites",
          para: "An e-commerce website is an online platform where businesses sell their products or services to customers over the internet.",
          video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/web/02.mp4"
        },
      {
        head: "Idea based websites",
        para: "An idea-based website is a digital platform centered around sharing and exploring concepts, innovations, or creative thoughts.",
        video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/web/03.mp4"
      },
    {
        head: "Corporate Website",
        para: "A corporate website serves as the digital face of a company, providing a comprehensive overview of its identity, offerings, and values to various stakeholders",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/web/04.webp"
    },
  ]
} 
  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your web development pipeline",
    cards: [
      {
        title: "PROJECTS COMPLETED",
        count: "15000+",
        para: "Web dev projects successfully delivered to clients."
      },
      {
        title: "TOTAL CLIENTS",
        count: "600+",
        para: "Clients who have utilized our web development services."
      },
      {
        title: "DEVELOPMENT HOURS",
        count: "150000+",
        para: "Hours spent on high-quality web development."
      },
      {
        title: "CLIENT SATISFACTION 5/5",
        count: "4",
        para: "Average client satisfaction rating for web projects."
      },
    ]
};
  
const faq = { 
    mainpara: "Web Development FAQs",
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
        title: "Is SEO optimization included in web development services?",
        description: "Yes, we include SEO best practices in our web development process, ensuring your site is search-engine friendly from the start. Our team can also help you implement additional SEO strategies to enhance your online visibility."
      },
      {
        id: "2",
        title: "What makes our web development services unique?",
        description: "Our approach focuses on combining cutting-edge technology with user-centered design to create sites that are both functional and engaging. We ensure each project is tailored to align with your brand and objectives, with a focus on scalability and performance."
      },
      {
        id: "3",
        title: "Who is best suited for your web development services?",
        description: "Our services are ideal for businesses of all sizes, including startups and enterprises that need robust, scalable websites. We specialize in custom solutions for e-commerce, SaaS platforms, and other digital applications."
      },
      {
        id: "4",
        title: "Do you offer custom web development plans?",
        description: "Yes, we offer custom plans tailored to your project’s scope and complexity. Our team can adjust the level of service to match your needs, providing flexible options for different budgets and goals."
      },
      {
        id: "5",
        title: "What billing options do you offer?",
        description: "We offer both fixed-price and hourly billing options, depending on your project requirements and preferences."
      },
      {
        id: "6",
        title: "What are the benefits of a professionally developed website?",
        description: "A well-developed website serves as a powerful business asset. It can improve user experience, enhance brand credibility, increase conversions, and offer scalability as your business grows. Our team ensures that your website is optimized for performance, accessibility, and SEO."
      },
      {
        id: "7",
        title: "What technologies do you specialize in?",
        description: "We specialize in modern frameworks and tools like React, Node.js, Python, and various CMS platforms. Our team is well-versed in both frontend and backend development to deliver a full-stack solution tailored to your needs."
      },
      {
        id: "8",
        title: "Why is mobile responsiveness important?",
        description: "With most users accessing sites on mobile, having a responsive design is essential. Our development approach ensures your site adapts seamlessly across devices, providing an optimal experience for all users."
      },
      {
        id: "9",
        title: "Do you provide maintenance and support post-launch?",
        description: "Yes, we offer ongoing maintenance and support to keep your website secure and up-to-date. Our team is available for troubleshooting, updates, and enhancements as your business evolves."
      }
    ]
};
  

function WebDev() { 
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
              <Section4 content={section4} roundb='rounded-b-[50px]'/>
              <Section6 content={section6} />
              <Cards3dSections translate='-25%' responsiveTraslate="-80%" end="+=1100"  content={section3dCards} className="rounded-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
                <HeroSection heading={heroContent.heading} para={heroContent.para}/>
              
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb='rounded-b-[50px]'/>
              <Section6 content={section6}  />
              <Cards3dSections translate='-80%'  end="+=1100" content={section3dCards} className="rounded-[50px]"/>
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

export default WebDev
