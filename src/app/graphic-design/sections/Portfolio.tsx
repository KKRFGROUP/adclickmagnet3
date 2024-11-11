import 'animate.css';
import { PiPaperPlaneRightBold } from "react-icons/pi";
import Image from 'next/image';

const Portfolio = () => {
    return (
      <section className="portfolio-sec-container">
        <div className="portfolio-container">
          <div className="flex justify-between items-center">
            <p>PORTFOLIO</p>
            <button type='button' className="flex items-center gap-4 animate__headShake">SEE ALL PROJECTS
              <PiPaperPlaneRightBold />
            </button>
          </div>
          <hr className='mt-3'/>
        </div>
        <div className='portfolio-sec-head-container flex-col'>

          <h2 className='portfolio-sec-head'>Selected</h2>
          <h2 className='portfolio-sec-head-second'>Works</h2>
        <div className='portfolio-sec-card-container flex items-end gap-9'>
          <figure>
            <Image className='portfolio-sec-card-img' width={100} height={100} src="https://618media.com/wp-content/uploads/2024/02/understanding-ad-performance-metrics-for-success.webp" alt="portfolio img" />
          </figure>
          <div>
            <h2 className='portfolio-sec-card-head'>Up to 65% lift in ad performance<br /> driven by deep expertise in<br /> breakthrough creative</h2>
          </div>
        </div>

        <div className='portfolio-sec-card-container flex justify-end text-right items-end gap-9 mt-9 mb-9'>
          
          <div>
            <h2 className='portfolio-sec-card-head'>50% reduction in overall costs as<br /> compared to a traditional<br /> agency, while ensuring high-quality creative</h2>
          </div>
          <figure>
            <Image className='portfolio-sec-card-img' width={100} height={100} src="https://618media.com/wp-content/uploads/2024/02/understanding-ad-performance-metrics-for-success.webp" alt="portfolio img" />
          </figure>
        </div>

        <div className='portfolio-sec-card-container flex items-end gap-9 mt-9'>
          <figure>
            <Image className='portfolio-sec-card-img' width={100} height={100} src="https://618media.com/wp-content/uploads/2024/02/understanding-ad-performance-metrics-for-success.webp" alt="portfolio img" />
          </figure>
          <div>
            <h2 className='portfolio-sec-card-head'>Lowered employee churn and increased<br /> happiness on various creative<br /> and marketing teams</h2>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  