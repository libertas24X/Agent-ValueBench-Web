# Agent-ValueBench Web

Marketing site for Agent-ValueBench, built with Astro + Tailwind CSS.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages deployment

This repo is configured to deploy via GitHub Actions. Update these values to match your GitHub Pages settings:

- `astro.config.mjs`: set `site` to `https://<your-username>.github.io`
- `astro.config.mjs`: keep `base` as `/Agent-ValueBench-Web` for project pages (change if you deploy to a custom domain)

Push to `main` and the workflow will publish automatically.
