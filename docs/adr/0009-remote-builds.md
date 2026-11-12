# 0009: No local compilation, clean chroots remotely

Status: accepted (2026-11-12)

## Context

The owner PC must not compile; Arch builds in clean chroots (devtools).

## Decision

Only bun scripts and git run locally. Builds run on fr2 (`ssh cdn`, nice) or remote CI in throw-away roots (buildsys/devtools), producing signed packages, logs and SBOMs.
