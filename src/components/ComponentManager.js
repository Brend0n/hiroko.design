/**
 * ComponentManager
 * Centralized component management system
 */
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { GoBack } from './GoBack.js';
import { Portfolio } from './Portfolio.js';
import { ProjectLayout } from './ProjectLayout.js';

export class ComponentManager {
    constructor() {
        this.components = new Map();
        this.initialized = false;
    }

    /**
     * Register a component
     */
    register(name, component) {
        this.components.set(name, component);
    }

    /**
     * Get a component instance
     */
    get(name) {
        return this.components.get(name);
    }

    /**
     * Initialize common components
     */
    async initializeCommonComponents() {
        if (this.initialized) return;

        // Initialize Header
        const header = new Header();
        header.mount('#header');
        this.register('header', header);

        // Initialize Footer
        const footer = new Footer();
        footer.mount('#footer');
        this.register('footer', footer);

        // Initialize GoBack if element exists
        const goBackElement = document.querySelector('#goback');
        if (goBackElement) {
            const goBack = new GoBack();
            goBack.mount('#goback');
            this.register('goBack', goBack);
        }

        this.initialized = true;
    }

    /**
     * Initialize portfolio component
     */
    async initializePortfolio(portfolioData) {
        const portfolio = new Portfolio(portfolioData);
        portfolio.mount('#portfolio');
        this.register('portfolio', portfolio);
        return portfolio;
    }

    /**
     * Initialize project layout
     */
    async initializeProjectLayout(options) {
        const projectLayout = new ProjectLayout(options);
        projectLayout.mount('body');
        this.register('projectLayout', projectLayout);
        return projectLayout;
    }

    /**
     * Load external scripts and initialize components
     */
    async loadExternalScripts() {
        // Load jQuery Shuffle for portfolio filtering
        if (!window.Shuffle) {
            await this.loadScript('/js/jquery.shuffle.min.js');
        }

        // Load password protection script
        if (document.querySelector('#passwordModal')) {
            await this.loadScript('/js/password.js');
        }
    }

    /**
     * Load a script dynamically
     */
    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
}

// Create global instance
export const componentManager = new ComponentManager();

