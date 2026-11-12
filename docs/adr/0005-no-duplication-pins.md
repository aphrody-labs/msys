# 0005: No duplication with src

Status: accepted (2026-11-12)

## Context

C:\src (`$SRC_ROOT`) already vendors mingw-w64, pacman, vcpkg, CachyOS-PKGBUILDS, winget-pkgs, DSC, PowerShell, llvm-project.

## Decision

msys never copies those; it references them in pins.toml. On conflict src/third_party wins. third_party/ here only holds forks absent from src. check-structure.ts fails on a clone name or tracked file (path+hash) that duplicates a pin.
