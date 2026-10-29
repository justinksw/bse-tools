# CAV／VAV viz — Direction note v1

**Designer:** Celine · **Via:** Sua · **Substance lock:** Beatrice (`CAV-VAV-viz-substance-v1.md`)  
**Date:** 2026-10-29 (Asia/Hong_Kong)  
**Hub later:** justinksw/bse-tools · slug `tools/cav-vav/`（建議）  
**Status:** design mock for Justin visual review · **Jessie HOLD** until Justin says build

## Goal

Mobile-first teaching page: **CAV／VAV｜送風策略** — CAV vs VAV behaviour + typical **single-duct VAV box** cutaway (Fork A, 4 stages). Not a Venturi／PI teaching page.

## Audience

People who need the CAV／VAV split clear (incl. BSI refresh): strategy first → parts → control → flow sensor.

## 4 stages (one-liners｜substance §4)

| # | Story | What you see |
|---|---|---|
| 1 | **負荷變咗點算** | Room-load slider; CAV Q flat vs VAV Q follows load |
| 2 | **VAV box 入面有咩** | Tap Inlet／damper／actuator／Outlet on cutaway |
| 3 | **邊個話 damper 郁** | Zone／setpoint UI; controller→actuator→damper |
| 4 | **flow sensor 點幫手** | Draw flow sensor; toggle `flow 回授`｜`淨 damper 開度`; upstream pressure disturb |

## Constraints (locked)

- On-diagram ≤4 **EN** part labels; leader+circle bullseye (Venturi v2 chrome cue only)
- Story／hero／tips 粵語; diagram titles EN
- System name **MVAC** (never HVAC)
- `#q-lead` only place for 示意: `Q／℃＝示意模型`
- Reheat = one tip line (not its own stage)
- Optional PI aside ≤1 sentence, deletable — **no** Venturi Stage‑4 CTA／main chrome
- Hard bans: QEH／hospital／OT／HVAC／footnote／Preview build…／fake code numbers／project tags
- Free tools only; phone frame ~390; prove 320／360／390／430

## Style cue

Chrome tokens + leader system from `mockup/venturi-valve-v2.html` — **do not** copy Venturi physics／parts.

## Acceptance pointer

Full checklist → `briefs/brief-cav-vav-viz-v1.md` §8. Beatrice substance = sole fact source.

## Paths

| Deliverable | Path |
|---|---|
| Substance | `briefs/CAV-VAV-viz-substance-v1.md` |
| Plan (context) | `briefs/CAV-VAV-viz-plan-v1.md` |
| This direction | `briefs/direction-cav-vav-viz-v1.md` |
| Design brief | `briefs/brief-cav-vav-viz-v1.md` |
| Mock | `mockup/cav-vav-v1.html` |
| Shots (optional) | `mockup/shots/cav-vav-v1-s{1-4}-390.png` |
| LIVE (Jessie later) | `tools/cav-vav/` |

**Next:** Sua → Justin visual OK → Beatrice PASS → Justin says build → Jessie PREVIEW→LIVE. Jessie **HOLD** now.
