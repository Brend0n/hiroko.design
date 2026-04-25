/**
 * Asset Manager
 * Centralized asset management system for organizing and optimizing images
 */

export class AssetManager {
    constructor() {
        this.assetMap = new Map();
        this.initializeAssetMap();
    }

    /**
     * Initialize the asset mapping
     */
    initializeAssetMap() {
        // BMirror Project Assets
        this.assetMap.set('bmirror.hero', '/img/bmirror-top.png');
        this.assetMap.set('bmirror.thumbnail', '/img/bmirror-thumbnail.png');
        this.assetMap.set('bmirror.gesture1', '/img/gesture1.png');
        this.assetMap.set('bmirror.companionapp', '/img/companionapp.png');
        this.assetMap.set('bmirror.fontsize', '/img/fontsize.png');
        this.assetMap.set('bmirror.simpleUI', '/img/simpleUI.png');
        this.assetMap.set('bmirror.feedbacks', '/img/Feedbacks.png');
        this.assetMap.set('bmirror.final', '/img/bmirror10.png');

        // BMirror Videos
        this.assetMap.set('bmirror.video.touchless', '/img/bmirror_video_touchless.mp4');
        this.assetMap.set('bmirror.video.tutorial', '/img/bmirror_video_tutorial.mp4');
        this.assetMap.set('bmirror.video.gesture', '/img/bmirror_video_gestureactivation.mp4');

        // BHeart Project Assets
        this.assetMap.set('bheart.thumbnail', '/img/bheart-thumbnail.png');
        this.assetMap.set('bheart.hero', '/img/bheart1.png');
        this.assetMap.set('bheart.gallery1', '/img/bheart2.png');
        this.assetMap.set('bheart.gallery2', '/img/bheart3.png');
        this.assetMap.set('bheart.gallery3', '/img/bheart4.png');
        this.assetMap.set('bheart.gallery4', '/img/bheart5.png');
        this.assetMap.set('bheart.gallery5', '/img/bheart6.png');
        this.assetMap.set('bheart.gallery6', '/img/bheart7.png');
        this.assetMap.set('bheart.gallery7', '/img/bheart8.png');
        this.assetMap.set('bheart.gallery8', '/img/bheart10.png');

        // BConnect Project Assets
        this.assetMap.set('bconnect.thumbnail', '/img/bconnect-thumbnail.png');
        this.assetMap.set('bconnect.hero', '/img/Bconnect1.png');
        this.assetMap.set('bconnect.gallery1', '/img/Bconnect2.png');
        this.assetMap.set('bconnect.gallery2', '/img/Bconnect3.png');
        this.assetMap.set('bconnect.gallery3', '/img/Bconnect4.png');
        this.assetMap.set('bconnect.gallery4', '/img/Bconnect5.png');
        this.assetMap.set('bconnect.gallery5', '/img/Bconnect6.png');

        // Vetify Project Assets
        this.assetMap.set('vetify.thumbnail', '/img/vet-thumbnail.png');
        this.assetMap.set('vetify.hero', '/img/Vetify-top.png');
        this.assetMap.set('vetify.gallery1', '/img/Vetify1.png');
        this.assetMap.set('vetify.gallery2', '/img/Vetify2.png');
        this.assetMap.set('vetify.video', '/img/vetify.mp4');

        // Lenormand Project Assets
        this.assetMap.set('lenormand.thumbnail', '/img/lenormand-thumbnail.jpg');
        this.assetMap.set('lenormand.hero', '/img/lenormand1.jpg');
        this.assetMap.set('lenormand.gallery1', '/img/lenormand1-5.jpg');
        this.assetMap.set('lenormand.gallery2', '/img/lenormand6-10.jpg');
        this.assetMap.set('lenormand.gallery3', '/img/lenormand11-15.jpg');
        this.assetMap.set('lenormand.gallery4', '/img/lenormand16-20.jpg');
        this.assetMap.set('lenormand.gallery5', '/img/lenormand21-25.jpg');
        this.assetMap.set('lenormand.gallery6', '/img/lenormand26-30.jpg');
        this.assetMap.set('lenormand.gallery7', '/img/lenormand31-36.jpg');

        // Coucou de France Project Assets
        this.assetMap.set('coucou.thumbnail', '/img/coucou-thumbnail.jpg');
        this.assetMap.set('coucou.hero', '/img/coucou2.jpg');
        this.assetMap.set('coucou.map', '/img/coucou-map.jpg');
        this.assetMap.set('coucou.map1', '/img/coucou-map1.jpg');
        this.assetMap.set('coucou.map2', '/img/coucou-map2.jpg');
        this.assetMap.set('coucou.map3', '/img/coucou-map3.jpg');
        this.assetMap.set('coucou.logo', '/img/coucoudefrance-logo.jpg');
        this.assetMap.set('coucou.gallery1', '/img/coucoudefrance01.jpg');
        this.assetMap.set('coucou.gallery2', '/img/coucoudefrance03.jpg');
        this.assetMap.set('coucou.gallery3', '/img/coucoudefrance04.jpg');
        this.assetMap.set('coucou.gallery4', '/img/coucoudefrance05.jpg');
        this.assetMap.set('coucou.gallery5', '/img/coucoudefrance06.jpg');

        // Logo Design Project Assets
        this.assetMap.set('logo.thumbnail', '/img/logo-thumbnail.jpg');
        this.assetMap.set('logo.hero', '/img/logo1.jpg');
        this.assetMap.set('logo.gallery1', '/img/logo2.jpg');
        this.assetMap.set('logo.gallery2', '/img/logo3.jpg');
        this.assetMap.set('logo.gallery3', '/img/logo4.jpg');
        this.assetMap.set('logo.gallery4', '/img/logo5.jpg');
        this.assetMap.set('logo.gallery5', '/img/logo6.jpg');
        this.assetMap.set('logo.gallery6', '/img/logo7.jpg');
        this.assetMap.set('logo.gallery7', '/img/logo8.jpg');
        this.assetMap.set('logo.gallery8', '/img/logo9.jpg');
        this.assetMap.set('logo.gallery9', '/img/logo10.jpg');
        this.assetMap.set('logo.gallery10', '/img/logo11.jpg');

        // Rudy Project Assets
        this.assetMap.set('rudy.thumbnail', '/img/rudy-thumbnail.jpg');
        this.assetMap.set('rudy.hero', '/img/rudy1.png');
        this.assetMap.set('rudy.icons', '/img/rudy-icons.png');
        this.assetMap.set('rudy.logo', '/img/rudy-logo.png');
        this.assetMap.set('rudy.map', '/img/rudy-map.png');
        this.assetMap.set('rudy.video', '/img/Rudy.mp4');
        this.assetMap.set('rudy.ipad', '/img/RR_Ipad Reveal.MP4');

        // Street Project Assets
        this.assetMap.set('streetproject.thumbnail', '/img/streetproject-thumbnail.jpg');
        this.assetMap.set('streetproject.hero', '/img/streetproject01.jpg');
        this.assetMap.set('streetproject.gallery1', '/img/streetproject1.jpg');
        this.assetMap.set('streetproject.gallery2', '/img/streetproject2.jpg');
        this.assetMap.set('streetproject.gallery3', '/img/streetproject3.jpg');
        this.assetMap.set('streetproject.gallery4', '/img/streetproject4.jpg');
        this.assetMap.set('streetproject.gallery5', '/img/streetproject5.jpg');
        this.assetMap.set('streetproject.gallery6', '/img/streetproject6.jpg');
        this.assetMap.set('streetproject.gallery7', '/img/streetproject7.jpg');
        this.assetMap.set('streetproject.gallery8', '/img/streetproject8.jpg');
        this.assetMap.set('streetproject.gallery9', '/img/streetproject9.jpg');
        this.assetMap.set('streetproject.gallery10', '/img/streetproject10.jpg');
        this.assetMap.set('streetproject.gallery11', '/img/streetproject11.jpg');

        // Jungle Project Assets
        this.assetMap.set('jungle.thumbnail', '/img/tiger-thumbnail.png');
        this.assetMap.set('jungle.hero', '/img/tiger.png');
        this.assetMap.set('jungle.thea', '/img/thea-thumbnail.png');
        this.assetMap.set('jungle.theme1', '/img/theme.mp4');
        this.assetMap.set('jungle.theme2', '/img/theme2.mp4');

        // Common Assets
        this.assetMap.set('logo.animation', '/img/animation2.svg');
        this.assetMap.set('about.hero', '/img/about.jpg');

        // Favicons
        this.assetMap.set('favicon.16', '/img/favicon16-16.png');
        this.assetMap.set('favicon.32', '/img/favicon32-32.png');
        this.assetMap.set('favicon.48', '/img/favicon48-48.png');
        this.assetMap.set('favicon.62', '/img/favicon62-62.png');
        this.assetMap.set('favicon.150', '/img/favicon150-150.png');
    }

    /**
     * Get asset path by key
     */
    getAsset(key) {
        return this.assetMap.get(key) || '';
    }

    /**
     * Get multiple assets by project
     */
    getProjectAssets(projectName) {
        const assets = {};
        for (const [key, path] of this.assetMap.entries()) {
            if (key.startsWith(`${projectName}.`)) {
                const assetKey = key.replace(`${projectName}.`, '');
                assets[assetKey] = path;
            }
        }
        return assets;
    }

    /**
     * Get all thumbnail assets
     */
    getThumbnails() {
        const thumbnails = {};
        for (const [key, path] of this.assetMap.entries()) {
            if (key.includes('thumbnail')) {
                thumbnails[key] = path;
            }
        }
        return thumbnails;
    }

    /**
     * Get all hero images
     */
    getHeroImages() {
        const heroes = {};
        for (const [key, path] of this.assetMap.entries()) {
            if (key.includes('hero')) {
                heroes[key] = path;
            }
        }
        return heroes;
    }

    /**
     * Add new asset
     */
    addAsset(key, path) {
        this.assetMap.set(key, path);
    }

    /**
     * Remove asset
     */
    removeAsset(key) {
        this.assetMap.delete(key);
    }

    /**
     * Get all assets
     */
    getAllAssets() {
        return Object.fromEntries(this.assetMap);
    }
}

// Create global instance
export const assetManager = new AssetManager();

