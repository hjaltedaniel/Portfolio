import fs from 'node:fs';
import sharp from 'sharp';
import { readContent,escape } from '../src/site.mjs';
fs.mkdirSync('public/images',{recursive:true});
for(const width of [480,800,1086]){
 await sharp('public/portrait.png').resize({width,withoutEnlargement:true}).avif({quality:50,effort:4}).toFile(`public/images/portrait-${width}.avif`);
 await sharp('public/portrait.png').resize({width,withoutEnlargement:true}).webp({quality:80}).toFile(`public/images/portrait-${width}.webp`);
}
const {site}=readContent();
const photo=await sharp('public/portrait.png').resize(380,506).png().toBuffer();
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#F4F1E9"/><rect x="0" y="0" width="12" height="630" fill="#E94854"/><image href="data:image/png;base64,${photo.toString('base64')}" x="776" y="62" width="380" height="506"/><g font-family="Arial,sans-serif" fill="#191918"><text x="64" y="124" font-size="36">${escape(site.name)}</text><text x="64" y="249" font-size="54">${escape(site.shareLine1)}</text><text x="64" y="319" font-size="54">${escape(site.shareLine2)}</text><text x="64" y="389" font-size="54">${escape(site.shareLine3)}</text><text x="64" y="545" font-size="23" fill="#B82B38">${escape(site.url.replace("https://",""))}</text></g></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/images/share.png');
console.log('Generated responsive portrait and share image.');
