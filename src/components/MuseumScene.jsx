
import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

import ExhibitHologram from './ExhibitHologram';
import { EXHIBITS } from '../data/museumData';

// Map exhibits to spatial coordinates in the 3D museum space
function getExhibitCoordinates(exhibit, index, allExhibits) {
  const sectionExhibits = allExhibits.filter(
    (item) => item.sectionId === exhibit.sectionId
  );

  const indexInSection = sectionExhibits.findIndex(
    (item) => item.id === exhibit.id
  );

  const countInSection = sectionExhibits.length;

  switch (exhibit.sectionId) {
    case 'projects': {
      // West Wing: projects arranged side by side
      const spread = 4.5;
      const x = -14.5 + indexInSection * spread;
      const z = 0;

      return [x, 0, z];
    }

    case 'achievements': {
      // North Hall: Elevated central pavilion
      const spread = 4.2;
      const x = (indexInSection - (countInSection - 1) / 2) * spread;
      const z = -14;

      return [x, 0.4, z];
    }

    case 'learning': {
      // East Rotunda: Curving arc
      const angle =
        (indexInSection / Math.max(1, countInSection - 1)) *
          (Math.PI * 0.8) -
        Math.PI * 0.4;

      const x = 7 + Math.cos(angle) * 6;
      const z = Math.sin(angle) * 11;

      return [x, 0, z];
    }

    case 'community': {
      // South-West Wing
      const spread = 4;
      const x = -5 + indexInSection * spread;
      const z = 9;

      return [x, 0, z];
    }

    case 'future': {
      // South-East Wing
      const angle =
        (indexInSection / Math.max(1, countInSection - 1)) *
          (Math.PI * 0.6) -
        Math.PI * 0.3;

      const x = 5 + Math.cos(angle) * 4;
      const z = 8 + Math.sin(angle) * 6;

      return [x, 0.2, z];
    }

    default:
      return [0, 0, 0];
  }
}

// Section Camera Targets for smooth lerping
export const SECTION_TARGETS = {
  entrance: {
    pos: [0, 3.5, 14],
    lookAt: [0, 0, 0]
  },

  projects: {
    pos: [-10, 2.5, 8],
    lookAt: [-10, 0, 0]
  },

  achievements: {
    pos: [0, 3.2, -7],
    lookAt: [0, 0.5, -14]
  },

  learning: {
    pos: [12, 2.8, 3],
    lookAt: [11, 0, 0]
  },

  community: {
    pos: [-3, 2.5, 4],
    lookAt: [-3, 0, 9]
  },

  future: {
    pos: [7, 2.8, 3],
    lookAt: [7, 0, 8]
  }
};

function CameraController({
  activeSection,
  targetExhibit,
  isExploring
}) {
  const { camera } = useThree();
  const controlsRef = useRef();

  useFrame((_, delta) => {
    let targetPos =
      SECTION_TARGETS[activeSection]?.pos ||
      SECTION_TARGETS.entrance.pos;

    let targetLook =
      SECTION_TARGETS[activeSection]?.lookAt ||
      SECTION_TARGETS.entrance.lookAt;

    // If an exhibit is explicitly targeted
    if (targetExhibit) {
      const coords = getExhibitCoordinates(
        targetExhibit,
        0,
        EXHIBITS
      );

      targetPos = [
        coords[0],
        coords[1] + 1.8,
        coords[2] + 4.5
      ];

      targetLook = [
        coords[0],
        coords[1],
        coords[2]
      ];
    } else if (!isExploring && activeSection === 'entrance') {
      targetPos = [0, 4, 16];
      targetLook = [0, 0.5, 0];
    }

    const tVec = new THREE.Vector3(...targetPos);
    const lVec = new THREE.Vector3(...targetLook);

    camera.position.lerp(tVec, Math.min(1, delta * 2.2));

    if (controlsRef.current) {
      controlsRef.current.target.lerp(
        lVec,
        Math.min(1, delta * 2.5)
      );

      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      maxPolarAngle={Math.PI / 2 - 0.03}
      minDistance={3}
      maxDistance={32}
      rotateSpeed={0.65}
      zoomSpeed={0.7}
      panSpeed={0.6}
    />
  );
}

export default function MuseumScene({
  activeSection,
  selectedExhibit,
  onSelectExhibit,
  isExploring,
  showEntranceOverlay
}) {
  // Hide floating labels when modal or entrance overlay is active
  const shouldShowLabels =
    isExploring && !selectedExhibit && !showEntranceOverlay;

  return (
    <>
      {/* Lighting Configuration */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[10, 20, 15]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#e0e7ff"
      />

      {/* Mood lights */}
      <pointLight
        position={[-12, 6, 0]}
        intensity={1.5}
        distance={20}
        color="#6366f1"
      />

      <pointLight
        position={[0, 8, -14]}
        intensity={2.0}
        distance={22}
        color="#f59e0b"
      />

      <pointLight
        position={[12, 6, 0]}
        intensity={1.5}
        distance={20}
        color="#10b981"
      />

      <pointLight
        position={[0, 7, 10]}
        intensity={1.2}
        distance={18}
        color="#ec4899"
      />

      {/* Atmospheric particles */}
      <Sparkles
        count={150}
        scale={36}
        size={3}
        speed={0.3}
        color="#38bdf8"
        opacity={0.6}
      />

      {/* Museum Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[70, 70]} />

        <meshStandardMaterial
          color="#060913"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Concentric Rings */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.18, 0]}
      >
        <ringGeometry args={[6.8, 7.0, 64]} />

        <meshBasicMaterial
          color="#1e293b"
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.18, 0]}
      >
        <ringGeometry args={[13.8, 14.1, 64]} />

        <meshBasicMaterial
          color="#334155"
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.18, 0]}
      >
        <ringGeometry args={[20.8, 21.2, 64]} />

        <meshBasicMaterial
          color="#1e293b"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Central Hologram Core */}
      <group position={[0, -0.6, 0]}>
        <mesh>
          <cylinderGeometry args={[2.2, 2.5, 0.4, 32]} />

          <meshStandardMaterial
            color="#0b1120"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        <mesh
          position={[0, 0.22, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[1.8, 2.1, 32]} />

          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Render All Interactive Exhibits */}
      {EXHIBITS.map((exhibit, index) => {
        const coords = getExhibitCoordinates(
          exhibit,
          index,
          EXHIBITS
        );

        const isSelected =
          selectedExhibit?.id === exhibit.id;

        return (
          <ExhibitHologram
            key={exhibit.id}
            exhibit={exhibit}
            position={coords}
            onSelect={onSelectExhibit}
            isSelected={isSelected}
            showLabel={shouldShowLabels}
          />
        );
      })}

      {/* Dynamic Camera Rig & Orbit Controls */}
      <CameraController
        activeSection={activeSection}
        targetExhibit={selectedExhibit}
        isExploring={isExploring}
      />
    </>
  );
}
