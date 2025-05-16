"use client"

import React,{useState} from 'react'
import Image from 'next/image';
import { Input,PhoneInput } from '@/components/ui/Form';
import '../../../press-release/press-release.css'
import { useRouter } from "next/navigation";
function BlogSlugContent({content}: {content: {
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
      const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        });
      
        const [status, setStatus] = useState({
          message: "",
          isError: false
        });

    

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus({ message: "Submitting...", isError: false });
        router.push("/thank-you");
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <div className="blog-slug-content-sec">
       <div className="blog-slug-content">
  {content.content.para.map((each, index) => (
    <React.Fragment key={index}>

      <p dangerouslySetInnerHTML={{ __html: each }} />

      <br />
    </React.Fragment>
  ))}
  {content.content.subcontent.map((each, index) => (
    <div key={index} className="blog-slug-content-suncontent">
      <h2 className="blog-slug-content-head">{each.subhead}</h2>
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
                        <Input id="firstname"  placeholder="First Name" type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required />
                        
                    </div>
                    <div className="blog-slug-contact-form-content-label-input">
                        <Input id="lastname" placeholder="Last Name" type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <Input id="email" type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required placeholder="Your Email" />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <PhoneInput
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="flex-1"
                          name="phoneNumber"
                        />
                    </div>

                    <div className="blog-slug-contact-form-content-label-input">
                        <Input id="message" type="text"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required placeholder="What can we help you with?" />
                    </div>

                    {status.message && (
                        <div className={`mb-4 p-4 rounded ${
                          status.isError 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100' 
                            : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                        }`}>
                          {status.message}
                        </div>
                      )}
                    <button type="submit" className='blog-slug-contact-form-content-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BlogSlugContent