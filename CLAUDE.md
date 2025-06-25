# ⚡ ONLY DEPLOYMENT METHOD - WORKING PERFECTLY ⚡

## THE ONE AND ONLY WAY TO DEPLOY:

✅ **@opennextjs/cloudflare** package (GOOD - USE THIS)  
❌ **@cloudflare/next-on-pages** (BAD - HAS VERCEL DEPENDENCIES)  
✅ **Standard Next.js standalone output**  
✅ **Standard wrangler.toml configuration**  
✅ **Standard deployment commands**  

## NEVER DEVIATE FROM THIS SETUP:

### CRITICAL: 
- ✅ USE: @opennextjs/cloudflare
- ❌ NEVER USE: @cloudflare/next-on-pages (has Vercel dependencies)

### EXACT WORKING CONFIGURATION:

**wrangler.toml:**
```toml
name = "keptkitchen-website"
main = ".open-next/worker.js"
compatibility_date = "2025-04-01"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".open-next/assets"
binding = "ASSETS"

[[routes]]
pattern = "www.thekeptkitchen.com/*"
zone_name = "thekeptkitchen.com"

# NOTE: Environment variables should be set via Cloudflare Dashboard
# or wrangler secrets, NOT hardcoded in this file
```

**next.config.mjs:**
```js
const nextConfig = {
  output: 'standalone'
};
```

**package.json scripts:**
```json
{
  "build": "NEXT_PRIVATE_STANDALONE=true next build",
  "postbuild": "opennextjs-cloudflare build -s",
  "deploy": "npm run build && wrangler deploy"
}
```

## DEPLOYMENT COMMANDS (ONLY THESE):
1. **QUICK DEPLOY** (when just changing code): `npm run deploy-quick` or `npx wrangler deploy`
2. **FULL BUILD + DEPLOY** (when adding new dependencies): `npm run deploy`

## LIVE URL:
https://keptkitchen-website.wren-fc5.workers.dev

**THIS IS THE ONLY METHOD WE USE - NEVER CHANGE IT!**