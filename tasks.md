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

- [ ] Create `app/layout.tsx` with root layout
- [ ] Build `Navbar.tsx` (desktop + mobile responsive)
- [ ] Build `MobileMenu.tsx` (slide-out menu)
- [ ] Build `Footer.tsx` with links and copyright
- [ ] Add SEO metadata in `layout.tsx`
- [ ] Verify all pages render Navbar + Footer
- [ ] Add 404 page (`not-found.tsx`)

## Phase 3: Page Sections

### Hero
- [ ] Create `components/sections/Hero.tsx`
- [ ] Implement headline + subheadline text
- [ ] Implement CTA button with Calendly link
- [ ] Implement GSAP text reveal → Framer Motion word-by-word reveal
- [ ] Implement background color transitions on scroll
- [ ] Implement infinite marquee (tech stack logos)
- [ ] Verify responsive on mobile + desktop

### Intro
- [ ] Create `components/sections/Intro.tsx`
- [ ] Implement pain-point messaging
- [ ] Implement fade-in reveal on scroll
- [ ] Verify responsive layout

### About
- [ ] Create `components/sections/About.tsx`
- [ ] Implement founder section (Anselme Motcho)
- [ ] Implement philosophy copy
- [ ] Implement image reveal animation
- [ ] Verify responsive layout

### Services
- [ ] Create `components/sections/Services.tsx`
- [ ] Implement service cards (Full-Stack, Frontend, Backend, SaaS, Consulting)
- [ ] Implement hover effects on cards
- [ ] Verify responsive grid

### Pricing
- [ ] Create `components/sections/Pricing.tsx`
- [ ] Migrate `src/pricing.js` → `Pricing.tsx`
- [ ] Implement 3 tiers: Market Proof ($2k), Launchpad MVP ($5k), Custom Scale ($$$)
- [ ] Implement "Most Popular" badge on Launchpad tier
- [ ] Implement CTA buttons per tier
- [ ] Verify responsive card layout

### FAQ
- [ ] Create `components/sections/FAQ.tsx`
- [ ] Implement accordion with GSAP → Framer Motion toggle
- [ ] Migrate FAQ content from `faq.html`
- [ ] Implement smooth open/close animation
- [ ] Verify responsive single-column layout

### Testimonials
- [ ] Create `components/sections/Testimonials.tsx`
- [ ] Implement testimonial cards with SVG border animation
- [ ] Migrate testimonial content
- [ ] Implement fade-in on scroll
- [ ] Verify responsive grid

### CTA
- [ ] Create `components/sections/CTA.tsx`
- [ ] Implement headline + Calendly embed
- [ ] Implement magnetic button effect
- [ ] Verify responsive layout

### Navbar (inline in layout)
- [ ] Implement sticky header with scroll color change
- [ ] Implement smooth scroll to page sections
- [ ] Implement "Book Discovery Call" button

### Footer
- [ ] Migrate footer content from `index.html`
- [ ] Implement links and copyright text

## Phase 4: Animations

- [ ] Install Framer Motion
- [ ] Replace GSAP ScrollTrigger with Framer Motion `whileInView`
- [ ] Replace GSAP text word/letter reveals with Framer Motion variants
- [ ] Replace GSAP image reveals with Framer Motion
- [ ] Replace GSAP accordion with Framer Motion `AnimatePresence`
- [ ] Replace GSAP magnetic button with Framer Motion + CSS hover
- [ ] Implement SVG drawing animation for testimonial borders
- [ ] Test all animations for performance and smoothness
- [ ] Verify `prefers-reduced-motion` works correctly

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
