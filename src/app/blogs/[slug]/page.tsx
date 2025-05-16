"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // For app directory
// import { useRouter } from 'next/router'; // For pages directory (comment out the one above if using pages)
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BlogSlugHero from './sections/BlogSlugHero';
import "./slug.css";
import BlogSlugContent from './sections/BlogSlugContent';



interface ApiResponse {
  status: string;
  message: string;
  data: {
    id: number;
    title: string;
    slug: string;
    content: string;
    author_id: number;
    created_at: string;
    updated_at: string;
    published_at: string | null;
    is_published: boolean;
    meta_title: string;
    meta_description: string;
    featured_image: string;
  };
}

function SlugBlogs() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [blogData, setBlogData] = useState<ApiResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const slug = params?.slug as string | undefined; // Get the slug from the router params (for app directory)

  useEffect(() => {
    if (slug) { // Only fetch data if the slug is available
      const fetchBlog = async () => {
        try {
          const response = await fetch(`https://api.adclickmagnet.us/api/blogs/${slug}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: ApiResponse = await response.json();
          setBlogData(data.data);
          setLoading(false);
        } catch (e: any) {
          setError(e.message);
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [slug]); // Re-run the effect if the slug changes

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

  if (loading) {
    return <div>Loading blog post...</div>;
  }

  if (error) {
    return <div>Error loading blog post: {error}</div>;
  }

  if (!blogData) {
    return <div>Could not find blog post.</div>;
  }

  const heroContent = {
    head: blogData.title,
    name: 'Unknown Author',
    time: blogData.created_at,
    img: '/images/blog-img-template.jpg',
  };

  const blogContent = {
    heroHeading: blogData.title,
    name: 'Unknown Author',
    time: blogData.created_at,
    category: 'Uncategorized', // Replace with actual category if available
    image: '/images/blog-img-template.jpg',
    content: {
      para: [blogData.content],
      subcontent: [],
    },
  };

  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen} />
      <div ref={pageMainRef} className="page-main">
        <BlogSlugHero content={heroContent} />
        <BlogSlugContent content={blogContent} />
        <Footer />
      </div>
    </>
  );
}

export default SlugBlogs;