/**
 * Portfolio Data
 * Centralized data for all portfolio items
 */
import { assetManager } from '../utils/assetManager.js';

export const portfolioData = [
    {
        id: 'bmirror',
        title: 'Desgining Touchless Experience <br>for a Smart Mirror',
        description: 'UX design for gesture-based smart mirror interaction',
        image: 'bmirror.thumbnail',
        alt: 'BMirror',
        link: 'bmirror.html',
        categories: ['UI']
    },
    {
        id: 'vetify',
        title: '🔐 <br>AI-Assisted Consultation Platform for Veterinarians',
        description: 'Protected project - AI platform for veterinary consultations',
        image: 'vetify.thumbnail',
        alt: 'Vetify',
        link: 'vetify.html',
        categories: ['UI'],
        isProtected: true
    },
    {
        id: 'bheart',
        title: 'Branding to Product Design for a Smart Bracelet',
        description: 'Complete design system for smart wearable device',
        image: 'bheart.thumbnail',
        alt: 'Bheart',
        link: 'bheart.html',
        categories: ['UI', 'Graphic']
    },
    {
        id: 'bconnect',
        title: 'Reusable Design Foundation for Fast Product Launches',
        description: 'Design system and component library',
        image: 'bconnect.thumbnail',
        alt: 'Bconnect',
        link: 'bconnect.html',
        categories: ['UI']
    },
    {
        id: 'lenormand',
        title: 'Illustration: <br>Lenormand Card',
        description: 'Custom illustration project',
        image: 'lenormand.thumbnail',
        alt: 'Lenormand Card',
        link: 'lenormand.html',
        categories: ['Graphic']
    },
    {
        id: 'coucoudefrance',
        title: 'Personal project: <br>Coucou de France',
        description: 'Personal travel and cultural project',
        image: 'coucou.thumbnail',
        alt: 'Coucou de France',
        link: 'coucoudefrance.html',
        categories: ['Graphic', 'web']
    },
    {
        id: 'logo',
        title: 'LOGO design',
        description: 'Brand identity and logo design',
        image: 'logo.thumbnail',
        alt: 'logo',
        link: 'logo.html',
        categories: ['Graphic']
    },
    {
        id: 'rudy',
        title: 'Illustration: <br>Rudy Report',
        description: 'Editorial illustration project',
        image: 'rudy.thumbnail',
        alt: 'Rudy Report',
        link: 'Rudy.html',
        categories: ['Graphic']
    },
    {
        id: 'streetproject',
        title: 'Volunteer: <br>Street Project',
        description: 'Volunteer design work for social cause',
        image: 'streetproject.thumbnail',
        alt: 'Street Project',
        link: 'streetproject.html',
        categories: ['Graphic']
    },
    {
        id: 'jungle',
        title: 'Personal project: <br>Into the jungle',
        description: 'Personal creative project',
        image: 'jungle.thumbnail',
        alt: 'Into the jungle',
        link: 'jungle.html',
        categories: ['Graphic', 'web']
    }
];

// Helper function to get portfolio item by ID
export function getPortfolioItem(id) {
    return portfolioData.find(item => item.id === id);
}

// Helper function to get portfolio items by category
export function getPortfolioItemsByCategory(category) {
    if (category === 'all') return portfolioData;
    return portfolioData.filter(item => item.categories.includes(category));
}
