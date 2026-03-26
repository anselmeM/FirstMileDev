// Service Worker for FirstMileDev - Offline Caching
const CACHE_NAME = 'firstmiledev-v3'; // Version incremented to fix fetch errors
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/calculator.html',
  '/faq.html',
  '/privacy.html',
  '/terms.html',
  '/blog.html',
  '/case-study-fintech.html',
  '/case-study-ecom-validator.html',
  '/case-study-ecommerce.html',
  '/blog-why-startups-fail.html',
  '/blog-true-cost-mvp.html',
  '/blog-no-code-vs-custom.html',
  '/manifest.json',
  '/images/sassdashboard.png',
  '/images/E-Commerce Validator.png',
  '/images/MVPInfluence.jpg',
  '/images/Why-Building-an-MVP-Matters-for-Startups.jpg'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Cache install failed:', err);
      })
  );
  // Activate immediately (skip waiting)
  self.skipWaiting();
});

// Fetch event - network-first strategy for dynamic content, cache-first for static assets
self.addEventListener('fetch', event => {
  const request = event.request;
  
  // Handle favicon requests - return empty response to prevent errors
  if (request.url.includes('favicon.ico')) {
    event.respondWith(
      caches.match('/favicon.ico')
        .then(response => response || new Response('', { status: 404 }))
    );
    return;
  }
  
  // Network-first strategy for HTML pages (always get fresh content)
  if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful HTML responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/index.html');
            });
        })
    );
    return;
  }
  
  // Cache-first strategy for images and static assets
  if (request.url.includes('/images/') || 
      request.url.includes('.png') || 
      request.url.includes('.jpg') ||
      request.url.includes('.css') ||
      request.url.includes('.js')) {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Return cached but also update in background
            fetch(request)
              .then(networkResponse => {
                if (networkResponse.status === 200) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(request, networkResponse));
                }
              });
            return cachedResponse;
          }
          // Not in cache, fetch and cache
          return fetch(request)
            .then(networkResponse => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(request, responseClone));
              }
              return networkResponse;
            });
        })
    );
    return;
  }
  
  // Default: network-first for other requests
  event.respondWith(
    fetch(request)
      .catch(() => caches.match(request))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});