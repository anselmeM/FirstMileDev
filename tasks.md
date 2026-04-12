# FirstMileDev → Next.js Migration Tasks

## Phase 1: Scaffold

- [x] Initialize Next.js 15 with TypeScript in `/firstmiledev`
- [x] Configure Tailwind CSS v4 with existing design tokens
- [x] Set up `/app`, `/components`, `/lib`, `/content` folder structure
- [x] Migrate `tailwind.config.js` → `tailwind.config.ts`
- [x] Create `globals.css` with existing CSS variables
- [x] Verify `npm run dev` starts cleanly
- [x] Verify `npm run build` produces clean production build

## Phase 2: Core Layout

- [x] Create `app/layout.tsx` with root layout
- [x] Build `Navbar.tsx` (desktop + mobile responsive)
- [x] Build `MobileMenu.tsx` (slide-out menu)
- [x] Build `Footer.tsx` with links and copyright
- [x] Add SEO metadata in `layout.tsx`
- [x] Verify all pages render Navbar + Footer
- [x] Add 404 page (`not-found.tsx`)

## Phase 3: Page Sections

### Hero
- [x] Create `components/sections/Hero.tsx`
- [x] Implement headline + subheadline text
- [x] Implement CTA button with Calendly link
- [x] Implement GSAP text reveal → Framer Motion word-by-word reveal
- [x] Implement background color transitions on scroll
- [x] Implement infinite marquee (tech stack logos)
- [x] Verify responsive on mobile + desktop

### Intro
- [x] Create `components/sections/Intro.tsx`
- [x] Implement pain-point messaging
- [x] Implement fade-in reveal on scroll
- [x] Verify responsive layout

### About
- [x] Create `components/sections/About.tsx`
- [x] Implement founder section (Anselme Motcho)
- [x] Implement philosophy copy
- [x] Implement image reveal animation
- [x] Verify responsive layout

### Services
- [x] Create `components/sections/Services.tsx`
- [x] Implement service cards (Full-Stack, Frontend, Backend, SaaS, Consulting)
- [x] Implement hover effects on cards
- [x] Verify responsive grid

### Pricing
- [x] Create `components/sections/Pricing.tsx`
- [x] Migrate `src/pricing.js` → `Pricing.tsx`
- [x] Implement 3 tiers: Market Proof ($2k), Launchpad MVP ($5k), Custom Scale ($$$)
- [x] Implement "Most Popular" badge on Launchpad tier
- [x] Implement CTA buttons per tier
- [x] Verify responsive card layout

### FAQ
- [x] Create `components/sections/FAQ.tsx`
- [x] Implement accordion with GSAP → Framer Motion toggle
- [x] Migrate FAQ content from `faq.html`
- [x] Implement smooth open/close animation
- [x] Verify responsive single-column layout

### Testimonials
- [x] Create `components/sections/Testimonials.tsx`
- [x] Implement testimonial cards with SVG border animation
- [x] Migrate testimonial content
- [x] Implement fade-in on scroll
- [x] Verify responsive grid

### CTA
- [x] Create `components/sections/CTA.tsx`
- [x] Implement headline + Calendly embed
- [x] Implement magnetic button effect
- [x] Verify responsive layout

### Navbar (inline in layout)
- [ ] Implement sticky header with scroll color change
- [ ] Implement smooth scroll to page sections
- [ ] Implement "Book Discovery Call" button

### Footer
- [ ] Migrate footer content from `index.html`
- [ ] Implement links and copyright text

## Phase 4: Animations

- [x] Install Framer Motion
- [x] Replace GSAP ScrollTrigger with Framer Motion `whileInView`
- [x] Replace GSAP text word/letter reveals with Framer Motion variants
- [x] Replace GSAP image reveals with Framer Motion
- [x] Replace GSAP accordion with Framer Motion `AnimatePresence`
- [x] Replace GSAP magnetic button with Framer Motion + CSS hover
- [x] Implement SVG drawing animation for testimonial borders
- [x] Test all animations for performance and smoothness
- [x] Verify `prefers-reduced-motion` works correctly

## Phase 5: Blog Migration

- [x] Set up MDX pipeline (`next-mdx-remote` or `@next/mdx`)
- [x] Create `/content/blog/` directory
- [x] Migrate `blog-no-code-vs-custom.html` → MDX with frontmatter
- [x] Migrate `blog-true-cost-mvp.html` → MDX with frontmatter
- [x] Migrate `blog-why-startups-fail.html` → MDX with frontmatter
- [x] Create `app/blog/page.tsx` blog listing
- [x] Create `app/blog/[slug]/page.tsx` individual post
- [x] Implement reading time calculation
- [ ] Implement OG image per post

## Phase 6: SEO + Performance

- [x] Add `metadata.ts` with global SEO config
- [x] Add per-page metadata overrides
- [x] Generate sitemap via `next-sitemap`
- [x] Generate robots.txt via `next-robots`
- [x] Add OG images for homepage and blog posts
- [x] Run Lighthouse audit
- [ ] Fix any performance issues found
- [ ] Verify all pages pass accessibility audit

## Phase 7: Deployment

- [ ] Create `vercel.json` (or verify existing config)
- [ ] Set environment variables in Vercel dashboard
- [ ] Test deployment to preview URL
- [ ] Verify production build works
- [ ] Test Calendly embed in production
- [ ] Run end-to-end Playwright tests
- [ ] Run final smoke test on live URL

## Testing Tasks (across all phases)

- [x] `npm run dev` starts without errors
- [x] `npm run build` completes without warnings
- [x] `npm run lint` passes
- [ ] Playwright: homepage loads without console errors
- [ ] Playwright: navigation between sections works
- [ ] Playwright: FAQ accordion opens and closes
- [ ] Playwright: Calendly widget opens on CTA click
- [ ] Playwright: mobile menu opens and closes
- [ ] Playwright: blog listing page loads
- [ ] Playwright: individual blog post loads
- [ ] Responsive: test at 375px, 768px, 1440px
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader announces sections
