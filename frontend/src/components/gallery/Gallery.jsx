import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Text, Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

function Carousel({ radius = 1.4, count = 8 }) {
  const group = useRef();
  
  useFrame((state, delta) => {
    // Continuous rotation
    group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`https://picsum.photos/600/400?random=${i}`}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius
          ]}
          rotation={[0, (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </group>
  );
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.2 : 1, 0.1, delta);
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta); // fake zoom effect
  });

  return (
    <Image 
      ref={ref} 
      url={url} 
      transparent 
      side={THREE.DoubleSide} 
      onPointerOver={() => hover(true)} 
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}

export default function Gallery() {
  return (
    <section className="h-screen bg-rtf-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Project <span className="text-rtf-blue">Gallery</span></h2>
         <p className="text-gray-400">Drag to explore our memories</p>
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <fog attach="fog" args={['#050505', 0, 15]} />
          <Carousel />
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          {/* Constrain controls so user can only rotate horizontally and zoom slightly */}
          <OrbitControls enablePan={false} enableZoom={true} minDistance={3} maxDistance={6} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
        </Canvas>
      </div>
    </section>
  );
}
