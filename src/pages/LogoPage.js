/**
 * Logo Design Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class LogoPage {
    constructor() {
        this.pageData = {
            title: 'LOGO design',
            heroImage: '/img/logo1.jpg',
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
              <h2>LOGO design</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Brand Identity & Logo Design<br />
                <span style="font-weight: 600;">Type:</span> Various Client Projects<br />
                <span style="font-weight: 600;">Role:</span> Brand Designer<br />
              </div>
              A collection of logo designs created for various clients and projects. 
              Each logo is crafted to reflect the unique identity and values of the brand, 
              combining creativity with strategic thinking to create memorable visual identities.
            </div>
          </div>  
        </div>
      </div>

      <!-- Logo Gallery -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/logo2.jpg" alt="Logo Design Collection" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More Logo Examples -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/logo3.jpg" alt="Logo Design Examples" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more logo galleries as needed -->
    `;
    }
}

