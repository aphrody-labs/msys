# 0013: Image builder and delivery

Status: accepted (2026-11-12)

## Context

archiso builds images from profiles; MSYS2 ships an installer, docker image and launcher.

## Decision

distribution/images profiles (package list + overlay + pacman.conf) produce installer, portable archive, MSIX and CI image; delivered through winget manifest and DSC v3 configuration.
