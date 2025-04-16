const CACHE_NAME = 'mobywatel-v1';
const urlsToCache = [
    '/',
    '/home.html',
    '/assets/home.css',
    '/assets/main.css',
    '/assets/bar.js',
    '/assets/manifest.js',
    'https://i.imgur.com/n4zJhma.png',
    'https://i.imgur.com/F7yo2Gc.png',
    'https://i.imgur.com/I8owg76.png',
    'https://i.imgur.com/WB20A6D.png',
    'https://i.imgur.com/L7PU7Xk.png',
    'https://i.imgur.com/x27OY3D.png',
    'https://i.imgur.com/zIiL6A2.png',
    'https://i.imgur.com/ee4CMJf.png',
    'https://i.imgur.com/LReC7MP.png',
    'https://i.imgur.com/7EIfFr4.png',
    'https://i.imgur.com/dyNMB6y.png',
    'https://i.imgur.com/8wuXHdP.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
