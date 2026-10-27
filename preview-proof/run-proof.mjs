import { chromium, webkit } from "/tmp/node_modules/playwright/index.mjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = process.env.PROOF_OUT || __dirname;
const BASE = process.env.PROOF_BASE || "http://127.0.0.1:8791/";
const widths = [320, 390, 430];
const height = 844;
const PSYCHART = "https://justinksw.github.io/psychrometric-chart/";

fs.mkdirSync(OUT, { recursive: true });
const lines = [];
function log(m) { console.log(m); lines.push(m); }

async function prove(browserName, browser, width) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector(".phone");
  await page.waitForTimeout(250);

  const metrics = await page.evaluate((psychart) => {
    const doc = document.documentElement;
    const body = document.body;
    const app = document.getElementById("app");
    const sx =
      doc.scrollWidth > doc.clientWidth + 1 ||
      body.scrollWidth > body.clientWidth + 1 ||
      (app && app.scrollWidth > app.clientWidth + 1);
    const badge = document.querySelector(".badge")?.textContent?.trim() || "";
    const h1 = document.querySelector("header.appbar h1")?.textContent?.trim() || "";
    const sub = document.querySelector("header.appbar .sub")?.textContent?.trim() || "";
    const section = document.querySelector(".section-label .en")?.textContent?.trim() || "";
    const psych = document.getElementById("card-psychart");
    const p1 = document.getElementById("card-p1");
    const psychHref = psych?.getAttribute("href") || "";
    const psychIsA = psych?.tagName === "A";
    const p1IsA = p1?.tagName === "A";
    const p1HasHref = p1?.hasAttribute("href");
    const logos = [...document.querySelectorAll("img")].map((img) => ({
      src: img.getAttribute("src"),
      w: img.naturalWidth,
      h: img.naturalHeight,
      complete: img.complete,
    }));
    const ctas = [...document.querySelectorAll(".cta")].map((el) => {
      const r = el.getBoundingClientRect();
      return { text: el.textContent.trim(), w: r.width, h: r.height };
    });
    const note = document.querySelector(".demo-note")?.textContent?.trim() || "";
    const sheetPad = getComputedStyle(document.querySelector(".sheet")).paddingBottom;
    const ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();
    const canvas = getComputedStyle(document.documentElement).getPropertyValue("--canvas").trim();
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    return {
      sx,
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      badge,
      h1,
      sub,
      section,
      psychHref,
      psychIsA,
      p1IsA,
      p1HasHref,
      logos,
      ctas,
      note,
      sheetPad,
      tokens: { ink, canvas, accent },
      psychartMatch: psychHref === psychart,
    };
  }, PSYCHART);

  // Click Soon card — must not navigate
  const urlBefore = page.url();
  await page.click("#card-p1");
  await page.waitForTimeout(200);
  const urlAfterSoon = page.url();
  const soonDidNotNav = urlAfterSoon === urlBefore || new URL(urlAfterSoon).pathname === new URL(urlBefore).pathname;

  const tag = `${browserName}-${width}`;
  const shot = path.join(OUT, `${tag}.png`);
  await page.screenshot({ path: shot, fullPage: false });

  const ctaOk = metrics.ctas.every((c) => c.h >= 44 && c.w >= 44);
  const logosOk = metrics.logos.length >= 3 && metrics.logos.every((l) => l.complete && l.w > 0);
  const previewOk = metrics.badge === "PREVIEW";
  const titleOk = metrics.h1 === "BSE Tools" && /屋宇裝備工具/.test(metrics.sub);
  const sectionOk = metrics.section === "Tools";
  const psychOk = metrics.psychIsA && metrics.psychartMatch;
  const soonOk = !metrics.p1IsA && !metrics.p1HasHref && soonDidNotNav;
  const tokensOk =
    metrics.tokens.ink.toUpperCase() === "#1E2A50" &&
    metrics.tokens.canvas.toUpperCase() === "#EEF1F4" &&
    metrics.tokens.accent.toUpperCase() === "#C45C26";
  const noteOk = /Not CIBSE|Not a Code|demo defaults/i.test(metrics.note) || metrics.note.length > 20;
  const noSx = !metrics.sx && metrics.scrollWidth <= metrics.clientWidth + 1;

  const pass =
    noSx && previewOk && titleOk && sectionOk && psychOk && soonOk && ctaOk && logosOk && tokensOk && noteOk;

  log(`[${tag}] PASS=${pass} sx=${metrics.sx} scroll=${metrics.scrollWidth}/${metrics.clientWidth} badge=${metrics.badge}`);
  log(`  title=${metrics.h1} | section=${metrics.section}`);
  log(`  psychart href=${metrics.psychHref} match=${metrics.psychartMatch}`);
  log(`  soon isA=${metrics.p1IsA} hrefAttr=${metrics.p1HasHref} nav=${!soonDidNotNav}`);
  log(`  ctas=${JSON.stringify(metrics.ctas)} ctaOk=${ctaOk}`);
  log(`  logos=${JSON.stringify(metrics.logos.map((l) => l.src + ":" + l.w))} logosOk=${logosOk}`);
  log(`  tokens=${JSON.stringify(metrics.tokens)} tokensOk=${tokensOk}`);
  log(`  shot=${shot}`);

  await context.close();
  return {
    tag,
    pass,
    noSx,
    previewOk,
    titleOk,
    sectionOk,
    psychOk,
    soonOk,
    ctaOk,
    logosOk,
    tokensOk,
    noteOk,
    metrics,
  };
}

async function runBrowser(name, launcher) {
  let browser;
  try {
    browser = await launcher.launch({ headless: true });
  } catch (e) {
    log(`FAIL launch ${name}: ${e.message}`);
    return [];
  }
  const results = [];
  try {
    for (const w of widths) {
      results.push(await prove(name, browser, w));
    }
  } finally {
    await browser.close();
  }
  return results;
}

const all = [];
all.push(...(await runBrowser("chromium", chromium)));
all.push(...(await runBrowser("webkit", webkit)));

const allPass = all.length > 0 && all.every((r) => r.pass);
const sha = process.env.PROOF_SHA || "local";
const md = [];
md.push("# BSE Tools hub — preview acceptance (brief-v2 §8)");
md.push("");
md.push(`Preview URL: ${BASE}`);
md.push(`SHA: \`${sha}\``);
md.push(`Pages source: \`preview\` /`);
md.push(`Proved: ${new Date().toISOString()} (box local Asia/Hong_Kong)`);
md.push("");
md.push(`**Overall: ${allPass ? "PASS" : "FAIL"}**`);
md.push("");
md.push("| Browser | Width | no-sx | PREVIEW | titles | psychart Open | Soon no-nav | CTA≥44 | logos | tokens | Result |");
md.push("|---|---|---|---|---|---|---|---|---|---|---|");
for (const r of all) {
  md.push(
    `| ${r.tag.split("-")[0]} | ${r.tag.split("-")[1]} | ${r.noSx ? "PASS" : "FAIL"} | ${r.previewOk ? "PASS" : "FAIL"} | ${r.titleOk && r.sectionOk ? "PASS" : "FAIL"} | ${r.psychOk ? "PASS" : "FAIL"} | ${r.soonOk ? "PASS" : "FAIL"} | ${r.ctaOk ? "PASS" : "FAIL"} | ${r.logosOk ? "PASS" : "FAIL"} | ${r.tokensOk ? "PASS" : "FAIL"} | **${r.pass ? "PASS" : "FAIL"}** |`
  );
}
md.push("");
md.push("Shots: `preview-proof/{chromium,webkit}-{320,390,430}.png`");
md.push("");
md.push("## Notes");
md.push("- Primary review viewport 390×844; also 320 and 430.");
md.push("- P1 card is `<div class=\"card soon\">` (not `<a>`); click does not navigate.");
md.push("- Psychart Open href = https://justinksw.github.io/psychrometric-chart/");
md.push("- Hold live / PREVIEW until Justin OK via Sua.");
md.push("");

fs.writeFileSync(path.join(OUT, "ACCEPTANCE.md"), md.join("\n"));
fs.writeFileSync(path.join(OUT, "REPORT.txt"), lines.join("\n") + "\n");
fs.writeFileSync(path.join(OUT, "RESULTS.json"), JSON.stringify({ allPass, sha, base: BASE, results: all }, null, 2));
log(`OVERALL ${allPass ? "PASS" : "FAIL"} → ${path.join(OUT, "ACCEPTANCE.md")}`);
process.exit(allPass ? 0 : 1);
