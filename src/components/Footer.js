/**
 * Footer Component
 * Reusable footer component for all pages
 */
export class Footer {
    constructor() {
        this.element = null;
    }

    render() {
        return `
      <div class="container">
        <!-- Footer content can be added here when needed -->
        <!-- <div class="footer-text">
          © Copyright 2018. All Rights Reserved.
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

