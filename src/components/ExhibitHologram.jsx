import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

// Unique 3D geometry generator based on exhibit category and project identity
function ExhibitGeometry({ exhibit }) {
  const { id, sectionId, color } = exhibit;

  // --- BESPOKE 3D HOLOGRAMS FOR REAL PROJECTS ---
  if (id === 'medsaathi') {
    // Medical Capsule + Scanner Ring + Safety Cross Wireframe
    return (
      <group>
        {/* Capsule Base */}
        <mesh position={[0, 0, 0]} castShadow>
          <capsuleGeometry args={[0.32, 0.65, 16, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
        {/* Horizontal Scanner Verification Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.68, 0.04, 16, 48]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.85} />
        </mesh>
        {/* Outer wireframe safety shield */}
        <mesh scale={1.22}>
          <octahedronGeometry args={[0.7, 1]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
        </mesh>
      </group>
    );
  }

  if (id === 'infinite-loops') {
    // Acoustic Waveform Möbius / Groq neural anti-spoofing loop
    return (
      <group>
        {/* Double-loop TorusKnot representing infinite audio analysis */}
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[0.55, 0.14, 128, 24, 2, 3]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.55}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Audio frequency wave cage */}
        <mesh scale={1.16}>
          <torusKnotGeometry args={[0.55, 0.14, 32, 12, 2, 3]} />
          <meshBasicMaterial color="#a5b4fc" wireframe transparent opacity={0.3} />
        </mesh>
        {/* Center acoustic sensor node */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#c084fc" />
        </mesh>
      </group>
    );
  }

  if (id === 'interactive-portfolio') {
    // Antigravity IDE Spatial Pavilion / 3D Museum Crystal
    return (
      <group>
        {/* Inner glowing faceted gem */}
        <mesh castShadow>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Orbiting spatial ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <ringGeometry args={[0.85, 0.95, 32]} />
          <meshBasicMaterial color="#c4b5fd" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>
        {/* Outer wireframe scaffold */}
        <mesh scale={1.22}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.3} />
        </mesh>
      </group>
    );
  }

  // --- GENERAL WING CATEGORIES ---
  switch (sectionId) {
    case 'projects':
      // Fallback TorusKnot
      return (
        <group>
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[0.55, 0.16, 100, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.35}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          <mesh scale={1.12}>
            <torusKnotGeometry args={[0.55, 0.16, 40, 8]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
          </mesh>
        </group>
      );
    case 'achievements':
      // Multi-faceted Icosahedron / Octahedron Star for certified achievements
      return (
        <group>
          <mesh castShadow receiveShadow>
            <octahedronGeometry args={[0.65, 0]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.45}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          <mesh scale={1.2}>
            <icosahedronGeometry args={[0.65, 0]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      );
    case 'learning':
      // Futuristic Dodecahedron / Core Orb for learning lab modules
      return (
        <group>
          <mesh castShadow receiveShadow>
            <dodecahedronGeometry args={[0.6, 0]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.3}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
          <mesh scale={1.15}>
            <dodecahedronGeometry args={[0.6, 0]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
          </mesh>
        </group>
      );
    case 'community':
      // Intersecting double torus rings for community connection
      return (
        <group>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.5, 0.1, 16, 60]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.5, 0.1, 16, 60]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      );
    case 'future':
      // Ascending Pyramid / Cone beacon for future aspirations
      return (
        <group>
          <mesh rotation={[0, 0, 0]} castShadow>
            <coneGeometry args={[0.55, 1.0, 4]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          <mesh rotation={[0, 0, 0]} scale={1.15}>
            <coneGeometry args={[0.55, 1.0, 4]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      );
    default:
      return (
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      );
  }
}

export default function ExhibitHologram({
  exhibit,
  position,
  onSelect,
  isSelected,
  showLabel = true
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered ? 0.9 : 0.4);
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Pedestal Base */}
      <mesh position={[0, -1.1, 0]} receiveShadow>
        <cylinderGeometry args={[0.9, 1.1, 0.3, 32]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* Glowing Neon Ring on Pedestal */}
      <mesh ref={ringRef} position={[0, -0.94, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.82, 0.92, 32]} />
        <meshBasicMaterial
          color={hovered || isSelected ? '#ffffff' : exhibit.color}
          side={THREE.DoubleSide}
          transparent
          opacity={hovered ? 0.95 : 0.65}
        />
      </mesh>

      {/* Floating Hologram Object */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <group
          ref={meshRef}
          position={[0, 0.3, 0]}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(exhibit);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
        >
          <ExhibitGeometry exhibit={exhibit} />
          
          {/* Subtle localized point light */}
          <pointLight
            color={exhibit.color}
            intensity={hovered ? 2.5 : 1.2}
            distance={3.5}
            decay={2}
          />
        </group>
      </Float>

      {/* 3D Floating Label — conditionally suppressed when details modal or entrance hall is active */}
      {showLabel && (
        <Html
          position={[0, -1.6, 0]}
          center
          distanceFactor={14}
          className="pointer-events-none"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onSelect(exhibit);
            }}
            style={{
              cursor: 'pointer',
              pointerEvents: 'auto',
              background: hovered ? 'rgba(30, 41, 59, 0.95)' : 'rgba(15, 23, 42, 0.85)',
              border: `1px solid ${hovered ? '#ffffff' : exhibit.color}`,
              borderRadius: '8px',
              padding: '6px 14px',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: hovered ? `0 0 20px ${exhibit.color}` : '0 4px 12px rgba(0,0,0,0.5)',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: exhibit.color,
                boxShadow: `0 0 8px ${exhibit.color}`
              }}
            />
            {exhibit.title.split('—')[0].trim()}
          </div>
        </Html>
      )}
    </group>
  );
}

