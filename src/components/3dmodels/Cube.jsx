"use client";


import {  TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
const Cube = () => {
  
  const textures = [
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166229/66ef60583159af66c2df6d6b_Frame_2_ucpit0.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166228/66ef5cfe4f93b80bfbf4617a_Frame_2_ept6pf.jpg"),
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166226/66ef5cfe9fcc1c5948b15a89_Frame_5-p-500_u5gs0o.jpg"), //top
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166226/66ef5cfe9fcc1c5948b15a89_Frame_5-p-500_u5gs0o.jpg"),//bottom
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166227/66ef5cfea8f2c57494566f45_Frame_3_vsz1mz.jpg"), 
    useLoader(TextureLoader, "https://res.cloudinary.com/dgdgrniut/image/upload/v1732166226/66ef5cfe9fcc1c5948b15a89_Frame_5-p-500_u5gs0o.jpg"),
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