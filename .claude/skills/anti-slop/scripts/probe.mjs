#!/usr/bin/env node
// anti-slop / probe — rendered-page checks for accessibility, readability and the remaining
// Impeccable anti-pattern rules, re-implemented here (the Impeccable detector is a native binary we
// don't run; its rule catalog is vendor/impeccable/rules.md). Uses the Playwright that the
// environment already has; installs nothing.
//
//   node probe.mjs <url> [<url> ...] [--json]
//
// For each URL at 1440 and 390 px: scrolls the whole page (so reveals fire), then measures.
// Rule ids follow Impeccable's where one exists, so brand.json can re-level them in audit.mjs.
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch {
  console.error('playwright is not installed; probe needs it (it is pre-installed in cloud sessions).');
  process.exit(2);
}

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const urls = args.filter((a) => !a.startsWith('--'));
if (!urls.length) { console.error('usage: node probe.mjs <url> [...] [--json]'); process.exit(2); }

// Runs inside the page. Returns raw findings: { level, id, message, samples }.
const MEASURE = () => {
  const out = [];
  const add = (level, id, message, samples = []) => out.push({ level, id, message, samples: samples.slice(0, 5) });
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.visibility !== 'hidden' && cs.display !== 'none' && r.width > 0 && r.height > 0 && Number(cs.opacity) > 0.05;
  };
  const inUI = (el) => !!el.closest('[data-ui], [aria-hidden="true"]');
  const label = (el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''} "${(el.textContent || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 40)}"`;

  // ---- colour helpers (WCAG relative luminance) ----
  const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r, g, b, a }; };
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  // effective background: walk up until an opaque colour; images/gradients make it unknown
  const bgOf = (el) => {
    let layers = [];
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; }
    }
    let bg = { r: 255, g: 255, b: 255, a: 1 };
    for (const l of layers.reverse()) bg = blend(l, bg);
    return bg;
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

  // text leaves: elements with their own non-empty text
  const leaves = [...document.querySelectorAll('body *')].filter((el) => {
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH'].includes(el.tagName)) return false;
    return [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1) && visible(el);
  });

  // ---- low-contrast (WCAG AA) ----
  const low = [];
  for (const el of leaves) {
    if (inUI(el) || el.closest('[disabled]')) continue;
    const cs = getComputedStyle(el);
    const fg = parse(cs.color); const bg = bgOf(el);
    if (!fg || !bg) continue;
    const size = parseFloat(cs.fontSize); const bold = Number(cs.fontWeight) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const r = ratio(blend(fg, bg), bg);
    if (r < (large ? 3 : 4.5)) low.push(`${label(el)} ${r.toFixed(2)}:1 @${Math.round(size)}px`);
  }
  if (low.length) add('FAIL', 'low-contrast', `${low.length} text block(s) below WCAG AA contrast (4.5:1 body, 3:1 large).`, low);

  // ---- tiny / undersized text ----
  const tiny = leaves.filter((el) => !inUI(el) && parseFloat(getComputedStyle(el).fontSize) < 12 && el.textContent.trim().length > 2);
  if (tiny.length) add('FAIL', 'tiny-text', `${tiny.length} text block(s) under 12px.`, tiny.map(label));
  const ui = [...document.querySelectorAll('a[href], button, label, nav a')].filter((el) => visible(el) && !inUI(el) && parseFloat(getComputedStyle(el).fontSize) < 13 && el.textContent.trim());
  if (ui.length) add('WARN', 'undersized-ui-text', `${ui.length} link/button/label text(s) under 13px.`, ui.map(label));

  // ---- line length, leading, caps, tracking on running text ----
  const paras = leaves.filter((el) => /^(P|LI|DD|BLOCKQUOTE)$/.test(el.tagName) && el.textContent.trim().length > 120 && !inUI(el));
  const long = paras.filter((el) => { const cs = getComputedStyle(el); const chars = el.getBoundingClientRect().width / (parseFloat(cs.fontSize) * 0.5); return chars > 85; });
  if (long.length) add('WARN', 'line-length', `${long.length} paragraph(s) run past ~80 characters per line.`, long.map(label));
  const tight = paras.filter((el) => { const cs = getComputedStyle(el); const lh = parseFloat(cs.lineHeight); return lh && lh / parseFloat(cs.fontSize) < 1.3; });
  if (tight.length) add('WARN', 'tight-leading', `${tight.length} paragraph(s) with line height under 1.3.`, tight.map(label));
  const caps = paras.filter((el) => getComputedStyle(el).textTransform === 'uppercase');
  if (caps.length) add('FAIL', 'all-caps-body', `${caps.length} running-text block(s) set in all caps.`, caps.map(label));
  const wide = paras.filter((el) => { const cs = getComputedStyle(el); return parseFloat(cs.letterSpacing) / parseFloat(cs.fontSize) > 0.05; });
  if (wide.length) add('WARN', 'wide-tracking', `${wide.length} running-text block(s) tracked wider than 0.05em.`, wide.map(label));
  const justified = paras.filter((el) => getComputedStyle(el).textAlign === 'justify');
  if (justified.length) add('WARN', 'justified-text', `${justified.length} justified paragraph(s).`, justified.map(label));

  // ---- headings ----
  const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible);
  const h1s = hs.filter((h) => h.tagName === 'H1');
  if (h1s.length !== 1) add('FAIL', 'h1-count', `${h1s.length} visible h1 element(s); a page has exactly one.`, h1s.map(label));
  const skips = [];
  hs.reduce((prev, h) => { const lvl = Number(h.tagName[1]); if (prev && lvl > prev + 1) skips.push(`${label(h)} after h${prev}`); return lvl; }, 0);
  if (skips.length) add('WARN', 'skipped-heading', `${skips.length} heading level skip(s).`, skips);

  // ---- images ----
  const imgs = [...document.querySelectorAll('img')];
  const noAlt = imgs.filter((i) => !i.hasAttribute('alt'));
  if (noAlt.length) add('FAIL', 'img-alt', `${noAlt.length} <img> without an alt attribute (use alt="" when decorative).`, noAlt.map((i) => i.currentSrc || i.src));
  const broken = imgs.filter((i) => i.complete && i.naturalWidth === 0 && visible(i));
  if (broken.length) add('FAIL', 'broken-image', `${broken.length} broken image(s).`, broken.map((i) => i.src));
  const noDims = imgs.filter((i) => !(i.getAttribute('width') && i.getAttribute('height')) && getComputedStyle(i).position !== 'absolute');
  if (noDims.length) add('WARN', 'img-dimensions', `${noDims.length} in-flow <img> without width/height attributes (layout shift).`, noDims.map((i) => (i.currentSrc || i.src).split('/').pop()));

  // ---- forms ----
  const fields = [...document.querySelectorAll('input, textarea, select')].filter((f) => f.type !== 'hidden' && visible(f) && !f.closest('[aria-hidden="true"]'));
  const unlabeled = fields.filter((f) => !(f.labels && f.labels.length) && !f.getAttribute('aria-label') && !f.getAttribute('aria-labelledby'));
  if (unlabeled.length) add('FAIL', 'form-label', `${unlabeled.length} form field(s) without a label.`, unlabeled.map((f) => f.name || f.id || f.type));
  const noAuto = fields.filter((f) => /^(name|phone|tel|email|company|organization)$/i.test(f.name) && !f.getAttribute('autocomplete'));
  if (noAuto.length) add('WARN', 'form-autocomplete', `${noAuto.length} personal-data field(s) without autocomplete.`, noAuto.map((f) => f.name));
  const smallInputs = fields.filter((f) => parseFloat(getComputedStyle(f).fontSize) < 16);
  if (smallInputs.length) add('FAIL', 'input-zoom', `${smallInputs.length} field(s) under 16px: iOS zooms the page into them.`, smallInputs.map((f) => f.name));

  // ---- controls: names and touch targets ----
  const controls = [...document.querySelectorAll('a[href], button, [role="button"], input[type="submit"], summary')].filter((c) => visible(c) && !inUI(c));
  const nameless = controls.filter((c) => !(c.textContent.trim() || c.getAttribute('aria-label') || c.getAttribute('aria-labelledby') || c.querySelector('img[alt]:not([alt=""])') || c.title));
  if (nameless.length) add('FAIL', 'control-name', `${nameless.length} link/button(s) with no accessible name.`, nameless.map((c) => c.outerHTML.slice(0, 80)));
  const small = controls.filter((c) => { const r = c.getBoundingClientRect(); const inline = getComputedStyle(c).display === 'inline' && c.closest('p, li, dd'); return !inline && (r.width < 24 || r.height < 24); });
  if (small.length) add('WARN', 'touch-target', `${small.length} control(s) under the 24×24px minimum target (WCAG 2.2).`, small.map((c) => `${label(c)} ${Math.round(c.getBoundingClientRect().width)}×${Math.round(c.getBoundingClientRect().height)}`));
  const clickDivs = [...document.querySelectorAll('div[onclick], span[onclick]')];
  if (clickDivs.length) add('FAIL', 'click-div', `${clickDivs.length} div/span with a click handler; use <button> or <a>.`, clickDivs.map(label));

  // ---- document ----
  if (!document.documentElement.lang) add('FAIL', 'html-lang', '<html> has no lang attribute.');
  const vp = document.querySelector('meta[name="viewport"]')?.content || '';
  if (/user-scalable\s*=\s*no|maximum-scale\s*=\s*1(\.0)?\b/.test(vp)) add('FAIL', 'zoom-disabled', 'The viewport meta disables zoom.');
  if (!document.querySelector('meta[name="theme-color"]')) add('WARN', 'theme-color', 'No theme-color meta.');
  const skip = [...document.querySelectorAll('a[href^="#"]')].find((a) => /nội dung|content|main/i.test(a.textContent) && a.compareDocumentPosition(document.querySelector('main') || document.body) & 4);
  if (!skip) add('WARN', 'skip-link', 'No skip link to the main content for keyboard users.');
  const ids = {}; for (const el of document.querySelectorAll('[id]')) ids[el.id] = (ids[el.id] || 0) + 1;
  const dup = Object.entries(ids).filter(([, n]) => n > 1).map(([k]) => k);
  if (dup.length) add('FAIL', 'duplicate-id', `${dup.length} duplicate id(s).`, dup);

  // ---- overflow ----
  if (document.documentElement.scrollWidth > window.innerWidth + 1) add('FAIL', 'side-scroll', `The page scrolls sideways (${document.documentElement.scrollWidth}px wide in a ${window.innerWidth}px window).`);

  // ---- remaining Impeccable visual tells ----
  const all = [...document.querySelectorAll('body *')].filter(visible).slice(0, 6000);
  const sideTab = all.filter((el) => { const cs = getComputedStyle(el); const sides = ['Left', 'Right', 'Top', 'Bottom'].map((s) => parseFloat(cs[`border${s}Width`])); const thick = sides.filter((w) => w >= 3).length; return thick === 1 && sides.filter((w) => w > 0).length === 1 && parseFloat(cs.borderRadius) > 0 && el.getBoundingClientRect().height > 60; });
  if (sideTab.length) add('WARN', 'side-tab', `${sideTab.length} card(s) with a thick accent border on one side.`, sideTab.map(label));
  const glow = all.filter((el) => { const s = getComputedStyle(el).boxShadow + ' ' + getComputedStyle(el).textShadow; return /rgba?\((?!0, 0, 0)[^)]*\)\s+0px\s+0px\s+([1-9]\d)px/.test(s); });
  if (glow.length) add('FAIL', 'dark-glow', `${glow.length} element(s) with a coloured glow shadow.`, glow.map(label));
  const halo = all.filter((el) => /radial-gradient/.test(getComputedStyle(el).backgroundImage) && !/mask/.test(el.className));
  if (halo.length) add('FAIL', 'radial-halo', `${halo.length} element(s) with a radial-gradient background.`, halo.map(label));
  const cards = all.filter((el) => { const cs = getComputedStyle(el); return parseFloat(cs.borderRadius) >= 8 && (cs.boxShadow !== 'none' || parseFloat(cs.borderTopWidth) >= 1) && el.getBoundingClientRect().height > 80 && !inUI(el); });
  const nested = cards.filter((c) => cards.some((p) => p !== c && p.contains(c)));
  if (nested.length) add('WARN', 'nested-cards', `${nested.length} card(s) inside another card.`, nested.map(label));
  const marquee = all.filter((el) => { const cs = getComputedStyle(el); return cs.animationIterationCount === 'infinite' && /translate|marquee/i.test(cs.animationName) && !inUI(el); });
  if (marquee.length) add('WARN', 'marquee', `${marquee.length} auto-scrolling element(s).`, marquee.map(label));
  const hidden = leaves.filter((el) => Number(getComputedStyle(el).opacity) < 0.05);
  if (hidden.length) add('FAIL', 'content-hidden-at-rest', `${hidden.length} text block(s) still invisible after scrolling the whole page.`, hidden.map(label));

  // ---- copy ----
  const text = document.body.innerText;
  const dashes = (text.match(/—/g) || []).length;
  if (dashes > 6) add('WARN', 'em-dash-overuse', `${dashes} em dashes in the visible copy.`);
  const dots = (text.match(/\.\.\.(?!\.)/g) || []).length;
  if (dots) add('WARN', 'ellipsis', `${dots} "..." where "…" belongs.`);
  return out;
};

// tabs through the page and checks every focused control shows a visible focus indicator
async function focusCheck(page) {
  return page.evaluate(async () => {
    const controls = [...document.querySelectorAll('a[href], button, input, textarea, select, summary, [tabindex]:not([tabindex="-1"])')]
      .filter((c) => { const r = c.getBoundingClientRect(); const cs = getComputedStyle(c); return r.width > 0 && cs.visibility !== 'hidden' && !c.closest('[aria-hidden="true"], [inert]'); })
      .slice(0, 80);
    const bad = [];
    for (const c of controls) {
      c.focus({ preventScroll: true });
      if (document.activeElement !== c) continue;
      const cs = getComputedStyle(c);
      const ring = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || cs.boxShadow !== 'none';
      if (!ring && c.matches(':focus-visible') === false) continue; // mouse-only styling is fine
      if (!ring) bad.push(c.outerHTML.slice(0, 70));
    }
    document.activeElement?.blur();
    return bad;
  });
}

const results = [];
const browser = await chromium.launch();
try {
  for (const url of urls) {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: width > 800 ? 900 : 844 } });
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(url, { waitUntil: 'networkidle' });
      const H = await page.evaluate(() => document.documentElement.scrollHeight);
      const step = width > 800 ? 900 : 844;
      for (let y = 0; y < H; y += step / 2) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(80); }
      await page.waitForTimeout(1200);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.keyboard.press('Tab');
      const findings = await page.evaluate(MEASURE);
      const noRing = await focusCheck(page);
      if (noRing.length) findings.push({ level: 'FAIL', id: 'focus-visible', message: `${noRing.length} control(s) show no focus indicator when focused from the keyboard.`, samples: noRing.slice(0, 5) });
      if (errors.length) findings.push({ level: 'FAIL', id: 'script-error', message: `${errors.length} uncaught script error(s) on load.`, samples: errors.slice(0, 3) });
      for (const f of findings) results.push({ ...f, url, width });
      await page.close();
    }
  }
} finally {
  await browser.close();
}

// merge identical findings across widths
const merged = [];
for (const f of results) {
  const same = merged.find((m) => m.url === f.url && m.id === f.id && m.level === f.level);
  if (same) { same.alsoAt = [...(same.alsoAt || []), f.width]; continue; }
  merged.push(f);
}

if (asJson) { console.log(JSON.stringify({ findings: merged }, null, 1)); process.exit(merged.some((f) => f.level === 'FAIL') ? 1 : 0); }
console.log('ANTI-SLOP · PROBE (accessibility, readability, Impeccable tells)');
for (const url of urls) {
  const list = merged.filter((f) => f.url === url);
  console.log(`\n${url}${list.length ? '' : '  ✓ nothing found'}`);
  for (const f of list) {
    console.log(`  ${f.level} [${f.id}] @${f.width}${f.alsoAt ? '+' + f.alsoAt.join('+') : ''}  ${f.message}`);
    for (const s of f.samples || []) console.log(`      ${s}`);
  }
}
const fails = merged.filter((f) => f.level === 'FAIL').length;
console.log(`\nRESULT: ${fails} FAIL, ${merged.length - fails} WARN`);
process.exit(fails ? 1 : 0);
