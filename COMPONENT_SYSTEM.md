# Component System Documentation

## Overview

The component system provides a modular, maintainable way to build your portfolio website. It eliminates code duplication and makes it easy to add, remove, or modify content.

## Components

### Core Components

#### Header Component (`src/components/Header.js`)
- Renders the site header with logo
- Automatically handles desktop and mobile versions
- Can be easily extended with navigation

#### Footer Component (`src/components/Footer.js`)
- Renders the site footer
- Currently minimal but can be extended

#### GoBack Component (`src/components/GoBack.js`)
- Provides "back to work" functionality for project pages
- Customizable text and destination

#### PortfolioItem Component (`src/components/PortfolioItem.js`)
- Renders individual portfolio items
- Supports protected and public items
- Handles categories and filtering

#### Portfolio Component (`src/components/Portfolio.js`)
- Renders the entire portfolio grid
- Handles filtering by category
- Integrates with shuffle.js for animations

#### ProjectLayout Component (`src/components/ProjectLayout.js`)
- Provides consistent layout for project pages
- Includes header, hero image, content area, and footer
- Configurable options

### Component Manager (`src/components/ComponentManager.js`)

Centralized system for managing all components:

```javascript
import { componentManager } from './components/ComponentManager.js';

// Initialize common components
await componentManager.initializeCommonComponents();

// Initialize portfolio with data
await componentManager.initializePortfolio(portfolioData);

// Initialize project layout
await componentManager.initializeProjectLayout({
  title: 'My Project',
  heroImage: '/img/hero.jpg',
  showGoBack: true
});
```

## Data Management

### Portfolio Data (`src/data/portfolio.js`)

All portfolio items are defined in a centralized data file:

```javascript
export const portfolioData = [
  {
    id: 'project-name',
    title: 'Project Title',
    description: 'Project description',
    image: '/img/thumbnail.png',
    alt: 'Alt text',
    link: 'project.html',
    categories: ['UI', 'Graphic'],
    isProtected: false
  }
];
```

### Adding New Portfolio Items

1. Add the item to `portfolioData` in `src/data/portfolio.js`
2. The item will automatically appear in the portfolio grid
3. No HTML changes needed!

### Adding New Project Pages

1. Create a new page class in `src/pages/`
2. Register the route in `src/router/PageRouter.js`
3. The page will be automatically handled by the router

### Available Pages

The following pages are already implemented with the component system:

**Project Pages:**
- BMirror (`bmirror.html`) - Touchless Smart Mirror Design
- BHeart (`bheart.html`) - Smart Bracelet Branding & Design
- BConnect (`bconnect.html`) - Design System & Component Library
- Vetify (`vetify.html`) - AI-Assisted Veterinary Platform (Protected)
- Lenormand (`lenormand.html`) - Illustration: Lenormand Card Deck
- Coucou de France (`coucoudefrance.html`) - Personal Travel Project
- Logo Design (`logo.html`) - Brand Identity Collection
- Rudy Report (`Rudy.html`) - Editorial Illustration
- Street Project (`streetproject.html`) - Volunteer Social Impact Work
- Into the Jungle (`jungle.html`) - Personal Creative Project

**General Pages:**
- About (`about.html`) - About Hiroko
- Contact (`contact.html`) - Contact Information

## Usage Examples

### Creating a New Project Page

```javascript
// src/pages/MyProjectPage.js
import { componentManager } from '../components/ComponentManager.js';

export class MyProjectPage {
  constructor() {
    this.pageData = {
      title: 'My Project',
      heroImage: '/img/my-project-hero.png',
      showGoBack: true
    };
  }

  async initialize() {
    await componentManager.initializeProjectLayout(this.pageData);
    await componentManager.initializeCommonComponents();
    await componentManager.loadExternalScripts();
    this.addProjectContent();
  }

  addProjectContent() {
    const contentElement = document.querySelector('#content');
    contentElement.innerHTML = `
      <div class="container">
        <h2>My Project Content</h2>
        <!-- Add your project content here -->
      </div>
    `;
  }
}
```

### Modifying the Header

```javascript
// In Header.js, you can easily modify the header content
render() {
  return `
    <div class="container" id="header-pc-screen">
      <div id="myLogo">
        <a href="index.html">
          <img src="/img/animation2.svg" alt="Hiroko Bouzas Logo" />
        </a>
      </div>
      <!-- Add navigation or other elements here -->
    </div>
  `;
}
```

## Benefits

1. **No Code Duplication**: Header, footer, and common elements are defined once
2. **Easy Content Management**: Add/remove portfolio items by editing data files
3. **Consistent Layout**: All project pages use the same layout structure
4. **Maintainable**: Changes to components automatically apply everywhere
5. **Extensible**: Easy to add new components and functionality

## File Structure

```
src/
├── components/           # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   ├── GoBack.js
│   ├── PortfolioItem.js
│   ├── Portfolio.js
│   ├── ProjectLayout.js
│   └── ComponentManager.js
├── data/                # Data files
│   └── portfolio.js
├── pages/               # Page-specific logic
│   └── BMirrorPage.js
├── router/              # Routing logic
│   └── PageRouter.js
└── main.js             # Application entry point
```

## Next Steps

1. Test the component system with `npm run dev`
2. Add more project pages using the same pattern
3. Customize components as needed
4. Add more data-driven content
