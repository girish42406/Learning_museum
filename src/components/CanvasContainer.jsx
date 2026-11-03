import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MuseumScene from './MuseumScene';
import Fallback2DView from './Fallback2DView';

function checkWebGLSupport() {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('WebGL/Three.js rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function LoaderSpinner() {
  return (
    <div className="canvas-loading-overlay">
      <div className="spinner-ring" />
      <p className="loading-text">Initializing 3D Museum Environment...</p>
    </div>
  );
}

export default function CanvasContainer({
  activeSection,
  selectedExhibit,
  onSelectExhibit,
  isExploring,
  is2DMode,
  onSelectSection,
  showEntranceOverlay
}) {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(checkWebGLSupport());
  }, []);

  if (!hasWebGL || is2DMode) {
    return (
      <Fallback2DView
        activeSection={activeSection}
        onSelectExhibit={onSelectExhibit}
        onSelectSection={onSelectSection}
      />
    );
  }

  return (
    <div className="canvas-viewport-wrapper">
      <CanvasErrorBoundary
        fallback={
          <Fallback2DView
            activeSection={activeSection}
            onSelectExhibit={onSelectExhibit}
            onSelectSection={onSelectSection}
          />
        }
      >
        <Suspense fallback={<LoaderSpinner />}>
          <Canvas
            shadows
            camera={{ position: [0, 4, 16], fov: 50 }}
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
            onCreated={({ gl }) => {
              gl.setClearColor('#060913');
            }}
          >
            <MuseumScene
              activeSection={activeSection}
              selectedExhibit={selectedExhibit}
              onSelectExhibit={onSelectExhibit}
              isExploring={isExploring}
              showEntranceOverlay={showEntranceOverlay}
            />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}

