/**
 * FirstMileDev Unified Navbar Component
 * Centrally manages the site's navigation across all pages.
 */

const path = window.location.pathname;
const isHomePage = path === '/' || path.endsWith('index.html') || path === '';
const linkPrefix = isHomePage ? '' : 'index.html';

const mobileMenuHTML = `
    <!-- MOBILE MENU OVERLAY -->
    <div id="mobile-menu-overlay"
        class="fixed inset-0 bg-[#1f2937] z-50 flex-col justify-center items-center text-center hidden text-white">
        <!-- Close Button -->
        <button onclick="toggleMobileMenu()"
            class="absolute top-6 right-6 text-white p-2 hover:rotate-90 transition-transform duration-300">
            <i data-lucide="x" class="w-10 h-10"></i>
        </button>

        <!-- Menu Links -->
        <nav class="flex flex-col space-y-8">
            <a href="${linkPrefix}#process" onclick="toggleMobileMenu()"
                class="mobile-link-item text-4xl font-headline text-white uppercase hover:text-[#FF3B3F] transition-all">Process</a>
            <a href="${linkPrefix}#lab" onclick="toggleMobileMenu()"
                class="mobile-link-item text-4xl font-headline text-white uppercase hover:text-[#FF3B3F] transition-all">The Lab</a>
            <a href="${linkPrefix}#work" onclick="toggleMobileMenu()"
                class="mobile-link-item text-4xl font-headline text-white uppercase hover:text-[#FF3B3F] transition-all">Work</a>
            <a href="${linkPrefix}#pricing" onclick="toggleMobileMenu()"
                class="mobile-link-item text-4xl font-headline text-white uppercase hover:text-[#FF3B3F] transition-all">Roadmap</a>
            <a href="calculator.html" onclick="toggleMobileMenu()"
                class="mobile-link-item text-4xl font-headline text-[#FF3B3F] uppercase hover:text-white transition-all">Calculator</a>

            <a href="${linkPrefix}#contact" onclick="toggleMobileMenu()"
                class="mobile-link-item text-xl font-bold font-body text-white uppercase tracking-widest border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#1f2937] transition-all mt-4">Start
                Validation</a>
        </nav>
    </div>
`;

const headerHTML = `
    <!-- HEADER -->
    <header class="relative flex justify-between items-center py-4 z-20 w-full text-white" id="main-navbar">
        <div class="text-lg font-headline uppercase-text leading-tight z-10 font-black tracking-tighter cursor-pointer"
            id="navbar-logo">
            First<br>MileDev
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
            <nav class="flex items-center space-x-8">
                <a href="${linkPrefix}#process"
                    class="uppercase-text text-xs font-bold tracking-widest hover:opacity-75 transition">Process</a>
                <a href="${linkPrefix}#lab"
                    class="uppercase-text text-xs font-bold tracking-widest hover:opacity-75 transition">The Lab</a>
                <a href="${linkPrefix}#work"
                    class="uppercase-text text-xs font-bold tracking-widest hover:opacity-75 transition">Work</a>
                <a href="${linkPrefix}#pricing"
                    class="uppercase-text text-xs font-bold tracking-widest hover:opacity-75 transition">Roadmap</a>
                <a href="calculator.html"
                    class="uppercase-text text-xs font-bold tracking-widest hover:opacity-75 transition text-white border border-white/30 px-3 py-1 rounded hover:bg-white hover:text-[#FF3B3F]">Calculator</a>
            </nav>
            <a href="${linkPrefix}#contact" class="header-cta-button"> Start Validation </a>
        </div>

        <!-- Mobile Hamburger -->
        <button id="mobile-menu-toggle" 
            class="md:hidden block text-white z-10 p-2 hover:bg-white/10 rounded-lg transition"
            style="display: block;"
            aria-label="Toggle mobile menu">
            <i data-lucide="menu" class="w-8 h-8"></i>
        </button>
    </header>
`;

let isMenuOpen = false;

function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    
    if (!overlay) {
        console.error('Mobile menu overlay not found');
        return;
    }
    
    console.log('Toggle called, isMenuOpen:', isMenuOpen);
    
    if (!isMenuOpen) {
        // OPEN MENU
        overlay.classList.remove('hidden');
        overlay.classList.add('open');
        
        // Animate links with staggered delay
        const links = overlay.querySelectorAll('.mobile-link-item');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
        
        document.body.classList.add("menu-open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
        isMenuOpen = true;
    } else {
        // CLOSE MENU
        const links = overlay.querySelectorAll('.mobile-link-item');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
            }, index * 50);
        });
        
        setTimeout(() => {
            overlay.classList.remove('open');
            overlay.classList.add('hidden');
        }, 400);
        
        document.body.classList.remove("menu-open");
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        isMenuOpen = false;
    }
}

// Expose globally
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
};

function initNavbar() {
    const combinedPlaceholder = document.getElementById('navbar-placeholder');
    const headerPlaceholder = document.getElementById('header-placeholder');
    const mobilePlaceholder = document.getElementById('mobile-menu-placeholder');

    if (combinedPlaceholder) {
        combinedPlaceholder.innerHTML = mobileMenuHTML + headerHTML;
    } else {
        if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
        if (mobilePlaceholder) mobilePlaceholder.innerHTML = mobileMenuHTML;
    }
    
    const header = document.getElementById('main-navbar');
    if (!isHomePage && header) {
        header.classList.add('bg-[#FF3B3F]', 'px-6', 'md:px-8', 'lg:px-16');
    }
    
    // Initialize GSAP mobile menu animation after overlay is added to DOM
    if (window.gsap && document.getElementById('mobile-menu-overlay')) {
        window.menuTl = window.gsap.timeline({ paused: true });
        window.menuTl
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
    }
    
    // Add click listener to hamburger button
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleMobileMenu);
    }
    
    const logo = document.getElementById('navbar-logo');
    if (logo) {
        logo.addEventListener('click', () => {
            if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.location.href = 'index.html';
            }
        });
    }
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Auto-initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}

// ========== RESPONSIVE MENU HANDLING ==========
function handleResize() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 768) {
        // Desktop: close menu if open, disable toggle
        if (isMenuOpen && overlay) {
            // Close the menu
            overlay.classList.remove('open');
            overlay.classList.add('hidden');
            document.body.classList.remove('menu-open');
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
            isMenuOpen = false;
        }
        
        // Ensure toggle is hidden on desktop
        if (toggleBtn) {
            toggleBtn.style.display = 'none';
        }
    } else {
        // Mobile: ensure toggle is visible
        if (toggleBtn) {
            toggleBtn.style.display = 'block';
        }
    }
}

// Add resize listener with debounce
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
});

// Initial check
handleResize();
