# FirstMileDev → Next.js Migration Plan

## Why Next.js

- Static HTML/Vite is fine for landing pages but becomes a liability when features expand
- Next.js gives: file-based routing, SSR/SSG options, React ecosystem, better SEO
- Current 1206-line index.html is a single point of failure — hard to maintain, test, or extend
- Build system already uses Vite+React — minimal conceptual shift, just structured differently

## Architecture

```
firstmiledev/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Global styles + Tailwind
│   └── providers.tsx         # Theme/animation providers
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── ui/                   # Shared UI primitives
│   │   ├── Button.tsx
│   │   ├── Accordion.tsx
│   │   └── Marquee.tsx
│   └── icons/                # Lucide icon wrappers
├── lib/
│   └── utils.ts              # cn() helper, etc.
├── content/                  # MDX blog posts (migrate from HTML)
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts        # Already exists, migrate as-is
├── next.config.js
└── package.json
```

## Tech Stack Decisions

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (existing config is compatible)
- **Animations:** Framer Motion (replace GSAP) — better React integration
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React (already installed)
- **Deployment:** Vercel (already used)
- **Testing:** Playwright (already in devDependencies)

## Migration Strategy

**Phase 1: Scaffold**
1. Initialize Next.js with TypeScript and Tailwind
2. Set up folder structure matching architecture above
3. Migrate tailwind.config.js as-is
4. Set up global CSS with existing design tokens
5. Verify build and dev server start

**Phase 2: Core Layout**
1. Build Navbar (responsive, mobile menu)
2. Build Footer
3. Create root layout with metadata (SEO)
4. Verify routing works

**Phase 3: Page Sections**
1. Hero section with GSAP → Framer Motion animation
2. Intro section
3. About section
4. Services section
5. Pricing section (from existing src/pricing.js)
6. FAQ accordion
7. Testimonials with SVG borders
8. CTA section
9. Calendly embed component

**Phase 4: Animations**
- Replace GSAP ScrollTrigger with Framer Motion whileInView
- Replace GSAP text reveals with Framer Motion variants
- Replace magnetic button effects with CSS/Framer Motion
- Infinite marquee for tech stack logos
- Image reveal animations on scroll

**Phase 5: Blog Migration**
1. Migrate HTML blog posts → MDX files in /content
2. Set up next-mdx-remote or @next/mdx
3. Update blog listing page
4. Individual post pages with proper meta

**Phase 6: Polish + Deploy**
1. Performance audit (Lighthouse)
2. SEO meta tags per page
3. OG image generation
4. Sitemap.xml via next-sitemap
5. robots.txt via next-robots
6. Production build verification
7. Deploy to Vercel

## What to Preserve

- Exact color palette (Watermelon #FF3B3F, Sky #CAEBF2, Carbon #A9A9A9, Neutral #EFEFEF)
- Typography (Archivo Black, League Spartan, Montserrat)
- Pricing tiers and copy
- Calendly embed (same URL)
- Lucide icons (already using)
- Content and messaging

## What Changes

- GSAP → Framer Motion (React-native animation approach)
- Single HTML file → modular component tree
- Vanilla JS interactions → React hooks
- Static HTML blog → MDX with dynamic routing
- No build system → standard Next.js build pipeline

## Risks

- Framer Motion vs GSAP: complex scroll animations may need tweaking
- MDX migration: frontmatter parsing needs testing
- SEO: meta tag migration must be verified manually
- Performance: bundle size needs monitoring

## De-risk Checklist Before Starting

- [ ] Framer Motion installed and tested for common animations
- [ ] GSAP equivalents verified in Framer Motion
- [ ] Calendly embed widget works in Next.js (client component)
- [ ] MDX setup works with existing blog content structure
- [ ] Vercel deployment tested with a stub build
