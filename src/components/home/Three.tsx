import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Globe from "./Globe";

const Three = () => {
  return (
    <Canvas camera={{ fov: 25, position: [4, 4, 4] }}>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <mesh>
        <ambientLight intensity={0.5} />
        <Globe />
      </mesh>
    </Canvas>
  );
};

export default Three;
