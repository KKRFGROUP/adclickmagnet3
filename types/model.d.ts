declare module '*.gltf' {
    const content: string;
    export default content;
  }
  
  declare module '@react-three/drei' {
    export function useGLTF(
      path: string,
      useDraco?: boolean,
      onError?: (error: { message: string }) => void
    ): {
      scene: THREE.Scene;
      scenes: THREE.Scene[];
      materials: { [key: string]: THREE.Material };
      animations: THREE.AnimationClip[];
    };
  }