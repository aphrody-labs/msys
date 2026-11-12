# 0003: LLVM-first environments

Status: accepted (2026-11-12)

## Context

MSYS2 offers MSYS, UCRT64, CLANG64, CLANGARM64, MINGW64. Labs standardizes on LLVM (Chromium clang) and the Windows-native MSVC ABI.

## Decision

CLANG64/CLANGARM64 (LLVM, UCRT, libc++) are primary for the GNU ABI; msvc-x64/arm64 (clang-cl + lld-link, MSVC STL, Win11 SDK) are primary for the MSVC ABI. UCRT64 is kept for parity, MINGW64 upstream-only, i686 dropped. MSYS env stays on cygwin gcc for msys2-runtime.
