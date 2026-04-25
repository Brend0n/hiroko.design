/**
 * Lenormand Project Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class LenormandPage {
    constructor() {
        this.pageData = {
            title: 'Illustration: Lenormand Card',
            heroImage: '/img/lenormand1.jpg',
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
              <h2>Illustration: Lenormand card</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> Lenormand Card Deck<br />
                <span style="font-weight: 600;">Client:</span> Real Estate Portal<br />
                <span style="font-weight: 600;">Role:</span> Illustrator & Designer<br />
              </div>
              Since illustration is my passion, I occasionally take on illustration projects. 
              This is a 36-card Lenormand deck I created for a real estate portal that featured 
              a fortune-telling section. It was a tight schedule but I truly enjoyed working on it. 
              As the copyright remains with me, I sometimes receive inquiries from people around 
              the world who wish to purchase a copy of the deck—which always makes me happy 🥰
            </div>
          </div>  
        </div>
      </div>

      <!-- Card Gallery -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/lenormand1-5.jpg" alt="Lenormand Cards 1-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More card sets -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-12">
            <div class="prodacts-box full-width">
              <div class="img-big">
                <img src="/img/lenormand6-10.jpg" alt="Lenormand Cards 6-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more card galleries as needed -->
    `;
    }
}

