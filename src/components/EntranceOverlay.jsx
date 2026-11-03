import React from 'react';
import { Compass, Sparkles, BookOpen, Award, FolderGit2, Users, Target, ArrowRight } from 'lucide-react';
import { MUSEUM_PROFILE, SECTIONS } from '../data/museumData';

const SECTION_ICONS = {
  projects: FolderGit2,
  achievements: Award,
  learning: BookOpen,
  community: Users,
  future: Target,
};

export default function EntranceOverlay({ onStartExploring, onSelectSection, isVisible, onDismiss }) {
  if (!isVisible) return null;

  return (
    <div className="entrance-modal-backdrop">
      <div className="entrance-hero-card">
        {/* Top Status Capsule */}
        <div className="entrance-pill">
          <Sparkles className="icon-pulse" size={14} />
          <span>VIRTUAL EXHIBIT ROTUNDA</span>
        </div>

        {/* Museum Welcome Title */}
        <h1 className="entrance-title">The Learning Museum</h1>

        {/* Official Tagline */}
        <p className="entrance-tagline">
          "{MUSEUM_PROFILE.tagline}"
        </p>

        {/* Profile Introduction */}
        <div className="curator-profile">
          <div className="curator-avatar-ring">
            <span className="curator-initials">GS</span>
          </div>
          <div className="curator-meta">
            <h3 className="curator-name">{MUSEUM_PROFILE.name}</h3>
            <p className="curator-title">{MUSEUM_PROFILE.title} &bull; {MUSEUM_PROFILE.institution}</p>
          </div>
        </div>

        <p className="entrance-summary">
          {MUSEUM_PROFILE.bio}
        </p>

        {/* Start Exploring Primary Action Button */}
        <div className="entrance-cta-wrapper">
          <button
            id="start-exploring-btn"
            className="btn-start-exploring"
            onClick={onStartExploring}
          >
            <span>Start Exploring</span>
            <Compass size={18} />
          </button>
        </div>

        {/* Direct Section Access Shortcuts */}
        <div className="wing-shortcuts-container">
          <span className="shortcuts-label">OR JUMP DIRECTLY TO A WING</span>
          <div className="wing-chips-grid">
            {SECTIONS.filter(s => s.id !== 'entrance').map((sec) => {
              const IconComp = SECTION_ICONS[sec.id] || Compass;
              return (
                <button
                  key={sec.id}
                  className="wing-chip-btn"
                  onClick={() => {
                    onSelectSection(sec.id);
                    onDismiss();
                  }}
                  style={{ '--chip-accent': sec.color }}
                >
                  <IconComp size={14} style={{ color: sec.color }} />
                  <span>{sec.title}</span>
                  <ArrowRight size={12} className="chip-arrow" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

