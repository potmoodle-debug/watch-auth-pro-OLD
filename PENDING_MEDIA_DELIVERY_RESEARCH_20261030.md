# Pending image delivery research — 2026-10-30

## Scope and result

This delivery-only pass resolves image delivery for three already-inspected Christie's image originals for exact reference PAM00609 and Omega 3578.51.00. The old Christie's image URLs had failed in real Chrome. Three original, unmodified image files are now served from OLD Pages assets, with their original Christie's URLs, credits, image hashes, pixel evidence and delivery failure history retained. The four catalogue category entries are promoted to verified after the published assets loaded at their expected dimensions and their downloaded SHA-256 hashes matched the archived originals. No other photograph, lookup rule, alias, reference, queue record or Supabase data changed.

The files match archived originals byte for byte:

| Reference and view | Original source | SHA-256 | Dimensions |
|---|---|---|---|
| Panerai PAM00609 front | [Christie's lot 30](https://onlineonly.christies.com/s/christies-watches-online-summer-watch-series-part-i/panerai-radiomir-black-seal-8-days-ref-pam00609-30/57825) | `82bbb57ca58fcddf9d2f61a7e8fb29a0d8e1a97451ac5aecb20114cfa342fb89` | 2044 × 3200 |
| Panerai PAM00609 display back, reused for movement and caseback categories | [Christie's lot 30](https://onlineonly.christies.com/s/christies-watches-online-summer-watch-series-part-i/panerai-radiomir-black-seal-8-days-ref-pam00609-30/57825) | `ae4b9a38552cefb8abc4cd06fb4ec3ed20a2db83d34e159bd65798c4490905cd` | 3200 × 2476 |
| Omega 3578.51.00 closed Snoopy back | [Christie's lot 6177371](https://www.christies.com/en/lot/lot-6177371) | `9395221da835d02632933aa51b27b0e46154a5ff74555a5bb68b4242be358d0b` | 3200 × 3200 |

The PAM00609 front shows the black dial, 8 DAYS marking, small seconds at 9 and fitted brown leather strap. Its rear image shows the cased P.5000 and closed sapphire display back; the underlying movement is visible, so both the Movement and Caseback entries remain suppressed in External-only mode. The Christie's specimen description supports circa 2017, 45 mm steel and manual P.5000; it does not provide a dedicated buckle photograph. A written accessory claim is not treated as image coverage.

The Omega image is a closed back with blue Snoopy medallion and numbered 2829/5441. It is a separate Christie's specimen from the previously catalogued Bob's Watches example. It does not show a fitted movement. The Christie's auction identifies the exact 3578.51.00 model; existing mapping already limits the shortened 3578.51 match to an explicitly representative variant. No neighbouring reference, component originality, full production interval or individual watch authenticity is inferred.

## Delivery status and validation

The local browser test serves the exact archived bytes through the application gallery and enlargement UI, checks source credits and exact references, and confirms External-only movement suppression. On 2026-10-30, live OLD Pages delivered all three images at their archived dimensions and all downloaded SHA-256 values matched. Full live application-gallery verification follows this catalogue release. The full regression suite passes 228 tests, the retained inspection workflow fixture passes, and generated inventory is 454 of 2,647 source records reviewed, 1,148 verified gallery entries and 22 pending entries.

The PAM00609 movement and caseback entries share one image and both set `depictsMovement: true`; external-only matching therefore retains only the front. The Omega medal back is not marked as depicting a movement. The actual live category-gallery check should pass before any later evidence or coverage change relies on this pass. No authenticated refresh/RLS session was available. This work applies only to `potmoodle-debug/watch-auth-pro-OLD`; production WatchAuthPro is untouched.
