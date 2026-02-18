# Harish M | Full Stack Developer Portfolio

A unique, modern, and premium dark theme personal portfolio website inspired by Vercel, Linear, and GitHub dark mode. Built with React (Vite), Tailwind CSS, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/React-Vite-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-BB4B96?style=flat)

## Design Philosophy

This portfolio features a **premium dark theme** with:
- **No profile images** - Uses abstract visuals, gradient shapes, glowing elements, and code UI graphics
- **Unique design** - Not a template, custom-built for a modern developer portfolio
- **Dark aesthetic** - Inspired by Vercel, Linear, and GitHub dark mode
- **Grid pattern background** - Subtle tech-inspired visual element
- **Smooth animations** - Professional micro-interactions throughout
- **Glassmorphism effects** - Modern card designs with blur and glow

## Features

- **Abstract Hero visuals** - Animated gradient shapes, floating tech icons, and code editor mockup (no profile image)
- **Dark theme** with premium color palette
- **Grid pattern background** for tech aesthetic
- **Smooth scrolling** navigation with progress indicator
- **Animated gradient blobs** in background
- **Typing animation** for role titles
- **Glassmorphism cards** with hover glow effects
- **Vertical timeline** for experience section
- **Modern contact form** with glow focus effects
- **Fully responsive** (mobile, tablet, desktop)

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (with `@tailwindcss/vite`)
- **Framer Motion** (animations)
- **React Icons**

## Color System

| Token     | Value              |
|----------|---------------------|
| Background | `#0D1117`        |
| Secondary BG | `#111827`     |
| Card       | `#161B22`          |
| Border     | `#2A2F3A`          |
| Primary    | `#4F46E5` (indigo) |
| Secondary  | `#06B6D4` (cyan)   |
| Highlight  | `#22C55E` (green)  |
| Text       | `#E6EDF3`          |
| Muted      | `#9CA3AF`          |

## Installation

1. **Navigate to the project:**

   ```bash
   cd harish-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run locally:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview production build:**

   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── BackgroundBlobs.jsx
│   ├── Button.jsx
│   ├── CursorGlow.jsx
│   ├── GlassCard.jsx
│   ├── HeroVisuals.jsx  # Abstract hero visuals (no image)
│   ├── Navbar.jsx
│   └── ScrollProgress.jsx
├── sections/        # Page sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── hooks/           # Custom hooks
│   ├── useCursorGlow.js
│   └── useScrollProgress.js
├── assets/          # Images and static assets
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Hero visuals:** Customize the abstract visuals in `src/components/HeroVisuals.jsx` - adjust gradient shapes, tech icons, or code mockup
- **Resume:** Add your `resume.pdf` to the `public/` folder and link it in the Hero buttons (e.g. `href="/resume.pdf"`)
- **Contact links:** Update email, LinkedIn, GitHub, and location in `src/sections/Contact.jsx` and `src/sections/Footer.jsx`
- **Projects:** Edit the `projects` array in `src/sections/Projects.jsx` with your repo and live demo URLs
- **Experience:** Update the `experiences` array in `src/sections/Experience.jsx`

## Deploy on Vercel

1. **Push your code to GitHub** (or GitLab/Bitbucket).

2. **Import the project on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in.
   - Click **Add New** → **Project**.
   - Import your repository and select the **harish-portfolio** (or root) folder.

3. **Configure the build:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:** Click **Deploy**. Vercel will build and host your site and give you a URL (e.g. `your-project.vercel.app`).

### Optional: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and deploy from the project root.

## Design Notes

- **No profile images** - The hero section uses abstract visuals instead
- **Grid pattern** - Subtle tech-inspired background grid
- **Glow effects** - Soft neon glows on hover for cards and buttons
- **Glassmorphism** - Dark glass cards with blur effects
- **Gradient accents** - Blue to cyan gradients throughout
- **Smooth animations** - Framer Motion for professional transitions

## License

MIT. Use freely for your own portfolio.
