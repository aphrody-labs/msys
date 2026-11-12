# msys

Source/metadata distribution for Windows built like Arch Linux (pacman, PKGBUILD, ABS, devtools, archiso), tuned like CachyOS (x86-64-v3/v4/znver4, clang, LTO/PGO/AutoFDO), using MSYS2 patches (msys2-runtime, environments), with two-way bridges to winget/DSC v3, PowerShell 7/PSGallery, NuGet/.NET, vcpkg and MSIX. Names and roots come from `identity.toml`. Nothing is compiled on the owner PC (heavy work: `just prd '<cmd>'` on fr2). No WSL runtime.

Design: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) (layers, tree, ADRs, checklist). Cross-ecosystem map: [formats/xmap/XMAP.md](formats/xmap/XMAP.md).

| layer | dirs |
|---|---|
| 0 | `identity.toml`, `pins.toml` (refs into src/labs, never copied; src/third_party wins) |
| 1 | `toolchains/` llvm, msvc, gnu, zig, rust, dotnet |
| 2 | `runtimes/` msys2-runtime, crt, cxx |
| 3 | `environments/envs.toml` |
| 4 | `buildsys/` makepkg, devtools, pkgbuild |
| 5 | `repos/` core, extra, mingw (generated meta.json pointers) |
| 6 | `formats/` pacman, vcpkg, winget, nuget, psgallery, msix, xmap; `compat/` posix, windows |
| 7 | `distribution/` keyring, mirrors, images, settings |
| 8 | `docs/` (+ `adr/`), `graph/`, `site/`, `ci/`, `tools/` |
| - | `third_party/` partial clones of aphrody-labs forks (gitignored, `just fetch`) |

`just fetch | forks | sync | graph | xmap | outline | site | serve | check | all`.
