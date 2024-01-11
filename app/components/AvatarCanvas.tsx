"use client";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
  const gltf = useGLTF("/models/avatar.glb");
  return (
    <group>
      <primitive object={gltf.scene} scale={1} />
    </group>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={2.0} />
      <pointLight position={[2, 1, 0]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
};

export default AvatarCanvas;
