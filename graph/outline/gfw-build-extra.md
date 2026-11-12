# Codebase Digest: gfw-build-extra

- Files analyzed: 532
- Total lines: 62668
- Total size: 2.35 MB
- Git branch: `main`
- Git HEAD commit: `44b61193 (git-extra: do not let `/etc/profile` cd to home (#769))`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
gfw-build-extra/
├── AGENTS.md (381 lines, 16.5 KB, ~4.6k tokens)
├── LICENSE.txt (360 lines, 18.3 KB, ~4.4k tokens)
├── Makefile (6 lines, 118 B, ~40 tokens)
├── README.md (73 lines, 5.6 KB, ~1.5k tokens)
├── ReleaseNotes.css (1 lines, 36 B, ~11 tokens)
├── ReleaseNotes.md (3325 lines, 254.0 KB, ~74.6k tokens)
├── add-release-note.js (1 lines, 36 B, ~11 tokens)
├── apply-from-lore.sh (2 lines, 53 B, ~18 tokens)
├── archive/
│   └── release.sh (3 lines, 90 B, ~28 tokens)
├── aslr-manager.ps1 (23 lines, 1.0 KB, ~281 tokens)
├── check-for-missing-dlls.sh (2 lines, 53 B, ~18 tokens)
├── commit-msys2.sh (6 lines, 187 B, ~56 tokens)
├── downgrade-pacman-package.sh (3 lines, 84 B, ~27 tokens)
├── download-stats.sh (1 lines, 36 B, ~11 tokens)
├── edit-git-bash.c (8 lines, 258 B, ~79 tokens)
├── estimate-installation-size.sh (2 lines, 52 B, ~18 tokens)
├── ever-green.sh (14 lines, 475 B, ~133 tokens)
├── get-sources.sh (3 lines, 78 B, ~26 tokens)
├── git-extra/
│   ├── 99-post-install-cleanup.post (6 lines, 204 B, ~58 tokens)
│   ├── Makefile (65 lines, 2.2 KB, ~733 tokens)
│   ├── PKGBUILD (222 lines, 9.2 KB, ~2.4k tokens)
│   ├── SystemInfo.cpp (42 lines, 2.9 KB, ~736 tokens)
│   ├── SystemInfo.h (18 lines, 745 B, ~188 tokens)
│   ├── WhoUses.cpp (11 lines, 452 B, ~127 tokens)
│   ├── aliases.sh (1 lines, 34 B, ~10 tokens)
│   ├── astextplain (33 lines, 961 B, ~311 tokens)
│   ├── bash_profile.sh (1 lines, 35 B, ~11 tokens)
│   ├── blocked-file-util.c (7 lines, 317 B, ~88 tokens)
│   ├── create-shortcut.c (6 lines, 240 B, ~74 tokens)
│   ├── cyg-dlls.sh (2 lines, 58 B, ~19 tokens)
│   ├── env.sh (1 lines, 35 B, ~11 tokens)
│   ├── getgit (277 lines, 9.0 KB, ~2.8k tokens)
│   ├── git-askpass.c (7 lines, 271 B, ~81 tokens)
│   ├── git-askpass.h (1 lines, 34 B, ~10 tokens)
│   ├── git-askpass.rc (18 lines, 564 B, ~183 tokens)
│   ├── git-askyesno.c (4 lines, 126 B, ~41 tokens)
│   ├── git-credential-helper-selector.c (23 lines, 1.1 KB, ~302 tokens)
│   ├── git-credential-helper-selector.manifest (21 lines, 801 B, ~219 tokens)
│   ├── git-credential-helper-selector.rc (3 lines, 76 B, ~20 tokens)
│   ├── git-extra.install.in (284 lines, 10.8 KB, ~3.6k tokens)
│   ├── git-prompt.sh (1 lines, 35 B, ~11 tokens)
│   ├── git-sdk.sh (2 lines, 56 B, ~18 tokens)
│   ├── git-update (8 lines, 218 B, ~65 tokens)
│   ├── git-update-git-for-windows (362 lines, 10.1 KB, ~3.2k tokens)
│   ├── git.nanorc (80 lines, 2.2 KB, ~729 tokens)
│   ├── gitattributes (22 lines, 514 B, ~145 tokens)
│   ├── gitconfig (14 lines, 203 B, ~56 tokens)
│   ├── inputrc (82 lines, 2.5 KB, ~785 tokens)
│   ├── notepad (33 lines, 635 B, ~227 tokens)
│   ├── proxy-lookup.c (7 lines, 221 B, ~69 tokens)
│   ├── sdk.completion (38 lines, 746 B, ~227 tokens)
│   ├── update-via-pacman.bat.in (102 lines, 3.6 KB, ~1.1k tokens)
│   ├── vi (3 lines, 25 B, ~11 tokens)
│   ├── vimrc (55 lines, 2.8 KB, ~763 tokens)
│   ├── wordpad (33 lines, 635 B, ~234 tokens)
│   └── zzz_rm_stackdumps.sh (2 lines, 67 B, ~20 tokens)
├── git-for-windows-keyring/
│   ├── PKGBUILD (34 lines, 1.3 KB, ~366 tokens)
│   ├── git-for-windows-keyring.install (11 lines, 202 B, ~64 tokens)
│   ├── git-for-windows-revoked (2 lines, 82 B, ~13 tokens)
│   └── git-for-windows-trusted (2 lines, 88 B, ~17 tokens)
├── gnupg-with-gpgkey.sh (1 lines, 35 B, ~11 tokens)
├── gpl-2.0.rtf (54 lines, 16.0 KB, ~3.9k tokens)
├── installer/
│   ├── HowToRelease.txt (66 lines, 2.1 KB, ~626 tokens)
│   ├── InnoSetup/
│   │   ├── Default.isl (440 lines, 23.4 KB, ~5.7k tokens)
│   │   ├── ISCmplr.dll.issig (8 lines, 359 B, ~70 tokens)
│   │   ├── ISPP.dll.issig (8 lines, 356 B, ~69 tokens)
│   │   ├── ISPPBuiltins.iss (377 lines, 12.0 KB, ~3.2k tokens)
│   │   ├── Languages/
│   │   │   ├── Arabic.isl (408 lines, 28.2 KB, ~5.9k tokens)
│   │   │   ├── Armenian.isl (395 lines, 28.9 KB, ~5.9k tokens)
│   │   │   ├── BrazilianPortuguese.isl (406 lines, 23.0 KB, ~5.4k tokens)
│   │   │   ├── Bulgarian.isl (404 lines, 34.6 KB, ~6.9k tokens)
│   │   │   ├── Catalan.isl (398 lines, 22.4 KB, ~5.5k tokens)
│   │   │   ├── ChineseSimplified.isl (417 lines, 20.6 KB, ~4.4k tokens)
│   │   │   ├── ChineseTraditional.isl (415 lines, 20.8 KB, ~4.5k tokens)
│   │   │   ├── Corsican.isl (453 lines, 28.1 KB, ~6.7k tokens)
│   │   │   ├── Czech.isl (402 lines, 24.1 KB, ~5.5k tokens)
│   │   │   ├── Danish.isl (401 lines, 21.6 KB, ~5.0k tokens)
│   │   │   ├── Dutch.isl (384 lines, 21.5 KB, ~5.0k tokens)
│   │   │   ├── Finnish.isl (383 lines, 20.6 KB, ~4.6k tokens)
│   │   │   ├── French.isl (428 lines, 26.0 KB, ~6.2k tokens)
│   │   │   ├── German.isl (428 lines, 24.8 KB, ~5.8k tokens)
│   │   │   ├── Hebrew.isl (399 lines, 25.1 KB, ~5.4k tokens)
│   │   │   ├── Hungarian.isl (408 lines, 23.3 KB, ~5.4k tokens)
│   │   │   ├── Icelandic.isl (386 lines, 21.7 KB, ~5.0k tokens)
│   │   │   ├── Italian.isl (415 lines, 23.2 KB, ~5.5k tokens)
│   │   │   ├── Japanese.isl (391 lines, 27.2 KB, ~5.1k tokens)
│   │   │   ├── Korean.isl (438 lines, 26.3 KB, ~5.8k tokens)
│   │   │   ├── Lithuanian.isl (435 lines, 24.2 KB, ~5.6k tokens)
│   │   │   ├── Norwegian.isl (402 lines, 21.3 KB, ~5.0k tokens)
│   │   │   ├── Polish.isl (401 lines, 23.5 KB, ~5.3k tokens)
│   │   │   ├── Portuguese.isl (392 lines, 23.0 KB, ~5.4k tokens)
│   │   │   ├── Russian.isl (405 lines, 32.4 KB, ~6.5k tokens)
│   │   │   ├── Slovak.isl (409 lines, 24.8 KB, ~5.6k tokens)
│   │   │   ├── Slovenian.isl (394 lines, 20.9 KB, ~4.8k tokens)
│   │   │   ├── Spanish.isl (407 lines, 23.4 KB, ~5.5k tokens)
│   │   │   ├── Swedish.isl (413 lines, 22.2 KB, ~5.1k tokens)
│   │   │   ├── Tamil.isl (409 lines, 46.0 KB, ~9.8k tokens)
│   │   │   ├── Thai.isl (408 lines, 39.9 KB, ~7.9k tokens)
│   │   │   ├── Turkish.isl (435 lines, 25.2 KB, ~5.6k tokens)
│   │   │   └── Ukrainian.isl (412 lines, 32.2 KB, ~6.5k tokens)
│   │   ├── Setup.e32.issig (8 lines, 357 B, ~69 tokens)
│   │   ├── Setup.e64.issig (8 lines, 357 B, ~69 tokens)
│   │   ├── SetupCustomStyle.e32.issig (8 lines, 368 B, ~71 tokens)
│   │   ├── SetupCustomStyle.e64.issig (8 lines, 368 B, ~71 tokens)
│   │   ├── SetupLdr.e32.issig (8 lines, 359 B, ~70 tokens)
│   │   ├── SetupLdr.e64.issig (8 lines, 360 B, ~70 tokens)
│   │   ├── is7z-x64.dll.issig (8 lines, 360 B, ~71 tokens)
│   │   ├── is7z.dll.issig (8 lines, 356 B, ~69 tokens)
│   │   ├── is7zxa-x64.dll.issig (8 lines, 361 B, ~71 tokens)
│   │   ├── is7zxa.dll.issig (8 lines, 357 B, ~69 tokens)
│   │   ├── is7zxr-x64.dll.issig (8 lines, 361 B, ~71 tokens)
│   │   ├── is7zxr.dll.issig (8 lines, 357 B, ~69 tokens)
│   │   ├── isbunzip-x64.dll.issig (8 lines, 362 B, ~71 tokens)
│   │   ├── isbunzip.dll.issig (8 lines, 358 B, ~70 tokens)
│   │   ├── isbzip-x64.dll.issig (8 lines, 360 B, ~71 tokens)
│   │   ├── isfaq.url (2 lines, 56 B, ~16 tokens)
│   │   ├── islzma-Arm64EC.dll.issig (8 lines, 365 B, ~72 tokens)
│   │   ├── islzma-x64.dll.issig (8 lines, 361 B, ~71 tokens)
│   │   ├── isscint-x64.dll.issig (8 lines, 363 B, ~71 tokens)
│   │   ├── isunzlib-x64.dll.issig (8 lines, 362 B, ~71 tokens)
│   │   ├── isunzlib.dll.issig (8 lines, 358 B, ~70 tokens)
│   │   ├── iszlib-x64.dll.issig (8 lines, 360 B, ~71 tokens)
│   │   ├── license.txt (32 lines, 1.5 KB, ~359 tokens)
│   │   └── whatsnew.htm (1 lines, 37 B, ~11 tokens)
│   ├── NOTICE.txt (5 lines, 344 B, ~86 tokens)
│   ├── checklist.txt (21 lines, 800 B, ~204 tokens)
│   ├── environment.inc.iss (143 lines, 5.9 KB, ~1.5k tokens)
│   ├── helpers.inc.iss (226 lines, 7.0 KB, ~1.9k tokens)
│   ├── install.iss (4011 lines, 170.5 KB, ~44.4k tokens)
│   ├── modules.inc.iss (442 lines, 15.7 KB, ~4.0k tokens)
│   ├── putty.inc.iss (65 lines, 2.7 KB, ~673 tokens)
│   ├── release.sh (2 lines, 53 B, ~18 tokens)
│   ├── run-checklist.sh (2 lines, 54 B, ~18 tokens)
│   └── update-inno-setup.sh (2 lines, 53 B, ~18 tokens)
├── keep-despite-upgrade.txt (0 lines, 0 B, ~0 tokens)
├── make-file-list.sh (4 lines, 118 B, ~37 tokens)
├── mingit/
│   └── release.sh (2 lines, 55 B, ~18 tokens)
├── mingw-w64-cv2pdb/
│   └── PKGBUILD (55 lines, 1.3 KB, ~434 tokens)
├── mingw-w64-git-credential-manager/
│   ├── PKGBUILD (65 lines, 2.1 KB, ~623 tokens)
│   └── git-credential-manager.install (11 lines, 168 B, ~46 tokens)
├── mingw-w64-git-lfs/
│   ├── PKGBUILD (57 lines, 1.7 KB, ~508 tokens)
│   └── git-lfs.install (14 lines, 359 B, ~103 tokens)
├── mingw-w64-git-sizer/
│   └── PKGBUILD (37 lines, 1.1 KB, ~329 tokens)
├── mingw-w64-wintoast/
│   └── PKGBUILD (53 lines, 1.3 KB, ~414 tokens)
├── msbuild/
│   └── hMSBuild.bat (522 lines, 19.3 KB, ~7.0k tokens)
├── msi/
│   ├── GitAdditionalOptionsDlg.wxs (29 lines, 2.5 KB, ~745 tokens)
│   ├── GitChooseEnvironmentDlg.wxs (40 lines, 3.1 KB, ~948 tokens)
│   ├── GitChooseTerminalDlg.wxs (35 lines, 2.7 KB, ~826 tokens)
│   ├── GitCustomizeLineEndingsDlg.wxs (40 lines, 3.2 KB, ~973 tokens)
│   ├── GitLineEndingsDlg.wxs (30 lines, 2.3 KB, ~716 tokens)
│   ├── GitMaintenanceTypeDlg.wxs (43 lines, 3.9 KB, ~1.2k tokens)
│   ├── GitProduct.wxs (383 lines, 25.3 KB, ~6.9k tokens)
│   ├── GitShellOptionsDlg.wxs (27 lines, 2.9 KB, ~876 tokens)
│   ├── GitUI_en-us.wxl (93 lines, 12.6 KB, ~3.1k tokens)
│   ├── release.sh (4 lines, 104 B, ~35 tokens)
│   ├── update-wix-toolset.sh (2 lines, 53 B, ~18 tokens)
│   └── wix/
│       ├── candle.exe.config (18 lines, 651 B, ~170 tokens)
│       ├── heat.exe.config (21 lines, 776 B, ~201 tokens)
│       ├── insignia.exe.config (15 lines, 574 B, ~151 tokens)
│       ├── light.exe.config (18 lines, 651 B, ~170 tokens)
│       └── lit.exe.config (18 lines, 651 B, ~170 tokens)
├── nuget/
│   ├── GitForWindows.nuspec.in (32 lines, 1.5 KB, ~462 tokens)
│   ├── Install.ps1 (3 lines, 83 B, ~24 tokens)
│   └── release.sh (2 lines, 53 B, ~18 tokens)
├── pacman-helper.sh (13 lines, 363 B, ~114 tokens)
├── pe-imports.ps1 (145 lines, 6.0 KB, ~1.6k tokens)
├── please.sh (20 lines, 642 B, ~185 tokens)
├── portable/
│   ├── release.sh (2 lines, 53 B, ~18 tokens)
│   └── root/
│       └── README.portable (106 lines, 3.7 KB, ~1.0k tokens)
├── post-install.bat (53 lines, 2.1 KB, ~642 tokens)
├── pull_request_template.md (25 lines, 1.0 KB, ~300 tokens)
├── recreate-git-src-package.sh (2 lines, 52 B, ~18 tokens)
├── render-release-notes.sh (4 lines, 112 B, ~36 tokens)
├── sdk-installer/
│   ├── release.sh (2 lines, 53 B, ~18 tokens)
│   └── setup-git-sdk.bat (50 lines, 1.3 KB, ~376 tokens)
├── send-to-virus-total.sh (3 lines, 80 B, ~27 tokens)
├── shears.sh (17 lines, 458 B, ~146 tokens)
├── signtool.sh (2 lines, 52 B, ~18 tokens)
├── upload-to-github.sh (2 lines, 52 B, ~18 tokens)
└── versions/
    ├── get-package-versions.sh (3 lines, 77 B, ~26 tokens)
    ├── package-versions-2.10.0-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.10.0.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.10.1-MinGit.txt (53 lines, 1.4 KB, ~505 tokens)
    ├── package-versions-2.10.1.2-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.10.1.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.10.2-MinGit.txt (53 lines, 1.3 KB, ~499 tokens)
    ├── package-versions-2.10.2.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.11.0-MinGit.txt (54 lines, 1.3 KB, ~511 tokens)
    ├── package-versions-2.11.0.2-MinGit.txt (53 lines, 1.3 KB, ~493 tokens)
    ├── package-versions-2.11.0.2.txt (131 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.11.0.3-MinGit.txt (53 lines, 1.3 KB, ~493 tokens)
    ├── package-versions-2.11.0.3.txt (131 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.11.0.txt (132 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.11.1-MinGit-prerelease-1.txt (54 lines, 1.4 KB, ~520 tokens)
    ├── package-versions-2.11.1-MinGit.txt (54 lines, 1.3 KB, ~509 tokens)
    ├── package-versions-2.11.1.2-MinGit.txt (54 lines, 1.4 KB, ~520 tokens)
    ├── package-versions-2.11.1.3-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.11.1.4-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.11.1.5-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.11.1.txt (132 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.12.0-MinGit.txt (54 lines, 1.3 KB, ~507 tokens)
    ├── package-versions-2.12.0.2-MinGit.txt (56 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.12.0.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.12.1-MinGit.txt (56 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.12.1.txt (133 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.12.2-MinGit.txt (53 lines, 1.3 KB, ~507 tokens)
    ├── package-versions-2.12.2.2-mingit.txt (53 lines, 1.4 KB, ~514 tokens)
    ├── package-versions-2.12.2.2.txt (133 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.12.2.3-MinGit.txt (49 lines, 1.2 KB, ~457 tokens)
    ├── package-versions-2.12.2.txt (133 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.13.0-MinGit.txt (53 lines, 1.3 KB, ~506 tokens)
    ├── package-versions-2.13.0.txt (133 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.13.1-MinGit.txt (55 lines, 1.4 KB, ~532 tokens)
    ├── package-versions-2.13.1.2-MinGit.txt (55 lines, 1.4 KB, ~532 tokens)
    ├── package-versions-2.13.1.2.txt (140 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.13.1.3-MinGit.txt (49 lines, 1.2 KB, ~457 tokens)
    ├── package-versions-2.13.1.4-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.13.1.6-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.13.1.7-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.13.1.txt (140 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.13.2-MinGit.txt (55 lines, 1.4 KB, ~532 tokens)
    ├── package-versions-2.13.2.txt (140 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.13.3-MinGit.txt (55 lines, 1.4 KB, ~532 tokens)
    ├── package-versions-2.13.3.txt (140 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.14.0-MinGit.txt (54 lines, 1.4 KB, ~517 tokens)
    ├── package-versions-2.14.0.2-MinGit.txt (54 lines, 1.4 KB, ~524 tokens)
    ├── package-versions-2.14.0.2.txt (139 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.14.0.txt (139 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.14.1-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.14.1.txt (132 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.14.2-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.14.2.2-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.14.2.2.txt (136 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.14.2.3-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.14.2.3.txt (136 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.14.2.txt (134 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.14.3-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.14.3.2-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.3.txt (138 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.14.4-MinGit.txt (49 lines, 1.2 KB, ~461 tokens)
    ├── package-versions-2.14.4.1-MinGit.txt (49 lines, 1.2 KB, ~461 tokens)
    ├── package-versions-2.14.4.2-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.3-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.4-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.5-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.6-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.7-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.14.4.8-MinGit.txt (50 lines, 1.3 KB, ~475 tokens)
    ├── package-versions-2.15.0-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.15.0.txt (138 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.15.1-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.15.1.2-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.15.1.2.txt (144 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.15.1.txt (144 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.16.0.2-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.16.0.2.txt (144 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.16.1-MinGit.txt (50 lines, 1.3 KB, ~476 tokens)
    ├── package-versions-2.16.1.2-MinGit.txt (49 lines, 1.2 KB, ~464 tokens)
    ├── package-versions-2.16.1.2.txt (141 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.16.1.3-MinGit.txt (49 lines, 1.2 KB, ~464 tokens)
    ├── package-versions-2.16.1.3.txt (141 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.16.1.4-MinGit.txt (49 lines, 1.2 KB, ~464 tokens)
    ├── package-versions-2.16.1.4.txt (141 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.16.1.txt (144 lines, 3.2 KB, ~1.2k tokens)
    ├── package-versions-2.16.2-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.16.2.txt (141 lines, 3.1 KB, ~1.2k tokens)
    ├── package-versions-2.16.3-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.16.3.txt (146 lines, 3.3 KB, ~1.3k tokens)
    ├── package-versions-2.17.0-MinGit.txt (49 lines, 1.2 KB, ~463 tokens)
    ├── package-versions-2.17.0.txt (146 lines, 3.3 KB, ~1.3k tokens)
    ├── package-versions-2.17.1-MinGit.txt (49 lines, 1.2 KB, ~461 tokens)
    ├── package-versions-2.17.1.2-MinGit.txt (49 lines, 1.2 KB, ~461 tokens)
    ├── package-versions-2.17.1.2.txt (147 lines, 3.3 KB, ~1.3k tokens)
    ├── package-versions-2.17.1.txt (147 lines, 3.3 KB, ~1.3k tokens)
    ├── package-versions-2.18.0-MinGit.txt (49 lines, 1.2 KB, ~462 tokens)
    ├── package-versions-2.18.0.txt (148 lines, 3.4 KB, ~1.3k tokens)
    ├── package-versions-2.19.0-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.0.txt (158 lines, 3.5 KB, ~1.3k tokens)
    ├── package-versions-2.19.1-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.1.txt (158 lines, 3.5 KB, ~1.3k tokens)
    ├── package-versions-2.19.2-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.2.2-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.2.3-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.2.4-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.19.2.txt (159 lines, 3.6 KB, ~1.3k tokens)
    ├── package-versions-2.20.0-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.20.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.20.1-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.20.1.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.21.0-MinGit.txt (51 lines, 1.3 KB, ~481 tokens)
    ├── package-versions-2.21.0.2-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.3-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.4-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.5-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.6-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.7-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.21.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.22.0-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.22.0.2-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.22.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.23.0-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.23.0.2-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.23.0.3-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.23.0.4-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.23.0.5-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.23.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.24.0-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.24.0.2-MinGit.txt (51 lines, 1.3 KB, ~479 tokens)
    ├── package-versions-2.24.0.2.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.24.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.24.1.2-MinGit.txt (51 lines, 1.3 KB, ~481 tokens)
    ├── package-versions-2.24.1.2.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.25.0-MinGit.txt (51 lines, 1.3 KB, ~481 tokens)
    ├── package-versions-2.25.0.2-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.25.0.3-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.25.0.4-MinGit.txt (51 lines, 1.3 KB, ~480 tokens)
    ├── package-versions-2.25.0.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.25.1-MinGit.txt (51 lines, 1.3 KB, ~478 tokens)
    ├── package-versions-2.25.1.txt (159 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.26.0-MinGit.txt (53 lines, 1.3 KB, ~492 tokens)
    ├── package-versions-2.26.0.txt (161 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.26.1-MinGit.txt (53 lines, 1.3 KB, ~492 tokens)
    ├── package-versions-2.26.1.txt (161 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.26.2-MinGit.txt (53 lines, 1.3 KB, ~490 tokens)
    ├── package-versions-2.26.2.txt (161 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.27.0-MinGit.txt (53 lines, 1.3 KB, ~491 tokens)
    ├── package-versions-2.27.0.txt (162 lines, 3.6 KB, ~1.4k tokens)
    ├── package-versions-2.28.0-MinGit.txt (55 lines, 1.4 KB, ~522 tokens)
    ├── package-versions-2.28.0.txt (164 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.29.0-MinGit.txt (57 lines, 1.4 KB, ~539 tokens)
    ├── package-versions-2.29.0.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.29.1-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.29.1.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.29.2-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.29.2.2-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.29.2.2.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.29.2.3-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.29.2.3.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.29.2.4-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.29.2.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.30.0-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.30.0.2-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.30.0.2.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.30.0.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.30.1-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.30.1.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.30.2-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.30.2.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.31.0-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.31.0.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.31.1-MinGit.txt (57 lines, 1.4 KB, ~541 tokens)
    ├── package-versions-2.31.1.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.32.0-MinGit.txt (59 lines, 1.5 KB, ~564 tokens)
    ├── package-versions-2.32.0.2-MinGit.txt (58 lines, 1.5 KB, ~558 tokens)
    ├── package-versions-2.32.0.2.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.32.0.txt (169 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.33.0-MinGit.txt (58 lines, 1.5 KB, ~558 tokens)
    ├── package-versions-2.33.0.2-MinGit.txt (57 lines, 1.5 KB, ~546 tokens)
    ├── package-versions-2.33.0.2.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.33.0.txt (168 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.33.1-MinGit.txt (56 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.33.1.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.34.0-MinGit.txt (56 lines, 1.4 KB, ~531 tokens)
    ├── package-versions-2.34.0.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.34.1-MinGit.txt (56 lines, 1.4 KB, ~531 tokens)
    ├── package-versions-2.34.1.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.35.0-MinGit.txt (56 lines, 1.4 KB, ~525 tokens)
    ├── package-versions-2.35.0.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.35.1-MinGit.txt (56 lines, 1.4 KB, ~525 tokens)
    ├── package-versions-2.35.1.2-MinGit.txt (56 lines, 1.4 KB, ~525 tokens)
    ├── package-versions-2.35.1.2.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.35.1.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.35.2-MinGit.txt (56 lines, 1.4 KB, ~525 tokens)
    ├── package-versions-2.35.2.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.35.3-MinGit.txt (56 lines, 1.4 KB, ~525 tokens)
    ├── package-versions-2.35.3.txt (165 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.36.0-MinGit.txt (56 lines, 1.4 KB, ~523 tokens)
    ├── package-versions-2.36.0.txt (164 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.36.1-MinGit.txt (57 lines, 1.4 KB, ~528 tokens)
    ├── package-versions-2.36.1.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.37.0-MinGit.txt (57 lines, 1.4 KB, ~529 tokens)
    ├── package-versions-2.37.0.txt (169 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.37.1-MinGit.txt (57 lines, 1.4 KB, ~529 tokens)
    ├── package-versions-2.37.1.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.37.2-MinGit.txt (57 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.37.2.2-MinGit.txt (57 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.37.2.2.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.37.2.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.37.3-MinGit.txt (57 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.37.3.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.38.0-MinGit.txt (57 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.38.0.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.38.1-MinGit.txt (57 lines, 1.4 KB, ~530 tokens)
    ├── package-versions-2.38.1.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.39.0-MinGit.txt (53 lines, 1.3 KB, ~485 tokens)
    ├── package-versions-2.39.0.2-MinGit.txt (54 lines, 1.3 KB, ~497 tokens)
    ├── package-versions-2.39.0.2.txt (168 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.39.0.txt (167 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.39.1-MinGit.txt (54 lines, 1.3 KB, ~497 tokens)
    ├── package-versions-2.39.1.txt (168 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.39.2-MinGit.txt (54 lines, 1.3 KB, ~497 tokens)
    ├── package-versions-2.39.2.txt (168 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.39.4-MinGit.txt (51 lines, 1.2 KB, ~467 tokens)
    ├── package-versions-2.40.0-MinGit.txt (51 lines, 1.2 KB, ~467 tokens)
    ├── package-versions-2.40.0.txt (167 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.40.1-MinGit.txt (51 lines, 1.2 KB, ~467 tokens)
    ├── package-versions-2.40.1.txt (167 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.41.0-MinGit.txt (54 lines, 1.4 KB, ~514 tokens)
    ├── package-versions-2.41.0.2-MinGit.txt (54 lines, 1.4 KB, ~511 tokens)
    ├── package-versions-2.41.0.2.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.41.0.3-MinGit.txt (54 lines, 1.4 KB, ~511 tokens)
    ├── package-versions-2.41.0.3.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.41.0.txt (170 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.42.0-MinGit.txt (54 lines, 1.4 KB, ~510 tokens)
    ├── package-versions-2.42.0.2-MinGit.txt (54 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.42.0.2.txt (171 lines, 3.8 KB, ~1.5k tokens)
    ├── package-versions-2.42.0.txt (171 lines, 3.8 KB, ~1.5k tokens)
    ├── package-versions-2.43.0-MinGit.txt (54 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.43.0.txt (171 lines, 3.8 KB, ~1.5k tokens)
    ├── package-versions-2.43.4-MinGit.txt (54 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.44.0-MinGit.txt (54 lines, 1.4 KB, ~513 tokens)
    ├── package-versions-2.44.0.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.44.1-MinGit.txt (54 lines, 1.4 KB, ~513 tokens)
    ├── package-versions-2.44.1.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.45.0-MinGit.txt (54 lines, 1.4 KB, ~513 tokens)
    ├── package-versions-2.45.0.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.45.1-MinGit.txt (54 lines, 1.4 KB, ~513 tokens)
    ├── package-versions-2.45.1.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.45.2-MinGit.txt (54 lines, 1.4 KB, ~512 tokens)
    ├── package-versions-2.45.2.2-MinGit.txt (54 lines, 1.4 KB, ~512 tokens)
    ├── package-versions-2.45.2.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.46.0-MinGit.txt (54 lines, 1.4 KB, ~513 tokens)
    ├── package-versions-2.46.0.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.46.1-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.46.1.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.46.2-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.46.2.2-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.46.2.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.47.0-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.47.0.2-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.47.0.2.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.47.0.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.47.1-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.47.1.2-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.47.1.2.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.47.1.txt (167 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.47.3-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.47.3.2-MinGit.txt (54 lines, 1.4 KB, ~515 tokens)
    ├── package-versions-2.48.1-MinGit.txt (53 lines, 1.4 KB, ~509 tokens)
    ├── package-versions-2.48.1.txt (164 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.49.0-MinGit.txt (53 lines, 1.4 KB, ~509 tokens)
    ├── package-versions-2.49.0.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.49.1-MinGit.txt (53 lines, 1.4 KB, ~509 tokens)
    ├── package-versions-2.49.1.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.5.0.txt (112 lines, 2.5 KB, ~954 tokens)
    ├── package-versions-2.5.1.txt (3 lines, 49 B, ~19 tokens)
    ├── package-versions-2.5.2.2.txt (117 lines, 2.6 KB, ~991 tokens)
    ├── package-versions-2.5.2.txt (117 lines, 2.6 KB, ~991 tokens)
    ├── package-versions-2.5.3.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.50.0-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.50.0.2-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.50.0.2.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.50.0.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.50.1-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.50.1.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.51.0-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.51.0.2-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.51.0.2.txt (164 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.51.0.txt (164 lines, 3.8 KB, ~1.4k tokens)
    ├── package-versions-2.51.1-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.51.1.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.51.2-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.51.2.2-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.51.2.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.52.0-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.52.0.2-MinGit.txt (53 lines, 1.4 KB, ~508 tokens)
    ├── package-versions-2.52.0.txt (162 lines, 3.7 KB, ~1.4k tokens)
    ├── package-versions-2.53.0-MinGit.txt (66 lines, 1.7 KB, ~652 tokens)
    ├── package-versions-2.53.0.2-MinGit.txt (66 lines, 1.7 KB, ~652 tokens)
    ├── package-versions-2.53.0.2.txt (170 lines, 4.0 KB, ~1.5k tokens)
    ├── package-versions-2.53.0.3-MinGit.txt (66 lines, 1.7 KB, ~652 tokens)
    ├── package-versions-2.53.0.3.txt (170 lines, 4.0 KB, ~1.5k tokens)
    ├── package-versions-2.53.0.4-MinGit.txt (66 lines, 1.7 KB, ~652 tokens)
    ├── package-versions-2.53.0.txt (170 lines, 4.0 KB, ~1.5k tokens)
    ├── package-versions-2.54.0-MinGit.txt (60 lines, 1.6 KB, ~612 tokens)
    ├── package-versions-2.54.0.2-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.54.0.3-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.54.0.txt (173 lines, 4.0 KB, ~1.5k tokens)
    ├── package-versions-2.55.0-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.55.0.2-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.55.0.2.txt (170 lines, 3.9 KB, ~1.5k tokens)
    ├── package-versions-2.55.0.3-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.55.0.3.txt (170 lines, 3.9 KB, ~1.5k tokens)
    ├── package-versions-2.55.0.5-MinGit.txt (60 lines, 1.7 KB, ~613 tokens)
    ├── package-versions-2.55.0.5.txt (170 lines, 3.9 KB, ~1.5k tokens)
    ├── package-versions-2.55.0.txt (170 lines, 3.9 KB, ~1.5k tokens)
    ├── package-versions-2.56.0-MinGit.txt (67 lines, 2.1 KB, ~766 tokens)
    ├── package-versions-2.56.0.2-MinGit.txt (67 lines, 2.1 KB, ~766 tokens)
    ├── package-versions-2.56.0.2.txt (176 lines, 4.4 KB, ~1.7k tokens)
    ├── package-versions-2.56.0.3-MinGit.txt (67 lines, 2.1 KB, ~766 tokens)
    ├── package-versions-2.56.0.3.txt (176 lines, 4.4 KB, ~1.7k tokens)
    ├── package-versions-2.56.0.4-MinGit.txt (67 lines, 2.1 KB, ~766 tokens)
    ├── package-versions-2.56.0.4.txt (176 lines, 4.4 KB, ~1.7k tokens)
    ├── package-versions-2.56.0.txt (181 lines, 4.5 KB, ~1.7k tokens)
    ├── package-versions-2.56.1-MinGit.txt (67 lines, 2.1 KB, ~766 tokens)
    ├── package-versions-2.56.1.txt (176 lines, 4.4 KB, ~1.7k tokens)
    ├── package-versions-2.6.0.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.6.1.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.6.2.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.6.3.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.6.4.txt (125 lines, 2.8 KB, ~1.0k tokens)
    ├── package-versions-2.7.0.2.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.7.0.txt (125 lines, 2.8 KB, ~1.0k tokens)
    ├── package-versions-2.7.1.2.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.7.1.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.7.2.txt (125 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.7.3.txt (126 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.7.4.txt (126 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.8.0.txt (126 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.8.1.txt (126 lines, 2.8 KB, ~1.1k tokens)
    ├── package-versions-2.8.2.txt (130 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.8.3.txt (130 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.8.4.txt (130 lines, 2.9 KB, ~1.1k tokens)
    ├── package-versions-2.9.0.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.9.2-MinGit.txt (53 lines, 1.4 KB, ~505 tokens)
    ├── package-versions-2.9.2.2-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.9.2.3-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.9.2.txt (131 lines, 3.0 KB, ~1.1k tokens)
    ├── package-versions-2.9.3-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.9.3.2-MinGit.txt (53 lines, 1.3 KB, ~498 tokens)
    ├── package-versions-2.9.3.2.txt (131 lines, 3.0 KB, ~1.1k tokens)
    └── package-versions-2.9.3.txt (131 lines, 3.0 KB, ~1.1k tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# Build environment for Git for Windows

This build-extra repository is a core part of the Git for Windows SDK, the build environment for [Git for Windows](https://gitforwindows.org/). Any issues should be reported using the project's main [Git fork](https://github.com/git-for-windows/git).

The easiest way to install Git for Windows SDK is via the [Git SDK installer](https://github.com/git-for-windows/build-extra/releases/latest). This installer will clone our [repositories](http://github.com/git-for-windows/), including all the necessary components to build Git for Windows, and perform an initial build. It will also install a shortcut to the Git SDK Bash on the desktop.

To check out the `build-extra` project in the Git SDK, issue the following commands in the Git SDK Bash:

```sh
cd /usr/src/build-extra
git fetch
git checkout main
```

# Components of the Git for Windows SDK

The build environment brings all the necessary parts required to build a Git for Windows installer, or a portable Git for Windows ("portable" == "USB drive edition", i.e. you can run it without installing, from wherever it was unpacked).

## Git for Windows

The most important part of Git for Windows is [Git](https://git-scm.com/), obviously. The Git for Windows project maintains [a friendly fork](https://github.com/git-for-windows/git) of the "upstream" [Git project](https://github.com/git/git). The idea is that the Git for Windows repository serves as a test bed to develop patches and patch series that are specific to the Windows port, and once the patches stabilized, they are [submitted upstream](https://github.com/git-for-windows/git/tree/main/Documentation/SubmittingPatches).

## MSYS2

Git is not a monolithic executable, but consists of a couple of executables written in C, a couple of Bash scripts, a couple of Perl scripts, and a couple of Tcl/Tk scripts. Some parts (not supported by Git for Windows yet) are written in other script languages, still.

To support those scripts, Git for Windows uses [MSYS2](https://msys2.github.io/), a project providing a minimal POSIX emulation layer (based on [Cygwin](https://cygwin.com)), a package management system (named "Pacman", borrowed from Arch Linux) and a number of packages that are kept up-to-date by an active team of maintainers, including Bash, Perl, Subversion, etc.

### The difference between MSYS2 and MinGW

MSYS2 refers to the libraries and programs that use the POSIX emulation layer ("msys2 runtime", derived from Cygwin's `cygwin1.dll`). It is very easy to port libraries and programs from Unix/Linux because most of the POSIX semantics is emulated reasonably well, for example [the `fork()` function](http://pubs.opengroup.org/onlinepubs/000095399/functions/fork.html). Bash and Perl are examples of MSYS2 programs.

MinGW refers to libraries and programs that are compiled using GNU tools but do not require any POSIX semantics, instead relying on the standard Win32 API and the C runtime library. MinGW stands for "Minimal GNU for Windows". Examples: cURL (a library to talk to remote servers via HTTP(S), (S)FTP, etc), emacs, Inkscape, etc

The POSIX emulation layer of MSYS2 binaries is convenient, but comes at a cost: Typically, MSYS2 programs are noticably slower than their MinGW counterparts (if there are such counterparts). As a consequence, the Git for Windows project tries to provide as many components as possible as MinGW binaries.

### MinGW packages

The MinGW packages are built from the `MINGW-packages` repository which can be initialized in the Git SDK Bash via

```sh
cd /usr/src/MINGW-packages
git fetch
git checkout main
```

The packages inside the `/usr/src/MINGW-packages/` directory can then be built by executing `makepkg-mingw -s` in the appropriate subdirectory.

MinGW packages can be built for both `i686` and `x86_64` architectures at the same time by making sure that both toolchains are installed (`pacman -Sy mingw-w64-i686-toolchain mingw-w64-x86_64-toolchain`) before running `makepkg-mingw`.

### MSYS2 packages

The MSYS2 packages are built from the `MSYS2-packages` repository which can be initialized in the Git SDK Bash via

```sh
cd /usr/src/MSYS2-packages
git fetch
git checkout main
```

To build the packages inside the `/usr/src/MSYS2-packages/` directory, the user has to launch a special shell by double-clicking the `msys2_shell.bat` script in the top-level directory of the Git SDK, switch the working directory to the appropriate subdirectory of `/usr/src/MSYS2-packages/` and then execute `makepkg -s`. Before the first MSYS2 package is built, the prerequisite development packages have to be installed by executing `pacman -Sy base-devel binutils`.

## Installer generators

The Git for Windows project aims to provide three different types of installers:

- _Git for Windows_ for end users. The subdirectory `installer/` contains the files to generate this installer.
- _Portable Git for Windows_ for end users ("USB drive edition"). This installer is actually a self-extracting `.7z` archive, and can be generated using the files in `portable/`.
- The _Git for Windows SDK_ for Git for Windows contributors. This is a complete development environment to build Git for Windows, including Git, Bash, cURL, etc (including these three installers, of course). The files to generate this installer live in `sdk-installer/`.

## Support scripts/files

The `build-extra` repository is also the home of other resources necessary to develop and maintain Git for Windows. For example, it contains the [Git garden shears](https://github.com/git-for-windows/build-extra/blob/main/shears.sh) that help with updating Git for Windows' source code whenever new upstream Git versions are released ("merging rebase").


================================================
FILE: AGENTS.md
================================================
# Git for Windows build-extra - Development Guide

## Background

This repository is the support and release-engineering companion to the
[Git for Windows fork](https://github.com/git-for-windows/git). While that
sibling repository holds the Git source code itself, `build-extra` contains
the definitions for building shippable artifacts (installer scripts,
portable-archive generators, MSI/MSIX/NuGet packaging), the custom Pacman
packages for bundled components, release-note management, and the
`git-extra` package that ships shell configurations and helper utilities.

Much of the release automation that historically lived in `please.sh` has
been migrated to the sibling
[git-for-windows-automation](https://github.com/git-for-windows/git-for-windows-automation)
repository, which houses GitHub workflows triggered by slash commands via
the GitForWindowsHelper GitHub App. That repository now drives the end-to-end
release flow (tagging, building artifacts across architectures, deploying
Pacman packages, publishing GitHub releases, updating the website). What
remains in `build-extra` is the artifact *definitions* (how to assemble an
installer, a portable archive, a MinGit bundle, etc.) and the packaging
recipes, while the *orchestration* of when and how those are invoked in CI
lives in `git-for-windows-automation`.

The repository lives inside a Git for Windows SDK at `/usr/src/build-extra`.
Most of its scripts assume they run in a Git SDK Bash environment (MSYS2 +
MinGW toolchain).

### Local SDK Revision

The local SDK (e.g. `D:\git-sdk-64`) may lag behind what CI runs
against.  When investigating a CI failure that involves SDK file
contents, check the build-installers directory (e.g.
`D:\git-sdk-64-build-installers`) or query the specific commit in the
remote git-sdk-64/32/arm64 repository rather than assuming the local
filesystem reflects the failing state.

## Repository Structure

### Installer / Artifact Generators

Each artifact type lives in its own subdirectory and ships a `release.sh`
that produces the final output:

| Directory        | Artifact                                            |
|------------------|-----------------------------------------------------|
| `installer/`     | Inno Setup based `.exe` installer for end users     |
| `portable/`      | Self-extracting `.7z` archive ("USB drive edition") |
| `mingit/`        | MinGit, a minimal redistribution-friendly Git       |
| `msi/`           | WiX-based `.msi` installer (stale, not built)       |
| `msix/`          | MSIX / Windows Store package (stale, not built)     |
| `nuget/`         | NuGet packages for CI consumption                   |
| `sdk-installer/` | Full Git for Windows SDK installer                  |

### Custom Pacman Packages

Several bundled components are not part of upstream MSYS2 and are packaged
here using Pacman `PKGBUILD` files:

| Directory                        | Component                         |
|----------------------------------|-----------------------------------|
| `git-extra/`                     | Helpers, shell configs, shortcuts |
| `git-for-windows-keyring/`       | GPG keyring for package signing   |
| `mingw-w64-git-credential-manager/` | Git Credential Manager         |
| `mingw-w64-git-lfs/`            | Git LFS                           |
| `mingw-w64-git-sizer/`          | git-sizer                         |
| `mingw-w64-wintoast/`           | Windows toast notifications       |
| `mingw-w64-cv2pdb/`             | Convert debug info to PDB format  |

These packages are built with `makepkg-mingw -s` (MinGW packages) or
`makepkg -s` (MSYS2 packages) from within the appropriate subdirectory.

### Pacman Repository Interactions

The Git for Windows Pacman repository can *shadow* upstream MSYS2
packages by shipping a build with a higher `pkgrel`.  When upstream
rebuilds a package (e.g. for a Perl major version bump), the upstream
`pkgrel` may be lower than the Git for Windows one, causing
`pacman -Syu` to skip the rebuild.  Use `pacman -Syuu` (double `-u`)
to allow downgrades in that situation.  The SDK sync scripts live in
the git-sdk-64/32/arm64 repos (`update-via-pacman.ps1`).

### Key Scripts

| Script                 | Purpose                                          |
|------------------------|--------------------------------------------------|
| `please.sh`            | SDK artifact creation and PDB bundling            |
| `shears.sh`            | "Git garden shears" for merging-rebases           |
| `make-file-list.sh`    | Generates file lists for installer artifacts (see below) |
| `check-for-missing-dlls.sh` | Verifies DLL dependencies in installer file lists |
| `pe-imports.ps1`       | PowerShell PE import-table parser (fallback for `objdump`) |
| `add-release-note.js`  | Adds entries to `ReleaseNotes.md` (Node.js)       |
| `render-release-notes.sh` | Converts `ReleaseNotes.md` to HTML             |
| `pacman-helper.sh`     | Helper for Pacman package operations              |

### Release Notes

`ReleaseNotes.md` is the single source of truth for the Git for Windows
release notes. The `add-release-note.js` script (invoked by the
`add-release-note.yml` GitHub workflow) appends entries programmatically.
`render-release-notes.sh` converts Markdown to the HTML shipped with
installers, styled by `ReleaseNotes.css`.

### CI / GitHub Workflows

| Workflow                     | Trigger    | Purpose                       |
|------------------------------|------------|-------------------------------|
| `.github/workflows/main.yml`| PR         | Builds changed packages and artifacts, runs installer validation |
| `.github/workflows/add-release-note.yml` | Dispatch | Adds a release note entry |

The PR workflow automatically determines which packages and artifacts are
affected by a pull request and builds only those. It uses a matrix strategy
covering x86_64 and aarch64 architectures.

The actual release workflows (tagging, building release artifacts, deploying
packages, publishing GitHub releases) live in the
[git-for-windows-automation](https://github.com/git-for-windows/git-for-windows-automation)
repository. That repository's workflows call into `build-extra`'s
`release.sh` scripts and `please.sh` to do the actual work, but the
orchestration and triggering logic is over there.

## `please.sh`

Historically, `please.sh` was the central automation Swiss Army knife for
all of Git for Windows release engineering. Over time, most of that
functionality has been migrated to `git-for-windows-automation` workflows
(and some was simply retired). What remains is a smaller set of SDK-related
utilities. Run it without arguments for a usage summary. Subcommands are
shell functions whose arguments are documented in a comment on the function
definition line. Key remaining subcommands:

- `create-sdk-artifact` -- Extracts a subset of the full SDK for CI use
  (e.g. `build-installers`, `minimal`, `makepkg-git`, `full`). This is
  heavily used by CI workflows both here and in
  `git-for-windows-automation`.
- `bundle-pdbs` -- Collects PDB debug symbol files for a release.

## `make-file-list.sh`

This script produces the list of files that go into each installer artifact.
It has two layers of exclusion that interact in non-obvious ways:

1. **`PACKAGE_EXCLUDES`** -- a space-separated list of package names
   passed through `grep -v` after `pactree -u` expands the dependency
   tree.  Packages listed here (and their files) are dropped entirely.
   The list is extended for `MINIMAL_GIT` builds.  Note that `pactree`
   still *traverses* excluded packages, so transitive dependencies of
   an excluded package can still appear if they are not themselves
   excluded.

2. **`grep -v` file-pattern filters** -- individual file paths are
   removed by regular expressions even if they belong to a package that
   passed the first filter.  This is necessary when a kept package
   bundles files that depend on an excluded library (e.g. Perl's core
   `DB_File` module links against `msys-db-6.2.dll`, but the `db`
   package is excluded).

When diagnosing a `check-for-missing-dlls` failure, determine which layer
is responsible: if the missing DLL belongs to an excluded *package*, the
fix is a file-pattern exclusion for the consumer; if the DLL's package
is simply not in the dependency tree, the fix may be to add it.

## `check-for-missing-dlls.sh`

Runs in the `check-for-missing-dlls` workflow in all three SDK snapshot
repos ([git-sdk-64](https://github.com/git-for-windows/git-sdk-64),
[git-sdk-32](https://github.com/git-for-windows/git-sdk-32),
[git-sdk-arm64](https://github.com/git-for-windows/git-sdk-arm64)).
It calls `make-file-list.sh` to obtain the installer file list, then
for every `.dll`/`.exe` in that list it checks that all DLL dependencies
are satisfied by either a system DLL or another DLL in the file list.
Dependencies are extracted via `objdump -p`; binaries that `objdump`
cannot parse (e.g. ARM64 PE files on an x86_64 host) fall back to
`pe-imports.ps1`, a PowerShell script that reads the PE import table
directly.  Windows API-set DLLs (`api-ms-*`) are skipped automatically.
MSYS2 binaries (`usr/*`) are checked against `usr/bin/*.dll`; MinGW
binaries (`$MINGW_PREFIX/*`) are checked against
`$MINGW_PREFIX/bin/*.dll`.

## Building and Testing

### Building a Pacman Package

```bash
cd mingw-w64-git-credential-manager   # or any PKGBUILD directory
MAKEFLAGS=-j8 makepkg-mingw -s --noconfirm
```

### Building an Installer Artifact

```bash
# First create the SDK artifact with the necessary tools
./please.sh create-sdk-artifact \
  --architecture=x86_64 \
  --sdk=.sdk \
  --out=sdk-artifact \
  build-installers

# Then build the installer
./installer/release.sh --output=$PWD/out/ 0-test
```

The `0-test` version argument produces a test build. Real releases use a
version like `2.47.1.windows.1`.

### Building Portable Git

```bash
./portable/release.sh --output=$PWD/out/ 0-test
```

### Building MinGit

```bash
./mingit/release.sh --output=$PWD/out/ 0-test
```

### Validating an Installer

After building, the CI runs the installer silently and then executes
`installer/run-checklist.sh` which verifies that the installed Git works
correctly (runs `git version`, checks for expected components, etc.).

### Compiling `edit-git-bash.exe`

The top-level `Makefile` builds `edit-git-bash.exe` from `edit-git-bash.c`:

```bash
make
```

## Git Workflow

This repository is a shared development environment, not a sandbox. Exercise
caution with all Git operations.

### Making Code Changes

**Minimal, surgical changes.** Make the smallest possible change to achieve
the goal. Do not rewrite entire files or functions when a targeted edit
suffices.

**No fly-by changes.** Do not make changes that were not requested, even if
they seem like improvements (renaming variables, reformatting untouched code,
"fixing" things not part of the task). If you believe a change would be
beneficial but it was not requested, ask for permission first.

**The human is the driver.** Execute what is asked. If you think something
should be done differently, ask, do not just do it.

### Avoiding AI Slop

AI-assisted contributions are welcome, but the output must meet the same
quality bar as hand-written code. Common failure modes to guard against:

- **Vague or fabricated commit messages.** Every factual claim in a commit
  message must be verifiable from the diff or the referenced context. Do
  not invent explanations like "this fixes a race condition" unless you can
  point at the actual race. If you do not know the reason for a change, say
  so or ask.
- **Cargo-culted code.** Do not copy patterns from elsewhere in the
  codebase without understanding why they exist. Shell scripts here have
  evolved over years; some patterns are intentional, others are historical
  accidents. Understand before imitating.
- **Unnecessary verbosity.** Do not pad shell scripts with comments that
  merely restate what the code does ("# loop over all files"). Do not add
  variables, functions, or abstractions that serve no purpose.
- **Unicode and smart punctuation.** Keep all source files, commit messages,
  and documentation in plain ASCII. No curly quotes, no em-dashes, no
  Unicode arrows. Use `--` instead of an em-dash, `->` instead of a
  Unicode arrow, and straight quotes throughout.
- **Overly broad changes.** A pull request that touches files unrelated to
  its stated purpose will be asked to split up. Keep the scope tight.
- **Hallucinated functionality.** Do not reference functions, options, or
  behaviors that do not exist. When calling into `please.sh`, verify the
  subcommand exists and accepts the arguments you are passing.

### Committing Changes

Never use `git add -A` or `git add .`. Always specify pathspecs explicitly:

```bash
git commit -sm "your message here" path/to/file
```

### Commit Messages

Write flowing English prose, not bullet points. Clearly state context,
intent, justification, and non-obvious implementation details. Wrap at 76
columns. Include exact error messages rather than vague descriptions.

### Pushing Changes

Never push without explicit user permission.

### Branch Structure

- `main` -- The primary development branch.
- Topic branches use descriptive names.

## Coding Conventions

### Shell Scripts

Most automation is written in Bash. Scripts assume a Git SDK Bash
environment where both MSYS2 utilities and MinGW tools are available.

- Use `#!/bin/sh` or `#!/bin/bash` as appropriate.
- Prefer POSIX shell when possible; use Bash extensions only when needed.
- Use `die()` for fatal errors with a meaningful message.
- Chain commands with `&&` to fail early.
- Disable pagers in automation: `git --no-pager`.

### Node.js Scripts

Some tooling (e.g. `add-release-note.js`, `merged-branches.js`) is written
in Node.js. Follow idiomatic, concise JavaScript. The `package.json` at the
repository root manages dependencies.

### Inno Setup Scripts

The installer is built with Inno Setup. The `.iss` files in `installer/`
use Pascal Script. `install.iss` is the main script; it includes helpers
from `*.inc.iss` files.

### PKGBUILD Files

Follow the Arch Linux / MSYS2 `PKGBUILD` conventions. Each package
directory contains a `PKGBUILD` and optionally a `.install` script for
post-install hooks (in `git-extra/`, the `.install` file is generated from
`.install.in` at build time and is not tracked). Checksums must be updated
whenever source archives change.

## Platform Considerations

### Architectures

Git for Windows supports three architectures:

| Architecture | `MINGW_PACKAGE_PREFIX`     | `MSYSTEM`   | SDK repo        |
|--------------|----------------------------|-------------|-----------------|
| x86\_64      | `mingw-w64-ucrt-x86_64`   | `UCRT64`    | `git-sdk-64`   |
| i686         | `mingw-w64-i686`          | `MINGW32`   | `git-sdk-32`   |
| aarch64      | `mingw-w64-clang-aarch64` | `CLANGARM64`| `git-sdk-arm64` |

A fourth variant, MINGW64 (`mingw-w64-x86_64`, `MSYSTEM=MINGW64`), is
being phased out, replacing UCRT64 on x86\_64; MSYS2 deprecated the
MINGW64 environment in early 2026 and the SDK was migrated accordingly
(see git-for-windows/git-sdk-64#117).  The CI workflow and
`make-file-list.sh`/`check-for-missing-dlls.sh`/`please.sh` target UCRT64.

The CI workflow matrix covers x86_64, aarch64, and mingw64 (and i686 for
selected jobs).

### MinGW vs MSYS2

MinGW binaries are native Windows executables that do not depend on the
POSIX emulation layer. MSYS2 binaries use the msys-2.0.dll runtime for
POSIX compatibility. Git itself is built as a MinGW binary for performance;
helper tools like Bash and Perl are MSYS2 binaries.

## Relationship with Sibling Repositories

| Repository | Role |
|------------|------|
| [git-for-windows/git](https://github.com/git-for-windows/git) | The Git source code (Windows fork) |
| [git-for-windows-automation](https://github.com/git-for-windows/git-for-windows-automation) | Release orchestration workflows (slash commands, CI triggers) |
| [MINGW-packages](https://github.com/git-for-windows/MINGW-packages) | MinGW package recipes (upstream MSYS2 fork) |
| [MSYS2-packages](https://github.com/git-for-windows/MSYS2-packages) | MSYS2 package recipes (upstream MSYS2 fork) |
| git-sdk-64 / git-sdk-32 / git-sdk-arm64 | Full SDK snapshots for each architecture |

The automation repo's workflows push updates *into* `build-extra` (release
notes, package version bumps) and invoke `build-extra`'s scripts to produce
artifacts. Treat `build-extra` as the "what to build" and
`git-for-windows-automation` as the "when and how to trigger builds."

## Resources

- [Git for Windows](https://gitforwindows.org/)
- [Git for Windows SDK](https://github.com/git-for-windows/build-extra/releases/latest)
- [Git for Windows wiki](https://github.com/git-for-windows/git/wiki)


================================================
FILE: LICENSE.txt
================================================

 Note that the only valid version of the GPL as far as this project
 is concerned is _this_ particular version of the license (ie v2, not
 v2.2 or v3.x or whatever), unless explicitly otherwise stated.

 HOWEVER, in order to allow a migration to GPLv3 if that seems like
 a good idea, I also ask that people involved with the project make
 their preferences known. In particular, if you trust me to make that
 decision, you might note so in your copyright message, ie something
 like

	This file is licensed under the GPL v2, or a later version
	at the discretion of Linus.

  might avoid issues. But we can also just decide to synchronize and
  contact all copyright holders on record if/when the occasion arises.

			Linus Torvalds

----------------------------------------

		    GNU GENERAL PUBLIC LICENSE
		       Version 2, June 1991

 Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

			    Preamble

  The licenses for most software are designed to take away your
freedom to share and change it.  By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.  This
General Public License applies to most of the Free Software
Foundation's software and to any other program whose authors commit to
using it.  (Some other Free Software Foundation software is covered by
the GNU Lesser General Public License instead.)  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
this service if you wish), that you receive source code or can get it
if you want it, that you can change the software or use pieces of it
in new free programs; and that you know you can do these things.

  To protect your rights, we need to make restrictions that forbid
anyone to deny you these rights or to ask you to surrender the rights.
These restrictions translate to certain responsibilities for you if you
distribute copies of the software, or if you modify it.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must give the recipients all the rights that
you have.  You must make sure that they, too, receive or can get the
source code.  And you must show them these terms so they know their
rights.

  We protect your rights with two steps: (1) copyright the software, and
(2) offer you this license which gives you legal permission to copy,
distribute and/or modify the software.

  Also, for each author's protection and ours, we want to make certain
that everyone understands that there is no warranty for this free
software.  If the software is modified by someone else and passed on, we
want its recipients to know that what they have is not the original, so
that any problems introduced by others will not reflect on the original
authors' reputations.

  Finally, any free program is threatened constantly by software
patents.  We wish to avoid the danger that redistributors of a free
program will individually obtain patent licenses, in effect making the
program proprietary.  To prevent this, we have made it clear that any
patent must be licensed for everyone's free use or not licensed at all.

  The precise terms and conditions for copying, distribution and
modification follow.

		    GNU GENERAL PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. This License applies to any program or other work which contains
a notice placed by the copyright holder saying it may be distributed
under the terms of this General Public License.  The "Program", below,
refers to any such program or work, and a "work based on the Program"
means either the Program or any derivative work under copyright law:
that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another
language.  (Hereinafter, translation is included without limitation in
the term "modification".)  Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not
covered by this License; they are outside its scope.  The act of
running the Program is not restricted, and the output from the Program
is covered only if its contents constitute a work based on the
Program (independent of having been made by running the Program).
Whether that is true depends on what the Program does.

  1. You may copy and distribute verbatim copies of the Program's
source code as you receive it, in any medium, provided that you
conspicuously and appropriately publish on each copy an appropriate
copyright notice and disclaimer of warranty; keep intact all the
notices that refer to this License and to the absence of any warranty;
and give any other recipients of the Program a copy of this License
along with the Program.

You may charge a fee for the physical act of transferring a copy, and
you may at your option offer warranty protection in exchange for a fee.

  2. You may modify your copy or copies of the Program or any portion
of it, thus forming a work based on the Program, and copy and
distribute such modifications or work under the terms of Section 1
above, provided that you also meet all of these conditions:

    a) You must cause the modified files to carry prominent notices
    stating that you changed the files and the date of any change.

    b) You must cause any work that you distribute or publish, that in
    whole or in part contains or is derived from the Program or any
    part thereof, to be licensed as a whole at no charge to all third
    parties under the terms of this License.

    c) If the modified program normally reads commands interactively
    when run, you must cause it, when started running for such
    interactive use in the most ordinary way, to print or display an
    announcement including an appropriate copyright notice and a
    notice that there is no warranty (or else, saying that you provide
    a warranty) and that users may redistribute the program under
    these conditions, and telling the user how to view a copy of this
    License.  (Exception: if the Program itself is interactive but
    does not normally print such an announcement, your work based on
    the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole.  If
identifiable sections of that work are not derived from the Program,
and can be reasonably considered independent and separate works in
themselves, then this License, and its terms, do not apply to those
sections when you distribute them as separate works.  But when you
distribute the same sections as part of a whole which is a work based
on the Program, the distribution of the whole must be on the terms of
this License, whose permissions for other licensees extend to the
entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest
your rights to work written entirely by you; rather, the intent is to
exercise the right to control the distribution of derivative or
collective works based on the Program.

In addition, mere aggregation of another work not based on the Program
with the Program (or with a work based on the Program) on a volume of
a storage or distribution medium does not bring the other work under
the scope of this License.

  3. You may copy and distribute the Program (or a work based on it,
under Section 2) in object code or executable form under the terms of
Sections 1 and 2 above provided that you also do one of the following:

    a) Accompany it with the complete corresponding machine-readable
    source code, which must be distributed under the terms of Sections
    1 and 2 above on a medium customarily used for software interchange; or,

    b) Accompany it with a written offer, valid for at least three
    years, to give any third party, for a charge no more than your
    cost of physically performing source distribution, a complete
    machine-readable copy of the corresponding source code, to be
    distributed under the terms of Sections 1 and 2 above on a medium
    customarily used for software interchange; or,

    c) Accompany it with the information you received as to the offer
    to distribute corresponding source code.  (This alternative is
    allowed only for noncommercial distribution and only if you
    received the program in object code or executable form with such
    an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for
making modifications to it.  For an executable work, complete source
code means all the source code for all modules it contains, plus any
associated interface definition files, plus the scripts used to
control compilation and installation of the executable.  However, as a
special exception, the source code distributed need not include
anything that is normally distributed (in either source or binary
form) with the major components (compiler, kernel, and so on) of the
operating system on which the executable runs, unless that component
itself accompanies the executable.

If distribution of executable or object code is made by offering
access to copy from a designated place, then offering equivalent
access to copy the source code from the same place counts as
distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.

  4. You may not copy, modify, sublicense, or distribute the Program
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense or distribute the Program is
void, and will automatically terminate your rights under this License.
However, parties who have received copies, or rights, from you under
this License will not have their licenses terminated so long as such
parties remain in full compliance.

  5. You are not required to accept this License, since you have not
signed it.  However, nothing else grants you permission to modify or
distribute the Program or its derivative works.  These actions are
prohibited by law if you do not accept this License.  Therefore, by
modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and
all its terms and conditions for copying, distributing or modifying
the Program or works based on it.

  6. Each time you redistribute the Program (or any work based on the
Program), the recipient automatically receives a license from the
original licensor to copy, distribute or modify the Program subject to
these terms and conditions.  You may not impose any further
restrictions on the recipients' exercise of the rights granted herein.
You are not responsible for enforcing compliance by third parties to
this License.

  7. If, as a consequence of a court judgment or allegation of patent
infringement or for any other reason (not limited to patent issues),
conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot
distribute so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you
may not distribute the Program at all.  For example, if a patent
license would not permit royalty-free redistribution of the Program by
all those who receive copies directly or indirectly through you, then
the only way you could satisfy both it and this License would be to
refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under
any particular circumstance, the balance of the section is intended to
apply and the section as a whole is intended to apply in other
circumstances.

It is not the purpose of this section to induce you to infringe any
patents or other property right claims or to contest validity of any
such claims; this section has the sole purpose of protecting the
integrity of the free software distribution system, which is
implemented by public license practices.  Many people have made
generous contributions to the wide range of software distributed
through that system in reliance on consistent application of that
system; it is up to the author/donor to decide if he or she is willing
to distribute software through any other system and a licensee cannot
impose that choice.

This section is intended to make thoroughly clear what is believed to
be a consequence of the rest of this License.

  8. If the distribution and/or use of the Program is restricted in
certain countries either by patents or by copyrighted interfaces, the
original copyright holder who places the Program under this License
may add an explicit geographical distribution limitation excluding
those countries, so that distribution is permitted only in or among
countries not thus excluded.  In such case, this License incorporates
the limitation as if written in the body of this License.

  9. The Free Software Foundation may publish revised and/or new versions
of the General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies a version number of this License which applies to it and "any
later version", you have the option of following the terms and conditions
either of that version or of any later version published by the Free
Software Foundation.  If the Program does not specify a version number of
this License, you may choose any version ever published by the Free Software
Foundation.

  10. If you wish to incorporate parts of the Program into other free
programs whose distribution conditions are different, write to the author
to ask for permission.  For software which is copyrighted by the Free
Software Foundation, write to the Free Software Foundation; we sometimes
make exceptions for this.  Our decision will be guided by the two goals
of preserving the free status of all derivatives of our free software and
of promoting the sharing and reuse of software generally.

			    NO WARRANTY

  11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY
FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN
OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES
PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS
TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE
PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING,
REPAIR OR CORRECTION.

  12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR
REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED
TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER
PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

		     END OF TERMS AND CONDITIONS

	    How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
convey the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Also add information on how to contact you by electronic and paper mail.

If the program is interactive, make it output a short notice like this
when it starts in an interactive mode:

    Gnomovision version 69, Copyright (C) year name of author
    Gnomovision comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, the commands you use may
be called something other than `show w' and `show c'; they could even be
mouse-clicks or menu items--whatever suits your program.

You should also get your employer (if you work as a programmer) or your
school, if any, to sign a "copyright disclaimer" for the program, if
necessary.  Here is a sample; alter the names:

  Yoyodyne, Inc., hereby disclaims all copyright interest in the program
  `Gnomovision' (which makes passes at compilers) written by James Hacker.

  <signature of Ty Coon>, 1 April 1989
  Ty Coon, President of Vice

This General Public License does not permit incorporating your program into
proprietary programs.  If your program is a subroutine library, you may
consider it more useful to permit linking proprietary applications with the
library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.


================================================
FILE: Makefile
================================================
CFLAGS=-O2 -Wall

all: edit-git-bash.exe

edit-git-bash.exe: edit-git-bash.c
	gcc -DSTANDALONE_EXE $(CFLAGS) -o $@ $^


================================================
FILE: ReleaseNotes.css
================================================
// [OUTLINE - 0 symbols, 480 lines]


================================================
FILE: ReleaseNotes.md
================================================
# Git for Windows v2.56.1 Release Notes
Latest update: November 10th 2026

## Introduction

These release notes describe issues specific to the Git for Windows release. The release notes covering the history of the core git commands can be found [in the Git project](https://github.com/git/git/tree/HEAD/Documentation/RelNotes).

See [http://git-scm.com/](http://git-scm.com/) for further details about Git including ports to other operating systems. Git for Windows is hosted at [https://gitforwindows.org/](https://gitforwindows.org/).

# Known issues
* On Windows 10 before 1703, or when Developer Mode is turned off, special permissions are required when cloning repositories with symbolic links, therefore support for symbolic links is disabled by default. Use `git clone -c core.symlinks=true <URL>` to enable it, see details [here](https://gitforwindows.org/symbolic-links).
* If configured to use Plink, you will have to connect with [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/) first and accept the host key.
* If you specify command-line options starting with a slash, POSIX-to-Windows path conversion will kick in converting e.g. "`/usr/bin/bash.exe`" to "`C:\Program Files\Git\usr\bin\bash.exe`". When that is not desired -- e.g. "`--upload-pack=/opt/git/bin/git-upload-pack`" or "`-L/regex/`" -- you need to set the environment variable `MSYS_NO_PATHCONV` temporarily, like so:

  > `MSYS_NO_PATHCONV=1 git blame -L/pathconv/ msys2_path_conv.cc`

  Alternatively, you can double the first slash to avoid POSIX-to-Windows path conversion, e.g. "`//usr/bin/bash.exe`".
* Windows drives are normally recognized within the POSIX path as `/c/path/to/dir/` where `/c/` (or appropriate drive letter) is equivalent to the `C:\` Windows prefix to the `\path\to\dir`. If this is not recognized, revert to the `C:\path\to\dir` Windows style.
* Git for Windows will not allow commits containing DOS-style truncated 8.3-format filenames ending with a tilde and digit, such as `mydocu~1.txt`. A workaround is to call `git config core.protectNTFS false`, which is not advised. Instead, add a rule to .gitignore to ignore the file(s), or rename the file(s).
* Many Windows programs (including the Windows Explorer) have problems with directory trees nested so deeply that the absolute path is longer than 260 characters. Therefore, Git for Windows refuses to check out such files by default. You can overrule this default by setting `core.longPaths`, e.g. `git clone -c core.longPaths=true ...`.
* Some commands are not yet supported on Windows and excluded from the installation.
* As Git for Windows is shipped without Python support, `git p4` (which is backed by a Python script) is not supported.
* The Quick Launch icon will only be installed for the user running setup (typically the Administrator). This is a technical restriction and will not change.
* Git command hints are designed for a POSIX shell, this can lead to issues when using them **as is** in non-POSIX shells like PowerShell, [as is the case in this ticket](https://github.com/git-for-windows/git/issues/2785).
* When pushing via the `git://` protocol, Git for Windows may hang indefinitely. The last console output in this case is typically `Writing objects: 100%`. As a workaround, disabling side-band via `git config sendpack.sideband false` should address this, at the cost of showing remote errors late (or not at all). No one is working on this; for more details, or to contribute a fix, see issue [#907](https://github.com/git-for-windows/git/issues/907) (closed unless/until there is activity).
* Git for Windows executables linked to `msys-2.0.dll` are not compatible with Mandatory ASLR and may crash if system-wide Mandatory ASLR is enabled in Windows Exploit protection. A workaround is to disable ASLR for all executables in `C:\Program Files\Git\usr\bin`, run in administrator powershell (replace `$_.Name` with `$_` to use full path to executable instead of name):

  > `Get-Item -Path "C:\Program Files\Git\usr\bin\*.exe" | %{ Set-ProcessMitigation -Name $_.Name -Disable ForceRelocateImages }`

  Alternatively, you can disable Mandatory ASLR completely in Windows Exploit protection.

Should you encounter other problems, please first search [the bug tracker](https://github.com/git-for-windows/git/issues) (also look at the closed issues) and [the mailing list](http://groups.google.com/group/git-for-windows), chances are that the problem was reported already. Also make sure that you use an up to date Git for Windows version (or a [current snapshot build](https://gitforwindows.org/git-snapshots/)). If it has not been reported yet, please follow [our bug reporting guidelines](https://gitforwindows.org/issue-reporting-guidelines) and [report the bug](https://github.com/git-for-windows/git/issues/new).

## Licenses
Git is licensed under the GNU General Public License version 2.

Git for Windows is distributed with other components yet, such as Bash, zlib, curl, tcl/tk, perl, MSYS2. Each of these components is governed by their respective license.

## Changes since Git for Windows v2.56.1 (November 10th 2026)

### New Features

* Comes with [Bash v5.3.20](https://cgit.git.savannah.gnu.org/cgit/bash.git/commit/?id=9c465866b7d849378369ef700cbe2965aa9691e3).
* Comes with [Git Credential Manager v3.0.2](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v3.0.2). Please note that v3.x has some breaking changes that may affect your workflows. Please read more information in [the GCM release notes](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v3.0.2).

### Bug Fixes

* Checking out repositories with large numbers of symbolic links [used to take an unexpectedly long time](https://github.com/git-for-windows/git/issues/4059), which [has been addressed](https://github.com/git-for-windows/git/pull/6345).

## Changes since Git for Windows v2.56.0(4) (October 26th 2026)

This addresses the security issues CVE-2026-111760, CVE-2026-113408, CVE-2026-114466, CVE-2026-114467, CVE-2026-114469 and CVE-2026-105437.

### Security bug fixes

* [CVE-2026-111760](https://github.com/git/git/security/advisories/GHSA-vp2w-7xxj-jvxr):

  Recursive clones are susceptible to Remote Code Execution: an attacker-controlled repository can be crafted in a way that exploits a bug in Git whereby Git can be fooled into overwriting a gitfile (used for submodules) with a symbolic link that then points to a directory with malicious config or hooks. The config or hooks may have attacker-specified code.

* [CVE-2026-113408](https://gitlab.com/gitlab-org/git/-/work_items/809):

  It is possible for a server to advertise an unborn HEAD that contains path-traversal characters (e.g., `refs/heads/../../../TARGET`). With the files ref backend that can lead to ref-updating actions to write to unwanted files.

* [CVE-2026-114467](https://gitlab.com/gitlab-org/git/-/work_items/810):

  When Git strips the GPG signatures from a commit message, it only accounts for two signatures. A commit message containing more than two signatures therefore causes a stack memory corruption.

  This can be triggered when using `git merge` with a tag which contains more than two signatures. As such, this makes way for a DoS attack which can potentially also affect forges when such a tag is pushed to a remote and a merge action is initiated.

* [CVE-2026-114469](https://gitlab.com/gitlab-org/git/-/work_items/811):

  Git rejects patches larger than ~1 GiB, because its patch application code does not work well with large files. That check, however, only considered the size of the patch as it appears in the input, which for binary patches is much smaller than the size of the file the patch describes, as binary patches are compressed and encoded. A binary patch that inflates to a very large size therefore slipped past the check and crashed Git with an out-of-bounds read.

* [CVE-2026-105437](https://gitlab.com/gitlab-org/git/-/work_items/814):

  When merging, Git computes the size of the buffer holding the merge result in a way that can overflow for very large merges, which can be triggered by a large number of conflicts combined with a large `conflict-marker-size`. The resulting buffer can then be too small, and Git writes past its end (and, before and after that, before its start), corrupting the heap.

* [CVE-2026-114466](https://gitlab.com/gitlab-org/git/-/work_items/812):

  In response to CVE-2019-1348, `fast-import` disallows the `export-marks` feature by default. The features `rewrite-submodules-to` and `rewrite-submodules-from` as well as the option `export-pack-edges` that were introduced in the meantime also allow reading from arbitrary paths, and are therefore now also disallowed by default.

### New Features

* Comes with [Git v2.56.1](https://github.com/git/git/blob/v2.56.1/Documentation/RelNotes/2.56.1.adoc).

## Changes since Git for Windows v2.56.0(3) (October 22nd 2026)

This is another urgent security bug fix release, addressing [CVE-2026-111497](https://www.cve.org/CVERecord?id=CVE-2026-111497).

### Bug Fixes

* The executables included in the 32-bit MinGit had corrupt code-signatures, which [has been fixed](https://github.com/git-for-windows/MINGW-packages/pull/231).
* Upgrades [the included brotli component](https://github.com/git-for-windows/git/issues/6514) to v1.2.1 to address [CVE-2026-111497](https://www.cve.org/CVERecord?id=CVE-2026-111497).

## Changes since Git for Windows v2.56.0(2) (October 5th 2026)

This is a security fix release, addressing [the eMudhra Intermediate CA Compromise](https://emudhra.we-have-a-problem.com/). It also addresses Git LFS' [CVE-2026-105803](https://github.com/git-lfs/git-lfs/security/advisories/GHSA-x72p-hmqp-46hw) by upgrading to v3.8.1.

### New Features

* Comes with [OpenSSH v10.6.P1](https://github.com/openssh/openssh-portable/releases/tag/V_10_6_P1).
* Comes with [cURL v8.23.0](https://curl.se/changes.html#8_23_0).
* Comes with [Git LFS v3.8.1](https://github.com/git-lfs/git-lfs/releases/tag/v3.8.1).

## Changes since Git for Windows v2.56.0 (September 28th 2026)

### New Features

* Comes with [OpenSSL v3.5.9](https://www.openssl.org/news/openssl-3.5-notes.html).
* To help with fixing [stale references to the Git Credential Manager](https://github.com/git-for-windows/git/issues/6455) after Git for Windows v2.56.0's MINGW64 -> UCRT64 migration, [a compatibility shim is now installed](https://github.com/git-for-windows/MINGW-packages/pull/224).

### Bug Fixes

* Suppressing the user-wide Git config via `GIT_CONFIG_GLOBAL=NUL` [was broken in v2.56.0](https://github.com/git-for-windows/git/issues/6449) (surprisingly, as a consequence of the MINGW64 -> UCRT64 migration), which [was fixed](https://github.com/git-for-windows/git/pull/6450).
* [Fixed](https://github.com/git-for-windows/MINGW-packages/pull/222) a bug in Git for Windows, v2.56.0, where the x64 Git executables [lost their Authenticode signatures by mistake](https://github.com/git-for-windows/git/issues/6456).
* An assertion [was fixed](https://github.com/git-for-windows/MINGW-packages/pull/226) that caused pushes to fail when the server requires a client certificate.

## Changes since Git for Windows v2.55.0(5) (August 20th 2026)

Following the [MSYS2 project](https://www.msys2.org/news/#2026-02-28-dropping-support-for-windows-81), on which Git for Windows is based, Windows 8.1 support was dropped; In [doing so](https://github.com/git-for-windows/git-sdk-64/pull/117), internal paths changed (`/mingw64/bin/git.exe` does not exist anymore, `/ucrt64/bin/git.exe` takes its role; if this breaks your setups, consider switching to `/cmd/git.exe` instead, which is guaranteed to stay stable).

An issue with the installer for the previous version (v2.55.0.windows.5) caused the "Use external OpenSSH" option to be disabled for some users. This caused the bundled version of OpenSSH to be installed and overwrote any previously-saved choice of external OpenSSH. **If you rely on an external OpenSSH installation, and you updated to v2.55.0(5),** you should consider re-running the latest installer with "Only show new options" unchecked so that you can re-enable the external OpenSSH option. The bundled version of OpenSSH will be uninstalled automatically. If you do not rely on an external OpenSSH installation, or you did not install v2.55.0(5) specifically, you can safely ignore this notice.

### New Features

* Comes with [Git v2.56.0](https://github.com/git/git/blob/v2.56.0/Documentation/RelNotes/2.56.0.adoc).
* Comes with [Git LFS v3.8.0](https://github.com/git-lfs/git-lfs/releases/tag/v3.8.0).
* Comes with [cURL v8.22.0](https://curl.se/changes.html#8_22_0).
* Comes with [OpenSSL v3.5.8](https://www.openssl.org/news/openssl-3.5-notes.html).

### Bug Fixes

* The installer [is now _actually_ a 64-bit one](https://github.com/git-for-windows/build-extra/pull/732), which fixes the problem that [the external OpenSSH option was broken in Git for Windows v2.55.0(5)](https://github.com/git-for-windows/git/issues/6374) (see notice above).
* It is now [finally possible](https://github.com/git-for-windows/git/pull/6353) to commit 4GB objects or larger in Git for Windows.
* [Fixes](https://github.com/git-for-windows/git/pull/6395) a bug where parallel checkouts could abort with "*** stack smashing detected ***: terminated".
* A [bug](https://github.com/git-for-windows/git/issues/6403) introduced in Git for Windows v2.55.0(5), which caused vim to often open existing files with the first line missing, [was fixed](https://github.com/git-for-windows/msys2-runtime/pull/142).
* `git difftool` [will no longer crash](https://github.com/git-for-windows/git/pull/6426) upon encountering filenames that are illegal on Windows.

## Changes since Git for Windows v2.55.0(4) (August 11th 2026)

Following the [MSYS2 project](https://www.msys2.org/news/#2026-02-28-dropping-support-for-windows-81), on which Git for Windows is based, Windows 8.1 support will be dropped after Git for Windows v2.55.

### New Features

* The experimental `git survey` command (which was never upstreamed to the core Git project) was deprecated and [converted into a small shim on top of `git repo structure`](https://github.com/git-for-windows/git/pull/6268). In the future, `git repo structure` should be used instead, as the `git survey` command will be retired eventually.
* Git for Windows' installer [is now a 64-bit executable](https://github.com/git-for-windows/build-extra/pull/726) (x64 instead of 86).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.10](https://inbox.sourceware.org/cygwin-announce/f9d2b89b-c99c-4d02-b0cf-61adea84566b@dronecode.org.uk/).
* Comes with [OpenSSH v10.5.P1](https://github.com/openssh/openssh-portable/releases/tag/V_10_5_P1).

### Bug Fixes

* The long-standing [bug](https://github.com/git-for-windows/git/issues/5303) where Git Bash's screen was cleared after `git.exe` called `vim` (e.g. to edit a commit message) [was fixed](https://github.com/git-for-windows/msys2-runtime/pull/131).
* The Bash executables in the 64-bit and ARM64 distributions no longer carry an invalid Authenticode signature.

## Changes since Git for Windows v2.55.0(3) (July 14th 2026)

Following the [MSYS2 project](https://www.msys2.org/news/#2026-02-28-dropping-support-for-windows-81), on which Git for Windows is based, Windows 8.1 support will be dropped after Git for Windows v2.55.

This is a security fix release, addressing CVE-2026-62960.

* [CVE-2026-62960](https://github.com/git-for-windows/git/security/advisories/GHSA-xrpg-8j9v-v282), Git for Windows: Attacker-controlled servers may advertise bundle URIs that point to network shares, causing Windows to transparently perform NTLM authentication and disclose the user's NTLMv2 hash. Since NTLM hashing is weak, the captured hash can potentially be brute-forced to recover the user's credentials. This is addressed by limiting the bundle URIs that `git clone` respects by the same [`protocol.<name>.allow`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-protocolnameallow) rules as usual, which excludes `file://` URIs by default.

## Changes since Git for Windows v2.55.0(2) (July 2nd 2026)

### New Features

* Comes with [Git Credential Manager v2.9.0](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.9.0).

### Bug Fixes

* Fixes heap overflows in the credential helper `wincred`, see [GHSA-rxqw-wxqg-g7hw](https://github.com/git-for-windows/git/security/advisories/GHSA-rxqw-wxqg-g7hw) for full details.

## Changes since Git for Windows v2.55.0 (June 29th 2026)

Following the [MSYS2 project](https://www.msys2.org/news/#2026-02-28-dropping-support-for-windows-81), on which Git for Windows is based, Windows 8.1 support will be dropped after Git for Windows v2.55.


### Bug Fixes

* NTLM opt-in support, which had been [prematurely disabled](https://github.com/git-for-windows/git/issues/6308) altogether (a glimpse into this fall when [NTLM _will be_ disabled, no opt-in possible](https://curl.se/dev/deprecate.html#:~:text=in%20September%202026.-,drop%20NTLM%20support,-The%20NTLM%20authentication)) was fixed by [temporarily enabling optional NTLM support again](https://github.com/git-for-windows/MINGW-packages/pull/208).

## Changes since Git for Windows v2.54.0 (April 20th 2026)

Following the [MSYS2 project](https://www.msys2.org/news/#2026-02-28-dropping-support-for-windows-81), on which Git for Windows is based, Windows 8.1 support will be dropped after Git for Windows v2.55.

### New Features

* Comes with [Git v2.55.0](https://github.com/git/git/blob/v2.55.0/Documentation/RelNotes/2.55.0.adoc).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.9](https://sourceware.org/pipermail/cygwin-announce/2026-April/012969.html).
* Comes with [Git Credential Manager v2.8.0](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.8.0).
* Comes with [less 702](http://www.greenwoodsoftware.com/less/news.702.html).
* The FSCache now [accelerates more `git add` scenarios](https://github.com/git-for-windows/git/pull/6216).
* Comes with [OpenSSL v3.5.7](https://www.openssl.org/news/openssl-3.5-notes.html).
* The diff helper handling Word documents was [ported](https://github.com/git-for-windows/build-extra/pull/708) from Perl to Rust.
* Comes with [Bash v5.3.15](https://cgit.git.savannah.gnu.org/cgit/bash.git/commit/?id=b460816602167718f78a6233164e8875f49b75b2).
* Comes with [cURL v8.21.0](https://curl.se/changes.html#8_21_0).

### Bug Fixes

* A [regression in v2.54.0](https://github.com/git-for-windows/git/issues/6210) that could cause endless "Unlink of file '.git/objects/pack/pack-<hash>.idx' failed. Should I try again?" loops on older Windows 10 versions during `git fetch` operations [was fixed](https://github.com/git-for-windows/git/pull/6215).
* A [bug](https://github.com/msys2/msys2-runtime/issues/338) that prevented proper shutdown of processes launched via Git Bash under certain circumstances [was fixed](https://github.com/msys2/msys2-runtime/pull/339).
* A bug was [fixed](https://github.com/git-for-windows/git/pull/6250) which could cause parallel checkouts to fail under certain circumstances when the FSCache is enabled.
* Git Bash (MinTTY) now respects screen scaling settings [under more circumstances](https://github.com/git-for-windows/git/issues/6085).
* A couple of bugs revolving around _very_ large clones/packfiles/objects [were fixed](https://github.com/git-for-windows/git/pull/6289).
* Following [TortoiseGit v2.19](https://groups.google.com/g/tortoisegit-announce/c/31zdmOBi4vY), `.git` file validations have been tightened. As a consequence, access to remote repositories via UNC file paths needs to be allowed explicitly via the `safe.directory` configuration.

## Changes since Git for Windows v2.53.0(3) (April 14th 2026)

Due to persistent maintenance challenges, `git svn` is no longer included in Git for Windows. Users who still need this command are highly encouraged to use [a Linux version of git svn via the Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/) instead, or switch to a regular MSYS2 setup: install [MSYS2](https://www.msys2.org/), then run the following command in the MSYS2 UCRT64 Bash: `pacman -Sy mingw-w64-ucrt-x86_64-git-svn`. After that, the `git svn` command will be available in that Bash. On Windows/ARM64, you will want to use the CLANGARM64 variant instead (and install `mingw-w64-clang-aarch64-git-svn`).

### New Features

* Comes with [Git v2.54.0](https://github.com/git/git/blob/v2.54.0/Documentation/RelNotes/2.54.0.adoc).
* Comes with [Bash v5.3.9](https://cgit.git.savannah.gnu.org/cgit/bash.git/commit/?id=637f5c8696a6adc9b4519f1cd74aa78492266b7f).
* Comes with [Git Credential Manager v2.7.3](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.7.3).
* Comes with [MinTTY v3.8.2](https://github.com/mintty/mintty/releases/tag/3.8.2).
* The shell aliases in Git Bash that ensured that interpreters such as Python and Node.JS are executed via `winpty` are no longer necessary, and have therefore [been dropped](https://github.com/git-for-windows/build-extra/pull/664).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.7](https://sourceware.org/pipermail/cygwin-announce/2026-March/012878.html).
* Comes with [cURL v8.19.0](https://curl.se/changes.html#8_19_0).
* Comes with [OpenSSH v10.3.P1](https://github.com/openssh/openssh-portable/releases/tag/V_10_3_P1).
* Comes with [OpenSSL v3.5.6](https://www.openssl.org/news/openssl-3.5-notes.html).

### Bug Fixes

* The `iconv` executable, which was [inadvertently dropped](https://github.com/git-for-windows/git/issues/6083) from Git for Windows v2.53.0's installer, [is now included again](https://github.com/git-for-windows/build-extra/pull/678).
* In some circumstances, when typing while a still-running program is about to terminate, [the typed characters could arrive out of order in Git Bash](https://github.com/git-for-windows/git/issues/5632). This bug [was fixed](https://github.com/git-for-windows/msys2-runtime/pull/124).
* Similar to how `git clean` already avoids traversing NTFS junctions, `git worktree remove` [now does the same](https://github.com/git-for-windows/git/pull/6151).
* The number of CPU cores is [now detected correctly](https://github.com/git-for-windows/git/pull/6108) on multi-socket systems.
* When fetching/pushing via Secure Channel (the default TLS/SSL method), the timeout to renegotiate (e.g. using client certificates) was recently reduced to 7 seconds, which was too short. It has been [extended to 60 seconds](https://github.com/git-for-windows/MINGW-packages/pull/192).
* The recent security bug fix that disables NTLM by default missed the NTLM fallback in the Kerberos protocol. This fallback [is now disabled](https://github.com/git-for-windows/MINGW-packages/pull/193), following the cURL project's guidance.
* A _really_ old bug which prevented Kerberos authentication from working with the default [`http.emptyAuth`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpemptyAuth) ("auto"), [was fixed](https://github.com/git-for-windows/git/pull/6170).
* The `git instaweb` command [is no longer distributed with Git for Windows](https://github.com/git-for-windows/build-extra/pull/689) because it would require GitWeb (which has not been distributed with Git for Windows for quite a few years).

## Changes since Git for Windows v2.53.0(2) (March 10th 2026)

This is a security fix release, addressing CVE-2026-32631.

* [CVE-2026-32631](https://github.com/git-for-windows/git/security/advisories/GHSA-9j5h-h4m7-85hx), Git for Windows: When a user clones a repository containing symbolic links pointing to network drives, Git follows those symlinks during checkout, causing Windows to transparently perform NTLM authentication and disclose the user's NTLMv2 hash to an attacker-controlled server. Since NTLM hashing is weak, the captured hash can potentially be brute-forced to recover the user's credentials. This is addressed by preventing `git clone` from following symbolic links that point to network drives during checkout.

## Changes since Git for Windows v2.53.0 (February 2nd 2026)

This is a security fix release, addressing CVE-2025-66413.

* [CVE-2025-66413](https://github.com/git-for-windows/git/security/advisories/GHSA-hv9c-4jm9-jh3x), Git for Windows: When a user clones a repository from an attacker-controlled server, Git may attempt NTLM authentication and disclose the user's NTLMv2 hash to the remote server. Since NTLM hashing is weak, the captured hash can potentially be brute-forced to recover the user's credentials. This is addressed by disabling NTLM authentication by default.

## Changes since Git for Windows v2.52.0 (November 17th 2025)

### New Features

* Comes with [Git v2.53.0](https://github.com/git/git/blob/v2.53.0/Documentation/RelNotes/2.53.0.adoc).
* Pressing the Tab key in an empty line in Git Bash [no longer causes the session to "freeze"](https://github.com/git-for-windows/build-extra/pull/657).
* Git for Windows' installer is [now built by InnoSetup v6.6.1](https://github.com/git-for-windows/build-extra/pull/660).
* Comes with [cURL v8.18.0](https://curl.se/changes.html#8_18_0).
* [Microsoft Edit](https://learn.microsoft.com/en-us/windows/edit/) can [now be specified](https://github.com/git-for-windows/build-extra/pull/669) as Git editor.
* Comes with [Git Credential Manager v2.7.0](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.7.0), the "anniversary release" after one release-less year, which brings native x64 and ARM64 binaries for the respective flavors of Git for Windows.
* [Upgrades](https://github.com/git-for-windows/git/pull/6048) the [memory allocator `mimalloc`](https://microsoft.github.io/mimalloc/) that is used by Git for Windows to v2.2.7.
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.6](https://inbox.sourceware.org/cygwin-announce/20260109194027.293669-1-corinna-cygwin@cygwin.com/).
* Comes with [OpenSSL v3.5.5](https://www.openssl.org/news/openssl-3.5-notes.html).

### Bug Fixes

* The installer of Git for Windows v2.52 [showed clipped text in some setups](https://github.com/git-for-windows/git/issues/5961), which was fixed.
* When calling Microsoft Store apps, their standard I/O is now [set up correctly](https://github.com/git-for-windows/msys2-runtime/pull/122) (meaning: You can call an interactive Python interpreter without the `winpty` hack mentioned in the release notes' Known Issues).
* The `astextplain` tool (which is used by Git for Windows to generate diffs of `.pdf` and `.doc` files) used to handle empty files gracefully. This behavior is [now reinstated](https://github.com/git-for-windows/build-extra/pull/668).

## Changes since Git for Windows v2.51.2 (October 28th 2025)

As announced in several recent release notes, [`git svn` is no longer supported by the Git for Windows project](https://github.com/git-for-windows/git/issues/5405).

### New Features

* Comes with [Git v2.52.0](https://github.com/git/git/blob/v2.52.0/Documentation/RelNotes/2.52.0.adoc).
* Comes with [PCRE2 v10.47](https://github.com/PCRE2Project/pcre2/releases/tag/pcre2-10.47).
* Comes with [cURL v8.17.0](https://curl.se/changes.html#8_17_0).
* The Git for Windows installer is [now built](https://github.com/git-for-windows/build-extra/pull/655) with [version 6.6.0](https://jrsoftware.org/files/is6-whatsnew.htm#:~:text=6.6.0) of InnoSetup, giving it a more modern look.

### Bug Fixes

* The command `git help git-bash` was broken by a change in upstream Git v2.49.0, which [has been fixed](https://github.com/git-for-windows/MINGW-packages/pull/171).

## Changes since Git for Windows v2.51.1 (October 17th 2025)

### New Features

* Comes with [Git v2.51.2](https://github.com/git/git/blob/v2.51.2/Documentation/RelNotes/2.51.2.adoc).

### Bug Fixes

* The default credential helper in the portable variant of Git for Windows (`credential-helper-selector`) [is now high DPI aware](https://github.com/git-for-windows/build-extra/pull/651).

## Changes since Git for Windows v2.51.0(2) (September 29th 2025)

This is a security release! Git LFS (which is enabled by default in Git for Windows) fixes [CVE-2025-26625](https://github.com/git-lfs/git-lfs/security/advisories/GHSA-6pvw-g552-53c5) (Severity rated High, 8.6 / 10) in v3.7.1. Please only clone or pull from repositories you trust until you upgraded.

Due to persistent maintenance challenges and the community's limited engagement and usage, `git svn` support in Git for Windows will be [dropped from the next major Git for Windows release](https://github.com/git-for-windows/git/issues/5405).

Note that `git flow` is no longer shipped with Git for Windows, after a version had been distributed that had been languishing for years. Even the original, years-stale Git Flow project [has been archived](https://github.com/nvie/gitflow/issues/3#issuecomment-3400894835).

### New Features

* Comes with [Git v2.51.1](https://github.com/git/git/blob/v2.51.1/Documentation/RelNotes/2.51.1.adoc).
* Comes with [Git LFS v3.7.1](https://github.com/git-lfs/git-lfs/releases/tag/v3.7.1), addressing [CVE-2025-26625](https://github.com/git-lfs/git-lfs/security/advisories/GHSA-6pvw-g552-53c5).
* Comes with [OpenSSL v3.5.4](https://www.openssl.org/news/openssl-3.5-notes.html).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.5](https://inbox.sourceware.org/cygwin-announce/d0ea504c-d683-4ed6-a47e-e866ddd37613@dronecode.org.uk/).
* Comes with [OpenSSH v10.2.P1](https://github.com/openssh/openssh-portable/releases/tag/V_10_2_P1).
* Drops `git flow`.

### Bug Fixes

* A potential memory corruption in the optional `wincred` credential helper [was fixed](https://github.com/git-for-windows/git/pull/5856).

## Changes since Git for Windows v2.51.0 (August 19th 2025)

### New Features

* Comes with [PCRE2 v10.46](https://github.com/PCRE2Project/pcre2/releases/tag/pcre2-10.46).
* Comes with [cURL v8.16.0](https://curl.se/changes.html#8_16_0). This addresses [a bug where fetches/pushes could fail with `failed to read data from server: SEC_E_CONTEXT_EXPIRED (0x80090317)` under certain circumstances](https://github.com/git-for-windows/git/issues/5838). Also included: a [back-port of a fix](https://github.com/git-for-windows/MINGW-packages/pull/163) for a bug where connection failures were mistakenly reported as time-outs.
* Comes with [Tig v2.6.0](https://github.com/jonas/tig/releases/tag/tig-2.6.0).
* Comes with [MinTTY v3.8.1](https://github.com/mintty/mintty/releases/tag/3.8.1).
* Comes with [OpenSSL v3.5.3](https://www.openssl.org/news/openssl-3.5-notes.html).

### Bug Fixes

* The auto-updater now shows Git for Windows icon in the notification [also on Windows/ARM64](https://github.com/git-for-windows/build-extra/pull/644).
* `git clone`/`git fetch` now deals more gracefully with directory / file conflicts when the files backend is used for ref storage, by failing only the ones that are involved in the conflict while allowing others. This is a regression in Git v2.51.0 that was [reported in Git for Windows](https://github.com/git-for-windows/git/issues/5804) and independently also [to the Git mailing list](https://lore.kernel.org/git/YQXPR01MB3046197EF39296549EE6DD669A33A@YQXPR01MB3046.CANPRD01.PROD.OUTLOOK.COM/). This was fixed by merging Git's topic branch [`kn/refs-files-case-insensitive`](https://github.com/gitgitgadget/git/commits/kn/refs-files-case-insensitive).
* Support for pathspecs in `diff --no-index` [was somewhat buggy](https://github.com/git-for-windows/issues/5836), which has been fixed.
* `git sparse-checkout` subcommand learned a new `clean` action to prune otherwise unused working-tree files that are outside the areas of interest. An earlier version of this had been [integrated into Microsoft Git already](https://github.com/microsoft/git/pull/796). This was fixed by merging Git's topic branch [`ds/sparse-checkout-clean`](https://github.com/gitgitgadget/git/commits/ds/sparse-checkout-clean).
* `git rebase -i` failed to clean-up the commit log message when the command commits the final one in a chain of "fixup" commands, which has been corrected. Backported from Git's topic branch [`pw/rebase-i-cleanup-fix`](https://github.com/gitgitgadget/git/commits/pw/rebase-i-cleanup-fix).
* `git subtree` did not work correctly when splitting squashed subtrees, which has been improved. Backported from Git's topic branch [`cs/subtree-squash-split-fix`](https://github.com/gitgitgadget/git/commits/cs/subtree-squash-split-fix).
* Some among `git add -p` and friends ignored `color.diff` and/or `color.ui` configuration variables, which is an old regression, which has been corrected. This was fixed by merging Git's topic branch [`jk/add-i-color`](https://github.com/gitgitgadget/git/commits/jk/add-i-color).
* A corner-case bug in `git log -L...` has been corrected. This was fixed by merging Git's topic branch [`sg/line-log-boundary-fixes`](https://github.com/gitgitgadget/git/commits/sg/line-log-boundary-fixes).
* A broken or malicious `git fetch` can say that it has the same object for many many times, and the upload-pack serving it can exhaust memory storing them redundantly, which has been corrected. This was fixed by merging Git's topic branch [`ps/upload-pack-oom-protection`](https://github.com/gitgitgadget/git/commits/ps/upload-pack-oom-protection).
* Fixes multiple crashes around midx write-out codepaths. This was fixed by merging Git's topic branch [`ds/midx-write-fixes`](https://github.com/gitgitgadget/git/commits/ds/midx-write-fixes).
* `git repack --path-walk` lost objects in some corner cases, which has been corrected. This was fixed by merging Git's topic branch [`ds/path-walk-repack-fix`](https://github.com/gitgitgadget/git/commits/ds/path-walk-repack-fix).
* Under a race against another process that is repacking the repository, especially a partially cloned one, `git fetch` may mistakenly think some objects we do have are missing, which has been corrected. This was fixed by merging Git's topic branch [`jk/fetch-check-graph-objects-fix`](https://github.com/gitgitgadget/git/commits/jk/fetch-check-graph-objects-fix).
* Various options to `git diff` that makes comparison ignore certain aspects of the differences (like "space changes are ignored", "differences in lines that match these regular expressions are ignored") did not work well with `--name-only` and friends. This was fixed by merging Git's topic branch [`ly/diff-name-only-with-diff-from-content`](https://github.com/gitgitgadget/git/commits/ly/diff-name-only-with-diff-from-content).
* `git diff --no-index` run inside a subdirectory under control of a Git repository operated at the top of the working tree and stripped the prefix from the output, and oddballs like "-" (stdin) did not work correctly because of it.  Correct the set-up by undoing what the set-up sequence did to the current working directory and prefix. This was fixed by merging Git's topic branch [`jc/diff-no-index-in-subdir`](https://github.com/gitgitgadget/git/commits/jc/diff-no-index-in-subdir).
* Various bugs about rename handling in "ort" merge strategy have been fixed. This was fixed by merging Git's topic branch [`en/ort-rename-fixes`](https://github.com/gitgitgadget/git/commits/en/ort-rename-fixes).
* `git push` had a code path that led to `BUG()` but it should have reported a regular failure, as it is a response to a usual but invalid end-user action to attempt pushing an object that does not exist. This was fixed by merging Git's topic branch [`dl/push-missing-object-error`](https://github.com/gitgitgadget/git/commits/dl/push-missing-object-error).
* `git refs migrate` to migrate the reflog entries from a refs  backend to another had a handful of bugs squashed. This was fixed by merging Git's topic branch [`ps/reflog-migrate-fixes`](https://github.com/gitgitgadget/git/commits/ps/reflog-migrate-fixes).
* During interactive rebase, using `drop` on a merge commit lead to an error, which was incorrect. This was fixed by merging Git's topic branch [`js/rebase-i-allow-drop-on-a-merge`](https://github.com/gitgitgadget/git/commits/js/rebase-i-allow-drop-on-a-merge).

## Changes since Git for Windows v2.50.1 (July 8th 2025)

### New Features

* Comes with [Git v2.51.0](https://github.com/git/git/blob/v2.51.0/Documentation/RelNotes/2.51.0.adoc).
* The Portable Git installers (which are self-extracting 7-Zip archives) are now based off of [7-Zip 25.01](https://sourceforge.net/p/sevenzip/discussion/45797/thread/da14cd780b/)
* Comes with [cURL v8.15.0](https://curl.se/changes.html#8_15_0).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.4](https://cygwin.com/pipermail/cygwin-announce/2025-July/012416.html).
* Comes with [MinTTY v3.7.9](https://github.com/mintty/mintty/releases/tag/3.7.9).

## Changes since Git for Windows v2.50.0(2) (July 1st 2025)

This is a security fix release, addressing CVE-2024-50349, CVE-2024-52006, CVE-2025-27613, CVE-2025-27614, CVE-2025-46334, CVE-2025-46835, CVE-2025-48384, CVE-2025-48385, and CVE-2025-48386.

### New Features

* Comes with [Git v2.50.1](https://github.com/git/git/blob/v2.50.1/Documentation/RelNotes/2.50.1.adoc).

### Bug Fixes

* [**CVE-2025-27613**](https://github.com/j6t/gitk/security/advisories/GHSA-f3cw-xrj3-wr2v), Gitk: When a user clones an untrusted repository and runs Gitk without additional command arguments, any writable file can be created and truncated. The option "Support per-file encoding" must have been enabled. The operation "Show origin of this line" is affected as well, regardless of the option being enabled or not.
* [**CVE-2025-27614**](https://github.com/j6t/gitk/security/advisories/GHSA-g4v5-fjv9-mhhc), Gitk: A Git repository can be crafted in such a way that a user who has cloned the repository can be tricked into running any script supplied by the attacker by invoking `gitk filename`, where `filename` has a particular structure.
* [**CVE-2025-46334**](https://github.com/j6t/git-gui/security/advisories/GHSA-7px4-9hg2-fvhx), Git GUI (Windows only): A malicious repository can ship versions of sh.exe or typical textconv filter programs such as astextplain. On Windows, path lookup can find such executables in the worktree. These programs are invoked when the user selects "Git Bash" or "Browse Files" from the menu.
* [**CVE-2025-46835**](https://github.com/j6t/git-gui/security/advisories/GHSA-xfx7-68v4-v8fg), Git GUI: When a user clones an untrusted repository and is tricked into editing a file located in a maliciously named directory in the repository, then Git GUI can create and overwrite any writable file.
* [**CVE-2025-48384**](https://github.com/git/git/security/advisories/GHSA-vwqx-4fm8-6qc9), Git: When reading a config value, Git strips any trailing carriage return and line feed (CRLF). When writing a config entry, values with a trailing CR are not quoted, causing the CR to be lost when the config is later read.  When initializing a submodule, if the submodule path contains a trailing CR, the altered path is read resulting in the submodule being checked out to an incorrect location. If a symlink exists that points the altered path to the submodule hooks directory, and the submodule contains an executable post-checkout hook, the script may be unintentionally executed after checkout.
* [**CVE-2025-48385**](https://github.com/git/git/security/advisories/GHSA-m98c-vgpc-9655), Git: When cloning a repository Git knows to optionally fetch a bundle advertised by the remote server, which allows the server-side to offload parts of the clone to a CDN. The Git client does not perform sufficient validation of the advertised bundles, which allows the remote side to perform protocol injection. This protocol injection can cause the client to write the fetched bundle to a location controlled by the adversary. The fetched content is fully controlled by the server, which can in the worst case lead to arbitrary code execution.
* [**CVE-2025-48386**](https://github.com/git/git/security/advisories/GHSA-4v56-3xvj-xvfr), Git: The wincred credential helper uses a static buffer (`target`) as a unique key for storing and comparing against internal storage. This credential helper does not properly bounds check the available space remaining in the buffer before appending to it with `wcsncat()`, leading to potential buffer overflows.

## Changes since Git for Windows v2.50.0 (June 16th 2025)

### New Features

* Comes with [Git LFS v3.7.0](https://github.com/git-lfs/git-lfs/releases/tag/v3.7.0).

### Bug Fixes

* Cloning large repositories via SSH [frequently hung with Git for Windows v2.50.0](https://github.com/git-for-windows/git/issues/5688), which [was fixed](https://github.com/git-for-windows/msys2-runtime/pull/103).
* In Git for Windows v2.50.0, operations using the POSIX emulation layer (cloning via SSH, generating the Bash prompt) cannot be interrupted by Ctrl+C, which [has been fixed](https://github.com/git-for-windows/msys2-runtime/pull/104).
* Git for Windows v2.50.0 is [unable to initialize Git repositories on Windows Server 2016](https://github.com/git-for-windows/git/issues/5695), which has been [fixed](https://github.com/git-for-windows/git/pull/5700).

## Changes since Git for Windows v2.49.0 (March 17th 2025)

### New Features

* Comes with [Git v2.50.0](https://github.com/git/git/blob/v2.50.0/Documentation/RelNotes/2.50.0.adoc).
* Comes with [MinTTY v3.7.8](https://github.com/mintty/mintty/releases/tag/3.7.8).
* Comes with [OpenSSH v10.0.P1](https://github.com/openssh/openssh-portable/releases/tag/V_10_0_P1).
* Comes with [cURL v8.14.1](https://curl.se/changes.html#8_14_1).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.6.3](https://inbox.sourceware.org/cygwin-announce/302f8026-fbe9-4c21-86cd-5fac1a45085f@dronecode.org.uk/).

### Bug Fixes

* On Windows Server 2022, Git v2.48.1 introduced a regression where it [failed to write files on ReFS drives](https://github.com/git-for-windows/git/issues/5427), which was [fixed](https://github.com/git-for-windows/git/pull/5515).
* [Git for Windows 2.48.1 introduced a regression](https://github.com/git-for-windows/git/issues/5476) when fetching long branches under `core.longPaths = true`, which [was fixed](https://github.com/git-for-windows/git/pull/5550).
* Git for Windows' installer [used a non-writable file](https://github.com/git-for-windows/git/issues/5618) for testing custom editors, which [was fixed](https://github.com/git-for-windows/build-extra/pull/618).

## Changes since Git for Windows v2.48.1 (February 13th 2025)

Due to persistent maintenance challenges and the community's limited engagement and usage, `git svn` support in Git for Windows will be [phased out](https://github.com/git-for-windows/git/issues/5405) over the next few months.

Git for Windows v2.48.1 was the last version to ship with the i686 ("32-bit") variant of the installer, portable Git and archive. Only 32-bit MinGit will be built for future versions, [until April 2029](https://gitforwindows.org/32-bit).

### New Features

* Comes with [Git v2.49.0](https://github.com/git/git/blob/v2.49.0/Documentation/RelNotes/2.49.0.adoc).
* Comes with [OpenSSH v9.9.P2](https://github.com/openssh/openssh-portable/releases/tag/V_9_9_P2).
* Comes with [PCRE2 v10.45](https://github.com/PCRE2Project/pcre2/releases/tag/pcre2-10.45).
* The previously-experimental `--full-name-hash` option has been accepted into upstream Git as `--name-hash-version=2` and is no longer experimental.
* The `git backfill` command has been accepted into upstream Git; Its `--batch-size=<n>` option has been renamed to `--min-batch-size=<n>`, though.

### Bug Fixes

* A change in upstream Git v2.48.0 broke renaming symlinks, which [was fixed](https://github.com/git-for-windows/git/pull/5437).
* On a recent Insider Windows version, [users experienced the message: "Cygwin WARNING: Couldn't compute FAST_CWD pointer"](https://github.com/git-for-windows/git/issues/5447), which has been fixed.
* A bug has been [fixed](https://github.com/git-for-windows/msys2-runtime/pull/87) that, when calling `git add -p` from VS Code's internal terminal, after using the `e`dit command, caused [the internal terminal got stuck](https://github.com/git-for-windows/git/issues/4776) and no further command was accepted.
* The [syntax highlighting of the `nano` editor was recently disabled](https://github.com/git-for-windows/git/issues/5462) in Git for Windows by mistake, which [was fixed](https://github.com/git-for-windows/build-extra/pull/605).

## Changes since Git for Windows v2.47.1(2) (January 14th 2025)

Git for Windows v2.48.1 is the last version to ship with the i686 ("32-bit") variant of the installer, portable Git and archive. Only 32-bit MinGit will be built for future versions, [until April 2029](https://gitforwindows.org/32-bit).

Due to persistent maintenance challenges and the community's limited engagement and usage, `git svn` support in Git for Windows will be [phased out](https://github.com/git-for-windows/git/issues/5405) over the next few months.

### New Features

* Comes with [Git v2.48.1](https://github.com/git/git/blob/v2.48.1/Documentation/RelNotes/2.48.1.txt).
* Comes with [MinTTY v3.7.7](https://github.com/mintty/mintty/releases/tag/3.7.7).
* New Git for Windows installation [now default to the Windows-native HTTPS transport backend](https://github.com/git-for-windows/build-extra/pull/586).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.5.7](https://inbox.sourceware.org/cygwin-announce/20250129212153.2589012-1-corinna-cygwin@cygwin.com/T/#u) (Git for Windows skipped [v3.5.5](https://inbox.sourceware.org/cygwin-announce/20241220181956.2204526-1-corinna-cygwin@cygwin.com) because it failed to pass Git's test suite, and [Cygwin v3.5.6](https://inbox.sourceware.org/cygwin-announce/20250126210031.2173904-1-corinna-cygwin@cygwin.com/) was superseded too quickly).
* Comes with [Tig v2.5.12](https://github.com/jonas/tig/releases/tag/tig-2.5.12).
* Comes with [cURL v8.12.1](https://curl.se/changes.html#8_12_1).
* Comes with [OpenSSL v3.2.4](https://www.openssl.org/news/openssl-3.2-notes.html).

### Bug Fixes

* The installer now correctly blocks the installation on Windows 7 and Windows 8 as these versions of Windows are no longer supported since Git for Windows v2.47.0
* When using the `cache` credential helper, it could error out with "fatal: unable to connect to cache daemon: Unknown error" under certain circumstances; This [was fixed](https://github.com/git-for-windows/git/pull/5329).
* Git for Windows used [to issue a misleading warning when `.gitignore` was a directory](https://github.com/git-for-windows/git/issues/5068), which has been [fixed](https://github.com/git-for-windows/git/pull/5342).

## Changes since Git for Windows v2.47.1 (November 25th 2024)

### New Features

* Comes with [Git Credential Manager v2.6.1](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.6.1), addressing CVE-2024-50338.
* Comes with [Git LFS v3.6.1](https://github.com/git-lfs/git-lfs/releases/tag/v3.6.1), addressing CVE-2024-53263.

### Bug Fixes

* [**CVE-2024-50338**](https://github.com/git-ecosystem/git-credential-manager/security/advisories/GHSA-86c2-4x57-wc8g): Git Credential Manager can be tricked to exfiltrate credentials for a trusted site to an untrusted site. Since the URLs needed for such an attack look suspicious, this usually requires a recursive clone or fetch.
- [**CVE-2024-53263**](https://github.com/git-lfs/git-lfs/security/advisories/GHSA-q6r2-x2cc-vrp7): In conjunction with CVE-2024-52006, Git LFS can be tricked to exfiltrate credentials for a trusted site to an untrusted site.
* [**CVE-2024-50349**](https://github.com/git/git/security/advisories/GHSA-hmg8-h7qf-7cxr): When prompting the user for a password in the terminal, Git does not neutralize control characters.
* [**CVE-2024-52005**](https://github.com/git/git/security/advisories/GHSA-7jjc-gg6m-3329): The sideband channel does not neutralize control characters.
* [**CVE-2024-52006**](https://github.com/git/git/security/advisories/GHSA-r5ph-xg7q-xfrp): Similar to CVE-2020-5260, affecting credential helpers that interpret Carriage Returns as newlines.

## Changes since Git for Windows v2.47.0(2) (October 22nd 2024)

This release comes with the first early native [support of Windows/ARM64](https://github.com/git-for-windows/git/issues/3107), ready for testing. Please report any issues!

### New Features

* Comes with [Git v2.47.1](https://github.com/git/git/blob/v2.47.1/Documentation/RelNotes/2.47.1.txt).
* Comes with [cURL v8.11.0](https://curl.se/changes.html#8_11_0).
* Comes with [Git LFS v3.6.0](https://github.com/git-lfs/git-lfs/releases/tag/3.6.0).

### Bug Fixes

* Due to a bug introduced in the v2.47 cycle, [the installer showed an empty "experimental options" page](https://github.com/git-for-windows/git/issues/5231), which was [fixed](https://github.com/git-for-windows/build-extra/pull/578).
* A potential crash in Git Bash on Insider versions of Windows/ARM64 [was fixed](https://github.com/git-for-windows/msys2-runtime/pull/76).
* On Windows/ARM64, running the 64-bit version of Git for Windows could infrequently cause deadlocked threads (see e.g. [this report](https://github.com/msys2/msys2-autobuild/issues/62) or [this one](https://inbox.sourceware.org/cygwin-developers/78f294de-4c94-242a-722e-fd98e51edff9@jdrake.com/)), [which was addressed](https://github.com/git-for-windows/msys2-runtime/pull/73).

## Changes since Git for Windows v2.47.0 (October 8th 2024)

As of this version, wildcards in the command-line arguments of any `git.exe` process [will no longer be expanded](https://www.msys2.org/news/#2024-11-03-disabling-mingw-w64-wildcard-support-by-default) (this does _not_ affect wildcard expansion when calling `git` from Git Bash).

### Bug Fixes

* A regression in v2.47.0 where `git maintenance start` crashed immediately [was fixed](https://github.com/git-for-windows/git/pull/5198).
* A [regression](https://github.com/git-for-windows/git/issues/5199) where clones, fetches and pushes via SSH would dead-lock was fixed.
* As of Git for Windows v2.47.0, [Scalar](https://git-scm.com/docs/scalar) was supposed to enable [an optimized push algorithm](https://github.com/git-for-windows/git/pull/5171), but for a typo didn't, which [was fixed](https://github.com/git-for-windows/git/pull/5220).
* A few documentation and other, minor bug fixes from upstream Git [were integrated into Git for Windows early](https://github.com/git-for-windows/git/pull/5221).

## Changes since Git for Windows v2.46.2 (September 24th 2024)

Git for Windows for Windows v2.47 drops support for Windows 7 and for Windows 8, as announced previously.

Please also note that the 32-bit variant of Git for Windows is deprecated; Its last official release [is planned for 2025](https://gitforwindows.org/32-bit.html).

### New Features

* Comes with [Git v2.47.0](https://github.com/git/git/blob/v2.47.0/Documentation/RelNotes/2.47.0.txt).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.5.4](https://inbox.sourceware.org/cygwin-announce/20240825195526.2571058-1-corinna-cygwin@cygwin.de/), which drops Windows 7 and Windows 8 support.
* The new, experimental `git backfill` command [was added](https://github.com/git-for-windows/git/pull/5172): It helps fetching relevant Git objects smartly in a partial, sparse clone.
* The new, experimental [`git survey` command was added](https://github.com/git-for-windows/git/pull/5174). This command is designed to help identify less-than-ideal data shape in monorepos, and it will likely see highly active development. Stay tuned!
* Comes with [Git Credential Manager v2.6.0](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.6.0).

## Changes since Git for Windows v2.46.1 (September 18th 2024)

### New Features

* Comes with [Git v2.46.2](https://github.com/git/git/blob/v2.46.2/Documentation/RelNotes/2.46.2.txt).
* Comes with [OpenSSH v9.9.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_9_P1).
* Comes with [MinTTY v3.7.6](https://github.com/mintty/mintty/releases/tag/3.7.6).
* Comes with [Bash v5.2.37](https://git.savannah.gnu.org/cgit/bash.git/commit/?id=6794b5478f660256a1023712b5fc169196ed0a22).
* Comes with the [new, experimental `--full-name-hash` option for `git repack`](https://github.com/git-for-windows/git/pull/5157) that helps packing monorepos more tightly.

## Changes since Git for Windows v2.46.0 (July 29th 2024)

### New Features

* Comes with [Git v2.46.1](https://github.com/git/git/blob/v2.46.1/Documentation/RelNotes/2.46.1.txt).
* Comes with [Bash v5.2.32](https://git.savannah.gnu.org/cgit/bash.git/commit/?id=142bbdd89e4d5bb62aea4469d1d2c24cf470afd8).
* Comes with [OpenSSL v3.2.3](https://www.openssl.org/news/openssl-3.2-notes.html).
* Comes with [MinTTY v3.7.5](https://github.com/mintty/mintty/releases/tag/3.7.5).
* Comes with [cURL v8.10.1](https://curl.se/changes.html#8_10_1).

### Bug Fixes

* The support code enabled via `core.WSLCompat` did not work well with files stored in subdirectories of the worktree, which [has been fixed](https://github.com/git-for-windows/git/pull/4660).
* When using an `askpass` helper (e.g. implicitly when running inside VS Code's internal terminal), Git v2.46.0 [would error out with "read error: Invalid argument"](https://github.com/git-for-windows/git/issues/5115); This bug has been fixed.

## Changes since Git for Windows v2.45.2 (June 3rd 2024)

Git for Windows for Windows v2.46 is the last version to support for Windows 7 and for Windows 8, see [MSYS2's corresponding deprecation announcement](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Please also note that the 32-bit variant of Git for Windows is deprecated; Its last official release [is planned for 2025](https://gitforwindows.org/32-bit.html).

### New Features

* Comes with [Git v2.46.0](https://github.com/git/git/blob/v2.46.0/Documentation/RelNotes/2.46.0.txt).
* Comes with [OpenSSL v3.2.2](https://github.com/openssl/openssl/releases/tag/openssl-3.2.2).
* Comes with [PCRE2 v10.44](https://github.com/PCRE2Project/pcre2/blob/pcre2-10.44/ChangeLog).
* Comes with [OpenSSH v9.8.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_8_P1).
* Comes with [Git Credential Manager v2.5.1](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.5.1).
* Comes with [MinTTY v3.7.4](https://github.com/mintty/mintty/releases/tag/3.7.4).
* `git config` [respects two user-wide configs](https://git-scm.com/docs/git-config#FILES): `.gitconfig` in the home directory, and `.config/git/config`. Since the latter isn't a Windows-native directory, [Git for Windows now looks for `Git/config` in the `AppData` directory](https://github.com/git-for-windows/git/pull/5030), unless `.config/git/config` exists. 
* The [FSMonitor feature](https://github.com/git-for-windows/git/discussions/3251) is no longer experimental, and therefore no longer offered as installer option. Users are encouraged to enable this on a per-repository basis, via the config setting `core.fsmonitor=true` (`scalar clone` does this automatically).
* The server-side component of OpenSSH, which had been shipped with Git for Windows for historical reasons only, is [now no longer distributed with it](https://github.com/git-for-windows/build-extra/pull/571).
* Comes with [cURL v8.9.0](https://curl.se/changes.html#8_9_0).

### Bug Fixes

* Git Bash's `ls` command [can now be used in OneDrive-managed folders](https://github.com/git-for-windows/msys2-runtime/pull/69) without having to hydrate all the files.
* Git LFS v3.5.x and newer no longer support Windows 7. Instead of a helpful error message, it now simply [crashes](https://github.com/git-for-windows/git/issues/4996) on that Windows version, leaving the user with the error message "panic before malloc heap initialized". This has been [addressed](https://github.com/git-for-windows/git/pull/5042): In addition to the unhelpful error message, Git is now saying what is going on and how to get out of the situation.
* As of v2.45.0, the manual pages of `git clone` and `git init` [were broken](https://github.com/git-for-windows/git/issues/5063), which has been fixed. 

## Changes since Git for Windows v2.45.1 (May 14th 2024)

### New Features

* Comes with [Git v2.45.2](https://github.com/git/git/blob/v2.45.2/Documentation/RelNotes/2.45.2.txt).
* Comes with [Tig v2.5.10](https://github.com/jonas/tig/releases/tag/tig-2.5.10).
* Comes with [cURL v8.8.0](https://github.com/curl/curl/releases/tag/curl-8_8_0).

### Bug Fixes

* When Git for Windows v2.44.0 introduced the ability [to use native Win32 Console ANSI sequence processing](https://github.com/git-for-windows/git/pull/4700), an inadvertent fallout was that in this instance, [non-ASCII characters were no longer printed correctly unless the current code page was set to 65001](https://github.com/git-for-windows/git/issues/4851). This bug [has been fixed](https://github.com/git-for-windows/git/pull/4968).

## Changes since Git for Windows v2.45.0 (April 29th 2024)

### New Features

* Comes with [Git v2.45.1](https://github.com/git/git/blob/v2.45.1/Documentation/RelNotes/2.45.1.txt).

### Bug Fixes

* **CVE-2024-32002**: Recursive clones on case-insensitive filesystems that support
  symbolic links are susceptible to case confusion that can be exploited to
  execute just-cloned code during the clone operation.
* **CVE-2024-32004**: Repositories can be configured to execute arbitrary code
  during local clones. To address this, the ownership checks introduced in
  v2.30.3 are now extended to cover cloning local repositories.
* **CVE-2024-32020**: Local clones may end up hardlinking files into the target
  repository's object database when source and target repository reside on the
  same disk. If the source repository is owned by a different user, then those
  hardlinked files may be rewritten at any point in time by the untrusted user.
* **CVE-2024-32021**: When cloning a local source repository that contains symlinks
  via the filesystem, Git may create hardlinks to arbitrary user-readable files
  on the same filesystem as the target repository in the objects/ directory.
* **CVE-2024-32465**: It is supposed to be safe to clone untrusted repositories,
  even those unpacked from zip archives or tarballs originating from untrusted
  sources, but Git can be tricked to run arbitrary code as part of the clone.
* Defense-in-depth: submodule: require the submodule path to contain
  directories only.
* Defense-in-depth: clone: when symbolic links collide with directories, keep
  the latter.
* Defense-in-depth: clone: prevent hooks from running during a clone.
* Defense-in-depth: core.hooksPath: add some protection while cloning.
* Defense-in-depth: fsck: warn about symlink pointing inside a gitdir.
* Various fix-ups on HTTP tests.
* HTTP Header redaction code has been adjusted for a newer version of cURL
  library that shows its traces differently from earlier versions.
* Fix was added to work around a regression in libcURL 8.7.0 (which has already
  been fixed in their tip of the tree).
* Replace macos-12 used at GitHub CI with macos-13.
* ci(linux-asan/linux-ubsan): let's save some time
* Tests with LSan from time to time seem to emit harmless message that makes
  our tests unnecessarily flakey; we work it around by filtering the
  uninteresting output.
* Update GitHub Actions jobs to avoid warnings against using deprecated version
  of Node.js.

## Changes since Git for Windows v2.44.0 (February 23rd 2024)

### New Features

* Comes with [Git v2.45.0](https://github.com/git/git/blob/v2.45.0/Documentation/RelNotes/2.45.0.txt).
* Comes with [PCRE2 v10.43](https://github.com/PCRE2Project/pcre2/releases/tag/pcre2-10.43).
* Comes with [GNU Privacy Guard v2.4.5](https://github.com/gpg/gnupg/releases/tag/gnupg-2.4.5).
* Comes with [Git LFS v3.5.1](https://github.com/git-lfs/git-lfs/releases/tag/3.5.1).
* MinGit [now supports running `git difftool`](https://github.com/git-for-windows/build-extra/pull/550).
* Comes with [OpenSSH v9.7.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_7_P1).
* Comes with [GNU TLS v3.8.4](https://lists.gnupg.org/pipermail/gnutls-help/2024-March/004845.html).
* Comes with [Tig v2.5.9](https://github.com/jonas/tig/releases/tag/tig-2.5.9).
* Comes with [cURL v8.7.1](https://curl.se/changes.html#8_7_1).
* Comes with [Git Credential Manager v2.5.0](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.5.0).

### Bug Fixes

* Since v2.14.0(2), Git for Windows' installer registers the _Open Git Bash here_ and _Open Git GUI here_ context menu items also in the special [Libraries folders](https://msdn.microsoft.com/en-us/library/windows/desktop/dd758096.aspx), but the uninstaller never removed them from those folders, [which was fixed](https://github.com/git-for-windows/build-extra/pull/551).
* A [regression](https://github.com/git-for-windows/git/issues/4843) where `git clone` no longer worked in the presence of `includeIf.*.onbranch` config settings [has been fixed](https://github.com/git-for-windows/git/commit/199f44cb2ead34486f2588dc32d000d17e30f9cc).
* Apparently some anti-malware programs fiddle with the mode of `stdout` which [can lead to problems because expected output is missing](https://github.com/git-for-windows/git/issues/4890), which [was fixed](https://github.com/git-for-windows/git/pull/4901).

## Changes since Git for Windows v2.43.0 (November 20th 2023)

As announced previously, Git for Windows will drop support for Windows 7 and for Windows 8 in one of the next versions, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Following the footsteps of the MSYS2 and Cygwin projects on which Git for Windows depends, the 32-bit variant of Git for Windows [is being phased out](https://gitforwindows.org/32-bit.html).

### New Features

* Comes with [Git v2.44.0](https://github.com/git/git/blob/v2.44.0/Documentation/RelNotes/2.44.0.txt).
* Comes with [libfido2 v1.14.0](https://github.com/Yubico/libfido2/releases/tag/1.14.0).
* Comes with the MSYS2 runtime (Git for Windows flavor) based on [Cygwin v3.4.10](https://inbox.sourceware.org/cygwin-announce/20231129150845.713029-1-corinna-cygwin@cygwin.com/).
* Comes with [Perl v5.38.2](http://search.cpan.org/dist/perl-5.38.2/pod/perldelta.pod).
* Git for Windows [learned to detect and use native Windows support for ANSI sequences](https://github.com/git-for-windows/git/pull/4700), which allows using 24-bit colors in terminal windows.
* Comes with [Git LFS v3.4.1](https://github.com/git-lfs/git-lfs/releases/tag/3.4.1).
* The repository viewer [Tig](https://jonas.github.io/tig/) that is included in Git for Windows [can now be called also directly from PowerShell/CMD](https://github.com/git-for-windows/MINGW-packages/pull/104).
* Comes with [OpenSSH v9.6.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_6_P1).
* Comes with [Bash v5.2.26](https://git.savannah.gnu.org/cgit/bash.git/commit/?id=f3b6bd19457e260b65d11f2712ec3da56cef463f).
* Comes with [GNU TLS v3.8.3](https://lists.gnupg.org/pipermail/gnutls-help/2024-January/004841.html).
* Comes with [OpenSSL v3.2.1](https://www.openssl.org/news/openssl-3.2-notes.html).
* Comes with [cURL v8.6.0](https://curl.se/changes.html#8_6_0).
* Comes with [GNU Privacy Guard v2.4.4](https://github.com/gpg/gnupg/releases/tag/gnupg-2.4.4).

### Bug Fixes

* The 32-bit variant of Git for Windows was missing some MSYS2 runtime updates, [which was addressed](https://github.com/git-for-windows/MSYS2-packages/pull/138); Do note [32-bit support is phased out](https://gitforwindows.org/32-bit.html).
* The Git for Windows installer [showed cut-off text in some setups](https://github.com/git-for-windows/git/issues/4727). This [has been fixed](https://github.com/git-for-windows/build-extra/pull/536).
* The `git credential-manager --help` command previously would not find a page to display in the web browser, [which has been fixed](https://github.com/git-for-windows/build-extra/pull/542).
* A couple of bugs that could cause Git Bash to hang in certain scenarios [were fixed](https://github.com/git-for-windows/MSYS2-packages/pull/158).

## Changes since Git for Windows v2.42.0(2) (August 30th 2023)

### New Features

* Comes with [Git v2.43.0](https://github.com/git/git/blob/v2.43.0/Documentation/RelNotes/2.43.0.txt).
* Comes with [MSYS2 runtime v3.4.9](https://github.com/cygwin/cygwin/releases/tag/cygwin-3.4.9).
* Comes with [GNU TLS v3.8.1](https://lists.gnupg.org/pipermail/gnutls-help/2023-August/004834.html).
* When installing into a Windows setup with Mandatory Address Space Layout Randomization (ASLR) enabled, which is incompatible with the MSYS2 runtime powering Git Bash, SSH and some other programs distributed with Git for Windows, [the Git for Windows installer now offers to add exceptions](https://github.com/git-for-windows/build-extra/pull/513) that will allow those programs to work as expected.
* Comes with [OpenSSH v9.5.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_5_P1).
* Comes with [cURL v8.4.0](https://github.com/curl/curl/releases/tag/curl-8_4_0).
* Comes with [OpenSSL v3.1.4](https://github.com/openssl/openssl/releases/tag/openssl-3.1.4).
* Comes with [Git Credential Manager v2.4.1](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.4.1).
* Comes with [Bash v5.2.21](https://git.savannah.gnu.org/cgit/bash.git/commit/?id=2bb3cbefdb8fd019765b1a9cc42ecf37ff22fec6).
* Comes with [MinTTY v3.7.0](https://github.com/mintty/mintty/releases/tag/3.7.0).

### Bug Fixes

* Symbolic links whose target is an absolute path _without_ the drive prefix [accidentally had a drive prefix added when checked out](https://github.com/git-for-windows/git/issues/4586), rendering them "eternally modified". This bug [has been fixed](https://github.com/git-for-windows/git/pull/4592).
* Git for Windows's installer [is no longer confused by global `GIT_*` environment variables](https://github.com/git-for-windows/build-extra/pull/529).
* The installer [no longer claims that "fast-forward or merge" is the default `git pull` behavior](https://github.com/git-for-windows/build-extra/pull/498): The default behavior has changed in Git a while ago, to "fast-forward only".

## Changes since Git for Windows v2.42.0 (August 21st 2023)

As announced previously, Git for Windows will drop support for Windows 7 and for Windows 8 in one of the next versions, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Following the footsteps of the MSYS2 and Cygwin projects on which Git for Windows depends, the 32-bit variant of Git for Windows [is being phased out](https://gitforwindows.org/32-bit.html).

### Bug Fixes

* Git for Windows v2.42.0's release notes claimed that it ships with Git LFS v3.4.0, [which is incorrect](https://github.com/git-for-windows/git/issues/4567) and has been fixed in this release.
* The installer option to enable support for Pseudo Consoles [has been handled incorrectly](https://github.com/git-for-windows/git/issues/4571) since Git for Windows v2.41.0, which [has been fixed](https://github.com/git-for-windows/build-extra/pull/522).
* Some Git commands (those producing paged output, for example) experienced a [significant slow-down](https://github.com/git-for-windows/git/issues/4459) under certain circumstances, when running on a machine joined to a domain controller, which [has been fixed](https://github.com/git-for-windows/MSYS2-packages/pull/124).
* As of Git for Windows v2.41.0, when installed into a location whose path contains non-ASCII characters, [it was no longer possible to fetch from/push to remote repositories via https://](https://github.com/git-for-windows/git/issues/4573), which [has been fixed](https://github.com/git-for-windows/git/pull/4575).

## Changes since Git for Windows v2.41.0(3) (July 13th 2023)

### New Features

* Comes with [Git v2.42.0](https://github.com/git/git/blob/v2.42.0/Documentation/RelNotes/2.42.0.txt).
* Comes with [cURL v8.2.1](https://curl.se/changes.html#8_2_1).
* Comes with [Git LFS v3.4.0](https://github.com/git-lfs/git-lfs/releases/tag/3.4.0).
* Comes with [OpenSSL v3.1.2](https://github.com/openssl/openssl/releases/tag/openssl-3.1.2).
* Comes with [OpenSSH v9.4.P1](https://github.com/openssh/openssh-portable/releases/tag/V_9_4_P1).
* Comes with [Git Credential Manager v2.3.2](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.3.2).

### Bug Fixes

* When `init.defaultBranch` is changed manually in the system config, subsequent Git for Windows upgrades [would overwrite that change](https://github.com/git-for-windows/git/issues/4525). This has been [fixed](https://github.com/git-for-windows/build-extra/pull/515).
* When running on a remote APFS share, Git [would fail](https://github.com/git-for-windows/git/issues/4482), which [has been fixed](https://github.com/git-for-windows/git/pull/4527).

## Changes since Git for Windows v2.41.0(2) (July 7th 2023)

This release is a hot-fix release to incorporate a new Git Credential Manager version that addresses several issues present in the previous verison. There are no other changes.

### New Features

* Comes with [Git Credential Manager v2.2.2](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.2.2).

## Changes since Git for Windows v2.41.0 (June 1st 2023)

As announced previously, Git for Windows will drop support for Windows 7 and for Windows 8 in one of the next versions, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Following the footsteps of the MSYS2 and Cygwin projects on which Git for Windows depends, the 32-bit variant of Git for Windows [is being phased out](https://gitforwindows.org/32-bit.html). As of Git for Windows v2.41.0, the 32-bit variant of the POSIX emulation layer (known as "MSYS2 runtime", powering Git Bash among other components shipped with Git for Windows) is in maintenance mode and will only see security bug fixes (if any). Users relying on 32-bit Git for Windows are highly encouraged to switch to the 64-bit version whenever possible.

### New Features

* Comes with [MSYS2 runtime v3.4.7](https://github.com/cygwin/cygwin/releases/tag/cygwin-3.4.7).
* Comes with [OpenSSL v3.1.1](https://www.openssl.org/news/openssl-3.1-notes.html), a major version upgrade (previously Git for Windows distributed OpenSSL v1.1.\*).
* To support interoperability with Windows Subsystem for Linux (WSL) better, it [is now possible to let Git set](https://github.com/git-for-windows/git/pull/4438) e.g. the executable bits of files (this needs `core.WSLCompat` to be set, and [the NTFS volume needs to be mounted in WSL using the appropriate options](https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/)).

### Bug Fixes

* Portable Git: The Windows version is now parsed [more robustly](https://github.com/git-for-windows/build-extra/pull/506) in the post-install script.
* The labels of the File Explorer menu items installed by the Git for Windows installer [have been aligned](https://github.com/git-for-windows/build-extra/pull/507) with what is customary ("Open Git Bash Here" instead of "Git Bash Here").

## Changes since Git for Windows v2.40.1 (April 25th 2023)

As announced previously, Git for Windows will drop support for Windows 7 and for Windows 8 in one of the next versions, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Following the footsteps of the MSYS2 and Cygwin projects on which Git for Windows depends, the 32-bit variant of Git for Windows [is being phased out](https://gitforwindows.org/32-bit.html). As of Git for Windows v2.41.0, the 32-bit variant of the POSIX emulation layer (known as "MSYS2 runtime", powering Git Bash among other components shipped with Git for Windows) is in maintenance mode and will only see security bug fixes (if any). Users relying on 32-bit Git for Windows are highly encouraged to switch to the 64-bit version whenever possible.

Please also note that the code-signing certificate used to sign Git for Windows' executables was renewed and may cause Smart Screen to show a warning until the certificate has gained a certain minimum reputation.

### New Features

* Comes with [Git v2.41.0](https://github.com/git/git/blob/v2.41.0/Documentation/RelNotes/2.41.0.txt).
* Comes with [OpenSSH v9.3p1](https://www.openssh.com/txt/release-9.3)
* Comes with [MinTTY v3.6.4](https://github.com/mintty/mintty/releases/tag/3.6.4).
* The Git for Windows installer now [also includes](https://github.com/git-for-windows/build-extra/pull/491) the Git LFS documentation (i.e. `git help git-lfs` now works).
* Comes with [Perl v5.36.1](http://search.cpan.org/dist/perl-5.36.1/pod/perldelta.pod).
* Comes with [GNU Privacy Guard v2.2.41](https://dev.gnupg.org/source/gnupg/browse/STABLE-BRANCH-2-2/NEWS;gnupg-2.2.41?blame=off).
* Comes with [Git Credential Manager v2.1.2](https://github.com/git-ecosystem/git-credential-manager/releases/tag/v2.1.2).
* Comes with MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.4.6](https://inbox.sourceware.org/cygwin-announce/20230214142733.1052688-1-corinna-cygwin@cygwin.com/). (This does not extend to 32-bit Git for Windows, which [is stuck with v3.3.* of the MSYS2 runtime forever](https://github.com/git-for-windows/git/issues/4279).)
* To help with Git for Windows' release mechanics, Git for Windows now ships [with two variants of `libcurl`](https://github.com/git-for-windows/git/pull/4410).
* Comes with [cURL v8.1.2](https://curl.se/changes.html#8_1_2).
* Comes with [OpenSSL v1.1.1u](https://www.openssl.org/news/openssl-1.1.1-notes.html).

### Bug Fixes

* Git GUI's `Repository>Explore Working Copy` [was broken since v2.39.1](https://github.com/git-for-windows/git/issues/4356), which has been fixed.
* The MSYS2 runtime was adjusted to [prepare for an upcoming Windows version](https://github.com/git-for-windows/git/issues/4429).

## Changes since Git for Windows v2.40.0 (March 14th 2023)

This is a security release, addressing [CVE-2023-29012](https://github.com/git-for-windows/git/security/advisories/GHSA-gq5x-v87v-8f7g), [CVE-2023-29011](https://github.com/git-for-windows/git/security/advisories/GHSA-g4fv-xjqw-q7jm), [CVE-2023-29007](https://github.com/git/git/security/advisories/GHSA-v48j-4xgg-4844), [CVE-2023-25815](https://github.com/git-for-windows/git/security/advisories/GHSA-9w66-8mq8-5vm8) and [CVE-2023-25652](https://github.com/git/git/security/advisories/GHSA-2hvf-7c8p-28fx).

### New Features

* Comes with [Git v2.40.1](https://github.com/git/git/blob/v2.40.1/Documentation/RelNotes/2.40.1.txt).

### Bug Fixes

* Addresses [CVE-2023-29012](https://github.com/git-for-windows/git/security/advisories/GHSA-gq5x-v87v-8f7g), a vulnerability where starting Git CMD would execute `doskey.exe` in the current directory, if it exists.
* Addresses [CVE-2023-29011](https://github.com/git-for-windows/git/security/advisories/GHSA-g4fv-xjqw-q7jm), a vulnerability where the SOCKS5 proxy called `connect.exe` is susceptible to picking up an untrusted configuration on multi-user machines.
* Addresses [CVE-2023-29007](https://github.com/git/git/security/advisories/GHSA-v48j-4xgg-4844), a vulnerability where `git submodule deinit` can inadvertently introduce malicious changes into the Git config file.
* Addresses [CVE-2023-25815](https://github.com/git-for-windows/git/security/advisories/GHSA-9w66-8mq8-5vm8), a vulnerability where Git can unexpectedly show crafted "localized" messages written by another user on a multi-user machine.
* Addresses [CVE-2023-25652](https://github.com/git/git/security/advisories/GHSA-2hvf-7c8p-28fx), a vulnerability where `git apply --reject` could follow symbolic links to write files outside the worktree.

## Changes since Git for Windows v2.39.2 (February 14th 2023)

As announced previously, Git for Windows will drop support for Windows 7 and for Windows 8 in one of the next versions, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

Also following the footsteps of the MSYS2 and Cygwin projects on which Git for Windows depends, the 32-bit variant of Git for Windows [is nearing its end of support](https://gitforwindows.org/32-bit.html).

### New Features

* Comes with [Git v2.40.0](https://github.com/git/git/blob/v2.40.0/Documentation/RelNotes/2.40.0.txt).
* In the olden Git days, there were "dashed" Git commands (e.g. `git-commit` instead of `git commit`). These haven't been supported for interactive use in a really, really long time. But they still worked in Git aliases and hooks ("scripts"). Since Git v1.5.4 (released on February 2nd, 2008), it was discouraged/deprecated to use dashed Git commands even in scripts. As of this version, Git for Windows [no longer supports these dashed commands](https://github.com/git-for-windows/git/pull/4252).
* Comes with [tig v2.5.8](https://github.com/jonas/tig/releases/tag/tig-2.5.8).
* Comes with [Bash v5.2 patchlevel 15](https://tiswww.case.edu/php/chet/bash/NEWS).
* Comes with [OpenSSL v1.1.1t](https://github.com/openssl/openssl/releases/tag/OpenSSL_1_1_1t).
* Comes with [GNU TLS v3.8.0](https://lists.gnupg.org/pipermail/gnutls-help/2023-February/004816.html).
* Comes with [cURL v7.88.1](https://github.com/curl/curl/releases/tag/curl-7_88_1).
* Comes with [libfido2 v1.13.0](https://github.com/Yubico/libfido2/releases/tag/1.13.0).
* Comes with [Git Credential Manager v2.0.935](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.935).

### Bug Fixes

* Some commands mishandled absolute paths near the drive root (e.g. [`scalar unregister C:/foo`](https://github.com/git-for-windows/git/issues/4200)), which has been [fixed](https://github.com/git-for-windows/git/pull/4253).
* When trying to call Cygwin (or for that matter, MSYS2) programs from Git Bash, users would frequently be greeted with [cryptic error messages about a "cygheap"](https://github.com/git-for-windows/git/issues/4255) or even just an even more puzzling exit code 127. Many of these calls [now](https://github.com/git-for-windows/msys2-runtime/pull/48) [succeed](https://github.com/git-for-windows/msys2-runtime/pull/49), allowing basic interactions. While it is still not possible for, say, Cygwin's `vim.exe` to interact with the Git Bash's terminal window, it _is_ now possible for Cygwin's `zstd.exe` in conjuction with Git for Windows' `tar.exe` to handle `.tar.zst` archives. 

## Changes since Git for Windows v2.39.1 (January 17th 2023)

This is a security release, addressing [CVE-2023-22490](https://github.com/git/git/security/advisories/GHSA-gw92-x3fm-3g3q), [CVE-2023-22743](https://github.com/git-for-windows/git/security/advisories/GHSA-p2x9-prp4-8gvq), [CVE-2023-23618](https://github.com/git-for-windows/git/security/advisories/GHSA-wxwv-49qw-35pm) and [CVE-2023-23946](https://github.com/git/git/security/advisories/GHSA-r87m-v37r-cwfh).

### New Features

* Comes with [Git v2.39.2](https://github.com/git/git/blob/v2.39.2/Documentation/RelNotes/2.39.2.txt).


### Bug Fixes

* Addresses [CVE-2023-22743](https://github.com/git-for-windows/git/security/advisories/GHSA-p2x9-prp4-8gvq), a vulnerability rated "high" making the Git for Windows' installer susceptible to DLL side-loading attacks.
* Addresses [CVE-2023-23618](https://github.com/git-for-windows/git/security/advisories/GHSA-wxwv-49qw-35pm), a vulnerability rated "high" where `gitk` would inadvertently execute programs placed in the worktree.
* Addresses [CVE-2023-22490](https://github.com/git/git/security/advisories/GHSA-gw92-x3fm-3g3q), a moderate vulnerability allowing for data exfiltration in local clones.
* Addresses [CVE-2023-23946](https://github.com/git/git/security/advisories/GHSA-r87m-v37r-cwfh), a moderate vulnerability that would allow crafted patches to trick `git apply` into writing into files outside the current directory.

## Changes since Git for Windows v2.39.0(2) (December 21st 2022)

This is a security release, addressing [CVE-2022-41903](https://github.com/git/git/security/advisories/GHSA-475x-2q3q-hvwq), [CVE-2022-23521](https://github.com/git/git/security/advisories/GHSA-c738-c5qq-xg89) and [CVE-2022-41953](https://github.com/git-for-windows/git/security/advisories/GHSA-v4px-mx59-w99c).

### New Features

* Comes with [Git v2.39.1](https://github.com/git/git/blob/v2.39.1/Documentation/RelNotes/2.39.1.txt).

### Bug Fixes

* Addresses [CVE-2022-23521](https://github.com/git/git/security/advisories/GHSA-c738-c5qq-xg89), a critical vulnerability in the `.gitattributes` parsing that potentially allows malicious code to be executed while cloning.
* Addresses [CVE-2022-41953](https://github.com/git-for-windows/git/security/advisories/GHSA-v4px-mx59-w99c), a vulnerability that makes Git GUI's `Clone` function susceptible to Remote Code Execution attacks.
* Addresses [CVE-2022-41903](https://github.com/git/git/security/advisories/GHSA-475x-2q3q-hvwq), a vulnerability that may allow heap overflows and code to be executed inadvertently during a `git archive` invocation.
* A [regression introduced in Git for Windows v2.39.0(2)](https://github.com/git-for-windows/git/issues/4194) that prevented cloning from Bitbucket [was fixed](https://github.com/git-for-windows/MINGW-packages/pull/64).

## Changes since Git for Windows v2.39.0 (December 12th 2022)

### New Features

* Comes with [PCRE2 v10.42](https://github.com/PCRE2Project/pcre2/releases/tag/pcre2-10.42).
* Comes with [Git Credential Manager v2.0.886](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.886).
* Comes with [MinTTY v3.6.3](https://github.com/mintty/mintty/releases/tag/3.6.3).
* Comes with [cURL v7.87.0](https://github.com/curl/curl/releases/tag/curl-7_87_0).

### Bug Fixes

* The installer is expected to stop GPG agents automatically, but there was [a bug](https://github.com/git-for-windows/git/issues/4172) that prevented that from working, which [has been fixed](https://github.com/git-for-windows/build-extra/pull/453).
* A [regression](https://github.com/git-for-windows/git/issues/4171) that caused `no_proxy` to be ignored was fixed by [upgrading libcurl](https://github.com/git-for-windows/git/issues/4191).
* The Git Credential Manager version shipped with Git for Windows v2.39.0 [could not always find its UI helper](https://github.com/git-for-windows/git/issues/4165) which was fixed by [upgrading to a fixed version](https://github.com/git-for-windows/git/issues/4166).
* A bug in MinTTY caused it to throw a Critical Error when the printer spool service was not started, which was fixed by [upgrading MinTTY](https://github.com/git-for-windows/git/issues/4182).

## Changes since Git for Windows v2.38.1 (October 18th 2022)

### New Features

* Comes with [Git v2.39.0](https://github.com/git/git/blob/v2.39.0/Documentation/RelNotes/2.39.0.txt).
* Comes with [OpenSSL v1.1.1s](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [cURL v7.86.0](https://curl.haxx.se/changes.html#7_86_0).
* The Portable Git edition (which comes as a self-extracting 7-Zip archive) [now uses the latest 7-Zip version to self-extract](https://github.com/git-for-windows/build-extra/commit/0240a09014a4fcfd9f487e50d7a09464a2e428b8).
* Comes with [OpenSSH v9.1p1](https://www.openssh.com/txt/release-9.1).
* It [is now possible](https://github.com/git-for-windows/MSYS2-packages/commit/6823ee7b329b53f38747f64db8fb8d6de077a0e4) to generate and use [SSH keys protected by security keys](https://man.openbsd.org/ssh-keygen#FIDO_AUTHENTICATOR) (AKA FIDO devices) via Windows Hello, e.g. via `ssh-keygen.exe -t ecdsa-sk`.
* Portable Git no longer configures `color.diff`, `color.status` and `color.branch` individually, but [configures `color.ui` instead](https://github.com/git-for-windows/build-extra/pull/442), which makes it easier to override the default.
* Comes with [GNU TLS v3.7.8](https://lists.gnupg.org/pipermail/gnutls-help/2022-September/004765.html).
* Comes with [Git Credential Manager Core v2.0.877](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.877).
* Comes with [MinTTY v3.6.2](https://github.com/mintty/mintty/releases/tag/3.6.2).
* Comes with [Bash v5.2 patchlevel 12](https://tiswww.case.edu/php/chet/bash/NEWS).
* Comes with [Git LFS v3.3.0](https://github.com/git-lfs/git-lfs/releases/tag/v3.3.0).
* Comes with [PCRE2 v10.41](https://github.com/PCRE2Project/pcre2/blob/pcre2-10.41/ChangeLog).

### Bug Fixes

* The Git executables (e.g. `git.exe` itself) used to have incomplete version information recorded in their resources, which [has been fixed](https://github.com/git-for-windows/git/pull/4092).
* A [regression](https://github.com/git-for-windows/git/issues/4052) introduced in Git for Windows v2.38.0 that prevented `git.exe` from running in Windows Nano Server containers [was fixed](https://github.com/git-for-windows/git/pull/4074).

## Changes since Git for Windows v2.38.0 (October 3rd 2022)

### New Features

* Comes with [Git v2.38.1](https://github.com/git/git/blob/v2.38.1/Documentation/RelNotes/2.38.1.txt).

## Changes since Git for Windows v2.37.3 (August 30th 2022)

### New Features

* Comes with [Git v2.38.0](https://github.com/git/git/blob/v2.38.0/Documentation/RelNotes/2.38.0.txt).
* Comes with [cURL v7.85.0](https://curl.haxx.se/changes.html#7_85_0).
* Comes with MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.6](https://cygwin.com/pipermail/cygwin-announce/2022-September/010707.html).
* Comes with [BusyBox v1.34.0.19688.985b51cf7](https://github.com/git-for-windows/busybox-w32/commit/985b51cf7).
* The `scalar` command is now included. [Scalar](https://github.com/microsoft/git/blob/vfs-2.37.3/contrib/scalar/docs/philosophy.md) is a helper to automatically configure your (large) Git repositories to take advantage of the latest and greatest features. Note: If you work with repositories hosted on Azure Repos, use [Microsoft's fork of Git](https://github.com/microsoft/git/releases/latest) for the best user experience.

## Changes since Git for Windows v2.37.2(2) (August 11th 2022)

### New Features

* Comes with [Git v2.37.3](https://github.com/git/git/blob/v2.37.3/Documentation/RelNotes/2.37.3.txt).
* Comes with [tig v2.5.7](https://github.com/jonas/tig/releases/tag/tig-2.5.7).

### Bug Fixes

* Git for Windows [now correctly handles `.doc` files that are not Word Documents](https://github.com/git-for-windows/build-extra/pull/432).

## Changes since Git for Windows v2.37.1 (July 12th 2022)

### (Upcoming) breaking changes

We updated the included Bash to version 5.1 (previously 4.4). Please check your shell scripts for potential compatibility issues.

Also, as previously announced, Git for Windows dropped support for Windows Vista.

Around the beginning of 2023, Git for Windows will drop support for Windows 7 and for Windows 8, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

### New Features

* Comes with [Git v2.37.2](https://github.com/git/git/blob/v2.37.2/Documentation/RelNotes/2.37.2.txt).
* Comes with [tig v2.5.6](https://github.com/jonas/tig/releases/tag/tig-2.5.6).
* Comes with [Bash v5.1 patchlevel 016 ](https://tiswww.case.edu/php/chet/bash/NEWS).
* Comes with [Perl v5.36.0](http://search.cpan.org/dist/perl-5.36.0/pod/perldelta.pod).
* Git's executables are [now](https://github.com/git-for-windows/build-extra/pull/429) marked [Terminal Server-aware](https://github.com/git-for-windows/git/pull/3942), meaning: Git will be slightly faster when being run using Remote Desktop Services.
* `git svn` is now based on [subversion v1.14.2](https://svn.apache.org/repos/asf/subversion/tags/1.14.2/CHANGES).
* Comes with [GNU TLS v3.7.7](https://lists.gnupg.org/pipermail/gnutls-help/2022-July/004746.html).

### Bug Fixes

* Git for Windows [now ships without the `zmore` and `bzmore` utilities](https://github.com/git-for-windows/build-extra/pull/430) (which were broken and included only inadvertently).
* A [regression in the `vimdiff` mode of `git mergetool`](https://github.com/git-for-windows/git/issues/3945) has been [fixed](https://github.com/git-for-windows/git/pull/3960).
* With certain network drives, [it was reported](https://github.com/git-for-windows/git/issues/3727) that some attributes associated with caching confused Git for Windows. This [was fixed](https://github.com/git-for-windows/git/pull/3753).

## Changes since Git for Windows v2.37.0 (June 27th 2022)

This release addresses [CVE-2022-31012](https://github.com/git-for-windows/git/security/advisories/GHSA-gjrj-fxvp-hjj2) and [CVE-2022-29187](https://github.com/git/git/security/advisories/GHSA-j342-m5hw-rr3v).

### New Features

* Comes with [Git v2.37.1](https://github.com/git/git/blob/v2.37.1/Documentation/RelNotes/2.37.1.txt).
* Comes with [OpenSSL v1.1.1q](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [Git Credential Manager Core v2.0.785](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.785).
* Comes with [tig v2.5.5](https://github.com/jonas/tig/releases/tag/tig-2.5.5).

### Bug Fixes

* Pasting large amounts of text in Git for Windows' Bash when running inside Windows Terminal [often resulted in garbled text](https://github.com/git-for-windows/git/issues/3936), which has been fixed.
* The Perl module [perl-Clone](https://metacpan.org/source/ATOOMIC/Clone-0.45/Changes) which linked to a non-existing DLL was rebuilt to fix the issue.
* The Git for Windows installer can no longer be tricked into running an untrusted `git.exe` in elevated mode ([CVE-2022-31012](https://github.com/git-for-windows/git/security/advisories/GHSA-gjrj-fxvp-hjj2)).
* When running Git in a world-writable directory owned by the current user (think `C:\Windows\Temp`, when running under the `SYSTEM` account), the checks for dubious ownership of the `.git` directory now detect this situation properly ([CVE-2022-29187](https://github.com/git/git/security/advisories/GHSA-j342-m5hw-rr3v)).

## Changes since Git for Windows v2.36.1 (May 9th 2022)

### New Features

* Comes with [Git v2.37.0](https://github.com/git/git/blob/v2.37.0/Documentation/RelNotes/2.37.0.txt).
* Many anti-malware products seem to have problems with our MSYS2 runtime, leading to problems running e.g. `git subtree`. We [added a workaround](https://github.com/git-for-windows/msys2-runtime/pull/37) that hopefully helps in most of these scenarios.
* Comes with MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.5](https://cygwin.com/pipermail/cygwin-announce/2022-May/010565.html).
* Comes with [PCRE2 v10.40](https://raw.githubusercontent.com/PCRE2Project/pcre2/pcre2-10.40/ChangeLog).
* Comes with [Git LFS v3.2.0](https://github.com/git-lfs/git-lfs/releases/tag/v3.2.0).
* Comes with [GNU TLS v3.7.6](https://lists.gnupg.org/pipermail/gnutls-help/2022-May/004744.html).
* SSH's CBC ciphers, which were re-enabled in 2017 to better support Azure Repos [have again been disabled by default](https://github.com/git-for-windows/build-extra/pull/421) because Azure Repos does not require them any longer.
* Comes with [OpenSSL v1.1.1p](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [Git Credential Manager Core v2.0.779](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.779).
* Comes with [cURL v7.84.0](https://curl.haxx.se/changes.html#7_84_0).

### Bug Fixes

* The Git for Windows-only `--show-ignored-directory` option of `git status`, which was deprecated a long time ago, [was finally removed](https://github.com/git-for-windows/git/pull/2067).
* A crash when running Git for Windows in Wine [was fixed](https://github.com/git-for-windows/git/pull/3875).
* A bug in the interaction between FSCache and parallel checkout [was fixed](https://github.com/git-for-windows/git/pull/3909).
* Cloning to network shares failed on some network file systems, which was [fixed](https://github.com/git-for-windows/git/pull/3646).
* When Git indicates an unsafe directory due to the file system (e.g. FAT32) being unable to record ownership, Git [now gives better hints](https://github.com/git-for-windows/git/pull/3887).

## Changes since Git for Windows v2.36.0 (April 20th 2022)

### Upcoming breaking changes

We plan to update the included bash to version 5.1 (currently 4.4) soon after Git for Windows 2.36.0 is released. Please check your shell scripts for potential compatibility issues.

Git for Windows will also stop supporting Windows Vista soon after Git for Windows 2.36.0 is released. Around the beginning of 2023, Git for Windows will drop support for Windows 7 and for Windows 8, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

### New Features

* Comes with [Git v2.36.1](https://github.com/git/git/blob/v2.36.1/Documentation/RelNotes/2.36.1.txt).
* On newer Windows versions, Git [now assumes a Win32 Console with full color capabilities](https://github.com/git-for-windows/git/pull/3751). This helps e.g. when NeoVIM is configured as Git's editor.
* Comes with [OpenSSH v9.0p1](https://www.openssh.com/txt/release-9.0).
* When `git clean` fails due to long paths, [Git now advises the user to set `core.longPaths`](https://github.com/git-for-windows/git/pull/3817).
* Comes with [cURL v7.83.0](https://curl.haxx.se/changes.html#7_83_0).
* Git Credential Manager's binaries [are no longer installed in the same location as core Git's own dashed programs](https://github.com/git-for-windows/build-extra/pull/406). This separates more clearly the core Git executables from the Git executables provided by third-parties.
* Comes with [Git Credential Manager Core v2.0.696](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.696).
* Comes with [OpenSSL v1.1.1o](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [patch level 4](https://github.com/git-for-windows/msys2-runtime/commit/d72d5e8aeb7df99c55bdc438fb71fdeffd2bd1e5) of the MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.4](https://cygwin.com/pipermail/cygwin-announce/2022-January/010438.html).

### Bug Fixes

* A regression introduced in Git for Windows v2.36.0 where GPG in 32-bit versions simply would not work [was fixed](https://github.com/git-for-windows/MSYS2-packages/commit/002b641e4409ce76709419e835e1fb2a6de14e7c).
* The `proxy-lookup` helper [only reported the first letter of the proxy](https://github.com/git-for-windows/git/issues/3818), which was fixed.
* The installer [now verifies that .NET Framework 4.7.2 is available](https://github.com/git-for-windows/build-extra/pull/329) before offering Git Credential Manager (GCM) as an option (because it is required for GCM to work).
* A bug introduced into v2.36.0 where [shell scripts failed to run on some network shares with the error "Too many levels of symbolic links"](https://github.com/git-for-windows/git/issues/3825) was fixed.

## Changes since Git for Windows v2.35.3 (April 15th 2022)

This version includes Git LFS v3.1.4, addressing [CVE-2022-24826](https://github.com/git-lfs/git-lfs/security/advisories/GHSA-6rw3-3whw-jvjj) (if you use Git LFS with [MinGit](https://gitforwindows.org/mingit), you will want to upgrade).

### Upcoming breaking changes

We plan to update the included bash to version 5.1 (currently 4.4) soon after Git for Windows 2.36.0 is released. Please check your shell scripts for potential compatibility issues.

Git for Windows will also stop supporting Windows Vista soon after Git for Windows 2.36.0 is released. Around the beginning of 2023, Git for Windows will drop support for Windows 7 and for Windows 8, following [Cygwin's and MSYS2's lead](https://www.msys2.org/docs/windows_support/) (Git for Windows relies on MSYS2 for components such as Bash and Perl).

### New Features

* Comes with [Git v2.36.0](https://github.com/git/git/blob/v2.36.0/Documentation/RelNotes/2.36.0.txt).
* Comes with MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.4](https://cygwin.com/pipermail/cygwin-announce/2022-January/010438.html).
* Comes with [OpenSSH v8.9p1](https://www.openssh.com/txt/release-8.9).
* Comes with [cURL v7.82.0](https://curl.haxx.se/changes.html#7_82_0).
* Comes with [OpenSSL v1.1.1n](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [Git Credential Manager Core v2.0.696](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.696).
* Comes with [GNU TLS v3.7.4](https://lists.gnupg.org/pipermail/gnutls-help/2022-March/004738.html).
* Comes with [Git LFS v3.1.4](https://github.com/git-lfs/git-lfs/releases/tag/v3.1.4).

## Changes since Git for Windows v2.35.2 (April 12th 2022)

### New Features

* Comes with [Git v2.35.3](https://github.com/git/git/blob/v2.35.3/Documentation/RelNotes/2.35.3.txt).


### Bug Fixes

* The advice indicating how to use the `%(prefix)` with a network share path [was updated](https://github.com/git-for-windows/git/pull/3790) to use the appropriate number of slashes.
* [Various fixes](https://github.com/git-for-windows/git/pull/3791) for usage of the `safe.directory` and `%(prefix)` when using Windows Subsystem for Linux (WSL).

## Changes since Git for Windows v2.35.1(2) (February 1st 2022)

This version addresses [CVE-2022-24765](https://github.com/git-for-windows/git/security/advisories/GHSA-vw2c-22j4-2fh2) and [CVE-2022-24767](https://github.com/git-for-windows/git/security/advisories/GHSA-gf48-x3vr-j5c3).

### New Features

* Comes with [Git v2.35.2](https://github.com/git/git/blob/v2.35.2/Documentation/RelNotes/2.35.2.txt).


### Bug Fixes

* The uninstaller was hardened to [avoid a vulnerability when running under the SYSTEM account](https://github.com/git-for-windows/git/security/advisories/GHSA-gf48-x3vr-j5c3), addressing CVE-2022-24767.

## Changes since Git for Windows v2.35.1 (January 29th 2022)

### Bug Fixes

* A [bug](https://github.com/git-for-windows/git/issues/3674) in FSCache that triggered by a patch that made it into Git for Windows v2.35.0 [was fixed](https://github.com/git-for-windows/git/pull/3678).

## Changes since Git for Windows v2.35.0 (January 24th 2022)

### New Features

* Comes with [Git v2.35.1](https://github.com/git/git/blob/v2.35.1/Documentation/RelNotes/2.35.1.txt).


## Changes since Git for Windows v2.34.1 (November 25th 2021)

### New Features

* Comes with [Git v2.35.0](https://github.com/git/git/blob/v2.35.0/Documentation/RelNotes/2.35.0.txt).
* Comes with a version of the MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.3](https://cygwin.com/pipermail/cygwin-announce/2021-December/010338.html).
* Comes with [OpenSSL v1.1.1m](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* Comes with [Git Credential Manager Core v2.0.632.34631](https://github.com/GitCredentialManager/git-credential-manager/releases/tag/v2.0.632).
* Comes with [cURL v7.81.0](https://curl.haxx.se/changes.html#7_81_0).
* Comes with [tig v2.5.5](https://github.com/jonas/tig/releases/tag/tig-2.5.5).
* Comes with [patch level 4](https://github.com/git-for-windows/msys2-runtime/commit/b600e8ead500aef55e23810c2e630d9be46f3a4c) of the MSYS2 runtime (Git for Windows flavor) based on [Cygwin 3.3.3](https://cygwin.com/pipermail/cygwin-announce/2021-December/010338.html).

### Bug Fixes

* A [bug](https://github.com/git-for-windows/git/issues/3624) which caused crashes when running `git log` with custom date formats in 32-bit builds was fixed.

## Changes since Git for Windows v2.34.0 (November 15th 2021)

### New Features

* Comes with [Git v2.34.1](https://github.com/git/git/blob/v2.34.1/Documentation/RelNotes/2.34.1.txt).
* Comes with [Git Credential Manager Core v2.0.605.12951](https://github.com/microsoft/git-credential-manager-core/releases/tag/v2.0.605).
* Comes with [cURL v7.80.0](https://curl.haxx.se/changes.html#7_80_0).

## Changes since Git for Windows v2.33.1 (October 13th 2021)

### New Features

* Comes with [Git v2.34.0](https://github.com/git/git/blob/v2.34.0/Documentation/RelNotes/2.34.0.txt).
* Config settings referring to paths relative to where Git is installed [now have to be marked via `%(prefix)/` instead of the now-deprecated leading slash](https://github.com/git-for-windows/git/pull/3472).
* Comes with [Git LFS v3.0.2](https://github.com/git-lfs/git-lfs/releases/tag/v3.0.2).
* Contains [new, experimental support for `core.fsyncObjectFiles=batch`](https://github.com/git-for-windows/git/pull/3492).

### Bug Fixes

* Configuring a system-wide VS Code as Git's editor [was broken](https://github.com/git-for-windows/git/issues/3471), which has been fixed.
* It is [now possible](https://github.com/git-for-windows/git/pull/3487) to clone files larger than 4GB as long as they are transferred via [Git LFS](https://git-lfs.github.io/).
* Git now works around [an issue with `vi` and incorrect line breaks in the Windows Terminal](https://github.com/microsoft/terminal/issues/9359).

## Changes since Git for Windows v2.33.0(2) (August 24th 2021)

### New Features

* Comes with [Git v2.33.1](https://github.com/git/git/blob/v2.33.1/Documentation/RelNotes/2.33.1.txt).
* Comes with [OpenSSL v1.1.1l](https://www.openssl.org/news/openssl-1.1.1-notes.html).
* The included `git svn` now uses [subversion v1.14.1](https://svn.apache.org/repos/asf/subversion/tags/1.14.1/CHANGES) internally.
* [Git Credential Manager for Windows](https://github.com/microsoft/Git-Credential-Manager-for-Windows) (which was superseded by [Git Credential Manager Core](https://aka.ms/gcmcore), and was deprecated for a long time now, and no longer succeeds to authenticate with GitHub) is [no longer included in Git for Windows](https://github.com/git-for-windows/build-extra/pull/377).
* Comes with [cURL v7.79.1](https://curl.haxx.se/changes.html#7_79_1).
* Comes with [OpenSSH v8.8p1](https://www.openssh.com/txt/release-8.8).
* Comes with [Git LFS v3.0.1](https://github.com/git-lfs/git-lfs/releases/tag/v3.0.1).
* The built-in filesystem watcher ("FSMonitor") [has been updated to the latest version](https://github.com/git-for-windows/git/pull/3447).
* Comes with [Git Credential Manager Core v2.0.567.18224](https://github.com/microsoft/git-credential-manager-core/releases/tag/v2.0.567).

### Bug Fixes

* Wordpad [can be configured as Git's preferred editor](https://github.com/git-for-windows/build-extra/pull/378) again.
* A bug where Git's garbage collection during a `git pull` failed to delete obsolete files [was fixed](https://github.com/git-for-windows/git/pull/3415).
* The `git svn` command, [which was broken in Git for Windows v2.33.0(2)](https://github.com/git-for-windows/git/issues/3392), has been fixed.
* The password prompt when cloning via SSH [works again](https://github.com/git-for-windows/build-extra/pull/381).
* The MSYS2 runtime [no longer complains about FAST_CWD on Windows/ARM64](https://github.com/git-for-windows/msys2-runtime/pull/33).
* When VS Code is configured as editor, [it no longer needs the window to be closed, just the tab](https://github.com/git-for-windows/git/issues/3452).
* The 32-bit versions of Git for Windows included outdated versions of `ca-certificates` and `less`, [which has been rectified](https://github.com/git-for-windows/MSYS2-packages/pull/49).

## Changes since Git for Windows v2.33.0 (August 17th 2021)

### New Features

* Comes with [cURL v7.78.0](https://curl.haxx.se/changes.html#7_78_0).
* Comes with [OpenSSH v8.7p1](https://www.openssh.com/txt/release-8.7).

### Bug Fixes

* A [bug](https://github.com/git-for-windows/git/issues/3368) affecting older Windows versions that caused the installer to show the error message "Could not call proc" [was fixed](https://github.com/git-for-windows/build-extra/pull/374).

## Changes since Git for Windows v2.32.0(2) (July 6th 2021)

### New Features

* Comes with [Git v2.33.0](https://github.com/git/git/blob/v2.33.0/Documentation/RelNotes/2.33.0.txt).
* Comes with [Perl v5.34.0](http://search.cpan.org/dist/perl-5.34.0/pod/perldelta.pod) (and some updated Perl modules).
* It is [now possible](https://github.com/git-for-windows/build-extra/pull/367) to ask Git for Windows to use an SSH found on the `PATH` instead of its bundled OpenSSH executable.
* Comes with [Git Credential Manager Core v2.0.498.54650](https://github.com/microsoft/git-credential-manager-core/releases/tag/v2.0.498).
* The experimental FSMonitor patches were replaced with [a newer version](https://github.com/git-for-windows/git/pull/3350).
* Comes with [GNU Privacy Guard v2.2.29](https://lists.gnupg.org/pipermail/gnupg-announce/2021q3/000461.html).

### Bug Fixes

* The installer no longer [shows an error dialog](https://github.com/git-for-windows/git/issues/3312) when upgrading while the Windows Terminal Profile option is checked.
* Interaction with [the `git repo` tool](https://gerrit.googlesource.com/git-repo/) was [improved](https://github.com/git-for-windows/git/pull/3328).
* The version of GNU Privacy Guard (GPG) bundled in Git for Windows [did not work in 64-bit setups](https://github.com/git-for-windows/git/issues/2888), which [was fixed](https://github.com/git-for-windows/MSYS2-packages/pull/46).

## Changes since Git for Windows v2.32.0 (June 7th 2021)

### New Features

* The Windows Terminal profile is now identified [by a GUID](https://github.com/git-for-windows/build-extra/pull/356), for more robust customization.
* Comes with [GNU Privacy Guard v2.2.28](https://lists.gnupg.org/pipermail/gnupg-announce/2021q2/000460.html).
* Comes with [Git Credential Manager Core v2.0.475.64295](https://github.com/microsoft/git-credential-manager-core/releases/tag/v2.0.475).
* Access to remote HTTPS repositories that requires client certificates [can be enabled](https://github.com/git-for-windows/git/issues/3292). This is now necessary because [cURL no longer sends client certificates by default](https://github.com/curl/curl/commit/54e747501626b81149b1b44949119d365db82004).

### Bug Fixes

* The built-in file system watcher could hang in some scenarios. [This was fixed](https://github.com/git-for-windows/git/pull/3263).
* Remote HTTPS repositories [could not be accessed from within portable Git installed into a network share](https://github.com/git-for-windows/git/issues/3266). This [has been fixed](https://github.com/git-for-windows/MINGW-packages/pull/51).
* When scrolling in the pager (e.g. in the output of `git log`), [lines were duplicated by mistake](https://github.com/git-for-windows/git/issues/3235). This was fixed.
* The `git subtree` command was [completely broken in the previous release](https://github.com/git-for-windows/git/issues/3260), and was fixed.
* A bug was fixed where remote operations [appeared to hang](https://github.com/git-for-windows/git/issues/3268) (but were waiting for user feedback on a hidden Console).
* A bug was fixed where the experimental built-in file system watcher had [a problem with worktrees whose paths had non-ASCII characters](https://github.com/git-for-windows/git/issues/3262).

## Changes since Git for Windows v2.31.1 (March 27th 2021)

### New Features

* Comes with [Git v2.32.0](ht

[... truncated by token budget ...]

