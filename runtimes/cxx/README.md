# runtimes/cxx

C++ standard libraries: libc++ (clang64/clangarm64, `import std` via std.cppm), libstdc++ (ucrt64/mingw64), MSVC STL (msvc-*, `import std` via std.ixx). ABI rule: never mix STLs across a DLL boundary; each env declares its STL in `environments/envs.toml`.
