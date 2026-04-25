/**
 * OptimizedImage Component
 * Reusable component for optimized image display
 */
import { assetManager } from '../utils/assetManager.js';
import { imageOptimizer } from '../utils/imageOptimizer.js';

export class OptimizedImage {
    constructor(options = {}) {
        this.options = {
            src: '',
            alt: '',
            width: null,
            height: null,
            loading: 'lazy',
            className: '',
            sizes: '100vw',
            quality: 'gallery',
            placeholder: true,
            ...options
        };
    }

    /**
     * Render the optimized image
     */
    render() {
        const { src, alt, width, height, loading, className, sizes } = this.options;

        // Get the actual image path from asset manager if it's a key
        const imageSrc = assetManager.getAsset(src) || src;

        // Generate placeholder if needed
        const placeholder = this.options.placeholder && loading === 'lazy'
            ? imageOptimizer.generatePlaceholder(width || 400, height || 300)
            : null;

        return `
      <img 
        src="${placeholder || imageSrc}"
        ${placeholder ? `data-src="${imageSrc}"` : ''}
        alt="${alt}"
        ${width ? `width="${width}"` : ''}
        ${height ? `height="${height}"` : ''}
        loading="${loading}"
        class="${className} ${placeholder ? 'lazy' : ''}"
        sizes="${sizes}"
        ${this.generateSrcSet(imageSrc)}
      />
    `;
    }

    /**
     * Generate srcset attribute
     */
    generateSrcSet(src) {
        const srcset = imageOptimizer.generateSrcSet(src);
        return srcset ? `srcset="${srcset}"` : '';
    }

    /**
     * Mount the component
     */
    mount(container) {
        if (typeof container === 'string') {
            const element = document.querySelector(container);
            if (element) {
                element.innerHTML = this.render();
                this.setupLazyLoading(element);
            }
        } else if (container) {
            container.innerHTML = this.render();
            this.setupLazyLoading(container);
        }
    }

    /**
     * Setup lazy loading for the image
     */
    setupLazyLoading(container) {
        const img = container.querySelector('img.lazy');
        if (img) {
            imageOptimizer.setupLazyLoading();
        }
    }

    /**
     * Static method to create and mount an image quickly
     */
    static create(options, container) {
        const image = new OptimizedImage(options);
        image.mount(container);
        return image;
    }

    /**
     * Static method for hero images (eager loading)
     */
    static createHero(src, alt, options = {}) {
        return new OptimizedImage({
            src,
            alt,
            loading: 'eager',
            quality: 'hero',
            placeholder: false,
            ...options
        });
    }

    /**
     * Static method for thumbnails
     */
    static createThumbnail(src, alt, options = {}) {
        return new OptimizedImage({
            src,
            alt,
            loading: 'lazy',
            quality: 'thumbnail',
            sizes: '(max-width: 768px) 100vw, 50vw',
            ...options
        });
    }

    /**
     * Static method for gallery images
     */
    static createGallery(src, alt, options = {}) {
        return new OptimizedImage({
            src,
            alt,
            loading: 'lazy',
            quality: 'gallery',
            sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
            ...options
        });
    }
}

