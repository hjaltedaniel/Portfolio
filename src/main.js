import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import './style.css';
document.documentElement.classList.add('js');
const button=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
function close(){button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',button.dataset.open);nav.classList.remove('open');}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?button.dataset.close:button.dataset.open);nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){close();button.focus();}});
matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches)close();});
