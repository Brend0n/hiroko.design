/**
 * Jungle Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class JunglePage {
    constructor() {
        this.pageData = {
            title: 'Personal project: Into the jungle',
            heroImage: '/img/tiger.png',
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
              <h2>Personal project: Into the jungle</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Into the Jungle<br />
                <span style="font-weight: 600;">Type:</span> Personal Creative Project<br />
                <span style="font-weight: 600;">Role:</span> Designer & Illustrator<br />
              </div>
              A personal creative project exploring themes of nature, adventure, and 
              exploration. This project combines illustration, storytelling, and 
              interactive design to create an immersive jungle experience.
            </div>
          </div>  
        </div>
      </div>

      <!-- Project Showcase -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/tiger-thumbnail.png" alt="Into the Jungle Project" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Elements -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/thea-thumbnail.png" alt="Jungle Interactive Elements" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

