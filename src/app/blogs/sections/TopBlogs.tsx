"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

// Initialize ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const API_URL = 'https://api.adclickmagnet.us/api/blogs';
const BASE_URL = 'https://api.adclickmagnet.us/storage/';

function TopBlogs() {
    interface Blog {
        id: number;
        slug?: string;
        title: string;
        content?: string;
        category?: string;
        featured_image?: string;
        author_id: string;
        created_at: string;
    }

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState(null);
    const latestBlogTriggerRef = useRef(null);
    const latestBlogSectionRef = useRef(null);

    // const itemsPerPage = 10;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error fetching blogs: ${response.statusText}`);
                }
                const data = await response.json();
                setBlogs(data.data); // Assuming your blog data is in the 'data' array
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchBlogs();
    }, []);


  const getFullImageUrl = (relativePath: string) => {
    // Check if the path already contains the base URL or is a full URL
    // if not empty relative path 
    console.log("Relative Path:", relativePath);
    if (!relativePath) {
      return "/images/blog-img-template.jpg"; // Fallback image
    }
    console.log("Relative Path:",BASE_URL  + relativePath);
    // Assuming Laravel Storage::url() returns paths like /storage/path/to/image.jpg
    // We concatenate the base URL (e.g., https://api.adclickmagnet.us/) with the relative path from the API
    return `${BASE_URL}${relativePath}`;
  };

    // Sort blogs after fetching, ensuring 'blogs' is populated
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    // const paginatedBlogs = sortedBlogs.slice(
    //     (currentPage - 1) * itemsPerPage,
    //     currentPage * itemsPerPage
    // );

    useEffect(() => {
        if (latestBlogSectionRef.current) {
            const hscroll = gsap.fromTo(
                latestBlogSectionRef.current,
                { translateY: 0 },
                {
                    translateY: "0%",
                    ease: "none",
                    duration: 2,
                    scrollTrigger: {
                        trigger: latestBlogTriggerRef.current,
                        start: "top -10%",
                        end: "-10% top",
                        scrub: 2,
                        pin: true,
                        invalidateOnRefresh: true, // Important for dynamic content
                    }
                }
            );
            return () => {
                hscroll.kill();
            };
        }
    },); // Re-run animation on data update

    // const scrollToTop = () => {
    //     const blogListSection = document.querySelector('.blog-page-latest-head');
    //     if (blogListSection) {
    //         blogListSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // };

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (blogs.length === 0) {
        return <div>Loading blogs...</div>; // Basic loading state
    }

    return (
        <>
            <AuroraBackground>
                <div className="blog-page-hero-sec" >
                    <h1>Blogs</h1>
                </div>
            </AuroraBackground>
            <div className="top-blogs">
                {sortedBlogs[0] && (
                    <Link href={`/blogs/${sortedBlogs[0].slug || sortedBlogs[0].id}`} className="top1-blog-card mb-9">
                        {sortedBlogs[0].featured_image && (
                            // <Image
                            //     className='blogs-page-blog-img'
                            //     src='/images/blog-img-template.jpg'
                            //     alt={sortedBlogs[0].title}
                            //     height={500}
                            //     width={500}
                            //     onError={(e) => {
                            //         console.error("Error loading image:", sortedBlogs[0].featured_image);
                            //         e.currentTarget.onerror = null; // Prevent infinite loop
                            //         e.currentTarget.src = "/images/blog-img-template.jpg"; // Fallback image
                            //     }}
                            // />
                            <Image
                            className="flex-blogs-page-blog-img mb-5"
                            src={BASE_URL + sortedBlogs[0].featured_image}
                            alt={sortedBlogs[0].title}
                            height={400}
                            width={400}
                            onError={(e) => {
                                console.error("Error loading image:", sortedBlogs[0].featured_image);
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                            }}
                        />
                        )}
                        <div className='top1-blog-card-content '>
                            <h2 className='blog-card-content-heading'>{sortedBlogs[0].title}</h2>
                            <div
                                        className='blog-page-latest-blog-card-content-para mt-4'
                                        dangerouslySetInnerHTML={{ __html: sortedBlogs[0].content?.substring(0, 100) + '...' || '' }}
                                    />                            {/* Assuming there isn't an author name directly in the API response */}
                            {/* You might need to fetch author details separately based on author_id */}
                        </div>
                    </Link>
                )}

                <div className='flex justify-between w-full flex-blogs-page-cards-container mb-[5%]'>
                    {sortedBlogs.slice(1, 9).map((blog) => (
                        <Link key={blog.id} href={`/blogs/${blog.slug || blog.id}`} className="flex-blog-cards">
                            {blog.featured_image && (
                                <Image
                                    className="flex-blogs-page-blog-img mb-5"
                                    src={getFullImageUrl(blog.featured_image)}
                                    alt={blog.title}
                                    height={500}
                                    width={500}
                                    onError={(e) => {
                                        console.error("Error loading image:", blog.featured_image);
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                    }}
                                />
                            )}

                            <div className='flex-blog-content'>
                                <h2 className='flex-blog-card-content-heading'>{blog.title}</h2>
                                <div
                                        className='blog-page-latest-blog-card-content-para'
                                        dangerouslySetInnerHTML={{ __html: blog.content?.substring(0, 100) + '...' || '' }}
                                    />
                            </div>
                        </Link>
                    ))}
                </div>

    {/* <h3 className='e' >Latest Blogs</h3>
                <div className='flex justify-between w-full flex-blogs-page-cards-container mb-[5%]'>
              
                    {paginatedBlogs.slice(1, 4).map((blog) => (
                        <Link key={blog.id} href={`/blogs/${blog.slug || blog.id}`} className="flex-blog-cards">
                            {blog.featured_image && (
                                <Image
                                    className="flex-blogs-page-blog-img mb-5"
                                    src={getFullImageUrl(blog.featured_image)}
                                    alt={blog.title}
                                    height={500}
                                    width={500}
                                    onError={(e) => {
                                        console.error("Error loading image:", blog.featured_image);
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                    }}
                                />
                            )}

                            <div className='flex-blog-content'>
                                <h2 className='flex-blog-card-content-heading'>{blog.title}</h2>
                                <div
                                        className='blog-page-latest-blog-card-content-para'
                                        dangerouslySetInnerHTML={{ __html: blog.content?.substring(0, 100) + '...' || '' }}
                                    />
                            </div>
                        </Link>
                    ))}

                                                    <div className='pagination-container flex justify-between mx-9 '>
                                    <button className='pagination-btn' onClick={handlePrevPage} disabled={currentPage === 1}>
                                        <FaCaretLeft />
                                        Previous
                                    </button>
                                    <button
                                        className='pagination-btn'
                                        onClick={handleNextPage}
                                        disabled={currentPage === Math.ceil(sortedBlogs.length / itemsPerPage)}
                                    >
                                        Next
                                        <FaCaretRight />
                                    </button>
                                </div>
                </div> */}

            </div>
        </>
    );
}

export default TopBlogs;