import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ContactOurExperts() {
  return (
    <div className=' contact-our-expert-container'>
        <div className="flex contact-our-expert-card">
            <div className="contact-our-expert-card-content">
                <h2 className="contact-our-expert-card-content-head mb-5">Our Customization Expertise Serves All Types, Even The Ones Not Listed Above</h2>
                <p className="services-sec7-content-para mb-5" >Describe your business type to our experts and get the quickest clarity on
                    the product roadmap, scope of innovation, and expected ROls
                </p>
                <Link href="/contact-us">
                    <button type="button" className="contact-our-expert-card-content-btn">Consult Our Experts</button>
                </Link>
            </div>
            <Image className='rounded-2xl contact-our-expert-card-img' src="/images/client contract.webp" alt="contact" height={400} width={400} />
        </div>
    </div>
  )
}

export default ContactOurExperts