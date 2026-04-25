/**
 * OptimizedVideo Component
 * Reusable component for optimized video display
 */
import { assetManager } from '../utils/assetManager.js';

export class OptimizedVideo {
    constructor(options = {}) {
        this.options = {
            src: '',
            poster: '',
            autoplay: false,
            loop: false,
            muted: true,
            controls: false,
            width: '100%',
            height: '100%',
            className: '',
            loading: 'lazy',
            ...options
        };
    }

    /**
     * Render the optimized video
     */
    render() {
        const {
            src,
            poster,
            autoplay,
            loop,
            muted,
            controls,
            width,
            height,
            className,
            loading
        } = this.options;

        // Get the actual video path from asset manager if it's a key
        const videoSrc = assetManager.getAsset(src) || src;
        const posterSrc = poster ? (assetManager.getAsset(poster) || poster) : '';

        return `
      <video 
        ${width ? `width="${width}"` : ''}
        ${height ? `height="${height}"` : ''}
        ${autoplay ? 'autoplay' : ''}
        ${loop ? 'loop' : ''}
        ${muted ? 'muted' : ''}
        ${controls ? 'controls' : ''}
        ${posterSrc ? `poster="${posterSrc}"` : ''}
        class="${className}"
        ${loading === 'lazy' ? 'loading="lazy"' : ''}
        preload="${loading === 'eager' ? 'auto' : 'metadata'}"
      >
        <source src="${videoSrc}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
    }

    /**
     * Mount the component
     */
    mount(container) {
        if (typeof container === 'string') {
            const element = document.querySelector(container);
            if (element) {
                element.innerHTML = this.render();
                this.setupVideoOptimizations(element);
            }
        } else if (container) {
            container.innerHTML = this.render();
            this.setupVideoOptimizations(container);
        }
    }

    /**
     * Setup video optimizations
     */
    setupVideoOptimizations(container) {
        const video = container.querySelector('video');
        if (!video) return;

        // Intersection Observer for lazy loading
        if ('IntersectionObserver' in window && this.options.loading === 'lazy') {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        // Load video when it comes into view
                        video.load();
                        videoObserver.unobserve(video);
                    }
                });
            });

            videoObserver.observe(video);
        }

        // Pause video when not in view to save bandwidth
        if (this.options.autoplay) {
            const pauseObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log('Video autoplay failed:', e));
                    } else {
                        video.pause();
                    }
                });
            });

            pauseObserver.observe(video);
        }
    }

    /**
     * Static method to create and mount a video quickly
     */
    static create(options, container) {
        const video = new OptimizedVideo(options);
        video.mount(container);
        return video;
    }

    /**
     * Static method for autoplay videos (like in project showcases)
     */
    static createAutoplay(src, options = {}) {
        return new OptimizedVideo({
            src,
            autoplay: true,
            loop: true,
            muted: true,
            controls: false,
            loading: 'lazy',
            ...options
        });
    }

    /**
     * Static method for tutorial/demo videos
     */
    static createTutorial(src, poster, options = {}) {
        return new OptimizedVideo({
            src,
            poster,
            autoplay: false,
            loop: false,
            muted: false,
            controls: true,
            loading: 'lazy',
            ...options
        });
    }
}

