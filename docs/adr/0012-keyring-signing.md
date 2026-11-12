# 0012: Keyring and signing

Status: accepted (2026-11-12)

## Context

pacman trust relies on a keyring package (archlinux-keyring, MSYS2-keyring); MSIX/winget need Authenticode.

## Decision

aphrody-keyring package with master + packager keys and revocation; packages and repo dbs signed on fr2; Authenticode/MSIX cert separate; private keys never in git.
