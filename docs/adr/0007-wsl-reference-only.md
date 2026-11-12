# 0007: WSL is reference architecture only

Status: accepted (2026-11-12)

## Context

WSL, the WSL kernel and WSLg are good designs (launcher/init split, per-distro rootfs, DrvFs path model, compositor bridge) but the owner forbids WSL on this PC.

## Decision

Ideas are documented and may be reimplemented natively; nothing in this repo installs, enables or runs WSL. Linux semantics are covered by the linux-x64 reference env on fr2.
