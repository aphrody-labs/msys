# INDEX — C:\msys (2026-11-12)

- Forks aphrody-labs: 39 created this session (`tools/forks.tsv`, log `tools/fork.log`) + 2 pre-existing (mingw-w64, llvm-mingw) = 41. Inventory and status: [INVENTORY.md](INVENTORY.md).
- Clones: 31 in `third_party/` (partial, `--filter=blob:none`, origin=fork, upstream=original), 377 MB. The rest is reference-only (dedupe/size, see `pins.toml [reference_only]`).
- Non-GitHub upstreams: sourceforge mingw-w64-code and sourceware newlib-cygwin both have official GitHub mirrors (mingw-w64/mingw-w64, cygwin/cygwin), which were forked; no token mirror-push needed.
- Matrix: [MATRIX.md](MATRIX.md) (envs, CRT, toolchain, C++ lib, linker, unwinding, threading, flags, pacman, CI), [MATRIX-PACKAGES.md](MATRIX-PACKAGES.md) (per pkgbase: envs, LLVM/GCC, CachyOS patch, ISA).
- Graph ([../graph/STATS.md](../graph/STATS.md)): 3985 PKGBUILDs, 13872 packages, 114769 edges.

| env | pkgbases | packages | depends | makedepends |
|---|---|---|---|---|
| msys | 595 | 782 | 2715 | 3099 |
| ucrt64 | 3385 | 3853 | 15441 | 16803 |
| clang64 | 3318 | 3763 | 14691 | 16243 |
| clangarm64 | 3277 | 3730 | 14479 | 16066 |
| mingw64 | 1411 | 1631 | 5995 | 7335 |
| mingw32 | 66 | 113 | 1041 | 861 |

- Arch view: `repos/core` 89 (closure of `base`), `repos/extra` 506, `repos/mingw` 3389; 24 pkgbases have a CachyOS overlay in `../src/third_party/CachyOS-PKGBUILDS`.
- vcpkg: 877 / 3982 pkgbases map to a port in `../src/third_party/vcpkg/ports` ([../vcpkg/MAPPING.md](../vcpkg/MAPPING.md), name heuristic).
- Code outlines: `graph/outline/<repo>.md` (31, `ay ingest --outline`).
- Site: `site/dist/index.html` (`just site`, `just serve` -> http://localhost:4380).

## References back to C:\src (not copied, `pins.toml`)
`third_party/mingw-w64` (aphrody-labs/mingw-w64), `CachyOS-PKGBUILDS` (+ `pacman/makepkg.conf`, `cachyos-settings`), `cachy-chroot`, `cachyos-wsl`, `pacman` (Arch upstream), `git` (aphrody-labs/git <- microsoft/git, covers gfw-git), `vcpkg`, `wine`, `llvm-project`, `archlinux-docker`, `pkg-linux`, `linux`, `src.lock.json`. Labs: `infra/vcpkg/triplets`, `third_party/toolchain-157.toml`.

## Limits
- PKGBUILD parsing is static (bash conditions ignored, union of branches; `provides` not resolved to edges).
- `makepkg/` and `vcpkg/triplets` are [NV]: nothing built (owner rule), validation goes to prd.
