"use client";


import {  TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
const Cube = () => {
  
  const textures = [
    useLoader(TextureLoader, "/images/about us/model textures/01.webp"),
    useLoader(TextureLoader, "/images/about us/model textures/02.webp"),
    useLoader(TextureLoader, "/images/about us/model textures/03.webp"), //top
    useLoader(TextureLoader, "/images/about us/model textures/03.webp"),//bottom
    useLoader(TextureLoader, "/images/about us/model textures/04.webp"), 
    useLoader(TextureLoader, "/images/about us/model textures/05.webp"),
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