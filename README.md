# City Poly Clinic — landing page

Single-page, mobile-first site for City Poly Clinic, Whitefield, Bengaluru. Built with Next.js 16 (App Router, static export), Tailwind CSS v4 and shadcn/ui (Base UI). The whole site is static HTML; the only client-side component is the FAQ accordion.

**Live site:** https://harsha819762.github.io/City-Poly-Clinic/

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm start       # preview out/ at http://localhost:3000
```

## Deploying (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. Repo **Settings → Pages → Source** must be set to **GitHub Actions** (already done for this repo). You can also re-run it by hand from the **Actions** tab ("Deploy to GitHub Pages" → **Run workflow**).

The workflow takes the base path (`/City-Poly-Clinic`) and site URL from the Pages settings, so nothing is hard-coded. To move to a custom domain, add it under **Settings → Pages → Custom domain**. The next deploy then drops the base path and uses the new domain for canonical URLs, Open Graph tags, the sitemap and JSON-LD.

To build for another static host, set `SITE_URL` (and `NEXT_PUBLIC_BASE_PATH` if it serves from a sub-path) before `npm run build`, then upload `out/`.

## Where things live

| What | File |
| --- | --- |
| Clinic facts, phone/WhatsApp/Maps links, opening hours | `src/lib/clinic.ts` (single source of truth) |
| JSON-LD (`MedicalClinic` schema) | `src/lib/json-ld.ts`, injected in `<head>` by `src/app/layout.tsx` |
| Meta title/description, Open Graph, viewport | `src/app/layout.tsx` |
| Share image (generated at build as `og.png`) | `src/app/og.png/route.tsx` |
| Responsive WebP images for the static export | `scripts/optimize-images.mjs`, `src/lib/image-loader.ts`, `image-sizes.json` |
| Page sections, in page order | `src/components/sections/*` |
| Sticky header, footer, floating WhatsApp button | `src/components/site-header.tsx`, `site-footer.tsx`, `whatsapp-fab.tsx` |
| Placeholder artwork (replace) | `public/images/*.png`, `src/app/icon.svg`, `src/app/apple-icon.png` |

Opening hours are defined once in `clinic.ts` and flow into the hours list, the FAQ, the footer and the JSON-LD.

**Images:** GitHub Pages has no image server, so `npm run dev` and `npm run build` first generate WebP versions of every file in `public/images/`, in all the widths listed in `image-sizes.json`, into `public/images/optimized/` (git-ignored). Add a new photo by dropping it in `public/images/` and using `<Image src="/images/<file>" width={…} height={…} />` (or `fill`). The loader picks the right size per device.

## Pre-launch checklist

Everything the client hasn't supplied yet is marked `[PLACEHOLDER: ...]`. Visible placeholders show on the page as dashed amber chips. Find them all with:

```bash
grep -rn "PLACEHOLDER" src
```

**Collect from the client**

- [ ] Logo (header mark, favicon `icon.svg`, `apple-icon.png`)
- [ ] Clinic exterior or doctor photo for the hero (min. 1600×1200)
- [ ] For each doctor: name, qualifications, specialty/role, headshot (registration number optional)
- [ ] Exact opening hours, including holiday policy
- [ ] Final service list (the current eight are a typical draft)
- [ ] Walk-in policy, insurance/cashless, languages spoken, parking, consultation fee, home visits/teleconsults, how emergencies are handled
- [ ] Approval of the "About" approach-to-care copy
- [ ] 4–6 real Google reviews, copied word for word, with the reviewer's display name and the star rating they gave

**Update in code**

- [ ] Swap the six placeholder review cards in `reviews.tsx` for the real reviews. Never write or edit testimonials.
- [ ] Replace `links.googleReviews` in `clinic.ts` with the direct reviews link from the Google Business Profile (`https://search.google.com/local/reviews?placeid=<PLACE_ID>`)
- [ ] Add `geo` coordinates and `priceRange` to `json-ld.ts`
- [ ] Update the rating and review count in `clinic.ts` if they've changed
- [ ] Update the alt text whenever a placeholder image is swapped for a real photo
- [ ] After the final deploy, validate with Google's Rich Results Test and submit the sitemap in Search Console (ideally once a custom domain is set: crawlers only read `robots.txt` at a domain's root, not under `/City-Poly-Clinic/`)

> **Note:** Google doesn't show review stars in search results for a business's own `aggregateRating` markup. The rating is still valid structured data, but the stars in Search and Maps come from the Google Business Profile itself.

## Performance

Lighthouse 12, mobile preset (simulated slow 4G, 4× CPU), on the static export: **Performance 97 · Accessibility 100 · Best Practices 100 · SEO 100**, CLS 0, TBT 50 ms.

What keeps it there:

- Everything is prerendered to static HTML except the FAQ accordion.
- Images are pre-sized WebP served through `next/image` with explicit `sizes`, so phones download about an 828px image instead of the 1200px original.
- Fonts are self-hosted with `display: swap`.
- The map iframe is native lazy-loaded inside a reserved box, so it causes no layout shift.
- Star ratings are drawn with a CSS mask instead of SVGs.
- The reviews carousel on phones is pure CSS scroll-snap.

Re-run Lighthouse after the real photos go in.
