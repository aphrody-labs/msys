# toolchains/msvc

MSVC ABI side: MSVC STL + vcruntime + Win11 SDK headers/libs, driven by clang-cl + lld-link (link.exe kept for parity checks). Acquisition: VS Build Tools via winget/DSC v3 (`compat/windows`) or a cargo-xwin-style splat on fr2 for cross builds. Never redistributed here (license); referenced by version in `pins.toml`. C++23 `import std`: MSVC STL `std.ixx` or libc++ `std.cppm`.
