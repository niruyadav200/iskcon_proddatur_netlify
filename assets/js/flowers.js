// Flower shower effect for ISKCON website
(function() {
    'use strict';
    
    const flowerSymbols = ['🌸', '🌺', '🌼', '🏵️', '🌻', '💐'];
    const flowerCount = 20;
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'falling-flower';
        flower.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        
        // Random starting position
        flower.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration (slower falling)
        const duration = 8 + Math.random() * 8; // 8-16 seconds
        flower.style.animationDuration = duration + 's';
        
        // Random delay
        flower.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size
        const size = 20 + Math.random() * 20; // 20-40px
        flower.style.fontSize = size + 'px';
        
        // Random horizontal drift
        const drift = -30 + Math.random() * 60; // -30 to 30px
        flower.style.setProperty('--drift', drift + 'px');
        
        document.body.appendChild(flower);
        
        // Remove flower after animation and create new one
        flower.addEventListener('animationend', function() {
            flower.remove();
            createFlower();
        });
    }
    
    // Initialize flowers
    function initFlowers() {
        for (let i = 0; i < flowerCount; i++) {
            setTimeout(() => createFlower(), i * 300);
        }
    }
    
    // Start when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFlowers);
    } else {
        initFlowers();
    }
})();
