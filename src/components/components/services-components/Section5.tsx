import React from 'react'
import { FaImage } from "react-icons/fa";
import { GiFallingBlob } from "react-icons/gi";
import { PiVideoFill } from "react-icons/pi";
import { PiCubeTransparentFill } from "react-icons/pi";

function Section5() {
  return (
    <div className="services-secs-main-container h-[110vh] rounded-b-[50px] flex-col justify-center items-center text-center">
        <p className="services-secs-para">FORMAT MASTERY</p>
        <h2 className="services-secs-head">Mix and match multiple ad formats for maximum impact</h2>
        <div className="flex flex-wrap mt-[60px]">
            <div className="m-3 w-[23%] text-left">
                <div className="services-sec4-card-logo flex justify-center items-center">
                    <GiFallingBlob  className='text-3xl'/>
                </div>
                <h2 className='services-sec4-card-head'>Animated / Motion Ads</h2>
                <p className="services-sec4-card-para">Bring your ads to life with captivating animation and illustrations. Motion design can also be applied with other formats like video.</p>
                <hr  className="services-sec4-card-line"/>
            </div>
            <div className="services-sec4-card m-3 w-[23%] text-left">
                <div className="services-sec4-card-logo flex justify-center items-center">
                    <FaImage  className='text-3xl'/>
                </div>
                <h2 className='services-sec4-card-head'>Static Image Ads</h2>
                <p className="services-sec4-card-para">From a single campaign to multichannel rollouts, design striking static ads that make a statement and leave a lasting impression.</p>
                <hr  className="services-sec4-card-line"/>
            </div>
            <div className="services-sec4-card m-3 w-[23%] text-left mb-9">
                <div className="services-sec4-card-logo flex justify-center items-center">
                    <PiVideoFill  className='text-3xl'/>
                </div>
                <h2 className='services-sec4-card-head'>Video Ads</h2>
                <p className="services-sec4-card-para">Move at a solid clip with full-service video capabilities that let you make an instant impact across a wide range of platforms and channels.</p>
                <hr  className="services-sec4-card-line"/>
            </div>
            <div className="services-sec4-card m-3 w-[23%] text-left mb-9">
                <div className="services-sec4-card-logo flex justify-center items-center">
                    <PiCubeTransparentFill  className='text-3xl'/>
                </div>
                <h2 className='services-sec4-card-head'>Augmented Reality Ads</h2>
                <p className="services-sec4-card-para">Push the boundaries of creativity with world- and front-facing AR applications for innovative immersive campaigns and experiences.</p>
                <hr  className="services-sec4-card-line"/>
            </div>
        </div>
    </div>
  )
}

export default Section5