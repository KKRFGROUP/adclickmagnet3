import { HoverEffect } from "../ui/CardHoverEffect";
import Image from "next/image";
import img from '../../public/images/logo/adclickmagnetlogogrey.png'
import { TypewriterEffect } from "../ui/TypewriterEffect";
import webDevelopment from '../../public/images/Website Developer Logo.png';

const words = [
  {
    text: "Our",
    className: "text-white dark:text-white-500 tracking-widest leading-relaxed",
  },
  {
    text: "Servicess",
    className: "text-white dark:text-white-500 tracking-widest leading-relaxed",
  },
];

export default function Section5() {
  return (
    <div className="mb-[50px]">
    <div className="logo-service rounded-t-[50px]">
      <div className="flex items-center mobile-our-digital-service">
        <Image className="sec-5-logo" height={180} width={180} src={img} alt="acm logo" />
        <p className="services">Services</p>
      </div>
    </div>
    <div className="max-w-5xl mx-auto our-service-hover-cards">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Google Ads",
    description:
      "Boost your business visibility with data-driven Google advertising solutions.",
    link: "/google-ads",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731675419/Copy_2_of_Google_Ads_Logo_eow67i.png"
  },
  {
    title: "Meta Ads",
    description:
      "Enhance engagement and reach your audience with strategic Meta campaigns.",
    link: "/meta-ads",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731673035/Meta_Logo_hhqqp8.png"
  },
  {
    title: "Graphic Design",
    description:
      "Transform your ideas into stunning visuals that captivate and inspire.",
    link: "/graphic-design",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731673033/Graphic_Design_Logo_n10ext.png"
  },
  {
    title: "Web Development",
    description:
      "Create cutting-edge websites tailored to your brand and user needs.",
    link: "/website-development",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731673056/Website_Developer_Logo_djqgpq.png"
  },
  {
    title: "SEO",
    description:
      "Optimize your online presence with strategies that drive organic growth.",
    link: "/seo",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731675030/SEO_Logo_1_q4z4hu.png"
  },
  {
    title: "LinkedIn",
    description:
      "Use LinkedIn marketing to expand networks and enhance your brand.",
    link: "/linkedin",
    imageUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1731676028/LinkedIn_Logo_ekl0mc.png"
  },
];
