# Verification — personal site refresh

Checked 2 October 2026.

- Clean `npm ci`, production build and six automated tests passed; dependency audit reported zero vulnerabilities.
- Preview build verified HTML noindex, X-Robots-Tag and robots disallow. Production restores crawler access.
- Three article drafts are excluded from production files, navigation, sitemap and RSS.
- Mobile menu, Escape/focus restoration, navigation without JavaScript, direct local draft links and Markdown live reload verified in a browser.
- No horizontal overflow at 390, 650, 800, 850 and 1440 pixels. Desktop and mobile screenshots reviewed.
- Dark red/white contrast: 6.1:1. Responsive portrait generated without upscaling; original retained.
- Biography checked against supplied source documents and approved facts. Private PDFs excluded from repository and deployment.

## Local Lighthouse lab results

| Page | Device | Performance | Accessibility | SEO | LCP |
| --- | --- | --- | --- | --- | --- |
| Home | Mobile | 100 | 100 | 100 | 1.7 s |
| Home | Desktop | 100 | 100 | 100 | 0.3 s |
| About | Mobile | 100 | 100 | 100 | 1.7 s |
| Draft article | Mobile | 100 | 100 | 66 | — |

The draft is intentionally noindex. These are local lab measurements, not real-user performance guarantees.

## Hosting

Existing Netlify project `hjaltedaniel` verified: production branch `master`, GitHub repository `hjaltedaniel/Portfolio`, publish directory `dist`, Deploy Previews enabled for pull requests. Version-controlled configuration selects Node 22 and build followed by tests. Netlify handles deployment.

## Editorial review

The three unpublished articles are available through `npm run dev` at `/blog/`. Review and approve each article before setting `published: true` and a real publication date. Site copy follows the approved personal biography and contact details.

Netlify Deploy Preview #1 passed live HTTPS, canonical, routing, real 404, draft exclusion, sitemap/RSS and noindex header/robots checks. GitHub build/tests passed. Disabled the legacy preview collaboration drawer because its injected iframe conflicted with the site CSP; security policy retained.
