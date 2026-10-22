export const personalInfo = {
  name: "Arnav Nisal",
  title: "Machine Learning & Software Developer",
  tagline: "Specializing in cross-platform mobile development, computer vision, and edge AI.",
  bio: "19-year-old B.Tech Computer Science and Engineering student at DES Pune University. Building intelligent systems across cross-platform mobile runtimes (Expo, React Native, Flutter), quantized neural networks, and edge systems.",
  location: "Pune, India",
  status: "Available for Software & Edge AI Roles",
  email: "arnavnisal@gmail.com",
  socials: {
    github: "https://github.com/arnav-nisal",
    linkedin: "https://linkedin.com/in/arnav-nisal",
    email: "mailto:arnavnisal@gmail.com",
  },
  stats: [
    { label: "Target Architecture", value: "Edge AI & Mobile" },
    { label: "Conference Paper", value: "ISLH 2026 Co-Author" },
    { label: "Hackathon Win", value: "HackForge 2026 Winner" },
    { label: "Work Experience", value: "Manman Mfg (Frontend)" },
  ]
};

export const aboutHighlights = [
  {
    title: "Edge AI & Quantization",
    description: "Compressing and deploying neural architectures (YOLOv11-seg, TFLite INT8) directly on mobile devices without sacrificing inference accuracy.",
    badge: "Quantized Inference"
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "Building production-ready client applications using Expo, React Native, and Flutter, integrated with WebAssembly modules for real-time compute.",
    badge: "Expo / Native"
  },
  {
    title: "Agentic Systems & APIs",
    description: "Engineering asynchronous multi-agent coordination pipelines and triage backends using Python, FastAPI, and Google Gemini APIs.",
    badge: "Multi-Agent"
  }
];

export const experienceData = [
  {
    role: "Frontend Software Engineering Intern",
    company: "Manman Manufacturing",
    period: "2025 (1 Year Ago)",
    type: "Internship",
    description: "Worked on frontend software engineering and internal web applications for manufacturing operations, building responsive user interfaces and client-side systems.",
    technologies: ["Frontend Engineering", "React", "TypeScript", "Web Applications"]
  },
  {
    role: "B.Tech Computer Science and Engineering",
    company: "DES Pune University",
    period: "Undergraduate (Current)",
    type: "Education",
    description: "19-year-old CSE undergraduate focusing on cross-platform systems, machine learning, computer vision, and software engineering.",
    technologies: ["Data Structures & Algorithms", "Computer Vision", "Machine Learning", "Operating Systems"]
  }
];

export const projectsData = [
  {
    id: "retiq",
    title: "RetiQ",
    tagline: "Smartphone-based reticulocyte enumeration via quantized computer vision",
    category: "Edge AI & Healthcare",
    award: "ISLH 2026 Travel Award (Presenting Author)",
    awardNote: "Co-authored research paper; Berend Houwen Travel Award awarded to presenting author at ISLH 2026",
    description: "An automated health-tech mobile application using Flutter and quantized neural networks (YOLOv11-seg / TFLite) for smartphone-based reticulocyte enumeration.",
    highlights: [
      "Quantized YOLOv11-seg architecture to TFLite for real-time sub-second segmentation on resource-constrained mobile chipsets.",
      "Built native camera pipeline in Flutter ensuring sub-micron cellular resolution capture under portable optical microscopes.",
      "Co-authored peer-reviewed research paper; Berend Houwen Travel Award was awarded to the project's presenting author (father) at ISLH 2026."
    ],
    techStack: ["Flutter", "YOLOv11-seg", "TensorFlow Lite", "Python", "Computer Vision"],
    githubUrl: null,
    featured: true
  },
  {
    id: "the-trust-juggler",
    title: "The Trust Juggler",
    tagline: "Real-time identity verification engine against delivery account sharing",
    category: "Identity & Biometrics",
    award: "Winner — Intermediate Track @ HackForge 2026",
    awardNote: "Winner — Intermediate Track at HackForge 2026",
    description: "A real-time identity engine for delivery account sharing detection built with Expo, React Native, WebAssembly, and voice biometrics.",
    highlights: [
      "Won 1st Place in the Intermediate Track at HackForge 2026 for identity verification innovation.",
      "Engineered with Expo & React Native for cross-platform delivery rider workflow, compiling verification kernels to WebAssembly.",
      "Continuous biometric authentication pipeline handling background audio sampling and tamper-proof cryptographic telemetry."
    ],
    techStack: ["Expo", "React Native", "WebAssembly", "Voice Biometrics", "TypeScript"],
    githubUrl: null,
    featured: true
  },
  {
    id: "agentx",
    title: "AgentX Disaster Coordinator",
    tagline: "Multi-agent autonomous triage & disaster relief pipeline",
    category: "Agentic Systems",
    award: "Kurukshetra 2.0",
    awardNote: "Engineered for Kurukshetra 2.0",
    description: "An agentic disaster relief monorepo featuring a FastAPI backend, Firebase, and a Google Gemini multi-agent triage pipeline.",
    highlights: [
      "Multi-agent triage system utilizing Google Gemini API for simultaneous SOS dispatch, resource allocation, and casualty sorting.",
      "Asynchronous FastAPI backend processing geospatial distress pings with sub-50ms queue ingestion.",
      "Real-time synchronized disaster dashboard powered by Firebase live collections and geospatial telemetry."
    ],
    techStack: ["FastAPI", "Firebase", "Google Gemini APIs", "Python", "Multi-Agent Systems"],
    githubUrl: null,
    featured: true
  }
];

export const skillsCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Expo / React Native", level: "Active Focus", desc: "Cross-platform mobile apps, native module bridges, Expo tooling" },
      { name: "React", level: "Production", desc: "SPA development, modern hooks, responsive component systems" },
      { name: "Flutter", level: "Production", desc: "Cross-platform mobile apps, native camera plugins, TFLite integration" },
      { name: "Python", level: "Core", desc: "Model quantization, PyTorch, FastAPI asynchronous APIs" },
      { name: "C/C++", level: "Core", desc: "Systems programming, performance-critical algorithms" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Minimalist responsive design systems and clean layouts" }
    ]
  },
  {
    category: "AI & ML",
    skills: [
      { name: "Computer Vision", level: "Specialist", desc: "YOLOv11-seg, Mask R-CNN, segmentation, cellular imaging" },
      { name: "TensorFlow Lite", level: "Specialist", desc: "Mobile neural inference, INT8 quantization, edge deployment" },
      { name: "Local LLM Deployment", level: "Advanced", desc: "GGUF quantization, node-llama-cpp, on-device compute" },
      { name: "Google Gemini APIs", level: "Advanced", desc: "Agentic pipelines, multi-modal reasoning, structured outputs" }
    ]
  },
  {
    category: "Systems & Backend",
    skills: [
      { name: "WebAssembly (Wasm)", level: "Production", desc: "Compiling native biometric kernels for high-speed client execution" },
      { name: "Linux (Arch / Bazzite)", level: "Systems", desc: "Kernel tuning, package maintenance, daily driver dev workflow" },
      { name: "Firebase", level: "Backend", desc: "Real-time databases, Firestore, serverless authentication" },
      { name: "FastAPI", level: "Backend", desc: "High-performance asynchronous REST endpoints, Pydantic data modeling" }
    ]
  }
];
