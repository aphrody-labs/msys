# Feature matrix MSYS2 / MinGW-w64

Sources (clones in `third_party/`, upstream HEADs 2026-11-12): `msys2.github.io/web/docs/environments.md`, `MSYS2-packages/pacman/makepkg_mingw.d.*.conf`, `MINGW-packages/mingw-w64-gcc/PKGBUILD`, `MINGW-packages/mingw-w64-llvm/PKGBUILD`, `llvm-mingw/README.md`, `llvm-mingw/build-llvm.sh`. Per-package columns (CachyOS patch, ISA, LLVM/GCC): [MATRIX-PACKAGES.md](MATRIX-PACKAGES.md) (generated).

## Environments

| | MSYS | MINGW64 (legacy) | UCRT64 | CLANG64 | CLANGARM64 | llvm-mingw | **labs target** |
|---|---|---|---|---|---|---|---|
| prefix | /usr | /mingw64 | /ucrt64 | /clang64 | /clangarm64 | standalone | /clang64 |
| arch | x86_64 | x86_64 | x86_64 | x86_64 | aarch64 | i686/x86_64/armv7/aarch64 | x86_64 + aarch64 |
| CRT | cygwin (msys-2.0.dll) | msvcrt | ucrt | ucrt | ucrt | ucrt (default) / msvcrt | ucrt |
| toolchain | gcc | gcc 16.2.0 | gcc 16.2.0 | llvm 23.1.5 | llvm 23.1.5 | llvm (llvmorg-23.1.5) | llvm (Chromium 157 clang 24, `toolchain/`) |
| C++ lib | libstdc++ | libstdc++ | libstdc++ | libc++ | libc++ | libc++ | libc++ |
| linker | ld (binutils) | ld | ld | lld | lld | lld | lld |
| unwinding | dwarf (cygwin) | seh | seh | seh | seh (arm64) | seh (x86_64/arm64), dwarf (i686) | seh |
| threading | posix (cygwin) | posix (winpthreads) | posix (winpthreads); mcfgthread pkg available | win32 + winpthreads | win32 + winpthreads | winpthreads | win32 / winpthreads |
| upstream CFLAGS | -O2 | -march=nocona -msahf -O2 | -march=nocona -msahf -O2 | -march=nocona -msahf -O2 | -march=armv8.1-a -O2 | n/a | -O3 x86-64-v3/v4/znver4 (`makepkg/`) |
| LTO default | no | no (`!lto`) | no (`!lto`) | no (`!lto`) | no (`!lto`) | n/a | ThinLTO |
| sanitizers | - | - | - | ASan/UBSan (ucrt) | partial | ASan (ucrt only) | ASan |

Notes: MINGW32/CLANG32 legacy, i686 uses dwarf2 (`--with-dwarf2`, `--disable-sjlj-exceptions` in gcc PKGBUILD). gcc `_threads="posix"`. LLVM 22 kept as `mingw-w64-llvm22`.

## Optimisation (CachyOS philosophy, labs)

| knob | MSYS2 upstream | CachyOS (Linux) | labs plan (C:\msys) |
|---|---|---|---|
| -O | -O2 | -O3 | -O3 |
| ISA | nocona | x86-64-v3 / v4 / znver4 repos | 3 variants: `makepkg/cachyos-<env>-<isa>.conf` |
| compiler | gcc (UCRT64), clang (CLANG64) | clang-built packages where possible | clang everywhere (UCRT64 rebased on clang) |
| LTO | off | `-flto=auto` | `-flto=thin` |
| PGO / AutoFDO | none | kernel + selected pkgs (autofdo-bin) | per package, profiles from prd; [NV] |
| patches | `MSYS2-packages/*/*.patch` | `../src/third_party/CachyOS-PKGBUILDS/*` | overlay via `repos/*/<pkg>/meta.json` `cachyos` pointer |

## pacman / packaging / CI

| feature | value | source |
|---|---|---|
| pacman | 6.1.0 + 35 MSYS2 patches (no fakeroot/sudo, Windows strip, epoch sep `~`) | `MSYS2-packages/pacman/` |
| pacman fork | msys2-pacman (branch on Arch pacman) | `third_party/msys2-pacman`, Arch upstream `../src/third_party/pacman` |
| repos | msys, mingw32, mingw64, ucrt64, clang64, clangarm64 | `pacman.conf` |
| signing | MSYS2-keyring, aas-sign-build (Azure Artifact Signing) | `third_party/MSYS2-keyring`, `aas-sign-build` |
| builder | msys2-autobuild (GitHub Actions) + controller | `third_party/msys2-autobuild*` |
| CI action | setup-msys2 (TS) | `third_party/setup-msys2` |
| tooling | msys2-devtools, pactoys, pacdb, package-grokker | `third_party/*` |
| runtime | msys2-runtime 3.6.12 (cygwin fork) | `third_party/msys2-runtime` |
| website | msys2.github.io (mkdocs), packages.msys2.org = msys2-web (FastAPI) | `third_party/msys2.github.io`, `msys2-web` |
