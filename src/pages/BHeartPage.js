/**
 * BHeart Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class BHeartPage {
    constructor() {
        this.pageData = {
            title: 'Branding to Product Design for a Smart Bracelet',
            heroImage: '/img/bheart1.png',
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
              <h2>Branding to Product Design for a Smart Bracelet</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> BHeart Smart Bracelet<br />
                <span style="font-weight: 600;">Device:</span> Smart wearable bracelet<br />
                <span style="font-weight: 600;">Role:</span> Lead Product Designer & Brand Designer<br />
              </div>
              BHeart is a smart bracelet designed to monitor heart health and provide 
              wellness insights. As the lead designer, I was responsible for creating 
              the complete brand identity and product design from concept to production.
            </div>
          </div>  
        </div>
      </div>

      <!-- Image Gallery Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/bheart2.png" alt="BHeart Product Design" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

