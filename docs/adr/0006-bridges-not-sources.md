# 0006: Windows package managers are projections

Status: accepted (2026-11-12)

## Context

Users on Windows expect winget, pwsh/PSGallery, NuGet, vcpkg and MSIX.

## Decision

formats/{winget,nuget,psgallery,vcpkg,msix} generate or map, they never hold a second copy of a recipe. formats/xmap links ids across ecosystems (heuristics flagged, overrides curated). winget/DSC/MSIX deliver the distro; pacman delivers packages inside it.
