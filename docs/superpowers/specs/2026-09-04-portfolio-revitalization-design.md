# Personal Portfolio Revitalization — Design Spec

## Goal

Reposition the portfolio as a premium creative-developer/product-engineering experience that reflects Luis Henrique Vieira's current work: strong Front-End craft, Full Stack context and deliberate AI-assisted development.

## Creative direction

**Editorial Creative Engineer** — dark technical canvas, oversized typography, asymmetric composition, restrained signal-orange accents, open layouts and product-specific visual systems. The interface should feel closer to a high-end digital studio than a generic developer template.

### Palette

- Obsidian background: `#09090B`
- Elevated background: `#111317`
- Surface: `#171A20`
- Ivory text: `#F5F1E8`
- Muted text: `#AAA49A`
- Subtle text: `#7E7A73`
- Technical border: `#262A31`
- Ember accent: `#FF7A1A`
- Warm accent hover: `#FF9B4A`

### Typography

- Display/body: Inter Tight
- Technical labels: DM Mono
- Large display headings should carry the visual identity; small mono labels provide engineering texture.

## Information architecture

1. Fixed navigation
2. Hero / positioning
3. Selected Work
4. Project archive
5. How I Build
6. Technology
7. About + experience
8. Contact + footer

## Project hierarchy

Primary projects:

1. FlowDesk
2. Atlas Finance AI
3. SHOP.CO
4. ServAgency

Secondary archive:

- One Day With
- Brucan Bakery
- EcoEduca

Primary work must not look like repeated cards. Each project gets a distinct code-native visual preview while sharing the same framing system.

## Motion

- Entry reveals use short vertical travel and opacity.
- Hero signal object moves subtly with scroll on capable devices.
- Project media lifts slightly on hover.
- Mobile must not depend on hover.
- `prefers-reduced-motion` disables non-essential animation.

## Responsive principles

Mobile is re-articulated rather than merely scaled:

- nav becomes a full-screen editorial menu;
- hero becomes one-column with a reduced signal graphic;
- project rows become stacked cases;
- process becomes vertical;
- stack groups become sequential;
- experience timeline becomes one-column.

## Content principles

- No invented performance metrics.
- No fake client outcomes.
- Avoid stale counters such as "5+ technologies".
- Show real technologies and real project links.
- AI-assisted development is positioned as an engineering workflow accelerator, not a substitute for fundamentals.

## Quality requirements

- semantic HTML and visible focus;
- skip link and accessible labels;
- responsive from 320px upward;
- no horizontal overflow;
- strong contrast;
- SEO metadata, canonical, Open Graph, sitemap and robots;
- current portfolio URL remains `https://oluisviportfolio.vercel.app/`.
