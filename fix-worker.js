const fs = require('fs');
const path = require('path');

const workerPath = path.join(__dirname, '.open-next/worker.js');

// Read the worker file
let workerContent = fs.readFileSync(workerPath, 'utf8');

// Add static asset handling
const insertPoint = `            // Fallback for the Next default image loader.
            if (url.pathname === \`\${globalThis.__NEXT_BASE_PATH__}/_next/image\`) {
                const imageUrl = url.searchParams.get("url") ?? "";
                return fetchImage(env.ASSETS, imageUrl);
            }
            // - \`Request\`s are handled by the Next server`;

const replacement = `            // Fallback for the Next default image loader.
            if (url.pathname === \`\${globalThis.__NEXT_BASE_PATH__}/_next/image\`) {
                const imageUrl = url.searchParams.get("url") ?? "";
                return fetchImage(env.ASSETS, imageUrl);
            }
            // Handle static assets (JS, CSS, etc.)
            if (url.pathname.startsWith("/_next/static/")) {
                return env.ASSETS.fetch(request);
            }
            // Handle public assets (images, favicon, etc.)
            if (url.pathname.match(/\\.(jpg|jpeg|png|gif|ico|svg|webp|pdf|txt|xml|json)$/i)) {
                return env.ASSETS.fetch(request);
            }
            // - \`Request\`s are handled by the Next server`;

// Replace the content
workerContent = workerContent.replace(insertPoint, replacement);

// Write back the file
fs.writeFileSync(workerPath, workerContent);

console.log('✅ Worker fixed for static asset handling');