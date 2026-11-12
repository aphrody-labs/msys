# [NV] untested. MinGW (CLANG64-equivalent) triplet on llvm-mingw; complements labs x64-windows-llvm / x64-linux-llvm.
set(VCPKG_TARGET_ARCHITECTURE x64)
set(VCPKG_CRT_LINKAGE dynamic)
set(VCPKG_LIBRARY_LINKAGE static)
set(VCPKG_CMAKE_SYSTEM_NAME MinGW)
set(VCPKG_ENV_PASSTHROUGH LLVM_MINGW_ROOT)
set(VCPKG_C_FLAGS "-march=x86-64-v3")
set(VCPKG_CXX_FLAGS "-march=x86-64-v3 -stdlib=libc++")
set(VCPKG_LINKER_FLAGS "-fuse-ld=lld")
