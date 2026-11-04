import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  X,
  Send,
  Compass,
  ArrowRight,
  Bot,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { GUIDE_RESPONSES, SUGGESTED_QUESTIONS, EXHIBITS, SECTIONS } from '../data/museumData';

export default function MuseumGuide({
  activeSection,
  onSelectSection,
  onSelectExhibit
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'guide',
      text: "Hello! I am your Museum Guide. I run on a local rule-based intent engine (no external API keys required). How can I assist your tour of Girish's projects, certifications, or learning journey today?",
      actions: null
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();
    if (!q) return;

    // Add user question to transcript
    const userMsg = { sender: 'user', text: rawQuery };
    
    // Find matching rule
    let match = GUIDE_RESPONSES.find(item =>
      item.keywords.some(kw => q.includes(kw))
    );

    let guideMsg;
    if (match) {
      const targetExhibitObj = match.targetExhibit
        ? EXHIBITS.find(e => e.id === match.targetExhibit)
        : null;
      const targetSectionObj = match.actionSection
        ? SECTIONS.find(s => s.id === match.actionSection)
        : null;

      guideMsg = {
        sender: 'guide',
        text: match.response,
        actions: {
          sectionId: match.actionSection,
          sectionName: targetSectionObj?.title,
          exhibit: targetExhibitObj
        }
      };
    } else {
      guideMsg = {
        sender: 'guide',
        text: `I couldn't find a direct match for "${rawQuery}" in my local museum index. You can explore:
• Projects (MedSaathi, Infinite Loops, Interactive Portfolio)
• Achievements (WorldQuant Bronze, Silver, Gold Challenge)
• Learning Lab (Python, C++, CP, Git, Linux, AI, Backend, Quant)
• Community & Future Goals.
Select one of the shortcuts below:`,
        actions: {
          showWingList: true
        }
      };
    }

    setMessages(prev => [...prev, userMsg, guideMsg]);
    setInputVal('');
  };

  const handleSend = (e) => {
    e.preventDefault();
    processQuery(inputVal);
  };

  return (
    <div className={`museum-guide-root museum-guide-root--${activeSection}`}>
      {/* Floating Guide Activation Button */}
      {!isOpen && (
        <button
          className="btn-guide-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Museum Guide"
        >
          <div className="guide-avatar-aura">
            <Bot size={22} className="guide-icon" />
            <span className="online-indicator"></span>
          </div>
          <div className="guide-trigger-label">
            <span className="label-title">Museum Guide</span>
            <span className="label-status">Local AI Assistant</span>
          </div>
        </button>
      )}

      {/* Slide-out Interactive Guide Drawer */}
      {isOpen && (
        <div className="guide-dialog-card">
          {/* Header */}
          <div className="guide-dialog-header">
            <div className="guide-header-title">
              <div className="guide-avatar-mini">
                <Bot size={18} />
              </div>
              <div>
                <h3>Museum Guide</h3>
                <span className="guide-badge-mode">Rule-Based v1.0 &bull; Offline Mode</span>
              </div>
            </div>
            <button className="btn-guide-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Architecture Transparency Banner */}
          <div className="guide-architecture-note">
            <Cpu size={14} />
            <span>Local intent router. Architected for direct future AI/LLM API integration.</span>
          </div>

          {/* Chat Messages Log */}
          <div className="guide-chat-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-message ${m.sender}`}>
                <div className="message-content">
                  <p>{m.text}</p>

                  {/* Contextual Action Buttons */}
                  {m.actions && m.actions.exhibit && (
                    <div className="guide-action-row">
                      <button
                        className="btn-guide-action"
                        onClick={() => {
                          onSelectExhibit(m.actions.exhibit);
                          setIsOpen(false);
                        }}
                      >
                        <Compass size={14} />
                        <span>Inspect {m.actions.exhibit.title.split('—')[0]}</span>
                      </button>
                    </div>
                  )}

                  {m.actions && m.actions.sectionId && !m.actions.exhibit && (
                    <div className="guide-action-row">
                      <button
                        className="btn-guide-action"
                        onClick={() => {
                          onSelectSection(m.actions.sectionId);
                          setIsOpen(false);
                        }}
                      >
                        <ArrowRight size={14} />
                        <span>Navigate to {m.actions.sectionName || m.actions.sectionId}</span>
                      </button>
                    </div>
                  )}

                  {m.actions && m.actions.showWingList && (
                    <div className="guide-chip-wrap">
                      {SECTIONS.filter(s => s.id !== 'entrance').map(sec => (
                        <button
                          key={sec.id}
                          className="chip-quick-jump"
                          onClick={() => {
                            onSelectSection(sec.id);
                            setIsOpen(false);
                          }}
                        >
                          {sec.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="guide-suggestions-tray">
            <span className="tray-label">Quick Inquiries:</span>
            <div className="suggestions-scroll">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  className="btn-suggested-chip"
                  onClick={() => processQuery(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form className="guide-input-form" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about projects, skills, WorldQuant..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="guide-text-input"
            />
            <button type="submit" className="btn-guide-send" disabled={!inputVal.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
