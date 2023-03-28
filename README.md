# 🚀 CSU Strapi

This is a repository which aim is to provide a Content Management Sytem (CMS) for CSU web projects. Over the last years, many web solutions have been implemented (custom PHP, Wordpress, home made ASP.net, lektor, Joomla or Vue) and used to launch a website. It usually means as many backend/content solution as framework. 

Using Strapi is motivated by the way we want to decouple service. Strapi is a headless CMS, meaning there's no "frontend" to the content provided by Strapi, only data provided through a REST API. These data (News, pages, list, text, glossary, FAQ, etc .. ) can be reused accross any web (or mobile) applications able to read JSON files.

## Prerequsites

The [Strap documentation](https://docs.strapi.io/dev-docs/installation/cli) to start developing is quite exhausted. You need to have Node.js at least with npm or yarn.

The CSU [Strapi](https://strapi.io/) will use a sqlite database in development mode (see ./config/env/development/ folder) for details and postgresql DB for production (see ./config/env/production/ folder).

### `develop`

Start your Strapi application with autoReload enabled. 

```
npm run develop
# or
yarn develop
```

### `build`

Build your admin panel. 

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

```
# 1 Ensure AWS profile is correct into serveless.yml with provider -> profile value (should be CSU_Bucket_Deploy)

# 2. Load .env into current terminal
source .env

# 3. Build Strapi with production configuration
yarn build

# 4. Deploy Strapi
yarn svl deploy
```

