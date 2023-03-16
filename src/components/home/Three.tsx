import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";
import { Euler, Vector3 } from "three";

const Three = () => {
  const cameraPosition = useMemo(() => new Vector3(4, 4, 4), []);

  return (
    <Canvas camera={{ fov: 25, position: cameraPosition }}>
      {useMemo(
        () => (
          <OrbitControls enableZoom={false} autoRotate={true} />
        ),
        []
      )}
      <Globe />
    </Canvas>
  );
};

export default Three;
