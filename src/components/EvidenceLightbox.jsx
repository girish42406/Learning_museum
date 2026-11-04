import React, { useState, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  FileText,
  Award,
  CheckCircle2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function EvidenceLightbox({ evidence, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setZoomLevel(z => Math.min(2.5, z + 0.25));
      if (e.key === '-') setZoomLevel(z => Math.max(0.75, z - 0.25));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!evidence) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-dialog-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Header */}
        <div className="lightbox-header">
          <div className="lightbox-title-wrap">
            <ShieldCheck size={18} className="text-emerald-400" style={{ color: '#10b981' }} />
            <div>
              <h3 className="lightbox-title">{evidence.title || "Official Verification Document"}</h3>
              <p className="lightbox-subtitle">
                Verified Recipient: <strong>{evidence.recipient || "Girish Prasad Sharma"}</strong>
                {evidence.issuer && ` • ${evidence.issuer}`}
                {evidence.organization && ` • ${evidence.organization}`}
              </p>
            </div>
          </div>

          <div className="lightbox-header-controls">
            {/* Zoom Controls */}
            <div className="zoom-btn-group">
              <button
                className="btn-lightbox-tool"
                onClick={() => setZoomLevel(z => Math.max(0.75, z - 0.25))}
                title="Zoom Out (-)"
              >
                <ZoomOut size={16} />
              </button>
              <span className="zoom-level-text">{Math.round(zoomLevel * 100)}%</span>
              <button
                className="btn-lightbox-tool"
                onClick={() => setZoomLevel(z => Math.min(2.5, z + 0.25))}
                title="Zoom In (+)"
              >
                <ZoomIn size={16} />
              </button>
              <button
                className="btn-lightbox-tool"
                onClick={() => setZoomLevel(1)}
                title="Reset Zoom"
              >
                <RotateCcw size={15} />
              </button>
            </div>

            {/* PDF View Link */}
            {evidence.pdf && (
              <a
                href={evidence.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lightbox-pdf"
                title="Open original PDF in new tab"
              >
                <FileText size={15} />
                <span>Open PDF</span>
                <ExternalLink size={13} />
              </a>
            )}

            {/* Close Button */}
            <button className="btn-lightbox-close" onClick={onClose} aria-label="Close preview">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Viewer Viewport */}
        <div className="lightbox-viewport">
          {!imageError && evidence.image ? (
            <div
              className="lightbox-image-stage"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={evidence.image}
                alt={evidence.title || "Verification Document"}
                className="lightbox-rendered-image"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="lightbox-placeholder-box">
              <AlertCircle size={40} style={{ color: '#f59e0b', marginBottom: '1rem' }} />
              <h4 className="placeholder-title">Document Placeholder</h4>
              <p className="placeholder-desc">
                {evidence.title || "Official verification document placeholder"}
              </p>
              <div className="placeholder-path-tag">
                Target upload location: <code>{evidence.uploadPath || "public/evidence/..."}</code>
              </div>
              <p className="placeholder-hint">
                Place your verified certificate or membership scan in this path to display it here.
              </p>
            </div>
          )}
        </div>

        {/* Footer Info Bar */}
        <div className="lightbox-footer">
          <div className="lightbox-footer-info">
            <span className="info-pill verified">
              <CheckCircle2 size={13} /> Official Document Verification
            </span>
            {evidence.authorizedBy && (
              <span className="info-pill auth">
                Authorized: {evidence.authorizedBy}
              </span>
            )}
          </div>
          <span className="lightbox-key-hint">Press [ESC] to exit • Use [+] / [-] to zoom</span>
        </div>
      </div>
    </div>
  );
}

