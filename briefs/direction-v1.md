# BSE tools hub — Direction note

**Designer:** Celine · **Coordinator:** Sua · **Calc / substance:** Beatrice · **Builder (after brief):** Jessie  
**Status:** Justin locked A1/B1/C1/D1 + title **BSE Tools** (2026-10-27). Design pack: brief-v1 + mockup + logos — await Justin OK before Jessie build.  
**Related live tool:** [Psychrometric Chart](https://justinksw.github.io/psychrometric-chart/)

## Goal

A GitHub Pages **index / entrance page** for Justin’s BSE teaching tools: one place to open each tool. Each tool gets a **card** plus a **logo** Celine designs as a small matching set (works when only two cards exist and still looks like a family when more are added later).

First two tools:

1. **Psychrometric Chart** — already live; hub card links out to it.  
2. **P1 Duct / pipe pressure-drop mini-calc** — Beatrice still locking substance; hub can show a **Coming soon** card until the tool has a URL.

Celine owns **entrance layout, visual system, logos**. Beatrice owns numbers / formulae. Jessie builds after brief-v1. **Not** inventing P1 calc content here.

## Audience

- Same as psychart: HK office / public **MVAC teaching** (students / juniors on phone).  
- Bilingual **EN primary** + Traditional Chinese, same pattern as psychart.  
- Mobile-first; desktop Chrome OK as secondary.

## Key screens (this project)

1. **Hub home** — header + tool cards (and later: footer note / “not a Code checker” if needed).  
2. **Tool logos** — used on cards (and reusable as favicons / appbar marks later).  
3. **Empty / soon state** — P1 (and future tools) before they go live.

Out of this project: redesigning psychart itself; writing P1 engineering; any compliance / pass-fail checker.

## Constraints

- Free tools only.  
- Phone **320–430px**, **iPhone WebKit** + desktop Chrome; no sideways scroll.  
- Tap targets ≥44px; contrast readable outdoors.  
- Hold live until Justin OK (design-build-handoff).  
- Visual kinship with psychart tokens where it helps: ink `#1E2A50`, accent `#C45C26`, canvas `#EEF1F4`, clean system UI type — not a brand clone of a commercial BSE vendor.

## Proposed direction (need Justin picks)

### A. Hub layout

**Recommend A1.** Vertical stack of **full-width cards** on phone (one column); 2-column grid from ~768px. Each card: logo · title (EN + ZH) · one-line purpose · primary **Open** (or muted **Coming soon**).

| Option | Layout | Tradeoff |
|---|---|---|
| **A1 (rec)** | Stacked cards → 2-col desktop | Clear on 320; easy to add tools |
| A2 | Dense icon grid (logo + short name only) | Faster scan; weaker for bilingual purpose lines |
| A3 | List rows (logo left, text middle, chevron) | Familiar “settings” pattern; less room for logo personality |

### B. Logo set language

**Recommend B1.** Simple **flat mark + short wordmark** per tool, shared stroke weight / corner radius / 2-colour palette (ink + one accent). Marks stay readable at ~40–56px on the card.

| Option | Language | Tradeoff |
|---|---|---|
| **B1 (rec)** | Geometric instrument marks (psychart = curve/grid; P1 = duct/pipe ΔP) | Teaching-tool feel; scales to more tools |
| B2 | Letter monograms only (PC / DP) | Fast to ship; weaker “set” identity |
| B3 | Illustrated mini-scenes | Friendlier; heavier to keep consistent as the set grows |

### C. Hosting / URL shape

**Recommend C1.** New Pages site as the hub root (e.g. `…/bse-tools/` or a dedicated repo), cards deep-link to existing tool URLs. Psychart stays where it is.

| Option | Shape | Tradeoff |
|---|---|---|
| **C1 (rec)** | New hub repo / Pages root; tools keep own URLs | Clean entrance; no risk to live psychart |
| C2 | Hub as `index` inside psychart repo | One deploy; mixes “one tool” with “catalogue” |
| C3 | User GitHub Pages site root (`username.github.io`) | Nicest URL; needs confirm that root is free / wanted |

### D. P1 card while Beatrice locks substance

**Recommend D1.** Show the card with logo + title + purpose placeholder from Beatrice when she has one line; CTA **Coming soon** (not clickable). Swap to **Open** when Jessie has a preview/live URL.

## Out of this direction

Mockups, logo SVG drafts, `briefs/brief-v1.md`, Jessie build — **after** Justin yes on A–D.

## Ask Justin (via Sua)

Please pick (or say “go with Celine’s recs”):

1. **A** — Hub layout (A1 / A2 / A3)  
2. **B** — Logo language (B1 / B2 / B3)  
3. **C** — Hosting shape (C1 / C2 / C3)  
4. **D** — P1 soon-state OK as D1? (yes / tweak)  
5. Optional: preferred hub title — e.g. **BSE Tools** / **MVAC Tools** / other (EN + ZH if you have a preferred Chinese name)

Then Celine drafts logos + mockup → `briefs/brief-v1.md` → Jessie on a preview branch → one punch-list → live only after Justin OK.
