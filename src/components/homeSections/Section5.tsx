import { HoverEffect } from "../ui/card-hover-effect";
import Image from "next/image";
import img from '../../public/images/logo/adclickmagnetlogogrey.png'
 
export default function Section5() {
  return (
    <>
    <div className="logo-service">
      <div className=" flex items-center">
        <Image height={150} width={150} src={img} alt="acm logo" />
        <p className="services">Services</p>
      </div>
      <h2 className="our-services-head">Our Digital Services</h2>
    </div>
    <div className="max-w-5xl mx-auto sec5-cards-cont">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Google Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/google-ads",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/google-ads_evce9b.png"
  },
  {
    title: "Meta Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/meta-ads",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/metaads_zuynul.png"
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/graphic-design",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/graphic_kcngq5.png"
  },
  {
    title: "Web Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/website-development",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346057/developer_zapbki.png"
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/seo",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346057/seo_xhgl2x.png"
  },
  {
    title: "Ready to Innovate and drive an impact?",
    description:
      "",
    link: "/contact-us",
    imageUrl: "https://img.freepik.com/premium-vector/3d-growth-stock-diagram-with-arrow_169241-6867.jpg?semt=ais_hybrid"
  },
];