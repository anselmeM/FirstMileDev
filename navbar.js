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
        class="fixed inset-0 bg-[#1f2937] z-50 flex-col justify-center items-center text-center hidden text-white" 
        style="opacity: 0; transition: opacity 0.4s ease-in-out;">
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
        <button class="md:hidden text-white z-10 p-2 hover:bg-white/10 rounded-lg transition"
            onclick="toggleMobileMenu()">
            <i data-lucide="menu" class="w-8 h-8"></i>
        </button>
    </header>
`;

let isMenuOpen = false;
window.toggleMobileMenu = function() {
    const overlay = document.getElementById('mobile-menu-overlay');
    if (!overlay) return;
    
    if (window.menuTl && typeof window.menuTl.play === 'function') {
        if (!isMenuOpen) {
            window.menuTl.play();
            document.body.classList.add("menu-open");
            isMenuOpen = true;
        } else {
            window.menuTl.reverse();
            document.body.classList.remove("menu-open");
            isMenuOpen = false;
        }
    } else {
        // Fallback: CSS Toggle
        if (!isMenuOpen) {
            overlay.classList.remove('hidden');
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
            document.body.classList.add('menu-open');
            isMenuOpen = true;
        } else {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.classList.add('hidden');
                overlay.style.display = 'none';
            }, 400);
            document.body.classList.remove('menu-open');
            isMenuOpen = false;
        }
    }
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
