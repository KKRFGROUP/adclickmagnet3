

import React from 'react'
import Image from 'next/image';



function BlogSlugHero({content}: {content:{head: string; name: string; time: string; img: string}}) {
   
  return (
    <div className="blog-slug-hero-sec">
        <div className="flex blog-slug-hero-sec-home">Home / Guide</div>
        <div className="flex justify-between items-center blog-slug-hero-content-card">
            <div className="blog-slug-hero-content">
                <h2 className="blog-slug-hero-content-head">{content.head}</h2>
                <div className="blog-slug-hero-content-name-date">
                    <p className="blog-slug-hero-content-para">{content.name}</p>
                    <span className="blog-slug-hero-content-para"> • </span>
                    <p className="blog-slug-hero-content-para">{new Date(content.time).toLocaleDateString()}</p>
                </div>
            </div>
            <Image className="blog-slug-hero-img" src={content.img} alt={content.head} height={500} width={500} />
        </div>
    </div>
  )
}

export default BlogSlugHero