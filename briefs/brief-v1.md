# BSE Tools hub — Design brief v1

**Designer:** Celine  
**Builder:** Jessie (after Justin OK on this design)  
**Substance:** Beatrice (`briefs/ANSWERS-P1-beatrice.md` for P1 copy; psychart already live)  
**Coordinator:** Sua  
**Direction locks (Justin):** A1 / B1 / C1 / D1 · title **BSE Tools**  
**Status:** Design for Justin review — **do not build until he OK’s via Sua**

Related: `briefs/direction-v1.md` · mockup `mockup/hub-v1.html` · logos `logos/*.svg`

---

## 1. Goal

GitHub Pages **entrance / index** for Justin’s BSE teaching tools. Cards open each tool; each tool has a **logo** in a matching set. First ship:

1. **Psychrometric Chart** — link to existing live URL (no redesign of that app).  
2. **Duct / pipe ΔP** — **Coming soon** card until P1 has its own preview/live URL (Beatrice substance in progress; P1 UI is a **later** brief).

Celine owns hub layout + logos. Beatrice owns calc copy/defaults. Jessie builds hub only after Justin OK on this design pack.

## 2. Locked decisions

| Item | Value |
|---|---|
| Title | **BSE Tools** / 屋宇裝備工具 |
| Layout | **A1** — stacked full-width cards on phone; **2-column** from ~768px |
| Logos | **B1** — flat geometric marks, shared ink tile + accent `#C45C26` |
| Hosting | **C1** — **new** hub Pages repo/root; psychart keeps `https://justinksw.github.io/psychrometric-chart/` |
| P1 card | **D1** — visible with logo + purpose; CTA **Coming soon** (not a link) until URL exists |
| Language | Bilingual **EN primary** + ZH secondary (psychart pattern) |
| Print | Not required |

## 3. Screen structure (hub home)

Phone frame reference: **390×844**; also prove **320** and **430**.

1. Optional thin status only on preview builds (PREVIEW badge) — omit on live.  
2. **Header:** hub mark (40px) + **BSE Tools** + sub `屋宇裝備工具 · MVAC teaching`.  
3. **Intro** one line: teaching calculators; EN primary; not a CoP checker.  
4. **Cards** (order fixed for v1):  
   - Psychrometric Chart (live Open)  
   - Duct / pipe ΔP (Coming soon)  
5. **Footer** honesty note (teaching demos; Beatrice defaults; not CIBSE Guide C / CoP / ductulator).

### Card anatomy

| Element | Spec |
|---|---|
| Logo | 48×48 CSS px (SVG), radius 12 |
| Title EN | 16px / 700 |
| Title ZH | 12px / muted; wrap safely on 320 (no sideways scroll) |
| Purpose | 1 EN line + 1 ZH line (see copy table) |
| CTA | min-height **44px**, full card width on phone |
| Live CTA | ink fill, white text — **Open · 開啟** |
| Soon CTA | muted outline — **Coming soon · 即將推出**; parent is **not** `<a>` |

### Card copy (v1)

| Tool | EN title | ZH title | EN purpose | ZH purpose | Href |
|---|---|---|---|---|---|
| Psychart | Psychrometric Chart | 濕空氣線圖 | OA / RA path, mix, coil, reheat — HK summer teaching. | 室外／回風路徑、混合、盤管、再熱（香港夏季教學） | `https://justinksw.github.io/psychrometric-chart/` |
| P1 | Duct / pipe ΔP | 風管／水管壓降 | Air duct & CHW pipe — velocity, friction, fittings ΣK. | 風管與冷凍水管 — 流速、摩擦、管件 ΣK | none until live |

When P1 goes live later: swap CTA to Open and set href from Jessie’s Pages URL (new brief version if needed).

## 4. Logo set (deliverables in `logos/`)

| File | Use |
|---|---|
| `bse-tools.svg` | Hub header / favicon |
| `psychart.svg` | Psychart card (+ optional favicon later) |
| `p1-dp.svg` | P1 card |

**Visual rules:** 64×64 viewBox; `rx=14` rounded square; fill ink `#1E2A50`; accent `#C45C26`; light strokes `#EEF1F4` / `#8FA0C4`. Readable at 40px. No wordmarks inside the mark (title sits beside/below on the card).

Motifs (B1):  
- Psychart — chart grid + humidity curve + two state points.  
- P1 — round duct/pipe + flow + downward ΔP arrow.  
- Hub — four tiles (catalogue); teal tile echoes psychart comfort `#2E7D6E`.

## 5. Visual tokens (align with psychart)

```
--canvas: #EEF1F4
--panel: #FFFFFF
--ink: #1E2A50
--muted: #5A6178
--line: #C8CDD8
--accent: #C45C26
--focus: #174A7C
--soon: #E8ECF5
```

System UI stack + Noto/PingFang TC. Focus ring 3px `#174A7C`. Card radius 14; CTA radius 10.

## 6. Behaviour

- Psychart card navigates in same tab (or Jessie’s default for external Pages — same origin family preferred).  
- Soon card: no navigation, no `pointer` cursor pretending it’s a link.  
- Future tools: append cards; keep one-column → two-column rule.  
- No inventing P1 engineering UI in this repo ship — hub only.

## 7. Out of scope (this brief)

- Building the P1 calculator UI (separate brief after Justin OK on hub + Beatrice lock).  
- Changing live psychart.  
- Paid design tools.  
- CFM / in.wg, CIBSE tables, ductulator claims.

## 8. Repo / deploy (Jessie)

- New hub repo (name Justin/Jessie choose; e.g. `bse-tools`) → GitHub Pages.  
- Ship static `index.html` + `styles.css` + `logos/*.svg` (paths as built).  
- Preview branch + PREVIEW badge until Justin live OK.  
- Report completion / blockers to **Sua**; Celine does one punch-list pass on preview.

## 9. Acceptance list (measurable)

1. At **320 / 390 / 430** CSS px width in **desktop Chrome** and **iPhone WebKit** (Safari or iOS Chrome): no horizontal scroll; ZH titles/purpose wrap without overflow.  
2. Hub title shows **BSE Tools** + ZH sub as specified.  
3. Two cards in order: Psychart, P1; logos render (SVG).  
4. Psychart **Open** reaches the live psychart URL.  
5. P1 CTA is **Coming soon**; activating the card does **not** navigate.  
6. Every interactive control / CTA ≥ **44×44** CSS px.  
7. Text/icon contrast sufficient on canvas/panel (ink on white/canvas; white on ink CTA).  
8. Footer includes teaching / not-CoP honesty line (EN; ZH optional).  
9. Desktop ≥768px: cards in **two columns**.  
10. No sideways scroll; `viewport-fit=cover` / safe-area padding on bottom.  
11. Favicon uses hub mark (optional but preferred).  
12. Design pack reviewed: mockup + logos match this brief before merge to live.

## 10. Design pack paths (for Justin via Sua)

| Artifact | Path |
|---|---|
| Direction | `briefs/direction-v1.md` |
| This brief | `briefs/brief-v1.md` |
| Hub mockup | `mockup/hub-v1.html` |
| Logo sheet | `mockup/logos-sheet.html` |
| SVGs | `logos/bse-tools.svg`, `psychart.svg`, `p1-dp.svg` |
| P1 substance (not hub UI) | `briefs/ANSWERS-P1-beatrice.md` |

**Ask Justin:** OK this hub design (logos + mockup + brief-v1) for Jessie to build on a preview branch? Tweaks welcome before build.
