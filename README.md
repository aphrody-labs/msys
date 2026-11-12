# C:\msys

Source/research monorepo for the MSYS2 / MinGW-w64 / Cygwin ecosystem, organised like an Arch package tree (pacman, PKGBUILD, makepkg, FHS), LLVM-pure and CachyOS-tuned. Not a runtime install: no MSYS2 on PATH, no compilation on the PC (heavy work: `just prd '<cmd>'`).

| dir | content |
|---|---|
| `third_party/<name>/` | partial clones (`--filter=blob:none`) of our forks; `origin` = aphrody-labs, `upstream` = original (gitignored, `just fetch`) |
| `repos/{core,extra,mingw}/<pkgbase>/meta.json` | Arch-style repo view, generated; pointers to the PKGBUILD in `third_party/` and to the CachyOS overlay in `../src/third_party/CachyOS-PKGBUILDS` |
| `makepkg/` | CachyOS-style makepkg drop-ins: clang, -O3, ThinLTO, x86-64-v3 / v4 / znver4 |
| `pins.toml` | external references (src/labs), never copied; src/third_party wins on conflict |
| `docs/` | `INDEX.md`, `MATRIX.md`, `MATRIX-PACKAGES.md` (generated), `INVENTORY.md` |
| `graph/` | `pkgbuild-graph.ts` output (`STATS.md`, `stats.json`; `graph.json`/`graph.dot` regenerated) and `outline/<repo>.md` (`ay ingest --outline`) |
| `vcpkg/` | manifest, overlay config reusing `../labs/infra/vcpkg/triplets`, MinGW triplet, `MAPPING.md` |
| `toolchain/` | LLVM-pure notes, pin `../labs/third_party/toolchain-157.toml` |
| `site/` | `bun tools/site.ts` -> `site/dist/index.html` (+ `graph.html` viewer) |

`just fetch | forks | sync | graph | outline | site | serve`.
