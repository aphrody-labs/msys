# formats/winget

winget bridge. Outbound: generated manifests (version/installer/defaultLocale) for our installer and MSIX, id `<winget_publisher>.<Name>` from identity.toml. Inbound: xmap links pkgbases to existing winget ids. Index source: `$SRC_ROOT/third_party/winget-pkgs` (git tree only). Machine setup via DSC v3: `compat/windows`.
