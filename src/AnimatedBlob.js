import React from "react";
import {
  Sphere,
  MeshDistortMaterial,
  OrbitControls
} from "@react-three/drei";

const AnimatedBlob = () => {
  return (
    <Sphere args={[1, 100, 100]} scale={[10, 10, 1]} position={[-3, 0, -3]}>
      <OrbitControls enableZoom={false} />
      <MeshDistortMaterial
        color="#1976D2"
        distort={0.5}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimatedBlob;
