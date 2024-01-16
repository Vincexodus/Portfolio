"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Model = () => {
  const gltf = useGLTF("/models/avatar.glb");
  return (
    <group>
      <primitive object={gltf.scene} scale={1.5} />
    </group>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.0} />
      <pointLight position={[0, 3, 0]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
};

export default AvatarCanvas;
