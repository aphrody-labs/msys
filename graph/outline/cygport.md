# Codebase Digest: cygport

- Files analyzed: 391
- Total lines: 39195
- Total size: 1.12 MB
- Git branch: `master`
- Git HEAD commit: `c0aded8a (Bump version to 0.37.12)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
cygport/
├── AUTHORS (11 lines, 478 B, ~121 tokens)
├── COPYING (674 lines, 34.3 KB, ~8.2k tokens)
├── COPYING-DOCS (454 lines, 22.5 KB, ~5.4k tokens)
├── NEWS (1070 lines, 42.8 KB, ~11.3k tokens)
├── README (264 lines, 10.1 KB, ~2.5k tokens)
├── TODO (10 lines, 335 B, ~91 tokens)
├── bin/
│   ├── cygport.in (894 lines, 21.4 KB, ~6.9k tokens)
│   └── meson.build (26 lines, 1.1 KB, ~286 tokens)
├── cygclass/
│   ├── R.cygclass (190 lines, 5.0 KB, ~1.6k tokens)
│   ├── ant.cygclass (220 lines, 5.7 KB, ~1.7k tokens)
│   ├── apache.cygclass (87 lines, 2.2 KB, ~650 tokens)
│   ├── apache2.cygclass (131 lines, 3.1 KB, ~921 tokens)
│   ├── aspell-dict.cygclass (206 lines, 5.9 KB, ~1.7k tokens)
│   ├── autotools.cygclass (828 lines, 25.9 KB, ~7.3k tokens)
│   ├── berkdb.cygclass (340 lines, 10.9 KB, ~3.4k tokens)
│   ├── bzr.cygclass (93 lines, 2.8 KB, ~835 tokens)
│   ├── clang.cygclass (69 lines, 2.0 KB, ~636 tokens)
│   ├── claws-mail.cygclass (72 lines, 2.2 KB, ~684 tokens)
│   ├── cmake.cygclass (240 lines, 7.3 KB, ~2.2k tokens)
│   ├── cross.cygclass (285 lines, 8.8 KB, ~2.6k tokens)
│   ├── cvs.cygclass (107 lines, 3.2 KB, ~966 tokens)
│   ├── distutils-multi.cygclass (83 lines, 3.1 KB, ~867 tokens)
│   ├── distutils.cygclass (92 lines, 3.0 KB, ~842 tokens)
│   ├── docbook.cygclass (262 lines, 7.9 KB, ~2.4k tokens)
│   ├── ebook.cygclass (87 lines, 2.5 KB, ~768 tokens)
│   ├── emacs.cygclass (70 lines, 2.0 KB, ~612 tokens)
│   ├── font.cygclass (215 lines, 6.2 KB, ~1.9k tokens)
│   ├── fossil.cygclass (95 lines, 3.0 KB, ~878 tokens)
│   ├── fox.cygclass (112 lines, 3.3 KB, ~998 tokens)
│   ├── ggz.cygclass (129 lines, 3.6 KB, ~1.1k tokens)
│   ├── git.cygclass (150 lines, 4.3 KB, ~1.3k tokens)
│   ├── gnome.org.cygclass (94 lines, 3.3 KB, ~1.0k tokens)
│   ├── gnome2.cygclass (255 lines, 7.4 KB, ~2.1k tokens)
│   ├── gnustep.cygclass (242 lines, 6.7 KB, ~1.9k tokens)
│   ├── gst-plugins.cygclass (178 lines, 5.0 KB, ~1.4k tokens)
│   ├── gst-plugins0.10.cygclass (25 lines, 1.0 KB, ~333 tokens)
│   ├── gstreamer.cygclass (116 lines, 3.9 KB, ~1.1k tokens)
│   ├── gtk2-perl.cygclass (106 lines, 4.3 KB, ~1.2k tokens)
│   ├── gtkmm.cygclass (142 lines, 3.7 KB, ~1.1k tokens)
│   ├── hg.cygclass (86 lines, 2.6 KB, ~776 tokens)
│   ├── httpd.cygclass (435 lines, 11.8 KB, ~3.5k tokens)
│   ├── java.cygclass (398 lines, 10.3 KB, ~3.1k tokens)
│   ├── kde.org.cygclass (167 lines, 5.4 KB, ~2.0k tokens)
│   ├── kde3.cygclass (255 lines, 7.4 KB, ~2.2k tokens)
│   ├── kde4.cygclass (268 lines, 10.0 KB, ~2.9k tokens)
│   ├── kf5.cygclass (135 lines, 3.7 KB, ~1.1k tokens)
│   ├── lua.cygclass (161 lines, 4.1 KB, ~1.2k tokens)
│   ├── mate.cygclass (273 lines, 7.6 KB, ~2.2k tokens)
│   ├── meson.build (242 lines, 7.8 KB, ~2.1k tokens)
│   ├── meson.cygclass (174 lines, 4.9 KB, ~1.4k tokens)
│   ├── mono.cygclass (256 lines, 7.2 KB, ~2.2k tokens)
│   ├── mtn.cygclass (113 lines, 3.2 KB, ~972 tokens)
│   ├── multilib.cygclass (270 lines, 8.7 KB, ~2.5k tokens)
│   ├── nant.cygclass (133 lines, 3.6 KB, ~1.1k tokens)
│   ├── ninja.cygclass (71 lines, 2.2 KB, ~664 tokens)
│   ├── ocaml-dune.cygclass (111 lines, 3.1 KB, ~911 tokens)
│   ├── ocaml.cygclass (146 lines, 4.1 KB, ~1.2k tokens)
│   ├── octave.cygclass (119 lines, 3.6 KB, ~1.1k tokens)
│   ├── opensync.cygclass (150 lines, 4.2 KB, ~1.2k tokens)
│   ├── perl.cygclass (331 lines, 9.5 KB, ~2.8k tokens)
│   ├── php.cygclass (477 lines, 12.9 KB, ~3.8k tokens)
│   ├── pygtk.cygclass (26 lines, 1.1 KB, ~348 tokens)
│   ├── pypy-distutils.cygclass (99 lines, 2.9 KB, ~858 tokens)
│   ├── pypy.cygclass (182 lines, 5.2 KB, ~1.5k tokens)
│   ├── python-distutils.cygclass (26 lines, 1.1 KB, ~351 tokens)
│   ├── python-wheel.cygclass (372 lines, 11.8 KB, ~3.4k tokens)
│   ├── python.cygclass (26 lines, 1.1 KB, ~338 tokens)
│   ├── python.org.cygclass (72 lines, 2.6 KB, ~769 tokens)
│   ├── python2-distutils.cygclass (25 lines, 1.2 KB, ~373 tokens)
│   ├── python2-wheel.cygclass (24 lines, 1.1 KB, ~342 tokens)
│   ├── python2.cygclass (24 lines, 1.1 KB, ~339 tokens)
│   ├── python3-distutils.cygclass (92 lines, 2.9 KB, ~853 tokens)
│   ├── python3-wheel.cygclass (93 lines, 3.1 KB, ~891 tokens)
│   ├── python3.cygclass (204 lines, 6.0 KB, ~1.7k tokens)
│   ├── qt3-qmake.cygclass (122 lines, 3.1 KB, ~920 tokens)
│   ├── qt3.cygclass (200 lines, 5.5 KB, ~1.6k tokens)
│   ├── qt4-cmake.cygclass (78 lines, 2.3 KB, ~688 tokens)
│   ├── qt4-qconf.cygclass (81 lines, 2.2 KB, ~664 tokens)
│   ├── qt4-qmake.cygclass (107 lines, 2.7 KB, ~824 tokens)
│   ├── qt4.cygclass (215 lines, 6.0 KB, ~1.8k tokens)
│   ├── qt5-qmake.cygclass (116 lines, 3.2 KB, ~949 tokens)
│   ├── qt5.cygclass (214 lines, 6.0 KB, ~1.8k tokens)
│   ├── rox.cygclass (189 lines, 5.4 KB, ~1.6k tokens)
│   ├── ruby-gnome2.cygclass (272 lines, 7.4 KB, ~2.2k tokens)
│   ├── ruby.cygclass (350 lines, 9.6 KB, ~2.8k tokens)
│   ├── rubygem.cygclass (201 lines, 6.2 KB, ~1.8k tokens)
│   ├── sugar.cygclass (104 lines, 3.3 KB, ~989 tokens)
│   ├── svn.cygclass (134 lines, 3.9 KB, ~1.1k tokens)
│   ├── tcl.cygclass (140 lines, 4.2 KB, ~1.3k tokens)
│   ├── test-fetch.cygclass (39 lines, 1.3 KB, ~425 tokens)
│   ├── texlive.cygclass (246 lines, 6.7 KB, ~2.0k tokens)
│   ├── toolchain.cygclass (178 lines, 6.5 KB, ~1.8k tokens)
│   ├── utils.cygclass (115 lines, 2.9 KB, ~892 tokens)
│   ├── vim.cygclass (116 lines, 3.2 KB, ~922 tokens)
│   ├── waf.cygclass (143 lines, 4.3 KB, ~1.2k tokens)
│   ├── wxwidgets.cygclass (236 lines, 7.6 KB, ~2.2k tokens)
│   ├── xfce4.cygclass (185 lines, 5.0 KB, ~1.5k tokens)
│   ├── xorg.cygclass (180 lines, 4.6 KB, ~1.4k tokens)
│   └── xvfb.cygclass (150 lines, 4.4 KB, ~1.3k tokens)
├── cygport.spec (261 lines, 7.8 KB, ~2.2k tokens)
├── data/
│   ├── cygport-bash-completion (26 lines, 686 B, ~182 tokens)
│   ├── cygport-xvfb.conf (18 lines, 287 B, ~72 tokens)
│   ├── cygport.conf (192 lines, 5.8 KB, ~1.6k tokens)
│   ├── cygport.nanorc (39 lines, 1.7 KB, ~614 tokens)
│   ├── cygport.vim (12 lines, 513 B, ~130 tokens)
│   ├── cygport.xml (14 lines, 561 B, ~171 tokens)
│   ├── meson.build (26 lines, 788 B, ~204 tokens)
│   ├── mirrors (404 lines, 11.3 KB, ~3.7k tokens)
│   └── sample.cygport (36 lines, 1.2 KB, ~341 tokens)
├── doc/
│   ├── index.html (1 lines, 35 B, ~11 tokens)
│   ├── meson.build (38 lines, 1.7 KB, ~392 tokens)
│   ├── robodoc.rc (110 lines, 1.5 KB, ~385 tokens)
│   └── robodoc.sh (1 lines, 34 B, ~10 tokens)
├── lib/
│   ├── check_funcs.cygpart (733 lines, 16.4 KB, ~4.7k tokens)
│   ├── compilers.cygpart (294 lines, 8.2 KB, ~2.4k tokens)
│   ├── config_registry.cygpart (45 lines, 1.3 KB, ~424 tokens)
│   ├── help.cygpart (85 lines, 3.2 KB, ~860 tokens)
│   ├── inheritance.cygpart (76 lines, 2.0 KB, ~628 tokens)
│   ├── meson.build (20 lines, 475 B, ~126 tokens)
│   ├── pkg_cleanup.cygpart (40 lines, 1.2 KB, ~377 tokens)
│   ├── pkg_info.cygpart (745 lines, 22.9 KB, ~8.0k tokens)
│   ├── pkg_pkg.cygpart (1131 lines, 34.3 KB, ~10.3k tokens)
│   ├── pkg_upload.cygpart (275 lines, 9.0 KB, ~2.8k tokens)
│   ├── src_compile.cygpart (87 lines, 2.7 KB, ~788 tokens)
│   ├── src_fetch.cygpart (225 lines, 6.3 KB, ~1.9k tokens)
│   ├── src_install.cygpart (1004 lines, 24.7 KB, ~7.5k tokens)
│   ├── src_postinst.cygpart (1601 lines, 43.9 KB, ~13.5k tokens)
│   ├── src_prep.cygpart (513 lines, 11.9 KB, ~3.5k tokens)
│   ├── src_test.cygpart (64 lines, 1.7 KB, ~537 tokens)
│   └── syntax.cygpart (431 lines, 10.8 KB, ~3.2k tokens)
├── meson.build (19 lines, 656 B, ~190 tokens)
├── meson_options.txt (1 lines, 61 B, ~20 tokens)
├── testsuite/
│   ├── R/
│   │   ├── cran/
│   │   │   ├── R-chron.cygport (10 lines, 206 B, ~58 tokens)
│   │   │   ├── R-chron.list (23 lines, 965 B, ~328 tokens)
│   │   │   └── vars (3 lines, 85 B, ~25 tokens)
│   │   └── meson.build (4 lines, 80 B, ~28 tokens)
│   ├── aspell/
│   │   ├── dict/
│   │   │   ├── aspell-pa.cygport (13 lines, 364 B, ~94 tokens)
│   │   │   ├── aspell-pa.list (9 lines, 287 B, ~104 tokens)
│   │   │   └── vars (3 lines, 95 B, ~27 tokens)
│   │   └── meson.build (4 lines, 100 B, ~31 tokens)
│   ├── autotools/
│   │   ├── SDL/
│   │   │   ├── SDL2_net.cygport (9 lines, 266 B, ~81 tokens)
│   │   │   ├── SDL2_net.list (7 lines, 224 B, ~73 tokens)
│   │   │   └── vars (3 lines, 83 B, ~24 tokens)
│   │   ├── c/
│   │   │   ├── libtxc_dxtn.cygport (23 lines, 727 B, ~208 tokens)
│   │   │   ├── libtxc_dxtn.list (5 lines, 148 B, ~45 tokens)
│   │   │   └── vars (3 lines, 83 B, ~24 tokens)
│   │   ├── gnome/
│   │   │   ├── 0.7.2-no-undefined.patch (10 lines, 391 B, ~121 tokens)
│   │   │   ├── libnotify.cygport (19 lines, 628 B, ~184 tokens)
│   │   │   ├── libnotify.list (29 lines, 1.2 KB, ~386 tokens)
│   │   │   └── vars (3 lines, 100 B, ~28 tokens)
│   │   ├── gtkmm/
│   │   │   ├── 0001-Don-t-include-individual-pango-headers.patch (38 lines, 1.1 KB, ~336 tokens)
│   │   │   ├── pangomm1.4.cygport (18 lines, 659 B, ~187 tokens)
│   │   │   ├── pangomm1.4.list (316 lines, 19.3 KB, ~5.8k tokens)
│   │   │   └── vars (3 lines, 99 B, ~28 tokens)
│   │   ├── kde3/
│   │   │   ├── kde3-acinclude.patch (66 lines, 1.5 KB, ~441 tokens)
│   │   │   ├── kde3-automake-add-missing.patch (12 lines, 476 B, ~154 tokens)
│   │   │   ├── kde3-automake-version.patch (17 lines, 724 B, ~228 tokens)
│   │   │   ├── libkexif-0.2.5-qcombobox.patch (11 lines, 426 B, ~126 tokens)
│   │   │   ├── libkexif.cygport (30 lines, 1.0 KB, ~299 tokens)
│   │   │   ├── libkexif.list (51 lines, 2.1 KB, ~645 tokens)
│   │   │   └── vars (3 lines, 100 B, ~29 tokens)
│   │   ├── mate/
│   │   │   ├── 1.2.0-no-undefined.patch (11 lines, 586 B, ~166 tokens)
│   │   │   ├── mate-menus.cygport (23 lines, 980 B, ~255 tokens)
│   │   │   ├── mate-menus.list (142 lines, 6.7 KB, ~2.1k tokens)
│   │   │   └── vars (3 lines, 88 B, ~25 tokens)
│   │   ├── meson.build (34 lines, 1.3 KB, ~376 tokens)
│   │   └── xfce/
│   │       ├── 1.6.1-no-undefined.patch (10 lines, 396 B, ~120 tokens)
│   │       ├── vars (3 lines, 89 B, ~25 tokens)
│   │       ├── xfce4-hamster-plugin.cygport (16 lines, 441 B, ~134 tokens)
│   │       └── xfce4-hamster-plugin.list (12 lines, 559 B, ~169 tokens)
│   ├── basic/
│   │   ├── info/
│   │   │   ├── foo.cygport (7 lines, 206 B, ~66 tokens)
│   │   │   ├── info.out (9 lines, 301 B, ~71 tokens)
│   │   │   └── vars (3 lines, 83 B, ~24 tokens)
│   │   ├── meson.build (26 lines, 608 B, ~162 tokens)
│   │   ├── test-bootstrap (33 lines, 737 B, ~237 tokens)
│   │   ├── test-help (8 lines, 184 B, ~56 tokens)
│   │   ├── test-info (10 lines, 306 B, ~93 tokens)
│   │   └── test-version (8 lines, 187 B, ~56 tokens)
│   ├── cmake/
│   │   ├── c/
│   │   │   ├── 0.0.6-cygwin.patch (53 lines, 1.8 KB, ~482 tokens)
│   │   │   ├── vars (3 lines, 95 B, ~26 tokens)
│   │   │   ├── win-iconv.cygport (15 lines, 441 B, ~132 tokens)
│   │   │   └── win-iconv.list (6 lines, 159 B, ~55 tokens)
│   │   ├── kde4/
│   │   │   ├── kaccessible.cygport (8 lines, 166 B, ~46 tokens)
│   │   │   ├── kaccessible.list (5 lines, 226 B, ~64 tokens)
│   │   │   └── vars (3 lines, 112 B, ~31 tokens)
│   │   ├── kf5/
│   │   │   ├── kcolorchooser.cygport (8 lines, 154 B, ~44 tokens)
│   │   │   ├── kcolorchooser.list (59 lines, 2.9 KB, ~823 tokens)
│   │   │   └── vars (3 lines, 111 B, ~31 tokens)
│   │   ├── meson.build (20 lines, 452 B, ~145 tokens)
│   │   ├── qt4/
│   │   │   ├── 0.2.0-cygwin.patch (21 lines, 895 B, ~245 tokens)
│   │   │   ├── attica.cygport (21 lines, 752 B, ~205 tokens)
│   │   │   ├── attica.list (50 lines, 1.6 KB, ~492 tokens)
│   │   │   └── vars (3 lines, 109 B, ~30 tokens)
│   │   └── qt5/
│   │       ├── 2.0.0-cmake-install.patch (30 lines, 1.2 KB, ~333 tokens)
│   │       ├── libqt5xdg.cygport (30 lines, 875 B, ~243 tokens)
│   │       ├── libqt5xdg.list (38 lines, 1.5 KB, ~424 tokens)
│   │       └── vars (3 lines, 99 B, ~28 tokens)
│   ├── compressions/
│   │   ├── meson.build (1 lines, 52 B, ~15 tokens)
│   │   └── patch-compressions/
│   │       ├── patch-compressions.cygport (28 lines, 391 B, ~125 tokens)
│   │       ├── patch-compressions.list (0 lines, 0 B, ~0 tokens)
│   │       └── vars (3 lines, 86 B, ~24 tokens)
│   ├── cross/
│   │   ├── cmake/
│   │   │   ├── mingw64-i686-win-iconv.cygport (16 lines, 491 B, ~145 tokens)
│   │   │   ├── mingw64-i686-win-iconv.list (6 lines, 309 B, ~102 tokens)
│   │   │   └── vars (3 lines, 120 B, ~33 tokens)
│   │   ├── make/
│   │   │   ├── 1.1-mingw.patch (19 lines, 509 B, ~168 tokens)
│   │   │   ├── mingw64-i686-crypt.cygport (29 lines, 743 B, ~231 tokens)
│   │   │   ├── mingw64-i686-crypt.list (6 lines, 308 B, ~101 tokens)
│   │   │   └── vars (3 lines, 112 B, ~31 tokens)
│   │   ├── meson.build (12 lines, 302 B, ~93 tokens)
│   │   └── qt5/
│   │       ├── 0.24-mingw-install.patch (44 lines, 1.3 KB, ~424 tokens)
│   │       ├── 0.34-os-win.patch (79 lines, 3.5 KB, ~952 tokens)
│   │       ├── mingw64-i686-qt5ct.cygport (17 lines, 492 B, ~146 tokens)
│   │       ├── mingw64-i686-qt5ct.list (7 lines, 374 B, ~118 tokens)
│   │       └── vars (3 lines, 122 B, ~34 tokens)
│   ├── distdir/
│   │   └── Inconsolata.sfd (5730 lines, 114.9 KB, ~37.6k tokens)
│   ├── docbook/
│   │   ├── meson.build (2 lines, 55 B, ~20 tokens)
│   │   ├── sgml/
│   │   │   ├── docbook-sgml-dtd-3.0-catalog.diff (32 lines, 2.1 KB, ~717 tokens)
│   │   │   ├── docbook-sgml30.cygport (16 lines, 534 B, ~137 tokens)
│   │   │   ├── docbook-sgml30.list (10 lines, 450 B, ~151 tokens)
│   │   │   └── vars (3 lines, 91 B, ~25 tokens)
│   │   └── xml/
│   │       ├── docbook-dtd412-entities.patch (48 lines, 3.7 KB, ~1.2k tokens)
│   │       ├── docbook-xml412.cygport (16 lines, 558 B, ~146 tokens)
│   │       ├── docbook-xml412.list (32 lines, 1.6 KB, ~601 tokens)
│   │       └── vars (3 lines, 91 B, ~25 tokens)
│   ├── download/
│   │   ├── R/
│   │   │   ├── R-nanotime.cygport (13 lines, 465 B, ~132 tokens)
│   │   │   ├── R-nanotime.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 94 B, ~27 tokens)
│   │   ├── bzr/
│   │   │   ├── gtk3-engines-unico.cygport (16 lines, 566 B, ~167 tokens)
│   │   │   ├── gtk3-engines-unico.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 98 B, ~28 tokens)
│   │   ├── git/
│   │   │   ├── cygrunsrv.cygport (9 lines, 201 B, ~64 tokens)
│   │   │   ├── cygrunsrv.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 98 B, ~28 tokens)
│   │   ├── gnome.org/
│   │   │   ├── gnome-common.cygport (9 lines, 156 B, ~45 tokens)
│   │   │   ├── gnome-common.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 114 B, ~31 tokens)
│   │   ├── mate/
│   │   │   ├── mate-common.cygport (11 lines, 305 B, ~80 tokens)
│   │   │   ├── mate-common.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 102 B, ~28 tokens)
│   │   ├── meson.build (27 lines, 644 B, ~215 tokens)
│   │   ├── mtn/
│   │   │   ├── vars (3 lines, 101 B, ~28 tokens)
│   │   │   ├── viewmtn.cygport (16 lines, 485 B, ~127 tokens)
│   │   │   └── viewmtn.list (0 lines, 0 B, ~0 tokens)
│   │   ├── perl/
│   │   │   ├── perl-Text-Glob.cygport (11 lines, 229 B, ~64 tokens)
│   │   │   ├── perl-Text-Glob.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 102 B, ~28 tokens)
│   │   ├── python.org/
│   │   │   ├── python-six.cygport (14 lines, 401 B, ~104 tokens)
│   │   │   ├── python-six.list (0 lines, 0 B, ~0 tokens)
│   │   │   └── vars (3 lines, 108 B, ~30 tokens)
│   │   ├── svn/
│   │   │   ├── 0.9.22-libtirpc.patch (50 lines, 2.0 KB, ~612 tokens)
│   │   │   ├── 0.9.22-nobody-guest.patch (14 lines, 476 B, ~143 tokens)
│   │   │   ├── unfs3.cygport (43 lines, 850 B, ~263 tokens)
│   │   │   ├── unfs3.list (8 lines, 216 B, ~74 tokens)
│   │   │   ├── unfsd-config (255 lines, 6.5 KB, ~1.9k tokens)
│   │   │   ├── unfsd.init (133 lines, 2.6 KB, ~766 tokens)
│   │   │   └── vars (3 lines, 87 B, ~25 tokens)
│   │   └── x.org/
│   │       ├── vars (3 lines, 102 B, ~28 tokens)
│   │       ├── xorg-util-macros.cygport (10 lines, 172 B, ~54 tokens)
│   │       └── xorg-util-macros.list (0 lines, 0 B, ~0 tokens)
│   ├── files/
│   │   ├── bvi/
│   │   │   ├── bvi-1.4.2-1.cygwin.patch (82 lines, 1.8 KB, ~632 tokens)
│   │   │   ├── bvi-1.4.2-1.src.patch (13 lines, 573 B, ~193 tokens)
│   │   │   ├── bvi.cygport (23 lines, 477 B, ~147 tokens)
│   │   │   ├── bvi.list (12 lines, 293 B, ~104 tokens)
│   │   │   └── vars (4 lines, 128 B, ~35 tokens)
│   │   ├── meson.build (1 lines, 47 B, ~18 tokens)
│   │   └── xinit/
│   │       ├── README (1 lines, 25 B, ~6 tokens)
│   │       ├── postinstall.sh (1 lines, 34 B, ~10 tokens)
│   │       ├── preremove.sh (1 lines, 34 B, ~10 tokens)
│   │       ├── profile.d.csh (4 lines, 74 B, ~16 tokens)
│   │       ├── profile.d.fish (4 lines, 66 B, ~19 tokens)
│   │       ├── profile.d.sh (1 lines, 34 B, ~10 tokens)
│   │       ├── startxdmcp.bat (102 lines, 2.8 KB, ~771 tokens)
│   │       ├── startxwin (226 lines, 5.3 KB, ~1.5k tokens)
│   │       ├── startxwin.1 (213 lines, 5.6 KB, ~1.6k tokens)
│   │       ├── vars (3 lines, 83 B, ~24 tokens)
│   │       ├── xinit.cygport (44 lines, 932 B, ~263 tokens)
│   │       └── xinit.list (9 lines, 238 B, ~79 tokens)
│   ├── font/
│   │   ├── install/
│   │   │   ├── sj-fonts-delphine-fontconfig.conf (17 lines, 331 B, ~102 tokens)
│   │   │   ├── sj-fonts-stevehand-fontconfig.conf (17 lines, 333 B, ~102 tokens)
│   │   │   ├── sj-fonts.cygport (30 lines, 749 B, ~220 tokens)
│   │   │   ├── sj-fonts.list (8 lines, 314 B, ~103 tokens)
│   │   │   └── vars (3 lines, 91 B, ~25 tokens)
│   │   ├── meson.build (6 lines, 139 B, ~43 tokens)
│   │   └── sfd2ttf/
│   │       ├── inconsolata-fonts.cygport (32 lines, 723 B, ~210 tokens)
│   │       ├── inconsolata-fonts.list (4 lines, 192 B, ~56 tokens)
│   │       ├── levien-inconsolata-fonts-fontconfig.conf (17 lines, 341 B, ~103 tokens)
│   │       └── vars (3 lines, 91 B, ~25 tokens)
│   ├── hints/
│   │   ├── epoch/
│   │   │   ├── 5.8.0-nostatic.patch (34 lines, 1.4 KB, ~441 tokens)
│   │   │   ├── 5.9.20-cmake-version.patch (11 lines, 424 B, ~152 tokens)
│   │   │   ├── tidy.cygport (41 lines, 935 B, ~286 tokens)
│   │   │   ├── tidy.list (26 lines, 888 B, ~291 tokens)
│   │   │   └── vars (3 lines, 99 B, ~28 tokens)
│   │   ├── meson.build (1 lines, 65 B, ~23 tokens)
│   │   ├── multiple/
│   │   │   ├── multiple.cygport (36 lines, 808 B, ~208 tokens)
│   │   │   ├── multiple.list (1 lines, 19 B, ~6 tokens)
│   │   │   └── vars (3 lines, 83 B, ~24 tokens)
│   │   └── single/
│   │       ├── single.cygport (25 lines, 369 B, ~111 tokens)
│   │       ├── single.list (1 lines, 11 B, ~4 tokens)
│   │       └── vars (3 lines, 83 B, ~24 tokens)
│   ├── httpd/
│   │   ├── apxs/
│   │   │   ├── httpd-mod_geoip.cygport (26 lines, 666 B, ~191 tokens)
│   │   │   ├── httpd-mod_geoip.list (6 lines, 238 B, ~73 tokens)
│   │   │   └── vars (3 lines, 89 B, ~25 tokens)
│   │   └── meson.build (4 lines, 93 B, ~30 tokens)
│   ├── logic/
│   │   ├── arch_patch/
│   │   │   └── arch_patch.cygport (12 lines, 165 B, ~53 tokens)
│   │   ├── arch_src/
│   │   │   └── arch_src.cygport (12 lines, 199 B, ~65 tokens)
│   │   └── meson.build (9 lines, 299 B, ~80 tokens)
│   ├── lua/
│   │   ├── all/
│   │   │   ├── 1.8.0-Makefile.patch (11 lines, 461 B, ~132 tokens)
│   │   │   ├── 1.8.0-lfs_c.patch (19 lines, 512 B, ~143 tokens)
│   │   │   ├── lua-lfs.cygport (81 lines, 1.8 KB, ~582 tokens)
│   │   │   ├── lua-lfs.list (9 lines, 332 B, ~116 tokens)
│   │   │   └── vars (4 lines, 135 B, ~37 tokens)
│   │   └── meson.build (4 lines, 87 B, ~29 tokens)
│   ├── meson/
│   │   ├── c/
│   │   │   ├── 0001-Fix-compilation-with-Cygwin-3.4.0.patch (21 lines, 492 B, ~154 tokens)
│   │   │   ├── login.cygport (14 lines, 274 B, ~93 tokens)
│   │   │   ├── login.list (5 lines, 135 B, ~47 tokens)
│   │   │   └── vars (3 lines, 99 B, ~28 tokens)
│   │   ├── gnome/
│   │   │   ├── json-glib1.0.cygport (33 lines, 1.1 KB, ~316 tokens)
│   │   │   ├── json-glib1.0.list (129 lines, 6.2 KB, ~2.2k tokens)
│   │   │   └── vars (3 lines, 105 B, ~29 tokens)
│   │   └── meson.build (4 lines, 70 B, ~27 tokens)
│   ├── meson.build (51 lines, 1.1 KB, ~355 tokens)
│   ├── ocaml/
│   │   ├── dune/
│   │   │   ├── ocaml-result.cygport (15 lines, 507 B, ~140 tokens)
│   │   │   ├── ocaml-result.list (14 lines, 468 B, ~154 tokens)
│   │   │   └── vars (4 lines, 145 B, ~40 tokens)
│   │   ├── findlib/
│   │   │   ├── ocaml-expat.cygport (18 lines, 500 B, ~145 tokens)
│   │   │   ├── ocaml-expat.list (11 lines, 365 B, ~120 tokens)
│   │   │   └── vars (3 lines, 89 B, ~25 tokens)
│   │   └── meson.build (9 lines, 210 B, ~64 tokens)
│   ├── perl/
│   │   ├── ExtUtils-MakeMaker/
│   │   │   ├── perl-Carp.cygport (13 lines, 316 B, ~88 tokens)
│   │   │   ├── perl-Carp.list (5 lines, 187 B, ~63 tokens)
│   │   │   └── vars (3 lines, 91 B, ~25 tokens)
│   │   ├── Module-Build/
│   │   │   ├── perl-Lchown.cygport (11 lines, 336 B, ~89 tokens)
│   │   │   ├── perl-Lchown.list (7 lines, 372 B, ~118 tokens)
│   │   │   └── vars (3 lines, 88 B, ~25 tokens)
│   │   └── meson.build (5 lines, 139 B, ~44 tokens)
│   ├── php/
│   │   ├── meson.build (10 lines, 189 B, ~62 tokens)
│   │   ├── pear/
│   │   │   ├── php-Structures_Graph.cygport (14 lines, 470 B, ~113 tokens)
│   │   │   ├── php-Structures_Graph.list (13 lines, 740 B, ~201 tokens)
│   │   │   └── vars (3 lines, 90 B, ~25 tokens)
│   │   └── pecl/
│   │       ├── php-bitset.cygport (11 lines, 318 B, ~86 tokens)
│   │       ├── php-bitset.list (32 lines, 1.5 KB, ~459 tokens)
│   │       └── vars (3 lines, 87 B, ~25 tokens)
│   ├── python/
│   │   ├── distutils/
│   │   │   ├── filelists/
│   │   │   │   └── beautifulsoup4-4.11.1.list (78 lines, 3.2 KB, ~1.0k tokens)
│   │   │   ├── python-beautifulsoup.cygport (19 lines, 656 B, ~178 tokens)
│   │   │   ├── python-beautifulsoup.list (106 lines, 8.1 KB, ~2.5k tokens)
│   │   │   └── vars (3 lines, 130 B, ~34 tokens)
│   │   ├── meson.build (12 lines, 231 B, ~75 tokens)
│   │   ├── normalization/
│   │   │   ├── python-license-expression.cygport (24 lines, 589 B, ~149 tokens)
│   │   │   ├── python-license-expression.list (31 lines, 2.4 KB, ~717 tokens)
│   │   │   └── vars (4 lines, 174 B, ~46 tokens)
│   │   ├── python-clang/
│   │   │   ├── 3.7.1-cygwin-ctypes.patch (11 lines, 467 B, ~140 tokens)
│   │   │   ├── python-clang.cygport (49 lines, 1.2 KB, ~351 tokens)
│   │   │   ├── python-clang.list (40 lines, 2.7 KB, ~878 tokens)
│   │   │   └── vars (3 lines, 114 B, ~31 tokens)
│   │   └── wheel/
│   │       ├── python-six.cygport (25 lines, 673 B, ~184 tokens)
│   │       ├── python-six.list (34 lines, 1.9 KB, ~639 tokens)
│   │       └── vars (3 lines, 110 B, ~30 tokens)
│   ├── qmake/
│   │   ├── meson.build (12 lines, 303 B, ~95 tokens)
│   │   ├── qt3/
│   │   │   ├── 0.3-gcc43.patch (23 lines, 1.3 KB, ~412 tokens)
│   │   │   ├── guesso.cygport (19 lines, 405 B, ~134 tokens)
│   │   │   ├── guesso.list (6 lines, 195 B, ~60 tokens)
│   │   │   └── vars (3 lines, 97 B, ~28 tokens)
│   │   ├── qt4/
│   │   │   ├── 1.0.1-lib64.patch (11 lines, 496 B, ~153 tokens)
│   │   │   ├── 2.0.0-qt5-parallel.patch (96 lines, 2.9 KB, ~903 tokens)
│   │   │   ├── qoauth.cygport (36 lines, 781 B, ~240 tokens)
│   │   │   ├── qoauth.list (11 lines, 358 B, ~112 tokens)
│   │   │   └── vars (3 lines, 97 B, ~28 tokens)
│   │   └── qt5/
│   │       ├── 1.0.1-lib64.patch (11 lines, 496 B, ~153 tokens)
│   │       ├── 2.0.0-qt5-parallel.patch (96 lines, 2.9 KB, ~903 tokens)
│   │       ├── qoauth-qt5.cygport (38 lines, 882 B, ~272 tokens)
│   │       ├── qoauth-qt5.list (11 lines, 376 B, ~119 tokens)
│   │       └── vars (3 lines, 97 B, ~28 tokens)
│   ├── ruby/
│   │   ├── gem/
│   │   │   ├── ruby-rack-ssl.cygport (14 lines, 317 B, ~92 tokens)
│   │   │   ├── ruby-rack-ssl.list (59 lines, 3.4 KB, ~1.3k tokens)
│   │   │   └── vars (3 lines, 99 B, ~27 tokens)
│   │   └── meson.build (7 lines, 155 B, ~49 tokens)
│   ├── test-driver (83 lines, 2.3 KB, ~677 tokens)
│   ├── texlive/
│   │   ├── collection/
│   │   │   ├── texlive-collection-genericrecommended.cygport (9 lines, 185 B, ~46 tokens)
│   │   │   ├── texlive-collection-genericrecommended.list (91 lines, 4.6 KB, ~1.5k tokens)
│   │   │   └── vars (3 lines, 94 B, ~26 tokens)
│   │   └── meson.build (1 lines, 34 B, ~11 tokens)
│   ├── vars (35 lines, 983 B, ~280 tokens)
│   └── waf/
│       ├── all/
│       │   ├── lv2.cygport (32 lines, 1.1 KB, ~309 tokens)
│       │   ├── lv2.list (221 lines, 8.1 KB, ~2.8k tokens)
│       │   └── vars (3 lines, 87 B, ~25 tokens)
│       └── meson.build (3 lines, 48 B, ~17 tokens)
└── tools/
    ├── deb2targz (71 lines, 1.8 KB, ~574 tokens)
    ├── debug-filelist-extract (74 lines, 2.2 KB, ~724 tokens)
    ├── meson.build (10 lines, 215 B, ~58 tokens)
    ├── pkgrip (93 lines, 2.3 KB, ~777 tokens)
    └── sysrootize (69 lines, 1.7 KB, ~570 tokens)
```

## Source Files

================================================
FILE: AUTHORS
================================================
Yaakov Selkowitz <yselkowitz at cygwin dot com>
Jon Turney <jon dot turney at dronecode dot org dot uk>
Ken Brown <kbrown at cornell dot edu>
Achim Gratz <Stromeko at Stromeko dot DE>
Andrew Schulman <schulman dot andrew at epa dot gov>
Corinna Vinschen <corinna at vinschen dot de>
Charles Wilson <cygwin at cwilson dot fastmail dot fm>
Eric Blake <eblake at redhat dot com>
Damien Doligez <damien dot doligez at inria dot fr>

Part of the Cygwin project <https://cygwin.com/>


================================================
FILE: COPYING
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.


================================================
FILE: COPYING-DOCS
================================================
#****** Cygport/ License
#  SOURCE

                GNU Free Documentation License
                 Version 1.3, 3 November 2008


 Copyright (C) 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.
     <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

0. PREAMBLE

The purpose of this License is to make a manual, textbook, or other
functional and useful document "free" in the sense of freedom: to
assure everyone the effective freedom to copy and redistribute it,
with or without modifying it, either commercially or noncommercially.
Secondarily, this License preserves for the author and publisher a way
to get credit for their work, while not being considered responsible
for modifications made by others.

This License is a kind of "copyleft", which means that derivative
works of the document must themselves be free in the same sense.  It
complements the GNU General Public License, which is a copyleft
license designed for free software.

We have designed this License in order to use it for manuals for free
software, because free software needs free documentation: a free
program should come with manuals providing the same freedoms that the
software does.  But this License is not limited to software manuals;
it can be used for any textual work, regardless of subject matter or
whether it is published as a printed book.  We recommend this License
principally for works whose purpose is instruction or reference.


1. APPLICABILITY AND DEFINITIONS

This License applies to any manual or other work, in any medium, that
contains a notice placed by the copyright holder saying it can be
distributed under the terms of this License.  Such a notice grants a
world-wide, royalty-free license, unlimited in duration, to use that
work under the conditions stated herein.  The "Document", below,
refers to any such manual or work.  Any member of the public is a
licensee, and is addressed as "you".  You accept the license if you
copy, modify or distribute the work in a way requiring permission
under copyright law.

A "Modified Version" of the Document means any work containing the
Document or a portion of it, either copied verbatim, or with
modifications and/or translated into another language.

A "Secondary Section" is a named appendix or a front-matter section of
the Document that deals exclusively with the relationship of the
publishers or authors of the Document to the Document's overall
subject (or to related matters) and contains nothing that could fall
directly within that overall subject.  (Thus, if the Document is in
part a textbook of mathematics, a Secondary Section may not explain
any mathematics.)  The relationship could be a matter of historical
connection with the subject or with related matters, or of legal,
commercial, philosophical, ethical or political position regarding
them.

The "Invariant Sections" are certain Secondary Sections whose titles
are designated, as being those of Invariant Sections, in the notice
that says that the Document is released under this License.  If a
section does not fit the above definition of Secondary then it is not
allowed to be designated as Invariant.  The Document may contain zero
Invariant Sections.  If the Document does not identify any Invariant
Sections then there are none.

The "Cover Texts" are certain short passages of text that are listed,
as Front-Cover Texts or Back-Cover Texts, in the notice that says that
the Document is released under this License.  A Front-Cover Text may
be at most 5 words, and a Back-Cover Text may be at most 25 words.

A "Transparent" copy of the Document means a machine-readable copy,
represented in a format whose specification is available to the
general public, that is suitable for revising the document
straightforwardly with generic text editors or (for images composed of
pixels) generic paint programs or (for drawings) some widely available
drawing editor, and that is suitable for input to text formatters or
for automatic translation to a variety of formats suitable for input
to text formatters.  A copy made in an otherwise Transparent file
format whose markup, or absence of markup, has been arranged to thwart
or discourage subsequent modification by readers is not Transparent.
An image format is not Transparent if used for any substantial amount
of text.  A copy that is not "Transparent" is called "Opaque".

Examples of suitable formats for Transparent copies include plain
ASCII without markup, Texinfo input format, LaTeX input format, SGML
or XML using a publicly available DTD, and standard-conforming simple
HTML, PostScript or PDF designed for human modification.  Examples of
transparent image formats include PNG, XCF and JPG.  Opaque formats
include proprietary formats that can be read and edited only by
proprietary word processors, SGML or XML for which the DTD and/or
processing tools are not generally available, and the
machine-generated HTML, PostScript or PDF produced by some word
processors for output purposes only.

The "Title Page" means, for a printed book, the title page itself,
plus such following pages as are needed to hold, legibly, the material
this License requires to appear in the title page.  For works in
formats which do not have any title page as such, "Title Page" means
the text near the most prominent appearance of the work's title,
preceding the beginning of the body of the text.

The "publisher" means any person or entity that distributes copies of
the Document to the public.

A section "Entitled XYZ" means a named subunit of the Document whose
title either is precisely XYZ or contains XYZ in parentheses following
text that translates XYZ in another language.  (Here XYZ stands for a
specific section name mentioned below, such as "Acknowledgements",
"Dedications", "Endorsements", or "History".)  To "Preserve the Title"
of such a section when you modify the Document means that it remains a
section "Entitled XYZ" according to this definition.

The Document may include Warranty Disclaimers next to the notice which
states that this License applies to the Document.  These Warranty
Disclaimers are considered to be included by reference in this
License, but only as regards disclaiming warranties: any other
implication that these Warranty Disclaimers may have is void and has
no effect on the meaning of this License.

2. VERBATIM COPYING

You may copy and distribute the Document in any medium, either
commercially or noncommercially, provided that this License, the
copyright notices, and the license notice saying this License applies
to the Document are reproduced in all copies, and that you add no
other conditions whatsoever to those of this License.  You may not use
technical measures to obstruct or control the reading or further
copying of the copies you make or distribute.  However, you may accept
compensation in exchange for copies.  If you distribute a large enough
number of copies you must also follow the conditions in section 3.

You may also lend copies, under the same conditions stated above, and
you may publicly display copies.


3. COPYING IN QUANTITY

If you publish printed copies (or copies in media that commonly have
printed covers) of the Document, numbering more than 100, and the
Document's license notice requires Cover Texts, you must enclose the
copies in covers that carry, clearly and legibly, all these Cover
Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on
the back cover.  Both covers must also clearly and legibly identify
you as the publisher of these copies.  The front cover must present
the full title with all words of the title equally prominent and
visible.  You may add other material on the covers in addition.
Copying with changes limited to the covers, as long as they preserve
the title of the Document and satisfy these conditions, can be treated
as verbatim copying in other respects.

If the required texts for either cover are too voluminous to fit
legibly, you should put the first ones listed (as many as fit
reasonably) on the actual cover, and continue the rest onto adjacent
pages.

If you publish or distribute Opaque copies of the Document numbering
more than 100, you must either include a machine-readable Transparent
copy along with each Opaque copy, or state in or with each Opaque copy
a computer-network location from which the general network-using
public has access to download using public-standard network protocols
a complete Transparent copy of the Document, free of added material.
If you use the latter option, you must take reasonably prudent steps,
when you begin distribution of Opaque copies in quantity, to ensure
that this Transparent copy will remain thus accessible at the stated
location until at least one year after the last time you distribute an
Opaque copy (directly or through your agents or retailers) of that
edition to the public.

It is requested, but not required, that you contact the authors of the
Document well before redistributing any large number of copies, to
give them a chance to provide you with an updated version of the
Document.


4. MODIFICATIONS

You may copy and distribute a Modified Version of the Document under
the conditions of sections 2 and 3 above, provided that you release
the Modified Version under precisely this License, with the Modified
Version filling the role of the Document, thus licensing distribution
and modification of the Modified Version to whoever possesses a copy
of it.  In addition, you must do these things in the Modified Version:

A. Use in the Title Page (and on the covers, if any) a title distinct
   from that of the Document, and from those of previous versions
   (which should, if there were any, be listed in the History section
   of the Document).  You may use the same title as a previous version
   if the original publisher of that version gives permission.
B. List on the Title Page, as authors, one or more persons or entities
   responsible for authorship of the modifications in the Modified
   Version, together with at least five of the principal authors of the
   Document (all of its principal authors, if it has fewer than five),
   unless they release you from this requirement.
C. State on the Title page the name of the publisher of the
   Modified Version, as the publisher.
D. Preserve all the copyright notices of the Document.
E. Add an appropriate copyright notice for your modifications
   adjacent to the other copyright notices.
F. Include, immediately after the copyright notices, a license notice
   giving the public permission to use the Modified Version under the
   terms of this License, in the form shown in the Addendum below.
G. Preserve in that license notice the full lists of Invariant Sections
   and required Cover Texts given in the Document's license notice.
H. Include an unaltered copy of this License.
I. Preserve the section Entitled "History", Preserve its Title, and add
   to it an item stating at least the title, year, new authors, and
   publisher of the Modified Version as given on the Title Page.  If
   there is no section Entitled "History" in the Document, create one
   stating the title, year, authors, and publisher of the Document as
   given on its Title Page, then add an item describing the Modified
   Version as stated in the previous sentence.
J. Preserve the network location, if any, given in the Document for
   public access to a Transparent copy of the Document, and likewise
   the network locations given in the Document for previous versions
   it was based on.  These may be placed in the "History" section.
   You may omit a network location for a work that was published at
   least four years before the Document itself, or if the original
   publisher of the version it refers to gives permission.
K. For any section Entitled "Acknowledgements" or "Dedications",
   Preserve the Title of the section, and preserve in the section all
   the substance and tone of each of the contributor acknowledgements
   and/or dedications given therein.
L. Preserve all the Invariant Sections of the Document,
   unaltered in their text and in their titles.  Section numbers
   or the equivalent are not considered part of the section titles.
M. Delete any section Entitled "Endorsements".  Such a section
   may not be included in the Modified Version.
N. Do not retitle any existing section to be Entitled "Endorsements"
   or to conflict in title with any Invariant Section.
O. Preserve any Warranty Disclaimers.

If the Modified Version includes new front-matter sections or
appendices that qualify as Secondary Sections and contain no material
copied from the Document, you may at your option designate some or all
of these sections as invariant.  To do this, add their titles to the
list of Invariant Sections in the Modified Version's license notice.
These titles must be distinct from any other section titles.

You may add a section Entitled "Endorsements", provided it contains
nothing but endorsements of your Modified Version by various
parties--for example, statements of peer review or that the text has
been approved by an organization as the authoritative definition of a
standard.

You may add a passage of up to five words as a Front-Cover Text, and a
passage of up to 25 words as a Back-Cover Text, to the end of the list
of Cover Texts in the Modified Version.  Only one passage of
Front-Cover Text and one of Back-Cover Text may be added by (or
through arrangements made by) any one entity.  If the Document already
includes a cover text for the same cover, previously added by you or
by arrangement made by the same entity you are acting on behalf of,
you may not add another; but you may replace the old one, on explicit
permission from the previous publisher that added the old one.

The author(s) and publisher(s) of the Document do not by this License
give permission to use their names for publicity for or to assert or
imply endorsement of any Modified Version.


5. COMBINING DOCUMENTS

You may combine the Document with other documents released under this
License, under the terms defined in section 4 above for modified
versions, provided that you include in the combination all of the
Invariant Sections of all of the original documents, unmodified, and
list them all as Invariant Sections of your combined work in its
license notice, and that you preserve all their Warranty Disclaimers.

The combined work need only contain one copy of this License, and
multiple identical Invariant Sections may be replaced with a single
copy.  If there are multiple Invariant Sections with the same name but
different contents, make the title of each such section unique by
adding at the end of it, in parentheses, the name of the original
author or publisher of that section if known, or else a unique number.
Make the same adjustment to the section titles in the list of
Invariant Sections in the license notice of the combined work.

In the combination, you must combine any sections Entitled "History"
in the various original documents, forming one section Entitled
"History"; likewise combine any sections Entitled "Acknowledgements",
and any sections Entitled "Dedications".  You must delete all sections
Entitled "Endorsements".


6. COLLECTIONS OF DOCUMENTS

You may make a collection consisting of the Document and other
documents released under this License, and replace the individual
copies of this License in the various documents with a single copy
that is included in the collection, provided that you follow the rules
of this License for verbatim copying of each of the documents in all
other respects.

You may extract a single document from such a collection, and
distribute it individually under this License, provided you insert a
copy of this License into the extracted document, and follow this
License in all other respects regarding verbatim copying of that
document.


7. AGGREGATION WITH INDEPENDENT WORKS

A compilation of the Document or its derivatives with other separate
and independent documents or works, in or on a volume of a storage or
distribution medium, is called an "aggregate" if the copyright
resulting from the compilation is not used to limit the legal rights
of the compilation's users beyond what the individual works permit.
When the Document is included in an aggregate, this License does not
apply to the other works in the aggregate which are not themselves
derivative works of the Document.

If the Cover Text requirement of section 3 is applicable to these
copies of the Document, then if the Document is less than one half of
the entire aggregate, the Document's Cover Texts may be placed on
covers that bracket the Document within the aggregate, or the
electronic equivalent of covers if the Document is in electronic form.
Otherwise they must appear on printed covers that bracket the whole
aggregate.


8. TRANSLATION

Translation is considered a kind of modification, so you may
distribute translations of the Document under the terms of section 4.
Replacing Invariant Sections with translations requires special
permission from their copyright holders, but you may include
translations of some or all Invariant Sections in addition to the
original versions of these Invariant Sections.  You may include a
translation of this License, and all the license notices in the
Document, and any Warranty Disclaimers, provided that you also include
the original English version of this License and the original versions
of those notices and disclaimers.  In case of a disagreement between
the translation and the original version of this License or a notice
or disclaimer, the original version will prevail.

If a section in the Document is Entitled "Acknowledgements",
"Dedications", or "History", the requirement (section 4) to Preserve
its Title (section 1) will typically require changing the actual
title.


9. TERMINATION

You may not copy, modify, sublicense, or distribute the Document
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense, or distribute it is void, and
will automatically terminate your rights under this License.

However, if you cease all violation of this License, then your license
from a particular copyright holder is reinstated (a) provisionally,
unless and until the copyright holder explicitly and finally
terminates your license, and (b) permanently, if the copyright holder
fails to notify you of the violation by some reasonable means prior to
60 days after the cessation.

Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, receipt of a copy of some or all of the same material does
not give you any rights to use it.


10. FUTURE REVISIONS OF THIS LICENSE

The Free Software Foundation may publish new, revised versions of the
GNU Free Documentation License from time to time.  Such new versions
will be similar in spirit to the present version, but may differ in
detail to address new problems or concerns.  See
https://www.gnu.org/licenses/.

Each version of the License is given a distinguishing version number.
If the Document specifies that a particular numbered version of this
License "or any later version" applies to it, you have the option of
following the terms and conditions either of that specified version or
of any later version that has been published (not as a draft) by the
Free Software Foundation.  If the Document does not specify a version
number of this License, you may choose any version ever published (not
as a draft) by the Free Software Foundation.  If the Document
specifies that a proxy can decide which future versions of this
License can be used, that proxy's public statement of acceptance of a
version permanently authorizes you to choose that version for the
Document.

11. RELICENSING

"Massive Multiauthor Collaboration Site" (or "MMC Site") means any
World Wide Web server that publishes copyrightable works and also
provides prominent facilities for anybody to edit those works.  A
public wiki that anybody can edit is an example of such a server.  A
"Massive Multiauthor Collaboration" (or "MMC") contained in the site
means any set of copyrightable works thus published on the MMC site.

"CC-BY-SA" means the Creative Commons Attribution-Share Alike 3.0 
license published by Creative Commons Corporation, a not-for-profit 
corporation with a principal place of business in San Francisco, 
California, as well as future copyleft versions of that license 
published by that same organization.

"Incorporate" means to publish or republish a Document, in whole or in 
part, as part of another Document.

An MMC is "eligible for relicensing" if it is licensed under this 
License, and if all works that were first published under this License 
somewhere other than this MMC, and subsequently incorporated in whole or 
in part into the MMC, (1) had no cover texts or invariant sections, and 
(2) were thus incorporated prior to November 1, 2008.

The operator of an MMC Site may republish an MMC contained in the site
under CC-BY-SA on the same site at any time before August 1, 2009,
provided the MMC is eligible for relicensing.


ADDENDUM: How to use this License for your documents

To use this License in a document you have written, include a copy of
the License in the document and put the following copyright and
license notices just after the title page:

    Copyright (c)  YEAR  YOUR NAME.
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License".

If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,
replace the "with...Texts." line with this:

    with the Invariant Sections being LIST THEIR TITLES, with the
    Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.

If you have Invariant Sections without Cover Texts, or some other
combination of the three, merge those two alternatives to suit the
situation.

If your document contains nontrivial examples of program code, we
recommend releasing these examples in parallel under your choice of
free software license, such as the GNU General Public License,
to permit their use in free software.
#*****


================================================
FILE: NEWS
================================================
0.37.12:
	* python-wheel: Avoid files created in ${S}/build/lib causing
           a src.patch to be generated
	* Add UPLOAD_URL to cygport.conf to override upload target
0.37.11:
	* pkg_upload: Upload src and bin packages to src/release/ and
           ${arch}/release, respectively
	* Define ':native' arch qualifier for BUILD_REQUIRES
	* fix 'dep' command silently printing nothing when readlink -f fails on
           a symlink
	* compilers: Instruct gcc to always colourize its output
	* python-wheel: Have python_wheel_compile() use source in ${S}
0.37.10:
	* Add more handling for aarch64
	* Fix default arch when cross-compiling and --arch not specified
0.37.9:
	* Handle directories in CYGWIN_FILES
	* Add '--arch' option to specify cross-compilation architecture
0.37.8:
	* python-wheel: Make 3.12 the default python3 version
	* gnome.org: Also check for gz compression
	* announce: Ensure From line doesn't contain a localized date
	* Update gnuconfig submodule
0.37.7:
	* autotools: Handle more autoconf version formats
	* xvfb: Automatically wrap the existing src_test in xvfb_run
	* meson: Add CYGMESON_TEST_ARGS

0.37.6:
	* python-wheel: Disable unneeded build isolation
	* postinstall: Improve stripping of sets of hardlinked files
	* Drop documentation of python2-only cygclasses
	* xvfb: Fix potential infinite loop

0.37.5:
	* python-wheel: Update default PYTHON_WHEEL_VERSIONS
	* python-wheel: Restore python_wheel_compile passing options to bdist_wheel
	* New mirror: invisibleisland.

0.37.4:
	* Add EPOCH
	* Add automatic determination of the appropriate php_x_y requirement
	* Fix generation of .cygwin.patch files with recent diffutils
	* Check for errors during patch generation

0.37.3:
	* cmake: Make the default output froms src_test more useful
	* Update gnuconfig submodule
	* autotools: gnuconfigize: prevent downgrade of config.{guess,sub}

0.37.2:
	* python.org: Also set SRC_DIR appropriately

0.37.1:
	* python.org: Form PyPI URLs using PEP 625 project name normalization
	* ocaml-dune: Allow customized arguments to dune install
	* The archive compressor is configurable for all VCS cygclasses
	* python-wheel: Always use 'pip wheel'

0.37.0:
	* Include arch tag in output archive/hint filenames
	* Define CMAKE_SYSTEM_PROCESSOR when cross-compiling with cmake
	* Add configuration DEBUG_FILELIST_EXTRACT for the command to extract
           the list of source files for a debuginfo package. Provide
           debug-filelist-extract script which does that.
	* httpd.cygclass: Fix with binutils >2.43
	* Rename meson builddir to avoid bad interaction with cross-pkgconf
	* Document REQUIRES_EXCLUDE_FROM and T

0.36.9:
	* Add repro-build, repro-diff, repro-check and repo-finish commands
	* Avoid a package's provides appearing in it's requires
	* Avoid using ruby to look for dependencies when building the ruby package

0.36.8:
	* Switch from gpg to gpg2 for checking and making signatures
	* cmake: Add src_test definition
	* Define _FORTIFY_SOURCE as 3
	* git: Retry clone without '--depth' if it fails due to dumb transport
	* Add initial support for SOURCE_DATE_EPOCH

0.36.7:
	* Fix incorrect options passed to unzstd in unpack()
	* Warn that DEPEND is deprecated
	* autotools: Add support for the new (in autoconf 2.69)
           AC_CONFIG_MACRO_DIRS macro
	* python-wheel: Check that python-wheel is installed

0.36.6:
	* Be more efficent about trying to turn on case-sensitivity

0.36.5:
	* meson: explicitly use 'meson setup'.
	* set the default CYGWIN_FILES for all commands.

0.36.4:
	* rubygem: Make 'gem build|install' errors fatal, and fix bindir.

0.36.3:
	* Add automatic determination of the appropriate ruby_xy requirement

0.36.2:
	* git: Try to fetch 'main' branch if 'master' branch doesn't exist.
	* python-wheel: Handle PEP 518 projects with only pyproject.toml
	* Try to turn on case-sensitivity on working directory (on Cygwin)
	* Iterate thru mirror list, if download fail
	* Parallelize __prepstrip

0.36.1:
	* Report an error when SRC_URI has no basename and #/FILENAME isn't used
	* Add RESTRICT 'case-insensitive' and warn about using a case-insenstive
           filesystem.
	* Take notice of CYGWIN_SETUP_OPTIONS and use CYGWIN_START_MENU_SUFFIX
           in X session shortcut folder naming
	* Fix a potential infinite loop in __prep_libtool_modules if working
           directory includes a symlink
	* Update error if CATEGORY or SUMMARY isn't set
	* Fix $PKG[0] == $PN assumption in src_postinstall
	* texlive.cygclass: remove references to i386-cygwin

0.36.0:
	* Allow package compression to be specified with TAR_COMPRESSION_EXT
	* Add CYGWIN_FILES to place files in $C, as an alternative to creating
           them with a ${PF}.cygwin.patch file
	* python{,2,3}-distutils: Warn that distutils is deprecated
	* python2{,-disutils,-wheel}: Stop with an error because python2 is
           sunset
	* python-wheel: Stop with an error if PYTHON_WHEEL_VERSIONS contains "2"
           or "2.x"

0.35.5:
	* Default to x86_64-pc-cygwin target on Linux.
	* 'inform' messages are now sent to stderr
	* Canonicalize whitespace in the values of .hint file keys which are
           single-line, space-separated lists
	* python-wheel: Handle PEP 517 projects without a setup.py
	* Improve auto-decompression for patches to handle .xz & .zst
	* Decompress SRC_URI archives and files using ZStandard compression
	* Implement --jobs/-j N option to specify number of build jobs to use

0.35.4:
	* Replace 'egrep' with 'grep -E' throughout
	* xorg: Default LICENSE to 'MIT'

0.35.3:
	* Fix detecting configure scripts generated by autoconf version 2.13
	* Fix handling of filenames without .cygport suffix on command line
	* Warn about missing HOMEPAGE or LICENSE

0.35.2:
	* New INHERITED and ARCHES variables.
	* Fix 'cygport vars UNDEFINED'.
	* python-wheel: Make a python3-name virtual package.
	* Fix dependency detection for python3 shebang.
	* New LICENSE variable.

0.35.1:
	* Fixed regression causing missing test: label in srcpkg hint

0.35.0:
	* Don't ignore errors from 'make test'
	* Add subcommand 'vars'
	* Add subcommand 'srcpackage'
	* perl: do not clobber HOMEPAGE and correct default
	* autotools: correctly detect Autoconf 2.70+
	* xorg: Allow configuration of default SRC_URI compression
	* Implement automatic determination of the appropriate perl5_0xy requirement

0.34.2:
	* Don't use llvm-objdump.
	* git: also use shallow clones for tags and branches.
	* Be more careful not to remove an existing .gnu_debuglink section.

0.34.1:
	* Update many URLs in HOMEPAGE, mirrors and comments.  Use https
	  where appropriate
	* Stop generating empty packages for obsoletions.
	* Recongize WANT_AUTOCONF=2.7, and make autoconf2.7 the default.

0.34.0:
	* New BUILD_REQUIRES variable used in separate -src.hint files.
	* New PROVIDES and CONFLICTS variables for setting in .hint files.
	* New unstable src_patch_apply_hook function.
	* Improved OCaml dependency detection.
	* kde.org: updated for KDE 19.12 and newer.
	* meson: cygmeson now passes --auto-features=enabled.
	* ocaml-dune: new cygclass for Dune-based OCaml packages.
	* perl: new CPAN_SUBDIR optional variable.
	* python3: new PYTHON3_PKGVERSION define.
	* python-wheel: updated for Python 3.8 and obsoletion of 2.7.
	* Numerous testsuite improvements.

0.33.1:
	* Updates for changes in PHP 7.3 and Ruby 2.6/RubyGems 3.0.

0.33.0:
	* autotools: static libraries are no longer built by default for
	  MinGW targets; this can be overridden by passing --enable-static
	  to cygconf where appropriate.
	* python-wheel: added 3.7 to "default" and 3.8 to "all" version lists.

0.32.0:
	* python-wheel.cygclass has been overhauled to handle multiple
	  concurrent Python minor versions.  Note that this is an ABI break,
	  as inheriting python-wheel no longer exposes python[23]* functions
	  or PYTHON[23]* variables.
	* Accordingly, python[23]-wheel.cygclass are now just compatibility
	  wrappers and should be considered deprecated.

0.31.2:
	* New all-test command
	* SRC_URI may now be empty for the (very rare) cases when a package
	  may be entirely created from the .cygport file itself.
	* Various bugfixes

0.31.1:
	* Fix exclusion of Gettext infrastructure from diffs.
	* Update CPAN URLs to MetaCPAN.

0.31.0:
	* Security flags have been added to the default CFLAGS.
	* CMake-based builds may use Ninja instead of make (see
	  cmake.cygclass/CYGCMAKE_GENERATOR for details).
	* LLVM tools, which are generally faster than binutils, are used
	  (if present) for stripping binaries and discovering DLL deps.
	* kde4: updated kde-l10n handling for Apps 17.12.
	* meson: cross-compiling requires system cross files in meson 0.44.

0.30.1:
	* Fix OCaml dependency detection in certain scenarios.
	* Fix the Vim filetype detection script.

0.30.0:
	* cygport git repository switched from autotools to meson.
	* Added extensive testsuite to sources.
	* Removed cygclasses: ant, berkdb, claws-mail, ebook, ggz, gnustep,
	  gst-plugins0.10, java, mono, nant, opensync, pypy, pypy-distutils,
	  qt4-qconf, rox, ruby-gnome2, sugar.
	* Removed nonexistant mirrors: berlios, rubyforge.
	* Deprecated cygclasses and functions are hidden from documentation.
	* kde3: revived cygclasses for legacy KDE 3 applications
	* meson: reworked to hide ninja internals
	* python2-wheel: new cygclass for Py2-only packages
	* python3-wheel: new cygclass for Py3-only packages

0.25.0:
	* New package-test command for marking a release as test:.
	* New stage command for uploading without creating !ready.
	* meson: new cygclass for building Meson-based packages
	* ninja: new cygclass for building packages with ninja
	* kde4: updated for KDE Apps 17.04 and Calligra split-up.
	* perl: added CPAN_VERSION to override VERSION.
	* python-wheel: now works with older setup.py files.

0.24.1:
	* wxwidgets: default to gtk3 with wxWidgets 3.x on X11 targets
	* Various bugfixes.

0.24.0:
	* CHANGES/README/etc. with .rst extension are found automatically
	* Python modules installed into /usr/lib/pythonX.Y are automatically
	  byte-compiled and optimized.  Calls to python*_optimize without any
	  arguments are no-op.
	* python2: new versioned cygclass for Python 2
	* python2-distutils: new versioned cygclass for Python 2
	* python: converted to compatibility wrapper for python2.cygclass
	* python-distutils: ditto for python2-distutils.cygclass
	* python-wheel: new cygclass for building wheels for Python 2 and 3
	* python.org: new cygclass for all PyPI sources
	* check_python2_module replaces check_python_module
	* kde4: prune kde-l10n file lists to not clobber KF5 packages

0.23.1:
	* Fix compatibility with bash 4.4
	* php: change PHP_INI_DIR for new layout in php 7 packages

0.23.0:
	* Per-release .hint files are now created
	* Libtool .la files are removed by default on all arches
	* X session shortcuts use icons when available
	* Octave .mex extensions are handled as DLLs
	* Removed GCJ support
	* ${NAME}_debuginfo_OBSOLETES is now accepted
	* New function: update_etc_shells
	* autotools: fix for gettext nano version releases
	* kde.org: updated SRC_URIs for 5.x components
	* kde4: cross-compiling improvements
	* py*-distutils: updated PyPI URIs
	* texlive: assorted fixes

0.22.0:
	* Update upload location for ARCH=noarch packages
	* Exit status is now properly propogated
	* Switched to perpetual postinstalls for icon theme cache updating
	* texlive: fixes for tlmgr

0.21.1:
	* Build-time dependencies on cross-cygwin gcc are only checked then,
	  not during upload etc.
	* Fixed regression in shebang dependency detection

0.21.0:
	* New 'announce' command for composing cygwin-announce messages
	* Dropped postinstall script dependencies for packages with
	  fonts, XDG desktop menu entries, MIME info, GIO modules, and/or
	  GSettings schemas; all replaced by perpetual postinstalls.
	* Improved pkg-config dependencies
	* Various cross-compiling improvements
	* font: new sfd2ttf and sfd2otf functions
	* texlive: updated for changes in TeX Live 2015
	* vim: drop build-time dependency
	* waf: drop support for system waf

0.20.2:
	* Moved hosting to GitHub.
	* Reorganized documentation into multidoc form.

0.20.1:
	* Fixes for Lua 5.2, OpenSSH 6.8, and httpd.cygclass.

0.20.0:
	* httpd: new cygclass for httpd-2.4 DSOs

0.19.0:
	* New definition: NM.
	* kde.org: new cygclass for KDE SRC_URIs, updated for YY.MM.z releases
	* kf5: new cygclass for KF5 packages
	* ruby, rubygem: updated for 2.1+ versioning scheme

0.18.1:
	* Revert split debuginfo compression due to PR binutils/18087.

0.18.0:
	* New upload command for cygwin package maintainers
	* Update X session shortcut generation again
	* Split debuginfo symbol files are now compressed
	* texlive: speed up postinstall scripts
	* toolchain: do not use sysroots for embedded targets
	* wxWidgets: update for 3.0

0.17.1:
	* Add support for fish shell scripts
	* Update X session shortcut generation
	* Add DLLTOOL definition for cross-compiling
	* Various bugfixes

0.17.0:
	* .keep files used to preserve empty directories are not shipped
	* Refined dependency detection for rubygem packages
	* ruby: fixes for Ruby 2.0 packaging scheme
	* rubygem: overhauled for Ruby 2.0 packaging scheme

0.16.0:
	* UAC manifests are no longer generated now that the toolchain
	itself handles these with binutils-2.24.51-4, gcc-4.8.3-1, and
	windows-default-manifest-6.3-1 or newer.
	* Working directories are now $ARCH-specific, so that packages
	can be built for both i686 and x86_64 in the same directory
	simultaneously.
	* Source packages now unpack into a release-specific directory.
	* SRC_URI and PATCH_URI entries can be renamed when downloading
	by adding a URI fragment in the form <URI#/NEWNAME>.
	* Improved dependency detection for gobject-introspection and lua.
	* Updated for gettext-0.18.3.
	* gnome/gtkmm/mate: fixes for autoreconf with latest releases

0.15.0:
	* Greatly improved speed of debuginfo extraction.
	* Relies on $host-pkg-config when cross-compiling
	* autotools: both static and shared libs are built for mingw targets
	* qt3/qt4/qt5: allow for parallel cross-compiling installation
	* font: added dofontconf/newfontconf functions
	* toolchain: added TOOLCHAIN_PREFIX, TOOLCHAIN_BINDIR, etc.

0.14.1:
	* $PAGER (e.g. less) is now used to display 'list', 'listdebug',
	  and 'info' information.
	* Added -Wimplicit-function-declaration to CFLAGS/OBJCFLAGS to
	  help detect potential crashers on x86_64-cygwin.
	* setup.hint auto-generation no longer requires [PKG_]REQUIRES on Linux.
	* Generated patches now preserve original line endings.

0.14.0:
	* Creates .tar.xz packages (adds dependency on xz).
	* Generated packages are placed solely in NAME-VERSION-RELEASE/dist.
	* Consequently, the 'all' command no longer includes 'finish'.
	* The setup.hint skip: tag is used for source-only packages.
	* qt3, qt4: use standard libdir for link libraries.
	* qt5, qt5-qmake: NEW for Qt5-dependent packages.

0.13.0:
	* Added [PKG_]OBSOLETES.
	* New gnuconfigize function, called in all autotools-based cygclasses.
	* Removed kde3.cygclass.
	* autotools: Changed libexecdir to /usr/libexec.
	* perl: Moved perl_postinst functionality to automatic postinstall.
	* qt3, qt3-qmake: Enhanced; enabled cross-compiling.
	* R: Added R_CONFIGURE_ARGS.
	* Added some examples to documentation.

0.12.2:
	* Bug fixes for dependency detection.
	* autotools.cygclass: Use cygport's bundled config.guess/config.sub
	  files to fix configure with automake-1.9 and older.
	* perl.cygclass: New function for handling XML::SAX parser registration
	  in postinstall/preremove scripts.
	* waf.cygclass: Accept WAF_USE_BUNDLED.

0.12.1:
	* Bugfixes for "crossback" scenarios.
	* New definition: CC_SYSROOT.

0.12.0:
	* Full support for x86_64-pc-cygwin.
	* One of the --32 or --64 options is required on Linux.
	* Support for Automake 1.13.
	* Bug fixes for debuginfo.
	* Bug fixes for filenames in $D containing spaces.
	* New function: cross_compiling.
	* New definitions: ARCH, ARCH_i686, ARCH_x86_64.
	* autotools.cygclass: try to avoid config.rpath usage.

0.11.3:
	* Preliminary support for x86_64-pc-cygwin host.
	* Cross-compiling to x86_64-cygwin from either i686-Cygwin or Linux
	can be enabled with cygport --64 foo.cygport [command(s)].
	* New definitions: AR, RANLIB, STRIP.
	* toolchain.cygclass: accept TOOLCHAIN_TARGET="native".

0.11.2:
	* DISTDIR can be defined in cygport.conf for saving downloaded files.
	* Automatically installs and packages docs defined in [PKG]_DOCS.
	* Added vim plugin to enable syntax highlighting for .cygport files.
	* apache1.cygclass was REMOVED.
	* cross.cygclass: defines LDFLAGS for Linux targets.
	* svn.cygclass: uses svn export instead of checkout.
	* Bugfixes for dependency generation.

0.11.1:
	* NAME, VERSION, and RELEASE can be defined, removing the filename
	  constraints from .cygport files.
	* New install function: make_autostart_entry.
	* gstreamer.cygclass: updated for GStreamer 1.0.
	* Bugfixes for debuginfo packages and dependency generation.

0.11.0:
	* Automatically generate setup.hint files when [PKG_]CATEGORY,
	  [PKG_]SUMMARY, [PKG_]DESCRIPTION, and (optionally) [PKG_]REQUIRES
	  are defined; default values are provided by many cygclasses.
	* Added dependency detection for shebang interpreters, postinstall and
	  preremove scripts, import libraries, libtool libraries, and GObject
	  Introspection, Java, Lua, OCaml, Perl, PHP, pkg-config, PyPy, Python,
	  Ruby, Tcl, and Vala modules.
	* pypy.cygclass: NEW for PyPy-dependent packages.
	* pypy-distutils.cygclass: NEW for distutils-based PyPy modules.
	* qt4.cygclass: adopt new installation scheme for cross-qt4 packages.
	* rubygem.cygclass: NEW for RubyGems packages.
	* sugar.cygclass: NEW for Sugar Activity packages.
	* Deprecated ggz.cygclass and ruby-gnome2.cygclass.

0.10.14:
	* Restore compatibility with Fedora 16 and Enterprise Linux 6.
	* ruby.cygclass: make compatible with Ruby 1.9.

0.10.13:
	* Various bug fixes.

0.10.12:
	* New manifestize function for manually generating UAC manifest files.
	* unpack now works with tarballs with incorrect extensions
	  (e.g. .tar.bz2 which is really gzip-compressed).
	* Bug fixes for debuginfo subpackages.

0.10.11:
	* Debuginfo subpackages created automatically when possible.
	* Added support for gccgo.
	* Start Menu shortcuts are created for starting X sessions.
	* clang.cygclass: NEW for using clang in place of gcc.
	* kde4.cygclass: updated for 4.8.x+ xz tarballs.
	* python3.cygclass: updated for Python 3.2.
	* texlive.cygclass: supports pretest packages.
	* xfce4.cygclass: updated for Xfce 4.10.
	* xvfb.cygclass: NEW for packages which need an X session during build.

0.10.10:
	* The "download" command now downloads only missing sources; use
	  "downloadall" to refetch all sources (the previous behaviour).
	* Added support for .tar.lrz tarballs (requires lrzip).
	* Documentation is nearly complete.
	* dodoc: accepts directories to be installed recursively.
	* autotools.cygclass: build only shared libtool libraries by default.
	* xorg.cygclass: add support for driver packages.

0.10.9:
	* Bug fixes for TeX Live postinstall scripts.
	* dodoc: Respects .md as alternative file suffix.
	* gst-plugins.cygclass: Add support for 0.11/1.0 series.
	* gst-plugins0.10.cygclass: Deprecated; use gst-plugins.cygclass.
	* mate.cygclass: Update for 1.2 changes.

0.10.8:
	* Manual licensed under GFDL-1.3+.
	* DEPEND now honours tex().
	* New mirror: ctan.
	* doinfo: new function for installing GNU info pages.
	* mate.cygclass: NEW for MATE Desktop packages.
	* texlive.cygclass: NEW for TeX Live packages.

0.10.7:
	* Added DEPEND build-time requirements checking.
	* Added KEEP_LA_FILES libtool postinstall cleanup control.
	* Use cross-compiling features in pkg-config 0.26.
	* Emacs site-lisp files are always compiled during postinstall;
	  emacs.cygclass is no longer needed for this purpose.
	* gnome.org.cygclass: adapt to new xz-compressed tarballs.
	* gst-plugins0.10.cygclass: allow for separate -bad and -bad-free.
	* kde4.cygclass: add support for Calligra Suite.
	* mono.cygclass: add Mono 2.10 support.
	* php.cygclass: updated channel list.
	* Various bugfixes.

0.10.6:
	* Allows hyphens in PV (which are allowed by setup).
	* Supports gettext 0.18+.
	* Allow for cross-compiler toolchains in locations other than /usr.
	* mono.cygclass: updated SRC_URI, fixed mono_create_policy.
	* tcl.cygclass: fully enabled cross-compiling support.

0.10.5:
	* More cross-compiling improvements.
	* Better support for running on non-Cygwin build systems.
	* doenv: new function for setting global env vars in profile.d.
	* doman: supports LAPACK manpages.
	* make_desktop_entry: supports unlimited optional arguments.
	* font.cygclass: new sfd2ttf func for building fonts (req. fontforge).
	* gnome2.cygclass: gnome2_configure is now separate from gnome2_compile.
	* gst-plugins0.10.cygclass: updated for latest releases.
	* tcl.cygclass: added cross-compiling support.

0.10.4:
	* Added RPM spec file (tested on Fedora 14).
	* Cross-compiling improvements.
	* Added functions for fixing script shebangs to lua, perl, python,
	  python3, and ruby cygclasses.
	* gst-plugins0.10.cygclass: update for good .27 and bad .21.
	* kde4.cygclass: provide GIT_URI.
	* lua.cygclass: added luainto and dolua functions.
	* mono.cygclass: provide GIT_URI.
	* pkgrip: update for Solaris 11.

0.10.3:
	* Scripts with erroneous .exe extension are renamed automatically.
	* berkdb.cygclass: support BDB 5.x.
	* nant.cygclass: NEW for NAnt-based .NET packages.
	* php.cygclass: support PHP 5.3, improve 3rd-party channel support.
	* xfce4.cygclass: updated for Xfce 4.8.

0.10.2:
	* All manpages with double-colon are renamed for man(1) compatibility.
	* New and updated postinstall steps for GNOME 2.32 and GTK+ 3.0.
	* Postinstall scripts can be included in multiple subpackages.
	* ant.cygclass: accepts ANT_TEST_ARGS and ANT_INSTALL_WRAPPERS.
	* distutils.cygclass: wrapper for python-distutils or python3-distutils.
	* distutils-multi.cygclass: NEW for simultaneous Py2 and Py3 modules.
	* kde4.cygclass: updated SRC_URI for kdepim 4.4 releases.
	* python-distutils.cygclass: renamed, for Python 2.x only.
	* python3-distutils.cygclass: NEW for Python 3.x only.
	* xorg.cygclass: fixed URIs for xproxymanagementprotocol.

0.10.1:
	* More fixes for cross-compiling scenarios.
	* More refinements for automatic exclusion rules.
	* Source .gem's no longer require rubygems to unpack.
	* autotools.cygclass: error if CYGCONF_SOURCE is specified but incorrect.
	* gst-plugins0.10.cygclass: adapt to openmax and resindvd plugins.
	* qt4-qmake.cygclass: DLLs in /usr/lib are moved to /usr/bin.
	* ruby.cygclass: install into vendor_ruby.
	* ruby-gnome2.cygclass: install into vendor_ruby.

0.10.0:
	* Added support for building and using cross-compilers.
	* Experimental support for running cygport on non-Cygwin hosts.
	* Improved rules for exclusions of autotool-generated files from diffs.
	* New check functions: check_tool, check_target_tool.
	* New install functions: includeinto/doinclude, dopkgconfig, dotool, newlib.
	* New mirrors: gcc, sourceware.
	* make_desktop_entry: accepts up to four additional fields.
	* make_etc_defaults: accepts a directory.
	* autotools.cygclass: added cross-compiling support.
	* cmake.cygclass: added cross-compiling support.
	* cross.cygclass: completely overhauled.
	* qt4*.cygclass: added preliminary cross-compiling support.
	* toolchain.cygclass: NEW for building both native- and cross- binutils/gcc/gdb.

0.9.85:
	* Warnings are redirected to stderr.
	* More fixes for regexes and sorts
	* Deep non-module libtool DLLs are moved into /usr/bin during postinstall
	* Extension-less EXEs are renamed with .exe extension
	* mirrors: add mysql, qt (replaces trolltech); update xfce4
	* gst-plugins0.10: oss4 moved into -good, added vp8 to -bad
	* perl: accept arguments to perl_install
	* xfce4: Use autotool wrappers; always provide SRC_URI

0.9.84:
	* deps: Search only for DLLs in mono dllmaps
	* homepage: new command for displaying HOMEPAGE in browser
	* ant.cygclass: accept ANT_OPTS, new ant_install function
	* distutils.cygclass: zope/__init__.py now handled by setuptools
	* java.cygclass: add newjavadoc function
	  Let java_wrapper accept arguments to be passed to JRE
	  java_wrappers now respect CLASSPATH env variable
	* kde4.cygclass: update SRC_URIs

0.9.83:
	* The 'test' command is now documented in --help and in the manpage.
	* Fixed regexes for Cygwin 1.7.2.

0.9.82:
	* SRC_URI supports .cpio.gz archives.

0.9.81:
	* Transition repository from SF.net Subversion to Git.
	* fox.cygclass: Added FOX_CFLAGS and FOX_LIBS.
	* gst-plugins0.10.cygclass: Remove support for building single plugins
	  from base/good/bad/ugly tarballs.
	* java.cygclass: Fix typo in dojavadoc.
	* kde4.cygclass: Define SRC_URI for Extragear with KDE4_EXTRAGEAR_VERSION.
	* wxwidgets.cygclass: Added WX_CFLAGS and WX_LIBS.

0.9.80:
	* API documentation.
	* SRC_URI supports .tar.lz archives.
	* do* and new* install functions detect and correctly install libtool .la
	  and .exe wrappers.
	* Programs missing an .exe suffix are now stripped and suffixed.
	* New mirror: savannah.
	* New cygclasses: ant, python3, vim.
	* Overhauled cygclasses: docbook, java, opensync, rox, xorg.
	* Improved Mono support:
		- A strongname key is included for packages without their own.
		- Added function for creating policy assemblies.
		- Mono assemblies are packaged non-executable to avoid interference
		  from Windows .Net Framework.
		- Mono assembly dependencies are now listed during 'cygport deps'.
	* gtkmm.cygclass: Adapt for mm-common build system.
	* gst-plugins0.10.cygclass: Update for latest releases.

0.9.9:
	* Default LDFLAGS is empty; binutils now auto-imports by default.
	* gnustep.cygclass: NEW for building GNUstep packages.
	* gst-plugins0.10.cygclass: Update for latest releases of -bad/-ugly.
	* ocaml.cygclass: LIBCAMLRUN points to libcamlrun_shared, new in 3.11.
	* qt4-qconf.cygclass: NEW for building Qt4 QConf based packages.

0.9.8.1:
	Brown-bag release to fix syntax error in git.cygclass.

0.9.8:
	* OCaml natdynlink modules (*.cmxs) are handled as DLLs in terms of
	  postinst-strip and dependency-list steps.
	* Fixed DEPS_PATH.
	* Various fixes for building gcc.
	* apache2.cygclass: APREQ_* are set only if libapreq2 is installed.
	* git.cygclass: Accept GIT_SUBDIR to create a source-package from 
      a subdirectory of a git repository.
	* kde3.cygclass: Fix for CMake-based packages.
	* kde4.cygclass: kde4_install passes arguments to cyginstall.
	* waf.cygclass: NEW for building packages using the waf build system.

0.9.7:
	* Default libexecdir changed to /usr/lib.
	* gnome2.cygclass: Define GIT_URI as GNOME has moved from svn to git.
    * git.cygclass: Allow GIT_MODULE to be user-defined.
    * kde4.cygclass: Updated for stable KOffice2.
    * python.cygclass: python_optimize() omits ${D} from compiled location.
    * xfce4.cygclass: Infrastructure fixes.

0.9.6:
	* SRC_URI accepts .tar.xz archives.
	* LDFLAGS defaults to "-Wl,--enable-auto-import" (prev. empty).
	* MAKEOPTS defaults to "-j[number_of_cores + 1]" (prev. -j2).
	* Improved gettext handling with libtool2.
	* Automatically creates manifests for programs whose names trigger UAC.
	* Files in /var/games are automatically handled with /etc/defaults.
	* cygpatch: Reversed patches generate a warning instead of failing.
	            Fixed .cygwin.patch application with deep SRC_DIR.
	* make_etc_defaults: Makes sure target directory exists before copying.
	* gtk2-perl.cygclass: Build fixes for perl-Cairo.
	* kde3.cygclass: Avoid -fvisibility with gcc4 (invalid for PE/COFF).
	* kde4.cygclass: Ditto. Updated for KDE4.2 and Qt4.5.
	* wxwidgets.cygclass: Default to Unicode builds. Removed MSW support.
	* cygport-bash-completion: Now ships with cygport.

0.9.5:
	* SRC_URI accepts .tar.lzo archives.
	* postinstall: doesn't strip files which aren't PE-COFF despite their name.
	  Fixed encodings.dir creation for fonts.
	* docinto() /foo is now accepted, installing into /usr/share/doc/foo.
	* make_etc_defaults() also creates a preremove script.
	* git.cygclass: Honours .gitmodules by running 'git submodule init/update'.
	* gstreamer.cygclass: Defines GIT_URI for new git repository.
	* kde4.cygclass: Updates for KDE 4.2.
	* pygtk.cygclass: Can now be inherited along with gnome2, for those
	  C packages which ship their own Python bindings.
	* qt4-qmake.cygclass: cygqmake4() passes along args and CYGQMAKE4_ARGS.
	* ruby-gnome2.cygclass: Fixed ri doc installation.
	* cygport.nanorc: Fixed regexes.

0.9.4:
	* cygpatch() tries with and without --binary.
	* lndirs() uses lndir(1) unconditionally.
	* Fixed per-package postinstall and preremove script installation.
	* gst-plugins0.10.cygclass: Enabled experimental plugins.
	  Override configure detection of winsock2.h.
	* gtkmm.cygclass: Fix ORIG_PN and DIFF_EXCLUDES for GNOME 2.24.
	* pygtk.cygclass: Use pygobject-codegen-2.0 if present.
	* ruby.cyclass: Use RDOC_MODULE to filter rdoc installation.
	* ruby-gnome2.cygclass: Build RI docs.
	* xfce4.cygclass: Updated for 4.6 betas.

0.9.3:
	* PV is now an array; members 1-* replace PVP[].
	* foo_CONTENTS can now be used in place of PKG_CONTENTS[].
	* cygtest(): Doesn't exit when tests fail.
	* autotools.cygclass: Detect ac-2.63+; detect missing LT_OUTPUT.
	* fossil.cygclass: NEW for Fossil RCS checkouts.
	* ruby.cygclass: Added rubyinto, doruby. Accept RDOC_MODULE.
	* ruby-gnome2.cygclass: Added ruby-goocanvas.
	* xorg.cygclass: Added GIT_URI; renamed font- packages.
	* zope.cygclass: REMOVED.  Use distutils instead.

0.9.2:
	* SRC_URI: now accepts SRPMs.
	* PATCH_URI: now accepts multiple-patch tarballs.
	* Installs documentation into /usr/share/doc/PACKAGE.
	* Removed support for libtool-1.5.
	* make_desktop_entry(): Updated spec; accepts additional arguments.
	* autotools.cygclass: Can now be manually re-inherit()ed.
	* kde3.cygclass: Add KDevelop 3.5.3; remove support for KDE 3.4.
	* lua.cygclass: Removed support for lua-5.0.
	* rox.cygclass: NEW for ROX Desktop packages.
	* ruby.cygclass: Builds and installs RI docs instead of HTML.
	* ruby-gnome2.cygclass: Removed support for older versions.

0.9.1:
	* dolib(): Installs *.la with libtool.
	* inherited(): New function.
	* Use fully qualified paths within all postinstall/preremove scripts.
	* autotools.cygclass: cygautoreconf, cygconf moved here; auto-inherited.
	* berkdb.cygclass: Bindings dependent on first inheriting java or tcl.
	* cmake.cygclass: cygcmake moved here; provides a src_compile.
	* fox-build.cygclass: Renamed prev. fox.cygclass.
	* fox.cygclass: NEW as fox-config wrapper.
	* mono.cygclass: No longer sets MAKEOPTS.
	* qt3-qmake.cygclass: cygqmake3 moved here; provides a src_compile.
	* wxwidgets.cygclass: WX_VERSION is mandatory.
	* xorg.cygclass: Drop xorg- prefix from font-* packages.

0.9.0:
	* Run only on Cygwin 1.7.
	* Removed all managed mount code.
	* cygclasses now installed into ${datadir}/cygport/cygclass.
	* gtk2-perl.cygclass: Adapt for Cygwin 1.7 and patches to perl and EU:D.

0.3.13:  CYGWIN-1.5 Branchpoint
	* Added dependency on rsync.
	* cygautoreconf(): Accepts ACLOCAL_FLAGS.
	* No longer generates postinstall scripts for GNU info files.
	* Automatic check for bad symlinks during postinstall.
	* apache{1,2}.cygclass: Split up apache for 1.x and 2.x.
	* apache.cygclass: Now a wrapper for apache1 and apache2.
	* berkdb.cygclass: Update for db4.7.
	* git.cygclass: Accepts GIT_TAG, GIT_BRANCH, GIT_REV.
	* gst-plugins0.10.cygclass: Update for -bad 0.10.8.
	* kde4.cygclass: NEW for KDE4 packages (still in flux).
	* qt3.cygclass: Namespace constants to make space for Qt4.
	* qt4.cygclass: NEW for Qt4-dependent packages.
	* qt4-cmake.cygclass: NEW for Qt4 cmake-based packages.
	* qt4-qmake.cygclass: NEW for Qt4 qmake-based packages.
	* R.cygclass: Fix bug which installed symlinks instead of files.
	* ruby-gnome2.cygclass: Refactored for 0.17.0 and external packages.

0.3.12:  TESTING
	* unpack(): now handles .tar.bz tarballs.
	* KEEPDIRS can be defined in place to call keepdir() automatically.
	* claws-mail.cygclass: NEW for claws-mail plugins.
	* gst-plugins0.10.cygclass: Added gst-plugins-gl; default sinks/srcs.
	* octave.cygclass: NEW for Octave extensions.
	* ruby-gnome2.cygclass: Now builds split packages from monolithic source.

0.3.11:  TESTING
	* {SRC,PATCH}_URI may contain CGI query arguments.
	* Empty subpackages may be created by defining empty PKG_CONTENTS[n].
	* RESTRICT=postinst-gconf stops automatic GConf schemas postinst/prerm.
	* ebook.cygclass: NEW for EBook documentation packages.
	* ggz.cygclass: NEW for GGZ Gaming Zone packages.
	* gnome2.cygclass: Several improvements for GNOME 2.22.
	* mtn.cygclass: NEW for Monotone repository checkouts.
	* opensync.cygclass: NEW for libopensync-plugin-* packages.

0.3.10:  TESTING
	* Accept PKG_IGNORE to avoid missing files warning.
	* Notify when removing empty directories during postinstall.
	* Move /usr/man to /usr/share/man.
	* Remove Mono .mdb debug symbols during strip.
	* fox.cygclass: Libs and separate apps can be built from one -src.
	* gnome2.cygclass: Use gnome-autogen.sh for autoreconf.
	* gst-plugins0.10.cygclass: Update for GStreamer 0.10.19 et al.
	* php.cygclass: Fixes for external PHP_CHANNEL, Zend extensions.

0.3.9:  TESTING
	* Allow multiple postinstall/preremove scripts for split packages.
	* Now compatible with libtool-2.2.
	* Support .tar.lzma source archives.
	* gst-plugins0.10.cygclass: Update for gst-plugins-bad-0.10.6.
	* gtk2-perl.cygclass: Fix for perl-5.10.
	* hg.cygclass: NEW for Mercurial repository checkouts.
	* perl.cygclass: Fix for perl-5.10.

0.3.8:  TESTING
	* Manpage symlinks are automatically fixed.
	* doexe: Installs .la files with libtool.
	* mirrors: Added mirror://debian/.
	* apache.cygclass: Define APREQ_{CONFIG,CFLAGS,LIBS}.
	* berkdb.cygclass: Code cleanup and patch minimalization.
	* docbook.cygclass: NEW for DocBook SGML/XML and DSSSL/XSL.
	* lua.cygclass: NEW for Lua modules.
	* ocaml.cygclass: Improved and fixed for OCaml 3.10.

0.3.7:  TESTING
	* Relicensed under GPL-3.
	* Dependency command ignores most Windows libraries.
	* Unstable APIs are protected with CYGPORT_USE_UNSTABLE_API def.
	* RESTRICT=postinst-info stops automatic GNU info postinstall.
	* apache.cygclass: Automatically add/remove modules to httpd.conf.
	* aspell-dict.cygclass: NEW for Aspell dictionaries.
	* berkdb.cygclass: Support db-4.6.  Fixed postinstall scripts.
	* gtk2-perl.cygclass: Added support for Gnome2-PanelApplet.
	* kde3.cygclass: Standardized configure arguments.
	* php.cygclass: Overhauled to support both PEAR and PECL extensions.
	* pygtk.cygclass: Added support for gtop, gtksourceview2 bindings.
	  Added support for monolithic builds of gnome-python and friends.
	* ruby-gnome2.cygclass: Added support for SVN snapshots.

0.3.6:  DEVELOPMENT
	* RESTRICT=diff is accepted to not produce a .src.patch file.
	* mirrors:  Added mirror://cran/.
	* doman:  Accepts --lang=XX to install NLS manpages.
	* newsbin:  NEW command.
	* gtk2-perl.cygclass:  Support related modules on CPAN, e.g. Gtk2-Notify.
	* php.cygclass:  NEW for PHP PECL extensions.
	* R.cygclass:  NEW for CRAN packages.

0.3.5:  DEVELOPMENT
	* Defining RESTRICT allows skipping certain otherwise automatic steps.
	  Currently "strip" is recognized.
	* Libtool modules have empty dependency_libs for faster lt_dlopen.
	* unpack: Handels Ruby .gem source packages.
	* cygconf: configure-generated files mistakenly in S will be removed.
	* cygpatch: Accepts gzip/bzip2 compressed patches.
	* mirrors: Added mirror://mplayer/.
	* apache.cygclass: New doapachemod command.
	* berkdb.cygclass: Complete; includes Tcl bindings.
	* bzr.cygclass: New for Bazaar-VCS checkout packages.
	* distutils.cygclass: Default HOMEPAGE and SRC_URI at cheeseshop.
	* gst-plugins0.10.cygclass: Handles gst-plugins-farsight.
	* mono.cygclass: Enhanced mono_wrapper for locations outside /usr/bin.
	* ocaml.cygclass: NEW for ocaml modules.
	* python.cygclass: Upgrade to Python 2.5; new package naming scheme.
	* svn.cygclass: Handles paths other than trunk.
	* qt3.cygclass: Add QBINDIR to PATH.
	* tcl.cygclass: NEW for tcl modules.
	* wxwidgets.cygclass: Refactored. Default to 2.8.
	* xfce4.cygclass: NEW for Xfce 4.4.
	* zope.cygclass: Updated for python-2.5 and zope-3.4 (on cheeseshop).

0.3.1:  DEVELOPMENT
	* codename for CVS HEAD leading to 0.3.5.

0.3.0:  DEVELOPMENT
	* Use user-only managed mounts with USE_MANAGED_MOUNT.
	* Better detect make check vs. make test.
	* Empty directories are removed during automatic postinstall.
	* Improved .src.patch generation.
	* dosym: Handle multiple targets and relative targets.
	* fetch: Better handle partial or failed downloads.
	* keepdir: new command for keeping empty directories.
	* berkdb.cygclass: NEW cygclass for building Berkeley DB 3.x/4.x.
	* distutils.cygclass: Only python_optimize PYTHON_SITELIB if exists.
	* gst-plugins0.10.cygclass: Add cdparanoia to base, spc to bad. Force xshm.
	* java.cygclass: NEW for building Classpath-based Java packages.
	* python.cygclass: Added pythoninto and dopython commands.

0.2.11:  STABLE_0_2 branch
	* Apply patches with --binary flag to solve d2u issues.
	* kde3: Fix kde3-i18n and koffice-l10n packages.

0.2.10:
	* Allow user-specific cygport.conf files in HOME.
	* mirrors: Added apache, xfce
	* gst-plugins0.8: Restored opengl plugin.
	* kde3: Added SRC_URI for kdevelop-3.4 and amarok.
	* pygtk: Added pytotem.
	* ruby: Fix setup.rb install.

0.2.9:
	* Handle .shar source files.
	* Install HISTORY doc by default.
	* Fix GnuPG .sig verification.
	* Fix SRC_DIR sanity check.
	* Provide nano-2.0 syntax highlighting rcfile.
	* mirrors: Added berlios, gentoo, rubyforge.
	* apache: New cygclass for mod_* modules.
	* gnome.org: Add new SVN_URI.
	* kde3: Enable aRts by default.  Build apidox when applicable.
	* ruby: Handle packages which use only a rakefile.
	* svn: Accept SVN_BRANCH.

0.2.8:
	* Support autoconf-2.61.
	* Fix application of .cygwin.patch file.
	* gtk2-perl: Update Gnome2-Rsvg deps.  Fix DEPS_PATH.
	* wxwidgets: NEW cygclass for building wxWidgets-dependent packages.

0.2.7:
	* Use PATCH_URI for upstream or third-party patches; these patches are
	  included individually in the -src.tar.bz2 and do NOT get included in 
	  the .src.patch.  See ports/apps/vim/gvim-7.0.178-1 and 
	  ports/gnome/imlib/imlib-1.9.15-1 for examples of usage.
	* PKG_LISTS should be defined for *.list names.
	* Add gtk-update-icon-cache to postinstall as needed.
	* New binary dependency method.
	* cross.cygclass: NEW for cross-compilers and cross-compiling; NEEDS WORK.
	* gst-plugins*: External-dep plugins in separate bin packages can be
	  built together with the internal-dep plugins.
	* pygtk: Support new bindings in 2.16.
	* mirrors: Add rotator to sourceforge; add portage, trolltech, vim.
	* doc: HTML version of cygport.1.
	* Handle HTTPS URIs with invalid certificates.
	* Ignore mdate-sh in pkg_diff().
	* Preserve shell metacharacters in args (Eric Blake).
	* Fix AC_CONFIG_SUBDIRS and AC_CONFIG_HEADERS again.
	* fox: Restore doxygenation.
	* perl: Handle (incorrect) use of site_perl.
	* ruby: Fix definition of RUBY_ARCH.
	* ruby-gnome2: multiple build fixes.

0.2.6:
	Support AC_CONFIG_HEADERS(*:*) syntax.
	Fix dependency listing.
	Fix building gtk+-2.10 when gtk+-2.8 is installed.
	pygtk: support pycairo.
	svn: SVN_MODULE may be overridden.

0.2.5:
	Supports autoconf-2.60, and requires it for building.
	Fixed patch generation and application.
	SRC_URI accepts Gentoo-style mirror:// URIs.
	NEW git.cygclass: for GIT repository snapshots.
	NEW mono.cygclass: for Mono C# and Gtk# assemblies.
	cygautoreconf(): support AC_CONFIG_HEADERS and AC_CONFIG_SUBDIRS.
	gst-plugins0.8.cygclass: support gst-monkeysaudio.
	qt3.cygclass: new functions doqt3{inc,lib}, qt3pluginto, doqt3plugin.

0.2.4:
	NEW gstreamer.cygclass: common functions for all GStreamer packages.
	kde3.cygclass: install split package documentation.
	xorg.cygclass: rename xorg-font-*-{75,100}dpi to xorg-font-*-dpi{75,100}.
	cygautoreconf(): accept NO_AUTO* variables to disable individual steps.

0.2.3:
	NEW gst-plugins0.8.cygclass: new for GStreamer 0.8 plugins.
	NEW gst-plugins0.10.cygclass: previously gst-plugins.
	gst-plugins.cygclass: now a wrapper for versioned gst-pluginsX.Y.
	ruby-gnome2.cygclass: fix import library installation.
	cygconf(): --localstatedir=/var (gnome2 overrides to /var/lib).
	GPG source signatures with .asc or .sign extensions are now accepted.
	Files with unknown extensions are copied into ${S}.
	Empty .src.patch files are no longer included in the -src package.
	Dropped support for old g-b-s patches.

0.2.2:
	pkg_diff(): Handle GNUmakefile.{am,in} files.
	unpack(): Handle .pl and .py with cp -t.
	verbose(): New function to print to console a command before execution.
	gst-plugins.cygclass: Fix autoreconf step.
	xorg.cygclass: Accomodate X11R7.1.
	Fixes and improvements.

0.2.1:
	New check_prog_req function, which errors if program was not found.
	During package phase, verifies that no files were duplicated or 
	  omitted in the binary packages.
	Enhancements to qt3 and kde3 cygclasses.
	Enhancements to cygautoreconf and gnome2_autoreconf.
	gnome2 cygclass provides a default CVS_URI.

0.2.0:
	NEW svn.cygclass: for creating packages from SVN snapshots.
	Implements CYGCONF_SOURCE, to be defined as the directory where
	  the configure script is located, for use when not building in ${B}, 
	  e.g. when running multiple configures from the same source.
	Supports SRC_DIR='.', for the unusual case where a source doesn't 
	  decompress into a subdir.
	Supports more compression formats, as well as *.sh sources (for
	  wrappers and the like).
	Improved --help and --version output.
	Additional documentation in README.
	cygport(1) manual page.
	Numerous code improvements.

0.1.93:
	Patches are now created in the /patch directory for easier access.
	NEW cvs.cygclass: for creating packages from CVS snapshots.
	gst-plugin.cygclass updated for newest plugins in -good and -bad.
	dodoc only installs if file present and non-empty; otherwise ignores.

0.1.92:
	pygtk.cygclass supports gnome-python and nautilus-python.
	fox.cygclass allows applications to be built separately from libs.
	Bug fixes.

0.1.91:
	NEW hash-based check_prog is back; which dependency removed.
	Define LIBPERL, LIBPYTHON, and LIBRUBY in respective cygclasses.
	Add support to pygtk.cygclass for modular gnome-python* packages.
	Added to utils.cygclass: check_pkg_config, equiv. to PKG_CHECK_MODULES.
	More sanity checks.

0.1.90:
	NEW variable: DEPS_PATH, for adding to PATH during deps command.
	Source now has bootstrap mode and a corresponding test script.
	font.cyglass totally rewritten.
	NEW command: oldpatch, for applying patches from previous releases.
	NEW postinstall command for system fonts in /usr/share/fonts.
	xorg.cygclass automatically handles font package configure options.
	Functions fetch() and unpack() can be generally used.
	Bug fixes.

0.1.6:
	NEW cygclasses: gst-plugins, ruby-gnome2.
	Use individual releases for xorg instead of X11R7.0.

0.1.5:
	Use which(1) instead of check_prog.
	Bug fixes.

0.1.4:
	NEW function: check_prog.
	Implement DESCRIPTION and HOMEPAGE for info command.
	Several fixes for when prep is run more than once.
	Numerous minor enhancements and bugfixes.

0.1.3:
	NEW function: make_managed_mount.
	NEW postinstall script for GTK2 modules.
	Fixes for Perl, Python, and Ruby cygclasses.

0.1.2:
	NEW cygport option: info, for showing cygport information.
	NEW cygclass: fox.
	Assorted fixes.

0.1.1:
	NEW cygclass: pygtk.
	Fixes for several cygclasses.

0.1.0:
	First public test release.


================================================
FILE: README
================================================
cygport is the standard method for building and maintaining packages for
the Cygwin distribution.


1. BACKGROUND

In the past, the sanctioned way of building a Cygwin package was by
using a build script, the template for which is commonly known as the
generic-build-script, or g-b-s[2].

However, the g-b-s has many drawbacks:

1) Even the simplest changes, such as adding an argument to configure,
   requires wading through the entire 500+ line script; many beginners 
   have struggled with their first packages.
   
2) Having a history as a ash script, it is nearly impossible to read, with
   run-on commands, && continuations, and backslash-escaped line breaks.

3) It is aimed primarily at autotooled packages, and adapting it to
   other packaging systems (e.g. perl MakeMaker, python Distutils,
   stand-alone Makefiles, etc.) requires having several "branches" of the
   script for each purpose.
   
4) Updating to a newer script requires either merging package-specific
   changes into a new template (and not forgetting anything), or
   back-porting g-b-s changes into an existing package script.
   
5) There is no simple method of dealing with an original source package
   whose name or top directory do not conform with the PKGNAME-VERSION
   form, or where the Cygwin package name differs from the upstream name
   (e.g. gtk2.0 from gtk+).
   
6) It is not designed to create more than one binary package per source
   package -- e.g.  whereby the foo source is separated into foo, libfoo1,
   and libfoo-devel binary packages -- despite the fact that is often
   desirable to do so.

Having used the g-b-s in various forms for a couple of years, during
which I've packaged hundreds of unique source packages (not counting
versions), I have found various ways of 'getting by'.  I forked the
g-b-s a while back, and created a few templates for various purposes. 
This solution, however, is still severely limiting, as mentioned above.

In the meantime, I also had exposure to a Linux distribution and its
packaging system, namely Gentoo Linux and Portage.  Being a source-based
distribution, the entire packaging database consists of a collection of
scripts (ebuilds), which contain basic information about the package,
and the steps necessary to compile and install (into a DESTDIR) the
package.  With the repository available through WebCVS, it is indeed an
invaluable resource to anyone building a non-trivial package from
scratch.

In fact, Portage answers many of the drawbacks of the g-b-s:

1) Ebuilds are small, containing only package-specific information,
   making them easy to read, and even to create with little effort.

2) Ebuilds are written in a clean bash syntax.

3) The Eclass system allows ebuilds to be easily extended to any number
   of different build systems (Perl, Python, Ruby, etc.) and/or categorical
   templates (e.g. GNOME or KDE).
   
4) Updates to Portage take affect immediately, without updating all
   ebuilds, and ebuilds can be created without even looking at the
   internals of Portage itself.
   
5) Ebuilds anyway define the source package name, and can easily
   override the assumed source top directory when necessary.

Despite it's advantages, implementing Portage on Cygwin is impractical,
because:

1) Portage is primarily a package management system, while Cygwin
   already uses setup.exe, and is impractical to use just for building
   packages.

2) Portage is mainly Linux/BSD specific in a number of ways which would
   not work for Cygwin, based on its Win32 limitations (such as replacing
   in-use files).

3) There is no way to create multiple binary packages from a single
   source package, without building the source multiple times.
   
4) Most importantly, setup.exe provides a GUI which makes installation
   easier for the uninitiated.

(It should be noted that, there were renewed attempts to run Portage
on Cygwin, and this was ITP'd and rejected[3] in 2006.  And, the project
"Gentoo on Cygwin", which contains Portage, is unmaintained as of 2008.
But, there is another project "Gentoo Prefix on Cygwin", as of 2020.
It's a try to run well-maintained "Gentoo Prefix" sources on Cygwin[4].)


2. CONCEPT

The conclusion, therefore, was that a compromise was required: take the
g-b-s, and separate the package-specific (Ebuild) and
package-independent (Portage) sections into two parts.  The
package-independent sections would become the build system, into which
the package-specific information would be fed to create a package.  The
package-independent system could then be cleaned up and expanded without
affecting package-specific information.

From this idea, cygport was created.

The cygport build system contains all the package-independent functions
of the g-b-s, rewritten in a modern, easy-to-read bash syntax.  It
provides commonly-used build-time functions for the package .cygport
files, which contain only the compiling, testing, and installation
instructions.

In addition, cygport is modularized.  Support for various build systems
is provided through separate cygclasses, which are 'inherit'ed by the
package .cygport as necessary.
   
The public functions and syntax (those used by a package .cygport) are
closer to those of Portage then of the g-b-s (it is extremely unlikely,
however, that a Gentoo ebuild will work as a .cygport with a simple
rename); internal syntax is still, to some degree, similar to the g-b-s.


3. USAGE

Similar to a g-b-s source package, a cygport-generated -src tarball will
contain the package .cygport, one or two patchfiles, and the original source
package, for example:

    foo-2.3.7.tar.gz
    foo2.cygport
    foo2-2.3.7-1.cygwin.patch
    foo2-2.3.7-1.src.patch     (will be absent if package builds OOTB)

GPG .sig files for any of the above may be present as well.  All these
files must remain in the same directory.

The general format of a cygport command is:

    cygport CYGPORT_FILE COMMAND [COMMAND2]

The first argument is the (relative or absolute) path to the .cygport file
to be processed.  All other arguments are interpreted as a COMMAND, which may be:

    prep      - create working directory, unpack the source and apply patches
    compile   - run all compilation steps
    test      - run the package's test suite, if one exists
    install   - install into a DESTDIR, and run post-installation steps
    package   - create binary and source packages
    upload    - upload finished packages to cygwin.com
    finish    - delete the working directory
    all       - run prep, compile, install and package

Other COMMANDs are meant primarily for maintainers:

    fetch    - download any missing upstream sources
    fetchall - download any all upstream sources
    check    - run the testsuite
    postinst - re-run post-installation steps
    list     - create a file listing suitable for the Cygwin README
    deps     - list direct dependencies of all executables
    info     - show a summary of package information
    diff     - write a patch file capturing changes to source in the working directory
    stage    - as upload, but don't request processing of uploaded packages
    announce - compose and send a package announcement
    repro-build  - rebuild from created source package to temp directory
    repro-diff   - check whether packages from original and rebuild differ
    repro-check  - run repro-build and repro-diff
    repro-finish - delete the temp directory used for rebuild

The standard arguments --help or --version may also be passed to cygport.


4. CREATING A CYGPORT PACKAGE

See the data/sample.cygport file, included in the Cygwin package in
${prefix}/share/cygport, for a simple example.  Many more examples
are available in the Cygwin package git repositories[5].

Please see the Cygport Reference Manual, included with this package, for
documentation on the cygport API.

A Cygwin README file may be included in the CYGWIN-PATCHES directory,
named README.  A standard template for this purpose is available from
the Cygwin distribution website[2].

If .hint file auto-generation isn't being used, setup.hint files may also be
included in CYGWIN-PATCHES.
    
Custom postinstall and preremove commands may be included in the
CYGWIN-PATCHES directory as postinstall.sh and preremove.sh; these
scripts should be written as stubs, without the shebang header.


5. REQUIREMENTS

The following packages are required to build packages with cygport, in
addition to the packages own dependencies:

    cygwin
    autoconf (wrapper) and autoconf2.*
    automake (wrapper) and automake1.*
    bash
    binutils
    bzip2
    coreutils
    diffstat
    diffutils
    dos2unix
    file
    gawk
    grep
    gzip
    lftp
    libtool
    lndir
    make
    openssh
    patch
    rsync
    sed
    tar
    unzip
    util-linux
    wget
    which
    xz

6. DOWNLOAD AND INSTALLATION

Cygwin binary and source packages of cygport are available as part of
the Cygwin distribution, under the 'Devel' category.  Installing cygport 
with setup.exe will automatically install all mandatory dependencies.

cygport is hosted on Git.  Those interested in helping with cygport
development, or testing the newest features should use branch 'master'.
The sources and history can be browsed at either:

  https://cygwin.com/git/gitweb.cgi?p=cygwin-apps/cygport.git
  https://github.com/cygwin/cygport

Patches for cygport should be created through 'git format-patch' and 
based on the 'master' branch.  The source repository can be cloned from:

  https://cygwin.com/git/cygwin-apps/cygport.git
  https://github.com/cygwin/cygport.git

To build cygport from git, meson and ninja are required. The following
packages are required for the documentation: groff, help2man, and robodoc.
The testsuite will use a number of packages if they are present; at a
minimum, you should have git-archive-all for the bootstrap test.


7. SUPPORT

Discussion on cygport should occur on the Cygwin-apps list
<cygwin-apps@cygwin.com>.  Do NOT, for any reason, email the author directly.


[1] https://www.cygwin.com/
[2] https://cygwin.com/setup-packaging-historical.html  Method Two
[3] https://sourceware.org/legacy-ml/cygwin-apps/2006-03/msg00000.html
[4] https://wiki.gentoo.org/wiki/Prefix/Cygwin
[5] https://cygwin.com/git-cygwin-packages/


================================================
FILE: TODO
================================================
A wishlist of features to add in future releases, in no particular order:

* Fix all FIXMEs
* NLS
* dolocale
* dosed
* error(): use 'caller' builtin?
* If a dependency DLL's package was not found with "cygcheck -f"
  (e.g. it was installed manually), show the DLL path instead.
* Fix rcs tarball names to allow more than one at a time


================================================
FILE: bin/cygport.in
================================================
#!/bin/bash
################################################################################
#
# cygport - Cygwin packaging application
#
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################
set -e;


################################################################################
#
# Initialization
#
################################################################################

# Preserve original environment for repro-check command
declare -r _cygport_orig_env=$(export)
declare -r _cygport_orig_pwd=$(pwd)

# for regexes, sort, etc.
export LC_COLLATE=C

declare -r  _cygport_version=@VERSION@;

declare -r _privdatadir=@pkgdatadir@;
declare -r _privclassdir=@cygclassdir@;
declare -r _privlibdir=@cygpartdir@;
declare -r _privgnuconfigdir=@gnuconfigdir@;
declare -r _privsysconfdir=@sysconfdir@;


### import defined, pushd, popd
source ${_privlibdir}/syntax.cygpart
###


################################################################################
#
# Command-line Help
#
################################################################################

#****** Cygport/ Title
#  OVERVIEW
#  The Cygport Reference Manual documents cygport, a utility for creating and
#  building software packages for the Cygwin platform.
#
#  |html Copyright &#169; 2006-2026 Cygport authors
#
#  Permission is granted to copy, distribute and/or modify this manual
#  under the terms of the GNU Free Documentation License, Version 1.3 or
#  any later version published by the Free Software Foundation; with no
#  Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
#  You should have received a copy of the GNU Free Documentation License
#  along with this manual. If not, see https://www.gnu.org/licenses/.
#****

#****** Cygport/ Introduction
#  OVERVIEW
#  cygport is a utility for creating and building software packages for the
#  software platform.  It is designed to minimize the amount of code and
#  effort for individual packages, automating common processes while leaving
#  flexibility to deal with unusual packages while avoiding many mistakes
#  or omissions.
#
#  cygport packages are controlled by .cygport files, which define variables
#  and functions unique to that package and version.  cygport provides a
#  modular API, documented here, which covers a wide variety of packaging
#  scenarios.
#
#  The syntax of .cygport files resemble that of Gentoo Portage, but they
#  are not compatible.  Furthermore, unlike Portage, cygport is not a
#  package manager; it only creates packages which can then be used in a
#  Cygwin package repository and installed with Cygwin's setup.exe package
#  manager.
#
#  This manual is divided into the following chapters:
#****

#****-* Cygport/Chapter 1
#  CHAPTER
#  * Usage
#****
#****-* Cygport/Chapter 2
#  CHAPTER
#  * Configuration
#****
#****-* Cygport/Chapter 3
#  CHAPTER
#  * Format
#****
#****-* Cygport/Chapter 4
#  CHAPTER
#  * Information
#****
#****-* Cygport/Chapter 5
#  CHAPTER
#  * Downloading
#****
#****-* Cygport/Chapter 6
#  CHAPTER
#  * Preparation
#****
#****-* Cygport/Chapter 7
#  CHAPTER
#  * Checks
#****
#****-* Cygport/Chapter 8
#  CHAPTER
#  * Compiling
#****
#****-* Cygport/Chapter 9
#  CHAPTER
#  * Testing
#****
#****-* Cygport/Chapter 10
#  CHAPTER
#  * Installing
#****
#****-* Cygport/Chapter 11
#  CHAPTER
#  * Postinstall
#****
#****-* Cygport/Chapter 12
#  CHAPTER
#  * Packaging
#****
#****-* Cygport/Chapter 13
#  CHAPTER
#  * Uploading
#****
#****-* Cygport/Chapter 14
#  CHAPTER
#  * Cygclasses
#****

#****** Chapter 1/Usage
#  USAGE
#  See
#  |html <a href="cygport.1.html">the manpage</a>
#  for sub-commands and command line options.
#  REQUIRES
#  The following packages are required to build packages with cygport:
#   autoconf, automake, bash, binutils, bzip2, coreutils, diffstat, diffutils,
#   dos2unix, file, gawk, grep, gzip, lftp, libtool, lndir, make, openssh,
#   patch, rsync, sed, tar, unzip, util-linux, wget, which, xz.
#  Other software packages are required by some Cygclasses, as indicated within.
#****

### import _show_help, _show_version
source ${_privlibdir}/help.cygpart
###

# Accept --help and --version arguments without specifying a cygport file
while true
do
	case ${1} in
	--help|-h|-\?)
		__show_help;
		exit 0;
		;;
	--version|-v)
		__show_version;
		exit 0;
		;;
	--debug|-d)
		set -x;
		shift;
		;;
	--jobs|-j)
		shift;
		_nproc="-j $1";
		shift;
		;;
	--arch)
		shift;
		_arch_opt="$1";
		shift;
		case ${_arch_opt} in
			x86_64|amd64|x64|64)
				_arch_opt=x86_64;
				;;
			i686|x86|32)
				_arch_opt=i686;
				;;
			aarch64|arm64)
				_arch_opt=aarch64;
				;;
			*)
				echo "${0}: unknown arch ${_arch_opt}";
				exit 1;
				;;
		esac

		if defined _host_arch && [ ${_host_arch} != ${_arch_opt} ]
		then
			error "Only one of --32|--64|--arch may be specified"
		fi

		_host_arch=${_arch_opt}
		unset _arch_opt
		;;

	--32|-4)
		warning "The option --32 is deprecated. Use --arch x86 instead"

		if defined _host_arch && [ ${_host_arch} != i686 ]
		then
			error "Only one of --32|--64|--arch may be specified"
		fi
		_host_arch=i686
		shift;
		;;

	--64|-8)
		warning "The option --64 is deprecated. Use --arch x86_64 instead"

		if defined _host_arch && [ ${_host_arch} != x86_64 ]
		then
			error "Only one of --32|--64|--arch may be specified"
		fi
		_host_arch=x86_64
		shift;
		;;

	-*)
		echo "${0}: unknown argument ${1}";
		__show_help;
		exit 1;
		;;
	*)	break ;;
	esac
done

declare -ar argv=(${0} ${@})
declare -ir argc=$(( $# + 1 ))

# Show help if no commands are given
if ! defined argv[1] || ! defined argv[2]
then
	__show_help;
	exit 1;
fi


################################################################################
#
# System checks
#
################################################################################

### import check_prog and friends
source ${_privlibdir}/check_funcs.cygpart
###

# check now for all mandatory programs
for _myprog in bzip2 cat chmod cp date diff diffstat dos2unix file find gawk grep \
               gzip install ln mkdir mv patch rm rsync sed sort tar touch which \
               xargs xz
do
	if ! check_prog ${_myprog}
	then
		error "${_myprog} is required to run cygport";
	fi
done

unset _myprog;

if check_prog pbzip2
then
	readonly _tar_bz2_flag="-I pbzip2"
else
	# bzip2 is required, no need to check
	readonly _tar_bz2_flag="-j"
fi

################################################################################
#
# Import user settings
#
################################################################################

# Values which can be overridden either system-wide or per package

# default: use all available processors plus one more job
declare    MAKEOPTS="${_nproc:--j $(($(nproc 2>/dev/null) + 1))} "

# load configuration
for conf in \
	"${_privsysconfdir}/cygport.conf" \
	"${HOME}/.config/cygport.conf" \
	"${HOME}/.cygport/cygport.conf" \
	"${HOME}/.cygport.conf" \
	"${HOME}/.cygportrc"
do
	if [ -e "${conf}" ]
	then
		source "${conf}" || error "could not read ${conf}"
	fi
done
unset conf;


################################################################################
#
# Function definitions
#
################################################################################

### __config_get/set and friends
source ${_privlibdir}/config_registry.cygpart
###

### inherit and friends
source ${_privlibdir}/inheritance.cygpart
###

### fetch and friends
source ${_privlibdir}/src_fetch.cygpart
###

### mirrors list
source ${_privdatadir}/mirrors
###

### unpack, cygpatch, __src_prep and friends
source ${_privlibdir}/src_prep.cygpart
###

### CC/CXX, CFLAGS/CXXFLAGS, etc.
source ${_privlibdir}/compilers.cygpart
###

### lndirs, cygmake
source ${_privlibdir}/src_compile.cygpart
###

### cygtest and friends
source ${_privlibdir}/src_test.cygpart
###

### cyginstall, do*, new*, *into, and friends
source ${_privlibdir}/src_install.cygpart
###

### __src_postinst and friends
source ${_privlibdir}/src_postinst.cygpart
###

### __list_files, __show_deps, __show_info, __show_web
source ${_privlibdir}/pkg_info.cygpart
###

### __pkg_* functions
source ${_privlibdir}/pkg_pkg.cygpart
###

### __pkg_upload
source ${_privlibdir}/pkg_upload.cygpart
###

### __finish
source ${_privlibdir}/pkg_cleanup.cygpart
###

# Auto-inherit autotools for backwards compatibility. But we
# want to allow it to be inherited one more time in order to
# reset src_compile() when other cygclasses override it.
_autotools_CYGCLASS_stage1_=1
inherit autotools;
unset _autotools_CYGCLASS_ _autotools_CYGCLASS_stage1_

#
# select file_to_package_tool once we've determined CHOST when we're
# cross-compiling
#
if check_prog cygcheck
then
	# use full path to ensure we always use the system cygcheck, even if
	# we're in the middle of packaging cygwin itself
	readonly _file_to_package_tool="$(which cygcheck) -f"
elif check_prog cygwin-pkg-tool
then
	readonly _file_to_package_tool="cygwin-pkg-tool --arch ${CHOST%%-*} files"
fi

################################################################################
#
# Import the .cygport file
#
################################################################################

unset NAME VERSION RELEASE
declare cygportfile="${argv[1]%.cygport}.cygport"
if [ -f "${cygportfile}" ]
then
	eval $(grep '^NAME='    ${cygportfile})
	eval $(grep '^VERSION=' ${cygportfile})
	eval $(grep '^RELEASE=' ${cygportfile})
fi

if [ "${NAME+y}${VERSION+y}${RELEASE+y}" = "yyy" ]
then
declare -r  PN=${NAME}
declare     PV=${VERSION}
declare -r  PR=${RELEASE}
declare -r  PF=${PN}-${PV}-${PR}
declare -r  cygportfile=${cygportfile##*/}
else
# if we didn't get NAME VERSION and RELEASE from the .cygport, the file itself
# must be named PN-PV-PR.cygport, but the extension is optional in argv[1]
            PF=${argv[1]##*/}
declare -r  PF=${PF%.cygport}
declare -r  PN=${PF%%-[0-9]*};
declare     NAME=${PN}
declare -r  PR=${PF##*-};
declare     RELEASE=${PR}
            PV=$(echo ${PF} | sed -e "s/${PN}\-\(.*\)\-${PR}$/\1/");
declare     VERSION=${PV}
declare -r  cygportfile=${PF}.cygport;
fi

# these must be defined now to be available in SRC_URI
declare -r  P=${PN}-${PV};
declare -r  PVR=${PV}-${PR};
declare -ar PVP=(${PV//[-\._]/ });
declare -r  PV=(${PV} ${PVP[*]});
declare -r  PV_MAJ=${PV[1]};
declare -r  PV_MAJ_MIN="${PV[1]}.${PV[2]}";

# http://ftp.rpm.org/max-rpm/s1-rpm-inside-scripts.html
declare -rx CYGPORT_PACKAGE_NAME=${NAME}
declare -rx CYGPORT_PACKAGE_VERSION=${VERSION}
declare -rx CYGPORT_PACKAGE_RELEASE=${RELEASE}
#declare -rx CYGPORT_DOC_DIR=/usr/share/doc


_topdir=${argv[1]%/*};

if [ "x${_topdir}" = "x${argv[1]}" ]
then
	if [ -f ./${cygportfile} ]
	then
		_topdir=.;
	else
		_topdir=/usr/src;
	fi
fi

declare -r top=$(cd ${_topdir}; pwd);
unset _topdir;

if [ ! -e ${top}/${cygportfile} ]
then
	error "${cygportfile} not found.";
fi

### perform some validation on the .cygport

# SRC_URI and PATCH_URI should not change depending on ARCH, as this will make
# the source package arch-dependent
declare -i n
declare -a VALUE
ARCHES=("i686" "x86_64" "noarch")
for VAR in "SRC_URI" "PATCH_URI"
do
    n=0
    while (( n < ${#ARCHES[*]} ))
    do
        # the '\n' at the end ensures that if the source-ing fails, the process
        # substitution still outputs something, so read has some input and
        # doesn't fail on seeing an end-of-file
        read -r < <( (declare ARCH=${ARCHES[$n]}; declare ARCH_${ARCH}=1; source ${top}/${cygportfile} 2>/dev/null ; eval echo "\$${VAR}}" ) || echo "\n" )
        VALUE[$n]=${REPLY}
        if (( n > 0 ))
        then
            if [ "x${VALUE[0]}" != "x${VALUE[$n]}" ]
            then
                error "${VAR} appears to depend on ARCH"
            fi
        fi
        n+=1;
    done
done
unset n VALUE ARCHES VAR

# probe if the cygport sets ARCH - if it does, set ARCHES to that value,
# otherwise set it to the default value "all".
PROBE_ARCH=$( (unset ARCH; source ${top}/${cygportfile} 2>/dev/null ; echo "${ARCH}") || true )
if [ -z "${PROBE_ARCH}" ]
then
	declare -r ARCHES="all"
else
	declare -r ARCHES="${PROBE_ARCH}"
fi
unset PROBE_ARCH

### load .cygport
source ${top}/${cygportfile} || error "could not read ${cygportfile}"
###

case ${ARCH} in
${CHOST%%-*}|noarch) ;;
*)  error "This package may only be built for ${ARCH}"
esac

if defined CYGPORT_DEPEND
then
	if ! __version_at_least ${CYGPORT_DEPEND} ${_cygport_version}
	then
		error "This package requires cygport ${CYGPORT_DEPEND} or newer";
	fi
fi

for VAR in "HOMEPAGE" "LICENSE"
do
	if [ ! -v ${VAR} ]
	then
		warning "${VAR} not defined"
	fi
done

for restrict in ${RESTRICT//,/ }
do
	declare _CYGPORT_RESTRICT_${restrict//-/_}_=1
done
unset restrict

if [ "${SOURCE_DATE_EPOCH+y}" = "y" ]
then
	if [ -n "$(echo "${SOURCE_DATE_EPOCH}" | sed -e 's/^$/X/' -e 's/[0-9]//g')" ]
	then
		error "SOURCE_DATE_EPOCH must be an integer number (seconds since the unix epoch)"
	fi
	case $(peflags --version 2>/dev/null | sed -n '1s/^.* //p') in
		4.6.[6-9]|4.[7-9]*|[5-9]*) ;;
		*) error "SOURCE_DATE_EPOCH requires peflags 4.6.6 or later"
	esac
fi


################################################################################
#
# Define package-dependant variables
#
################################################################################

declare -r workdir="${top}/${PF}.${ARCH}";
declare -r srcdir="${workdir}/src";
declare -r origsrcdir="${workdir}/origsrc";
declare -r configdir="${workdir}/config";
declare -r logdir="${workdir}/log";
declare -r patchdir="${workdir}/patch";
declare -r spkgdir="${workdir}/spkg/${PF}.src";
declare -r distdir="${workdir}/dist";

SRC_DIR=${SRC_DIR:-${ORIG_PN:-${PN}}-${PV}};
if ! defined SRC_URI
then
	SRC_DIR=.
fi
if [ "x${SRC_DIR}" = "x." ]
then
	declare -r S=${srcdir};
else
	declare -r S=${srcdir}/${SRC_DIR};
fi

# documented in lib/syntax.cygpart
declare -r B="${workdir}/build";
declare -r D="${workdir}/inst";
declare -r T="${workdir}/temp";
declare -r C="${S}/CYGWIN-PATCHES";

# http://ftp.rpm.org/max-rpm/s1-rpm-inside-scripts.html
declare -rx CYGPORT_ARCH=${ARCH}
declare -rx CYGPORT_OS="Cygwin"
#declare -rx CYGPORT_SOURCE_DIR=
#declare -rx CYGPORT_BUILD_DIR=
declare -rx CYGPORT_BUILD_ROOT=${D}
declare -rx CYGPORT_OPT_FLAGS=${CFLAGS}

declare -r compilelog="${logdir}/${PF}-compile.log";
declare -r checklog="${logdir}/${PF}-check.log";
declare -r installlog="${logdir}/${PF}-install.log";
declare -r pkglog="${logdir}/${PF}-pkg.log";
declare -r uploadlog="${logdir}/${PF}-upload.log";

for _src_uri in ${SRC_URI}
do
	if [ -f ${top}/${_src_uri} ]
	then
		_src_orig_pkgs+=" ${_src_uri}";
		continue;
	fi
	_src_uri="${_src_uri##*\#/}"
	_src_uri="${_src_uri%\?*}"
	_src_orig_pkgs+=" ${_src_uri##*/}";
done
readonly _src_orig_pkgs;
unset _src_uri;

for _patch_uri in ${PATCH_URI}
do
	if [ -f ${top}/${_patch_uri} ]
	then
		_src_orig_patches+=" ${_patch_uri}";
		continue;
	fi
	_patch_uri="${_patch_uri##*\#/}"
	_patch_uri="${_patch_uri%\?*}"
	_src_orig_patches+=" ${_patch_uri##*/}";
done
readonly _src_orig_patches;
unset _patch_uri;

declare -r cygwin_patchfile=${PF}.cygwin.patch;
declare -r src_patchfile=${PF}.src.patch;

declare -ar pkg_name=(${PKG_NAMES:-${PN}});
declare -r  pkg_count=${#pkg_name[*]};

# this requires workdir to be already defined

__probe_case_sensitivity() {
	mkdir -p ${workdir}
	rm -f ${workdir}/.probe_case_sensitivity
	touch ${workdir}/.PROBE_CASE_SENSITIVITY
	local probe=$( [ -f ${workdir}/.probe_case_sensitivity ] && echo 1 || echo 0 )
	rm -f ${workdir}/.PROBE_CASE_SENSITIVITY
	return $probe
}

__enable_case_sensitivity() {
	if [ $OSTYPE = "cygwin" ]
	then
		inform "Trying to enable case sensitivity on ${workdir}"
		chattr -fR +C ${workdir} >/dev/null 2>&1 || true
	fi
}

# create workdir if it doesn't already exist, and try to enable case-sensitivity
# if it appears to be absent
if [ ! -d ${workdir} ]
then
	mkdir -p ${workdir}
	__probe_case_sensitivity || __enable_case_sensitivity
fi

# in any case, probe for case sensitivity, stop if required but missing
if ! __probe_case_sensitivity
then
	if defined _CYGPORT_RESTRICT_case_insensitive_
	then
		error "Package ${NAME} cannot be built on a case-insensitive filesystem";
	else
		warning "Building on a case-insensitive filesystem";
	fi
fi

# this requires S and B to be already defined
if ! defined _CYGPORT_RESTRICT_debuginfo_
then
	for flags in {C,CXX,F,FC,GO,OBJC,OBJCXX}FLAGS
	do
		for map in ${DEBUG_PREFIX_MAPS[*]}
		do
			declare ${flags}+=" -ffile-prefix-map=${map}=/usr/src/debug/${PF}"
		done
		declare ${flags}+=" -ffile-prefix-map=${B}=/usr/src/debug/${PF}"
		declare ${flags}+=" -ffile-prefix-map=${S}=/usr/src/debug/${PF}"
	done
	unset flags map
fi

# documented in lib/src_prep.cygport
if [ ! -e ${top}/${cygwin_patchfile} ]
then
	if [ -f ${top}/README ]
	then
		CYGWIN_FILES="${CYGWIN_FILES:-README}"
	elif [ -f ${top}/${PN}.README ]
	then
		CYGWIN_FILES="${CYGWIN_FILES:-${PN}.README}"
	fi
fi


# prevent any git commands run by the build from traversing up out of the
# working directory into the ${topdir}, which contains the cygport file - thus
# preventing them from seeing a git repository there, if the cygport is under
# git control, and mistaking it for a git repository containing the project
# being built.
export GIT_CEILING_DIRECTORIES+=":${topdir}"

################################################################################
#
# Command processing
#
################################################################################

declare -i arg_n=2
declare _pkg_tag=

# When adding commands here, also add them to cygport-bash-completion
while (( arg_n < argc ))
do
	case ${argv[${arg_n}]} in
		downloadall|fetchall|wgetall|getall)
			__src_fetch;
			_status=$?;
			;;
		download|fetch|wget|get)
			__DL_ONLY_MISSING=1 __src_fetch;
			_status=$?;
			;;
		prepare|unpack|prep)
			__stage Preparing;
			__src_prep;
			_status=$?;
			;;
		compile|build|make)
			__stage Compiling;
			__log_init ${compilelog};
			__check_depends && \
			src_compile 2>&1 | tee -a ${compilelog};
			_status=${PIPESTATUS[0]};
			;;
		check|test)
			__stage Testing;
			__log_init ${checklog};
			src_test 2>&1 | tee -a ${checklog};
			_status=${PIPESTATUS[0]};
			;;
		inst*)
			__stage Installing;
			__log_init ${installlog};
			(__prepinstalldirs && src_install && __src_postinst) 2>&1 | tee -a ${installlog};
			_status=${PIPESTATUS[0]};
			;;
		postinst*)
			__src_postinst;
			_status=$?;
			;;
		list)
			__list_files;
			_status=$?;
			;;
		listdebug*|listdbg*)
			__list_debug_files;
			_status=$?;
			;;
		dep*)
			__show_deps;
			_status=$?;
			;;
		info*)
			__show_info;
			_status=$?;
			;;
		vars)
			__show_vars ${argv[@]:$((++arg_n))};
			_status=$?;
			arg_n=$argc;  # consumed all remaining args
			;;
		homepage|web*|www*)
			__show_web;
			_status=$?;
			;;
		package-test|pkg-test)
			_pkg_tag="test:"
			;&
		package|pkg)
			__stage "Packaging${_pkg_tag:+ ${_pkg_tag%:} release}";
			__log_init ${pkglog};
			(__pkg_binpkg && __pkg_pkgcheck && __pkg_srcpkg ${_pkg_tag} && __pkg_dist ${_pkg_tag}) 2>&1 | tee -a ${pkglog};
			_status=${PIPESTATUS[0]};
			;;
		srcpackage-test|srcpkg-test)
			_pkg_tag="test:"
			;&
		srcpackage|srcpkg)
			__stage "Packaging${_pkg_tag:+ ${_pkg_tag%:} source}";
			__log_init ${pkglog};
			(__pkg_srcpkg ${_pkg_tag}) 2>&1 | tee -a ${pkglog};
			_status=${PIPESTATUS[0]};
			;;
		diff|mkdiff|mkpatch)
			__pkg_diff;
			_status=$?;
			;;
		upload|up)
			__stage Uploading;
			__log_init ${uploadlog};
			(__pkg_upload full) 2>&1 | tee -a ${uploadlog};
			_status=${PIPESTATUS[0]};
			;;
		stage)
			__stage Staging;
			__log_init ${uploadlog};
			(__pkg_upload stage) 2>&1 | tee -a ${uploadlog};
			_status=${PIPESTATUS[0]};
			;;
		announce)
			__stage "Preparing announcement";
			__pkg_announce;
			_status=$?;
			;;
		clean|finish)
			__finish;
			_status=$?;
			;;
		all-test)
			_pkg_tag="test:"
			;&
		almostall|all)
			__stage Preparing && __src_prep && \
			__log_init ${compilelog} && \
			__check_depends && \
			__stage Compiling && src_compile 2>&1 | tee -a ${compilelog} && \
			test ${PIPESTATUS[0]} -eq 0 && \
			__log_init ${installlog} && \
			__stage Installing && (__prepinstalldirs && src_install && __src_postinst) 2>&1 | tee -a ${installlog} && \
			test ${PIPESTATUS[0]} -eq 0 && \
			__log_init ${pkglog} && \
			__stage Packaging && (__pkg_binpkg && __pkg_pkgcheck && __pkg_srcpkg ${_pkg_tag} && __pkg_dist ${_pkg_tag}) 2>&1 | tee -a ${pkglog} && \
			test ${PIPESTATUS[0]} -eq 0
			_status=$?;
			;;
		repro-build)
			__pkg_repro_build
			_status=$?
			;;
		repro-diff)
			__pkg_repro_diff
			_status=$?
			;;
		repro-check)
			__pkg_repro_build && \
			__pkg_repro_diff
			_status=$?
			;;
		repro-finish)
			__pkg_repro_finish
			_status=$?
			;;
		help)
			__show_help;
			exit 0;
			;;
		version)
			__show_version;
			exit 0;
			;;
		_*)
			error "unknown command ${argv[${arg_n}]}";
			exit 1;
			;;
		*)
			if __check_function ${argv[${arg_n}]} && ! __check_function_ro ${argv[${arg_n}]}
			then
				${argv[${arg_n}]};
			else
				error "unknown command ${argv[${arg_n}]}";
			fi
			_status=$?;
			;;
	esac

	if (( _status != 0 ))
	then
		break;
	fi

	arg_n+=1;
done

exit ${_status};


================================================
FILE: bin/meson.build
================================================
cygport_in = files('cygport.in')

conf = configuration_data()
conf.set('VERSION', meson.project_version())
conf.set('pkgdatadir', pkgdatadir)
conf.set('cygclassdir', cygclassdir)
conf.set('cygpartdir', cygpartdir)
conf.set('gnuconfigdir', pkgdatadir)
conf.set('sysconfdir', sysconfdir)

cygport_bin = configure_file(input: cygport_in,
                             output: 'cygport',
                             configuration: conf,
                             install_dir: bindir)

inplace = configuration_data()
inplace.set('VERSION', meson.project_version())
inplace.set('pkgdatadir', join_paths(meson.project_source_root(), 'data'))
inplace.set('cygclassdir', join_paths(meson.project_source_root(), 'cygclass'))
inplace.set('cygpartdir', join_paths(meson.project_source_root(), 'lib'))
inplace.set('gnuconfigdir', join_paths(meson.project_source_root(), 'data', 'gnuconfig'))
inplace.set('sysconfdir', join_paths(meson.project_source_root(), 'data'))

cygport_inplace = configure_file(input: cygport_in,
                                 output: 'cygport-inplace',
                                 configuration: inplace)


================================================
FILE: cygclass/R.cygclass
================================================
################################################################################
#
# R.cygclass - functions for building CRAN R packages
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****h* Cygclasses/R.cygclass
#  SYNOPSIS
#  inherit R
#  DESCRIPTION
#  R is a GNU implementation of S, a language and environment for statistical
#  computing and graphics.
#
#  The primary purpose of R.cygclass is for creating Cygwin packages from
#  |html <a href="https://cran.r-project.org/web/packages/">CRAN packages</a>,
#  the R equivalent of Perl's CPAN.  CRAN package builds are driven by R itself.
#
#  Most CRAN packages build OOTB, but creating a Cygwin package may be helpful
#  if a patch is required or if the build requirements are substantial (e.g.
#  RGtk2, the GTK+ bindings which are used in several GUIs).  When using R.cygclass
#  to build a CRAN package, NAME must be "R-" followed by the CRAN package
#  name.  In most such cases, the R.cygclass src_compile and src_install should
#  suffice.
#
#  Alternatively, the definitions in this cygclass can be used to help build
#  an R-dependent package which does not use CRAN, e.g.
#  |html <a href="https://sourceforge.net/p/cygwin-ports/rkward/">rkward</a>.
#  EXAMPLE
#  inherit R
#  
#  NAME="R-RODBC"
#  VERSION=1.3-7
#  RELEASE=1
#  CATEGORY="Math"
#  SUMMARY="R ODBC interface"
#  DESCRIPTION="ODBC database interface for the R statistic programming language"
#  
#  R_CONFIGURE_ARGS="--with-odbc-manager=iodbc"
#
#  REQUIRES
#  pkg-config, R
#  SEE ALSO
#  mirror_cran
#****

# cross-compiling is not (yet?) supported
__cross_compiling_error

check_prog_req R
check_prog_req pkg-config

#****d* R.cygclass/R
#  DESCRIPTION
#  Absolute path to the R interpreter.
#****
R=/usr/bin/R

#****d* R.cygclass/R_CFLAGS
#  DESCRIPTION
#  Compile flags for the libR C library.
#****
R_CFLAGS="$(${R} CMD config CFLAGS) $(pkg-config --cflags libR)"

#****d* R.cygclass/R_LIBS
#  DESCRIPTION
#  Link flags for the libR C library.
#****
R_LIBS="$(pkg-config --libs libR)"

#****d* R.cygclass/R_HOME
#  DESCRIPTION
#  Absolute path to the R main directory.
#****
R_HOME=$(${R} RHOME)

#****d* R.cygclass/R_INCLUDEDIR
#  DESCRIPTION
#  Absolute path to the directory containing libR C library headers.
#****
R_INCLUDEDIR=${R_HOME}/include

#****d* R.cygclass/R_SITELIB
#  DESCRIPTION
#  Installation path for third-party R modules.
#****
R_SITELIB=${R_HOME}/site-library

case ${PN} in
R-*)
ORIG_PN=${ORIG_PN:-${PN#R-}}
#****o* R.cygclass/CATEGORY (R)
#  DEFINITION
CATEGORY="Math Science"
#****
#****o* R.cygclass/SUMMARY (R)
#  DEFINITION
SUMMARY="R ${ORIG_PN} package"
#****
#****o* R.cygclass/HOMEPAGE (R)
#  DESCRIPTION
#  Web address for the R module on CRAN.
#****
HOMEPAGE="https://cran.r-project.org/web/packages/${ORIG_PN}/"

#****o* R.cygclass/SRC_URI (R)
#  DESCRIPTION
#  Download location for the R module on CRAN.
#****
SRC_URI="mirror://cran/src/contrib/${ORIG_PN}_${PV/_/-}.tar.gz"

SRC_DIR="${ORIG_PN}"
;;
esac

# kept for API compatibility; now in check_funcs under different name
check_R_package() { check_R_module ${*} ; }

#****v* R.cygclass/R_CONFIGURE_ARGS
#  SYNOPSIS
#  R_CONFIGURE_ARGS="arg1 [arg2 ...]"
#  DESCRIPTION
#  A string containing flag(s) to be passed to the configure script used by
#  module packages containing native code.
#****

#****C* R.cygclass/R_compile
#  SYNOPSIS
#  cd $B
#  R_compile
#  DESCRIPTION
#  Configures and compiles an R module packages.  Due to the nature of
#  CRAN packages, the package is not compiled in B, but is compiled and
#  "installed" into a temporary directory.
#****
R_compile() {
	mkdir -p ${T}/inst
	${R} CMD INSTALL \
		--library=${T}/inst \
		--configure-args="${R_CONFIGURE_ARGS}" \
		${B}/${ORIG_PN}
}

#****I* R.cygclass/R_install
#  SYNOPSIS
#  R_install
#  DESCRIPTION
#  Installs the R module into $D.  Due to the nature of CRAN packages, all
#  this does is copy from the temporary directory used in R_compile.
#****
R_install() {
	[ -d ${T}/inst/${ORIG_PN} ] || error "cannot find built package"

	dodir ${R_SITELIB}
	cp -LR ${T}/inst/${ORIG_PN} ${D}${R_SITELIB}
}

#****o* R.cygclass/src_compile (R)
#  DEFINITION
src_compile() {
	mkdir -p ${B}/${ORIG_PN}
	lndirs ${S} ${B}/${ORIG_PN}
	R_compile
}
#****

#****o* R.cygclass/src_install (R)
#  DEFINITION
src_install() {
	R_install
}
#****

readonly -f R_compile R_install


================================================
FILE: cygclass/ant.cygclass
================================================
################################################################################
#
# ant.cygclass - functions for building Java packages with Ant
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****ih* Cygclasses/ant.cygclass
#  SYNOPSIS
#  inherit ant
#  DESCRIPTION
#  Apache Ant is a build system written in Java and used in many Java projects.
#  The build is controlled by a single XML file, named 'build.xml' by default,
#  which specifies the targets to be built, the commands to build them, and the
#  options which may be given to control the build.
#
#  Ant includes support for a number of commands (called tasks), including
#  compiling and executing Java code, generating documentation, downloading
#  files, de/compressing archives, and running testsuites.  Third-party Ant
#  tasks also exist to support additional commands.
#
#  This cygclass builds packages which use the Ant build system.
#  INHERITS
#  java.cygclass
#  REQUIRES
#  ant
#****

inherit java

check_prog_req ant

#****id* ant.cygclass/ANT
#  DESCRIPTION
#  Absolute path to the Ant build tool.
#****
ANT=/usr/bin/ant

#****id* ant.cygclass/ANT_HOME
#  DESCRIPTION
#  Root datadir for the Ant build tool.  This definition is exported to the
#  build environment.
#****
export ANT_HOME=/usr/share/ant

#****iv* ant.cygclass/ANT_OPTS
#  DESCRIPTION
#  Options for the Ant build tool to pass to the Java runtime, e.g. -Xmx.
#  This definition is exported to the build environment.
#****
export ANT_OPTS

#****iv* ant.cygclass/ANT_BUILD_XML
#  DESCRIPTION
#  Name or relative path of the Ant build file.  This need only be defined
#  if it is not build.xml (the default).
#****

#****iC* ant.cygclass/cygant
#  SYNOPSIS
#  cygant [OPTIONS]
#  DESCRIPTION
#  Runs Ant with the given options, if any.
#****
cygant() {
	local fileargs task taskpath

	if [ ! -e ${ANT_BUILD_XML:-build.xml} ]
	then
		error "Ant build.xml file not found"
	fi

	for task in ${ANT_TASKS//,/ }
	do
		case ${task} in
			oro|regexp)	taskpath+=${JAVA_DIR}/jakarta-${task}.jar: ;;
			*)		taskpath+=${JAVA_DIR}/${task}.jar: ;;
		esac
	done
	taskpath+=${JAVA_DIR}/xalan.jar:${JAVA_DIR}/xercesImpl.jar:${JAVA_DIR}/xml-apis.jar:${CLASSPATH}

	if defined ANT_BUILD_XML
	then
		fileargs="-f ${ANT_BUILD_XML}"
	fi

	JAVACMD=${JAVA} \
	/usr/bin/ant -lib ${taskpath} ${fileargs} ${@} || error "ant build failed"
}

#****iI* ant.cygclass/doanttask
#  SYNOPSIS
#  doanttask JAR_FILE [JAR_FILE] ...
#  DESCRIPTION
#  Installs the given .jar file(s) into the Ant task directory.
#****
doanttask() {
	local _insinto_tmp=${_insinto_dir}

	insinto ${ANT_HOME}/lib
	doins ${@}

	_insinto_dir=${_insinto_tmp}
}

#****iv* ant.cygclass/ANT_BUILD_ARGS
#  DESCRIPTION
#  Arguments to pass to the Ant build command if this src_compile is used.
#****
#****iv* ant.cygclass/ANT_BUILD_TARGETS
#  DESCRIPTION
#  Target(s) to be built during the Ant build command if this src_compile is used.
#****

#****io* ant.cygclass/src_compile (ant)
#  DEFINITION
src_compile() {
	lndirs
	cd ${B}
	cygant ${ANT_BUILD_ARGS} ${ANT_BUILD_TARGETS}
}
#****

#****iv* ant.cygclass/ANT_TEST_ARGS
#  DESCRIPTION
#  Arguments to pass to Ant during testing if this src_test is used.
#****
#****iv* ant.cygclass/ANT_TEST_TARGETS
#  DESCRIPTION
#  Target(s) to be built to run the testsuite if this src_test is used.
#****

#****io* ant.cygclass/src_test (ant)
#  DEFINITION
src_test() {
	cd ${B}
	ANT_TASKS="${ANT_TASKS} junit" cygant ${ANT_TEST_ARGS} ${ANT_TEST_TARGETS:-test}
}
#****

#****iv* ant.cygclass/ANT_INSTALL_JARS
#  DESCRIPTION
#  Relative paths of .jar files to be installed by ant_install.
#****
#****iv* ant.cygclass/ANT_INSTALL_JAVADOC
#  DESCRIPTION
#  Relative paths of javadoc directories to be installed by ant_install.
#****
#****iv* ant.cygclass/ANT_INSTALL_TASKS
#  DESCRIPTION
#  Relative paths of Ant task .jar files to be installed by ant_install.
#****
#****iv* ant.cygclass/ANT_INSTALL_WRAPPERS
#  SYNOPSIS
#  ANT_INSTALL_WRAPPERS="name1,name1.jar[,main.class1] name2,name2.jar[,main.class2] ..."
#  DESCRIPTION
#  Comma-delineated set of arguments to pass to java_wrapper.  Multiple
#  wrappers can be created by separating the argument sets with spaces.
#****

#****iI* ant.cygclass/ant_install
#  SYNOPSIS
#  ant_install
#  DESCRIPTION
#  Installs the files and directories specified by ANT_INSTALL_JARS,
#  ANT_INSTALL_JAVADOC, and/or ANT_INSTALL_TASKS, at least one of which
#  must be defined.
#****
ant_install() {
	local wrap

	if ! defined ANT_INSTALL_JARS && ! defined ANT_INSTALL_JAVADOC && ! defined ANT_INSTALL_TASKS
	then
		error "ant_install: ANT_INSTALL_* all undefined; nothing to install"
	fi

	if defined ANT_INSTALL_JARS
	then
		dojar ${ANT_INSTALL_JARS}
	fi
	if defined ANT_INSTALL_JAVADOC
	then
		dojavadoc ${ANT_INSTALL_JAVADOC}
	fi
	if defined ANT_INSTALL_TASKS
	then
		doanttask ${ANT_INSTALL_TASKS}
	fi

	for wrap in ${ANT_INSTALL_WRAPPERS}
	do
		java_wrapper ${wrap//,/ }
	done
}

#****io* ant.cygclass/src_install (ant)
#  DEFINITION
src_install() {
	cd ${B}
	ant_install
}
#****

readonly -f cygant doanttask ant_install


================================================
FILE: cygclass/apache.cygclass
================================================
################################################################################
#
# apache.cygclass - compatibility wrapper for httpd.cygclass
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****iih* Cygclasses/apache.cygclass
#  SYNOPSIS
#  inherit apache
#  DESCRIPTION
#  Deprecated compatibility wrapper for httpd.cygclass.
#  INHERITS
#  httpd.cygclass
#****

case ${PN} in apache2-*)
ORIG_PN=${ORIG_PN:-${PN#apache2-}}
ORIG_P=${ORIG_PN}-${PV}
HTTPD_MOD_NAME=${APACHE_MOD_NAME:-${PN#apache2-}}
;;
esac

inherit httpd

#****iC* apache.cygclass/apache_compile
#  DESCRIPTION
#  Deprecated alias for httpd_mod_compile.
#****
apache_compile() {
	httpd_mod_compile "$@"
}

#****iC* apache.cygclass/apache_apxs_compile
#  DESCRIPTION
#  Deprecated alias for httpd_apxs_compile.
#****
apache_apxs_compile() {
	httpd_apxs_compile "$@"
}

apxs_compile() {
	httpd_apxs_compile "$@"
}

#****iI* apache.cygclass/doapacheconf
#  DESCRIPTION
#  Deprecated alias for dohttpdconf.
#****
doapacheconf() {
	dohttpdconf "$@"
}

#****iI* apache.cygclass/doapachemod
#  DESCRIPTION
#  Deprecated alias for dohttpdmod.
#****
doapachemod() {
	dohttpdmod "$@"
}

#****iI* apache.cygclass/apache_postinst
#  DESCRIPTION
#  Deprecated alias for httpd_loadmodules.
#****
apache_postinst() {
	httpd_loadmodules
}

readonly -f apache_compile apache_apxs_compile apxs_compile doapacheconf \
            doapachemod apache_postinst


================================================
FILE: cygclass/apache2.cygclass
================================================
################################################################################
#
# apache2.cygclass - compatibility wrapper for httpd.cygclass
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****ih* Cygclasses/apache2.cygclass
#  SYNOPSIS
#  inherit apache2
#  DESCRIPTION
#  Deprecated compatibility wrapper for httpd.cygclass.
#  INHERITS
#  httpd.cygclass
#****

case ${PN} in apache2-*)
ORIG_PN=${ORIG_PN:-${PN#apache2-}}
ORIG_P=${ORIG_PN}-${PV}
HTTPD_MOD_NAME=${APACHE_MOD_NAME:-${PN#apache2-}}
;;
esac

inherit httpd

#****id* apache2.cygclass/APXS2
#  DESCRIPTION
#  Deprecated alias for HTTPD_APXS.
#****
APXS2=${HTTPD_APXS}

#****id* apache2.cygclass/HTTPD2
#  DESCRIPTION
#  Deprecated alias for HTTPD.
#****
HTTPD2=${HTTPD}

#****id* apache2.cygclass/APACHE2_VERSION
#  DESCRIPTION
#  Deprecated alias for HTTPD_VERSION.
#****
APACHE2_VERSION=${HTTPD_VERSION}

#****id* apache2.cygclass/APACHE2_INCLUDEDIR
#  DESCRIPTION
#  Deprecated alias for HTTPD_INCLUDEDIR.
#****

#****id* apache2.cygclass/APACHE2_LIBEXECDIR
#  DESCRIPTION
#  Deprecated alias for HTTPD_LIBEXECDIR.
#****
APACHE2_LIBEXECDIR=${HTTPD_LIBEXECDIR}

#****id* apache2.cygclass/APACHE2_SYSCONFDIR
#  DESCRIPTION
#  Deprecated alias for HTTPD_SYSCONFDIR.
#****
APACHE2_SYSCONFDIR=${HTTPD_SYSCONFDIR}

#****id* apache2.cygclass/APACHE2_CFLAGS
#  DESCRIPTION
#  Deprecated alias for HTTPD_CFLAGS.
#****
APACHE2_CFLAGS=${HTTPD_CFLAGS}

#****id* apache2.cygclass/APACHE2_LIBS
#  DESCRIPTION
#  Deprecated alias for HTTPD_LIBS.
#****
APACHE2_LIBS=${HTTPD_LIBS}


#****iC* apache2.cygclass/apache2_compile
#  DESCRIPTION
#  Deprecated alias for httpd_mod_compile.
#****
apache2_compile() {
	httpd_mod_compile "${@}"
}

#****iC* apache2.cygclass/apache2_apxs_compile
#  DESCRIPTION
#  Deprecated alias for httpd_apxs_compile.
#****
apache2_apxs_compile() {
	httpd_apxs_compile "${@}"
}

#****iI* apache2.cygclass/doapache2conf
#  DESCRIPTION
#  Deprecated alias for dohttpdconf.
#****
doapache2conf() {
	dohttpdconf "${@}"
}

#****iI* apache2.cygclass/doapache2mod
#  DESCRIPTION
#  Deprecated alias for dohttpdmod.
#****
doapache2mod() {
	dohttpdmod "${@}"
}

#****iI* apache2.cygclass/apache2_postinst
#  DESCRIPTION
#  Deprecated alias for httpd_loadmodules.
#****
apache2_postinst() {
	httpd_loadmodules
}

readonly -f apache2_compile apache2_apxs_compile doapache2conf \
            doapache2mod apache2_postinst


================================================
FILE: cygclass/aspell-dict.cygclass
================================================
################################################################################
#
# aspell-dict.cygclass - functions for building Aspell dictionaries
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****h* Cygclasses/aspell-dict.cygclass
#  SYNOPSIS
#  [ASPELL_COMPAT=...]
#  inherit aspell-dict
#  DESCRIPTION
#  Aspell is a GNU project providing a spell checking library and command-line
#  tool.  Aspell can support multiple languages by installing dictonaries.
#
#  The purpose of this cygclass is to create Aspell dictionary packages for
#  the Cygwin Aspell package.  aspell-dict.cygclass expects the package name
#  to be "aspell-<language_code>".  If the source tarball is named "aspell5-*"
#  or "aspell6-*", ASPELL_COMPAT must be declared before inheriting.
#  EXAMPLE
#
#    ASPELL_COMPAT=6
#    inherit aspell-dict
#    
#    NAME="aspell-en"
#    VERSION=7.1-0
#    RELEASE=1
#    CATEGORY="Text"
#    SUMMARY="Aspell English dictionaries"
#    DESCRIPTION="GNU Aspell is a Free and Open Source spell checker designed
#    to eventually replace Ispell. It can either be used as a library or as an
#    independent spell checker.
#    This package provides English dictionaries for Aspell."
#    HOMEPAGE="http://aspell.net/"
#    LICENSE="MIT and BSD"
#
#  REQUIRES
#  aspell
#  SEE ALSO
#  mirror_gnu
#****

#****v* aspell-dict.cygclass/ASPELL_COMPAT
#  DESCRIPTION
#  Dictionary compatibility level:
#  * unset -- Source named "aspell-*". Built with old system for 0.50; usually compatible with 0.60.
#  * 5 -- Source named "aspell5-*". Built for 0.50 but usually compatible with 0.60.
#  * 6 -- Source named "aspell6-*". Built for 0.60 and incompatible with 0.50.
#  NOTE
#  This variable, if necessary, must be declared before inheriting aspell-dict.cygclass.
#****
case "${ASPELL_COMPAT}" in
	5|6|'') ;;
	*)	error "aspell-dict: invalid value for ASPELL_COMPAT: ${ASPELL_COMPAT}" ;;
esac

check_prog_req aspell

#****d* aspell-dict.cygclass/ASPELL_DATADIR
#  DESCRIPTION
#  Installation path for Aspell platform-independent dictionary files
#****
ASPELL_DATADIR=$(aspell dump config data-dir)

#****d* aspell-dict.cygclass/ASPELL_DICTDIR
#  DESCRIPTION
#  Installation path for Aspell compiled dictionary files
#****
ASPELL_DICTDIR=$(aspell dump config dict-dir)

#****d* aspell-dict.cygclass/ASPELL_LANG
#  DESCRIPTION
#  ISO 639 short code for language name
#****
ASPELL_LANG="${PN#aspell-}"

#****d* aspell-dict.cygclass/ASPELL_LANG_FULL
#  DESCRIPTION
#  The English name for the language specified in ASPELL_LANG.
#  NOTE
#  The iso-codes package must be installed in order to provide this definition.
#****
iso_639=/usr/share/xml/iso-codes/iso_639.xml

if [ -f ${iso_639} ]
then
	ASPELL_LANG_FULL=$(sed -e ':a;N;$!ba;s|\n\t\t| |g' ${iso_639} | grep \"${ASPELL_LANG}\" | sed -e 's|.* name="\([^"\;]*\).*|\1|')
fi

unset iso_639

# e.g. tarball version 6.0-0 => PV=6.0.0
ORIG_PN="aspell${ASPELL_COMPAT}-${ASPELL_LANG}"
case ${PV} in
	*-*) ORIG_PV=${PV} ;;
	*)   ORIG_PV=${PV%.*}-${PV##*.} ;;
esac

#****o* aspell-dict.cygclass/CATEGORY (aspell-dict)
#  DEFINITION
CATEGORY="Text"
#****
#****o* aspell-dict.cygclass/SUMMARY (aspell-dict)
#  DEFINITION
SUMMARY="Aspell ${ASPELL_LANG_FULL:-${ASPELL_LANG}} dictionary"
#****
#****o* aspell-dict.cygclass/DESCRIPTION (aspell-dict)
#  DEFINITION
DESCRIPTION="GNU Aspell is a Free and Open Source spell checker designed to
eventually replace Ispell. It can either be used as a library or as an
independent spell checker.
This package provides ${ASPELL_LANG_FULL:-${ASPELL_LANG}} dictionaries for Aspell."
#****
#****o* aspell-dict.cygclass/HOMEPAGE (aspell-dict)
#  DEFINITION
HOMEPAGE="http://aspell.net/"
#****

#****o* aspell-dict.cygclass/SRC_URI (aspell-dict)
#  DEFINITION
SRC_URI="mirror://gnu/aspell/dict/${ASPELL_LANG}/${ORIG_PN}-${ORIG_PV}.tar.bz2"
#****

SRC_DIR="${ORIG_PN}-${ORIG_PV}"

#****C* aspell-dict.cygclass/aspell_dict_compile
#  SYNOPSIS
#  aspell_dict_compile
#  DESCRIPTION
#  Compiles an Aspell dictionary by running the custom configure script, then
#  calling cygmake.
#****
aspell_dict_compile() {
	if [ ! -e configure ]
	then
		error "aspell-dict: configure not found"
	fi

	./configure || error "aspell-dict: configure failed"
	cygmake
}

#****I* aspell-dict.cygclass/doaspelldict
#  SYNOPSIS
#  doaspelldict FILES
#  DESCRIPTION
#  Installs the Aspell dictionary files to the correct directories.  Aspell
#  dictionaries usually install with the default src_install, so this is generally
#  unnecessary.
#****
doaspelldict() {
	local f

	for f
	do
		if [ ! -e ${f} ]
		then
			error "doaspelldict: ${f}: file not found"
		fi

		case ${f##*.} in
			cmap|cset|dat|kbd)
				insinto ${ASPELL_DATADIR} ;;
			alias|cwl|multi|rws)
				insinto ${ASPELL_DICTDIR} ;;
			*)
				warning "doaspelldict: skipping ${f##*/}: unknown file type"
				continue ;;
		esac

		doins ${f}
	done
}

#****I* aspell-dict.cygclass/doaspelldata
#  DESCRIPTION
#  Alias for doaspelldict.
#****
doaspelldata() { doaspelldict ${@} ; }

#****o* aspell-dict.cygclass/src_compile (aspell-dict)
#  DEFINITION
src_compile() {
	lndirs
	cd ${B}
	aspell_dict_compile
}
#****

readonly -f aspell_dict_compile doaspelldict doaspelldata


================================================
FILE: cygclass/autotools.cygclass
================================================
################################################################################
#
# autotools.cygclass - functions for building autotool-based packages
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****h* Cygclasses/autotools.cygclass
#  DESCRIPTION
#  GNU Autotools (comprising of Gettext, Autoconf, Automake, and Libtool)
#  comprise the build system of many source packages of all types.
#
#  This Cygclass provides the functions necessary to configure and build
#  autotool-based packages.  Since these are so widespread, this is the
#  assumed build system if no other is specified, and provides the default
#  src_compile accordingly.
#  EXAMPLES
#  A basic autotool-based program package can be as simple as:
#
#    NAME="grep"
#    VERSION=2.14
#    RELEASE=1
#    CATEGORY="Base"
#    SUMMARY="Searches files for text patterns"
#    DESCRIPTION="The grep command searches one or more input files for lines
#    containing a match to a specified pattern. By default, grep prints the
#    matching lines."
#    HOMEPAGE="https://www.gnu.org/software/grep/"
#    LICENSE="GPL-2.0-or-later"
#    SRC_URI="mirror://gnu/grep/grep-${VERSION}.tar.xz"
#
#  If the only customization needed is to add configure flags, use CYGCONF_ARGS:
#
#    NAME="nano"
#    VERSION=2.2.6
#    RELEASE=1
#    CATEGORY="Editors"
#    SUMMARY="Enhanced clone of Pico editor"
#    DESCRIPTION="GNU nano is a small and friendly console-mode text editor, based
#    on and mostly compatible with UW Pico. Besides basic text editing, nano offers
#    many extra features like an interactive search and replace, go to line and
#    column number, auto-indentation, feature toggles, internationalization support,
#    and filename tab completion."
#    HOMEPAGE="https://www.nano-editor.org/"
#    LICENSE="GPL-3.0-or-later"
#    SRC_URI="https://www.nano-editor.org/dist/v${VERSION%.*}/nano-${VERSION}.tar.gz"
#    PATCH_URI="2.2.4-wchar.patch"
#    
#    DIFF_EXCLUDES="nano.spec"
#    
#    CYGCONF_ARGS="--without-slang"
#
#  Packages providing libraries need a bit more to handle split lib/devel
#  packaging:
#
#    NAME="libdatrie"
#    VERSION=0.2.6
#    RELEASE=1
#    CATEGORY="Libs"
#    SUMMARY="Double-array digital search tree library"
#    DESCRIPTION="This is an implementation of double-array structure for
#    representing trie, as proposed by Junichi Aoe."
#    HOMEPAGE="https://linux.thai.net/~thep/datrie/datrie.html"
#    LICENSE="LGPL"
#    
#    PKG_NAMES="${NAME}1 ${NAME}-devel ${NAME}-doc"
#    # see PKG_CONTENTS
#    libdatrie1_CONTENTS="usr/bin/cygdatrie-1.dll"
#    # trietool is a dev-util
#    libdatrie_devel_CONTENTS="usr/bin/trietool* usr/include/ usr/lib/ usr/share/man/"
#    libdatrie_doc_CONTENTS="usr/share/doc/"
#
#  Sometimes a package uses its own aclocal macros but does not ship them,
#  or uses an older autoconf which is incompatible with the current version,
#  making cygautoreconf impossible.  In that case, as long as the package does
#  not use libtool, you may be able to skip cygautoreconf:
#
#    src_compile() {
#      # cannot autoreconf: undefined macro: AC_ACVERSION
#      cd ${B}
#      cygconf --enable-iconv
#      cygmake
#    }
#
#  For more complicated packages, additional compile and/or install steps
#  may be necessary, in which case you should override the default src_compile
#  and/or src_install:
#
#    src_compile() {
#      # the configure script is not distributed, and VPATH builds aren't supported
#      cd ${S}
#      cygmake configure
#      lndirs
#      cd ${B}
#      cygconf --htmldir=/usr/share/doc/${NAME}/html --mandir=/usr/share/man
#      cygmake all
#      # these can't be built in parallel
#      cygmake html
#      cygmake man
#      cygmake info
#      cygmake pdf
#    }
#    
#    src_install() {
#      cd ${B}
#      cyginstall install-html install-man install-info install-pdf pdfdir=/usr/share/doc/${NAME}
#    
#      # ship bash completion
#      insinto /etc/bash_completion.d
#      doins ${S}/contrib/completion/*.bash
#    }
#
#  As noted below, cygconf is only intended for autoconf-compatible configure
#  scripts.  Some packages use a custom configure script which is not compatible,
#  in which case you need to call configure yourself:
#
#    src_compile() {
#      # package is not VPATH aware
#      lndirs
#      cd ${B}
#      # custom configure incompatible with autoconf
#      ./configure --prefix=/usr || error "configure failed"
#      cygmake
#   }
#
#  NOTES
#  These functions were previously part of cygport itself, but were moved
#  out for easier maintainability.  For backwards compatibility, this
#  cygclass is automatically inherit()ed, so these functions are always
#  available as before.
#
#  Normally, a cygclass can only be inherited once.  Even though this
#  is auto-inherit()ed, it can still be manually inherit()ed once more if desired.
#  In most cases this is unnecessary, but it can be useful if you inherit
#  other cygclasses but still want the default src_compile().  For example:
#    inherit perl autotools
#  provides all the PERL_* definitions and perl_*() functions, but will build
#  with cygconf/cygmake by default instead of with perl's ExtUtils::MakeMaker
#  or Module::Build.
#  INHERITED BY
#  No Cygclass actually inherit()s autotools.cygclass for the reasons stated above,
#  but the functions defined herein are used by a number of Cygclasses:
#
#  gnome2.cygclass, gst-plugins.cygclass, gtkmm.cygclass, httpd.cygclass,
#  kde3.cygclass, mate.cygclass, php.cygclass, pygtk.cygclass, toolchain.cygclass,
#  xfce4.cygclass, xorg.cygclass
#****

# utility function used in cygautoreconf, gnome2_autoreconf, mate_autoreconf
__parse_aclocal_amflags() {
	local arg;

	for arg in $@
	do
		case $1 in
		-I) echo $2 ;;
		esac
		shift
	done
}


#****C* autotools.cygclass/gnuconfigize
#  SYNOPSIS
#  gnuconfigize DIRECTORY [DIRECTORY ...]
#  DESCRIPTION
#  Updates the config.guess and config.sub files in the given directory(ies).
#  This may be necessary when building packages natively for x86_64-cygwin,
#  which is not recognized by older versions of this file.
#  NOTE
#  This function is called automatically during cygautoreconf; it need only
#  be called directly for packages which install their copies of this file
#  (e.g. the autotools themselves) or in the unusual case where cygautoreconf
#  absolutely cannot be used.
#****

gnuconfigize() {
	local d f ts_old ts_new

	(( $# >= 1 )) || error "gnuconfigize: no destinations specified"

	for d in $@
	do
		for f in config.{guess,sub}
		do
			[ -f ${d}/${f} ] || error "gnuconfigize: $d: not a gnuconfig directory"
			ts_old=$(sed -n "s/^timestamp='\([-0-9]*\)'.*$/\1/p" ${d}/${f})
			ts_new=$(sed -n "s/^timestamp='\([-0-9]*\)'.*$/\1/p" ${_privgnuconfigdir}/${f})
			if ! [ "${ts_old}" '<' "${ts_new}" ]
			then
				inform "${f}: not downgrading from '${ts_old}' to '${ts_new}'"
				continue
			fi
			cp -f ${_privgnuconfigdir}/${f} ${d}/
			inform "${f}: updated from '${ts_old}' to '${ts_new}'"
		done
	done
}

#****C* autotools.cygclass/cygautoreconf
#  SYNOPSIS
#  cygautoreconf
#  DESCRIPTION
#  Updates the autotool build system with autoreconf, which runs the tools
#  from autoconf, automake, gettext-devel, and libtool to update their
#  respective components.  Must be run in the directory containing the top-level
#  configure.ac or configure.in (usually $S).
#  NOTE
#  If, during cygautoreconf, you get a warning such as:
#     Warning: ./configure.ac may require LT_OUTPUT macro
#  then the package configure script is relying on libtool 1.5 behaviour where
#  the libtool script is generated during AC_PROG_LIBTOOL, and can therefore
#  be called anytime thereafter in the configure script.  Some packages do this
#  either to read the libtool config, or to run compiling/linking tests with
#  the libtool script.
#
#  However, with the current libtool 2.2, the libtool script is generated during
#  the AC_OUTPUT phase at the end of configure, so these configure commands will
#  not work as designed.  The simplest portable solution is to add the
#  following line after the AC_PROG_LIBTOOL call:
#    m4_ifdef([LT_OUTPUT], [LT_OUTPUT])
#  which means: if libtool 2.2 is in use, generate a libtool script early so
#  that it can be used during configure; if libtool 1.5 is in use, this line has
#  no effect.  Such a patch is suitable to be pushed upstream.
#  WARNING
#  Skipping this step is strongly discouraged.  Patches to configure.ac, aclocal
#  macros, or Makefile.am files will not take effect until their tools have been
#  regenerated.  Also, Cygwin's libtool package often includes patches which
#  are not yet available in the latest upstream release, so libraries may not
#  be built optimally, or even correctly, without this step having been run.
#  REQUIRES
#  autoconf, automake, gettext-devel, libtool
#****
cygautoreconf() {
	local d;
	local f;
	local f_in;
	local tool;
	local ac_config_files;
	local ac_config_headers;
	local ac_subdirs;
	local ac_ver;
	local autoreconf_args;
	local auxdir;
	local configure_ac;
	local config_h;
	local config_h_in;
	local gettext_version;
	local sub_configure_ac;

	if [ -f configure.ac ]
	then
		configure_ac="configure.ac";
	elif [ -f configure.in ]
	then
		configure_ac="configure.in";
	else
		error "Could not find configure.ac or configure.in";
	fi

	__config_set with_autoconf 1

	ac_subdirs="$(grep '^[^\#]*AC_CONFIG_SUBDIRS*' ${configure_ac} | sed -e 's!.*AC_CONFIG_SUBDIRS*(\[*\(.*\))!\1!g' -e 's!\]*!!g')"

	for d in . ${ac_subdirs}
	do
		if [ -d ${d} ]
		then
			if [ -f ${d}/configure.ac ]
			then
				sub_configure_ac="${d}/configure.ac";
			elif [ -f ${d}/configure.in ]
			then
				sub_configure_ac="${d}/configure.in";
			else
				error "Could not find ${d}/configure.ac or ${d}/configure.in";
			fi

			# e.g. CVS checkouts
			if [ -f ${d}/configure ]
			then
				# Assure that autotool files are writable (e.g. less)
				eval $(grep -h '^ac_config_files=' ${d}/configure)
				# eval $(grep -h '^ac_config_headers=' ${d}/configure)

				chmod +wx ${d}/configure;

				for f in ${ac_config_files} ${ac_config_headers}
				do
					case ${f} in
						*:*)	f_in=${d}/${f#*:} ;;
						*)		f_in=${d}/${f}.in ;;
					esac

					if [ -e ${f_in} ]
					then
						chmod +w ${f_in};
					fi
				done

				unset ac_config_files;
			fi

			# sometimes ACLOCAL_AMFLAGS is defined but the given directory
			# exists only in VCS (or is created by an autogen.sh) and is
			# not shipped in the tarball
			if [ -f Makefile.am ]
			then
				__parse_aclocal_amflags $(grep '^ACLOCAL_AMFLAGS' Makefile.am | sed 's/=/ = /') | xargs -r mkdir -p
			fi
			grep '^[^\#]*AC_CONFIG_MACRO_DIRS*' ${sub_configure_ac} | sed -e "s!.*AC_CONFIG_MACRO_DIRS*(\[*\(.*\))!${d}/\1!g" -e 's!\]*!!g' | xargs -r mkdir -p

			if [ ! -f ${d}/aclocal.m4 ] || $(head -n 1 ${d}/aclocal.m4 | grep -q 'generated.* by aclocal')
			then
				__config_set with_aclocal 1
			fi

			if $(grep -q 'AM_INIT_AUTOMAKE' ${sub_configure_ac})
			then
				__config_set with_automake 1
			fi

			if $(grep -Eq '(AM_GNU_GETTEXT|AM_ICONV|AC_GGZ_INTL)' ${sub_configure_ac})
			then
				cp -f /usr/share/gettext/config.rpath ${d}/
				__config_set with_gnu_gettext 1
			fi

			if $(grep -Eq '^(AC|IT)_PROG_INTLTOOL' ${sub_configure_ac})
			then
				intltoolize --automake --copy --force
				__config_set with_intltool 1
			fi

			if $(grep -Eq '(A[CM]_PROG_LIBTOOL|LT_INIT|XCB_UTIL_COMMON)' ${sub_configure_ac})
			then
				__config_set with_libtool 1
			fi

			if $(grep -q '\./libtool -' ${sub_configure_ac}) && ! $(grep -q 'LT_OUTPUT' ${sub_configure_ac})
			then
				warning "${sub_configure_ac} may require LT_OUTPUT macro"
			fi

			# Automake will exit if these are not present
			# dodoc won't install these, however, since they will be empty
			touch ${d}/{AUTHORS,ChangeLog,NEWS,README};

			# These required files can be overwritten by automake, so we
			# back them up now and restore them afterwards
			for f in COPYING INSTALL
			do
				if [ -f ${d}/${f} ]
				then
					cp ${d}/${f} ${d}/${f}.temp;
					chmod +w ${d}/${f}.temp;
				elif [ -d ${d}/${f} ]
				then
					:
				else
					touch ${d}/${f}
				fi
			done
		fi
	done

	check_prog_req autoreconf autoconf

#****v* cygautoreconf/WANT_AUTOCONF
#  DESCRIPTION
#  This variable controls the version of autoconf to be used.  Valid settings
#  are "2.1" (for the 2.13 version), "2.5" (for the 2.5x/2.6x series) and "2.7"
#  (the default, for the 2.7x series).
#****

#****v* cygautoreconf/WANT_AUTOMAKE
#  DESCRIPTION
#  This variable controls the version of automake to be used.  Valid settings
#  are currently "1.4", "1.5" through to "1.16", etc.  If undefined, the version
#  used by the preexisting automake files will be used; if nonexistant (e.g. a
#  VCS checkout), the newest available automake will be used.
#****
	export WANT_AUTOCONF;
	export WANT_AUTOMAKE;

	case "${WANT_AUTOCONF}" in
	2.1)
		check_prog_req autoconf-2.13 autoconf2.1

		if __config_equals with_libtool 1
		then
			warning "libtool is incompatible with autoconf-2.13";
		fi
		;;
	2.5|2.7|'')
		case "${WANT_AUTOCONF}" in
		2.5)
			WANT_AUTOCONF=2.5
			case $(autoconf --version 2> /dev/null | head -n 1) in
			autoconf*2.[56]?) ;;
			*)	error "autoconf2.5 is required to build this package" ;;
			esac
			;;
		2.7|'')
			WANT_AUTOCONF=2.7
			case $(autoconf --version 2> /dev/null | head -n 1) in
			autoconf*2.[7]?) ;;
			*)	error "autoconf2.7 is required to build this package" ;;
			esac
		esac

		if __config_equals with_libtool 1
		then
			case $(automake --version 2> /dev/null | head -n 1) in
			automake*\ 1.9.*|automake*\ 1.1[0-9]*) ;;
			*)  inform "libtool requires at least automake 1.9; setting WANT_AUTOMAKE"
			    WANT_AUTOMAKE=1.9 ;;
			esac
		fi

#****v* cygautoreconf/NO_ACLOCAL
#  DESCRIPTION
#  Define this variable to a boolean true value to skip running aclocal
#  during cygautoreconf.
#  WARNING
#  This is strongly discouraged, and should only be used when a package uses
#  its own aclocal macros which are not provided in the tarball *and* the
#  package does not use libtool.
#****
#****v* cygautoreconf/NO_LIBTOOLIZE
#  DESCRIPTION
#  Define this variable to a boolean true value to skip running libtoolize
#  during cygautoreconf.
#  WARNING
#  This is strongly discouraged.  Cygwin's libtool usually includes patches
#  required for optimal results on Cygwin which are not yet available in
#  even the most recent upstream releases.
#****
#****v* cygautoreconf/NO_AUTOCONF
#  DESCRIPTION
#  Define this variable to a boolean true value to skip running autoconf
#  during cygautoreconf.
#  WARNING
#  This is strongly discouraged.  Running libtoolize, changes to aclocal macros,
#  or changes to configure.ac/configure.in all require autoconf to be run for
#  a working build.
#****
#****v* cygautoreconf/NO_AUTOHEADER
#  DESCRIPTION
#  Sometimes autoreconf thinks a package uses autoheader when in fact it does
#  not, in which case cygautoreconf will fail during the autoheader stage.
#  In such cases, provided you have not patched any AC_DEFINEs, set this
#  variable to a boolean true value to skip the autoheader step.
#****
#****v* cygautoreconf/NO_AUTOMAKE
#  DESCRIPTION
#  Define this variable to a boolean true value to skip running automake
#  during cygautoreconf.
#  WARNING
#  This is strongly discouraged.  If aclocal and/or autoconf have been run,
#  running automake is required for a working build.
#****
#****v* cygautoreconf/NO_AUTOPOINT
#  DESCRIPTION
#  Define this variable to a boolean true value to skip running autopoint
#  during cygautoreconf.
#  WARNING
#  This is strongly discouraged.  Cygwin's gettext package often has patches
#  which are not yet available in even the latest official release, and earlier
#  versions of gettext are incompatible with the current libtool.
#****

		ACLOCAL=aclocal
		# not all packages require gettext-devel
		AUTOPOINT=$(which autopoint 2>/dev/null || :)

		if cross_compiling || inherited toolchain
		then
			local ccsysroot=$(${CC} -print-sysroot)
			local sysrootgtize=${ccsysroot}$(__target_prefix)/bin/autopoint
			local sysrootltize=${ccsysroot}$(__target_prefix)/bin/libtoolize
			local sysrootaclocaldir=${ccsysroot}$(__target_prefix)/share/aclocal
			if [ -x ${sysrootltize} ]
			then
				LIBTOOLIZE=${sysrootltize}
			fi
			if [ -x ${sysrootgtize} ]
			then
				AUTOPOINT=${sysrootgtize}
			fi
		fi

		# libtool 2.2+ is incompatible with gettext before 0.17
		# config.rpath is broken wrt dynamic linkage before 0.17
		if defined AUTOPOINT
		then
			eval gettext_$(grep ^version= ${AUTOPOINT})
			if ! __version_at_least 0.17 ${gettext_version}
			then
				error "cygautoreconf: at least gettext 0.17 required"
			fi
			case ${gettext_version} in
			*.*.*.*) gettext_version=${gettext_version%.*} ;;
			esac
			AUTOPOINT+=" -V ${gettext_version}"
		fi

		for tool in ACLOCAL LIBTOOLIZE AUTOCONF AUTOHEADER AUTOPOINT AUTOMAKE
		do
			if __arg_bool NO_${tool}
			then
				declare ${tool}=true
				case ${tool} in
				LIBTOOLIZE) __config_set with_libtool 0 ;;
				*) __config_set with_${tool,,} 0 ;;
				esac
			fi
			export ${tool}
		done

#****v* cygautoreconf/ACLOCAL_FLAGS
#  DESCRIPTION
#  Set this variable when a package ships with its own aclocal macros but
#  their directory is not included when running aclocal during cygautoreconf.
#  If needed, usually in the form "-I DIR" (where DIR is the relative subdirectory
#  containing the aclocal macros, often m4/).
#****
		if defined ACLOCAL_FLAGS
		then
			ACLOCAL+=" ${ACLOCAL_FLAGS}"
		fi
		;;
	*)
		error "illegal WANT_AUTOCONF value: ${WANT_AUTOCONF}"
		;;
	esac

	for d in ${sysrootaclocaldir} ${ACLOCAL_PATH//:/ }
	do
		if [ -d $d ]
		then
			autoreconf_args+=" -I $d"
		fi
	done

	autoreconf --force -i --verbose ${autoreconf_args} || error "autoreconf failed"

	for d in . ${ac_subdirs}
	do
		if [ -d ${d} ]
		then
			if [ -f ${d}/configure.ac ]
			then
				sub_configure_ac="${d}/configure.ac";
			else
				sub_configure_ac="${d}/configure.in";
			fi

			auxdir="$(grep '^[^\#]*AC_CONFIG_AUX_DIR' ${sub_configure_ac} | sed -e 's!.*AC_CONFIG_AUX_DIR(\[*\(.*\))!\1!g' -e 's!\]*!!g')"
			config_h="$(grep 'A[CM]_CONFIG_HEADERS*' ${sub_configure_ac} | sed -e 's!A[CM]_CONFIG_HEADERS*(\[*\(.*\))!\1!g' -e 's!\]*!!g')";

			if defined config_h
			then
				__config_set with_autoheader 1
			fi

			case "${config_h}" in
				'') config_h_in= ;;
				*:*) config_h_in="$(echo "${config_h//:/ }" | cut -d ' ' -f 2-)" ;;
				*) config_h_in="${config_h}.in" ;;
			esac

			for f in ${config_h_in}
			do
				if [ -e ${d}/${f} ]
				then
					touch ${d}/${f}
				fi
			done

			if [ -f ${d}/${auxdir}/config.guess ]
			then
				gnuconfigize ${d}/${auxdir}
			fi

			for f in COPYING INSTALL
			do
				if [ -f ${d}/${f}.temp ]
				then
					mv -f ${d}/${f}.temp ${d}/${f};
				fi
			done
		fi
	done
}

#****C* autotools.cygclass/cygconf
#  SYNOPSIS
#  cygconf [CONFIGURE_FLAG] [CONFIGURE_FLAG] ...
#  DESCRIPTION
#  Runs the configure script for the package.  cygconf passes configure the flags
#  necessary to install the package into the /usr prefix and according to the
#  |html <a href="https://www.pathname.com/fhs/">Filesystem Hierarchy Standard</a> and the
#  |html <a href="https://cygwin.com/packaging-package-files.html#package_contents">Cygwin package guidelines</a>.
#  In addition, all arguments to cygconf are passed to configure, followed by
#  CYGCONF_ARGS, if set.
#  NOTES
#  * cygconf should be run in or under $B, as it defines the build directory of
#    the package and creates numerous files.
#  * If the configure script is not in $S, see CYGCONF_SOURCE.
#  * cygconf is intended for configure scripts generated by, or compatible with,
#    autoconf.  Packages with handwritten configure scripts may not accept all
#    the flags used by cygconf, in which case a direct call to the configure
#    script is in order.
#****
cygconf() {
	local ac_config_files;
	local ac_config_headers;
	local confargs;
	local confdir;
	local configure;
	local confver;
	local confver_maj;
	local confver_min;
	local f;
	local foo_config;
	local prefix;

#****v* cygconf/AUTOCONF_VERSION
#  DESCRIPTION
#  In some in some rare cases, cygport cannot automatically detect the autoconf
#  version that was used to generate the configure script (typically when
#  cygautoreconf is not being used, and the autoconfigury has been heavily
#  customized).  This variable can be set to indicate the autoconf version the
#  configure script's options are compatible with e.g. "2.50", "2.60", "2.70".
#****

#****v* cygconf/CYGCONF_SOURCE
#  DESCRIPTION
#  Set this variable to the directory containing the configure script.  This
#  is only necessary when configure is not in $S and cygconf is not being run
#  in the same subdirectory of $B which under $S contains configure.  (IOW if
#  the configure script is in $S/unix and cygconf is run from $B/unix, setting
#  CYGCONF_SOURCE would not be necessary.)
#****
	if defined CYGCONF_SOURCE
	then
		if [ -x ${CYGCONF_SOURCE}/configure ]
		then
			confdir=${CYGCONF_SOURCE};
		else
			error "CYGCONF_SOURCE defined but no configure script found"
		fi
	elif [ -x ${PWD/${B}/${S}}/configure ]
	then
		confdir=${PWD/${B}/${S}};
	elif [ -x ${S}/configure ]
	then
		confdir=${S};
	else
		error "no configure script found";
	fi

	configure="${confdir}/configure"
	if [ -z ${AUTOCONF_VERSION} ]
	then
		confver="$("$configure" --version | sed -rn 's/.*(GNU Autoconf|autoconf version) ([0-9\.]+).*/\2/p')"
	else
		confver=${AUTOCONF_VERSION}
	fi
	confver_maj=${confver%%.*}
	confver_min=${confver#*.}
	confver_min=${confver_min%%.*}
	if [ -z $confver_maj ]
	then
		error "could not determine the autoconf version used to generate ./configure; perhaps set AUTOCONF_VERSION?";
	fi
	if [ $confver_maj -ne 2 ]
	then
		error "unexpected autoconf version";
	fi

	# AC_CONFIG_FILES should not be dist'ed, but it sometimes happens anyway
	eval $(grep -h '^ac_config_files=' ${configure})
	eval $(grep -h '^ac_config_headers=' ${configure})

	for f in ${ac_config_files} ${ac_config_headers}
	do
		if [ -f ${confdir}/${f} ]
		then
			inform "Removing ${f} to be regenerated by configure"
			rm -f ${confdir}/${f}
			ln -sf ${confdir/${S}/${PWD}}/${f} ${confdir}/${f}
		fi
	done

	prefix=$(__host_prefix)

	# Set default configure arguments
	confargs="--prefix=${prefix} --exec-prefix=${prefix} \
		  --localstatedir=$(__host_localstatedir) \
		  --sysconfdir=$(__host_sysconfdir)"

	if inherited multilib
	then
		confargs+=" --libdir=${prefix}/${MULTILIB_LIBDIR}"
	fi

	if [ $confver_min -ge 60 ]
	then
		# Autoconf version supports --docdir and --htmldir, which will
		# need to be specified manually.  It also supports --infodir
		# and --mandir, but the defaults for those match the FHS.
		confargs+=" --docdir=/usr/share/doc/${PN} --htmldir=/usr/share/doc/${PN}/html"
	else
		# Autoconf version does not support --docdir or --htmldir, so
		# don't specify those.  Set --infodir and --mandir, as those
		# have defaults that don't match the FHS.
		confargs+=" --infodir=${prefix}/share/info --mandir=${prefix}/share/man"
	fi

	if [ $confver_min -ge 50 ]
	then
		# Always use a cache file; prior to 2.50, this was the default,
		# thereafter it needs to be requested explicitly.
		confargs+=" -C"
	fi

	if cross_compiling || inherited toolchain
	then
		confargs+=" --build=${CBUILD} --host=${CHOST}"
		if inherited toolchain
		then
			# AM_GNU_GETTEXT is used in subdirectories of the
			# cygnus tree but not in the top-level
			confargs+=" --target=${CTARGET} --without-libiconv-prefix --without-libintl-prefix"
		fi
	fi

	if cross_compiling
	then
		# make sure that PATH checks for foo-config scripts
		# do not detect the native ones in /usr/bin
		for foo_config in $(ls /usr/bin/*[-_]config 2>/dev/null)
		do
			case ${foo_config##*/} in pkg-config) continue ; esac
			export $(echo ${foo_config##*/} | tr "a-z+-\." "A-ZX__")=no
			export ac_cv_path_$(echo ${foo_config##*/} | tr "a-z+-\." "A-ZX__")=no
		done
		for foo_config in $(ls $(__host_prefix)/bin/*[-_]config 2>/dev/null)
		do
			export $(echo ${foo_config##*/} | tr "a-z+-\." "A-ZX__")=$foo_config
			export ac_cv_path_$(echo ${foo_config##*/} | tr "a-z+-\." "A-ZX__")=$foo_config
		done
	fi

	if __config_equals with_libtool 1 && ! __host_is_embedded
	then
		confargs+=" --enable-shared --disable-static"
	fi

	# workaround lib-link.m4:AC_LIB_HAVE_LINKFLAGS's insistence on
	# linking with rpath, and stick with -l flags instead
	for l in $(grep '^with_lib[^ ]*_prefix$' ${configure})
	do
		# make sure this is not just a custom AC_ARG_WITH;
		# AC_LIB_HAVE_LINKFLAGS uses LIBNAME_PREFIX= further on in
		if grep -q $(echo ${l#with_}= | tr '[:lower:]' '[:upper:]') ${configure}
		then
			confargs+=" --${l//_/-}=no"
		fi
	done

	# AC_HAVE_MMAP fails despite a working mmap, so we force this to yes
	# (see https://sourceware.org/legacy-ml/cygwin/2004-09/msg00741.html
	# and following thread for details)
	case ${CHOST} in
	*-*-cygwin*)
		export ac_cv_func_mmap_fixed_mapped=yes ;;
	esac

	# packages that use intltool w/o glib-gettext get this wrong
	export DATADIRNAME="share"

#****v* cygconf/CYGCONF_ARGS
#  DESCRIPTION
#  Additional flags to pass to configure, as a string.
#  NOTE
#  Flags in CYGCONF_ARGS follow, and therefore override, flags passed by default
#  and as arguments to cygconf.
#****

	verbose ${configure} \
		--srcdir="${confdir}" ${confargs} "${@}" ${CYGCONF_ARGS} \
		|| error "configure failed"
}

#****o* autotools.cygclass/src_compile (autotools)
#  DEFINITION
src_compile() {
	cd ${S}
	cygautoreconf
	cd ${B}
	cygconf
	cygmake
}
#****

if ! defined _autotools_CYGCLASS_stage1_
then
	readonly -f cygautoreconf cygconf gnuconfigize __parse_aclocal_amflags
fi


================================================
FILE: cygclass/berkdb.cygclass
================================================
################################################################################
#
# berkdb.cygclass - functions for building the Berkeley DB
#
# Part of cygport - Cygwin packaging application
# Copyright (C) 2006-2020 Cygport authors
# Provided by the Cygwin project <https://cygwin.com/>
#
# cygport is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# cygport is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with cygport.  If not, see <https://www.gnu.org/licenses/>.
#
################################################################################

#****ih* Cygclasses/berkdb.cygclass
#  SYNOPSIS
#  inherit [java] [tcl] berkdb
#  DESCRIPTION
#  The Berkeley DB is an embedded database in the form of a C library and
#  several command-line utilities, and includes optional C++, Java, and Tcl
#  bindings.
#
#  This cygclass does all the work involved in building and packaging versions
#  3.x, 4.x, and 5.x of the Berkeley DB.  Older versions are not supported.
#
#  The C++ bindings are always enabled, but the Java and Tcl bindings will
#  only be enabled if their respective cygclasses are inherited _before_
#  berkdb.
#  INHERITS
#  autotools.cygclass
#****

case ${PV_MAJ_MIN} in
	3.*|4.*|5.*)	SLOT="${PV_MAJ_MIN}" ;;
	*)		error "berkdb: accepts only versions 3.x/4.x/5.x" ;;
esac

tarpv=${PV[1]}.${PV[2]}.${PV[3]}

#****io* berkdb.cygclass/CATEGORY (berkdb)
#  DEFINITION
CATEGORY="Database Libs"
#****
#****io* berkdb.cygclass/SUMMARY (berkdb)
#  DEFINITION
SUMMARY="Berkeley DB version ${SLOT}"
#****
#****io* berkdb.cygclass/DESCRIPTION (berkdb)
#  DEFINITION
DESCRIPTION="Oracle Berkeley DB is the industry-leading open source, embeddable
database engine that provides developers with fast, reliable, local
persistence with zero administration. Oracle Berkeley DB is a library
that links directly into your application. Your application makes simple
function calls, rather than sending messages to a remote server,
eliminating the performance penalty of client-server architectures."
#****
#****io* berkdb.cygclass/HOMEPAGE (berkdb)
#  DEFINITION
HOMEPAGE="https://www.oracle.com/database/technologies/related/berkeleydb.html"
#****

#****io* berkdb.cygclass/SRC_URI (berkdb)
#  DESCRIPTION
#  Download location of the Berkeley DB source tarball.
#****
SRC_URI="https://download.oracle.com/berkeley-db/db-${tarpv}.tar.gz"

SRC_DIR="db-${tarpv}"

#****io* berkdb.cygclass/PATCH_URI (berkdb)
#  NOTE
#  Upstream patches are automatically downloaded based on the fourth component
#  of PV; e.g. version 4.6.21.4 will download patches 1-4 for the 4.6.21 tarball.
#  WARNING
#  If additional custom patches are required, be sure to add to, not override,
#  the PATCH_URI variable as so:
#    PATCH_URI+=" 4.6-libtool22.patch"
#  Failure to do so will result in upstream patches not being included in your
#  package.
#****
if defined PV[4]
then
	for ((p = 1; p <= PV[4]; p++))
	do
		PATCH_URI+=" ${HOMEPAGE%/*}/update/${tarpv}/patch.${tarpv}.${p}"
	done
fi

unset tarpv

#****io* berkdb.cygclass/PKG_NAMES (berkdb)
#  DESCRIPTION
#  The following binary packages are created automatically:
#  * dbX.Y: command-line utilities, Cygwin and upstream READMEs;
#  * dbX.Y-doc: HTML documentation;
#  * libdbX.Y: C and C++ runtime libraries;
#  * libdbX.Y-devel: C and C++ headers and import libraries.
#  The following packages are created if their bindings are enabled:
#  * java-dbX.Y: JNI binding and Java jar;
#  * tcl-dbX.Y: Tcl bindings.
#****
PKG_NAMES="${PN} lib${PN} lib${P

[... truncated by token budget ...]

