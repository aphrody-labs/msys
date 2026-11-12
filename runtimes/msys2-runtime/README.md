# runtimes/msys2-runtime

POSIX emulation DLL (msys-2.0.dll, Cygwin fork) used only by the MSYS env: fork(), signals, pty, symlinks, argv/env path conversion (MSYS2_ARG_CONV_EXCL, MSYS2_ENV_CONV_EXCL, MSYS_NO_PATHCONV). Patches live in `third_party/msys2-runtime` (fork); this dir documents the patch-queue policy and conversion rules. Native envs never link it.
