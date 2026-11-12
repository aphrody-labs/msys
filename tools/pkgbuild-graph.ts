// Parse every PKGBUILD in MSYS2-packages and MINGW-packages into a dependency graph.
// Outputs: graph/graph.json, graph/graph.dot, graph/stats.json, graph/STATS.md,
//          repos/{core,extra,mingw}/<pkgbase>/meta.json, docs/MATRIX-PACKAGES.md
// No build, no bash: regex-level parsing of bash arrays (conditions ignored, union taken).
import { Glob } from "bun";
import { mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dir, "..");
const TP = join(ROOT, "third_party");
// Single source of truth for CachyOS: $SRC_ROOT/third_party (never copied here).
import { SRC } from "./lib/identity.ts";
const CACHY = process.env.CACHY_PKGBUILDS ?? join(SRC, "third_party/CachyOS-PKGBUILDS");

const ENVS: Record<string, { prefix: string; toolchain: "gcc" | "llvm"; crt: string; arch: string }> = {
  mingw32: { prefix: "mingw-w64-i686", toolchain: "gcc", crt: "msvcrt", arch: "i686" },
  mingw64: { prefix: "mingw-w64-x86_64", toolchain: "gcc", crt: "msvcrt", arch: "x86_64" },
  ucrt64: { prefix: "mingw-w64-ucrt-x86_64", toolchain: "gcc", crt: "ucrt", arch: "x86_64" },
  clang64: { prefix: "mingw-w64-clang-x86_64", toolchain: "llvm", crt: "ucrt", arch: "x86_64" },
  clangarm64: { prefix: "mingw-w64-clang-aarch64", toolchain: "llvm", crt: "ucrt", arch: "aarch64" },
};
const CORE_GROUPS = new Set(["base", "base-devel", "msys2-devel"]);
const CORE_NAMES = new Set(["msys2-runtime", "pacman", "filesystem", "bash", "coreutils", "pacman-mirrors", "msys2-keyring", "msys2-launcher", "gcc", "binutils", "make"]);

const KEYS = ["pkgname", "depends", "makedepends", "checkdepends", "optdepends", "provides", "groups", "mingw_arch", "arch", "license"] as const;
type Key = (typeof KEYS)[number];

function vars(src: string): Record<string, string> {
  const v: Record<string, string> = {};
  for (const m of src.matchAll(/^\s*(_?\w+)=(["']?)([^"'\s()]*)\2\s*$/gm)) v[m[1]] = m[3];
  return v;
}
function expand(s: string, v: Record<string, string>): string {
  for (let i = 0; i < 3; i++) s = s.replace(/\$\{(\w+)(?:[^}]*)\}|\$(\w+)/g, (_, a, b) => v[a ?? b] ?? `\${${a ?? b}}`);
  return s;
}
function arrays(src: string): Record<Key, string[]> {
  const out = Object.fromEntries(KEYS.map((k) => [k, [] as string[]])) as Record<Key, string[]>;
  // Balanced-paren scan of every `name(+)=( ... )` array, so `$(...)` inside bodies does not truncate.
  const all: Record<string, string[]> = {};
  for (const m of src.matchAll(/^[ \t]*(?:local[ \t]+)?(\w+)\+?=\(/gm)) {
    let i = m.index! + m[0].length, depth = 1, q = "";
    const s = i;
    for (; i < src.length && depth; i++) {
      const c = src[i];
      if (q) { if (c === q) q = ""; continue; }
      if (c === '"' || c === "'") q = c; else if (c === "#" && /\s/.test(src[i - 1])) { while (i < src.length && src[i] !== "\n") i++; }
      else if (c === "(") depth++; else if (c === ")") depth--;
    }
    const body = src.slice(s, i - 1).replace(/\$\([^)]*\)/g, (x) => x.replace(/^\$\(.*echo\s+/, "").replace(/\)$/, "")).replace(/(^|\s)#.*$/gm, "");
    for (const t of body.matchAll(/"([^"]*)"|'([^']*)'|(\S+)/g)) {
      const tok = (t[1] ?? t[2] ?? t[3]).trim();
      if (tok && !/^(\[\[|\]\]|\|\||&&)/.test(tok)) (all[m[1]] ??= []).push(tok);
    }
  }
  const resolve = (toks: string[], d = 0): string[] => toks.flatMap((t) => {
    const r = t.match(/^\$\{(\w+)\[@\]\}$/);
    return r && d < 4 ? resolve(all[r[1]] ?? [], d + 1) : [t];
  });
  for (const k of KEYS) out[k] = resolve(all[k] ?? []);
  return out;
}
const bare = (d: string) => d.split(":")[0].replace(/[<>=].*$/, "").trim();

type Pkg = { base: string; repo: "msys" | "mingw"; dir: string; names: string[]; envs: string[]; groups: string[]; deps: Set<string>; make: Set<string>; provides: Set<string> };
const pkgs: Pkg[] = [];

for (const [repoDir, repo] of [["MSYS2-packages", "msys"], ["MINGW-packages", "mingw"]] as const) {
  const base = join(TP, repoDir);
  if (!existsSync(base)) { console.error(`missing ${base}`); continue; }
  for await (const f of new Glob("*/PKGBUILD").scan({ cwd: base })) {
    const dir = f.split(/[\\/]/)[0];
    const src = await Bun.file(join(base, f)).text();
    const v = vars(src);
    const a = arrays(src);
    const envs = repo === "mingw" ? (a.mingw_arch.length ? a.mingw_arch : Object.keys(ENVS).filter((e) => e !== "mingw32")) : ["msys"];
    pkgs.push({
      base: v.pkgbase ? expand(v.pkgbase, v) : dir, repo, dir: `third_party/${repoDir}/${dir}`, envs,
      names: (a.pkgname.length ? a.pkgname : v.pkgname ? [v.pkgname] : []).map((x) => expand(x, v)), groups: a.groups.map((x) => expand(x, v)),
      deps: new Set(a.depends.map((x) => bare(expand(x, v)))), make: new Set(a.makedepends.map((x) => bare(expand(x, v)))),
      provides: new Set(a.provides.map((x) => bare(expand(x, v)))),
    });
  }
}

// Instantiate per environment: ${MINGW_PACKAGE_PREFIX} -> env prefix.
const PKG = /^[\w@+][\w@.+-]*$/;
type Node = { id: string; env: string; base: string };
const nodes = new Map<string, Node>();
const edges: { from: string; to: string; kind: "dep" | "make"; env: string }[] = [];
const sub = (s: string, env: string) => env === "msys" ? s : s.replace(/\$\{MINGW_PACKAGE_PREFIX\}/g, ENVS[env]?.prefix ?? "?").replace(/\$\{?MINGW_PREFIX\}?/g, `/${env}`);
for (const p of pkgs) for (const env of p.envs) {
  if (env !== "msys" && !ENVS[env]) continue;
  const names = (p.names.length ? p.names : [p.base]).map((n) => sub(n, env));
  for (const n of names) {
    if (/[${};]/.test(n)) continue;
    nodes.set(n, { id: n, env, base: p.base });
    for (const d of p.deps) { const t = sub(d, env); if (PKG.test(t)) edges.push({ from: n, to: t, kind: "dep", env }); }
    for (const d of p.make) { const t = sub(d, env); if (PKG.test(t)) edges.push({ from: n, to: t, kind: "make", env }); }
  }
}
const dedup = new Map(edges.map((e) => [`${e.from}|${e.to}|${e.kind}`, e]));
const E = [...dedup.values()];

// CachyOS overlay availability (by package name, with mingw prefix stripped).
const cachy = new Set(existsSync(CACHY) ? readdirSync(CACHY) : []);
const real = (b: string) => b.replace(/^mingw-w64-/, "").replace(/^\$\{_realname\}$/, b);

const stats: Record<string, { pkgbases: number; packages: number; dep: number; make: number }> = {};
for (const n of nodes.values()) (stats[n.env] ??= { pkgbases: 0, packages: 0, dep: 0, make: 0 }).packages++;
for (const e of E) stats[e.env][e.kind]++;
for (const p of pkgs) for (const env of p.envs) if (stats[env]) stats[env].pkgbases++;

const out = join(ROOT, "graph"); mkdirSync(out, { recursive: true });
await Bun.write(join(out, "graph.json"), JSON.stringify({ generated: new Date().toISOString(), envs: ENVS, stats, nodes: [...nodes.values()], edges: E }));
await Bun.write(join(out, "stats.json"), JSON.stringify({ pkgbuilds: pkgs.length, nodes: nodes.size, edges: E.length, stats }, null, 2));
let dot = "digraph msys2 {\n  rankdir=LR; node [shape=box,fontsize=8];\n";
for (const e of E) if (e.kind === "dep") dot += `  "${e.from}" -> "${e.to}";\n`;
await Bun.write(join(out, "graph.dot"), dot + "}\n");

// In-degree ranking (most depended-upon) per env.
const indeg = new Map<string, number>();
for (const e of E) if (e.kind === "dep") indeg.set(e.to, (indeg.get(e.to) ?? 0) + 1);
const top = [...indeg].sort((a, b) => b[1] - a[1]).slice(0, 40);
let md = `# Graph stats\n\nGenerated by \`tools/pkgbuild-graph.ts\`. ${pkgs.length} PKGBUILDs, ${nodes.size} packages, ${E.length} edges.\n\n| env | pkgbases | packages | depends edges | makedepends edges |\n|---|---|---|---|---|\n`;
for (const [k, s] of Object.entries(stats)) md += `| ${k} | ${s.pkgbases} | ${s.packages} | ${s.dep} | ${s.make} |\n`;
md += `\n## Most depended-upon (runtime)\n\n| package | in-degree |\n|---|---|\n` + top.map(([n, c]) => `| ${n} | ${c} |`).join("\n") + "\n";
await Bun.write(join(out, "STATS.md"), md);

// core = runtime closure of the msys `base` metapackage (Arch core equivalent).
const coreClosure = new Set<string>();
{
  const dep = new Map<string, string[]>();
  for (const e of E) if (e.env === "msys" && e.kind === "dep") (dep.get(e.from) ?? dep.set(e.from, []).get(e.from)!).push(e.to);
  const st = ["base"];
  while (st.length) { const n = st.pop()!; if (coreClosure.has(n)) continue; coreClosure.add(n); st.push(...(dep.get(n) ?? [])); }
}
// Arch-style repo view: repos/{core,extra,mingw}/<pkgbase>/meta.json (pointers only, no copies).
const repos = join(ROOT, "repos"); for (const r of ["core", "extra", "mingw"]) rmSync(join(repos, r), { recursive: true, force: true }); // keep repos/README.md
let mat = "# Per-package matrix\n\nGenerated. `cachy` = a CachyOS PKGBUILD/patch set exists in `$SRC_ROOT/third_party/CachyOS-PKGBUILDS` (source of truth). ISA: upstream MSYS2 builds -march=nocona -O2 (armv8.1-a for clangarm64), see third_party/MSYS2-packages/pacman/makepkg_mingw.d.*.conf; target variants come from `buildsys/makepkg/`.\n\n| pkgbase | repo | envs | LLVM/GCC | cachy | ISA (upstream -> target) |\n|---|---|---|---|---|---|\n";
for (const p of pkgs.sort((a, b) => a.base.localeCompare(b.base))) {
  const r = p.repo === "mingw" ? "mingw" : (p.groups.some((g) => CORE_GROUPS.has(g)) || CORE_NAMES.has(p.base) || p.names.some((n) => coreClosure.has(n)) ? "core" : "extra");
  const rn = real(p.base);
  const hasCachy = cachy.has(rn) || cachy.has(p.base);
  const tc = p.repo === "msys" ? "gcc (cygwin)" : [...new Set(p.envs.map((e) => ENVS[e]?.toolchain).filter(Boolean))].join("+");
  const isa = p.repo === "msys" ? "nocona -> x86-64-v3/v4/znver4" : p.envs.includes("clangarm64") && p.envs.length === 1 ? "armv8.1-a -> armv8.2-a+" : "nocona -> x86-64-v3/v4/znver4";
  const d = join(repos, r, p.base.replace(/[^\w.+-]/g, "_")); mkdirSync(d, { recursive: true });
  await Bun.write(join(d, "meta.json"), JSON.stringify({
    pkgbase: p.base, repo: r, source: relative(d, join(ROOT, p.dir)).replaceAll("\\", "/"), envs: p.envs, groups: p.groups,
    toolchain: tc, cachyos: hasCachy ? `pins.toml:src.cachyos.pkgbuilds/${cachy.has(rn) ? rn : p.base}` : null, isa_targets: ["x86-64-v3", "x86-64-v4", "znver4"],
  }, null, 2) + "\n");
  mat += `| ${p.base} | ${r} | ${p.envs.join(" ")} | ${tc} | ${hasCachy ? "yes" : "-"} | ${isa} |\n`;
}
await Bun.write(join(ROOT, "docs", "MATRIX-PACKAGES.md"), mat);
console.log(JSON.stringify({ pkgbuilds: pkgs.length, nodes: nodes.size, edges: E.length, stats, cachyOverlap: pkgs.filter((p) => cachy.has(real(p.base)) || cachy.has(p.base)).length }));
