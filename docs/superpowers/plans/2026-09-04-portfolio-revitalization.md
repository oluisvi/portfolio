# Portfolio Revitalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing portfolio presentation with a premium editorial creative-developer experience that accurately reflects the current project portfolio, stack, work process and experience.

**Architecture:** Keep the application a lightweight Vite + React + TypeScript single-page portfolio. Centralize professional/project content in `src/data/portfolio.ts`; keep each major page region as a focused React component; implement the full visual system in shared CSS variables and responsive rules rather than adding a large UI framework.

**Tech Stack:** React 18, TypeScript 5, Vite 5, Framer Motion, Lucide React, CSS

**Spec:** `docs/superpowers/specs/2026-09-04-portfolio-revitalization-design.md`

## Global Constraints

- Use palette values from the design spec exactly.
- Preserve `https://oluisviportfolio.vercel.app/` as canonical portfolio URL.
- Primary work is FlowDesk, Atlas Finance AI, SHOP.CO and ServAgency.
- Do not invent metrics, employers, outcomes or functionality.
- Respect `prefers-reduced-motion`.
- Mobile layout must be re-articulated, not only scaled.
- No large component-library dependency is required.

---

### Task 1: Application foundation and metadata

**Files:** `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`, `public/*`, `src/main.tsx`, `src/App.tsx`

- [x] Configure React/Vite/TypeScript dependencies and scripts.
- [x] Add canonical, Open Graph, Twitter and Person JSON-LD metadata.
- [x] Add favicon, manifest, robots and sitemap.
- [x] Compose semantic page sections in `App.tsx`.

### Task 2: Centralized professional content

**Files:** `src/data/portfolio.ts`

- [x] Define typed primary-project data with live and repository URLs.
- [x] Define process, stack, experience and archive content.
- [x] Remove stale project hierarchy and generic counters.

### Task 3: Navigation and hero

**Files:** `src/components/Header.tsx`, `src/components/HeroSection.tsx`, `src/styles.css`

- [x] Build fixed responsive navigation with accessible mobile menu.
- [x] Build oversized Software Developer positioning.
- [x] Add code-native signal graphic rather than an unrelated portrait or stock asset.
- [x] Add selected-work and GitHub CTAs.

### Task 4: Selected work system

**Files:** `src/components/ProjectsSection.tsx`, `src/components/ProjectPreview.tsx`, `src/styles.css`

- [x] Build alternating editorial case-study rows.
- [x] Create distinct FlowDesk, Atlas, SHOP.CO and ServAgency preview systems.
- [x] Add live/source actions and truthful technology labels.
- [x] Add secondary project archive.

### Task 5: Process, stack and about

**Files:** `src/components/ProcessSection.tsx`, `src/components/StackSection.tsx`, `src/components/AboutSection.tsx`, `src/styles.css`

- [x] Build desktop horizontal/mobile vertical process rail.
- [x] Explain AI-assisted workflow without marketing claims.
- [x] Present stack as grouped engineering capabilities rather than badge clutter.
- [x] Add current professional story and experience timeline.

### Task 6: Contact and responsive polish

**Files:** `src/components/ContactSection.tsx`, `src/styles.css`

- [x] Build large final CTA and social actions.
- [x] Add footer and back-to-top behavior.
- [x] Add breakpoints for large desktop, tablet and phone.
- [x] Add reduced-motion behavior and focus-visible states.

### Task 7: Verification and handoff

**Files:** entire project

- [ ] Install dependencies with `npm install` in a network-enabled environment.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Run browser visual QA at desktop and 390px mobile.
- [ ] Compare rendered implementation against `docs/design/concept-reference.png` for hierarchy, palette, project treatment, typography, spacing and motion intent.
