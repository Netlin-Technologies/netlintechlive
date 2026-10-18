# netlintech.com → netlingroup.com

A régi netlintech.com oldal megszűnt. Ez a repó már csak átirányít a
[netlingroup.com](https://netlingroup.com/)-ra.

- **`netlify.toml`** – a szabályok: 301-es (végleges) átirányítás a Netlify szerverén. A régi
  aloldalak a legközelebbi új oldalra visznek (`/contact` → `/kapcsolat/`, az automatizációs
  oldalak és a `/uses` → `/irodai-automatizacio/`, a blog → `/blog/`), minden más a főoldalra.
  Build nincs, a fájl felülírja a Netlify felületén megadott régi build-beállítást.
- **`public/index.html`** – tartalék oldal (meta refresh + JavaScript), ha a szabályok valamiért
  nem futnának.

Próba élesítés után:

```
curl -sI https://netlintech.com/contact
```

→ `HTTP/1.1 301` és `Location: https://netlingroup.com/kapcsolat/`.

A régi Next.js-oldal kódja a git-előzményekben megvan.
