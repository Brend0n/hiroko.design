/**
 * About Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class AboutPage {
    constructor() {
        this.pageData = {
            title: 'About Hiroko',
            showGoBack: false
        };
    }

    async initialize() {
        await componentManager.initializeProjectLayout(this.pageData);
        await componentManager.initializeCommonComponents();
        await componentManager.loadExternalScripts();
        this.addPageContent();
    }

    addPageContent() {
        const contentElement = document.querySelector('#content');
        if (contentElement) {
            contentElement.innerHTML = this.getPageContent();
        }
    }

    getPageContent() {
        return `
      <!-- About Section -->
      <div class="container section-box title-animation">
        <div class="row" style="padding-top: 30px">
          <div class="col-sm-2 col-xs-12"></div>
          <div class="col-sm-8 col-xs-12">
            <div class="paragraph-box">
              <h2>About Hiroko</h2>
              <div class="paragraph-box">
                <p>Hi, I'm Hiroko! A very experienced Product Designer who loves making technology into a friendly companion 🤖, who loves her family, sunshine, and drawing 🧑‍🎨.</p>
                
                <p>With years of experience in UX/UI design, I specialize in creating intuitive, user-centered digital experiences. My passion lies in transforming complex technology into accessible, delightful interactions that users love.</p>
                
                <p>When I'm not designing, you can find me spending time with my family, enjoying sunny days, or working on personal illustration projects. I believe that great design comes from understanding both the technical possibilities and human needs.</p>
                
                <p>If you are interested in working with me, say hello via 
                <a href="mailto:hiroko.bouzas@gmail.com">Email</a> or 
                <a href="https://www.linkedin.com/in/hiroko-bouzas-49714ab7/">LinkedIn</a>!</p>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <!-- Skills Section -->
      <div class="container section-box title-animation">
        <div class="row">
          <div class="col-sm-2 col-xs-12"></div>
          <div class="col-sm-8 col-xs-12">
            <div class="paragraph-box">
              <h3>Skills & Expertise</h3>
              <ul>
                <li>Product Design & UX/UI Design</li>
                <li>Design Systems & Component Libraries</li>
                <li>User Research & Testing</li>
                <li>Prototyping & Interaction Design</li>
                <li>Brand Identity & Visual Design</li>
                <li>Illustration & Graphic Design</li>
                <li>Cross-platform Design (Web, Mobile, IoT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}

