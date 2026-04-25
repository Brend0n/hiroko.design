import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false, // Disable source maps for production
        rollupOptions: {
            input: {
                main: 'src/index.html',
                bmirror: 'bmirror.html',
                bheart: 'bheart.html',
                bconnect: 'bconnect.html',
                vetify: 'vetify.html',
                lenormand: 'lenormand.html',
                coucoudefrance: 'coucoudefrance.html',
                logo: 'logo.html',
                rudy: 'Rudy.html',
                streetproject: 'streetproject.html',
                jungle: 'jungle.html',
                about: 'about.html',
                contact: 'contact.html'
            }
        }
    },
    server: {
        port: 3000,
        open: true
    },
    css: {
        devSourcemap: true
    },
    // Handle source map issues for external libraries
    optimizeDeps: {
        include: ['jquery']
    }
})
