import { defineConfig } from 'vite';
import { readContent,renderPage,notFound } from './src/site.mjs';
export default defineConfig({
 build:{manifest:true,rollupOptions:{input:'src/main.js'}},
 server:{host:'127.0.0.1',port:5176,strictPort:true},
 plugins:[{name:'markdown-pages',configureServer(server){
  server.watcher.add('content');
  server.watcher.on('change',file=>{if(file.includes('/content/'))server.ws.send({type:'full-reload'});});
  server.middlewares.use(async(req,res,next)=>{
   const pathname=new URL(req.url,'http://localhost').pathname;
   if(/\.[a-z0-9]+$/i.test(pathname)||pathname.startsWith('/@')||pathname.startsWith('/src/')||pathname.startsWith('/node_modules/'))return next();
   try{const data=readContent(true);const slug=pathname.endsWith('/')?pathname:pathname+'/';const page=[...data.pages,...data.posts].find(p=>p.slug===slug);res.statusCode=page?200:404;res.setHeader('Content-Type','text/html; charset=utf-8');res.end(await server.transformIndexHtml(req.url,page?renderPage(page,data):notFound(data)));}catch(error){next(error);}
  });
 }}]
});
