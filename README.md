# zanthos.lighting

Static site for Zanthos Landscape Lighting, Metro Boston. Plain HTML, CSS and a little JS. No build step.

## Publish

1. Push this repo to GitHub under the `zanthos-inc` org and enable Pages (Settings → Pages → Deploy from branch, `master`, `/`).
2. DNS at the registrar for `zanthos.lighting`:
   - `A` records on the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `zanthos-inc.github.io`
3. In Pages settings, set the custom domain to `zanthos.lighting` and enable "Enforce HTTPS" once the check passes. The `CNAME` file in this repo must stay.

## Before launch

Made-up details that need real values:

- `REPLACE_WITH_FORM_ID` in `index.html`: create a form at formspree.io and paste the ID. Until then the form opens a pre-filled email instead.
- `contact@zanthos.lighting` must exist as a mailbox or forwarder.
- Prices in the "What it costs" table are plausible Metro Boston figures, not quotes.
- Warranty terms (two-year workmanship, manufacturer lifetime on fixtures) and the free first-winter check-up are promises the page makes.
- The town list under "Where we work" and in the structured data.
- Google Business Profile, once the business is registered, and its link in the footer.
- Real project photos: the hero is an illustration on purpose until there is a portfolio.
