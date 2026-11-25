# Cannella Construction website

A static, mobile-first site for cannellaconstruction.net. Every phone link sends a Cherrie `Lead` event.

## Files
- `index.html`: the page, which includes the Cherrie pixel in `<head>`
- `styles.css`: all styling (desktop and mobile)
- `main.js`: Cherrie Lead tracking and the gallery filter

## Lead tracking
One click listener in `main.js` catches every `tel:` link and calls:

```js
cherrie.track("Lead", { properties: { method: "phone_call", cta_location, phone_number, device } })
```

`cta_location` comes from each link's `data-cta` attribute (`header`, `hero`, `mid_band`,
`service_area`, `final`, `footer`, `mobile_sticky_bar`), so Cherrie shows which button drove the call.

The Cherrie script does nothing on `localhost`, so test on the live GitHub Pages URL.

## Publish with GitHub Pages
1. The files live in the root of the `main` branch.
2. Go to Settings → Pages, set Source to "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. The site goes live at `https://6david6silver6-dot.github.io/cannella-construction/`.
4. To use the real domain, enter `www.cannellaconstruction.net` under Settings → Pages → Custom domain.
   Then, at the domain registrar (currently Squarespace), point the `www` CNAME record to
   `6david6silver6-dot.github.io`. Turn on "Enforce HTTPS" once the DNS check passes.

## Photos
Project photos still load from the old Squarespace image CDN. Before you cancel Squarespace, download
the photos into an `images/` folder and update the `src` paths, or the photos will break.
