# 0011: POSIX layer boundaries

Status: accepted (2026-11-12)

## Context

msys2-runtime gives POSIX semantics but leaks (path conversion, fork cost) when mixed with native code.

## Decision

Only the MSYS env links msys-2.0.dll; native envs and msvc envs never do. Path conversion happens only at MSYS -> native exec, controlled by MSYS2_ARG_CONV_EXCL. No glibc emulation on Windows.
