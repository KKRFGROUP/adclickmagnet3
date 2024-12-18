"use client";

import React,{useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import {  TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
const Cube2 = () => {
  const cubeRef = useRef();
  const textures = [
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531889/Mockups_for_Vogue_swim_%EF%B8%8F_modernbrief_modernbriefvogue_jib8dm.jpg"), //top
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531889/Mockups_for_Vogue_swim_%EF%B8%8F_modernbrief_modernbriefvogue_jib8dm.jpg"),//bottom
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531895/Piled_Up_Packaging_Tape_Rolls_Mockup_yeboto.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531897/Curame_Hair_Care_Branding_Packaging_Design_tjwnwh.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531893/Wedge-Designed_Ami_Ami_Shows_That_Boxed_Wine_Can_Be_Pretty_Gosh_Darn_Cool_cxoxor.jpg"), 
    useLoader(TextureLoader, "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1734531890/Seth_Rogen_s_cannabis_brand_Houseplant_unveils_collectable_lego-like_packaging_pnn7cm.jpg"),
  ];
  
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01; // Adjust speed by changing this value
    }
  });
  const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);


  
  return (
    <mesh >
      
      {windowWidth <768 ? <boxGeometry args={[2.5,1,1]}/> : <boxGeometry args={[4,1.4,1.4]}/>}
      {textures.map((texture, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
      ))}
        
    </mesh>
  );
};

export default Cube2;