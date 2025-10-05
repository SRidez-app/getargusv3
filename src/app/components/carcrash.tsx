'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface CarProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  isMoving: boolean;
  onCrash: () => void;
}

interface Spark {
  id: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
}

function ProceduralCar({ color }: { color: string }) {
  return (
    <group>
      {/* Car body */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.6, 3]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Car roof */}
      <mesh position={[0, 0.8, -0.3]}>
        <boxGeometry args={[1.3, 0.6, 1.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0, 0.8, 0.5]}>
        <boxGeometry args={[1.2, 0.5, 0.1]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[0.8, -0.1, 1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.8, -0.1, 1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.8, -0.1, -1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.8, -0.1, -1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.4, 0.3, 1.51]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial color="#ffff99" emissive="#ffff99" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.4, 0.3, 1.51]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial color="#ffff99" emissive="#ffff99" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Car({ position, rotation, color, isMoving, onCrash }: CarProps) {
  const group = useRef<THREE.Group>(null);
  const [crashed, setCrashed] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useFrame((state, delta) => {
    if (!group.current) return;

    if (isMoving && !crashed) {
      group.current.position.z += delta * 6;

      if (group.current.position.distanceTo(new THREE.Vector3(0, 0, 0)) < 2) {
        setCrashed(true);
        onCrash();

        const newSparks: Spark[] = [];
        for (let i = 0; i < 50; i++) {
          newSparks.push({
            id: Math.random(),
            pos: group.current.position.clone(),
            vel: new THREE.Vector3(
              (Math.random() - 0.5) * 5,
              Math.random() * 4,
              (Math.random() - 0.5) * 5
            ),
            life: 1.0,
          });
        }
        setSparks(newSparks);
      }
    }

    setSparks((sparks) =>
      sparks
        .map((sp) => {
          const newSp = { ...sp };
          newSp.pos.add(newSp.vel.clone().multiplyScalar(delta));
          newSp.vel.y -= delta * 9.8 * 0.5;
          newSp.life -= delta * 1.5;
          return newSp;
        })
        .filter((sp) => sp.life > 0)
    );
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      <ProceduralCar color={color} />
      {crashed &&
        sparks.map((sp) => (
          <mesh key={sp.id} position={sp.pos.toArray()}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial
              color="#ff6600"
              transparent
              opacity={sp.life}
            />
          </mesh>
        ))}
    </group>
  );
}

export default function CarCrashScene() {
  const [started, setStarted] = useState(false);
  const [crashed, setCrashed] = useState(false);

  const handleCrash = () => {
    setCrashed(true);
  };

  const reset = () => {
    setCrashed(false);
    setStarted(false);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <Canvas
        camera={{ position: [0, 4, 12], fov: 50 }}
        shadows
      >
        <color attach="background" args={['#1a1a2e']} />
        <fog attach="fog" args={['#1a1a2e', 10, 50]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#4a90e2" />

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#2a2a3e" />
        </mesh>

        {/* Road markings */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
          <planeGeometry args={[0.3, 100]} />
          <meshStandardMaterial color="#ffcc00" />
        </mesh>

        <Car
          position={[-3, 0, -6]}
          rotation={[0, 0, 0]}
          color="#e74c3c"
          isMoving={started && !crashed}
          onCrash={handleCrash}
        />
        <Car
          position={[3, 0, 6]}
          rotation={[0, Math.PI, 0]}
          color="#3498db"
          isMoving={started && !crashed}
          onCrash={handleCrash}
        />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2.2}
          minDistance={6}
          maxDistance={25}
        />
      </Canvas>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-2xl">
          🚗 Car Crash Simulation
        </h1>
        {!started ? (
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-all hover:scale-105"
          >
            Start Simulation
          </button>
        ) : crashed ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl font-bold text-red-400 animate-pulse drop-shadow-2xl">
              💥 COLLISION DETECTED!
            </div>
            <button
              onClick={reset}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-all hover:scale-105"
            >
              Reset Scene
            </button>
          </div>
        ) : (
          <div className="text-xl text-yellow-300 animate-pulse drop-shadow-2xl font-semibold">
            ⚠️ Vehicles in motion...
          </div>
        )}
      </div>
    </div>
  );
}