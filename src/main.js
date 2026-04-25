// Import jQuery and Bootstrap
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import component system
import { componentManager } from './components/ComponentManager.js';
import { portfolioData } from './data/portfolio.js';
import { pageRouter } from './router/PageRouter.js';
import { performanceOptimizer } from './utils/performanceOptimizer.js';

// Initialize AOS
AOS.init({
    duration: 1200,
});

// Make jQuery available globally
window.$ = $;
window.jQuery = $;

// Initialize the application
async function initializeApp() {
    try {
        // Initialize performance optimizations first
        performanceOptimizer.initialize();

        // Initialize page router first
        await pageRouter.initializeCurrentPage();

        // Initialize common components (header, footer, goback)
        await componentManager.initializeCommonComponents();

        // Initialize portfolio if on home page
        const portfolioElement = document.querySelector('#portfolio');
        if (portfolioElement) {
            await componentManager.initializePortfolio(portfolioData);
        }

        // Load external scripts
        await componentManager.loadExternalScripts();

        console.log('Application initialized successfully');

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                console.log('Performance Metrics:', performanceOptimizer.getPerformanceMetrics());
            }, 2000);
        }
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// Initialize when DOM is ready
$(document).ready(initializeApp);
