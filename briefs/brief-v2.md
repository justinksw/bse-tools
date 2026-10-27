# BSE Tools hub — Design brief v2

**Supersedes:** `briefs/brief-v1.md` (Justin punch 2026-10-27 via Sua)  
**Designer:** Celine · **Builder:** Jessie (after Justin OK) · **Substance:** Beatrice · **Coordinator:** Sua  
**Direction locks:** A1 / B1 / C1 / D1 · title **BSE Tools**  
**Status:** Design for Justin re-review — **Jessie still hold**

Mockup: `mockup/hub-v2.html` · Logos: `logos/*.svg` · Shots: `mockup/shots/`

---

## 0. What changed from v1 (Justin punch)

| # | Ask | Response in v2 |
|---|---|---|
| 1 | **Mobile-first 厳守** — iPhone 13 (390×844) first; 320 must not break | Hub uses the **same `.phone` frame as live psychart** (390 × min 844 / 100dvh; `@media max-width 430` → full width). Single-column cards only in the phone. Mock for review is phone-primary (not a desktop marketing layout). |
| 2 | **色・字は psychart に寄せる** | Tokens, type scale, badge, sheet, card radius, CTA = lifted from live psychart `styles.css`. Hub chrome must not feel like a separate product. |

Unchanged: A1 stacked cards · B1 logo set · C1 separate Pages hub · D1 P1 Coming soon · bilingual EN primary · hold live until Justin OK.

---

## 1. Goal

GitHub Pages **entrance** for Justin’s BSE teaching tools. Cards + matching logos. v1 ship:

1. **Psychrometric Chart** → live URL (no psychart redesign).  
2. **Duct / pipe ΔP** → Coming soon until P1 has a URL (P1 UI = later brief; substance in `ANSWERS-P1-beatrice.md`).

## 2. Locked decisions

| Item | Value |
|---|---|
| Title | **BSE Tools** / 屋宇裝備工具 |
| Layout | **A1** stacked cards in phone; real build may use 2-col ≥768 **outside** or within a wider shell later — **acceptance gate is 320–430 phone** |
| Logos | **B1** geometric marks; hub mark = outline tiles (v2 softer than filled grid) |
| Hosting | **C1** new hub Pages; psychart URL unchanged |
| P1 | **D1** Coming soon (not a link) |
| Visual system | **Match psychart** — see §5 |

## 3. Screen structure (iPhone 13 = 390×844)

Mirror psychart app shell:

1. **`header.appbar`** — hub mark 32px · h1 **17px/700** · sub **12px** muted · optional PREVIEW/MOCKUP badge (psychart `.badge`)  
2. **Intro** — 12px muted, one line  
3. **`.sheet`** — white panel, radius 16px top, grab + section label **Tools / 工具**  
4. **Cards** — `#FAFBFC`, radius **12**, border `--line`  
5. **`.demo-note`** — 11px honesty line  

### Card anatomy

| Element | Spec (psychart-aligned) |
|---|---|
| Logo | **40×40**, radius 10 |
| Title EN | **15px / 700** |
| Title ZH | **12px** muted; `overflow-wrap` / keep-all — no sideways scroll at 320 |
| Purpose EN / ZH | 12px / 11px muted |
| CTA | min **44×44**, radius **10**, font **13/600** — live = ink fill (scrubber `.primary`); soon = panel + muted border |
| Soon card | not `<a>`; no navigation |

### Copy (same as brief-v1)

| Tool | EN / ZH title | Purpose EN / ZH | Href |
|---|---|---|---|
| Psychart | Psychrometric Chart / 濕空氣線圖 | OA / RA path… / 室外／回風路徑… | `https://justinksw.github.io/psychrometric-chart/` |
| P1 | Duct / pipe ΔP / 風管／水管壓降 | Air duct & CHW… / 風管與冷凍水管… | none until live |

## 4. Logos (`logos/`)

| File | Motif |
|---|---|
| `bse-tools.svg` | Outline 2×2 tiles on ink (catalogue) |
| `psychart.svg` | Grid + curve + OA/RA points |
| `p1-dp.svg` | Pipe + flow + ΔP arrow |

Ink `#1E2A50` · accent `#C45C26` · comfort edge `#2E7D6E` on hub teal stroke. 64 viewBox; readable at 40px.

## 5. Visual tokens (copy from psychart — do not diverge)

```
--canvas: #EEF1F4
--panel: #FFFFFF
--ink: #1E2A50
--muted: #5A6178
--line: #C8CDD8
--accent: #C45C26
--focus: #174A7C
body background: #D8DCE2
font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans TC", "PingFang TC", "Helvetica Neue", sans-serif
```

Type reference: appbar h1 **17**; sub/ZH **12**; section EN **13/700**; demo-note **11**; primary button **13/600** on ink.

## 6. Behaviour / repo

- Psychart Open → live URL.  
- Soon → no nav.  
- New hub repo + Pages; preview branch + badge until Justin live OK.  
- Report to **Sua**; Celine one punch-list on preview.

## 7. Out of scope

P1 calculator UI · psychart redesign · paid tools · CoP/CIBSE claims.

## 8. Acceptance list

1. **Primary review viewport:** iPhone 13 CSS **390×844** (WebKit); also **320** and **430** — no horizontal scroll; ZH wraps.  
2. Desktop Chrome at 390-wide (or device mode) matches the phone mock.  
3. Tokens/type match §5 (side-by-side with live psychart — hub must not look like a different brand).  
4. Title **BSE Tools** + ZH sub; Tools section label.  
5. Two cards: Psychart Open works; P1 Coming soon does not navigate.  
6. CTA ≥44px; focus ring `--focus`.  
7. Logos SVG render; hub mark outline-tile set.  
8. Footer honesty line present.  
9. Safe-area bottom padding on sheet.  
10. Preview badge only on non-live builds.

## 9. Ask Justin (via Sua)

OK hub **v2** mockup + logos for Jessie preview build? Tweaks before build welcome.
