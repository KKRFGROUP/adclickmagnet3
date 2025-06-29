"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section3 from '@/components/services-components/Section3';
import Section6 from '@/components/services-components/Section6';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';
import Cards3dSections from '../../components/services-components/Cards3dSections';

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';


const heroContent = {
    preheading: "Designing Impactful",
    heading: "Presentations with Precision",
    para: "Engage, persuade and delight with ACM’s Presentation Design Services. From on-point PowerPoints to pitch-perfect pitch decks, we craft custom presentations and templates that suit your needs.",
}


const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string; video?: string;} = {
  mainpara: "BUILT FOR COMMS, STRATEGY & MARKETING TEAMS",
  heading: [
    {  
      text: "Impactful",
      className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "Presentation",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "Design",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {   
        text: "for",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "North",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {  
        text: "American",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {  
      text: "Professionals",
      className: "text-black dark:text-white-500 tracking-wider",
    },
],
  para1: "We do your ideas justice with beautifully designed presentations that follow a logical structure, showcase your data in a clear, compelling manner, and convey your message in the most persuasive way possible.",
  para2: "Whether you need a pitch deck to persuade VCs, templates for internal communications, or slides for a key event, our world-class presentation designers will work with you to deliver a stunning final product.", 
  image: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/presentation%20sec3%20img.webp",
  //video: "https://res.cloudinary.com/dvhmy6a4u/video/upload/v1733681971/e7179a38ce0e25b77ac5c3c15b92dccc_tfhsfw.mp4"
}

const section4: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
  mainpara: "TAILORED BUSINESS SOLUTIONS",
  head: "Extensive Presentation Design services",
  cards: [
    {
        head: "Custom PowerPoint design",
        para: "Get unique, visually stunning PowerPoint designs that bring your ideas to life, ensuring your presentations are engaging and persuasive.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/custom-powerpoint%20design.webp"
    },
    {
        head: "Presentation templates",
        para: "Enjoy customizable, on-brand presentation templates that deliver consistent messaging, incorporating existing designs or built from scratch.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Presentaion%20template.webp"
    },
    {
        head: "Custom & motion graphics",
        para: "Request captivating animations and custom graphics to add flair to your presentation designs and a dynamic layer to your storytelling.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Custom%20&%20motion%20graphics.gif"
    },
    {
        head: "Data visualization",
        para: "Let us transform your complex data into clear, insightful and delightful visuals, making your information more accessible and impactful.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Data%20visualization.webp"
    },
    {
        head: "Infographics",
        para: "Add visually striking infographics to your presentation designs to convey information visually and share engagingly digestible messages.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Infographics.webp"
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
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/custom-powerpoint%20design.webp"
    },
    {
        head: "Elevator & pitch decks",
        para: "Collaborate on persuasive pitch decks perfect for supporting narratives and sealing partnerships, presented in a compelling format to capture immediate interest.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/levator%20&%20pitch%20decks.webp"
    },
    {
        head: "Sales decks & reports",
        para: "Get sales decks designed to drive decisions and conversions, combining persuasive storytelling with clear data visualizations to communicate your message.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Sales%20decks%20&%20reports.webp"
    },
    {
        head: "Investor decks & reports",
        para: "Share detailed presentations and reports to engage investors, showcasing your business's value and potential with clear, persuasive narratives and visuals.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Investor%20decks%20&%20reports.webp"
    },
    {
        head: "Slide decks",
        para: "Get engaging slide decks customized to meet your specific objectives, whether you’re presenting ideas or getting buy-in from an internal or external audience.",
        img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Pransentation-design/Sales%20decks%20&%20reports.webp"
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
      img: "/images/services page/presentation/tools/power point.webp",
      name: "Microsoft PowerPoint",
      para: "An oldie but a goodie. Our designers are experts in this leading presentation software, ensuring your presentations are visually compelling and easy to build on." 
    },
    {
      img: "/images/services page/presentation/tools/google slides.webp",
      name: "Google Slides",
      para: "A versatile staple, Google Slides is another platform our designers know through and through, so they can build you engaging, interactive presentations designs." 
    },
    {
      img: "/images/services page/presentation/tools/keynote.webp",
      name: "Keynote",
      para: "More of a Keynote connoisseur? Apple’s Keynote is another one of our specialities. We’ll deliver stunning presentations on the double, so you can communicate in style." 
    },
    {
      img: "/images/services page/presentation/tools/figma.webp",
      name: "Figma",
      para: "If you live in Figma, we’re right there with you. Our designers are fluent in Figma and prepared to deliver high-quality presentation designs using this collaborative platform." 
    },
  ]
}



const section8: {mainpara: string; heading: string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "Success Metrics",
  heading: "Choose a Presentation Design agency with a proven track record",
  cards: [
    {
      title: "Proven Experience",
      count: "41000+",
      para: "Presentation design projects completed"
    },
    {
      title: "Popular Choice",
      count: "6,650+",
      para: "Total customers used our presentation design services"
    },
    {
      title: "Customer Satisfaction 5/5",
      count: "4",
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
        <div ref={pageMainRef} className="page-main">
          <div className='tracing-beam'>
            <TracingBeam>
                <HeroSection heading={heroContent.heading} para={heroContent.para}/>
              <div className="mt-10">
                <Section3  content={section3} roundb="rounded-t-[50px]" />
              </div>
              <Cards3dSections content={section4} translate='-40%' responsiveTraslate="-90%" end="+=650"/>
              <Cards3dSections content={section5} translate='-40%' responsiveTraslate="-90%" end="+=650" className="rounded-b-[50px]"/>
              <Section6 content={section6}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />x
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Cards3dSections content={section4} translate='-83%' end="+=650"/>
              <Cards3dSections content={section5} translate='-83%' end="+=650" className="rounded-b-[50px]"/>
              <Section6 content={section6} />
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
