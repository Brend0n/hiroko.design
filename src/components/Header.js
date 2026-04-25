/**
 * Header Component
 * Reusable header component for all pages
 */
export class Header {
    constructor() {
        this.element = null;
    }

    render() {
        return `
      <div class="container" id="header-pc-screen">
        <div id="myLogo">
          <a href="index.html"><img src="/img/animation2.svg" alt="Hiroko Bouzas Logo" /></a>
        </div>
        <!-- Navigation can be uncommented when needed -->
        <!-- <div class="header-right-box">
          <div class="header-text"><a href="./index.html">WORK</a></div>
          <div class="header-text"><a href="./about.html">ABOUT</a></div>
          <div class="header-text"><a href="./contact.html">CONTACT</a></div>
        </div> -->
      </div>
      <div id="header-sp-screen">
        <div id="myLogo">
          <a href="index.html"><img src="/img/animation2.svg" alt="Hiroko Bouzas Logo" /></a>
        </div>
        <!-- Mobile navigation can be uncommented when needed -->
        <!-- <div id="hamberger-box">
          <label>
            <input type="checkbox" />
            <span class="menu">
              <span class="hamburger"></span>
            </span>
            <ul class="list-unstyled">
              <li><a href="./index.html">WORK</a></li>
              <li><a href="./about.html">ABOUT</a></li>
              <li><a href="./contact.html">CONTACT</a></li>
            </ul>
          </label>
        </div> -->
      </div>
    `;
    }

    mount(container) {
        if (typeof container === 'string') {
            this.element = document.querySelector(container);
        } else {
            this.element = container;
        }

        if (this.element) {
            this.element.innerHTML = this.render();
        }
    }
}

