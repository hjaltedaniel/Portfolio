import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { readContent,renderPage,sitemap,rss } from '../src/site.mjs';
const data=readContent();
test('production excludes three drafts from all distribution surfaces',()=>{
 const drafts=readContent(true).posts;assert.equal(drafts.length,3);assert.equal(data.posts.length,0);
 for(const draft of drafts){assert.ok(!fs.existsSync('dist'+draft.slug+'index.html'));assert.ok(!sitemap(data).includes(draft.slug));assert.ok(!rss(data).includes(draft.slug));for(const page of data.pages)assert.ok(!renderPage(page,data).includes(draft.slug));}
 assert.doesNotMatch(rss({...data,posts:drafts}),/<item>/);
});
test('published articles have dates, author, canonical and feed entries; drafts are noindex',()=>{
 const draft=readContent(true).posts[0];assert.match(renderPage(draft,data),/noindex, nofollow/);
 const article={...draft,published:true,date:'2026-10-02'};const html=renderPage(article,{...data,posts:[article]});
 assert.match(html,/BlogPosting/);assert.match(html,/2026-10-02T00:00:00Z/);assert.match(html,/Hjalte Daniel Retz Johansson/);assert.match(rss({...data,posts:[article]}),/<item>/);assert.ok(sitemap({...data,posts:[article]}).includes(article.slug));
});
test('public pages have metadata, correct contacts and valid internal links',()=>{
 for(const page of data.pages){
  const html=fs.readFileSync('dist'+page.slug+'index.html','utf8');
  assert.match(html,/<html lang="en">/);assert.ok(html.includes('href="https://hjaltedaniel.io'+page.slug+'"'));assert.match(html,/og:image/);assert.match(html,/mailto:hej@hjaltedaniel.io/);assert.match(html,/tel:\+4521267851/);
  for(const match of html.matchAll(/href="(\/[^"#?]*)/g)){const href=match[1];assert.ok(fs.existsSync('dist'+href+(href.endsWith('/')?'index.html':'')),page.slug+' → '+href);}
  assert.doesNotMatch(html,/umbraco\.io|Overtal|vue|fontawesome/i);
 }
 assert.ok(fs.existsSync('dist/404.html'));assert.match(fs.readFileSync('dist/404.html','utf8'),/noindex/);
});
test('schema safely encodes editorial text and uses the actual personal identity',()=>{
 const page={...data.pages[0],description:'</script><script>bad</script>'};const html=renderPage(page,data);const raw=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];const graph=JSON.parse(raw)['@graph'];
 assert.equal(graph[2].description,page.description);assert.doesNotMatch(raw,/<script/);assert.equal(graph[0].name,data.site.fullName);assert.deepEqual(graph[0].sameAs,data.site.socials.map(v=>v.href));assert.ok(!graph[0].address);
});
test('preview pages are noindex while production pages remain indexable',()=>{
 for(const page of data.pages){assert.match(renderPage(page,data,{},true),/noindex, nofollow/);assert.doesNotMatch(renderPage(page,data),/noindex/);}
});
test('responsive portrait source and all formats are available without private PDFs',()=>{
 assert.ok(fs.existsSync('public/portrait.png'));
 for(const width of [480,800,1086])for(const format of ['avif','webp'])assert.ok(fs.statSync(`dist/images/portrait-${width}.${format}`).size>0);
 assert.ok(fs.existsSync('dist/images/share.png'));
 const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.isDirectory()?walk(dir+'/'+f.name):[dir+'/'+f.name]);assert.ok(walk('dist').every(f=>!f.endsWith('.pdf')));
});
