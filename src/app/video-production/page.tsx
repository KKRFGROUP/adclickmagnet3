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
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';
import Cards3dSections from '@/components/services-components/Cards3dSections'; 

//logos
import { LuMousePointerClick } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { RiDoubleQuotesR, RiInstagramLine } from "react-icons/ri";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';


const heroContent = {
    heading: "Ad Creative Services",
    para: "From high-volume, multi-channel campaigns to testing and exploration, get the outstanding ad creative services you need. Plug-in a fully-stacked design team and start fueling your ad campaigns today.",
    imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/745fa5bedb9310bd461d7b69073547d975fab304-1200x1200.png?auto=format&fit=max&q=100&w=1200"
}
const section2 = [
  {
      id: 1,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/f167fb70d9077c2e1a03fa0077056224bb6c8373-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Marqeta",
      industry: "Financial Serv..."
  },
  {
      id: 2,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/3d6e77a8fe7317759c78b9f9c89a07b863508d41-800x452.png?auto=format&fit=max&q=100&w=800",
      customer: "Amazon Phar...",
      industry: "Heathc..."
  },
  {
      id: 3,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/88dc0c4e1aad720988dca3ffcf5cfac0d3ce4455-800x452.png?auto=format&fit=max&q=100&w=800",
      customer: "Go Henry",
      industry: "Financial Serv..."
  },
  {
      id: 4,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/f03ebd9dcf2c9e72f7e4621e970eba354041bd72-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Reddit Business",
      industry: "Tech"
  },
  {
      id: 5,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/a74e5d93c29352eb25edd0264fb0a39bef989563-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Starve",
      industry: "Tech"
  },
  {
      id: 6,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/6a46ba66f2a0d58ff6ee1bc492406a92e0012e32-800x452.png?auto=format&fit=max&q=100&w=800",
      customer: "Imperfect Foods",
      industry: "Customer"
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

const section3a:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Ad",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "creative",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "for",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "campaigns",
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
  para1: "The need for compelling ad creative has never been greater. But, when your biggest challenge is getting to market, the best solution is plugging into ACM’s flexible ad design services.",
  para2: "In a world where talent is hard to find, ours has no borders. Our global team of highly skilled ad designers can help with everything from market research and concept development to applying the latest AI, AR and 3D overlays.", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}
const section3b:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BRAND VIDEO FOR AWARENESS",
  heading: [
    {  
      text: "Brand",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "video",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "captures",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "the",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "big",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "picture",
        className: "text-white dark:text-white-500 tracking-wider",
      },
],
  para1: "Videos like brand films, explainers, demos, testimonials, case studies, and manifestos are perfect for positioning and elevating your brand.",
  para2: "1. Collaborate with video experts\n2. Shoot or repurpose existing footage\n3. Amplify with motion, animation and 3D\n4. Use our global, remote network with minimal overheads", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}
const section3c:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "SOCIAL VIDEO FOR ENGAGEMENT",
  heading: [
    {  
      text: "Social",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "video",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "fits",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "the",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "feed",
        className: "text-white dark:text-white-500 tracking-wider",
      },
],
  para1: "Establish a custom video content strategy and production cycle to create fresh video content that is geared to boost organic awareness and engagement.",
  para2: "1. Collaborate with video experts\n2. Shoot or repurpose existing footage\n3. Amplify with motion, animation and 3D\n4. Use our global, remote network with minimal overheads", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}
const section3d:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "SOCIAL VIDEO FOR ENGAGEMENT",
  heading: [
    {  
      text: "Performance",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "video",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {   
        text: "drives",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "action",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    
],
  para1: "If you have clear goals, get help achieving them with video geared to drive conversion in paid campaigns.",
  para2: "1. Build campaigns that convert\n2. Optimize rollout for every channel\n3. Experiment with an experienced team by your side\n4. Quickly apply what you learn", 
  image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
}

const section3dCards: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
  mainpara: "WORKING WITH ACM",
  head: "Experience video excellence in every frame",
  cards: [
    {
        head: "Top 1% of global creative talent",
        para: "We're not limited by borders. Top-tier talent from diverse backgrounds equals consistently high-quality work for your brand.",
        img: "https://plus.unsplash.com/premium_photo-1695807489199-4ba908b63826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        head: "Ultra-fast turnaround times",
        para: "With dedicated proejct managers, collaboratibe online tools and expert use of AI, projects can be completed in as little as 40, 24, or even 12 hours.",
        img: "https://www.cflowapps.com/wp-content/uploads/2023/04/turnaround-time-improvement.jpg"
    },
    {
        head: "Enhanced by AI",
        para: "Our creative talent is trained and certified on the latest AI tools. You get the best of both worlds: top talent enhanced by AI efficiency. The savings incurred from AI directly translate into lower costs for you.",
        img: "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]
}


const section4: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "REAL-WORLD APPLICATIONS",
  head: "Diverse video solutions for every need",
  para: "Our versatile video production services cater to a wide range of use cases, ensuring that no matter your need, we have the expertise to deliver.",
  cards: [
    {
      logo: <LuMousePointerClick  className='text-3xl'/>,
      head: "Brand marketing videos",
      para: "Showcase your brand's story and values through engaging marketing videos that build strong connections with your audience."
    },
    {
      logo: <IoPhonePortraitOutline  className='text-3xl'/>,
      head: "Product videos",
      para: "Highlight the features and benefits of your products with detailed, high-quality product videos that drive sales."
    },
    {
      logo: <MdEmojiEmotions  className='text-3xl'/>,
      head: "UGC-style videos",
      para: "Leverage the authenticity of user-generated content to create relatable and engaging videos that resonate with your audience."
    },
    {
      logo: <IoMdVideocam  className='text-3xl'/>,
      head: "Video ad services",
      para: "Create compelling video ads that capture attention and drive action, optimized for various platforms and audiences."
    },
    {
      logo: <RiDoubleQuotesR  className='text-3xl'/>,
      head: "Customer testimonials",
      para: "Build trust and credibility with powerful customer testimonial videos that highlight real experiences and positive outcomes."
    },
    {
      logo: <RiInstagramLine    className='text-3xl'/>,
      head: "Social media video",
      para: "Engage your followers with dynamic social media videos tailored to the unique demands of each platform."
    },
  ]
}


const section8: {mainpara: string; heading: string;para?:string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "Video EXPERTISE",
  heading: "Our proven video track record",
  para: "We’ve got hard numbers to back up our presentation design chops! Skip the shot in the dark and make a data-driven decision instead. Explore the metrics that prove our promise to deliver presentation design that performs.",
  cards: [
    {
      title: "PROJECTS COMPLETED",
      count: "1,000+",
      para: "Video projects completed to date"
    },
    {
      title: "TOTAL CUSTOMERS",
      count: "200+",
      para: "Total customers used our video services"
    },
    {
      title: "TOTAL HOURS",
      count: "20k+",
      para: "Hours dedicated to video production"
    },
    {
      title: "CUSTOMER SATISFACTION",
      count: "4.7/5",
      para: "Average video project approval rating"
    },
  ] 
}

const faq:{mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]} = {
  mainpara: "Video Production FAQs",
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
      title: "Is video production available in all ACM subscriptions?",
      description: "Absolutely! Every ACM creative subscription includes our comprehensive video production services, so your video projects are always covered. Depending on your selected pricing tier, you'll gain access to these creative services, allowing you to kickstart your video production projects in under 24 hours. This versatility also lets you take advantage of other offerings like social media content creation, motion design and campaign development, all designed to boost your video production capabilities and drive greater success."
    },
    {
      id: "2",
      title: "Do you do custom video production projects?",
      description: "Yes, we do offer custom plans for video ads and video production in general. However, keep in mind that all of our pricing levels are designed to accommodate what you might need to accomplish your video goals. If you have larger and more complex needs, the number of credits can increase based on this. All standard plans are identical, and since they include video production at all levels, you'll have full access to all of our capabilities from day one."
    },
    {
      id: "3",
      title: "What happens if I don't use all my ACM credits in video production?",
      description: "Our pricing levels are designed with flexibility to accommodate your needs, which we understand may fluctuate month to month. Unlike standard agency retainers where you use or lose your credits, your unused video credits roll over for up to three months, ensuring you get the full value from your subscription. If you end up using fewer credits than included in the subscription for video production, you can always apply these credits to other capabilities or roll them over for the next few months (3) regardless of the complexity of the project (low and medium complexity tiers)."
    },
    {
      id: "4",
      title: "Where does ACM source talent for video production?",
      description: "At ACM, we understand that many of our customers require international content that resonates with diverse audiences. To meet these needs, we source U.S.-relevant talent specifically tailored to your project requirements. This means we carefully select skilled professionals who can deliver high-quality video production that aligns with your vision and targets the right demographic. Whether you need actors, directors or production crew members, we ensure that the talent we provide will enhance your content and help you achieve your creative goals. Our extensive network allows us to find the perfect fit for your video production needs, ensuring a seamless and effective collaboration."
    },
    {
      id: "5",
      title: "What kinds of video and production skills does ACM offer?",
      description: "ACM offers a comprehensive range of video and production skills to cover every aspect of your project. Our services include content strategy to help you plan and conceptualize your video, as well as scriptwriting to craft compelling narratives. We provide direction and videography to ensure high-quality filming, and our post-production services include editing, motion graphics and sound design to enhance your video and give it a polished, professional finish. With ACM, you have access to all the expertise needed to create outstanding video content from start to finish"
    },
    {
      id: "6",
      title: "What type of customers is the best fit for ACM's video services?",
      description: "Our video solutions are designed for ambitious brands that are either experimenting with social video and video advertising for the first time or looking to scale their video outputs to unprecedented levels. Whether you need videos for advertising platforms like Facebook or social media channels like TikTok, our services can help you achieve your goals even if you lack in-house capabilities. We tailor each approach and strategy specifically to your brand, ensuring unique and impactful video content."
    },

  ]
}

function VideoProduction() { 
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
        <Section3  content={section3a}  roundb="rounded-b-[50px]"/>
        <Section3  content={section3b} order="order-1" roundb="rounded-b-[50px]" hide="invisible"/>
        <Section3  content={section3c}  hide="invisible" roundb="rounded-b-[50px]"/>
        <Section3  content={section3d} order="order-1"  hide="invisible"/>
        <Cards3dSections content={section3dCards} translate='-60%'/>
        <Section4 content={section4}/>
        <Section8 content={section8} roundt="rounded-t-[0px]"/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
  )
}

export default VideoProduction