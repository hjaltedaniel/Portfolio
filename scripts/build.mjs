import fs from 'node:fs';
import path from 'node:path';
import { readContent,renderPage,notFound,sitemap,rss } from '../src/site.mjs';
const data=readContent();
const preview=Boolean(process.env.CONTEXT&&process.env.CONTEXT!=='production');
const entry=JSON.parse(fs.readFileSync('dist/.vite/manifest.json','utf8'))['src/main.js'];
const assets={js:'/'+entry.file,css:entry.css.map(file=>'/'+file)};
for(const page of [...data.pages,...data.posts]){
 const dir=path.join('dist',page.slug);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),renderPage(page,data,assets,preview));
}
fs.writeFileSync('dist/404.html',notFound(data,assets,preview));
fs.writeFileSync('dist/sitemap.xml',sitemap(data));
fs.writeFileSync('dist/feed.xml',rss(data));
fs.writeFileSync('dist/robots.txt',preview?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${data.site.url}/sitemap.xml\n`);
if(preview)fs.writeFileSync('dist/_headers','/*\n  X-Robots-Tag: noindex, nofollow\n');
fs.rmSync('dist/.vite',{recursive:true});
console.log(`Generated ${data.pages.length} pages and ${data.posts.length} published articles${preview?' (noindex preview)':''}.`);
