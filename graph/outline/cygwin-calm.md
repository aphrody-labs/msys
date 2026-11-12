# Codebase Digest: cygwin-calm

- Files analyzed: 397
- Total lines: 9468
- Total size: 482.3 KB
- Git branch: `master`
- Git HEAD commit: `611eb1b5 (Fix upload.scan() to collect all packages, then read them)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
cygwin-calm/
├── LICENSE (17 lines, 1023 B, ~241 tokens)
├── README.md (6 lines, 332 B, ~85 tokens)
├── TODO (10 lines, 871 B, ~211 tokens)
├── calm/
│   ├── __init__.py (1 lines, 34 B, ~10 tokens)
│   ├── abeyance_handler.py (9 lines, 369 B, ~106 tokens)
│   ├── buffering_smtp_handler.py (11 lines, 391 B, ~113 tokens)
│   ├── calm.py (61 lines, 1.9 KB, ~566 tokens)
│   ├── common_constants.py (2 lines, 49 B, ~15 tokens)
│   ├── db.py (29 lines, 1.0 KB, ~307 tokens)
│   ├── fix-annotate-perl-hint.py (13 lines, 283 B, ~83 tokens)
│   ├── fix-invalid-key-hint.py (9 lines, 193 B, ~60 tokens)
│   ├── fix-missing-src-hint-info.py (10 lines, 214 B, ~66 tokens)
│   ├── fix-missing-src-hint.py (10 lines, 201 B, ~62 tokens)
│   ├── fix-python-virtual-packages.py (11 lines, 265 B, ~77 tokens)
│   ├── fix-requires-by-linkage.py (15 lines, 326 B, ~95 tokens)
│   ├── fix-requires-by-path.py (13 lines, 284 B, ~84 tokens)
│   ├── fix-skip-only-hint.py (16 lines, 476 B, ~141 tokens)
│   ├── fixes.py (21 lines, 752 B, ~212 tokens)
│   ├── hint-migrate.py (10 lines, 198 B, ~62 tokens)
│   ├── hint.py (11 lines, 389 B, ~113 tokens)
│   ├── irk.py (8 lines, 271 B, ~82 tokens)
│   ├── logfilters.py (7 lines, 276 B, ~84 tokens)
│   ├── mail-inactive-maintainers.py (12 lines, 204 B, ~64 tokens)
│   ├── maintainers.py (26 lines, 929 B, ~276 tokens)
│   ├── missing-repos.py (4 lines, 72 B, ~23 tokens)
│   ├── mkgitoliteconf.py (8 lines, 213 B, ~66 tokens)
│   ├── mksetupini.py (18 lines, 531 B, ~162 tokens)
│   ├── movelist.py (17 lines, 560 B, ~179 tokens)
│   ├── package.py (84 lines, 3.4 KB, ~998 tokens)
│   ├── past_mistakes.py (1 lines, 36 B, ~11 tokens)
│   ├── pkg2html.py (39 lines, 1.0 KB, ~310 tokens)
│   ├── repology.py (16 lines, 435 B, ~129 tokens)
│   ├── reports.py (29 lines, 1.0 KB, ~313 tokens)
│   ├── scallywag_db.py (7 lines, 190 B, ~55 tokens)
│   ├── setup_exe.py (5 lines, 117 B, ~35 tokens)
│   ├── sort-versions.py (5 lines, 104 B, ~33 tokens)
│   ├── spelling.py (8 lines, 244 B, ~72 tokens)
│   ├── tool.py (4 lines, 93 B, ~29 tokens)
│   ├── tool_util.py (8 lines, 161 B, ~53 tokens)
│   ├── untest.py (10 lines, 189 B, ~61 tokens)
│   ├── uploads.py (20 lines, 600 B, ~175 tokens)
│   ├── utils.py (16 lines, 497 B, ~153 tokens)
│   ├── vault.py (11 lines, 203 B, ~65 tokens)
│   ├── version.py (12 lines, 373 B, ~119 tokens)
│   └── words.txt (437 lines, 4.2 KB, ~1.0k tokens)
├── calm-tool.sh (1 lines, 34 B, ~10 tokens)
├── calm.sh (1 lines, 34 B, ~10 tokens)
├── pyproject.toml (3 lines, 81 B, ~23 tokens)
├── requirements.txt (12 lines, 192 B, ~50 tokens)
├── setup.cfg (27 lines, 590 B, ~154 tokens)
├── test/
│   ├── __init__.py (1 lines, 34 B, ~10 tokens)
│   ├── mail-test (22 lines, 832 B, ~228 tokens)
│   ├── test_calm.py (36 lines, 1.1 KB, ~313 tokens)
│   ├── test_entrypoints.py (13 lines, 351 B, ~102 tokens)
│   ├── testdata/
│   │   ├── conflict/
│   │   │   ├── homedir.expected (8 lines, 378 B, ~121 tokens)
│   │   │   ├── htdocs.expected (1 lines, 19 B, ~9 tokens)
│   │   │   ├── rel_area.expected (180 lines, 10.9 KB, ~3.1k tokens)
│   │   │   ├── stagingdir.expected (1 lines, 10 B, ~6 tokens)
│   │   │   └── vault.expected (21 lines, 1.1 KB, ~298 tokens)
│   │   ├── hints/
│   │   │   ├── noarch/
│   │   │   │   └── release/
│   │   │   │       ├── obs-a/
│   │   │   │       │   ├── obs-a-1.0-1-src.expected (1 lines, 72 B, ~24 tokens)
│   │   │   │       │   └── obs-a-1.0-1.expected (1 lines, 72 B, ~24 tokens)
│   │   │   │       ├── obs-b/
│   │   │   │       │   ├── obs-b-1.0-1-src.expected (1 lines, 72 B, ~24 tokens)
│   │   │   │       │   └── obs-b-1.0-1.expected (1 lines, 72 B, ~24 tokens)
│   │   │   │       ├── perl-Net-SMTP-SSL/
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.01-1-src.expected (4 lines, 229 B, ~66 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.01-1.expected (5 lines, 246 B, ~72 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.02-1-src.expected (4 lines, 229 B, ~66 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.02-1.expected (5 lines, 246 B, ~72 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.03-1-src.expected (4 lines, 229 B, ~66 tokens)
│   │   │   │       │   └── perl-Net-SMTP-SSL-1.03-1.expected (5 lines, 246 B, ~72 tokens)
│   │   │   │       ├── test-c/
│   │   │   │       │   ├── test-c-1.0-1-src.expected (1 lines, 68 B, ~23 tokens)
│   │   │   │       │   └── test-c-1.0-1.expected (4 lines, 122 B, ~46 tokens)
│   │   │   │       ├── test-d/
│   │   │   │       │   ├── test-d-1.0-1-src.expected (1 lines, 96 B, ~35 tokens)
│   │   │   │       │   └── test-d-1.0-1.expected (1 lines, 96 B, ~35 tokens)
│   │   │   │       └── test-e/
│   │   │   │           ├── test-e-1.0-1-src.expected (1 lines, 103 B, ~35 tokens)
│   │   │   │           └── test-e-1.0-1.expected (1 lines, 68 B, ~23 tokens)
│   │   │   └── x86_64/
│   │   │       └── release/
│   │   │           ├── arc/
│   │   │           │   ├── arc-4.32.7-10-src.expected (8 lines, 548 B, ~142 tokens)
│   │   │           │   └── arc-4.32.7-10.expected (8 lines, 548 B, ~142 tokens)
│   │   │           ├── base-cygwin/
│   │   │           │   ├── base-cygwin-3.6-1.expected (5 lines, 201 B, ~61 tokens)
│   │   │           │   └── base-cygwin-3.8-1.expected (5 lines, 216 B, ~64 tokens)
│   │   │           ├── corrupt/
│   │   │           │   ├── corrupt-2.0.0-1-src.expected (3 lines, 108 B, ~33 tokens)
│   │   │           │   └── corrupt-2.0.0-1.expected (3 lines, 108 B, ~33 tokens)
│   │   │           ├── cygwin/
│   │   │           │   ├── cygwin-2.2.0-1-src.expected (1 lines, 120 B, ~38 tokens)
│   │   │           │   ├── cygwin-2.2.0-1.expected (4 lines, 131 B, ~42 tokens)
│   │   │           │   ├── cygwin-2.2.1-1-src.expected (4 lines, 168 B, ~55 tokens)
│   │   │           │   ├── cygwin-2.2.1-1.expected (4 lines, 131 B, ~42 tokens)
│   │   │           │   ├── cygwin-2.3.0-0.3-src.expected (4 lines, 116 B, ~38 tokens)
│   │   │           │   ├── cygwin-2.3.0-0.3.expected (7 lines, 225 B, ~73 tokens)
│   │   │           │   ├── cygwin-debuginfo/
│   │   │           │   │   ├── cygwin-debuginfo-2.2.0-1.expected (5 lines, 219 B, ~64 tokens)
│   │   │           │   │   ├── cygwin-debuginfo-2.2.1-1.expected (5 lines, 219 B, ~64 tokens)
│   │   │           │   │   ├── cygwin-debuginfo-2.3.0-0.3.expected (6 lines, 232 B, ~70 tokens)
│   │   │           │   │   └── override.expected (1 lines, 35 B, ~15 tokens)
│   │   │           │   ├── cygwin-devel/
│   │   │           │   │   ├── cygwin-devel-2.2.0-1.expected (5 lines, 179 B, ~54 tokens)
│   │   │           │   │   ├── cygwin-devel-2.2.1-1.expected (5 lines, 179 B, ~54 tokens)
│   │   │           │   │   ├── cygwin-devel-2.3.0-0.3.expected (6 lines, 192 B, ~59 tokens)
│   │   │           │   │   └── override.expected (1 lines, 35 B, ~15 tokens)
│   │   │           │   └── override.expected (1 lines, 35 B, ~15 tokens)
│   │   │           ├── invalid/
│   │   │           │   └── invalid-0.expected (4 lines, 228 B, ~57 tokens)
│   │   │           ├── keychain/
│   │   │           │   ├── keychain-2.6.11-1-src.expected (11 lines, 731 B, ~190 tokens)
│   │   │           │   ├── keychain-2.6.11-1.expected (12 lines, 755 B, ~198 tokens)
│   │   │           │   ├── keychain-2.6.8-1-src.expected (11 lines, 731 B, ~190 tokens)
│   │   │           │   ├── keychain-2.6.8-1.expected (12 lines, 755 B, ~198 tokens)
│   │   │           │   ├── keychain-2.7.1-1-src.expected (11 lines, 731 B, ~190 tokens)
│   │   │           │   └── keychain-2.7.1-1.expected (12 lines, 755 B, ~198 tokens)
│   │   │           ├── libspiro/
│   │   │           │   ├── libspiro-20071029-1.expected (1 lines, 51 B, ~18 tokens)
│   │   │           │   ├── libspiro-devel/
│   │   │           │   │   └── libspiro-devel-20071029-1.expected (1 lines, 51 B, ~18 tokens)
│   │   │           │   └── libspiro0/
│   │   │           │       └── libspiro0-20071029-1.expected (1 lines, 51 B, ~18 tokens)
│   │   │           ├── libtextcat/
│   │   │           │   ├── libtextcat-2.2-2-src.expected (10 lines, 613 B, ~164 tokens)
│   │   │           │   ├── libtextcat-2.2-2.expected (11 lines, 641 B, ~172 tokens)
│   │   │           │   ├── libtextcat-devel/
│   │   │           │   │   └── libtextcat-devel-2.2-2.expected (12 lines, 681 B, ~183 tokens)
│   │   │           │   └── libtextcat0/
│   │   │           │       └── libtextcat0-2.2-2.expected (12 lines, 649 B, ~176 tokens)
│   │   │           ├── mDNSResponder/
│   │   │           │   ├── libdns_sd-devel/
│   │   │           │   │   └── libdns_sd-devel-379.32.1-1.expected (7 lines, 345 B, ~91 tokens)
│   │   │           │   ├── libdns_sd1/
│   │   │           │   │   └── libdns_sd1-379.32.1-1.expected (7 lines, 335 B, ~90 tokens)
│   │   │           │   ├── mDNSResponder-379.32.1-1-src.expected (5 lines, 281 B, ~73 tokens)
│   │   │           │   └── mDNSResponder-379.32.1-1.expected (10 lines, 618 B, ~160 tokens)
│   │   │           ├── mingw64-i686-binutils/
│   │   │           │   ├── mingw64-i686-binutils-2.29.1.787c9873-1.expected (6 lines, 365 B, ~106 tokens)
│   │   │           │   └── mingw64-i686-binutils-debuginfo/
│   │   │           │       └── mingw64-i686-binutils-debuginfo-2.29.1.787c9873-1.expected (7 lines, 403 B, ~118 tokens)
│   │   │           ├── openssh/
│   │   │           │   ├── openssh-7.2p2-1-src.expected (5 lines, 312 B, ~82 tokens)
│   │   │           │   └── openssh-7.2p2-1.expected (5 lines, 312 B, ~82 tokens)
│   │   │           ├── per-version/
│   │   │           │   ├── override.expected (1 lines, 14 B, ~4 tokens)
│   │   │           │   ├── per-version-4.0-1-src.expected (3 lines, 111 B, ~36 tokens)
│   │   │           │   ├── per-version-4.0-1.expected (4 lines, 134 B, ~43 tokens)
│   │   │           │   ├── per-version-4.8-1-src.expected (3 lines, 111 B, ~36 tokens)
│   │   │           │   └── per-version-4.8-1.expected (4 lines, 139 B, ~45 tokens)
│   │   │           ├── per-version-incomplete/
│   │   │           │   ├── override.expected (1 lines, 14 B, ~4 tokens)
│   │   │           │   ├── per-version-incomplete-36-1-src.expected (3 lines, 152 B, ~44 tokens)
│   │   │           │   └── per-version-incomplete-36-1.expected (3 lines, 152 B, ~44 tokens)
│   │   │           ├── per-version-replacement-hint-only/
│   │   │           │   ├── per-version-replacement-hint-only-1.0-1-src.expected (3 lines, 111 B, ~36 tokens)
│   │   │           │   └── per-version-replacement-hint-only-1.0-1.expected (4 lines, 134 B, ~43 tokens)
│   │   │           ├── proj/
│   │   │           │   ├── libproj-devel/
│   │   │           │   │   └── libproj-devel-4.8.0-1.expected (7 lines, 375 B, ~102 tokens)
│   │   │           │   ├── libproj1/
│   │   │           │   │   └── libproj1-4.8.0-1.expected (7 lines, 369 B, ~101 tokens)
│   │   │           │   └── proj-4.8.0-1.expected (6 lines, 351 B, ~93 tokens)
│   │   │           ├── rpm-doc/
│   │   │           │   ├── rpm-doc-4.1-2-src.expected (2 lines, 145 B, ~39 tokens)
│   │   │           │   ├── rpm-doc-4.1-2.expected (2 lines, 145 B, ~39 tokens)
│   │   │           │   └── rpm-doc-999-1.expected (3 lines, 173 B, ~48 tokens)
│   │   │           ├── splint/
│   │   │           │   └── splint-3.1.2-1.expected (15 lines, 990 B, ~245 tokens)
│   │   │           ├── staleversion/
│   │   │           │   ├── override.expected (1 lines, 80 B, ~32 tokens)
│   │   │           │   ├── staleversion-240-1-src.expected (3 lines, 136 B, ~39 tokens)
│   │   │           │   ├── staleversion-240-1.expected (4 lines, 153 B, ~46 tokens)
│   │   │           │   ├── staleversion-242-0-src.expected (3 lines, 136 B, ~39 tokens)
│   │   │           │   ├── staleversion-242-0.expected (4 lines, 153 B, ~46 tokens)
│   │   │           │   ├── staleversion-243-0-src.expected (3 lines, 136 B, ~39 tokens)
│   │   │           │   ├── staleversion-243-0.expected (4 lines, 153 B, ~46 tokens)
│   │   │           │   ├── staleversion-250-0-src.expected (3 lines, 136 B, ~39 tokens)
│   │   │           │   ├── staleversion-250-0.expected (4 lines, 153 B, ~46 tokens)
│   │   │           │   ├── staleversion-251-0-src.expected (4 lines, 149 B, ~45 tokens)
│   │   │           │   ├── staleversion-251-0.expected (5 lines, 166 B, ~51 tokens)
│   │   │           │   ├── staleversion-260-0-src.expected (4 lines, 149 B, ~45 tokens)
│   │   │           │   └── staleversion-260-0.expected (5 lines, 166 B, ~51 tokens)
│   │   │           └── testpackage/
│   │   │               ├── testpackage-0.1-1-src.expected (3 lines, 126 B, ~41 tokens)
│   │   │               └── testpackage-0.1-1.expected (3 lines, 126 B, ~41 tokens)
│   │   ├── homes/
│   │   │   ├── Blooey McFooey/
│   │   │   │   ├── noarch/
│   │   │   │   │   └── release/
│   │   │   │   │       └── perl-Net-SMTP-SSL/
│   │   │   │   │           ├── perl-Net-SMTP-SSL-1.03-2-src.hint (4 lines, 197 B, ~52 tokens)
│   │   │   │   │           └── perl-Net-SMTP-SSL-1.03-2.hint (5 lines, 207 B, ~55 tokens)
│   │   │   │   └── x86_64/
│   │   │   │       └── release/
│   │   │   │           ├── after-ready/
│   │   │   │           │   └── after-ready-1.0-1.hint (4 lines, 167 B, ~42 tokens)
│   │   │   │           ├── not-on-maintainer-list/
│   │   │   │           │   └── not-on-maintainer-list-1.0-1.hint (4 lines, 179 B, ~46 tokens)
│   │   │   │           ├── not-on-package-list/
│   │   │   │           │   └── not-on-package-list-1.0-1.hint (4 lines, 173 B, ~45 tokens)
│   │   │   │           ├── not-ready/
│   │   │   │           │   └── not-ready-1.0-1.hint (4 lines, 145 B, ~39 tokens)
│   │   │   │           ├── per-version/
│   │   │   │           │   ├── override.hint (0 lines, 0 B, ~0 tokens)
│   │   │   │           │   ├── per-version-5.0-1-src.hint (4 lines, 99 B, ~28 tokens)
│   │   │   │           │   └── per-version-5.0-1.hint (5 lines, 121 B, ~33 tokens)
│   │   │   │           ├── per-version-replacement-hint-only/
│   │   │   │           │   └── per-version-replacement-hint-only-1.0-1.hint (4 lines, 171 B, ~43 tokens)
│   │   │   │           ├── testpackage/
│   │   │   │           │   ├── testpackage-1.0-1-src.hint (5 lines, 188 B, ~49 tokens)
│   │   │   │           │   ├── testpackage-1.0-1.hint (6 lines, 205 B, ~53 tokens)
│   │   │   │           │   └── testpackage-subpackage/
│   │   │   │           │       └── testpackage-subpackage-1.0-1.hint (4 lines, 99 B, ~26 tokens)
│   │   │   │           ├── testpackage-zstd/
│   │   │   │           │   ├── testpackage-zstd-1.0-1-src.hint (7 lines, 164 B, ~46 tokens)
│   │   │   │           │   └── testpackage-zstd-1.0-1.hint (5 lines, 109 B, ~29 tokens)
│   │   │   │           └── testpackage2/
│   │   │   │               ├── testpackage2-1.0-1.hint (4 lines, 69 B, ~21 tokens)
│   │   │   │               └── testpackage2-subpackage/
│   │   │   │                   ├── inprogress.SftpXFR.1234 (0 lines, 0 B, ~0 tokens)
│   │   │   │                   └── testpackage2-subpackage-1.0-1.hint (4 lines, 75 B, ~21 tokens)
│   │   │   ├── Jon Turney/
│   │   │   │   └── !email (1 lines, 18 B, ~5 tokens)
│   │   │   └── an_unexpected_file (0 lines, 0 B, ~0 tokens)
│   │   ├── homes.conflict/
│   │   │   └── Blooey McFooey/
│   │   │       └── x86_64/
│   │   │           └── release/
│   │   │               └── staleversion/
│   │   │                   ├── staleversion-230-1-src.hint (3 lines, 118 B, ~29 tokens)
│   │   │                   └── staleversion-230-1.hint (4 lines, 128 B, ~32 tokens)
│   │   ├── homes.no_auth/
│   │   │   └── Blooey McFooey/
│   │   │       └── x86_64/
│   │   │           └── release/
│   │   │               └── testpackage/
│   │   │                   └── cygwin/
│   │   │                       ├── cygwin-3.0.0-1-src.hint (5 lines, 110 B, ~30 tokens)
│   │   │                       └── cygwin-3.0.0-1.hint (4 lines, 123 B, ~34 tokens)
│   │   ├── htdocs.expected/
│   │   │   ├── dirtree.expected (106 lines, 5.1 KB, ~1.7k tokens)
│   │   │   ├── doc/
│   │   │   │   └── keychain/
│   │   │   │       └── keychain.README (85 lines, 2.1 KB, ~645 tokens)
│   │   │   ├── noarch/
│   │   │   │   ├── obs-a/
│   │   │   │   │   └── obs-a-1.0-1 (12 lines, 244 B, ~89 tokens)
│   │   │   │   ├── obs-b/
│   │   │   │   │   └── obs-b-1.0-1 (12 lines, 244 B, ~89 tokens)
│   │   │   │   ├── perl-Net-SMTP-SSL/
│   │   │   │   │   ├── perl-Net-SMTP-SSL-1.01-1 (27 lines, 1.2 KB, ~378 tokens)
│   │   │   │   │   ├── perl-Net-SMTP-SSL-1.02-1 (27 lines, 1.2 KB, ~378 tokens)
│   │   │   │   │   └── perl-Net-SMTP-SSL-1.03-1 (27 lines, 1.2 KB, ~378 tokens)
│   │   │   │   ├── test-c/
│   │   │   │   │   └── test-c-1.0-1 (12 lines, 239 B, ~88 tokens)
│   │   │   │   ├── test-d/
│   │   │   │   │   └── test-d-1.0.42590-1 (12 lines, 239 B, ~88 tokens)
│   │   │   │   └── test-e/
│   │   │   │       └── test-e-1.0-1 (12 lines, 239 B, ~88 tokens)
│   │   │   ├── packages.inc (37 lines, 2.6 KB, ~977 tokens)
│   │   │   ├── packages_docs.inc (4 lines, 142 B, ~55 tokens)
│   │   │   ├── src/
│   │   │   │   ├── arc-src/
│   │   │   │   │   └── arc-4.32.7-10-src (13 lines, 311 B, ~102 tokens)
│   │   │   │   ├── corrupt-src/
│   │   │   │   │   └── corrupt-2.0.0-1-src (14 lines, 404 B, ~134 tokens)
│   │   │   │   ├── cygwin-src/
│   │   │   │   │   ├── cygwin-2.2.0-1-src (13 lines, 330 B, ~109 tokens)
│   │   │   │   │   ├── cygwin-2.2.1-1-src (13 lines, 330 B, ~109 tokens)
│   │   │   │   │   └── cygwin-2.3.0-0.3-src (13 lines, 330 B, ~109 tokens)
│   │   │   │   ├── keychain-src/
│   │   │   │   │   ├── keychain-2.6.11-1-src (13 lines, 332 B, ~109 tokens)
│   │   │   │   │   ├── keychain-2.6.8-1-src (14 lines, 407 B, ~136 tokens)
│   │   │   │   │   └── keychain-2.7.1-1-src (16 lines, 542 B, ~178 tokens)
│   │   │   │   ├── mDNSResponder-src/
│   │   │   │   │   └── mDNSResponder-379.32.1-1-src (13 lines, 363 B, ~112 tokens)
│   │   │   │   ├── obs-a-src/
│   │   │   │   │   └── obs-a-1.0-1-src (12 lines, 274 B, ~99 tokens)
│   │   │   │   ├── obs-b-src/
│   │   │   │   │   └── obs-b-1.0-1-src (12 lines, 274 B, ~99 tokens)
│   │   │   │   ├── openssh-src/
│   │   │   │   │   └── openssh-7.2p2-1-src (13 lines, 359 B, ~115 tokens)
│   │   │   │   ├── per-version-replacement-hint-only-src/
│   │   │   │   │   └── per-version-replacement-hint-only-1.0-1-src (13 lines, 419 B, ~135 tokens)
│   │   │   │   ├── per-version-src/
│   │   │   │   │   ├── per-version-4.0-1-src (13 lines, 353 B, ~117 tokens)
│   │   │   │   │   └── per-version-4.8-1-src (13 lines, 353 B, ~117 tokens)
│   │   │   │   ├── perl-Net-SMTP-SSL-src/
│   │   │   │   │   ├── perl-Net-SMTP-SSL-1.01-1-src (14 lines, 521 B, ~181 tokens)
│   │   │   │   │   ├── perl-Net-SMTP-SSL-1.02-1-src (14 lines, 521 B, ~181 tokens)
│   │   │   │   │   └── perl-Net-SMTP-SSL-1.03-1-src (14 lines, 521 B, ~181 tokens)
│   │   │   │   ├── rpm-doc-src/
│   │   │   │   │   └── rpm-doc-4.1-2-src (14 lines, 542 B, ~169 tokens)
│   │   │   │   ├── staleversion-src/
│   │   │   │   │   ├── staleversion-240-1-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   │   ├── staleversion-242-0-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   │   ├── staleversion-243-0-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   │   ├── staleversion-250-0-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   │   ├── staleversion-251-0-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   │   └── staleversion-260-0-src (13 lines, 374 B, ~117 tokens)
│   │   │   │   ├── test-c-src/
│   │   │   │   │   └── test-c-1.0-1-src (12 lines, 269 B, ~98 tokens)
│   │   │   │   ├── test-d-src/
│   │   │   │   │   └── test-d-1.0.42590-1-src (12 lines, 269 B, ~98 tokens)
│   │   │   │   ├── test-e-src/
│   │   │   │   │   └── test-e-1.0-1-src (12 lines, 269 B, ~98 tokens)
│   │   │   │   └── testpackage-src/
│   │   │   │       └── testpackage-0.1-1-src (13 lines, 369 B, ~117 tokens)
│   │   │   ├── src_packages.inc (31 lines, 2.3 KB, ~871 tokens)
│   │   │   ├── summary/
│   │   │   │   ├── arc-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── arc.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── base-cygwin.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── corrupt-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── corrupt.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── cygwin-debuginfo.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── cygwin-devel.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── cygwin-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── cygwin.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── keychain-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── keychain.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── libdns_sd-devel.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── libdns_sd1.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── mDNSResponder-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── mDNSResponder.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── obs-a-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── obs-a.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── obs-b-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── obs-b.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── openssh-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── openssh.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── per-version-replacement-hint-only-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── per-version-replacement-hint-only.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── per-version-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── per-version.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── perl-Net-SMTP-SSL-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── perl-Net-SMTP-SSL.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── rpm-doc-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── rpm-doc.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── staleversion-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── staleversion.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-c-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-c.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-d-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-d.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-e-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── test-e.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   ├── testpackage-src.html (1 lines, 35 B, ~11 tokens)
│   │   │   │   └── testpackage.html (1 lines, 35 B, ~11 tokens)
│   │   │   └── x86_64/
│   │   │       ├── arc/
│   │   │       │   └── arc-4.32.7-10 (13 lines, 281 B, ~92 tokens)
│   │   │       ├── base-cygwin/
│   │   │       │   ├── base-cygwin-3.6-1 (13 lines, 343 B, ~109 tokens)
│   │   │       │   └── base-cygwin-3.8-1 (13 lines, 343 B, ~109 tokens)
│   │   │       ├── corrupt/
│   │   │       │   └── corrupt-2.0.0-1 (12 lines, 218 B, ~74 tokens)
│   │   │       ├── cygwin/
│   │   │       │   ├── cygwin-2.2.0-1 (13 lines, 300 B, ~99 tokens)
│   │   │       │   ├── cygwin-2.2.1-1 (13 lines, 300 B, ~99 tokens)
│   │   │       │   └── cygwin-2.3.0-0.3 (13 lines, 300 B, ~99 tokens)
│   │   │       ├── cygwin-debuginfo/
│   │   │       │   ├── cygwin-debuginfo-2.2.0-1 (13 lines, 322 B, ~105 tokens)
│   │   │       │   ├── cygwin-debuginfo-2.2.1-1 (13 lines, 322 B, ~105 tokens)
│   │   │       │   └── cygwin-debuginfo-2.3.0-0.3 (13 lines, 322 B, ~105 tokens)
│   │   │       ├── cygwin-devel/
│   │   │       │   ├── cygwin-devel-2.2.0-1 (13 lines, 312 B, ~103 tokens)
│   │   │       │   ├── cygwin-devel-2.2.1-1 (13 lines, 312 B, ~103 tokens)
│   │   │       │   └── cygwin-devel-2.3.0-0.3 (13 lines, 312 B, ~103 tokens)
│   │   │       ├── keychain/
│   │   │       │   ├── keychain-2.6.11-1 (13 lines, 302 B, ~99 tokens)
│   │   │       │   ├── keychain-2.6.8-1 (25 lines, 1003 B, ~311 tokens)
│   │   │       │   └── keychain-2.7.1-1 (25 lines, 993 B, ~302 tokens)
│   │   │       ├── libdns_sd-devel/
│   │   │       │   └── libdns_sd-devel-379.32.1-1 (13 lines, 339 B, ~106 tokens)
│   │   │       ├── libdns_sd1/
│   │   │       │   └── libdns_sd1-379.32.1-1 (13 lines, 324 B, ~101 tokens)
│   │   │       ├── mDNSResponder/
│   │   │       │   └── mDNSResponder-379.32.1-1 (13 lines, 333 B, ~102 tokens)
│   │   │       ├── openssh/
│   │   │       │   └── openssh-7.2p2-1 (13 lines, 329 B, ~105 tokens)
│   │   │       ├── per-version/
│   │   │       │   ├── per-version-4.0-1 (13 lines, 323 B, ~107 tokens)
│   │   │       │   └── per-version-4.8-1 (13 lines, 323 B, ~107 tokens)
│   │   │       ├── per-version-replacement-hint-only/
│   │   │       │   └── per-version-replacement-hint-only-1.0-1 (13 lines, 389 B, ~125 tokens)
│   │   │       ├── rpm-doc/
│   │   │       │   ├── rpm-doc-4.1-2 (24 lines, 1.1 KB, ~342 tokens)
│   │   │       │   └── rpm-doc-999-1 (11 lines, 369 B, ~112 tokens)
│   │   │       ├── staleversion/
│   │   │       │   ├── staleversion-240-1 (13 lines, 344 B, ~107 tokens)
│   │   │       │   ├── staleversion-242-0 (13 lines, 344 B, ~107 tokens)
│   │   │       │   ├── staleversion-243-0 (13 lines, 344 B, ~107 tokens)
│   │   │       │   ├── staleversion-250-0 (13 lines, 344 B, ~107 tokens)
│   │   │       │   ├── staleversion-251-0 (13 lines, 344 B, ~107 tokens)
│   │   │       │   └── staleversion-260-0 (13 lines, 344 B, ~107 tokens)
│   │   │       └── testpackage/
│   │   │           └── testpackage-0.1-1 (13 lines, 339 B, ~107 tokens)
│   │   ├── inifile/
│   │   │   └── setup.ini.expected (610 lines, 33.2 KB, ~8.6k tokens)
│   │   ├── mksetupini/
│   │   │   └── setup.ini.expected (609 lines, 33.2 KB, ~8.6k tokens)
│   │   ├── pkglist/
│   │   │   ├── cygwin-pkg-maint (2511 lines, 150.0 KB, ~27.6k tokens)
│   │   │   └── expected (66 lines, 44.6 KB, ~14.3k tokens)
│   │   ├── process_arch/
│   │   │   ├── homedir.expected (30 lines, 2.1 KB, ~629 tokens)
│   │   │   ├── htdocs.expected (165 lines, 7.9 KB, ~2.3k tokens)
│   │   │   ├── packages.json.expected (480 lines, 14.9 KB, ~4.3k tokens)
│   │   │   ├── rel_area.expected (183 lines, 11.2 KB, ~3.2k tokens)
│   │   │   ├── setup.ini.expected (585 lines, 31.5 KB, ~8.2k tokens)
│   │   │   ├── stagingdir.expected (1 lines, 10 B, ~6 tokens)
│   │   │   └── vault.expected (31 lines, 1.7 KB, ~469 tokens)
│   │   ├── relarea/
│   │   │   ├── noarch/
│   │   │   │   └── release/
│   │   │   │       ├── obs-a/
│   │   │   │       │   ├── obs-a-1.0-1-src.hint (2 lines, 44 B, ~12 tokens)
│   │   │   │       │   └── obs-a-1.0-1.hint (2 lines, 44 B, ~12 tokens)
│   │   │   │       ├── obs-b/
│   │   │   │       │   ├── obs-b-1.0-1-src.hint (2 lines, 44 B, ~12 tokens)
│   │   │   │       │   └── obs-b-1.0-1.hint (2 lines, 44 B, ~12 tokens)
│   │   │   │       ├── perl-Net-SMTP-SSL/
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.01-1-src.hint (4 lines, 197 B, ~52 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.01-1.hint (5 lines, 207 B, ~55 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.02-1-src.hint (4 lines, 197 B, ~52 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.02-1.hint (5 lines, 207 B, ~55 tokens)
│   │   │   │       │   ├── perl-Net-SMTP-SSL-1.03-1-src.hint (4 lines, 197 B, ~52 tokens)
│   │   │   │       │   └── perl-Net-SMTP-SSL-1.03-1.hint (5 lines, 207 B, ~55 tokens)
│   │   │   │       ├── test-c/
│   │   │   │       │   ├── test-c-1.0-1-src.hint (2 lines, 40 B, ~11 tokens)
│   │   │   │       │   └── test-c-1.0-1.hint (4 lines, 97 B, ~32 tokens)
│   │   │   │       ├── test-d/
│   │   │   │       │   ├── test-d-1.0-1-src.hint (3 lines, 61 B, ~19 tokens)
│   │   │   │       │   └── test-d-1.0-1.hint (3 lines, 61 B, ~19 tokens)
│   │   │   │       └── test-e/
│   │   │   │           ├── test-e-1.0-1-src.hint (3 lines, 68 B, ~19 tokens)
│   │   │   │           └── test-e-1.0-1.hint (2 lines, 40 B, ~11 tokens)
│   │   │   └── x86_64/
│   │   │       └── release/
│   │   │           ├── arc/
│   │   │           │   ├── arc-4.32.7-10-src.hint (8 lines, 460 B, ~112 tokens)
│   │   │           │   └── arc-4.32.7-10.hint (8 lines, 460 B, ~112 tokens)
│   │   │           ├── base-cygwin/
│   │   │           │   ├── base-cygwin-3.6-1.hint (4 lines, 126 B, ~31 tokens)
│   │   │           │   └── base-cygwin-3.8-1.hint (4 lines, 141 B, ~35 tokens)
│   │   │           ├── corrupt/
│   │   │           │   ├── corrupt-2.0.0-1-src.hint (3 lines, 90 B, ~23 tokens)
│   │   │           │   └── corrupt-2.0.0-1.hint (3 lines, 90 B, ~23 tokens)
│   │   │           ├── cygwin/
│   │   │           │   ├── cygwin-2.2.0-1-src.hint (3 lines, 85 B, ~22 tokens)
│   │   │           │   ├── cygwin-2.2.0-1.hint (4 lines, 107 B, ~28 tokens)
│   │   │           │   ├── cygwin-2.2.1-1-src.hint (4 lines, 144 B, ~41 tokens)
│   │   │           │   ├── cygwin-2.2.1-1.hint (4 lines, 107 B, ~28 tokens)
│   │   │           │   ├── cygwin-2.3.0-0.3-src.hint (4 lines, 91 B, ~24 tokens)
│   │   │           │   ├── cygwin-2.3.0-0.3.hint (7 lines, 182 B, ~49 tokens)
│   │   │           │   ├── cygwin-debuginfo/
│   │   │           │   │   ├── cygwin-debuginfo-2.2.0-1.hint (6 lines, 188 B, ~47 tokens)
│   │   │           │   │   ├── cygwin-debuginfo-2.2.1-1.hint (6 lines, 188 B, ~47 tokens)
│   │   │           │   │   ├── cygwin-debuginfo-2.3.0-0.3.hint (7 lines, 194 B, ~49 tokens)
│   │   │           │   │   └── override.hint (1 lines, 14 B, ~7 tokens)
│   │   │           │   ├── cygwin-devel/
│   │   │           │   │   ├── cygwin-devel-2.2.0-1.hint (5 lines, 148 B, ~36 tokens)
│   │   │           │   │   ├── cygwin-devel-2.2.1-1.hint (5 lines, 148 B, ~36 tokens)
│   │   │           │   │   ├── cygwin-devel-2.3.0-0.3.hint (6 lines, 154 B, ~39 tokens)
│   │   │           │   │   └── override.hint (1 lines, 14 B, ~7 tokens)
│   │   │           │   └── override.hint (1 lines, 14 B, ~7 tokens)
│   │   │           ├── invalid/
│   │   │           │   └── invalid-0.hint (2 lines, 45 B, ~12 tokens)
│   │   │           ├── keychain/
│   │   │           │   ├── keychain-2.6.11-1-src.hint (11 lines, 601 B, ~149 tokens)
│   │   │           │   ├── keychain-2.6.11-1.hint (12 lines, 619 B, ~153 tokens)
│   │   │           │   ├── keychain-2.6.8-1-src.hint (11 lines, 601 B, ~149 tokens)
│   │   │           │   ├── keychain-2.6.8-1.hint (12 lines, 619 B, ~153 tokens)
│   │   │           │   ├── keychain-2.7.1-1-src.hint (11 lines, 601 B, ~149 tokens)
│   │   │           │   └── keychain-2.7.1-1.hint (12 lines, 619 B, ~153 tokens)
│   │   │           ├── libtextcat/
│   │   │           │   ├── libtextcat-2.2-2-src.hint (9 lines, 408 B, ~102 tokens)
│   │   │           │   ├── libtextcat-2.2-2.hint (10 lines, 430 B, ~107 tokens)
│   │   │           │   ├── libtextcat-devel/
│   │   │           │   │   └── libtextcat-devel-2.2-2.hint (11 lines, 463 B, ~114 tokens)
│   │   │           │   └── libtextcat0/
│   │   │           │       └── libtextcat0-2.2-2.hint (11 lines, 431 B, ~107 tokens)
│   │   │           ├── mDNSResponder/
│   │   │           │   ├── libdns_sd-devel/
│   │   │           │   │   └── libdns_sd-devel-379.32.1-1.hint (7 lines, 288 B, ~67 tokens)
│   │   │           │   ├── libdns_sd1/
│   │   │           │   │   └── libdns_sd1-379.32.1-1.hint (7 lines, 278 B, ~65 tokens)
│   │   │           │   ├── mDNSResponder-379.32.1-1-src.hint (5 lines, 235 B, ~55 tokens)
│   │   │           │   └── mDNSResponder-379.32.1-1.hint (11 lines, 514 B, ~124 tokens)
│   │   │           ├── mingw64-i686-binutils/
│   │   │           │   ├── mingw64-i686-binutils-2.29.1.787c9873-1.hint (5 lines, 202 B, ~50 tokens)
│   │   │           │   └── mingw64-i686-binutils-debuginfo/
│   │   │           │       └── mingw64-i686-binutils-debuginfo-2.29.1.787c9873-1.hint (6 lines, 233 B, ~59 tokens)
│   │   │           ├── openssh/
│   │   │           │   ├── openssh-7.2p2-1-src.hint (5 lines, 264 B, ~62 tokens)
│   │   │           │   └── openssh-7.2p2-1.hint (5 lines, 264 B, ~62 tokens)
│   │   │           ├── per-version/
│   │   │           │   ├── override.hint (1 lines, 1 B, ~1 tokens)
│   │   │           │   ├── per-version-4.0-1-src.hint (3 lines, 93 B, ~25 tokens)
│   │   │           │   ├── per-version-4.0-1.hint (4 lines, 110 B, ~29 tokens)
│   │   │           │   ├── per-version-4.8-1-src.hint (3 lines, 93 B, ~25 tokens)
│   │   │           │   └── per-version-4.8-1.hint (4 lines, 115 B, ~31 tokens)
│   │   │           ├── per-version-incomplete/
│   │   │           │   ├── override.hint (0 lines, 0 B, ~0 tokens)
│   │   │           │   ├── per-version-incomplete-36-1-src.hint (3 lines, 134 B, ~34 tokens)
│   │   │           │   └── per-version-incomplete-36-1.hint (3 lines, 134 B, ~34 tokens)
│   │   │           ├── per-version-replacement-hint-only/
│   │   │           │   ├── per-version-replacement-hint-only-1.0-1-src.hint (3 lines, 93 B, ~25 tokens)
│   │   │           │   └── per-version-replacement-hint-only-1.0-1.hint (4 lines, 110 B, ~29 tokens)
│   │   │           ├── proj/
│   │   │           │   ├── libproj-devel/
│   │   │           │   │   └── libproj-devel-4.8.0-1.hint (5 lines, 182 B, ~43 tokens)
│   │   │           │   ├── libproj1/
│   │   │           │   │   └── libproj1-4.8.0-1.hint (5 lines, 176 B, ~42 tokens)
│   │   │           │   └── proj-4.8.0-1.hint (4 lines, 164 B, ~38 tokens)
│   │   │           ├── rpm-doc/
│   │   │           │   ├── rpm-doc-4.1-2-src.hint (2 lines, 133 B, ~32 tokens)
│   │   │           │   ├── rpm-doc-4.1-2.hint (2 lines, 133 B, ~32 tokens)
│   │   │           │   └── rpm-doc-999-1.hint (3 lines, 155 B, ~38 tokens)
│   │   │           ├── splint/
│   │   │           │   └── splint-3.1.2-1.hint (14 lines, 735 B, ~164 tokens)
│   │   │           ├── staleversion/
│   │   │           │   ├── override.hint (3 lines, 45 B, ~16 tokens)
│   │   │           │   ├── staleversion-240-1-src.hint (3 lines, 118 B, ~29 tokens)
│   │   │           │   ├── staleversion-240-1.hint (4 lines, 128 B, ~32 tokens)
│   │   │           │   ├── staleversion-242-0-src.hint (3 lines, 118 B, ~29 tokens)
│   │   │           │   ├── staleversion-242-0.hint (4 lines, 128 B, ~32 tokens)
│   │   │           │   ├── staleversion-243-0-src.hint (3 lines, 118 B, ~29 tokens)
│   │   │           │   ├── staleversion-243-0.hint (4 lines, 128 B, ~32 tokens)
│   │   │           │   ├── staleversion-250-0-src.hint (3 lines, 118 B, ~29 tokens)
│   │   │           │   ├── staleversion-250-0.hint (4 lines, 128 B, ~32 tokens)
│   │   │           │   ├── staleversion-251-0-src.hint (4 lines, 124 B, ~31 tokens)
│   │   │           │   ├── staleversion-251-0.hint (5 lines, 134 B, ~34 tokens)
│   │   │           │   ├── staleversion-260-0-src.hint (4 lines, 124 B, ~31 tokens)
│   │   │           │   └── staleversion-260-0.hint (5 lines, 134 B, ~34 tokens)
│   │   │           └── testpackage/
│   │   │               ├── testpackage-0.1-1-src.hint (3 lines, 108 B, ~30 tokens)
│   │   │               └── testpackage-0.1-1.hint (3 lines, 108 B, ~30 tokens)
│   │   ├── repodir/
│   │   │   └── cygwin.git/
│   │   │       └── cygwin.cygport (0 lines, 0 B, ~0 tokens)
│   │   ├── upload_bad_auth/
│   │   │   ├── homedir.expected (10 lines, 471 B, ~158 tokens)
│   │   │   ├── htdocs.expected (1 lines, 19 B, ~9 tokens)
│   │   │   ├── rel_area.expected (180 lines, 10.9 KB, ~3.1k tokens)
│   │   │   ├── stagingdir.expected (1 lines, 10 B, ~6 tokens)
│   │   │   └── vault.expected (21 lines, 1.1 KB, ~298 tokens)
│   │   └── uploads/
│   │       ├── move.expected (8 lines, 774 B, ~232 tokens)
│   │       └── pkglist.expected (35 lines, 3.6 KB, ~1.1k tokens)
│   └── utils.py (11 lines, 493 B, ~135 tokens)
├── test.sh (1 lines, 34 B, ~10 tokens)
└── upset.md (288 lines, 11.6 KB, ~3.1k tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# calm

`calm` is a replacement for `upset`, which performs the following tasks on [cygwin.com](https://cygwin.com/):
* move valid package uploads to the release area and move deleted files to the vault
* generate a setup.ini file from the setup.hint files for the packages in the release area
* generate HTML package listing pages


================================================
FILE: pyproject.toml
================================================
[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"


================================================
FILE: LICENSE
================================================
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


================================================
FILE: TODO
================================================
* upload a hash at the same time as package, and pass that through to setup.ini
* mksetupini should have an okmissing option for override.hint which names non-existent versions
* use ./setup.hint inside the tar file, avoiding all the hint/tar coherence problems
* mksetupini should write to stdout if --inifile not specified
* check packages for path collisions
* mksetupini should be able to verify requires: contains valid package names using a provided list of packages (or a cygwin-pkg-maint file?)
* make override.hint (optionally?) apply recursively?
* atomically update .ini/.sig (rename of containing directory, if we put release/ was somewhere else?)
* report changes in override.hint like we used to for setup.hint
* empty install packages should only come in two variants: no dependencies and in _obsolete category, or with dependencies and in 'meta' category


================================================
FILE: calm/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: calm/abeyance_handler.py
================================================
// [OUTLINE - 6 symbols, 61 lines]
// import logging
// import logging.handlers
// L34-L61: class AbeyanceHandler(BufferingHandler):
// L35-L38: def __init__(self, callback, retainLevel):
// L40-L43: def shouldFlush(self, record):
// L45-L50: def close(self):
// L52-L54: def __enter__(self):
// L56-L61: def __exit__(self, exception_type, exception_value, traceback):


================================================
FILE: calm/buffering_smtp_handler.py
================================================
// [OUTLINE - 6 symbols, 87 lines]
// import logging
// import logging.handlers
// import .
// import .
// L31-L87: class BufferingSMTPHandler(logging.handlers.BufferingHandler):
// L32-L44: def __init__(self,
// L46-L71: def flush(self):
// L73-L76: def shouldFlush(self, record):
// L78-L80: def __enter__(self):
// L82-L87: def __exit__(self, exception_type, exception_value, traceback):


================================================
FILE: calm/calm.py
================================================
// [OUTLINE - 27 symbols, 1019 lines]
// import argparse
// import codecs
// import copy
// import functools
// import logging
// import lzma
// import os
// import shutil
// import signal
// import sys
// import tempfile
// import time
// import enum
// import xtarfile
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .
// import .abeyance_handler
// import .buffering_smtp_handler
// import .movelist
// import daemon
// import inotify.adapters
// import pidlockfile
// L91-L96: class CalmState(object):
// L92-L96: def __init__(self):
// L103-L134: def process_relarea(args, state):
// L142-L167: def process_uploads(args, state):
// L157-L160: def deploy_upload(r):
// L170-L208: def process_maintainer_uploads(args, state, all_packages, m, basedir, desc, scrub=False, record=None):
// L211-L313: def _announce_upload(args, scan_result, maintainer, r):
// L316-L407: def _process_maintainer_uploads(scan_result, args, state, all_packages, m, basedir, desc):
// L414-L426: def process(args, state):
// L433-L451: def remove_stale_packages(args, packages, state):
// L454-L464: def _execute_stale_removal(args, packages, state, reason, vault_requests=None):
// L467-L495: def identify_stale_packages(args, packages, state, vault_requests=None):
// L502-L513: def report_movelist_conflicts(a, b, reason):
// L507-L508: def report_conflict(p, f):
// L520-L532: def do_main(args, state):
// L538-L562: def is_passphrase_cached(args):
// L568-L685: def do_output(args, state):
// L693-L695: class Event(Flag):
// L698-L861: def do_daemon(args, state):
// L705-L712: def getLogFileDescriptors(logger):
// L727-L731: def sigterm(signum, frame):
// L733-L734: def sighup(signum, frame):
// L750-L753: def block_duration():
// L864-L865: def mail_logs(state):
// L868-L909: def mail_cb(state, loghandler):
// L916-L935: def logging_setup(args):
// L942-L1011: def main():


================================================
FILE: calm/common_constants.py
================================================
// [OUTLINE - 0 symbols, 106 lines]
// import os


================================================
FILE: calm/db.py
================================================
// [OUTLINE - 23 symbols, 273 lines]
// import logging
// import os
// import peewee
// import .
// import .
// L44-L62: def get_db(args):
// L66-L70: def reset_db():
// L74-L80: class BaseModel(peewee.Model):
// L75-L76: class Meta:
// L79-L80: def initialize(cls, db):
// L84-L88: class HistoricPackageName(BaseModel):
// L87-L88: class Meta:
// L92-L99: class VaultRequest(BaseModel):
// L97-L99: class Meta:
// L103-L113: class MissingObsolete(BaseModel):
// L108-L113: class Meta:
// L117-L122: class AnnounceMsgid(BaseModel):
// L121-L122: class Meta:
// L125-L134: class Maintainer(BaseModel):
// L133-L134: class Meta:
// L138-L140: def connect(args):
// L147-L166: def update_package_names(args, packages):
// L172-L187: def vault_requests(args, m):
// L191-L195: def vault_request_add(args, p, v, m):
// L204-L233: def update_missing_obsolete(args, packages):
// L236-L244: def announce_msgid_get(args, srcpackage):
// L247-L251: def announce_msgid_set(args, srcpackage, msgid):
// L254-L273: def maintainer_info(args, mlist):


================================================
FILE: calm/fix-annotate-perl-hint.py
================================================
// [OUTLINE - 2 symbols, 146 lines]
// import argparse
// import logging
// import os
// import re
// import shutil
// import sys
// import tarfile
// import xtarfile
// import .
// import .
// L55-L114: def fix_one_hint(dirpath, hintfile, tf):
// L117-L126: def fix_hints(relarea):


================================================
FILE: calm/fix-invalid-key-hint.py
================================================
// [OUTLINE - 2 symbols, 81 lines]
// import argparse
// import logging
// import os
// import sys
// import .
// import .
// L37-L50: def fix_hints(relarea, packages):
// L57-L73: def main():


================================================
FILE: calm/fix-missing-src-hint-info.py
================================================
// [OUTLINE - 2 symbols, 86 lines]
// import argparse
// import logging
// import os
// import re
// import sys
// import .
// import .
// L35-L53: def fix_hints(relarea, packages, fixids):
// L60-L78: def main():


================================================
FILE: calm/fix-missing-src-hint.py
================================================
// [OUTLINE - 2 symbols, 79 lines]
// import argparse
// import logging
// import os
// import re
// import shutil
// import sys
// import .
// L38-L51: def fix_hints(relarea):
// L58-L71: def main():


================================================
FILE: calm/fix-python-virtual-packages.py
================================================
// [OUTLINE - 2 symbols, 159 lines]
// import argparse
// import logging
// import os
// import re
// import shutil
// import sys
// import .
// import .
// L39-L102: def python_virtual_migrate(args, dirpath, hintfile, modules):
// L105-L135: def scan_hints(args):


================================================
FILE: calm/fix-requires-by-linkage.py
================================================
// [OUTLINE - 2 symbols, 161 lines]
// import argparse
// import logging
// import os
// import re
// import shutil
// import subprocess
// import sys
// import tarfile
// import tempfile
// import xtarfile
// import .
// import .
// L44-L106: def fix_one_hint(args, dirpath, hintfile, tf):
// L109-L134: def fix_hints(args):


================================================
FILE: calm/fix-requires-by-path.py
================================================
// [OUTLINE - 2 symbols, 142 lines]
// import argparse
// import logging
// import os
// import re
// import shutil
// import sys
// import tarfile
// import xtarfile
// import .
// import .
// L42-L89: def fix_one_hint(args, dirpath, hintfile, tf):
// L92-L113: def fix_hints(args):


================================================
FILE: calm/fix-skip-only-hint.py
================================================
// [OUTLINE - 7 symbols, 227 lines]
// import argparse
// import os
// import re
// import shutil
// import sys
// import .
// import .
// import .version
// L44-L47: def hint_file_write(fn, hints):
// L53-L70: def pick(l):
// L76-L121: def invent_from_subpackages(path, vr):
// L127-L141: def invent_from_other_versions(path, later_vrs):
// L147-L176: def fix_one_hint(dirpath, hintfile, vr, later_vrs):
// L179-L203: def fix_hints(rel_area, mode):
// L211-L219: def main():


================================================
FILE: calm/fixes.py
================================================
// [OUTLINE - 9 symbols, 245 lines]
// import functools
// import logging
// import os
// import re
// import shutil
// import socket
// import tarfile
// import urllib.error
// import urllib.request
// import xtarfile
// import .
// L39-L64: def read_cygport(dirpath, tf):
// L67-L87: def _parse_cygport_var(dirpath, tf, var):
// L90-L94: class NoRedirection(urllib.request.HTTPErrorProcessor):
// L91-L92: def http_response(self, request, response):
// L98-L108: def follow_redirect(homepage):
// L111-L146: def _fix_homepage_src_hint(hints, dirpath, _hf, tf):
// L178-L203: def _fix_license_src_hint(hints, dirpath, _hf, tf):
// L206-L220: def _fix_invalid_keys_hint(hints, _dirpath, hf, _tf):
// L223-L245: def fix_hint(dirpath, hf, tf, problems):


================================================
FILE: calm/hint-migrate.py
================================================
// [OUTLINE - 2 symbols, 118 lines]
// import argparse
// import os
// import re
// import shutil
// import sys
// import .
// import .
// L41-L96: def hint_migrate(args):
// L103-L110: def main():


================================================
FILE: calm/hint.py
================================================
// [OUTLINE - 6 symbols, 462 lines]
// import argparse
// import re
// import collections
// import license_expression
// L162-L204: def item_lexer(c):
// L207-L211: def split_trim_sort_join(hint, splitchar, joinchar=None):
// L215-L385: def hint_file_parse(fn, kind, strict=False):
// L389-L392: def hint_file_write(fn, hints):
// L413-L421: def typofix(v):
// L428-L448: def main(args):


================================================
FILE: calm/irk.py
================================================
// [OUTLINE - 4 symbols, 56 lines]
// import json
// import socket
// import sys
// L18-L19: def connect(server=DEFAULT_SERVER):
// L22-L25: def send(s, target, message):
// L28-L42: def irk(message, target=DEFAULT_TARGET, server=DEFAULT_SERVER):
// L45-L52: def main():


================================================
FILE: calm/logfilters.py
================================================
// [OUTLINE - 5 symbols, 46 lines]
// import logging
// L29-L46: class AttrFilter(logging.Filter):
// L30-L31: def __init__(self, **kwargs):
// L33-L36: def filter(self, record):
// L38-L40: def __enter__(self):
// L42-L46: def __exit__(self, exc_type, exc_value, traceback):


================================================
FILE: calm/mail-inactive-maintainers.py
================================================
// [OUTLINE - 1 symbols, 121 lines]
// import argparse
// import logging
// import os
// import sys
// import time
// import .
// import .
// import .
// import .
// import .
// L63-L101: def main(args):


================================================
FILE: calm/maintainers.py
================================================
// [OUTLINE - 18 symbols, 329 lines]
// import logging
// import os
// import re
// import collections
// import .
// import .
// import .
// L53-L69: class MaintainerPackage(UserString):
// L54-L58: def __init__(self, name, maintainers, groups, orphaned):
// L62-L63: def is_orphaned(self):
// L65-L66: def maintainers(self):
// L68-L69: def groups(self):
// L77-L134: class Maintainer(object):
// L80-L107: def __init__(self, name, email=None, pkgs=None):
// L109-L110: def __repr__(self):
// L112-L113: def homedir(self):
// L115-L129: def _update_reminder_time(self):
// L132-L134: def _find(mlist, name):
// L138-L162: def add_directories(mlist, homedirs):
// L168-L273: def _read_pkglist(pkglist):
// L175-L212: def _split_maintainer_names(m, teams=None):
// L277-L278: def pkg_list(pkglist):
// L282-L310: def maintainer_list(args):
// L313-L315: def update_reminder_times(mlist):
// L319-L320: def all_packages(pkglist):


================================================
FILE: calm/missing-repos.py
================================================
// [OUTLINE - 0 symbols, 12 lines]
// import os
// import .
// import .


================================================
FILE: calm/mkgitoliteconf.py
================================================
// [OUTLINE - 3 symbols, 137 lines]
// import argparse
// import sys
// import .
// import .
// L40-L43: def transform_username(name):
// L50-L113: def do_main(pkglist, file=sys.stdout):
// L120-L129: def main():


================================================
FILE: calm/mksetupini.py
================================================
// [OUTLINE - 9 symbols, 187 lines]
// import argparse
// import logging
// import os
// import sys
// import .
// import .
// import .
// import spelling
// L49-L77: def do_main(args):
// L84-L98: def stats(packages):
// L107-L111: class flatten_append(argparse.Action):
// L108-L111: def __call__(self, parser, namespace, values, option_string=None):
// L114-L127: class choiceList(object):
// L115-L116: def __init__(self, choices):
// L118-L124: def __call__(self, csv):
// L126-L127: def help(self):
// L133-L179: def main():


================================================
FILE: calm/movelist.py
================================================
// [OUTLINE - 11 symbols, 99 lines]
// import logging
// import os
// import collections
// import .
// import .
// L36-L99: class MoveList(object):
// L37-L43: def __init__(self, basedir=None):
// L45-L46: def __len__(self):
// L48-L50: def __bool__(self):
// L52-L53: def add(self, relpath, f):
// L55-L56: def remove(self, relpath):
// L58-L73: def _move(self, args, fromdir, todir, verb):
// L75-L78: def move_to_relarea(self, m, args, desc):
// L80-L83: def move_to_vault(self, args):
// L86-L89: def map(self, function):
// L93-L99: def intersect(a, b):


================================================
FILE: calm/package.py
================================================
// [OUTLINE - 63 symbols, 2218 lines]
// import copy
// import hashlib
// import json
// import logging
// import os
// import pprint
// import re
// import textwrap
// import time
// import collections
// import enum
// import functools
// import xtarfile
// import .
// import .
// import .
// import .
// import .
// import .movelist
// import .version
// L54-L56: class Kind(Enum):
// L60-L67: class Importance(IntEnum):
// L66-L67: def __str__(self):
// L71-L94: class RepoPath():
// L72-L75: def __init__(self, _arch=None, _path=None, _fn=None):
// L77-L80: def __eq__(self, other):
// L83-L87: def abspath(self, basedir=None):
// L90-L91: def move(self):
// L93-L94: def __repr__(self):
// L102-L109: class EditionIndexOrdering(object):
// L105-L109: def __lt__(self, other):
// L112-L114: class EditionIndex(EditionIndexOrdering, namedtuple('EditionIndexTuple', 'arch vr')):
// L113-L114: def __str__(self):
// L118-L186: class Package(object):
// L119-L125: def __init__(self):
// L127-L133: def __repr__(self):
// L136-L137: def editions_iterator(self):
// L140-L141: def arch_iterator(self, arch):
// L144-L145: def version_iterator(self, vr):
// L148-L149: def edition(self, index):
// L151-L152: def edition_hints(self, index):
// L155-L156: def edition_hint_data(self, index):
// L158-L159: def edition_tar(self, index):
// L161-L177: def srcpackage(self, index, suffix=True):
// L185-L186: def arches(self):
// L190-L199: class Tar(object):
// L191-L196: def __init__(self):
// L198-L199: def __repr__(self):
// L203-L210: class Hint(object):
// L204-L207: def __init__(self):
// L209-L210: def __repr__(self):
// L216-L245: def read_packages(rel_area):
// L250-L257: def sha512_file_hash(fn, block_size=256 * 128):
// L262-L272: def sha512sum_file_read(sum_fn):
// L278-L292: def sha512_file(fn):
// L296-L327: def process_package_constraint_list(pcl):
// L331-L368: def read_hints(p, fn, kind, strict=False):
// L372-L391: def clean_hints(p, hints, warnings):
// L401-L460: def collect_files_package_dir(collected, basedir, dirpath, files):
// L466-L697: def read_one_package(packages, p, basedir, files, kind, strict):
// L703-L732: def tarfile_is_empty(tf):
// L738-L744: def sort_key(k):
// L756-L818: def upgrade_oldstyle_obsoletes(packages, missing_obsolete):
// L824-L825: def deplist_without_versions(dpl):
// L831-L1288: def validate_packages(args, packages, valid_provides_extra=None, missing_obsolete_extra=None):
// L953-L964: def add_needed_obsoletes(needed):
// L1292-L1333: def assign_importance(packages):
// L1306-L1314: def recursive_basedep(p):
// L1337-L1379: def validate_package_maintainers(args, packages):
// L1386-L1397: def packages_warnings(args, packages, *modified):
// L1403-L1409: def write_setup_ini(args, packages, arch):
// L1412-L1631: def write_setup_ini_compatible(args, packages, arch):
// L1634-L1781: def write_setup_ini_modern(args, packages, arch):
// L1785-L1790: def tar_line(p, category, inst, f):
// L1795-L1796: def upper_first_character(s):
// L1803-L1811: def _find_build_recipe_file(args, pn):
// L1817-L1887: def write_repo_json(args, packages, f):
// L1898-L1933: def merge(a, *l):
// L1940-L1971: def delete(packages, path, fn):
// L1978-L1982: class Freshness(IntEnum):
// L1985-L1986: def mark_package_fresh(packages, p, inst, mark=Freshness.fresh):
// L1993-L2045: def mark_fn(packages, po, inst, certain_age, vault_requests):
// L2055-L2209: def stale_packages(packages, vault_requests):


================================================
FILE: calm/past_mistakes.py
================================================
// [OUTLINE - 0 symbols, 294 lines]


================================================
FILE: calm/pkg2html.py
================================================
// [OUTLINE - 14 symbols, 751 lines]
// import argparse
// import functools
// import glob
// import html
// import logging
// import lzma
// import math
// import os
// import re
// import string
// import sys
// import tarfile
// import textwrap
// import time
// import types
// import typing
// import markdown
// import xtarfile
// import .
// import .
// import .
// import .
// import .
// import .version
// L78-L81: def sdesc(po, bv):
// L87-L107: def ldesc(po, bv):
// L97-L103: def linkify_without_fullstop(m):
// L113-L119: def ensure_dir_exists(args, path):
// L125-L129: def tsformat(ts):
// L136-L414: def update_package_listings(args, packages):
// L147-L154: def linkify_package(pkg):
// L227-L229: class PackageData(NamedTuple):
// L379-L391: def tar_line(pn, p, inst):
// L418-L423: def touch_including(including_file, changed):
// L429-L494: def write_packages_inc(args, packages, name, kind, includer):
// L503-L542: def write_doc_inc(args):
// L545-L725: def write_package_listings(args, packages):
// L580-L603: def check_directory_setup(dirpath):


================================================
FILE: calm/repology.py
================================================
// [OUTLINE - 6 symbols, 243 lines]
// import json
// import logging
// import re
// import time
// import urllib.error
// import urllib.request
// import collections
// import enum
// import .version
// L62-L69: class UnknownVersion(Enum):
// L68-L69: def __str__(self):
// L72-L192: def repology_fetch_data():
// L197-L206: def seqmatch(bv, uv):
// L209-L220: def up_to_date(po):
// L223-L243: def annotate_packages(args, packages):


================================================
FILE: calm/reports.py
================================================
// [OUTLINE - 17 symbols, 625 lines]
// import io
// import os
// import re
// import textwrap
// import types
// import .
// import .
// import .
// import .
// import .
// import .version
// L38-L58: def template(title, body, f):
// L61-L69: def write_report(args, title, body, fn, reportlist, not_empty=True):
// L72-L73: def linkify(pn, po):
// L76-L77: def filenameify(m):
// L80-L81: def maintainer_link(m):
// L84-L88: def linkify_maintainers(mp):
// L91-L103: def status(s):
// L109-L195: def maintainer_packages(args, packages, maintainer, reportlist):
// L183-L189: def feed_url(proto):
// L200-L293: def deprecated(args, packages, reportlist):
// L300-L334: def unstable(args, packages, reportlist):
// L339-L389: def maintainer_activity(args, packages):
// L394-L412: def maintainer_activity_report(args, packages, reportlist):
// L404-L405: def pkg_details(pkgs):
// L418-L479: def provides_rebuild(args, packages, fn, provide_package, reportlist):
// L484-L592: def python_rebuild(args, packages, fn, reportlist):
// L596-L625: def do_reports(args, packages):


================================================
FILE: calm/scallywag_db.py
================================================
// [OUTLINE - 2 symbols, 55 lines]
// import contextlib
// import os
// import sqlite3
// import collections
// L33-L36: def namedtuple_factory(cursor, row):
// L39-L55: def do_deploys(cb):


================================================
FILE: calm/setup_exe.py
================================================
// [OUTLINE - 1 symbols, 74 lines]
// import argparse
// import os
// import re
// L45-L57: def extract_version(fn):


================================================
FILE: calm/sort-versions.py
================================================
// [OUTLINE - 1 symbols, 49 lines]
// import argparse
// import sys
// import .
// L30-L45: def main():


================================================
FILE: calm/spelling.py
================================================
// [OUTLINE - 3 symbols, 135 lines]
// import re
// import enchant
// import enchant.checker
// import enchant.tokenize
// L35-L73: class DescFilter(Filter):
// L47-L73: def _skip(self, word):
// L76-L135: def spellcheck_hints(args, packages):


================================================
FILE: calm/tool.py
================================================
// [OUTLINE - 1 symbols, 35 lines]
// import importlib
// import sys
// L28-L35: def main():


================================================
FILE: calm/tool_util.py
================================================
// [OUTLINE - 2 symbols, 65 lines]
// import logging
// import os
// import re
// import .
// import .
// L32-L42: def split(pvr):
// L45-L65: def permitted(p):


================================================
FILE: calm/untest.py
================================================
// [OUTLINE - 2 symbols, 83 lines]
// import argparse
// import logging
// import os
// import re
// import sys
// import .
// import .
// L34-L67: def untest(pvr):
// L70-L79: def main():


================================================
FILE: calm/uploads.py
================================================
// [OUTLINE - 7 symbols, 426 lines]
// import filecmp
// import logging
// import os
// import re
// import shutil
// import time
// import xtarfile
// import .
// import .
// import .
// import .
// import .movelist
// L50-L57: class ScanResult:
// L51-L57: def __init__(self, error, packages, move, vault, remove, remove_success):
// L64-L132: def move_srcpkg_to_src(scandir, m, args):
// L68-L71: def wrangle_path(relpath):
// L135-L375: def scan(scandir, m, all_packages, args):
// L382-L389: def remove(args, remove):
// L403-L426: def auth_check(args, m, scan_result, packages, direct_upload):


================================================
FILE: calm/utils.py
================================================
// [OUTLINE - 8 symbols, 207 lines]
// import email.message
// import email.utils
// import filecmp
// import logging
// import os
// import subprocess
// import contextlib
// L40-L48: def touch(fn, times=None):
// L57-L61: def makedirs(name):
// L67-L77: def rmemptysubdirs(path, depth=3):
// L87-L111: def open_amifc(filepath, mode='w', cb=None):
// L120-L134: def system(args):
// L142-L167: def mtime_cache(user_function):
// L146-L165: def wrapper(key):
// L170-L207: def sendmail(hdr, msg):


================================================
FILE: calm/vault.py
================================================
// [OUTLINE - 2 symbols, 63 lines]
// import argparse
// import logging
// import os
// import sys
// import types
// import .
// import .
// import .
// L35-L47: def vault(pvr):
// L50-L59: def main():


================================================
FILE: calm/version.py
================================================
// [OUTLINE - 8 symbols, 113 lines]
// import functools
// import itertools
// import re
// L31-L32: def cmp(a, b):
// L42-L113: class SetupVersion:
// L43-L62: def __init__(self, version_string):
// L64-L65: def __str__(self):
// L67-L68: def __lt__(self, other):
// L70-L71: def __eq__(self, other):
// L73-L85: def __cmp__(self, other):
// L89-L113: def _compare(a, b):


================================================
FILE: calm/words.txt
================================================
AbiWord
Advection
Amdahl
AqBanking
Arial
AsciiDoc
Assuan
BeOS
Bezier
BiDi
BibLaTeX
BitTorrent
Boehm
Bokmål
Bonjour
Bonjour's
Bopomofo
Bourne
BuildBot
CMake
Castilian
ChangeLog
Clark's
ClearCase
CodeView
Codec
CoffeeScript
Compositing
ConTeXt
Corel
CorelTrace
CppUnit
Cryptographic
DejaGnu
DejaVu
Delaunay
DirectMedia
DjVu
DocBook
DocTeX
FastCGI
Filename
Filenames
FlexDLL
FooBillard
FourCC
FreeBSD
FreeFont
FreeHand
FreeRDP
FreeTDS
FreeType
Fullscreen
GNUstep
Galician
GeoLite
Gerrit
GnuCash
GnuPG
GnuTLS
GraphViz
Haible
HarfBuzz
HexChat
Hiragana
Icecast
Indic
Infinote
Inria
Interlingua
Intrinsics
Kana
Kanji
Karlsruhe
Kerberos
Keyring
Keyrings
Kilgard
Kivio
Korn
Kriging
LaTeX
Lempel
Lexically
LibOFX
LibreSSL
LilyPond
Linkable
Lossless
Lucent
Macromedia
Maildir
Makefile
Makefiles
MathML
Matroska
MikMod
MinGW
MirBSD
MobileMP
Mollweide
Multihead
Multilingualization
MusicBrainz
MySQL
NeXT
NetBSD
NetCDF
NetWare
Nominatim
NumPy
OAuth
ORBit
Oberhumer
ObjC
Oniguruma
OpenAL
OpenAerialMap
OpenBLAS
OpenBSD
OpenCDK
OpenDocument
OpenEXR
OpenJPEG
OpenJade
OpenMP
OpenOffice
OpenPGP
OpenSSH
OpenSSL
OpenStreetMap
OpenType
OpenXPS
OutGuess
PageMaker
PortAudio
PortMidi
PostScript
PostgreSQL
Preprocessor
Prolog
Psion
PuTTY
PuTTY's
PulseAudio
PulseAudio's
Punycode
PyGTK
Pythonic
QtWebKit
QuaZIP
README
Rakefiles
RandR
Rasterizer
Rijndael
Rocquencourt
Signalling
SoX
Solaris
SoundFont
SourceForge
SpiderMonkey
Steganographic
Stoll
Stylesheet
Stylesheets
SuiteSparse
Tatham
TiMidity
TigerVNC
TightVNC
TinyXML
Trie
TrueAudio
TrueType
TurboVNC
Twofish
TypeCode
UPower
Univariate
Uyghur
Valencian
Visio
Vixie's
Voronoi
WebDAV
WebM
WebP
WebServer
WeeChat
Wiktionary
WindowsWM
WordPerfect
Xiph
Zaurus
Ziv
aRts
accessors
aclocal
addressbook
affine
algarisms
antialiased
antialiasing
asciidoc
autoloadable
autoloading
awk
azimuthal
backend
backends
backport
backported
barcode
barcodes
bashism
bashisms
behaviour # uk spelling
benchmarking
bezier
biWord
bioinformatics
bitrate
bitrates
bitstreams
blowfish
bodiless
boolean
breakpoint
builtin
builtins
bytecode
cardinality
centric
checksum
checksums
clothoid
codec
colormap
colour # uk spelling
coloured # uk spelling
colours # uk spelling
combinatorial
componentized
compositing
coroutines
cryptographic
customizable
daemonization
dataset
datasets
datatypes
decompiler
decompositions
decompressor
decrypting
discoverability
discoverable
distributable
dlopen
dpi
eSpeak
embeddable
enumerant
executable
executables
extensibility
failover
featureful
filename
filenames
filesystem
filesystems
formatter
forwardings
framebuffer
frontend
fullscreen
geocoding
geoinformation
gp
helicoids
hyperlinked
hyphenator
iCal
iCalendar
iODBC
indenter
independency
inetd
inode
internetwork
jQuery
jaggy
kerning
keymap
keyring
keyrings
lex
libmagic
libtoolized
linkers
lookup
lookups
lossless
losslessly
lossy
mDNS
maildir
makefile
makefiles
mbox
metadata
middleware
minidump
minidumps
minimalistic
minimise # uk spelling
modeller # uk spelling
modelling # uk spelling
monospace
monospaced
multibyte
multilanguage
multipart
multiplatform
multithreaded
multithreading
multiuser
multivolume
namespace
narrowband
netmask
optimised # uk spellingx
parameterized
parsers
passphrase
patchset
pathname
persistency
piecewise
playlist
polycones
polycylinders
polyhedra
popup
preconfigured
preload
preprocess
preprocessor
programmatically
pronounceability
quaternions
rasterization
rasterizer
rasterizing
rebased
rebasing
recognises # uk spelling
recognises # uk spelling
reflowable
reformatter
reimplemented
reindenter
renderer
renderers
resizing
reverb
scalable
screenshots
scrollback
serializers
significand
slurper
src
stdin
stdout
steganographic
steganography
stylesheet
stylesheets
subcomponents
subdirectory
subhierarchy
subprocesses
substring
subtree
superset
swiss
symbology
synchronizer
synsets
syntaxes
targetted # uk spelling
teleportation
templating
testsuite
testsuites
tetrominoes
theming
timestamp
timestamps
tokenization
toolchain
toolkit
toolkits
transactional
transcoding
triangulation
triangulations
trie
trojans
typesafe
undecorated
undirected
unordered
unpatched
usably
uuid
variadic
variational
verifier
versioning
virtualized
waveforms
webserver
whitespace
wideband
wildcard
wildcards
windowful
workflow
workflows
wvWare
xUnit
yacc


================================================
FILE: calm-tool.sh
================================================
// [OUTLINE - 0 symbols, 3 lines]


================================================
FILE: calm.sh
================================================
// [OUTLINE - 0 symbols, 3 lines]


================================================
FILE: requirements.txt
================================================
flake8
flake8-blind-except
flake8-bugbear ; python_version >= "3.5"
flake8-builtins
flake8-import-order
license_expression
markdown
peewee
pidlockfile
pycodestyle
python-daemon
xtarfile[zstd]


================================================
FILE: setup.cfg
================================================
[metadata]
name = calm
version = 20260829
author = Jon Turney
author_email = jon.turney@dronecode.org.uk
description = Cygwin package server toolkit
long_description = file: README.md
license = MIT
url = https://cygwin.com/git/?p=cygwin-apps/calm.git

[options]
packages = calm
install_requires =
  inotify ; sys_platform=="linux"
  license_expression
  markdown
  peewee
  pidlockfile
  python-daemon
  xtarfile[zstd]

[options.entry_points]
console_scripts =
 calm = calm.calm:main
 calm-tool = calm.tool:main
 mkgitoliteconf = calm.mkgitoliteconf:main
 mksetupini = calm.mksetupini:main


================================================
FILE: test/__init__.py
================================================
// [OUTLINE - 0 symbols, 1 lines]


================================================
FILE: test/mail-test
================================================
#!/usr/bin/env python3

import logging
import os
import time

from calm.calm import mail_logs

toaddrs = [os.environ.get('EMAIL', 'debug')]

with mail_logs(True, toaddrs=toaddrs, subject='buffering_smtp_handler test (unicode)', thresholdLevel=logging.WARNING) as email:
    logging.warning("this is a test")
    logging.warning("unicode content: à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ù ú û ü")
    logging.info("this should not appear in the sent mail")
    logging.error("too many €")

time.sleep(10)

with mail_logs(True, toaddrs=toaddrs, subject='buffering_smtp_handler test (ascii)', thresholdLevel=logging.WARNING) as email:
    logging.warning("this is a test")
    logging.info("this should not appear in the sent mail")
    logging.warning("no unicode content, should be ascii encoded")


================================================
FILE: test/test_calm.py
================================================
// [OUTLINE - 14 symbols, 560 lines]
// import collections
// import filecmp
// import io
// import json
// import logging
// import os
// import re
// import shutil
// import tempfile
// import types
// import unittest
// import calm.calm
// import calm.db as db
// import calm.hint as hint
// import calm.maintainers as maintainers
// import calm.package as package
// import calm.pkg2html as pkg2html
// import calm.reports as reports
// import calm.uploads as uploads
// import calm.version
// import .utils
// L64-L69: def capture_dirtree(basedir):
// L76-L554: class CalmTest(unittest.TestCase):
// L77-L98: def test_hint_parser(self):
// L106-L145: def test_html_writer(self):
// L147-L256: def test_version_sort(self):
// L258-L269: def test_maint_pkglist(self):
// L271-L314: def test_scan_uploads(self):
// L316-L340: def test_package_set(self):
// L342-L376: def test_process_uploads_conflict(self):
// L378-L412: def test_process_upload_no_auth(self):
// L414-L478: def test_process_normal(self):
// L480-L481: def setUp(self):
// L483-L485: def tearDown(self):
// L488-L554: def setUpClass(cls):


================================================
FILE: test/test_entrypoints.py
================================================
// [OUTLINE - 4 symbols, 78 lines]
// import io
// import os
// import re
// import types
// import unittest
// import calm.mkgitoliteconf
// import calm.mksetupini
// import .utils
// L40-L78: class EntryPointsTest(unittest.TestCase):
// L41-L48: def test_mkgitoliteconf(self):
// L50-L73: def test_mksetupini(self):
// L76-L78: def setUpClass(cls):


================================================
FILE: test/testdata/conflict/homedir.expected
================================================
{'.': [],
 'Blooey McFooey': [],
 'Blooey McFooey/src': [],
 'Blooey McFooey/src/release': [],
 'Blooey McFooey/src/release/staleversion': ['staleversion-230-1-src.hint', 'staleversion-230-1-src.tar.xz'],
 'Blooey McFooey/x86_64': [],
 'Blooey McFooey/x86_64/release': [],
 'Blooey McFooey/x86_64/release/staleversion': ['staleversion-230-1.hint', 'staleversion-230-1.tar.xz']}


================================================
FILE: test/testdata/conflict/htdocs.expected
================================================
{'.': ['calm.db']}


================================================
FILE: test/testdata/conflict/rel_area.expected
================================================
{'.': [],
 'noarch': ['sha512.sum'],
 'noarch/release': ['sha512.sum'],
 'noarch/release/obs-a': ['obs-a-1.0-1-src.hint',
                          'obs-a-1.0-1-src.tar.xz',
                          'obs-a-1.0-1.hint',
                          'obs-a-1.0-1.tar.xz',
                          'sha512.sum'],
 'noarch/release/obs-b': ['obs-b-1.0-1-src.hint',
                          'obs-b-1.0-1-src.tar.xz',
                          'obs-b-1.0-1.hint',
                          'obs-b-1.0-1.tar.xz',
                          'sha512.sum'],
 'noarch/release/perl-Net-SMTP-SSL': ['perl-Net-SMTP-SSL-1.01-1-src.hint',
                                      'perl-Net-SMTP-SSL-1.01-1-src.tar.xz',
                                      'perl-Net-SMTP-SSL-1.01-1.hint',
                                      'perl-Net-SMTP-SSL-1.01-1.tar.xz',
                                      'perl-Net-SMTP-SSL-1.02-1-src.hint',
                                      'perl-Net-SMTP-SSL-1.02-1-src.tar.xz',
                                      'perl-Net-SMTP-SSL-1.02-1.hint',
                                      'perl-Net-SMTP-SSL-1.02-1.tar.xz',
                                      'perl-Net-SMTP-SSL-1.03-1-src.hint',
                                      'perl-Net-SMTP-SSL-1.03-1-src.tar.xz',
                                      'perl-Net-SMTP-SSL-1.03-1.hint',
                                      'perl-Net-SMTP-SSL-1.03-1.tar.xz',
                                      'sha512.sum'],
 'noarch/release/test-c': ['sha512.sum',
                           'test-c-1.0-1-src.hint',
                           'test-c-1.0-1-src.tar.xz',
                           'test-c-1.0-1.hint',
                           'test-c-1.0-1.tar.xz'],
 'noarch/release/test-d': ['sha512.sum',
                           'test-d-1.0-1-src.hint',
                           'test-d-1.0-1-src.tar.xz',
                           'test-d-1.0-1.hint',
                           'test-d-1.0-1.tar.xz'],
 'noarch/release/test-e': ['sha512.sum',
                           'test-e-1.0-1-src.hint',
                           'test-e-1.0-1-src.tar.xz',
                           'test-e-1.0-1.hint',
                           'test-e-1.0-1.tar.xz'],
 'x86_64': ['sha512.sum'],
 'x86_64/release': ['sha512.sum'],
 'x86_64/release/arc': ['arc-4.32.7-10-src.hint',
                        'arc-4.32.7-10-src.tar.bz2',
                        'arc-4.32.7-10.hint',
                        'arc-4.32.7-10.tar.bz2'],
 'x86_64/release/base-cygwin': ['base-cygwin-3.6-1.hint',
                                'base-cygwin-3.6-1.tar.xz',
                                'base-cygwin-3.8-1.hint',
                                'base-cygwin-3.8-1.tar.xz',
                                'sha512.sum'],
 'x86_64/release/corrupt': ['corrupt-2.0.0-1-src.hint',
                            'corrupt-2.0.0-1-src.tar.xz',
                            'corrupt-2.0.0-1.hint',
                            'corrupt-2.0.0-1.tar.xz',
                            'sha512.sum'],
 'x86_64/release/cygwin': ['.this-should-be-ignored',
                           'cygwin-2.2.0-1-src.hint',
                           'cygwin-2.2.0-1-src.tar.xz',
                           'cygwin-2.2.0-1.hint',
                           'cygwin-2.2.0-1.tar.xz',
                           'cygwin-2.2.1-1-src.hint',
                           'cygwin-2.2.1-1-src.tar.xz',
                           'cygwin-2.2.1-1.hint',
                           'cygwin-2.2.1-1.tar.xz',
                           'cygwin-2.3.0-0.3-src.hint',
                           'cygwin-2.3.0-0.3-src.tar.xz',
                           'cygwin-2.3.0-0.3.hint',
                           'cygwin-2.3.0-0.3.tar.xz',
                           'override.hint',
                           'sha512.sum'],
 'x86_64/release/cygwin/cygwin-debuginfo': ['cygwin-debuginfo-2.2.0-1.hint',
                                            'cygwin-debuginfo-2.2.0-1.tar.xz',
                                            'cygwin-debuginfo-2.2.1-1.hint',
                                            'cygwin-debuginfo-2.2.1-1.tar.xz',
                                            'cygwin-debuginfo-2.3.0-0.3.hint',
                                            'cygwin-debuginfo-2.3.0-0.3.tar.xz',
                                            'override.hint',
                                            'sha512.sum'],
 'x86_64/release/cygwin/cygwin-devel': ['cygwin-devel-2.2.0-1.hint',
                                        'cygwin-devel-2.2.0-1.tar.xz',
                                        'cygwin-devel-2.2.1-1.hint',
                                        'cygwin-devel-2.2.1-1.tar.xz',
                                        'cygwin-devel-2.3.0-0.3.hint',
                                        'cygwin-devel-2.3.0-0.3.tar.xz',
                                        'override.hint',
                                        'sha512.sum'],
 'x86_64/release/invalid': ['invalid-0.hint', 'sha512.sum'],
 'x86_64/release/keychain': ['keychain-2.6.11-1-src.hint',
                             'keychain-2.6.11-1-src.tar.bz2',
                             'keychain-2.6.11-1.hint',
                             'keychain-2.6.11-1.tar.bz2',
                             'keychain-2.6.8-1-src.hint',
                             'keychain-2.6.8-1-src.tar.bz2',
                             'keychain-2.6.8-1.hint',
                             'keychain-2.6.8-1.tar.bz2',
                             'keychain-2.7.1-1-src.hint',
                             'keychain-2.7.1-1-src.tar.bz2',
                             'keychain-2.7.1-1.hint',
                             'keychain-2.7.1-1.tar.bz2',
                             'sha512.sum'],
 'x86_64/release/libspiro': ['libspiro-20071029-1.hint', 'sha512.sum'],
 'x86_64/release/libspiro/libspiro-devel': ['libspiro-devel-20071029-1.hint', 'sha512.sum'],
 'x86_64/release/libspiro/libspiro0': ['libspiro0-20071029-1.hint', 'sha512.sum'],
 'x86_64/release/libtextcat': ['libtextcat-2.2-2-src.hint',
                               'libtextcat-2.2-2-src.tar.bz2',
                               'libtextcat-2.2-2.hint',
                               'libtextcat-2.2-2.tar.bz2',
                               'sha512.sum'],
 'x86_64/release/libtextcat/libtextcat-devel': ['libtextcat-devel-2.2-2.hint',
                                                'libtextcat-devel-2.2-2.tar.bz2',
                                                'sha512.sum'],
 'x86_64/release/libtextcat/libtextcat0': ['libtextcat0-2.2-2.hint', 'libtextcat0-2.2-2.tar.bz2', 'sha512.sum'],
 'x86_64/release/mDNSResponder': ['mDNSResponder-379.32.1-1-src.hint',
                                  'mDNSResponder-379.32.1-1-src.tar.bz2',
                                  'mDNSResponder-379.32.1-1.hint',
                                  'mDNSResponder-379.32.1-1.tar.bz2',
                                  'sha512.sum'],
 'x86_64/release/mDNSResponder/libdns_sd-devel': ['libdns_sd-devel-379.32.1-1.hint',
                                                  'libdns_sd-devel-379.32.1-1.tar.bz2',
                                                  'sha512.sum'],
 'x86_64/release/mDNSResponder/libdns_sd1': ['libdns_sd1-379.32.1-1.hint',
                                             'libdns_sd1-379.32.1-1.tar.bz2',
                                             'sha512.sum'],
 'x86_64/release/mingw64-i686-binutils': ['mingw64-i686-binutils-2.29.1.787c9873-1.hint', 'sha512.sum'],
 'x86_64/release/mingw64-i686-binutils/mingw64-i686-binutils-debuginfo': ['mingw64-i686-binutils-debuginfo-2.29.1.787c9873-1.hint',
                                                                          'sha512.sum'],
 'x86_64/release/openssh': ['openssh-7.2p2-1-src.hint',
                            'openssh-7.2p2-1-src.tar.xz',
                            'openssh-7.2p2-1.hint',
                            'openssh-7.2p2-1.tar.xz',
                            'sha512.sum'],
 'x86_64/release/per-version': ['override.hint',
                                'per-version-4.0-1-src.hint',
                                'per-version-4.0-1-src.tar.xz',
                                'per-version-4.0-1.hint',
                                'per-version-4.0-1.tar.xz',
                                'per-version-4.8-1-src.hint',
                                'per-version-4.8-1-src.tar.xz',
                                'per-version-4.8-1.hint',
                                'per-version-4.8-1.tar.xz',
                                'sha512.sum'],
 'x86_64/release/per-version-incomplete': ['override.hint',
                                           'per-version-incomplete-36-1-src.hint',
                                           'per-version-incomplete-36-1-src.tar.xz',
                                           'per-version-incomplete-36-1.hint',
                                           'per-version-incomplete-36-1.tar.xz',
                                           'per-version-incomplete-39-1-src.tar.xz',
                                           'per-version-incomplete-39-1.tar.xz',
                                           'sha512.sum'],
 'x86_64/release/per-version-replacement-hint-only': ['per-version-replacement-hint-only-1.0-1-src.hint',
                                                      'per-version-replacement-hint-only-1.0-1-src.tar.xz',
                                                      'per-version-replacement-hint-only-1.0-1.hint',
                                                      'per-version-replacement-hint-only-1.0-1.tar.xz',
                                                      'sha512.sum'],
 'x86_64/release/proj': ['proj-4.8.0-1.hint', 'sha512.sum'],
 'x86_64/release/proj/libproj-devel': ['libproj-devel-4.8.0-1.hint', 'sha512.sum'],
 'x86_64/release/proj/libproj1': ['libproj1-4.8.0-1.hint', 'sha512.sum'],
 'x86_64/release/rpm-doc': ['sha512.sum'],
 'x86_64/release/splint': ['sha512.sum', 'splint-3.1.2-1.hint'],
 'x86_64/release/staleversion': ['override.hint',
                                 'sha512.sum',
                                 'staleversion-243-0-src.hint',
                                 'staleversion-243-0-src.tar.xz',
                                 'staleversion-243-0.hint',
                                 'staleversion-243-0.tar.xz',
                                 'staleversion-250-0-src.hint',
                                 'staleversion-250-0-src.tar.xz',
                                 'staleversion-250-0.hint',
                                 'staleversion-250-0.tar.xz',
                                 'staleversion-260-0-src.hint',
                                 'staleversion-260-0-src.tar.xz',
                                 'staleversion-260-0.hint',
                                 'staleversion-260-0.tar.xz'],
 'x86_64/release/testpackage': ['sha512.sum',
                                'testpackage-0.1-1-src.hint',
                                'testpackage-0.1-1-src.tar.bz2',
                                'testpackage-0.1-1.hint',
                                'testpackage-0.1-1.tar.bz2']}


================================================
FILE: test/testdata/conflict/stagingdir.expected
================================================
{'.': []}


================================================
FILE: test/testdata/conflict/vault.expected
================================================
{'.': [],
 'x86_64': [],
 'x86_64/release': [],
 'x86_64/release/rpm-doc': ['rpm-doc-4.1-2-src.hint',
                            'rpm-doc-4.1-2-src.tar.bz2',
                            'rpm-doc-4.1-2.hint',
                            'rpm-doc-4.1-2.tar.bz2',
                            'rpm-doc-999-1.hint',
                            'rpm-doc-999-1.tar.bz2'],
 'x86_64/release/staleversion': ['staleversion-240-1-src.hint',
                                 'staleversion-240-1-src.tar.xz',
                                 'staleversion-240-1.hint',
                                 'staleversion-240-1.tar.xz',
                                 'staleversion-242-0-src.hint',
                                 'staleversion-242-0-src.tar.xz',
                                 'staleversion-242-0.hint',
                                 'staleversion-242-0.tar.xz',
                                 'staleversion-251-0-src.hint',
                                 'staleversion-251-0-src.tar.xz',
                                 'staleversion-251-0.hint',
                                 'staleversion-251-0.tar.xz']}


================================================
FILE: test/testdata/hints/noarch/release/obs-a/obs-a-1.0-1-src.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"obsolete package A"')])


================================================
FILE: test/testdata/hints/noarch/release/obs-a/obs-a-1.0-1.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"obsolete package A"')])


================================================
FILE: test/testdata/hints/noarch/release/obs-b/obs-b-1.0-1-src.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"obsolete package B"')])


================================================
FILE: test/testdata/hints/noarch/release/obs-b/obs-b-1.0-1.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"obsolete package B"')])


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.01-1-src.expected
================================================
{'category': 'Perl',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.01-1.expected
================================================
{'category': 'Perl',
 'requires': '',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.02-1-src.expected
================================================
{'category': 'Perl',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.02-1.expected
================================================
{'category': 'Perl',
 'requires': '',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.03-1-src.expected
================================================
{'category': 'Perl',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.03-1.expected
================================================
{'category': 'Perl',
 'requires': '',
 'sdesc': '"Perl distribution Net-SMTP-SSL"',
 'ldesc': '"Implements the same API as Net::SMTP, but uses IO::Socket::SSL for\n'
          'its network operations in order to support encrypted connections."'}


================================================
FILE: test/testdata/hints/noarch/release/test-c/test-c-1.0-1-src.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"test package C"')])


================================================
FILE: test/testdata/hints/noarch/release/test-c/test-c-1.0-1.expected
================================================
{'category': 'Devel',
 'sdesc': '"test package C"',
 'obsoletes': 'obs-a, obs-b',
 'requires': 'test-d (>= 1.0), test-e'}


================================================
FILE: test/testdata/hints/noarch/release/test-d/test-d-1.0-1-src.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"test package D"'), ('version', '1.0.42590-1')])


================================================
FILE: test/testdata/hints/noarch/release/test-d/test-d-1.0-1.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"test package D"'), ('version', '1.0.42590-1')])


================================================
FILE: test/testdata/hints/noarch/release/test-e/test-e-1.0-1-src.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"test package E"'), ('build-depends', 'cygwin-devel')])


================================================
FILE: test/testdata/hints/noarch/release/test-e/test-e-1.0-1.expected
================================================
OrderedDict([('category', 'Devel'), ('sdesc', '"test package E"')])


================================================
FILE: test/testdata/hints/x86_64/release/arc/arc-4.32.7-10-src.expected
================================================
{'sdesc': '"The ARC archive utility"',
 'ldesc': '"This program is based on the MSDOS ARC program, version 5.21, plus a\n'
          'few enhancements. ARC performs Huffman Squeezing on data. The Huffman\n'
          'Squeeze algorithm was removed from MSDOS ARC after version 5.12. It\n'
          'turns out to be more efficient than Lempel-Ziv style compression when\n'
          'compressing graphic images. Squeeze analysis is always done now, and\n'
          'the best of packing, squeezing, or crunching is used."',
 'category': 'Archive'}


================================================
FILE: test/testdata/hints/x86_64/release/arc/arc-4.32.7-10.expected
================================================
{'sdesc': '"The ARC archive utility"',
 'ldesc': '"This program is based on the MSDOS ARC program, version 5.21, plus a\n'
          'few enhancements. ARC performs Huffman Squeezing on data. The Huffman\n'
          'Squeeze algorithm was removed from MSDOS ARC after version 5.12. It\n'
          'turns out to be more efficient than Lempel-Ziv style compression when\n'
          'compressing graphic images. Squeeze analysis is always done now, and\n'
          'the best of packing, squeezing, or crunching is used."',
 'category': 'Archive'}


================================================
FILE: test/testdata/hints/x86_64/release/base-cygwin/base-cygwin-3.6-1.expected
================================================
{'sdesc': '"Initial base installation helper script"',
 'ldesc': '"Initial base installation helper script."',
 'category': 'Base',
 'requires': '',
 'parse-warnings': ["sdesc ends with '.', fixing"]}


================================================
FILE: test/testdata/hints/x86_64/release/base-cygwin/base-cygwin-3.8-1.expected
================================================
{'sdesc': '"Initial base installation helper script"',
 'ldesc': '"Initial base installation helper script."',
 'category': 'Base',
 'requires': 'cygwin-api0_291',
 'parse-warnings': ["sdesc ends with '.', fixing"]}


================================================
FILE: test/testdata/hints/x86_64/release/corrupt/corrupt-2.0.0-1-src.expected
================================================
{'sdesc': '"A corrupt package"',
 'ldesc': '"A package containing corrupt archives"',
 'category': 'Devel'}


================================================
FILE: test/testdata/hints/x86_64/release/corrupt/corrupt-2.0.0-1.expected
================================================
{'sdesc': '"A corrupt package"',
 'ldesc': '"A package containing corrupt archives"',
 'category': 'Devel'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.2.0-1-src.expected
================================================
OrderedDict([('sdesc', '"The UNIX emulation engine"'), ('ldesc', '"The UNIX emulation engine"'), ('category', 'Base')])


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.2.0-1.expected
================================================
{'sdesc': '"The UNIX emulation engine"',
 'ldesc': '"The UNIX emulation engine"',
 'category': 'Base',
 'requires': 'base-cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.2.1-1-src.expected
================================================
{'sdesc': '"The UNIX emulation engine"',
 'ldesc': '"The UNIX emulation engine"',
 'category': 'Base',
 'license': 'LGPL-3.0-or-later WITH LGPL-3.0-linking-exception'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.2.1-1.expected
================================================
{'sdesc': '"The UNIX emulation engine"',
 'ldesc': '"The UNIX emulation engine"',
 'category': 'Base',
 'requires': 'base-cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.3.0-0.3-src.expected
================================================
{'sdesc': '"The UNIX emulation engine"',
 'ldesc': '"The UNIX emulation engine"',
 'category': 'Base',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-2.3.0-0.3.expected
================================================
{'sdesc': '"The UNIX emulation engine"',
 'ldesc': '"The UNIX emulation engine"',
 'category': 'Base',
 'requires': 'base-cygwin _windows ( >= 6.0 )',
 'provides': 'cygwin-api0_291',
 'conflicts': 'fruit-juice',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-debuginfo/cygwin-debuginfo-2.2.0-1.expected
================================================
{'category': 'Debug',
 'requires': 'cygwin-debuginfo',
 'external-source': 'cygwin',
 'sdesc': '"Debug info for cygwin"',
 'ldesc': '"This package contains files necessary for debugging the\ncygwin package with gdb."'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-debuginfo/cygwin-debuginfo-2.2.1-1.expected
================================================
{'category': 'Debug',
 'requires': 'cygwin-debuginfo',
 'external-source': 'cygwin',
 'sdesc': '"Debug info for cygwin"',
 'ldesc': '"This package contains files necessary for debugging the\ncygwin package with gdb."'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-debuginfo/cygwin-debuginfo-2.3.0-0.3.expected
================================================
{'category': 'Debug',
 'requires': 'cygwin-debuginfo',
 'external-source': 'cygwin',
 'sdesc': '"Debug info for cygwin"',
 'ldesc': '"This package contains files necessary for debugging the\ncygwin package with gdb."',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-debuginfo/override.expected
================================================
OrderedDict([('keep', '2.2.0-1')])


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-devel/cygwin-devel-2.2.0-1.expected
================================================
{'category': 'Devel',
 'requires': '',
 'sdesc': '"Core development files"',
 'ldesc': '"Core development files required to build Cygwin packages"',
 'external-source': 'cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-devel/cygwin-devel-2.2.1-1.expected
================================================
{'category': 'Devel',
 'requires': '',
 'sdesc': '"Core development files"',
 'ldesc': '"Core development files required to build Cygwin packages"',
 'external-source': 'cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-devel/cygwin-devel-2.3.0-0.3.expected
================================================
{'category': 'Devel',
 'requires': '',
 'sdesc': '"Core development files"',
 'ldesc': '"Core development files required to build Cygwin packages"',
 'external-source': 'cygwin',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/cygwin-devel/override.expected
================================================
OrderedDict([('keep', '2.2.0-1')])


================================================
FILE: test/testdata/hints/x86_64/release/cygwin/override.expected
================================================
OrderedDict([('keep', '2.2.0-1')])


================================================
FILE: test/testdata/hints/x86_64/release/invalid/invalid-0.expected
================================================
{'parse-errors': ['unknown key unknown-key at line 0',
                  "unknown construct 'invalid-construct' at line 1",
                  "required key 'category' missing",
                  "required key 'sdesc' missing"]}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.6.11-1-src.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils'}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.6.11-1.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils',
 'requires': 'openssh'}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.6.8-1-src.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils'}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.6.8-1.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils',
 'requires': 'openssh'}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.7.1-1-src.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils'}


================================================
FILE: test/testdata/hints/x86_64/release/keychain/keychain-2.7.1-1.expected
================================================
{'sdesc': '"Key manager for OpenSSH"',
 'ldesc': '"Keychain is an OpenSSH key manager, typically run from\n'
          '~/.bash_profile. When keychain is run, it checks for a running\n'
          'ssh-agent, otherwise it starts one. It saves the ssh-agent environment\n'
          'variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins\n'
          'and non-interactive shells such as cron jobs can source the file and\n'
          'make passwordless ssh connections. In addition, when keychain runs, it\n'
          'verifies that the key files specified on the command-line are known to\n'
          'ssh-agent, otherwise it loads them, prompting you for a password if\n'
          'necessary"',
 'category': 'Utils',
 'requires': 'openssh'}


================================================
FILE: test/testdata/hints/x86_64/release/libspiro/libspiro-20071029-1.expected
================================================
OrderedDict([('parse-errors', ['invalid UTF-8'])])


================================================
FILE: test/testdata/hints/x86_64/release/libspiro/libspiro-devel/libspiro-devel-20071029-1.expected
================================================
OrderedDict([('parse-errors', ['invalid UTF-8'])])


================================================
FILE: test/testdata/hints/x86_64/release/libspiro/libspiro0/libspiro0-20071029-1.expected
================================================
OrderedDict([('parse-errors', ['invalid UTF-8'])])


================================================
FILE: test/testdata/hints/x86_64/release/libtextcat/libtextcat-2.2-2-src.expected
================================================
{'sdesc': '"Text Classification Library (language guessing in C)"',
 'ldesc': '"Libtextcat is a library with functions that implement the\n'
          'classification technique described in Cavnar & Trenkle, "N-Gram-Based\n'
          'Text Categorization". It was primarily developed for language\n'
          'guessing, a task on which it is known to perform with near-perfect\n'
          'accuracy.\n'
          'BSD License.\n'
          'http://software.wise-guys.nl/libtextcat/"',
 'category': 'Text',
 'parse-errors': ['double-quote within double-quotes at line 7 (hint files have no escape character)']}


================================================
FILE: test/testdata/hints/x86_64/release/libtextcat/libtextcat-2.2-2.expected
================================================
{'sdesc': '"Text Classification Library (language guessing in C)"',
 'ldesc': '"Libtextcat is a library with functions that implement the\n'
          'classification technique described in Cavnar & Trenkle, "N-Gram-Based\n'
          'Text Categorization". It was primarily developed for language\n'
          'guessing, a task on which it is known to perform with near-perfect\n'
          'accuracy.\n'
          'BSD License.\n'
          'http://software.wise-guys.nl/libtextcat/"',
 'category': 'Text',
 'requires': 'libtextcat0',
 'parse-errors': ['double-quote within double-quotes at line 7 (hint files have no escape character)']}


================================================
FILE: test/testdata/hints/x86_64/release/libtextcat/libtextcat-devel/libtextcat-devel-2.2-2.expected
================================================
{'sdesc': '"Helper, header and library for libtextcat"',
 'ldesc': '"Libtextcat is a library with functions that implement the\n'
          'classification technique described in Cavnar & Trenkle, "N-Gram-Based\n'
          'Text Categorization". It was primarily developed for language\n'
          'guessing, a task on which it is known to perform with near-perfect\n'
          'accuracy.\n'
          'BSD License.\n'
          'http://software.wise-guys.nl/libtextcat/"',
 'category': 'Devel Text',
 'requires': 'libtextcat0 libtextcat',
 'external-source': 'libtextcat',
 'parse-errors': ['double-quote within double-quotes at line 7 (hint files have no escape character)']}


================================================
FILE: test/testdata/hints/x86_64/release/libtextcat/libtextcat0/libtextcat0-2.2-2.expected
================================================
{'sdesc': '"Text Classification Library dll"',
 'ldesc': '"Libtextcat is a library with functions that implement the\n'
          'classification technique described in Cavnar & Trenkle, "N-Gram-Based\n'
          'Text Categorization". It was primarily developed for language\n'
          'guessing, a task on which it is known to perform with near-perfect\n'
          'accuracy.\n'
          'BSD License.\n'
          'http://software.wise-guys.nl/libtextcat/"',
 'category': 'Text',
 'requires': 'cygwin',
 'external-source': 'libtextcat',
 'parse-errors': ['double-quote within double-quotes at line 7 (hint files have no escape character)']}


================================================
FILE: test/testdata/hints/x86_64/release/mDNSResponder/libdns_sd-devel/libdns_sd-devel-379.32.1-1.expected
================================================
{'category': 'Net',
 'requires': 'libdns_sd1',
 'sdesc': '"Bonjour Zeroconf implementation"',
 'ldesc': '"Bonjour, also known as zero-configuration networking, enables\n'
          'automatic discovery of computers, devices, and services on IP networks using\n'
          'industry standard IP protocols."',
 'external-source': 'mDNSResponder'}


================================================
FILE: test/testdata/hints/x86_64/release/mDNSResponder/libdns_sd1/libdns_sd1-379.32.1-1.expected
================================================
{'category': 'Net',
 'requires': '',
 'sdesc': '"Bonjour Zeroconf implementation"',
 'ldesc': '"Bonjour, also known as zero-configuration networking, enables\n'
          'automatic discovery of computers, devices, and services on IP networks using\n'
          'industry standard IP protocols."',
 'external-source': 'mDNSResponder'}


================================================
FILE: test/testdata/hints/x86_64/release/mDNSResponder/mDNSResponder-379.32.1-1-src.expected
================================================
{'category': 'Net',
 'sdesc': '"Bonjour Zeroconf implementation"',
 'ldesc': '"Bonjour, also known as zero-configuration networking, enables\n'
          'automatic discovery of computers, devices, and services on IP networks using\n'
          'industry standard IP protocols."'}


================================================
FILE: test/testdata/hints/x86_64/release/mDNSResponder/mDNSResponder-379.32.1-1.expected
================================================
{'category': 'Net',
 'requires': 'libdns_sd1',
 'sdesc': '"Bonjour Zeroconf implementation"',
 'ldesc': '"Bonjour, also known as zero-configuration networking, enables\n'
          'automatic discovery of computers, devices, and services on IP networks using\n'
          'industry standard IP protocols."',
 'message': 'mDNSResponder "The Cygwin mDNSResponder package contains only clients.\n'
            "If you do not already have the 'Bonjour Service' installed (it comes with\n"
            'a number of popular Windows programs), then you can download it at\n'
            'http://support.apple.com/kb/DL999"'}


================================================
FILE: test/testdata/hints/x86_64/release/mingw64-i686-binutils/mingw64-i686-binutils-2.29.1.787c9873-1.expected
================================================
{'category': 'Devel',
 'requires': 'cygwin libintl8 zlib0',
 'sdesc': '"The GNU Binutils are a collection of binary tools. This package\n is capable of targeting win32"',
 'ldesc': '"Binutils for MinGW-w64 Win32 toolchain"',
 'parse-errors': ['key sdesc has multi-line value'],
 'parse-warnings': ["sdesc ends with '.', fixing", 'sdesc is much longer than ldesc']}


================================================
FILE: test/testdata/hints/x86_64/release/mingw64-i686-binutils/mingw64-i686-binutils-debuginfo/mingw64-i686-binutils-debuginfo-2.29.1.787c9873-1.expected
================================================
{'category': 'Debug',
 'requires': 'cygwin-debuginfo',
 'external-source': 'mingw64-i686-binutils',
 'ldesc': '"Debug info for mingw64-i686-binutils"',
 'sdesc': '"This package contains files necessary for debugging the\nmingw64-i686-binutils package with gdb"',
 'parse-errors': ['key sdesc has multi-line value'],
 'parse-warnings': ["sdesc ends with '.', fixing", 'sdesc is much longer than ldesc']}


================================================
FILE: test/testdata/hints/x86_64/release/openssh/openssh-7.2p2-1-src.expected
================================================
{'category': 'Net',
 'sdesc': '"The OpenSSH server and client programs"',
 'ldesc': '"OpenSSH is a program for logging into a remote machine and for\n'
          '\texecuting commands on a remote machine.  It can replace rlogin and rsh,\n'
          '\tproviding encrypted communication between two machines."'}


================================================
FILE: test/testdata/hints/x86_64/release/openssh/openssh-7.2p2-1.expected
================================================
{'category': 'Net',
 'sdesc': '"The OpenSSH server and client programs"',
 'ldesc': '"OpenSSH is a program for logging into a remote machine and for\n'
          '\texecuting commands on a remote machine.  It can replace rlogin and rsh,\n'
          '\tproviding encrypted communication between two machines."'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version/override.expected
================================================
OrderedDict()


================================================
FILE: test/testdata/hints/x86_64/release/per-version/per-version-4.0-1-src.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version/per-version-4.0-1.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base',
 'requires': 'cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version/per-version-4.8-1-src.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version/per-version-4.8-1.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base',
 'requires': 'base-cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version-incomplete/override.expected
================================================
OrderedDict()


================================================
FILE: test/testdata/hints/x86_64/release/per-version-incomplete/per-version-incomplete-36-1-src.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package with missing hint data for some versions"',
 'category': 'Base'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version-incomplete/per-version-incomplete-36-1.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package with missing hint data for some versions"',
 'category': 'Base'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version-replacement-hint-only/per-version-replacement-hint-only-1.0-1-src.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base'}


================================================
FILE: test/testdata/hints/x86_64/release/per-version-replacement-hint-only/per-version-replacement-hint-only-1.0-1.expected
================================================
{'sdesc': '"Per-version hint test package"',
 'ldesc': '"Per-version hint test package"',
 'category': 'Base',
 'requires': 'cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/proj/libproj-devel/libproj-devel-4.8.0-1.expected
================================================
{'category': 'Graphics Libs',
 'requires': 'libproj1',
 'sdesc': '""The PROJ Cartographic Projections Software (devel)"\n'
          'ldesc: "Cartographic projection library and utilities"',
 'external-source': 'proj',
 'parse-errors': ['double-quote within double-quotes at line 3 (hint files have no escape character)',
                  'key sdesc has multi-line value']}


================================================
FILE: test/testdata/hints/x86_64/release/proj/libproj1/libproj1-4.8.0-1.expected
================================================
{'category': 'Graphics Libs',
 'requires': '',
 'sdesc': '""The PROJ Cartographic Projections Software (runtime)"\n'
          'ldesc: "Cartographic projection library and utilities"',
 'external-source': 'proj',
 'parse-errors': ['double-quote within double-quotes at line 3 (hint files have no escape character)',
                  'key sdesc has multi-line value']}


================================================
FILE: test/testdata/hints/x86_64/release/proj/proj-4.8.0-1.expected
================================================
{'category': 'Graphics Libs',
 'requires': 'libproj1',
 'sdesc': '""The PROJ Cartographic Projections Software (utilities)"\n'
          'ldesc: "Cartographic projection library and utilities"',
 'parse-errors': ['double-quote within double-quotes at line 3 (hint files have no escape character)',
                  'key sdesc has multi-line value']}


================================================
FILE: test/testdata/hints/x86_64/release/rpm-doc/rpm-doc-4.1-2-src.expected
================================================
{'sdesc': '"Obsolete package for RPM package management system manual pages (extra text to so repr is not one line)"',
 'category': '_obsolete'}


================================================
FILE: test/testdata/hints/x86_64/release/rpm-doc/rpm-doc-4.1-2.expected
================================================
{'sdesc': '"Obsolete package for RPM package management system manual pages (extra text to so repr is not one line)"',
 'category': '_obsolete'}


================================================
FILE: test/testdata/hints/x86_64/release/rpm-doc/rpm-doc-999-1.expected
================================================
{'sdesc': '"Obsolete package for RPM package management system manual pages (extra text to so repr is not one line)"',
 'category': '_obsolete',
 'requires': 'base-cygwin'}


================================================
FILE: test/testdata/hints/x86_64/release/splint/splint-3.1.2-1.expected
================================================
{'sdesc': '"Check C programs for security vulnerabilities and programming\nmistakes"',
 'ldesc': '"Program does many of the traditional lint checks including\n'
          'unused declarations, type inconsistencies, use before definition,\n'
          'unreachable code, ignored return values, execution paths with no\n'
          'return, likely infinite loops, and fall through cases. More powerful\n'
          'checks are made possible by additional information given in source\n'
          'code annotations. Annotations are stylized comments that document\n'
          'assumptions about functions, variables, parameters and types. In\n'
          'addition to the checks specifically enabled by annotations, many of\n'
          'the traditional lint checks are improved by exploiting this additional\n'
          'setinformation."',
 'category': 'Devel',
 'requires': 'cygwin',
 'parse-errors': ['key sdesc has multi-line value'],
 'parse-warnings': ["sdesc ends with '.', fixing"]}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/override.expected
================================================
OrderedDict([('keep', '243-0'), ('keep-count', '1'), ('keep-count-test', '1')])


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-240-1-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base'}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-240-1.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-242-0-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base'}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-242-0.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-243-0-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base'}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-243-0.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-250-0-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base'}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-250-0.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-251-0-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-251-0.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': '',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-260-0-src.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/staleversion/staleversion-260-0.expected
================================================
{'sdesc': '"Test package for stale version removal"',
 'ldesc': '"Test package for stale version removal"',
 'category': 'Shells Base',
 'requires': '',
 'test': ''}


================================================
FILE: test/testdata/hints/x86_64/release/testpackage/testpackage-0.1-1-src.expected
================================================
{'sdesc': '"A test package (stuff & other stuff)"',
 'ldesc': '"A test package (stuff & other stuff)"',
 'category': 'Devel'}


================================================
FILE: test/testdata/hints/x86_64/release/testpackage/testpackage-0.1-1.expected
================================================
{'sdesc': '"A test package (stuff & other stuff)"',
 'ldesc': '"A test package (stuff & other stuff)"',
 'category': 'Devel'}


================================================
FILE: test/testdata/homes/Blooey McFooey/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.03-2-src.hint
================================================
category: Perl
sdesc: "Perl distribution Net-SMTP-SSL"
ldesc: "Implements the same API as Net::SMTP, but uses IO::Socket::SSL for
its network operations in order to support encrypted connections."


================================================
FILE: test/testdata/homes/Blooey McFooey/noarch/release/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.03-2.hint
================================================
category: Perl
requires:
sdesc: "Perl distribution Net-SMTP-SSL"
ldesc: "Implements the same API as Net::SMTP, but uses IO::Socket::SSL for
its network operations in order to support encrypted connections."


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/after-ready/after-ready-1.0-1.hint
================================================
sdesc: "A test package which is ignored because it's uploaded after ready"
ldesc: "A test package which is ignored because it's uploaded after ready"
category: Devel



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/not-on-maintainer-list/not-on-maintainer-list-1.0-1.hint
================================================
sdesc: "A test package which is ignored because it's not on the maintainer list"
ldesc: "A test package which is ignored because it's not on the maintainer list"
category: Devel



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/not-on-package-list/not-on-package-list-1.0-1.hint
================================================
sdesc: "A test package which is ignored because it's not in the package list"
ldesc: "A test package which is ignored because it's not in the package list"
category: Devel



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/not-ready/not-ready-1.0-1.hint
================================================
sdesc: "A test package which is ignored because it's not ready"
ldesc: "A test package which is ignored because it's not ready"
category: Devel



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/per-version/override.hint
================================================


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/per-version/per-version-5.0-1-src.hint
================================================
sdesc: "Per-version hint test package"
ldesc: "Per-version hint test package"
category: Base
test:


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/per-version/per-version-5.0-1.hint
================================================
sdesc: "Per-version hint test package"
ldesc: "Per-version hint test package"
category: Base
requires: base-cygwin
test:


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/per-version-replacement-hint-only/per-version-replacement-hint-only-1.0-1.hint
================================================
sdesc: "Replacement per-version hint test package - updated"
ldesc: "Replacement per-version hint test package - updated"
category: Base
requires: base-cygwin per-version


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage/testpackage-1.0-1-src.hint
================================================
sdesc: "A test package"
ldesc: "A test package
It's description might contains some unicode junk
Like it’s you’re Markup Language™ Nokogiri’s tool―that Bézier."
category: Devel


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage/testpackage-1.0-1.hint
================================================
sdesc: "A test package"
ldesc: "A test package
It's description might contains some unicode junk
Like it’s you’re Markup Language™ Nokogiri’s tool―that Bézier."
category: Devel
requires: cygwin


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage/testpackage-subpackage/testpackage-subpackage-1.0-1.hint
================================================
sdesc: "A test subpackage"
ldesc: "A test subpackage"
category: Devel
external-source: testpackage


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage-zstd/testpackage-zstd-1.0-1-src.hint
================================================
category: Base
build-depends: cygport 
sdesc: "test package (zstd compressed)"
ldesc: "test package (zstd compressed)"
homepage: http://zstd.testpkg.invalid
skip:



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage-zstd/testpackage-zstd-1.0-1.hint
================================================
category: Base
requires:   
sdesc: "test package (zstd compressed)"
ldesc: "test package (zstd compressed)"



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage2/testpackage2-1.0-1.hint
================================================
sdesc: "A test package 2"
ldesc: "A test package 2"
category: Devel



================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage2/testpackage2-subpackage/inprogress.SftpXFR.1234
================================================


================================================
FILE: test/testdata/homes/Blooey McFooey/x86_64/release/testpackage2/testpackage2-subpackage/testpackage2-subpackage-1.0-1.hint
================================================
sdesc: "A test subpackage 2"
ldesc: "A test subpackage 2"
category: Devel



================================================
FILE: test/testdata/homes/Jon Turney/!email
================================================
jon@invalid.local


================================================
FILE: test/testdata/homes/an_unexpected_file
================================================


================================================
FILE: test/testdata/homes.conflict/Blooey McFooey/x86_64/release/staleversion/staleversion-230-1-src.hint
================================================
sdesc: "Test package for stale version removal"
ldesc: "Test package for stale version removal"
category: Shells Base


================================================
FILE: test/testdata/homes.conflict/Blooey McFooey/x86_64/release/staleversion/staleversion-230-1.hint
================================================
sdesc: "Test package for stale version removal"
ldesc: "Test package for stale version removal"
category: Shells Base
requires:


================================================
FILE: test/testdata/homes.no_auth/Blooey McFooey/x86_64/release/testpackage/cygwin/cygwin-3.0.0-1-src.hint
================================================
sdesc: "The UNIX emulation engine"
ldesc: "A fraudulent package"
category: Base
homepage: https://cygwin.com



================================================
FILE: test/testdata/homes.no_auth/Blooey McFooey/x86_64/release/testpackage/cygwin/cygwin-3.0.0-1.hint
================================================
sdesc: "The UNIX emulation engine"
ldesc: "A fraudulent packagee"
category: Base
requires: base-cygwin _windows ( >= 6.0 )


================================================
FILE: test/testdata/htdocs.expected/dirtree.expected
================================================
{'.': ['packages.inc', 'packages_docs.inc', 'src_packages.inc'],
 'aarch64': ['.htaccess'],
 'doc': ['.htaccess'],
 'doc/keychain': ['keychain.README'],
 'noarch': ['.htaccess'],
 'noarch/obs-a': ['.htaccess', 'obs-a-1.0-1'],
 'noarch/obs-b': ['.htaccess', 'obs-b-1.0-1'],
 'noarch/perl-Net-SMTP-SSL': ['.htaccess',
                              'perl-Net-SMTP-SSL-1.01-1',
                              'perl-Net-SMTP-SSL-1.02-1',
                              'perl-Net-SMTP-SSL-1.03-1'],
 'noarch/test-c': ['.htaccess', 'test-c-1.0-1'],
 'noarch/test-d': ['.htaccess', 'test-d-1.0.42590-1'],
 'noarch/test-e': ['.htaccess', 'test-e-1.0-1'],
 'src': ['.htaccess'],
 'src/arc-src': ['.htaccess', 'arc-4.32.7-10-src'],
 'src/corrupt-src': ['.htaccess', 'corrupt-2.0.0-1-src'],
 'src/cygwin-src': ['.htaccess', 'cygwin-2.2.0-1-src', 'cygwin-2.2.1-1-src', 'cygwin-2.3.0-0.3-src'],
 'src/keychain-src': ['.htaccess', 'keychain-2.6.11-1-src', 'keychain-2.6.8-1-src', 'keychain-2.7.1-1-src'],
 'src/mDNSResponder-src': ['.htaccess', 'mDNSResponder-379.32.1-1-src'],
 'src/obs-a-src': ['.htaccess', 'obs-a-1.0-1-src'],
 'src/obs-b-src': ['.htaccess', 'obs-b-1.0-1-src'],
 'src/openssh-src': ['.htaccess', 'openssh-7.2p2-1-src'],
 'src/per-version-replacement-hint-only-src': ['.htaccess', 'per-version-replacement-hint-only-1.0-1-src'],
 'src/per-version-src': ['.htaccess', 'per-version-4.0-1-src', 'per-version-4.8-1-src'],
 'src/perl-Net-SMTP-SSL-src': ['.htaccess',
                               'perl-Net-SMTP-SSL-1.01-1-src',
                               'perl-Net-SMTP-SSL-1.02-1-src',
                               'perl-Net-SMTP-SSL-1.03-1-src'],
 'src/rpm-doc-src': ['.htaccess', 'rpm-doc-4.1-2-src'],
 'src/staleversion-src': ['.htaccess',
                          'staleversion-240-1-src',
                          'staleversion-242-0-src',
                          'staleversion-243-0-src',
                          'staleversion-250-0-src',
                          'staleversion-251-0-src',
                          'staleversion-260-0-src'],
 'src/test-c-src': ['.htaccess', 'test-c-1.0-1-src'],
 'src/test-d-src': ['.htaccess', 'test-d-1.0.42590-1-src'],
 'src/test-e-src': ['.htaccess', 'test-e-1.0-1-src'],
 'src/testpackage-src': ['.htaccess', 'testpackage-0.1-1-src'],
 'summary': ['arc-src.html',
             'arc.html',
             'base-cygwin.html',
             'corrupt-src.html',
             'corrupt.html',
             'cygwin-debuginfo.html',
             'cygwin-devel.html',
             'cygwin-src.html',
             'cygwin.html',
             'keychain-src.html',
             'keychain.html',
             'libdns_sd-devel.html',
             'libdns_sd1.html',
             'mDNSResponder-src.html',
             'mDNSResponder.html',
             'obs-a-src.html',
             'obs-a.html',
             'obs-b-src.html',
             'obs-b.html',
             'openssh-src.html',
             'openssh.html',
             'per-version-replacement-hint-only-src.html',
             'per-version-replacement-hint-only.html',
             'per-version-src.html',
             'per-version.html',
             'perl-Net-SMTP-SSL-src.html',
             'perl-Net-SMTP-SSL.html',
             'rpm-doc-src.html',
             'rpm-doc.html',
             'staleversion-src.html',
             'staleversion.html',
             'test-c-src.html',
             'test-c.html',
             'test-d-src.html',
             'test-d.html',
             'test-e-src.html',
             'test-e.html',
             'testpackage-src.html',
             'testpackage.html'],
 'x86_64': ['.htaccess'],
 'x86_64/arc': ['.htaccess', 'arc-4.32.7-10'],
 'x86_64/base-cygwin': ['.htaccess', 'base-cygwin-3.6-1', 'base-cygwin-3.8-1'],
 'x86_64/corrupt': ['.htaccess', 'corrupt-2.0.0-1'],
 'x86_64/cygwin': ['.htaccess', 'cygwin-2.2.0-1', 'cygwin-2.2.1-1', 'cygwin-2.3.0-0.3'],
 'x86_64/cygwin-debuginfo': ['.htaccess',
                             'cygwin-debuginfo-2.2.0-1',
                             'cygwin-debuginfo-2.2.1-1',
                             'cygwin-debuginfo-2.3.0-0.3'],
 'x86_64/cygwin-devel': ['.htaccess', 'cygwin-devel-2.2.0-1', 'cygwin-devel-2.2.1-1', 'cygwin-devel-2.3.0-0.3'],
 'x86_64/keychain': ['.htaccess', 'keychain-2.6.11-1', 'keychain-2.6.8-1', 'keychain-2.7.1-1'],
 'x86_64/libdns_sd-devel': ['.htaccess', 'libdns_sd-devel-379.32.1-1'],
 'x86_64/libdns_sd1': ['.htaccess', 'libdns_sd1-379.32.1-1'],
 'x86_64/mDNSResponder': ['.htaccess', 'mDNSResponder-379.32.1-1'],
 'x86_64/openssh': ['.htaccess', 'openssh-7.2p2-1'],
 'x86_64/per-version': ['.htaccess', 'per-version-4.0-1', 'per-version-4.8-1'],
 'x86_64/per-version-replacement-hint-only': ['.htaccess', 'per-version-replacement-hint-only-1.0-1'],
 'x86_64/rpm-doc': ['.htaccess', 'rpm-doc-4.1-2', 'rpm-doc-999-1'],
 'x86_64/staleversion': ['.htaccess',
                         'staleversion-240-1',
                         'staleversion-242-0',
                         'staleversion-243-0',
                         'staleversion-250-0',
                         'staleversion-251-0',
                         'staleversion-260-0'],
 'x86_64/testpackage': ['.htaccess', 'testpackage-0.1-1']}


================================================
FILE: test/testdata/htdocs.expected/doc/keychain/keychain.README
================================================
keychain
------------------------------------------

Key manager for OpenSSH

Keychain is an OpenSSH key manager, typically run from
~/.bash_profile. When keychain is run, it checks for a running
ssh-agent, otherwise it starts one. It saves the ssh-agent environment
variables to ~/.keychain/$HOSTNAME-sh, so that subsequent logins
and non-interactive shells such as cron jobs can source the file and
make passwordless ssh connections. In addition, when keychain runs, it
verifies that the key files specified on the command-line are known to
ssh-agent, otherwise it loads them, prompting you for a password if
necessary.

Runtime requirements:
  openssh
  bash
  grep
  gawk
  coreutils (uname whoami)
  cygwin (kill ps)

Build requirements:
  cygwin

Canonical homepage:
  http://freecode.com/projects/keychain
  https://github.com/funtoo/keychain
  http://packages.debian.org/keychain
  http://packages.gentoo.org/package/net-misc/keychain

  NOT RELATED:
  http://code.google.com/p/keychain

Canonical download:
  http://www.funtoo.org/archive/keychain/

Version control repository:
  https://github.com/funtoo/keychain
  git clone git://github.com/funtoo/keychain.git

Mailing list:

Forum / Wiki:

IRC channel:

Upstream contact:
  Maintainer: drobbins@funtoo.org <drobbins at funtoo.org>
  Bugs: https://github.com/funtoo/keychain/issues

License:
  GPL

Language:
  Bourne Shell

------------------------------------------

Build instructions:
  unpack keychain-*-src.tar.bz2
    if you use setup to install this source package, it will be
    unpacked under /usr/src automatically
  cd /usr/src
  ./keychain*.sh all

------------------------------------------

Files included in the binary distribution:
  See Cygwin package archive

------------------------------------------

Port Notes:

----- version 2.7.1-1 -----
- New maintainer 2012-10-10 Jari Aalto

---------- keychain-2.6.8-1 -- 11/08/2006 -----------
- New Maintainer Jonathan C. Allen

Cygwin port maintained by: Jari Aalto <jari.aalto at cante.net>
Copyright (C) 2012 Jari Aalto; Licensed under GPL v2 or later
Copyright (C) 2006-2012 Jonathan C. Allen


================================================
FILE: test/testdata/htdocs.expected/noarch/obs-a/obs-a-1.0-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>obs-a: obsolete package A</title>
</head>
<body>
<h1><a href="/packages/summary/obs-a.html">obs-a</a>: obsolete package A</h1>
<pre>
    2017-05-22 13:04          82 test-a-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/obs-b/obs-b-1.0-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>obs-b: obsolete package B</title>
</head>
<body>
<h1><a href="/packages/summary/obs-b.html">obs-b</a>: obsolete package B</h1>
<pre>
    2017-05-22 13:04          82 test-a-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.01-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL: Perl distribution Net-SMTP-SSL</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL.html">perl-Net-SMTP-SSL</a>: Perl distribution Net-SMTP-SSL</h1>
<pre>
    2015-06-26 19:10           0 usr/
    2015-06-26 19:10           0 usr/lib/
    2015-06-26 19:10           0 usr/lib/perl5/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/
    2015-06-21 01:58        1462 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/SSL.pm
    2015-06-26 19:10           0 usr/share/
    2015-06-26 19:10           0 usr/share/doc/
    2015-06-26 19:10           0 usr/share/doc/perl-Net-SMTP-SSL/
    2015-06-26 19:10         199 usr/share/doc/perl-Net-SMTP-SSL/Changes
    2015-06-26 19:10         867 usr/share/doc/perl-Net-SMTP-SSL/README
    2015-06-26 19:10           0 usr/share/man/
    2015-06-26 19:10           0 usr/share/man/man3/
    2015-06-26 19:10        1619 usr/share/man/man3/Net.SMTP.SSL.3pm.gz
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.02-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL: Perl distribution Net-SMTP-SSL</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL.html">perl-Net-SMTP-SSL</a>: Perl distribution Net-SMTP-SSL</h1>
<pre>
    2015-06-26 19:10           0 usr/
    2015-06-26 19:10           0 usr/lib/
    2015-06-26 19:10           0 usr/lib/perl5/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/
    2015-06-21 01:58        1462 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/SSL.pm
    2015-06-26 19:10           0 usr/share/
    2015-06-26 19:10           0 usr/share/doc/
    2015-06-26 19:10           0 usr/share/doc/perl-Net-SMTP-SSL/
    2015-06-26 19:10         199 usr/share/doc/perl-Net-SMTP-SSL/Changes
    2015-06-26 19:10         867 usr/share/doc/perl-Net-SMTP-SSL/README
    2015-06-26 19:10           0 usr/share/man/
    2015-06-26 19:10           0 usr/share/man/man3/
    2015-06-26 19:10        1619 usr/share/man/man3/Net.SMTP.SSL.3pm.gz
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/perl-Net-SMTP-SSL/perl-Net-SMTP-SSL-1.03-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL: Perl distribution Net-SMTP-SSL</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL.html">perl-Net-SMTP-SSL</a>: Perl distribution Net-SMTP-SSL</h1>
<pre>
    2015-06-26 19:10           0 usr/
    2015-06-26 19:10           0 usr/lib/
    2015-06-26 19:10           0 usr/lib/perl5/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/
    2015-06-26 19:10           0 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/
    2015-06-21 01:58        1462 usr/lib/perl5/vendor_perl/5.22/Net/SMTP/SSL.pm
    2015-06-26 19:10           0 usr/share/
    2015-06-26 19:10           0 usr/share/doc/
    2015-06-26 19:10           0 usr/share/doc/perl-Net-SMTP-SSL/
    2015-06-26 19:10         199 usr/share/doc/perl-Net-SMTP-SSL/Changes
    2015-06-26 19:10         867 usr/share/doc/perl-Net-SMTP-SSL/README
    2015-06-26 19:10           0 usr/share/man/
    2015-06-26 19:10           0 usr/share/man/man3/
    2015-06-26 19:10        1619 usr/share/man/man3/Net.SMTP.SSL.3pm.gz
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/test-c/test-c-1.0-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-c: test package C</title>
</head>
<body>
<h1><a href="/packages/summary/test-c.html">test-c</a>: test package C</h1>
<pre>
    2017-05-22 13:27          82 test-c-0.5-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/test-d/test-d-1.0.42590-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-d: test package D</title>
</head>
<body>
<h1><a href="/packages/summary/test-d.html">test-d</a>: test package D</h1>
<pre>
    2017-05-22 18:17          40 test-d-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/noarch/test-e/test-e-1.0-1
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-e: test package E</title>
</head>
<body>
<h1><a href="/packages/summary/test-e.html">test-e</a>: test package E</h1>
<pre>
    2017-05-22 18:17          40 test-d-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/packages.inc
================================================
<p class="center">
21 packages : 
<a href="#a">a</a> - 
<a href="#b">b</a> - 
<a href="#c">c</a> - 
<a href="#k">k</a> - 
<a href="#l">l</a> - 
<a href="#m">m</a> - 
<a href="#o">o</a> - 
<a href="#p">p</a> - 
<a href="#r">r</a> - 
<a href="#s">s</a> - 
<a href="#t">t</a>
</p>
<table class="pkglist">
<tr id="a"><td class="pkgname"><a href="summary/arc.html">arc</a></td><td>The ARC archive utility</td></tr>
<tr id="b"><td><a href="summary/base-cygwin.html">base-cygwin</a></td><td>Initial base installation helper script</td></tr>
<tr id="c"><td><a href="summary/corrupt.html">corrupt</a></td><td>A corrupt package</td></tr>
<tr><td><a href="summary/cygwin.html">cygwin</a></td><td>The UNIX emulation engine</td></tr>
<tr><td><a href="summary/cygwin-devel.html">cygwin-devel</a></td><td>Core development files</td></tr>
<tr id="k"><td><a href="summary/keychain.html">keychain</a></td><td>Key manager for OpenSSH</td></tr>
<tr id="l"><td><a href="summary/libdns_sd-devel.html">libdns_sd-devel</a></td><td>Bonjour Zeroconf implementation</td></tr>
<tr><td><a href="summary/libdns_sd1.html">libdns_sd1</a></td><td>Bonjour Zeroconf implementation</td></tr>
<tr id="m"><td><a href="summary/mDNSResponder.html">mDNSResponder</a></td><td>Bonjour Zeroconf implementation</td></tr>
<tr id="o"><td><a href="summary/obs-a.html">obs-a</a></td><td>obsolete package A</td></tr>
<tr><td><a href="summary/obs-b.html">obs-b</a></td><td>obsolete package B</td></tr>
<tr><td><a href="summary/openssh.html">openssh</a></td><td>The OpenSSH server and client programs</td></tr>
<tr id="p"><td><a href="summary/per-version.html">per-version</a></td><td>Per-version hint test package</td></tr>
<tr><td><a href="summary/per-version-replacement-hint-only.html">per-version-replacement-hint-only</a></td><td>Per-version hint test package</td></tr>
<tr><td><a href="summary/perl-Net-SMTP-SSL.html">perl-Net-SMTP-SSL</a></td><td>Perl distribution Net-SMTP-SSL</td></tr>
<tr id="r"><td><a href="summary/rpm-doc.html">rpm-doc</a></td><td>Obsolete package for RPM package management system manual pages (extra text to so repr is not one line)</td></tr>
<tr id="s"><td><a href="summary/staleversion.html">staleversion</a></td><td>Test package for stale version removal</td></tr>
<tr id="t"><td><a href="summary/test-c.html">test-c</a></td><td>test package C</td></tr>
<tr><td><a href="summary/test-d.html">test-d</a></td><td>test package D</td></tr>
<tr><td><a href="summary/test-e.html">test-e</a></td><td>test package E</td></tr>
<tr><td><a href="summary/testpackage.html">testpackage</a></td><td>A test package (stuff &amp; other stuff)</td></tr>
</table>


================================================
FILE: test/testdata/htdocs.expected/packages_docs.inc
================================================
<div class="multicolumn-list">
<p><a href="doc/keychain/keychain.README">keychain</a></p>
<p><a href="https://x.cygwin.com/">X</a></p>
</div>


================================================
FILE: test/testdata/htdocs.expected/src/arc-src/arc-4.32.7-10-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>arc-src: The ARC archive utility (source)</title>
</head>
<body>
<h1><a href="/packages/summary/arc-src.html">arc-src</a>: The ARC archive utility (source)</h1>
<pre>
    2016-11-24 22:47        1786 cc1BOI4Z
    2016-11-24 18:14        1786 ccbdRcNC
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/corrupt-src/corrupt-2.0.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>corrupt-src: A corrupt package (source)</title>
</head>
<body>
<h1><a href="/packages/summary/corrupt-src.html">corrupt-src</a>: A corrupt package (source)</h1>
<pre>
    2016-06-11 10:34           0 perl-Business-ISBN-2.011-1.src/
    2016-06-11 10:34      364175 perl-Business-ISBN-2.011-1.src/Business-ISBN-2.011.tar.gz
package is corrupted
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/cygwin-src/cygwin-2.2.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>cygwin-src: The UNIX emulation engine (source)</title>
</head>
<body>
<h1><a href="/packages/summary/cygwin-src.html">cygwin-src</a>: The UNIX emulation engine (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/cygwin-src/cygwin-2.2.1-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>cygwin-src: The UNIX emulation engine (source)</title>
</head>
<body>
<h1><a href="/packages/summary/cygwin-src.html">cygwin-src</a>: The UNIX emulation engine (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/cygwin-src/cygwin-2.3.0-0.3-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>cygwin-src: The UNIX emulation engine (source)</title>
</head>
<body>
<h1><a href="/packages/summary/cygwin-src.html">cygwin-src</a>: The UNIX emulation engine (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/keychain-src/keychain-2.6.11-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>keychain-src: Key manager for OpenSSH (source)</title>
</head>
<body>
<h1><a href="/packages/summary/keychain-src.html">keychain-src</a>: Key manager for OpenSSH (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/keychain-src/keychain-2.6.8-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>keychain-src: Key manager for OpenSSH (source)</title>
</head>
<body>
<h1><a href="/packages/summary/keychain-src.html">keychain-src</a>: Key manager for OpenSSH (source)</h1>
<pre>
    2006-11-09 04:59        3051 keychain-2.6.8-1.patch
    2006-11-09 04:59        5621 keychain-2.6.8-1.sh
    2006-11-09 04:59       31531 keychain-2.6.8.tar.bz2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/keychain-src/keychain-2.7.1-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>keychain-src: Key manager for OpenSSH (source)</title>
</head>
<body>
<h1><a href="/packages/summary/keychain-src.html">keychain-src</a>: Key manager for OpenSSH (source)</h1>
<pre>
    2012-10-10 05:40       24455 keychain-2.7.1-1-cygwin.patch
    2012-10-10 05:40         270 keychain-2.7.1-1-cygwin.patch.sig
    2012-10-10 05:40      320093 keychain-2.7.1-1.sh
    2012-10-10 05:40         260 keychain-2.7.1-1.sh.sig
    2012-10-10 05:40       65211 keychain_2.7.1.orig.tar.gz
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/mDNSResponder-src/mDNSResponder-379.32.1-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>mDNSResponder-src: Bonjour Zeroconf implementation (source)</title>
</head>
<body>
<h1><a href="/packages/summary/mDNSResponder-src.html">mDNSResponder-src</a>: Bonjour Zeroconf implementation (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/obs-a-src/obs-a-1.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>obs-a-src: obsolete package A (source)</title>
</head>
<body>
<h1><a href="/packages/summary/obs-a-src.html">obs-a-src</a>: obsolete package A (source)</h1>
<pre>
    2017-05-22 13:04          82 test-a-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/obs-b-src/obs-b-1.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>obs-b-src: obsolete package B (source)</title>
</head>
<body>
<h1><a href="/packages/summary/obs-b-src.html">obs-b-src</a>: obsolete package B (source)</h1>
<pre>
    2017-05-22 13:04          82 test-a-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/openssh-src/openssh-7.2p2-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>openssh-src: The OpenSSH server and client programs (source)</title>
</head>
<body>
<h1><a href="/packages/summary/openssh-src.html">openssh-src</a>: The OpenSSH server and client programs (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/per-version-replacement-hint-only-src/per-version-replacement-hint-only-1.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>per-version-replacement-hint-only-src: Per-version hint test package (source)</title>
</head>
<body>
<h1><a href="/packages/summary/per-version-replacement-hint-only-src.html">per-version-replacement-hint-only-src</a>: Per-version hint test package (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/per-version-src/per-version-4.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>per-version-src: Per-version hint test package (source)</title>
</head>
<body>
<h1><a href="/packages/summary/per-version-src.html">per-version-src</a>: Per-version hint test package (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/per-version-src/per-version-4.8-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>per-version-src: Per-version hint test package (source)</title>
</head>
<body>
<h1><a href="/packages/summary/per-version-src.html">per-version-src</a>: Per-version hint test package (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/perl-Net-SMTP-SSL-src/perl-Net-SMTP-SSL-1.01-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL-src: Perl distribution Net-SMTP-SSL (source)</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL-src.html">perl-Net-SMTP-SSL-src</a>: Perl distribution Net-SMTP-SSL (source)</h1>
<pre>
    2015-06-26 19:10           0 perl-Net-SMTP-SSL-1.03-1.src/
    2015-06-26 19:10        2271 perl-Net-SMTP-SSL-1.03-1.src/Net-SMTP-SSL-1.03.tar.gz
    2015-06-26 19:10         296 perl-Net-SMTP-SSL-1.03-1.src/perl-Net-SMTP-SSL.cygport
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/perl-Net-SMTP-SSL-src/perl-Net-SMTP-SSL-1.02-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL-src: Perl distribution Net-SMTP-SSL (source)</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL-src.html">perl-Net-SMTP-SSL-src</a>: Perl distribution Net-SMTP-SSL (source)</h1>
<pre>
    2015-06-26 19:10           0 perl-Net-SMTP-SSL-1.03-1.src/
    2015-06-26 19:10        2271 perl-Net-SMTP-SSL-1.03-1.src/Net-SMTP-SSL-1.03.tar.gz
    2015-06-26 19:10         296 perl-Net-SMTP-SSL-1.03-1.src/perl-Net-SMTP-SSL.cygport
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/perl-Net-SMTP-SSL-src/perl-Net-SMTP-SSL-1.03-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>perl-Net-SMTP-SSL-src: Perl distribution Net-SMTP-SSL (source)</title>
</head>
<body>
<h1><a href="/packages/summary/perl-Net-SMTP-SSL-src.html">perl-Net-SMTP-SSL-src</a>: Perl distribution Net-SMTP-SSL (source)</h1>
<pre>
    2015-06-26 19:10           0 perl-Net-SMTP-SSL-1.03-1.src/
    2015-06-26 19:10        2271 perl-Net-SMTP-SSL-1.03-1.src/Net-SMTP-SSL-1.03.tar.gz
    2015-06-26 19:10         296 perl-Net-SMTP-SSL-1.03-1.src/perl-Net-SMTP-SSL.cygport
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/rpm-doc-src/rpm-doc-4.1-2-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>rpm-doc-src: Obsolete package for RPM package management system manual pages (extra text to so repr is not one line) (source)</title>
</head>
<body>
<h1><a href="/packages/summary/rpm-doc-src.html">rpm-doc-src</a>: Obsolete package for RPM package management system manual pages (extra text to so repr is not one line) (source)</h1>
<pre>
    2021-05-03 19:35           0 rpm-4.1.tar.gz
    2021-05-03 19:36           0 rpm-4.1-1.patch
    2021-05-03 19:36           0 rpm-4.1-1.sh
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-240-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-242-0-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-243-0-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-250-0-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-251-0-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/staleversion-src/staleversion-260-0-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>staleversion-src: Test package for stale version removal (source)</title>
</head>
<body>
<h1><a href="/packages/summary/staleversion-src.html">staleversion-src</a>: Test package for stale version removal (source)</h1>
<pre>
    2015-10-11 14:45          26 test/test.1
    2015-10-11 14:45          31 test/test.2
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/test-c-src/test-c-1.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-c-src: test package C (source)</title>
</head>
<body>
<h1><a href="/packages/summary/test-c-src.html">test-c-src</a>: test package C (source)</h1>
<pre>
    2017-05-22 13:27          82 test-c-0.5-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/test-d-src/test-d-1.0.42590-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-d-src: test package D (source)</title>
</head>
<body>
<h1><a href="/packages/summary/test-d-src.html">test-d-src</a>: test package D (source)</h1>
<pre>
    2017-05-22 18:17          40 test-d-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/test-e-src/test-e-1.0-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>test-e-src: test package E (source)</title>
</head>
<body>
<h1><a href="/packages/summary/test-e-src.html">test-e-src</a>: test package E (source)</h1>
<pre>
    2017-05-22 18:17          40 test-d-1.0-1.hint
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src/testpackage-src/testpackage-0.1-1-src
================================================
<!DOCTYPE html>
<html>
<head>
<title>testpackage-src: A test package (stuff &amp; other stuff) (source)</title>
</head>
<body>
<h1><a href="/packages/summary/testpackage-src.html">testpackage-src</a>: A test package (stuff &amp; other stuff) (source)</h1>
<pre>
    2016-11-24 22:47        1786 cc1BOI4Z
    2016-11-24 18:14        1786 ccbdRcNC
</pre>
</body>
</html>


================================================
FILE: test/testdata/htdocs.expected/src_packages.inc
================================================
<p class="center">
17 packages : 
<a href="#a">a</a> - 
<a href="#c">c</a> - 
<a href="#k">k</a> - 
<a href="#m">m</a> - 
<a href="#o">o</a> - 
<a href="#p">p</a> - 
<a href="#r">r</a> - 
<a href="#s">s</a> - 
<a href="#t">t</a>
</p>
<table class="pkglist">
<tr id="a"><td class="pkgname"><a href="summary/arc-src.html">arc</a></td><td>The ARC archive utility (source)</td></tr>
<tr id="c"><td><a href="summary/corrupt-src.html">corrupt</a></td><td>A corrupt package (source)</td></tr>
<tr><td><a href="summary/cygwin-src.html">cygwin</a></td><td>The UNIX emulation engine (source)</td></tr>
<tr id="k"><td><a href="summary/keychain-src.html">keychain</a></td><td>Key manager for OpenSSH (source)</td></tr>
<tr id="m"><td><a href="summary/mDNSResponder-src.html">mDNSResponder</a></td><td>Bonjour Zeroconf implementation (source)</td></tr>
<tr id="o"><td><a href="summary/obs-a-src.html">obs-a</a></td><td>obsolete package A (source)</td></tr>
<tr><td><a href="summary/obs-b-src.html">obs-b</a></td><td>obsolete package B (source)</td></tr>
<tr><td><a href="summary/openssh-src.html">openssh</a></td><td>The OpenSSH server and client programs (source)</td></tr>
<tr id="p"><td><a href="summary/per-version-src.html">per-version</a></td><td>Per-version hint test package (source)</td></tr>
<tr><td><a href="summary/per-version-replacement-hint-only-src.html">per-version-replacement-hint-only</a></td><td>Per-version hint test package (source)</td></tr>
<tr><td><a href="summary/perl-Net-SMTP-SSL-src.html">perl-Net-SMTP-SSL</a></td><td>Perl distribution Net-SMTP-SSL (source)</td></tr>
<tr id="r"><td><a href="summary/rpm-doc-src.html">rpm-doc</a></td><td>Obsolete package for RPM package management system manual pages (extra text to so repr is not one line) (source)</td></tr>
<tr id="s"><td><a href="summary/staleversion-src.html">staleversion</a></td><td>Test package for stale version removal (source)</td></tr>
<tr id="t"><td><a href="summary/test-c-src.html">test-c</a></td><td>test package C (source)</td></tr>
<tr><td><a href="summary/test-d-src.html">test-d</a></td><td>test package D (source)</td></tr>
<tr><td><a href="summary/test-e-src.html">test-e</a></td><td>test package E (source)</td></tr>
<tr><td><a href="summary/testpackage-src.html">testpackage</a></td><td>A test package (stuff &amp; other stuff) (source)</td></tr>
</table>


================================================
FILE: test/testdata/htdocs.expected/summary/arc-src.html
================================================
// [OUTLINE - 0 symbols, 34 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/arc.html
================================================
// [OUTLINE - 0 symbols, 33 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/base-cygwin.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/corrupt-src.html
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/corrupt.html
================================================
// [OUTLINE - 0 symbols, 28 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/cygwin-debuginfo.html
================================================
// [OUTLINE - 0 symbols, 33 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/cygwin-devel.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/cygwin-src.html
================================================
// [OUTLINE - 0 symbols, 33 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/cygwin.html
================================================
// [OUTLINE - 0 symbols, 32 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/keychain-src.html
================================================
// [OUTLINE - 0 symbols, 39 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/keychain.html
================================================
// [OUTLINE - 0 symbols, 40 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/libdns_sd-devel.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/libdns_sd1.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/mDNSResponder-src.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/mDNSResponder.html
================================================
// [OUTLINE - 0 symbols, 31 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/obs-a-src.html
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/obs-a.html
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: test/testdata/htdocs.expected/summary/obs-b-src.html
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
[TRUNCATED: Token limit of 60000 reached for remaining files]

