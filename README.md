# vite-hot-send-repro

`import.meta.hot.send()` logs `SendBeforeConnectError: send was called before connect` on every call after the dev server stops.

1. `npm install`
2. `npm run dev` and open http://localhost:5199
3. Stop the dev server (Ctrl+C)
4. The browser console logs `[vite] SendBeforeConnectError: send was called before connect` once a second
