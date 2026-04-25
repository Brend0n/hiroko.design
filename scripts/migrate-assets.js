#!/usr/bin/env node

/**
 * Asset Migration Script
 * Helps migrate from hardcoded paths to asset manager
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AssetMigrator {
    constructor() {
        this.assetMap = new Map();
        this.migrationLog = [];
    }

    /**
     * Scan directory for assets
     */
    scanAssets(directory) {
        const assets = [];
        const self = this;

        function scanDir(dir) {
            const files = fs.readdirSync(dir);

            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);

                if (stat.isDirectory()) {
                    scanDir(filePath);
                } else if (self.isAssetFile(file)) {
                    assets.push({
                        path: filePath,
                        relativePath: path.relative(process.cwd(), filePath),
                        name: file,
                        extension: path.extname(file).toLowerCase()
                    });
                }
            });
        }

        scanDir(directory);
        return assets;
    }

    /**
     * Check if file is an asset
     */
    isAssetFile(filename) {
        const assetExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.mp4', '.webm', '.mov'];
        const ext = path.extname(filename).toLowerCase();
        return assetExtensions.includes(ext);
    }

    /**
     * Generate asset key from filename
     */
    generateAssetKey(filename, project = null) {
        const name = path.basename(filename, path.extname(filename));

        // Remove common suffixes
        const cleanName = name
            .replace(/-thumbnail$/, '')
            .replace(/-top$/, '')
            .replace(/-hero$/, '')
            .replace(/^\d+$/, 'gallery$&'); // Convert numbers to gallery1, gallery2, etc.

        // Determine project from filename if not provided
        if (!project) {
            if (cleanName.startsWith('bmirror')) project = 'bmirror';
            else if (cleanName.startsWith('bheart')) project = 'bheart';
            else if (cleanName.startsWith('bconnect')) project = 'bconnect';
            else if (cleanName.startsWith('vetify')) project = 'vetify';
            else if (cleanName.startsWith('lenormand')) project = 'lenormand';
            else if (cleanName.startsWith('coucou')) project = 'coucou';
            else if (cleanName.startsWith('logo')) project = 'logo';
            else if (cleanName.startsWith('rudy')) project = 'rudy';
            else if (cleanName.startsWith('streetproject')) project = 'streetproject';
            else if (cleanName.startsWith('tiger') || cleanName.startsWith('jungle')) project = 'jungle';
            else if (cleanName.startsWith('favicon')) project = 'favicon';
            else project = 'common';
        }

        // Determine asset type
        let type = 'gallery';
        if (name.includes('thumbnail')) type = 'thumbnail';
        else if (name.includes('top') || name.includes('hero')) type = 'hero';
        else if (name.includes('logo')) type = 'logo';
        else if (name.includes('animation')) type = 'animation';
        else if (name.includes('video') || name.includes('mp4')) type = 'video';
        else if (name.includes('favicon')) type = 'favicon';
        else if (/^\d+$/.test(cleanName)) type = `gallery${cleanName}`;

        return `${project}.${type}`;
    }

    /**
     * Generate asset manager code
     */
    generateAssetManagerCode(assets) {
        let code = '// Generated asset mappings\n';
        code += 'this.assetMap = new Map([\n';

        assets.forEach(asset => {
            const key = this.generateAssetKey(asset.name);
            const relativePath = asset.relativePath.replace(/\\/g, '/');
            code += `  ['${key}', '${relativePath}'],\n`;
        });

        code += ']);\n';
        return code;
    }

    /**
     * Find hardcoded asset references in files
     */
    findAssetReferences(directory, extensions = ['.js', '.html', '.jsx', '.ts', '.tsx']) {
        const references = [];

        function scanDir(dir) {
            const files = fs.readdirSync(dir);

            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);

                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    scanDir(filePath);
                } else if (extensions.includes(path.extname(file))) {
                    const content = fs.readFileSync(filePath, 'utf8');
                    const assetRegex = /['"`]([^'"`]*\/img\/[^'"`]*)['"`]/g;
                    let match;

                    while ((match = assetRegex.exec(content)) !== null) {
                        references.push({
                            file: filePath,
                            line: content.substring(0, match.index).split('\n').length,
                            reference: match[1],
                            fullMatch: match[0]
                        });
                    }
                }
            });
        }

        scanDir(directory);
        return references;
    }

    /**
     * Generate migration report
     */
    generateMigrationReport(assets, references) {
        let report = '# Asset Migration Report\n\n';

        report += '## Assets Found\n';
        report += `Total assets: ${assets.length}\n\n`;

        report += '## Asset Mappings\n';
        assets.forEach(asset => {
            const key = this.generateAssetKey(asset.name);
            report += `- \`${key}\` → \`${asset.relativePath}\`\n`;
        });

        report += '\n## Hardcoded References Found\n';
        report += `Total references: ${references.length}\n\n`;

        const groupedRefs = references.reduce((acc, ref) => {
            if (!acc[ref.reference]) acc[ref.reference] = [];
            acc[ref.reference].push(ref);
            return acc;
        }, {});

        Object.entries(groupedRefs).forEach(([ref, instances]) => {
            report += `### \`${ref}\`\n`;
            instances.forEach(instance => {
                report += `- ${instance.file}:${instance.line}\n`;
            });
            report += '\n';
        });

        return report;
    }

    /**
     * Run migration
     */
    run() {
        console.log('🔍 Scanning for assets...');
        const assets = this.scanAssets('./img');

        console.log('🔍 Scanning for hardcoded references...');
        const references = this.findAssetReferences('./src');

        console.log('📝 Generating migration report...');
        const report = this.generateMigrationReport(assets, references);

        // Write report to file
        fs.writeFileSync('./ASSET_MIGRATION_REPORT.md', report);

        // Generate asset manager code
        const assetManagerCode = this.generateAssetManagerCode(assets);
        fs.writeFileSync('./generated-asset-manager.js', assetManagerCode);

        console.log('✅ Migration complete!');
        console.log(`📊 Found ${assets.length} assets and ${references.length} references`);
        console.log('📄 Check ASSET_MIGRATION_REPORT.md for details');
        console.log('💻 Check generated-asset-manager.js for asset manager code');
    }
}

// Run migration if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    const migrator = new AssetMigrator();
    migrator.run();
}

export default AssetMigrator;
