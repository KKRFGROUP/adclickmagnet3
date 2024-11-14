"use client";

//import dynamic from 'next/dynamic';


//const Spline = dynamic(() => import('@splinetool/react-spline'), {
//  ssr: false,
//});
import Spline from '@splinetool/react-spline/next';

export default function Section3Model() {
  return (
    <div className='sec3-model'>
      <Spline
        scene="https://prod.spline.design/KHokVySkT2jgUhp4/scene.splinecode" 
      />
    </div>
  );
}