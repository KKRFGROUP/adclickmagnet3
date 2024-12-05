

import Section3Model from "../3dmodels/Setion3Model";
import { PlaceholdersAndVanishInputDemo } from "../ui/PlaceholdersAndVanishInput";




export default function Section3() {
  return (
    <div className="home-sec3-trigger">
    <Section3Model />
    <div className="section3-container">

        <div className="input-container">
          <PlaceholdersAndVanishInputDemo />
      </div>
    </div>
    </div >
  );
}




