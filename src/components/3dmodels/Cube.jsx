"use client";


import {  TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
const Cube = () => {
  
  const textures = [
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531895/Piled_Up_Packaging_Tape_Rolls_Mockup_yeboto.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531897/Curame_Hair_Care_Branding_Packaging_Design_tjwnwh.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531889/Mockups_for_Vogue_swim_%EF%B8%8F_modernbrief_modernbriefvogue_jib8dm.jpg"), //top
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531889/Mockups_for_Vogue_swim_%EF%B8%8F_modernbrief_modernbriefvogue_jib8dm.jpg"),//bottom
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531893/Wedge-Designed_Ami_Ami_Shows_That_Boxed_Wine_Can_Be_Pretty_Gosh_Darn_Cool_cxoxor.jpg"), 
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531890/Seth_Rogen_s_cannabis_brand_Houseplant_unveils_collectable_lego-like_packaging_pnn7cm.jpg"),
  ];


  
  return (
    <mesh recieveShadow={true}>
      <boxGeometry args={[1.8,3.6,1.8]}/>
      {textures.map((texture, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
      ))}
        {/*<RenderTexture attach="map" >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background"  args={["#fff"]} />
          <Text ref={textRef}  fontSize={1} lineHeight={10} color="#000">
            Who We Are
          </Text>
        </RenderTexture>
      </meshStandardMaterial>*/}
    </mesh>
  );
};

export default Cube;