// --- Standard JS Functionality ---
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const closeButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
function openMenu() { mobileMenu.classList.add('active'); menuButton.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; if (closeButton) closeButton.focus(); }
function closeMenu() { mobileMenu.classList.remove('active'); menuButton.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; if (menuButton) menuButton.focus(); }
if (menuButton) menuButton.addEventListener('click', openMenu);
if (closeButton) closeButton.addEventListener('click', closeMenu);
mobileNavLinks.forEach(link => { link.addEventListener('click', closeMenu); });

// Basic Newsletter Form Handling (Placeholder)
const newsletterForm = document.getElementById('newsletter-form');
const newsletterFormStatus = document.getElementById('newsletter-form-status');
const newsletterEmailInput = document.getElementById('newsletter-email');

function showNewsletterError(message) {
    const errorEl = document.getElementById('newsletter-email-error');
    if(errorEl){ errorEl.textContent = message; errorEl.classList.remove('hidden'); newsletterEmailInput?.setAttribute('aria-invalid', 'true'); }
}
function hideNewsletterError() {
     const errorEl = document.getElementById('newsletter-email-error');
     if(errorEl){ errorEl.classList.add('hidden'); newsletterEmailInput?.removeAttribute('aria-invalid'); }
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        hideNewsletterError();
        if(newsletterFormStatus) newsletterFormStatus.textContent = '';
        if(newsletterFormStatus) newsletterFormStatus.className = 'mt-2 text-sm text-gray-600'; // Default status color
        const email = newsletterEmailInput ? newsletterEmailInput.value.trim() : '';
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            showNewsletterError('Please enter a valid email address.');
            if(newsletterFormStatus) newsletterFormStatus.textContent = 'Invalid email.';
            if(newsletterFormStatus) newsletterFormStatus.classList.add('text-red-500'); // Use standard red for error
            return;
        }
        if(newsletterFormStatus) newsletterFormStatus.textContent = 'Submitting...';
        if(newsletterFormStatus) newsletterFormStatus.classList.add('text-yellow-600'); // Use a visible yellow/orange
        // Replace with actual form submission logic
        setTimeout(() => {
            if(newsletterFormStatus) newsletterFormStatus.textContent = 'Thanks for subscribing!';
            if(newsletterFormStatus) newsletterFormStatus.classList.remove('text-yellow-600');
            if(newsletterFormStatus) newsletterFormStatus.classList.add('text-green-600'); // Use standard green for success
            newsletterForm.reset();
        }, 1500);
    });
}


// --- GSAP Animations ---
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

     // Helper function to split text into letter spans
     function splitTextIntoLetters(selector) {
         const element = document.querySelector(selector);
         if (!element) { console.warn(`Element not found: ${selector}`); return []; }
         let textContent = element.textContent.trim();
         let letters = textContent.split('');
         element.innerHTML = '';
         let letterSpans = [];
         letters.forEach(letter => {
             const letterSpan = document.createElement('span');
             letterSpan.classList.add('letter');
             letterSpan.style.display = 'inline-block'; // Ensure letters are treated as blocks for transform
             letterSpan.innerHTML = letter === ' ' ? '&nbsp;' : letter; // Handle spaces
             element.appendChild(letterSpan);
             letterSpans.push(letterSpan);
         });
         return letterSpans;
     }

     // Helper function to split text into word spans wrapped for animation
     function splitTextIntoWords(selector) {
         const element = document.querySelector(selector);
         if (!element) { console.warn(`Element not found: ${selector}`); return []; }
         const childNodes = Array.from(element.childNodes); // Get all nodes (text, elements like <br>)
         element.innerHTML = ''; // Clear original content
         let wordSpans = [];

         childNodes.forEach(node => {
             if (node.nodeType === Node.TEXT_NODE) { // Process text nodes
                 const text = node.textContent;
                 // Split by space, filter out empty strings resulting from multiple spaces
                 const words = text.split(/\s+/).filter(word => word.length > 0);

                 words.forEach(word => {
                     const wordWrapper = document.createElement('span');
                     wordWrapper.classList.add('word-wrapper');
                     // Style wrapper for overflow hidden effect
                     wordWrapper.style.display = 'inline-block';
                     wordWrapper.style.overflow = 'hidden';
                     wordWrapper.style.verticalAlign = 'bottom'; // Align wrappers

                     const wordSpan = document.createElement('span');
                     wordSpan.classList.add('word');
                     wordSpan.textContent = word;
                     wordSpan.style.display = 'block'; // Allow transform Y
                     wordWrapper.appendChild(wordSpan);

                     element.appendChild(wordWrapper);
                     wordSpans.push(wordSpan); // Add the inner span to the list for animation
                     element.appendChild(document.createTextNode(' ')); // Add space after each word wrapper
                 });
             } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'br') {
                 // Re-append <br> tags
                 element.appendChild(node.cloneNode(false));
             }
             // Add handling for other element types if necessary
         });
         // Clean up trailing space if the last node was text
         if (element.lastChild && element.lastChild.nodeType === Node.TEXT_NODE && element.lastChild.textContent.trim() === '') {
            element.removeChild(element.lastChild);
         }
         return wordSpans; // Return the list of inner word spans to animate
     }

    // --- Background Color Scroll Trigger ---
    // Use the actual color values from the new palette
    const sectionColors = {
        "#hero-section": "#FF3B3F", // Watermelon
        "#about": "#EFEFEF",       // Neutral
        "#cta-section": "#FFFFFF",    // White
        "#partnerships": "#EFEFEF", // Neutral
        "#work": "#FFFFFF",       // White
        "#services": "#CAEBF2",    // Sky
        "#pricing": "#EFEFEF",    // Neutral
        "#faq": "#EFEFEF",        // Neutral
        "#testimonials": "#FFFFFF", // White
        "#booking": "#CAEBF2",     // Sky
        "#newsletter": "#EFEFEF",  // Neutral
        "footer": "#FFFFFF"       // White (or maybe Neutral #EFEFEF)
    };

    const firstSectionBg = sectionColors["#hero-section"] || '#FFFFFF'; // Default to white
    gsap.set('body', { backgroundColor: firstSectionBg });

    const sections = gsap.utils.toArray('[data-bgcolor]');
    sections.forEach((section) => {
        // Read the intended color from the map, fallback to white
        const bgColor = sectionColors[`#${section.id}`] || '#FFFFFF';
        // Update the data-bgcolor attribute for potential future use/reference
        section.dataset.bgcolor = bgColor;

        ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => gsap.to('body', { backgroundColor: bgColor, duration: 0.5, ease: 'none', overwrite: 'auto' }),
            onEnterBack: () => gsap.to('body', { backgroundColor: bgColor, duration: 0.5, ease: 'none', overwrite: 'auto' })
        });
    });

    // --- Hero Animations Timeline ---
    let heroTimeline = gsap.timeline({ delay: 0.5 });

    // --- Hero Headline Line Reveal ---
    const heroHeadlineLines = gsap.utils.toArray('#hero-headline .line-content-anim');
    if (heroHeadlineLines.length > 0) {
        gsap.set(heroHeadlineLines, { yPercent: 105, opacity: 0 });
        heroTimeline.to(heroHeadlineLines, {
            yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out'
        }, 0);

        const arrowSVG = document.getElementById('hero-arrow-svg');
        if (arrowSVG) {
            const paths = arrowSVG.querySelectorAll('line, polyline');
            if (paths.length > 0) {
                 gsap.set(paths, { strokeDashoffset: 1 });
                 heroTimeline.to(paths, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut', stagger: 0.2 }, 0.3);
            }
        }
    }

    // --- Hero Subheadline Word Reveal ---
    const heroSubheadlineWords = splitTextIntoWords('#hero-subheadline');
    if (heroSubheadlineWords.length > 0) {
        gsap.set(heroSubheadlineWords, { yPercent: 100, opacity: 0 });
        heroTimeline.to(heroSubheadlineWords, {
            yPercent: 0, opacity: 1, stagger: 0.06, duration: 0.7, ease: 'power3.out'
        }, 0.5);
    }

    // --- Hero CTA Link Reveal ---
     heroTimeline.to(".hero-cta-link.gsap-reveal-from-bottom", {
         opacity: 1, y: 0, duration: 0.5, ease: 'power2.out'
     }, "-=0.4");

    // --- Intro Headline Line Reveal (Scroll Triggered) ---
     const introLines = gsap.utils.toArray('#intro-headline .line-content-anim');
     if (introLines.length > 0) {
         gsap.set(introLines, { yPercent: 105, opacity: 0 });
         gsap.to(introLines, {
             yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
             scrollTrigger: { trigger: '#intro-headline', start: 'top 85%', toggleActions: 'play none none none' }
         });
     }

    // --- Intro Paragraph Word Reveal (Scroll Triggered) ---
    const introParagraphWords = splitTextIntoWords('#intro-paragraph');
    if (introParagraphWords.length > 0) {
        gsap.set(introParagraphWords, { yPercent: 100, opacity: 0 });
        gsap.to(introParagraphWords, {
            yPercent: 0, opacity: 1, stagger: 0.02, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: '#intro-paragraph', start: 'top 90%', toggleActions: 'play none none none' }
        });
    }

    // --- About Paragraph Word Reveal (Scroll Triggered) ---
    const aboutParagraphWords = splitTextIntoWords('#about-paragraph');
    if (aboutParagraphWords.length > 0) {
        gsap.set(aboutParagraphWords, { yPercent: 100, opacity: 0 });
        gsap.to(aboutParagraphWords, {
            yPercent: 0, opacity: 1, stagger: 0.02, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: '#about-paragraph', start: 'top 90%', toggleActions: 'play none none none' }
        });
    }

    // --- Headline Letter Reveals (Scroll Triggered) ---
    const headlineSelectors = ['#work-headline', '#services-headline', '#pricing-headline'];
    headlineSelectors.forEach(selector => {
        const spans = splitTextIntoLetters(selector);
        if (spans.length > 0) {
            gsap.set(spans, { opacity: 0, y: 20 });
            gsap.to(spans, {
                opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: 'expo.out',
                scrollTrigger: { trigger: selector, start: 'top 80%', toggleActions: 'play none none none' }
            });
        }
    });

    // --- Headline Word Reveals (Scroll Triggered) ---
    const wordRevealSelectors = ['#about-headline', '#partnerships-headline', '#testimonials-headline', '#faq-headline'];
     wordRevealSelectors.forEach(selector => {
         const words = splitTextIntoWords(selector);
         if (words.length > 0) {
             gsap.set(words, { yPercent: 100, opacity: 0 });
             gsap.to(words, {
                 yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power3.out',
                 scrollTrigger: { trigger: selector, start: "top 85%", toggleActions: "play none none none" }
             });
         }
     });

    // --- Newsletter Headline Line Reveal (Scroll Triggered) ---
    const newsletterLines = gsap.utils.toArray('#newsletter-headline .line-content-nl');
    if (newsletterLines.length > 0) {
        gsap.set(newsletterLines, { yPercent: 105, opacity: 0 });
        gsap.to(newsletterLines, {
            yPercent: 0, opacity: 1, stagger: 0.15, duration: 1.0, ease: 'power3.out',
            scrollTrigger: { trigger: '#newsletter-headline', start: 'top 85%', toggleActions: 'play none none none' }
        });
    }

    // --- CTA Section Line Reveals (Scroll Triggered) ---
     const ctaHeadlineLine = document.querySelector('#cta-headline .line-content-anim');
     if (ctaHeadlineLine) {
         gsap.set(ctaHeadlineLine, { yPercent: 105, opacity: 0 });
         gsap.to(ctaHeadlineLine, {
             yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
             scrollTrigger: { trigger: '#cta-headline', start: 'top 85%', toggleActions: 'play none none none' }
         });
     }
     const ctaSubtextLine = document.querySelector('#cta-subtext .line-content-anim');
     if(ctaSubtextLine) {
         gsap.set(ctaSubtextLine, { yPercent: 105, opacity: 0 });
         gsap.to(ctaSubtextLine, {
             yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.15,
             scrollTrigger: { trigger: '#cta-subtext', start: 'top 90%', toggleActions: 'play none none none' }
         });
     }

    // --- General Reveal Elements (Scroll Triggered) ---
    const animatedTextIds = ['intro-headline', 'hero-headline', 'work-headline', 'services-headline', 'pricing-headline', 'about-headline', 'partnerships-headline', 'testimonials-headline', 'faq-headline', 'booking-headline', 'cta-headline'];
    const animatedRevealIds = ['good-fast-cheap-container', 'intro-paragraph', 'about-paragraph', 'cta-subtext'];
    const sectionHandledSeparately = ['#newsletter', '#faq', '#booking', '.testimonial-item', '.service-card', '#cta-section', '#pricing .grid > .gsap-reveal', '#asset-list .asset-item'];

    const textElements = gsap.utils.toArray('.gsap-reveal-text');
    textElements.forEach(el => {
        if (!animatedTextIds.includes(el.id)) {
            gsap.to(el, { opacity: 1, y: 0, duration: 2.0, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } });
        }
    });

    const revealElements = gsap.utils.toArray('.gsap-reveal');
    revealElements.forEach(el => {
         const isHandled = animatedRevealIds.includes(el.id) || sectionHandledSeparately.some(selector => el.matches(selector) || el.closest(selector));
         if (!isHandled) {
            gsap.to(el, { opacity: 1, y: 0, duration: 2.0, delay: 0.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } });
        }
    });

     // --- Service Card & Icon Stagger Reveal (Scroll Triggered) ---
     const serviceCards = gsap.utils.toArray('#services .service-card');
     if (serviceCards.length > 0) {
         gsap.set(serviceCards, { opacity: 0, y: 30 });
         gsap.set('#services .service-icon', { opacity: 0, scale: 0.5, rotation: -30 });

         gsap.to(serviceCards, {
             opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: 'expo.out',
             scrollTrigger: { trigger: '#services .grid', start: 'top 80%', toggleActions: 'play none none none' }
         });
         gsap.to('#services .service-icon', {
             opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, delay: 0.2,
             ease: 'back.out(1.7)',
             scrollTrigger: { trigger: '#services .grid', start: 'top 80%', toggleActions: 'play none none none' }
         });
     }

    // --- Portfolio Item Image Reveal (Scroll Triggered) ---
     const portfolioItems = gsap.utils.toArray('.portfolio-item');
     portfolioItems.forEach((item, index) => {
         const img = item.querySelector('img');
         if (img) {
             gsap.set(item, { opacity: 1 });
             gsap.set(img, { scale: 1.1, opacity: 0, yPercent: 0 });
             gsap.to(img, {
                 scale: 1, opacity: 1, yPercent: 0, duration: 1.8, ease: 'expo.out',
                 scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' },
                 delay: (index % 3) * 0.15
             });
         }
     });

     // --- Pricing Grid Stagger Reveal (Scroll Triggered) ---
     const pricingItems = gsap.utils.toArray('#pricing .grid > .gsap-reveal');
      if(pricingItems.length > 0) {
         gsap.set(pricingItems, { opacity: 0, y: 30 });
         gsap.to(pricingItems, {
             opacity: 1, y: 0, duration: 1.5, ease: 'expo.out', stagger: 0.2,
             scrollTrigger: { trigger: '#pricing .grid', start: 'top 80%', toggleActions: 'play none none none' }
         });
      }

     // --- Newsletter Form Column Reveal (Scroll Triggered) ---
     const newsletterItems = gsap.utils.toArray('#newsletter .grid > .gsap-reveal');
     if(newsletterItems.length > 0) {
        gsap.set(newsletterItems, { opacity: 0, y: 30 });
        gsap.to(newsletterItems, {
            opacity: 1, y: 0, duration: 1.5, ease: 'expo.out', stagger: 0.2,
            scrollTrigger: { trigger: '#newsletter', start: 'top 80%', toggleActions: 'play none none none' }
        });
     }

    // --- Asset List Items Reveal (Scroll Triggered) ---
     const assetList = document.getElementById('asset-list');
     if (assetList) {
        const assetItems = gsap.utils.toArray(assetList.querySelectorAll('.asset-item'));
         gsap.set(assetItems, { opacity: 0, y: 20 });
         gsap.to(assetItems, {
             opacity: 1, y: 0, duration: 1.0, ease: 'expo.out', stagger: 0.05,
             scrollTrigger: { trigger: assetList, start: 'top 85%', toggleActions: 'play none none none' }
         });
     }

     // --- Asset Intro Text Word Reveal (Scroll Triggered) ---
     const assetIntroWords = splitTextIntoWords('#asset-intro-text');
     if (assetIntroWords.length > 0) {
         gsap.set(assetIntroWords, { yPercent: 100, opacity: 0 });
         gsap.to(assetIntroWords, {
             yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power3.out',
             scrollTrigger: { trigger: "#asset-intro-text", start: "top 90%", toggleActions: "play none none none" }
         });
     }

     // --- Good/Fast/Cheap Animation (Scroll Triggered) ---
     const gfcContainer = document.getElementById('good-fast-cheap-container');
     if (gfcContainer) {
         const goodLetters = splitTextIntoLetters('#good-text');
         const fastLetters = splitTextIntoLetters('#fast-text');
         const cheapLetters = splitTextIntoLetters('#cheap-text');
         const crossLines = gfcContainer.querySelectorAll('.cross-line');

         gsap.set([...goodLetters, ...fastLetters, ...cheapLetters], { opacity: 0, y: 20 });
         gsap.set(crossLines, { scaleX: 0, transformOrigin: 'left center', opacity: 0 });

         let gfcTimeline = gsap.timeline({
             scrollTrigger: { trigger: gfcContainer, start: "top 80%", toggleActions: "play none none none" }
         });

         if (goodLetters.length > 0) { gfcTimeline.to(goodLetters, { opacity: 1, y: 0, stagger: 0.1, duration: 1.0, ease: 'expo.out' }); }
         if (fastLetters.length > 0) { gfcTimeline.to(fastLetters, { opacity: 1, y: 0, stagger: 0.1, duration: 1.0, ease: 'expo.out' }, "-=0.5"); }
         if (cheapLetters.length > 0) {
             gfcTimeline.to(cheapLetters, { opacity: 1, y: 0, stagger: 0.1, duration: 1.0, ease: 'expo.out' }, "-=0.5");
             if (crossLines.length > 0) {
                gfcTimeline.to(crossLines, { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power2.inOut' }, "-=0.7");
             }
         }
     }

     // --- Logo Marquee Animation ---
     const marqueeWrapper = document.querySelector('.logo-marquee-wrapper');
     const marqueeContainer = document.querySelector('.logo-scroll-container');
     if (marqueeContainer && marqueeWrapper) {
         const logos = marqueeContainer.querySelectorAll('.svg-logo');
         if (logos.length > 0) {
             const cloneCount = 5;
             for (let i = 0; i < cloneCount; i++) {
                 logos.forEach(logo => { marqueeContainer.appendChild(logo.cloneNode(true)); });
             }
             let originalLogosWidth = 0;
             logos.forEach(logo => {
                 const style = window.getComputedStyle(logo);
                 const marginRight = parseFloat(style.marginRight) || 0;
                 const marginLeft = parseFloat(style.marginLeft) || 0;
                 originalLogosWidth += logo.scrollWidth + marginLeft + marginRight;
             });
             let marqueeTween = gsap.to(marqueeContainer, {
                 x: () => `-${originalLogosWidth}px`, duration: 25, ease: "none", repeat: -1,
             });
             marqueeWrapper.addEventListener('mouseenter', () => marqueeTween.pause());
             marqueeWrapper.addEventListener('mouseleave', () => marqueeTween.play());
         }
     }

     // --- FAQ Accordion (Using max-height) ---
    const faqItems = gsap.utils.toArray(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-toggle-icon");

        gsap.set(answer, { maxHeight: 0, paddingBottom: 0 });

        if(question && answer && icon){
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                const currentMaxHeight = isActive ? 0 : answer.scrollHeight;

                item.classList.toggle("active");
                question.setAttribute('aria-expanded', !isActive);

                gsap.to(answer, {
                    maxHeight: currentMaxHeight,
                    paddingBottom: isActive ? 0 : '1.5rem',
                    duration: 0.4,
                    ease: "power1.inOut"
                });

                gsap.to(icon, {
                    rotation: isActive ? 0 : 45,
                    duration: 0.3
                });
            });
        }
    });
     // --- FAQ Items Stagger Reveal (Scroll Triggered) ---
     const faqRevealItems = gsap.utils.toArray('#faq .faq-item');
     if(faqRevealItems.length > 0) {
        gsap.set(faqRevealItems, { opacity: 0, y: 30 });
        gsap.to(faqRevealItems, {
            opacity: 1, y: 0, duration: 1.0, ease: 'expo.out', stagger: 0.15,
            scrollTrigger: { trigger: '.faq-container', start: 'top 85%', toggleActions: 'play none none none' }
        });
     }

     // --- Booking Section Reveal (Scroll Triggered) ---
     const bookingHeadline = document.getElementById('booking-headline');
     const calendlyWidget = document.querySelector('.calendly-widget-container');

     if(bookingHeadline) {
         gsap.set(bookingHeadline, { opacity: 0, y: 30 });
         gsap.to(bookingHeadline, {
             opacity: 1, y: 0, duration: 1.0, ease: 'expo.out',
             scrollTrigger: { trigger: bookingHeadline, start: "top 85%", toggleActions: "play none none none" }
         });
     }
     if(calendlyWidget) {
         gsap.set(calendlyWidget, { opacity: 0, y: 30 });
         gsap.to(calendlyWidget, {
             opacity: 1, y: 0, duration: 1.0, delay: 0.2, ease: 'expo.out',
             scrollTrigger: { trigger: calendlyWidget, start: "top 90%", toggleActions: "play none none none" }
         });
     }

     // --- Testimonial SVG Border Drawing & Item Reveal (Scroll Triggered) ---
     const testimonialItems = gsap.utils.toArray('.testimonial-item');
     if (testimonialItems.length > 0) {
         gsap.set(testimonialItems, { opacity: 0, y: 30 });
         gsap.set('.testimonial-border-rect', { strokeDashoffset: 1 });

         testimonialItems.forEach((item) => {
             const borderRect = item.querySelector('.testimonial-border-rect');
             if(borderRect){
                 const tl = gsap.timeline({
                     scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' }
                 });
                 tl.to(item, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
                   .to(borderRect, { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' }, "-=0.5");
             } else {
                 gsap.to(item, {
                     opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
                     scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' }
                 });
             }
         });
     }

     // --- Magnetic Buttons ---
     const magneticButtons = gsap.utils.toArray('.magnetic-button');
     magneticButtons.forEach(btn => {
         let bbox;
         const updateBounds = () => {
             if (document.body.contains(btn)) { bbox = btn.getBoundingClientRect(); }
             else { bbox = null; }
         };
         updateBounds();
         window.addEventListener('resize', updateBounds);
         window.addEventListener('scroll', updateBounds, { passive: true });

         btn.addEventListener('mousemove', (e) => {
             if (!bbox) return;
             const mouseX = e.clientX;
             const mouseY = e.clientY;
             const btnCenterX = bbox.left + bbox.width / 2;
             const btnCenterY = bbox.top + bbox.height / 2;
             const deltaX = mouseX - btnCenterX;
             const deltaY = mouseY - btnCenterY;
             const moveX = gsap.utils.mapRange(-bbox.width * 1.5, bbox.width * 1.5, -6, 6, deltaX);
             const moveY = gsap.utils.mapRange(-bbox.height * 1.5, bbox.height * 1.5, -6, 6, deltaY);
             gsap.to(btn, { x: moveX, y: moveY, duration: 0.4, ease: 'power2.out' });
         });

         btn.addEventListener('mouseleave', () => {
             gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
         });
     });

}); // End DOMContentLoaded