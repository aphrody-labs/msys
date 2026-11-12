# 0010: bun-only tooling

Status: accepted (2026-11-12)

## Context

Global rule: bun for JS/TS, no node/python/pwsh fallbacks.

## Decision

All generators and checks are tools/*.ts run with bun; just recipes call them. Shell scripts limited to clone/fork helpers.
