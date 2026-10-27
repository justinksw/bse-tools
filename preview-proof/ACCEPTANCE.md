# BSE Tools hub — preview acceptance (brief-v2 §8)

Preview URL: https://justinksw.github.io/bse-tools/
Proven against: Pages preview tip (P2: SHA note + soon cursor)
SHA: c61d293 (P2; site from 945dd19)
Pages source: `preview` /
Proved: 2026-10-27T14:11:54.419Z (box local Asia/Hong_Kong)

**Overall: PASS**

| Browser | Width | no-sx | PREVIEW | titles | psychart Open | Soon no-nav | CTA≥44 | logos | tokens | Result |
|---|---|---|---|---|---|---|---|---|---|---|
| chromium | 320 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| chromium | 390 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| chromium | 430 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| webkit | 320 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| webkit | 390 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| webkit | 430 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |

Shots: `preview-proof/{chromium,webkit}-{320,390,430}.png`

## Notes
- Primary review viewport 390×844; also 320 and 430.
- P1 card is `<div class="card soon">` (not `<a>`); click does not navigate.
- Psychart Open href = https://justinksw.github.io/psychrometric-chart/
- Hold live / PREVIEW until Justin OK via Sua.

## Live verify
- Pages status `built`; source `preview` `/`.
- Live Chromium 390 spot-check: badge=PREVIEW, psychart href OK, P1 tag=DIV, no-sx.
- URL https://justinksw.github.io/bse-tools/


## P2 (Celine optional, landed)
- ACCEPTANCE SHA note refreshed to tip
- `.card.soon { cursor: default; }`
- No P0/P1 — clear for Justin live OK via Sua
