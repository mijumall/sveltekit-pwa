import { build } from '$service-worker';

const cacheName = (new Date()).getTime().toString();

self.addEventListener('install', e => {
    e.waitUntil((async () => {
        console.log("Install event");
        const cache = await caches.open(cacheName);
        await cache.addAll(build);
    })());
});

self.addEventListener('activate', e => {
    function activate() {
        console.log("Activate event")
        return new Promise<void>(async (resolve) => {
            const keys = await caches.keys();
            for (const key of keys) {
                if (key !== cacheName) {
                    caches.delete(key);
                }
            }
            resolve();
        });
    }
    e.waitUntil(activate());
});

self.addEventListener('fetch', (e) => {
    console.log(`Fetch event: ${e.request.url}`);
});


// Initialize deferredPrompt for use later to show browser install prompt.
//let deferredPrompt;
//
//self.addEventListener('beforeinstallprompt', (e) => {
//  // Prevent the mini-infobar from appearing on mobile
//  e.preventDefault();
//  // Stash the event so it can be triggered later.
//  deferredPrompt = e;
//  // Update UI notify the user they can install the PWA
//  //showInstallPromotion();
//  // Optionally, send analytics event that PWA install promo was shown.
//  console.log(`'beforeinstallprompt' event was fired.`);
//});
//
//console.log(deferredPrompt);
//