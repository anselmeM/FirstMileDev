

// 2. INITIALIZE ICONS & GSAP
lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);

// 3. HERO ANIMATION TIMELINE
const tl = gsap.timeline();
tl.to(".line-content-anim", {
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.2,
})
    .to(
        "#hero-subheadline",
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
        },
        "-=0.5"
    )
    .to(
        "#hero-cta-container, .header-cta-button",
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
        },
        "-=0.6"
    );

// 4. SCROLL REVEAL ANIMATIONS
gsap.utils.toArray(".gsap-reveal").forEach((element) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
    });
});

// 5. FOUNDER ANIMATION
gsap.to(".founder-anim", {
    scrollTrigger: {
        trigger: ".founder-anim",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
});

// 6. MOBILE MENU LOGIC
const menuTl = gsap.timeline({ paused: true });
menuTl
    .to("#mobile-menu-overlay", {
        duration: 0.4,
        autoAlpha: 1,
        ease: "power2.inOut",
    })
    .to(
        ".mobile-link-item",
        {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
        },
        "-=0.2"
    );

let isMenuOpen = false;
function toggleMobileMenu() {
    if (!isMenuOpen) {
        menuTl.play();
        document.body.classList.add("menu-open");
        isMenuOpen = true;
    } else {
        menuTl.reverse();
        document.body.classList.remove("menu-open");
        isMenuOpen = false;
    }
}

// 7. FAQ TOGGLE LOGIC
function toggleFaq(element) {
    const isActive = element.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
    });
    if (!isActive) {
        element.classList.add("active");
    }
}

// ========== CONVERSION ENHANCEMENTS ==========

// 8. SCROLL-TRIGGERED CTAs at 50% and 75% scroll depth
const scrollCta50 = document.getElementById('scroll-cta-50');
const scrollCta75 = document.getElementById('scroll-cta-75');
let cta50Shown = false;
let cta75Shown = false;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    // Show CTA at 50% scroll (only once, don't show after contact section)
    if (scrollPercent >= 50 && !cta50Shown && scrollPercent < 75) {
        scrollCta50.classList.add('visible');
        cta50Shown = true;
        
        // Auto-dismiss after 8 seconds
        setTimeout(() => {
            scrollCta50.classList.remove('visible');
            const content = scrollCta50.querySelector('.scroll-cta-content');
            if (content) content.style.display = 'none';
        }, 8000);
    }
    
    // Show CTA at 75% scroll (only once)
    if (scrollPercent >= 75 && !cta75Shown) {
        scrollCta75.classList.add('visible');
        cta75Shown = true;
        
        // Auto-dismiss after 8 seconds
        setTimeout(() => {
            scrollCta75.classList.remove('visible');
            const content = scrollCta75.querySelector('.scroll-cta-content');
            if (content) content.style.display = 'none';
        }, 8000);
    }
    
    // Hide 50% CTA when past 75%
    if (scrollPercent >= 75 && cta50Shown) {
        scrollCta50.classList.remove('visible');
    }
});

function closeScrollCta(ctaId) {
    const cta = document.getElementById(ctaId);
    if (cta) {
        cta.classList.remove('visible');
    }
}

// 9. EXIT-INTENT POPUP DETECTION
let exitIntentShown = false;
const exitPopup = document.getElementById('exit-intent-popup');

// Detect mouse moving toward browser chrome (exit intent)
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        showExitPopup();
    }
});

// Also trigger on mobile via touch
document.addEventListener('touchstart', function() {
    // Could add touch-based exit detection here
});

function showExitPopup() {
    if (!exitIntentShown) {
        exitPopup.classList.add('active');
        exitIntentShown = true;
        // Focus the email input for accessibility
        setTimeout(() => {
            document.getElementById('lead-email').focus();
        }, 100);
    }
}

function closeExitPopup() {
    exitPopup.classList.remove('active');
}

// Close popup on Escape key for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && exitPopup.classList.contains('active')) {
        closeExitPopup();
    }
});

// 10. LEAD CAPTURE FORM HANDLING
function handleLeadCapture(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('lead-email');
    const email = emailInput.value;
    
    if (email) {
        // In production, send to your email service/CRM
        // Example: fetch('/api/leads', { method: 'POST', body: JSON.stringify({ email }) })
        
        // Show success message (replace form with confirmation)
        const form = document.getElementById('lead-capture-form');
        form.innerHTML = '<div style="text-align:center; padding: 20px;"><i data-lucide="check-circle" class="w-12 h-12 text-green-600 mb-4"></i><p style="font-weight:700; font-size:18px; color:#1f2937;">Check your inbox!</p><p style="color:#6b7280; margin-top:8px;">The MVP Validation Checklist is on its way.</p></div>';
        lucide.createIcons();
        
        // Close popup after 3 seconds
        setTimeout(closeExitPopup, 3000);
        
        // Track conversion in analytics (if installed)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', { 'event_category': 'lead_magnet', 'event_label': 'exit_popup' });
        }
    }
}

// 11. PREFERS-REDUCED-MOTION for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // Disable GSAP animations for users who prefer reduced motion
    gsap.globalTimeline.clear();
}

// ========== STICKY NAVIGATION WITH SCROLL-SPY ==========

// 12. Sticky Navigation - Add class when scrolling past hero
const header = document.querySelector('header');
const heroSection = document.getElementById('hero-section');

function handleStickyNav() {
    if (!header || !heroSection) return;
    
    const heroBottom = heroSection.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > heroBottom - 100) {
        header.classList.add('sticky-nav');
    } else {
        header.classList.remove('sticky-nav');
    }
}

// 13. Scroll-Spy - Highlight active navigation link based on current section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

function handleScrollSpy() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('nav-link-active');
            });
            
            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('nav-link-active');
            }
        }
    });
}

// Combined scroll event handler
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            handleFloatingCta();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial check on page load
handleStickyNav();
handleScrollSpy();

// ========== PROGRESS INDICATOR ==========

// 14. Progress Indicator - Updates based on scroll position
const progressIndicator = document.getElementById('progress-indicator');
const progressFill = document.getElementById('progress-fill');
const progressPhases = document.querySelectorAll('.progress-phase');

function handleProgressIndicator() {
    if (!progressIndicator || !progressFill) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
    
    // Show progress indicator when past hero
    const heroSection = document.getElementById('hero-section');
    const heroBottom = heroSection ? heroSection.offsetHeight : 0;
    
    if (scrollTop > heroBottom - 100) {
        progressIndicator.classList.add('visible');
    } else {
        progressIndicator.classList.remove('visible');
    }
    
    // Update progress fill
    progressFill.style.width = Math.min(scrollPercent, 100) + '%';
    
    // Update active phase
    const sections = ['process', 'pricing', 'lab', 'work', 'contact'];
    let activePhase = 'process';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - 200;
            if (scrollTop >= sectionTop) {
                if (sectionId === 'process' || sectionId === 'lab' || sectionId === 'work') {
                    activePhase = 'process';
                } else if (sectionId === 'pricing') {
                    activePhase = 'pricing';
                } else if (sectionId === 'contact') {
                    activePhase = 'contact';
                }
            }
        }
    });
    
    progressPhases.forEach(phase => {
        const phaseName = phase.getAttribute('data-phase');
        if (phaseName === activePhase) {
            phase.classList.add('active');
        } else {
            phase.classList.remove('active');
        }
    });
}

// Add to scroll handler
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial check
handleProgressIndicator();

// Progress indicator click to scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
}

// ========== LIVE CHAT (Tawk.to) ==========

// 15. Tawk.to Integration with 15-second proactive invitation
// Replace XXXXXXXXXX with your actual Tawk.to property ID
(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.src = 'https://embed.tawk.to/XXXXXXXXXX/YYYYYYYYY';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// Proactive chat invitation after 15 seconds
setTimeout(function() {
    if (typeof TawkAPI !== 'undefined') {
        // Show proactive chat invitation
        TawkAPI.toggle();
    }
}, 15000);

// ========== FLOATING CTA ==========

// 16. Floating "Get Started" CTA - appears after pricing section
const floatingCta = document.getElementById('floating-cta');

function handleFloatingCta() {
    if (!floatingCta) return;
    
    const pricingSection = document.getElementById('pricing');
    if (!pricingSection) return;
    
    const pricingBottom = pricingSection.offsetTop + pricingSection.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > pricingBottom - 200) {
        floatingCta.classList.add('visible');
    } else {
        floatingCta.classList.remove('visible');
    }
}

// Initial check
handleFloatingCta();

// ========== SECONDARY NAV / JUMP LINKS ==========

// 17. Jump Links functionality for long sections
const jumpLinks = document.querySelectorAll('.jump-link');

jumpLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            e.preventDefault();
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetTop = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 18. Hide Popups When Contact Section Is Visible (Calendly Optimization)
function dismissPopupsAtContactSection() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    const contactSectionTop = contactSection.offsetTop;
    const contactSectionBottom = contactSectionTop + contactSection.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    // Check if contact section is in viewport (with some buffer)
    const isContactVisible = scrollTop + windowHeight > contactSectionTop + 100;
    
    if (isContactVisible) {
        // Dismiss exit-intent popup if visible
        const exitPopup = document.getElementById('exit-intent-popup');
        if (exitPopup && exitPopup.classList.contains('active')) {
            exitPopup.classList.remove('active');
        }
        
        // Dismiss floating CTA if visible
        const floatingCta = document.getElementById('floating-cta');
        if (floatingCta && floatingCta.classList.contains('visible')) {
            floatingCta.classList.remove('visible');
        }
        
        // Dismiss scroll-triggered CTAs and their content if visible
        const scrollCta50 = document.getElementById('scroll-cta-50');
        const scrollCta75 = document.getElementById('scroll-cta-75');
        const scrollCtaContent50 = document.querySelector('.scroll-cta-content');
        
        if (scrollCta50) {
            scrollCta50.classList.remove('visible');
            // Specifically hide scroll-cta-content
            const content = scrollCta50.querySelector('.scroll-cta-content');
            if (content) content.style.display = 'none';
        }
        if (scrollCta75) {
            scrollCta75.classList.remove('visible');
            const content = scrollCta75.querySelector('.scroll-cta-content');
            if (content) content.style.display = 'none';
        }
    }
}

// Add to scroll handler
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            handleFloatingCta();
            dismissPopupsAtContactSection();
            ticking = false;
        });
        ticking = true;
    }
});