/**
 * Street Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class StreetProjectPage {
    constructor() {
        this.pageData = {
            title: 'Volunteer: Street Project',
            heroImage: '/img/streetproject01.jpg',
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
              <h2>Volunteer: Street Project</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Street Project Volunteer Work<br />
                <span style="font-weight: 600;">Type:</span> Social Impact Design<br />
                <span style="font-weight: 600;">Role:</span> Volunteer Designer<br />
              </div>
              Volunteer design work for a social impact project focused on helping 
              homeless individuals. This project demonstrates the power of design 
              in creating positive social change and supporting vulnerable communities.
            </div>
          </div>  
        </div>
      </div>

      <!-- Project Gallery -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/streetproject1.jpg" alt="Street Project Work" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More Project Images -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/streetproject2.jpg" alt="Street Project Impact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

