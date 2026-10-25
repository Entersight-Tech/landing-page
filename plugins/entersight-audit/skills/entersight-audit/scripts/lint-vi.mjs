#!/usr/bin/env node
// entersight-audit / lint-vi — scans the Vietnamese copy in source files for the phrases and habits
// that make a page read as generated. The upstream lint only knows English stock phrases.
//
//   node lint-vi.mjs [files or directories ...] [--json]
//
// Exit code 1 when any FAIL is found. Zero dependencies. A line that must keep a flagged
// phrase for a real reason (a client's own quote, a product name) can carry `slop-ok`.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative, resolve } from 'node:path';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const roots = args.filter((a) => !a.startsWith('--'));
if (!roots.length) roots.push('src');
const EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mdx', '.html', '.md']);
const SKIP = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'out', '.vercel', 'vendor', '.anti-slop', '.entersight-audit', '.taste-skill']);

const files = [];
const walk = (p) => {
  let st;
  try { st = statSync(p); } catch { return; }
  if (st.isDirectory()) { for (const f of readdirSync(p)) if (!SKIP.has(f) && !f.startsWith('.')) walk(join(p, f)); }
  else if (EXT.has(extname(p)) && !/\.d\.ts$/.test(p)) files.push(p);
};
for (const r of roots) walk(resolve(r));

const H = '(?:hóa|hoá)'; // both spellings of -hoá are in use
// [level, id, regex, message]. Matched against each line, lower-cased and NFC-normalised.
const R = [
  // agency vocabulary: says nothing a competitor couldn't say
  ['FAIL', 'stock-vi', new RegExp(`kiến tạo|hệ sinh thái|toàn diện|bứt phá|đột phá|đòn bẩy|nâng tầm|vượt trội|chuyển mình|kỷ nguyên (số|mới)|cách mạng ${H}|hiện thực ${H}|tái định nghĩa|định hình tương lai|tầm cao mới|khai phóng|tiên phong|dẫn đầu xu hướng|đẳng cấp|chuẩn mực|liền mạch|điểm rơi cảm xúc|chạm đến cảm xúc|một cách tự nhiên nhất|không giới hạn|mọi điểm chạm|tối đa ${H}|sức bật|chìa khóa (vàng|thành công)|giải pháp (tối ưu|toàn diện|thông minh)|tái cấu trúc|làm chủ mọi|tăng trưởng bền vững|tận tâm|chuyên nghiệp và`, 'u'),
    'Agency phrase. Say the specific thing: what changes, for whom, by how much.'],
  ['WARN', 'soft-vi', new RegExp(`điểm chạm|tối ưu|thông minh|bền vững|hành trình|đồng hành|giá trị cốt lõi|hiệu quả cao|nhanh chóng|dễ dàng|hàng đầu|uy tín|chất lượng cao|tối ưu ${H}|số ${H} quy trình|chuyển đổi số`, 'u'),
    'Vague word. Fine once if it is the precise term; otherwise replace it with the concrete fact.'],
  // shapes
  ['WARN', 'correction-vi', /không (chỉ|đơn thuần|phải) (là )?.{1,60}(mà còn|mà là)/u, '"Không chỉ X mà còn Y": the generated correction shape. State Y.'],
  ['WARN', 'proof-vi', /\b\d{1,3}(?:[.,]\d+)?\s?%|\b\d+\s?(?:x|×)\b|\b\d+(?:[.,]\d{3})*\s?\+|100%|24\/7/u, 'A number. Check it has a source on the page (a case, a report) and is not rounded marketing.'],
  ['WARN', 'cta-vi', />\s*(tìm hiểu thêm|khám phá ngay|bắt đầu ngay|xem thêm|liên hệ ngay|đăng ký ngay)\s*</u, 'Generic button label. Name the action and the thing ("Kể vấn đề của bạn", "Xem dự án Oni").'],
  ['WARN', 'stiff-vi', /quý khách|quý doanh nghiệp|quý đối tác|kính mời/u, 'Stiff address. Talk to one person: "bạn", or the role ("chủ cửa hàng").'],
  ['WARN', 'exclaim-vi', /[a-zà-ỹ]{2,}!\s*["'`<]/u, 'Exclamation in copy. Let the fact carry the weight.'],
  ['WARN', 'jargon-vi', /\b(ai-powered|all-in-one|data-driven|end-to-end|omnichannel|game[- ]changer|growth hacking|next[- ]level|seamless|insight sâu)\b/iu, 'English buzzword in Vietnamese copy. Use the Vietnamese a customer would say.'],
];

const vi = /[à-ỹđ]/u; // only judge lines that actually carry Vietnamese (or the number/jargon checks)
const findings = [];
for (const file of files) {
  const rel = relative(process.cwd(), file).split('\\').join('/');
  const text = readFileSync(file, 'utf8');
  let dashes = 0, solutions = 0;
  text.split(/\r?\n/).forEach((raw, i) => {
    if (/slop-ok/.test(raw)) return;
    if (/^\s*(\/\/|\/\*|\*|import |export \{|<!--)/.test(raw)) return; // comments and imports are not copy
    const code = raw.replace(/\/\/.*$|\/\*.*?\*\//g, '');
    const line = code.normalize('NFC').toLowerCase();
    if (!vi.test(line) && !/(ai-powered|all-in-one|data-driven|seamless)/i.test(line)) return;
    dashes += (code.match(/—/g) || []).length;
    solutions += (line.match(/giải pháp/g) || []).length;
    for (const [level, id, re, message] of R) {
      if (id === 'proof-vi' && !vi.test(line)) continue;
      const m = line.match(re);
      if (m) findings.push({ level, id, file: rel, line: i + 1, match: m[0].trim().slice(0, 70), message, text: code.trim().slice(0, 140) });
    }
  });
  if (dashes > 4) findings.push({ level: 'WARN', id: 'em-dash-vi', file: rel, line: 0, match: `${dashes} em dashes`, message: 'Em-dash habit. Most of these want a full stop or a comma.' });
  if (solutions > 3) findings.push({ level: 'WARN', id: 'giai-phap', file: rel, line: 0, match: `"giải pháp" ×${solutions}`, message: '"Giải pháp" stands in for the thing itself. Name what it is.' });
}

if (asJson) {
  console.log(JSON.stringify({ files: files.length, findings }, null, 1));
  process.exit(findings.some((f) => f.level === 'FAIL') ? 1 : 0);
}
const byId = new Map();
for (const f of findings) { const k = f.level + ' ' + f.id; if (!byId.has(k)) byId.set(k, []); byId.get(k).push(f); }
console.log(`ANTI-SLOP · LINT-VI   ${files.length} file(s)`);
if (!findings.length) console.log('\nNo stock Vietnamese phrases found. Still read the copy: a meter cannot hear a voice.');
for (const lvl of ['FAIL', 'WARN']) {
  const keys = [...byId.keys()].filter((k) => k.startsWith(lvl));
  if (!keys.length) continue;
  console.log(`\n${lvl}`);
  for (const k of keys) {
    const list = byId.get(k);
    console.log(`  [${list[0].id}] ${list[0].message}  (${list.length}×)`);
    for (const f of list.slice(0, 8)) console.log(`      ${f.file}:${f.line}  «${f.match}»`);
    if (list.length > 8) console.log(`      … ${list.length - 8} more`);
  }
}
const fails = findings.filter((f) => f.level === 'FAIL').length;
console.log(`\nRESULT: ${fails} FAIL, ${findings.length - fails} WARN`);
process.exit(fails ? 1 : 0);
