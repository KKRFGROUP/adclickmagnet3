"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

// Initialize ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const API_URL = 'https://api.adclickmagnet.us/api/blogs';

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
    const [currentPage, setCurrentPage] = useState(1);

    const categories = [
        { name: 'Technology', link: 'technology' },
        { name: 'Health', link: 'health' },
        { name: 'Lifestyle', link: 'lifestyle' },
        { name: 'Education', link: 'education' },
    ];
    const itemsPerPage = 10;

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

    // Sort blogs after fetching, ensuring 'blogs' is populated
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    const paginatedBlogs = sortedBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
    }, [paginatedBlogs]); // Re-run animation on data update

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
                            <Image
                                className='blogs-page-blog-img'
                                src='/images/blog-img-template.jpg'
                                alt={sortedBlogs[0].title}
                                height={500}
                                width={500}
                                onError={(e) => {
                                    console.error("Error loading image:", sortedBlogs[0].featured_image);
                                    e.currentTarget.onerror = null; // Prevent infinite loop
                                    e.currentTarget.src = "/images/blog-img-template.jpg"; // Fallback image
                                }}
                            />
                        )}
                        <div className='top1-blog-card-content '>
                            <p className='blog-card-content-category'>{(sortedBlogs[0].category || 'Uncategorized')}</p>
                            <h2 className='blog-card-content-heading'>{sortedBlogs[0].title}</h2>
                            <p className='blog-card-content-para'>{sortedBlogs[0].content?.substring(0, 150)}...</p> {/* Basic excerpt */}
                            {/* Assuming there isn't an author name directly in the API response */}
                            {/* You might need to fetch author details separately based on author_id */}
                            <p className='blog-card-content-name'>Author: {sortedBlogs[0].author_id}</p>
                        </div>
                    </Link>
                )}

                <div className='flex justify-between w-full flex-blogs-page-cards-container mb-[5%]'>
                    {sortedBlogs.slice(1, 4).map((blog) => (
                        <Link key={blog.id} href={`/blogs/${blog.slug || blog.id}`} className="flex-blog-cards">
                            <p className='mb-3 blog-card-content-category'>{(blog.category || 'Uncategorized')}</p>
                            {blog.featured_image && (
                                <Image
                                    className="flex-blogs-page-blog-img mb-5"
                                    src='/images/blog-img-template.jpg'
                                    alt={blog.title}
                                    height={500}
                                    width={500}
                                    onError={(e) => {
                                        console.error("Error loading image:", blog.featured_image);
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/images/blog-img-template.jpg";
                                    }}
                                />
                            )}
                            <div className='flex-blog-content'>
                                <h2 className='flex-blog-card-content-heading'>{blog.title}</h2>
                                <p className='flex-blog-card-content-para'>{blog.content?.substring(0, 100)}...</p> {/* Basic excerpt */}
                                <p className='flex-blog-card-content-name'>Author: {blog.author_id}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="latest-blog-main-container">
                    <h2 className='blog-page-latest-head' >Latest</h2>
                    <div ref={latestBlogTriggerRef} className="latest-blog-container">
                        <div className="latest-blog-content-wrapper">
                            <div ref={latestBlogSectionRef} className="blog-page-latest-blog-list">
                                {paginatedBlogs.map((blog) => (
                                    <Link key={blog.id} href={`/blogs/${blog.slug || blog.id}`} className='blog-page-latest-blog-card'>
                                        {blog.featured_image && (
                                            <Image
                                                className='blog-page-latest-blog-card-img'
                                                                        src='/images/blog-img-template.jpg'
                                                alt={blog.title}
                                                height={500}
                                                width={500}
                                                onError={(e) => {
                                                    console.error("Error loading image:", blog.featured_image);
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = "/images/blog-img-template.jpg";
                                                }}
                                            />
                                        )}
                                        <div className='blog-page-latest-blog-card-content'>
                                            <p className='blog-page-latest-blog-card-content-category'>{(blog.category || 'Uncategorized')}</p>
                                            <h2 className='blog-page-latest-blog-card-content-heading'>{blog.title}</h2>
                                            <p className='blog-page-latest-blog-card-content-para'>{blog.content?.substring(0, 80)}...</p> {/* Basic excerpt */}
                                            <div className='flex items-center'>
                                                <p className='blog-page-latest-blog-card-content-name'>Author: {blog.author_id}</p>
                                                <p className='blog-page-latest-blog-card-content-name'>{new Date(blog.created_at).toDateString()}</p>
                                            </div>
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
                            </div>
                            <div className="blog-page-latest-blog-categories">
                                <div className="categories-sticky-wrapper">
                                    <h2 className='blog-page-categories-head'>Categories</h2>
                                    <hr className='blog-page-categories-line' />
                                    <div className="flex flex-wrap">
                                        {categories.map((each, index) => (
                                            <Link key={index} href={`/blogs/category/${each.link}`}>
                                                <button className='blog-page-category-btn' type="button" >{each.name}</button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBlogs;