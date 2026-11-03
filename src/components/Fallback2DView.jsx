import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  Award,
  BookOpen,
  Users,
  Target,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { EXHIBITS, SECTIONS, MUSEUM_PROFILE } from '../data/museumData';

const SECTION_ICONS = {
  projects: FolderGit2,
  achievements: Award,
  learning: BookOpen,
  community: Users,
  future: Target,
};

export default function Fallback2DView({ onSelectExhibit, activeSection, onSelectSection }) {
  const [selectedCategory, setSelectedCategory] = useState(
    activeSection === 'entrance' ? 'all' : activeSection
  );

  // Synchronize category filter whenever activeSection changes from HUD navigation
  useEffect(() => {
    if (activeSection === 'entrance') {
      setSelectedCategory('all');
    } else if (activeSection) {
      setSelectedCategory(activeSection);
    }
  }, [activeSection]);

  const handleFilterSelect = (cat) => {
    setSelectedCategory(cat);
    if (onSelectSection) {
      onSelectSection(cat === 'all' ? 'entrance' : cat);
    }
  };

  const displayedSections = selectedCategory === 'all'
    ? SECTIONS.filter(s => s.id !== 'entrance')
    : SECTIONS.filter(s => s.id === selectedCategory);

  return (
    <div className="fallback-2d-container">
      {/* 2D Header Hero */}
      <section className="fallback-hero-banner">
        <div className="fallback-hero-inner">
          <div className="fallback-hero-tag">2D ACCESSIBLE EXHIBITION VIEW</div>
          <h1 className="fallback-hero-title">The Learning Museum</h1>
          <p className="fallback-hero-tagline">"{MUSEUM_PROFILE.tagline}"</p>
          <p className="fallback-hero-bio">
            Curated exhibits by <strong>{MUSEUM_PROFILE.name}</strong> &bull; {MUSEUM_PROFILE.title} at {MUSEUM_PROFILE.institution}.
          </p>

          {/* Section Filter Pills */}
          <div className="filter-pill-bar">
            <button
              className={`filter-pill ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterSelect('all')}
            >
              All Exhibits ({EXHIBITS.length})
            </button>
            {SECTIONS.filter(s => s.id !== 'entrance').map((sec) => (
              <button
                key={sec.id}
                className={`filter-pill ${selectedCategory === sec.id ? 'active' : ''}`}
                onClick={() => handleFilterSelect(sec.id)}
                style={{ '--pill-accent': sec.color }}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Exhibition Wings Layout */}
      <div className="wings-content-flow">
        {displayedSections.map((sec) => {
          const sectionExhibits = EXHIBITS.filter(e => e.sectionId === sec.id);
          const Icon = SECTION_ICONS[sec.id] || FolderGit2;

          return (
            <div key={sec.id} className="wing-section-block" id={`wing-${sec.id}`}>
              <div className="wing-block-header">
                <div className="wing-title-group">
                  <div className="wing-icon-box" style={{ background: `${sec.color}18`, color: sec.color }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="wing-heading" style={{ color: sec.color }}>{sec.title}</h2>
                    <p className="wing-subtitle">{sec.subtitle} &bull; {sec.description}</p>
                  </div>
                </div>
                <span className="wing-count-badge" style={{ borderColor: `${sec.color}40`, color: sec.color }}>
                  {sec.badge}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="exhibit-cards-grid">
                {sectionExhibits.map((exhibit) => (
                  <div
                    key={exhibit.id}
                    className="exhibit-card"
                    onClick={() => onSelectExhibit(exhibit)}
                    style={{ '--card-accent': exhibit.color }}
                  >
                    <div className="card-top-bar">
                      <span className={`card-status-badge ${exhibit.statusType}`}>
                        {exhibit.status}
                      </span>
                      <span className="card-click-hint">Inspect Exhibit &rarr;</span>
                    </div>

                    <h3 className="card-title">{exhibit.title}</h3>
                    <p className="card-desc">{exhibit.shortDescription}</p>

                    {/* Role preview snippet if present */}
                    {exhibit.myRole && (
                      <div className="card-role-snippet">
                        <span className="role-label">My Role:</span> {exhibit.myRole.split('—')[0]}
                      </div>
                    )}

                    {/* Disclaimer Warning for MedSaathi */}
                    {exhibit.disclaimer && (
                      <div className="card-mini-alert">
                        <ShieldAlert size={14} />
                        <span>Experimental project — not medical advice</span>
                      </div>
                    )}

                    {/* Note for Learning Lab */}
                    {exhibit.levelNote && (
                      <div className="card-mini-note">
                        <Info size={14} />
                        <span>Active learning area</span>
                      </div>
                    )}

                    {/* Certificate Placeholder Notice for WorldQuant */}
                    {exhibit.imagePlaceholder && (
                      <div className="card-cert-placeholder">
                        <Award size={16} style={{ color: exhibit.color }} />
                        <span>WorldQuant BRAIN Verified Certificate</span>
                      </div>
                    )}

                    {/* Tags */}
                    {exhibit.tags && (
                      <div className="card-tags">
                        {exhibit.tags.slice(0, 4).map(t => (
                          <span key={t} className="card-tag">{t}</span>
                        ))}
                        {exhibit.tags.length > 4 && (
                          <span className="card-tag">+{exhibit.tags.length - 4}</span>
                        )}
                      </div>
                    )}

                    <div className="card-action-bar">
                      <button className="btn-card-inspect">
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </button>
                      {exhibit.githubUrl ? (
                        <a
                          href={exhibit.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="card-quick-link"
                          title="Open GitHub repository"
                        >
                          <FolderGit2 size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

