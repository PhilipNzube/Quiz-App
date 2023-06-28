let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.46c9af21.js',
                '/static/css/main.53153b6f.css',
                '/manifest.json',
                '/ICON.png',
                '/ICON192.png',
                '/ICON512.png',
                '/index.html',
                '/',
                '/VocabLight'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    }
})