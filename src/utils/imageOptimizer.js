/**
 * Image Optimizer
 * Utility for optimizing and managing images
 */

export class ImageOptimizer {
    constructor() {
        this.supportedFormats = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
        this.qualitySettings = {
            thumbnail: 0.7,
            gallery: 0.8,
            hero: 0.9
        };
    }

    /**
     * Generate responsive image srcset
     */
    generateSrcSet(basePath, sizes = [320, 640, 1024, 1920]) {
        const srcset = sizes.map(size => {
            // In a real implementation, you would generate different sized images
            // For now, we'll return the original path
            return `${basePath} ${size}w`;
        }).join(', ');

        return srcset;
    }

    /**
     * Generate responsive image sizes attribute
     */
    generateSizes(breakpoints = {
        mobile: '100vw',
        tablet: '50vw',
        desktop: '33vw'
    }) {
        return Object.entries(breakpoints)
            .map(([breakpoint, size]) => `(max-width: ${breakpoint === 'mobile' ? '768px' : '1024px'}) ${size}`)
            .join(', ') + ', 100vw';
    }

    /**
     * Create optimized image element
     */
    createOptimizedImage({
        src,
        alt,
        width,
        height,
        loading = 'lazy',
        className = '',
        sizes = '100vw'
    }) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.loading = loading;
        img.className = className;

        if (width) img.width = width;
        if (height) img.height = height;

        // Add srcset for responsive images
        const srcset = this.generateSrcSet(src);
        if (srcset) {
            img.srcset = srcset;
            img.sizes = sizes;
        }

        return img;
    }

    /**
     * Preload critical images
     */
    preloadImage(src, as = 'image') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = as;
        document.head.appendChild(link);
    }

    /**
     * Lazy load images with intersection observer
     */
    setupLazyLoading(selector = 'img[data-src]') {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll(selector).forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Get image dimensions
     */
    getImageDimensions(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                    aspectRatio: img.naturalWidth / img.naturalHeight
                });
            };
            img.onerror = reject;
            img.src = src;
        });
    }

    /**
     * Check if image format is supported
     */
    isSupportedFormat(filename) {
        const extension = filename.split('.').pop().toLowerCase();
        return this.supportedFormats.includes(extension);
    }

    /**
     * Get optimal image format based on browser support
     */
    getOptimalFormat() {
        if (this.supportsWebP()) {
            return 'webp';
        }
        return 'jpg';
    }

    /**
     * Check WebP support
     */
    supportsWebP() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    /**
     * Generate placeholder for images
     */
    generatePlaceholder(width, height, color = '#f0f0f0') {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        return canvas.toDataURL();
    }
}

// Create global instance
export const imageOptimizer = new ImageOptimizer();

