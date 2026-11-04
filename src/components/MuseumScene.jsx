import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

import ExhibitHologram from './ExhibitHologram';
import { EXHIBITS } from '../data/museumData';

function getGalleryCameraDistance(aspectRatio, fieldOfView, galleryWidth) {
  const horizontalHalfFov = Math.atan(
    Math.tan(THREE.MathUtils.degToRad(fieldOfView) / 2) * aspectRatio
  );

  return Math.max(8, galleryWidth / (2 * Math.tan(horizontalHalfFov)));
}

// ---------------------------------------------------------------
// FUTURE WING: ab apni alag jagah (z = 24) pe hai, grid layout mein.
// Pehle ye Learning Lab aur Community Wing ke upar baitha tha,
// isliye sab mix ho raha tha.
// ---------------------------------------------------------------
const FUTURE_CENTER_X = 0;
const FUTURE_BASE_Z = 24;
const FUTURE_SPREAD_X = 5.2;
const FUTURE_ROW_GAP = 4.6;

function isCompactFuture(width, height) {
  return width <= 640 || width / height < 0.9;
}

function getFutureGrid(compact) {
  const count = EXHIBITS.filter((e) => e.sectionId === 'future').length;
  const cols = compact ? 2 : 4;
  const rows = Math.max(1, Math.ceil(count / cols));
  return {
    count,
    cols,
    rows,
    centerZ: FUTURE_BASE_Z + ((rows - 1) * FUTURE_ROW_GAP) / 2,
    width: cols * FUTURE_SPREAD_X + 3
  };
}

function getExhibitCoordinates(
  exhibit,
  index,
  allExhibits,
  compactProjectSpacing = false,
  compactFutureLayout = false
) {
  const sectionExhibits = allExhibits.filter(
    (item) => item.sectionId === exhibit.sectionId
  );

  const indexInSection = sectionExhibits.findIndex(
    (item) => item.id === exhibit.id
  );

  const countInSection = sectionExhibits.length;

  switch (exhibit.sectionId) {
    case 'projects': {
      const spread = compactProjectSpacing ? 3.2 : 4.5;
      const x = -10 + (indexInSection - (countInSection - 1) / 2) * spread;
      return [x, 0, 0];
    }

    case 'achievements': {
      const spread = 5;
      const x = (indexInSection - (countInSection - 1) / 2) * spread;
      return [x, 0.4, -14];
    }

    case 'learning': {
      const angle =
        (indexInSection / Math.max(1, countInSection - 1)) *
          (Math.PI * 0.8) -
        Math.PI * 0.4;

      const x = 7 + Math.cos(angle) * 6;
      const z = Math.sin(angle) * 11;

      return [x, 0, z];
    }

    case 'community': {
      const spread = 4;
      const x = -5 + indexInSection * spread;
      return [x, 0, 9];
    }

    case 'future': {
      const cols = compactFutureLayout ? 2 : 4;
      const row = Math.floor(indexInSection / cols);
      const col = indexInSection % cols;
      const itemsInRow = Math.min(cols, countInSection - row * cols);
      const x = FUTURE_CENTER_X + (col - (itemsInRow - 1) / 2) * FUTURE_SPREAD_X;
      const z = FUTURE_BASE_Z + row * FUTURE_ROW_GAP;
      return [x, 0.2, z];
    }

    default:
      return [0, 0, 0];
  }
}

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
    pos: [0, 5, 42],
    lookAt: [0, 0.8, 26]
  }
};

function CameraController({ activeSection, targetExhibit, isExploring }) {
  const { camera, size } = useThree();
  const controlsRef = useRef();

  useFrame((_, delta) => {
    let targetPos =
      SECTION_TARGETS[activeSection]?.pos || SECTION_TARGETS.entrance.pos;

    let targetLook =
      SECTION_TARGETS[activeSection]?.lookAt || SECTION_TARGETS.entrance.lookAt;

    if (
      !targetExhibit &&
      ['projects', 'achievements', 'future'].includes(activeSection)
    ) {
      const isProjects = activeSection === 'projects';
      const isAchievements = activeSection === 'achievements';
      const isFuture = activeSection === 'future';

      const compactFutureLayout =
        isFuture && isCompactFuture(size.width, size.height);

      const futureGrid = getFutureGrid(compactFutureLayout);

      const galleryDistance = getGalleryCameraDistance(
        size.width / size.height,
        camera.fov,
        isProjects
          ? 14
          : isAchievements
            ? 14.6
            : futureGrid.width
      );

      const centerZ = isProjects
        ? 0
        : isAchievements
          ? -14
          : futureGrid.centerZ;
      let targetY = 0.8;
      let targetX = isProjects ? -10 : isFuture ? FUTURE_CENTER_X : 0;

      if (isProjects || isFuture) {
        const isCompact = size.width <= 640;
        const isShortViewport = size.height < 500;
        const guideTop = isCompact ? 12 : 16;
        const guideHeight = Math.min(
          isShortViewport ? 320 : isCompact ? 320 : 340,
          Math.max(0, size.height - 32)
        );

        const targetScreenY = isShortViewport
          ? isFuture
            ? size.height - 146
            : size.height - 96
          : guideTop + guideHeight + 60;

        const pixelsPerWorldUnit =
          size.height /
          (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * galleryDistance);

        const cameraPitch = Math.atan(0.28);
        const verticalOffset = targetScreenY - size.height / 2;

        targetY = Math.max(
          targetY,
          0.3 + verticalOffset / (pixelsPerWorldUnit * Math.cos(cameraPitch))
        );

        if (isShortViewport && !isCompact && isProjects) {
          const horizontalHalfFov = Math.atan(
            Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) *
              (size.width / size.height)
          );

          const horizontalPixelsPerUnit =
            size.width / (2 * Math.tan(horizontalHalfFov) * galleryDistance);

          const panelWidth = Math.min(320, size.width - 48);
          const sceneCenter = (size.width + panelWidth + 24) / 2;

          targetX += (size.width / 2 - sceneCenter) / horizontalPixelsPerUnit;
        }
      }

      targetLook = [targetX, targetY, centerZ];
      targetPos = [
        targetLook[0],
        targetY + galleryDistance * 0.28,
        centerZ + galleryDistance
      ];
    }

    if (targetExhibit) {
      const coords = getExhibitCoordinates(
        targetExhibit,
        0,
        EXHIBITS,
        size.width > 640 && size.height < 500,
        isCompactFuture(size.width, size.height)
      );

      targetPos = [coords[0], coords[1] + 1.8, coords[2] + 4.5];
      targetLook = [coords[0], coords[1], coords[2]];
    } else if (!isExploring && activeSection === 'entrance') {
      targetPos = [0, 4, 16];
      targetLook = [0, 0.5, 0];
    }

    const tVec = new THREE.Vector3(...targetPos);
    const lVec = new THREE.Vector3(...targetLook);

    camera.position.lerp(tVec, Math.min(1, delta * 2.2));

    if (controlsRef.current) {
      controlsRef.current.target.lerp(lVec, Math.min(1, delta * 2.5));
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
      maxDistance={
        ['projects', 'achievements', 'future'].includes(activeSection) ? 42 : 32
      }
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
  const { size, camera } = useThree();

  const shouldShowLabels =
    isExploring && !selectedExhibit && !showEntranceOverlay;

  const futureGrid = getFutureGrid(isCompactFuture(size.width, size.height));

  const galleryDistance = getGalleryCameraDistance(
    size.width / size.height,
    camera.fov,
    activeSection === 'achievements'
      ? 14.6
      : activeSection === 'future'
        ? futureGrid.width
        : 14
  );

  const galleryLabelDistanceFactor = 14 * (galleryDistance / 8);

  return (
    <>
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[10, 20, 15]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#e0e7ff"
      />

      <pointLight position={[-12, 6, 0]} intensity={1.5} distance={20} color="#6366f1" />
      <pointLight position={[0, 8, -14]} intensity={2.0} distance={22} color="#f59e0b" />
      <pointLight position={[12, 6, 0]} intensity={1.5} distance={20} color="#10b981" />
      <pointLight position={[0, 7, 10]} intensity={1.2} distance={18} color="#ec4899" />
      <pointLight position={[0, 7, 26]} intensity={1.6} distance={26} color="#a78bfa" />

      <Sparkles
        count={150}
        scale={36}
        size={3}
        speed={0.3}
        color="#38bdf8"
        opacity={0.6}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 10]}
        receiveShadow
      >
        <planeGeometry args={[90, 100]} />
        <meshStandardMaterial color="#060913" roughness={0.4} metalness={0.8} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[6.8, 7.0, 64]} />
        <meshBasicMaterial color="#1e293b" transparent opacity={0.4} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[13.8, 14.1, 64]} />
        <meshBasicMaterial color="#334155" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[20.8, 21.2, 64]} />
        <meshBasicMaterial color="#1e293b" transparent opacity={0.2} />
      </mesh>

      <group position={[0, -0.6, 0]}>
        <mesh>
          <cylinderGeometry args={[2.2, 2.5, 0.4, 32]} />
          <meshStandardMaterial color="#0b1120" metalness={0.9} roughness={0.2} />
        </mesh>

        <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 2.1, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
        </mesh>
      </group>

      {EXHIBITS.map((exhibit, index) => {
        const coords = getExhibitCoordinates(
          exhibit,
          index,
          EXHIBITS,
          size.width > 640 && size.height < 500,
          isCompactFuture(size.width, size.height)
        );

        const isSelected = selectedExhibit?.id === exhibit.id;
        const isFutureExhibit = exhibit.sectionId === 'future';

        // Sirf active section ke labels dikhao (entrance mein sab, pehle jaisa).
        // Isse alag-alag wings ke labels mix nahi hote.
        const labelVisible =
          shouldShowLabels &&
          (activeSection === 'entrance' || exhibit.sectionId === activeSection);

        const labelPosition =
          exhibit.sectionId === 'achievements'
            ? [0, exhibit.id === 'wq-silver' ? 3.5 : 1.3, 0]
            : isFutureExhibit
              ? [0, -1.6, 0]
              : undefined;

        let labelFactor = 14;
        if (isFutureExhibit && size.height >= 500) {
          // Future labels thode chhote taaki overlap na ho
          labelFactor = galleryLabelDistanceFactor * 0.55;
        } else if (
          exhibit.sectionId === activeSection &&
          ['projects', 'achievements'].includes(activeSection)
        ) {
          labelFactor = galleryLabelDistanceFactor;
        }

        return (
          <ExhibitHologram
            key={exhibit.id}
            exhibit={exhibit}
            position={coords}
            onSelect={onSelectExhibit}
            isSelected={isSelected}
            showLabel={labelVisible}
            labelPosition={labelPosition}
            labelDistanceFactor={labelFactor}
          />
        );
      })}

      <CameraController
        activeSection={activeSection}
        targetExhibit={selectedExhibit}
        isExploring={isExploring}
      />
    </>
  );
}
