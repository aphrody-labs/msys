# 0004: ISA variant repos and optimisation

Status: accepted (2026-11-12)

## Context

CachyOS ships x86-64-v3/v4/znver4 repos with clang, LTO, PGO and AutoFDO; MSYS2 builds nocona -O2.

## Decision

Same recipes, three binary variants per env selected by buildsys/makepkg profiles; repos suffixed -v3/-v4/-znver4, chosen at install by CPU detection. ThinLTO default; PGO/AutoFDO opt-in per pkgbase with profiles stored on fr2/R2, never in git.
