"use client";
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);


const items = [
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlQgBYHc-oK1CtI_SeIkYNHT0UWkIaPLQCQ&s',
        head: "Ad Creative",
        page: "ad-creative",
        para: "Get static and motion ad creative, concepts, and variations for testing your way to better results across social media."
    },
    {
        id: 2,
        imageUrl: 'https://cdn.sanity.io/images/k0dlbavy/production/7b0e427fbedc93ed4326fa45798280b14e250302-1296x1256.png?auto=format&fit=max&q=100&w=1296',
        head: "Branding Services",
        page: "branding-services",
        para: "Get the brand expertise you need, however you need it, from brand development and design to custom branding solutions."
    },
    {
        id: 3,
        imageUrl: 'https://img.freepik.com/premium-photo/back-view-young-white-man-editing-video_1015182-43245.jpg',
        head: "Video Production",
        page: "video-production",
        para: "Receive strategy-aligned video content services, from pre-production to final edit, to maximize your online success."
    },
    {
        id: 4,
        imageUrl: 'https://slidestack-prod.s3.amazonaws.com/templates/h7gCcfhlvKogPwOBxxMptBQehIalCW8Iq7nscqVP.jpg',
        head: "Presentation Design",
        page: "presentation-design",
        para: "Get original presentations designed for your persuasive pitch decks, sales decks, or PowerPoint presentations."
    },
    {
        id: 5,
        imageUrl: 'https://blog.openreplay.com/assets/hero_2aW9uI.png',
        head: "Motion Design",
        page: "motion-design",
        para: "Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads."
    },
    //{
    //    id: 6,
    //    imageUrl: 'https://i.pinimg.com/736x/ec/d6/62/ecd662c702bdf61baa72d9dd9b3bf253.jpg',
    //    head: "Social Media Creative",
    //    page: "social-media-creative",
    //    para: "Get original designs for your social media channels. Static, animated or video, from Instagram to YouTube or Facebook."
    //  },  
    //{
    //    id: 7,
    //    imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-nocturnal-person-staying-up_23-2150944847.jpg',
    //    head: "Illustration Design",
    //    page: "illustration-design",
    //    para: "Get custom, on-brand illustrations for your business or marketing efforts that act as an extension of your company."
    //},
    //{
    //    id: 8,
    //    imageUrl: 'https://res.cloudinary.com/deepcnbrz/image/upload/v1730102325/Screenshot_2024-10-28_132305_ybjjpp.png',
    //    head: "Concept Creation",
    //    page: "concept-creation",
    //    para: "Get 360 campaigns, designs and concept ideas for ads that capture and entice your audience be it online or offline."
    //},
    //{
    //    id: 9,
    //    imageUrl: 'https://img.freepik.com/premium-psd/safe-delivery-icon-packing-box-with-shield-symbol-goods-delivery-guarantee-3d-render_471402-558.jpg?w=360',
    //    head: "Packaging and Merch",
    //    page: "packaging-merch",
    //    para: "Get on-brand apparel, merchandise, or packaging designs to make your business or product stand out."
    //},
    //{
    //    id: 10,
    //    imageUrl: 'https://i.graphicmama.com/blog/wp-content/uploads/2022/10/13115229/cute-3d-models-presented-in-website-design.jpg',
    //    head: "AR / 3D Design",
    //    page: "ar-3d-Design",
    //    para: "Push your creative boundaries into a new dimension with social AR and 3D design o capture your audience's attention."
    //},
    //{
    //    id: 11,
    //    imageUrl: 'https://outerorbittech.com/wp-content/uploads/2024/05/Enhance-Graphic-Design.jpg',
    //    head: "AI-Enhanced Design",
    //    page: "ai-enhanced-design",
    //    para: "Leverage AI experts to boost design efficiency by 30%-60%, reducing costs while ensuring quality and brand consistency."
    //},
    //{
    //    id: 12,
    //    imageUrl: 'https://img.freepik.com/free-psd/3d-email-icon-3d-illustration-design_460848-16721.jpg',
    //    head: "Email Design",
    //    page: "email-design",
    //    para: "Invigorate your communications your emails with original email designs, templates, and creative to capture your audience’s attention."
    //},
    //{
    //    id: 13,
    //    imageUrl: 'https://cdn.sanity.io/images/k0dlbavy/production/cd09b731c56977a92f0d9f87b44dedc9253ffcf9-1200x1200.png?auto=format&fit=max&q=100&w=600',
    //    head: "eBooks & Report Design",
    //    page: "ebooks-report-design",
    //    para: "Get eBooks and reports with designs that demands attention. Supercharge your reports, eBooks and digital learning content."
    //},
    //{
    //    id: 14,
    //    imageUrl: 'https://static-cse.canva.com/blob/1171659/Printvsweb_featuredimagefinal.png',
    //    head: "Print Design",
    //    page: "print-design",
    //    para: "From book covers, magazines, posters and flyer designs, get custom print designs to capture your audience’s attention."
    //},
    //{
    //    id: 15,
    //    imageUrl: 'https://media.licdn.com/dms/image/D4E12AQFeHRxxhDlAeg/article-cover_image-shrink_720_1280/0/1709830828348?e=2147483647&v=beta&t=0vFE-JvYL2_GSLliKxCsGHjg2lvqkv5wj0q57Si_PTI',
    //    head: "Digital Marketing Consult",
    //    page: "digital-marketing-consult",
    //    para: "Empower your business with data-driven digital marketing strategies and expert insights from our consultants."
    //},

]


function DigitalServices() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const hscroll = gsap.fromTo(
      sectionRef.current,
      {translateX:0},
      {
        translateX: "-100%",
        ease: "none",
        duration: 2,
        scrollTrigger:{
          trigger: triggerRef.current,
          start: "top -40%",
          end: "180% top",
          scrub: 2,
          pin: true
        }
      }
    )
    return () => {
      hscroll.kill();
    }

  })
  return (
    <div className='graphic-page-services-sec-container' ref={triggerRef}>
        <h2 className="graphic-page-services-sec-head">Design</h2>
        <h2 className="relative left-[200px] graphic-page-services-sec-head">Services</h2>

        <div className='flex graphic-page-services-cards-container' ref={sectionRef}>
          {items.map((each,index) => (
          <Link key={index} href={`/${each.page}`}>
            <div className="graphic-page-services-card flex-col justify-between" key={each.id}>
              <div>
                <Image className='graphic-page-services-card-img' height={400} width={400} src={each.imageUrl} alt={each.head} />
                <h1 className='graphic-page-services-card-head' >{each.head}</h1>
                <p className='graphic-page-services-card-para' >{each.para}</p>
              </div>
              
              <hr className='graphic-page-services-card-line ' />
              
            </div>
          </Link>
          )
        )}
        </div>
    </div>
  )
}

export default DigitalServices