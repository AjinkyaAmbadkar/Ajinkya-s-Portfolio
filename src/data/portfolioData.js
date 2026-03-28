/**
 * portfolioData.js
 * ─────────────────
 * Pure data layer — no React, no styling.
 * Edit your personal info, skills, experience, projects, education, and
 * contact details here. Every section component imports from this file.
 */

export const PROFILE = {
  name: "Ajinkya Ambadkar",
  tagline: "Software Engineer",
  headline: ["I build robust", "backend systems."],
  description:
    "Backend developer with 4 years of industry experience crafting scalable microservices and APIs. Currently pursuing a Master's degree to push deeper into distributed systems and software architecture.",
  about: [
    `Software Engineer with 4+ years of experience building high-throughput backend systems in fintech and banking. I've designed enterprise-grade microservices, API gateways, and event-driven architectures for major financial institutions — working primarily with Java, Spring Boot, C#, .NET, and cloud platforms like AWS and GCP.`,
    `Currently completing my M.S. in Computer Science at Indiana University Bloomington (graduating May 2026) and working as a Research Assistant. I'm seeking SDE/SWE roles where I can apply my production-tested backend expertise to challenging, large-scale systems.`,
  ],
  resumeUrl: "/Resume_Ajinkya_Ambadkar.pdf", // Place your resume file in the public folder
  stats: [
    { value: "4", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "MS", label: "Graduating May '26" },
  ],
  details: [
    { label: "Location", value: "🇺🇸 United States" },
    { label: "Experience", value: "4 Years" },
    { label: "Specialization", value: "Backend Systems" },
    { label: "Status", value: "Graduate Student" },
  ],
};

export const SKILLS = [
  {
    icon: "{}",
    title: "Languages",
    tags: [
      { name: "Java" },
      { name: "C#" },
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
    ],
  },
  {
    icon: "⚙",
    title: "Frameworks & Libraries",
    tags: [
      { name: "Spring Boot" },
      { name: ".NET Core" },
      { name: "Hibernate" },
      { name: "Entity Framework" },
      { name: "JUnit" },
      { name: "REST APIs" },
    ],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    tags: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "Jenkins" },
      { name: "Git" },
    ],
  },
  {
    icon: "🗄",
    title: "Databases",
    tags: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQL Server" },
    ],
  },
  {
    icon: "🧩",
    title: "Architecture & Patterns",
    tags: [
      { name: "Microservices" },
      { name: "REST" },
      { name: "GraphQL" },
      { name: "gRPC" },
      { name: "Event-Driven" },
      { name: "MVC" },
      { name: "Design Patterns" },
      { name: "SOLID" },
    ],
  },
  {
    icon: "</>",
    title: "Frontend",
    tags: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Angular" },
    ],
  },
];

export const EXPERIENCE = [
  {
    date: "June 2024 — Present",
    role: "Research Assistant",
    company: "Indiana University — Bloomington, IN",
    desc: [
      "Architecting data engineering pipelines using Python and Scikit-learn for large-scale patient care data for health monitoring processing across 1,000+ records",
      "Implemented automated ETL workflows that cut manual processing effort by 10+ hours per week",
      "Designed and deployed interactive data visualization dashboards for real-time analysis of patient health trends",
      "Established standardized data validation protocols that reduced data errors by 20% for publication-grade research outputs",
    ],
    tech: ["Python", "Scikit-learn", "ETL", "Data Visualization", "Data Validation"],
    current: true,
  },
  {
    date: "Aug 2023 — June 2024",
    role: "Software Engineer II",
    company: "FIS Solutions(India) Pvt. Ltd. — Pune, India",
    desc: [
      "Architected scalable API for Commercial Loan Application using .NET and C#, standardizing API contracts across 30+ microservices — reducing integration time by 40%",
      "Designed event-driven microservices with asynchronous messaging patterns, boosting end-to-end performance by 30%",
      "Optimized high-concurrency workloads handling 500+ requests/second, cutting API response times by 25% through caching strategies",
      "Modernized CI/CD pipelines achieving zero-downtime deployments and reducing release cycle time by 35%",
      "Developed deature in Windows application using WPF to reduce 40% of manual confugartion time",
      "Served as Scrum Master for an 8-member cross-functional team, ensuring 100% on-time delivery of roadmap features",
    ],
    tech: ["C#", ".NET", "SQL Server", "Entity Framework"],
  },
  {
    date: "Oct 2020 — Aug 2023",
    role: "Programmer Analyst",
    company: "Bitwise Solutions Pvt. Ltd. — Pune, India",
    desc: [
      "Architected and delivered 30+ enterprise-grade microservices using Spring Boot and Java for Banking and loan application",
      "Implemented event-driven architecture for dispute management application using GCP Pub/Sub and Kafka, processing 100K+ files daily while reducing downtime by 20%.",
      "Engineered microservices achieving 1,500 TPS for mission-critical student loan application APIs",
      "Strengthened API security with AES-256 encryption for prepaid card data ensuring zero data leakage during high-speed transmissions",
      "Served as primary technical point of contact during critical warranty support phases for revenue-generating APIs",
      "Awarded the Bitwise Excellence Award (August 2022) for delivering critical API enhancements and boosting system availability by 25%",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "Docker", "GCP"],
  },
];

export const PROJECTS = [
  {
    type: "Distributed System",
    title: "Distributed Chat Application",
    desc: "Built a fault-tolerant distributed chat application using Flask, Redis Pub/Sub, and ZooKeeper, deployed on Kubernetes. Implemented real-time leader election and service discovery to achieve 99.9% message delivery reliability. Orchestrated clustered message broadcasting across 4 pods with seamless failover during simulated peak traffic, ensuring high availability and low-latency communication.",
    tech: ["Flask", "Redis Pub/Sub", "ZooKeeper", "Kubernetes"],
    links: [
      { label: "GitHub", url: "https://github.com/ajinkyaambadkar/DistributedChatSystem" },
    ],
  },
  {
    type: "API Service",
    title: "IdeaGenie: AI Innovation Prioritization Platform",
    desc: "Developed an end-to-end innovation-ranking platform that automates technical idea evaluation based on ROI and implementation constraints. Built a Flask backend with a React frontend, exposing REST APIs following OpenAPI specifications. Integrated a custom AI prioritization engine by fine-tuning a local LLM via Ollama, implementing Chain-of-Thought reasoning to transparently rank the top 3 innovation ideas.",
    tech: ["Python", "Flask", "React", "Ollama", "OpenAPI"],
    links: [{ label: "GitHub", url: "https://github.com/ajinkyaambadkar/IdeaGeine" }],
  },
  {
    type: "Academic Project",
    title: "OpenAir: Flight Analytics Platform",
    desc: "Designed and built a full-stack flight analytics application with a React frontend and Python FastAPI backend, powered by MongoDB. Features include interactive flight data visualization with charts and statistics, full CRUD operations on flight records, and airport-level analytics dashboards. Built with an async architecture using Motor for non-blocking MongoDB queries, delivering a responsive aviation-themed UI for exploring and managing flight data.",
    tech: ["Python", "FastAPI", "MongoDB", "React"],
    links: [
      { label: "GitHub", url: "https://github.com/ajinkyaambadkar/OpenAir" },
    ],
  },
];

export const EDUCATION = [
  {
    status: "current",
    badge: "In Progress",
    degree: "Master of Science in Computer Science",
    school: "Indiana University, Bloomington — USA",
    date: "Aug 2024 — May 2026",
    gpa: "3.93/4.0",
  },
  {
    status: "completed",
    badge: "Completed",
    degree: "Bachelor of Engineering in Computer Science",
    school: "Sant Gadge Baba Amravati University — India",
    date: "Aug 2016 — Oct 2020",
    gpa: "9.19/10",
  },
];

export const CONTACTS = [
  {
    icon: "@",
    label: "Email",
    value: "ajambadk@gmail.com",
    url: "mailto:ajambadk@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/ajinkya-ambadkar",
    url: "https://www.linkedin.com/in/ajinkya-ambadkar/",
  },
  {
    icon: "</>",
    label: "GitHub",
    value: "github.com/AjinkyaAmbadkar",
    url: "https://github.com/AjinkyaAmbadkar",
  },
];
