# RITJI ISHAKU — PORTFOLIO WEBSITE
## AI Agent Build Instructions
### Version 3.1 | Clinical AI Automation Specialist
### Updated: April 2026

---

## 0. AGENT RULES — READ FIRST

These instructions are authoritative. Follow every rule exactly.
Do not deviate from the design system, copy, or structure defined here.
When in doubt, refer back to this document before making any decision.

- Framework: **Astro** with **Tailwind CSS**
- Deploy target: **Vercel**
- Page type: **Single-page portfolio website** (one HTML output)
- Language: **English**
- No backend. No database. No authentication. Static output only.
- Mobile-first. Every element must be designed for 375px first, then scaled up.

---

## 1. PROJECT IDENTITY

| Field | Value |
|---|---|
| Full name | Ritji Ishaku |
| Professional title | Clinical AI Automation Specialist |
| Tagline | Clinical intelligence. Built from experience. |
| Location | Nigeria — Available Worldwide, Remote |
| Primary CTA | Book a free 20-minute discovery call |
| CTA link | https://calendly.com/ritjiishaku |
| Email | ritjiishaku@gmail.com |
| GitHub | github.com/ritjiishaku |
| LinkedIn | linkedin.com/in/ritjiishaku |
| Domain | ritjiishaku.com |
| Meta title | Ritji Ishaku \| Clinical AI Automation Specialist |
| Meta description | I help health and wellness businesses save time and serve more patients through AI automations and intelligent digital systems — built by a certified AI engineer who has also worked in clinical care. |

---

## 2. VERIFIED CREDENTIALS — SOURCE OF TRUTH

These are Ritji's confirmed, certified qualifications. Every credential claim on the
website must be drawn from this list ONLY. Do not invent, embellish, or omit.

### 2.1 Clinical Background
- **Registered Nurse** — active practice since 2020 (5+ years)
- Deep knowledge of clinical workflows, patient care systems, and healthcare operations
- Firsthand experience of the manual processes and system failures in health facilities

### 2.2 AI Automation Engineering Certification
**Programme:** AI Automation Engineer — Build LLM Apps and AI Agents
**Duration:** 8 weeks (including 2-week Capstone Hackathon)
**Format:** Hands-on coding, real-world projects, final demo presentation

**Verified technical skills from curriculum:**

| Week | Area | Specific Skills Certified |
|---|---|---|
| 1 | Foundations | LLMs, AI agents, APIs (client–server), OpenAI API, function calling, vector databases, embeddings, RAG, prompt engineering |
| 2 | n8n & Workflows | n8n platform, triggers/actions/conditions, LLM integration, Flowise, cloud vs self-hosted, VPS deployment |
| 3 | RAG & Memory | RAG systems, ChromaDB, FAISS, document chunking & indexing, AI memory, context management, knowledge assistants |
| 4 | APIs & Agents | Multi-step automation, branching logic, API connections (Google Sheets, CRMs, Slack, Notion), auth & security, error handling |
| 5 | Multi-Agent Systems | Multi-agent architecture, role-based agents (Planner/Researcher/Coder/Reporter), LangGraph, CrewAI, task delegation |
| 6 | Deployment & Business | Streamlit, Gradio, Telegram, WhatsApp deployment, monitoring, monetisation models, client packaging, portfolio building |
| 7–8 | Capstone Hackathon | Full AI system architecture, LLM logic + memory + APIs + multi-agent workflows, deployed production solution, demo presentation |

**Verified tools and frameworks:**
`OpenAI API` · `n8n` · `Zapier` · `Make` · `Flowise` · `LangChain` · `LlamaIndex` · `CrewAI` · `LangGraph` · `ChromaDB` · `FAISS` · `Airtable` · `Streamlit` · `Gradio` · `Telegram Bot API` · `WhatsApp Business API`

**4 practical projects built during programme** (portfolio-ready)
**3-month post-programme mentorship** included

### 2.3 Additional Qualifications
- UX/UI Designer — trained in user experience and interface design
- Vibe Coding / Agentic Coding — currently in Week 4 of 6-week programme
- Software Engineering — learning alongside above programmes
- Certified: Building Automated Landing Pages for Business (conversion & ROI)
- Certified: Building MVPs using Agentic Coding
- Certified: Building AI Automations for Brands and Businesses

---

## 3. BRAND IDENTITY

### 3.1 Name Logo

The name **Ritji Ishaku** IS the logo. No graphic icon. No monogram. Typography only.

Rules:
- Always render full name: `Ritji Ishaku` — never abbreviated
- Always pair with title underneath: `Clinical AI Automation Specialist`
- Capitalisation is fixed: `Ritji Ishaku` — never ALL CAPS, never all lowercase
- On dark backgrounds: white name + blue accent line (2px, colour `#388BFD`, width 40px)
- On light backgrounds: navy name (`#0A2540`) + blue tagline (`#388BFD`)
- Minimum font size for name: 20px on any screen

### 3.2 Profile Photo

**Profile photo is NOT required and must NOT be used.**
Credibility is established through verified certifications, clinical credentials,
and typographic authority. Do not add a placeholder, avatar, or illustration
in place of a photo.

---

## 4. DESIGN SYSTEM

### 4.1 Colour Palette

```css
:root {
  /* ── Colour Scheme Lock ── */
  color-scheme: light only;
  /*
    IMPORTANT: This locks the entire website to light mode permanently.
    No dark mode. No OS-level colour inversion. No system preference override.
    The brand colours, contrast ratios, and visual identity are designed
    for light mode only and must render exactly as specified on every device.
  */

  /* Primary */
  --color-navy:        #0A2540;   /* Primary brand, hero backgrounds, headings */
  --color-blue:        #388BFD;   /* Accent, CTA buttons, links, highlights */
  --color-sky:         #B5D4F4;   /* Soft highlights, hover states, tags */

  /* Neutral */
  --color-white:       #F7F9FC;   /* Page background, light sections */
  --color-pure-white:  #FFFFFF;   /* Cards, elevated surfaces */
  --color-text-primary:#0A2540;   /* Body text on light backgrounds */
  --color-text-muted:  #64748B;   /* Subtext, captions, metadata */
  --color-border:      #E2E8F0;   /* Card borders, dividers */

  /* Semantic */
  --color-green:       #1D9E75;   /* Success states, health signal, checkmarks */
  --color-red-soft:    #D85A30;   /* Pain point cards, warning accents */

  /* Footer */
  --color-navy-deep:   #071C30;   /* Footer background — slightly darker than navy */
}
```

Usage rules:
- Navy (`#0A2540`): hero background, footer, navbar on scroll, section headings
- Blue (`#388BFD`): CTA buttons, accent lines, active states, pill tags, links
- Green (`#1D9E75`): trust signals, checkmarks, positive outcomes, answer cards
- Red-soft (`#D85A30`): pain point card left borders, question cards
- Never use pure black (`#000000`) anywhere on this site
- Never use purple, pink, or orange as primary or accent colours

---

### 4.2 Typography — Google Fonts

Import these two fonts. No others.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
```

#### Type Scale — Google Material Design 3

| Role | Font | Weight | Mobile Size | Desktop Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 700 | 32px | 52px | 1.15 | -0.01em |
| H2 | Playfair Display | 700 | 26px | 38px | 1.20 | -0.005em |
| H3 | Playfair Display | 400 | 20px | 26px | 1.30 | 0 |
| Body Large | DM Sans | 400 | 16px | 18px | 1.70 | 0 |
| Body | DM Sans | 400 | 14px | 16px | 1.65 | 0 |
| Label / Eyebrow | DM Sans | 500 | 10px | 11px | 1.40 | 0.14em |
| Button | DM Sans | 500 | 14px | 14px | 1.00 | 0.02em |
| Caption | DM Sans | 300 | 11px | 12px | 1.50 | 0.04em |
| Credential tag | DM Sans | 500 | 11px | 11px | 1.00 | 0.08em |

Rules:
- Playfair Display: headlines, name logo, display quotes ONLY
- DM Sans: ALL body text, labels, buttons, navigation, captions, tags, credentials
- Never mix fonts within a single UI component
- Eyebrow/label text: ALWAYS uppercase + letter-spaced
- Credential/tool tags: DM Sans 500, never Playfair Display

#### Font Fallback Stacks — REQUIRED

These fallback stacks must be declared on every font-family rule.
Google Fonts may fail to load in low-connectivity environments (including parts of Nigeria).
The fallback ensures layout and readability are preserved even without the webfont.

```css
/* Headlines — Playfair Display with serif fallbacks */
font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;

/* Body & UI — DM Sans with system sans-serif fallbacks */
font-family: 'DM Sans', 'Helvetica Neue', 'Arial', system-ui, sans-serif;
```

Apply to CSS custom properties:
```css
:root {
  --font-display: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
  --font-body:    'DM Sans', 'Helvetica Neue', 'Arial', system-ui, sans-serif;
}
```

#### Body Text Max-Width — REQUIRED

All body text paragraphs must have a max-width to prevent uncomfortable
line lengths on wide desktop screens. Long uncontrolled lines reduce
readability and increase bounce rate.

```css
/* Apply to all <p>, body text, and card text blocks */
.body-text {
  max-width: 65ch;   /* ~65 characters — optimal reading width per Google/WCAG */
}

/* Section-level content containers */
.section-content {
  max-width: 640px;  /* Hard cap for centred section text */
}

/* Hero body text — slightly wider for visual balance */
.hero-body {
  max-width: 540px;
}

/* Card body text — contained by card width, no explicit max-width needed */
```

Rule: Never let a paragraph stretch to full container width on desktop.
If a text block has no natural container constraint, apply `max-width: 65ch`.

---

### 4.3 Spacing System — Google Material Design 3 (4px base unit)

All spacing must be exact multiples of 4px. No exceptions.

```
4px   — xs    Tight internal padding, icon gaps, tag internal spacing
8px   — sm    Between label and content, small gaps, list item padding
12px  — md    Internal card padding (mobile), compact element spacing
16px  — lg    Internal card padding (desktop), paragraph gaps
24px  — xl    Between components within a section
32px  — 2xl   Between cards in a grid, large component gaps
48px  — 3xl   Section padding top/bottom (mobile)
64px  — 4xl   Section padding top/bottom (desktop)
80px  — 5xl   Hero section padding top (mobile)
120px — 6xl   Hero section padding top (desktop)
```

Section padding rules:
- All sections mobile: `padding: 48px 20px`
- All sections desktop: `padding: 80px 0`
- Hero mobile: `padding: 80px 20px 64px`
- Hero desktop: `padding: 120px 0 100px`
- CTA section mobile: `padding: 80px 20px`
- CTA section desktop: `padding: 120px 0`

Horizontal container rules:
- Mobile: `padding: 0 20px`
- Tablet (768px+): `padding: 0 32px`
- Desktop (1024px+): `max-width: 1100px; margin: 0 auto; padding: 0 32px`

---

### 4.4 Border & Radius System — Google Material Design 3

```css
/* Border Radius */
--radius-xs:   4px;     /* Tags, pills, small badges, credential chips */
--radius-sm:   8px;     /* Buttons, input fields, small cards */
--radius-md:   12px;    /* Standard cards, content blocks */
--radius-lg:   16px;    /* Feature cards, highlighted blocks */
--radius-xl:   24px;    /* Large hero elements */
--radius-full: 9999px;  /* Pill buttons, round tags */

/* Border Widths */
--border-thin:    0.5px solid #E2E8F0;              /* Card borders on white */
--border-light:   1px solid #E2E8F0;                /* Dividers, separators */
--border-accent:  2px solid #388BFD;                /* Accent decorators */
--border-pain:    3px solid #D85A30;                /* Pain point card left */
--border-service: 2px solid #388BFD;                /* Service card top */
--border-trust:   1px solid rgba(56,139,253,0.2);   /* On dark backgrounds */
--border-cred:    1px solid rgba(56,139,253,0.15);  /* Credential tags on white */
```

Card border rules:
- Cards on white/light sections: `border: var(--border-thin); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);`
- Cards on navy sections: `background: rgba(255,255,255,0.05); border: none; border-radius: var(--radius-md);`
- Pain point cards: `border-left: var(--border-pain); border-radius: 0 var(--radius-md) var(--radius-md) 0;`
- Service cards: `border-top: var(--border-service); border-radius: var(--radius-md);`
- Credential/tool chips: `border: var(--border-cred); border-radius: var(--radius-full);`

Shadow system:
```css
--shadow-xs: 0 1px 2px rgba(10,37,64,0.04);
--shadow-sm: 0 2px 8px rgba(10,37,64,0.06);
--shadow-md: 0 4px 16px rgba(10,37,64,0.08);
--shadow-lg: 0 8px 32px rgba(10,37,64,0.12);
```

---

### 4.5 Grid System

Mobile-first. Default = single column. Scale up at breakpoints.

```css
/* Pain point grid: 2 columns on ALL screen sizes */
.grid-pain {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

/* Service cards: 1 col mobile → 3 col desktop */
.grid-services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 768px) {
  .grid-services { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

/* Trust stats: 1 col mobile → 3 col desktop */
.grid-trust {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 768px) {
  .grid-trust { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

/* Credentials grid: 2 col mobile → 4 col desktop */
.grid-credentials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
@media (min-width: 768px) {
  .grid-credentials { grid-template-columns: repeat(4, 1fr); gap: 12px; }
}

/* Objection pairs: stacked mobile → 2 col desktop */
.grid-objections {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
@media (min-width: 768px) {
  .grid-objections { grid-template-columns: 1fr 1fr; gap: 12px; }
}
```

---

### 4.6 Buttons

```css
/* Primary CTA */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #388BFD;
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.02em;
  min-height: 48px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  background: #2176e8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(56,139,253,0.35);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}
.btn-primary:focus-visible {
  outline: 3px solid #B5D4F4;
  outline-offset: 2px;
}

/* Mobile: full width below 480px */
@media (max-width: 480px) {
  .btn-primary { width: 100%; justify-content: center; }
}

/* 
  NOTE: Booking buttons are implemented using the Calendly Popup Widget.
  Include: <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  Include: <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
  Triggered by calling Calendly.initPopupWidget({url: 'https://calendly.com/ritjiishaku'});
*/
```

---

### 4.7 Credential / Tool Chip Style

Used in the Credentials section only. Never used as a skills list elsewhere.

```css
.chip {
  display: inline-flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #388BFD;
  background: rgba(56,139,253,0.07);
  border: 1px solid rgba(56,139,253,0.18);
  border-radius: 9999px;
  padding: 4px 12px;
  white-space: nowrap;
}
```

---

### 4.8 Motion & Animation

Clinical brand. Animations must be subtle, purposeful, and fast.

```css
/* Scroll reveal — apply to every section and card */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered card reveals — add delay per card index */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
```

JavaScript for scroll reveal:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

NOT allowed:
- Parallax scrolling
- Looping background animations
- Particle effects or canvas animations
- Typewriter/typing effect on hero headline
- Spinning or rotating decorative elements
- Counter animations on stat numbers

#### Mobile Menu Animation — REQUIRED SPECIFICATION

The mobile menu must animate exactly as defined below.
Do not invent a different animation. Do not use a library for this.

```css
/* Full-screen overlay — default closed state */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: #0A2540;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  /* Closed state */
  opacity: 0;
  transform: translateY(-12px);
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

/* Open state — triggered by adding .is-open class via JS */
.mobile-menu.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

/* Menu links — staggered fade-in when menu opens */
.mobile-menu a {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  font-family: 'DM Sans', 'Helvetica Neue', Arial, system-ui, sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  padding: 16px 20px;
  min-height: 52px;
  display: flex;
  align-items: center;
}

.mobile-menu.is-open a:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.05s; }
.mobile-menu.is-open a:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.10s; }
.mobile-menu.is-open a:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.15s; }
.mobile-menu.is-open a:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.20s; }

/* Book a Call button in mobile menu */
.mobile-menu .btn-primary {
  margin-top: 24px;
  width: calc(100% - 40px);
  justify-content: center;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu.is-open .btn-primary {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.25s;
}
```

JavaScript toggle — minimal, no library required:
```javascript
const hamburger = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('[data-menu-close]');

hamburger.addEventListener('click', () => {
  menu.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // prevent scroll behind menu
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});

// Close on nav link click
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
```

Hamburger button HTML pattern:
```html
<button
  data-menu-toggle
  aria-label="Open menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
  class="hamburger-btn"
>
  <!-- Use icon-hamburger.svg -->
</button>
```

Close button HTML pattern (inside the menu):
```html
<button
  data-menu-close
  aria-label="Close menu"
  class="close-btn"
>
  <!-- Use icon-close.svg -->
</button>
```

---

### 4.9 Astro Project File Structure — REQUIRED

The agent must organise the project exactly as shown below.
Do not flatten all code into a single file.
Do not invent component names not listed here.

```
ritji-portfolio/
├── public/
│   ├── favicon.svg                   ← "RI" initials, Playfair Display, navy bg
│   ├── apple-touch-icon.png          ← (Linked to favicon.svg or generated)
│   ├── og/
│   │   └── og-social-preview.png
│   ├── icons/
│   │   ├── icon-whatsapp-chatbot.svg
│   │   ├── icon-workflow-automation.svg
│   │   ├── icon-mvp-build.svg
│   │   ├── icon-arrow-right.svg
│   │   ├── icon-hamburger.svg
│   │   └── icon-close.svg
│   └── bg/
│       └── bg-grid-overlay.svg
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro          ← <head>, fonts, meta tags, skip link, scroll reveal JS
│   │
│   ├── components/
│   │   ├── Nav.astro                 ← Navigation + mobile menu + hamburger toggle
│   │   ├── Hero.astro                ← Section 02: hero headline, body, CTA, name signature
│   │   ├── Problem.astro             ← Section 03: eyebrow, H2, 2×2 pain point grid
│   │   ├── Services.astro            ← Section 04: eyebrow, H2, 3-card service grid
│   │   ├── WhyRitji.astro            ← Section 05: eyebrow, H2, credential list, quote block
│   │   ├── Credentials.astro         ← Section 06: eyebrow, H2, 3 credential cards, tool chips
│   │   ├── TrustSignals.astro        ← Section 07: eyebrow, 3 stat cards
│   │   ├── Objections.astro          ← Section 08: eyebrow, H2, 3 Q&A pairs
│   │   ├── CTA.astro                 ← Section 09: H2, body, CTA button, reassurance text
│   │   └── Footer.astro              ← Section 10: name, copyright, LinkedIn link
│   │
│   ├── pages/
│   │   └── index.astro               ← Imports BaseLayout + all components in correct order
│   │
│   └── styles/
│       └── global.css                ← CSS custom properties, resets, utility classes, animations
│                                        MUST include: color-scheme: light only on :root (first rule)
│
├── astro.config.mjs                  ← Astro config: output static, Tailwind integration
├── tailwind.config.mjs               ← Tailwind config: extend with brand colours and fonts
├── package.json
└── README.md                         ← Deploy instructions for Vercel
```

#### index.astro — Required Component Order

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import Problem from '../components/Problem.astro';
import Services from '../components/Services.astro';
import WhyRitji from '../components/WhyRitji.astro';
import Credentials from '../components/Credentials.astro';
import TrustSignals from '../components/TrustSignals.astro';
import Objections from '../components/Objections.astro';
import CTA from '../components/CTA.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout>
  <Nav />
  <main id="main-content">
    <Hero />
    <Problem />
    <Services />
    <WhyRitji />
    <Credentials />
    <TrustSignals />
    <Objections />
    <CTA />
  </main>
  <Footer />
</BaseLayout>
```

#### astro.config.mjs — Required Configuration

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://ritjiishaku.com',
});
```

#### tailwind.config.mjs — Required Brand Extension

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:       '#0A2540',
        'navy-deep':'#071C30',
        blue:       '#388BFD',
        sky:        '#B5D4F4',
        'off-white':'#F7F9FC',
        green:      '#1D9E75',
        'red-soft': '#D85A30',
        muted:      '#64748B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        body:    ['DM Sans', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
        section: '640px',
        hero: '540px',
        container: '1100px',
      },
    },
  },
  plugins: [],
};
```

---

## 5. SITE STRUCTURE & COPY

Build these 10 sections in EXACT ORDER.
Do not reorder, rename, remove, or add sections without instruction.

---

### SECTION 01 — NAVIGATION

Behaviour:
- Position: `fixed` top, full width, `z-index: 1000`
- Default state (hero): transparent background, white text
- Scrolled state (60px+): `background: #0A2540`, `box-shadow: var(--shadow-md)`
- Transition: `background 0.3s ease`
- Mobile: hamburger icon opens full-screen navy overlay menu

Desktop layout:
```
[Left]  Ritji Ishaku          [Playfair Display 700, 18px, white]
        Clinical AI Automation Specialist  [DM Sans 300, 9px, uppercase, rgba(255,255,255,0.4)]

[Right] Services  |  Credentials  |  Why Me  |  Contact
        [DM Sans 400, 13px, white, gap: 32px]
        [Book a Call]  ← blue pill button, DM Sans 500, 12px, triggers Calendly Popup
```

Mobile full-screen menu (navy `#0A2540` background):
```
Services
Credentials
Why Me
[Book a Call]  ← full-width blue button
```

Mobile menu animation: fade + slide down, 0.25s ease.

---

### SECTION 02 — HERO

Background: `#0A2540`
Text: white

Background visual treatment:
```css
/* Subtle grid */
background-image:
  linear-gradient(rgba(56,139,253,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(56,139,253,0.06) 1px, transparent 1px);
background-size: 32px 32px;

/* Radial glow — positioned top-right */
/* Render as an absolutely positioned div behind content */
background: radial-gradient(circle at 75% 25%, rgba(56,139,253,0.14) 0%, transparent 60%);
width: 600px; height: 600px;
```

No illustrations. No icons. No photos. Typography and geometry only.

Content (exact copy — do not alter):

```
[Pill badge — blue border rgba(56,139,253,0.4), blue text #388BFD, DM Sans 500, 10px uppercase]
Available for remote work worldwide

[H1 — Playfair Display 700, white]
Your clinic is losing patients
to a problem that has already
been solved.

[Body Large — DM Sans 400, rgba(255,255,255,0.72), max-width 540px]
Most private clinics run on WhatsApp, paper, and memory.
Every missed follow-up, every manual appointment, every
unanswered message is a patient — and revenue — walking
out the door. I build the AI systems that stop that
from happening.

[Name signature block — margin-top: 32px]
[Blue line: width 40px, height 2px, background #388BFD, margin-bottom 10px]
Ritji Ishaku    [Playfair Display 700, 18px, white]
Clinical AI Automation Specialist   [DM Sans 500, 9px, uppercase, letter-spacing 0.18em, rgba(255,255,255,0.4)]

[CTA Button — margin-top: 32px]
Book your free 20-minute call  →

[Reassurance line — DM Sans 300, 11px, rgba(255,255,255,0.3), margin-top: 12px]
No commitment required  ·  Remote via Google Meet or WhatsApp  ·  Available worldwide
```

---

### SECTION 03 — THE PROBLEM

Background: `#F7F9FC`

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD, letter-spacing 0.14em]
The Problem

[H2 — Playfair Display 700, #0A2540]
Right now, your clinic probably
looks something like this.

[Body — DM Sans 400, 16px, #64748B, max-width 560px]
These are not small frustrations. They compound daily —
costing you patients, revenue, and staff morale.

[2×2 Pain Point Card Grid]

Card 1 — Title: Patients book on WhatsApp
Body: Then forget. Or you forget. No system. No reminder. No show.

Card 2 — Title: Paper intake forms
Body: Lost, misread, or 20 minutes of staff time to process. Every single patient.

Card 3 — Title: Follow-ups done manually
Body: When staff remember. Most patients never hear from you again after one visit.

Card 4 — Title: No data. No insight.
Body: You cannot see which services are growing, which are failing, or why patients leave.
```

Pain point card styles:
- Background: `#FFFFFF`
- `border-left: var(--border-pain)`
- `border-radius: 0 var(--radius-md) var(--radius-md) 0`
- `box-shadow: var(--shadow-sm)`
- `padding: 16px 20px`
- Title: DM Sans 500, 13px, `#0A2540`, margin-bottom 6px
- Body: DM Sans 400, 12px, `#64748B`, line-height 1.6

---

### SECTION 04 — SERVICES

Background: `#0A2540`

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD]
What I Build

[H2 — Playfair Display 700, white]
AI systems designed for how
health businesses actually work.

[Subtext — DM Sans 400, rgba(255,255,255,0.6)]
Built by someone who has worked inside them.

[3-card Service Grid]

Card 1:
Icon: chat/whatsapp SVG, 24px, #388BFD
Title: AI WhatsApp Chatbots
Body: Answers patient questions 24/7. Books appointments. Sends reminders. Your staff rest. Patients are always served.

Card 2:
Icon: workflow/nodes SVG, 24px, #388BFD
Title: Workflow Automations
Body: Patient intake, follow-up sequences, and appointment reminders — running automatically with zero manual effort from your team.

Card 3:
Icon: code/layers SVG, 24px, #388BFD
Title: MVP Builds
Body: For health startups ready to build their first digital product. From idea to working system — fast, clinical, and user-tested.
```

Service card styles:
- `background: rgba(255,255,255,0.05)`
- `border-top: var(--border-service)`
- `border-radius: var(--radius-md)`
- `padding: 20px`
- Icon wrapper: margin-bottom 12px
- Title: DM Sans 500, 14px, white, margin-bottom 8px
- Body: DM Sans 400, 12px, `rgba(255,255,255,0.6)`, line-height 1.6

---

### SECTION 05 — WHY RITJI

Background: `#F7F9FC`

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD]
Why Me

[H2 — Playfair Display 700, #0A2540]
Any developer can build an automation.
Very few understand what happens inside
a clinic when it breaks.

[Body — DM Sans 400, 16px, #64748B, max-width 580px]
I spent 5 years as a registered nurse watching health businesses
fail — not from poor care, but poor systems. Now I build
the systems that fix exactly that. And unlike most AI engineers,
I have been the end user of every system I build.

[Credential list — 4 items]

• 5+ years active clinical nursing experience — I have worked the systems I now automate
• Certified AI Automation Engineer — trained in LLMs, AI agents, RAG systems, and multi-agent workflows
• UX/UI Designer — every system is designed for real people, not just technical users
• I build systems that clinical staff will actually use — because I have been that staff

[Quote block]
"I'm not just a tech person. I'm a nurse who
built these systems because I lived the problem."
— RITJI ISHAKU
```

Credential list item style:
- Blue dot: `width: 6px; height: 6px; border-radius: 50%; background: #388BFD; margin-top: 7px; flex-shrink: 0;`
- Text: DM Sans 400, 13px, `#0A2540`, line-height 1.6
- Item padding: `8px 0`
- Border-bottom: `var(--border-thin)` (last item: none)

Quote block style:
- `border-left: 4px solid #388BFD`
- `border-radius: 0 var(--radius-sm) var(--radius-sm) 0`
- `background: rgba(56,139,253,0.04)`
- `padding: 16px 20px`
- `margin-top: 32px`
- Quote text: Playfair Display 400, 16px, italic, `#0A2540`, line-height 1.65
- Attribution: DM Sans 500, 10px, uppercase, `#388BFD`, letter-spacing 0.1em, margin-top 8px

---

### SECTION 06 — CREDENTIALS

Background: `#0A2540`

This section uses ONLY verified credentials from Section 2 of this document.

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD]
Credentials & Training

[H2 — Playfair Display 700, white]
Built on verified expertise.
Not just passion.

[Subtext — DM Sans 400, rgba(255,255,255,0.6)]
Every service I offer is backed by formal certification,
hands-on project delivery, and clinical experience.

[3 Credential Cards — stacks to 1 col on mobile, 3 col on desktop]

Card 1 — Clinical Experience:
Label: 5+ Years · Registered Nurse
Detail: Active clinical practice since 2020. Patient care, clinical workflows, health facility operations. The foundation that makes every system I build clinically intelligent.

Card 2 — AI Automation Engineering:
Label: Certified · 8-Week Programme
Detail: Trained in LLMs, AI agents, RAG systems, n8n, LangChain, CrewAI, LangGraph, multi-agent systems, API integration, and production deployment. 4 real-world projects built and deployed.

Card 3 — Design & Product:
Label: UX/UI Design · Agentic Coding
Detail: Trained in user experience design and agentic/vibe coding. Certified in building automated landing pages, AI automations for businesses, and MVP development using agentic coding tools.

[Tool chip row — display verified tools only]
Label above chips: [DM Sans 300, 11px, rgba(255,255,255,0.4)]
"Tools & frameworks I am certified to use:"

Chips (render as .chip elements in a flex-wrap row):
OpenAI API · n8n · LangChain · CrewAI · LangGraph · Flowise · ChromaDB · Make · Zapier · WhatsApp API · Streamlit · Airtable
```

Credential card styles:
- `background: rgba(255,255,255,0.05)`
- `border: var(--border-trust)`
- `border-radius: var(--radius-md)`
- `padding: 20px`
- Label: DM Sans 500, 11px, uppercase, `#388BFD`, letter-spacing 0.1em, margin-bottom 8px
- Detail: DM Sans 400, 13px, `rgba(255,255,255,0.65)`, line-height 1.65

Chip row:
- `display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px;`
- Each chip: `.chip` style as defined in Section 4.7 (override colours to light-on-dark if needed)

---

### SECTION 07 — TRUST SIGNALS

Background: `#F7F9FC`

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD]
By the Numbers

[3-stat grid]

Stat 1:
Number: 5+
Label: Years of active clinical nursing practice

Stat 2:
Number: 8
Label: Weeks of intensive AI automation engineering training

Stat 3:
Number: 4
Label: Real-world AI automation projects built and deployed
```

Stat card styles:
- Background: `#FFFFFF`
- `border: var(--border-thin)`
- `border-radius: var(--radius-md)`
- `box-shadow: var(--shadow-sm)`
- `padding: 28px 24px`
- `text-align: center`
- Number: Playfair Display 700, 48px, `#388BFD`, line-height 1
- Label: DM Sans 400, 13px, `#64748B`, line-height 1.5, margin-top 8px

---

### SECTION 08 — OBJECTION HANDLING

Background: `#0A2540`

Content (exact copy):

```
[Eyebrow — DM Sans 500, 11px, uppercase, #388BFD]
Common Questions

[H2 — Playfair Display 700, white]
You probably have these questions.
Here are honest answers.

[3 objection pairs — stacked on mobile, 2-col on desktop]

Pair 1:
Q: "This sounds expensive for a small clinic."
A: One missed appointment per day costs more than my monthly retainer. These systems pay for themselves within weeks.

Pair 2:
Q: "Our staff won't know how to use it."
A: I design for clinical staff, not tech people. If they can use WhatsApp, they can use what I build.

Pair 3:
Q: "We've tried tech before and it failed."
A: Most health tech fails because it was built by people who have never worked in a clinic. I have. That changes everything.
```

---

### SECTION 09 — CALL TO ACTION

Background: `#0A2540`

Content (exact copy):

```
[H2 — Playfair Display 700, white, text-align: center, max-width: 600px, margin: 0 auto]
Let's find the one thing in your
clinic that AI can fix first.

[Body — DM Sans 400, rgba(255,255,255,0.55), text-align: center, max-width: 480px, margin: 16px auto 0]
Book a free 20-minute discovery call. No pitch. No pressure.
Just an honest conversation about where your biggest time
leak is — and whether I can fix it.

[CTA Button — centred, margin-top: 32px]
Book your free 20-minute call  →

[Reassurance — DM Sans 300, 11px, rgba(255,255,255,0.3), text-align: center, margin-top: 12px]
No commitment required  ·  Remote, via Google Meet or WhatsApp  ·  Available worldwide
```

---

### SECTION 10 — FOOTER

Background: `#071C30`
`padding: 32px 20px` mobile / `padding: 40px 0` desktop

```
[Desktop: 3-column layout]

[Left]
Ritji Ishaku      [Playfair Display 700, 16px, white]
Clinical AI Automation Specialist   [DM Sans 300, 9px, uppercase, rgba(255,255,255,0.35), letter-spacing 0.12em]

[Centre]
© 2026 Ritji Ishaku. All rights reserved.
[DM Sans 300, 11px, rgba(255,255,255,0.25), text-align: center]

[Right]
Email | LinkedIn | GitHub
[DM Sans 400, 12px, rgba(255,255,255,0.45), gap: 24px, hover: #388BFD]
LinkedIn/GitHub: ritjiishaku
Email: ritjiishaku@gmail.com
```

---

## 6. MEDIA & IMAGE NAMING CONVENTIONS

### 6.1 Naming Rules

```
Format:  [type]-[descriptor]-[variant].[extension]

type:       bg | icon | og | favicon
descriptor: short-kebab-case description of content
variant:    dark | light | mobile | sm | lg (only when multiple versions exist)
extension:  .svg (all icons) | .webp (photos/backgrounds) | .png (OG, favicon only)
```

### 6.2 Complete File Inventory

```
/public/
├── favicon.svg                          ← "RI" — Playfair Display 700, white on #0A2540
│
├── og/
│   └── og-social-preview.png           ← 1200×630px — see Section 6.4
│
├── icons/
│   ├── icon-whatsapp-chatbot.svg       ← Services: WhatsApp/chat icon
│   ├── icon-workflow-automation.svg    ← Services: workflow/nodes icon
│   ├── icon-mvp-build.svg             ← Services: code/layers icon
│   ├── icon-arrow-right.svg           ← CTA button arrow
│   ├── icon-hamburger.svg             ← Mobile nav open
│   └── icon-close.svg                 ← Mobile nav close
│
└── bg/
    └── bg-grid-overlay.svg            ← Hero + CTA section grid texture
```

### 6.3 Icon Rules

- Format: SVG only. No PNG, no JPG for icons.
- Colour: always rendered via `fill="currentColor"` — colour set in CSS
- Default colour: `#388BFD`
- Size in service cards: `24px × 24px`
- Size in navigation: `20px × 20px`
- Never import external icon libraries (Font Awesome, Heroicons, Lucide, etc.)
- All icons must be minimal, single-path or simple multi-path SVGs
- Stroke icons preferred over filled icons for the clinical/precise aesthetic

### 6.4 OG Social Preview Image

```
File:       /public/og/og-social-preview.png
Dimensions: 1200 × 630px
Format:     PNG

Content layout:
Background: #0A2540 solid
Grid overlay: rgba(56,139,253,0.05), 32px grid
Radial glow: top-right, rgba(56,139,253,0.12)

Text:
"Ritji Ishaku"                         Playfair Display 700, 56px, #FFFFFF
[Blue line: 48px wide, 3px, #388BFD]
"Clinical AI Automation Specialist"    DM Sans 500, 18px, uppercase, rgba(255,255,255,0.45)
"Clinical intelligence. Built from experience."  DM Sans 300, 15px, rgba(255,255,255,0.3)
```

### 6.5 Favicon

```
favicon.ico:         "RI" — Playfair Display 700, white on #0A2540, 16×16px
favicon-32x32.png:   Same composition, 32×32px
apple-touch-icon:    Same composition, 180×180px, 12px padding all sides
```

---

## 7. SEO & META TAGS

Place in `<head>` of the Astro layout file:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#0A2540" />

<title>Ritji Ishaku | Clinical AI Automation Specialist</title>
<meta name="description" content="I help health and wellness businesses save time and serve more patients through AI automations and intelligent digital systems — built by a certified AI engineer who has also worked in clinical care." />
<meta name="keywords" content="clinical AI automation specialist, health tech Nigeria, AI automation engineer, WhatsApp chatbot clinic, patient intake automation, health workflow automation, telehealth AI, n8n health automation, LangChain health, AI agent healthcare, medical AI automation Nigeria" />
<meta name="author" content="Ritji Ishaku" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://ritjiishaku.com" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ritjiishaku.com" />
<meta property="og:title" content="Ritji Ishaku | Clinical AI Automation Specialist" />
<meta property="og:description" content="I help health and wellness businesses save time and serve more patients through AI automations — built by a certified AI engineer who has worked in clinical care." />
<meta property="og:image" content="https://ritjiishaku.com/og/og-social-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_NG" />
<meta property="og:site_name" content="Ritji Ishaku" />

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ritji Ishaku | Clinical AI Automation Specialist" />
<meta name="twitter:description" content="AI automations for health and wellness businesses. Built by a certified AI engineer and registered nurse." />
<meta name="twitter:image" content="https://ritjiishaku.com/og/og-social-preview.png" />

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ritji Ishaku",
  "jobTitle": "Clinical AI Automation Specialist",
  "description": "Certified AI Automation Engineer and Registered Nurse helping health and wellness businesses build intelligent digital systems using LLMs, AI agents, and workflow automations.",
  "url": "https://ritjiishaku.com",
  "sameAs": [
    "https://linkedin.com/in/ritjiishaku"
  ],
  "knowsAbout": [
    "AI Automation Engineering",
    "Large Language Models",
    "AI Agents",
    "Retrieval-Augmented Generation",
    "n8n Workflow Automation",
    "LangChain",
    "CrewAI",
    "LangGraph",
    "WhatsApp Business API",
    "Multi-Agent Systems",
    "Health Technology",
    "Clinical Nursing",
    "UX Design",
    "MVP Development",
    "Patient Intake Automation",
    "Healthcare Workflow Design"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AI Automation Engineer — Build LLM Apps and AI Agents",
      "description": "8-week intensive certification covering LLMs, AI agents, RAG systems, n8n, LangChain, CrewAI, multi-agent systems, and production deployment."
    }
  ],
  "areaServed": "Worldwide",
  "availableLanguage": "English",
  "nationality": "Nigerian"
}
</script>
```

---

## 8. MOBILE RESPONSIVENESS RULES

### Breakpoints

```css
/* Mobile first — all base styles target 375px minimum */
/* Tablet  */ @media (min-width: 768px)  { }
/* Desktop */ @media (min-width: 1024px) { }
/* Wide    */ @media (min-width: 1280px) { }
```

### Element Behaviour by Screen Size

| Element | Mobile (375px) | Tablet (768px+) | Desktop (1024px+) |
|---|---|---|---|
| Navigation | Hamburger, full-screen overlay | Hamburger | Inline links |
| Hero H1 | 32px, line-height 1.2 | 40px | 52px |
| Pain point grid | 2 columns | 2 columns | 2 columns |
| Service cards | 1 column | 3 columns | 3 columns |
| Credentials section | 1 column | 3 columns | 3 columns |
| Tool chips | Flex-wrap, 2–3 per row | Flex-wrap | Flex-wrap |
| Trust stat cards | 1 column | 3 columns | 3 columns |
| Objection pairs | Q above A, stacked | Q left, A right | Q left, A right |
| Footer | Centred, stacked | Centred, stacked | 3-column |
| CTA button | Full width | Auto width | Auto width |
| Section padding | 48px top/bottom | 64px top/bottom | 80px top/bottom |
| Horizontal padding | 20px | 32px | Container centred |

### Touch Target Rules (Google/Apple Standard)

- All buttons: minimum `height: 44px`
- CTA button: minimum `height: 48px`
- Navigation links in mobile menu: minimum `height: 52px; padding: 14px 20px`
- All interactive elements: minimum tap target `44px × 44px`

### Performance Rules

- Hero fonts preloaded: `<link rel="preload" as="font" href="..." crossorigin>`
- All images below fold: `loading="lazy"`
- No render-blocking scripts: all JS uses `defer` attribute
- Inline critical CSS for above-the-fold content
- Target Lighthouse score: **95+ on mobile**, **98+ on desktop**

---

## 9. ACCESSIBILITY

- All text must meet WCAG AA contrast ratio minimum (4.5:1 body, 3:1 large text)
- All interactive elements must have `:focus-visible` styles with visible outline
- Semantic HTML required: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`–`<h3>`
- Only ONE `<h1>` per page — the hero headline
- All `<section>` elements must have an `aria-label` or be labelled by an `<h2>`
- Navigation must use `<nav aria-label="Main navigation">`
- Mobile hamburger button: `aria-label="Open menu"` / `aria-label="Close menu"`
- Skip-to-content link required:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -48px;
  left: 16px;
  background: #388BFD;
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 0 0 8px 8px;
  z-index: 9999;
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 0;
}
```

---

## 10. WHAT NOT TO BUILD

The agent must NOT include any of the following under any circumstance:

- Profile photo, personal image, avatar, or illustration placeholder
- Testimonials section — no client testimonials exist yet
- Pricing table or rates section — discovery call qualifies clients first
- Blog or articles section — added separately in Month 3
- Social media feed embeds or widgets
- Cookie consent banner — no tracking cookies used
- Live chat widget or chat pop-up
- Animations that loop, spin, or run continuously
- Purple, pink, or orange in any UI element
- Generic stock photography or AI-generated illustrations
- Any font other than Playfair Display and DM Sans
- More than ONE primary call-to-action (everything leads to booking a call)
- A raw skills/tools list anywhere outside the Credentials section
- Counter/number animations on trust stat numbers
- Gradient text effects (`background-clip: text`)
- Pure black (`#000000`) anywhere in the UI
- A portfolio/case studies section — added separately once client work exists
- Any section not listed in the 10-section structure above

---

## 11. FINAL CHECKLIST BEFORE DEPLOY

The agent must verify every item before marking the build complete:

**Structure**
- [ ] All 10 sections present in correct order
- [ ] All copy matches exactly as written in Section 5
- [ ] No extra sections added beyond the 10 defined
- [ ] Astro file structure matches Section 4.9 exactly
- [ ] All 10 components created as separate .astro files
- [ ] index.astro imports components in correct order
- [ ] astro.config.mjs configured for static output
- [ ] tailwind.config.mjs extends brand colours and fonts

**Design System**
- [ ] `color-scheme: light only` is the FIRST rule inside `:root` in global.css
- [ ] All colour variables match hex codes in Section 4.1
- [ ] Playfair Display used for all headings and name logo only
- [ ] DM Sans used for all body text, labels, buttons, chips
- [ ] Font fallback stacks applied to every font-family declaration
- [ ] `max-width: 65ch` applied to all body text paragraphs
- [ ] Hero body text max-width set to 540px
- [ ] Section content max-width set to 640px
- [ ] All spacing is a multiple of 4px
- [ ] Pain point cards have red (`#D85A30`) left border only
- [ ] Service cards have blue (`#388BFD`) top border only
- [ ] Trust stat cards on white background with thin border
- [ ] Credential cards on navy background with trust border
- [ ] Tool chips use `.chip-dark` style in Credentials section

**Credentials**
- [ ] Only verified credentials from Section 2 are used
- [ ] Tool chips show only the 12 verified tools listed
- [ ] No invented or embellished credentials anywhere

**Functionality**
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Mobile menu animation: opacity + translateY(-12px → 0), 0.25s ease
- [ ] Mobile menu links stagger in with 0.05s delay increments
- [ ] Body scroll locked (`overflow: hidden`) when mobile menu is open
- [ ] Menu closes on navigation link click
- [ ] Hamburger `aria-expanded` toggles correctly between true/false
- [ ] Smooth scroll works on all navigation links
- [ ] CTA button links to Calendly (insert placeholder URL if not provided)
- [ ] Scroll reveal animation works on all sections and cards
- [ ] No broken links or missing assets

**SEO & Meta**
- [ ] All meta tags complete in `<head>`
- [ ] OG image path correct: `/og/og-social-preview.png`
- [ ] Schema.org JSON-LD present and valid
- [ ] Canonical URL set to `https://ritjiishaku.com`

**Mobile & Performance**
- [ ] Lighthouse mobile score 95+
- [ ] All touch targets minimum 44px height
- [ ] No render-blocking scripts
- [ ] Fonts preloaded in `<head>`

**Exclusions Verified**
- [ ] No profile photo included
- [ ] No testimonials section
- [ ] No pricing section
- [ ] No portfolio/case studies section
- [ ] No looping animations
- [ ] Footer copyright year shows 2026

---

*Document maintained by Ritji Ishaku — Clinical AI Automation Specialist*
*Version 3.1 | Updated April 2026*
*Previous version: RITJI_WEBSITE_AGENT_INSTRUCTIONS_v3.md*
