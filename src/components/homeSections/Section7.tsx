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
    name: "Jolie",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/jolie-1.svg"
  },
  {
    name: "Caridad",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/caridad.svg"
  },
  {
    name: "F7",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/F7.svg"
  },
  {
    name: "Scuola",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/Scuola_Logo_OnlyTop-1.svg"
  },
  {
    name: "Petmania",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/petmania.svg"
  },
  {
    name: "tecnologia",
    img: "https://numerique.vamtam.com/wp-content/uploads/2023/06/tecnologia.svg"
  },

]


export default function Section7() {
    return (
        <div className="flex-col justify-center items-center w-full sec7-container">
            <TypewriterEffect className="data-driven-head"  words={words} />
            <div className="flex justify-between mt-10 sec7-logo-container">
              {bestBrand.map((each,index) => (
                <Image key={index} className="sec7-logo" width={130} height={100} src={each.img} alt={each.name} />
              ))}
            </div>
        </div>
    );
}

