/**
 * PortfolioItem Component
 * Reusable portfolio item component
 */
import { assetManager } from '../utils/assetManager.js';

export class PortfolioItem {
    constructor(data) {
        this.data = {
            id: '',
            title: '',
            description: '',
            image: '',
            alt: '',
            link: '',
            categories: [],
            isProtected: false,
            ...data
        };
    }

    render() {
        const categories = this.data.categories.map(cat => `"${cat}"`).join(',');
        const protectedClass = this.data.isProtected ? 'protectedBtn' : '';
        const protectedAttributes = this.data.isProtected
            ? 'data-target="' + this.data.link + '" tabindex="0" role="button" aria-pressed="false"'
            : '';

        // Get the actual image path from asset manager
        const imageSrc = assetManager.getAsset(this.data.image) || this.data.image;

        if (this.data.isProtected) {
            return `
        <li class="col-sm-6 col-xs-12 pt-box" data-groups='[${categories}]'>
          <div class="portfolio-item ${protectedClass}" ${protectedAttributes}>
            <div class="img-box">
              <img
                src="${imageSrc}"
                style="width: 100%"
                alt="${this.data.alt}"
                class="img-responsive"
                loading="lazy"
              />
              <div class="pt-overlay">
                <div class="background-hover"></div>
                <span class="pt-title">${this.data.title}</span>
              </div>
            </div>
          </div>
        </li>
      `;
        }

        return `
      <li class="col-sm-6 col-xs-12 pt-box" data-groups='[${categories}]'>
        <figure class="portfolio-item">
          <div class="img-box">
            <a href="${this.data.link}">
              <img
                src="${imageSrc}"
                style="width: 100%"
                alt="${this.data.alt}"
                class="img-responsive"
                loading="lazy"
              />
              <div class="pt-overlay">
                <div class="background-hover"></div>
                <span class="pt-title">${this.data.title}</span>
              </div>
            </a>
          </div>
        </figure>
      </li>
    `;
    }
}
