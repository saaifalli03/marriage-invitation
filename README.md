# Wedding Invitation

A simple, minimalistic single-page wedding invitation with three event sections (Mehndi, Barat, Walima), a WhatsApp RSVP button, and an English/Urdu language switch.

## Customize

- **Names, dates, venues:** edit the text directly in [index.html](index.html), or edit the `translations` object in [script.js](script.js) (recommended, since it keeps English and Urdu in sync).
- **WhatsApp number & message:** edit `WHATSAPP_NUMBER` and `WHATSAPP_MESSAGE` at the top of [script.js](script.js). Use the country code with no `+` or leading `0` (e.g. `923001234567`).
- **Colors/fonts:** edit the CSS variables at the top of [style.css](style.css).

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```
