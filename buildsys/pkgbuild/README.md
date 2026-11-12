# buildsys/pkgbuild

PKGBUILD conventions (ABS/pkgbase layout): one dir per pkgbase, `_realname`, `mingw_arch`, `msys2_references` (cpe/purl + vcpkg/winget/nuget ids feeding xmap), split packages, `options=(lto)`. Own pkgbases (aphrody-*) go to `repos/<repo>/<pkgbase>/PKGBUILD`; upstream ones stay in `third_party/` and are referenced by `meta.json`.
