import React, { useState } from 'react';
import NavigationHUD from './components/NavigationHUD';
import CanvasContainer from './components/CanvasContainer';
import EntranceOverlay from './components/EntranceOverlay';
import ExhibitModal from './components/ExhibitModal';
import MuseumGuide from './components/MuseumGuide';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('entrance');
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const [isExploring, setIsExploring] = useState(false);
  const [showEntranceOverlay, setShowEntranceOverlay] = useState(true);
  const [is2DMode, setIs2DMode] = useState(false);

  // Triggered when user clicks "Start Exploring"
  const handleStartExploring = () => {
    setIsExploring(true);
    setShowEntranceOverlay(false);
    setActiveSection('projects');
  };

  // Switch sections from HUD or Guide
  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'entrance') {
      setShowEntranceOverlay(true);
      setIsExploring(false);
      setSelectedExhibit(null);
    } else {
      setShowEntranceOverlay(false);
      setIsExploring(true);
      setSelectedExhibit(null);
    }
  };

  // Inspect specific exhibit
  const handleSelectExhibit = (exhibit) => {
    setSelectedExhibit(exhibit);
    if (exhibit) {
      setActiveSection(exhibit.sectionId);
      setShowEntranceOverlay(false);
      setIsExploring(true);
    }
  };

  // Reset 3D camera to entrance overview
  const handleResetCamera = () => {
    setSelectedExhibit(null);
    setActiveSection('entrance');
    setShowEntranceOverlay(false);
    setIsExploring(true);
  };

  const handleToggleMode = () => {
    setIs2DMode((prev) => !prev);
  };

  return (
    <div className="museum-app-root">
      {/* Top Navigation HUD */}
      <NavigationHUD
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onResetCamera={handleResetCamera}
        is2DMode={is2DMode}
        onToggleMode={handleToggleMode}
      />

      {/* Main 3D Viewport or 2D Fallback */}
      <main className="museum-stage-viewport">
        <CanvasContainer
          activeSection={activeSection}
          selectedExhibit={selectedExhibit}
          onSelectExhibit={handleSelectExhibit}
          isExploring={isExploring}
          is2DMode={is2DMode}
          onSelectSection={handleSelectSection}
          showEntranceOverlay={showEntranceOverlay && !is2DMode}
        />

        {/* Entrance Welcome Modal / Hero */}
        <EntranceOverlay
          isVisible={showEntranceOverlay && !is2DMode}
          onStartExploring={handleStartExploring}
          onSelectSection={handleSelectSection}
          onDismiss={() => setShowEntranceOverlay(false)}
        />

        {/* Active Exhibit Details Modal */}
        {selectedExhibit && (
          <ExhibitModal
            exhibit={selectedExhibit}
            onClose={() => setSelectedExhibit(null)}
            onSelectExhibit={handleSelectExhibit}
          />
        )}

        {/* Interactive Local AI Museum Guide */}
        <MuseumGuide
          onSelectSection={handleSelectSection}
          onSelectExhibit={handleSelectExhibit}
        />
      </main>
    </div>
  );
}
