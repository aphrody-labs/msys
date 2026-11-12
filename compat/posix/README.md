# compat/posix

POSIX/Arch-facing layer on Windows: sh/bash/dash, coreutils (GNU in MSYS env, uutils native), pacman CLI, FHS mapping (`/usr`, `/etc`, `/var/lib/pacman`, `/ucrt64`, `/clang64` -> install root), path conversion, `/etc/profile.d` env switching (MSYSTEM). gcc/glibc semantics only where applicable (Linux on fr2).
