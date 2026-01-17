import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera, OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef();
  const coreRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    coreRef.current.rotation.x -= delta * 0.4;
    coreRef.current.rotation.y -= delta * 0.5;
    
    // Pulse effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial 
          color="#00f6ff" 
          emissive="#00f6ff"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Internal core with distortion */}
      <mesh ref={coreRef} scale={0.5}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color="#7c7cff" 
          emissive="#7c7cff" 
          emissiveIntensity={4}
          distort={0.4}
          speed={2}
        />
      </mesh>
      
      {/* Additional rings */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#00f6ff" 
          emissive="#00f6ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
        <torusGeometry args={[2.2, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#7c7cff" 
          emissive="#7c7cff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      {/* Additional particle layer */}
      <Stars 
        radius={50} 
        depth={30} 
        count={2000} 
        factor={2} 
        saturation={0.5} 
        fade 
        speed={0.5}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: false }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 25]} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f6ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7c7cff" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1} 
          color="#00f6ff"
        />
        
        {/* <RotatingCube /> */}
        <Particles />
        
        <Environment preset="city" />

        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.8} 
            mipmapBlur 
            intensity={2} 
            radius={0.6} 
          />
          <ChromaticAberration offset={[0.001, 0.001]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
