/**
 * Coucou de France Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class CoucouDeFrancePage {
    constructor() {
        this.pageData = {
            title: 'Personal project: Coucou de France',
            heroImage: '/img/coucou2.jpg',
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
              <h2>Personal project: Coucou de France</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Coucou de France<br />
                <span style="font-weight: 600;">Type:</span> Personal Travel Project<br />
                <span style="font-weight: 600;">Role:</span> Designer & Creator<br />
              </div>
              A personal project documenting my travels and experiences in France. 
              This project combines photography, storytelling, and design to create 
              a unique travel journal and cultural exploration.
            </div>
          </div>  
        </div>
      </div>

      <!-- Map Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/coucou-map.jpg" alt="Coucou de France Map" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/coucoudefrance01.jpg" alt="Coucou de France Gallery" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

