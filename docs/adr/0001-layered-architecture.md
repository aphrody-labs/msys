# 0001: Layered architecture

Status: accepted (2026-11-12)

## Context

A distribution mixing Arch, CachyOS, MSYS2 and Windows-native ecosystems needs clear ownership or it duplicates concepts in several places.

## Decision

Nine layers (0 identity/pins, 1 toolchains, 2 runtimes, 3 environments, 4 buildsys, 5 repos, 6 formats+compat, 7 distribution, 8 meta). A layer references only itself or lower layers. Every top/second-level dir is listed in ARCHITECTURE.md and checked by tools/check-structure.ts.
