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
import Section6 from '@/components/services-components/Section6';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';
import Cards3dSections from '../../components/services-components/Cards3dSections';

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';


const heroContent = {
    heading: "Presentation Design",
    para: "Engage, persuade and delight with ACM’s Presentation Design Services. From on-point PowerPoints to pitch-perfect pitch decks, we craft custom presentations and templates that suit your needs.",
    imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/745fa5bedb9310bd461d7b69073547d975fab304-1200x1200.png?auto=format&fit=max&q=100&w=1200"
}


const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Elevate",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "your",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "presentations",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "and",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "sales",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "decks",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
      text: "with",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
      text: "ACM",
      className: "text-white dark:text-white-500 tracking-wider",
    },
],
  para1: "We do your ideas justice with beautifully designed presentations that follow a logical structure, showcase your data in a clear, compelling manner and convey your message in the most persuasive way possible.",
  para2: "Whether you need a pitch deck to persuade VCs, templates for internal communications or slides for a key event, our world-class team of presentation designers will work with you to deliver a stunning final product.", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}

const section4: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
  mainpara: "TAILORED BUSINESS SOLUTIONS",
  head: "Extensive Presentation Design services",
  cards: [
    {
        head: "Custom PowerPoint design",
        para: "Get unique, visually stunning PowerPoint designs that bring your ideas to life, ensuring your presentations are engaging and persuasive.",
        img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Presentation templates",
        para: "Enjoy customizable, on-brand presentation templates that deliver consistent messaging, incorporating existing designs or built from scratch.",
        img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Custom & motion graphics",
        para: "Request captivating animations and custom graphics to add flair to your presentation designs and a dynamic layer to your storytelling.",
        img: "https://images.unsplash.com/photo-1651813338290-2f869def49b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Data visualization",
        para: "Let us transform your complex data into clear, insightful and delightful visuals, making your information more accessible and impactful.",
        img: "https://plus.unsplash.com/premium_photo-1681426499183-bd8be49a9a7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Infographics",
        para: "Add visually striking infographics to your presentation designs to convey information visually and share engagingly digestible messages.",
        img: "https://images.pexels.com/photos/8518675/pexels-photo-8518675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]
}




















const section5: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
  mainpara: "From Brand Decks to Pitch Decks",
  head: "Specialized Presentation Design for every business need",
  cards: [
    {
        head: "Business presentations",
        para: "Get professional, effective presentations tailored to your business, designed to communicate your message clearly and leave a lasting impression on your audience.",
        img: "https://images.pexels.com/photos/7889216/pexels-photo-7889216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        head: "Elevator & pitch decks",
        para: "Collaborate on persuasive pitch decks perfect for supporting narratives and sealing partnerships, presented in a compelling format to capture immediate interest.",
        img: "https://media.licdn.com/dms/image/C4D12AQH21jE2vIEalA/article-cover_image-shrink_720_1280/0/1606914922904?e=2147483647&v=beta&t=JEo-iTiWPRet9iCsG4o83DIpfG0QsQb4c2DpMMDrPB0"
    },
    {
        head: "Sales decks & reports",
        para: "Get sales decks designed to drive decisions and conversions, combining persuasive storytelling with clear data visualizations to communicate your message.",
        img: "https://images.pexels.com/photos/7947704/pexels-photo-7947704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        head: "Investor decks & reports",
        para: "Share detailed presentations and reports to engage investors, showcasing your business's value and potential with clear, persuasive narratives and visuals.",
        img: "https://plus.unsplash.com/premium_photo-1682310156923-3f4a463610f0?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Slide decks",
        para: "Get engaging slide decks customized to meet your specific objectives, whether you’re presenting ideas or getting buy-in from an internal or external audience.",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
}


const section6: {mainpara: string; heading: {text: string; className: string;}[]; para: string; social: {img: string;name: string; para: string}[]} = {
  mainpara: "FORMAT FLUENCY",
  heading: [
    {
      text: "Expertise",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "across",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "all",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "Presentation",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "Design",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "platforms",
        className: "text-white dark:text-white-500 tracking-wider",
    },
],
  para: "Our presentation designers can do it all. With expertise across all major presentation design platforms, we can adapt to your preferred tools and integrate with your creative workflows. Whether you’re a PowerPoint aficionado or Google Slides devotee, we’ll design in your platform of choice to deliver a powerful, high-impact presentation.",
  social: [
    {
      img: "https://cdn.sanity.io/images/k0dlbavy/production/01d5744064c012140992a2cc21bbe3edab741e96-240x240.png?auto=format&fit=max&q=100&w=240",
      name: "Microsoft PowerPoint",
      para: "An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on." 
    },
    {
      img: "https://cdn.sanity.io/images/k0dlbavy/production/9a2df0d6a7a9d89e570b3dbe6c242daa29163bb6-240x240.png?auto=format&fit=max&q=100&w=240",
      name: "Google Slides",
      para: "A versatile staple, Google Slides is another platform our designers know through and through, so they can build you engaging, interactive presentations designs." 
    },
    {
      img: "https://cdn.sanity.io/images/k0dlbavy/production/a0bd07147f67a6a209e083c67c3079fc558650a0-240x240.png?auto=format&fit=max&q=100&w=240",
      name: "Keynote",
      para: "More of a Keynote connoisseur? Apple’s Keynote is another one of our specialities. We’ll deliver stunning presentations on the double, so you can communicate in style." 
    },
    {
      img: "https://cdn.sanity.io/images/k0dlbavy/production/073ab9da11f56aebe63ca6b07b9e2dc0f4392059-240x240.png?auto=format&fit=max&q=100&w=240",
      name: "Figma",
      para: "If you live in Figma, we’re right there with you. Our designers are fluent in Figma and prepared to deliver high-quality presentation designs using this collaborative platform." 
    },
    {
      img: "https://cdn.sanity.io/images/k0dlbavy/production/51e4ef8405d2ac1c783d00e72c51f38b8fbeb68c-240x240.png?auto=format&fit=max&q=100&w=240",
      name: "Other platforms",
      para: "Have another platform in mind? We’re here for it. With a global team of presentation designers to tap into, we have skills across the board and can cater to any preference." 
    },
  ]
}



const section8: {mainpara: string; heading: string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "Success Metrics",
  heading: "Choose a Presentation Design agency with a proven track record",
  cards: [
    {
      title: "Proven Experience",
      count: "41k+",
      para: "Presentation design projects completed"
    },
    {
      title: "Popular Choice",
      count: "6,650+",
      para: "Total customers used our presentation design services"
    },
    {
      title: "Customer Satisfaction",
      count: "4.8/5",
      para: "Average presentation project approval rating"
    },
    {
      title: "Enterprise Friendly",
      count: "250+",
      para: "Enterprises have used our presentation design services"
    },
  ] 
}

const faq:{mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]} = {
  mainpara: "FAQs",
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
      title: "Is Presentation Design included in my ACM Design Subscription?",
      description: "Yes, of course, Presentation Design is included in your ACM design subscription. In fact, you can use any of our comprehensive creative services at every pricing level. This also lets you have the ultimate flexibility as you create presentation decks because you can tap into motion design, illustration and other services all at the same time to make your presentations and decks shine."
    },
    {
      id: "2",
      title: "What type of presentations does ACM design?",
      description: "ACM specializes in a wide range of presentation design services, presentation templates and graphics, PowerPoint-specific and other platform-specific designs, pitch decks and sales presentations. With a top-tier global talent pool and comprehensive range of creative services, we can also help you integrate a range of data visualization tools and storytelling capabilities like custom illustration, motion design and video production. We've even helped some of our clients create animated and 3D-infographics that can be used in presentation decks, websites and more."
    },
    {
      id: "3",
      title: "Are ACM's Presentation Design services for business or individuals?",
      description: "ACM's outsourcing model is designed for businesses, namely startups, scaleups, mid-market and enterprise businesses that require high volumes of marketing and advertising creative. Granted, this doesn't mean every presentation design project is a high-volume project with hundreds of slides. Many of our customers have multiple projects in the pipeline at the same time. For instance, a brand that's working on a brand toolkit may also be building presentation templates as part of its design systems. Or, a customer may need pitch decks as part of a multichannel integrated campaign."
    },
    {
      id: "4",
      title: "What types of customers use Presentation Design Services?",
      description: "Our presentation design services cater to a diverse range of customers, specifically addressing the needs of scaleups and enterprises of various sizes. The flexibility of our design services allows for seamless adaptation to match the unique demands of your business. Among our satisfied customer base are renowned companies such as Amazon, Shopify and Facebook, just to name a few. Interested in discovering how ACM can cater to your specific requirements? Schedule a call with us and explore the possibilities."
    },
    {
      id: "5",
      title: "Why is ACM better than other Presentation Design Services?",
      description: "What makes ACM stand out in the world of Presentation Design Services is our exceptional speed and access to a vast pool of top-tier design talent globally. Our fully managed solution is also designed so that we feel and act like an extension of your team. With one subscription, you can request Presentation Design, Ad Design, Social Media Creative and more. Say goodbye to bottlenecks, backlogs and overburdened creative departments. Our project managers and design directors seamlessly integrate into your team and our collaborative platform briefing. commenting and asset delivery easy as pie (charts)."
    },
    {
      id: "6",
      title: "What is Presentation Design?",
      description: "Presentation design is a pivotal tool in ensuring a seamless and visually engaging narrative in any number of business contexts. Presentation design goes beyond mere organization, elevating the overall aesthetic appeal of your Google Slides or PowerPoint presentation. By skillfully integrating attractive layouts, impactful infographics and relevant designs tailored to your brand and messaging, presentation design aims to captivate your audience and leave a lasting impression. Ultimately, the essence of presentation design lies in its ability to enhance the storytelling aspect, whether you're selling a product, service or narrating the compelling story of your company."
    },
    {
      id: "7",
      title: "What does a presentation designer do?",
      description: "The role of a presentation designer encompasses the creative orchestration of all visual elements within a presentation. The presentation designer delves into the core messaging of the presentation and evaluates the necessary number of slides to proficiently convey the intended message. Beyond this, the presentation designer's responsibilities extend to defining key design elements such as the overall style, fonts, icons, images and infographics of pitch decks, Google Slides, or PowerPoint presentation. A crucial aspect of the designer's role is to ensure the seamless integration of these elements, maintaining consistency and adherence to the brand identity throughout."
    },
    {
      id: "8",
      title: "How do you make a well-designed presentation?",
      description: "An expertly crafted business presentation accounts for several factors including: the purpose of the presentation, the brand/business voice and style, the audience, current and best presentation design practices and knowledge of the tools and technology. A well-designed presentation helps the user share essential messaging simply and effectively and speaks to the audience by being engaging on many levels from clear visuals and intriguing animations to seamless branding and melding of all the elements. A great presentation design partner also helps you make this process turnkey, so you can request additional decks whenever you need."
    },
    {
      id: "9",
      title: "Do you do custom plans?",
      description: "We designed our levels to accommodate what our customers usually require to accomplish their creative goals. However, we can customize the number of credits if you have larger and more complex needs. Otherwise, all plans are identical, giving you full access to everything you need from ACM, regardless of the number of credits you have."
    },
    {
        id: "10",
        title: "What billing options do you offer?",
        description: "We offer credit card billing or invoicing."
      }

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
        <Cards3dSections content={section4}/>
        <Cards3dSections content={section5} className="rounded-b-[50px]"/>
        <Section6 content={section6}/>
        <Section8 content={section8}/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
  )
}

export default AdCreative