# CAV / VAV teaching viz — substance lock v1（Fork A｜Justin 校正）

```yaml
doc: CAV-VAV-viz
format: interactive-web-tool（later）
title: CAV／VAV｜送風策略
slug: cav-vav（建議；未入 hub）
created: 2026-10-29
revised: 2026-10-29
content_owner: Beatrice
status: locked — substance only；唔入 bse-tools build 直至 Justin 叫
version: viz-substance-v1
correction: Justin via Sua 2026-10-29 — 本頁主線＝CAV vs VAV；PI／Venturi 只輕提、唔做 Stage 4／頁面主軸
plan: CAV-VAV-viz-plan-v1.md
hub_later: justinksw/bse-tools（Celine→Jessie after Justin asks）
voice: 故事句粵語／中文；畫面物理／設備名詞英文主標；MVAC（唔用 HVAC）
fork: A（Justin 2026-10-29 via Sua）
options_locked:
  flow_sensor: yes（畫出）
  reheat_tip: yes（細字 tip；唔獨立 stage）
```

> **讀者：** 想明 CAV／VAV 分工嘅人（含 BSI 溫習）；**先策略、後零件、再控制、再 flow sensor**  
> **範圍：** 新 **bse-tools** 頁——泛用 **MVAC** **CAV vs VAV** 送風策略＋典型 **single-duct VAV box**（含 flow sensor、reheat tip）；**唔寫**項目／院址／客戶。  
> **唔係：** Venturi／pressure-independent 專頁（已有另 tool）；本頁**唔**以連去 Venturi／重教 PI 做主軸。  
> **「示意」：** 只留一處 lead（如 `#q-lead` 或 zone 溫度／Q）；唔重複示意≠現場 disclaimer。

---

## 公開硬禁（chrome＋UI＋圖標籤 — `rg` 用）

- 院址／座號：`QEH`、`Queen Elizabeth`、`Block T`、`8/F`、`八樓`（當項目址）
- 醫院／OT 場景：`手術室`、`\bOT\b`、`Prep`（品牌）、`醫院`、`hospital`、`operating theatre`／`theater`
- 客戶／顧問／承辦固有名、assignment／project codes、圖面編號當事實
- 設備 tag（例如 `AV-`／`VAV-` 項目編號）當事實
- 假「規範規定」死數（Pa／L/s／ACH／℃）當 code-required
- 系統名 **`HVAC`** → 用 **MVAC**
- 長段 proprietary 手冊原文 verbatim
- 畫面唔好出現內部詞：`footnote`、`Preview build…not live`
- **頁面主 chrome／Stage 4：** 唔好做成「請去 Venturi valve」導流頁；唔整頁重教 PI

**可保留：** CAV、VAV、damper、actuator、controller、flow sensor、flow setpoint、zone／thermostat、ΔP、Inlet／Outlet、reheat、single-duct、MVAC terminal。  
**輕提（可選、一句封頂）：** `pressure-independent (PI)` — 只若文案需要、首次寫全稱；**唔**做 stage 標題／toggle 主軸。Venturi 名只可後備 aside，唔強制連結 CTA。

---

## 0. 畫面用詞規則（Justin 2026-10-29）

**物理／設備名詞 → 畫面主標用英文**（唔好再用中文譯名做主標）：  
`CAV` · `VAV` · `damper` · `actuator` · `controller` · `flow sensor` · `flow setpoint` · `zone`／`thermostat` · `ΔP` · `Inlet`／`Outlet` · `reheat`

**粵語／中文 OK：** 故事標題同句子（負荷、室溫、風量企定／跟住變）。

**若出現 PI（非必須）：** 畫面／chrome 上**第一次**短寫必須 **`pressure-independent (PI)`**；其後可單寫 `PI`。本頁預設**可以完全唔用 PI 字**——Stage 4 用「flow 回授／flow sensor」講清楚即可。

**已廢做主標：** 風門、執行器、控制器、流量感測器、再熱 等中文譯名做主 chip／圖標。

---

## 1. 係咩

**首屏一句（hero，鎖定）：**  
「房間要冷／要熱啲時，**VAV** 會改風量；**CAV** 風量大致唔變，靠其他方法跟。」

**擴充（教學，可放 tip／詳情，唔一次塞首屏）：**  
**CAV**（constant air volume）＝送風量大致企定，負荷變時靠水溫／reheat／其他手段跟。  
**VAV**（variable air volume）＝改風量跟負荷。  
典型末端係 **single-duct VAV box**：風入→**damper**→出；**actuator** 郁 damper；**controller** 跟 zone／setpoint；本頁**畫出** **flow sensor**（量實際風量，俾 controller 跟 **flow setpoint**）。  
**開度 % ≠ 一定知實際 Q：** 管壓一變，同一 damper 開度風量會變；有 flow sensor 回授先較跟得住設定風量。

---

## 2. 頁面定位（鎖定｜唔撈亂）

| 本頁（新） | 唔係本頁主軸 |
|---|---|
| **CAV vs VAV** 送風策略 | Venturi valve 機械 spring-cone 物理 |
| 典型 **single-duct VAV box** 解剖 | 整頁教 pressure-independent |
| **flow sensor**＋controller 點跟 flow setpoint | Hub／Stage 導流去 Venturi |
| **reheat** tip 一句 | Dual-duct／fan-powered 全家族 |

設計備註（給 Beatrice／Celine，**唔**寫入用家主 chrome）：另有 Venturi tool 教機械 PI 末端——本頁只在極必要時輕提，唔互搶主線。

---

## 3. 解剖標籤（分層｜主標英文）

### 3.1 Stage 2 圖上必有（≤4，可點｜英文主標）

| 畫面主標 | 短 callout（粵） |
|---|---|
| `Inlet` | 風由呢度入 box |
| `damper` | 開大／關細 → 改可達風量 |
| `actuator` | 郁 damper（跟 controller） |
| `Outlet` | 風由呢度出 box |

### 3.2 跟 stage 出場（英文主標）

| 畫面主標 | 出場 |
|---|---|
| `controller` | Stage 3（可換低優先標籤；圖上仍 ≤4） |
| `flow sensor` | Stage 4（Justin：要畫） |
| `flow setpoint` | Stage 3–4（UI） |
| `zone`／`thermostat` | Stage 1／3 UI；thermostat 可唔上圖 |
| `reheat` | tip／細字（Justin：要）；唔獨立 stage、唔搶 ≤4 主標 |

**刪：** 圖底長 chip legend-bar。

---

## 4. Interactive stages（鎖定 4 段｜Fork A｜校正後）

| # | 故事標題（粵） | 用家做咩 | 教學點 | 圖上 ≤4 EN 標籤 |
|---|---|---|---|---|
| 1 | **負荷變咗點算** | 推「室負荷」slider；睇 CAV vs VAV 兩條 Q／示意 zone 反應 | CAV＝Q 企；VAV＝Q 跟負荷 | （可未標零件；或只 Inlet／Outlet） |
| 2 | **VAV box 入面有咩** | tap ≤4 件 | 典型 single-duct：風入→damper→出；邊件郁 | Inlet, damper, actuator, Outlet |
| 3 | **邊個話 damper 郁** | 改 zone／setpoint；見 controller→actuator→damper | 控制層：sensor／setpoint → controller → actuator | ＋controller（換低優先標籤）；thermostat 可 UI 唔上圖 |
| 4 | **flow sensor 點幫手** | 上游壓擾；切「有 flow 回授」vs「淨 damper 開度」；可加 **damper 開度起點** slider（demo baseline，唔算第五 stage） | 量 Q → controller 調 damper → 跟 flow setpoint；開度%≠實際 Q | ＋flow sensor（畫出）；可換低 Outlet；controller 殼可畫但**唔佔** ≤4 標籤 |

**點解 Fork A：** 外行人先明 CAV／VAV，先解剖 box，先控制鏈，先 flow sensor——主線全程留喺 CAV／VAV。

### 4.1 Tip／panel 定稿（故事粵語＋EN 名詞）

- **TIPS[1]：** `負荷升：VAV 加大風量跟；CAV 風量大致企定，靠其他手段跟（例如水溫／reheat）。`
- **Panel 1：** `同一 zone：睇 CAV 同 VAV 嘅 Q 點跟（或不跟）負荷。`
- **TIPS[2]：** `典型 single-duct VAV box：Inlet → damper → Outlet；actuator 郁 damper。`
- **Panel 2：** `撳圖上英文標籤睇邊件；主圖＝VAV box。`
- **TIPS[3]：** `zone／thermostat 同 flow setpoint 入 controller；controller 叫 actuator 郁 damper。`
- **Panel 3：** `控制層：sensor／setpoint → controller → actuator → damper。`
- **TIPS[4]：** `淨睇 damper 開度：上游壓一變，實際風量會飄。有 flow sensor，controller 先量到 Q，再調 damper 去跟 flow setpoint。`
- **Panel 4：** `切「有 flow 回授」vs「淨 damper 開度」；flow sensor 畫喺箱內。`
- **Toggle 主標（鎖定）：** `flow 回授`｜`淨 damper 開度`  
  （**唔**用 `PI`／`Venturi` 做 toggle 主標）
- **Toggle 細字：** 回授側 `flow sensor · 跟 flow setpoint`｜開度側 `只睇開度 % · 壓變 Q 飄`

**Layout clarifications（Beatrice PASS 2026-10-29｜答 Celine）：**
- Stage 4：`controller` **殼可繼續畫、唔上標籤**（標籤位讓俾 `flow sensor`）——控制鏈仍靠 tip 講。
- Stage 1：可 **dim foreshadow** actuator／殼、**唔標籤**（符合「可未標零件」）；唔強制 Inlet／Outlet。
- Stage 4：`damper 開度` slider＝**開度起點 demo**（配合壓擾）；保留。示意 % 只服務對照，唔當現場校驗。

### 4.2 Reheat tip（Justin：要｜唔獨立 stage）

**鎖定一句（細字／tip，可 Stage 1 旁或 eFoot 上）：**  
`CAV／VAV 都可以有 reheat（電熱／熱水再熱）——負荷低時仍要最少風量又唔好過凍；呢頁唔拆 reheat 成獨立 stage。`

### 4.3 Chrome（後備；入 build 時用）

| 位 | 定稿 |
|---|---|
| `#q-lead`（或 zone lead） | `Q／℃＝示意模型`（全頁唯一「示意」） |
| `#eFoot` | `本頁教 CAV／VAV 送風策略同典型 single-duct VAV box（含 flow sensor）。` |
| `#eFoot` 可選輕 aside（一句封頂；可刪） | `有產品會叫「跟住實際風量」嗰類做法 pressure-independent (PI)；唔喺本頁展開。` |
| `.demo-note` | `MVAC · bse-tools`（入 hub 後） |
| Hub card（later） | `CAV／VAV｜送風策略`（獨立卡；**唔**要求同卡硬綁 Venturi CTA） |

**刪自本頁主 chrome：** 「詳見 Venturi valve 工具」作 Stage 4／eFoot 主句；「機械 spring-cone」教學。

---

## 5. Show / Not show（v1 鎖定｜校正後）

**Show**
- CAV vs VAV 行為對照（Q vs 負荷）
- 典型 **single-duct VAV box**：damper、actuator、controller
- **flow sensor**（畫出）同 flow 回授對照
- flow setpoint／zone 溫度示意（一處 lead）
- **reheat** 一句 tip
- MVAC 定位

**Not show（v1）**
- Dual-duct、fan-powered、series／parallel fan、induction、VRF 對照
- 完整 BMS 畫面、BACnet 細節
- 製造商曲線表、真實校驗
- Bernoulli／throat／cone／spring-cone 物理
- 以連結／重教 **Venturi** 或 **PI** 做 Stage 4 或頁面主軸
- 醫院／OT 場景包裝
- 假「規範規定 XX L/s／ACH」死數

---

## 6. 誤解閘（必須；口語 tip）

1. **CAV ≠ 永遠「無控制」** — 風量企定，仲可以有溫度／reheat／水側跟負荷。  
2. **VAV ≠ 淨係改 damper 開度就完** — 實際 Q 仲受管壓影響；本頁 Stage 4 用 flow sensor 講清楚。  
3. **damper 開度 % ≠ 實際風量** — 壓變會令 Q 飄。  
4. **flow sensor 係量風、幫 controller 跟 setpoint** — 唔係本頁教另一種閥體物理。  
5. **MVAC，唔係 HVAC。**

---

## 7. 示意數字同模型規則

- Q／℃／%／壓擾：簡化模型；**示意只寫喺一處 lead**。  
- CAV mode：負荷變 → Q 近似持平。  
- VAV mode：負荷變 → Q 跟住變（有 min／max 帶示意即可）。  
- Stage 4：淨開度 → Q 明顯跟壓變；有 flow 回授 → Q 較跟 flow setpoint。  
- 唔寫「規範要求 XX Pa／ACH」；唔抄 proprietary 曲線。

---

## 8. Hub（later — Justin 叫先）

- `justinksw/bse-tools` → `tools/cav-vav/`（建議 slug）——**新頁**，主線 CAV／VAV  
- 唔開新 repo；唔放 bse-notes；唔走 PDF substance-design-notes。  
- **而家唔開 Celine mock／Jessie build。**

---

## 9. Locked decisions（Beatrice 2026-10-29｜Justin via Sua）

1. **Fork A：** 4-stage — 負荷策略 → VAV box 解剖 → controller → **flow sensor／flow 回授**。  
2. **flow sensor：** **要畫**（Stage 4 出場）。  
3. **reheat：** **要**——一句 tip；唔獨立 stage。  
4. **頁面主線：** **CAV vs VAV**＋single-duct VAV box；**唔**以連 Venturi／重教 PI 做 Stage 4 或頁面主軸。PI／Venturi 只可輕 aside（可刪）。  
5. **圖例：** 圖上 ≤4 可點標籤；無長 legend-bar。  
6. **用詞：** 物理／設備名詞畫面主標英文（§0）；故事句粵語 OK。  
7. **Build：** substance lock only；Celine／Jessie **HOLD** 直至 Justin 叫入 bse-tools。
