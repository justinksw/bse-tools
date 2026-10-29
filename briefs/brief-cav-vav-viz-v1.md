# CAV／VAV viz — Design brief v1（Fork A）

**Designer:** Celine · **Builder (HOLD):** Jessie · **Substance:** Beatrice · **Coordinator:** Sua  
**Date:** 2026-10-29 (Asia/Hong_Kong)  
**Status:** Design mock for **Justin visual review**. Jessie **HOLD** until Justin says build. Do **not** touch LIVE paths. Do **not** invent physics／equipment facts — Beatrice substance only.

**Beatrice PASS (2026-10-29):** substance check PASS on mock+brief+shots. Layout Qs: (1) S4 unlabeled controller shell OK · (2) S1 dim actuator foreshadow OK · (3) damper 開度 slider keep as 開度起點 demo. Soft nits applied: S1/S4 live Q hidden when twin sparklines on (`.phone.twin-q` — one Q home); optional PI eFoot aside removed. Jessie HOLD for Justin visual OK / build ask.


**Substance (sole fact source):** `briefs/CAV-VAV-viz-substance-v1.md`  
**Plan (context only; substance wins):** `briefs/CAV-VAV-viz-plan-v1.md`  
**Direction:** `briefs/direction-cav-vav-viz-v1.md`  
**Mockup:** `mockup/cav-vav-v1.html`  
**LIVE path (later):** `tools/cav-vav/` → hub card `CAV／VAV｜送風策略`  
**Style cue only:** `mockup/venturi-valve-v2.html` + LIVE venturi chrome — **not** Venturi physics／parts  
**Hub:** justinksw/bse-tools — no new repo · no bse-notes · no PDF flow

---

## 1. Goal

New bse-tools page teaching **CAV vs VAV** send-air strategy + typical **single-duct VAV box** (Fork A, 4 stages):

- Hero first-screen line locked (substance §1)
- ≤4 **tappable** on-diagram EN labels with leader+circle + short callout
- No long `.legend-bar`; no `#illusChip`
- Tip／panel copy **verbatim** from substance §4.1
- Chrome from substance §4.3
- 「示意」only in `#q-lead`
- Reheat = one tip line (§4.2), not its own stage
- PI aside **removed** from mock（Beatrice soft nit 可刪）— page mainline stays CAV／VAV; **no** Venturi Stage‑4 CTA

---

## 2. Canonical paths

| Role | Path |
|---|---|
| Substance lock | `/workspace/bse-tools/briefs/CAV-VAV-viz-substance-v1.md` |
| Plan (context) | `/workspace/bse-tools/briefs/CAV-VAV-viz-plan-v1.md` |
| Direction | `/workspace/bse-tools/briefs/direction-cav-vav-viz-v1.md` |
| This brief | `/workspace/bse-tools/briefs/brief-cav-vav-viz-v1.md` |
| Mock v1 | `/workspace/bse-tools/mockup/cav-vav-v1.html` |
| Shots (optional) | `/workspace/bse-tools/mockup/shots/cav-vav-v1-s{1-4}-390.png` |
| LIVE (Jessie later) | `tools/cav-vav/` |
| Logo | inline SVG chip in mock (no separate logo asset yet) |

---

## 3. Stage table（must match substance §4）

| # | Caption（粵） | User does | Teaching | Labels（EN｜≤4） |
|---|---|---|---|---|
| 1 | **負荷變咗點算** | Push 室負荷 slider; watch CAV vs VAV Q／示意 zone | CAV＝Q flat; VAV＝Q follows load | optional Inlet／Outlet only, or none |
| 2 | **VAV box 入面有咩** | Tap ≤4 parts | single-duct: Inlet→damper→Outlet; actuator moves damper | Inlet, damper, actuator, Outlet |
| 3 | **邊個話 damper 郁** | Change zone／setpoint; see controller→actuator→damper | Control chain | ＋controller (swap lower-priority label); thermostat may be UI-only |
| 4 | **flow sensor 點幫手** | Upstream pressure disturb; toggle flow 回授 vs 淨 damper 開度 | Measure Q → controller trims damper → track flow setpoint; 開度%≠實際 Q | ＋flow sensor (drawn); may swap out Outlet |

**flow setpoint／zone** = panel／slider concepts — **not** required on-diagram part callouts (same rule as Venturi actuator vs setpoint).

### Tip／panel — copy EXACTLY（substance §4.1）

| Slot | Locked string |
|---|---|
| TIPS[1] | `負荷升：VAV 加大風量跟；CAV 風量大致企定，靠其他手段跟（例如水溫／reheat）。` |
| Panel 1 | `同一 zone：睇 CAV 同 VAV 嘅 Q 點跟（或不跟）負荷。` |
| TIPS[2] | `典型 single-duct VAV box：Inlet → damper → Outlet；actuator 郁 damper。` |
| Panel 2 | `撳圖上英文標籤睇邊件；主圖＝VAV box。` |
| TIPS[3] | `zone／thermostat 同 flow setpoint 入 controller；controller 叫 actuator 郁 damper。` |
| Panel 3 | `控制層：sensor／setpoint → controller → actuator → damper。` |
| TIPS[4] | `淨睇 damper 開度：上游壓一變，實際風量會飄。有 flow sensor，controller 先量到 Q，再調 damper 去跟 flow setpoint。` |
| Panel 4 | `切「有 flow 回授」vs「淨 damper 開度」；flow sensor 畫喺箱內。` |
| Toggle 主標 | `flow 回授`｜`淨 damper 開度`（**唔**用 PI／Venturi 做 toggle 主標） |
| Toggle 細字 | 回授側 `flow sensor · 跟 flow setpoint`｜開度側 `只睇開度 % · 壓變 Q 飄` |

### Reheat tip（substance §4.2｜not a stage）

`CAV／VAV 都可以有 reheat（電熱／熱水再熱）——負荷低時仍要最少風量又唔好過凍；呢頁唔拆 reheat 成獨立 stage。`

---

## 4. Chrome table（substance §4.3）

| Slot | String |
|---|---|
| Title chrome | `CAV／VAV｜送風策略` |
| Hero | `房間要冷／要熱啲時，**VAV** 會改風量；**CAV** 風量大致唔變，靠其他方法跟。` |
| `#q-lead` | `Q／℃＝示意模型`（全頁唯一「示意」） |
| `#eFoot` | `本頁教 CAV／VAV 送風策略同典型 single-duct VAV box（含 flow sensor）。` |
| `#eFoot` optional aside | **removed** in mock soft nit（Beatrice：可刪）— not in `cav-vav-v1.html` |
| `.demo-note` | `MVAC · bse-tools` |
| `#illusChip` | **deleted／never** |
| `.legend-bar` | **deleted／never** |
| Hub card（later） | `CAV／VAV｜送風策略`（獨立卡；唔要求同卡硬綁 Venturi CTA） |

**刪自本頁主 chrome：** 「詳見 Venturi valve 工具」作 Stage 4／eFoot 主句；「機械 spring-cone」教學。

---

## 5. On-diagram label rules

**Annotation visual system（leader + circle／bullseye — all stages）：**

Every part annotation is a group containing:
1. **Anchor circle** on the component body — `r≈2.75–3.25`, fill `#EEF1F4`, stroke `#3A4A72`, stroke-width `1.5`
2. **Leader line** — stroke `#3A4A72`, stroke-width `1.5`, from circle center toward the label (short, clear)
3. **Label text** — `.callout` EN noun; compound names ~font-size `9.5`

Prefer `<g class="anno" id="…">` (or `tap-g`) containing circle + line + text. Stage visibility: hide unused labels so leaders do not orphan. ≤4 visible at once.

**Stage 2 primary（≤4, tappable｜EN titles｜substance §3.1）：**

| 畫面主標（EN） | Callout body（粵｜substance） | Anchor |
|---|---|---|
| Inlet | 風由呢度入 box | circle mid left duct + leader up |
| damper | 開大／關細 → 改可達風量 | circle on blade mid + leader |
| actuator | 郁 damper（跟 controller） | circle on actuator housing + leader |
| Outlet | 風由呢度出 box | circle mid right duct + leader up |

**Stage-follow（EN｜same leader+circle）：**

| Label | When | Note |
|---|---|---|
| controller | Stage 3 | Swap a lower-priority label (e.g. Outlet) so ≤4 remain; thermostat may stay UI-only |
| flow sensor | Stage 4 | **Drawn** as probe／tube in duct; may swap out Outlet |

**Vocabulary（Justin／Beatrice §0）：** physics／equipment nouns on viz = **English primary**. Story titles／hero／tips 粵語 OK. No ZH equipment primary chips（風門／執行器／控制器／流量感測器／再熱 as main titles banned）.

---

## 6. What Jessie must build later（HOLD — map from mock; do not invent）

When Justin unblocks:

1. New page `tools/cav-vav/` from mock v1 (not a Venturi fork of physics).
2. Exactly 4 stages; captions／tips／panels／chrome exact from this brief.
3. ≤4 tappable labels; leader+circle; no `.legend-bar`; no `#illusChip`.
4. Stage 1: load slider + CAV／VAV twin-Q contrast (示意 model).
5. Stage 2: Inlet／damper／actuator／Outlet taps.
6. Stage 3: zone／setpoint controls; controller on diagram; thermostat UI-ok.
7. Stage 4: draw flow sensor; toggle `flow 回授`｜`淨 damper 開度` + fine print; upstream pressure disturb demo.
8. Reheat tip line present; PI aside removed (soft nit).
9. `#q-lead`／`#eFoot`／`.demo-note` exact; MVAC only.
10. Mobile-first; prove 320／360／390／430; desktop Chrome + iPhone WebKit.
11. Hard-ban `rg` CLEAN before share tip SHA.
12. **HOLD** until Justin visual OK + Beatrice PASS + Justin says build. Preview branch + pages-preview-live when unblocked.

---

## 7. Hard bans（`rg` acceptance — FAIL if any hit in shipped HTML／copy）

From substance top:

- `QEH` · `Queen Elizabeth` · `Block T` · `8/F` · `八樓`（as site）
- `手術室` · `\bOT\b` · `Prep`（brand） · `醫院` · `hospital` · `operating theatre`／`theater`
- Client／consultant／contractor proper names · assignment／project codes · drawing numbers as facts
- Equipment tags（e.g. `AV-`／`VAV-` project IDs）as facts
- Fake code-required Pa／L/s／ACH／℃ claims
- System name **`HVAC`** → use **MVAC**
- Long proprietary handbook verbatim
- On-screen internal words: `footnote` · `Preview build`／`not live`（mock may keep MOCKUP badge）
- Stage 4／main chrome as Venturi CTA or full PI re-teach

**Keep OK:** CAV、VAV、damper、actuator、controller、flow sensor、flow setpoint、zone／thermostat、ΔP、Inlet／Outlet、reheat、single-duct、MVAC、optional `pressure-independent (PI)` once in aside.

---

## 8. Acceptance checklist（measurable）

- [ ] Stages **exactly 4**; captions match substance §4
- [ ] **No** `.legend-bar` · **no** `#illusChip`
- [ ] ≤4 on-diagram EN labels; leader+circle; taps → highlight + callout; re-tap clears
- [ ] Hero string **exact**
- [ ] Tips／panels／toggle／toggle fine print **exact** §4.1
- [ ] Reheat tip §4.2 present
- [ ] Chrome: title／`#q-lead`／`#eFoot`／`.demo-note` exact; PI aside absent（removed）
- [ ] 「示意」only in `#q-lead`
- [ ] Stage 1: load slider; CAV Q flat vs VAV Q follows
- [ ] Stage 4: flow sensor drawn; toggle `flow 回授`｜`淨 damper 開度`; upstream pressure demo
- [ ] No Venturi Stage‑4 CTA／main chrome
- [ ] Diagram primary labels EN; flow setpoint／zone = panel／slider concepts
- [ ] **MVAC**; hard-ban `rg` **CLEAN**
- [ ] Tap targets ≥44px where practical; focus-visible; contrast OK
- [ ] Widths **320／360／390／430**: no forced horizontal scroll
- [ ] Desktop **Chrome** + note **iPhone WebKit**（Safari／iOS Chrome）
- [ ] No new repo; no bse-notes／PDF path
- [ ] **Jessie HOLD** until Justin says build

### Designer self-check（this pack）

- [x] Mock `mockup/cav-vav-v1.html` implements Fork A
- [x] Self-critique pass once（hierarchy, type, color, spacing, a11y, label overlap）
- [x] Ban `rg` on mock + brief + direction
- [ ] Justin／Sua visual gate（pending）
- [ ] Beatrice substance re-PASS（pending）
- [ ] Jessie not messaged（HOLD）

---

## 9. Visual tokens（match Venturi／hub — do not diverge）

```
--canvas: #EEF1F4
--panel: #FFFFFF
--ink: #1E2A50
--muted: #5A6178
--line: #C8CDD8
--accent: #C45C26
--comfort-edge / --ok: #2E7D6E
--focus: #174A7C
body background: #D8DCE2
font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans TC", "PingFang TC", "Helvetica Neue", sans-serif
```

Controls min-height **44**; radius **10**. flow 回授 checked = teal wash; 淨 damper 開度 checked = amber wash. At **≤340px** hide segmented fine print if cramped.

---

## 10. Self-critique（what Celine fixed once before calling done）

Fixes applied in-place on mock after first pass (before handoff):

1. **示意 leak** — removed `示意起點` from Stage‑4 damper-open fine print; 示意 remains only in `#q-lead`.
2. **Stage‑4 label overlap** — nudged `flow sensor` left / `damper` right so bottom leaders do not collide.
3. **Stage‑3 controller leader** — retargeted left of housing (not long vertical through duct) to clear damper area.
4. **Actuator foreshadow** — Stage‑1 opacity via SVG `opacity` attr (not CSS style); leader still targets **housing**, orange ↔ = cue only.
5. **Label mutex** — Stage 2: Inlet／damper／actuator／Outlet; Stage 3 swaps Outlet→controller; Stage 4 swaps Outlet→flow sensor (≤4).
6. **Twin-Q hierarchy** — CAV muted flat sparkline vs VAV teal follow; Stage 1＋4 twin on.
7. **flow setpoint／zone** = sheet sliders only — not diagram part callouts.
8. Hard-ban `rg` on mock＋brief＋direction (ban-table mentions only; mock UI CLEAN).

---

## 11. Misconception gates（substance §6 — tips must support）

1. CAV ≠ 永遠「無控制」  
2. VAV ≠ 淨係改 damper 開度就完  
3. damper 開度 % ≠ 實際風量  
4. flow sensor 係量風、幫 controller 跟 setpoint — 唔係另一種閥體物理  
5. MVAC，唔係 HVAC
