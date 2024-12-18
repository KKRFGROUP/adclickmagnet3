import dynamic from 'next/dynamic';

const Section3Model = dynamic(() => import("../3dmodels/Setion3Model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-pulse">Loading 3D Model...</div>
    </div>
  ),
});
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




