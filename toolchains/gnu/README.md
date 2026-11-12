# toolchains/gnu

GCC/binutils (UCRT64/MINGW64, MSYS cygwin-gcc). Kept for upstream parity and for the MSYS env (msys2-runtime is built by cygwin gcc). Not the default compiler. Recipes: `third_party/MSYS2-packages`, `third_party/MINGW-packages`; mingw-w64 headers/CRT pinned from `$SRC_ROOT/third_party/mingw-w64` (src wins).
