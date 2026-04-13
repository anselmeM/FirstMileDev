/**
 * FirstMileDev App Cost Calculator
 * Handles the logic for estimating MVP development costs
 */

function calculateCost() {
    // Get form values
    const appType = document.querySelector('input[name="appType"]:checked');
    const complexity = document.querySelector('input[name="complexity"]:checked');
    const timeline = document.querySelector('input[name="timeline"]:checked');
    const features = document.querySelectorAll('input[name="features"]:checked');
    const emailInput = document.getElementById('contact-email');
    const email = emailInput ? emailInput.value : '';

    if (!appType || !complexity || !timeline) {
        alert('Please select app type, complexity, and timeline');
        return;
    }

    // Base costs
    let baseCost = 0;
    switch(appType.value) {
        case 'web': baseCost = 3000; break;
        case 'mobile': baseCost = 5000; break;
        case 'both': baseCost = 7000; break;
    }

    // Complexity multiplier
    let complexityMultiplier = 1;
    switch(complexity.value) {
        case 'simple': complexityMultiplier = 1; break;
        case 'medium': complexityMultiplier = 1.5; break;
        case 'complex': complexityMultiplier = 2.5; break;
    }

    // Features cost
    const featureCost = features.length * 500;

    // Timeline adjustment (faster = more expensive)
    let timelineMultiplier = 1;
    switch(timeline.value) {
        case '4': timelineMultiplier = 1.3; break; // Fast
        case '8': timelineMultiplier = 1; break;  // Standard
        case '12': timelineMultiplier = 0.9; break; // Flexible
    }

    // Calculate total
    const total = Math.round((baseCost + featureCost) * complexityMultiplier * timelineMultiplier);

    // Display results
    const resultsContainer = document.getElementById('results');
    const costDisplay = document.getElementById('estimated-cost');
    
    if (resultsContainer && costDisplay) {
        resultsContainer.classList.remove('hidden');
        costDisplay.textContent = '$' + total.toLocaleString();
        
        // Smooth scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Track calculation in GA4 if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'calculator_used', {
            'event_category': 'engagement',
            'event_label': appType.value,
            'value': total
        });
    }
}
