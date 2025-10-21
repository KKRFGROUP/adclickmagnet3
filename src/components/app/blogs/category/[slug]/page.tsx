"use client"

import React,{useRef,useState} from 'react'
import { useParams } from 'next/navigation';
import { FiCornerDownLeft } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LuMoveRight } from "react-icons/lu";
import "../category.css"
import '../../../press-release/press-release.css'


const categoryBlogs = [
    {
      id: 1,
      heading: "Understanding JavaScript Closures",
      paragraph: "Learn the concept of closures in JavaScript and how they help in creating better, more modular code.",
      time: "2024-11-21T10:30:00Z",
      category: "web development",
      name: "John Doe",
      image: "/images/blog-img-template.jpg",
      link: "understanding-javascript-closures",
    },
    {
      id: 2,
      heading: "CSS Grid vs Flexbox: When to Use Which?",
      paragraph: "Explore the differences between CSS Grid and Flexbox and understand the scenarios where each excels.",
      time: "2024-11-20T14:00:00Z",
      category: "web development",
      name: "Jane Smith",
      image: "/images/blog-img-template.jpg",
      link: "css-grid-vs-flexbox-when-to-use-which",
    },
    {
      id: 3,
      heading: "A Beginner's Guide to React Hooks",
      paragraph: "Discover the power of React Hooks and how they simplify state and effect management in React.",
      time: "2024-11-19T08:45:00Z",
      category: "web development",
      name: "Alice Johnson",
      image: "/images/blog-img-template.jpg",
      link: "a-beginners-guide-to-react-hooks",
    },
    {
      id: 4,
      heading: "Top 10 Web Development Trends in 2024",
      paragraph: "Stay ahead in the field by learning the latest web development trends and technologies.",
      time: "2024-11-18T16:20:00Z",
      category: "web development",
      name: "Bob Brown",
      image: "/images/blog-img-template.jpg",
      link: "top-10-web-development-trends-in-2024",
    },
    {
      id: 5,
      heading: "Introduction to TypeScript for JavaScript Developers",
      paragraph: "Understand why TypeScript is a must-have skill for modern JavaScript developers.",
      time: "2024-11-17T11:00:00Z",
      category: "web development",
      name: "Charlie Davis",
      image: "/images/blog-img-template.jpg",
      link: "introduction-to-typescript-for-javascript-developers",
    },
    {
      id: 6,
      heading: "Best Practices for Responsive Web Design",
      paragraph: "Learn the best practices and techniques for creating mobile-friendly, responsive websites.",
      time: "2024-11-16T13:15:00Z",
      category: "web development",
      name: "Emily Evans",
      image: "/images/blog-img-template.jpg",
      link: "best-practices-for-responsive-web-design",
    },
    {
      id: 7,
      heading: "How to Optimize Web Performance",
      paragraph: "Tips and tricks to improve the performance of your website and enhance user experience.",
      time: "2024-11-15T09:50:00Z",
      category: "web development",
      name: "Frank Green",
      image: "/images/blog-img-template.jpg",
      link: "how-to-optimize-web-performance",
    },
    {
      id: 8,
      heading: "An Overview of Progressive Web Apps",
      paragraph: "Discover what makes Progressive Web Apps special and how they can revolutionize your projects.",
      time: "2024-11-14T18:40:00Z",
      category: "web development",
      name: "Grace Hall",
      image: "/images/blog-img-template.jpg",
      link: "an-overview-of-progressive-web-apps",
    },
    {
      id: 9,
      heading: "Top JavaScript Frameworks to Learn in 2024",
      paragraph: "Compare the top JavaScript frameworks to see which one is best suited for your needs.",
      time: "2024-11-13T12:30:00Z",
      category: "web development",
      name: "Henry Irving",
      image: "/images/blog-img-template.jpg",
      link: "top-javascript-frameworks-to-learn-in-2024",
    },
    {
      id: 10,
      heading: "Exploring Serverless Architecture",
      paragraph: "Learn the benefits and limitations of serverless architecture in modern web development.",
      time: "2024-11-12T17:10:00Z",
      category: "web development",
      name: "Isla Jackson",
      image: "/images/blog-img-template.jpg",
      link: "exploring-serverless-architecture",
    },
    {
      id: 11,
      heading: "Accessibility in Web Development",
      paragraph: "Understand the importance of accessibility and how to make your websites inclusive.",
      time: "2024-11-11T14:45:00Z",
      category: "web development",
      name: "Jack Kelly",
      image: "/images/blog-img-template.jpg",
      link: "accessibility-in-web-development",
    },
    {
      id: 12,
      heading: "Mastering Git for Web Developers",
      paragraph: "Learn how to use Git for version control and collaboration in web development projects.",
      time: "2024-11-10T10:20:00Z",
      category: "web development",
      name: "Karen Lewis",
      image: "/images/blog-img-template.jpg",
      link: "mastering-git-for-web-developers",
    },
    {
      id: 13,
      heading: "Exploring RESTful APIs for Beginners",
      paragraph: "Understand what RESTful APIs are and how to integrate them into your applications.",
      time: "2024-11-09T15:30:00Z",
      category: "web development",
      name: "Leo Miller",
      image: "/images/blog-img-template.jpg",
      link: "exploring-restful-apis-for-beginners",
    },
    {
      id: 14,
      heading: "Best Tools for Front-End Developers",
      paragraph: "A comprehensive list of must-have tools for efficient front-end web development.",
      time: "2024-11-08T13:00:00Z",
      category: "web development",
      name: "Mia Nelson",
      image: "/images/blog-img-template.jpg",
      link: "best-tools-for-front-end-developers",
    },
    {
      id: 15,
      heading: "The Basics of Web Security",
      paragraph: "Learn the foundational principles of web security to keep your sites safe from vulnerabilities.",
      time: "2024-11-07T16:50:00Z",
      category: "web development",
      name: "Noah Owens",
      image: "/images/blog-img-template.jpg",
      link: "the-basics-of-web-security",
    },
]

function BlogCategory() {
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
    const params = useParams();
    //console.log(params.slug);
    
  return (
    <>
    <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
    <div ref={pageMainRef} className="page-main">

    <div className='blog-category-page-main-container'>
      <div className="blog-category-page-return-to-home flex items-center">
        <FiCornerDownLeft />
        <p className='blog-category-page-home-redirect'>HOME / {params.slug}</p>
      </div>
      <div className=" pb-8  press-release-cards-container">
        {categoryBlogs.map((each, index) => (
           <Link key={index} href={`/press-release/${each.link}`} className="press-release-card">     
                <Image className="press-release-card-img" src={each.image} alt="blog img" height={500} width={500} />
                <div className="press-release-card-content">
                    <h2 className="press-release-card-head">{each.heading}</h2>
                    <p className="press-release-card-para">{each.paragraph}</p>
                    <button type="button" className="flex items-center top-press-release-card-btn">
                        Read More
                        <LuMoveRight />
                    </button>
                    <hr className='press-release-card-line'/>
                </div>
            </Link>
        ))}
      </div>
      
    </div>
    <Footer />
    </div>
    </>
  )
}

export default BlogCategory

 
