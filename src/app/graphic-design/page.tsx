import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import CreativeService from './sections/CreativeService';

import DesignProcess from './sections/DesignProcess';
import Portfolio from './sections/Portfolio';
import InfiniteText from './sections/InfiniteText';
import OverlappingSections from './sections/OverlappingSections';
//import ContactSection from './sections/ContactSection';
import "./graphic.css";
import DigitalServices from './sections/DigitalServices';

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";


const GraphicDesignPage = () => {
  return (
    <div className='overflow-hidden'>
      <TracingBeam>
        <Navbar />
        <HeroSection />
        <DesignProcess />
        <DigitalServices />
        
        <Portfolio />
        <CreativeService />
        <OverlappingSections />
        <InfiniteText />
        <Footer />
      </TracingBeam>
    </div>
  );
};

export default GraphicDesignPage;
