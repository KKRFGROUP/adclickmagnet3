


"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./slug.css";

// Content types
interface SubSection {
  subHeading: string;
  subPara: string;
}

interface ContentItem {
  id: number;
  heading: string;
  mainPara: string[];
  subSections: SubSection[];
  img: string;
  time: string;
  link: string;
}



const content = [
  {
    id: 1,
    heading: "Company Achieves Milestone with Innovative Product Launch",
    mainPara: [
      "Our company has reached a significant milestone with the launch of an innovative product designed to revolutionize the industry. This marks a new era of growth and innovation.",
      "The product represents years of dedicated research and development. It addresses key challenges within the industry and offers cutting-edge solutions that improve efficiency and user experience.",
      "We believe this launch will not only benefit our clients but also set a benchmark for others in the industry, emphasizing the importance of creativity and determination."
    ],
    subSections: [
      {
        subHeading: "Product Features and Benefits",
        subPara:
          "This innovative product comes packed with a host of features tailored to meet the demands of modern-day users. Its unique design ensures ease of use while maintaining superior performance standards. Key benefits include increased productivity, energy efficiency, and seamless integration with existing systems.",
      },
      {
        subHeading: "Future Plans and Roadmap",
        subPara:
          "With the success of this launch, our focus now shifts to expanding the product’s reach and exploring new markets. We have ambitious plans to introduce updates and enhancements that will keep us ahead of the curve. Our roadmap includes continuous improvement and customer-centric innovation as core principles.",
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-22T09:00:00Z",
    link: "company-achieves-milestone-with-innovative-product-launch",
  },

  {
    id: 2,
    heading: "Global Partnership to Drive Sustainable Practices Announced",
    mainPara: [
      "A groundbreaking global partnership has been announced to advance sustainable practices in key industries. This collaboration aims to address pressing environmental challenges.",
      "The partnership unites industry leaders, policymakers, and environmental experts to create a unified approach toward sustainable development. By pooling resources and expertise, this initiative sets a precedent for addressing climate-related issues effectively.",
      "The collaboration is expected to lead to significant innovations in renewable energy, waste reduction, and sustainable supply chain management, showcasing a commitment to creating a greener future for generations to come."
    ],
    subSections: [
      {
        subHeading: "Key Objectives of the Partnership",
        subPara:
          "The partnership focuses on three primary objectives: promoting renewable energy adoption, minimizing industrial waste, and enhancing resource efficiency. By achieving these goals, it aims to set new standards for sustainability in various sectors, fostering long-term economic and environmental benefits."
      },
      {
        subHeading: "Impact on Industries and Communities",
        subPara:
          "This initiative is poised to transform industries by encouraging sustainable practices that reduce environmental footprints. Communities will benefit from improved air and water quality, reduced waste, and access to eco-friendly technologies. The collaboration also prioritizes education and awareness to empower individuals to contribute to sustainability efforts."
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-21T14:30:00Z",
    link: "global-partnership-to-drive-sustainable-practices-announced",
  },
  {
    id: 3,
    heading: "New Research Center Opens to Foster Technological Innovation",
    mainPara: [
      "The grand opening of our new research center sets the stage for groundbreaking technological advancements. Equipped with cutting-edge tools and resources, this facility is designed to foster innovation and drive research excellence.",
      "Our goal is to provide researchers and innovators with an environment that promotes creativity and collaboration. The center will play a vital role in addressing key challenges and exploring transformative solutions for industries worldwide.",
      "This milestone reflects our commitment to advancing technology and contributing to a sustainable, future-ready society. We are proud to provide a space where visionary ideas can become reality."
    ],
    subSections: [
      {
        subHeading: "State-of-the-Art Facilities and Resources",
        subPara:
          "The research center boasts state-of-the-art laboratories, collaborative workspaces, and advanced equipment to support a wide range of technological pursuits. These facilities are tailored to enable researchers to push the boundaries of innovation and bring ideas to life. Key features include high-speed computing systems, prototyping labs, and dedicated areas for testing and analysis."
      },
      {
        subHeading: "Collaborative Opportunities and Partnerships",
        subPara:
          "We believe that collaboration is the cornerstone of innovation. The research center will host partnerships with leading universities, tech companies, and government organizations to drive knowledge-sharing and co-creation. These collaborations aim to accelerate discoveries and bring practical solutions to market faster."
      },
      {
        subHeading: "Vision for the Future",
        subPara:
          "Looking ahead, our research center will focus on emerging fields such as artificial intelligence, renewable energy, and advanced manufacturing. By fostering a culture of continuous learning and exploration, we aim to position ourselves as leaders in technological innovation. Our vision is to empower future generations of researchers and entrepreneurs to shape a better tomorrow."
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-20T11:00:00Z",
    link: "new-research-center-opens-to-foster-technological-innovation",
  },
   {
    id: 4,
    heading: "Innovative Education Program Launched for Future Leaders",
    mainPara: [
      "Our organization is proud to announce the launch of an innovative education program designed to cultivate leadership skills in young professionals worldwide. This initiative aims to empower individuals by providing the tools and knowledge necessary to navigate the challenges of tomorrow.",
      "The program integrates cutting-edge methodologies with real-world applications, ensuring that participants gain a comprehensive understanding of leadership dynamics. By focusing on experiential learning, it bridges the gap between theoretical concepts and practical implementation.",
      "This launch underscores our commitment to fostering a generation of leaders equipped to tackle global challenges, create sustainable solutions, and drive meaningful change across industries."
    ],
    subSections: [
      {
        subHeading: "Program Highlights and Objectives",
        subPara:
          "The education program is structured around core objectives, including developing critical thinking, enhancing problem-solving skills, and fostering collaborative innovation. Key highlights include mentorship by industry leaders, immersive workshops, and access to a global alumni network. The program is designed to adapt to the evolving needs of participants, ensuring a personalized learning experience.",
      },
      {
        subHeading: "Impact on Future Generations",
        subPara:
          "By launching this program, we aim to inspire future generations to take on leadership roles in their respective fields. The initiative is expected to create ripple effects, promoting a culture of excellence and responsibility. Participants will leave the program with a renewed sense of purpose, ready to contribute to their communities and industries.",
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-19T16:15:00Z",
    link: "innovative-education-program-launched-for-future-leaders",
  },
   {
    id: 5,
    heading: "Major Investment to Expand Green Energy Infrastructure",
    mainPara: [
      "In a bold move to combat climate change, our company has announced a major investment to expand green energy infrastructure, promoting a sustainable and eco-friendly future.",
      "This investment focuses on creating innovative energy solutions that are environmentally friendly and economically viable. The initiative aims to make renewable energy more accessible to industries and individuals alike.",
      "By taking this step, our company is setting an example for corporate responsibility and inspiring other organizations to contribute to a greener planet."
    ],
    subSections: [
      {
        subHeading: "Impact on the Renewable Energy Sector",
        subPara:
          "This investment will significantly boost the adoption of renewable energy technologies. It includes plans to develop advanced solar and wind power facilities, upgrade existing infrastructure, and research innovative energy storage solutions. The aim is to reduce dependency on fossil fuels and cut down carbon emissions."
      },
      {
        subHeading: "Collaborations and Partnerships",
        subPara:
          "Our initiative involves partnerships with leading organizations and governments worldwide. These collaborations aim to pool resources and expertise to drive large-scale implementation of green energy projects. Together, we hope to create a ripple effect that accelerates the transition to a sustainable energy future."
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-18T10:45:00Z",
    link: "major-investment-to-expand-green-energy-infrastructure",
  },
   {
    id: 6,
    heading: "Record-Breaking Growth in Annual Revenue Announced",
    mainPara: [
      "This year marks a record-breaking growth in our annual revenue, demonstrating the effectiveness of our strategic initiatives and commitment to delivering exceptional value.",
      "Our focused approach to delivering customer-centric solutions has been instrumental in achieving this milestone. The collaborative efforts of our teams have ensured consistent performance across all key markets.",
      "We attribute this success to the trust of our clients, the dedication of our employees, and our unyielding focus on innovation and excellence in every aspect of our business operations."
    ],
    subSections: [
      {
        subHeading: "Key Drivers of Revenue Growth",
        subPara:
          "The significant growth in revenue can be attributed to several factors, including the introduction of new product lines, expansion into emerging markets, and strategic partnerships. Our ability to adapt to changing market dynamics and consistently deliver value to our stakeholders has been crucial in achieving this milestone.",
      },
      {
        subHeading: "Looking Ahead: Sustaining Momentum",
        subPara:
          "As we celebrate this achievement, we are equally focused on the future. Plans are underway to further diversify our offerings, strengthen our market position, and invest in technology-driven solutions. By continuing to prioritize innovation and customer satisfaction, we aim to maintain this upward trajectory.",
      }
    ],
    img: "/images/press release img.webp",
    time: "2024-11-17T12:20:00Z",
    link: "record-breaking-growth-in-annual-revenue-announced",
  }
]

const morePressRelease = [
{
id: 4,
heading: "Innovative Education Program Launched for Future Leaders",
para: "Our organization is proud to announce the launch of an innovative education program. This initiative is designed to cultivate leadership skills in young professionals worldwide.",
img: "/images/press release img.webp",
time: "2024-11-19T16:15:00Z",
link: "innovative-education-program-launched-for-future-leaders"
},
{
id: 5,
heading: "Major Investment to Expand Green Energy Infrastructure",
para: "In a bold move to combat climate change, our company has announced a major investment to expand green energy infrastructure, promoting a sustainable and eco-friendly future.",
img: "/images/press release img.webp",
time: "2024-11-18T10:45:00Z",
link: "major-investment-to-expand-green-energy-infrastructure"
},
{
id: 6,
heading: "Record-Breaking Growth in Annual Revenue Announced",
para: "This year marks a record-breaking growth in our annual revenue, demonstrating the effectiveness of our strategic initiatives and commitment to delivering exceptional value.",
img: "/images/press release img.webp",
time: "2024-11-17T12:20:00Z",
link: "record-breaking-growth-in-annual-revenue-announced"
},

]


function SlugPressRelease() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [slugContent, setSlugContent] = useState<ContentItem | null>(null);
  const params = useParams();
  const slug = params?.slug as string;

  const toggleMenu = (arg?: boolean): void => {
    const newState = arg !== undefined ? arg : !isOpen;
    setIsOpen(newState);

    if (pageMainRef.current) {
      if (newState) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };

  useEffect(() => {
    if (!slug) return;
    
    const foundContent = content.find((item) => item.link === slug) || null;
    setSlugContent(foundContent);
  }, [slug]);
  
  // Share functionality
  const shareArticle = (platform: 'linkedin' | 'facebook' | 'twitter'): void => {
    const url = window.location.href;
    const title = slugContent?.heading || 'Press Release';
    
    let shareUrl: string;
    switch(platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Format date consistently
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!slugContent) {
    return (
      <>
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
        <div ref={pageMainRef} className="page-main">
          <div className="press-release-slug-page-container">
            <h1>Press Release Not Found</h1>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
      <div ref={pageMainRef} className="page-main">
        <div className="press-release-slug-page-container">
          <div className="mb-[10%]">
            <div className="press-release-hero-sec">
              <div>
                <h2 className="press-release-hero-sec-head">{slugContent.heading}</h2>
                <p className="press-release-hero-sec-para">
                  adClickMagnet • {formatDate(slugContent.time)}
                </p>
              </div>
              <Image 
                className="press-release-hero-sec-img" 
                src={slugContent.img} 
                alt={slugContent.heading} 
                height={500} 
                width={500}
                priority
              />
            </div>
          </div>

          <div className="flex press-release-slug-content-card">
            <div className="sharing-social-handles">
              <div className="flex items-center justify-between text-2xl">
                <FaLinkedin onClick={() => shareArticle('linkedin')} className="cursor-pointer" />
                <FaFacebook onClick={() => shareArticle('facebook')} className="cursor-pointer" />
                <FaTwitter onClick={() => shareArticle('twitter')} className="cursor-pointer" />
              </div>
              <p className="sharing-social-handles-para">Share This Article</p>
            </div>

            <div className="press-release-slug-content">
              {slugContent.mainPara.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="press-release-slug-content-para">{paragraph}</p>
                  <br />
                </React.Fragment>
              ))}
              
              {slugContent.subSections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h2 className="press-release-slug-content-head">{section.subHeading}</h2>
                  <p className="press-release-slug-content-para">{section.subPara}</p>
                </div>
              ))}
              
              <div className="press-release-author-card">
                <Image 
                  className="press-release-author-card-img" 
                  src="/images/logos/mobile-navbar-logo.webp" 
                  alt="logo" 
                  height={500} 
                  width={500} 
                />
                <div>
                  <p className="press-release-author-card-author">THE AUTHOR</p>
                  <p className="press-release-author-card-name">Aftab • adClickMagnet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="read-more-press-release mt-2">
            <h2 className="read-more-press-release-head">Read More Press Release</h2>
            <div className="flex justify-between read-more-press-release-flex">
              {morePressRelease.map((item, index) => (
                <Link key={index} href={`/press-release/${item.link}`} className="read-more-press-release-card">
                  <Image 
                    className="read-more-press-release-card-img" 
                    src={item.img} 
                    alt={item.heading} 
                    height={500} 
                    width={500} 
                  />
                  <h2 className="read-more-press-release-card-head">{item.heading}</h2>
                  <p className="read-more-press-release-card-para">{item.para}</p>
                  <div className="flex">
                    <p className="read-more-press-release-card-acm-date">adClickMagnet</p>
                    <p className="read-more-press-release-card-acm-date">{formatDate(item.time)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SlugPressRelease;