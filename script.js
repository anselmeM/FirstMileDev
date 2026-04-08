

// 2. INITIALIZE ICONS & GSAP (Browser only)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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
    window.toggleMobileMenu = function() {
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
}

// 7. FAQ TOGGLE LOGIC
// ⚡ Bolt: Track active FAQ item to avoid O(N) DOM query and iteration on every click
let activeFaqItem = null;
let initializedFaq = false;

function toggleFaq(element) {
    // Lazily find any currently active FAQ if this is the first interaction
    if (!initializedFaq) {
        activeFaqItem = document.querySelector('.faq-item.active');
        initializedFaq = true;
    }

    const isActive = element.classList.contains("active");

    // Close the currently active item if it exists and is not the clicked element
    if (activeFaqItem && activeFaqItem !== element) {
        activeFaqItem.classList.remove("active");
    }

    // Toggle the clicked element
    if (!isActive) {
        element.classList.add("active");
        activeFaqItem = element;
    } else {
        element.classList.remove("active");
        activeFaqItem = null;
    }
}

// Support unit testing in Node.js while maintaining browser compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleFaq };
}