/**
 * ProjectLayout Component
 * Reusable layout component for project pages
 */
export class ProjectLayout {
    constructor(options = {}) {
        this.options = {
            title: '',
            subtitle: '',
            heroImage: '',
            showGoBack: true,
            ...options
        };
        this.element = null;
    }

    render() {
        return `
      <div class="container">
        <header id="header">
          <!-- header will be loaded here -->
        </header>
      </div>
      
      ${this.options.heroImage ? `
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="prodacts-box full-width title-animation">
                <img src="${this.options.heroImage}" alt="${this.options.title}" />
              </div>
            </div>
          </div>
        </div>
      ` : ''}
      
      <div id="content">
        <!-- Project content will be inserted here -->
      </div>
      
      ${this.options.showGoBack ? '<div id="goback"></div>' : ''}
      <div id="footer"></div>
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

