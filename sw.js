if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>n(e,t),c={module:{uri:t},exports:o,require:f};i[t]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-kSgUFu0M.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"991de4cc65eff1081a32c2408ea2f93d"},{url:"registerSW.js",revision:"ae1e992809c732353125a8cebe3d417c"},{url:"icon-192x192.png",revision:"cf5741742333ea8fa7e0ce978bea256a"},{url:"icon-512x512.png",revision:"ee0fe7304435ef26e2ed96bbf5078143"},{url:"manifest.webmanifest",revision:"3073daa518dc6f13f707711011ff1741"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
