
"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaCaretRight,FaCaretLeft } from "react-icons/fa";
import Link from 'next/link';
import gsap from 'gsap';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

const demoBlogs = [
  {
    id: 1,
    heading: "10 Tips for Writing Clean Code",
    paragraph: "Writing clean code is essential for maintainability and scalability. Here are 10 tips to help you write better code.",
    time: "2024-11-22T09:00:00Z",
    category: "web development",
    name: "John Doe",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "10-tips-for-writing-clean-code"
  },
  {
    id: 2,
    heading: "The Future of Responsive Design",
    paragraph: "Learn how responsive design is evolving and why it's critical for modern web development.",
    time: "2024-11-21T12:00:00Z",
    category: "web development",
    name: "Jane Smith",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "the-future-of-responsive-design"
  },
  {
    id: 3,
    heading: "Top 5 Graphic Design Trends of 2024",
    paragraph: "Discover the latest trends in graphic design that are shaping the creative industry.",
    time: "2024-11-20T15:00:00Z",
    category: "graphic design",
    name: "Alex Johnson",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "top-5-graphic-design-trends-of-2024"
  },
  {
    id: 4,
    heading: "Mastering Logo Design Basics",
    paragraph: "A guide to creating impactful logos that leave a lasting impression.",
    time: "2024-11-19T10:00:00Z",
    category: "graphic design",
    name: "Emily Brown",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "mastering-logo-design-basics"
  },
  {
    id: 5,
    heading: "How SEO Impacts Business Growth",
    paragraph: "Understand the key role of SEO in driving traffic and revenue for your business.",
    time: "2024-11-18T08:30:00Z",
    category: "SEO",
    name: "Michael Green",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "how-seo-impacts-business-growth"
  },
  {
    id: 6,
    heading: "SEO Best Practices for 2024",
    paragraph: "Stay ahead in search rankings with these SEO best practices.",
    time: "2024-11-17T11:15:00Z",
    category: "SEO",
    name: "Sophia Lee",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "seo-best-practices-for-2024"
  },
  {
    id: 7,
    heading: "Meta Ads: A Comprehensive Guide",
    paragraph: "Learn how to create effective Meta Ads to maximize your ROI.",
    time: "2024-11-16T14:45:00Z",
    category: "meta ads",
    name: "Daniel Martinez",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "meta-ads-a-comprehensive-guide"
  },
  {
    id: 8,
    heading: "Maximizing Your Meta Ads Budget",
    paragraph: "Tips to optimize your ad spend and get better results with Meta Ads.",
    time: "2024-11-15T09:00:00Z",
    category: "meta ads",
    name: "Olivia Wilson",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "maximizing-your-meta-ads-budget"
  },
  {
    id: 9,
    heading: "LinkedIn Ads: Targeting Professionals",
    paragraph: "Learn how LinkedIn Ads can help you reach a professional audience effectively.",
    time: "2024-11-14T13:30:00Z",
    category: "LinkedIn ads",
    name: "Ethan Taylor",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "linkedin-ads-targeting-professionals"
  },
  {
    id: 10,
    heading: "Creating Compelling LinkedIn Ads",
    paragraph: "Strategies for designing LinkedIn Ads that capture attention and drive engagement.",
    time: "2024-11-13T16:00:00Z",
    category: "LinkedIn ads",
    name: "Isabella Davis",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png",
    link: "creating-compelling-linkedin-ads"
  },

  {
    id: 11,
    heading: "The Basics of Google Ads",
    paragraph: "An introduction to Google Ads and how to use them effectively.",
    time: "2024-11-12T08:00:00Z",
    category: "google ads",
    name: "Aiden White",
    link: "the-basics-of-google-ads",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 12,
    heading: "Advanced Google Ads Strategies",
    paragraph: "Take your Google Ads campaigns to the next level with these advanced techniques.",
    time: "2024-11-11T10:30:00Z",
    category: "google ads",
    name: "Mia Thompson",
    link: "advanced-google-ads-strategies",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 13,
    heading: "Exploring the Latest JavaScript Frameworks",
    paragraph: "A look at the newest JavaScript frameworks shaping modern web development.",
    time: "2024-11-10T12:45:00Z",
    category: "web development",
    name: "Liam Harris",
    link: "exploring-the-latest-javaScript-frameworks",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 14,
    heading: "Building UI Components with Figma",
    paragraph: "Learn how to design and share reusable UI components using Figma.",
    time: "2024-11-09T11:15:00Z",
    category: "graphic design",
    name: "Emma Walker",
    link: "building-ui-components-with-figma",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 15,
    heading: "Keyword Research Simplified",
    paragraph: "A step-by-step guide to finding the right keywords for your SEO strategy.",
    time: "2024-11-08T14:00:00Z",
    category: "SEO",
    name: "Noah Adams",
    link: "keyword-research-simplified",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 16,
    heading: "Getting Started with Google Ads for Beginners",
    paragraph: "A beginner-friendly guide to setting up your first Google Ads campaign.",
    time: "2024-11-07T13:30:00Z",
    category: "google ads",
    name: "Ava Scott",
    link: "getting-started-with-google-ads-for-beginners",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  },
  {
    id: 17,
    heading: "Leveraging Meta Ads for Brand Awareness",
    paragraph: "How to use Meta Ads to build brand recognition and loyalty.",
    time: "2024-11-06T09:15:00Z",
    category: "meta ads",
    name: "Oliver Young",
    link: "leveraging-meta-ads-for-brand-awareness",
    image: "https://png.pngtree.com/png-clipart/20220615/original/pngtree-blog-chalk-white-icon-on-black-background-png-image_8058245.png"
  }
];


const categories = [
  {
    name: "Web Development",
    link: "web-development"
  },
  {
    name: "Graphic Design",
    link: "graphic-design"
  },
  {
    name: "SEO",
    link: "seo"
  },
  {
    name: "Meta Ads",
    link: "meta-ads"
  },
  {
    name: "Google Ads",
    link: "google-ads"
  },
  {
    name: "LinkedIn Ads",
    link: "linkedIn-ads"
  },
]



function TopCaseStudies() {
    //const [blogs, setBlogs] = useState([]);
    //const [error, setError] = useState(null);
    const latestBlogTriggerRef = useRef(null);
    const latestBlogSectionRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const sortedBlogs = demoBlogs.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

    const paginatedBlogs = sortedBlogs.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    useEffect(() => {

      {/**fetching data*/}
        //const fetchBlogs = async () => {
        //  try {
        //    const response = await fetch('/api/blogs');
        //    if (!response.ok) {
        //      throw new Error(`Error fetching blogs: ${response.statusText}`);
        //    }
        //    const data = await response.json();
        //    setBlogs(data);
        //  } catch (err:any) {
        //    setError(err.message);
        //  }
        //};

        //fetchBlogs();

      {/*GSAP animation*/}
      
      const hscroll = gsap.fromTo(
        latestBlogSectionRef.current,
        {translateY:0},
        {
          translateY: "0%",
          ease: "none",
          duration: 2,
          scrollTrigger:{
            trigger: latestBlogTriggerRef.current,
            start: "top -10%",
            end: "-10% top",
            scrub: 2,
            pin: true
          }
        }
      )
      return () => {
        hscroll.kill();
      }
  
    })

    const handlePrevPage = () => {
      setCurrentPage((prev) => prev - 1);
      setTimeout(scrollToTop, 0);
    };
    
    const handleNextPage = () => {
      setCurrentPage((prev) => prev + 1);
      setTimeout(scrollToTop, 0);
    };

    const scrollToTop = () => {
      const blogListSection = document.querySelector('.blog-page-latest-head');
      if (blogListSection) {
        blogListSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };




 
  return (
    <>
      <AuroraBackground>
            <div className="blog-page-hero-sec" >
              <h1>Case Studies</h1>
            </div>
      </AuroraBackground>
    <div className="top-blogs">
        
        {/*top 1 blog */}
        <Link href={`/blogs/${sortedBlogs[0].link}`} className="top1-blog-card mb-9">
          <Image className='blogs-page-blog-img' src={sortedBlogs[0].image} alt={sortedBlogs[0].heading} height={500} width={500} />

          <div className='top1-blog-card-content '>
            <p className='blog-card-content-category'>{sortedBlogs[0].category}</p>
            <h2 className='blog-card-content-heading'>{sortedBlogs[0].heading}</h2>
            
            <p className='blog-card-content-para'>{sortedBlogs[0].paragraph}</p>
            <p className='blog-card-content-name'>{sortedBlogs[0].name}</p>
            
          </div>
        </Link>

          {/*top 3 blogs */}
        <div className='flex justify-between w-full flex-blogs-page-cards-container  mb-[5%]'>
          <Link href={`/blogs/${sortedBlogs[1].link}`} className="flex-blog-cards">
            
            <p className='mb-3 blog-card-content-category'>{sortedBlogs[1].category}</p>
            <Image className="flex-blogs-page-blog-img mb-5" src={sortedBlogs[1].image} alt={sortedBlogs[1].heading} height={500} width={500} />
            <div className='flex-blog-content'>
              <h2 className='flex-blog-card-content-heading'>{sortedBlogs[1].heading}</h2>
              <p className='flex-blog-card-content-para'>{sortedBlogs[1].paragraph}</p>
              <p className='flex-blog-card-content-name'>{sortedBlogs[1].name}</p>
            </div>
          </Link>


          <Link href={`/blogs/${sortedBlogs[2].link}`} className="flex-blog-cards">
            
            <p className='mb-3 blog-card-content-category'>{sortedBlogs[2].category}</p>
            <Image className="flex-blogs-page-blog-img mb-5" src={sortedBlogs[2].image} alt={sortedBlogs[2].heading} height={500} width={500} />
            <div className='flex-blog-content'>
              <h2 className='flex-blog-card-content-heading'>{sortedBlogs[2].heading}</h2>
              <p className='flex-blog-card-content-para'>{sortedBlogs[2].paragraph}</p>
              <p className='flex-blog-card-content-name'>{sortedBlogs[2].name}</p>
            </div>
          </Link>

          <Link href={`/blogs/${sortedBlogs[3].link}`}className="flex-blog-cards">
            <p className='mb-3 blog-card-content-category'>{sortedBlogs[3].category}</p>
            <Image className="flex-blogs-page-blog-img mb-5" src={sortedBlogs[3].image} alt={sortedBlogs[3].heading} height={500} width={500} />
            <div className='flex-blog-content'>
              <h2 className='flex-blog-card-content-heading'>{sortedBlogs[3].heading}</h2>
              <p className='flex-blog-card-content-para'>{sortedBlogs[3].paragraph}</p>
              <p className='flex-blog-card-content-name'>{sortedBlogs[3].name}</p>
            </div>
          </Link>
        </div>

        {/* latest blogs list */}
        <div className="latest-blog-main-container">
          <h2 className='blog-page-latest-head' >Latest</h2>
          <div ref={latestBlogTriggerRef} className="flex latest-blog-container">
            <div ref={latestBlogSectionRef} className="blog-page-latest-blog-list">
              {paginatedBlogs.map((blog) => (
                <Link href={`/blogs/${blog.link}`} className='blog-page-latest-blog-card' key={blog.id}>
                    <Image className='blog-page-latest-blog-card-img' src={blog.image} alt={blog.heading} height={500} width={500} />

                    <div className='blog-page-latest-blog-card-content'>
                      <p className='blog-page-latest-blog-card-content-category'>{blog.category}</p>
                      <h2 className='blog-page-latest-blog-card-content-heading'>{blog.heading}</h2>
                      
                      <p className='blog-page-latest-blog-card-content-para'>{blog.paragraph}</p>
                      <div className='flex items-center'>
                        <p className='blog-page-latest-blog-card-content-name'>{blog.name}</p>
                        <p className='blog-page-latest-blog-card-content-name'>{new Date(blog.time).toDateString()}</p>
                      </div>
                      
                    </div>
                </Link>
              ))}
              <div className=' flex justify-between mx-9 '>
                <button className='pagination-btn' onClick={handlePrevPage}  disabled={currentPage === 1}>
                  <FaCaretLeft />
                  Previous
                </button>
                <button className='pagination-btn'
                  onClick={handleNextPage}
                  disabled={currentPage === Math.ceil(sortedBlogs.length / itemsPerPage)}
                >
                  Next
                  <FaCaretRight />
                </button>
              </div>
            </div>
            <div className="blog-page-latest-blog-categories">
                <h2 className='blog-page-categories-head'>Categories</h2>
                <hr className='blog-page-categories-line'/>
                <div className="flex flex-wrap">
                  {categories.map((each,index) => (
                  <Link key={index} href={`/blogs/category/${each.link}`}>
                    
                    <button className='blog-page-category-btn' type="button" >{each.name}</button>
                  </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default TopCaseStudies




