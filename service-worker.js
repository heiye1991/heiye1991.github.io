/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3576feb1c1826269263ae81427006705"
  },
  {
    "url": "assets/css/0.styles.a6e31eff.css",
    "revision": "dbdae63c521438512b26dad527a41a82"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.edb2a4c3.js",
    "revision": "e25b0c34930f1b5c1b734299c473f183"
  },
  {
    "url": "assets/js/10.dc7bcfbf.js",
    "revision": "35ba1875587d24404d3ea305965e91a6"
  },
  {
    "url": "assets/js/11.fac26dca.js",
    "revision": "e4eeefa71c77a54aa11917222e026e5c"
  },
  {
    "url": "assets/js/12.ed2b199c.js",
    "revision": "3e9f5f6457b0d2f0a617c188314a36bd"
  },
  {
    "url": "assets/js/13.2c5fa147.js",
    "revision": "bc148358f3dc5195fc0cac2f93e44dce"
  },
  {
    "url": "assets/js/14.e23a9d1c.js",
    "revision": "7b769d1fe7ae9dff4a7509b18e4bb25e"
  },
  {
    "url": "assets/js/15.097e35b0.js",
    "revision": "85493e989b7fe9887615f961f8e5a512"
  },
  {
    "url": "assets/js/16.60add898.js",
    "revision": "86caeb706fed3cee08fc4b37352e0f56"
  },
  {
    "url": "assets/js/4.946affe0.js",
    "revision": "34ab2c4681f62d4c2fb70ee59b28056e"
  },
  {
    "url": "assets/js/5.012d9628.js",
    "revision": "4594dbebb2d3f000d8175b86a9405b9c"
  },
  {
    "url": "assets/js/6.8c27124f.js",
    "revision": "7520584d28df6674696abcae7050600d"
  },
  {
    "url": "assets/js/7.4e27fc4c.js",
    "revision": "b7ad7b5de49a2780113773a1b8c04ef3"
  },
  {
    "url": "assets/js/8.5ec2778c.js",
    "revision": "031e9deaeae4c04f7019fd461442b611"
  },
  {
    "url": "assets/js/9.91e79e1c.js",
    "revision": "f7069119f2ddfff618c46ef87e3371e1"
  },
  {
    "url": "assets/js/app.cbf2c17b.js",
    "revision": "1c97240d040be8bcf04f44d0d90e2f22"
  },
  {
    "url": "assets/js/vendors~flowchart.69e65f74.js",
    "revision": "72c7827ff94a4c97aeff3916d8792d2c"
  },
  {
    "url": "blogs/css/001.html",
    "revision": "71b8b8ba1323bf3e9baf174417a3c483"
  },
  {
    "url": "blogs/others/format.html",
    "revision": "0959acbeca7386c8cac650034fa05c3e"
  },
  {
    "url": "blogs/views/messageBoard.html",
    "revision": "d8dfc5a065f1807e2a7a374c14733dec"
  },
  {
    "url": "categories/css/index.html",
    "revision": "d09aa09b78a28bcbaac0678ddcf97ec8"
  },
  {
    "url": "categories/index.html",
    "revision": "635922f75c40612e65539587f6477668"
  },
  {
    "url": "icons/heiye.png",
    "revision": "a60fb7e12e83c1dedb14ba91a6aca6b5"
  },
  {
    "url": "icons/heiye.svg",
    "revision": "c672d98269ac854ce03f94a3f05a4ec9"
  },
  {
    "url": "icons/heiye128.png",
    "revision": "ca319ef4bf321087156eb5a1a63efdd2"
  },
  {
    "url": "icons/heiye144.png",
    "revision": "917f19e7ceaa3490b943392f3545fae9"
  },
  {
    "url": "icons/heiye192.png",
    "revision": "b4f7e7ccf218360c7039e3fb3d0da1d0"
  },
  {
    "url": "icons/heiye256.png",
    "revision": "530f3c15d628dd41a6a55b2841ec1e59"
  },
  {
    "url": "icons/heiye512.png",
    "revision": "90ba280b2e5735b25dee57ed5a22d408"
  },
  {
    "url": "index.html",
    "revision": "2559d1aedc552d566be08de80c843424"
  },
  {
    "url": "tag/css/index.html",
    "revision": "de4fa6c5b5315eda98421c23e1c0318e"
  },
  {
    "url": "tag/index.html",
    "revision": "99c1fac8e250d8098c745bf8ed7fbbf9"
  },
  {
    "url": "timeline/index.html",
    "revision": "ceaae0a36fa8bf376c7eec768714db60"
  },
  {
    "url": "vuepress_reco.png",
    "revision": "9c9e95d3d80fe54556213930ac9834a5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
