/**
 * Vetify Project Page (Protected)
 */
import { componentManager } from '../components/ComponentManager.js';

export class VetifyPage {
    constructor() {
        this.pageData = {
            title: 'AI-Assisted Consultation Platform for Veterinarians',
            heroImage: '/img/Vetify-top.png',
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
              <h2>🔐 AI-Assisted Consultation Platform for Veterinarians</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Vetify Platform<br />
                <span style="font-weight: 600;">Platform:</span> Web Application<br />
                <span style="font-weight: 600;">Role:</span> Lead UX Designer<br />
              </div>
              This project is password-protected. Please contact me for access to view 
              the complete case study and design process.
            </div>
          </div>  
        </div>
      </div>

      <!-- Protected Content Notice -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/Vetify1.png" alt="Vetify Platform Preview" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-2 col-xs-12"></div>
          <div class="col-sm-8 col-xs-12">
            <div class="paragraph-box">
              <h3>Interested in viewing this project?</h3>
              <p>This case study contains confidential information and is available upon request. 
              Please contact me at <a href="mailto:hiroko.bouzas@gmail.com">hiroko.bouzas@gmail.com</a> 
              to request access.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}

