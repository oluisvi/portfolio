# Luis Henrique Vieira — Personal Portfolio

Premium portfolio redesign focused on **Front-End craft, Full Stack engineering and AI-assisted development**.

## Direction

The visual system follows an **Editorial Creative Engineer** direction: Obsidian / Ivory / Ember palette, oversized typography, technical mono labels, product-specific visual previews, restrained motion and a responsive layout that changes composition rather than simply shrinking.

## Featured work

- FlowDesk — operations workspace + visual automation
- Atlas Finance AI — personal finance product
- SHOP.CO — editorial full-stack commerce
- ServAgency — technology agency platform

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    Header.tsx
    HeroSection.tsx
    ProjectsSection.tsx
    ProjectPreview.tsx
    ProcessSection.tsx
    StackSection.tsx
    AboutSection.tsx
    ContactSection.tsx
    Reveal.tsx
    SectionHeading.tsx
  data/
    portfolio.ts
  App.tsx
  main.tsx
  styles.css
public/
  favicon.svg
  og-card.svg
  robots.txt
  sitemap.xml
  site.webmanifest
docs/
  design/concept-reference.png
  superpowers/specs/
  superpowers/plans/
```

## Main design tokens

```css
--bg: #09090b;
--bg-elevated: #111317;
--surface: #171a20;
--text: #f5f1e8;
--muted: #aaa49a;
--subtle: #7e7a73;
--border: #262a31;
--accent: #ff7a1a;
--accent-2: #ff9b4a;
```

## Notes

The visual project previews are intentionally code-native compositions rather than fake screenshots or third-party stock images. Each preview reflects the product category and links directly to the real deployed project and repository.

Canonical portfolio URL: <https://oluisviportfolio.vercel.app/>
