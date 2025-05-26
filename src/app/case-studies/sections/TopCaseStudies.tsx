"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Link from 'next/link';
import gsap from 'gsap';

import { AuroraBackground } from '@/components/ui/AuroraBackground';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    category: string;
    client_name: string;
    image: string;
    challenge: string;
    solution: string;
    results: string;
    summary: string;
    live_url: string;
    featured_image: string;
    start_date: string;
    end_date: string;
    is_published: boolean;
    publish_date: string;
    created_at: string;
    updated_at: string;
    meta_title: string;
    meta_description: string;
}

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
];

function TopCaseStudies() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [error, setError] = useState<string | null>(null);
    const latestBlogTriggerRef = useRef(null);
    const latestBlogSectionRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const BASE_URL = "https://api.adclickmagnet.us";

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await fetch('https://api.adclickmagnet.us/api/case-study');
                if (!response.ok) {
                    throw new Error(`Error fetching case studies: ${response.statusText}`);
                }
                const data = await response.json();
                if (data.status === "success" && Array.isArray(data.data)) {
                    setCaseStudies(data.data);
                } else {
                    throw new Error("Invalid data structure from API");
                }

            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchCaseStudies();

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
                    pin: true
                }
            }
        );
        return () => {
            hscroll.kill();
        };
    }, []);

    const sortedCaseStudies = [...caseStudies].sort(
        (a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );

    const paginatedCaseStudies = sortedCaseStudies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
        return (
            <>
                <AuroraBackground>
                    <div className="blog-page-hero-sec" >
                        <h1>Case Studies</h1>
                    </div>
                </AuroraBackground>
                <div className="top-blogs">
                    <p>Error: {error}</p>
                </div>
            </>
        )
    }

    if (!caseStudies || caseStudies.length === 0) {
        return (
            <>
                <AuroraBackground>
                    <div className="blog-page-hero-sec" >
                        <h1>Case Studies</h1>
                    </div>
                </AuroraBackground>
                <div className="top-blogs">
                    <p>Loading case studies...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <AuroraBackground>
                <div className="blog-page-hero-sec" >
                    <h1>Case Studies</h1>
                </div>
            </AuroraBackground>
            <div className="top-blogs">

                {/*top 1 blog */}
                {sortedCaseStudies[0] && (
                    <Link href={`/case-studies/${sortedCaseStudies[0].slug}`} className="top1-blog-card mb-9">

<Image
                                        className="blogs-page-blog-img"
                                        src={BASE_URL + sortedCaseStudies[0].featured_image}
                                        alt={sortedCaseStudies[0].title}
                                        height={500}
                                        width={500}
                                        onError={(e) => {
                                            console.error("Error loading image:", sortedCaseStudies[0].featured_image);
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                        }}
                                    />

                        <div className='top1-blog-card-content '>
                            <p className='blog-card-content-category'>{sortedCaseStudies[0].category}</p>
                            <h2 className='blog-card-content-heading'>{sortedCaseStudies[0].title}</h2>

                            <p className='blog-card-content-para'>{sortedCaseStudies[0].summary}</p>

                        </div>
                    </Link>
                )}

                {/*top 3 blogs */}
                <div className='flex justify-between w-full flex-blogs-page-cards-container  mb-[5%]'>
                    {sortedCaseStudies.slice(1, 4).map((study) => (
                        <Link key={study.id} href={`/case-studies/${study.slug}`} className="flex-blog-cards">

                            <p className='mb-3 blog-card-content-category'>{study.category}</p>


                            <Image
                                className="flex-blogs-page-blog-img mb-5"
                                        src={BASE_URL + study.featured_image}
                                        alt={study.title}
                                        height={500}
                                        width={500}
                                        onError={(e) => {
                                            console.error("Error loading image:", study.featured_image);
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                        }}
                                    />
                            <div className='flex-blog-content'>
                                <h2 className='flex-blog-card-content-heading'>{study.title}</h2>
                                <p className='flex-blog-card-content-para'>{study.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* latest blogs list */}
                <div className="latest-blog-main-container">
                    <h2 className='blog-page-latest-head' >Latest</h2>
                    <div ref={latestBlogTriggerRef} className="flex latest-blog-container">
                        <div className="latest-blog-content-wrapper">
                            <div ref={latestBlogSectionRef} className="blog-page-latest-blog-list">
                                {paginatedCaseStudies.map((study) => (
                                    <Link key={study.id} href={`/case-studies/${study.slug}`} className='blog-page-latest-blog-card'>                                                                

                                    <Image
                                        className="blogs-page-blog-img"
                                        src={BASE_URL + study.featured_image}
                                        alt={study.title}
                                        height={500}
                                        width={500}
                                        onError={(e) => {
                                            console.error("Error loading image:", study.featured_image);
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                        }}
                                    />


                                        <div className='blog-page-latest-blog-card-content'>
                                            <p className='blog-page-latest-blog-card-content-category'>{study.category}</p>
                                            <h2 className='blog-page-latest-blog-card-content-heading'>{study.title}</h2>
                                            <div
                                        className='blog-page-latest-blog-card-content-para'
                                        dangerouslySetInnerHTML={{ __html: study.summary?.substring(0, 100) + '...' || '' }}
                                    />
                                            <div className='flex items-center'>
                                                <p className='blog-page-latest-blog-card-content-name'>{study.client_name}</p>
                                                <p className='blog-page-latest-blog-card-content-name'>{new Date(study.publish_date).toDateString()}</p>
                                            </div>

                                        </div>
                                    </Link>
                                ))}
                                <div className=' flex justify-between mx-9 '>
                                    <button className='pagination-btn' onClick={handlePrevPage} disabled={currentPage === 1}>
                                        <FaCaretLeft />
                                        Previous
                                    </button>
                                    <button
                                        className='pagination-btn'
                                        onClick={handleNextPage}
                                        disabled={currentPage === Math.ceil(sortedCaseStudies.length / itemsPerPage)}
                                    >
                                        Next
                                        <FaCaretRight />
                                    </button>
                                </div>
                            </div>
                            <div className="blog-page-latest-blog-categories">
                                <h2 className='blog-page-categories-head'>Categories</h2>
                                <hr className='blog-page-categories-line' />
                                <div className="flex flex-wrap">
                                    {categories.map((each, index) => (
                                        <Link key={index} href={`/case-studies/category/${each.link}`}>

                                            <button className='blog-page-category-btn' type="button" >{each.name}</button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TopCaseStudies;
