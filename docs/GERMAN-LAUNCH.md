# German offer: launch checklist

Source of truth: `src/data/germanOffer.ts`.

## Blockers before production publication

- `checkout`: supply the German checkout URL. Verify the final total is EUR 9.90 including VAT. The old USD checkout is intentionally not reused. The offer button stays disabled until configured.
- `guaranteeDays`: confirm 14 days and the exact refund procedure in checkout/terms. No 14-day promise is displayed until this is confirmed.
- `legal`: replace explicit placeholders for Impressum, Datenschutz, AGB, Widerrufsbelehrung and Kontakt with approved provider-specific text. No invented identity or email.
- Spanish mini VSL removed from the landing. Only the four training demonstration clips remain; source media files are preserved.
- `childrenAvailable`: confirm that the additional 250 sessions are accessible. Until then they are marked planned, not included. Supply `childrenReleaseDate` and verified age range before advertising them as available.
- `paymentMethods`: list only methods verified in the German checkout.
- Existing source testimonials are translated with original names and locations, including Vancouver. Retain underlying evidence/permission. No unverified star rating or review count.
- Verify the supplied product counts, coach biography, permanent-access terms, and VAT treatment against the actual product before paid traffic.

## Implemented

- German copy, de language/metadata, Trainer/Spieler/Eltern tabs and `?p=` support.
- Existing media preserved; new local SVG illustrations, no new image/CDN library.
- All marketing CTAs scroll to `#angebot`. Only offer checkout button can navigate externally, in the same tab, preserving the complete incoming query and existing checkout parameters.
- Same Meta pixel ID `889185807027175`. No initial pixel script or noscript beacon. Pixel starts only after explicit acceptance. Equal-emphasis accept/reject buttons and persistent settings; revoke consent supported.
- PageView after consent, ViewContent after 50% scroll, persona custom events after consent, InitiateCheckout only on checkout click (EUR 9.90, 150ms delay). No Purchase event.
- Previous automatic Clarity and UTMify scripts removed from the document head so rejecting cookies does not silently load optional trackers. Checkout query propagation is handled locally.
- Old Spanish auxiliary routes redirect to German landing/offer rather than exposing stale pricing.

## QA

Run `npm run build` and `npx tsc --noEmit`.
Browser: test each `?p=` value, keyboard tabs, cookie reject/accept/revoke and pre-consent network requests, 50% scroll event, mobile 360/390/430px, media one at a time, no horizontal overflow, checkout query and EUR value after providing the URL. Test on physical iPhone Safari / Android Chrome before paid traffic. No measured 4G speed claim.

## CTA revision

No CTA in the hero, problem or children sections. Two scrolling CTAs remain: after the modules and bonus presentation, and in the final section. The only checkout button is inside the offer.
