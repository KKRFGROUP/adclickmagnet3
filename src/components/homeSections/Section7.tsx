import Image from "next/image";
import { TypewriterEffect } from "../ui/TypewriterEffect";

const words = [
    {
        text: "The",
    },
    {
      text: "best",
    },
    {
        text: "brands",
    },
    {
      text: "choose",
    },
    {
      text: "ACM.",
      className: "text-black dark:text-black ",
      
    },
  ];

const bestBrand = [
  {
    name: "EBOWLA",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539819/EBOWLA_Black_LOGO-removebg-preview_wegwag.png"
  },
  {
    name: "Canada View",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539816/Canada_view_logo-removebg-preview_ejmaon.png"
  },
  {
    name: "Jen Thomson",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539813/Jen_thomson_Black_logo-removebg-preview_pbs3x1.png"
  },
  {
    name: "Sisli",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539810/Sisli_black_logo-removebg-preview_wgwkop.png"
  },
  {
    name: "PGroomer",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539808/PGroomer_logo-removebg-preview_tjbvmd.png"
  },
  {
    name: "Smokey",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539804/Smokey_black_logo-removebg-preview_lrgjta.png"
  },
  {
    name: "DonJon",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539719/Donjon_black_logo-removebg-preview_rzndtm.png"
  },
  {
    name: "IQ Home Care",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539725/IQ_HOME_CARE_LOGO__1_-removebg-preview_hinzq5.png"
  },
  {
    name: "Blends",
    img: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734539718/Blinds_by_design_black_logo-removebg-preview_bm8h8p.png"
  },
  {
    name: "Dekalash",
    img: "/images/brands/Dekalash.webp"
  },
  {
    name: "HeartSaver-NY",
    img: "/images/brands/HeartSaver-NY.webp"
  },
  {
    name: "Wiseman Hoffs",
    img: "/images/brands/Wiseman Hoffs.webp"
  },
  {
    name: "FSilveira",
    img: "/images/brands/FSilveira.webp"
  },

  {
    name: "Spartans",
    img: "/images/brands/Spartans.webp"
  },
  {
    name: "RockWood Kitchens",
    img: "/images/brands/RockWood Kitchens.webp"
  },
  {
    name: "Recover Ease",
    img: "/images/brands/Recover Ease.webp"
  },
  {
    name: "Roof Today",
    img: "/images/brands/Roof Today.webp"
  },
  {
    name: "Count Down Fitness",
    img: "/images/brands/Count Down Fitness.webp"
  },
  {
    name: "Tapis Rugs & Carpet",
    img: "/images/brands/Tapis Rugs & Carpet.webp"
  },
  {
    name: "Devilered 2 Choices",
    img: "/images/brands/Devilered 2 Choices.webp"
  },
  {
    name: "BON TON",
    img: "/images/brands/BON TON.webp"
  },
  {
    name: "Real Results Sales",
    img: "/images/brands/Real Results Sales.webp"
  },
  {
    name: "Sakh Public School",
    img: "/images/brands/Sakh Public School.webp"
  },
  {
    name: "Barista",
    img: "/images/brands/Barista.webp"
  },
  {
    name: "Controller Chaos",
    img: "/images/brands/Controller Chaos.webp"
  },
  {
    name: "BI Soni Clean",
    img: "/images/brands/BI Soni Clean.webp"
  },
  {
    name: "Privacon",
    img: "/images/brands/Privacon.webp"
  },
  {
    name: "Lexington Podiatry",
    img: "/images/brands/Lexington Podiatry.webp"
  },
  {
    name: "Quick Check Tech",
    img: "/images/brands/Quick Check Tech.webp"
  },
  {
    name: "Modern Podiatrist",
    img: "/images/brands/Modern Podiatrist.webp"
  },
  {
    name: "Decorento",
    img: "/images/brands/Decorento.webp"
  },
  {
    name: "Mystic Journeys",
    img: "/images/brands/Mystic Journeys.webp"
  },

]


export default function Section7() {
    return (
        <div className="flex-col justify-center items-center w-full sec7-container">
            <TypewriterEffect className="data-driven-head"  words={words} />
            <div className="flex justify-between mt-10 sec7-logo-container">
              {bestBrand.map((each,index) => (
                <Image key={index} className="sec7-logo" width={170} height={140} style={{width: "auto", height: "auto"}} src={each.img} alt={each.name} />
              ))}
            </div>
        </div>
    );
}

