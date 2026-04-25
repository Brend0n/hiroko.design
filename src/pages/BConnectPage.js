/**
 * BConnect Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class BConnectPage {
    constructor() {
        this.pageData = {
            title: 'Reusable Design Foundation for Fast Product Launches',
            heroImage: '/img/Bconnect1.png',
            showGoBack: true
        };
    }

    async initialize() {
        await componentManager.initializeProjectLayout(this.pageData);
        await componentManager.initializeCommonComponents();
        await componentManager.loadExternalScripts();
        this.addProjectContent();
    }

    addProjectContent() {
        const contentElement = document.querySelector('#content');
        if (contentElement) {
            contentElement.innerHTML = this.getProjectContent();
        }
    }

    getProjectContent() {
        return `
      <!-- Section 1 -->
      <div class="container section-box title-animation">
        <div class="row" style="padding-top: 30px">
          <div class="col-sm-2 col-xs-12"></div>
          <div class="col-sm-8 col-xs-12">
            <div class="paragraph-box">
              <h2>Reusable Design Foundation for Fast Product Launches</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> BConnect Design System<br />
                <span style="font-weight: 600;">Platform:</span> Web & Mobile Applications<br />
                <span style="font-weight: 600;">Role:</span> Lead Design System Designer<br />
              </div>
              BConnect is a comprehensive design system created to accelerate product 
              development across multiple platforms. This reusable foundation enables 
              rapid prototyping and consistent user experiences across all Baracoda products.
            </div>
          </div>  
        </div>
      </div>

      <!-- Design System Showcase -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/Bconnect2.png" alt="BConnect Design System" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

