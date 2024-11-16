
import '../graphic.css';
import Link from 'next/link';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';

const HeroSection = () => {
    return (
      <section  className="graphic-page-hero-sec-container flex justify-center items-center text-white py-16 text-center">
        <div className="graphic-page-hero-sec-content flex-col justify-center items-center mt-10 w-[80%]">
          
          <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={"adClickMagnet"} />
          
          <TextGenerateEffect className="font-syne" color={"contact-us-main-head"} words={"Creative Graphic Design"} />
            
      
           <p className="graphic-page-hero-sec-para-last">Specialized in Branding and Content Creation</p>
           <p className="graphic-page-hero-sec-para" >Since 2022, we craft designs that captivate, communicate, and leave a lasting impression. Let’s create something extraordinary together!</p>
           <div className="flex items-center justify-center w-[100%] mt-7">
            <Link href="/contact-us"><button className="service-hero-sec-content-button" type="button" >Get Started</button></Link>
            <Link href="#service-section3"><button className="service-hero-sec-content-button see-more" type="button" >See More</button></Link>
        
           </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  