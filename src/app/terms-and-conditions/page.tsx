"use client"

import React,{useRef,useState} from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import './style.css'


function TermCondition() {
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
                    <h2 className="term-page-hero-head">Terms And Conditions</h2>
                    <p className="term-page-hero-para">Welcome to AdClickMagnet, a leading digital marketing agency dedicated to helping you achieve online growth and business success</p>
                    <p className="term-page-hero-para">If you do not agree with any part of these Terms, you should immediately cease using the Website</p>
                </div>
            </AuroraBackground>

            <div className="term-content-section">
                <h2 className="term-content-section-head">Last Updated: Wed 15 Jan 2025</h2>
                <p className="term-content-section-para">These Terms and Conditions (“Terms”) govern your use of the websites www.adclickmagnet.com, www.adclickmagnet.us, and www.adclickmagnet.ca (collectively referred to as the “Website”). <br />By accessing or using the Website, you agree to be bound by these Terms and Conditions.</p>
                <h2 className="term-content-section-head">1. Use of the Website</h2>
                <p className="term-content-section-para">You are authorized to use the Website for lawful purposes only. You agree to comply with all applicable laws, rules, and regulations regarding your use of the Website. <br />You may not use the Website for any purpose that is illegal, harmful, or prohibited by these Terms.</p>

                <h2 className="term-content-section-head">2. Content and Intellectual Property</h2>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'>All content available on the Website, including but not limited to text, images, graphics, logos, and software, is the property of AdClickMagnet or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
                    <li className='mb-4'>You are granted a limited, non-exclusive, non-transferable license to view, copy, and print content from the Website for personal, non-commercial purposes only, provided that you do not modify or redistribute the content in any way.</li>
                    <li className='mb-4'>You may not copy, modify, distribute, or create derivative works based on any software, processes, or proprietary technology embedded or described in the Website without our express permission.</li>
                    <li className='mb-4'>The AdClickMagnet name, logo, and other marks are trademarks of AdClickMagnet and may not be used without prior written consent.</li>
                </ul>

                <h2 className="term-content-section-head">3. Privacy and Data Use</h2>
                <p className="term-content-section-para">By using the Website, you acknowledge and agree to the collection, use, and processing of your personal information as outlined in our Privacy Policy. <br />Our Privacy Policy governs how we handle the data you provide when you interact with our services and is incorporated by reference into these Terms.</p>

                <h2 className="term-content-section-head">4. Third-Party Links and Services</h2>
                <p className="term-content-section-para">The Website may contain links to third-party websites, resources, or tools that are not owned or controlled by AdClickMagnet. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. <br />By using these links, you acknowledge and agree that AdClickMagnet is not responsible or liable for any damages or losses arising from your use of such third-party sites or services.</p>
                
                <h2 className="term-content-section-head">5. Disclaimers</h2>
                <ul className="term-content-section-para term-list">
                    <li className='mb-4'><span className="text-bold">General Information: </span>The content on the Website is for general informational purposes only. We do not provide professional advice or services via the Website. <br />Before taking any actions based on information found on the Website, you should consult with a qualified professional.</li>
                    <li className='mb-4'><span className="text-bold">Website Availability:</span> The Website is provided “as is” without any representations or warranties. We do not guarantee that the Website will be free from errors, viruses, or other harmful components. <br />We are not liable for any loss of data or services resulting from your use of the Website.</li>
                    <li className='mb-4'><span className="text-bold">Limitation of Liability:</span> To the fullest extent permitted by law, AdClickMagnet, its affiliates, <br />and their respective personnel will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of the Website, whether in contract, tort (including negligence), or otherwise.</li>
                    
                </ul>

                <h2 className="term-content-section-head">6. Modifications to the Website and Terms</h2>
                <p className="term-content-section-para">We reserve the right to modify, suspend, or discontinue the Website or any part of its services at any time without notice. We also reserve the right to update or change these Terms at our discretion. <br />When we make changes, we will post the updated Terms on this page with an updated effective date. By continuing to use the Website after such changes are posted, you agree to the revised Terms.</p>

                <h2 className="term-content-section-head">7. Termination</h2>
                <p className="term-content-section-para">AdClickMagnet may terminate or suspend your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, the Website, or AdClickMagnet itself.</p>

                <h2 className="term-content-section-head">8. Indemnification</h2>
                <p className="term-content-section-para">You agree to indemnify, defend, and hold harmless AdClickMagnet, its officers, directors, employees, agents, <br />and affiliates from any and all claims, liabilities, damages, and expenses (including reasonable attorney’s fees) arising out of or in connection with your use of the Website, your violation of these Terms, or your infringement of any intellectual property rights.</p>
                
                <h2 className="term-content-section-head">9. Governing Law</h2>
                <p className="term-content-section-para">These Terms and your use of the Website are governed by and construed in accordance with the laws of the jurisdiction where AdClickMagnet is incorporated, without regard to its conflict of law principles. <br />Any disputes arising out of or in connection with these Terms shall be resolved exclusively in the competent courts of that jurisdiction.</p>
                
                <h2 className="term-content-section-head">10. Severability</h2>
                <p className="term-content-section-para">If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect, and the invalid or unenforceable provision shall be re-construed to reflect the original intent as closely as possible.</p>
                
                <h2 className="term-content-section-head">11. Contact Us</h2>
                <p className="term-content-section-para term-page-contact-para">If you have any questions or concerns about these Terms, please contact us at:</p>
                <ul className="term-content-section-para term-list ">
                    <li className='mb-4'><span className="text-bold">Email: info@adclickmagnet.com</span></li>
                    <li className='mb-4'><span className="text-bold">Website: www.adclickmagnet.com</span></li>
                </ul>
                <p className="term-content-section-para term-page-contact-para">By using the Website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
                <p className="term-content-section-para">These Terms and Conditions apply to the websites owned and operated by <span className="text-bold">AdClickMagnet.</span></p>

            </div>
        </div>
        <Footer />
    </>
  )
}

export default TermCondition