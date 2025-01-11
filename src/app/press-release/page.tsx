"use client"

import React,{useRef,useState} from 'react'
import Image from 'next/image'
import { LuMoveRight } from "react-icons/lu";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaCaretRight,FaCaretLeft } from "react-icons/fa";
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import "./press-release.css"
import '../blogs/blogs.css'

const pressReleases = [
  {
    id: 1,
    heading: "Company Achieves Milestone with Innovative Product Launch",
    para: "Our company has reached a significant milestone with the launch of an innovative product designed to revolutionize the industry. This marks a new era of growth and innovation.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-22T09:00:00Z",
    link: "company-achieves-milestone-with-innovative-product-launch"
  },
  {
    id: 2,
    heading: "Global Partnership to Drive Sustainable Practices Announced",
    para: "A groundbreaking global partnership has been announced to advance sustainable practices in key industries. This collaboration aims to address pressing environmental challenges.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-21T14:30:00Z",
    link: "global-partnership-to-drive-sustainable-practices-announced"
  },
  {
    id: 3,
    heading: "New Research Center Opens to Foster Technological Innovation",
    para: "The grand opening of our new research center sets the stage for technological advancements. This facility is equipped with state-of-the-art tools to empower groundbreaking discoveries.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-20T11:00:00Z",
    link: "new-research-center-opens-to-foster-technological-innovation"
  },
  {
    id: 4,
    heading: "Innovative Education Program Launched for Future Leaders",
    para: "Our organization is proud to announce the launch of an innovative education program. This initiative is designed to cultivate leadership skills in young professionals worldwide.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-19T16:15:00Z",
    link: "innovative-education-program-launched-for-future-leaders"
  },
  {
    id: 5,
    heading: "Major Investment to Expand Green Energy Infrastructure",
    para: "In a bold move to combat climate change, our company has announced a major investment to expand green energy infrastructure, promoting a sustainable and eco-friendly future.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-18T10:45:00Z",
    link: "major-investment-to-expand-green-energy-infrastructure"
  },
  {
    id: 6,
    heading: "Record-Breaking Growth in Annual Revenue Announced",
    para: "This year marks a record-breaking growth in our annual revenue, demonstrating the effectiveness of our strategic initiatives and commitment to delivering exceptional value.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-17T12:20:00Z",
    link: "record-breaking-growth-in-annual-revenue-announced"
  },
  {
    id: 7,
    heading: "Record-Breaking Growth in Annual Revenue Announced",
    para: "This year marks a record-breaking growth in our annual revenue, demonstrating the effectiveness of our strategic initiatives and commitment to delivering exceptional value.",
    img: "http://www.threegirlsmedia.com/wp-content/uploads/2015/10/promoting-press-release.jpg",
    time: "2024-11-17T12:20:00Z",
    link: "record-breaking-growth-in-annual-revenue-announced"
  }
];

  
  
  
  
function PressRelease() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sort press releases by date if needed
  const sortedPressReleases = pressReleases.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  // Get paginated items
  const paginatedPressReleases = sortedPressReleases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  const scrollToTop = () => {
    const pressReleaseSection = document.querySelector('.press-release-cards-container');
    if (pressReleaseSection) {
      pressReleaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setTimeout(scrollToTop, 0);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setTimeout(scrollToTop, 0);
  };

  return (
    <>
    <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
    <div ref={pageMainRef} className="page-main">
        <AuroraBackground>
              <div className="press-release-page-hero-sec" >
                <h1>Press Release</h1>
              </div>
        </AuroraBackground>
      <div className="press-release-main-container">
          <div className="flex top-press-release-card">
              <div className="top-press-release-card-content">
                  <h2 className="top-press-release-card-head">{pressReleases[0].heading}</h2>
                  <div>
                      <p className="top-press-release-card-para">{pressReleases[0].para}</p>
                      <button type="button" className="flex items-center top-press-release-card-btn">
                              Read More
                              <LuMoveRight />
                      </button>
                  </div>
              </div>
              <Image className="top-press-release-card-img" src={pressReleases[0].img} alt={pressReleases[0].heading} height={500} width={500} />
          </div>

          <div className=" pb-8  press-release-cards-container">
              {paginatedPressReleases.map((each,index) => (
                  <Link key={index} href={`/press-release/${each.link}`} className="press-release-card">
                      
                          <Image className="press-release-card-img" src={each.img} alt="press release img" height={500} width={500} />
                          <div className="press-release-card-content">
                              <h2 className="press-release-card-head">{each.heading}</h2>
                              <p className="press-release-card-para">{each.para}</p>
                              <button type="button" className="flex items-center top-press-release-card-btn">
                                  Read More
                                  <LuMoveRight />
                              </button>
                              <hr className='press-release-card-line'/>
                          </div>
                      
                  </Link>
              ))}

              {/* Pagination buttons */}
            <div className='pagination-container w-full flex justify-between mx-9'>
                <button 
                  className='pagination-btn' 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 1}
                >
                  <FaCaretLeft />
                  Previous
                </button>
                <button 
                  className='pagination-btn'
                  onClick={handleNextPage}
                  disabled={currentPage === Math.ceil(pressReleases.length / itemsPerPage)}
                >
                  Next
                  <FaCaretRight />
                </button>
            </div>
          </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default PressRelease