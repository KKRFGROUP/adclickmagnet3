"use client";

import React,{ useState, useEffect} from "react";
//import { useFrame } from "@react-three/fiber";
import {  TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";


const Cube2 = () => {
  //const cubeRef = useRef();
  const textures = [
    useLoader(TextureLoader, "/images/about us/model textures/03.webp"), //top
    useLoader(TextureLoader, "/images/about us/model textures/03.webp"),//bottom
    useLoader(TextureLoader, "/images/about us/model textures/01.webp"),
    useLoader(TextureLoader, "/images/about us/model textures/02.webp"),
    useLoader(TextureLoader, "/images/about us/model textures/04.webp"), 
    useLoader(TextureLoader, "/images/about us/model textures/05.webp"),
  ];
  
  //useFrame(() => {
  //  if (cubeRef.current) {
  //    cubeRef.current.rotation.x += 0.01; // Adjust speed by changing this value
  //  }
  //});
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