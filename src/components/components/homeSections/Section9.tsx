"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the Blog interface
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

// API constants
const API_URL = 'https://api.adclickmagnet.us/api/blogs';
const BASE_URL = 'https://api.adclickmagnet.us/storage/';

export default function Section9() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);


    // Sort blogs by creation date in descending order
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    // Take the first two blogs for display in Section9
    const blogsToDisplay = sortedBlogs.slice(0, 2);

    if (loading) {
        return <div className="sec9-container">Loading blogs...</div>;
    }

    if (error) {
        return <div className="sec9-container error">Error: {error}</div>;
    }

    return (
        <div className="sec9-container">
            <h2 className="about-sec-acm">Blogs</h2>
            <div className="sec9-head-blogs">
                <h2 className="blog-sec-head">Digital marketing & industry insights</h2>
                <div className="blog-sec-blogs">
                    {blogsToDisplay.map((blog) => (
                        <Link key={blog.id} className="blog-sec-blogs-card" href={`/blogs/${blog.slug || blog.id}`}>
                            <Image
                                className="blog-img"
                                src={BASE_URL + blog.featured_image}
                                alt={blog.title}
                                height={300}
                                width={300}
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "/images/blog-img-template.jpg";
                                }}
                            />
                            <div className="blog-content flex-col justify-center">
                                <p className='blog-time'>{new Date(blog.created_at).toLocaleDateString()}</p>
                                <p
                                    className='blog-des'
                                    dangerouslySetInnerHTML={{ __html: blog.title?.substring(0, 70) + '...' || '' }}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Link href="/blogs">
                <p className="view-more">View More</p>
                <hr className="view-more-line" />
            </Link>
        </div>
    );
}