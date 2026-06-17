export type ProjectMedia =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string };

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  /**
   * Media shown in the showcase + detail view.
   *
   * NOTE: The two walkthrough videos are NOT committed to the repo (they only
   * live on the local "Project Media" folder). Drop the .mp4 files into
   * `public/projects/` using the exact filenames referenced below and they will
   * appear automatically. Until then the panels gracefully show a poster /
   * gradient placeholder.
   */
  media: ProjectMedia;
  summary: string;
  tech: string[];
  bullets: string[];
  metrics?: ProjectMetric[];
  // UPDATE these hrefs with your real repo / store / notebook URLs.
  links: ProjectLink[];
  accent: string;
}

export const projects: Project[] = [
  {
    id: "real-estate-valuation-engine",
    index: "01",
    title: "Real Estate Valuation Engine",
    tagline: "5-year hyper-local property valuations & rental yields across U.S. zip codes.",
    year: "2025",
    role: "ML Pipeline · Forecasting · Full-Stack",
    media: {
      type: "video",
      src: "/projects/real-estate-valuation-engine.mp4",
      poster: "/projects/skillsync.png",
    },
    summary:
      "An end-to-end machine learning pipeline and forecasting platform that predicts long-horizon, hyper-local property valuations by fusing macroeconomic, demographic, and live housing signals.",
    tech: ["Python", "Prophet", "XGBoost", "Pandas", "NumPy", "FastAPI", "Next.js", "TypeScript", "Recharts", "SQLite"],
    bullets: [
      "Engineered a fault-tolerant ETL ingestion layer with SQLite caching and exponential backoff to dynamically fuse FRED macro indicators, Census ACS spatial demographics, and real-time housing APIs.",
      "Developed a hybrid time-series architecture — Prophet for seasonal macro baselines and tree-based XGBoost regressors for hyper-local residual anomalies — producing trajectories with mathematically derived confidence intervals.",
      "Deployed inference via a low-latency FastAPI endpoint featuring deterministic fallback generation for keyless offline testing.",
      "Served predictions to a Next.js / TypeScript dashboard using Recharts for high-fidelity financial visualization.",
    ],
    metrics: [
      { label: "Forecast Horizon", value: "5 yr" },
      { label: "Data Sources Fused", value: "3+" },
      { label: "Coverage", value: "U.S. Zips" },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/rudrapatel8" }],
    accent: "#6366f1",
  },
  {
    id: "semantic-code-search-engine",
    index: "02",
    title: "Semantic Code Search Engine",
    tagline: "Privacy-first, on-device natural language search across large local codebases.",
    year: "2025",
    role: "ML · MLOps · Backend",
    media: {
      type: "video",
      src: "/projects/semantic-code-search-engine.mp4",
      poster: "/projects/skillsync.png",
    },
    summary:
      "A privacy-first semantic search engine that lets you query large codebases in natural language — entirely on-device, with zero cloud dependency.",
    tech: ["Python", "SentenceTransformers", "FAISS", "Tree-sitter", "HuggingFace", "FastAPI"],
    bullets: [
      "Built natural language querying across large-scale local codebases using HuggingFace SentenceTransformers and FAISS for high-dimensional vector retrieval.",
      "Implemented Abstract Syntax Tree (AST) parsing via Tree-sitter to structurally chunk source across 8+ languages, maximizing context retention for embeddings.",
      "Designed an automated end-to-end local MLOps workflow handling source-aware indexing, embedding generation, and rapid cosine-similarity ranking with strict code privacy.",
      "Architected a FastAPI backend for dynamic query suggestions and snippet ranking, backed by an automated suite validating parsing accuracy, embedding latency, and FAISS retrieval performance.",
    ],
    metrics: [
      { label: "Languages Parsed", value: "8+" },
      { label: "Cloud Dependency", value: "Zero" },
      { label: "Index", value: "On-device" },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/rudrapatel8" }],
    accent: "#22d3ee",
  },
  {
    id: "brain-tumor-mri",
    index: "03",
    title: "Brain Tumor MRI Detection",
    tagline: "Multi-class neurological tumor classification from 2D MRI scans.",
    year: "2024",
    role: "Computer Vision · Deep Learning",
    media: { type: "image", src: "/projects/brain-tumor-mri.png" },
    summary:
      "An end-to-end computer vision pipeline classifying gliomas, meningiomas, and pituitary tumors against healthy controls from standardized 2D MRI scans.",
    tech: ["Python", "TensorFlow / Keras", "Conv2D", "NumPy", "scikit-learn"],
    bullets: [
      "Architected and trained a custom multi-layer CNN (Conv2D, MaxPooling, Dropout) with categorical cross-entropy and the Adam optimizer to curb overfitting and optimize feature extraction.",
      "Engineered the preprocessing workflow — dynamic resizing, one-hot encoding, and stratified train/test splitting — for robust generalization across varied visual inputs.",
      "Evaluated with rigorous statistical metrics across distinct tumor morphologies.",
    ],
    metrics: [
      { label: "Peak Val. Accuracy", value: "93.38%" },
      { label: "Tumor Classes", value: "3 + control" },
    ],
    links: [{ label: "Kaggle Notebook", href: "https://www.kaggle.com/" }],
    accent: "#a855f7",
  },
  {
    id: "stock-market-learning-platform",
    index: "04",
    title: "Stock Market Learning Platform",
    tagline: "A full-stack platform teaching quantitative finance fundamentals.",
    year: "2024",
    role: "Full-Stack · Data Viz",
    media: { type: "image", src: "/projects/skillsync.png" },
    summary:
      "A full-stack educational platform for quantitative finance basics — integrating external financial APIs to parse and render real-time and historical market data.",
    tech: ["JavaScript", "Chart.js", "Node.js", "MongoDB", "JWT"],
    bullets: [
      "Integrated external financial APIs to parse and render real-time and historical market data.",
      "Implemented high-fidelity data visualization using Chart.js to interactively map complex time-series stock trajectories.",
      "Designed a secure backend with JWT authentication and MongoDB NoSQL schemas to manage user sessions and track structured learning progressions.",
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/rudrapatel8" }],
    accent: "#34d399",
  },
  {
    id: "reccs",
    index: "05",
    title: "Reccs",
    tagline: "AI-powered, multi-category recommendation social app.",
    year: "2025",
    role: "Mobile · Realtime Backend",
    media: { type: "image", src: "/projects/reccs.png" },
    summary:
      "A cross-platform mobile ecosystem focused on personalized, multi-category recommendations spanning media, food, and lifestyle.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Cloud Functions", "Firestore"],
    bullets: [
      "Building a cross-platform mobile ecosystem with React Native and Redux Toolkit for personalized multi-category recommendations.",
      "Architected a scalable, real-time backend with Firebase Cloud Functions and Firestore for highly concurrent user schemas and live chat synchronization.",
      "Engineered custom social-graph features — category-specific group routing and creator channels — optimizing global state for seamless cross-platform performance.",
    ],
    links: [{ label: "Coming Soon", href: "#" }],
    accent: "#f472b6",
  },
  {
    id: "samurai-focus",
    index: "06",
    title: "Samurai Focus",
    tagline: "An event-driven Pomodoro productivity Chrome extension.",
    year: "2024",
    role: "Browser Extension · UX",
    media: { type: "image", src: "/projects/samuraifocus.png" },
    summary:
      "An event-driven browser extension delivering a custom-themed Pomodoro productivity tracker with procedurally generated ambient soundscapes.",
    tech: ["JavaScript", "Chrome Storage API", "Web Audio API", "CSS"],
    bullets: [
      "Engineered an event-driven extension using JavaScript and the Chrome Storage API for persistent state across dynamic sessions.",
      "Integrated the Web Audio API to procedurally generate ambient soundscapes with minimal latency and memory overhead while running in the background.",
      "Designed a responsive, custom-themed UI with modular CSS for a tailored Pomodoro tracking experience.",
    ],
    links: [
      { label: "GitHub Repository", href: "https://github.com/rudrapatel8" },
      { label: "Chrome Web Store", href: "#" },
    ],
    accent: "#fbbf24",
  },
];
