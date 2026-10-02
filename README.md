# hjaltedaniel.io

Personal website for Hjalte Daniel Retz Johansson. Vanilla HTML, CSS and JavaScript, Vite, and Markdown. No CMS, tracking, forms or server API.

## Local development

Use Node 22 (`.node-version`):

```sh
npm ci
npm run images
npm run dev
```

Open http://127.0.0.1:5176/. Markdown changes reload the browser. Local development includes unpublished articles, clearly marked as drafts with noindex. After changing the original portrait or share-image copy, rerun `npm run images`.

```sh
npm run build
npm test
npm run preview
```

The build generates real HTML pages in `dist/`; production excludes drafts. Netlify supplies the actual 404 status using `404.html`. Vite's preview server isn't the reference for Netlify routing or headers.

## Editing and publishing

- `content/site.md`: identity, navigation, contact details, social links, UI and share-image copy.
- `content/pages/`: homepage, About and Writing.
- `content/blog/`: articles and `_template.md`.
- `content/AGENTS.md`: editorial facts, privacy boundaries and publication instructions.

Start an article by copying the template. Use a unique lowercase hyphenated slug. Keep `published: false` and `date: ""` until the owner approves it. Set the actual publication date in `YYYY-MM-DD` format when publishing. `updated` records substantive editorial edits, not deployments. Every published article gets its own page, canonical URL, metadata, author schema and RSS item. Drafts never enter production HTML, sitemap, RSS or public links.

The three initial drafts are available locally at:

- `/blog/start-with-the-workflow/`
- `/blog/human-owner/`
- `/blog/rollout-and-adoption/`

Read, fact-check and approve each before publishing. No customer/internal data or fabricated results. Career source PDFs remain private and must never be committed or linked for download. The owner explicitly approved public email/phone and Social Democratic affiliation.

## Images

`public/portrait.png` is the original approved photograph. `npm run images` creates 480/800/1086-pixel AVIF and WebP versions without upscaling, plus a 1200×630 sharing image. Generated images and `dist/` are ignored by Git. Keep the original source image in the repo. Font files are bundled locally through @fontsource/inter.

## Netlify and GitHub

Existing project: `hjaltedaniel`, ID `e6b34d7d-77f4-4dd7-92ed-e5b3a095e17d`, linked to https://github.com/hjaltedaniel/Portfolio.

Verified in Netlify on 2 October 2026: production branch **master**, build active, root base directory, publish directory `dist`, previews enabled for PRs to master. The old UI-selected Node 8 is superseded by Node 22 in the versioned `netlify.toml`. No production branch or domain has been renamed.

Work in a featurebranch and open a PR against master. GitHub Actions runs a clean npm install, build and tests; Netlify independently runs build and tests before deploying. Netlify preview builds set `CONTEXT=deploy-preview`; generated pages, robots.txt and a preview-only X-Robots-Tag header prevent indexing. Canonicals still point to hjaltedaniel.io.

Review screenshots, personal content and the Netlify preview before merging. Merging to master triggers the existing Netlify production deployment. The initial personal facts and contact details follow the owner-approved plan; articles still require separate owner approval. After release, verify HTTPS, Home/About/Writing, contact links, sitemap/RSS and the actual 404 response. If Netlify build configuration overrides unexpectedly prevent Node 22, correct the project's dependency setting rather than restoring the old Vue build.

The old Umbraco proxy rules are removed. There is no wildcard SPA rewrite: direct article addresses resolve to generated HTML, and missing addresses remain 404. Netlify Pretty URLs is already enabled. Hash-named Vite assets have one-year immutable cache; HTML retains Netlify's normal revalidation. Preview-only collaborator tooling may be blocked by the site's restrictive CSP; it isn't needed to review the page.

No deployment tokens or other secrets are needed in GitHub Actions; Netlify uses the existing Git integration. Never commit local secrets, output files or PDFs. Roll back through Netlify's deployment history if needed, without deleting the prior working deployment.
