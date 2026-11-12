# Toolchain (LLVM-pure)

- Pin: `../../labs/third_party/toolchain-157.toml` (Chromium 157 clang 24 + lld + llvm-*, R2 `aphrody-chromium/toolchain/157/`). Not copied.
- MinGW target sysroot: `third_party/llvm-mingw` (mstorsjo, fork aphrody-labs/llvm-mingw; LLVM_VERSION llvmorg-23.1.5) + headers/CRT from `../../src/third_party/mingw-w64` (fork aphrody-labs/mingw-w64, src wins).
- Equivalent MSYS2 env: CLANG64 (ucrt + libc++ + lld + compiler-rt + libunwind/SEH). UCRT64/MINGW64 (gcc/ld/libstdc++) are out of scope for labs.
- Build happens on prd only (`ssh prd`, `nice -n 19`). Nothing is compiled on the PC.
