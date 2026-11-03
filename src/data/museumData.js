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
    shortDescription: "Python & Streamlit application providing medicine image verification, multilingual assistance, and age/condition-aware guidance.",
    status: "In progress",
    statusType: "progress",
    color: "#06b6d4",
    purpose: "To provide an accessible, user-friendly digital aid for checking medicine information from photos, offering multilingual instructions and taking into account user age and specific health conditions.",
    myRole: "Project Creator & Developer — Designed the Streamlit workflow, implemented image upload pipelines, and configured prompt heuristics for contextual medication safety awareness.",
    technologyStack: ["Python", "Streamlit", "Computer Vision", "Multilingual Support", "Prompt Engineering"],
    tags: ["Python", "Streamlit", "Computer Vision", "Multilingual", "Healthcare Tech"],
    disclaimer: "Medical Disclaimer: MedSaathi is strictly an experimental project and is NOT a substitute for professional medical advice, diagnosis, or treatment.",
    githubUrl: null, // No public link provided — not fabricated
    highlights: [
      "Medicine image upload capability for instant visual reference",
      "Multilingual support to assist diverse linguistic demographics",
      "Personalized contextual options factoring in age brackets and additional health conditions",
      "Strictly experimental prototype focused on educational safety awareness"
    ],
    details: `MedSaathi is an experimental AI medicine safety companion built with Python and Streamlit. 
The application allows users to upload medicine photos to extract identifiable details, read dosage precautions, and view information in multiple languages. It also provides options for users to specify their age group and existing health conditions to generate relevant safety context.

IMPORTANT: This is an experimental project in active development and should never be used as a substitute for professional clinical advice.`,
    stats: {
      framework: "Streamlit",
      language: "Python",
      currentStatus: "In progress",
      developmentType: "Experimental Prototype"
    }
  },
  {
    id: "infinite-loops",
    sectionId: "projects",
    title: "Infinite Loops — Voice-Cloning and Scam Detection",
    shortDescription: "Audio forensic pipeline detecting synthesized deepfake voice scams using raw waveform acoustic models and Groq LLM analysis.",
    status: "Working code exists; deployment pending",
    statusType: "complete",
    color: "#6366f1",
    purpose: "To combat voice-cloning telephone scams and audio fraud by evaluating raw audio waveforms for synthetic artifacts while simultaneously analyzing conversational transcripts for social engineering markers.",
    myRole: "Research & Technology/Library Selection — Conducted extensive literature review on neural acoustic anti-spoofing architectures and selected the core library stack (AASIST, RawNet2, Whisper, and Groq LLM).",
    technologyStack: ["AASIST", "RawNet2", "Whisper", "Groq LLM", "PyTorch", "Python"],
    tags: ["AASIST", "RawNet2", "Whisper", "Groq LLM", "Voice Forensics", "Cybersecurity"],
    teamSize: "Three-member team",
    eventContext: "Created for Hacktoberfest (concept previously explored for Smart India Hackathon / SIH)",
    githubUrl: "https://github.com/Pritpal-Singh-me/Infinite_Loops.git",
    highlights: [
      "Three-member team collaboration created for Hacktoberfest",
      "Built upon foundational concept previously explored for Smart India Hackathon (SIH)",
      "Personal Contribution: In-depth research and technology/library selection",
      "Acoustic stack utilizes AASIST & RawNet2 for raw waveform anti-spoofing",
      "Transcription powered by Whisper with ultra-fast scam intent analysis using Groq LLM",
      "Working code exists and is verified in repository; production deployment is pending"
    ],
    details: `Infinite Loops is an open-source cybersecurity pipeline designed to detect voice-cloning fraud. Developed by a three-member team for Hacktoberfest (following initial concept explorations for SIH), Girish's primary contribution was conducting the technical research and library selection that established the system architecture.

The technical stack incorporates:
• AASIST (Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks)
• RawNet2 for deep raw waveform feature representation
• OpenAI Whisper for speech transcription
• Groq LLM for real-time natural language scam heuristic detection.

The working codebase is complete on GitHub, with live cloud deployment currently pending.`,
    stats: {
      team: "3 Members",
      role: "Research & Tech Selection",
      initiative: "Hacktoberfest (SIH concept)",
      currentStatus: "Working code exists; deployment pending"
    }
  },
  {
    id: "interactive-portfolio",
    sectionId: "projects",
    title: "Interactive Personal Portfolio",
    shortDescription: "A virtual 3D museum experience built with Antigravity IDE, transforming achievements and learning journey into interactive exhibits.",
    status: "In progress",
    statusType: "progress",
    color: "#8b5cf6",
    purpose: "To showcase projects, achievements, verified WorldQuant certifications, and an honest learning journey inside an engaging, interactive 3D spatial museum.",
    myRole: "Creator & Developer — Conceptualized, designed, and programmed the virtual museum using Antigravity IDE with modular React Three Fiber components.",
    technologyStack: ["Antigravity IDE", "React 18", "Three.js", "React Three Fiber", "Vite"],
    tags: ["Antigravity IDE", "React", "Three.js", "React Three Fiber", "Spatial Web"],
    disclaimer: null,
    githubUrl: null, // Local development in progress
    highlights: [
      "Built and structured using Antigravity IDE",
      "Immersive 3D museum space featuring custom interactive geometry and pedestals",
      "Local rule-based Museum Guide assistant with transparent AI-ready architecture",
      "Full 2D accessible fallback for universal device support",
      "Curated learning exhibits reflecting real progress without inflated claims"
    ],
    details: `Rather than a standard portfolio website, this project realizes 'The Learning Museum' — a futuristic virtual rotunda celebrating both shipped work and active learning areas. Developed using Antigravity IDE, the application pairs Three.js spatial scenes with high-contrast readable modals, camera interpolation, and an offline rule-based tour guide.`,
    stats: {
      builtWith: "Antigravity IDE",
      architecture: "React + R3F + Vite",
      currentStatus: "In progress",
      version: "First Working Release"
    }
  },

  // --- ACHIEVEMENT HALL ---
  {
    id: "wq-bronze",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Bronze Certification",
    shortDescription: "Awarded for foundational algorithmic signal generation, market modeling, and quantitative factor creation.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Quantitative Finance", "Alpha Design", "Market Modeling"],
    color: "#cd7f32", // Bronze
    highlights: [
      "Developed and backtested financial alpha factors using statistical heuristics",
      "Demonstrated quantitative intuition on real-world equity simulation platforms",
      "Official certificate issued by WorldQuant BRAIN",
    ],
    imagePlaceholder: "Certificate Image Placeholder — Available on WorldQuant BRAIN portal (Upload scan ready)",
    details: `Earned on WorldQuant BRAIN by creating, testing, and validating mathematical alpha models against historical market datasets. Reflects early proficiency in mathematical formulations of market behavior, Sharpe ratio optimization, and quantitative risk management.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Bronze Tier",
      domain: "Quantitative Research & Alpha Modeling"
    }
  },
  {
    id: "wq-silver",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Silver Certification",
    shortDescription: "Intermediate quantitative research credential demonstrating multi-factor synthesis and improved alpha consistency.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Statistical Arbitrage", "Alpha Factory", "Factor Investing"],
    color: "#94a3b8", // Silver
    highlights: [
      "Iterated advanced multi-operator alphas reducing turnover and drawdown",
      "Expanded quantitative toolkit across diverse industry sectors and delays",
      "Official certificate issued by WorldQuant BRAIN",
    ],
    imagePlaceholder: "Certificate Image Placeholder — Available on WorldQuant BRAIN portal (Upload scan ready)",
    details: `Signifies progression in developing robust mathematical alphas capable of clearing rigorous correlation thresholds and statistical hurdles on the WorldQuant BRAIN simulation platform.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Silver Tier",
      domain: "Quantitative Research & Alpha Optimization"
    }
  },
  {
    id: "wq-gold-challenge",
    sectionId: "achievements",
    title: "WorldQuant BRAIN Challenge Gold Level Certificate",
    shortDescription: "High-tier challenge achievement recognizing competitive quantitative alpha development and competitive ranking.",
    status: "Verified Credential",
    statusType: "certified",
    tags: ["WorldQuant BRAIN", "Global Challenge", "Gold Level", "Algorithmic Research"],
    color: "#f59e0b", // Gold
    highlights: [
      "Gold Level distinction achieved during competitive WorldQuant BRAIN Challenge",
      "Rigorous portfolio evaluation spanning statistical significance and low cross-alpha correlation",
      "Official certificate issued by WorldQuant BRAIN",
    ],
    imagePlaceholder: "Certificate Image Placeholder — Available on WorldQuant BRAIN portal (Upload scan ready)",
    details: `Awarded during the competitive WorldQuant BRAIN Challenge for qualifying alphas that demonstrated high information ratios, robust turnover management, and statistical durability across changing market regimes.`,
    stats: {
      issuer: "WorldQuant BRAIN",
      level: "Challenge Gold Level",
      domain: "Competitive Quantitative Research"
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
    highlights: [
      "Engaging with fellow members on emerging technology and student projects",
      "Participating in collaborative learning circles and shared peer problem-solving",
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
    highlights: [
      "Contributing to entrepreneurship initiatives, speaker sessions, and pitch environments",
      "Learning venture mechanics, market validation, and startup fundamentals alongside peers",
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
    response: "MedSaathi is Girish's Python & Streamlit AI Medicine Safety Checker. It offers photo uploads, multilingual guidance, and custom health context. Please remember it is an experimental learning project, not medical advice!",
    actionSection: "projects",
    targetExhibit: "medsaathi"
  },
  {
    keywords: ["infinite loops", "voice", "clone", "scam", "deepfake", "hacktoberfest", "sih", "audio"],
    response: "Infinite Loops is a 3-member team project created for Hacktoberfest (based on concepts explored for SIH). Girish conducted the core research and technology selection, incorporating AASIST, RawNet2, Whisper, and Groq LLM to detect deepfake voice scams. The code is working on GitHub!",
    actionSection: "projects",
    targetExhibit: "infinite-loops"
  },
  {
    keywords: ["portfolio", "antigravity", "museum", "virtual", "3d", "spatial"],
    response: "The Interactive Personal Portfolio is built using Antigravity IDE! It transforms this entire space into a 3D virtual museum with real-time lighting, interactive pedestals, and an offline guide assistant. It is currently in progress.",
    actionSection: "projects",
    targetExhibit: "interactive-portfolio"
  },
  {
    keywords: ["worldquant", "brain", "certificate", "bronze", "silver", "gold", "quant"],
    response: "In the Achievement Hall, Girish holds three verified WorldQuant BRAIN credentials: Bronze, Silver, and the Challenge Gold Level Certificate. Placeholders are prepared for official image scans.",
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
    response: "In the Community Wing, you can see Girish's active involvement as a member of Minds Club and the E-Cell at Newton School of Technology.",
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

