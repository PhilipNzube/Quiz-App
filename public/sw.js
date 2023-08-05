let cacheData = "QuizAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.f410df1c.js',
                '/static/css/main.09d857fe.css',
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