"use client";

import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Scrollbar  from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);
import { useEffect } from 'react';
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
    imgUrl: "Captivate your audience with ACM’s motion design services. Get moving with a team of fully stacked motion designers and enhance your brand’s assets across your website, digital campaigns ads and more."
}


const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Move",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "the",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "needle",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "with",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "expert",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "motion",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "design",
        className: "text-white dark:text-white-500 tracking-wider",
      },    
],
  para1: "Goodbye, static creativity. Hello, motion! Our motion design brings dynamic graphics and animations to every touchpoint, ensuring attention-grabbing content that boosts conversions.",
  para2: "Our expert motion designers collaborate closely with you, crafting custom creative from concept to final product. We ensure engaging experiences that captivate your audience.", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}



const section4: {mainpara: string; head: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "MOVING POSSIBILITIES",
  head: "Comprehensive motion design services",
  cards: [
    {
      logo: <LuMousePointerClick  className='text-3xl'/>,
      head: "Motion Ads",
      para: "Get the click with scroll-stopping motion ads designed to tell compelling stories, delight audiences and increase conversions."
    },
    {
      logo: <GiFallingBlob  className='text-3xl'/>,
      head: "Custom Motion Graphics",
      para: "Transform your brand assets with tailor-made motion graphics for every channel and medium from your website to social platforms."
    },
    {
      logo: <BsCollectionPlay  className='text-3xl'/>,
      head: "Animated Videos",
      para: "Amp up your animation game with videos across the funnel whether you’re informing with explainers or entertaining with brand stories."
    },
    {
      logo: <MdAnimation  className='text-3xl'/>,
      head: "Animated Logos",
      para: "Breathe life into your brand with animated logos and motion graphics that set your marketing materials apart from the competition."
    },
    {
      logo: <PiBookOpenTextFill  className='text-3xl'/>,
      head: "Animated e-books",
      para: "Create even more immersive experiences with animated e-books that increase engagement, read rates and overall results."
    },
    {
      logo: <PiPresentationChartBold  className='text-3xl'/>,
      head: "Animated Presentations",
      para: "Elevate your presentations with animations that highlight all the right points and ensure your audience is actively listening."
    },
  ]
}




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
  para1: "Leverage the power of AI to improve efficiency and cost savings in our design services. ACM’s AI-enhanced workflows streamline the creation of motion design and creative, delivering results up to 60% faster.",
  para2: "This ensures that every project is handled with precision, enhancing both the quality and speed of your content production. Experience unparalleled efficiency and innovation with our AI-driven design solutions, tailored to elevate your brand’s creative.",
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
      count: "70K+",
      para: "hours dedicated to motion design"
    },
    {
      title: "CUSTOMER SATISFACTION",
      count: "4.9/5",
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
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
        <Section3  content={section3}/>
        <Section4 content={section4} roundb="rounded-b-[50px]"/>
        <Section7 content={section7}/>
        <Section8 content={section8}/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
  )
}

export default AdCreative