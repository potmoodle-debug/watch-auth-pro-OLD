# Photograph review counting

Source records and identifier keys are separate inventories. A sourced model/calibre answer is useful text research; it does not establish that the original photograph galleries and all four image categories have been inspected.

The 16 November 2026 audit identified 89 stored source-review records explicitly disclaiming photo verification. Their evidence and dates are preserved with `scope: "text"`. Of these, 87 match current source inventory records; two are historical unmatched IDs. Those 87 remain unreviewed for photographs and display a separate text-only review status. This corrects the source photograph-review total from 468 to 381, with 2,266 of 2,647 source records still awaiting photograph review. The generated JSON is authoritative as later research progresses.

The correction changes neither the 425 fully reviewed identifier category sets nor the 1,205 verified gallery entries. A reviewed identifier can still have documented empty categories; it does not mean every variant or execution has photographs.

`scripts/photo-review-scope.mjs` rejects text scope and explicit photo-verification disclaimers at the source-review gate. It also rejects incomplete reviews and unknown explicit scopes. Existing legacy photo reviews retain their recorded evidence; this counting correction does not claim a new pixel inspection of those sources. Genuine future source-photo reviews can use `scope: "photographs"`, a review date and original-source/category evidence. Explicit text-only disclaimers take precedence over a contradictory photo scope.

Text-only records must receive actual source/gallery investigation before being promoted to photograph reviews. Finding photographs elsewhere does not silently promote a text-only source record. Do not delete the textual evidence or mark unresolved categories complete to improve a count.
