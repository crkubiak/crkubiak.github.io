# Atomic Blueprint // Technical Blog

An expert-grade technical blog for Software Delivery Leads, designed with a **Midcentury Modern "Raygun Gothic"** meets **Structural Engineering Schematic** aesthetic.

## Visual Identity: "The Atomic Blueprint"
The blog uses a "Drafting Paper" background with "Blueprint Navy" text, punctuated by high-contrast retro accents (Red, Orange, and Gold). The UI features sharp borders, technical corner markers, and uppercase tracking-widest typography to evoke authority and precision.

### Color Palette
| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Drafting Paper** | `#F4F1DE` | Main Background |
| **Blueprint Navy** | `#003049` | Primary Text & Hero Background |
| **Retro Red** | `#D62828` | Primary Actions / Buttons |
| **Retro Orange** | `#F77F00` | Tags & Secondary Accents |
| **Gold/Yellow** | `#FCBF49` | Icons & Detail Accents |
| **Border Gray** | `#E0DDCB` | Structural Dividers |

---

## Technical Architecture

### 1. Tailwind Integration
The theme is powered by Tailwind CSS. Custom colors are mapped in `tailwind.config.js` using the `theme-` prefix:
- `bg-theme-bg`
- `text-theme-text`
- `bg-theme-primary` (Retro Red)
- `border-theme-border`

### 2. Core Components (`_includes/`)
- **`hero.html`**: The command center. Includes technical SVGs and a "System Status" indicator.
- **`article-card.html`**: Structural cards for blog posts with corner accents and category tagging.
- **`newsletter.html`**: "The Lead's Log" signup module with a distinct vertical gold border.

### 3. Layouts (`_layouts/`)
- **`default.html`**: The base wrapper providing the drafting paper texture and global navigation.
- **`home.html`**: A dual-column layout featuring the Hero section, a primary Article Feed, and a Sidebar for the Newsletter and Metadata.

---

## Setup & Development

### Prerequisites
- Ruby & Jekyll
- Node.js (for Tailwind CSS processing)

### Tailwind Build
To compile the CSS, ensure you have Tailwind installed and run:
```bash
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch
```

### Adding New Posts
Add Markdown files to the `_posts` directory. Use the following Front Matter for best results:
```yaml
---
layout: post
title: "Scaling AI Delivery"
date: 2026-02-24
categories: [AI, Engineering]
tags: [architecture, scale]
---
```

---
**Transmission End // Happy Engineering.**
