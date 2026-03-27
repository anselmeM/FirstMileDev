# Tailwind CSS Production Build

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build production CSS:
```bash
npm run build:css
```

This generates `dist/styles.css` - a minified, optimized CSS file with only the Tailwind utilities actually used in your HTML files.

## Benefits

- **Smaller file size**: Only includes used Tailwind classes (vs ~3MB+ CDN bundle)
- **Faster page load**: No JavaScript-based Tailwind processing
- **Better caching**: Static CSS file can be cached by browsers
- **Production ready**: Minified and optimized for production deployment

## Usage in Production

Replace the Tailwind CDN script in all HTML files:
```html
<!-- Before (Development) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- After (Production) -->
<link rel="stylesheet" href="dist/styles.css">
```

## Notes

- The original `style.css` contains custom properties and utilities that should be merged into `src/input.css` if needed
- Run `npm run watch:css` during development to auto-rebuild on changes