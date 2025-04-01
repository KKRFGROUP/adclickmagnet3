import Image from "next/image";

const DesignProcess = () => {
    return (
      <section id="services-sec2-id" className="flex justify-between items-center graphic-page-sec2-container">
        <div className="graphic-page-sec2-content">
          <p className="graphic-page-sec2-content-variety">A variety of design services at your fingertips</p>
          <h2 className="graphic-page-sec2-content-head">Get graphic design,<br /> print, motion, video<br /> and more</h2>
          <p className="graphic-page-sec2-content-para">Whether you need an out-of-this-world illustration, beautiful print designs, or engaging digital marketing assets, ACM’s world-class graphic designers from around the world will make it happen.</p>
          <br />
          <p className="graphic-page-sec2-content-para">Unlike traditional graphic design agencies, ACM is a tech enabled, Creative-as-a-Service design solution built to keep up with the evolving needs and fast pace of enterprise teams. Access a full suite of design services through a transparent design subscription model.</p>
        </div>
        <div className="flex justify-center graphic-page-sec2-graphic">
          <div className="graphic-page-sec2-graphic-card">
          
            <Image className="graphic-page-overlap-gif graphic-page-sec2-gif" src="/images/graphic design/graphic design sec2 gif.gif" alt="gif" width={300} height={300} />
          </div>
        </div>
      </section>
    );
  };
  
  export default DesignProcess;
  

  