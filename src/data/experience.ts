export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  org?: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
  metrics: ExperienceMetric[];
  accent: string;
}

export const experiences: Experience[] = [
  {
    company: "Rutgers BITS",
    org: "Business Information Technology Society",
    location: "New Brunswick, NJ",
    role: "Front End Software Developer",
    period: "Sep 2025 — Present",
    current: true,
    summary:
      "Building and optimizing the society's web platform and partner recruiting portals.",
    bullets: [
      "Used JavaScript, Tailwind CSS, and Vercel to optimize cross-browser rendering and the overall construction of the front end.",
      "Created automated NoSQL data models and relational content pipelines to manage high-volume event data and power partner recruiting portals.",
    ],
    tags: ["JavaScript", "Tailwind CSS", "Vercel", "NoSQL"],
    metrics: [
      { value: "+60%", label: "Web traffic" },
      { value: "-45%", label: "Latency" },
      { value: "-40%", label: "Manual effort" },
    ],
    accent: "#818cf8",
  },
  {
    company: "United Window & Door",
    location: "Springfield, NJ",
    role: "Software Engineering Intern",
    period: "Jun 2025 — Sep 2025",
    summary:
      "Built supply-chain logistics tooling and automation to remove operational bottlenecks.",
    bullets: [
      "Created a scalable shipping logistics tool in Node.js with MSSQL on AWS EC2, building REST APIs that dynamically serve 100+ route updates per day.",
      "Developed an automated data-validation pipeline with Nodemailer to detect and email-alert users about file-structure discrepancies, eliminating manual checking.",
      "Created a full-stack dynamic scheduling template system to optimize team organization across functional areas and improve internal resource allocation.",
    ],
    tags: ["Node.js", "MSSQL", "AWS EC2", "REST APIs", "Nodemailer"],
    metrics: [
      { value: "100+", label: "Route updates / day" },
      { value: "25 hrs", label: "Saved per week" },
    ],
    accent: "#22d3ee",
  },
  {
    company: "United Window & Door",
    location: "Springfield, NJ",
    role: "Software Engineering Intern",
    period: "Jun 2024 — Sep 2024",
    summary:
      "Delivered live analytics dashboards and modernized enterprise internal tooling.",
    bullets: [
      "Developed a live data-analysis dashboard with Next.js, Chart.js, and REST APIs to visualize client performance, enabling data-driven leadership decisions.",
      "Completed a redesign of enterprise internal tools and backend infrastructure with Node, improving UI/UX workflows across the company.",
    ],
    tags: ["Next.js", "Chart.js", "REST APIs", "Node.js"],
    metrics: [
      { value: "+15%", label: "Q3 revenue" },
      { value: "+40%", label: "Faster processes" },
      { value: "150+", label: "Employees served" },
    ],
    accent: "#f472b6",
  },
];
