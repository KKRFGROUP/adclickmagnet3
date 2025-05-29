"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import "./press-release.css"
import '../blogs/blogs.css'

interface PressReleaseItem {
  id: number;
  heading: string;
  para: string; // This will contain the full HTML content from CKEditor
  img: string; // This will be a relative path like /storage/press_release_images/image.jpg
  publish_time: string; // Corresponds to 'time' in your mock data
  link: string; // Corresponds to 'slug' in your mock data
}

  
  
function PressRelease() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const API_URL = 'https://api.adclickmagnet.us/api';
  const BASE_URL = 'https://api.adclickmagnet.us/';

  const getFullImageUrl = (relativePath: string) => {
    // Check if the path already contains the base URL or is a full URL
    if (!relativePath || relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
      return relativePath || "https://placehold.co/500x300/E0E0E0/333333?text=No+Image";
    }

    console.log("Relative Path:",BASE_URL  + relativePath);
    // Assuming Laravel Storage::url() returns paths like /storage/path/to/image.jpg
    // We concatenate the base URL (e.g., https://api.adclickmagnet.us/) with the relative path from the API
    return `${BASE_URL}${relativePath}`;
  };



    // State to hold fetched press release data, loading status, and error
    const [pressReleasesData, setPressReleasesData] = useState<PressReleaseItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


  // Sort press releases by date if needed
  const sortedPressReleases = [...pressReleasesData].sort(
    (a, b) => new Date(b.publish_time).getTime() - new Date(a.publish_time).getTime()
  );


  const totalPages = Math.ceil(sortedPressReleases.length / itemsPerPage);

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


    // Effect to fetch press release data from the API
    useEffect(() => {
      const fetchPressReleases = async () => {
        try {
          setLoading(true);
          setError(null);
          
          const response = await fetch(`${API_URL}/press-release`);
          const data = await response.json();
  
          if (response.ok && data.status === "success" && data.data) {
            setPressReleasesData(data.data);
          } else {
            console.error("Failed to fetch press releases 1:", data.message || "Unknown error");
            setError("Failed to load press releases. Please try again later.");
          }
        } catch (err) {
          console.error("Error fetching press releases:", err);
          setError("Failed to load press releases. Please check your network connection.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchPressReleases();
    }, [API_URL]); // Re-fetch if weburl changes

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
          {/* Loading, Error, and No Data Messages */}
          {loading && (
            <div className="text-center text-xl font-semibold text-gray-700 py-10">Loading press releases...</div>
          )}

          {error && (
            <div className="text-center text-xl text-red-600 py-10">{error}</div>
          )}

          {!loading && !error && pressReleasesData.length === 0 && (
            <div className="text-center text-xl text-gray-500 py-10">No press releases available.</div>
          )}

          {/* Render content only when data is loaded and available */}
          {!loading && !error && pressReleasesData.length > 0 && (
            <>
              {/* Top Press Release Card (using the first item from sorted data) */}
              <div className="flex top-press-release-card">
                <div className="top-press-release-card-content">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{sortedPressReleases[0].heading}</h2>
                  <div>
                    {/* Display paragraph, limiting to 3 lines */}
                        <div
                                        className='press-release-card-para'
                                        dangerouslySetInnerHTML={{ __html: sortedPressReleases[0].para?.substring(0, 100) + '...' || '' }}
                                    />                         

                    {/* Link to full press release */}
                    <a href={`/press-release/${sortedPressReleases[0].link}`} className="flex items-center top-press-release-card-btn">
                      Read More
                      {/* SVG for right arrow icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  {/* Image for the top press release card */}
  

<Image
                                                className="flex-blogs-page-blog-img mb-5"
                                                src={getFullImageUrl(sortedPressReleases[0].img)}
                                                alt={sortedPressReleases[0].heading} 
                                                height={400}
                                                width={400}
                                                onError={(e) => {
                                                    console.error("Error loading image:", sortedPressReleases[0].img);
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                                }}
                                            />
                </div>
              </div>

              {/* Grid of other Press Release Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 press-release-cards-container">
                {paginatedPressReleases.map((each, index) => (
                  <a key={index} href={`/press-release/${each.link}`} className="press-release-card">
                    {/* Image for each press release card */}
             

                                            <Image
                                                className="flex-blogs-page-blog-img mb-5"
                                                src={getFullImageUrl(each.img)}
                                                alt={each.heading}
                                                height={400}
                                                width={400}
                                                onError={(e) => {
                                                    console.error("Error loading image:", each.img);
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = "images/blog-img-template.jpg"; // Changed to vcgcgch.jpg
                                                }}
                                            />
                   
                    
                    <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]"> {/* Adjust height based on image height */}
                      <h2 className="press-release-card-head">{each.heading}</h2>
                      <div
                                        className='press-release-card-para'
                                        dangerouslySetInnerHTML={{ __html: each.para?.substring(0, 100) + '...' || '' }}
                                    />                         

                      <button type="button" className="flex items-center top-press-release-card-btn">
                        Read More
                        {/* SVG for right arrow icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                          <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <hr className='border-t border-gray-200 mt-4' />
                    </div>
                  </a>
                ))}
              </div>

              {/* Pagination buttons */}
              <div className='flex justify-between items-center w-full px-5 md:px-9 mt-8'>
                <button
                  className='flex items-center px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  {/* SVG for left caret icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M11.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06L14.44 12l-2.72-2.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                  Previous
                </button>
                <span className="text-gray-700 font-medium">Page {currentPage} of {totalPages}</span>
                <button
                  className='flex items-center px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                  {/* SVG for right caret icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                    <path fillRule="evenodd" d="M12.28 7.72a.75.75 0 0 0-1.06 0L7.47 11.47a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L9.56 12l2.72-2.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      <Footer />
    </div>
    </>
  )
}

export default PressRelease