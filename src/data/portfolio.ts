export type ProjectKind = "flowdesk" | "atlas" | "shopco" | "servagency";

export type Project = {
  number: string;
  title: string;
  kind: ProjectKind;
  category: string;
  summary: string;
  detail: string;
  stack: string[];
  live: string;
  repo: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "FlowDesk",
    kind: "flowdesk",
    category: "B2B SaaS · Operations · Automation",
    summary:
      "A multi-tenant operations workspace for clients, projects, tasks, collaboration and visual workflow automation.",
    detail:
      "Built as a production-oriented product with tenant-scoped authorization, durable workflow execution, a queue-backed worker and a responsive workspace experience.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis / BullMQ", "React Flow"],
    live: "https://flowdeskwebapp.vercel.app/",
    repo: "https://github.com/oluisvi/FlowDesk",
  },
  {
    number: "02",
    title: "Atlas Finance AI",
    kind: "atlas",
    category: "Fintech · Data · Product Engineering",
    summary:
      "A full-stack personal finance platform designed to turn financial records into understandable, actionable decisions.",
    detail:
      "The product connects accounts, transactions, budgets, goals, financial health, reports and deterministic insights with explicit domain and security rules.",
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://atlas-finance-web.onrender.com/",
    repo: "https://github.com/oluisvi/atlas-finance-ai",
  },
  {
    number: "03",
    title: "SHOP.CO",
    kind: "shopco",
    category: "Commerce · 3D · Editorial Front-End",
    summary:
      "A fashion commerce experience evolved from a visual storefront into a full-stack product with real commerce behavior.",
    detail:
      "Editorial art direction and interactive 3D meet a persistent catalog, server-authoritative inventory, accounts, checkout and seller workflows.",
    stack: ["Next.js", "React", "Three.js", "NestJS", "Stripe"],
    live: "https://shop-co-store.vercel.app/",
    repo: "https://github.com/oluisvi/shop-co-ecommerce",
  },
  {
    number: "04",
    title: "ServAgency",
    kind: "servagency",
    category: "Agency · Strategy · Web Experience",
    summary:
      "A digital agency platform that connects technology, design and strategy around real business problems.",
    detail:
      "The site combines positioning, service architecture, projects, SEO, accessibility and conversion in a polished one-page product experience.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    live: "https://servagency.vercel.app/",
    repo: "https://github.com/oluisvi/ServAgency",
  },
];

export const process = [
  {
    number: "01",
    title: "Understand",
    text: "Map the problem, users, constraints and what success actually means before choosing tools.",
  },
  {
    number: "02",
    title: "Design the system",
    text: "Define information architecture, product flows, visual direction and technical boundaries together.",
  },
  {
    number: "03",
    title: "Build & iterate",
    text: "Implement in small, verifiable slices and use AI-assisted workflows to compress research and iteration.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Test behavior, responsiveness, accessibility, performance and the real end-to-end experience.",
  },
  {
    number: "05",
    title: "Ship & improve",
    text: "Deploy, observe what changed and keep refining the product instead of treating launch as the finish line.",
  },
];

export const stackGroups = [
  {
    title: "Interfaces",
    eyebrow: "Front-End",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "React Flow",
    ],
  },
  {
    title: "Systems",
    eyebrow: "Back-End & Data",
    technologies: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Redis / BullMQ",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    title: "Delivery",
    eyebrow: "Cloud & Tooling",
    technologies: [
      "AWS",
      "Supabase",
      "Vercel",
      "Render",
      "Git / GitHub",
      "TanStack Query",
      "Zod",
      "Figma",
    ],
  },
];

export const experience = [
  {
    period: "2026 — now",
    role: "IT Support Intern · English",
    company: "Kaffa Tecnologia",
    description:
      "Technical support in the energy sector, validating environments, handling incidents, documentation and operational routines in English.",
  },
  {
    period: "2025 — now",
    role: "Technology & English Teacher",
    company: "DiscoverON",
    description:
      "Teaching technology, programming concepts and English to different age groups, translating technical ideas into clear explanations.",
  },
  {
    period: "2025 — now",
    role: "Volunteer Front-End Developer",
    company: "Frontend Fusion",
    description:
      "Collaborative front-end work in a Scrum environment, contributing to interfaces, implementation and product iteration.",
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Web Development Intern",
    company: "Compass UOL",
    description:
      "Worked with React, Next.js, Node.js, REST APIs, relational databases, AWS and agile product delivery.",
  },
];

export const archiveProjects = [
  {
    title: "One Day With",
    category: "Creator Portfolio",
    href: "https://onedaywith.vercel.app/",
  },
  {
    title: "Brucan Bakery",
    category: "Local Business Website",
    href: "https://brucan-bakery.vercel.app/",
  },
  {
    title: "EcoEduca",
    category: "Education Platform",
    href: "https://ecoeduca.onrender.com/",
  },
];
