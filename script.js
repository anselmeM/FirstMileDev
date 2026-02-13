

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