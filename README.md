# The Learning Museum

> *"Not just what I've built, but what I've learned along the way."*  
> Curated interactive 3D virtual museum by **Girish Prasad Sharma** (First-Year Student exploring Computer Science, Artificial Intelligence, and Quantitative Technologies).

---

## 🏛️ Features & Architecture

- **Interactive 3D Spatial Museum**: Built with **React 18**, **Three.js**, **React Three Fiber (v8)**, and **Drei (v9)**.
- **Themed Exhibition Wings**:
  1. **Entrance Hall**: Welcome rotunda introducing Girish's journey and learning philosophy.
  2. **Project Gallery**:
     - *MedSaathi* — AI Medicine Safety Checker (Python & Streamlit; [Try Live App](https://medsaathi-7amrfu58ehsx9ryrmuj29u.streamlit.app/) • [View Source Code](https://github.com/girish42406/medsaathi); includes medical safety disclaimer).
     - *Infinite Loops* — Voice-Cloning & Scam Detection (3-member Hacktoberfest project; research & technology selection contribution; AASIST, RawNet2, Whisper, Groq LLM; [View GitHub Repository](https://github.com/Pritpal-Singh-me/Infinite_Loops); deployment pending).
     - *Interactive Personal Portfolio* — 3D virtual museum built with Antigravity IDE (In progress).
  3. **Achievement Hall**:
     - WorldQuant BRAIN Bronze Certificate (Official Certificate of Accomplishment; expandable lightbox preview + PDF).
     - WorldQuant BRAIN Silver Certificate (Official Certificate of Accomplishment; expandable lightbox preview + PDF).
     - WorldQuant BRAIN Challenge Gold Certificate (Official Challenge Certificate of Accomplishment; expandable lightbox preview + PDF).
  4. **Community Wing**:
     - Minds Club (Official membership / batch document; expandable lightbox preview + PDF).
     - E-Cell, Newton School of Technology (Shark Sphere selected members document; expandable lightbox preview).
  5. **Learning Lab**:
     - Active competencies: Python, C++, Competitive Programming, Git & GitHub, Linux & CLI, AI, Backend Development, Quantitative Research (framed honestly as active learning areas).
  6. **Future Wing**:
     - 6 concrete milestones spanning startup building, quant research, CP, C++, backend architectures, and practical AI.
- **AI Museum Guide**: Local rule-based assistant providing instant topic answers, direct teleport shortcuts, and modular architecture ready for future Gemini/LLM API integration.
- **2D Accessible Fallback**: Automatic WebGL detection and manual toggle between 3D Spatial View and a clean, responsive 2D Exhibition View with document preview badges.

---

## 📁 Evidence & Upload Directory Structure

All verification documents, certificates, and memberships are housed directly under `public/evidence/`:

```
wisperflow/public/evidence/
├── certificates/
│   ├── bronze-certificate.png          # High-resolution render of WorldQuant Bronze Certificate
│   ├── bronze-certificate.pdf          # Original WorldQuant Bronze PDF
│   ├── silver-certificate.png          # High-resolution render of WorldQuant Silver Certificate
│   ├── silver-certificate.pdf          # Original WorldQuant Silver PDF
│   ├── gold-challenge-certificate.png  # High-resolution render of WorldQuant Challenge Gold Certificate
│   └── gold-challenge-certificate.pdf  # Original WorldQuant Challenge Gold PDF
└── memberships/
    ├── ecell-membership.jpg            # Shark Sphere E-Cell selected members roster
    ├── minds-club-membership.png       # High-resolution render of Minds Club membership list
    └── minds-club-membership.pdf       # Original Minds Club membership PDF
```

To update or replace any certificate or document image:
1. Place your new scan/image directly into the corresponding file path above.
2. The museum will immediately display the new file across both 3D and 2D views, including in the interactive fullscreen Lightbox viewer.

---

## 🚀 Running the Project Locally

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```
