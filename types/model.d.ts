import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'

declare module '*.gltf' {
  const content: string;
  export default content;
}

interface GLTFResult {
  nodes: {
    Scene: THREE.Group;
    [key: string]: THREE.Object3D;
  };
  materials: {
    [key: string]: THREE.Material;
  };
  animations: THREE.AnimationClip[];
  scenes: THREE.Scene[];
  scene: THREE.Group;
}

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Object3D | THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};