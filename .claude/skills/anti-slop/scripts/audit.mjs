#!/usr/bin/env node
// anti-slop / audit — one command for the measurable part of an AI-slop audit:
//   1. the vendored taste-skill source lint (visual tells in CSS/TSX),
//   2. lint-vi (Vietnamese copy tells, which the upstream lint cannot read),
//   3. the vendored taste-skill browser inspector, per URL, at 1440 / 768 / 390,
// then re-levels every finding with ../brand.json (fail / warn / allow + why).
//
//   node .claude/skills/anti-slop/scripts/audit.mjs [--src src] [--url http://localhost:3000/ ...] [--json]
//
// Run from the project root. --url wants a production server (next build && next start);
// without --url only the two source scans run. Exit code 1 while any FAIL remains.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, chmodSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const skill = resolve(here, '..');
const vendor = join(skill, 'vendor', 'taste-skill', 'scripts');
const brand = JSON.parse(readFileSync(join(skill, 'brand.json'), 'utf8'));
const rules = brand.rules || {};

const args = process.argv.slice(2);
const asJson = args.includes('--json');
// --src a b c and --src a --src b both work: a flag takes every value up to the next flag
const opt = (name) => {
  const out = [];
  args.forEach((a, i) => {
    if (a !== '--' + name) return;
    for (let k = i + 1; k < args.length && !args[k].startsWith('--'); k++) out.push(args[k]);
  });
  return out;
};
const src = opt('src').length ? opt('src') : ['src'];
const urls = opt('url');
const out = resolve('.anti-slop');
mkdirSync(out, { recursive: true });

const runJson = (cmd, argv, env = {}) => {
  const r = spawnSync(cmd, argv, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, env: { ...process.env, ...env } });
  try { return JSON.parse(r.stdout); } catch { return { error: (r.stderr || r.stdout || '').trim().split('\n').slice(-6).join('\n') }; }
};

// Chrome refuses to start as root without --no-sandbox. That only happens in throwaway
// containers (CI, cloud sessions); there, wrap the browser with the flag. Never on a laptop.
function chromeEnv() {
  if (process.env.CHROME_PATH || process.getuid?.() !== 0) return {};
  const found = [];
  for (const base of ['/opt/pw-browsers', join(process.env.HOME || '/root', '.cache', 'ms-playwright')]) {
    if (!existsSync(base)) continue;
    for (const d of readdirSync(base)) for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome']) if (existsSync(join(base, d, sub))) found.push(join(base, d, sub));
  }
  if (!found.length) return {};
  const wrapper = join(out, 'chrome-nosandbox');
  writeFileSync(wrapper, `#!/bin/sh\nexec "${found[0]}" --no-sandbox "$@"\n`);
  chmodSync(wrapper, 0o755);
  return { CHROME_PATH: wrapper };
}

const relevel = (f, source) => {
  const r = rules[f.id];
  if (!r) return { ...f, source };
  if (r.level === 'allow') return { ...f, source, level: 'ALLOW', why: r.why };
  return { ...f, source, level: r.level.toUpperCase(), why: r.why };
};

const all = [];
const errors = [];

const lint = runJson('node', [join(vendor, 'lint.mjs'), ...src, '--json']);
if (lint.error) errors.push('lint: ' + lint.error);
const srcLines = new Map();
const lineAt = (file, n) => {
  if (!srcLines.has(file)) { try { srcLines.set(file, readFileSync(file, 'utf8').split(/\r?\n/)); } catch { srcLines.set(file, []); } }
  return srcLines.get(file)[n - 1] || '';
};
for (const f of lint.findings || []) {
  // `min-height: 100vh` directly followed by `100svh`/`100dvh` is an old-browser fallback, not a jump
  if (f.id === 'h-screen' && /\d+[sd]vh/.test(lineAt(f.file, f.line + 1))) {
    all.push({ ...f, source: 'lint', level: 'ALLOW', why: 'Fallback line; the next declaration uses svh/dvh.' });
    continue;
  }
  // ★ / ☆ next to a rating is data (the Maps listing on /etstar), not an emoji icon
  if (f.id === 'emoji' && /^[★☆]+$/u.test(f.match)) {
    all.push({ ...f, source: 'lint', level: 'ALLOW', why: 'Star rating glyph, not an emoji icon.' });
    continue;
  }
  all.push(relevel(f, 'lint'));
}

const vi = runJson('node', [join(here, 'lint-vi.mjs'), ...src, '--json']);
if (vi.error) errors.push('lint-vi: ' + vi.error);
for (const f of vi.findings || []) all.push(relevel(f, 'copy'));

const shots = [];
const env = urls.length ? chromeEnv() : {};
for (const url of urls) {
  const slug = new URL(url).pathname.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
  const dir = join(out, 'inspect', slug);
  const rep = runJson('node', [join(vendor, 'inspect.mjs'), url, '--out', dir, '--json'], env);
  if (rep.error) { errors.push(`inspect ${url}: ${rep.error}`); continue; }
  for (const f of rep.findings || []) {
    if (f.id === 'emoji' && /:\s*[★☆,\s]+$/u.test(f.message)) {
      all.push({ ...f, file: url, source: 'inspect', level: 'ALLOW', why: 'Star rating glyph, not an emoji icon.' });
      continue;
    }
    all.push(relevel({ ...f, file: url }, 'inspect'));
  }
  for (const im of rep.images || []) shots.push(...[im.fold, ...(im.pages || [])].filter(Boolean));
}

const report = { at: new Date().toISOString(), src, urls, findings: all, screenshots: shots, errors };
writeFileSync(join(out, 'report.json'), JSON.stringify(report, null, 1));
if (asJson) { console.log(JSON.stringify(report, null, 1)); process.exit(all.some((f) => f.level === 'FAIL') ? 1 : 0); }

const line = (s = '') => console.log(s);
line(`ANTI-SLOP · AUDIT   src: ${src.join(', ')}${urls.length ? '   urls: ' + urls.join(', ') : ''}`);
for (const lvl of ['FAIL', 'WARN']) {
  const list = all.filter((f) => f.level === lvl);
  if (!list.length) continue;
  line(`\n${lvl}${lvl === 'FAIL' ? ' — fix every one' : ' — fix, or defend in one sentence'}`);
  const groups = new Map();
  for (const f of list) { const k = `${f.source}:${f.id}`; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(f); }
  for (const [k, g] of groups) {
    line(`  [${k}] ${g[0].message}  (${g.length}×)${g[0].why ? `\n      policy: ${g[0].why}` : ''}`);
    for (const f of g.slice(0, 5)) line(`      ${f.file}${f.line ? ':' + f.line : ''}${f.width ? ' @' + f.width + 'px' : ''}${f.match ? '  «' + f.match + '»' : ''}`);
    if (g.length > 5) line(`      … ${g.length - 5} more`);
  }
}
const allowed = all.filter((f) => f.level === 'ALLOW');
if (allowed.length) {
  line('\nALLOWED by brand.json (not counted):');
  const ids = [...new Set(allowed.map((f) => f.id))];
  for (const id of ids) {
    const f = allowed.find((x) => x.id === id);
    line(`  [${id}] ×${allowed.filter((x) => x.id === id).length} — ${f.why}`);
  }
}
if (shots.length) { line('\nLOOK AT THE RENDER before judging quality:'); for (const s of shots) line('  ' + s); }
for (const e of errors) line(`\nERROR ${e}`);
const fails = all.filter((f) => f.level === 'FAIL').length;
const warns = all.filter((f) => f.level === 'WARN').length;
line(`\nRESULT: ${fails} FAIL, ${warns} WARN, ${allowed.length} allowed by policy   (report: .anti-slop/report.json)`);
line('The meters are the floor. Copy voice, the idea and the screenshots still need a reader: see SKILL.md steps 2 and 4.');
process.exit(fails ? 1 : 0);
