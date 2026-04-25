/**
 * Page Router
 * Simple client-side routing for different pages
 */
import { BMirrorPage } from '../pages/BMirrorPage.js';
import { BHeartPage } from '../pages/BHeartPage.js';
import { BConnectPage } from '../pages/BConnectPage.js';
import { LenormandPage } from '../pages/LenormandPage.js';
import { VetifyPage } from '../pages/VetifyPage.js';
import { CoucouDeFrancePage } from '../pages/CoucouDeFrancePage.js';
import { LogoPage } from '../pages/LogoPage.js';
import { RudyPage } from '../pages/RudyPage.js';
import { StreetProjectPage } from '../pages/StreetProjectPage.js';
import { JunglePage } from '../pages/JunglePage.js';
import { AboutPage } from '../pages/AboutPage.js';
import { ContactPage } from '../pages/ContactPage.js';

export class PageRouter {
    constructor() {
        this.routes = new Map();
        this.currentPage = null;
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Register all project page routes
        this.routes.set('bmirror.html', BMirrorPage);
        this.routes.set('bheart.html', BHeartPage);
        this.routes.set('bconnect.html', BConnectPage);
        this.routes.set('lenormand.html', LenormandPage);
        this.routes.set('vetify.html', VetifyPage);
        this.routes.set('coucoudefrance.html', CoucouDeFrancePage);
        this.routes.set('logo.html', LogoPage);
        this.routes.set('Rudy.html', RudyPage);
        this.routes.set('streetproject.html', StreetProjectPage);
        this.routes.set('jungle.html', JunglePage);
        this.routes.set('about.html', AboutPage);
        this.routes.set('contact.html', ContactPage);
    }

    async navigateToPage(pageName) {
        const PageClass = this.routes.get(pageName);

        if (PageClass) {
            try {
                // Clean up current page if exists
                if (this.currentPage && this.currentPage.cleanup) {
                    this.currentPage.cleanup();
                }

                // Initialize new page
                this.currentPage = new PageClass();
                await this.currentPage.initialize();

                console.log(`Navigated to ${pageName}`);
            } catch (error) {
                console.error(`Error navigating to ${pageName}:`, error);
            }
        } else {
            console.warn(`No route found for ${pageName}`);
        }
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        return filename || 'index.html';
    }

    async initializeCurrentPage() {
        const currentPageName = this.getCurrentPageName();

        // If it's the home page, use the default initialization
        if (currentPageName === 'index.html' || currentPageName === '') {
            return;
        }

        // Otherwise, navigate to the specific page
        await this.navigateToPage(currentPageName);
    }
}

// Create global instance
export const pageRouter = new PageRouter();
