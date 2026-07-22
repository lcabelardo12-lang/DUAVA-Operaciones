var CACHE="duava-ops-v8";
var URLS=["./index.html","./manifest.json"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(n){return Promise.all(n.filter(function(x){return x!==CACHE}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});