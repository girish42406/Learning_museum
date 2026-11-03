import React, { useState } from 'react';
import {
  RotateCcw,
  Layers,
  Box,
  Compass,
  Menu,
  X,
  Sparkles,
  Award,
  FolderGit2,
  BookOpen,
  Users,
  Target
} from 'lucide-react';
import { SECTIONS } from '../data/museumData';

const SECTION_ICONS = {
  entrance: Compass,
  projects: FolderGit2,
  achievements: Award,
  learning: BookOpen,
  community: Users,
  future: Target,
};

export default function NavigationHUD({
  activeSection,
  onSelectSection,
  onResetCamera,
  is2DMode,
  onToggleMode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="museum-hud-header">
      {/* Brand Identity */}
      <div className="hud-brand-area" onClick={() => onSelectSection('entrance')}>
        <div className="hud-logo-dot" />
        <div className="hud-brand-text">
          <span className="brand-primary">The Learning Museum</span>
          <span className="brand-curator">Girish Prasad Sharma</span>
        </div>
      </div>

      {/* Desktop Section Navigation Links */}
      <nav className="hud-nav-links">
        {SECTIONS.map((sec) => {
          const Icon = SECTION_ICONS[sec.id] || Compass;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              className={`hud-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSection(sec.id)}
              style={{ '--sec-color': sec.color }}
            >
              <Icon size={14} className="hud-nav-icon" />
              <span>{sec.title}</span>
              {isActive && <div className="active-indicator-bar" />}
            </button>
          );
        })}
      </nav>

      {/* Global Utility Controls */}
      <div className="hud-controls-area">
        {/* Reset Camera (available in 3D mode) */}
        {!is2DMode && (
          <button
            className="hud-util-btn"
            onClick={onResetCamera}
            title="Reset Camera Orientation"
            aria-label="Reset Camera"
          >
            <RotateCcw size={15} />
            <span className="btn-label-desktop">Reset View</span>
          </button>
        )}

        {/* 2D / 3D Mode Toggle */}
        <button
          className={`hud-util-btn mode-toggle ${is2DMode ? 'mode-2d' : 'mode-3d'}`}
          onClick={onToggleMode}
          title={is2DMode ? "Switch to 3D Spatial Museum" : "Switch to 2D Accessible View"}
          aria-label="Toggle 2D/3D Mode"
        >
          {is2DMode ? (
            <>
              <Box size={16} />
              <span className="btn-label-desktop">Switch to 3D</span>
            </>
          ) : (
            <>
              <Layers size={16} />
              <span className="btn-label-desktop">2D Mode</span>
            </>
          )}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="hud-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="hud-mobile-dropdown">
          <div className="mobile-dropdown-header">
            <span>MUSEUM SECTIONS</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="mobile-links-list">
            {SECTIONS.map((sec) => {
              const Icon = SECTION_ICONS[sec.id] || Compass;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  className={`mobile-link-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    onSelectSection(sec.id);
                    setMobileMenuOpen(false);
                  }}
                  style={{ '--sec-color': sec.color }}
                >
                  <Icon size={16} style={{ color: sec.color }} />
                  <span>{sec.title}</span>
                  <span className="mobile-badge">{sec.badge}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

