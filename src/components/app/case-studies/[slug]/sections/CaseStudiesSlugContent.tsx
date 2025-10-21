"use client"

import React from 'react'
import Image from 'next/image';
import '../../../press-release/press-release.css'
import { useRouter } from "next/navigation";

function CaseStudiesSlugContent({content}: {content: {
    heroHeading: string;
    name: string;
    time: string; // ISO 8601 format date-time string
    category: string;
    image: string;
    content: {
        para: string[];
        subcontent: {
            subhead: string;
        subpara: string[];
      }[];
    };
}}) {
    
    const router = useRouter();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push("/thank-you");
    }

  return (
    <div className="blog-slug-content-sec">
        <div className="blog-slug-content">
            {content.content.para.map((each, index) => (
                <>
                <p key={index}>{each}</p>
                <br />
                </>
            ))}
            {content.content.subcontent.map((each,index) => (
                <div key={index} className='blog-slug-content-suncontent'>
                    <h2 className='blog-slug-content-head'>{each.subhead}</h2>
                    <p>{each.subpara}</p>
                </div>
            ))}
            {/* author card
            <div className="press-release-author-card">
                    <Image className="press-release-author-card-img" src="/images/logos/mobile-navbar-logo.webp" alt="logo" height={500} width={500} />
                    <div>
                      <p className="press-release-author-card-author">THE AUTHOR</p>
                     
                      <p className="press-release-author-card-name">Aftab • adClickMagnet</p>
                    </div>
            </div> */}
        </div>
        <div className="blog-slug-contact-form-card">
            <div className="blog-slug-contact-form">
                <Image className="blog-slug-contact-form-img" src="/images/slug-page-contact-us.webp" alt="contact form img" height={500} width={500} />
                <form onSubmit={handleSubmit} className="blog-slug-contact-form-content">
                <h2 className='blog-slug-contact-form-content-head' >Let's Build Digital Exellence Together</h2>
                    <div className="blog-slug-contact-form-content-label-input">
                        <input name="fullname" className='blog-slug-contact-form-content-input' type="text" placeholder='Full Name' />
                        <hr />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <input name="emailAddress" className='blog-slug-contact-form-content-input' type="email" placeholder='Email Address' />
                        <hr />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <input name="phoneNumber" className='blog-slug-contact-form-content-input' type="tel" placeholder='Phone Number' />
                        <hr />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <input name="message" className='blog-slug-contact-form-content-input' type="text" placeholder='Your Message' />
                        <hr />
                    </div>
                    <button type="submit" className='blog-slug-contact-form-content-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CaseStudiesSlugContent