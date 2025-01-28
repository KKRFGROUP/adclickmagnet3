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
    img: "/images/brands/EBOWLA.webp"
  },
  {
    name: "Canada View",
    img: "/images/brands/Canada View.webp"
  },
  {
    name: "Jen Thomson",
    img: "/images/brands/Jen Thomson.webp"
  },
  {
    name: "Sisli",
    img: "/images/brands/Sisli.webp"
  },
  {
    name: "PGroomer",
    img: "/images/brands/PGroomer.webp"
  },
  {
    name: "Smokey",
    img: "/images/brands/Smokey.webp"
  },
  {
    name: "DonJon",
    img: "/images/brands/DonJon.webp"
  },
  {
    name: "IQ Home Care",
    img: "/images/brands/IQ Home Care.webp"
  },
  {
    name: "Blends",
    img: "/images/brands/Blends.webp"
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

