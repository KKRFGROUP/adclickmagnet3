import { HoverEffect } from "../ui/CardHoverEffect";
import Image from "next/image";



export default function Section5() {
  return (
    <div className="mb-[50px]">
    <div className="logo-service rounded-t-[50px]">
      <div className="flex items-center mobile-our-digital-service">
        <Image className="sec-5-logo" height={190} width={190} src="/images/logos/white logo.webp" alt="acm logo" />
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
    imageUrl: "/images/home services/google ads.webp"
  },
  {
    title: "Meta Ads",
    description:
      "Enhance engagement and reach your audience with strategic Meta campaigns.",
    link: "/meta-ads",
    imageUrl: "/images/home services/meta.webp"
  },
  {
    title: "Graphic Design",
    description:
      "Transform your ideas into stunning visuals that captivate and inspire.",
    link: "/graphic-design",
    imageUrl: "/images/home services/graphic design.webp"
  },
  {
    title: "Web Development",
    description:
      "Create cutting-edge websites tailored to your brand and user needs.",
    link: "/web-development",
    imageUrl: "/images/home services/web dev.webp"
  },
  {
    title: "SEO",
    description:
      "Optimize your online presence with strategies that drive organic growth.",
    link: "/seo",
    imageUrl: "/images/home services/seo.webp"
  },
  {
    title: "LinkedIn",
    description:
      "Use LinkedIn marketing to expand networks and enhance your brand.",
    link: "/linkedin-ads",
    imageUrl: "/images/home services/linkedin.webp"
  },
];
