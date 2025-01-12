

import Image from "next/image";
import React from "react";
import Link from "next/link";


const demoBlogs = [
    {
      id: 1,
      heading: "10 Tips for Writing Clean Code",
      paragraph: "Writing clean code is essential for maintainability and scalability. Here are 10 tips to help you write better code.",
      time: "2024-11-22T09:00:00Z",
      category: "web development",
      name: "John Doe",
      image: "/images/ai-brain.webp",
      link: "10-tips-for-writing-clean-code"
    },
    {
      id: 2,
      heading: "The Future of Responsive Design",
      paragraph: "Learn how responsive design is evolving and why it's critical for modern web development.",
      time: "2024-11-21T12:00:00Z",
      category: "web development",
      name: "Jane Smith",
      image: "/images/ar-vr.webp",
      link: "the-future-of-responsive-design"
    },
]

export default function Section9() {


    return(
        <div className="sec9-container">
            
                <h2 className="about-sec-acm">Blogs</h2>
                <div className="sec9-head-blogs">
                    <h2 className="blog-sec-head">Digital marketing & industry insights</h2>
                    <div className="blog-sec-blogs">
                            {demoBlogs.map((each,id) => (
                                <Link key={id} className="blog-sec-blogs-card" href={`/blogs/${each.link}`}>
                                    
                                        <Image className="blog-img" src={each.image} alt={each.name} height={300} width={300} /> 
                                        <div className="blog-content flex-col justify-center">
                                            <p className='blog-time'>{new Date(each.time).toLocaleDateString()}</p>
                                            <p className='blog-des'>{each.paragraph.substring(1, 70)}...</p>
                                        </div>
                                    
                                </Link>
                            ))}
                    </div>
                </div>
                <Link href="/blogs">
                    <p className="view-more" >View More</p>
                    <hr className="view-more-line"/>
                </Link>  
        </div>
    );
}

