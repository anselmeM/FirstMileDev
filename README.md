# FirstMileDev - Web & Software Development Landing Page

## Overview

The FirstMileDev project is a responsive, single-page website concept designed to showcase a development service focused on building high-quality, scalable web applications and digital products. The site highlights the value proposition, services, engagement models, and provides methods for potential clients to discuss their projects or book a consultation. It features a modern light theme using a palette of Watermelon (#FF3B3F), Sky (#CAEBF2), Carbon (#A9A9A9), and Neutral (#EFEFEF), with extensive use of GSAP for animations to create a dynamic user experience.

## Features

* **Responsive Design:** Adapts seamlessly to various screen sizes using Tailwind CSS.
* **Engaging Hero Section:** Features dynamic text reveal animations and a clear value proposition for businesses needing robust software.
* **Multiple Sections:** The landing page is divided into clear, distinct sections:
    * **Hero:** Introduces FirstMileDev and its core message.
    * **Intro:** Addresses common pain points in software development.
    * **About:** Explains the philosophy, approach, and founder background.
    * **CTA (Call to Action):** Encourages immediate engagement.
    * **Partnerships/Tech Stack:** Showcases technologies used or client logos in an infinite scrolling marquee.
    * **Work (Projects):** Displays examples of past development projects.
    * **Services:** Outlines the specific development services offered (Full-Stack, Frontend, Backend, SaaS, Consulting).
    * **Pricing (Plans):** Presents various engagement models (Strategy, Retainer, Project, Custom).
    * **FAQ:** Addresses common questions related to development services.
    * **Testimonials:** Features client feedback.
    * **Booking (Calendly Embed):** Allows users to schedule a discovery call directly.
    * **Newsletter Signup:** Captures leads for tech insights and updates.
    * **Footer:** Contains copyright and legal information.
* **GSAP Animations:** The site incorporates various GSAP animations:
    * Scroll-triggered Background Color Changes
    * Word, Line, and Letter Reveal Animations
    * Image Reveal Animations (Portfolio)
    * SVG Drawing Animations (Testimonial Borders, potentially Hero Arrow)
    * Interactive Accordion for FAQs
    * Magnetic Button Effects on CTAs
    * Infinite Logo/Tech Marquee Scroll
    * General Fade-in Reveals for Elements
* **Interactive Elements:**
    * Responsive Mobile Menu
    * Hover Effects on links, buttons, icons
    * Placeholder Newsletter Form (requires backend)
    * Embedded Calendly Widget
* **Tailwind CSS:** Styled using the utility-first framework for rapid development.
* **Refactored Code:** HTML structure, CSS styles, and JavaScript logic are separated into distinct files (`index.html`, `main.css`, `app.js`) for better organization.

## Technologies Used

* **HTML5:** Structural foundation.
* **CSS3:** Styling, including Tailwind CSS and custom styles in `main.css`.
* **Tailwind CSS (via CDN):** Utility-first CSS framework.
* **JavaScript (ES6+):** Interactivity, animations, form handling in `app.js`.
* **GSAP (GreenSock Animation Platform) (via CDN):** JavaScript animation library.
    * **ScrollTrigger Plugin:** For scroll-triggered animations.
* **Google Fonts:**
    * Archivo Black (Headlines)
    * League Spartan (Secondary)
    * Montserrat (Body)
* **Lucide Icons (via CDN/SVG):** Used for icons within service/pricing sections.
* **Calendly (Embedded Widget):** Booking functionality.

## Getting Started

### Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari, etc.).
* (Optional) A code editor (like VS Code) for modifications.

### Installation

1.  Download the project files (`index.html`, `main.css`, `app.js`).
2.  Ensure all three files are in the **same directory**.
3.  Open the `index.html` file directly in your web browser.

**Note:** No build process or local server is required as dependencies like Tailwind and GSAP are loaded via CDNs. For production, consider local installation and bundling of dependencies.

## Project Structure

* `index.html`: The main HTML file containing the page structure.
* `main.css`: Contains all custom CSS rules and component styles.
* `app.js`: Contains all JavaScript logic, including DOM manipulation, event listeners, and GSAP animations.
* `README.md`: This file.

## Live Demo

https://anselmem.github.io/FirstMileDev/

## Contact

* **Booking:** Use the embedded Calendly widget in the "Book Discovery Call" section.
* **Newsletter:** Sign up via the form (Requires backend implementation).
* **General Inquiries:** [Add your contact email or link]

