import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ContactOurExperts() {
  return (
    <div className='p-[80px] h-[50vh] mb-9'>
        <div className="contact-our-expert-card flex">
            <div className="contact-our-expert-card-content">
                <h2 className="contact-our-expert-card-content-head mb-5">Our Customization Expertise Serves All Types, Even The Ones Not Listed Above</h2>
                <p className="services-sec7-content-para mb-5" >Describe your business type to our experts and get the quickest clarity on
                    the product roadmap, scope of innovation, and expected ROls
                </p>
                <Link href="/contact-us">
                    <button type="button" className="contact-our-expert-card-content-btn">Consult Our Experts</button>
                </Link>
            </div>
            <Image className='contact-our-expert-card-img w-[30%] rounded-2xl' src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact" height={400} width={400} />
        </div>
    </div>
  )
}

export default ContactOurExperts