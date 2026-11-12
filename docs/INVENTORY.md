# Inventory (2026-11-12, `gh api orgs/<org>/repos`)

Legend: C = cloned in `third_party/`, F = forked to aphrody-labs, S = lives in C:\src (reference), R = reference only.

| upstream | fork (aphrody-labs/) | state | role |
|---|---|---|---|
| msys2/MINGW-packages | MINGW-packages | F C | PKGBUILDs mingw32/64, ucrt64, clang64, clangarm64 |
| msys2/MSYS2-packages | MSYS2-packages | F C | PKGBUILDs msys (cygwin) |
| msys2/MINGW-packages-dev | MINGW-packages-dev | F R | dev scratch (47 MB) |
| msys2/MSYS2-packages-dev | MSYS2-packages-dev | F C | dev scratch |
| msys2/MSYS2-keyring | MSYS2-keyring | F C | pacman keyring |
| msys2/msys2-runtime | msys2-runtime | F C | cygwin fork (msys-2.0.dll), contains cygwin history |
| msys2/msys2-pacman | msys2-pacman | F C | pacman fork |
| msys2/msys2-installer | msys2-installer | F C | installer (Qt IFW) |
| msys2/msys2-launcher | msys2-launcher | F C | mintty launchers |
| msys2/msys2-autobuild, -controller | msys2-autobuild, msys2-autobuild-controller | F C | build farm on GH Actions |
| msys2/msys2-devtools | msys2-devtools | F C | repo maintenance tools |
| msys2/msys2-web | msys2-web | F C | packages.msys2.org |
| msys2/msys2.github.io | msys2.github.io | F C | website/docs (environments, CLANG64/UCRT64) |
| msys2/setup-msys2 | setup-msys2 | F C | GitHub Action |
| msys2/msys2-docker, msys2-tests, msys2-texlive, msys2-main-server, msys2, msys2-archive, pacdb, package-grokker, pactoys, aas-sign-build, adbwinapi | same names | F C | infra/tools |
| msys2/finances, sourceforge-export, twitter-export | msys2-finances, msys2-sourceforge-export, msys2-twitter-export | F R | non-code archives |
| msys2/.github | - | R | org profile, not forked (name would hijack our org profile) |
| (pacman-mirrors) | - | - | no longer a repo: mirrorlists live in MSYS2-packages/pacman-mirrors |
| mingw-w64/mingw-w64 (mirror of sourceforge mingw-w64-code) | mingw-w64 | F S | `C:\src\third_party\mingw-w64`; sourceforge identical, no mirror-push needed |
| mstorsjo/llvm-mingw | llvm-mingw | F C | LLVM-pure toolchain |
| cygwin/cygwin (mirror of sourceware newlib-cygwin) | cygwin | F R | covered by msys2-runtime upstream/cygwin/* branches; no non-GitHub mirror-push needed |
| cygwin/cygport, calm, cygwin-install-action, scallywag | cygport, cygwin-calm, cygwin-install-action, cygwin-scallywag | F C | cygwin packaging/CI |
| cygwin/openssl | - | R | generic openssl fork |
| git-for-windows/git | gfw-git | F R | `C:\src\third_party\git` (aphrody-labs/git <- microsoft/git) |
| git-for-windows/MINGW-packages, MSYS2-packages, msys2-runtime | gfw-MINGW-packages, gfw-MSYS2-packages, gfw-msys2-runtime | F R | forks of msys2 repos (prefixed: name clash) |
| git-for-windows/build-extra | gfw-build-extra | F C | GfW SDK/installer scripts |
| git-for-windows/git-sdk-64 | - | R | 25 GB, reference only |
| Arch pacman (gitlab) | - | S | `C:\src\third_party\pacman` |
| CachyOS-PKGBUILDS, cachy-chroot, cachyos-wsl | - | S | `C:\src\third_party\*` (pins.toml) |
| microsoft/vcpkg | vcpkg | S | `C:\src\third_party\vcpkg` (ports for MAPPING) |
