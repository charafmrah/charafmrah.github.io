import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Three = () => {
  return (
    <Canvas>
      <OrbitControls />
      {/* globe here */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
};

export default Three;
