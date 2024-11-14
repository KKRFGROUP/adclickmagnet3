"use client";

import React,{useEffect} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Scrollbar  from 'smooth-scrollbar';
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
import { SiPowerpages,SiPagespeedinsights } from "react-icons/si";
import { VscSymbolKeyword } from "react-icons/vsc";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';

gsap.registerPlugin(ScrollTrigger);


const heroContent = {
    heading: "SEO Services for Enhanced Visibility",
    para: "Boost your online presence and drive targeted traffic with our expert SEO strategies. We optimize your website to rank higher on search engines, helping you reach the right audience and make a lasting impression.",
    imgUrl: "https://i.pinimg.com/736x/ea/a4/bf/eaa4bf626bc139948956117cdb53b02e.jpg"
};

const section2 = [
  {
      id: 1,
      imgUrl: "https://www.commercialdesignindia.com/cloud/2023/03/23/tI16mkGo-image.png",
      customer: "Deloitte",
      industry: "Tech"
  },
  {
      id: 2,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7WmioB86esKm0iy-crHfKL9WzTi-O9ri-A&s",
      customer: "Moderna",
      industry: "Heathc..."
  },
  {
      id: 3,
      imgUrl: "https://ms-f7-sites-prod-cdn.akamaized.net/docs/stories/787157-chipotle-retailers-azure/resources/04ec8017-81cb-4b3b-b3a4-a7a3cd29c1f7/1209721216221477916_1209721216221477916",
      customer: "chipotle",
      industry: "Food"
  },
  {
      id: 4,
      imgUrl: "https://filecenter.deltaww.com/news/images/album/news_default.jpg?w=305",
      customer: "Delta",
      industry: "Telecom"
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
    mainpara: "BUILT FOR TECH, STRATEGY & DIGITAL EXCELLENCE",
    heading: [
      {  
        text: "SEO",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "and",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Web",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "Optimization",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "for",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "Sites",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "That",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Perform",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Achieve a strong digital presence with a site built for optimal performance, speed, and search visibility. At ACM, we specialize in web development with SEO as a core focus, ensuring your website is seen and trusted by users and search engines alike.",
    para2: "Our team of SEO-savvy developers and strategists collaborates globally to deliver full-stack solutions, from front-end to back-end, elevating your site’s functionality and search visibility for an unparalleled digital experience.",
    image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
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
      logo: <SiPowerpages className='text-3xl' />,
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdMjfVilFgdbbFIHDvjVXo-jZXHBQWhE6fw&s",
        name: "SEMrush",
        para: "Comprehensive insights into competitor strategies, keyword trends, and backlink analysis to fine-tune your SEO approach."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eIwGo6Egn4vRQMCI7mvXbVRVAbDoOQJdw&s",
        name: "Ahrefs",
        para: "Powerful backlink analysis, content exploration, and site audits to elevate your SEO strategy and drive meaningful results."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2atinpxS_-9f8jTUYOJAyACUDKCxrn42_Ww&s",
        name: "Google Analytics",
        para: "Real-time traffic analysis, user behavior insights, and conversion tracking to measure and optimize performance effectively."
      },
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-google-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-ios-apps-pack-logos-3105336.png?f=webp",
        name: "Google Search Console",
        para: "Monitor your website’s indexing status, optimize visibility in Google search results, and fix technical SEO issues."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdH-VKSIsrPUbreWypHp_JAssMuRCIK571Cw&s",
        name: "Moz",
        para: "Optimize on-page elements and track rankings with Moz’s keyword research and site crawl features for consistent improvements."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qJ8waOiROjEwk9oEjksp7bTRyrmFnRhZfA&s",
        name: "Screaming Frog",
        para: "Crawl and audit your website to identify technical SEO errors, broken links, and areas for structural optimization."
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
          head: "Organic Search Is A Primary Source Of Website Traffic",
          para: "Organic search results drive the majority of website traffic, and studies show that over 50% of website traffic comes from organic search. This means that if your website is not optimized for search engines, you’re missing out on a significant amount of potential traffic.",
          img: "https://5.imimg.com/data5/SELLER/Default/2024/6/428433457/KL/LG/NL/224212668/static-website-designing-service-500x500.jpg"
      },
      {
          head: "Helps Build Trust And Credibility",
          para: "People trust search engines, and if your website ranks high in search results, it can help build trust and credibility with your target audience. High search engine rankings indicate that your website is a relevant and authoritative source of information.",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
          head: "Improves User Experience And Engagement On Website",
          para: "SEO involves optimizing your website’s structure and content to make it easy for search engines to understand and index your pages. This also improves the user experience by making your website more organized, informative, and user-friendly.",
          img: "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        head: "Cost-Effective",
        para: "SEO is a cost-effective way to drive traffic to your website. Unlike paid advertising, which requires ongoing investment, SEO can provide long-term results with minimal ongoing costs.",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6f5bc0101084519.5f170c2bc09c7.png"
    },
    {
        head: "Competitive Advantage",
        para: "SEO is a highly competitive field, and businesses that invest in SEO can gain a competitive advantage over their competitors. By optimizing your website for search engines, you can attract more traffic and leads, which can lead to increased sales and revenue.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrj86bI16uGV1kXMZjFqkjm5Svokh6nAbBg&s"
    },
  ]
} 
  

const section8 = {
    mainpara: "PROVEN SEO EXPERTISE",
    heading: "Boosting your digital presence with our SEO-driven approach",
    cards: [
      {
        title: "SEO PROJECTS COMPLETED",
        count: "15k+",
        para: "SEO projects completed to date"
      },
      {
        title: "TOTAL CLIENTS",
        count: "900+",
        para: "Total customers used our SEO services."
      },
      {
        title: "SEO HOURS INVESTED",
        count: "150K+",
        para: "Hours dedicated to SEO audits."
      },
      {
        title: "CLIENT SATISFACTION",
        count: "4.8/5",
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
        designation: "Senior SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "SEO Strategist",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "SEO Content Specialist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "Technical SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "SEO Analytics Expert",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora Explorer",
        designation: "SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
        <TracingBeam >
            <Navbar />
            <section data-bgcolor="#070707" data-textcolor="#ffffff">
            <HeroSection heading={heroContent.heading} para={heroContent.para} imgUrl={heroContent.imgUrl}/>
            </section>
            <Section2 Cards={section2}/>
            <Section3  content={section3}/>
            <Section4 content={section4} roundb='rounded-b-[50px]'/>
            <Section6 content={section6}/>
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

export default Seo