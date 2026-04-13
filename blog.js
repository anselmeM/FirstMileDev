/**
 * FirstMileDev Dynamic Blog Component
 * Handles loading and rendering blog posts from blog-posts.json
 */

document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blog-posts-grid');
    const categoryFilter = document.getElementById('category-filter');
    const blogSearch = document.getElementById('blog-search');
    
    let allPosts = [];

    // Fetch posts from JSON
    fetch('blog-posts.json')
        .then(response => response.json())
        .then(posts => {
            allPosts = posts;
            renderPosts(allPosts);
            setupFilters(allPosts);
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
            if (blogGrid) {
                blogGrid.innerHTML = '<p class="col-span-full text-center py-12 text-gray-500">Unable to load blog posts at this time.</p>';
            }
        });

    function renderPosts(posts) {
        if (!blogGrid) return;
        
        if (posts.length === 0) {
            blogGrid.innerHTML = '<p class="col-span-full text-center py-12 text-gray-500">No matching blog posts found.</p>';
            return;
        }

        blogGrid.innerHTML = posts.map(post => `
            <article class="blog-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                <a href="${post.link}">
                    <div class="h-48 bg-gray-100 overflow-hidden relative">
                        <img src="${post.image}" alt="${post.alt}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" width="600" height="400">
                    </div>
                    <div class="p-6">
                        <span class="text-xs font-bold ${getCategoryColorClass(post.category)} uppercase tracking-widest">${post.category}</span>
                        <h3 class="font-headline text-xl uppercase-text mt-2 mb-3">${post.title}</h3>
                        <p class="text-gray-600 text-sm mb-4">${post.description}</p>
                        <div class="border-t border-gray-100 pt-4 mt-4">
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                ${post.features.map(feature => `
                                    <li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 ${getCategoryTextColorClass(post.category)}"></i> ${feature}</li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-gray-400">${post.readTime}</span>
                            <span class="text-sm font-bold ${getCategoryTextColorClass(post.category)} group-hover:text-black transition">Read More &rarr;</span>
                        </div>
                    </div>
                </a>
            </article>
        `).join('');

        // Re-initialize Lucide icons for new content
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    function setupFilters(posts) {
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => filterAndSearch());
        }
        
        if (blogSearch) {
            blogSearch.addEventListener('input', () => filterAndSearch());
        }
    }

    function filterAndSearch() {
        const category = categoryFilter ? categoryFilter.value : 'all';
        const searchTerm = blogSearch ? blogSearch.value.toLowerCase() : '';

        const filteredPosts = allPosts.filter(post => {
            const matchesCategory = category === 'all' || post.category === category;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm) || 
                                 post.description.toLowerCase().includes(searchTerm) ||
                                 post.category.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        renderPosts(filteredPosts);
    }

    function getCategoryColorClass(category) {
        switch(category.toLowerCase()) {
            case 'startup validation': return 'text-accent-red';
            case 'development': return 'text-accent-teal';
            case 'pricing': return 'text-accent-red';
            default: return 'text-accent-red';
        }
    }

    function getCategoryTextColorClass(category) {
        switch(category.toLowerCase()) {
            case 'startup validation': return 'text-accent-red';
            case 'development': return 'text-accent-teal';
            case 'pricing': return 'text-accent-red';
            default: return 'text-accent-red';
        }
    }
});