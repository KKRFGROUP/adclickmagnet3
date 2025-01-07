

import React from 'react'
import Link from 'next/link';

function BlogSlugHero({content}: {content:{head: string; name: string; time: string; img: string}}) {
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC' // Add this to ensure consistent timezone handling
    });
  };

  return (
    <div className="blog-slug-hero-sec" style={{backgroundImage: `url(${content.img})`, backgroundSize: "cover"}}>
        <Link href="/blogs"><div className="flex blog-slug-hero-sec-home">Home / Guide</div> </Link>
            <div className="blog-slug-hero-content">
                <h2 className="blog-slug-hero-content-head">{content.head}</h2>
                <div className="blog-slug-hero-content-name-date">
                    <p className="blog-slug-hero-content-para">{content.name}</p>
                    <span className="blog-slug-hero-content-para"> • </span>
                    <p className="blog-slug-hero-content-para">{formatDate(content.time)}</p>
                </div>
            </div>
    </div>
  )
}

export default BlogSlugHero