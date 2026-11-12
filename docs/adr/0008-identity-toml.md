# 0008: identity.toml

Status: accepted (2026-11-12)

## Context

Rule from labs/docs/ROOT-ARCHITECTURE.md: everything renamable, relocatable, cross-platform.

## Decision

identity.toml holds names, prefixes, remotes and sibling roots; tools read it via tools/lib/identity.ts; SRC_ROOT/LABS_ROOT override. No absolute paths or product names in tools.
