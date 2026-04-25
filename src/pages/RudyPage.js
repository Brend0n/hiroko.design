/**
 * Rudy Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class RudyPage {
    constructor() {
        this.pageData = {
            title: 'Illustration: Rudy Report',
            heroImage: '/img/rudy1.png',
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
              <h2>Illustration: Rudy Report</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Rudy Report Editorial<br />
                <span style="font-weight: 600;">Type:</span> Editorial Illustration<br />
                <span style="font-weight: 600;">Role:</span> Illustrator<br />
              </div>
              Editorial illustration work for the Rudy Report, creating visual narratives 
              that complement and enhance the written content. This project showcases 
              the power of illustration in storytelling and information design.
            </div>
          </div>  
        </div>
      </div>

      <!-- Video Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <video width="100%" height="100%" autoplay loop>
                <source src="/img/Rudy.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <!-- Illustration Gallery -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/rudy-icons.png" alt="Rudy Report Icons" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

