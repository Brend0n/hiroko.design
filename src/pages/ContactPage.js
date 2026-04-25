/**
 * Contact Page
 */
import { componentManager } from '../components/ComponentManager.js';

export class ContactPage {
    constructor() {
        this.pageData = {
            title: 'Contact Hiroko',
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
      <!-- Contact Section -->
      <div class="container section-box title-animation">
        <div class="row" style="padding-top: 30px">
          <div class="col-sm-2 col-xs-12"></div>
          <div class="col-sm-8 col-xs-12">
            <div class="paragraph-box">
              <h2>Let's Work Together</h2>
              <div class="paragraph-box">
                <p>I'm always excited to work on new projects and collaborate with amazing teams. Whether you need help with product design, UX research, or creating a design system, I'd love to hear from you!</p>
                
                <div style="margin: 40px 0;">
                  <h4>Get in Touch</h4>
                  <p>
                    <strong>Email:</strong> 
                    <a href="mailto:hiroko.bouzas@gmail.com">hiroko.bouzas@gmail.com</a>
                  </p>
                  <p>
                    <strong>LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/in/hiroko-bouzas-49714ab7/" target="_blank">linkedin.com/in/hiroko-bouzas-49714ab7</a>
                  </p>
                </div>

                <div style="margin: 40px 0;">
                  <h4>What I Can Help With</h4>
                  <ul>
                    <li>Product Design & UX Strategy</li>
                    <li>Design Systems & Component Libraries</li>
                    <li>User Research & Usability Testing</li>
                    <li>Prototyping & Interaction Design</li>
                    <li>Brand Identity & Visual Design</li>
                    <li>Design Workshops & Team Training</li>
                  </ul>
                </div>

                <div style="margin: 40px 0;">
                  <h4>Availability</h4>
                  <p>I'm currently available for freelance projects and consulting work. Let's discuss how I can help bring your ideas to life!</p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    `;
    }
}

