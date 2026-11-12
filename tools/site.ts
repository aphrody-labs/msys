// Static site from docs/ + graph/ (no external hosting). Output: site/dist/. Serve: `bun tools/site.ts --serve`.
import { Glob } from "bun";
import { mkdirSync } from "node:fs";
import { join, basename } from "node:path";
import { ID } from "./lib/identity.ts";
const ROOT = join(import.meta.dir, ".."), OUT = join(ROOT, "site", "dist");
mkdirSync(join(OUT, "docs"), { recursive: true });
const css = `body{font:14px/1.5 system-ui;margin:0 auto;max-width:1100px;padding:1rem}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:2px 6px}nav a{margin-right:1rem}code{background:#f3f3f3}`;
const page = (t: string, b: string) => `<!doctype html><meta charset=utf-8><title>${t}</title><style>${css}</style><nav><a href="/index.html">index</a><a href="/graph.html">graph</a></nav>${b}`;
const links: string[] = [];
for (const f of [...new Glob("docs/{*.md,adr/*.md}").scanSync(ROOT), "graph/STATS.md", "formats/vcpkg/MAPPING.md", "formats/xmap/XMAP.md", "toolchains/README.md", "docs/ARCHITECTURE.md", "README.md"]) {
  const name = f.replace(/[\/]/g, "_").replace(/\.md$/, ".html");
  await Bun.write(join(OUT, "docs", name), page(basename(f), Bun.markdown.html(await Bun.file(join(ROOT, f)).text())));
  links.push(`<li><a href="docs/${name}">${f}</a></li>`);
}
// Compact adjacency for the viewer: {id: [env, deps[], makedeps[]]}
const g = await Bun.file(join(ROOT, "graph", "graph.json")).json();
const adj: Record<string, [string, string[], string[]]> = {};
for (const n of g.nodes) adj[n.id] = [n.env, [], []];
for (const e of g.edges) adj[e.from]?.[e.kind === "dep" ? 1 : 2].push(e.to);
await Bun.write(join(OUT, "adj.json"), JSON.stringify(adj));
await Bun.write(join(OUT, "index.html"), page(ID.title, `<h1>${ID.title}</h1><p>${g.nodes.length} packages, ${g.edges.length} edges.</p><ul>${links.join("")}</ul>`));
await Bun.write(join(OUT, "graph.html"), page("graph", `<h1>Package graph</h1><input id=q size=50 placeholder="mingw-w64-clang-x86_64-curl"> <label><input type=checkbox id=rev> reverse (who depends on it)</label><div id=o></div>
<script>let A;fetch("adj.json").then(r=>r.json()).then(j=>{A=j;show(location.hash.slice(1)||"mingw-w64-clang-x86_64-curl")});
const R=()=>{const r={};for(const[k,[,d]]of Object.entries(A))for(const t of d)(r[t]??=[]).push(k);return r};let RV;
function L(a){return (a||[]).map(x=>'<a href="#'+x+'">'+x+'</a>').join(", ")||"-"}
function show(id){q.value=id;const n=A[id];if(rev.checked){RV??=R();o.innerHTML="<h2>"+id+"</h2><p><b>required by</b>: "+L(RV[id])+"</p>";return}
o.innerHTML=n?"<h2>"+id+" ("+n[0]+")</h2><p><b>depends</b>: "+L(n[1])+"</p><p><b>makedepends</b>: "+L(n[2])+"</p>":"<p>not found; matches: "+L(Object.keys(A).filter(k=>k.includes(id)).slice(0,50))+"</p>"}
onhashchange=()=>show(decodeURIComponent(location.hash.slice(1)));q.onchange=()=>location.hash=q.value;rev.onchange=()=>show(q.value)</script>`));
console.log(`site: ${join(OUT, "index.html")}`);
if (process.argv.includes("--serve")) { const s = Bun.serve({ port: ID.site_port, fetch: (r) => { const p = new URL(r.url).pathname; return new Response(Bun.file(join(OUT, p === "/" ? "index.html" : p))); } }); console.log(s.url.href); }
