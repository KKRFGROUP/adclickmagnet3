"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import './style.css'


function PrivacyPolicy() {
    //const date = new Date().toDateString();
    const pageMainRef = useRef<HTMLDivElement | null>(null);
        const [isOpen, setIsOpen] = useState(false);
    
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


  return (
    <>
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
        <div ref={pageMainRef} className="page-main">
            <AuroraBackground>
                <div className="term-page-hero">
                    <h2 className="term-page-hero-head">Privacy Policy for adClickMagnet</h2>
                    <p className="term-page-hero-para">adClickMagnet (“we,” “our,” “us”) operates the websites www.adClickMagnet.com, www.adClickMagnet.us, and www.adClickMagnet.ca (collectively referred to as the “Website”).</p>
                </div>
            </AuroraBackground>

            <div className="term-content-section">
                <h2 className="term-content-section-head">Last Updated: Wed 15 Jan 2025</h2>
                <p className="term-content-section-para">This Privacy Policy explains how we collect, use, and protect your personal information when you visit our Website or use our services. By accessing or using the Website, you agree to the terms outlined in this Privacy Policy.</p>
                
                <h2 className="term-content-section-head">1. Information We Collect</h2>
                <p className="term-content-section-para term-page-contact-para">We may collect the following types of information when you visit our Website or interact with us</p>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'><span className="text-bold">Personal Information: </span>This includes any information you provide to us voluntarily, such as your name, email address, phone number, company name, and other details when you submit a contact form, sign up for our newsletter, or request our services.</li>
                    <li className='mb-4'><span className="text-bold">Technical Data:</span> When you visit our Website, we automatically collect certain technical information, including your IP address, browser type, operating system, referring URLs, pages you visit, and other browsing behavior through the use of cookies and other tracking technologies.</li>
                    <li className='mb-4'><span className="text-bold">Cookies:</span> We use cookies to enhance your experience on our Website. Cookies are small text files stored on your device that help us recognize you when you return to the site, track site usage, and improve functionality. You can control cookie preferences through your browser settings.</li>
                    
                </ul>

                
                <h2 className="term-content-section-head">2. How We Use Your Information</h2>
                <p className="term-content-section-para term-page-contact-para">We use the information we collect for the following purposes:</p>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'>To respond to your inquiries, provide customer support, and offer our services.</li>
                    <li className='mb-4'>To send you updates, newsletters, and marketing communications (if you have opted-in to receive them).</li>
                    <li className='mb-4'>To improve and optimize our Website and services by analyzing usage data.</li>
                    <li className='mb-4'>To comply with legal obligations and enforce our terms of service.</li>
                </ul>

                <h2 className="term-content-section-head">3. How We Protect Your Information</h2>
                <p className="term-content-section-para">We take the security of your personal information seriously. We implement reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure server technology. While we strive to protect your information, please note that no method of transmission over the Internet or electronic storage is 100% secure.</p>

                <h2 className="term-content-section-head">4. Third-Party Services</h2>
                <p className="term-content-section-para">We may use third-party service providers to perform certain functions on our behalf, such as website analytics, marketing, and customer service. These third parties may collect and process your information under their privacy policies. For example, we use Google Analytics to analyze website traffic and improve our services. These third-party services may collect data about your browsing activity on our Website and other websites.</p>
                
                <h2 className="term-content-section-head">5. Sharing Your Information</h2>
                <p className="term-content-section-para term-page-contact-para">We do not sell, rent, or trade your personal information. However, we may share your information in the following situations:</p>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'>With our trusted service providers who assist us in running our Website and delivering services to you.</li>
                    <li className='mb-4'>In response to legal requests, such as subpoenas or court orders, or to comply with legal obligations.</li>
                    <li className='mb-4'>In the event of a merger, acquisition, or sale of our business assets, your information may be transferred as part of that transaction.</li>
                </ul>

                <h2 className="term-content-section-head">6. Your Rights and Choices</h2>
                <p className="term-content-section-para term-page-contact-para">You have the right to:</p>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'>Access, update, or delete your personal information by contacting us at <span className="text-bold">info@adClickMagnet.com.</span></li>
                    <li className='mb-4'>Opt out of receiving marketing communications by clicking the unsubscribe link in any email we send or by contacting us directly.</li>
                    <li className='mb-4'>Disable or manage cookies through your browser settings.</li>
                </ul>

                <h2 className="term-content-section-head">7. Changes to This Privacy Policy</h2>
                <p className="term-content-section-para">We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>

                <h2 className="term-content-section-head">8. Contact Us</h2>
                <p className="term-content-section-para term-page-contact-para">If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
                <ul className="term-content-section-para term-list ">
                    <li className='mb-4'><span className="text-bold">Email: info@adclickmagnet.com</span></li>
                    <li className='mb-4'><span className="text-bold">Website: www.adclickmagnet.com</span></li>
                </ul>
                <p className="term-content-section-para term-page-contact-para">By using our Website, you consent to the collection, use, and processing of your information as described in this Privacy Policy.</p>
                <p className="term-content-section-para"><span className="text-bold">This Privacy Policy applies to the websites owned and operated by adClickMagnet.</span></p>

            </div>
            <Footer /> 
        </div>
    </>
  )
}

export default PrivacyPolicy