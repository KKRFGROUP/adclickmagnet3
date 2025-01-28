import 'animate.css';
import { PiPaperPlaneRightBold } from "react-icons/pi";
import Image from 'next/image';
import Link from 'next/link';
const Portfolio = () => {
    return (
      <section className="portfolio-sec-container">
        <div className="portfolio-container">
          <div className="flex justify-between items-center portfolio-container-flex">
            <p className='portfolio'>PORTFOLIO</p>
            <Link href="case-studies"><button type='button' className="flex items-center gap-3 portfolio">SEE ALL PROJECTS
              <PiPaperPlaneRightBold />
              </button>
            </Link>
          </div>
          <hr className='portfolio-container-line'/>
        </div>
        <div className='portfolio-sec-head-container flex-col'>

          <h2 className='portfolio-sec-head'>Selected</h2>
          <h2 className='portfolio-sec-head-second'>Works</h2>
        <div className='flex items-end gap-9 text-center portfolio-sec-card-container'>
          <figure>
            <Image className='portfolio-sec-card-img' width={500} height={500} src="/images/graphic design/portfolio/01.webp" alt="portfolio img" />
          </figure>
          <div className="flex justify-center items-center">
            <h2 className='portfolio-sec-card-head'>How ACM Create the Brand.</h2>
          </div>
        </div>

        <div className='portfolio-sec-card-container flex justify-end text-center items-end gap-9 mt-9 mb-9'>
          
          <div className="flex justify-center items-center mobile-text-order">
            <h2 className='portfolio-sec-card-head'>How ACM Create the Logo.</h2>
          </div>
          <figure>
            <Image className='portfolio-sec-card-img' width={500} height={500} src="/images/graphic design/portfolio/02.webp" alt="portfolio img" />
          </figure>
        </div>

        <div className='portfolio-sec-card-container text-center flex items-end gap-9 mt-9'>
          <figure>
            <Image className='portfolio-sec-card-img' width={500} height={500} src="/images/graphic design/portfolio/03.webp" alt="portfolio img" />
          </figure>
          <div className="flex justify-center items-center">
            <h2 className='portfolio-sec-card-head'>How ACM Create the Brand Colors.</h2>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  