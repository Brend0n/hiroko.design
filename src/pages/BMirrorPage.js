/**
 * BMirror Project Page
 * Example of how to use the component system for project pages
 */
import { componentManager } from '../components/ComponentManager.js';

export class BMirrorPage {
    constructor() {
        this.pageData = {
            title: 'Designing Touchless Experience for BMirror',
            heroImage: '/img/bmirror-top.png',
            showGoBack: true
        };
    }

    async initialize() {
        // Initialize project layout
        await componentManager.initializeProjectLayout(this.pageData);

        // Initialize common components
        await componentManager.initializeCommonComponents();

        // Load external scripts
        await componentManager.loadExternalScripts();

        // Add project-specific content
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
              <h2>Designing touchless experience for BMirror</h2>
              <div style="padding-bottom:10px">
                <span style="font-weight: 600;">Project:</span> 
                <a href="https://baracoda.com/resources/press/baracoda-unveils-bmind-smart-mirror-for-mental-wellness">BMirror</a>
                <br />
                <span style="font-weight: 600;">Device:</span> Smart mirror, Android app<br />
                <span style="font-weight: 600; padding-bottom:50px">Role:</span>Lead Product Designer<br />
              </div>
              BMirror is a smart mirror that lets users interact without touching
              the surface. Our tight-knit crew at the Baracoda Innovation Team,
              including a very passionate UX designer (yes, that's me!), was
              tasked with creating a seamless, gesture-based experience for the
              mirror. Turning cutting-edge technology into a friendly, intuitive
              companion was a big challenge. But all our effort paid off by winning
              <a href="https://www.ces.tech/ces-innovation-awards/2024/bmind-the-smart-mirror-for-everyday-mindfulness/">the CES Innovation Award in 2024🏆</a>
              As the solo designer on this project, I led the UX design from start
              to finish. It was by far one of the most challenging yet
              fascinating challenges I've taken on!
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
                <source src="/img/bmirror_video_touchless.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge Section -->
      <div class="background-gray">
        <div class="container title-animation">
          <div class="row">
            <div class="col-sm-2 col-xs-12"></div>
            <div class="col-sm-8 col-xs-12">
              <div class="section-title">THE CHALLENGE</div>
              <h2>Big frustration with the gesture based control</h2>
              <div class="paragraph-box">
                As you can see in the video above, the mirror is designed to control by gestures. 
                After our first big user test on the beginning of 2023, we quickly ran into a
                challenging (but valuable) insight: users were frustrated by the
                gesture controls. The problems came from both technical
                limitations and UX difficulty. <br />
                The AI had trouble consistently
                recognizing gestures, which led to moments like:<br />
                <i>"Wait—why did it just switch widgets? I didn't ask for that!"</i><br />
                And memorability was another issue: <br />
                <i>"Umm… what was the gesture to close the tools again?"</i>
              </div>
            </div>
            <div class="col-sm-1 col-xs-12"></div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    `;
    }
}

