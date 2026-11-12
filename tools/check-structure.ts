// Asserts the tree matches docs/ARCHITECTURE.md ("## Tree" table):
//  1. every documented path exists;  2. every top/second-level dir on disk is documented;
//  3. no orphan files (root files listed, others under a documented dir);  4. README.md in every non-generated dir;
//  5. no duplication with src: third_party clone names vs $SRC_ROOT/third_party + pins, tracked files vs pinned dirs (path tail + sha256);
//  6. no upward layer deps in machine files (toml/json/conf/cmake);  7. no absolute paths in tools/*.ts.
// Exit 1 on any failure. Usage: bun tools/check-structure.ts [--json]
import { join, dirname } from "node:path";
import { existsSync, readdirSync, statSync } from "node:fs";
import { ROOT, SRC } from "./lib/identity.ts";

const arch = await Bun.file(join(ROOT, "docs", "ARCHITECTURE.md")).text();
const treeSec = arch.split("## Tree")[1].split("\n## ")[0];
const rows = [...treeSec.matchAll(/^\| `([^`]+)` \| ([\d-]) \| (.+) \|$/gm)].map((m) => ({ path: m[1], layer: m[2] === "-" ? -1 : +m[2], purpose: m[3] }));
const dirs = new Map(rows.filter((r) => r.path.endsWith("/")).map((r) => [r.path.slice(0, -1), r]));
const files = new Set(rows.filter((r) => !r.path.endsWith("/")).map((r) => r.path));
const errs: string[] = [], warn: string[] = [];
const fail = (k: string, m: string) => errs.push(`${k}: ${m}`);

// 1. documented paths exist
for (const r of rows) if (!existsSync(join(ROOT, r.path))) fail("missing", r.path);

// tracked + untracked-not-ignored files
const all = (await Bun.$`git -C ${ROOT} ls-files -co --exclude-standard`.quiet().text()).split("\n").filter(Boolean);
const tracked = new Set((await Bun.$`git -C ${ROOT} ls-files`.quiet().text()).split("\n").filter(Boolean));

// 2. top/second-level dirs documented
const seen = new Set<string>();
for (const f of all) { const p = f.split("/"); if (p.length > 1) seen.add(p[0]); if (p.length > 2) seen.add(`${p[0]}/${p[1]}`); }
for (const d of seen) {
  const top = d.split("/")[0], td = dirs.get(top);
  if (dirs.has(d)) continue;
  if (d.includes("/") && td && /^gen/.test(td.purpose)) { warn.push(`generated subdir ${d}`); continue; }
  fail("undocumented-dir", d);
}
for (const e of readdirSync(ROOT)) if (statSync(join(ROOT, e)).isDirectory() && !e.startsWith(".") && e !== "node_modules" && !dirs.has(e)) fail("undocumented-dir", e);

// 3. orphan files
for (const f of all) {
  const p = f.split("/");
  if (p.length === 1) { if (!files.has(f)) fail("orphan-file", f); continue; }
  const d2 = p.length > 2 ? `${p[0]}/${p[1]}` : "";
  if (!dirs.has(p[0]) && !dirs.has(d2)) fail("orphan-file", f);
}

// 4. README in every hand-written dir
for (const [d, r] of dirs) {
  if (/^(gen|ign)/.test(r.purpose) || d.startsWith("third_party") || d === "docs" || d === "docs/adr") continue;
  if (!existsSync(join(ROOT, d, "README.md"))) fail("no-readme", d);
}

// 5. duplication with src
const pins = Bun.TOML.parse(await Bun.file(join(ROOT, "pins.toml")).text()) as any;
const pinPaths: string[] = [];
(function walk(o: any) { for (const v of Object.values(o)) { if (typeof v === "string" && v.startsWith("../")) pinPaths.push(v); else if (v && typeof v === "object") walk(v); } })(pins);
const pinDirs = pinPaths.map((p) => join(ROOT, p)).filter((p) => existsSync(p) && statSync(p).isDirectory());
const pinNames = new Set(pinDirs.map((p) => p.replace(/[\\/]+$/, "").split(/[\\/]/).pop()!.toLowerCase()));
const srcTP = join(SRC, "third_party");
const tp = existsSync(join(ROOT, "third_party")) ? readdirSync(join(ROOT, "third_party")) : [];
for (const n of tp) {
  if (existsSync(join(srcTP, n))) fail("dup-clone", `third_party/${n} exists in $SRC_ROOT/third_party/${n}`);
  else if (pinNames.has(n.toLowerCase())) fail("dup-clone", `third_party/${n} is a pinned path`);
}
const sha = async (p: string) => new Bun.CryptoHasher("sha256").update(await Bun.file(p).arrayBuffer()).digest("hex");
let compared = 0;
for (const f of tracked) {
  if (f.startsWith("repos/") || f.startsWith("graph/outline/")) continue; // generated pointers/outlines
  const p = f.split("/"); const mine = join(ROOT, f); let h = "";
  for (const pd of pinDirs) for (let k = 1; k <= Math.min(3, p.length); k++) {
    const cand = join(pd, ...p.slice(-k));
    if (!existsSync(cand) || !statSync(cand).isFile()) continue;
    compared++; h ||= await sha(mine);
    if ((await sha(cand)) === h) fail("dup-file", `${f} == ${cand.slice(dirname(ROOT).length + 1)}`);
  }
}

// 6. no upward deps in machine files
const layerOf = (f: string) => { const p = f.split("/"); return (dirs.get(`${p[0]}/${p[1]}`) ?? dirs.get(p[0]))?.layer ?? 8; };
const refRe = new RegExp(`(?:^|["'\\s/(])(${[...dirs.keys()].filter((d) => !d.includes("/")).join("|")})/`, "g");
for (const f of tracked) {
  if (!/\.(toml|json|conf|cmake)$/.test(f) || f.startsWith("repos/") || f.startsWith("graph/") || f.startsWith("formats/xmap/")) continue;
  const L = layerOf(f); if (L >= 8 || L < 0) continue;
  const t = (await Bun.file(join(ROOT, f)).text()).replace(/(^|\s)#.*$/gm, ""); // comments may cite docs
  for (const m of t.matchAll(refRe)) { const tl = dirs.get(m[1])!.layer; if (tl > L) fail("upward-dep", `${f} (L${L}) -> ${m[1]}/ (L${tl})`); }
}

// 7. no absolute paths in tools
for (const f of all.filter((f) => /^tools\/.*\.ts$/.test(f))) {
  const t = await Bun.file(join(ROOT, f)).text();
  if (/["'`][A-Za-z]:[\\/]/.test(t) || /\/home\/\w+/.test(t)) fail("abs-path", f);
}

const res = { ok: errs.length === 0, documented: rows.length, dirsOnDisk: seen.size, files: all.length, tracked: tracked.size, thirdParty: tp.length, pinDirs: pinDirs.length, hashCompared: compared, errors: errs, warnings: warn };
if (process.argv.includes("--json")) console.log(JSON.stringify(res, null, 1));
else { console.log(`check-structure: ${res.ok ? "OK" : "FAIL"} | ${rows.length} documented paths, ${seen.size} dirs (2 levels), ${all.length} files, ${tp.length} third_party clones, ${pinDirs.length} pinned dirs, ${compared} same-path files hashed`); for (const e of errs) console.log("  " + e); }
process.exit(errs.length ? 1 : 0);
