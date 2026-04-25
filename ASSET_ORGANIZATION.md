# Asset Organization & Optimization Guide

## Overview

The asset organization system provides centralized management of all images, videos, and other media assets. This system improves maintainability, performance, and developer experience.

## Asset Management System

### Asset Manager (`src/utils/assetManager.js`)

The Asset Manager provides a centralized way to manage all assets using semantic keys instead of hardcoded paths.

#### Key Benefits:
- **Centralized Management**: All assets defined in one place
- **Semantic Naming**: Use meaningful keys like `bmirror.hero` instead of `/img/bmirror-top.png`
- **Easy Updates**: Change asset paths in one location
- **Type Safety**: Prevents broken links due to typos

#### Usage Examples:

```javascript
import { assetManager } from './utils/assetManager.js';

// Get a single asset
const heroImage = assetManager.getAsset('bmirror.hero');

// Get all assets for a project
const bmirrorAssets = assetManager.getProjectAssets('bmirror');

// Get all thumbnails
const thumbnails = assetManager.getThumbnails();

// Add new asset
assetManager.addAsset('newproject.hero', '/img/new-hero.jpg');
```

### Asset Naming Convention

Assets are organized using a hierarchical naming system:

```
{project}.{type}[.{variant}]
```

**Examples:**
- `bmirror.hero` - BMirror project hero image
- `bmirror.thumbnail` - BMirror project thumbnail
- `bmirror.gallery1` - BMirror project gallery image 1
- `bmirror.video.touchless` - BMirror project touchless video
- `logo.animation` - Logo animation asset

**Asset Types:**
- `hero` - Main project image
- `thumbnail` - Portfolio grid thumbnail
- `gallery1`, `gallery2`, etc. - Gallery images
- `video.*` - Video assets
- `logo` - Logo/brand assets
- `favicon.*` - Favicon assets

## Image Optimization

### OptimizedImage Component (`src/components/OptimizedImage.js`)

Provides optimized image rendering with:
- **Lazy Loading**: Images load only when needed
- **Responsive Images**: Automatic srcset generation
- **Placeholder Support**: Shows placeholder while loading
- **Performance Optimization**: Intersection Observer for efficient loading

#### Usage Examples:

```javascript
import { OptimizedImage } from './components/OptimizedImage.js';

// Create a hero image (eager loading)
const heroImage = OptimizedImage.createHero('bmirror.hero', 'BMirror Project');

// Create a thumbnail (lazy loading)
const thumbnail = OptimizedImage.createThumbnail('bmirror.thumbnail', 'BMirror');

// Create a gallery image
const galleryImage = OptimizedImage.createGallery('bmirror.gallery1', 'BMirror Gallery');

// Mount to DOM
heroImage.mount('#hero-container');
```

### Image Optimizer (`src/utils/imageOptimizer.js`)

Utility functions for image optimization:

```javascript
import { imageOptimizer } from './utils/imageOptimizer.js';

// Generate responsive srcset
const srcset = imageOptimizer.generateSrcSet('/img/hero.jpg');

// Check WebP support
if (imageOptimizer.supportsWebP()) {
  // Use WebP format
}

// Setup lazy loading
imageOptimizer.setupLazyLoading();
```

## Video Optimization

### OptimizedVideo Component (`src/components/OptimizedVideo.js`)

Provides optimized video rendering with:
- **Lazy Loading**: Videos load only when in viewport
- **Autoplay Management**: Smart autoplay with intersection observer
- **Bandwidth Optimization**: Pause videos when not visible
- **Poster Support**: Show poster image while loading

#### Usage Examples:

```javascript
import { OptimizedVideo } from './components/OptimizedVideo.js';

// Create autoplay video (for project showcases)
const showcaseVideo = OptimizedVideo.createAutoplay('bmirror.video.touchless');

// Create tutorial video (with controls)
const tutorialVideo = OptimizedVideo.createTutorial(
  'bmirror.video.tutorial', 
  'bmirror.thumbnail'
);

// Mount to DOM
showcaseVideo.mount('#video-container');
```

## Performance Optimization

### Performance Optimizer (`src/utils/performanceOptimizer.js`)

Comprehensive performance optimization system:

#### Features:
- **Resource Hints**: DNS prefetch and preconnect
- **Critical Resource Preloading**: Preload important assets
- **Lazy Loading**: Defer non-critical resources
- **Scroll Optimization**: Optimized scroll event handling
- **Performance Monitoring**: Core Web Vitals tracking

#### Usage:

```javascript
import { performanceOptimizer } from './utils/performanceOptimizer.js';

// Initialize all optimizations
performanceOptimizer.initialize();

// Preload critical images
performanceOptimizer.preloadCriticalImages([
  'bmirror.hero',
  'bheart.hero'
]);

// Get performance metrics
const metrics = performanceOptimizer.getPerformanceMetrics();
```

## Asset Organization Structure

### Current Structure:
```
img/
├── bmirror-*           # BMirror project assets
├── bheart-*            # BHeart project assets
├── bconnect-*          # BConnect project assets
├── vetify-*            # Vetify project assets
├── lenormand-*         # Lenormand project assets
├── coucou-*            # Coucou de France assets
├── logo-*              # Logo design assets
├── rudy-*              # Rudy project assets
├── streetproject-*     # Street project assets
├── tiger-*             # Jungle project assets
├── favicon-*           # Favicon assets
└── animation2.svg      # Logo animation
```

### Recommended Future Structure:
```
public/
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── bmirror/
│   │   │   ├── bheart/
│   │   │   └── ...
│   │   ├── common/
│   │   │   ├── logos/
│   │   │   └── icons/
│   │   └── favicons/
│   ├── videos/
│   │   ├── projects/
│   │   └── common/
│   └── fonts/
└── ...
```

## Best Practices

### 1. Asset Naming
- Use semantic keys in asset manager
- Follow consistent naming convention
- Group related assets by project

### 2. Image Optimization
- Use appropriate image formats (WebP when supported)
- Implement lazy loading for non-critical images
- Provide proper alt text for accessibility

### 3. Video Optimization
- Use autoplay sparingly
- Provide poster images
- Implement lazy loading for videos

### 4. Performance
- Preload critical resources
- Use resource hints for external domains
- Monitor Core Web Vitals

### 5. Maintenance
- Keep asset manager updated
- Remove unused assets
- Optimize asset file sizes

## Migration Guide

### From Hardcoded Paths to Asset Manager:

**Before:**
```javascript
const imageSrc = '/img/bmirror-thumbnail.png';
```

**After:**
```javascript
import { assetManager } from './utils/assetManager.js';
const imageSrc = assetManager.getAsset('bmirror.thumbnail');
```

### Adding New Assets:

1. Add asset to `assetManager.initializeAssetMap()`
2. Use semantic key in components
3. Update documentation if needed

### Adding New Projects:

1. Add all project assets to asset manager
2. Create project page component
3. Update portfolio data
4. Register route in page router

## Performance Benefits

- **Faster Loading**: Lazy loading and preloading
- **Better UX**: Smooth scrolling and optimized interactions
- **Reduced Bandwidth**: Smart video and image loading
- **Improved SEO**: Better Core Web Vitals scores
- **Maintainable**: Centralized asset management

## Monitoring

The system includes built-in performance monitoring:
- Core Web Vitals tracking
- Load time measurements
- Resource loading optimization
- User interaction performance

Check browser console in development mode for performance metrics.

