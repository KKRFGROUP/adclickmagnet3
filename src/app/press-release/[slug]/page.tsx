"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./slug.css";
// import { data as flickityData } from 'flickity'; // Commented out as it seems unused and can cause issues

interface PressReleaseData {
  id: number;
  heading: string;
  para: string; // This will contain the full HTML content from CKEditor
  img: string; // This will be a relative path like /storage/press_release_images/image.jpg
  publish_time: string; // Corresponds to 'time' in your mock data
  link: string; // Corresponds to 'slug' in your mock data
  subSections: Array<{
    subHeading: string;
    subPara: string;
  }>;
}

interface MorePressReleaseItem {
  link: string;
  img: string;
  heading: string;
  para: string;
  publish_time: string; // Assuming 'publish_time' from API, not 'time'
}

// Configuration for API URLs, using window.APP_CONFIG for flexibility
const weburl = "http://api.adclickmagnet.us/api";
const imageUrlBase =  "http://api.adclickmagnet.us"; // Base URL for images

// Helper function to get full image URL
const getFullImageUrl = (relativePath: string): string => {
  // Check if the path already contains the base URL or is a full URL
  if (!relativePath || relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath || "https://placehold.co/500x300/E0E0E0/333333?text=No+Image";
  }
  // Assuming Laravel Storage::url() returns paths like /storage/path/to/image.jpg
  // We concatenate the base URL (e.g., http://api.adclickmagnet.us) with the relative path from the API
  return `${imageUrlBase}${relativePath}`;
};

const shareArticle = (platform: 'linkedin' | 'facebook' | 'twitter'): void => {
  const url = window.location.href;
  const title = 'Press Release';

  let shareUrl: string;
  switch(platform) {
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    default:
      return;
  }

  window.open(shareUrl, '_blank', 'width=600,height=400');
};


const PressReleasePage = () => {
  const { slug } = useParams();
  const [data, setData] = useState<PressReleaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [morePressRelease, setMorePressRelease] = useState<MorePressReleaseItem[]>([]);

  // Moved useRef and useState for Navbar/Footer management inside the component
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (arg?: boolean): void => {
    const newState = arg !== undefined ? arg : !isOpen;
    setIsOpen(newState);

    if (pageMainRef.current) {
      if (newState) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${weburl}/press-release/${slug}`);
        const result = await response.json();
        if (result.status === 'success') {
          setData(result.data);
        } else {
          console.error("Failed to fetch press release:", result.message || "Unknown error");
          setData(null); // Set data to null if fetch is not successful
        }
      } catch (error) {
        console.error("Failed to fetch press release:", error);
        setData(null); // Set data to null on network error
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Fetching all press releases, then filter out the current one and take top 3
    const fetchMorePressReleases = async () => {
      try {
        const response = await fetch(`${weburl}/press-release`); // Assuming this endpoint gives all press releases
        const result = await response.json();
        if (result.status === 'success' && Array.isArray(result.data)) {
          // Filter out the current press release by slug and take top 3
          const filtered = result.data.filter((item: MorePressReleaseItem) => item.link !== slug);
          setMorePressRelease(filtered.slice(0, 3)); // Take only up to 3 for "Read More"
        } else {
            console.error("Failed to fetch more press releases:", result.message || "Unknown error");
        }
      } catch (error) {
        console.error("Failed to fetch more press releases:", error);
      }
    };

    fetchMorePressReleases();
  }, [slug, weburl]); // Added weburl to dependency array

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center py-20 text-red-500">Failed to load press release or press release not found.</div>;
  }

  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
      <div ref={pageMainRef} className="page-main">
        <div className="press-release-slug-page-container">
          <div className="mb-[10%]">
            <div className="press-release-hero-sec">
              <div>
                <h2 className="press-release-hero-sec-head">{data.heading}</h2>
                <p className="press-release-hero-sec-para">
                  adClickMagnet • {formatDate(data.publish_time)}
                </p>
              </div>
              <Image 
                className="press-release-hero-sec-img" 
                src={getFullImageUrl(data.img)} // Use getFullImageUrl here
                alt={data.heading} 
                height={500} 
                width={500}
                priority
              />
            </div>
          </div>

          <div className="flex press-release-slug-content-card">
            <div className="sharing-social-handles">
              <div className="flex items-center justify-between text-2xl">
                <FaLinkedin onClick={() => shareArticle('linkedin')} className="cursor-pointer" />
                <FaFacebook onClick={() => shareArticle('facebook')} className="cursor-pointer" />
                <FaTwitter onClick={() => shareArticle('twitter')} className="cursor-pointer" />
              </div>
              <p className="sharing-social-handles-para">Share This Article</p>
            </div>

            <div className="press-release-slug-content">
              {/* Render main paragraph content using dangerouslySetInnerHTML */}
              <div 
                className="press-release-slug-content-para" 
                dangerouslySetInnerHTML={{ __html: data.para }} 
              />
              
              {data.subSections && data.subSections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h2 className="press-release-slug-content-head">{section.subHeading}</h2>
                  <p className="press-release-slug-content-para">{section.subPara}</p>
                </div>
              ))}
              
              <div className="press-release-author-card">
                <Image 
                  className="press-release-author-card-img" 
                  src="/images/logos/mobile-navbar-logo.webp" 
                  alt="logo" 
                  height={500} 
                  width={500} 
                />
                <div>
                  <p className="press-release-author-card-author">THE AUTHOR</p>
                  <p className="press-release-author-card-name">Aftab • adClickMagnet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="read-more-press-release mt-2">
            <h2 className="read-more-press-release-head">Read More Press Release</h2>
            <div className="flex justify-between read-more-press-release-flex">
              {morePressRelease.map((item, index) => (
                <Link key={index} href={`/press-release/${item.link}`} className="read-more-press-release-card">
                  <Image 
                    className="read-more-press-release-card-img" 
                    src={getFullImageUrl(item.img)} // Use getFullImageUrl here
                    alt={item.heading} 
                    height={500} 
                    width={500} 
                    onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/500x300/E0E0E0/333333?text=Image+Error"; }} // Fix EventTarget error
                  />
                  <h2 className="read-more-press-release-card-head">{item.heading}</h2>
                  <p className="read-more-press-release-card-para">{item.para}</p>
                  <div className="flex">
                    <p className="read-more-press-release-card-acm-date">adClickMagnet</p>
                    <p className="read-more-press-release-card-acm-date">{formatDate(item.publish_time)}</p> {/* Use publish_time */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PressReleasePage;
