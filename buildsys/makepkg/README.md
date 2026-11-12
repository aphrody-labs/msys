# buildsys/makepkg

makepkg.conf drop-ins per env x ISA (CachyOS style): clang, -O3, ThinLTO, x86-64-v3/v4/znver4. PGO/AutoFDO are opt-in per pkgbase (profile data on fr2/R2, never in git). Base configs: `third_party/MSYS2-packages/pacman` and `$SRC_ROOT/third_party/CachyOS-PKGBUILDS/pacman/makepkg.conf` (pins).
