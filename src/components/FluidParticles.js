import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const particles = new Array(1000).fill().map(() => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ),
    color: new THREE.Color(Math.random(), Math.random(), Math.random()),
  }));

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.001;

      ref.current.rotation.x += (mouse.current.y - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouse.current.x - ref.current.rotation.y) * 0.05;
    }
  });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Particles />
      </Canvas>
    </div>
  );
}

function FluidParticles() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Particles />
    </Canvas>
  );
}

export default FluidParticles;
