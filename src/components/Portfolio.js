/**
 * Portfolio Component
 * Main portfolio component that renders all portfolio items
 */
import { PortfolioItem } from './PortfolioItem.js';

export class Portfolio {
    constructor(portfolioData) {
        this.portfolioData = portfolioData || [];
        this.element = null;
    }

    render() {
        const portfolioItems = this.portfolioData
            .map(item => new PortfolioItem(item).render())
            .join('');

        return `
      <section class="portfolio">
        <div class="container">
          <div class="row">
            <ul class="portfolio-sorting list-inline text-center">
              <li><a href="#" data-group="all" class="active">All</a></li>
              <li><a href="#" data-group="UI">Product Design</a></li>
              <li><a href="#" data-group="Graphic">Graphic Design</a></li>
            </ul>
            
            <ul class="portfolio-items list-unstyled" id="grid">
              ${portfolioItems}
              <li class="col-sm-6 col-xs-12 shuffle_sizer"></li>
            </ul>
          </div>
        </div>

        <!-- Password Modal -->
        <div id="passwordModal" class="modal">
          <div class="modal-content">
            <span class="close" id="closeModalBtn">&times;</span>
            <h3>Please enter the password</h3>
            This page is password-protected. Please contact the owner for access.
            <input type="password" id="passwordInput" placeholder="Password" />
            <button id="submitPassword">Submit</button>
            <div id="errorMsg" class="error-message">Incorrect password, try again.</div>
          </div>
        </div>
      </section>
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
            this.initializeShuffle();
        }
    }

    initializeShuffle() {
        // Initialize shuffle functionality if available
        if (window.Shuffle) {
            const shuffleInstance = new window.Shuffle(this.element.querySelector('#grid'), {
                itemSelector: '.pt-box',
                sizer: '.shuffle_sizer'
            });

            // Handle filter clicks
            const filterButtons = this.element.querySelectorAll('.portfolio-sorting a');
            filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Update active class
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    // Filter items
                    const group = button.getAttribute('data-group');
                    shuffleInstance.filter(group);
                });
            });
        }
    }
}

