/**
 * Performance Optimizer
 * Utility for optimizing website performance
 */

export class PerformanceOptimizer {
    constructor() {
        this.criticalImages = [];
        this.preloadedAssets = new Set();
    }

    /**
     * Preload critical images
     */
    preloadCriticalImages(images) {
        images.forEach(image => {
            if (!this.preloadedAssets.has(image)) {
                this.preloadImage(image);
                this.preloadedAssets.add(image);
            }
        });
    }

    /**
     * Preload a single image
     */
    preloadImage(src, as = 'image') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = as;
        document.head.appendChild(link);
    }

    /**
     * Preload critical fonts
     */
    preloadFonts(fonts) {
        fonts.forEach(font => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = font.href;
            link.as = 'font';
            link.type = font.type || 'font/woff2';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    /**
     * Setup resource hints
     */
    setupResourceHints() {
        // DNS prefetch for external domains
        const externalDomains = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
            'https://cdnjs.cloudflare.com',
            'https://cdn.rawgit.com'
        ];

        externalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
        });

        // Preconnect to critical domains
        const criticalDomains = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
        ];

        criticalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = domain;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    /**
     * Optimize images with intersection observer
     */
    setupImageOptimization() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        // Load high-quality image
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }

                        // Add fade-in effect
                        img.classList.add('loaded');

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            // Observe all lazy images
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Setup video optimization
     */
    setupVideoOptimization() {
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;

                    if (entry.isIntersecting) {
                        // Play video when in view
                        if (video.autoplay) {
                            video.play().catch(e => console.log('Video autoplay failed:', e));
                        }
                    } else {
                        // Pause video when out of view
                        if (!video.paused) {
                            video.pause();
                        }
                    }
                });
            });

            document.querySelectorAll('video[autoplay]').forEach(video => {
                videoObserver.observe(video);
            });
        }
    }

    /**
     * Setup lazy loading for non-critical resources
     */
    setupLazyLoading() {
        // Lazy load non-critical CSS
        const nonCriticalCSS = [
            'https://cdn.rawgit.com/michalsnik/aos/2.0.4/dist/aos.css'
        ];

        nonCriticalCSS.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = 'style';
            link.onload = function () {
                this.rel = 'stylesheet';
            };
            document.head.appendChild(link);
        });
    }

    /**
     * Optimize scroll performance
     */
    setupScrollOptimization() {
        let ticking = false;

        const updateScrollElements = () => {
            // Update scroll-dependent elements here
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    /**
     * Setup performance monitoring
     */
    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                    }
                });
            }).observe({ entryTypes: ['layout-shift'] });
        }
    }

    /**
     * Initialize all optimizations
     */
    initialize() {
        this.setupResourceHints();
        this.setupLazyLoading();
        this.setupImageOptimization();
        this.setupVideoOptimization();
        this.setupScrollOptimization();
        this.setupPerformanceMonitoring();
    }

    /**
     * Get performance metrics
     */
    getPerformanceMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');

        return {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
        };
    }
}

// Create global instance
export const performanceOptimizer = new PerformanceOptimizer();

