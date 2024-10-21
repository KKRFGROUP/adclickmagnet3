"use client";

import Section3Model from "../3dmodels/setion3Model";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
//import Section3Model from "../3dmodels/setion3Model";

function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
      "Your Website URL",
      "Start Analysis Your Site",
      "Lets Grow with ACM",
      "We Analysis your site",
      "make a differene on your site",
    ];
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("submitted");
    };
    return (

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
    );
  }

export default function Section3() {
  return (
    <>
    <Section3Model />
    <div className="section3-container">
        <div className="input-container flex justify-center">
        <PlaceholdersAndVanishInputDemo />
        </div>
    </div>
    </>
  );
}




