// Event Popup functionality
(function() {
    'use strict';
    
    // Show popup after page loads
    function showEventPopup() {
        const popup = document.getElementById('eventPopup');
        if (popup) {
            // Small delay for better user experience
            setTimeout(() => {
                popup.classList.add('show');
            }, 500);
        }
    }
    
    // Close popup function (global so it can be called from onclick)
    window.closeEventPopup = function() {
        const popup = document.getElementById('eventPopup');
        if (popup) {
            popup.classList.remove('show');
        }
    };
    
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('eventPopup');
        if (e.target === popup) {
            closeEventPopup();
        }
    });
    
    // Close popup on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEventPopup();
        }
    });
    
    // Initialize popup on page load
    function initPopup() {
        // Show popup every time page loads
        showEventPopup();
    }
    
    // Start when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
    } else {
        initPopup();
    }
})();
