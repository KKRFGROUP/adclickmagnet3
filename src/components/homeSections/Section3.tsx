

import Section3Model from "../3dmodels/setion3Model";
import { PlaceholdersAndVanishInputDemo } from "../ui/placeholders-and-vanish-input";




export default function Section3() {
  return (
    <>
    <Section3Model />
    <div className="section3-container sm:h-[20vh]">
        <div className="input-container flex justify-center">
          <PlaceholdersAndVanishInputDemo />
        </div>
    </div>
    </>
  );
}




