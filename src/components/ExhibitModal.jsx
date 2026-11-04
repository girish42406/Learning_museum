import React, { useState, useEffect, useCallback } from 'react';
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
  Code2,
  Play,
  FileText,
  Eye,
  Maximize2
} from 'lucide-react';

import { EXHIBITS } from '../data/museumData';
import EvidenceLightbox from './EvidenceLightbox';

export default function ExhibitModal({
  exhibit,
  onClose,
  onSelectExhibit
}) {
  const [activeEvidence, setActiveEvidence] = useState(null);

  const currentIndex = EXHIBITS.findIndex(
    (item) => item.id === exhibit?.id
  );

  const navigateExhibit = useCallback(
    (direction) => {
      if (!EXHIBITS.length || currentIndex < 0) return;

      const nextIndex =
        (currentIndex + direction + EXHIBITS.length) % EXHIBITS.length;

      onSelectExhibit(EXHIBITS[nextIndex]);
    },
    [currentIndex, onSelectExhibit]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeEvidence) {
          setActiveEvidence(null);
        } else {
          onClose();
        }
      }

      if (!activeEvidence) {
        if (e.key === 'ArrowRight') navigateExhibit(1);
        if (e.key === 'ArrowLeft') navigateExhibit(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeEvidence, navigateExhibit, onClose]);

  if (!exhibit) return null;

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
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div
          className="exhibit-modal-card"
          onClick={(e) => e.stopPropagation()}
          style={{ '--accent-theme': exhibit.color }}
        >
          {/* Top Control Bar */}
          <div className="modal-header">
            <div className="modal-badge-group">
              <span
                className="badge-wing"
                style={{
                  borderColor: exhibit.color,
                  color: exhibit.color
                }}
              >
                {exhibit.sectionId.toUpperCase()} WING
              </span>

              {getStatusBadge()}
            </div>

            <button
              className="btn-modal-close"
              onClick={onClose}
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="modal-body">
            <h2 className="modal-title">{exhibit.title}</h2>

            <p className="modal-lead">
              {exhibit.shortDescription}
            </p>

            {/* Medical / Safety Disclaimer */}
            {exhibit.disclaimer && (
              <div className="disclaimer-alert-box">
                <ShieldAlert
                  size={22}
                  className="disclaimer-icon"
                />

                <div className="disclaimer-text">
                  <strong>Safety Notice:</strong> {exhibit.disclaimer}
                </div>
              </div>
            )}

            {/* Evidence / Certificate Preview */}
            {exhibit.evidence && (
              <div
                className="evidence-preview-card"
                style={{ '--card-color': exhibit.color }}
              >
                <div className="evidence-header-bar">
                  <div className="evidence-meta-left">
                    <Award
                      size={18}
                      style={{ color: exhibit.color }}
                    />

                    <span className="evidence-heading">
                      OFFICIAL EVIDENCE & VERIFICATION
                    </span>
                  </div>

                  <span className="evidence-badge-verified">
                    <CheckCircle2 size={13} />
                    Verified Document
                  </span>
                </div>

                <div className="evidence-card-content">
                  {/* Certificate Image */}
                  {exhibit.evidence.image && (
                    <div
                      className="evidence-thumbnail-frame"
                      onClick={() =>
                        setActiveEvidence(exhibit.evidence)
                      }
                      title="Click to expand full document view"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveEvidence(exhibit.evidence);
                        }
                      }}
                    >
                      <img
                        src={exhibit.evidence.image}
                        alt={exhibit.evidence.title || 'Certificate preview'}
                        className="evidence-img-preview"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      <div className="thumbnail-zoom-hint">
                        <Maximize2 size={16} />
                        <span>Expand Preview</span>
                      </div>
                    </div>
                  )}

                  <div className="evidence-details-col">
                    <h4 className="evidence-doc-title">
                      {exhibit.evidence.title}
                    </h4>

                    {exhibit.evidence.recipient && (
                      <p className="evidence-doc-sub">
                        Issued to:{' '}
                        <strong>{exhibit.evidence.recipient}</strong>
                      </p>
                    )}

                    {exhibit.evidence.authorizedBy && (
                      <p className="evidence-doc-sub">
                        Authorized:{' '}
                        <strong>{exhibit.evidence.authorizedBy}</strong>
                      </p>
                    )}

                    <div className="evidence-action-buttons">
                      <button
                        className="btn-proof-primary"
                        onClick={() =>
                          setActiveEvidence(exhibit.evidence)
                        }
                        style={{ '--btn-accent': exhibit.color }}
                      >
                        <Eye size={15} />

                        <span>
                          {exhibit.sectionId === 'achievements'
                            ? 'View Certificate'
                            : 'View Proof'}
                        </span>
                      </button>

                      {exhibit.evidence.pdf && (
                        <a
                          href={exhibit.evidence.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-proof-secondary"
                        >
                          <FileText size={15} />
                          <span>View PDF Document</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project Purpose */}
            {exhibit.purpose && (
              <div className="modal-spec-block purpose">
                <div className="spec-header">
                  <Target
                    size={15}
                    style={{ color: exhibit.color }}
                  />
                  <span className="spec-label">
                    PROJECT PURPOSE
                  </span>
                </div>

                <p className="spec-text">{exhibit.purpose}</p>
              </div>
            )}

            {/* My Role */}
            {exhibit.myRole && (
              <div className="modal-spec-block role">
                <div className="spec-header">
                  <Users
                    size={15}
                    style={{ color: exhibit.color }}
                  />

                  <span className="spec-label">
                    {exhibit.teamSize
                      ? `MY CONTRIBUTION (${exhibit.teamSize})`
                      : 'MY ROLE & CONTRIBUTION'}
                  </span>
                </div>

                <p className="spec-text">{exhibit.myRole}</p>
              </div>
            )}

            {/* Technology Stack */}
            {(exhibit.technologyStack || exhibit.tags) && (
              <div className="modal-spec-block tech">
                <div className="spec-header">
                  <Cpu
                    size={15}
                    style={{ color: exhibit.color }}
                  />

                  <span className="spec-label">
                    {exhibit.teamSize
                      ? 'OVERALL PROJECT TECHNOLOGY STACK'
                      : 'TECHNOLOGY & ARCHITECTURE'}
                  </span>
                </div>

                <div className="tags-container">
                  {(exhibit.technologyStack || exhibit.tags).map(
                    (tech) => (
                      <span
                        key={tech}
                        className="tech-pill highlight"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Current Status */}
            <div className="modal-spec-block status-block">
              <div className="spec-header">
                <Clock
                  size={15}
                  style={{ color: exhibit.color }}
                />

                <span className="spec-label">
                  CURRENT STATUS
                </span>
              </div>

              <div className="status-indicator-row">
                <span
                  className={`status-pill ${exhibit.statusType}`}
                >
                  {exhibit.status}
                </span>

                {exhibit.statusType === 'progress' && (
                  <span className="status-subtext">
                    Active work in progress — not claiming completed release
                  </span>
                )}

                {exhibit.id === 'infinite-loops' && (
                  <span className="status-subtext">
                    Working codebase complete; production deployment pending
                  </span>
                )}
              </div>
            </div>

            {/* Learning Level Note */}
            {exhibit.levelNote && (
              <div className="learning-note-box">
                <Info size={16} />
                <span>{exhibit.levelNote}</span>
              </div>
            )}

            {/* Detailed Narrative */}
            <div className="modal-narrative-section">
              <h4 className="section-label">
                CURATION & ARCHITECTURAL DETAILS
              </h4>

              <p className="narrative-text">
                {exhibit.details}
              </p>
            </div>

            {/* Highlights */}
            {exhibit.highlights &&
              exhibit.highlights.length > 0 && (
                <div className="modal-highlights-section">
                  <h4 className="section-label">
                    KEY HIGHLIGHTS
                  </h4>

                  <ul className="highlights-list">
                    {exhibit.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2
                          size={15}
                          style={{
                            color: exhibit.color,
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Metadata Grid */}
            {exhibit.stats && (
              <div className="metadata-grid">
                {Object.entries(exhibit.stats).map(([key, value]) => (
                  <div key={key} className="meta-cell">
                    <span className="meta-key">
                      {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </span>

                    <span className="meta-val">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Verified Links & Actions */}
            {exhibit.links && exhibit.links.length > 0 ? (
              <div className="links-row project-proof-actions">
                {exhibit.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-external-link ${
                      link.type === 'live'
                        ? 'btn-live-app'
                        : 'verified-github'
                    }`}
                  >
                    {link.type === 'live' ? (
                      <Play size={16} />
                    ) : (
                      <FolderGit2 size={16} />
                    )}

                    <span>{link.label}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            ) : exhibit.sectionId === 'projects' ? (
              <div className="private-repo-notice">
                <Code2 size={15} />

                <span>
                  Project exploring interactive presentation; in active progress without external URL
                </span>
              </div>
            ) : null}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              className="btn-nav-prev"
              onClick={() => navigateExhibit(-1)}
            >
              <ChevronLeft size={16} />
              <span>Previous Exhibit</span>
            </button>

            <span className="modal-counter">
              {currentIndex + 1} of {EXHIBITS.length}
            </span>

            <button
              className="btn-nav-next"
              onClick={() => navigateExhibit(1)}
            >
              <span>Next Exhibit</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Evidence Lightbox */}
      {activeEvidence && (
        <EvidenceLightbox
          evidence={activeEvidence}
          onClose={() => setActiveEvidence(null)}
        />
      )}
    </>
  );
}
