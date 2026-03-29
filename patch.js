const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// 1. Find and replace the CTA scroll logic (around line 102)
const ctaScrollLogic = `window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    // Show CTA at 50% scroll (only once, don't show after contact section)
    // Check for reduced motion preference

    if (scrollPercent >= 50 && !cta50Shown && scrollPercent < 75 && !prefersReducedMotion.matches) {
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
});`;

const ctaFunction = `function handleScrollCTAs() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    // Show CTA at 50% scroll (only once, don't show after contact section)
    // Check for reduced motion preference

    if (scrollPercent >= 50 && !cta50Shown && scrollPercent < 75 && !prefersReducedMotion.matches) {
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
}`;

content = content.replace(ctaScrollLogic, ctaFunction);

// 2. Find and remove redundant scroll event listeners (lines 376, 452)
const redundantListener1 = `// Combined scroll event handler
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            handleBackToTop();
            ticking = false;
        });
        ticking = true;
    }
});`;

const redundantListener2 = `// Add to scroll handler
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
});`;

// Note: Ensure `let ticking = false;` is preserved somewhere or moved to the global scope. We will place it before the final handler.
content = content.replace(redundantListener1, '');
content = content.replace(redundantListener2, '');


// 3. Find and replace the tracking scroll logic (around line 516)
const trackingScrollLogic = `    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        Object.keys(scrollMilestones).forEach(function(milestone) {
            if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
                scrollMilestones[milestone] = true;

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': milestone + '_percent',
                        'value': milestone
                    });
                }
            }
        });
    });`;

const trackingFunction = `    function handleScrollTracking() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        Object.keys(scrollMilestones).forEach(function(milestone) {
            if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
                scrollMilestones[milestone] = true;

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': milestone + '_percent',
                        'value': milestone
                    });
                }
            }
        });
    }

    // Attach function to global scope so the main scroll handler can call it
    window.handleScrollTracking = handleScrollTracking;`;

content = content.replace(trackingScrollLogic, trackingFunction);


// 4. Update the final scroll listener (around line 624)
const finalListener = `// Add to scroll handler
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            handleBackToTop();
            dismissPopupsAtContactSection();
            ticking = false;
        });
        ticking = true;
    }
});`;

const updatedFinalListener = `// Combined scroll event handler
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleScrollCTAs();
            handleStickyNav();
            handleScrollSpy();
            handleProgressIndicator();
            handleBackToTop();
            dismissPopupsAtContactSection();
            if (typeof window.handleScrollTracking === 'function') {
                window.handleScrollTracking();
            }
            ticking = false;
        });
        ticking = true;
    }
});`;

content = content.replace(finalListener, updatedFinalListener);

fs.writeFileSync('script.js', content, 'utf8');
console.log('script.js updated successfully.');
