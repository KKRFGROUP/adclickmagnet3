import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export const blogs: {
    id: number;
    url: string;
    time: string;
    description: string;
}[] = [
    {
        id: 1,
        url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg",
        time: "May, 2023",
        description: "The evolution of live-stream content and short-form video: a look at the TikTok revolution"
    },
    {
        id: 2,
        url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/minh-pham-HI6gy-p-WBI-unsplash-Copy.jpg",
        time: "May, 2023",
        description: "The Metaverse boom: brands unite and Apple takes a rain check"
    },
    {
        id: 3,
        url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg",
        time: "May, 2023",
        description: "The evolution of live-stream content and short-form video: a look at the TikTok revolution"
    },
    {
        id: 4,
        url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/minh-pham-HI6gy-p-WBI-unsplash-Copy.jpg",
        time: "May, 2023",
        description: "The Metaverse boom: brands unite and Apple takes a rain check"
    },
]

export default function Carousel() {
    return (
        <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper-container"
      >
        {blogs.map(blog => (
            <SwiperSlide key={blog.id}>
            <div className='carousel-card'>
                <Image className='blog-img' alt="blog img" src={blog.url} height={100} width={100} />
                    
                <div className="blog-content flex-col justify-center">
                    <p className='blog-time'>{blog.time}</p>
                    <p className='blog-des'>{blog.description}</p>
                </div>
            </div>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </>
        
)
}


