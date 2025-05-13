"use client"

import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './style.css';
import Link from 'next/link';

interface CareerData {
    id: number;
    title: string;
    slug: string;
    department: string;
    location: string;
    employment_type: string;
    description: string;
    requirements: string;
    benefits: string;
    application_deadline: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    meta_title: string | null;
    meta_description: string | null;
    featured_image: string | null;
    salary_range: string | null;
    contact_email: string | null;
    apply_url: string | null;
}

function Career() {
    const pageMainRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [careerData, setCareerData] = useState<CareerData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

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

    // Fetch career data from the API
    useEffect(() => {
        const fetchCareerData = async () => {
            try {
                const response = await fetch('https://api.adclickmagnet.us/api/careers');
                if (!response.ok) {
                    throw new Error(`Failed to fetch career data: ${response.statusText}`);
                }
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setCareerData(data.data);
                } else {
                    throw new Error('Invalid data structure from API');
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCareerData();
    }, []);

    // Calculate pagination values
    const totalPages = Math.ceil(careerData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = careerData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page changes
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Scroll to top of the listings when page changes
        const listingsElement = document.querySelector('.career-current-openings');
        if (listingsElement) {
            listingsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if (loading) {
        return (
            <>
                <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
                <div ref={pageMainRef} className='page-main'>
                    <div className="career-hero-sec" style={{ backgroundImage: `url("/images/background images/career-page-bg.webp")`, backgroundSize: "cover" }}>
                        <div className="career-hero-sec-content">
                            <h1 className="career-hero-sec-head">Shape Your Future with Us!</h1>
                            <p className="career-hero-sec-para">Loading career opportunities...</p> {/* Simple Loader */}
                        </div>
                    </div>
                    <div className="career-current-openings">
                        <div className="career-current-openings-flex">
                            <h2 className="career-current-openings-head">Current Openings</h2>
                            <p>Loading Openings...</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
                <div ref={pageMainRef} className='page-main'>
                    <div className="career-hero-sec" style={{ backgroundImage: `url("/images/background images/career-page-bg.webp")`, backgroundSize: "cover" }}>
                        <div className="career-hero-sec-content">
                            <h1 className="career-hero-sec-head">Shape Your Future with Us!</h1>
                            <p className="career-hero-sec-para">
                                Failed to load career opportunities. Please check back later.
                            </p>
                        </div>
                    </div>
                    <div className="career-current-openings">
                        <div className="career-current-openings-flex">
                            <h2 className="career-current-openings-head">Current Openings</h2>
                            <p>Error: {error}</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
            <div ref={pageMainRef} className='page-main'>
                <div className="career-hero-sec" style={{ backgroundImage: `url("/images/background images/career-page-bg.webp")`, backgroundSize: "cover" }}>
                    <div className="career-hero-sec-content">
                        <h1 className="career-hero-sec-head">Shape Your Future with Us!</h1>
                        <p className="career-hero-sec-para">Discover a dynamic workplace where innovation drives growth, and your career aspirations take center stage. At adclickmagnet
                            , we prioritize our people, fostering a team of skilled and passionate professionals. Here, you'll find opportunities for career progression, continuous learning, and a culture that values collaboration and support. Join us to work on exciting projects and gain invaluable experience alongside industry experts, all while making a meaningful impact.</p>
                    </div>
                </div>

                <div className="career-current-openings">

                    <div className="career-current-openings-flex">
                        <h2 className="career-current-openings-head">Current Openings ({careerData.length})</h2>
                        <div className="career-current-opening-list">
                            {currentItems.map((job, id) => (
                                <div key={job.id} className='mb-4'>
                                    <div className="career-current-opening-list-item">
                                        <div className="career-current-opening-list-item-left">
                                            <h2 className="career-current-opening-list-item-left-head">{job.title}</h2>
                                            <p className="career-current-opening-list-item-left-para">DEPARTMENT: {job.department}</p>
                                            <p className="career-current-opening-list-item-left-para">EMPLOYMENT TYPE: {job.employment_type}</p>
                                            {job.salary_range && (<p className="career-current-opening-list-item-left-para">PACKAGE: {job.salary_range}</p>)}
                                        </div>
                                        <div className="career-current-opening-list-item-right">
                                            <p className="career-current-opening-list-item-left-para">LOCATION: {job.location}</p>
                                            <Link href={`/career/${job.slug}`}> <button className="career-current-opening-list-item-right-btn" type="button">View Details</button> </Link>
                                        </div>
                                    </div>
                                    <hr className="career-current-opening-list-item-line" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-8 mb-8">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded ${
                                    currentPage === 1
                                        ? 'bg-gray text-white cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-black-600'
                                    }`}
                            >
                                Previous
                            </button>

                            {pageNumbers.map(number => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={`px-4 py-2 rounded ${
                                        currentPage === number
                                            ? 'bg-black text-white'
                                            : 'bg-gray text-white '
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded ${
                                    currentPage === totalPages
                                        ? 'bg-gray text-white cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-black-600'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Career;
