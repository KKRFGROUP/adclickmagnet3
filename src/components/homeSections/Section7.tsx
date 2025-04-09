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
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/EBOWLA.webp"
  },
  {
    name: "Canada View",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Canada%20View.webp"
  },
  {
    name: "Jen Thomson",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Jen%20Thomson.webp"
  },
  {
    name: "Sisli",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Sisli.webp"
  },
  {
    name: "PGroomer",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/PGroomer.webp"
  },
  {
    name: "Smokey",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Smokey.webp"
  },
  {
    name: "DonJon",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/DonJon.webp"
  },
  {
    name: "IQ Home Care",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/IQ%20Home%20Care.webp"
  },
  {
    name: "Blends",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Blends.webp"
  },
  {
    name: "Dekalash",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Dekalash.webp"
  },
  {
    name: "HeartSaver-NY",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/HeartSaver-NY.webp"
  },
  {
    name: "Wiseman Hoffs",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Wiseman%20Hoffs.webp"
  },
  {
    name: "FSilveira",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/FSilveira.webp"
  },

  {
    name: "Spartans",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Spartans.webp"
  },
  {
    name: "RockWood Kitchens",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/RockWood%20Kitchens.webp"
  },
  {
    name: "Recover Ease",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Recover%20Ease.webp"
  },
  {
    name: "Roof Today",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Roof%20Today.webp"
  },
  {
    name: "Count Down Fitness",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Count%20Down%20Fitness.webp"
  },
  {
    name: "Tapis Rugs & Carpet",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Tapis%20Rugs%20&%20Carpet.webp"
  },
  {
    name: "Devilered 2 Choices",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Devilered%202%20Choices.webp"
  },
  {
    name: "BON TON",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/BON%20TON.webp"
  },
  {
    name: "Real Results Sales",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Real%20Results%20Sales.webp"
  },
  {
    name: "Sakh Public School",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Sakh%20Public%20School.webp"
  },
  {
    name: "Barista",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Barista.webp"
  },
  {
    name: "Controller Chaos",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Controller%20Chaos.webp"
  },
  {
    name: "BI Soni Clean",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/BI%20Soni%20Clean.webp"
  },
  {
    name: "Privacon",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Privacon.webp"
  },
  {
    name: "Lexington Podiatry",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Lexington%20Podiatry.webp"
  },
  {
    name: "Quick Check Tech",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Quick%20Check%20Tech.webp"
  },
  {
    name: "Modern Podiatrist",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Modern%20Podiatrist.webp"
  },
  {
    name: "Decorento",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Decorento.webp"
  },
  {
    name: "Mystic Journeys",
    img: "https://adclickmagnetimage.blr1.cdn.digitaloceanspaces.com/Mystic%20Journeys.webp"
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

