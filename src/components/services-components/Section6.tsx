"use client"

import React from 'react'
import { TypewriterEffect } from "../ui/TypewriterEffect";
import Image from 'next/image';
import { TabNavigation } from "../ui/tab-navigation";

interface Section6Props {
  content: {
    mainpara: string;
    heading: {
      text: string;
      className: string;
    }[];
    para: string;
    social: {
      img: string;
      name: string;
      para: string;
    }[];
  };
}

function Section6({ content }: Section6Props) {
  // Transform original content to the format expected by TabNavigation
  const tabNavigationContent = content.social.map((item) => ({
    title: item.name,
    description: item.para,
    content: (
      <div className="services-sec6-media-wrapper">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={90}
          className="services-sec6-media-img"
        />
      </div>
    ),
  }));

  return (
    <div className="services-sec6-container">
      <div className="services-sec6-header">
        <div className="services-sec6-header-inner">
          <p className="services-sec6-subtitle">{content.mainpara}</p>
          <TypewriterEffect className="services-sec6-title" words={content.heading} />
          <p className="services-sec6-intro">{content.para}</p>
        </div>
      </div>
      
      <TabNavigation 
        content={tabNavigationContent} 
        contentClassName="services-sec6-tab-media" 
      />
    </div>
  );
}

export default Section6;