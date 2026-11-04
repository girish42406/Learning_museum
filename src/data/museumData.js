// Curated Museum Exhibits Data for Girish Prasad Sharma
// Accurately reflects provided information without fabricating any credentials, links, or dates.

export const MUSEUM_PROFILE = {
  name: "Girish Prasad Sharma",
  title: "First-Year Computer Science & AI Explorer",
  institution: "Newton School of Technology",
  tagline: "Not just what I've built, but what I've learned along the way.",
  bio: "First-year student exploring Computer Science, Artificial Intelligence, and Quantitative Technologies. Passionate about understanding core foundations, building practical tools, and continuous learning.",
};

export const SECTIONS = [
  {
    id: "entrance",
    title: "Entrance Hall",
    subtitle: "Welcome to the Museum",
    badge: "Origin",
    color: "#38bdf8",
    description: "An orientation rotunda introducing Girish Prasad Sharma's journey, philosophy, and interactive exhibition halls.",
  },
  {
    id: "projects",
    title: "Project Gallery",
    subtitle: "Applied Software & AI",
    badge: "3 Exhibits",
    color: "#6366f1",
    description: "Hands-on projects bridging healthcare accessibility, voice security, and interactive computing.",
  },
  {
    id: "achievements",
    title: "Achievement Hall",
    subtitle: "Milestones & Certifications",
    badge: "3 Credentials",
    color: "#f59e0b",
    description: "Verified achievements earned in quantitative research and algorithmic modeling on WorldQuant BRAIN.",
  },
  {
    id: "learning",
    title: "Learning Lab",
    subtitle: "Active Competencies in Progress",
    badge: "8 Modules",
    color: "#10b981",
    description: "Core technical foundations and tools actively being studied and practiced. Shown as learning areas, not claimed expert-level skills.",
  },
  {
    id: "community",
    title: "Community Wing",
    subtitle: "Peer Collaboration & Ecosystem",
    badge: "2 Communities",
    color: "#ec4899",
    description: "Active involvement in collegiate technical societies and entrepreneurship cells.",
  },
  {
    id: "future",
    title: "Future Wing",
    subtitle: "Vision & Long-Term Roadmap",
    badge: "6 Milestones",
    color: "#a855f7",
    description: "High-conviction aspirations, next milestones in quantitative research, startup innovation, and engineering.",
  },
];

export const EXHIBITS = [
  // --- PROJECTS GALLERY ---
  {
    id: "medsaathi",
    sectionId: "projects",
    title: "MedSaathi — AI Medicine Safety Checker",
    shortDescription: "Experimental medicine information and safety checker supporting photo uploads, multilingual guidance, and custom health contexts.",
    status: "In Progress / Experimental",
    statusType: "progress",
    color: "#06b6d4",
    purpose: "To provide an experimental digital aid for checking medicine information from photos, offering multilingual instructions and taking into account user age and specific health conditions.",
    myRole: "Project Creator & Developer — Implemented the Python and Streamlit application, designed the medicine image upload pipeline, and integrated multilingual and age-aware health context features.",
    technologyStack: ["Python", "Streamlit", "Computer Vision", "Multilingual Support", "Health Condition Logic"],
    tags: ["Python", "Streamlit", "Computer Vision", "Multilingual", "Healthcare Tech"],
    disclaimer: "Medical Disclaimer: MedSaathi is strictly an experimental educational prototype and is NOT a substitute for professional medical advice, clinical diagnosis, or medical treatment.",
    liveAppUrl: "https://medsaathi-7amrfu58ehsx9ryrmuj29u.streamlit.app/",
    githubUrl: "https://github.com/girish42406/medsaathi",
    links: [
      { label: "Try Live App", url: "https://medsaathi-7amrfu58ehsx9ryrmuj29u.streamlit.app/", type: "live" },
      { label: "View Source Code", url: "https://github.com/girish42406/medsaathi", type: "repo" }
    ],
    highlights: [
      "Medicine image upload capability for instant visual reference",
      "Multilingual output support for broader demographic accessibility",
      "Personalized contextual options factoring in age brackets and additional health conditions",
      "Strictly experimental prototype focused on patient awareness — not clinical advice"
    ],
    details: `MedSaathi is an experimental AI medicine safety checker built with Python and Streamlit.
The application allows users to upload photos of medicine packaging to inspect critical details, receive dosage and precaution guidance in multiple languages, and provide personalized context (such as age group and chronic health factors).

Live Application: https://medsaathi-7amrfu58ehsx9ryrmuj29u.streamlit.app/
Source Code: https://github.com/girish42406/medsaathi

IMPORTANT: This is strictly an experimental project in active development and should never be used as a substitute for professional clinical medical advice.`,
    stats: {
      framework: "Streamlit",
      language: "Python",
      currentStatus: "In Progress / Experimental",
      liveStatus: "Deployed on Streamlit Cloud"
    }
  },
  {
    id: "infinite-loops",
    sectionId: "projects",
    title: "Infinite Loops — Voice-Cloning and Scam Detection",
    shortDescription: "Audio forensic pipeline detecting synthesized deepfake voice scams using raw waveform acoustic models and Groq LLM analysis.",
    status: "Working Code Complete (Deployment Pending)",
    statusType: "complete",
    color: "#6366f1",
    purpose: "To combat voice-cloning telephone scams and audio fraud by evaluating raw audio waveforms for synthetic artifacts while simultaneously analyzing conversational transcripts for social engineering markers.",
    myRole: "Research and Technology/Library Selection — Researched state-of-the-art acoustic anti-spoofing architectures and selected the neural frameworks and inference libraries for the team (AASIST, RawNet2, Whisper, and Groq LLM). Did not personally code the entire end-to-end system.",
    teamSize: "3-member team",
    eventContext: "Created for Hacktoberfest (concept previously explored for Smart India Hackathon / SIH)",
    technologyStack: ["AASIST", "RawNet2", "Whisper", "Groq LLM", "PyTorch", "Python"],
    tags: ["AASIST", "RawNet2", "Whisper", "Groq LLM", "Voice Forensics", "Cybersecurity"],
    githubUrl: "https://github.com/Pritpal-Singh-me/Infinite_Loops",
    links: [
      { label: "View GitHub Repository", url: "https://github.com/Pritpal-Singh-me/Infinite_Loops", type: "repo" }
    ],
    highlights: [
      "Collaborative 3-member team project created for Hacktoberfest",
      "Built upon foundational concept explored during Smart India Hackathon (SIH)",
      "Personal Contribution: In-depth research and technology/library selection for audio anti-spoofing",
      "Overall Project Stack: AASIST & RawNet2 for raw waveform anti-spoofing, Whisper for speech-to-text, Groq LLM for real-time scam intent analysis",
      "Working code exists and is verified in GitHub repository; production deployment is pending (not claiming live deployment)"
    ],
    details: `Infinite Loops is an open-source cybersecurity pipeline designed to detect voice-cloning fraud. Developed by a 3-member team for Hacktoberfest (following initial concept explorations for SIH), Girish's specific contribution was conducting the literature research and library selection that established the core acoustic and LLM technology stack.

The system incorporates:
• AASIST (Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks)
• RawNet2 for deep raw waveform feature representation
• OpenAI Whisper for speech transcription
• Groq LLM for real-time natural language scam heuristic detection.

The working codebase is complete on GitHub. Live cloud deployment is currently pending.`,
    stats: {
      team: "3 Members",
      myContribution: "Research & Technology Selection",
      overallStack: "AASIST, RawNet2, Whisper, Groq LLM",
      deploymentStatus: "Working code complete; deployment pending"
    }
  },
  {
    id: "interactive-portfolio",
    sectionId: "projects",
    title: "Interactive Personal Portfolio",
    shortDescription: "A virtual 3D museum experience built with Antigravity IDE, transforming achievements, projects and learning journey into interactive exhibits.",
    status: "In Progress",
    statusType: "progress",
    color: "#8b5cf6",
    purpose: "To explore an interactive, spatial way to present my learning journey, projects, verified WorldQuant certifications, and community memberships inside an engaging virtual museum.",
    myRole: "Creator & Developer — Architected the virtual museum experience using Antigravity IDE, pairing Three.js/React Three Fiber with high-contrast detail panels and a responsive 2D fallback mode.",
    technologyStack: ["Antigravity IDE", "React 18", "Three.js", "React Three Fiber", "Vite"],
    tags: ["Antigravity IDE", "React", "Three.js", "React Three Fiber", "Spatial Web"],
    disclaimer: null,
    githubUrl: null, // Local development in progress — no invented URL
    links: [],
    highlights: [
      "Built and structured using Antigravity IDE",
      "Interactive 3D museum space featuring custom interactive geometry and pedestals",
      "Local rule-based Museum Guide assistant with transparent AI-ready architecture",
      "Full 2D accessible fallback for universal device support",
      "Curated learning exhibits reflecting real progress without inflated claims"
    ],
    details: `Rather than a standard portfolio website, this project realizes 'The Learning Museum' — a futuristic virtual rotunda celebrating both shipped work, verified certifications, and active learning areas. Developed using Antigravity IDE, the application pairs Three.js spatial scenes with high-contrast readable modals, camera interpolation, and an offline rule-based tour guide.`,
    stats: {
      builtWith: "Antigravity IDE",
      architecture: "React + R3F + Vite",
      currentStatus: "In Progress",
      version: "Active Exploration"
    }
  },

  // --- ACHIEVEMENT HALL ---
  {
    id: "wq-bronze",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Bronze Certificate",
    shortDescription: "Official Certificate of Accomplishment awarded for reaching Bronze Level in the WorldQuant Challenge®.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Quantitative Finance", "Alpha Design", "Market Modeling"],
    color: "#cd7f32", // Bronze
    evidence: {
      title: "Certificate of Accomplishment — Bronze Level",
      issuer: "WorldQuant BRAIN",
      authorizedBy: "Nitish Maini (Chief Strategy Officer of WorldQuant)",
      recipient: "Girish Prasad Sharma",
      image: "/evidence/certificates/bronze-certificate.png",
      pdf: "/evidence/certificates/bronze-certificate.pdf",
      uploadPath: "public/evidence/certificates/bronze-certificate.png"
    },
    highlights: [
      "Official Certificate of Accomplishment issued to Girish Prasad Sharma",
      "Authorized and presented by Nitish Maini, Chief Strategy Officer of WorldQuant",
      "Awarded for foundational algorithmic signal generation and quantitative factor design in the WorldQuant Challenge®"
    ],
    details: `Earned in the WorldQuant Challenge® on WorldQuant BRAIN by creating, testing, and validating mathematical alpha models against historical market datasets. Reflects early proficiency in mathematical formulations of market behavior, Sharpe ratio optimization, and quantitative risk management.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Bronze Level in the WorldQuant Challenge®",
      awardee: "Girish Prasad Sharma",
      authorizedBy: "Nitish Maini"
    }
  },
  {
    id: "wq-silver",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Silver Certificate",
    shortDescription: "Official Certificate of Accomplishment awarded for reaching Silver Level in the WorldQuant Challenge®.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Statistical Arbitrage", "Alpha Factory", "Factor Investing"],
    color: "#94a3b8", // Silver
    evidence: {
      title: "Certificate of Accomplishment — Silver Level",
      issuer: "WorldQuant BRAIN",
      authorizedBy: "Nitish Maini (Chief Strategy Officer of WorldQuant)",
      recipient: "Girish Prasad Sharma",
      image: "/evidence/certificates/silver-certificate.png",
      pdf: "/evidence/certificates/silver-certificate.pdf",
      uploadPath: "public/evidence/certificates/silver-certificate.png"
    },
    highlights: [
      "Official Certificate of Accomplishment issued to Girish Prasad Sharma",
      "Authorized and presented by Nitish Maini, Chief Strategy Officer of WorldQuant",
      "Recognizes progression in developing robust multi-factor alphas capable of clearing statistical hurdle rates in the WorldQuant Challenge®"
    ],
    details: `Signifies progression in developing robust mathematical alphas capable of clearing rigorous correlation thresholds and statistical hurdles on the WorldQuant BRAIN simulation platform during the WorldQuant Challenge®.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Silver Level in the WorldQuant Challenge®",
      awardee: "Girish Prasad Sharma",
      authorizedBy: "Nitish Maini"
    }
  },
  {
    id: "wq-gold-challenge",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Challenge Gold Certificate",
    shortDescription: "Official Certificate of Accomplishment awarded for reaching Gold Level in the WorldQuant Challenge®.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Global Challenge", "Gold Level", "Algorithmic Research"],
    color: "#f59e0b", // Gold
    evidence: {
      title: "Certificate of Accomplishment — Gold Level",
      issuer: "WorldQuant BRAIN",
      authorizedBy: "Nitish Maini (Chief Strategy Officer of WorldQuant)",
      recipient: "Girish Prasad Sharma",
      image: "/evidence/certificates/gold-challenge-certificate.png",
      pdf: "/evidence/certificates/gold-challenge-certificate.pdf",
      uploadPath: "public/evidence/certificates/gold-challenge-certificate.png"
    },
    highlights: [
      "Official Certificate of Accomplishment issued to Girish Prasad Sharma",
      "Authorized and presented by Nitish Maini, Chief Strategy Officer of WorldQuant",
      "Gold Level distinction achieved during the competitive WorldQuant Challenge®",
      "Rigorous alpha portfolio evaluation spanning statistical significance and low cross-alpha correlation"
    ],
    details: `Awarded during the competitive WorldQuant Challenge® for qualifying alphas that demonstrated high information ratios, robust turnover management, and statistical durability across changing market regimes. Authorized and presented by Nitish Maini, Chief Strategy Officer of WorldQuant.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Gold Level in the WorldQuant Challenge®",
      awardee: "Girish Prasad Sharma",
      authorizedBy: "Nitish Maini"
    }
  },

  // --- LEARNING LAB ---
  {
    id: "learn-python",
    sectionId: "learning",
    title: "Python",
    shortDescription: "Primary language for data manipulation, scripting, ML experimentation, and rapid application prototyping.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Python 3", "Scripting", "Data Structures", "Pandas", "Streamlit"],
    color: "#3b82f6",
    details: "Utilized extensively in coursework and projects like MedSaathi. Actively refining clean code practices, object-oriented concepts, and algorithmic performance.",
    levelNote: "Presented honestly as an active learning area, not claimed expert mastery."
  },
  {
    id: "learn-cpp",
    sectionId: "learning",
    title: "C++",
    shortDescription: "Foundations of memory management, pointers, and high-performance computation for competitive programming.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["C++", "STL", "Memory Management", "Algorithms"],
    color: "#0284c7",
    details: "Building deep understanding of memory efficiency, standard template library (STL), and execution speed following Python groundwork.",
    levelNote: "Current study focus to build strong low-level computing intuition."
  },
  {
    id: "learn-cp",
    sectionId: "learning",
    title: "Competitive Programming",
    shortDescription: "Developing structured mathematical problem solving, asymptotic analysis, and algorithmic agility.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Data Structures", "Algorithms", "Time Complexity", "Codeforces / LeetCode"],
    color: "#e11d48",
    details: "Practicing algorithmic paradigms including recursion, binary search, two pointers, graphs, and dynamic programming.",
    levelNote: "Active deliberate daily practice area."
  },
  {
    id: "learn-git",
    sectionId: "learning",
    title: "Git and GitHub",
    shortDescription: "Version control workflows, branching, commits, collaborative pull requests, and open-source contribution.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Git", "GitHub", "Branching", "Code Reviews"],
    color: "#f97316",
    details: "Practiced during collaborative efforts such as the Hacktoberfest Infinite Loops repository and personal repositories.",
    levelNote: "Standard engineering practice in active use."
  },
  {
    id: "learn-linux",
    sectionId: "learning",
    title: "Linux and CLI",
    shortDescription: "Terminal navigation, shell scripting, environment configuration, and headless server fundamentals.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Bash", "Zsh", "Linux Utilities", "Package Managers", "CLI Tools"],
    color: "#eab308",
    details: "Operating in UNIX environments, managing dependencies, automation scripts, and command-line developer tooling.",
    levelNote: "Everyday development ecosystem."
  },
  {
    id: "learn-ai",
    sectionId: "learning",
    title: "Artificial Intelligence",
    shortDescription: "Conceptual grounding in machine learning architectures, multimodal LLMs, audio forensics, and prompt pipelines.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Machine Learning", "Audio Models", "LLM Integration", "Speech Processing"],
    color: "#8b5cf6",
    details: "Studying neural model mechanics, feature representations (such as AASIST/RawNet2 for voice), and integrating inference APIs responsibly.",
    levelNote: "Evolving study area aligned with first-year computer science explorations."
  },
  {
    id: "learn-backend",
    sectionId: "learning",
    title: "Backend Development",
    shortDescription: "APIs, HTTP protocols, server runtimes, data storage, and architecture for robust web applications.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["APIs", "Server Architecture", "Databases", "Data Pipelines"],
    color: "#10b981",
    details: "Exploring how to turn analytical models and prototypes into scalable, secure services with reliable endpoints.",
    levelNote: "Target expansion area to complement frontend and data skills."
  },
  {
    id: "learn-quant",
    sectionId: "learning",
    title: "Quantitative Research",
    shortDescription: "Mathematical alpha modeling, factor analysis, backtesting, and market microstructure on WorldQuant BRAIN.",
    status: "Active Learning Area",
    statusType: "learning",
    tags: ["Alpha Modeling", "Statistical Analysis", "Sharpe Ratio", "Backtesting"],
    color: "#d97706",
    details: "Translating economic hypotheses into rigorous formulas evaluated by predictive power and drawdown profile.",
    levelNote: "Certified Bronze/Silver/Challenge Gold through structured platform challenges."
  },

  // --- COMMUNITY WING ---
  {
    id: "comm-minds",
    sectionId: "community",
    title: "Minds Club — Member",
    shortDescription: "Active member contributing to campus intellectual discussions, technical workshops, and peer brainstorming sessions.",
    status: "Active Member",
    statusType: "community",
    tags: ["Minds Club", "Ideation", "Technical Discussions", "Community"],
    color: "#ec4899",
    evidence: {
      title: "Minds Club Official Membership / Batch List",
      recipient: "Girish Prasad Sharma (Batch 2030)",
      image: "/evidence/memberships/minds-club-membership.png",
      pdf: "/evidence/memberships/minds-club-membership.pdf",
      uploadPath: "public/evidence/memberships/minds-club-membership.png"
    },
    highlights: [
      "Engaging with fellow members on emerging technology and student projects",
      "Participating in collaborative learning circles and shared peer problem-solving",
      "Official membership confirmed in verified batch list"
    ],
    details: "Minds Club serves as a collaborative sandbox for students to examine technological breakthroughs, share knowledge across diverse engineering domains, and foster a culture of inquiry."
  },
  {
    id: "comm-ecell",
    sectionId: "community",
    title: "E-Cell, Newton School of Technology — Member",
    shortDescription: "Member of the Entrepreneurship Cell fostering startup culture, venture ideation, and student founder ecosystems.",
    status: "Active Member",
    statusType: "community",
    tags: ["E-Cell", "NST", "Entrepreneurship", "Innovation", "Founders"],
    color: "#f43f5e",
    evidence: {
      title: "Shark Sphere Membership List — Selected Members",
      organization: "Entrepreneurship Cell, Newton School of Technology",
      recipient: "Girish Prasad Sharma (Selected Member)",
      image: "/evidence/memberships/ecell-membership.jpg",
      uploadPath: "public/evidence/memberships/ecell-membership.jpg"
    },
    highlights: [
      "Contributing to entrepreneurship initiatives, speaker sessions, and pitch environments",
      "Learning venture mechanics, market validation, and startup fundamentals alongside peers",
      "Official selection confirmed in Shark Sphere E-Cell selected members roster"
    ],
    details: "Being part of E-Cell at Newton School of Technology provides direct exposure to startup thinking, collaborative product strategy, and early venture execution."
  },

  // --- FUTURE WING ---
  {
    id: "fut-startup",
    sectionId: "future",
    title: "Build and Grow a Startup",
    shortDescription: "Turn meaningful problems into sustainable, technology-driven products that serve real user needs.",
    status: "Long-Term Goal",
    statusType: "future",
    tags: ["Entrepreneurship", "Product Development", "Impact"],
    color: "#a855f7",
    details: "Channeling technical foundations and problem identification into building a high-impact startup venture."
  },
  {
    id: "fut-quant",
    sectionId: "future",
    title: "Explore and Grow in Quantitative Research",
    shortDescription: "Deepen mathematical rigor, statistical modeling, and alpha discovery in quantitative finance.",
    status: "Continuous Milestone",
    statusType: "future",
    tags: ["Quantitative Finance", "Alpha Discovery", "Mathematics"],
    color: "#6366f1",
    details: "Expanding beyond initial WorldQuant BRAIN certifications into systematic modeling, risk hedging, and financial mathematics."
  },
  {
    id: "fut-cp",
    sectionId: "future",
    title: "Improve Competitive Programming Skills",
    shortDescription: "Sharpen data structure intuition, speed, and accuracy across online judges and contests.",
    status: "Core Technical Goal",
    statusType: "future",
    tags: ["Algorithms", "Problem Solving", "Contest Rating"],
    color: "#ec4899",
    details: "Consistent contest participation to cultivate effortless algorithmic reasoning and problem decomposition."
  },
  {
    id: "fut-cpp",
    sectionId: "future",
    title: "Master C++ after Python",
    shortDescription: "Transition from Python productivity into low-level systems efficiency, pointers, and memory control.",
    status: "Near-Term Horizon",
    statusType: "future",
    tags: ["C++ Mastery", "Systems Foundations", "Performance"],
    color: "#06b6d4",
    details: "Bridging high-level mathematical scripting with low-latency execution and memory-conscious software design."
  },
  {
    id: "fut-backend",
    sectionId: "future",
    title: "Learn Backend Development",
    shortDescription: "Architect scalable APIs, distributed pipelines, and production-ready server systems.",
    status: "Upcoming Goal",
    statusType: "future",
    tags: ["Backend Systems", "Microservices", "Cloud Architecture"],
    color: "#10b981",
    details: "Mastering database indexing, caching strategies, and resilient server-side pipelines to power intelligent client experiences."
  },
  {
    id: "fut-ai",
    sectionId: "future",
    title: "Build More Useful AI Projects",
    shortDescription: "Create practical, ethical, and helpful AI utilities that solve genuine everyday problems.",
    status: "Ongoing Goal",
    statusType: "future",
    tags: ["Practical AI", "Human-Centered Tools", "Ethical AI"],
    color: "#f59e0b",
    details: "Focusing on AI tools that assist human capability rather than mere novelty, continuing work inspired by MedSaathi and Infinite Loops."
  }
];

// Rule-based museum guide knowledge base & intent router
export const GUIDE_RESPONSES = [
  {
    keywords: ["medsaathi", "medicine", "safety", "health", "streamlit", "doctor"],
    response: "MedSaathi is Girish's Python & Streamlit AI Medicine Safety Checker. You can try the live application on Streamlit Cloud and inspect the source code on GitHub. Please note that it is strictly an experimental educational prototype, not clinical advice!",
    actionSection: "projects",
    targetExhibit: "medsaathi"
  },
  {
    keywords: ["infinite loops", "voice", "clone", "scam", "deepfake", "hacktoberfest", "sih", "audio"],
    response: "Infinite Loops is a 3-member team project created for Hacktoberfest (SIH concept). Girish's personal contribution was research and technology/library selection (AASIST, RawNet2, Whisper, and Groq LLM). The complete working code is on GitHub, and deployment is pending.",
    actionSection: "projects",
    targetExhibit: "infinite-loops"
  },
  {
    keywords: ["portfolio", "antigravity", "museum", "virtual", "3d", "spatial"],
    response: "The Interactive Personal Portfolio is built using Antigravity IDE! It transforms this entire space into a 3D virtual museum with real-time lighting, interactive pedestals, and an offline guide assistant. It is currently in progress without an external deployment URL.",
    actionSection: "projects",
    targetExhibit: "interactive-portfolio"
  },
  {
    keywords: ["worldquant", "brain", "certificate", "bronze", "silver", "gold", "quant"],
    response: "In the Achievement Hall, Girish holds three verified WorldQuant Challenge® credentials: Bronze Level, Silver Level, and the Challenge Gold Level Certificate, authorized by Nitish Maini (Chief Strategy Officer of WorldQuant). You can view the high-resolution certificate scans directly in the viewer!",
    actionSection: "achievements",
    targetExhibit: "wq-gold-challenge"
  },
  {
    keywords: ["learning", "skill", "python", "c++", "cp", "git", "linux", "backend", "study"],
    response: "The Learning Lab showcases Girish's active learning areas: Python, C++, Competitive Programming, Git & GitHub, Linux/CLI, AI, Backend, and Quantitative Research. These are displayed as honest areas of study, not claimed masteries.",
    actionSection: "learning",
    targetExhibit: "learn-python"
  },
  {
    keywords: ["community", "club", "minds", "ecell", "e-cell", "newton", "school"],
    response: "In the Community Wing, you can view official membership documents confirming Girish's membership in Minds Club (Batch 2030) and the E-Cell at Newton School of Technology (Shark Sphere selected members roster).",
    actionSection: "community",
    targetExhibit: "comm-minds"
  },
  {
    keywords: ["future", "goal", "startup", "plan", "roadmap", "vision"],
    response: "The Future Wing presents 6 core goals: building and growing a startup, advancing in Quantitative Research, mastering C++, excelling in Competitive Programming, learning Backend systems, and creating practical AI tools.",
    actionSection: "future",
    targetExhibit: "fut-startup"
  },
  {
    keywords: ["who", "girish", "about", "bio", "student"],
    response: "Girish Prasad Sharma is a first-year student exploring Computer Science, Artificial Intelligence, and Quantitative Technologies with a strong focus on learning foundations.",
    actionSection: "entrance",
    targetExhibit: null
  }
];

export const SUGGESTED_QUESTIONS = [
  "What is MedSaathi?",
  "Tell me about Infinite Loops voice detection",
  "What certifications are in the Achievement Hall?",
  "What is Girish learning right now?",
  "What are Girish's future goals?",
  "Which communities is he a part of?"
];

