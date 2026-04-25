/**
 * GoBack Component
 * Reusable "go back" component for project pages
 */
export class GoBack {
    constructor(options = {}) {
        this.options = {
            text: '← Back to Work',
            href: 'index.html',
            ...options
        };
        this.element = null;
    }

    render() {
        return `
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="goback-box">
              <a href="${this.options.href}" class="goback-link">
                ${this.options.text}
              </a>
            </div>
          </div>
        </div>
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

