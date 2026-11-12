# 0002: pacman/PKGBUILD is the primary package model

Status: accepted (2026-11-12)

## Context

MSYS2 already proves pacman on Windows; vcpkg, winget, NuGet and MSIX each solve part of the problem but none handles a full POSIX+native userland with dependency closure.

## Decision

Recipes are PKGBUILDs (ABS pkgbase layout), binaries are .pkg.tar.zst in signed pacman repos. Other formats are generated projections (ADR 0006).
