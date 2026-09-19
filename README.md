# Wedding Invitation

A single-page wedding invitation with an animated envelope cover, countdown, a Mehndi / Barat / Walima timeline, a WhatsApp RSVP button, an English/Urdu language switch. Theme: warm cream, gold and brown.

## Customize

- **Names, dates, venues:** edit the text directly in [index.html](index.html), or edit the `translations` object in [script.js](script.js) (recommended, since it keeps English and Urdu in sync).
- **WhatsApp number & message:** edit `WHATSAPP_NUMBER` and `WHATSAPP_MESSAGE` at the top of [script.js](script.js). Use the country code with no `+` or leading `0` (e.g. `923001234567`).
- **Colors/fonts:** edit the CSS variables (and the countdown date in `script.js`) — variables are at the top of [style.css](style.css).

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Choosing which events a guest sees

The invitation is one link; add a query string to control the events shown. Barat is always shown.

| URL | Events shown |
| --- | --- |
| `yoursite.vercel.app/` | Barat |
| `yoursite.vercel.app/?M` | Mehndi + Barat |
| `yoursite.vercel.app/?W` | Barat + Walima |
| `yoursite.vercel.app/?M&W` (or `?MW`) | Mehndi + Barat + Walima |

`?e=M`, `?e=W` and `?e=MW` work too. The date line, section title and countdown adjust automatically. Deploy as a static site on Vercel; no config needed.
