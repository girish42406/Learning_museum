import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  ShieldAlert,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  Target,
  Users,
  Cpu,
  FolderGit2,
  Code2
} from 'lucide-react';
import { EXHIBITS } from '../data/museumData';

export default function ExhibitModal({ exhibit, onClose, onSelectExhibit }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') navigateExhibit(1);
      if (e.key === 'ArrowLeft') navigateExhibit(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [exhibit]);

  if (!exhibit) return null;

  const currentIndex = EXHIBITS.findIndex(e => e.id === exhibit.id);
  const navigateExhibit = (direction) => {
    const nextIndex = (currentIndex + direction + EXHIBITS.length) % EXHIBITS.length;
    onSelectExhibit(EXHIBITS[nextIndex]);
  };

  const getStatusBadge = () => {
    switch (exhibit.statusType) {
      case 'certified':
        return (
          <span className="badge-status certified">
            <Award size={13} /> {exhibit.status}
          </span>
        );
      case 'complete':
        return (
          <span className="badge-status complete">
            <CheckCircle2 size={13} /> {exhibit.status}
          </span>
        );
      case 'progress':
        return (
          <span className="badge-status in-progress">
            <Clock size={13} /> {exhibit.status}
          </span>
        );
      case 'learning':
        return (
          <span className="badge-status learning">
            <Sparkles size={13} /> {exhibit.status}
          </span>
        );
      default:
        return (
          <span className="badge-status general">
            {exhibit.status}
          </span>
        );
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="exhibit-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ '--accent-theme': exhibit.color }}
      >
        {/* Top Control Bar */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="badge-wing" style={{ borderColor: exhibit.color, color: exhibit.color }}>
              {exhibit.sectionId.toUpperCase()} WING
            </span>
            {getStatusBadge()}
          </div>
          <button className="btn-modal-close" onClick={onClose} aria-label="Close details">
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          <h2 className="modal-title">{exhibit.title}</h2>
          <p className="modal-lead">{exhibit.shortDescription}</p>

          {/* Medical / Safety Disclaimer (e.g. for MedSaathi) */}
          {exhibit.disclaimer && (
            <div className="disclaimer-alert-box">
              <ShieldAlert size={22} className="disclaimer-icon" />
              <div className="disclaimer-text">
                <strong>Safety Notice:</strong> {exhibit.disclaimer}
              </div>
            </div>
          )}

          {/* Dedicated Structured Blocks for Projects */}
          {exhibit.purpose && (
            <div className="modal-spec-block purpose">
              <div className="spec-header">
                <Target size={15} style={{ color: exhibit.color }} />
                <span className="spec-label">PROJECT PURPOSE</span>
              </div>
              <p className="spec-text">{exhibit.purpose}</p>
            </div>
          )}

          {exhibit.myRole && (
            <div className="modal-spec-block role">
              <div className="spec-header">
                <Users size={15} style={{ color: exhibit.color }} />
                <span className="spec-label">MY ROLE & CONTRIBUTION</span>
              </div>
              <p className="spec-text">{exhibit.myRole}</p>
            </div>
          )}

          {/* Technology Stack Grid */}
          {(exhibit.technologyStack || exhibit.tags) && (
            <div className="modal-spec-block tech">
              <div className="spec-header">
                <Cpu size={15} style={{ color: exhibit.color }} />
                <span className="spec-label">TECHNOLOGY & ARCHITECTURE</span>
              </div>
              <div className="tags-container">
                {(exhibit.technologyStack || exhibit.tags).map((tech) => (
                  <span key={tech} className="tech-pill highlight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Current Status Block */}
          <div className="modal-spec-block status-block">
            <div className="spec-header">
              <Clock size={15} style={{ color: exhibit.color }} />
              <span className="spec-label">CURRENT STATUS</span>
            </div>
            <div className="status-indicator-row">
              <span className={`status-pill ${exhibit.statusType}`}>
                {exhibit.status}
              </span>
              {exhibit.statusType === 'progress' && (
                <span className="status-subtext">Active work in progress — not claiming completed release</span>
              )}
              {exhibit.id === 'infinite-loops' && (
                <span className="status-subtext">Working codebase complete; deployment pending</span>
              )}
            </div>
          </div>

          {/* Level Note for Learning Lab (Emphasizes learning area vs claimed mastery) */}
          {exhibit.levelNote && (
            <div className="learning-note-box">
              <Info size={16} />
              <span>{exhibit.levelNote}</span>
            </div>
          )}

          {/* Official Certificate Placeholder (e.g. for WorldQuant BRAIN) */}
          {exhibit.imagePlaceholder && (
            <div className="certificate-placeholder-frame">
              <div className="cert-inner-border">
                <Award size={36} style={{ color: exhibit.color }} />
                <h4 className="cert-title">{exhibit.title}</h4>
                <p className="cert-issuer">Issued by WorldQuant BRAIN</p>
                <div className="cert-upload-tag">
                  <span>{exhibit.imagePlaceholder}</span>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="modal-narrative-section">
            <h4 className="section-label">CURATION & ARCHITECTURAL DETAILS</h4>
            <p className="narrative-text">{exhibit.details}</p>
          </div>

          {/* Highlights / Contributions */}
          {exhibit.highlights && exhibit.highlights.length > 0 && (
            <div className="modal-highlights-section">
              <h4 className="section-label">KEY HIGHLIGHTS</h4>
              <ul className="highlights-list">
                {exhibit.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} style={{ color: exhibit.color, flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metadata Grid */}
          {exhibit.stats && (
            <div className="metadata-grid">
              {Object.entries(exhibit.stats).map(([k, v]) => (
                <div key={k} className="meta-cell">
                  <span className="meta-key">{k.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                  <span className="meta-val">{v}</span>
                </div>
              ))}
            </div>
          )}

          {/* Verified Repository Link or Transparent In-Progress Notice */}
          {exhibit.githubUrl ? (
            <div className="links-row">
              <a
                href={exhibit.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-external-link verified-github"
              >
                <FolderGit2 size={16} />
                <span>View GitHub Repository</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ) : exhibit.sectionId === 'projects' ? (
            <div className="private-repo-notice">
              <Code2 size={15} />
              <span>Repository is currently in local development (no public link yet)</span>
            </div>
          ) : null}
        </div>

        {/* Modal Footer with Carousel Navigation */}
        <div className="modal-footer">
          <button className="btn-nav-prev" onClick={() => navigateExhibit(-1)}>
            <ChevronLeft size={16} />
            <span>Previous Exhibit</span>
          </button>
          <span className="modal-counter">
            {currentIndex + 1} of {EXHIBITS.length}
          </span>
          <button className="btn-nav-next" onClick={() => navigateExhibit(1)}>
            <span>Next Exhibit</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
