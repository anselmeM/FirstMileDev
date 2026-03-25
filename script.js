

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
    }
    
    // Show CTA at 75% scroll (only once)
    if (scrollPercent >= 75 && !cta75Shown) {
        scrollCta75.classList.add('visible');
        cta75Shown = true;
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