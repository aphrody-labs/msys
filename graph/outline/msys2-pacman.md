# Codebase Digest: msys2-pacman

- Files analyzed: 785
- Total lines: 227217
- Total size: 6.61 MB
- Git branch: `msys2-v6.1.0`
- Git HEAD commit: `612777d1 (pacman-key: disable WKD by default)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-pacman/
├── AUTHORS (1 lines, 50 B, ~14 tokens)
├── COPYING (339 lines, 17.6 KB, ~4.2k tokens)
├── HACKING (178 lines, 4.3 KB, ~1.5k tokens)
├── NEWS (1683 lines, 100.2 KB, ~22.6k tokens)
├── README (725 lines, 26.4 KB, ~6.3k tokens)
├── RELEASE (23 lines, 1.0 KB, ~269 tokens)
├── TRANSLATORS (60 lines, 2.1 KB, ~566 tokens)
├── doc/
│   ├── BUILDINFO.5.asciidoc (79 lines, 1.9 KB, ~529 tokens)
│   ├── Doxyfile.in (342 lines, 11.7 KB, ~3.6k tokens)
│   ├── PKGBUILD-example.txt (27 lines, 670 B, ~208 tokens)
│   ├── PKGBUILD.5.asciidoc (535 lines, 21.7 KB, ~5.7k tokens)
│   ├── alpm-hooks.5.asciidoc (133 lines, 4.2 KB, ~1.1k tokens)
│   ├── asciidoc-override.css (1 lines, 34 B, ~10 tokens)
│   ├── asciidoc.conf (72 lines, 1.7 KB, ~560 tokens)
│   ├── footer.asciidoc (35 lines, 956 B, ~266 tokens)
│   ├── index.asciidoc (257 lines, 7.0 KB, ~2.4k tokens)
│   ├── makepkg-template.1.asciidoc (118 lines, 3.4 KB, ~947 tokens)
│   ├── makepkg.8.asciidoc (370 lines, 11.9 KB, ~3.3k tokens)
│   ├── makepkg.conf.5.asciidoc (304 lines, 12.0 KB, ~3.3k tokens)
│   ├── meson.build (157 lines, 4.1 KB, ~1.3k tokens)
│   ├── pacman-conf.8.asciidoc (67 lines, 1.5 KB, ~434 tokens)
│   ├── pacman-db-upgrade.8.asciidoc (36 lines, 728 B, ~241 tokens)
│   ├── pacman-key.8.asciidoc (151 lines, 4.8 KB, ~1.4k tokens)
│   ├── pacman.8.asciidoc (578 lines, 23.6 KB, ~6.5k tokens)
│   ├── pacman.conf.5.asciidoc (374 lines, 15.1 KB, ~4.0k tokens)
│   ├── repo-add.8.asciidoc (90 lines, 2.8 KB, ~828 tokens)
│   ├── submitting-patches.asciidoc (97 lines, 2.9 KB, ~813 tokens)
│   ├── testpkg.8.asciidoc (20 lines, 284 B, ~95 tokens)
│   ├── translation-help.asciidoc (153 lines, 6.0 KB, ~1.6k tokens)
│   └── vercmp.8.asciidoc (72 lines, 1.4 KB, ~458 tokens)
├── etc/
│   ├── makepkg.conf.d/
│   │   ├── fortran.conf.in (18 lines, 648 B, ~232 tokens)
│   │   └── rust.conf.in (17 lines, 613 B, ~224 tokens)
│   ├── makepkg.conf.in (159 lines, 6.0 KB, ~2.1k tokens)
│   └── pacman.conf.in (77 lines, 2.3 KB, ~611 tokens)
├── lib/
│   └── libalpm/
│       ├── add.c (43 lines, 1.4 KB, ~417 tokens)
│       ├── add.h (4 lines, 96 B, ~32 tokens)
│       ├── alpm.c (11 lines, 424 B, ~122 tokens)
│       ├── alpm.h (49 lines, 2.0 KB, ~488 tokens)
│       ├── alpm_list.c (34 lines, 2.5 KB, ~629 tokens)
│       ├── alpm_list.h (5 lines, 158 B, ~45 tokens)
│       ├── backup.c (11 lines, 450 B, ~127 tokens)
│       ├── backup.h (3 lines, 78 B, ~25 tokens)
│       ├── base64.c (5 lines, 211 B, ~62 tokens)
│       ├── base64.h (2 lines, 56 B, ~18 tokens)
│       ├── be_local.c (81 lines, 4.0 KB, ~1.1k tokens)
│       ├── be_package.c (53 lines, 2.0 KB, ~552 tokens)
│       ├── be_sync.c (45 lines, 1.6 KB, ~464 tokens)
│       ├── conflict.c (36 lines, 1.8 KB, ~471 tokens)
│       ├── conflict.h (4 lines, 93 B, ~32 tokens)
│       ├── db.c (53 lines, 3.1 KB, ~824 tokens)
│       ├── db.h (9 lines, 241 B, ~73 tokens)
│       ├── deps.c (36 lines, 2.1 KB, ~543 tokens)
│       ├── deps.h (5 lines, 112 B, ~39 tokens)
│       ├── diskspace.c (29 lines, 1.2 KB, ~337 tokens)
│       ├── diskspace.h (6 lines, 166 B, ~53 tokens)
│       ├── dload.c (80 lines, 3.6 KB, ~966 tokens)
│       ├── dload.h (5 lines, 140 B, ~41 tokens)
│       ├── error.c (7 lines, 255 B, ~74 tokens)
│       ├── filelist.c (16 lines, 840 B, ~230 tokens)
│       ├── filelist.h (2 lines, 54 B, ~18 tokens)
│       ├── graph.c (6 lines, 186 B, ~57 tokens)
│       ├── graph.h (5 lines, 157 B, ~47 tokens)
│       ├── group.c (10 lines, 290 B, ~91 tokens)
│       ├── group.h (2 lines, 54 B, ~18 tokens)
│       ├── handle.c (108 lines, 8.4 KB, ~2.0k tokens)
│       ├── handle.h (9 lines, 222 B, ~73 tokens)
│       ├── hook.c (56 lines, 2.3 KB, ~599 tokens)
│       ├── hook.h (2 lines, 54 B, ~18 tokens)
│       ├── libarchive-compat.h (12 lines, 599 B, ~149 tokens)
│       ├── log.c (14 lines, 481 B, ~146 tokens)
│       ├── log.h (2 lines, 54 B, ~18 tokens)
│       ├── meson.build (32 lines, 574 B, ~180 tokens)
│       ├── package.c (112 lines, 6.8 KB, ~1.7k tokens)
│       ├── package.h (16 lines, 426 B, ~127 tokens)
│       ├── pkghash.c (14 lines, 896 B, ~226 tokens)
│       ├── pkghash.h (6 lines, 165 B, ~49 tokens)
│       ├── po/
│       │   ├── LINGUAS (45 lines, 191 B, ~74 tokens)
│       │   ├── Makevars (26 lines, 996 B, ~263 tokens)
│       │   ├── POTFILES.in (35 lines, 794 B, ~248 tokens)
│       │   ├── ar.po (1119 lines, 30.7 KB, ~9.3k tokens)
│       │   ├── ast.po (1118 lines, 28.5 KB, ~9.0k tokens)
│       │   ├── az_AZ.po (1123 lines, 31.6 KB, ~9.7k tokens)
│       │   ├── bg.po (1113 lines, 34.5 KB, ~10.0k tokens)
│       │   ├── br.po (1121 lines, 30.0 KB, ~9.6k tokens)
│       │   ├── ca.po (1144 lines, 32.2 KB, ~10.3k tokens)
│       │   ├── cs.po (1123 lines, 30.5 KB, ~9.5k tokens)
│       │   ├── da.po (1114 lines, 29.2 KB, ~9.2k tokens)
│       │   ├── de.po (1137 lines, 31.0 KB, ~9.6k tokens)
│       │   ├── el.po (1126 lines, 35.7 KB, ~10.1k tokens)
│       │   ├── en_GB.po (1110 lines, 29.0 KB, ~9.2k tokens)
│       │   ├── eo.po (1116 lines, 29.3 KB, ~9.2k tokens)
│       │   ├── es.po (1166 lines, 33.1 KB, ~10.3k tokens)
│       │   ├── es_419.po (1142 lines, 29.7 KB, ~9.4k tokens)
│       │   ├── eu.po (1119 lines, 28.6 KB, ~9.0k tokens)
│       │   ├── eu_ES.po (1118 lines, 28.5 KB, ~9.0k tokens)
│       │   ├── fi.po (1123 lines, 28.8 KB, ~9.0k tokens)
│       │   ├── fr.po (1140 lines, 32.6 KB, ~10.1k tokens)
│       │   ├── gl.po (1137 lines, 31.5 KB, ~9.9k tokens)
│       │   ├── hi.po (1105 lines, 38.2 KB, ~10.8k tokens)
│       │   ├── hr.po (1133 lines, 28.6 KB, ~9.0k tokens)
│       │   ├── hu.po (1130 lines, 31.3 KB, ~9.7k tokens)
│       │   ├── id.po (1116 lines, 28.2 KB, ~8.9k tokens)
│       │   ├── it.po (1147 lines, 32.6 KB, ~10.1k tokens)
│       │   ├── ja.po (1117 lines, 33.2 KB, ~9.5k tokens)
│       │   ├── kk.po (1109 lines, 31.9 KB, ~9.3k tokens)
│       │   ├── ko.po (1120 lines, 33.5 KB, ~10.0k tokens)
│       │   ├── libalpm.pot (1099 lines, 21.9 KB, ~7.3k tokens)
│       │   ├── lt.po (1125 lines, 30.8 KB, ~9.5k tokens)
│       │   ├── meson.build (15 lines, 405 B, ~138 tokens)
│       │   ├── nb.po (1113 lines, 29.7 KB, ~9.4k tokens)
│       │   ├── nl.po (1122 lines, 30.2 KB, ~9.4k tokens)
│       │   ├── pl.po (1130 lines, 30.4 KB, ~9.4k tokens)
│       │   ├── pt.po (1127 lines, 29.4 KB, ~9.2k tokens)
│       │   ├── pt_BR.po (1137 lines, 32.1 KB, ~10.0k tokens)
│       │   ├── remove-potcdate.sin (19 lines, 432 B, ~123 tokens)
│       │   ├── ro.po (1138 lines, 31.4 KB, ~9.8k tokens)
│       │   ├── ru.po (1125 lines, 34.1 KB, ~9.8k tokens)
│       │   ├── sk.po (1122 lines, 29.8 KB, ~9.3k tokens)
│       │   ├── sl.po (1128 lines, 29.1 KB, ~9.1k tokens)
│       │   ├── sr.po (1114 lines, 33.9 KB, ~9.9k tokens)
│       │   ├── sr@latin.po (1115 lines, 29.3 KB, ~9.3k tokens)
│       │   ├── sv.po (1126 lines, 30.5 KB, ~9.6k tokens)
│       │   ├── tr.po (1122 lines, 30.2 KB, ~9.4k tokens)
│       │   ├── uk.po (1117 lines, 35.7 KB, ~10.2k tokens)
│       │   ├── zh_CN.po (1123 lines, 29.9 KB, ~9.2k tokens)
│       │   └── zh_TW.po (1116 lines, 29.8 KB, ~9.1k tokens)
│       ├── rawstr.c (6 lines, 276 B, ~80 tokens)
│       ├── remove.c (41 lines, 1.6 KB, ~460 tokens)
│       ├── remove.h (4 lines, 96 B, ~32 tokens)
│       ├── signing.c (37 lines, 2.2 KB, ~586 tokens)
│       ├── signing.h (2 lines, 54 B, ~18 tokens)
│       ├── sync.c (60 lines, 2.7 KB, ~733 tokens)
│       ├── sync.h (2 lines, 54 B, ~18 tokens)
│       ├── trans.c (31 lines, 1.3 KB, ~367 tokens)
│       ├── trans.h (3 lines, 87 B, ~26 tokens)
│       ├── util.c (80 lines, 3.7 KB, ~1.0k tokens)
│       ├── util.h (21 lines, 677 B, ~210 tokens)
│       └── version.c (6 lines, 234 B, ~71 tokens)
├── meson.build (504 lines, 15.8 KB, ~4.5k tokens)
├── meson_options.txt (59 lines, 2.3 KB, ~652 tokens)
├── proto/
│   ├── PKGBUILD-split.proto (77 lines, 1.3 KB, ~404 tokens)
│   ├── PKGBUILD-vcs.proto (78 lines, 2.0 KB, ~628 tokens)
│   ├── PKGBUILD.proto (52 lines, 921 B, ~284 tokens)
│   └── proto.install (35 lines, 689 B, ~194 tokens)
├── scripts/
│   ├── completion/
│   │   ├── bash_completion.in (167 lines, 5.0 KB, ~1.5k tokens)
│   │   └── zsh_completion.in (812 lines, 23.6 KB, ~6.8k tokens)
│   ├── libmakepkg/
│   │   ├── autodep/
│   │   │   ├── library_depends.sh.in (75 lines, 2.3 KB, ~641 tokens)
│   │   │   ├── library_provides.sh.in (56 lines, 1.7 KB, ~495 tokens)
│   │   │   └── meson.build (18 lines, 431 B, ~115 tokens)
│   │   ├── autodep.sh.in (38 lines, 1.1 KB, ~302 tokens)
│   │   ├── buildenv/
│   │   │   ├── buildflags.sh.in (34 lines, 1.1 KB, ~297 tokens)
│   │   │   ├── compiler.sh.in (57 lines, 1.7 KB, ~476 tokens)
│   │   │   ├── debugflags.sh.in (39 lines, 1.5 KB, ~389 tokens)
│   │   │   ├── fortran.sh.in (38 lines, 1.4 KB, ~367 tokens)
│   │   │   ├── lto.sh.in (43 lines, 1.4 KB, ~392 tokens)
│   │   │   ├── makeflags.sh.in (35 lines, 1.1 KB, ~301 tokens)
│   │   │   ├── meson.build (22 lines, 493 B, ~141 tokens)
│   │   │   └── rust.sh.in (37 lines, 1.3 KB, ~357 tokens)
│   │   ├── buildenv.sh.in (46 lines, 1.4 KB, ~367 tokens)
│   │   ├── executable/
│   │   │   ├── ccache.sh.in (38 lines, 1.3 KB, ~340 tokens)
│   │   │   ├── checksum.sh.in (43 lines, 1.4 KB, ~376 tokens)
│   │   │   ├── debugedit.sh.in (38 lines, 1.3 KB, ~346 tokens)
│   │   │   ├── distcc.sh.in (38 lines, 1.3 KB, ~340 tokens)
│   │   │   ├── fakeroot.sh.in (37 lines, 1.2 KB, ~324 tokens)
│   │   │   ├── gpg.sh.in (49 lines, 1.5 KB, ~421 tokens)
│   │   │   ├── gzip.sh.in (38 lines, 1.3 KB, ~339 tokens)
│   │   │   ├── meson.build (24 lines, 516 B, ~153 tokens)
│   │   │   ├── pacman.sh.in (37 lines, 1.2 KB, ~333 tokens)
│   │   │   ├── strip.sh.in (38 lines, 1.3 KB, ~338 tokens)
│   │   │   ├── sudo.sh.in (36 lines, 1.3 KB, ~347 tokens)
│   │   │   └── vcs.sh.in (104 lines, 2.9 KB, ~826 tokens)
│   │   ├── executable.sh.in (42 lines, 1.2 KB, ~315 tokens)
│   │   ├── integrity/
│   │   │   ├── generate_checksum.sh.in (113 lines, 3.0 KB, ~867 tokens)
│   │   │   ├── generate_signature.sh.in (78 lines, 2.1 KB, ~614 tokens)
│   │   │   ├── meson.build (20 lines, 492 B, ~132 tokens)
│   │   │   ├── verify_checksum.sh.in (130 lines, 3.7 KB, ~1.1k tokens)
│   │   │   └── verify_signature.sh.in (288 lines, 7.1 KB, ~2.1k tokens)
│   │   ├── integrity.sh.in (48 lines, 1.5 KB, ~408 tokens)
│   │   ├── lint_config/
│   │   │   ├── ext.sh.in (45 lines, 1.4 KB, ~391 tokens)
│   │   │   ├── meson.build (20 lines, 461 B, ~128 tokens)
│   │   │   ├── paths.sh.in (46 lines, 1.4 KB, ~381 tokens)
│   │   │   ├── source_date_epoch.sh.in (37 lines, 1.3 KB, ~339 tokens)
│   │   │   └── variable.sh.in (70 lines, 2.3 KB, ~616 tokens)
│   │   ├── lint_config.sh.in (46 lines, 1.3 KB, ~345 tokens)
│   │   ├── lint_package/
│   │   │   ├── build_references.sh.in (49 lines, 1.8 KB, ~492 tokens)
│   │   │   ├── dotfiles.sh.in (45 lines, 1.3 KB, ~365 tokens)
│   │   │   ├── file_names.sh.in (42 lines, 1.3 KB, ~365 tokens)
│   │   │   ├── meson.build (20 lines, 477 B, ~130 tokens)
│   │   │   └── missing_backup.sh.in (39 lines, 1.3 KB, ~336 tokens)
│   │   ├── lint_package.sh.in (48 lines, 1.3 KB, ~362 tokens)
│   │   ├── lint_pkgbuild/
│   │   │   ├── arch.sh.in (69 lines, 2.0 KB, ~582 tokens)
│   │   │   ├── arch_specific.sh.in (82 lines, 2.6 KB, ~746 tokens)
│   │   │   ├── backup.sh.in (51 lines, 1.5 KB, ~417 tokens)
│   │   │   ├── changelog.sh.in (51 lines, 1.6 KB, ~431 tokens)
│   │   │   ├── checkdepends.sh.in (56 lines, 1.8 KB, ~477 tokens)
│   │   │   ├── conflicts.sh.in (56 lines, 1.7 KB, ~471 tokens)
│   │   │   ├── depends.sh.in (59 lines, 1.8 KB, ~500 tokens)
│   │   │   ├── epoch.sh.in (43 lines, 1.3 KB, ~350 tokens)
│   │   │   ├── fullpkgver.sh.in (58 lines, 1.9 KB, ~530 tokens)
│   │   │   ├── install.sh.in (50 lines, 1.6 KB, ~426 tokens)
│   │   │   ├── makedepends.sh.in (56 lines, 1.8 KB, ~475 tokens)
│   │   │   ├── meson.build (40 lines, 880 B, ~273 tokens)
│   │   │   ├── optdepends.sh.in (54 lines, 1.8 KB, ~474 tokens)
│   │   │   ├── options.sh.in (57 lines, 1.7 KB, ~469 tokens)
│   │   │   ├── package_function.sh.in (58 lines, 1.9 KB, ~526 tokens)
│   │   │   ├── package_function_variable.sh.in (62 lines, 2.0 KB, ~548 tokens)
│   │   │   ├── pkgbase.sh.in (39 lines, 1.2 KB, ~317 tokens)
│   │   │   ├── pkglist.sh.in (44 lines, 1.3 KB, ~357 tokens)
│   │   │   ├── pkgname.sh.in (74 lines, 2.0 KB, ~593 tokens)
│   │   │   ├── pkgrel.sh.in (47 lines, 1.4 KB, ~403 tokens)
│   │   │   ├── pkgver.sh.in (53 lines, 1.6 KB, ~445 tokens)
│   │   │   ├── provides.sh.in (61 lines, 1.8 KB, ~499 tokens)
│   │   │   ├── source.sh.in (39 lines, 1.2 KB, ~342 tokens)
│   │   │   ├── util.sh.in (41 lines, 1.2 KB, ~349 tokens)
│   │   │   └── variable.sh.in (115 lines, 2.9 KB, ~855 tokens)
│   │   ├── lint_pkgbuild.sh.in (46 lines, 1.2 KB, ~331 tokens)
│   │   ├── meson.build (29 lines, 1.1 KB, ~318 tokens)
│   │   ├── reproducible/
│   │   │   ├── meson.build (17 lines, 399 B, ~106 tokens)
│   │   │   └── python.sh.in (29 lines, 1.0 KB, ~263 tokens)
│   │   ├── reproducible.sh.in (29 lines, 1.0 KB, ~266 tokens)
│   │   ├── source/
│   │   │   ├── bzr.sh.in (137 lines, 3.7 KB, ~1.1k tokens)
│   │   │   ├── file.sh.in (168 lines, 4.2 KB, ~1.3k tokens)
│   │   │   ├── fossil.sh.in (126 lines, 3.6 KB, ~1.1k tokens)
│   │   │   ├── git.sh.in (164 lines, 4.5 KB, ~1.4k tokens)
│   │   │   ├── hg.sh.in (140 lines, 3.7 KB, ~1.2k tokens)
│   │   │   ├── local.sh.in (42 lines, 1.4 KB, ~373 tokens)
│   │   │   ├── meson.build (23 lines, 485 B, ~145 tokens)
│   │   │   └── svn.sh.in (98 lines, 2.7 KB, ~816 tokens)
│   │   ├── source.sh.in (85 lines, 2.0 KB, ~558 tokens)
│   │   ├── srcinfo.sh.in (133 lines, 3.6 KB, ~981 tokens)
│   │   ├── tidy/
│   │   │   ├── docs.sh.in (37 lines, 1.2 KB, ~335 tokens)
│   │   │   ├── emptydirs.sh.in (39 lines, 1.3 KB, ~363 tokens)
│   │   │   ├── libtool.sh.in (38 lines, 1.2 KB, ~341 tokens)
│   │   │   ├── meson.build (23 lines, 503 B, ~147 tokens)
│   │   │   ├── purge.sh.in (45 lines, 1.4 KB, ~392 tokens)
│   │   │   ├── staticlibs.sh.in (43 lines, 1.4 KB, ~397 tokens)
│   │   │   ├── strip.sh.in (233 lines, 8.0 KB, ~2.4k tokens)
│   │   │   └── zipman.sh.in (61 lines, 1.9 KB, ~581 tokens)
│   │   ├── tidy.sh.in (52 lines, 1.4 KB, ~377 tokens)
│   │   ├── util/
│   │   │   ├── compress.sh.in (80 lines, 2.5 KB, ~743 tokens)
│   │   │   ├── config.sh.in (81 lines, 2.7 KB, ~734 tokens)
│   │   │   ├── dirsize.sh.in (41 lines, 1.3 KB, ~364 tokens)
│   │   │   ├── error.sh.in (41 lines, 1.3 KB, ~326 tokens)
│   │   │   ├── meson.build (27 lines, 577 B, ~175 tokens)
│   │   │   ├── message.sh.in (85 lines, 2.3 KB, ~715 tokens)
│   │   │   ├── option.sh.in (113 lines, 2.6 KB, ~737 tokens)
│   │   │   ├── parseopts.sh.in (205 lines, 5.4 KB, ~1.6k tokens)
│   │   │   ├── pkgbuild.sh.in (272 lines, 6.3 KB, ~1.9k tokens)
│   │   │   ├── schema.sh.in (49 lines, 1.9 KB, ~457 tokens)
│   │   │   ├── source.sh.in (176 lines, 4.0 KB, ~1.2k tokens)
│   │   │   └── util.sh.in (124 lines, 2.8 KB, ~842 tokens)
│   │   ├── util.sh.in (28 lines, 986 B, ~259 tokens)
│   │   └── utils_fixed_path.sh.in (34 lines, 1.0 KB, ~248 tokens)
│   ├── libmakepkg.pc.in (6 lines, 156 B, ~40 tokens)
│   ├── makepkg-template.pl.in (214 lines, 6.3 KB, ~1.9k tokens)
│   ├── makepkg.sh.in (1378 lines, 38.3 KB, ~11.4k tokens)
│   ├── meson.build (92 lines, 2.4 KB, ~648 tokens)
│   ├── pacman-db-upgrade.sh.in (252 lines, 6.8 KB, ~2.1k tokens)
│   ├── pacman-key.sh.in (777 lines, 22.9 KB, ~7.0k tokens)
│   ├── po/
│   │   ├── LINGUAS (41 lines, 178 B, ~68 tokens)
│   │   ├── Makevars (24 lines, 897 B, ~223 tokens)
│   │   ├── POTFILES.in (67 lines, 2.7 KB, ~738 tokens)
│   │   ├── az_AZ.po (1610 lines, 56.7 KB, ~16.1k tokens)
│   │   ├── bg.po (1559 lines, 62.8 KB, ~16.9k tokens)
│   │   ├── br.po (1579 lines, 53.1 KB, ~15.9k tokens)
│   │   ├── ca.po (1645 lines, 56.5 KB, ~16.8k tokens)
│   │   ├── cs.po (1583 lines, 54.7 KB, ~15.7k tokens)
│   │   ├── da.po (1577 lines, 53.3 KB, ~15.6k tokens)
│   │   ├── de.po (1674 lines, 57.4 KB, ~16.5k tokens)
│   │   ├── el.po (1596 lines, 64.9 KB, ~17.2k tokens)
│   │   ├── en_GB.po (1567 lines, 52.6 KB, ~15.5k tokens)
│   │   ├── eo.po (1579 lines, 52.5 KB, ~15.3k tokens)
│   │   ├── es.po (1653 lines, 57.7 KB, ~16.8k tokens)
│   │   ├── es_419.po (1632 lines, 54.7 KB, ~15.9k tokens)
│   │   ├── eu.po (1594 lines, 52.6 KB, ~15.3k tokens)
│   │   ├── eu_ES.po (1593 lines, 52.5 KB, ~15.3k tokens)
│   │   ├── fi.po (1578 lines, 51.7 KB, ~14.9k tokens)
│   │   ├── fr.po (1668 lines, 57.9 KB, ~16.8k tokens)
│   │   ├── gl.po (1642 lines, 55.5 KB, ~16.2k tokens)
│   │   ├── hi.po (1546 lines, 71.3 KB, ~18.7k tokens)
│   │   ├── hu.po (1611 lines, 56.0 KB, ~16.0k tokens)
│   │   ├── id.po (1567 lines, 51.7 KB, ~15.1k tokens)
│   │   ├── it.po (1619 lines, 56.7 KB, ~16.5k tokens)
│   │   ├── ja.po (1579 lines, 58.7 KB, ~15.7k tokens)
│   │   ├── ko.po (1571 lines, 58.2 KB, ~16.2k tokens)
│   │   ├── lt.po (1603 lines, 55.2 KB, ~15.9k tokens)
│   │   ├── meson.build (15 lines, 422 B, ~143 tokens)
│   │   ├── nb.po (1575 lines, 53.0 KB, ~15.5k tokens)
│   │   ├── nl.po (1600 lines, 54.2 KB, ~15.8k tokens)
│   │   ├── pacman-scripts.pot (1524 lines, 38.3 KB, ~11.8k tokens)
│   │   ├── pl.po (1607 lines, 55.9 KB, ~16.1k tokens)
│   │   ├── pt.po (1626 lines, 54.6 KB, ~16.0k tokens)
│   │   ├── pt_BR.po (1618 lines, 56.6 KB, ~16.4k tokens)
│   │   ├── remove-potcdate.sin (19 lines, 432 B, ~123 tokens)
│   │   ├── ro.po (1628 lines, 56.0 KB, ~16.3k tokens)
│   │   ├── ru.po (1596 lines, 62.4 KB, ~16.8k tokens)
│   │   ├── sk.po (1574 lines, 53.8 KB, ~15.5k tokens)
│   │   ├── sl.po (1571 lines, 49.6 KB, ~14.7k tokens)
│   │   ├── sr.po (1571 lines, 60.4 KB, ~16.3k tokens)
│   │   ├── sr@latin.po (1573 lines, 52.2 KB, ~15.2k tokens)
│   │   ├── sv.po (1603 lines, 54.9 KB, ~15.9k tokens)
│   │   ├── tr.po (1600 lines, 55.4 KB, ~15.8k tokens)
│   │   ├── uk.po (1613 lines, 65.3 KB, ~17.4k tokens)
│   │   ├── zh_CN.po (1553 lines, 52.8 KB, ~15.0k tokens)
│   │   └── zh_TW.po (1554 lines, 52.9 KB, ~14.9k tokens)
│   ├── repo-add.sh.in (724 lines, 19.0 KB, ~5.8k tokens)
│   └── wrapper.sh.in (23 lines, 935 B, ~248 tokens)
├── src/
│   ├── common/
│   │   ├── ini.c (8 lines, 251 B, ~81 tokens)
│   │   ├── ini.h (1 lines, 35 B, ~11 tokens)
│   │   ├── meson.build (4 lines, 87 B, ~29 tokens)
│   │   ├── util-common.c (17 lines, 710 B, ~215 tokens)
│   │   └── util-common.h (4 lines, 116 B, ~38 tokens)
│   ├── pacman/
│   │   ├── callback.c (64 lines, 3.0 KB, ~798 tokens)
│   │   ├── callback.h (4 lines, 112 B, ~38 tokens)
│   │   ├── check.c (33 lines, 1.3 KB, ~365 tokens)
│   │   ├── check.h (2 lines, 54 B, ~18 tokens)
│   │   ├── conf.c (59 lines, 2.8 KB, ~803 tokens)
│   │   ├── conf.h (5 lines, 151 B, ~44 tokens)
│   │   ├── database.c (30 lines, 1.0 KB, ~293 tokens)
│   │   ├── deptest.c (7 lines, 191 B, ~61 tokens)
│   │   ├── files.c (22 lines, 1.0 KB, ~281 tokens)
│   │   ├── meson.build (23 lines, 379 B, ~119 tokens)
│   │   ├── package.c (25 lines, 1.0 KB, ~293 tokens)
│   │   ├── package.h (2 lines, 54 B, ~18 tokens)
│   │   ├── pacman-conf.c (22 lines, 1.1 KB, ~314 tokens)
│   │   ├── pacman.c (49 lines, 2.0 KB, ~596 tokens)
│   │   ├── pacman.h (2 lines, 59 B, ~18 tokens)
│   │   ├── po/
│   │   │   ├── LINGUAS (44 lines, 188 B, ~72 tokens)
│   │   │   ├── Makevars (26 lines, 994 B, ~263 tokens)
│   │   │   ├── POTFILES.in (26 lines, 575 B, ~176 tokens)
│   │   │   ├── ar.po (1961 lines, 51.7 KB, ~15.8k tokens)
│   │   │   ├── ast.po (1944 lines, 47.9 KB, ~15.3k tokens)
│   │   │   ├── az_AZ.po (1977 lines, 52.8 KB, ~16.3k tokens)
│   │   │   ├── bg.po (1942 lines, 57.8 KB, ~16.9k tokens)
│   │   │   ├── br.po (1980 lines, 49.2 KB, ~15.9k tokens)
│   │   │   ├── ca.po (2017 lines, 52.9 KB, ~16.9k tokens)
│   │   │   ├── cs.po (1996 lines, 52.6 KB, ~16.4k tokens)
│   │   │   ├── da.po (1964 lines, 49.8 KB, ~15.7k tokens)
│   │   │   ├── de.po (2037 lines, 54.4 KB, ~16.7k tokens)
│   │   │   ├── el.po (1980 lines, 59.8 KB, ~17.2k tokens)
│   │   │   ├── en_GB.po (1943 lines, 49.0 KB, ~15.6k tokens)
│   │   │   ├── eo.po (1968 lines, 49.6 KB, ~15.7k tokens)
│   │   │   ├── es.po (2074 lines, 55.2 KB, ~17.3k tokens)
│   │   │   ├── es_419.po (2034 lines, 51.4 KB, ~16.1k tokens)
│   │   │   ├── eu.po (1973 lines, 48.4 KB, ~15.2k tokens)
│   │   │   ├── eu_ES.po (1972 lines, 48.3 KB, ~15.2k tokens)
│   │   │   ├── fi.po (1962 lines, 48.6 KB, ~15.2k tokens)
│   │   │   ├── fr.po (2049 lines, 55.4 KB, ~17.2k tokens)
│   │   │   ├── gl.po (2020 lines, 52.2 KB, ~16.3k tokens)
│   │   │   ├── hi.po (1914 lines, 63.3 KB, ~18.1k tokens)
│   │   │   ├── hr.po (2083 lines, 49.0 KB, ~15.7k tokens)
│   │   │   ├── hu.po (1990 lines, 52.4 KB, ~16.2k tokens)
│   │   │   ├── id.po (1942 lines, 49.3 KB, ~15.7k tokens)
│   │   │   ├── it.po (2028 lines, 53.9 KB, ~16.8k tokens)
│   │   │   ├── ja.po (1977 lines, 54.9 KB, ~16.0k tokens)
│   │   │   ├── ko.po (1948 lines, 53.6 KB, ~16.3k tokens)
│   │   │   ├── lt.po (2004 lines, 52.7 KB, ~16.4k tokens)
│   │   │   ├── meson.build (15 lines, 404 B, ~138 tokens)
│   │   │   ├── nb.po (1958 lines, 49.7 KB, ~15.8k tokens)
│   │   │   ├── nl.po (1997 lines, 51.6 KB, ~16.2k tokens)
│   │   │   ├── pacman.pot (1872 lines, 35.9 KB, ~12.0k tokens)
│   │   │   ├── pl.po (1991 lines, 52.1 KB, ~16.2k tokens)
│   │   │   ├── pt.po (2003 lines, 49.9 KB, ~15.7k tokens)
│   │   │   ├── pt_BR.po (2022 lines, 53.5 KB, ~16.8k tokens)
│   │   │   ├── remove-potcdate.sin (19 lines, 432 B, ~123 tokens)
│   │   │   ├── ro.po (2010 lines, 53.1 KB, ~16.6k tokens)
│   │   │   ├── ru.po (1966 lines, 56.3 KB, ~16.5k tokens)
│   │   │   ├── sk.po (1995 lines, 52.4 KB, ~16.3k tokens)
│   │   │   ├── sl.po (1990 lines, 49.3 KB, ~15.6k tokens)
│   │   │   ├── sr.po (1966 lines, 56.5 KB, ~16.5k tokens)
│   │   │   ├── sr@latin.po (1967 lines, 49.0 KB, ~15.5k tokens)
│   │   │   ├── sv.po (1986 lines, 51.5 KB, ~16.2k tokens)
│   │   │   ├── tr.po (1974 lines, 51.6 KB, ~16.1k tokens)
│   │   │   ├── uk.po (2004 lines, 61.7 KB, ~17.7k tokens)
│   │   │   ├── zh_CN.po (1921 lines, 49.7 KB, ~15.4k tokens)
│   │   │   └── zh_TW.po (1916 lines, 49.6 KB, ~15.3k tokens)
│   │   ├── query.c (28 lines, 1.1 KB, ~313 tokens)
│   │   ├── remove.c (12 lines, 387 B, ~118 tokens)
│   │   ├── sighandler.c (23 lines, 817 B, ~230 tokens)
│   │   ├── sighandler.h (1 lines, 35 B, ~11 tokens)
│   │   ├── sync.c (44 lines, 1.8 KB, ~519 tokens)
│   │   ├── upgrade.c (11 lines, 327 B, ~101 tokens)
│   │   ├── util.c (99 lines, 5.0 KB, ~1.4k tokens)
│   │   └── util.h (8 lines, 257 B, ~80 tokens)
│   └── util/
│       ├── meson.build (2 lines, 72 B, ~20 tokens)
│       ├── testpkg.c (7 lines, 261 B, ~86 tokens)
│       └── vercmp.c (6 lines, 191 B, ~63 tokens)
├── test/
│   ├── pacman/
│   │   ├── ChangeLog (29 lines, 994 B, ~266 tokens)
│   │   ├── README (342 lines, 9.6 KB, ~2.7k tokens)
│   │   ├── TODO (8 lines, 126 B, ~38 tokens)
│   │   ├── meson.build (378 lines, 9.9 KB, ~3.2k tokens)
│   │   ├── pactest.py (19 lines, 500 B, ~153 tokens)
│   │   ├── pmdb.py (18 lines, 519 B, ~164 tokens)
│   │   ├── pmenv.py (9 lines, 258 B, ~84 tokens)
│   │   ├── pmfile.py (12 lines, 384 B, ~123 tokens)
│   │   ├── pmpkg.py (18 lines, 615 B, ~192 tokens)
│   │   ├── pmrule.py (10 lines, 273 B, ~86 tokens)
│   │   ├── pmserve.py (14 lines, 595 B, ~166 tokens)
│   │   ├── pmtest.py (39 lines, 1.2 KB, ~374 tokens)
│   │   ├── tap.py (8 lines, 283 B, ~97 tokens)
│   │   ├── tests/
│   │   │   ├── TESTS (326 lines, 13.5 KB, ~4.0k tokens)
│   │   │   ├── backup001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── cache-server-basic.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── clean001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── clean002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── clean003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── clean004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── clean005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── config001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── config002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── database001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── database002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── database010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── database011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── database012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── dbonly-extracted-files.py (3 lines, 68 B, ~21 tokens)
│   │   │   ├── depconflict100.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── depconflict110.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── depconflict111.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── depconflict120.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── dependency-cycle-fixed-by-upgrade.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── deprange001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── deptest001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── dummy001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── epoch012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── file-conflict-with-installed-pkg.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict006.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict007.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict008.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict009.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict013.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict015.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict016.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict017.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict022.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict023.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict024.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict025.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict030.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict031.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── fileconflict032.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-abortonfail.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-description-reused.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-exec-reused.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-exec-with-arguments.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-file-change-packages.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-file-remove-trigger-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-file-upgrade-nomatch.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-invalid-trigger.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-pkg-install-trigger-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-pkg-postinstall-trigger-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-pkg-remove-trigger-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-pkg-upgrade-trigger-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-target-list.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-type-reused.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-upgrade-trigger-no-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── hook-when-reused.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore006.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore007.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── ignore008.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── mode001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── mode002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── mode003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── multiple-architectures01.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── multiple-architectures02.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── noupgrade-inverted.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── overwrite-files-match-negated.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── overwrite-files-match.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── overwrite-files-nonmatch.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── pacman001.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pacman002.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pacman003.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pacman004.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pacman005.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pkg-meta-invalid-name-file.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pkg-meta-invalid-name-local.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── pkg-meta-invalid-name-sync.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── provision001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── provision022.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query006.py (2 lines, 49 B, ~15 tokens)
│   │   │   ├── query007.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── query012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── querycheck001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── querycheck002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── querycheck_fast_file_type.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── reason001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove-assumeinstalled.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove-directory-replaced-with-symlink.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove-optdepend-of-installed-package.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove-recursive-cycle.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove001.py (1 lines, 34 B, ~10 tokens)
│   │   │   ├── remove002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove030.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove031.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove040.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove041.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove042.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove043.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove044.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove045.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove047.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove049.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove050.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove051.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove052.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove060.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove070.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── remove071.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace-and-upgrade-package.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace100.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace101.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace102.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace103.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace104.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── replace110.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── scriptlet-signal-handling.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── scriptlet-signal-reset.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── scriptlet001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── scriptlet002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sign001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sign002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── skip-remove-with-glob-chars.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── smoke001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── smoke002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── smoke003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── smoke004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink-replace-with-dir.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── symlink021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-failover-404-with-body.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-install-assumeinstalled.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion01.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion02.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion03.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion04.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion05.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-nodepversion06.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-sysupgrade-print-replaced-packages.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-update-assumeinstalled.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync-update-package-removing-required-provides.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync009.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync012.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync022.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync023.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync024.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync030.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync031.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync040.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync041.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync042.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync043.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync044.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync045.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync046.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync050.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync051.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync052.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync100.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1000.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1008.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync101.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync102.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync103.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync104.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync110.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1100.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1101.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1102.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1103.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1104.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync1105.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync120.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync130.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync131.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync132.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync133.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync134.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync135.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync136.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync137.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync138.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync139.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync140.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync141.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync150.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync200.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync300.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync306.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync400.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync401.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync402.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync403.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync404.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync405.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync406.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync407.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync500.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync501.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync502.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync503.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync600.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync700.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync701.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync702.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync890.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync891.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync892.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync893.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync895.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync896.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync897.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync898.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync899.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync900.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync901.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync990.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync992.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync993.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── sync999.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── trans001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── type001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── unresolvable001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade-download-404.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade-download-pkg-and-sig-with-filename.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade-download-pkg-and-sig-without-filename.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade-download-with-xfercommand.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade001.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade002.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade003.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade004.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade005.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade006.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade010.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade011.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade013.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade020.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade021.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade022.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade023.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade024.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade025.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade026.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade027.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade028.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade029.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade030.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade031.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade032.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade040.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade041.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade042.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade043.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade045.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade050.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade051.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade052.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade053.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade054.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade055.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade056.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade057.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade058.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade059.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade060.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade061.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade070.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade071.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade072.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade073.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade074.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade075.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade076.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade077.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade078.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade080.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade081.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade082.py (2 lines, 48 B, ~15 tokens)
│   │   │   ├── upgrade083.py (2 lines, 48 B, ~15 tokens)
│   │   │   ├── upgrade084.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade090.py (1 lines, 35 B, ~11 tokens)
│   │   │   ├── upgrade100.py (1 lines, 35 B, ~11 tokens)
│   │   │   └── xfercommand001.py (1 lines, 35 B, ~11 tokens)
│   │   └── util.py (15 lines, 504 B, ~158 tokens)
│   ├── scripts/
│   │   ├── makepkg-template-tests/
│   │   │   ├── compose-multiple-template-dirs/
│   │   │   │   ├── PKGBUILD (5 lines, 106 B, ~31 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   └── package/
│   │   │   │   │       └── package-1.template (1 lines, 13 B, ~5 tokens)
│   │   │   │   └── testcase-config (18 lines, 404 B, ~123 tokens)
│   │   │   ├── invalid-key/
│   │   │   │   ├── PKGBUILD (1 lines, 30 B, ~10 tokens)
│   │   │   │   └── testcase-config (11 lines, 297 B, ~89 tokens)
│   │   │   ├── invalid-template-line-missing-name/
│   │   │   │   ├── PKGBUILD (1 lines, 18 B, ~5 tokens)
│   │   │   │   └── testcase-config (11 lines, 333 B, ~95 tokens)
│   │   │   ├── invalid-template-line-unknown-marker/
│   │   │   │   ├── PKGBUILD (9 lines, 99 B, ~31 tokens)
│   │   │   │   └── testcase-config (11 lines, 327 B, ~94 tokens)
│   │   │   ├── keep-old-version/
│   │   │   │   ├── PKGBUILD (15 lines, 257 B, ~77 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   ├── perl-bla-1.2.template (1 lines, 8 B, ~3 tokens)
│   │   │   │   │   ├── perl-module-1.0.template (6 lines, 120 B, ~33 tokens)
│   │   │   │   │   └── perl-module-1.1.template (7 lines, 151 B, ~42 tokens)
│   │   │   │   └── testcase-config (29 lines, 603 B, ~184 tokens)
│   │   │   ├── last-template-dir-has-precedece/
│   │   │   │   ├── PKGBUILD (4 lines, 71 B, ~22 tokens)
│   │   │   │   ├── PKGBUILD.expanded (6 lines, 111 B, ~33 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   ├── first/
│   │   │   │   │   │   └── perl-module-1.0.template (1 lines, 27 B, ~6 tokens)
│   │   │   │   │   └── last/
│   │   │   │   │       └── perl-module-1.0.template (1 lines, 24 B, ~6 tokens)
│   │   │   │   └── testcase-config (15 lines, 350 B, ~105 tokens)
│   │   │   ├── missing-template-file/
│   │   │   │   ├── PKGBUILD (7 lines, 99 B, ~32 tokens)
│   │   │   │   └── testcase-config (14 lines, 349 B, ~104 tokens)
│   │   │   ├── missing-template-symlink/
│   │   │   │   ├── PKGBUILD (7 lines, 86 B, ~27 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   └── perl-module-1.0.template (1 lines, 28 B, ~7 tokens)
│   │   │   │   └── testcase-config (9 lines, 189 B, ~56 tokens)
│   │   │   ├── name-charset-invalid/
│   │   │   │   ├── PKGBUILD (8 lines, 91 B, ~28 tokens)
│   │   │   │   └── testcase-config (10 lines, 275 B, ~85 tokens)
│   │   │   ├── name-charset-valid/
│   │   │   │   ├── PKGBUILD (8 lines, 96 B, ~32 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   └── foo@-_.+a-1.template (1 lines, 11 B, ~3 tokens)
│   │   │   │   └── testcase-config (19 lines, 320 B, ~108 tokens)
│   │   │   ├── template-without-version/
│   │   │   │   ├── PKGBUILD (8 lines, 111 B, ~32 tokens)
│   │   │   │   ├── templates/
│   │   │   │   │   └── template-without_version.template (0 lines, 0 B, ~0 tokens)
│   │   │   │   └── testcase-config (9 lines, 263 B, ~74 tokens)
│   │   │   ├── testcase-config-template (9 lines, 195 B, ~60 tokens)
│   │   │   └── update-version-with-newest-option/
│   │   │       ├── PKGBUILD (7 lines, 98 B, ~31 tokens)
│   │   │       ├── templates/
│   │   │       │   ├── perl-bla-1.2.template (1 lines, 8 B, ~3 tokens)
│   │   │       │   ├── perl-module-1.0.template (6 lines, 120 B, ~33 tokens)
│   │   │       │   └── perl-module-1.1.template (7 lines, 151 B, ~42 tokens)
│   │   │       └── testcase-config (29 lines, 571 B, ~178 tokens)
│   │   ├── makepkg-template_test.sh (2 lines, 58 B, ~19 tokens)
│   │   ├── meson.build (14 lines, 250 B, ~67 tokens)
│   │   ├── pacman-db-upgrade-v9.py (1 lines, 35 B, ~11 tokens)
│   │   └── parseopts_test.sh (2 lines, 60 B, ~19 tokens)
│   ├── tap.sh (14 lines, 368 B, ~119 tokens)
│   └── util/
│       ├── meson.build (7 lines, 159 B, ~43 tokens)
│       └── vercmptest.sh (2 lines, 62 B, ~19 tokens)
└── valgrind.supp (179 lines, 3.2 KB, ~879 tokens)
```

## Source Files

================================================
FILE: AUTHORS
================================================
Use `git shortlog -s` for a list of contributors.


================================================
FILE: COPYING
================================================
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
FILE: HACKING
================================================
Pacman - Contributing
=====================

This file is meant to give you a brief overview of coding style and other
concerns when hacking on pacman. If you are interested in contributing, please
read link:submitting-patches.html[submitting-patches] and
link:translation-help.html[translation-help] as well.

Coding Style
------------

1.  All code should be indented with tabs. (Ignore the use of only spaces in
    this file.) A tab size of two spaces is used when calculating line widths,
    which should be a maximum of 80 characters. An EditorConfig file is used
    to set this project-wide default.

2.  When opening new blocks such as 'while', 'if', or 'for', leave the opening
    brace on the same line as the beginning of the codeblock. The closing brace
    gets its own line (the only exception being 'else'). Do not use extra
    spaces around the parentheses of the block. ALWAYS use opening and closing
    braces, even if it's just a one-line block. This reduces future error when
    blocks are expanded beyond one line.
+
[source,C]
-------------------------------------------
for(lp = list; lp; lp = lp->next) {
  newlist = _alpm_list_add(newlist, strdup(lp->data));
}

while(it) {
  ptr = it->next;
  if(fn) {
    fn(it->data);
  } else {
    return 1;
  }
  free(it);
  it = ptr;
}
-------------------------------------------

3.  When declaring a new function, put the opening and closing braces on their
    own line. Also, when declaring a pointer, do not put a space between the
    asterisk and the variable name.
+
[source,C]
-------------------------------------------
alpm_list_t *alpm_list_add(alpm_list_t *list, void *data)
{
  alpm_list_t *ptr, *lp;

  ptr = list;
  if(ptr == NULL) {
  ...
  }
  ...
}
-------------------------------------------

4.  Comments should be ANSI-C89 compliant. That means no `// Comment` style;
    use only `/* Comment */` style.

    /* This is a comment */
       NOT
    // This is a comment

5.  Return statements should *not* be written like function calls.

    return 0;
       NOT
    return(0);

6.  When using strcmp() (or any function that returns 0 on success) in a
    conditional statement, use != 0 or == 0 and not the negation (!) operator.
    It reads much cleaner for humans (using a negative to check for success is
    confusing) and the compiler will treat it correctly anyway.

    if(strcmp(a, b) == 0)
       NOT
    if(!strcmp(a, b))

7.  Use spaces around almost all arithmetic, comparison and assignment
    operators and after all ',;:' separators.

	foobar[2 * size + 1] = function(a, 6);
	   NOT
	foobar[2*size+1]=function(a,6);

	for(a = 0; a < n && n > 0; a++, n--) {}
	   NOT
	for(a=0;a<n&&n>0;a++,n--) {}

8.  Declare all variables at the start of the block.
[source,C]
-------------------------------------------
int SYMEXPORT alpm_db_remove_server(alpm_db_t *db, const char *url)
{
  char *newurl, *vdata = NULL;

  newurl = url;
  if(!newurl) {
    return -1;
  }

  ...

  if(vdata) {
    ...
  }

  return 1;
}
-------------------------------------------

    NOT

[source,C]
-------------------------------------------
int SYMEXPORT alpm_db_remove_server(alpm_db_t *db, const char *url)
{
  char *newurl = url;

  if(!newurl) {
    return -1;
  }

  char *vdata = NULL;

  if(vdata) {
    ...
  }

  return 1;
}
-------------------------------------------


Other Concerns
--------------

Header Includes
~~~~~~~~~~~~~~~

Currently our #include usage is in messy shape, but this is no reason to
continue down this messy path. When adding an include to a file, follow this
general pattern, including blank lines:

[source,C]
-------------------------------------------
#include <standardheader.h>
#include <another.h>
#include <...>
-------------------------------------------

Follow this with some more headers, depending on whether the file is in libalpm
or pacman proper. For libalpm:

[source,C]
-------------------------------------------
/* libalpm */
#include "yourfile.h"
#include "alpm_list.h"
#include "anythingelse.h"
-------------------------------------------

For pacman:

[source,C]
-------------------------------------------
#include <alpm.h>
#include <alpm_list.h>

/* pacman */
#include "yourfile.h"
#include "anythingelse.h"
-------------------------------------------

Never directly include config.h. This will always be added via Makefiles.


================================================
FILE: NEWS
================================================
VERSION         DESCRIPTION
-----------------------------------------------------------------------------
6.1.0         - Add cache server support
              - Improvements to --sysroot option - NOTE: targets to -U are no
                longer interpreted relative to sysroot
              - Add more format specifiers for --print operations
              - Add extended data field for arbitrary package data
              - Do not run hooks with --dbonly
              - Provide more details when encountering file conflicts or
                corrupt packages
              - Improved WKD support (FS#73703, FS#73534)
              - Improved handling of malformed download headers (FS#73704)
              - Use openssl interfaces for calculating sha256 and md5 sums
              - Fix multi download bar chomps
              - makepkg:
                - Replace libdepends and libprovides with autodeps
                - Support configuration via makepkg.conf.d drop-ins
                - Add GITFLAGS environmental variable to customize checkouts
                - Add -D option to change directory before building
                - Implement verify() function for custom source verificaton
                - Add checksum support for git/mercurial/bzr sources
                - Improved stripping and debug package support
                - Configurable LTO support
                - Add source signing PGP keys to package if available
                - Store "pkgtype" in xdata
                - Remove md5sum from mtree files
                - Document MAKEPKG_LIBRARY
              - repo-add:
                - Do not include package signature details in the repo. Add
                  the --include-sigs to revert to old behaviour.
                - Do not add md5sum to the repo database
6.0.1         - Prevent download error pages ending up in package files
                (FS#71083)
              - Give -U downloads a random .part file name if needed
                (FS#71464)
              - Fix downloading signatures with redirecting URLs (FS#71148)
              - Fix double free when importing PGP keys (FS#71107)
              - Ensure signature files are named after original file
                following redirects (FS#71274)
              - Order downloads by size - largest to smallest (FS#70172)
              - Fix reproducibility of man pages (FS#71154)
              - makepkg:
                - Fix stripping debug symbols with binutils 2.37 (FS#71722)
                - Export PYTHONHASHSEED for reproducible python packages
              - pacman-key:
                - Quieten trust db checks.
6.0.0         - internal downloader can retrieve files in parallel (FS#20056)
              - an additional progress bar is added to track total download
                progress.  This replaces the previous TotalDownload option.
              - fix download rates becoming negative
              - skip mirror servers with too many errors (FS#29293)
              - package signatures are always retrieved even if signature is
                embedded in repo database or package is in cache (FS#33992)
              - detached package signatures found in CacheDir can be used to
                verify packages if signature is not in the database. Also
                verify packages checksums from repo db when using detached
                signatures.
              - add support for multiple 'Architecture' values
              - -Qkk now validates file checksums in addition to date/size
              - colored upgrade summary now dulls version numbers for contrast
              - libalpm frontends can now supply context to callbacks (FS#12721)
              - support xattr when extracting packages
              - allow setting --noprogressbar in pacman.conf
              - fix output alignment for CJK translated text (FS#59229)
              - fix reading targets from stdin when using --sysroot (FS#68630)
              - fix deleting signatures for existing databases with -Sc
              - check for and forbid duplicate download filenames (FS#67850)
              - -Fx now reports error for invalid regex
              - remove support for the autotools build system
              - meson: properly compile internal symbols as hidden
              - meson: make -uninstalled.pc correct
              - fix build errors on systems like FreeBSD
              - makepkg:
                - add link time optimization support to makepkg
                - add support for sources using the fossil VCS
                - allow specifying alternative authentication commands when
                  running pacman as root (FS#32621)
                - support zstd decompression for sources
                - strip: fix removing file attributes such as xattr
                - switch to CRC as default integrity checksum
                - record $startdir for reproducible builds
                - record name of build orchestration tool for reproducible builds
                - fix signing of source packages
                - add optional argument support to parseopts
                - reduce dependency on file for detecting ELF files
                - remove dependency on GNU sed
                - avoid trailing whitespace in --printsrcinfo output
                - libprovides: don't provide both versioned and unversioned
                  sonames
                - don't double-layer distcc on ccache
                - fix detection of source file names for debug packages with
                  gcc 11
                - strip: silence warnings emitted by readelf while detecting
                  source filenames
                - fix use of spaces in source file renaming (FS#70254)
              - pacman-key:
                - --refresh-keys queries WKD before keyserver
                - be less noisy when populating the keyring (FS#64142)
                - warn about time taken for master key generation
              - repo-add:
                - support the same compression methods as makepkg
              - zsh completion: add pacman-conf support
              - various documentation updates
              - after a decade and a half of promising libalpm.3 documentation
                "once we get around to doing good Doxygen documentation", it
                has happened!
5.2.2         - fix pacman test suite under python 3.8
              - only prompt to import new keys once in a transaction
              - fix handling of fully downloaded .part files
              - increase maximum database size (FS#65197)
              - fix segfault in alpm_option_set_assumeinstalled
              - change config parsing warnings to errors to match actual
                behavior
              - fix key extraction for signatures with two-octet sub-packet
                headers
              - fix documentation typos (FS#67000)
              - change master signing key to RSA4096
              - improve error message when building without autoconf-archive
              - pacman-conf:
                - allow querying ILoveCandy individually
                - fix querying NoExtract individually
              - makepkg:
                - fix seccmp-related error while stripping binaries (FS#65100)
                - fix extraction of file:// sources (FS#64648)
                - allow $pkgname in install and changelog file names (FS#64932)
                - sort libprovides for reproducibility
                - strip: don't re-add the same debug source multiple times
                - error on empty refspecs in git sources
                - correctly handle missing download clients
                - fix splitting multi-line error messages across stdout and
                  stderr
                - handle GPGKEY with spaces (FS#66949)
                - do not accept public-only keys for signing
              - repo-add:
                - handle GPGKEY with spaces (FS#66949)
                - do not accept public-only keys for signing
5.2.1         - fix segfault on importing PGP keys for -U operations
              - fix distribution of meson files
              - fix inode command for darwin/bsd
              - distribute all documentation files
              - update bash/zsh completion for -F changes, remove --force
              - makepkg:
                - fix calculation of package sizes in presence of hardlinks
                - do not warn about PACKAGER format if not set
                - only run --clean when a package is built
              - repo-add:
                - fix compression of databases with zstd (FS#64213)
5.2.0         - completely remove delta support (CVE-2019-18183)
              - add support to pacman and pacman-key for downloading PGP
                signing keys using the WKD protocol (FS#63171)
              - completely remove the --force option
              - renovate and simplify the UI for -F (FS#47949)
              - hooks: rename type File to Path, for accuracy
              - add the meson build system as an alternative to autotools, and
                distribute it in autotools dist tarballs
              - switch from system() to exec() when using alternative download
                agents for XferCommand; this prevents a potential source of
                shell injection (CVE-2019-18182)
              - ignore .hook suffix when sorting libalpm hooks
              - update the minimum requirement of bash to 4.4
              - scripts: pass on options such as set -x to child processes
              - show group and installed status during -Fs
              - user-visible log when validity check fails due to access
              - port pactest to python3
              - process --needed before group selection when resolving the
                dependencies to prompt for (FS#22870)
              - don't error when a group exists but all packages are ignored
              - bash completion now completes when it should, and doesn't
                complete when it shouldn't (FS#59965)
              - improve error message when gpg support is missing (FS#60880)
              - don't emit confusing errors when a package is simultaneously
                replaced and upgraded (FS#50875, FS#55534)
              - better warning message when skipping duplicate targets
                (FS#49377)
              - libalpm: parse {check, make}depends when reading database
                (FS#60347)
              - add [ignored] to -Qu output for packages in repos that are not
                Usage = Upgrade (FS#59854)
              - prevent 301 redirect loop from hanging libalpm
              - use standard, consistent units in the download progress
                (FS#59201)
              - fix segfault when Usage is specified without a value
              - include timezones in pacman.log
              - bash-completion: use POSIX character classes for portability
              - correctly report a download failiure for 404s
              - fix handling of signals during SIGSEGV
              - fix buffer overread in pacman/callback
              - fix crash when downloading files with a Content-Disposition
                that has no directory component
              - pacman-conf, testpkg are now properly localized
              - when -F returns zero results, set a failing exit code
              - improve wording for the error message when a package cannot be
                removed due to dependencies
              - fix segfaults and other incorrect behavior when using -Qip if
                pacman was compiled without GPGME support
              - makepkg:
                - implement extendable source/signature verification routines
                  within libmakepkg (FS#49076)
                - if pacman is in use, wait until it is available before
                  continuing (FS#28840)
                - add support for lzip, lz4 and zst compressed packages
                  (FS#56676, FS#59081)
                - add new checksum algorithm, b2sum
                - various improvements to PKGBUILD linting
                - when signing packages, report package filename on failure
                - fix pkgver() function not aborting on errors
                - remove checksum algorithm whirlpoolsum as it has not worked
                  for a long time
                - reject PKGBUILDs with both split and non-split package
                  functions
                - send status messages to stderr rather than stdout (FS#17173)
                - ensure debug buildflags are unset when they are supposed to be
                - buildenv and executable detection, definitions for the
                  PKGBUILD schema, and makepkg.conf loading are now part of
                  libmakepkg
                - fix broken check for the fakeroot binary
                - improve the error message for invalid dependency versioning
                - add routine for linting $SOURCE_DATE_EPOCH
                - fix the error code when no PKGBUILD exists
                - use --unneeded when removing build deps to allow runtime-only
                  deps to work well with makepkg -sir (FS#32723)
                - compute package sizes correctly across different filesystems
                - use shared clones for git sources to save space when building
                - fix reporting of invalid archive extensions
                - correctly handle hg sources with updates on a non-default
                  branch
                - install pkg-config file for libmakepkg's library directory
                - propagate error codes when package failed to sign correctly
                - be compatible with file 5.37's application/gzip MIME type
                - forbid non-ASCII pkgname and pkgver (FS#49342)
                - fix exiting on failure without ensuring dependencies are
                  prompted for removal (FS#63000)
                - quiet superfluous warnings for missing debug source files for
                  artificial symbols
                - add routine for linting $PACKAGER to check that it has a
                  valid name and email address, and document the desired format
                  in makepkg.conf(5)
                - add rust support for *FLAGS and debug-prefix-map
                - correctly handle a system file command with seccomp enabled
                  (FS#58626)
                - try to more thoroughly clean up logpipe during unusual exit
                  states such as CTRL-C
                - when installing packages with -sir, be more robust against
                  conflicting makedepends by always uninstalling them first
                - fix exit code when removing deps fails
                - reproducible builds: suppress filesystem-specific archive
                  metadata from built packages as they are not needed
              - pacman-key:
                - just accept one file to verify, and enforce detached sigs
                  (FS#52022)
                - after recent GnuPG updates, ensure the Web of Trust is still
                  used
                - clean keys during import to reduce size consumed by unusable
                  signatures
              - repo-add:
                - add support for zst compressed databases
                - print the name of the database when extracting
                - do not infinitely loop on malformed arguments with embedded
                  globs
                - add option to prevent downgrading (FS#17752)
              - various documentation updates
5.1.3         - Sanitize file name received from Content-Disposition header
                during -U (CVE-2019-9686)
5.1.2         - pacman-conf: add missing DisableDownloadTimeout support
              - Include version when checking optdepend install status
                during -Qi (FS#60106)
              - Improve error message for unresolvable urls (FS#48285)
              - Do not raise SIGINT when a downloaded file exceeds the expected
                size
              - Fix previous download interruption status carrying over to new
                downloads
              - Reset known signal handlers before running install scripts or
                hooks (FS#56756)
              - Properly handle signal interrupts while running install scripts
                or hooks (FS#60396)
              - Allow explicitly disabling signature checks when compiled
                without signature support (FS#60880)
              - makepkg: fix linting error on environment variables (FS#60681)
5.1.1         - Allow full path including root prefix to be passed to
                --overwrite
              - Revert deprecation of --root
              - Document comment syntax restrictions in pacman.conf
              - makepkg:
                - handle pre-existing directories when checking for write
                  permissions
                - reduce restrictions on pkgver in depends listings (FS#58776)
                - permit versioned optdepends
                - remove unintended chmod of $BUILDDIR (FS#58790)
                - fix issue when $startdir was not an absolute path (FS#58865)
                - fix syntax error when $pkgname is empty
                - fix --nocolor being passed to pacman (FS#58820)
                - fix issues with trap handling
                - fix several issues with debug packages (signing, printing of
                  package names, clearing of global package options, source
                  file inclusion)
                - fix --help text for --packagelist
              - pacman-conf: Fix detection of Usage option
5.1.0         - Add new --overwrite option and deprecate --force. This accepts a
                glob pattern with far more control than the widely abused force
                option which mostly just causes issues (FS#31549)
              - Add new --sysroot option and deprecate --root. This uses the
                guest configuration instead of the host configuration, which is
                what most people erroneously thought --root would do
              - introduce a 'disable-download-timeout' option
              - remove contrib - this is now maintained in a separate project
              - report the owner of an existing file, if any, when erroring out
                on a file conflict
              - resolve cyclic dependencies when calculating unneeded dependency
                trees (FS#41031)
              - report the needed command to download missing databases for the
                -F and -S actions
              - don't error if -Qo cannot find the file it is querying on disk
                (FS#55856)
              - support new-style OpenPGP format packets lengths
              - support EDDSA from gpgme 1.7.0
              - fix continuously trying to open invalid databases and reporting
                excessively excessive redundant error messages excessively
              - fix the download callback erroneously reporting itself too many
                times with --noprogressbar, or reporting inaccurate times for
                small files (FS#56408, FS#56468)
              - fix erroneous negative speed in download progressbar (FS#43434)
              - parse stdin as newline-separated instead of whitespace-separated
                (FS#52992)
              - when printing urls in the package cache, print the file url
                instead (FS#15868)
              - add color to group selection dialogs and -{F,Q}o
              - the -Q option now respects provides (FS#20650)
              - remove notification of system upgrade when only printing URLs
              - print replacements when using -Sup (FS#35812)
              - fix -Qk and -r checking for the root prefix twice (FS#48563)
              - Do not recognize # as a comment unless it is at the beginning of
                a line. This allows using it as a value in ini files (FS#48702)
              - ignore comments when examining INSTALL files (FS#51916)
              - match multi-byte user input properly (FS#47992)
              - abort transactions if even one database fails to sync (FS#47599)
              - do not resolve uid/gid to names when extracting files with -r
              - --dbonly now properly extracts metadata files (FS#52052)
              - remove support for internal checksumming implementations, and
                require at least one of openssl or nettle to exist
              - consider provides to satisfy optdepends when warning for removal
                or logging new optdepends during a transaction, as was already
                the case for -Qi
              - -Dk now reports if it is successful (FS#50087)
              - consider version for optdepends (FS#44957)
              - remove vim modelines in favor of EditorConfig
              - implement pacman-conf, a new tool to safely parse pacman.conf,
                and use it in internal scripts
              - bash completion now completes -Qn
              - various small documentation updates
              - makepkg:
                - Reproducible build support. makepkg now respects environment
                  SOURCE_DATE_EPOCH when creating package metadata, and unifies
                  source file timestamps to match
                - add more info to .BUILDINFO to aid in reproducing the build
                  environment of a package
                - it is now possible to check the signature of VCS sources
                  (currently only git is supported)
                - use informative exit codes when exiting with errors (FS#54204)
                - lint_pkgbuild has vastly improved linting of pkgname and
                  variables that can contain pkgname/pkgver (FS#57833)
                - implement linting for makepkg.conf
                - fix using libmakepkg in external scripts without extglob
                - fix handling of configurable directories e.g. PKGDEST to align
                  with their documented behavior, and consistently check that
                  they can be used (FS#43537)
                - parseopts, srcinfo, and integrity are now part of libmakepkg
                - consistently use coreutils for checksumming instead of openssl
                  (which may be replaced by nettle in pacman)
                - lint build_references now prints affected filenames (FS#31558)
                - lint_package can now abort on fatal packaging errors
                - lint_package now checks for filenames with newline characters
                - lint_package now checks for root-level /.dotfiles
                - debug packages are now per pkgbase, not per pkgname
                - debug packages now contain source files to allow the debugger
                  to step through code
                - remove optipng and upx support - these can now be plugged into
                  libmakepkg
                - fix emptydirs support with newer findutils (FS#48515)
                - ignore architecture for --printsrcinfo
                - makepkg --printsrcinfo now correctly lists depends_$CARCH
                  instead of merging this into depends
                - fix bug in is_array that broke packages with arch-dependent
                  sources only (FS#48340)
                - move package signing outside of fakeroot which is incompatible
                  with recent gnupg versions (FS#49946)
                - makepkg --clean now cleans up logfiles (FS#51039)
                - when using $PKGDEST, do not symlink build artifacts into
                  current directory
                - --packagelist now lists the built filenames, rather than all
                  possible basenames without extensions
                - fix --geninteg not properly ignoring renamed signature files
                - use localized date strings
                - ensure sane umask is set both before and after installing deps
                - adapt to file(1) changes in order to continue to strip PIE
                  executables
              - repo-add:
                - don't recreate the database when only verifying signature
                  (FS#48085)
                - fix error when repo directory path contains spaces (FS#50285)
              - pacman-key:
                - reject armored signatures
                - don't set a default keyserver, deferring to gpg's sane default
                - disable scdaemon as we don't use it and it breaks --lsign when
                  a smartcard is plugged into the machine
              - vercmp:
                - remove duplicate, undocumented --usage option
                - fail when the wrong number of arguments are used (FS#49093)
5.0.2         - fix database file checks with -Qkk and non-standard root
                (FS#48563)
              - improve optdepend detection for status messages (FS#44957)
              - make Y/N prompt multi-byte-character aware (FS#47992)
              - properly detect dependency cycles with --recursive (FS#41031)
              - improve free disk space calculation (FS#37402)
              - extract database files with --dbonly (FS#52052)
              - repo-add:
                - do not alter the database if only verifying signature
                  (FS#48085)
                - fix error for directories containing whitespace (FS#50285)
              - makepkg:
                - fix building packages with only architecture-specific
                  sources (FS#48340)
                - ignore PKGBUILD architecture for --printsrcinfo
                - do not die on non-empty directories under !emptydirs
                  (FS#48515)
                - preserve checksum type for architecture-specific sources
5.0.1         - fix alignment issues with wide character locales (FS#47980)
              - fix removal of .pacnew files (FS#47993)
              - fix triggering of Install hooks (FS#47996)
              - fix handling of stdin scripts called by pacman
              - hook activity is logged
              - documentation updates for alpm-hooks (FS#48080)
              - makepkg:
                - increase robustness of variable array checks
                - makepkg -g does not perform current architecture checks
                - do not run prepare() with --noextract
                - all directories in the packaging directory are cleared
                  before each build
                - fix translations issues (FS#48057, FS#48298)
              - repo-add:
                - fix checking for non-existent database
              - contrib:
                - zsh_completion: updated makepkg options
5.0.0         - pacman can run hooks pre- and post-transaction. See the
                alpm-hooks(5) man page for details and an example hook (FS#2985)
              - pacman can now sync and read .files databases (-Fy) and do basic
                searching for files in sync repos (-Fs, -Fo) (FS#23787)
              - pacman can check the validity of the local and sync databases
                (-Dk and -Dkk respectively).  This replaces the 'testdb'
                software (FS#42444)
              - the package description output (-Si ,-Qi) is now correctly
                aligned regardless of locale (FS#43983, FS#45997)
              - ensure internal package version matches database version after
                downloading (FS#45687)
              - improved signal handling and lock file removal (FS#45995,
                FS#46375, FS#47011)
              - print more information when encountering dependency errors
              - improved configuration parsing with a new ini parser
              - handle a symlink to a directory being replaced by a directory
              - The 'pkgbase' variable is now recorded in the local package db
              - Remove support for ".pacorig" files.  Instead, packages files
                are extracted as a ".pacnew" and the original stays in place
              - prevent install scriptlets using stdin for user interaction
              - provides are considered when displaying optdepends install
                status (FS#36412)
              - always update corrupt database whether or not a newer version
                is found on the remote server
              - fix build issues when libarchive was in a non-standard location
              - Many issues found using Coverity were address (primarily freeing
                memory on error conditions)
              - The pactest suite was upgraded to allow parallel testing using
                the tap.sh library
              - makepkg:
                - makepkg is in the process of being split into a library. This
                  allows various areas to be extended by adding a file into
                  libmakepkg (e.g. package/PKGBUILD checking, adjusting
                  files before creating the final package).
                - PKGBUILD variables checked to be arrays or not as appropriate
                - pkgver() and prepare() are now run with --noextract (FS#43498,
                  FS#46800)
                - the ability to build a single package in a PKGBUILD has been
                  removed
                - the output when checking checksums for architecture specific
                  sources is improved (FS#43444)
                - improved handling of bazaar sources (FS#43448)
                - fix source package signing with SRCPKGDIR set
                - add option to compress png images with optipng
                - add --packagelist option, which lists all packages build from
                  a PKGBUILD
                - add --printsrcinfo flag to print SRCINFO file for a PKGBUILD
                - record build information in a .BUILDINFO file
                - add whirlpool to list of hashing options (FS#45859)
              - makepkg-template:
                - support multiple --template-dir
                - added a testsuite
              - repo-add:
                - Always generate the .files database
                - Only update database if the entire operation succeeds
                - unarmored package signatures are rejected
              - contrib:
                - checkupdates: give error when fakeroot is missing
                - checkupdates: provide packages versions in output
                - checkupdates: fix failure in some locales (FS#40405)
                - paccache: Add -q/--quiet
                - pacdiff: do not require DIFFPROG for -o/--output (FS#46184)
                - zsh_completion: updated to fix many missing options
4.2.1         - Remove warnings about incorrect directory ownership until
                packaging files with dynamic users/groups is improved
              - Do not require a specific automake version when building from
                the source tarball (FS#43655)
              - A number of typos and translation errors have been fixed
                (FS#43257, FS#43280, FS#43279, FS#43617, FS#43739)
              - set sane umask in pacman-db-upgrade (FS#43200) and make it
                more verbose
              - Use correct permissions when creating the log file
              - Fix memory management for file list storage
              - Set package origin when adding to db cache
              - makepkg:
                - Fix error when encountering an expired PGP key (FS#43269)
                - Fix error extracting PKGBUILD attributes (FS#43387)
                - Fix removal of static libraries when the shared library
                  uses the absolute path in symbolic links (FS#43395)
                - Improve Bazaar cloning (FS#43448)
                - Fix issues with architecture dependent checksum
                  verification (FS#43192)
                - Fix .SRCINFO file with architecture dependent fields
                  (FS#43247)
                - Fix compatibility with older bash versions
                - Allow git checkouts to be downloaded into directory ending
                  with ".git".
              - contrib:
                - updpkgsums no longer changes file permissions (FS#43272)
                - paccache does not remove all packages on libalpm error
                  (FS#43286)
4.2.0         - symlinks to directories on the filesystem are no longer
                treated as directories
              - pacman-db-upgrade - fix local database for files installed
                into directory symlinks
              - added --assume-installed option to help upgrades where not all
                installed packages have been rebuilt
              - --unrequired now filters needed optdepends too. Use twice
                to only filter direct dependencies
              - improved dependency resolving ensures correct ordering when
                installing updates (FS#32764)
              - A new configure keyword Usage can limit what operations a
                repository is used for
              - NoExtract and NoUpgrade can use inverted pattern matches
                (FS#31749)
              - Group queries can be filtered with --explicit/--deps (FS#19716)
              - Filesystem checking now only produces a warning for altered
                backup files (FS#34739)
              - pacman prints a warning if an installed directory has different
                permission to that already on the filesystem (FS#34740)
              - both current and new versions are displayed when querying
                updates
              - --print-format now implies --print
              - package scriptlets are not run when using --dbonly
              - invalid option combinations cause pacman to abort (FS#20950)
              - improve output when a package is missing a required signature
                (FS#28014)
              - PGP signature key IDs are listed with -Sii (FS#34742)
              - indicate ignored packages in -Qu output
              - use appropriate file size units with -Si/-Qi
              - plugged several memory leaks
              - read filelists from a packages .MTREE file if possible
              - ensure packages have all the required metadata before installing
                (FS#35514)
              - always remove lock file on exit (FS#35603)
              - fix overflow in integrity checking progress bar (FS#36608)
              - ensure downloads use correct filename even if the mirror uses a
                redirect (FS#36791)
              - cache PGP key IDs during availability checking (FS#38042)
              - fix reading responses with leading whitespace (FS#39976)
              - fix potential issues when handling of UTF8 filenames
                (FS#40805, FS#40762)
              - makepkg:
                - PKGBUILDs can now specify architecture specific sources,
                  dependencies, etc.
                - A .SRCINFO file is added to source packages for easy parsing
                - VCS package building attempts to be incremental (FS#35050)
                - bzr sources can have a '+' in them (FS#35244)
                - allow sources containing "::"
                - add --noprepare option
                - add -C/--cleanbuild option (FS#17175)
                - add --noarchive option
                - remove --asroot and enforce fakeroot usage
                - all PKGBUILDs require a package() function
                - PKGBUILDs can no longer be read from stdin
                - enable make style environmental overrides
                - Read CARCH environmental variable (FS#35030)
                - makedepends and checkdepends are installed together (FS#31557)
                - added support for sha224 checksums (FS#36776)
                - remove warning when license is not specified in PKGBUILD
                  (FS#37011)
                - only remove static libraries if they have a shared version
                - prevent makepkg creating armored signatures (FS#38503)
                - support stripping kernel modules
                - support the kernel.org PGP signing scheme (FS#31592)
                - sign created source package when using --sign
                - enforce source signatures to be trusted or have their full
                  fingerprint listed in the validpgpkeys array of the PKGBUILD
                - look for configuration in XDG_CONFIG_HOME/pacman/makepkg.conf
                  (FS#43030)
                - ensure vcs tools are available when source entries require
                  them
                - disallow pkgver/pkgrel/epoch overrides in split packages
                - improve parsing of PKGBUILD variables (FS#40361)
              - makepkg-template - new package build templating utility
                (FS#10375)
              - repo-add:
                - add option to remove package files from disk
              - contrib:
                - checkupdates: rename CHECKUPDATE_DB to CHECKUPDATES_DB
                - pacdiff: add a "Quit" option, and many other improvements
                - pacsysclean is removed
4.1.2         - validate %FILEPATH% when parsing repos to prevent arbitrary
                file overwrites from malicious databases
              - makepkg:
                - restrict package name from starting with a dot
                - fix BZR source revision support (FS#35281)
                - Use LOGDEST for log pipe
                - fix distcc disabling (FS#35741)
                - correct stat usage on BSD/Darwin (FS#35469)
              - pacman-key:
                - Do not reinterpret keys from revoked keyrings
              - contrib:
                - paccache: remove broken su privilege escalation (FS#35173)
                - pacscripts: update for current pacman options
                - checkupdates: be consistent with naming (FS#35755)
4.1.1         - fix bug causing negative "Total Installed Size" (FS#34616)
              - report libalpm version it is pkg-config file (FS#34967)
              - various translation fixes and updates (FS#34395, FS#34704,
                FS#34716, FS#35097)
              - makepkg:
                - improve SVN VCS PKGBUILD handling (FS#34675, FS#34636)
                - allow "lp:" URLs for BZR sources (FS#34650)
                - prevent pkgver() capturing stderr (FS#34974)
                - fix attempt to remove package twice on failure (FS#34672)
              - contrib:
                - fix privilege escalation in paccache (FS#34656)
4.1.0         - check file properties when using -Qkk (FS#11091)
              - add color to pacman output - new configuration option "Color"
              - add informational messages for optdepends installation
                status (FS#13035, FS#27116)
              - add number suffix to pacsave files instead of overwriting
                (FS#24192)
              - improve needed key importing for Upgrade (FS#26520)
              - add options to specify require signature level for
                Upgrade operations (FS#26729)
              - directory ownership can be queried
              - allow wildcards in NoUpgrade, NoExtract, IgnorePkg,
                IgnoreGroup and HoldPkg (FS#20360, FS#18988)
              - remove -f short option for --force
              - SyncFirst option has been removed (FS#26445)
              - offer to delete downloaded packages failing signature check
                (FS#28014)
              - configure shell for running install scriptlets (FS#20557)
              - make path to ldconfig configurable
              - display repo in VerbosePkgLists output
              - do not check file conflicts or disk space with --dbonly
                (FS#25667)
              - UseDelta takes a ratio for the largest delta to use
              - track how installed packages were validated (FS#28040)
              - add pkg-config file for libalpm
              - avoid false ownership matches for files in / (FS#30388)
              - only load filesystem space information when needed
              - allow leading "local/" in query options
              - allow cleaning only some cachedirs
              - do not remove source package and package databases from
                cache (FS#25166)
              - improve conflict checking with directory symlinks (FS#30681)
              - remove Cygwin support
              - add program prefix to pacman log entries
              - add --native filter to pacman -Q
              - makepkg:
                - require bash>=4.0
                - support for VCS URLs (git, bzr, svn and hg) (FS#7816,
                  FS#8890, FS#13727, FS#15895, FS#16384, FS#16872, FS#19459,
                  FS#19476, FS#20841, FS#21098, FS#28605)
                - split debugging symbols into separate package (FS#10975)
                - use SKIP in checksums to skip integrity check (FS#19735)
                - add prepare() function to PKGBUILD (FS#30582)
                - add pkgver() function to auto-update pkgver/pkgrel
                - pkgrel must be in decimal format
                - PKGBUILDs without package() functions are deprecated
                - support specifying CPPFLAGS in makepkg.conf
                - support PACKAGER environmental variable
                - allow source renaming to work on signature files
                - configurable compression options (FS#27430)
                - allow multiple packages to be build when using
                  BUILDDIR (FS#28417)
                - add makedepends/checkdepends information to .PKGINFO
                - url can be overridden in split packages
                - allow wildcards in PURGE_TARGETS
                - pass --asdep and --needed flags to pacman when installing
                - use last match in BUILDENV/OPTIONS arrays (FS#26701)
                - fix "arch" handling in split packages (FS#27204)
                - add LOGDEST configuration option
                - install makedepends with --repackage
              - repo-add:
                - honor TMPDIR environmental variable
                - add makedepends/checkdepends information to database
              - pacman-key:
                - fix importing keys with quotes in file name (FS#28445)
                - allow verification of multiple sig files
                - add zsh completion (FS#29062)
              - pkgdelta: add ratio and package size limits
              - pactree: improve output
              - contrib:
                - updpkgsums: update checksums in a PKGBUILD
                - checkupdates: new - safely check for package updates
                - pacsort: add --files option to support parsing filenames
                - pacdiff: improve usability
                - add zsh completion
4.0.3         - frontend database cleanup enhancements (FS#28714)
              - frontend package cleanup enhancements (FS#25166)
              - back out changes related to SyncFirst in 4.0.0
                - remove recursive/needed automatic flags on SyncFirst
                - remove poorly implemented `-S --recursive` option
              - improve error messages on database locking failures
              - use full delta size as max download size (FS#28345)
              - improved handling and fix crash after failed downloads
              - fix key lookup when using gpg 2.X as GPG program
              - match only full path components in disk space checking
              - skip disk space checks when using --dbonly
              - scripts: unset CDPATH bash variable in all scripts
              - makepkg:
                - fix syntax error in remove_deps (FS#28448)
                - small fixes related to multiple libdeps, parsing issues
                - exit via default handler in trap_exit (FS#28491)
                - attempt to work around Btrfs file/block size reporting issues
              - pacman-key:
                - remove signature verification in --populate
                - make -e option work as advertised without arguments
                - exit with correct return codes when verifying signature
              - pacsysclean: fix description, fix option parsing (FS#28434)
              - pkgdelta: use bsdtar -q option for better performance
              - translations: various updates and corrections
4.0.2         - allow comments after a repository header in pacman.conf
              - search for and import PGP subkeys if necessary (FS#27612)
              - fix rare segfault on removal operations (FS#27805, FS#28195)
              - skip all unknown files when cleaning package cache
              - restore looking for files in cache before downloading via -U
              - ensure '[removal]' is displayed in trans confirmation (FS#27981)
              - implement disk space checking code for Illumos
              - use TCP keepalive in download to prevent dropped connections
              - round and show -0.00 values as 0.00 (FS#27924)
              - makepkg:
                - ensure all source files are included in --source (FS#26580)
                - fix locale sort/comm related issues (FS#26580)
                - abort on missing download agent
                - restrict flags passed to pacman (FS#28012)
                - work around certain zipman glob/existence issues
                - fix non-writable SRCPKGDEST error message (FS#28197)
                - fix printf interpreting gettext string as arg (FS#28069)
                - don't abort on non-zero hg return codes (FS#28248)
                - disable extglob when sourcing BUILDSCRIPT (FS#27780)
              - pacman-key: improve return codes of operations (FS#26730)
              - repo-add: enforce maximum signature file size (FS#27453)
              - contrib/paclist: support --help (FS#27258)
              - contrib/pacsysclean: new script
              - contrib/*_completion: fix completion for uncompressed packages
              - translations: extensive updates and corrections
4.0.1         - ensure VerbosePkgList table display supports multibyte chars
              - always use stderr for warning/error messages (FS#26555)
              - add guidance message for users when public keyring not found
              - fix edge case in download progress bar rounding (FS#26853)
              - ensure downloads started as tempfiles have correct umask
              - ensure unowned symlinks are not overwritten incorrectly
              - allow -U operation even without sync databases (FS#26899)
              - update libtool files and update fix for -Wl,-as-needed
              - fix build when using --disable-static (FS#26652)
              - pacman-key: add a keyserver timeout value in --init
              - repo-add: fix race condition around lock file removal
              - makepkg:
                - accept changelog= or install= without a value
                - trim trailing whitespace from sensitive variables
                - handle PGP signatures with a .sign extension
                - delay attachment of signal traps (FS#26196)
              - translations: multiple updates and corrections
4.0.0         - well-integrated and powerful signed packages and databases
                support in pacman, the library, and scripts (FS#5331)
              - over 800 commits to pacman.git since 3.5.4 release
              - many code cleanup commits across library/binaries/scripts
              - many performance improvement commits across library/binaries
              - add new -S --recursive operation to upgrade a full dep chain
              - report upgrade size on sync operations (FS#12566)
              - early terminal input is flushed before question prompts
              - remove duplicate code shared in sync and upgrade operations
              - remove ShowSize; replaced with VerbosePkgLists (FS#15772)
              - print callback (warning, error) messages to stderr (FS#25099)
              - download progress callback has more room for filenames
              - fix selection entry for long values (FS#25253)
              - make config parsing two-pass process, enhance error messages
              - print helpful tips on -Qi <filename> or -S <filename>
              - replace libfetch with libcurl for backend download library
                - timeout when mirror is not responding (FS#15369)
                - full HTTPS protocol support (FS#22435)
                - support of non-traditional/redirected URLs (FS#22645)
                - ensure downloads are only resumed if appropriate (FS#23803)
              - only remove empty directories if no remaining owner (FS#25141)
              - better cache directory choosing and honor $TMPDIR (FS#25435)
              - replaces are parsed as dependency-style strings (FS#23410)
              - split package verification and load stages
              - sync database reading refactor for performance
              - use a larger buffer for package checksum validation
              - file lists now have a dedicated type with metadata
              - disk space check no longer requires iterating package archives
              - update and add checksum routines from PolarSSL
              - validate sync database sha256sum if available
              - correctly parse sizes in database > 2GiB
              - API: several type renames from pm* to alpm_* prefix
              - API: several enum constant renames from PM to ALPM_* prefix
              - API: several types are now public exposed structs
              - API: handle is no longer a single global variable
              - API: more changes than can be mentioned here, see README
              - much improved API documentation for use by Doxygen
              - pactest: several performance/checking improvements
              - scripts:
                - refactor some common components into shared bash library
                - split translations into pacman-scripts catalog (FS#15148)
              - makepkg:
                - allow signing packages after creation
                - allow verifying source file signatures (FS#20448)
                - add auto-versioned libdepends/libprovides support
                - support UPX compression of executables (FS#17213)
                - allow usage of an alternate build directory (FS#22308)
                - cleancache option has been removed; use shell instead
                - improved variable sanity checking (FS#16004)
                - better handling of package extensions (.tar.Z or invalid)
                - allow PKGEXT/SRCEXT environment overrides (FS#19860)
                - only check for writable PKGDEST if necessary (FS#24735)
                - check_software function exits early if missing req'd binaries
                - do source packaging in fakeroot (FS#24330)
                - be more POSIX-compatible in use of `ln` (FS#24893)
                - handle spaces with filenames in noextract (FS#25100)
                - allow epoch-versioned optdepends
              - pacman-key: new keyring management tool for signed data
              - pacsort: new utility, sort version numbers as pacman does
              - pactree: support sync databases with -s option
              - pkgdelta: add a manpage
              - repo-add:
                - handle and include package signatures in databases
                - verify database signature before modification
                - sign database after creation/modification
                - general script cleanup and bash-ification
                - add sha256sums to database (FS#23103)
              - contrib/bacman: code cleanups and small bug fixes
              - contrib/bash_completion: updates for new options/commands
              - contrib/paccache: new, pacman cache cleanup script
              - contrib/paclist: rewrite using bash
              - contrib/paclog-pkglist: new, recover from missing local DB
              - documentation: extensive updates to all manpages
              - translations: extensive updates, new languages: lt, zh_TW
3.5.4         - fix display of lists on non-TTYs and other output fixes
              - fix group selection entry for large inputs (FS#24253)
              - fix divide by zero when downloading zero length files
              - flush terminal input before reading response (FS#20538)
              - allow files to be replaced by directories (FS#24904)
              - makepkg: fix filenames with spaces and noextract (FS#25100)
              - scripts: remove ln -f option for POSIX compliance (FS#24893)
              - various small documentation updates
              - minor translation updates: de, fi
3.5.3         - segfault when creating lock in non-existent dir (FS#24292)
              - segfault when uninstalling broken backed-up symlink (FS#24230)
              - --print should not enable --noconfirm (FS#24287)
              - fix default path substitution in documentation
              - makepkg: quote variables that may contain spaces (FS#24002)
              - makepkg: fix creation of source package with -p (FS#24567)
              - repo-add: include dotfiles in file lists (FS#24534)
              - minor translation updates: de, fi, fr, sk, zh_CN
3.5.2         - ensure we show correct missing dependency info (FS#23424)
              - pacman usage/--help updates (FS#23433, FS#23369)
              - ensure stdout/stderr are flushed before prompts (FS#23492)
              - compile/portability fixes for FreeBSD platform
              - extensive documentation updates for alpm.h interfaces
              - fix several missing pm_errno error code returns
              - makepkg:
                - simplify log redirection and remove sync (FS#23378)
                - improve parsing for sanity checks (FS#23524)
                - avoid use of `tr` to avoid locale and other issues
                - fix GNU-ism in `su` invocation
              - bacman: update for new local database format (FS#23641)
              - extensive translation updates and fixes
3.5.1         - don't error on unknown pacman.conf directives (FS#23055)
              - only read arguments from stdin if '-' is provided as target
              - fix case with ignore handling in argument list (FS#23342)
              - don't show group selection prompt with -Sp (FS#23340)
              - restore old --debug/--verbose behavior (FS#23370)
              - ensure repo DBs are saved with sane umask (FS#23343)
              - fix segfault when a repo includes deltas entries (FS#23314)
              - fix potential data corruption issue on sync DB read
              - get zsh completion in a working state (FS#23322)
              - makepkg: improve optdepends extraction (FS#23307)
              - translations:
                - de: fix makepkg fatal error (FS#23315)
                - sr, sr@latin: new Serbian translation
                - various other translation updates
              - build system: ensure libtool respects LDFLAGS (FS#23325)
3.5.0         - sync DBs read directly from the database tarball
                (FS#8586, FS#20233)
              - local DB "depends" file has been merged into the "desc" file
                - pacman-db-upgrade script provided to update the local
                  database format
              - sync database extension is .db (without compression suffix)
                - requires repo-add from pacman-3.4+
              - package versions can have an 'epoch' value defined that will
                overrule any version comparison
                - this replaces the use of the "force" option in allowing for
                  package updates with versions that do not conform to the
                  default version comparison operations
                - package versions have the format [epoch:]pkgver-pkgrel
              - check available disk space before installing packages (FS#11639)
                - enabled by the "CheckSpace" option in pacman.conf
                - attempt to stop install if we hit an extraction issue
                  (FS#7692, FS#22034)
              - improved interactive selection for groups/provides
                (FS#19704, FS#19853)
              - finer grained control of ignoring dependency resolution
                - -Sd to ignore dependency versions only
                - -Sdd to ignore all dependency information
              - clean-up of --help output (FS#19526)
              - CleanMethod for package cache cleaning can use both
                KeepInstalled and KeepCurrent simultaneously
              - various speed-ups:
                - improved internal storage of the package cache
                - faster pkgname/depends searches
              - use OpenSSL crypto functions if available
              - makepkg:
                - add support for running testsuites in a check() function
                  (FS#15145)
                  - controlled by BUILDENV option 'check' in makepkg.conf
                    which may be overridden by --check/--nocheck on the
                    command-line
                - extract any file bsdtar recognizes
                - STRIP_DIRS has been removed in favor of stripping all
                  recognized files
                - improve $srcdir/$pkgdir check to reduce false positives
                - $pkgname can be used in split package() functions (FS#22174)
                - added '!buildflags' option to allow unsetting of CFLAGS,
                  CXXFLAGS and LDFLAGS
              - repo-add: added -f/--files to create files database (FS#11302)
              - pactree: rewritten in C using libalpm
3.4.3         - fix attempted double remove of all files issue during upgrades
              - respect IgnorePkg/IgnoreGroup for group members (FS#19854)
              - back out epoch changes; 3.5.X will handle them differently
3.4.2         - fix progress bar display with empty packages
              - make pactest testsuite Python 2.7 compatible
              - write epoch values in preparation for 3.5.X releases
              - fix null pointer dereference in architecture check (FS#21668)
              - documentation: remove unnecessary "|| return 1"
              - contrib/bacman: update package compression selection
              - contrib/PKGBUILD.vim: add a few more license options
              - translations: es, kk, sv, pt, ru updated
3.4.1         - fix interaction of --needed and multiple repo groups (FS#20221)
              - bash completion: small fixes to prevent alias problems
              - rankmirrors: fix bogus/empty variable assignment (FS#19911)
              - repo-add: ensure bare DB symlinks are relative (FS#20498)
              - repo-add: fallback to copy if symlink not permitted (FS#19907)
              - makepkg:
                - use absolute path to 'du' to exclude wrapper progs (FS#19932)
                - ensure $startdir check doesn't stall indefinitely (FS#19975)
                - fix repackaging with multiple passed packages (FS#20272)
              - translations:
                - zh_CN: fix crash when using during install (FS#20188)
                - sk: new Slovak translation
                - pt: new European Portuguese translation
                - other small updates to various translations
3.4.0         - new "Architecture" option that will restrict pacman to
                installing only packages from the given architecture. Can be
                set to "auto" in which case the output of "uname -m" is used
              - use "$arch" when specifying a mirror url to automatically
                select the correct architecture
              - Installing packages with -U can handle installing
                dependencies, conflict resolution and replacing packages
                (FS#3492, FS#5798)
              - can upgrade the system and install a new package using
                "pacman -Syu <pkg>" (FS#15581)
              - new -D/--database operation for modifying package install
                reasons (FS#12950)
              - new --print and --print-format options to output information
                in suitable format for wrapper scripts (FS#14208)
              - only extract new entries when updating a repo database
              - show "Required by" in -Sii output (FS#16244)
              - -U and -R options always ask for confirmation
              - allow -Qo to perform a functional 'which' (FS#8798)
              - cache cleaning cleans all directories, not just first
              - cleanupdelta: new utility to help remove unused deltas from
                a repo database
              - bash completion: rewrite for size and performance (FS#16630)
              - repo-add: handle removing the final package from a repo
              - rankmirrors: rewrite using bash
              - vercmp: does not link to libalpm to prevent upgrade issues
              - makepkg:
                - automatically aborts on any errors during packaging
                - changelogs are now included via the "changelog" variable
                - override pkgver, pkgrel and arch in split packages (FS#15955)
                - repackaging without a package() function is deprecated
                - stricter syntax checking for backup and optdepends entries
                - file stripping options are configurable
                - New --pkg flag to allow building specific package(s) from
                  split PKGBUILDs (FS#15956)
                - build() function is now optional (FS#15147)
                - warn about reference to build root in a package (FS#14751)
                - configure source package destination with SRCPKGDEST
                - major internal refactoring of handling tests ("[" to "[[")
              - contrib/pactree: print reverse dependency tree
3.3.3         - correctly check the return code from opendir()
              - fix possible infinite loop in alpm_list_remove()
              - makepkg:
                - quote arrays to preserve spaces in arrays (FS#16871)
                - allow passing arguments with spaces
                - adjust preselected option for clearing cache
              - translations:
                - zh_CN: fix positional parameter usage in makepkg (FS#16983)
                - el: fix Y/N response translation (FS#16568)
3.3.2         - fix infinite file size download issue (FS#16359)
              - fix bogus download size on TotalDownload
              - documentation updates
              - small translation updates
              - repo-add: use size of target files and not symlinks
              - repo-remove: create empty DB when all packages are removed
3.3.1         - use full path to ldconfig when calling in chroot
              - optimize the check for modified databases during sync
              - ensure installed libfetch is new enough
              - have -Q ops return 1 when no package matches (FS#15938)
              - skip SyncFirst dialog if unnecessary (FS#15810)
              - misc documentation updates (FS#15870, FS#15984)
              - testdb: be less verbose during checks
              - existing translation updates
              - two new translations: Norwegian, Swedish
              - makepkg:
                - add --skipinteg option (FS#15830)
                - fix .PKGINFO creation with -R option (FS#15851)
                - always keep symlinks to sources when unpacking
3.3.0         - xdelta: many fixes and improvements
                - new pkgdelta script to create deltas
                - repo-add can add both deltas and packages to a database
              - xz archive format supported for packages and databases
              - in case of unresolvable packages, pacman now asks
                if they should be skipped instead of aborting
              - -Suu synchronizes all packages with the version from the
                repository (including upgrade and downgrade)
              - replace libdownload dependency by the original libfetch
              - better support of -q/--quiet flag with -Qo and -Ql
              - -Sp works without root (FS#8905)
              - fix a bug where the replacement of a package failed because
                of a file conflict, and the package was lost (FS#9088)
              - improved behavior of HoldPkg option (FS#9173)
              - allow to ignore a package from a group (FS#12059)
              - search package groups when searching a db (FS#13099)
              - asciidoc fixes
              - documentation updates
              - repo-add: cleanups, improvements and speedup
              - makepkg:
                - package splitting support! - see PKGBUILD-split.proto
                - limit fakeroot usage with addition of package() function
                - info is handled like man pages and not other documentation
                - configuration option for man/info page directories
                - added ability to automatically remove files from package
                - configuration option for default LDFLAGS
                - specify alternative configuration file with --config flag
                - check all integrity checksums provided in PKGBUILD
                - fix pkgver/pkgrel updating in SCM packages
                - BUILDSCRIPT option removed from makepkg.conf. Now specified
                  during configure
                - enforce no ">" or "<" in provides array
                - package compression autodetection
                - check PKGBUILD for CRLF line endings
                - fix reading PKGBUILD from pipe
                - increase compatibility with BSDs & Mac OSX
              - contrib
                - pacdiff - improvements and new -l flag for using locate
                - pacscripts - print install scripts for a package
3.2.2         - log pacsave warnings to pacman.log (FS#12531)
              - separate local DB creation and writing (FS#12263)
              - pacman-optimize: rewrite and refresh (FS#11767)
              - repo-add: use openssl instead of md5sum
              - simplify doc building process for ease of development
              - ensure correct handling of syscall interruptions
              - re-add missing newline on -Qi/-Si output (FS#11331)
              - fix TotalDownload regression (FS#11339)
              - makepkg:
                - replace getopt with an internal function
                - detect incorrect usage of provides (FS#12540)
                - fix bash substitution to work in older versions
                - fix updating PKGBUILD and simplify logic for SCM packages
                - save/restore shell options before/after build() (FS#12344)
              - documentation updates and asciidoc build fix
              - existing translation updates
3.2.1         - drop special handling of file:// URLs
              - display optdepends on install and upgrade
              - fix segfault on x86_64 when using UseSyslog (FS#11096)
              - fix detection of TotalDownload (FS#11180)
              - fix "No such file" error during --force installs (FS#11218)
              - better handling of progressbar when behind a proxy (FS#8725)
              - repo-add: fix whitespace handling (FS#9171, FS#10630)
              - repo-add: add optdepends to the sync DB (FS#10630)
              - makepkg:
                - allow specifying a download filename (related to FS#11292)
                - fix download functions with weird URLs (FS#11076)
                - fix creation of source package with local files (FS#11149)
                - fix error when sourcing profile scripts (FS#11179)
                - perform case-insensitive checksum comparison (FS#11283)
              - documentation and help updates (including fix for FS#11203)
              - new Ukrainian translation
              - existing translation updates
3.2.0         - removed -A/--add option from pacman frontend
              - added --asexplicit option
              - new remove option --unneeded
              - add -Rss option to remove all dependencies
              - removed useless -e/--dependsonly option
              - config options are now case sensitive
              - added CleanMethod option for variety in cache cleaning
              - new Turkish translation, all others updated and revised
              - handle multiple groups in -Ss and -Qs operations
              - allow -q/--quiet option with -o/--own and -g/--groups options
              - removed hack for packages with unknown installed size
              - add SyncFirst option to pacman.conf
              - support installation of versioned deps : pacman -S "dep>=2.0"
              - add --enable-git-version configure flag to identify
                developmental build version
              - do not duplicate packages in required by list
              - pacman.static is no longer built
              - all error messages use pm_fprintf
              - disable geteuid in cygwin
              - use off_t type for large file support
              - add vercmp test script
              - moved gensync and updatesync to contrib/
              - rewrote pacsearch script in perl
              - paclist script to list installed packages from a repo
              - bacman script to make backup of package from filesystem
              - combined repo-add and repo-remove into one script
              - removed --force option from repo-add
              - add --quiet option to repo-add/repo-remove
              - update libtool version to 1.5.26
              - allow disabling of internal download with new configure
                flag --disable-internal-download
              - pactest can now check file permissions
              - add the possibility to mark the pactests known to fail,
                which allows more informative results of make check
              - libalpm-specific changes:
                - use dynamic string allocation in package structure
                - new functions for manipulating pmdepend_t objects
                - store replaces and force in local database
                - moved deptest functionality to backend
                - add alpm_checkdbconflicts function
                - fix PM_ERR_CONFLICTING_DEPS handling
                - cleanup of pmsyncpkg_t
                - add alpm_sync_newversion function
                - cleanup of alpm_list code
                - refactor of download code
                - download callback API changes
                - removed test_delta_md5sum and test_pkg_md5sum functions
                - add _alpm_archive_fgets function to read line-by-line from
                  an archive
                - read .PKGINFO directly from package file with no temp file
                - native support for both libdownload and libfetch
                - rework delta algorithm (we still need script updates)
                - swap parameters of alpm_pkg_find for consistency with
                  other find functions
                - swap parameters of PM_TRANS_CONV_INSTALL_IGNOREPKG to make
                  more sense
                - fix -Rs when removing multiple items in dependency chain
              - makepkg-specific changes:
                - support for resuming source downloads
                - added zipman option
                - removed -b/--builddeps
                - various portability fixes for BSD and Mac OS X
                - check for valid options in PKGBUILD
                - add --allsource option
                - remove deprecated --usesudo option
                - handle spaces in build directory
                - made keeping docs the default option
                - use pacman version dep resolving
                - fix regression in library stripping
                - make strip paths configurable
              - MANY other bug fixes and small improvements
3.1.4         - various small code cleanups and fixes
              - small documentation updates
              - improvements to PKGBUILD.vim
              - translation updates - ru, zh_CN
3.1.3         - major updates to i18n output in frontend (all UTF-8 characters
                should now work with varying byte and char widths)
              - new Simplified Chinese translation
              - updates to testpkg utility
              - updates to PKGBUILD.vim
              - internal updates for translations - use c-format on all
                strings, get rid of needless line numbers
3.1.2         - updates to proto.install, add ChangeLog.proto (FS#7231)
              - add 'force' option to packages, and have repo-add respect it
              - mark gensync and updatesync as deprecated
              - fix pacman -Qo behavior on symlinks (FS#9473)
              - fix segfault on a broken symlinks in backup code (FS#9235)
              - ensure filename is determined correctly for a pkg (FS#9547)
              - fix conflict progress bar with UTF-8 chars (FS#6437)
              - fix chk_fileconflicts brokenness, ensure it reads entire list
              - ensure -Sc operation locks DB, only checks DBs (FS#9609)
              - minor documentation and message updates
              - moved some translations to their more generic lang codes
              - allow scripts to be run without gettext installed
              - makepkg:
                - check to ensure we have non-URL sources (FS#9208)
                - ensure we strip binaries in /opt/ dirs (FS#9342)
                - check for VCS executable before using (FS#9230)
                - set sane umask before source extraction (FS#9242, FS#9362)
3.1.1         - fix versioned provisions handling- use '=' instead of ' ' which
                differs from original spec but better in long run (FS#9171)
              - rename query --orphans to --unrequired (FS#9144)
              - fix segfault when cachedir is unusable (FS#9186)
              - missing SYMEXPORT on libalpm functions (FS#9155)
              - notify of package replacements when using --noconfirm (FS#5179)
              - fix usage of PKGEXT by gensync/updatesync (FS#9190)
              - ensure correct dir permissions in database (FS#9176)
              - ensure /tmp is created with correct permissions (FS#9183)
              - disallow NULL section in parseconfig (reported on forums)
              - remove Arch-specific pacman.conf and mirrorlist from source
              - makepkg: --holdver option for devel PKGBUILDs (FS#9194)
              - documentation updates (FS# 9142, 9146, 9175, 9192, 9204)
              - many translation updates
3.1.0         - paths are now specified as absolute paths (or defaulting to
                under the specified root directory)
              - all paths can be specified in pacman.conf or on command line
              - updates to pacman clean operation- now cleans uninstalled
                packages and old sync DBs (FS#8061)
              - remove all hardcoded paths and allow them to be set at
                configure/build time
              - single mirrorfile- pacman substitutes the repository name in
                mirror file when $repo is found (FS#6389)
              - New config file options: ShowSize, TotalDownload, IgnoreGroup,
                UseDelta
              - all scripts have been gettext-ized and can be translated
              - added testdb utility to check pacman DBs for common problems
              - huge additions to pactest suite
              - remove -F/--freshen operation
              - add --ignoregroup option (FS#1592)
              - --ignore and --ignoregroup accept comma separated lists
              - add --needed option for --sync
              - massive optimization and speedup for --owns
              - add -q/--quiet option for -Ss/-Sl and -Q? output (FS#8470)
              - add --asdeps option (install reason: dependency) (FS#7193)
              - replace "Total Package Size" with "Total Download Size"
                (FS#4182)
              - fix -Q options to work on installed packages AND package files
              - change -Q/--query options to act as filters and increase their
                flexibility
              - -U/-A <url> now downloads to cachedir (FS#6404)
              - install and build dates are localized
              - optdepends support
              - delta support
              - versioned provisions support
              - versioned conflicts support
              - add < and > operators for versioned dependencies and conflicts
              - bash completion updates
              - mirrorlist updates
              - removed ABS script from codebase (now a separate project)
              - allow multiple pacman cache directories
              - all manpages are now generated using Asciidoc (FS#7312)
              - moved parseconfig from backend library to frontend
              - clean up and refactoring of the ENTIRE codebase
                - remove many useless #ifdefs
                - split many too-long functions
                - portability updates: compiles and passes tests on BSD and
                  Darwin (switching libdownload->libfetch)
                - clean up build process
                - use of static code analysis
                - memory leak fixes all over the place
                - fix overzealous use of macros
                - entire codebase builds with -pedantic GCC option
              - libalpm-specific changes:
                - moved location of sync DBs into their own directory to thwart
                  deletion and remove naming limitations
                - REQUIREDBY entries are no longer used in local DB but are
                  computed on the fly when needed, which should resolve
                  phantom dependency issues (FS#7639)
                - ensure we export everything that should be public
                - fix some const correctness issues
                - add list tail ptr shortcut to make last element lookups O(1)
                - database dates are stored as seconds from epoch
                - removed SHA1 support
                - drop in new MD5 library
                - implement topological sorting for dependencies
                - do case sensitive compare in parse_descfile (FS#8081)
                - remove hardcoded architectures
                - conflicts checking speedups and fixes
                - move lockfile location to inside the DB
                - remove gettext calls from DEBUG messages
                - remove faulty disk space checking
                - move functions out of alpm.c to where they belong
                - rewrite of file extraction code (FS#7484)
              - makepkg-specific changes:
                - entire script has been functionalized
                - only runs in fakeroot when necessary
                - hard linked manpages are now compressed (FS#5392)
                - built-in versionpkg support
                - arch=('any') support (FS#8153)
                - clean up and prettify the output
                - replace tar/cpio/unzip with bsdtar (FS#7485)
                - add --ignorearch option (FS#7355)
                - improved error handling
                - downloads straight to $SRCDEST to avoid copies (FS#7271)
                - support for multiple download protocols (FS#4404)
                - remove --usesudo option, use it by default
                - add --asroot option to discourage building as root
                - add $srcdir and $pkgdir variables (FS#7278)
                - add source package creation option
              - rankmirrors- allow reading from stdin (FS#8043)
              - and many other updates: 198 bugs/FRs closed since 3.0.0 release
              - switch to GIT for source code management
3.0.6         - config files updated to reflect current -> core change
              - fix symlink overwriting issue (FS#7484)
              - fix config parsing with tr_TR locale (FS#7235)
              - use AC_SYS_LARGEFILE if available (FS#7578)
3.0.5         - add -mtune=generic to default CFLAGS in makepkg.conf
              - small updates to translations
              - repo-add: fix conflicts issue for real this time
              - fix issue with libarchive incorrectly setting permissions
3.0.4         - updated translations
              - repo-add: fix issue where conflicts were not put in database
3.0.3         - updated translations
              - repo-add: fixed a desc file clobbering issue
3.0.2         - fix a bug where pre/post_remove scriptlets were not ran
              - ensure ldconfig is ran in all operations
              - added a few new translations, updated existing ones
              - updated mirror lists
              - makepkg: ensure CFLAGS are exported to build function
3.0.1         - fix a locale issue with tr_TR upper/lower-case conversion
              - allow removal when listing the same package multiple times
              - fix a repo-add bug that left a .PKGINFO file in the current
                directory
              - proper error messages when we cannot read mtab for freespace
3.0.0         - first release based on libalpm backend
              - added internationalization (gettext) support:
                - de, fr, hu, it, pt_BR, en_GB, ru_RU translations
              - switch to usage of libdownload and libarchive
              - improved proxy support using libdownload
              - documentation - man pages updated, new conf manpages added
              - repository mirror list updates
              - added support for package changelogs
              - logging of all install scriptlet messages to pacman.log
              - orphans search (-Qe) now shows true orphans
              - new -Qu option - show all packages that can be upgraded
              - new -Se option - install only dependencies
              - dependency sorting on install and removal
              - check for free space before installing packages
              - prompt to delete corrupted packages
              - improved backup handling - backup array proactive on upgrade
              - removed NoUpgrade lines from default pacman.conf
              - new uncompressed size field, shown on sync upgrade
              - improved progress and progressbar output
              - reduced unnecessary calling of ldconfig
              - selective loading of database to speed up certain operations
              - debugging output improved with --debug flag
              - pacman-optimize - now supports DBs on separate filesystem
              - makepkg and abs now support conf files in home directory
              - makepkg changes:
                - arch field is required
                - added -arch suffix to generated package filenames
                - new configuration file options format
                - changed default configuration
                - support alternate integrity checks
                - extract files using filetype, not extension
                - added noextract array
                - new options array format
                - new option to log build process
                - new --repackage option - repackage pkg/ without building
                - user-selectable paths for doc stripping
                - configurable source cache location
                - dependencies now removed on a build success or failure
              - abs changes:
                - supports both cvsup and csup
                - expanded configuration
                - added support for testing repository
              - new helper scripts:
                - rankmirrors - shows best available mirrors
                - repo-add - adds a package to a repo database file
                - repo-remove - removes a package from a repo database file
              - added pactest testing suite
              - MANY fixes and small improvements everywhere
2.9.8         - Changed behaviour with original=X,current=Y,new=Z scenario
                - keep old in place, install new as .pacnew
              - Search package provides when finding matching targets with -S
              - Frugalware: added -Qm option to find foreign packages
              - Frugalware: added DistCC support to makepkg
              - bugfix: before searching databases for a dependency, make sure
                one of the packages in the final list doesn't already provide
                that dependency
              - fix for segfaults that occurred when propagating requiredby
                fields to replaced packages where one package depended on
                another replaced package
              - a better fix for pacman-optimize integrity checks
              - fix for regex searches with -Ss (Miklos Vajna)
              - added a --noprogressbar for scripts to use
2.9.7         - fixed the dupe listings of packages when dealing w/ groups
              - patches from Miklos Vajna:
                - add regexp search support for -Qs and -Ss
                - fixed md5sums on x86_64
                - add --sudosync to makepkg
                - show syntax help if an invalid option is used
                - added makepkg option to disable ccache support
              - changed license field to operate as an array, not a string
              - added more logic for file conflict checks - if one target
                is a file and the other is a directory, then it's a conflict
              - fixed the integrity check in pacman-optimize
              - reverted NoUpgrade to old behaviour and instead, added the
                NoExtract directive to pacman.conf, which prevents a file
                from ever being extracted on to the system
                 eg, NoExtract = home/httpd/html/index.html
2.9.6         - added a pacman-optimize script to try and defragment the DB
              - modified NoUpgrade behaviour to avoid extracting files
                that are missing from the filesystem -- this helps in
                situations where the admin does not want the file there, eg,
                remove index.html so index.php takes precedence
              - fixed a bug where files would sometimes go missing if they
                moved from one package to another
              - add db_remove() which is responsible for clearing out stale
                hash table entries when packages are removed
              - added ccache support to makepkg
              - patch from Aurelien Foret fixes a few memory leaks
2.9.5         - bugfix: missing files after re-ordering packages wrt
                deps with --upgrade
              - added "Repository" line to -Si output
              - patch from Tommi Rantala to fix trim() behaviour with
                empty or whitespace-only strings
              - fixed removal order when using -Rc or -Rs
2.9.4         - fixed a bug that was introduced from another bugfix :-/
2.9.3         - fixed a couple manpage typos
              - added --ignore to -S operations, works just like IgnorePkg
              - respect IgnorePkg list when pulling in dependencies
              - numerous memleak fixes
              - some code changes to improve customizability/branding
              - Makefile fix for nonstandard lib search paths (Kevin Piche)
              - fixed the leftover directories in /tmp
              - speed improvement patches from Tommi Rantala
2.9.2         - bugfix for 2.9.1
2.9.1         - --refresh now only downloads fresh packages lists if they've
                been updated (currently only works with FTP)
2.9           - Improved -Rs functionality -- pacman now tracks why a package
                is installed: explicitly, or as a dependency for another
                package.  -Rs will only remove dependencies that were not
                explicitly installed.
              - Added compressed package size to sync DBs -- shows the total
                size of packages before downloading
              - Patch from Tommi Rantala:
                - Allow --info and --list together in queries
              - Patch from Kevin Piche:
                - Use list_add_sorted() with -Sg
              - Patch from Hegedus Marton Csaba:
                - Better manpage compression
              - Added checks for additional hyphens in package versions
              - mktemp was failing if %pmo_root%/tmp was missing -- fixed
2.8.4         - Added updatesync script from Jason Chu
              - Changed the pacman binary to be dynamically linked
                - Included a pacman.static binary as well
                - Added fakeroot checks when seeing if we're root
              - Fixed makepkg to use 'tail -n 1' instead of 'tail -1'
              - Added patch from Kevin Piche:
                - Cleanup db_loadpkgs(), add list_add_sorted()
              - Fixed a memory leak in db_find_conflicts()
2.8.3         - Fixed a little makepkg bug with bash 3.0
              - Fixed resolvedeps to always prefer literals over provisios
              - Added --config option to specify an alternate config file
              - Added "Include" directive to include repositories from
                config files (inspired by Michael Baehr's patch)
              - Added patch from Jason Chu:
                - Even smarter file-conflict checking
2.8.2         - Fixed a segfault bug in file-conflict checks
              - Made --noconfirm actually work.  Go me.
2.8.1         - Added a HoldPkg option in pacman.conf, for the more
                exploratory users who run things like "pacman -R pacman".  It
                will ask for confirmation before removing any packages listed
                in the HoldPkg list
              - Added a --noconfirm switch for use with script automation
              - Modified dependency resolution to prefer packages explicitly
                requested on the cmdline instead of those pulled in by
                resolvedeps().  Example, if neither "xorg" nor "xfree86" is
                installed and "blackbox xfree86" is requested, "xfree86" will
                be used instead of "xorg"
              - Added patch from Jason Chu:
                - Smarter file-conflict checking with symlinked paths and
                  with files that move from one package to another
2.8           - Bugfixes:
                - FS#861:  file:/// urls not handled properly with XferCommand
                - FS#1003: set umask before scriptlet calls
                - FS#1027: download problems with http urls using -U/-A
                - FS#1044: segfaults when using -Rs
                - FS#863:  "missing post_remove" errors with some packages
                - FS#875:  detect low disk space properly
                - FS#986:  makepkg -e doesn't validate files
                - FS#1010: add -j option to makepkg
                - FS#1028: make pacman -Sp runnable as non-root
              - added pre_install and pre_upgrade scriptlet support
              - added an "Architecture" field in the package meta-data
              - added patch from Aurelien Foret which improves performance
                adding or removing packages
              - added implementation of GNU's strverscmp function for better
                portability
              - added explicit unlink() calls when --force is used, which
                prevents those nasty "Text file busy" errors when you
                force-upgrade something like pacman or glibc.
2.7.9         - added the "force" option to packages, so --sysupgrade can
                downgrade packages when it needs to
2.7.8         - added post_remove scriptlet support
              - added -Qs option (FS#854)
              - a provisio does not imply conflict, to make a provisio target
                conflict with anything else that provides the same thing, you
                can now do this by specifying the provisio target as both a
                provides and a conflict, eg:
                   conflicts=('x-server')
                   provides=('x-server')
              - cleaned up the download progress bar a bit
              - added %o parameter to XferCommand so wget can resume properly
              - fixed a segfault in downloadfiles() (FS#787)
              - patches from Oliver Burnett-Hall
                - gensync uses a better temp dir (FS#774)
                - PKGDEST can be set in makepkg.conf (FS#783)
              - patches from Aurelien Foret
                - segfault fix, couple memory leaks
                - more sanity checks in "provides" searches
                - fixed a little display bug in the progress bar
                - made -Qip look like -Qi
                - -Sc now removes OLD packages from cache, use -Scc for all
2.7.7         - added an XferCommand directive that will make pacman use an
                external download utility like wget
              - added a license field to package meta-data
              - add url support to -A and -U operations (download packages)
              - -Ss now searches through provides fields
              - added --dbonly option to -R
2.7.6         - added --print-uris option
              - fixed an http download bug (FS#667)
              - fixed a segfault related to replaces/conflicts handling
2.7.5         - "replaces" packages were ignoring IgnorePkg in pacman.conf
              - fixed another bug in conflict handling
              - found an out-dated reference to /usr/abs, fixed
              - added a --recursive option for package removal, which removes
                all deps of a target that aren't required by other packages
2.7.4         - fixed a bug in conflict handling, where installing a
                conflicting package would fail even if the new package
                "provided" it
              - if pacman sees a newer version of itself during an upgrade,
                it will ask to install itself first, then be re-run to upgrade
                the other packages.
              - You can now use the --info option with --sync to display an
                uninstalled package's dependency info.
              - Added a sane umask before db writes
              - buffer overflow fix (FS#442)
2.7.3         - makepkg not longer strips files with .exe or .dll extensions
              - Added Aurelien's patch:
                - proxy support (no authentication yet)
                - HTTP/1.1 support
                - an improved progress bar with transfer rates and ETA
              - cleaned up warning output a bit
2.7.2         - Suppressed "No such file" messages during stripping
              - Removed extra newlines in /var/log/pacman.log
              - Added a --noextract option to makepkg to skip source extraction
2.7.1         - Fixed a couple obscure segfaults
              - LogFiles were logging incorrect dates - fixed
              - Cleaned up md5sum output in makepkg -g
              - Added (optional) colorized output messages to makepkg
              - Renamed the "stable" repo to "release" in pacman.conf
              - Renamed the "unofficial" repo to "extra" in pacman.conf
2.7           - Added build-time dependencies to makepkg (Jason Chu)
              - Added md5sum integrity checking to packages in --sync
                mode (Aurelien Foret)
              - Memory leak fixes (Aurelien Foret)
              - Added CARCH variable to makepkg.conf for use in PKGBUILDs
              - Added LogFile option for direct-to-file logging
              - Added -Qii handling to show modified config files
              - Allow --sync targets to specify an explicit repository to
                sync from (eg, pacman -S current/patch)
2.6.4         - Altered pacman_upgrade() to allow a package to replace itself
2.6.3         - A couple memory fixes in the new replaces code
2.6.2         - Fixed a memory cleanup bug
              - Aurelien's patch:
                - FS#159 implemented (for -S and -R)
                - fixed a bug with pacman -Sg (pacman was browsing only one
                  db to get groups)
                - fixed a bug with list_merge()
                - fixed some MLK (in dumppkg() and with "-Qi --orphans")
                - now "pacman -Sg" only displays groups (without content)
                  whereas "pacman -Sg target1 target2" displays groups
                  target1 and target2 with content
2.6.1         - Added http download support (Aurelien Foret)
              - Improved makepkg's --builddeps behaviour when called via
                makeworld
              - makepkg's md5 validation now occurs before source extraction
              - makepkg delays fakeroot entry until after option parsing
              - Fixed an argument-passing bug in fakeroot
              - Modified pacman's behaviour wrt provides -- it now allows
                multiple packages to be installed, even if they provide the
                same thing (they were treated as conflicts before)
2.6           - Added group handling, so one can run 'pacman -S kde' and
                install all files from the KDE group
              - Fixed a duplication bug in cascade package removal
              - Added support for virtual provisions with "provides" tags
              - When conflicts are encountered, pacman now offers the chance
                to remove the conflicting packages (provides or literals)
              - Added support for renamed/combined packages with a "replaces"
                tag
              - Added --nostrip option to makepkg
              - Improved --search to list all packages from all repos when
                a search term is omitted
              - Added logging support through syslog()
              - Added fakeroot support to makepkg (RomanK)
              - Added MD5sum generation/validation to makepkg (RomanK)
              - Fixed a progress bar bug (Aurelien Foret)
              - Sorted makepkg's .FILELISTs (Aurelien Foret)
              - Targets are now re-ordered w.r.t. dependencies when
                using -A/-U
              - Modified --search to work when called as -Sys
              - Modified abs to use ABS_ROOT from /etc/abs/abs.conf (Aurelien)
              - Other bug fixes
2.5.1         - Minor bug fixes
2.5           - Added an URL tag to package info
              - Sped up package load times by about 500% by introducing
                a .FILELIST into the package
              - Renamed the install scriptlet from ._install to .INSTALL
              - Added patch from Aurlien Foret:
                - Better lock handling (RW and RO)
                - Sorted package order in -Qi's dependency lists
                - Added a DBPath option to pacman.conf
                - Fixed memory leaks
                - Added the --nodeps option to -S
2.4.1         - Fixed a bug in makepkg's option parsing
2.4           - Added getopt-style options to makeworld
              - Added -w <destdir> to makepkg
              - makeworld now properly handles packages with --builddeps
              - Added patches from Aurelien Foret:
                - Cascading package removals. -Rc will remove a package and
                  all packages that require it
                - Support for getopt-style options in makepkg
                - the REQUIREDBY field is now updated when a package is
                  removed with --nodeps, then re-installed.
                - Avoids duplicate dependency checks with sync
                - Added a "NoPassiveFtp" option in pacman.conf
                - Improvements to the --query listings
2.3.2         - Added patches from Aurelien Foret:
                - FTP resume feature
                - removed the hit-^C-and-delete-the-downloading-file safety
                - IgnorePkg option in pacman.conf
                - FTPAGENT setting in makepkg.conf
                - Added --cleancache option to makepkg
2.3.1         - Fixed the progress bar overflow
              - Pacman does not ask "Are you sure" when you use --downloadonly
              - Switched up a couple makepkg options to be more consistent
                with pacman's options
              - If you ^C out of a file download, the package will now be
                removed from the cache directory
2.3           - The beginnings of source-side dependency resolution, makepkg
                can now either A) download/install missing deps with pacman
                -S; or B) find missing deps in the /usr/abs tree and
                build/install them.
              - Added a --nodeps option to makepkg
              - Improved the --search output
2.2           - More bugfixes
              - Added --downloadonly switch to --sync
2.1           - Lots of bugfixes
              - Added support for multiple repositories
              - Improved the config file layout
              - Improved dependency resolution and sorting
2.0           - Added dependency functionality
              - Completely new database format, similar to FreeBSD
              - Better internal data structures
              - Merged pacsync functionality into pacman
              - Now uses libftp for all file retrieval (currently only ftp)
              - Automatic dependency resolution, a la apt-get
              - Moved config stuff from /etc/pacsync.conf to /etc/pacman.conf
              - Much better backup file handling, now uses md5 hashes a la rpm
1.23          - Added install/upgrade/remove scripting control
1.22          - Some manpage typo fixes
              - Added --root switch to pacsync
              - Added --help and ability to specify a PKGBUILD to makepkg
              - Switched default downloader to snarf
1.21          - Added better backup control -- upgrade/add and remove
                do different things with the -n switch
1.2           - Added wildcard handling
              - Added man pages for makepkg and pacsync
              - Added the pacsync utility for remote file fetching/sync
1.1           - Fixed some string-handling bugs
              - Added better handling of configuration files and the like.
                If "file" is about to be removed, but it is designated to
                backed up, then it will be copied to "file.save"
              - Changed db_find_conflicts() to ignore directories
1.0           - Initial Release


================================================
FILE: README
================================================
ALPM library overview & internals
=================================

Here is a list of the main objects and files from the ALPM (i.e. Arch Linux
Package Management) library. This document, while not exhaustive, also
indicates some limitations (on purpose, or sometimes due to its poor design) of
the library at the present time.

There is one special file,"alpm.h", which is the public interface that
should be distributed and installed on systems with the library. Only
structures, data and functions declared within this file are made available to
the frontend. Lots of structures are of an opaque type and their fields are
only accessible in read-only mode, through some clearly defined functions.

In addition to "alpm.h", the interfaces of "alpm_list.h" have also been made
available to the frontend, for allowing it to manipulate the lists returned by
the backend.

Several structures and functions have been renamed compared to pacman 2.9 code.
This was done at first for the sake of naming scheme consistency, and then
primarily because of potential namespace conflicts between library and frontend
spaces. Indeed, it is not possible to have two different functions with the
same name declared in both spaces. To avoid such conflicts, internal function
names have been prepended with "_alpm_".

In a general manner, public library functions are named "alpm_<type>_<action>"
(examples: alpm_trans_commit(), alpm_release(), alpm_pkg_get_name(), ...).
Internal (and thus private) functions should be named "_alpm_XXX" for instance
(examples: _alpm_needbackup(), _alpm_runscriplet(), ...). Functions defined and
used inside a single file should be defined as "static".


[Initialization]

alpm_initialize() is used to initialize library internals and to create
a transparent handle object. Before its call, the library can't be used.

alpm_release() just does the opposite (memory used by the library, and the
handle is freed). After its call, the library is no longer available.


[Options]

The library does not use any configuration file. It is up to the front end to
configure the library as needed; the handle holds a number of configuration
options instead.

All of the following options have a alpm_option_get_* and alpm_option_set_*
function for getting and setting the value. They cannot be set before the
library is initialized.

* logcb: The callback function for "log" operations.
* dlcb: The callback function for download progress of each package.
* fetchcb: Callback for custom download function.
* eventcb: Callback for transaction messages.
* questioncb: Callback for selecting amongst choices.
* progresscb: Callback to handle display of transaction progress.
* gpgdir: Directory where GnuPG files are stored.
* arch: Allowed package architecture.
* checkspace: Check disk space before installing.
* default_siglevel: Default signature verification level.
* local_file_siglevel: Signature verification level for local file upgrades.
* remote_file_siglevel: Signature verification level for remote file upgrades.
* logfile: The base path to pacman's log file (Default: /var/log/pacman.log)
* usesyslog: Log to syslog instead of `logfile` for file-base logging.

The following options also have `alpm_option_{add,remove}_*` functions, as the
values are list structures.
NOTE: The add and remove functions are NOT plural, as they are in English:
alpm_option_{get,set}_noupgrades -> alpm_option_{add,remove}_noupgrade.

* cachedirs: Paths to pacman's download caches (Default: /var/cache/pacman/pkg)
* noupgrades: Files which will never be touched by pacman (extracted as .pacnew)
* noextracts: Files which will never be extracted at all (no .pacnew file)
* ignorepkgs: Packages to ignore when upgrading.
* ignoregrps: Groups to ignore when upgrading.

The following options are read-only, having ONLY alpm_option_get_* functions:

* root: The root directory for pacman to install to
* dbpath: The toplevel database directory
* lockfile: The file used for locking the database (Default: <dbpath>/db.lck)


[Transactions]

The transaction structure permits easy manipulations of several packages
at a time (i.e. adding, upgrade and removal operations).

A transaction can be initiated with a type (SYNC, UPGRADE or REMOVE),
and some flags (NODEPS, FORCE, CASCADE, ...).

Note: there can only be one type at a time: a transaction is either
created to add packages to the system, or either created to remove packages.
The frontend can't request for mixed operations: it has to run several
transactions, one at a time, in such a case.

The flags allow to tweak the library behaviour during its resolution.
Note, that some options of the handle can also modify the behavior of a
transaction (NOUPGRADE, IGNOREPKG, ...).

Note: once a transaction has been initiated, it is not possible anymore
to modify its type or its flags.

One can also add some targets to a transaction (alpm_trans_addtarget()).
These targets represent the list of packages to be handled.

Then, a transaction needs to be prepared (alpm_trans_prepare()). It
means that the various targets added, will be inspected and challenged
against the set of already installed packages (dependency checking, etc...)

Last, a callback is associated with each transaction. During the
transaction resolution, each time a new step is started or done (i.e
dependency or conflict checking, package adding or removal, ...), the
callback is called, allowing the frontend to be aware of the progress of
the resolution. Can be useful to implement a progress bar.


[Package Cache]

libalpm maintains two caches for each DB. One is a general package cache, the
other is a group cache (for package groups). These caches are loaded on demand,
and freed when the library is.

It is important to note that, as a general rule, package structures should NOT
be freed manually, as they SHOULD be part of the cache.  The cache of a
database is always updated by the library after an operation changing the
database content (adding and/or removal of packages).  Beware frontends ;)


[Package]

The package structure maintains all information for a package. In general,
packages should never be freed from front-ends, as they should always be part
of the package cache.

The 'origin' data member indicates whether the package is from a file (i.e. -U
operations) or from the package cache. In the case of a file, all data members
available are present in the structure. Packages indicated as being from the
cache have data members filled on demand. For this reason, the alpm_pkg_get_*
functions will load the data from the DB as needed.


[Errors]

The library provides a global variable pm_errno.
It aims at being to the library what errno is for C system calls.

Almost all public library functions are returning an integer value: 0
indicating success, -1 indicating a failure.
If -1 is returned, the variable pm_errno is set to a meaningful value
Wise frontends should always care for these returned values.

Note: the helper function alpm_strerror() can also be used to translate one
specified error code into a more friendly sentence, and alpm_strerrorlast()
does the same for the last error encountered (represented by pm_errno).


[List - alpm_list_t]

The alpm_list_t structure is a doubly-linked list for use with the libalpm
routines. This type is provided publicly so that frontends are free to use it
if they have no native list type (C++, glib, python, etc all have list types).
See the proper man pages for alpm_list_t references.



PACMAN frontend overview & internals
====================================

Here are some words about the frontend responsibilities.
The library can operate only a small set of well defined operations and
dummy operations.

High level features are left to the frontend ;)

For instance, during a sysupgrade, the library returns the whole list of
packages to be upgraded, without any care for its content.
The frontend can inspect the list and perhaps notice that "pacman"
itself has to be upgraded. In such a case, the frontend can choose to
perform a special action.


[MAIN] (see pacman.c)

Calls for alpm_initialize(), and alpm_release().
Read the configuration file, and parse command line arguments.
Based on the action requested, it initiates the appropriate transactions
(see pacman_upgrade(), pacman_remove(), pacman_sync() in files upgrade.c,
remove.c and sync.c).


[CONFIGURATION] (see conf.h)

The frontend is using a configuration file, usually "/etc/pacman.conf".  Some
of these options are only useful for the frontend only (mainly the ones used to
control the output like verbosepkglist, or the behavior with cleanmethod).
The rest is used to configure the library.


[UPGRADE/REMOVE/SYNC]

The file pacman.c has been divided into several smaller files, namely
upgrade.c, remove.c, sync.c and query.c, to hold the big parts: pacman_upgrade,
pacman_remove, pacman_sync.

These 3 functions have been split to ease the code reading.



API CHANGES BETWEEN 3.1 AND 3.2
===============================

[REMOVED]
- alpm_db_whatprovides()
- alpm_splitdep (no longer public)
- trans->targets was removed, so alpm_trans_get_targets() as well
- error codes:
    PM_ERR_OPT_*, PM_ERR_PKG_INSTALLED, PM_ERR_DLT_CORRUPTED,
    PM_ERR_LIBARCHIVE_ERROR
- event: PM_TRANS_EVT_EXTRACT_DONE
- PM_TRANS_TYPE_ADD pmtranstype_t (add transaction)
- PM_TRANS_FLAG_DEPENDSONLY pmtransflag_t

[CHANGED]
- alpm_grp_get_pkgs returns with pmpkg_t list, not package-name list
- Swap parameters on PM_TRANS_CONV_INSTALL_IGNOREPKG callback function
- download callback API changed: alpm_cb_download, alpm_cb_totaldl split
  (+ new alpm_option_get_totaldlcb(), alpm_option_set_totaldlcb() functions)
- unsigned long->off_t changes where size is used
- pmsyncpkg_t struct changes:
  - pmsynctype_t and alpm_sync_get_type() were removed
  - alpm_sync_get_data() was removed
  - alpm_sync_get_removes() was added

[ADDED]
- alpm_delta_get_from_md5sum(), alpm_delta_get_to_md5sum()
- alpm_miss_get_causingpkg() (new causingpkg field in pmdepmissing_t)
- alpm_checkdbconflicts()
- alpm_sync_newversion()
- alpm_deptest()
- error codes :
    PM_ERR_DLT_INVALID, PM_ERR_LIBARCHIVE, PM_ERR_LIBDOWNLOAD and
    PM_ERR_EXTERNAL_DOWNLOAD
- flags:
    PM_TRANS_FLAG_ALLEXPLICIT, PM_TRANS_FLAG_UNNEEDED and
    PM_TRANS_FLAG_RECURSEALL


API CHANGES BETWEEN 3.2 AND 3.3
===============================

[REMOVED]
- pmsyncpkg_t struct (pmpkg_t is used for all types of transaction targets):
  - alpm_sync_get_pkg()
  - alpm_sync_get_removes() (use alpm_pkg_get_removes() instead)
- HoldPkg handling (it is the front-end's task):
  - alpm_option_get_holdpkgs()
  - alpm_option_add_holdpkg()
  - alpm_option_set_holdpkgs()
  - alpm_option_remove_holdpkg()
  - PM_TRANS_CONV_REMOVE_HOLDPKG conversation
- Print URIs feature (it is the front-end's task):
  - flag: PM_TRANS_FLAG_PRINTURIS
  - event: PM_TRANS_EVT_PRINTURI
- alpm_delta_get_from_md5sum() and alpm_delta_get_to_md5sum()
- alpm_sync_sysupgrade()
- error codes:
    PM_ERR_TRANS_COMMITING, PM_ERR_TRANS_DOWNLOADING, PM_ERR_PKG_LOAD,
    PM_ERR_PKG_CANT_FRESH, PM_ERR_GRP_NOT_FOUND, PM_ERR_USER_ABORT,
    PM_ERR_INTERNAL_ERROR, PM_ERR_DB_SYNC, PM_ERR_PKG_HOLD and
    PM_ERR_LIBDOWNLOAD

[CHANGED]
- XferCommand support was removed, any fetch callback function can be defined:
  - alpm_option_get_xfercommand() and alpm_option_set_xfercommand() were removed
  - alpm_option_get_fetchcb() and alpm_option_set_fetchcb() were added
- function renames:
  - alpm_db_getpkgcache() -> alpm_db_get_pkgcache()
  - alpm_db_getgrpcache() -> alpm_db_get_grpcache()
  - alpm_dep_get_string() -> alpm_dep_compute_string()
  - alpm_get_md5sum() -> alpm_compute_md5sum()
  - alpm_checkdbconflicts() -> alpm_checkconflicts()
- alpm_trans_sysupgrade() has a new enable_downgrade parameter
- alpm_checkdeps() and alpm_checkconflicts() require local package list instead
  of local database
- the to-be-upgraded package is passed to the callback function with
  PM_TRANS_EVT_UPGRADE_START (as the second parameter)
- the "requiredby" package is never passed to the callback function with
  PM_TRANS_CONV_INSTALL_IGNOREPKG (the second parameter is always NULL)

[ADDED]
- alpm_pkg_get_db()
- alpm_pkg_get_removes()
- conversation: PM_TRANS_CONV_REMOVE_PKGS (remove unresolvable targets)
- flag: PM_TRANS_FLAG_NOLOCK (do not lock database)
- error codes:
    PM_ERR_SERVER_NONE, PM_ERR_TRANS_NOT_LOCKED, PM_ERR_PKG_IGNORED and
    PM_ERR_LIBFETCH


API CHANGES BETWEEN 3.3 AND 3.4
===============================

[REMOVED]
- pmtranstype_t struct (transaction type), alpm_trans_get_type()
- alpm_option_get_nopassiveftp(), alpm_option_set_nopassiveftp()

[CHANGED]
- interface for target loading:
  - alpm_trans_addtarget() and alpm_trans_sysupgrade() were removed
  - alpm_sync_target() and alpm_sync_dbtarget() can be used to add a sync target
  - alpm_sync_sysupgrade() can be used to add outdated packages (for sysupgrade)
  - alpm_add_target() can be used to add an add/upgrade target
  - alpm_remove_target() can be used to add a remove target
- interface for target listing:
  - alpm_trans_get_pkgs() was removed
  - alpm_pkg_get_removes() was removed
  - alpm_trans_get_add() can be used to list add/upgrade/sync targets
  - alpm_trans_get_remove() can be used to list to-be-removed packages
- the type parameter of alpm_trans_init() was removed
- the type of alpm_db_fetch callback function: mtimeold and mtimenew parameters
  were replaced by force parameter
- unsigned short -> int changes for Boolean variables

[ADDED]
- alpm_db_set_pkgreason()
- alpm_option_get_arch(), alpm_option_set_arch()
- alpm_option_get_usedelta()
- alpm_pkg_unused_deltas()
- alpm_conflict_get_reason()
- error code: PM_ERR_PKG_INVALID_ARCH


API CHANGES BETWEEN 3.4 AND 3.5
===============================

[REMOVED]
- alpm_db_register_local()
- alpm_pkg_has_force()
- alpm_depcmp()

[CHANGED]
- alpm_trans_cb_progress type had some types changed from int to size_t
- alpm_cb_log format string is now const char *
- the interface to add/remove targets:
  - functions take pmpkg_t * rather than char *.
  - alpm_sync_target() and alpm_sync_dbtarget() are replaced by alpm_add_pkg()
  - alpm_add_target() is replaced by alpm_add_pkg()
  - alpm_remove_target() is replaced by alpm_remove_pkg()
  - packages can come from:
     - alpm_db_get_pkg() for normal targets
     - alpm_find_dbs_satisfier() for versioned provisions
     - alpm_find_grp_pkgs() for groups
- alpm_deptest() is replaced by the more flexibile alpm_find_satisfier()
- size_t used for alpm_list_t sizes
  - return type for alpm_list_count()
  - parameter type in alpm_list_msort() and alpm_list_nth()

[ADDED]
- alpm_option_get_checkspace(), alpm_option_set_checkspace()
- alpm_find_grp_pkgs()
- alpm_trans_get_flags()
- error codes:
   PM_ERR_DISK_SPACE, PM_ERR_WRITE
- flags
   PM_TRANS_FLAG_NODEPVERSION, PM_TRANS_EVT_DISKSPACE_START,
   PM_TRANS_EVT_DISKSPACE_DONE, PM_TRANS_CONV_SELECT_PROVIDER,
   PM_TRANS_PROGRESS_DISKSPACE_START, PM_TRANS_PROGRESS_INTEGRITY_START


API CHANGES BETWEEN 3.5 AND 4.0
===============================

[REMOVED]
- error codes:
    PM_ERR_LIBFETCH, PM_ERR_WRITE
- alpm_option_set_root(), alpm_option_set_dbpath()
- alpm_list_first()
- alpm_grp_get_name(), alpm_grp_get_pkgs()
- alpm_delta_get_from(), alpm_delta_get_to(), alpm_delta_get_filename(),
    alpm_delta_get_md5sum(), alpm_delta_get_size()
- alpm_miss_get_target(), alpm_miss_get_dep(), alpm_miss_get_causingpkg()
- alpm_dep_get_mod(), alpm_dep_get_name(), alpm_dep_get_version()
- alpm_conflict_get_package1(), alpm_conflict_get_package2(),
    alpm_conflict_get_reason()
- alpm_fileconflict_get_target(), alpm_fileconflict_get_type(),
    alpm_fileconflict_get_file(), alpm_fileconflict_get_ctarget()
- alpm_db_get_url()

[CHANGED]
- PM_ prefixes for enum values are now ALPM_
- pm prefixes for structs and enums are now alpm_
- alpm_initialize now has parameters: char *root, char *dbpath,
    alpm_errno_t *err and returns an alpm_handle_t struct.
- alpm_release now takes an alpm_handle_t *.
- alpm_db_register_sync() now requires a extra parameter of a alpm_siglevel_t.
- alpm_pkg_load() now requires an extra parameter of an alpm_siglevel_t
- alpm_db_setserver() replaced by alpm_db_set_servers(), alpm_db_add_server(),
    alpm_db_remove_server()
- alpm_trans_init() no longer takes callbacks, set those using
    alpm_option_set_*cb() functions
- many functions now require a first parameter of an alpm_handle_t *:
  - alpm_option_get_*
  - alpm_option_set_*
  - alpm_option_add_*
  - alpm_option_remove_*
  - alpm_trans_*
  - alpm_add_pkg
  - alpm_checkconflicts
  - alpm_checkdeps
  - alpm_db_register_sync
  - alpm_db_set_pkgreason
  - alpm_db_unregister_all
  - alpm_fetch_pkgurl
  - alpm_find_dbs_satisfier
  - alpm_logaction
  - alpm_pkg_load
  - alpm_release
  - alpm_remove_pkg
  - alpm_sync_sysupgrade
- several structs are no longer opaque
  - alpm_conflict_t
  - alpm_delta_t
  - alpm_depend_t
  - alpm_depmissing_t
  - alpm_depmod_t
  - alpm_fileconflict_t
  - alpm_group_t
  - alpm_pkg_reason_t

[ADDED]
- option functions:
    alpm_{get,set}_eventcb(), alpm_option_{get,set}_convcb(),
	alpm_option_{get,set}_progresscb()
- package signing functions:
    alpm_option_get_default_siglevel(), alpm_option_set_default_siglevel(),
    alpm_option_get_gpgdir(), alpm_option_set_gpgdir(), alpm_db_get_siglevel(),
    alpm_siglist_cleanup(), alpm_db_check_pgp_signature(), alpm_pkg_check_pgp_signature(),
    alpm_pkg_get_origin(), alpm_pkg_get_sha256sum(), alpm_pkg_get_base64_sig()
- list functions:
    alpm_list_to_array(), alpm_list_previous()
- structs:
    alpm_backup_t, alpm_file_t, alpm_filelist_t
- enums:
    alpm_siglevel_t, alpm_sigstatus_t, alpm_sigvalidity_t, alpm_pkgfrom_t
- error codes:
    ALPM_ERR_DB_INVALID, ALPM_ERR_DB_INVALID_SIG, ALPM_ERR_GPGME,
    ALPM_ERR_PKG_INVALID_CHECKSUM, ALPM_ERR_PKG_INVALID_SIG, ALPM_ERR_SIG_INVALID,
    ALPM_ERR_SIG_MISSING


API CHANGES BETWEEN 4.0 AND 4.1
===============================

[REMOVED]
- alpm_list_getdata()

[CHANGED]
- alpm_pkgfrom_t members are now prefixed with ALPM_
- alpm_siglevel_t - added members ALPM_SIG_PACKAGE_SET, ALPM_SIG_PACKAGE_TRUST_SET
- alpm_depend_t - additional desc member
- alpm_filelist_t - additional resolved_path member
- alpm_pgpkey_t - added members length, revoked, pubkey_algo
- alpm_logaction - added caller identifier argument
- function renaming:
  - alpm_option_get_localdb -> alpm_get_localdb
  - alpm_option_get_syncdbs -> alpm_get_syncdbs
  - alpm_db_register_sync -> alpm_register_syncdb
  - alpm_db_unregister_all -> alpm_unregister_all_syncdbs
  - alpm_db_readgroup -> alpm_db_get_group
  - alpm_db_set_pkgreason -> alpm_pkg_set_reason (handle parameter removed)
- alpm_time_t typedef used for all times
  - members of alpm_pgpkey_t
  - return types of alpm_pkg_get_builddate and alpm_pkg_get_installdate
- delta options now use required ratio rather than on/off
  - alpm_option_get_usedelta -> alpm_option_get_deltaratio
  - alpm_option_set_usedelta -> alpm_option_set_deltaratio

[ADDED]
- tracking of how a package was validated:
  - alpm_pkgvalidation_t
  - alpm_pkg_get_validation()
- adjustable signature verification levels for upgrade operations:
  - alpm_option_get_local_file_siglevel()
  - alpm_option_set_local_file_siglevel()
  - alpm_option_get_remote_file_siglevel()
  - alpm_option_set_remote_file_siglevel()
- sync database usage functions:
  - alpm_db_usage_t
  - alpm_db_set_usage()
  - alpm_db_get_usage()
- wrapper functions for reading mtree files
  - alpm_pkg_mtree_open()
  - alpm_pkg_mtree_next()
  - alpm_pkg_mtree_close()
- utility functions
  - alpm_pkg_find()
  - alpm_pkg_compute_optionalfor()
  - alpm_filelist_contains()
- types
  - alpm_time_t
  - alpm_errno_t
- flags
   ALPM_EVENT_OPTDEP_REQUIRED, ALPM_EVENT_DATABASE_MISSING,
   ALPM_EVENT_KEYRING_START, ALPM_EVENT_KEYRING_DONE, ALPM_EVENT_KEY_DOWNLOAD_START,
   ALPM_EVENT_KEY_DOWNLOAD_DONE, ALPM_PROGRESS_KEYRING_START


API CHANGES BETWEEN 4.1 AND 4.2
===============================

[CHANGED]
- alpm_filelist_t - removed member resolved_path
- alpm_filelist_contains - now returns alpm_file_t
- event callback
   - alpm_event_t renamed to alpm_event_type_t
   - alpm_event_t union added
   - alpm_event_cb now takes only an alpm_event_t parameter
   - alpm_event_any_t, alpm_package_operation_t, alpm_event_package_operation_t,
     alpm_event_optdep_removal_t, alpm_event_delta_patch_t, alpm_event_scriptlet_info_t,
     alpm_event_database_missing_t, alpm_event_pkgdownload_t, alpm_event_pacnew_created_t,
     alpm_event_pacsave_created_t, alpm_event_pacorig_created_t added
   - ALPM_EVENT_*_START -> ALPM_EVENT_PACKAGE_OPERATION_START
   - ALPM_EVENT_*_DONE -> ALPM_EVENT_PACKAGE_OPERATION_DONE
- question callback
   - alpm_question_t renamed to alpm_question_type_t
   - alpm_question_t union added
   - alpm_cb_question now takes only an alpm_question_t parameter
   - alpm_question_any_t, alpm_question_install_ignorepkg_t, alpm_question_replace_t
     alpm_question_conflict_t, alpm_question_corrupted_t, alpm_question_remove_pkgs_t,
     alpm_question_select_provider_t, alpm_question_import_key_t added

[ADDED]
- memory management
  - alpm_fileconflict_free()
  - alpm_depmissing_free()
  - alpm_conflict_free()
  - alpm_dep_free()
- database usage
  - alpm_db_usage_t
  - alpm_db_set_usage()
  - alpm_db_get_usage()
- assume installed
  - alpm_option_get_assumeinstalled()
  - alpm_option_add_assumeinstalled()
  - alpm_option_set_assumeinstalled()
  - alpm_option_remove_assumeinstalled()
- using noupgrade/noextract
  - alpm_option_match_noupgrade()
  - alpm_option_match_noextract()
- utility functions
  - alpm_dep_from_string()
  - alpm_pkg_should_ignore()
  - alpm_decode_signature()
  - alpm_extract_keyid()
- flags
  - ALPM_EVENT_RETRIEVE_DONE, ALPM_EVENT_RETRIEVE_FAILED, ALPM_EVENT_PKGDOWNLOAD_START,
    ALPM_EVENT_PKGDOWNLOAD_DONE, ALPM_EVENT_PKGDOWNLOAD_FAILED, ALPM_EVENT_OPTDEP_REMOVAL,
    ALPM_EVENT_PACNEW_CREATED, ALPM_EVENT_PACSVAE_CREATED, ALPM_EVENT_PACORIG_CREATED


API CHANGES BETWEEN 4.2 AND 5.0
===============================

[REMOVED]
- alpm_siglevel_t - removed members ALPM_SIG_PACKAGE_SET, ALPM_SIG_PACKAGE_TRUST_SET
- removed .pacorig generation
  - ALPM_EVENT_PACORIG_CREATED
  - alpm_event_pacorig_created_t
  - alpm_event_t.pacorig_created

[ADDED]
- hook support
  - alpm_option_get_hookdirs()
  - alpm_option_set_hookdirs()
  - alpm_option_add_hookdir()
  - alpm_option_remove_hookdir()
  - alpm_event_hook_t, alpm_event_hook_run_t
  - alpm_hook_when_t
  - ALPM_EVENT_HOOK_START, ALPM_EVENT_HOOK_DONE
  - ALPM_EVENT_HOOK_RUN_START, ALPM_EVENT_HOOK_RUN_DONE
  - ALPM_ERR_TRANS_HOOK_FAILED
- different database extension support
  - alpm_option_get_dbext()
  - alpm_option_set_dbext()
- pkgbase accessor
  - alpm_pkg_get_base()
- transaction events
  - ALPM_EVENT_TRANSACTION_START, ALPM_EVENT_TRANSACTION_DONE
- database unlocking
  - alpm_unlock()


API CHANGES BETWEEN 5.0 AND 5.1
===============================

[CHANGED]
- alpm_errno_t - added member ALPM_ERR_OK
- alpm_siglevel_t - value of ALPM_SIG_USE_DEFAULT changed
- functions using bitfields return/pass an int instead of an enum
  - alpm_option_get_default_siglevel()
  - alpm_option_set_default_siglevel()
  - alpm_option_get_remote_file_siglevel()
  - alpm_option_set_remote_file_siglevel()
  - alpm_register_syncdb()
  - alpm_db_get_siglevel()
  - alpm_db_set_usage()
  - alpm_db_get_usage()
  - alpm_pkg_load()
  - alpm_pkg_get_validation()
  - alpm_trans_get_flags()
  - alpm_trans_init()
  - alpm_option_get_local_file_siglevel()
  - alpm_option_set_local_file_siglevel()

[ADDED]
- overwrite support
  - alpm_option_get_overwrite_files()
  - alpm_option_set_overwrite_files()
  - alpm_option_add_overwrite_file()
  - alpm_option_remove_overwrite_file()
- download timeout control
  - alpm_option_set_disable_dl_timeout()
- access make/checkdepends info
  - alpm_pkg_get_checkdepends()
  - alpm_pkg_get_makedepends()
- check pacman capabilities
  - alpm_capabilities()
- duplicate and add to list
  - alpm_list_append_strdup()


API CHANGES BETWEEN 5.1 AND 5.2
===============================

[REMOVED]
- package delta support
  - alpm_delta_t
  - alpm_event_delta_patch_t
  - alpm_event_t union - removed alpm_event_delta_patch_t
  - ALPM_EVENT_DELTA_INTEGRITY_START, ALPM_EVENT_DELTA_INTEGRITY_DONE,
    ALPM_EVENT_DELTA_PATCHES_START, ALPM_EVENT_DELTA_PATCHES_DONE,
    ALPM_EVENT_DELTA_PATCH_START, ALPM_EVENT_DELTA_PATCH_DONE,
    ALPM_EVENT_DELTA_PATCH_FAILED
  - ALPM_ERR_DLT_INVALID, ALPM_ERR_DLT_PATCHFAILED
  - alpm_option_get_deltaratio()
  - alpm_option_set_deltaratio()
  - alpm_pkg_get_deltas()
  - alpm_pkg_unused_deltas()
- alpm_transflag_t - removed member ALPM_TRANS_FLAG_FORCE

[CHANGED]
- alpm_errno_t - added member ALPM_ERR_MISSING_CAPABILITY_SIGNATURES
- alpm_sync_newversion() replaced with alpm_sync_get_new_version() which
  does not filter on any ALPM_DB_USAGE_*.


API CHANGES BETWEEN 5.2 AND 6.0
===============================

[REMOVED]
- ALPM_EVENT_PKGDOWNLOAD_START, ALPM_EVENT_PKGDOWNLOAD_DONE, ALPM_EVENT_PKGDOWNLOAD_FAILED
- ALPM_ERR_PKG_REPO_NOT_FOUND
- old TotalDownload implementation
 - alpm_cb_totaldl
 - alpm_option_get_totaldlcb()
 - alpm_option_set_totaldlcb()

[CHANGED]
- alpm_db_update() now accepts a list of databases rather than a single database.
- alpm_fetch_pkgurl() accepts a list of packages to download.
- alpm_db_search() now has an additional parameter and returns success status
- ALPM_EVENT_RETRIEVE_* -> ALPM_EVENT_DB_RETRIEVE_* and ALPM_EVENT_PKG_RETRIEVE_*
- alpm_cb_download pass event and data
- multi architecture support
 - alpm_option_get_arch() -> alpm_option_get_architectures()
 - alpm_option_set_arch() -> alpm_option_set_architectures()
- alpm_db_get_servers() copies parameter data

[ADDED]
- parallel download support
 - alpm_option_set_parallel_downloads()
 - alpm_option_get_parallel_downloads()
- file download events
 - alpm_download_event_type_t
 - alpm_download_event_init_t
 - alpm_download_event_progress_t
 - alpm_download_event_completed_t
- download misc
 - ALPM_DOWNLOAD_RETRY
 - alpm_download_event_retry_t
 - alpm_event_pkg_retrieve_t
- multiarchitecture support
 - alpm_option_add_architecture()
 - alpm_option_remove_architecture()
- misc
 - alpm_pkg_get_sig()
- callbacks add front-end provided context


API CHANGES BETWEEN 6.0 AND 6.1
===============================

[REMOVED]
- alpm_trans_t

[CHANGED]
- alpm_conflict_t - full package added as member, removing package name and name
  hash members
- alpm_question_import_key_t - holds key uid and fingerprint rather than alpm_pgpkey_t
- alpm_pkgreason_t - added ALPM_PKG_REASON_UNKNOWN
- alpm_transflag_t - added ALPM_TRANS_FLAG_NOHOOKS

[ADDED]
- extensible package data type
 - alpm_pkg_xdata_t
 - alpm_pkg_get_xdata()
- accessor functions
 - alpm_db_get_handle()
 - alpm_pkg_get_handle()
- cache server support
 - alpm_db_get_cache_servers()
 - alpm_db_set_cache_servers()
 - alpm_db_add_cache_server()


================================================
FILE: RELEASE
================================================
The following checklist should be used for making a pacman release.

- Ensure "ninja dist" succeeds
- Call a freeze to development.
- Send translation updates to Transifex at least two weeks before a major
  release (see below).  At this stage, strings can only be changed for a
  major issue.
- Update NEWS and README files
- Pull translation updates from Transifex
- Update version in meson.build as described in file
- Update doc/index.asciidoc
- Create a signed git tag (git tag -s vX.Y.Z -m "commit message")
- Create and sign release tarballs (generate with "ninja dist")
- Update pacman website

Transifex updates are handled using the transifex client. The basic process is:
- Pull updates from transifex ("tx pull -f --minimum-perc 75")
- Update po files ("./build-aux/update-po")
- Fix all translation errors found
- Add any new locales to the relevant LINGUAS file
- Optional: Make any manual changes needed (e.g. fixing spacing in a string)
  and update po files again
- Push updated po files to transifex ("tx push -s -t --skip")


================================================
FILE: TRANSLATORS
================================================
Thanks to all of those who have helped translate pacman, both in the past and
currently. Our translations are currently maintained in Transifex; please read
doc/translation-help.txt for more details.

Below is a list of past translators before we switched to Transifex; more can
be found by looking in the GIT history.

If your language is not already in the various po/ subdirectories and you wish
it was, set up a team in Transifex for your language and we will be happy to
add your language to the mix.

Catalan (ca):
	Manuel Tortosa <manutortosa@chakra-project.org>
Czech (cs):
	Vojtěch Gondžala <vojtech.gondzala@gmail.com>
German (de):
	Matthias Gorissen <matthias@archlinux.de>
Greek (el):
	Christos Nouskas <nouskas@gmail.com>
British English (en_GB):
	Jeff Bailes <thepizzaking@gmail.com>
Spanish (es):
	Juan Pablo González Tognarelli <lord_jotape@yahoo.com.ar>
	Fernando Lagos <fernando@zerial.org>
French (fr):
	Chantry Xavier <shiningxc@gmail.com>
Hungarian (hu):
	Nagy Gabor <ngaba@bibl.u-szeged.hu>
	Avramucz Péter <muczyjoe@gmail.com>
Italian (it):
	Giovanni Scafora <giovanni@archlinux.org>
Kazakh (kk):
	Baurzhan Muftakhidinov <baurthefirst@gmail.com>
Norwegian (nb):
	Hans-Kristian Arntzen <maister@archlinux.us>
Polish (pl):
	Mateusz Herych <heniekk@gmail.com>
	Jaroslaw Swierczynski <swiergot@gmail.com>
	Mateusz Jędrasik <m.jedrasik@gmail.com>
Brazilian Portuguese (pt_BR):
	Armando M. Baratti <ambaratti@archlinux-br.org>
	Rodrigo Flores <flores@archlinux-br.org>
	Marcelo Cavalcante <kalibslack@gmail.com>
Romanian (ro):
	Volodia Macovei <blog@volodia.ro>
Russian (ru):
	Sergey Tereschenko <serg.partizan@gmail.com>
	Vitaly Dolgov <ferhiord@gmail.com>
	Oleg Finkelshteyn <olegfink@gmail.com>
	Vladimir Bayrakovskiy <4rayven@gmail.com>
Swedish (sv):
	Christian Larsson <congacx@gmail.com>
Turkish (tr):
	Samed Beyribey <ras0ir@eventualis.org>
	Alper KANAT <alperkanat@gmail.com>
Ukrainian (uk):
	Roman Kyrylych (Роман Кирилич) <roman.kyrylych@gmail.com>
	Ivan Kovnatsky (Іван Ковнацький) <sevenfourk@gmail.com>
Simplified Chinese (zh_CN):
	甘露(Lu.Gan) <rhythm.gan@gmail.com>


================================================
FILE: doc/BUILDINFO.5.asciidoc
================================================
BUILDINFO(5)
============

Name
----
BUILDINFO - Makepkg package build information file


Synopsis
--------
This manual page describes the format of a BUILDINFO file found in the root of
a package created by makepkg. The file contains a description of the package's
build environment. The information is formatted in key-value pairs separated by
a '=', one value per line. Arrays are represented multiple keys with the same
value.


Description
-----------

This is a description of the contents of version '2' of the
BUILDINFO file format.

*format*::
	Denotes the file format version, represented by a plain positive integer.

*pkgname*::
	The name of the package.

*pkgbase*::

	The base name of a package, usually the same as the pkgname except for
	split packages.

*pkgver*::
	The version of the package including pkgrel and epoch.

*pkgarch*::
	The architecture of the package.

*pkgbuild_sha256sum*::
	The sha256sum in hex format of the PKGBUILD used to build the package.

*packager*::
	The details of the packager that built the package.

*builddate*::
	The build date of the package in epoch.

*builddir*::
	The directory where the package was built.

*startdir*::
	The directory from which makepkg was executed.

*buildtool*::
	The name of the tool ecosystem used to set up the build environment. Used
	for defining a spec for reproducible builds, e.g. the source of the
	linkman:makepkg.conf[5] used.

*buildtoolver*::
	The full version of the 'buildtool', for example:
	"$pkgver-$pkgrel-$pkgarch".

*buildenv (array)*::
	The build environment specified in makepkg.conf.

*options (array)*::
	The options set specified when building the package.

*installed (array)*::
	The installed packages at build time including the version information of
	the package. Formatted as "$pkgname-$pkgver-$pkgrel-$pkgarch".

See Also
--------
linkman:makepkg[8], linkman:pacman[8], linkman:makepkg.conf[5]

include::footer.asciidoc[]


================================================
FILE: doc/Doxyfile.in
================================================
# Doxyfile 1.9.3

#---------------------------------------------------------------------------
# Project related configuration options
#---------------------------------------------------------------------------
DOXYFILE_ENCODING      = UTF-8
PROJECT_NAME           = libalpm
PROJECT_NUMBER         =
PROJECT_BRIEF          = "Arch Linux Package Manager Library"
PROJECT_LOGO           =
OUTPUT_DIRECTORY       = @OUTPUT_DIRECTORY@
CREATE_SUBDIRS         = NO
ALLOW_UNICODE_NAMES    = NO
OUTPUT_LANGUAGE        = English
BRIEF_MEMBER_DESC      = YES
REPEAT_BRIEF           = YES
ABBREVIATE_BRIEF       = "The $name class" \
                         "The $name widget" \
                         "The $name file" \
                         is \
                         provides \
                         specifies \
                         contains \
                         represents \
                         a \
                         an \
                         the
ALWAYS_DETAILED_SEC    = YES
INLINE_INHERITED_MEMB  = NO
FULL_PATH_NAMES        = NO
STRIP_FROM_PATH        =
STRIP_FROM_INC_PATH    =
SHORT_NAMES            = NO
JAVADOC_AUTOBRIEF      = YES
JAVADOC_BANNER         = NO
QT_AUTOBRIEF           = NO
MULTILINE_CPP_IS_BRIEF = NO
PYTHON_DOCSTRING       = YES
INHERIT_DOCS           = YES
SEPARATE_MEMBER_PAGES  = NO
TAB_SIZE               = 4
ALIASES                =
OPTIMIZE_OUTPUT_FOR_C  = YES
OPTIMIZE_OUTPUT_JAVA   = NO
OPTIMIZE_FOR_FORTRAN   = NO
OPTIMIZE_OUTPUT_VHDL   = NO
OPTIMIZE_OUTPUT_SLICE  = NO
EXTENSION_MAPPING      =
MARKDOWN_SUPPORT       = YES
TOC_INCLUDE_HEADINGS   = 5
AUTOLINK_SUPPORT       = YES
BUILTIN_STL_SUPPORT    = NO
CPP_CLI_SUPPORT        = NO
SIP_SUPPORT            = NO
IDL_PROPERTY_SUPPORT   = YES
DISTRIBUTE_GROUP_DOC   = NO
GROUP_NESTED_COMPOUNDS = NO
SUBGROUPING            = YES
INLINE_GROUPED_CLASSES = NO
INLINE_SIMPLE_STRUCTS  = YES
TYPEDEF_HIDES_STRUCT   = YES
LOOKUP_CACHE_SIZE      = 0
NUM_PROC_THREADS       = 1
#---------------------------------------------------------------------------
# Build related configuration options
#---------------------------------------------------------------------------
EXTRACT_ALL            = NO
EXTRACT_PRIVATE        = NO
EXTRACT_PRIV_VIRTUAL   = NO
EXTRACT_PACKAGE        = NO
EXTRACT_STATIC         = NO
EXTRACT_LOCAL_CLASSES  = YES
EXTRACT_LOCAL_METHODS  = NO
EXTRACT_ANON_NSPACES   = NO
RESOLVE_UNNAMED_PARAMS = YES
HIDE_UNDOC_MEMBERS     = NO
HIDE_UNDOC_CLASSES     = NO
HIDE_FRIEND_COMPOUNDS  = NO
HIDE_IN_BODY_DOCS      = YES
INTERNAL_DOCS          = NO
CASE_SENSE_NAMES       = YES
HIDE_SCOPE_NAMES       = NO
HIDE_COMPOUND_REFERENCE= NO
SHOW_HEADERFILE        = YES
SHOW_INCLUDE_FILES     = YES
SHOW_GROUPED_MEMB_INC  = NO
FORCE_LOCAL_INCLUDES   = NO
INLINE_INFO            = YES
SORT_MEMBER_DOCS       = YES
SORT_BRIEF_DOCS        = NO
SORT_MEMBERS_CTORS_1ST = NO
SORT_GROUP_NAMES       = NO
SORT_BY_SCOPE_NAME     = NO
STRICT_PROTO_MATCHING  = NO
GENERATE_TODOLIST      = YES
GENERATE_TESTLIST      = YES
GENERATE_BUGLIST       = YES
GENERATE_DEPRECATEDLIST= YES
ENABLED_SECTIONS       =
MAX_INITIALIZER_LINES  = 30
SHOW_USED_FILES        = YES
SHOW_FILES             = YES
SHOW_NAMESPACES        = YES
FILE_VERSION_FILTER    =
LAYOUT_FILE            =
CITE_BIB_FILES         =
#---------------------------------------------------------------------------
# Configuration options related to warning and progress messages
#---------------------------------------------------------------------------
QUIET                  = NO
WARNINGS               = YES
WARN_IF_UNDOCUMENTED   = YES
WARN_IF_DOC_ERROR      = YES
WARN_IF_INCOMPLETE_DOC = YES
WARN_NO_PARAMDOC       = NO
WARN_AS_ERROR          = NO
WARN_FORMAT            = "$file:$line: $text"
WARN_LOGFILE           =
#---------------------------------------------------------------------------
# Configuration options related to the input files
#---------------------------------------------------------------------------
INPUT                  = @INPUT_DIRECTORY@/../lib/libalpm/alpm.h \
                         @INPUT_DIRECTORY@/../lib/libalpm/alpm_list.h
INPUT_ENCODING         = UTF-8
FILE_PATTERNS          =
RECURSIVE              = NO
EXCLUDE                =
EXCLUDE_SYMLINKS       = NO
EXCLUDE_PATTERNS       =
EXCLUDE_SYMBOLS        = _alpm_* \
                         __alpm_*
EXAMPLE_PATH           =
EXAMPLE_PATTERNS       = *
EXAMPLE_RECURSIVE      = NO
IMAGE_PATH             =
INPUT_FILTER           =
FILTER_PATTERNS        =
FILTER_SOURCE_FILES    = NO
FILTER_SOURCE_PATTERNS =
USE_MDFILE_AS_MAINPAGE =
#---------------------------------------------------------------------------
# Configuration options related to source browsing
#---------------------------------------------------------------------------
SOURCE_BROWSER         = NO
INLINE_SOURCES         = NO
STRIP_CODE_COMMENTS    = NO
REFERENCED_BY_RELATION = YES
REFERENCES_RELATION    = YES
REFERENCES_LINK_SOURCE = YES
SOURCE_TOOLTIPS        = YES
USE_HTAGS              = NO
VERBATIM_HEADERS       = YES
#---------------------------------------------------------------------------
# Configuration options related to the alphabetical class index
#---------------------------------------------------------------------------
ALPHABETICAL_INDEX     = NO
IGNORE_PREFIX          =
#---------------------------------------------------------------------------
# Configuration options related to the HTML output
#---------------------------------------------------------------------------
GENERATE_HTML          = NO
HTML_OUTPUT            = html
HTML_FILE_EXTENSION    = .html
HTML_HEADER            =
HTML_FOOTER            =
HTML_STYLESHEET        =
HTML_EXTRA_STYLESHEET  =
HTML_EXTRA_FILES       =
HTML_COLORSTYLE_HUE    = 220
HTML_COLORSTYLE_SAT    = 100
HTML_COLORSTYLE_GAMMA  = 80
HTML_DYNAMIC_MENUS     = YES
HTML_DYNAMIC_SECTIONS  = NO
HTML_INDEX_NUM_ENTRIES = 100
GENERATE_DOCSET        = NO
DOCSET_FEEDNAME        = "Doxygen generated docs"
DOCSET_FEEDURL         =
DOCSET_BUNDLE_ID       = org.doxygen.Project
DOCSET_PUBLISHER_ID    = org.doxygen.Publisher
DOCSET_PUBLISHER_NAME  = Publisher
GENERATE_HTMLHELP      = NO
CHM_FILE               =
HHC_LOCATION           =
GENERATE_CHI           = NO
CHM_INDEX_ENCODING     =
BINARY_TOC             = NO
TOC_EXPAND             = NO
GENERATE_QHP           = NO
QCH_FILE               =
QHP_NAMESPACE          = org.doxygen.Project
QHP_VIRTUAL_FOLDER     = doc
QHP_CUST_FILTER_NAME   =
QHP_CUST_FILTER_ATTRS  =
QHP_SECT_FILTER_ATTRS  =
QHG_LOCATION           =
GENERATE_ECLIPSEHELP   = NO
ECLIPSE_DOC_ID         = org.doxygen.Project
DISABLE_INDEX          = NO
GENERATE_TREEVIEW      = NO
FULL_SIDEBAR           = NO
ENUM_VALUES_PER_LINE   = 4
TREEVIEW_WIDTH         = 250
EXT_LINKS_IN_WINDOW    = NO
OBFUSCATE_EMAILS       = YES
HTML_FORMULA_FORMAT    = png
FORMULA_FONTSIZE       = 10
FORMULA_MACROFILE      =
USE_MATHJAX            = NO
MATHJAX_VERSION        = MathJax_2
MATHJAX_FORMAT         = HTML-CSS
MATHJAX_RELPATH        = http://www.mathjax.org/mathjax
MATHJAX_EXTENSIONS     =
MATHJAX_CODEFILE       =
SEARCHENGINE           = NO
SERVER_BASED_SEARCH    = NO
EXTERNAL_SEARCH        = NO
SEARCHENGINE_URL       =
SEARCHDATA_FILE        = searchdata.xml
EXTERNAL_SEARCH_ID     =
EXTRA_SEARCH_MAPPINGS  =
#---------------------------------------------------------------------------
# Configuration options related to the LaTeX output
#---------------------------------------------------------------------------
GENERATE_LATEX         = NO
LATEX_OUTPUT           = latex
LATEX_CMD_NAME         = latex
MAKEINDEX_CMD_NAME     = makeindex
LATEX_MAKEINDEX_CMD    = makeindex
COMPACT_LATEX          = NO
PAPER_TYPE             = letter
EXTRA_PACKAGES         =
LATEX_HEADER           =
LATEX_FOOTER           =
LATEX_EXTRA_STYLESHEET =
LATEX_EXTRA_FILES      =
PDF_HYPERLINKS         = NO
USE_PDFLATEX           = NO
LATEX_BATCHMODE        = NO
LATEX_HIDE_INDICES     = NO
LATEX_BIB_STYLE        = plain
LATEX_EMOJI_DIRECTORY  =
#---------------------------------------------------------------------------
# Configuration options related to the RTF output
#---------------------------------------------------------------------------
GENERATE_RTF           = NO
RTF_OUTPUT             = rtf
COMPACT_RTF            = NO
RTF_HYPERLINKS         = NO
RTF_STYLESHEET_FILE    =
RTF_EXTENSIONS_FILE    =
#---------------------------------------------------------------------------
# Configuration options related to the man page output
#---------------------------------------------------------------------------
GENERATE_MAN           = YES
MAN_OUTPUT             = .
MAN_EXTENSION          = .3
MAN_SUBDIR             =
MAN_LINKS              = NO
#---------------------------------------------------------------------------
# Configuration options related to the XML output
#---------------------------------------------------------------------------
GENERATE_XML           = NO
XML_OUTPUT             = xml
XML_PROGRAMLISTING     = YES
XML_NS_MEMB_FILE_SCOPE = NO
#---------------------------------------------------------------------------
# Configuration options related to the DOCBOOK output
#---------------------------------------------------------------------------
GENERATE_DOCBOOK       = NO
DOCBOOK_OUTPUT         = docbook
#---------------------------------------------------------------------------
# Configuration options for the AutoGen Definitions output
#---------------------------------------------------------------------------
GENERATE_AUTOGEN_DEF   = NO
#---------------------------------------------------------------------------
# Configuration options related to the Perl module output
#---------------------------------------------------------------------------
GENERATE_PERLMOD       = NO
PERLMOD_LATEX          = NO
PERLMOD_PRETTY         = YES
PERLMOD_MAKEVAR_PREFIX =
#---------------------------------------------------------------------------
# Configuration options related to the preprocessor
#---------------------------------------------------------------------------
ENABLE_PREPROCESSING   = YES
MACRO_EXPANSION        = YES
EXPAND_ONLY_PREDEF     = YES
SEARCH_INCLUDES        = YES
INCLUDE_PATH           = ../..
INCLUDE_FILE_PATTERNS  = *.h
PREDEFINED             = HAVE_CONFIG_H= \
                         SYMEXPORT= \
                         HAVE_LIBARCHIVE \
                         HAVE_LIBCURL \
                         HAVE_LIBGPGME
EXPAND_AS_DEFINED      =
SKIP_FUNCTION_MACROS   = YES
#---------------------------------------------------------------------------
# Configuration options related to external references
#---------------------------------------------------------------------------
TAGFILES               =
GENERATE_TAGFILE       =
ALLEXTERNALS           = NO
EXTERNAL_GROUPS        = YES
EXTERNAL_PAGES         = YES
#---------------------------------------------------------------------------
# Configuration options related to the dot tool
#---------------------------------------------------------------------------
DIA_PATH               =
HIDE_UNDOC_RELATIONS   = YES
HAVE_DOT               = YES
DOT_NUM_THREADS        = 0
DOT_FONTPATH           =
CLASS_GRAPH            = YES
COLLABORATION_GRAPH    = YES
GROUP_GRAPHS           = YES
UML_LOOK               = NO
UML_LIMIT_NUM_FIELDS   = 10
DOT_UML_DETAILS        = NO
DOT_WRAP_THRESHOLD     = 17
TEMPLATE_RELATIONS     = NO
INCLUDE_GRAPH          = YES
INCLUDED_BY_GRAPH      = YES
CALL_GRAPH             = NO
CALLER_GRAPH           = NO
GRAPHICAL_HIERARCHY    = YES
DIRECTORY_GRAPH        = YES
DIR_GRAPH_MAX_DEPTH    = 1
DOT_IMAGE_FORMAT       = png
INTERACTIVE_SVG        = NO
DOT_PATH               =
DOTFILE_DIRS           =
MSCFILE_DIRS           =
DIAFILE_DIRS           =
PLANTUML_JAR_PATH      =
PLANTUML_CFG_FILE      =
PLANTUML_INCLUDE_PATH  =
DOT_GRAPH_MAX_NODES    = 50
MAX_DOT_GRAPH_DEPTH    = 3
DOT_MULTI_TARGETS      = NO
GENERATE_LEGEND        = YES
DOT_CLEANUP            = YES


================================================
FILE: doc/PKGBUILD-example.txt
================================================
# Maintainer: Joe User <joe.user@example.com>

pkgname=patch
pkgver=2.7.1
pkgrel=1
pkgdesc="A utility to apply patch files to original sources"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/patch/patch.html"
license=('GPL')
groups=('base-devel')
depends=('glibc')
makedepends=('ed')
optdepends=('ed: for "patch -e" functionality')
source=("ftp://ftp.gnu.org/gnu/$pkgname/$pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('9124ba46db0abd873d0995c2ca880e81252676bb6c03e0a37dfc5f608a9b0ceb'
            'SKIP')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}


================================================
FILE: doc/PKGBUILD.5.asciidoc
================================================
PKGBUILD(5)
===========

Name
----
PKGBUILD - Package build description file


Synopsis
--------
PKGBUILD


Description
-----------
This manual page describes general rules about PKGBUILDs. Once a
PKGBUILD is written, the actual package is built using makepkg and installed
with pacman.

NOTE: An example PKGBUILD, useful for reference, is located in '{pkgdatadir}'
along with other example files such as an install script. You can copy the
provided PKGBUILD.proto file to a new package build directory and make
customizations to suit your needs.


Options and Directives
----------------------
The following is a list of standard options and directives available for use
in a PKGBUILD. These are all understood and interpreted by makepkg, and most
of them will be directly transferred to the built package. The mandatory
fields for a minimally functional PKGBUILD are *pkgname*, *pkgver*, *pkgrel*
and *arch*.

If you need to create any custom variables for use in your build process, it is
recommended to prefix their name with an '_' (underscore).
This will prevent any possible name clashes with internal makepkg variables.
For example, to store the base kernel version in a variable, use something
similar to `$_basekernver`.

*pkgname (array)*::
	Either the name of the package or an array of names for split packages.
	Valid characters for members of this array are alphanumerics, and any of
	the following characters: ```@ . _ + -`''. Additionally, names are not
	allowed to start with hyphens or dots.

*pkgver*::
	The version of the software as released from the author (e.g., '2.7.1').
	The variable is not allowed to contain colons, forward slashes, hyphens
	or whitespace.
+
The `pkgver` variable can be automatically updated by providing a `pkgver()`
function in the PKGBUILD that outputs the new package version.
This is run after downloading and extracting the sources and running the
`prepare()` function (if present), so it can use those files in determining the
new `pkgver`.  This is most useful when used with sources from version control
systems (see below).

*pkgrel*::
	This is the release number specific to the distribution. This
	allows package maintainers to make updates to the package's configure
	flags, for example. This is typically set to '1' for each new upstream
	software release and incremented for intermediate PKGBUILD updates. The
	variable is a positive integer, with an optional subrelease level
	specified by adding another positive integer separated by a period
	(i.e. in the form x.y).

*epoch*::
	Used to force the package to be seen as newer than any previous versions
	with a lower epoch, even if the version number would normally not trigger
	such an upgrade. This value is required to be a positive integer; the
	default value if left unspecified is '0'. This is useful when the version
	numbering scheme of a package changes (or is alphanumeric), breaking normal
	version comparison logic. See linkman:pacman[8] for more information on
	version comparisons.

*pkgdesc*::
	This should be a brief description of the package and its functionality.
	Try to keep the description to one line of text and to not use the package's
	name.

*url*::
	This field contains a URL that is associated with the software being
	packaged. This is typically the project's web site.

*license (array)*::
	This field specifies the license(s) that apply to the package.
	If multiple licenses are applicable, list all of them:
	`license=('GPL' 'FDL')`.

*install*::
	Specifies a special install script that is to be included in the package.
	This file should reside in the same directory as the PKGBUILD and will
	be copied into the package by makepkg. It does not need to be included
	in the source array (e.g., `install=$pkgname.install`).

*changelog*::
	Specifies a changelog file that is to be included in the package.
	The changelog file should end in a single newline.
	This file should reside in the same directory as the PKGBUILD and will
	be copied into the package by makepkg. It does not need to be included
	in the source array (e.g., `changelog=$pkgname.changelog`).

*source (array)*::
	An array of source files required to build the package. Source files
	must either reside in the same directory as the PKGBUILD, or be a
	fully-qualified URL that makepkg can use to download the file.
	To simplify the maintenance of PKGBUILDs, use the `$pkgname` and `$pkgver`
	variables when specifying the download location, if possible.
	Compressed files will be extracted automatically unless found in the
	noextract array described below.
+
Additional architecture-specific sources can be added by appending an
underscore and the architecture name e.g., 'source_x86_64=()'. There must be a
corresponding integrity array with checksums, e.g. 'cksums_x86_64=()'.
+
It is also possible to change the name of the downloaded file, which is helpful
with weird URLs and for handling multiple source files with the same
name. The syntax is: `source=('filename::url')`.
+
makepkg also supports building developmental versions of packages using sources
downloaded from version control systems (VCS). For more information, see
<<VCS,Using VCS Sources>> below.
+
Files in the source array with extensions `.sig`, `.sign` or, `.asc` are
recognized by makepkg as PGP signatures and will be automatically used to verify
the integrity of the corresponding source file.

*validpgpkeys (array)*::
	An array of PGP fingerprints. If this array is non-empty, makepkg will
	only accept signatures from the keys listed here and will ignore the
	trust values from the keyring. If the source file was signed with a
	subkey, makepkg will still use the primary key for comparison.
+
Only full fingerprints are accepted. They must be uppercase and must not
contain whitespace characters.

*noextract (array)*::
	An array of file names corresponding to those from the source array. Files
	listed here will not be extracted with the rest of the source files. This
	is useful for packages that use compressed data directly.

*cksums (array)*::
	This array contains CRC checksums for every source file specified in the
	source array (in the same order). makepkg will use this to verify source
	file integrity during subsequent builds. If 'SKIP' is put in the array
	in place of a normal hash, the integrity check for that source file will
	be skipped. To easily generate cksums, run ``makepkg -g >> PKGBUILD''.
	If desired, move the cksums line to an appropriate location.  Note that
	checksums generated by "makepkg -g" should be verified using checksum
	values provided by the software developer.

*md5sums, sha1sums, sha224sums, sha256sums, sha384sums, sha512sums, b2sums (arrays)*::
	Alternative integrity checks that makepkg supports; these all behave
	similar to the cksums option described above. To enable use and generation
	of these checksums, be sure to set up the `INTEGRITY_CHECK` option in
	linkman:makepkg.conf[5].

*groups (array)*::
	An array of symbolic names that represent groups of packages, allowing
	you to install multiple packages by requesting a single target. For
	example, one could install all KDE packages by installing the 'kde' group.

*arch (array)*::
	Defines on which architectures the given package is available (e.g.,
	`arch=('i686' 'x86_64')`). Packages that contain no architecture specific
	files should use `arch=('any')`. Valid characters for members of this array
	are alphanumerics and ```_`''.

*backup (array)*::
	An array of file names, without preceding slashes, that
	should be backed up if the package is removed or upgraded. This is
	commonly used for packages placing configuration files in '/etc'. See
	`"Handling Config Files"` in linkman:pacman[8] for more information.

*depends (array)*::
	An array of packages this package depends on to run. Entries in
	this list should be surrounded wit

[... truncated by token budget ...]

