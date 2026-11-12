# buildsys/devtools

Clean-build contract (Arch devtools/makechrootpkg equivalent): every package builds in a fresh throw-away root on fr2 or a CI runner (Linux: nspawn/bwrap chroot; Windows targets: fresh root from `distribution/images`). Inputs: pkgbase + env + ISA profile; outputs: signed .pkg.tar.zst + log + SBOM. Never on the owner PC.
