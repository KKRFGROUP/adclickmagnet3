"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section7 from '@/components/services-components/Section7';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';

// logos
import { LuMousePointerClick } from "react-icons/lu";
import { GiFallingBlob } from "react-icons/gi";
import { BsCollectionPlay } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { PiBookOpenTextFill,PiPresentationChartBold } from "react-icons/pi";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';



const heroContent = {
    heading: "Motion Design Services",
    para: "Captivate your audience with ACM’s motion design services. Get moving with a team of fully stacked motion designers and enhance your brand’s assets across your website, digital campaigns ads and more.",
}


const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string; video?: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Move",
      className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "the",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "needle",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {   
        text: "with",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "expert",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {  
        text: "motion",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "design",
        className: "text-black dark:text-white-500 tracking-wider",
      },    
],
  para1: "Goodbye, static creativity. Hello, motion! Our motion design brings dynamic graphics and animations to every touchpoint, ensuring attention-grabbing content that boosts conversions.",
  para2: "Our expert motion designers collaborate closely with you, crafting custom creative from concept to final product. We ensure engaging experiences that captivate your audience.", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png",
  video: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/video-production/motion%20sec3%20vdo.mp4"
}



const section4: { 
  mainpara: string; 
  head: string; 
  cards: { logo: React.ReactNode; head: string; para: string; }[] 
} = {
  mainpara: "MOVING POSSIBILITIES",
  head: "Comprehensive Motion Design Services",
  cards: [
    {
      logo: <LuMousePointerClick className="text-3xl" />,
      head: "Motion Ads",
      para: "Drive engagement with scroll-stopping motion ads that captivate audiences, tell stories, and boost conversions."
    },
    {
      logo: <GiFallingBlob className="text-3xl" />,
      head: "Custom Motion Graphics",
      para: "Elevate your brand with bespoke motion graphics designed for every platform, from websites to social media."
    },
    {
      logo: <BsCollectionPlay className="text-3xl" />,
      head: "Animated Videos",
      para: "Enhance your animation strategy with videos tailored to inform, entertain, and convert across the funnel."
    },
    {
      logo: <MdAnimation className="text-3xl" />,
      head: "Animated Logos",
      para: "Bring your brand to life with animated logos and graphics that make your marketing stand out."
    },
    {
      logo: <PiBookOpenTextFill className="text-3xl" />,
      head: "Animated eBooks",
      para: "Deliver immersive experiences with animated eBooks that captivate audiences and improve read rates."
    },
    {
      logo: <PiPresentationChartBold className="text-3xl" />,
      head: "Animated Presentations",
      para: "Make presentations unforgettable with animations that emphasize key points and keep audiences engaged."
    },
  ]
};





const section7: {mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; button: string} = {
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
      text: "Motion",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  {
      text: "Design",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  
],
  para1: "Leverage AI to boost efficiency and reduce costs in design services. ACM’s AI-enhanced workflows create motion designs 60% faster.",
  para2: "Every project is executed with precision, improving quality and production speed. Experience unmatched efficiency and innovation with our AI-driven solutions to elevate your brand.",
button: "AI Design Service" 
}

const section8: {mainpara: string; heading: string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "NUMBERS IN MOTION",
  heading: "Choose a motion design agency with a proven track record",
  cards: [
    {
      title: "PROJECTS COMPLETED",
      count: "4000+",
      para: "Motion graphics projects completed to date"
    },
    {
      title: "TOTAL CUSTOMERS",
      count: "600+",
      para: "Total customers used our motion design services"
    },
    {
      title: "TOTAL HOURS",
      count: "700000+",
      para: "hours dedicated to motion design"
    },
    {
      title: "CUSTOMER SATISFACTION 5/5",
      count: "4",
      para: "Average motion graphics project approval rating"
    },
  ] 
}

const faq:{mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]} = {
  mainpara: "Motion Design FAQs",
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
      title: "Are motion design services included in all ACM subscriptions?",
      description: "Absolutely! ACM's design subscription goes beyond just graphic design-we offer motion design within all of our subscriptions. Your chosen tier grants access to these creative services, letting you scale your motion design efforts seamlessly. This flexibility lets you tap into additional services like social media content, video production and campaign development - all designed to elevate your creative needs of motion to new levels."
    },
    {
      id: "2",
      title: "What is the minimum commitment for motion design services?",
      description: "All ACM subscriptions require a one-year commitment because we prioritize ongoing creative partnerships. Unlike one-off motion projects, our services shine in fostering long-term brand development. This commitment unlocks access to our full design spectrum, allowing you to not only elevate your motion graphics but also build a dedicated team who understands your vision. The longer we collaborate, the deeper our understanding of your brand becomes, maximizing the value you receive for motion campaigns and overall growth."
    },
    {
      id: "3",
      title: "Do you do custom motion design plans?",
      description: "Of course! We take pride in crafting custom motion design plans for different customers. Our tiered structures offer incredible flexibility, allowing us to tailor the number of credits to your project's complexity. But if the pre-set credits in a plan perfectly match your needs, you can leverage them directly to bring your motion design vision to life."
    },
    {
      id: "4",
      title: "What billing options do you offer?",
      description: "We offer credit card billing or invoicing."
    },
    {
      id: "5",
      title: "How do ACM's motion graphics services work?",
      description: "ACMs motion graphic design services operate by first understanding the customer's objectives and vision, ensuring a tailored approach to meet specific goals. The creative process involve conceptualizing ideas, leveraging visual storytelling principles and employing animation to create dynamic and engaging content. This streamlined experience makes it effortless for customers to access a fully stacked design team with specialized proficiency in motion graphics and animation, ensuring the seamless delivery of visually compelling and effective content."
    },
    {
      id: "6",
      title: "What type of customers use your motion design services?",
      description: "ACM's motion design services cater to a diverse customer base seeking to distinguish themselves within their respective industries. High-growth brands aspiring to surpass their competitors find immense value in incorporating motion graphic design into their branding strategies. Whether you're a forward-thinking marketer, a dynamic sales or product leader or simply an out-of-the-box thinker, integrating this advanced feature into your brand designs, advertising initiatives and website content can significantly elevate your overall presence and impact in the market. Many in-house marketing and creative teams also use our motion design services to add bandwidth and capacity without adding headcount, as many in-house teams may not have dedicated motion designers on staff."
    },
  ]
}

function AdCreative() { 
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
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
        <div ref={pageMainRef} className='page-main'>
          <div className='tracing-beam'>
            <TracingBeam>
                <HeroSection heading={heroContent.heading} para={heroContent.para}/>
              <div className="mt-10">
                <Section3  content={section3} roundb="rounded-t-[50px]" />
              </div>
              <Section4 content={section4} roundb="rounded-b-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb="rounded-b-[50px]"/>
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

export default AdCreative