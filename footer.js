/**
 * FirstMileDev Unified Footer Component
 * Centrally manages the site's footer across all pages.
 */

const footerPath = window.location.pathname;
const isFooterHomePage = footerPath === '/' || footerPath.endsWith('index.html') || footerPath === '';
const footerLinkPrefix = isFooterHomePage ? '' : 'index.html';

const footerHTML = `
    <footer class="bg-[#FF3B3F] text-white px-6 py-16" role="contentinfo">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <!-- Logo & Tagline -->
                <div class="md:col-span-2">
                    <div class="text-2xl font-headline uppercase-text tracking-tighter mb-4">
                        FirstMileDev
                    </div>
                    <p class="text-white/80 text-sm max-w-sm mb-6">The Market-First MVP Agency. We validate demand before you write code for high-growth startups.</p>
                    <div class="flex gap-4">
                        <a href="https://www.youtube.com/channel/UCyonXfGimcVb2ZbfuaZfR_g" target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white transition" aria-label="FirstMileDev on YouTube">
                            <i data-lucide="youtube" class="w-5 h-5" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="text-white/80 hover:text-white transition" aria-label="FirstMileDev on Twitter">
                            <i data-lucide="twitter" class="w-5 h-5" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="text-white/80 hover:text-white transition" aria-label="FirstMileDev on LinkedIn">
                            <i data-lucide="linkedin" class="w-5 h-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="${footerLinkPrefix}#process" class="text-white/80 hover:text-white text-sm transition">Process</a></li>
                        <li><a href="${footerLinkPrefix}#work" class="text-white/80 hover:text-white text-sm transition">Work</a></li>
                        <li><a href="${footerLinkPrefix}#pricing" class="text-white/80 hover:text-white text-sm transition">Roadmap</a></li>
                        <li><a href="calculator.html" class="text-white/80 hover:text-white text-sm transition">Calculator</a></li>
                        <li><a href="${footerLinkPrefix}#contact" class="text-white/80 hover:text-white text-sm transition">Get Started</a></li>
                    </ul>
                </div>

                <!-- Resources & Contact -->
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">Resources</h4>
                    <ul class="space-y-2 mb-6">
                        <li><a href="blog.html" class="text-white/80 hover:text-white text-sm transition">Blog</a></li>
                        <li><a href="faq.html" class="text-white/80 hover:text-white text-sm transition">FAQ</a></li>
                        <li><a href="case-study-fintech.html" class="text-white/80 hover:text-white text-sm transition">Case Studies</a></li>
                        <li><a href="sitemap.xml" class="text-white/80 hover:text-white text-sm transition" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
                    </ul>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">Contact</h4>
                    <p class="text-white/80 text-sm">hello@firstmiledev.com</p>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-white/60 text-xs">
                    &copy; <span id="copyright-year">2024</span> FirstMileDev. Validate First. All rights reserved.
                </div>
                <div class="flex gap-6 text-xs">
                    <a href="privacy.html" class="text-white/60 hover:text-white transition">Privacy Policy</a>
                    <a href="terms.html" class="text-white/60 hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
`;

function initFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;

        // Update copyright year
        const copyrightElement = document.getElementById('copyright-year');
        if (copyrightElement) {
            copyrightElement.textContent = new Date().getFullYear();
        }

        // Initialize Lucide icons for the newly injected footer
        if (window.lucide) {
            window.lucide.createIcons();
        }
    } else {
        console.warn('Footer placeholder not found.');
    }
}

// Auto-initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
