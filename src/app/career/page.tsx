"use client"

import React, { useRef, useState } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './style.css'
import Link from 'next/link'
const content = [
    {
        title: "Laravel Developer",
        experience: [2, 4],
        package: [3.6, 4.8],
        openings: 3,
        location: "Cybercity, gurugram",
        link: "laravel-developer"
    },
    {
        title: "Frontend Developer",
        experience: [2, 4],
        package: [3.6, 4.8],
        openings: 3,
        location: "Cybercity, gurugram",
        link: "frontend-developer"
    },
    {
        title: "Backend Developer",
        experience: [2, 4],
        package: [3.6, 4.8],
        openings: 3,
        location: "Cybercity, gurugram",
        link: "backend-developer"
    },
    {
        title: "React Developer",
        experience: [1, 3],
        package: [4.5, 6.0],
        openings: 2,
        location: "Cybercity, gurugram",
        link: "react-developer"
    },
    {
        title: "UI/UX Designer",
        experience: [2, 5],
        package: [4.0, 7.0],
        openings: 1,
        location: "Cybercity, gurugram",
        link: "ui-ux-designer"
    }
    // Added more items to demonstrate pagination
];

function Career() {
    const pageMainRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Calculate pagination values
    const totalPages = Math.ceil(content.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

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

    return (
        <>
            <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
            <div ref={pageMainRef} className='page-main'>
                <div className="career-hero-sec" style={{backgroundImage: `url(https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735306345/iaahrtittoan2rwad4ij.jpg)`, backgroundSize: "cover"}}>
                    <div className="career-hero-sec-content">
                        <h1 className="career-hero-sec-head">Shape Your Future with Us!</h1>
                        <p className="career-hero-sec-para">Discover a dynamic workplace where innovation drives growth, and your career aspirations take center stage. At Radiant Web Technology, we prioritize our people, fostering a team of skilled and passionate professionals. Here, you'll find opportunities for career progression, continuous learning, and a culture that values collaboration and support. Join us to work on exciting projects and gain invaluable experience alongside industry experts, all while making a meaningful impact.</p>
                    </div>
                </div>

                <div className="career-current-openings">

                    <div className="career-current-openings-flex">
                        <h2 className="career-current-openings-head">Current Openings ({content.length})</h2>
                        <div className="career-current-opening-list">
                            {currentItems.map((each, id) => (
                                <div key={id} className='mb-4'>
                                    <div className="career-current-opening-list-item">
                                        <div className="career-current-opening-list-item-left">
                                            <h2 className="career-current-opening-list-item-left-head">{each.title}</h2>
                                            <p className="career-current-opening-list-item-left-para">EXPERENCE: {each.experience[0]} - {each.experience[1]} years</p>
                                            <p className="career-current-opening-list-item-left-para">PACKAGE: {each.package[0]} - {each.package[1]} LPA</p>
                                            <p className="career-current-opening-list-item-left-para">OPENINGS: {each.openings}</p>
                                        </div>
                                        <div className="career-current-opening-list-item-right">
                                            <p className="career-current-opening-list-item-left-para">LOCATION: {each.location}</p>
                                            <Link href={`/career/${each.link}`}> <button className="career-current-opening-list-item-right-btn" type="button">View Details</button> </Link>
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
            </div>
            <Footer />
        </>
    )
}

export default Career