"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import dynamic from 'next/dynamic';
const Section2 = dynamic(() => import('@/components/services-components/Section2'), {
  ssr: false, // Optional: Disable SSR for this component
});
//import Section2 from '@/components/services-components/Section2';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section6 from '@/components/services-components/Section6';
import Section7 from '@/components/services-components/Section7';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';

// logos
import { FaPenNib, FaImage } from "react-icons/fa";
import { IoPhonePortraitOutline, IoSparkles } from "react-icons/io5";
import { PiCursorClickBold } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";


//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';


const heroContent = {
    heading: "Ad Creative Services",
    para: "From high-volume, multi-channel campaigns to testing and exploration, get the outstanding ad creative services you need. Plug-in a fully-stacked design team and start fueling your ad campaigns today.",
}


const section2 = [
  {
    id: 1,
    imgUrl: "/images/companies/Smokey.webp",
    customer: "Smokey",
    industry: "Restaurant"
  },
  {
      id: 2,
      imgUrl: "/images/companies/Blinds.webp",
      customer: "Blinds",
      industry: "Interior"
  },
  {
      id: 3,
      imgUrl: "/images/companies/PGroomer.webp",
      customer: "PGroomer",
      industry: "Tools..."
  },
  {
    id: 4,
    imgUrl: "/images/companies/Silsi.webp",
    customer: "Silsi",
    industry: "Restaurant"
  },
  {
    id: 5,
    imgUrl: "/images/companies/IQ Home Care.webp",
    customer: "IQ Home Care",
    industry: "Cleaning..."
  },
  
  {
      id: 6,
      imgUrl: "/images/companies/Canada View.webp",
      customer: "Canada View",
      industry: "Cleaning..."
  },
  {
      id: 7,
      imgUrl: "/images/companies/Jen Thomson.webp",
      customer: "Jen Thomson",
      industry: "Realtor..."
  },
  {
    id: 8,
    imgUrl: "/images/companies/DonGon.webp",
    customer: "DonGon",
    industry: "Restaurant"
  },
]

const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Ad",
      className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "creative",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "for",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {   
        text: "campaigns",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "that",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {  
        text: "perform",
        className: "text-black dark:text-white-500 tracking-wider",
      },
],
  para1: "The need for compelling ad creative has never been greater. But, when your biggest challenge is getting to market, the best solution is plugging into ACM’s flexible ad design services.",
  para2: "In a world where talent is hard to find, ours has no borders. Our global team of highly skilled ad designers can help with everything from market research and concept development to applying the latest AI, AR and 3D overlays.", 
  image: "/images/services page/ad creative/acm website img.webp",
  //video: "/videos/graphic design/services/01.mp4"
}

const section4: {mainpara: string; head: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "MULTIFACETED SOLUTIONS",
  head: "Comprehensive ad design services",
  cards: [
    {
      logo: <FaPenNib  className='text-3xl'/>,
      head: "Ad Design",
      para: "Produce and scale static and interactive ad creative across multiple channels and platforms. From concept to rollout and everything in between, our experts are by your side."
    },
    {
      logo: <IoPhonePortraitOutline  className='text-3xl'/>,
      head: "Social Media Ads",
      para: "Engage your audiences with stunning static, motion, and video ads. We can also help you leverage cutting-edge AI, AR, and 3D technology, so you can stand out even more effectively."
    },
    {
      logo: <FaImage  className='text-3xl'/>,
      head: "Display Ads",
      para: "Never miss an opportunity or have a dull moment in display with high-impact static and motion banners, engaging interstitials, and a variety of other dynamic digital formats."
    },
    {
      logo: <PiCursorClickBold  className='text-3xl'/>,
      head: "Native Ads",
      para: "Reach audiences with native ads that blend seamlessly into the look and feel of each platform while delivering on the key strategy and messaging."
    },
    {
      logo: <MdContactEmergency  className='text-3xl'/>,
      head: "Out-of-home Ads",
      para: "Extend your campaigns to the big screens of digital crossroads like Times Square as well as traditional billboards, airport banners and other out-of-home channels."
    },
    {
      logo: <IoSparkles  className='text-3xl'/>,
      head: "AI-enhanced Ads",
      para: "Leverage the latest AI design tools and advanced technologies to build tailored image libraries and test innovative concepts quickly and cost-effectively."
    },
  ]
}

//const section5: {mainpara: string; head: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
//  mainpara: "FORMAT MASTERY",
//  head: "Mix and match multiple ad formats for maximum impact",
//  cards: [
//    {
//      logo: <GiFallingBlob  className='text-3xl'/>,
//      head: "Animated / Motion Ads",
//      para: "Bring your ads to life with captivating animation and illustrations. Motion design can also be applied with other formats like video."
//    },
//    {
//      logo: <FaImage  className='text-3xl'/>,
//      head: "Static Image Ads",
//      para: "From a single campaign to multichannel rollouts, design striking static ads that make a statement and leave a lasting impression."
//    },
//    {
//      logo: <PiVideoFill  className='text-3xl'/>,
//      head: "Video Ads",
//      para: "Move at a solid clip with full-service video capabilities that let you make an instant impact across a wide range of platforms and channels."
//    },
//    {
//      logo: <PiCubeTransparentFill  className='text-3xl'/>,
//      head: "Augmented Reality Ads",
//      para: "Push the boundaries of creativity with world- and front-facing AR applications for innovative immersive campaigns and experiences."
//    },
//  ]
//}

const section6: {mainpara: string; heading: {text: string; className: string;}[]; para: string; social: {img: string;name: string; para: string}[]} = {
  mainpara: "PLATFORM PROFICIENCY",
  heading: [
    {
      text: "In-depth",
      className: "text-white dark:text-white-500 tracking-wider",
    },
    {
        text: "channel",
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
        text: "ad",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "creative",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
    },
    {  
        text: "clicks",
        className: "text-white dark:text-white-500 tracking-wider",
    },
],
  para: "Fueling growth crosses many channels. Thankfully, our highly experienced ad design talent does too. Every digital and social media platform has its own vibe that you need to understand to gain admittance and be accepted. ACM connects you with the ad creative services you need to crack and master these channels quickly and cost-effectively.",
  social: [
    {
      img: "/images/services page/ad creative/tools/facebook.webp",
      name: "Facebook",
      para: "Maximize engagement with custom creative tailored for Facebook’s unique audience and platform capabilities." 
    },
    {
      img: "/images/services page/ad creative/tools/linkedin.webp",
      name: "LinkedIn",
      para: "Position your brand as an industry leader with professional and engaging content designed for LinkedIn’s business-focused community." 
    },
    {
      img: "/images/services page/ad creative/tools/insta.webp",
      name: "Instagram",
      para: "Captivate Instagram’s visually-driven audience with stunning graphics and innovative content formats." 
    },
    {
      img: "/images/services page/ad creative/tools/tiktok.webp",
      name: "TikTok",
      para: "Tap into the power of viral content with TikTok creatives designed for maximum shareability and engagement." 
    },
    {
      img: "/images/services page/ad creative/tools/youtube.webp",
      name: "YouTube",
      para: "Optimize viewer interaction with tailored creatives designed for YouTube's diverse audience and video-friendly platform features." 
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
      text: "Ad",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  {
      text: "Design",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  
],
  para1: "Leverage the power of AI to improve efficiency and cost savings in our design services. ACM’s AI-enhanced workflows streamline the creation of social media creative, delivering results up to 60% faster.",
  para2: "This ensures that every project is handled with precision, enhancing both the quality and speed of your content production. Experience unparalleled efficiency and innovation with our AI-driven design solutions, tailored to elevate your brand’s social presence.",
  button: "AI Design Service" 
}

const section8: {mainpara: string; heading: string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "PROVEN EXPERTISE",
  heading: "An extension of your team, an accelerator for your ad design pipeline",
  cards: [
    {
      title: "PROJECTS COMPLETED",
      count: "800+",
      para: "Ad design projects completed to date"
    },
    {
      title: "TOTAL CUSTOMERS",
      count: "500+",
      para: "Total customers used our ad design services"
    },
    {
      title: "TOTAL HOURS",
      count: "300000+",
      para: "hours dedicated to ad creative and design"
    },
    {
      title: "CUSTOMER SATISFACTION 5/5",
      count: "4",
      para: "Average ad creative project approval rating"
    },
  ] 
}

const faq:{mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]} = {
  mainpara: "Ad Design FAQs",
  people: [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "/images/services page/faq/john doe.webp",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "/images/services page/faq/robert johnson.webp",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "/images/services page/faq/jane smith.webp",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "/images/services page/faq/emily davis.webp",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "/images/services page/faq/tyler durden.webp",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The ad expert",
      image:
        "/images/services page/faq/dora explorer.webp",
    },
  ],
  list: [
    {
      id: "1",
      title: "Is Ad Creative included in my ACM Design Subscription?",
      description: "Yes, of course, Ad Creative is included in your ACM design subscription. In fact, you can use any of our comprehensive design services at every pricing level. This also lets you have the ultimate flexibility as you create ad creative because you can tap into motion design, illustration and other services all at the same time to make your ad creative shine."
    },
    {
      id: "2",
      title: "What makes our ad design services different?",
      description: "Most ad design services and traditional creative ad agencies fall short in handling the volume and speed required by today's enterprises or end up delivering ad designs that feel disconnected from the brand. ACM effectively addresses both of these challenges, providing teams with constant access to a flexible creative team specifically aligned with their brand.<br /><br />The common issue with other ad creative services lies in their struggle to keep up with the rapid pace that modern digital marketing demands. ACM excels at this by giving teams always-on access to an elastic creative team, trained on the latest ad design technologies and services, onboarded to their brand.<br /><br />Through the involvement of dedicated creative project managers, the process is fully managed to remove the burden of vendor oversight and avoid inconsistency."
    },
    {
      id: "3",
      title: "Who's a best fit for your ad design services?",
      description: "In-house marketing and creative teams at high-growth brands, like Shopify, Amazon, Reddit and more, partner with ACM to seamlessly add extra ad design service capacity. Instead of ideas and experiments stagnating in bottlenecks and backlogs, teams can easily submit and action requests for a range of ad creative services- including emerging skills like AI, AR and 3D.<br /> <br />With ACM as a flexible and supportive extension of their teams, in-house teams can better focus on their strategic objectives, without the stress of worrying about what isn't getting done."
    },
    {
      id: "4",
      title: "Do you do custom plans?",
      description: "We designed our levels to accommodate what our customers usually require to accomplish their creative goals. However, we can customize the number of credits if you have larger and more complex needs. Otherwise, all plans are identical, giving you full access to everything you need from ACM, regardless of the number of credits you have."
    },
    {
      id: "5",
      title: "What billing options do you offer?",
      description: "We offer credit card billing or invoicing."
    },
    {
      id: "6",
      title: "What are the benefits of ad creative services?",
      description: "Ad creative services are indispensable for effective advertising campaigns across various media and formats, including print, digital, static, motion, video, stories and carousels. Without ad creative, you can't run ad campaigns-you need ad creative to launch new campaigns, test variations, and refresh them over time. In fact, with shrinking ad lifespans and human attention spans, you need fresh ad creative faster than ever.<br /><br />Digital marketing spend is expected to surpass $600 USD billion by 2024, with much of it shifting towards high-quality, high-volume creative production. In a data-driven, competitive environment, ad creative is not only a visual and textual asset, it's also a strategid necessity to capture audience attention, enhance brand awareness and drive more conversions."
    },
    {
      id: "7",
      title: "What is ad creative?",
      description: "Advertising creative is the combination of textual and visual components strategically employed to convey a message through paid advertising. The efficacy of ad creative hinges on its ability to align with the specifications and prerequisites stipulated by the advertising channel. Following these guidelines is crucial for the overall impact and success of the advertising campaign."
    },
    {
      id: "8",
      title: "Why is ad creative important?",
      description: "The quality of the ad creative has a direct impact on campaign performance. If your team is overwhelmed by requests, it can negatively affect the quality of your work. A versatile partner, like ACM, helps you break through bottlenecks so you can get the creative you need to fuel growth."
    },
    {
      id: "9",
      title: "What is advertising design?",
      description: "Advertising design is a design discipline dedicated to producing performance-oriented creative that sells products and services. A Advertising design places a strong emphasis on performance-oriented creative, meaning that its primary purpose is to yield tangible results, such as increased sales and conversions.<br /><br />The role of advertising design is clear-without design, there is no advertising. (Outside of a handful of text-only ad formats like Google Search ads.) Whether it's a billboard or a Facebook ad, design is a requirement for launching most advertising campaigns, with good design as a necessity to stand out."
    }

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
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
      <div ref={pageMainRef} className='page-main'>
        <div className='tracing-beam'>
          <TracingBeam>
              <HeroSection heading={heroContent.heading} para={heroContent.para} />
            
            <Section2 Cards={section2}/>
            <Section3  content={section3} adCreativideo={true} roundb="rounded-t-[50px]"/>
            <Section4 content={section4} roundb="rounded-b-[50px]"/>
            <Section6 content={section6} translate="-70%" responsiveTranslate='-85%'/>
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
            <Section3  content={section3} roundb="rounded-t-[50px]"/>
            <Section4 content={section4}/>
            <Section6 content={section6} translate="-70%" responsiveTranslate='-85%'/>
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
