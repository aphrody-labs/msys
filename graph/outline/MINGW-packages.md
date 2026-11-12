# Codebase Digest: MINGW-packages

- Files analyzed: 3391
- Total lines: 236947
- Total size: 7.56 MB
- Git branch: `master`
- Git HEAD commit: `290d8c8e (pnpm: 12.20.0)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
MINGW-packages/
├── mingw-w64-3proxy/
│   └── PKGBUILD (42 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-4th/
│   └── PKGBUILD (55 lines, 1.5 KB, ~472 tokens)
├── mingw-w64-4ti2/
│   └── PKGBUILD (68 lines, 1.6 KB, ~500 tokens)
├── mingw-w64-64tass/
│   └── PKGBUILD (36 lines, 955 B, ~289 tokens)
├── mingw-w64-7zip/
│   └── PKGBUILD (64 lines, 2.5 KB, ~753 tokens)
├── mingw-w64-86box/
│   └── PKGBUILD (82 lines, 2.3 KB, ~686 tokens)
├── mingw-w64-MinHook/
│   └── PKGBUILD (30 lines, 1.1 KB, ~342 tokens)
├── mingw-w64-OpenSceneGraph/
│   └── PKGBUILD (145 lines, 5.7 KB, ~1.4k tokens)
├── mingw-w64-SDL/
│   └── PKGBUILD (52 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-SDL2/
│   └── PKGBUILD (61 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-a52dec/
│   └── PKGBUILD (54 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-aalib/
│   └── PKGBUILD (68 lines, 2.2 KB, ~621 tokens)
├── mingw-w64-aas-sign/
│   └── PKGBUILD (55 lines, 1.7 KB, ~488 tokens)
├── mingw-w64-abinit/
│   └── PKGBUILD (102 lines, 3.2 KB, ~900 tokens)
├── mingw-w64-abiword/
│   └── PKGBUILD (108 lines, 3.7 KB, ~978 tokens)
├── mingw-w64-abseil-cpp/
│   └── PKGBUILD (91 lines, 2.4 KB, ~682 tokens)
├── mingw-w64-accesskit-c/
│   └── PKGBUILD (45 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-ada-libfswatch/
│   └── PKGBUILD (81 lines, 2.4 KB, ~711 tokens)
├── mingw-w64-ada-url/
│   └── PKGBUILD (56 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-ada-xdiff/
│   └── PKGBUILD (95 lines, 2.6 KB, ~793 tokens)
├── mingw-w64-ada_language_server/
│   └── PKGBUILD (81 lines, 2.9 KB, ~818 tokens)
├── mingw-w64-ada_spawn/
│   └── PKGBUILD (82 lines, 2.4 KB, ~703 tokens)
├── mingw-w64-adasat/
│   └── PKGBUILD (61 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-adios2/
│   └── PKGBUILD (143 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-adobe-source-code-pro-fonts/
│   └── PKGBUILD (28 lines, 1.4 KB, ~411 tokens)
├── mingw-w64-adol-c/
│   └── PKGBUILD (56 lines, 1.8 KB, ~540 tokens)
├── mingw-w64-advancecomp/
│   └── PKGBUILD (56 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-adwaita-icon-theme/
│   └── PKGBUILD (55 lines, 1.9 KB, ~601 tokens)
├── mingw-w64-adwaita-icon-theme-legacy/
│   └── PKGBUILD (46 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-aegisub/
│   └── PKGBUILD (122 lines, 4.3 KB, ~1.1k tokens)
├── mingw-w64-ag/
│   └── PKGBUILD (102 lines, 3.8 KB, ~1.0k tokens)
├── mingw-w64-agar/
│   └── PKGBUILD (74 lines, 2.4 KB, ~697 tokens)
├── mingw-w64-age/
│   └── PKGBUILD (55 lines, 1.5 KB, ~478 tokens)
├── mingw-w64-age-plugin-yubikey/
│   └── PKGBUILD (48 lines, 1.3 KB, ~394 tokens)
├── mingw-w64-aichat/
│   └── PKGBUILD (50 lines, 2.4 KB, ~691 tokens)
├── mingw-w64-akira/
│   └── PKGBUILD (56 lines, 1.9 KB, ~552 tokens)
├── mingw-w64-alacritty/
│   └── PKGBUILD (62 lines, 2.6 KB, ~768 tokens)
├── mingw-w64-alembic/
│   └── PKGBUILD (82 lines, 2.3 KB, ~657 tokens)
├── mingw-w64-allegro/
│   └── PKGBUILD (85 lines, 2.6 KB, ~765 tokens)
├── mingw-w64-alure/
│   └── PKGBUILD (69 lines, 2.1 KB, ~613 tokens)
├── mingw-w64-alure2/
│   └── PKGBUILD (68 lines, 2.1 KB, ~614 tokens)
├── mingw-w64-amf-headers/
│   └── PKGBUILD (28 lines, 1.1 KB, ~329 tokens)
├── mingw-w64-amgcl/
│   └── PKGBUILD (92 lines, 2.6 KB, ~785 tokens)
├── mingw-w64-amqp-cpp/
│   └── PKGBUILD (71 lines, 2.1 KB, ~607 tokens)
├── mingw-w64-anari-sdk/
│   └── PKGBUILD (62 lines, 2.0 KB, ~589 tokens)
├── mingw-w64-android-tools/
│   └── PKGBUILD (111 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-angleproject/
│   └── PKGBUILD (243 lines, 11.0 KB, ~2.9k tokens)
├── mingw-w64-ansifilter/
│   └── PKGBUILD (29 lines, 978 B, ~291 tokens)
├── mingw-w64-antiword/
│   └── PKGBUILD (72 lines, 4.2 KB, ~1.3k tokens)
├── mingw-w64-antlr3/
│   └── PKGBUILD (56 lines, 1.7 KB, ~522 tokens)
├── mingw-w64-antlr4-runtime-cpp/
│   └── PKGBUILD (65 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-aom/
│   └── PKGBUILD (68 lines, 2.3 KB, ~667 tokens)
├── mingw-w64-appstream/
│   └── PKGBUILD (83 lines, 2.5 KB, ~732 tokens)
├── mingw-w64-appstream-glib/
│   └── PKGBUILD (66 lines, 2.2 KB, ~635 tokens)
├── mingw-w64-apr/
│   └── PKGBUILD (93 lines, 2.8 KB, ~785 tokens)
├── mingw-w64-apr-util/
│   └── PKGBUILD (105 lines, 2.8 KB, ~797 tokens)
├── mingw-w64-aravis/
│   └── PKGBUILD (124 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-argon2/
│   └── PKGBUILD (68 lines, 2.2 KB, ~632 tokens)
├── mingw-w64-args/
│   └── PKGBUILD (52 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-argtable/
│   └── PKGBUILD (48 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-aria2/
│   └── PKGBUILD (83 lines, 2.8 KB, ~803 tokens)
├── mingw-w64-aribb24/
│   └── PKGBUILD (46 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-ark/
│   └── PKGBUILD (108 lines, 3.5 KB, ~970 tokens)
├── mingw-w64-arm-none-eabi-binutils/
│   └── PKGBUILD (63 lines, 2.1 KB, ~611 tokens)
├── mingw-w64-arm-none-eabi-gcc/
│   └── PKGBUILD (181 lines, 6.2 KB, ~1.9k tokens)
├── mingw-w64-arm-none-eabi-newlib/
│   └── PKGBUILD (158 lines, 5.5 KB, ~1.6k tokens)
├── mingw-w64-armadillo/
│   └── PKGBUILD (102 lines, 2.9 KB, ~853 tokens)
├── mingw-w64-arpack/
│   └── PKGBUILD (226 lines, 7.9 KB, ~2.4k tokens)
├── mingw-w64-arrow/
│   └── PKGBUILD (146 lines, 5.1 KB, ~1.4k tokens)
├── mingw-w64-arrow-adbc/
│   └── PKGBUILD (139 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-arrow-adbc-glib/
│   └── PKGBUILD (66 lines, 2.0 KB, ~573 tokens)
├── mingw-w64-arrpc/
│   └── PKGBUILD (32 lines, 961 B, ~286 tokens)
├── mingw-w64-arturo/
│   └── PKGBUILD (67 lines, 1.9 KB, ~564 tokens)
├── mingw-w64-asciidoc/
│   └── PKGBUILD (42 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-asciidoctor/
│   └── PKGBUILD (63 lines, 2.4 KB, ~739 tokens)
├── mingw-w64-asio/
│   └── PKGBUILD (57 lines, 1.8 KB, ~564 tokens)
├── mingw-w64-asiosdk/
│   └── PKGBUILD (22 lines, 911 B, ~271 tokens)
├── mingw-w64-asm-lsp/
│   └── PKGBUILD (59 lines, 1.8 KB, ~560 tokens)
├── mingw-w64-asmjit/
│   └── PKGBUILD (57 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-aspell/
│   └── PKGBUILD (83 lines, 2.6 KB, ~744 tokens)
├── mingw-w64-aspell-de/
│   └── PKGBUILD (37 lines, 987 B, ~290 tokens)
├── mingw-w64-aspell-en/
│   └── PKGBUILD (38 lines, 1.1 KB, ~336 tokens)
├── mingw-w64-aspell-es/
│   └── PKGBUILD (38 lines, 1.1 KB, ~329 tokens)
├── mingw-w64-aspell-fr/
│   └── PKGBUILD (39 lines, 1.1 KB, ~345 tokens)
├── mingw-w64-aspell-ru/
│   └── PKGBUILD (38 lines, 1.1 KB, ~330 tokens)
├── mingw-w64-assimp/
│   └── PKGBUILD (68 lines, 2.4 KB, ~682 tokens)
├── mingw-w64-astyle/
│   └── PKGBUILD (62 lines, 1.9 KB, ~577 tokens)
├── mingw-w64-at-spi2-core/
│   └── PKGBUILD (49 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-atkmm/
│   └── PKGBUILD (65 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-atkmm-2.36/
│   └── PKGBUILD (64 lines, 1.8 KB, ~556 tokens)
├── mingw-w64-attica/
│   └── PKGBUILD (63 lines, 1.9 KB, ~563 tokens)
├── mingw-w64-atuin/
│   └── PKGBUILD (113 lines, 2.9 KB, ~858 tokens)
├── mingw-w64-aubio/
│   └── PKGBUILD (60 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-audaspace/
│   └── PKGBUILD (88 lines, 3.0 KB, ~804 tokens)
├── mingw-w64-autohotkey/
│   └── PKGBUILD (135 lines, 5.8 KB, ~1.4k tokens)
├── mingw-w64-autotools/
│   └── PKGBUILD (24 lines, 721 B, ~198 tokens)
├── mingw-w64-avogadroapp/
│   └── PKGBUILD (77 lines, 2.3 KB, ~651 tokens)
├── mingw-w64-avogadrolibs/
│   └── PKGBUILD (177 lines, 5.9 KB, ~1.6k tokens)
├── mingw-w64-avr-binutils/
│   └── PKGBUILD (61 lines, 2.0 KB, ~591 tokens)
├── mingw-w64-avr-gcc/
│   └── PKGBUILD (94 lines, 2.6 KB, ~777 tokens)
├── mingw-w64-avr-libc/
│   └── PKGBUILD (49 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-avrdude/
│   └── PKGBUILD (97 lines, 2.9 KB, ~841 tokens)
├── mingw-w64-awf/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-aws-c-auth/
│   └── PKGBUILD (87 lines, 2.9 KB, ~882 tokens)
├── mingw-w64-aws-c-cal/
│   └── PKGBUILD (83 lines, 2.7 KB, ~826 tokens)
├── mingw-w64-aws-c-common/
│   └── PKGBUILD (98 lines, 3.2 KB, ~988 tokens)
├── mingw-w64-aws-c-compression/
│   └── PKGBUILD (76 lines, 2.5 KB, ~745 tokens)
├── mingw-w64-aws-c-event-stream/
│   └── PKGBUILD (84 lines, 2.4 KB, ~738 tokens)
├── mingw-w64-aws-c-http/
│   └── PKGBUILD (87 lines, 2.9 KB, ~881 tokens)
├── mingw-w64-aws-c-io/
│   └── PKGBUILD (89 lines, 2.8 KB, ~868 tokens)
├── mingw-w64-aws-c-mqtt/
│   └── PKGBUILD (82 lines, 2.3 KB, ~705 tokens)
├── mingw-w64-aws-c-s3/
│   └── PKGBUILD (87 lines, 2.9 KB, ~879 tokens)
├── mingw-w64-aws-c-sdkutils/
│   └── PKGBUILD (80 lines, 2.7 KB, ~804 tokens)
├── mingw-w64-aws-checksums/
│   └── PKGBUILD (81 lines, 2.8 KB, ~832 tokens)
├── mingw-w64-aws-crt-cpp/
│   └── PKGBUILD (88 lines, 2.6 KB, ~781 tokens)
├── mingw-w64-aws-sdk-cpp/
│   └── PKGBUILD (110 lines, 3.2 KB, ~896 tokens)
├── mingw-w64-aztecgen/
│   └── PKGBUILD (38 lines, 1.4 KB, ~383 tokens)
├── mingw-w64-babl/
│   └── PKGBUILD (51 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-badvpn/
│   └── PKGBUILD (54 lines, 1.8 KB, ~529 tokens)
├── mingw-w64-baobab/
│   └── PKGBUILD (59 lines, 2.2 KB, ~621 tokens)
├── mingw-w64-basedpyright/
│   └── PKGBUILD (31 lines, 1.0 KB, ~302 tokens)
├── mingw-w64-bat/
│   └── PKGBUILD (71 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-bc/
│   └── PKGBUILD (55 lines, 1.9 KB, ~548 tokens)
├── mingw-w64-bcftools/
│   └── PKGBUILD (63 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-bcg729/
│   └── PKGBUILD (68 lines, 2.0 KB, ~606 tokens)
├── mingw-w64-bcunit/
│   └── PKGBUILD (43 lines, 1.3 KB, ~396 tokens)
├── mingw-w64-bear/
│   └── PKGBUILD (49 lines, 1.1 KB, ~348 tokens)
├── mingw-w64-benchmark/
│   └── PKGBUILD (98 lines, 2.8 KB, ~805 tokens)
├── mingw-w64-benzene/
│   └── PKGBUILD (61 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-biber/
│   └── PKGBUILD (89 lines, 3.0 KB, ~883 tokens)
├── mingw-w64-bin2header/
│   └── PKGBUILD (53 lines, 1.7 KB, ~484 tokens)
├── mingw-w64-binaryen/
│   └── PKGBUILD (57 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-binutils/
│   └── PKGBUILD (160 lines, 6.2 KB, ~1.7k tokens)
├── mingw-w64-binwalk/
│   └── PKGBUILD (47 lines, 1.3 KB, ~381 tokens)
├── mingw-w64-bitwise/
│   └── PKGBUILD (52 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-blake3/
│   └── PKGBUILD (102 lines, 2.9 KB, ~847 tokens)
├── mingw-w64-blender/
│   └── PKGBUILD (283 lines, 11.6 KB, ~3.1k tokens)
├── mingw-w64-blis/
│   └── PKGBUILD (93 lines, 2.3 KB, ~680 tokens)
├── mingw-w64-bliss/
│   └── PKGBUILD (66 lines, 2.1 KB, ~609 tokens)
├── mingw-w64-blosc/
│   └── PKGBUILD (69 lines, 2.2 KB, ~629 tokens)
├── mingw-w64-blosc2/
│   └── PKGBUILD (78 lines, 2.2 KB, ~632 tokens)
├── mingw-w64-blueprint-compiler/
│   └── PKGBUILD (54 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-boost/
│   └── PKGBUILD (142 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-bootloadhid/
│   └── PKGBUILD (40 lines, 1.1 KB, ~346 tokens)
├── mingw-w64-bottom/
│   └── PKGBUILD (72 lines, 2.2 KB, ~659 tokens)
├── mingw-w64-box2d/
│   └── PKGBUILD (74 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-bpmdetect/
│   └── PKGBUILD (59 lines, 1.8 KB, ~542 tokens)
├── mingw-w64-breakpad/
│   └── PKGBUILD (168 lines, 9.3 KB, ~2.5k tokens)
├── mingw-w64-breeze/
│   └── PKGBUILD (86 lines, 2.8 KB, ~810 tokens)
├── mingw-w64-breeze-icons/
│   └── PKGBUILD (89 lines, 3.1 KB, ~903 tokens)
├── mingw-w64-brotli/
│   └── PKGBUILD (105 lines, 3.0 KB, ~933 tokens)
├── mingw-w64-brush/
│   └── PKGBUILD (41 lines, 1.3 KB, ~399 tokens)
├── mingw-w64-bscan-spi-bitstreams/
│   └── PKGBUILD (23 lines, 1.0 KB, ~288 tokens)
├── mingw-w64-bsdfprocessor/
│   └── PKGBUILD (56 lines, 2.0 KB, ~560 tokens)
├── mingw-w64-btyacc/
│   └── PKGBUILD (45 lines, 1.1 KB, ~355 tokens)
├── mingw-w64-buckygen/
│   └── PKGBUILD (56 lines, 1.8 KB, ~511 tokens)
├── mingw-w64-bullet/
│   └── PKGBUILD (189 lines, 6.4 KB, ~1.8k tokens)
├── mingw-w64-butler/
│   └── PKGBUILD (33 lines, 1.0 KB, ~311 tokens)
├── mingw-w64-bwidget/
│   └── PKGBUILD (33 lines, 872 B, ~265 tokens)
├── mingw-w64-bzip2/
│   └── PKGBUILD (71 lines, 2.1 KB, ~643 tokens)
├── mingw-w64-bzip3/
│   └── PKGBUILD (67 lines, 1.6 KB, ~492 tokens)
├── mingw-w64-c-ares/
│   └── PKGBUILD (80 lines, 2.7 KB, ~810 tokens)
├── mingw-w64-c3c/
│   └── PKGBUILD (70 lines, 2.0 KB, ~587 tokens)
├── mingw-w64-c4core/
│   └── PKGBUILD (80 lines, 2.6 KB, ~736 tokens)
├── mingw-w64-ca-certificates/
│   └── PKGBUILD (143 lines, 6.1 KB, ~1.9k tokens)
├── mingw-w64-cabextract/
│   └── PKGBUILD (50 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-cairo/
│   └── PKGBUILD (115 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-cairomm/
│   └── PKGBUILD (77 lines, 2.1 KB, ~645 tokens)
├── mingw-w64-cairomm-1.16/
│   └── PKGBUILD (78 lines, 2.1 KB, ~637 tokens)
├── mingw-w64-calceph/
│   └── PKGBUILD (56 lines, 2.1 KB, ~613 tokens)
├── mingw-w64-calcmysky/
│   └── PKGBUILD (74 lines, 2.3 KB, ~637 tokens)
├── mingw-w64-calculix-ccx/
│   └── PKGBUILD (79 lines, 2.8 KB, ~766 tokens)
├── mingw-w64-cantarell-fonts/
│   └── PKGBUILD (47 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-capnproto/
│   └── PKGBUILD (94 lines, 3.1 KB, ~909 tokens)
├── mingw-w64-capstone/
│   └── PKGBUILD (108 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-cargo-about/
│   └── PKGBUILD (65 lines, 1.8 KB, ~560 tokens)
├── mingw-w64-cargo-c/
│   └── PKGBUILD (74 lines, 2.1 KB, ~615 tokens)
├── mingw-w64-cargo-component/
│   └── PKGBUILD (51 lines, 1.3 KB, ~385 tokens)
├── mingw-w64-cargo-create-tauri-app/
│   └── PKGBUILD (53 lines, 1.6 KB, ~520 tokens)
├── mingw-w64-cargo-edit/
│   └── PKGBUILD (53 lines, 1.3 KB, ~411 tokens)
├── mingw-w64-cargo-expand/
│   └── PKGBUILD (51 lines, 1.2 KB, ~376 tokens)
├── mingw-w64-cargo-generate/
│   └── PKGBUILD (66 lines, 1.9 KB, ~575 tokens)
├── mingw-w64-cargo-leptos/
│   └── PKGBUILD (68 lines, 1.8 KB, ~545 tokens)
├── mingw-w64-cargo-local-registry/
│   └── PKGBUILD (58 lines, 1.8 KB, ~530 tokens)
├── mingw-w64-cargo-msrv/
│   └── PKGBUILD (60 lines, 1.5 KB, ~432 tokens)
├── mingw-w64-cargo-nextest/
│   └── PKGBUILD (55 lines, 1.8 KB, ~568 tokens)
├── mingw-w64-cargo-tauri/
│   └── PKGBUILD (63 lines, 2.1 KB, ~664 tokens)
├── mingw-w64-cas-offinder/
│   └── PKGBUILD (51 lines, 1.7 KB, ~501 tokens)
├── mingw-w64-castxml/
│   └── PKGBUILD (60 lines, 2.0 KB, ~565 tokens)
├── mingw-w64-catch/
│   └── PKGBUILD (78 lines, 2.4 KB, ~683 tokens)
├── mingw-w64-cava/
│   └── PKGBUILD (51 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-cbindgen/
│   └── PKGBUILD (57 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-ccache/
│   └── PKGBUILD (110 lines, 3.3 KB, ~959 tokens)
├── mingw-w64-cccl/
│   └── PKGBUILD (38 lines, 969 B, ~293 tokens)
├── mingw-w64-cddlib/
│   └── PKGBUILD (53 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-cego/
│   └── PKGBUILD (177 lines, 8.0 KB, ~2.6k tokens)
├── mingw-w64-cereal/
│   └── PKGBUILD (74 lines, 2.4 KB, ~716 tokens)
├── mingw-w64-ceres-solver/
│   └── PKGBUILD (82 lines, 2.8 KB, ~787 tokens)
├── mingw-w64-cfitsio/
│   └── PKGBUILD (96 lines, 3.0 KB, ~844 tokens)
├── mingw-w64-cgal/
│   └── PKGBUILD (59 lines, 2.1 KB, ~598 tokens)
├── mingw-w64-cglm/
│   └── PKGBUILD (104 lines, 2.7 KB, ~833 tokens)
├── mingw-w64-cgns/
│   └── PKGBUILD (57 lines, 1.7 KB, ~506 tokens)
├── mingw-w64-chafa/
│   └── PKGBUILD (60 lines, 2.1 KB, ~605 tokens)
├── mingw-w64-charls/
│   └── PKGBUILD (69 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-check/
│   └── PKGBUILD (41 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-chicken/
│   └── PKGBUILD (34 lines, 1.1 KB, ~327 tokens)
├── mingw-w64-chipmunk/
│   └── PKGBUILD (46 lines, 1.2 KB, ~360 tokens)
├── mingw-w64-chmlib/
│   └── PKGBUILD (46 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-chromaprint/
│   └── PKGBUILD (74 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-chrono-date/
│   └── PKGBUILD (62 lines, 2.0 KB, ~574 tokens)
├── mingw-w64-civetweb/
│   └── PKGBUILD (68 lines, 2.4 KB, ~666 tokens)
├── mingw-w64-cjose/
│   └── PKGBUILD (58 lines, 1.8 KB, ~560 tokens)
├── mingw-w64-cjson/
│   └── PKGBUILD (71 lines, 2.1 KB, ~626 tokens)
├── mingw-w64-clazy/
│   └── PKGBUILD (60 lines, 2.0 KB, ~592 tokens)
├── mingw-w64-clblast/
│   └── PKGBUILD (69 lines, 2.1 KB, ~622 tokens)
├── mingw-w64-cli11/
│   └── PKGBUILD (59 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-clinfo/
│   └── PKGBUILD (39 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-clip/
│   └── PKGBUILD (58 lines, 1.7 KB, ~516 tokens)
├── mingw-w64-clipper2/
│   └── PKGBUILD (51 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-cliquer/
│   └── PKGBUILD (67 lines, 2.1 KB, ~624 tokens)
├── mingw-w64-clucene/
│   └── PKGBUILD (90 lines, 3.2 KB, ~870 tokens)
├── mingw-w64-cmake/
│   └── PKGBUILD (204 lines, 6.5 KB, ~1.9k tokens)
├── mingw-w64-cmake-bootstrap/
│   └── PKGBUILD (71 lines, 2.1 KB, ~626 tokens)
├── mingw-w64-cmakelang/
│   └── PKGBUILD (61 lines, 2.2 KB, ~640 tokens)
├── mingw-w64-cmakerc/
│   └── PKGBUILD (69 lines, 2.2 KB, ~642 tokens)
├── mingw-w64-cmark/
│   └── PKGBUILD (58 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-cmdpack/
│   └── PKGBUILD (33 lines, 1.0 KB, ~306 tokens)
├── mingw-w64-cmocka/
│   └── PKGBUILD (62 lines, 2.0 KB, ~581 tokens)
├── mingw-w64-cmr/
│   └── PKGBUILD (53 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-cninja/
│   └── PKGBUILD (42 lines, 1.5 KB, ~418 tokens)
├── mingw-w64-codeblocks/
│   └── PKGBUILD (112 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-codeblocks-fortranproject/
│   └── PKGBUILD (70 lines, 2.1 KB, ~587 tokens)
├── mingw-w64-codebook-lsp/
│   └── PKGBUILD (47 lines, 1.1 KB, ~322 tokens)
├── mingw-w64-codec2/
│   └── PKGBUILD (48 lines, 1.7 KB, ~473 tokens)
├── mingw-w64-codelite/
│   └── PKGBUILD (139 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-cogl/
│   └── PKGBUILD (69 lines, 2.0 KB, ~591 tokens)
├── mingw-w64-coin/
│   └── PKGBUILD (98 lines, 3.1 KB, ~882 tokens)
├── mingw-w64-coin-or-asl/
│   └── PKGBUILD (51 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-coin-or-buildtools/
│   └── PKGBUILD (31 lines, 1.2 KB, ~365 tokens)
├── mingw-w64-coin-or-cbc/
│   └── PKGBUILD (78 lines, 2.4 KB, ~738 tokens)
├── mingw-w64-coin-or-cgl/
│   └── PKGBUILD (66 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-coin-or-clp/
│   └── PKGBUILD (74 lines, 2.2 KB, ~669 tokens)
├── mingw-w64-coin-or-coinutils/
│   └── PKGBUILD (79 lines, 2.3 KB, ~685 tokens)
├── mingw-w64-coin-or-data-sample/
│   └── PKGBUILD (51 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-coin-or-mp/
│   └── PKGBUILD (70 lines, 2.0 KB, ~613 tokens)
├── mingw-w64-coin-or-osi/
│   └── PKGBUILD (63 lines, 1.7 KB, ~530 tokens)
├── mingw-w64-collada-dom/
│   └── PKGBUILD (68 lines, 2.4 KB, ~681 tokens)
├── mingw-w64-concurrentqueue/
│   └── PKGBUILD (48 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-confuse/
│   └── PKGBUILD (63 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-connect/
│   └── PKGBUILD (54 lines, 1.8 KB, ~549 tokens)
├── mingw-w64-coordgen/
│   └── PKGBUILD (77 lines, 2.6 KB, ~737 tokens)
├── mingw-w64-corrade/
│   └── PKGBUILD (72 lines, 2.4 KB, ~681 tokens)
├── mingw-w64-corrosion/
│   └── PKGBUILD (40 lines, 1.2 KB, ~369 tokens)
├── mingw-w64-cotp/
│   └── PKGBUILD (60 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-cowsay/
│   └── PKGBUILD (30 lines, 947 B, ~279 tokens)
├── mingw-w64-cp2k/
│   └── PKGBUILD (107 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-cppcheck/
│   └── PKGBUILD (119 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-cppcoro/
│   └── PKGBUILD (34 lines, 1.1 KB, ~347 tokens)
├── mingw-w64-cppdap/
│   └── PKGBUILD (66 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-cppreference-qt/
│   └── PKGBUILD (20 lines, 836 B, ~244 tokens)
├── mingw-w64-cpptest/
│   └── PKGBUILD (53 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-cppunit/
│   └── PKGBUILD (49 lines, 1.3 KB, ~400 tokens)
├── mingw-w64-cpputest/
│   └── PKGBUILD (69 lines, 2.0 KB, ~585 tokens)
├── mingw-w64-cppwinrt/
│   └── PKGBUILD (78 lines, 2.6 KB, ~766 tokens)
├── mingw-w64-cppzmq/
│   └── PKGBUILD (62 lines, 1.7 KB, ~497 tokens)
├── mingw-w64-cpr/
│   └── PKGBUILD (53 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-crc32c/
│   └── PKGBUILD (65 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-creduce/
│   └── PKGBUILD (99 lines, 2.8 KB, ~791 tokens)
├── mingw-w64-croc/
│   └── PKGBUILD (61 lines, 1.5 KB, ~476 tokens)
├── mingw-w64-crt/
│   └── PKGBUILD (102 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-crypto++/
│   └── PKGBUILD (116 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-crystal/
│   └── PKGBUILD (85 lines, 2.7 KB, ~779 tokens)
├── mingw-w64-csfml/
│   └── PKGBUILD (75 lines, 2.0 KB, ~604 tokens)
├── mingw-w64-ctags/
│   └── PKGBUILD (55 lines, 2.0 KB, ~570 tokens)
├── mingw-w64-ctpl/
│   └── PKGBUILD (46 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-cuba/
│   └── PKGBUILD (46 lines, 1.2 KB, ~367 tokens)
├── mingw-w64-cubature/
│   └── PKGBUILD (61 lines, 1.8 KB, ~511 tokens)
├── mingw-w64-cubelib/
│   └── PKGBUILD (42 lines, 1.4 KB, ~442 tokens)
├── mingw-w64-cubew/
│   └── PKGBUILD (42 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-cunit/
│   └── PKGBUILD (65 lines, 1.9 KB, ~578 tokens)
├── mingw-w64-curl/
│   └── PKGBUILD (229 lines, 6.8 KB, ~2.0k tokens)
├── mingw-w64-cusp/
│   └── PKGBUILD (26 lines, 983 B, ~289 tokens)
├── mingw-w64-cvise/
│   └── PKGBUILD (139 lines, 4.8 KB, ~1.3k tokens)
├── mingw-w64-cxxopts/
│   └── PKGBUILD (49 lines, 1.5 KB, ~453 tokens)
├── mingw-w64-cyrus-sasl/
│   └── PKGBUILD (152 lines, 5.8 KB, ~1.6k tokens)
├── mingw-w64-cython/
│   └── PKGBUILD (45 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-czkawka/
│   └── PKGBUILD (114 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-d-feet/
│   └── PKGBUILD (67 lines, 2.5 KB, ~728 tokens)
├── mingw-w64-daala/
│   └── PKGBUILD (77 lines, 2.3 KB, ~670 tokens)
├── mingw-w64-darktable/
│   └── PKGBUILD (94 lines, 3.5 KB, ~919 tokens)
├── mingw-w64-dav1d/
│   └── PKGBUILD (64 lines, 2.1 KB, ~608 tokens)
├── mingw-w64-dav2d/
│   └── PKGBUILD (42 lines, 1.2 KB, ~347 tokens)
├── mingw-w64-db/
│   └── PKGBUILD (126 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-dbc_parser_cpp/
│   └── PKGBUILD (56 lines, 1.8 KB, ~503 tokens)
├── mingw-w64-dbcsr/
│   └── PKGBUILD (74 lines, 2.1 KB, ~615 tokens)
├── mingw-w64-dbus/
│   └── PKGBUILD (114 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-dbus-c++/
│   └── PKGBUILD (69 lines, 2.5 KB, ~700 tokens)
├── mingw-w64-dbus-glib/
│   └── PKGBUILD (48 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-dcadec/
│   └── PKGBUILD (90 lines, 3.5 KB, ~972 tokens)
├── mingw-w64-dcmtk/
│   └── PKGBUILD (114 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-dcraw/
│   └── PKGBUILD (38 lines, 1.1 KB, ~335 tokens)
├── mingw-w64-delta/
│   └── PKGBUILD (93 lines, 2.6 KB, ~749 tokens)
├── mingw-w64-desktop-file-utils/
│   └── PKGBUILD (59 lines, 1.7 KB, ~518 tokens)
├── mingw-w64-devcon/
│   └── PKGBUILD (71 lines, 2.4 KB, ~709 tokens)
├── mingw-w64-devil/
│   └── PKGBUILD (121 lines, 4.3 KB, ~1.1k tokens)
├── mingw-w64-dftbplus/
│   └── PKGBUILD (94 lines, 3.1 KB, ~884 tokens)
├── mingw-w64-dftd4/
│   └── PKGBUILD (79 lines, 2.2 KB, ~635 tokens)
├── mingw-w64-dfu-programmer/
│   └── PKGBUILD (37 lines, 1.1 KB, ~317 tokens)
├── mingw-w64-dfu-util/
│   └── PKGBUILD (36 lines, 966 B, ~285 tokens)
├── mingw-w64-dht/
│   └── PKGBUILD (57 lines, 1.6 KB, ~461 tokens)
├── mingw-w64-dia/
│   └── PKGBUILD (90 lines, 2.6 KB, ~796 tokens)
├── mingw-w64-difftastic/
│   └── PKGBUILD (95 lines, 2.2 KB, ~670 tokens)
├── mingw-w64-diffutils/
│   └── PKGBUILD (60 lines, 2.1 KB, ~618 tokens)
├── mingw-w64-dino/
│   └── PKGBUILD (84 lines, 2.4 KB, ~698 tokens)
├── mingw-w64-directx-headers/
│   └── PKGBUILD (65 lines, 2.1 KB, ~617 tokens)
├── mingw-w64-directxmath/
│   └── PKGBUILD (74 lines, 2.4 KB, ~679 tokens)
├── mingw-w64-directxmesh/
│   └── PKGBUILD (84 lines, 2.6 KB, ~782 tokens)
├── mingw-w64-directxtex/
│   └── PKGBUILD (77 lines, 2.3 KB, ~679 tokens)
├── mingw-w64-directxtk/
│   └── PKGBUILD (75 lines, 2.2 KB, ~658 tokens)
├── mingw-w64-discount/
│   └── PKGBUILD (60 lines, 2.0 KB, ~625 tokens)
├── mingw-w64-distorm/
│   └── PKGBUILD (49 lines, 1.7 KB, ~491 tokens)
├── mingw-w64-djview/
│   └── PKGBUILD (58 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-djvulibre/
│   └── PKGBUILD (50 lines, 1.5 KB, ~430 tokens)
├── mingw-w64-dlfcn/
│   └── PKGBUILD (61 lines, 2.0 KB, ~610 tokens)
├── mingw-w64-dlib/
│   └── PKGBUILD (130 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-dnscrypt-proxy/
│   └── PKGBUILD (81 lines, 2.7 KB, ~801 tokens)
├── mingw-w64-dnslookup/
│   └── PKGBUILD (54 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-dnssec-anchors/
│   └── PKGBUILD (37 lines, 1.3 KB, ~390 tokens)
├── mingw-w64-docbook-dsssl/
│   └── PKGBUILD (40 lines, 1.4 KB, ~411 tokens)
├── mingw-w64-docbook-mathml/
│   └── PKGBUILD (41 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-docbook-xml/
│   └── PKGBUILD (119 lines, 4.7 KB, ~1.4k tokens)
├── mingw-w64-docbook-xsl/
│   └── PKGBUILD (119 lines, 4.0 KB, ~1.2k tokens)
├── mingw-w64-docbook5-xml/
│   └── PKGBUILD (420 lines, 21.6 KB, ~6.9k tokens)
├── mingw-w64-docker-compose/
│   └── PKGBUILD (54 lines, 1.6 KB, ~466 tokens)
├── mingw-w64-doctest/
│   └── PKGBUILD (65 lines, 1.8 KB, ~558 tokens)
├── mingw-w64-docx2txt-rs/
│   └── PKGBUILD (54 lines, 1.3 KB, ~396 tokens)
├── mingw-w64-dosbox-staging/
│   └── PKGBUILD (98 lines, 3.4 KB, ~980 tokens)
├── mingw-w64-dotslash/
│   └── PKGBUILD (72 lines, 2.3 KB, ~685 tokens)
├── mingw-w64-double-conversion/
│   └── PKGBUILD (72 lines, 2.2 KB, ~625 tokens)
├── mingw-w64-doxygen/
│   └── PKGBUILD (121 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-draco/
│   └── PKGBUILD (61 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-dragon/
│   └── PKGBUILD (50 lines, 1.2 KB, ~387 tokens)
├── mingw-w64-dragonbox/
│   └── PKGBUILD (58 lines, 1.8 KB, ~555 tokens)
├── mingw-w64-drmingw/
│   └── PKGBUILD (62 lines, 2.0 KB, ~586 tokens)
├── mingw-w64-drogon/
│   └── PKGBUILD (138 lines, 4.6 KB, ~1.4k tokens)
├── mingw-w64-dsdp/
│   └── PKGBUILD (50 lines, 1.6 KB, ~515 tokens)
├── mingw-w64-dtc/
│   └── PKGBUILD (80 lines, 2.5 KB, ~756 tokens)
├── mingw-w64-dua-cli/
│   └── PKGBUILD (56 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-duckdb/
│   └── PKGBUILD (84 lines, 2.3 KB, ~675 tokens)
├── mingw-w64-duktape/
│   └── PKGBUILD (40 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-dumb/
│   └── PKGBUILD (72 lines, 2.2 KB, ~643 tokens)
├── mingw-w64-dust/
│   └── PKGBUILD (64 lines, 2.0 KB, ~601 tokens)
├── mingw-w64-dwarfstack/
│   └── PKGBUILD (46 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-dxvk/
│   └── PKGBUILD (87 lines, 3.0 KB, ~836 tokens)
├── mingw-w64-ebook-tools/
│   └── PKGBUILD (57 lines, 1.8 KB, ~522 tokens)
├── mingw-w64-eccodes/
│   └── PKGBUILD (121 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-ecpprog/
│   └── PKGBUILD (45 lines, 1.3 KB, ~419 tokens)
├── mingw-w64-edit/
│   └── PKGBUILD (59 lines, 1.7 KB, ~475 tokens)
├── mingw-w64-editorconfig-core-c/
│   └── PKGBUILD (69 lines, 2.3 KB, ~688 tokens)
├── mingw-w64-editrights/
│   └── PKGBUILD (36 lines, 1.1 KB, ~324 tokens)
├── mingw-w64-edyn/
│   └── PKGBUILD (65 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-efl/
│   └── PKGBUILD (132 lines, 4.6 KB, ~1.3k tokens)
├── mingw-w64-efxc2/
│   └── PKGBUILD (58 lines, 1.8 KB, ~530 tokens)
├── mingw-w64-egl-headers/
│   └── PKGBUILD (32 lines, 902 B, ~286 tokens)
├── mingw-w64-eigen3/
│   └── PKGBUILD (53 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-elementary-icon-theme/
│   └── PKGBUILD (57 lines, 1.8 KB, ~525 tokens)
├── mingw-w64-elisa/
│   └── PKGBUILD (85 lines, 2.9 KB, ~795 tokens)
├── mingw-w64-elmerfem/
│   └── PKGBUILD (223 lines, 7.9 KB, ~2.3k tokens)
├── mingw-w64-emacs/
│   └── PKGBUILD (131 lines, 4.6 KB, ~1.3k tokens)
├── mingw-w64-emacs-pdf-tools-server/
│   └── PKGBUILD (69 lines, 2.2 KB, ~668 tokens)
├── mingw-w64-embree/
│   └── PKGBUILD (79 lines, 2.5 KB, ~711 tokens)
├── mingw-w64-emscripten/
│   └── PKGBUILD (152 lines, 5.5 KB, ~1.5k tokens)
├── mingw-w64-enca/
│   └── PKGBUILD (53 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-enchant/
│   └── PKGBUILD (72 lines, 2.2 KB, ~621 tokens)
├── mingw-w64-enet/
│   └── PKGBUILD (44 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-engauge-digitizer/
│   └── PKGBUILD (78 lines, 2.6 KB, ~785 tokens)
├── mingw-w64-ensmallen/
│   └── PKGBUILD (50 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-enter-tex/
│   └── PKGBUILD (101 lines, 2.8 KB, ~825 tokens)
├── mingw-w64-entt/
│   └── PKGBUILD (79 lines, 2.2 KB, ~659 tokens)
├── mingw-w64-eog/
│   └── PKGBUILD (88 lines, 3.2 KB, ~860 tokens)
├── mingw-w64-eog-plugins/
│   └── PKGBUILD (49 lines, 1.8 KB, ~504 tokens)
├── mingw-w64-epstool/
│   └── PKGBUILD (44 lines, 1.5 KB, ~430 tokens)
├── mingw-w64-esbuild/
│   └── PKGBUILD (52 lines, 1.3 KB, ~419 tokens)
├── mingw-w64-eslint/
│   └── PKGBUILD (31 lines, 958 B, ~286 tokens)
├── mingw-w64-espeak-ng/
│   └── PKGBUILD (71 lines, 2.1 KB, ~632 tokens)
├── mingw-w64-evcxr/
│   └── PKGBUILD (85 lines, 2.1 KB, ~650 tokens)
├── mingw-w64-evince/
│   └── PKGBUILD (119 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-exiv2/
│   └── PKGBUILD (98 lines, 3.3 KB, ~901 tokens)
├── mingw-w64-expat/
│   └── PKGBUILD (81 lines, 2.4 KB, ~695 tokens)
├── mingw-w64-expresscpp/
│   └── PKGBUILD (60 lines, 2.0 KB, ~523 tokens)
├── mingw-w64-exprtk/
│   └── PKGBUILD (25 lines, 1018 B, ~306 tokens)
├── mingw-w64-extra-cmake-modules/
│   └── PKGBUILD (72 lines, 2.2 KB, ~631 tokens)
├── mingw-w64-extremetuxracer/
│   └── PKGBUILD (65 lines, 2.0 KB, ~581 tokens)
├── mingw-w64-eza/
│   └── PKGBUILD (73 lines, 1.9 KB, ~549 tokens)
├── mingw-w64-f2c/
│   └── PKGBUILD (80 lines, 2.5 KB, ~722 tokens)
├── mingw-w64-f2cblaslapack/
│   └── PKGBUILD (86 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-faac/
│   └── PKGBUILD (41 lines, 1.1 KB, ~341 tokens)
├── mingw-w64-faad2/
│   └── PKGBUILD (67 lines, 2.0 KB, ~608 tokens)
├── mingw-w64-fann/
│   └── PKGBUILD (46 lines, 1.4 KB, ~444 tokens)
├── mingw-w64-farstream/
│   └── PKGBUILD (80 lines, 2.6 KB, ~733 tokens)
├── mingw-w64-fast_float/
│   └── PKGBUILD (52 lines, 1.6 KB, ~461 tokens)
├── mingw-w64-fastfetch/
│   └── PKGBUILD (88 lines, 3.0 KB, ~874 tokens)
├── mingw-w64-fastgltf/
│   └── PKGBUILD (51 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-fastjar/
│   └── PKGBUILD (59 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-faudio/
│   └── PKGBUILD (63 lines, 1.9 KB, ~547 tokens)
├── mingw-w64-fcrackzip/
│   └── PKGBUILD (37 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-fd/
│   └── PKGBUILD (49 lines, 1.3 KB, ~381 tokens)
├── mingw-w64-fdk-aac/
│   └── PKGBUILD (68 lines, 2.1 KB, ~640 tokens)
├── mingw-w64-ffcall/
│   └── PKGBUILD (43 lines, 1.2 KB, ~375 tokens)
├── mingw-w64-ffmpeg/
│   └── PKGBUILD (239 lines, 7.7 KB, ~2.1k tokens)
├── mingw-w64-ffmpeg-python/
│   └── PKGBUILD (64 lines, 2.1 KB, ~633 tokens)
├── mingw-w64-ffms2/
│   └── PKGBUILD (50 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-ffnvcodec-headers/
│   └── PKGBUILD (39 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-ffts/
│   └── PKGBUILD (72 lines, 2.3 KB, ~638 tokens)
├── mingw-w64-fftw/
│   └── PKGBUILD (157 lines, 5.0 KB, ~1.4k tokens)
├── mingw-w64-fgsl/
│   └── PKGBUILD (56 lines, 1.4 KB, ~442 tokens)
├── mingw-w64-file/
│   └── PKGBUILD (62 lines, 1.8 KB, ~535 tokens)
├── mingw-w64-filezilla/
│   └── PKGBUILD (100 lines, 2.9 KB, ~843 tokens)
├── mingw-w64-firebird/
│   └── PKGBUILD (159 lines, 7.0 KB, ~2.0k tokens)
├── mingw-w64-flac/
│   └── PKGBUILD (87 lines, 2.3 KB, ~697 tokens)
├── mingw-w64-flameshot/
│   └── PKGBUILD (87 lines, 2.8 KB, ~754 tokens)
├── mingw-w64-flang/
│   └── PKGBUILD (188 lines, 6.0 KB, ~1.7k tokens)
├── mingw-w64-flann/
│   └── PKGBUILD (80 lines, 2.6 KB, ~745 tokens)
├── mingw-w64-flashrom/
│   └── PKGBUILD (81 lines, 2.4 KB, ~715 tokens)
├── mingw-w64-flatbuffers/
│   └── PKGBUILD (104 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-flecs/
│   └── PKGBUILD (89 lines, 2.8 KB, ~831 tokens)
├── mingw-w64-flexdll/
│   └── PKGBUILD (77 lines, 2.9 KB, ~848 tokens)
├── mingw-w64-flickcurl/
│   └── PKGBUILD (58 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-flif/
│   └── PKGBUILD (82 lines, 2.1 KB, ~620 tokens)
├── mingw-w64-flint/
│   └── PKGBUILD (88 lines, 2.6 KB, ~759 tokens)
├── mingw-w64-fltk/
│   └── PKGBUILD (86 lines, 2.9 KB, ~847 tokens)
├── mingw-w64-fltk1.3/
│   └── PKGBUILD (81 lines, 2.8 KB, ~830 tokens)
├── mingw-w64-fluidsynth/
│   └── PKGBUILD (110 lines, 3.2 KB, ~952 tokens)
├── mingw-w64-fmt/
│   └── PKGBUILD (90 lines, 2.7 KB, ~771 tokens)
├── mingw-w64-folly/
│   └── PKGBUILD (103 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-fontconfig/
│   └── PKGBUILD (100 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-fontforge/
│   └── PKGBUILD (89 lines, 2.9 KB, ~813 tokens)
├── mingw-w64-fortran-stdlib/
│   └── PKGBUILD (57 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-fortune-mod/
│   └── PKGBUILD (76 lines, 2.4 KB, ~690 tokens)
├── mingw-w64-fossil/
│   └── PKGBUILD (60 lines, 2.1 KB, ~614 tokens)
├── mingw-w64-fox/
│   └── PKGBUILD (53 lines, 1.5 KB, ~459 tokens)
├── mingw-w64-fpm/
│   └── PKGBUILD (71 lines, 2.1 KB, ~642 tokens)
├── mingw-w64-fq/
│   └── PKGBUILD (59 lines, 1.7 KB, ~512 tokens)
├── mingw-w64-freealut/
│   └── PKGBUILD (42 lines, 1.2 KB, ~362 tokens)
├── mingw-w64-freecad/
│   └── PKGBUILD (140 lines, 4.9 KB, ~1.3k tokens)
├── mingw-w64-freeglut/
│   └── PKGBUILD (56 lines, 2.0 KB, ~568 tokens)
├── mingw-w64-freeimage/
│   └── PKGBUILD (121 lines, 4.5 KB, ~1.3k tokens)
├── mingw-w64-freerdp/
│   └── PKGBUILD (123 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-freetds/
│   └── PKGBUILD (63 lines, 1.8 KB, ~537 tokens)
├── mingw-w64-freetype/
│   └── PKGBUILD (105 lines, 3.2 KB, ~929 tokens)
├── mingw-w64-frei0r-plugins/
│   └── PKGBUILD (79 lines, 2.6 KB, ~718 tokens)
├── mingw-w64-fribidi/
│   └── PKGBUILD (67 lines, 1.8 KB, ~555 tokens)
├── mingw-w64-fritzing/
│   └── PKGBUILD (103 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-frontistr/
│   └── PKGBUILD (89 lines, 2.6 KB, ~766 tokens)
├── mingw-w64-frozen/
│   └── PKGBUILD (58 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-fswatch/
│   └── PKGBUILD (79 lines, 2.5 KB, ~728 tokens)
├── mingw-w64-ftgl/
│   └── PKGBUILD (59 lines, 2.0 KB, ~585 tokens)
├── mingw-w64-ftxui/
│   └── PKGBUILD (62 lines, 2.0 KB, ~566 tokens)
├── mingw-w64-fxc2/
│   └── PKGBUILD (44 lines, 1.3 KB, ~413 tokens)
├── mingw-w64-fzf/
│   └── PKGBUILD (84 lines, 2.4 KB, ~707 tokens)
├── mingw-w64-fzssh/
│   └── PKGBUILD (57 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-gammaray/
│   └── PKGBUILD (125 lines, 4.1 KB, ~1.1k tokens)
├── mingw-w64-gau2grid/
│   └── PKGBUILD (70 lines, 2.4 KB, ~698 tokens)
├── mingw-w64-gavl/
│   └── PKGBUILD (51 lines, 1.8 KB, ~529 tokens)
├── mingw-w64-gc/
│   └── PKGBUILD (55 lines, 1.5 KB, ~466 tokens)
├── mingw-w64-gcab/
│   └── PKGBUILD (66 lines, 2.1 KB, ~608 tokens)
├── mingw-w64-gcc/
│   └── PKGBUILD (751 lines, 25.8 KB, ~7.4k tokens)
├── mingw-w64-gcovr/
│   └── PKGBUILD (56 lines, 1.7 KB, ~525 tokens)
├── mingw-w64-gdal/
│   └── PKGBUILD (231 lines, 7.4 KB, ~2.1k tokens)
├── mingw-w64-gdb/
│   └── PKGBUILD (165 lines, 5.1 KB, ~1.5k tokens)
├── mingw-w64-gdbm/
│   └── PKGBUILD (72 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-gdcm/
│   └── PKGBUILD (178 lines, 5.6 KB, ~1.5k tokens)
├── mingw-w64-gdk-pixbuf2/
│   └── PKGBUILD (159 lines, 5.5 KB, ~1.5k tokens)
├── mingw-w64-gdl/
│   └── PKGBUILD (58 lines, 1.8 KB, ~550 tokens)
├── mingw-w64-gdown/
│   └── PKGBUILD (52 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-gdu/
│   └── PKGBUILD (58 lines, 1.7 KB, ~540 tokens)
├── mingw-w64-geany/
│   └── PKGBUILD (93 lines, 3.0 KB, ~843 tokens)
├── mingw-w64-geany-plugins/
│   └── PKGBUILD (76 lines, 2.4 KB, ~698 tokens)
├── mingw-w64-gedit/
│   └── PKGBUILD (89 lines, 2.7 KB, ~784 tokens)
├── mingw-w64-gegl/
│   └── PKGBUILD (112 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-gemini-cli/
│   └── PKGBUILD (76 lines, 2.6 KB, ~733 tokens)
├── mingw-w64-genromfs/
│   └── PKGBUILD (43 lines, 1.1 KB, ~331 tokens)
├── mingw-w64-geocode-glib/
│   └── PKGBUILD (50 lines, 1.8 KB, ~527 tokens)
├── mingw-w64-geographiclib/
│   └── PKGBUILD (52 lines, 1.8 KB, ~499 tokens)
├── mingw-w64-geoip/
│   └── PKGBUILD (47 lines, 1.2 KB, ~386 tokens)
├── mingw-w64-geoipupdate/
│   └── PKGBUILD (66 lines, 2.1 KB, ~620 tokens)
├── mingw-w64-geos/
│   └── PKGBUILD (59 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-gettext/
│   └── PKGBUILD (227 lines, 8.1 KB, ~2.3k tokens)
├── mingw-w64-gexiv2/
│   └── PKGBUILD (55 lines, 1.7 KB, ~507 tokens)
├── mingw-w64-gf2x/
│   └── PKGBUILD (67 lines, 2.1 KB, ~652 tokens)
├── mingw-w64-gflags/
│   └── PKGBUILD (92 lines, 2.6 KB, ~769 tokens)
├── mingw-w64-ggml/
│   └── PKGBUILD (94 lines, 2.7 KB, ~787 tokens)
├── mingw-w64-ghc/
│   └── PKGBUILD (188 lines, 7.7 KB, ~2.2k tokens)
├── mingw-w64-ghdl/
│   └── PKGBUILD (111 lines, 3.4 KB, ~1.1k tokens)
├── mingw-w64-ghex/
│   └── PKGBUILD (60 lines, 2.2 KB, ~630 tokens)
├── mingw-w64-ghostscript/
│   └── PKGBUILD (130 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-gi-docgen/
│   └── PKGBUILD (66 lines, 2.3 KB, ~699 tokens)
├── mingw-w64-giflib/
│   └── PKGBUILD (44 lines, 1.3 KB, ~419 tokens)
├── mingw-w64-gimp/
│   └── PKGBUILD (140 lines, 4.4 KB, ~1.3k tokens)
├── mingw-w64-ginkgo/
│   └── PKGBUILD (85 lines, 2.5 KB, ~707 tokens)
├── mingw-w64-git/
│   └── PKGBUILD (711 lines, 25.6 KB, ~7.5k tokens)
├── mingw-w64-git-lfs/
│   └── PKGBUILD (61 lines, 1.9 KB, ~597 tokens)
├── mingw-w64-gitea-cli/
│   └── PKGBUILD (68 lines, 2.3 KB, ~714 tokens)
├── mingw-w64-gitg/
│   └── PKGBUILD (76 lines, 2.9 KB, ~781 tokens)
├── mingw-w64-github-cli/
│   └── PKGBUILD (83 lines, 2.5 KB, ~748 tokens)
├── mingw-w64-gitoxide/
│   └── PKGBUILD (66 lines, 1.9 KB, ~571 tokens)
├── mingw-w64-gitu/
│   └── PKGBUILD (63 lines, 1.2 KB, ~377 tokens)
├── mingw-w64-gitui/
│   └── PKGBUILD (81 lines, 2.0 KB, ~568 tokens)
├── mingw-w64-gjs/
│   └── PKGBUILD (94 lines, 3.9 KB, ~1.0k tokens)
├── mingw-w64-gl2ps/
│   └── PKGBUILD (53 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-glab/
│   └── PKGBUILD (75 lines, 2.4 KB, ~705 tokens)
├── mingw-w64-glade/
│   └── PKGBUILD (76 lines, 2.5 KB, ~725 tokens)
├── mingw-w64-glaze/
│   └── PKGBUILD (48 lines, 1.4 KB, ~404 tokens)
├── mingw-w64-glbinding/
│   └── PKGBUILD (73 lines, 2.3 KB, ~630 tokens)
├── mingw-w64-gles-headers/
│   └── PKGBUILD (37 lines, 941 B, ~296 tokens)
├── mingw-w64-glew/
│   └── PKGBUILD (55 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-glfw/
│   └── PKGBUILD (106 lines, 3.1 KB, ~916 tokens)
├── mingw-w64-glib-networking/
│   └── PKGBUILD (77 lines, 2.3 KB, ~692 tokens)
├── mingw-w64-glib2/
│   └── PKGBUILD (153 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-glibmm/
│   └── PKGBUILD (77 lines, 2.4 KB, ~735 tokens)
├── mingw-w64-glibmm-2.68/
│   └── PKGBUILD (81 lines, 2.6 KB, ~790 tokens)
├── mingw-w64-glm/
│   └── PKGBUILD (58 lines, 1.8 KB, ~544 tokens)
├── mingw-w64-global/
│   └── PKGBUILD (80 lines, 2.1 KB, ~640 tokens)
├── mingw-w64-globjects/
│   └── PKGBUILD (81 lines, 2.5 KB, ~708 tokens)
├── mingw-w64-glog/
│   └── PKGBUILD (73 lines, 2.3 KB, ~672 tokens)
├── mingw-w64-glpk/
│   └── PKGBUILD (83 lines, 2.4 KB, ~675 tokens)
├── mingw-w64-glsl-optimizer/
│   └── PKGBUILD (69 lines, 2.5 KB, ~728 tokens)
├── mingw-w64-glslang/
│   └── PKGBUILD (88 lines, 2.8 KB, ~818 tokens)
├── mingw-w64-glslviewer/
│   └── PKGBUILD (49 lines, 1.9 KB, ~543 tokens)
├── mingw-w64-glycin/
│   └── PKGBUILD (82 lines, 2.5 KB, ~744 tokens)
├── mingw-w64-gmic/
│   └── PKGBUILD (88 lines, 2.4 KB, ~684 tokens)
├── mingw-w64-gmime/
│   └── PKGBUILD (68 lines, 2.1 KB, ~625 tokens)
├── mingw-w64-gmp/
│   └── PKGBUILD (83 lines, 2.3 KB, ~689 tokens)
├── mingw-w64-gmp-ecm/
│   └── PKGBUILD (68 lines, 1.5 KB, ~470 tokens)
├── mingw-w64-gmsh/
│   └── PKGBUILD (112 lines, 3.5 KB, ~956 tokens)
├── mingw-w64-gn/
│   └── PKGBUILD (71 lines, 2.2 KB, ~622 tokens)
├── mingw-w64-gnatcoll-bindings/
│   └── PKGBUILD (181 lines, 6.1 KB, ~1.8k tokens)
├── mingw-w64-gnatcoll-core/
│   └── PKGBUILD (48 lines, 1.4 KB, ~423 tokens)
├── mingw-w64-gnatcoll-db/
│   └── PKGBUILD (86 lines, 2.7 KB, ~806 tokens)
├── mingw-w64-gnatdoc/
│   └── PKGBUILD (82 lines, 2.4 KB, ~728 tokens)
├── mingw-w64-gnatformat/
│   └── PKGBUILD (57 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-gnatstudio/
│   └── PKGBUILD (137 lines, 5.7 KB, ~1.5k tokens)
├── mingw-w64-gnome-calculator/
│   └── PKGBUILD (93 lines, 3.0 KB, ~855 tokens)
├── mingw-w64-gnome-common/
│   └── PKGBUILD (36 lines, 1.0 KB, ~309 tokens)
├── mingw-w64-gnome-sound-recorder/
│   └── PKGBUILD (85 lines, 3.4 KB, ~884 tokens)
├── mingw-w64-gnome-text-editor/
│   └── PKGBUILD (62 lines, 1.9 KB, ~568 tokens)
├── mingw-w64-gnucobol/
│   └── PKGBUILD (124 lines, 4.6 KB, ~1.3k tokens)
├── mingw-w64-gnumeric/
│   └── PKGBUILD (106 lines, 3.7 KB, ~992 tokens)
├── mingw-w64-gnupg/
│   └── PKGBUILD (118 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-gnuplot/
│   └── PKGBUILD (111 lines, 3.3 KB, ~924 tokens)
├── mingw-w64-gnuradio/
│   └── PKGBUILD (168 lines, 7.1 KB, ~1.9k tokens)
├── mingw-w64-gnustep-back/
│   └── PKGBUILD (65 lines, 2.0 KB, ~599 tokens)
├── mingw-w64-gnustep-base/
│   └── PKGBUILD (71 lines, 2.2 KB, ~639 tokens)
├── mingw-w64-gnustep-gui/
│   └── PKGBUILD (63 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-gnustep-make/
│   └── PKGBUILD (59 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-gnustep-xctest/
│   └── PKGBUILD (47 lines, 1.4 KB, ~438 tokens)
├── mingw-w64-gnutls/
│   └── PKGBUILD (162 lines, 5.4 KB, ~1.5k tokens)
├── mingw-w64-go/
│   └── PKGBUILD (112 lines, 3.1 KB, ~993 tokens)
├── mingw-w64-gobject-introspection/
│   └── PKGBUILD (121 lines, 4.8 KB, ~1.4k tokens)
├── mingw-w64-godot/
│   └── PKGBUILD (129 lines, 4.2 KB, ~1.1k tokens)
├── mingw-w64-godot-cpp/
│   └── PKGBUILD (53 lines, 1.8 KB, ~508 tokens)
├── mingw-w64-goffice/
│   └── PKGBUILD (83 lines, 2.6 KB, ~731 tokens)
├── mingw-w64-gojq/
│   └── PKGBUILD (55 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-goocanvas/
│   └── PKGBUILD (62 lines, 2.2 KB, ~601 tokens)
├── mingw-w64-goxel/
│   └── PKGBUILD (51 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-gperf/
│   └── PKGBUILD (40 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-gpgme/
│   └── PKGBUILD (107 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-gpgmepp/
│   └── PKGBUILD (70 lines, 2.2 KB, ~648 tokens)
├── mingw-w64-gphoto2/
│   └── PKGBUILD (64 lines, 2.1 KB, ~581 tokens)
├── mingw-w64-gplugin/
│   └── PKGBUILD (59 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-gpr/
│   └── PKGBUILD (85 lines, 3.2 KB, ~979 tokens)
├── mingw-w64-gprbuild/
│   └── PKGBUILD (80 lines, 3.0 KB, ~888 tokens)
├── mingw-w64-gprbuild-bootstrap/
│   └── PKGBUILD (81 lines, 3.0 KB, ~911 tokens)
├── mingw-w64-gptfdisk/
│   └── PKGBUILD (55 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-gputils/
│   └── PKGBUILD (45 lines, 1.3 KB, ~376 tokens)
├── mingw-w64-gr/
│   └── PKGBUILD (92 lines, 3.2 KB, ~888 tokens)
├── mingw-w64-gram/
│   └── PKGBUILD (101 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-granite/
│   └── PKGBUILD (54 lines, 1.9 KB, ~540 tokens)
├── mingw-w64-granite7/
│   └── PKGBUILD (61 lines, 1.7 KB, ~507 tokens)
├── mingw-w64-grantlee/
│   └── PKGBUILD (84 lines, 2.5 KB, ~763 tokens)
├── mingw-w64-graphene/
│   └── PKGBUILD (49 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-graphicsmagick/
│   └── PKGBUILD (139 lines, 4.1 KB, ~1.2k tokens)
├── mingw-w64-graphite2/
│   └── PKGBUILD (111 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-graphviz/
│   └── PKGBUILD (179 lines, 5.3 KB, ~1.5k tokens)
├── mingw-w64-grep/
│   └── PKGBUILD (48 lines, 1.6 KB, ~474 tokens)
├── mingw-w64-gromacs/
│   └── PKGBUILD (93 lines, 2.9 KB, ~821 tokens)
├── mingw-w64-groonga/
│   └── PKGBUILD (79 lines, 2.7 KB, ~753 tokens)
├── mingw-w64-grpc/
│   └── PKGBUILD (231 lines, 8.0 KB, ~2.3k tokens)
├── mingw-w64-grype/
│   └── PKGBUILD (70 lines, 2.2 KB, ~671 tokens)
├── mingw-w64-gsasl/
│   └── PKGBUILD (67 lines, 2.0 KB, ~573 tokens)
├── mingw-w64-gsettings-desktop-schemas/
│   └── PKGBUILD (54 lines, 1.9 KB, ~557 tokens)
├── mingw-w64-gsfonts/
│   └── PKGBUILD (29 lines, 1.0 KB, ~329 tokens)
├── mingw-w64-gsl/
│   └── PKGBUILD (41 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-gsl-lite/
│   └── PKGBUILD (49 lines, 1.5 KB, ~466 tokens)
├── mingw-w64-gsm/
│   └── PKGBUILD (50 lines, 1.8 KB, ~542 tokens)
├── mingw-w64-gsoap/
│   └── PKGBUILD (47 lines, 1.3 KB, ~414 tokens)
├── mingw-w64-gspell/
│   └── PKGBUILD (53 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-gss/
│   └── PKGBUILD (57 lines, 1.5 KB, ~427 tokens)
├── mingw-w64-gssdp/
│   └── PKGBUILD (90 lines, 2.5 KB, ~754 tokens)
├── mingw-w64-gst-devtools/
│   └── PKGBUILD (47 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-gst-editing-services/
│   └── PKGBUILD (54 lines, 1.8 KB, ~511 tokens)
├── mingw-w64-gst-libav/
│   └── PKGBUILD (55 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-gst-plugins-bad/
│   └── PKGBUILD (340 lines, 10.8 KB, ~3.0k tokens)
├── mingw-w64-gst-plugins-base/
│   └── PKGBUILD (74 lines, 2.4 KB, ~683 tokens)
├── mingw-w64-gst-plugins-good/
│   └── PKGBUILD (128 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-gst-plugins-rs/
│   └── PKGBUILD (82 lines, 2.3 KB, ~709 tokens)
├── mingw-w64-gst-plugins-ugly/
│   └── PKGBUILD (67 lines, 2.0 KB, ~592 tokens)
├── mingw-w64-gst-python/
│   └── PKGBUILD (60 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-gst-rtsp-server/
│   └── PKGBUILD (63 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-gstreamer/
│   └── PKGBUILD (73 lines, 2.2 KB, ~639 tokens)
├── mingw-w64-gtest/
│   └── PKGBUILD (80 lines, 2.2 KB, ~645 tokens)
├── mingw-w64-gtk-doc/
│   └── PKGBUILD (78 lines, 2.7 KB, ~818 tokens)
├── mingw-w64-gtk-elementary-theme/
│   └── PKGBUILD (40 lines, 1.3 KB, ~387 tokens)
├── mingw-w64-gtk-vnc/
│   └── PKGBUILD (72 lines, 2.4 KB, ~695 tokens)
├── mingw-w64-gtk2/
│   └── PKGBUILD (128 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-gtk3/
│   └── PKGBUILD (170 lines, 6.2 KB, ~1.8k tokens)
├── mingw-w64-gtk4/
│   └── PKGBUILD (102 lines, 3.0 KB, ~872 tokens)
├── mingw-w64-gtkada/
│   └── PKGBUILD (74 lines, 2.2 KB, ~690 tokens)
├── mingw-w64-gtkdatabox/
│   └── PKGBUILD (52 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-gtkmm-4.0/
│   └── PKGBUILD (74 lines, 2.1 KB, ~656 tokens)
├── mingw-w64-gtkmm3/
│   └── PKGBUILD (74 lines, 2.0 KB, ~621 tokens)
├── mingw-w64-gtksourceview3/
│   └── PKGBUILD (70 lines, 2.0 KB, ~580 tokens)
├── mingw-w64-gtksourceview4/
│   └── PKGBUILD (63 lines, 1.7 KB, ~512 tokens)
├── mingw-w64-gtksourceview5/
│   └── PKGBUILD (88 lines, 2.6 KB, ~740 tokens)
├── mingw-w64-gtksourceviewmm3/
│   └── PKGBUILD (64 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-gtkspell3/
│   └── PKGBUILD (54 lines, 1.7 KB, ~483 tokens)
├── mingw-w64-gtkwave/
│   └── PKGBUILD (74 lines, 2.4 KB, ~723 tokens)
├── mingw-w64-gts/
│   └── PKGBUILD (65 lines, 1.9 KB, ~579 tokens)
├── mingw-w64-gumbo-parser/
│   └── PKGBUILD (46 lines, 1.1 KB, ~343 tokens)
├── mingw-w64-gw/
│   └── PKGBUILD (46 lines, 1.3 KB, ~386 tokens)
├── mingw-w64-gxml/
│   └── PKGBUILD (62 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-hackrf/
│   └── PKGBUILD (66 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-handbrake/
│   └── PKGBUILD (108 lines, 3.6 KB, ~959 tokens)
├── mingw-w64-harfbuzz/
│   └── PKGBUILD (228 lines, 6.8 KB, ~2.1k tokens)
├── mingw-w64-harper/
│   └── PKGBUILD (53 lines, 1.1 KB, ~343 tokens)
├── mingw-w64-hayagriva/
│   └── PKGBUILD (54 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-hclient/
│   └── PKGBUILD (88 lines, 3.0 KB, ~854 tokens)
├── mingw-w64-hdf4/
│   └── PKGBUILD (94 lines, 2.7 KB, ~790 tokens)
├── mingw-w64-hdf5/
│   └── PKGBUILD (139 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-hdr10plus-tool/
│   └── PKGBUILD (51 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-headers/
│   └── PKGBUILD (69 lines, 2.5 KB, ~788 tokens)
├── mingw-w64-heimdall/
│   └── PKGBUILD (70 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-helics/
│   └── PKGBUILD (76 lines, 2.2 KB, ~632 tokens)
├── mingw-w64-helix/
│   └── PKGBUILD (86 lines, 2.7 KB, ~797 tokens)
├── mingw-w64-hererocks/
│   └── PKGBUILD (44 lines, 1.6 KB, ~461 tokens)
├── mingw-w64-hexchat/
│   └── PKGBUILD (85 lines, 3.0 KB, ~846 tokens)
├── mingw-w64-hexyl/
│   └── PKGBUILD (46 lines, 1.2 KB, ~365 tokens)
├── mingw-w64-hicolor-icon-theme/
│   └── PKGBUILD (38 lines, 1.2 KB, ~360 tokens)
├── mingw-w64-hid-bootloader-cli/
│   └── PKGBUILD (43 lines, 1.1 KB, ~332 tokens)
├── mingw-w64-hidapi/
│   └── PKGBUILD (71 lines, 2.3 KB, ~695 tokens)
├── mingw-w64-hidapitester/
│   └── PKGBUILD (42 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-highfive/
│   └── PKGBUILD (79 lines, 2.2 KB, ~642 tokens)
├── mingw-w64-highlight/
│   └── PKGBUILD (53 lines, 2.1 KB, ~598 tokens)
├── mingw-w64-highs/
│   └── PKGBUILD (68 lines, 1.8 KB, ~549 tokens)
├── mingw-w64-highway/
│   └── PKGBUILD (81 lines, 2.4 KB, ~677 tokens)
├── mingw-w64-hiredis/
│   └── PKGBUILD (82 lines, 2.3 KB, ~669 tokens)
├── mingw-w64-hl/
│   └── PKGBUILD (74 lines, 1.8 KB, ~535 tokens)
├── mingw-w64-hlsl2glsl/
│   └── PKGBUILD (65 lines, 2.3 KB, ~647 tokens)
├── mingw-w64-htslib/
│   └── PKGBUILD (84 lines, 2.3 KB, ~673 tokens)
├── mingw-w64-http-parser/
│   └── PKGBUILD (58 lines, 1.8 KB, ~591 tokens)
├── mingw-w64-httpbin/
│   └── PKGBUILD (63 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-hugo/
│   └── PKGBUILD (72 lines, 2.2 KB, ~659 tokens)
├── mingw-w64-hunspell/
│   └── PKGBUILD (107 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-hunspell-en/
│   └── PKGBUILD (74 lines, 2.9 KB, ~806 tokens)
├── mingw-w64-hurl/
│   └── PKGBUILD (79 lines, 2.4 KB, ~716 tokens)
├── mingw-w64-hwloc/
│   └── PKGBUILD (66 lines, 1.8 KB, ~550 tokens)
├── mingw-w64-hypercorn/
│   └── PKGBUILD (48 lines, 1.8 KB, ~521 tokens)
├── mingw-w64-hyperfine/
│   └── PKGBUILD (55 lines, 1.9 KB, ~569 tokens)
├── mingw-w64-hyphen/
│   └── PKGBUILD (113 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-hypre/
│   └── PKGBUILD (134 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-i2pd/
│   └── PKGBUILD (81 lines, 2.5 KB, ~752 tokens)
├── mingw-w64-icesprog/
│   └── PKGBUILD (35 lines, 1.1 KB, ~334 tokens)
├── mingw-w64-icestorm/
│   └── PKGBUILD (53 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-icoutils/
│   └── PKGBUILD (35 lines, 1.1 KB, ~335 tokens)
├── mingw-w64-icu/
│   └── PKGBUILD (111 lines, 3.7 KB, ~998 tokens)
├── mingw-w64-id3lib/
│   └── PKGBUILD (113 lines, 4.0 KB, ~1.1k tokens)
├── mingw-w64-ideviceinstaller/
│   └── PKGBUILD (49 lines, 1.4 KB, ~408 tokens)
├── mingw-w64-idevicerestore/
│   └── PKGBUILD (55 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-ifcopenshell/
│   └── PKGBUILD (127 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-igraph/
│   └── PKGBUILD (101 lines, 3.4 KB, ~991 tokens)
├── mingw-w64-iir/
│   └── PKGBUILD (61 lines, 1.7 KB, ~522 tokens)
├── mingw-w64-imageinfo/
│   └── PKGBUILD (53 lines, 1.6 KB, ~466 tokens)
├── mingw-w64-imagemagick/
│   └── PKGBUILD (215 lines, 7.3 KB, ~2.1k tokens)
├── mingw-w64-imath/
│   └── PKGBUILD (78 lines, 2.8 KB, ~787 tokens)
├── mingw-w64-img2pdf/
│   └── PKGBUILD (45 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-iml/
│   └── PKGBUILD (60 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-immer/
│   └── PKGBUILD (58 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-include-what-you-use/
│   └── PKGBUILD (56 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-indent/
│   └── PKGBUILD (92 lines, 2.8 KB, ~780 tokens)
├── mingw-w64-inja/
│   └── PKGBUILD (58 lines, 1.7 KB, ~525 tokens)
├── mingw-w64-inkscape/
│   └── PKGBUILD (165 lines, 5.5 KB, ~1.5k tokens)
├── mingw-w64-innex/
│   └── PKGBUILD (39 lines, 1.1 KB, ~324 tokens)
├── mingw-w64-innoextract/
│   └── PKGBUILD (109 lines, 4.9 KB, ~1.3k tokens)
├── mingw-w64-intel-xed/
│   └── PKGBUILD (90 lines, 3.2 KB, ~906 tokens)
├── mingw-w64-irrlicht/
│   └── PKGBUILD (80 lines, 2.6 KB, ~792 tokens)
├── mingw-w64-is_utf8/
│   └── PKGBUILD (62 lines, 2.3 KB, ~674 tokens)
├── mingw-w64-isa-l/
│   └── PKGBUILD (68 lines, 2.0 KB, ~569 tokens)
├── mingw-w64-isl/
│   └── PKGBUILD (51 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-iso-codes/
│   └── PKGBUILD (42 lines, 1.2 KB, ~389 tokens)
├── mingw-w64-ispc/
│   └── PKGBUILD (83 lines, 2.3 KB, ~646 tokens)
├── mingw-w64-itk/
│   └── PKGBUILD (171 lines, 5.7 KB, ~1.6k tokens)
├── mingw-w64-itstool/
│   └── PKGBUILD (81 lines, 2.3 KB, ~640 tokens)
├── mingw-w64-iverilog/
│   └── PKGBUILD (62 lines, 1.6 KB, ~496 tokens)
├── mingw-w64-ixion/
│   └── PKGBUILD (73 lines, 2.4 KB, ~712 tokens)
├── mingw-w64-jack2/
│   └── PKGBUILD (99 lines, 3.2 KB, ~870 tokens)
├── mingw-w64-jansson/
│   └── PKGBUILD (93 lines, 2.7 KB, ~760 tokens)
├── mingw-w64-jaq/
│   └── PKGBUILD (54 lines, 1.3 KB, ~412 tokens)
├── mingw-w64-jasper/
│   └── PKGBUILD (132 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-jbig2dec/
│   └── PKGBUILD (58 lines, 2.2 KB, ~622 tokens)
├── mingw-w64-jbigkit/
│   └── PKGBUILD (56 lines, 2.0 KB, ~551 tokens)
├── mingw-w64-jemalloc/
│   └── PKGBUILD (72 lines, 2.0 KB, ~585 tokens)
├── mingw-w64-jj/
│   └── PKGBUILD (84 lines, 2.3 KB, ~718 tokens)
├── mingw-w64-jkqtplotter/
│   └── PKGBUILD (78 lines, 2.3 KB, ~666 tokens)
├── mingw-w64-jo/
│   └── PKGBUILD (37 lines, 1.1 KB, ~347 tokens)
├── mingw-w64-jolt-physics/
│   └── PKGBUILD (76 lines, 2.7 KB, ~792 tokens)
├── mingw-w64-jom/
│   └── PKGBUILD (48 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-jp2-pixbuf-loader/
│   └── PKGBUILD (51 lines, 1.7 KB, ~488 tokens)
├── mingw-w64-jpegoptim/
│   └── PKGBUILD (45 lines, 1.3 KB, ~396 tokens)
├── mingw-w64-jq/
│   └── PKGBUILD (55 lines, 1.4 KB, ~443 tokens)
├── mingw-w64-jq-lsp/
│   └── PKGBUILD (46 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-js140/
│   └── PKGBUILD (145 lines, 5.9 KB, ~1.6k tokens)
├── mingw-w64-js153/
│   └── PKGBUILD (134 lines, 5.1 KB, ~1.4k tokens)
├── mingw-w64-json-c/
│   └── PKGBUILD (64 lines, 1.9 KB, ~573 tokens)
├── mingw-w64-json-fortran/
│   └── PKGBUILD (70 lines, 2.3 KB, ~648 tokens)
├── mingw-w64-json-glib/
│   └── PKGBUILD (56 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-json-schema-validator/
│   └── PKGBUILD (57 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-jsoncpp/
│   └── PKGBUILD (61 lines, 1.9 KB, ~533 tokens)
├── mingw-w64-jsonnet/
│   └── PKGBUILD (103 lines, 3.3 KB, ~964 tokens)
├── mingw-w64-jsonrpc-glib/
│   └── PKGBUILD (73 lines, 2.2 KB, ~661 tokens)
├── mingw-w64-judy/
│   └── PKGBUILD (80 lines, 2.8 KB, ~792 tokens)
├── mingw-w64-julia/
│   └── PKGBUILD (236 lines, 8.1 KB, ~2.3k tokens)
├── mingw-w64-junitparser/
│   └── PKGBUILD (37 lines, 1.3 KB, ~401 tokens)
├── mingw-w64-just/
│   └── PKGBUILD (64 lines, 2.0 KB, ~623 tokens)
├── mingw-w64-jxrlib/
│   └── PKGBUILD (73 lines, 2.4 KB, ~677 tokens)
├── mingw-w64-karchive/
│   └── PKGBUILD (69 lines, 2.1 KB, ~618 tokens)
├── mingw-w64-kate/
│   └── PKGBUILD (97 lines, 3.3 KB, ~917 tokens)
├── mingw-w64-kate-wakatime/
│   └── PKGBUILD (62 lines, 1.9 KB, ~553 tokens)
├── mingw-w64-kbookmarks/
│   └── PKGBUILD (67 lines, 2.1 KB, ~600 tokens)
├── mingw-w64-kcachegrind/
│   └── PKGBUILD (91 lines, 2.8 KB, ~784 tokens)
├── mingw-w64-kcmutils/
│   └── PKGBUILD (76 lines, 2.4 KB, ~686 tokens)
├── mingw-w64-kcodecs/
│   └── PKGBUILD (64 lines, 2.0 KB, ~576 tokens)
├── mingw-w64-kcolorscheme/
│   └── PKGBUILD (66 lines, 2.0 KB, ~590 tokens)
├── mingw-w64-kcompletion/
│   └── PKGBUILD (66 lines, 2.0 KB, ~588 tokens)
├── mingw-w64-kconfig/
│   └── PKGBUILD (65 lines, 2.0 KB, ~582 tokens)
├── mingw-w64-kconfigwidgets/
│   └── PKGBUILD (69 lines, 2.2 KB, ~617 tokens)
├── mingw-w64-kcontacts/
│   └── PKGBUILD (75 lines, 2.4 KB, ~683 tokens)
├── mingw-w64-kcoreaddons/
│   └── PKGBUILD (67 lines, 2.1 KB, ~596 tokens)
├── mingw-w64-kcrash/
│   └── PKGBUILD (64 lines, 2.0 KB, ~574 tokens)
├── mingw-w64-kdbusaddons/
│   └── PKGBUILD (63 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-kddockwidgets/
│   └── PKGBUILD (69 lines, 2.0 KB, ~591 tokens)
├── mingw-w64-kdeclarative/
│   └── PKGBUILD (70 lines, 2.2 KB, ~633 tokens)
├── mingw-w64-kdeconnect/
│   └── PKGBUILD (125 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-kdegraphics-mobipocket/
│   └── PKGBUILD (61 lines, 2.0 KB, ~573 tokens)
├── mingw-w64-kdenlive/
│   └── PKGBUILD (116 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-kdiagram/
│   └── PKGBUILD (63 lines, 1.9 KB, ~552 tokens)
├── mingw-w64-kdiff3/
│   └── PKGBUILD (71 lines, 2.5 KB, ~708 tokens)
├── mingw-w64-kdnssd/
│   └── PKGBUILD (63 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-kdoctools/
│   └── PKGBUILD (89 lines, 3.1 KB, ~886 tokens)
├── mingw-w64-kdsingleapplication/
│   └── PKGBUILD (58 lines, 1.8 KB, ~514 tokens)
├── mingw-w64-kdstatemachineeditor/
│   └── PKGBUILD (65 lines, 2.1 KB, ~593 tokens)
├── mingw-w64-keepassxc/
│   └── PKGBUILD (75 lines, 2.6 KB, ~733 tokens)
├── mingw-w64-keepawake/
│   └── PKGBUILD (89 lines, 2.5 KB, ~757 tokens)
├── mingw-w64-keystone/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-kfilemetadata/
│   └── PKGBUILD (81 lines, 2.6 KB, ~733 tokens)
├── mingw-w64-kglobalaccel/
│   └── PKGBUILD (65 lines, 2.0 KB, ~575 tokens)
├── mingw-w64-kguiaddons/
│   └── PKGBUILD (63 lines, 1.9 KB, ~560 tokens)
├── mingw-w64-kholidays/
│   └── PKGBUILD (67 lines, 2.0 KB, ~590 tokens)
├── mingw-w64-ki18n/
│   └── PKGBUILD (68 lines, 2.1 KB, ~611 tokens)
├── mingw-w64-kicad/
│   └── PKGBUILD (202 lines, 7.1 KB, ~2.0k tokens)
├── mingw-w64-kicad-doc/
│   └── PKGBUILD (53 lines, 1.8 KB, ~563 tokens)
├── mingw-w64-kicad-library/
│   └── PKGBUILD (104 lines, 3.2 KB, ~922 tokens)
├── mingw-w64-kiconthemes/
│   └── PKGBUILD (76 lines, 2.4 KB, ~676 tokens)
├── mingw-w64-kidletime/
│   └── PKGBUILD (63 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-kimageformats/
│   └── PKGBUILD (82 lines, 2.7 KB, ~771 tokens)
├── mingw-w64-kimi-code/
│   └── PKGBUILD (36 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-kio/
│   └── PKGBUILD (82 lines, 2.6 KB, ~742 tokens)
├── mingw-w64-kirigami/
│   └── PKGBUILD (75 lines, 2.4 KB, ~684 tokens)
├── mingw-w64-kirigami-addons/
│   └── PKGBUILD (80 lines, 2.2 KB, ~635 tokens)
├── mingw-w64-kiss_fft/
│   └── PKGBUILD (74 lines, 2.4 KB, ~683 tokens)
├── mingw-w64-kitemmodels/
│   └── PKGBUILD (67 lines, 2.1 KB, ~596 tokens)
├── mingw-w64-kitemviews/
│   └── PKGBUILD (63 lines, 1.9 KB, ~560 tokens)
├── mingw-w64-kjobwidgets/
│   └── PKGBUILD (66 lines, 2.0 KB, ~590 tokens)
├── mingw-w64-knewstuff/
│   └── PKGBUILD (73 lines, 2.3 KB, ~662 tokens)
├── mingw-w64-knotifications/
│   └── PKGBUILD (76 lines, 2.4 KB, ~673 tokens)
├── mingw-w64-knotifyconfig/
│   └── PKGBUILD (68 lines, 2.1 KB, ~609 tokens)
├── mingw-w64-koboldcpp/
│   └── PKGBUILD (82 lines, 2.7 KB, ~765 tokens)
├── mingw-w64-konsole/
│   └── PKGBUILD (101 lines, 3.3 KB, ~918 tokens)
├── mingw-w64-konversation/
│   └── PKGBUILD (100 lines, 3.4 KB, ~931 tokens)
├── mingw-w64-kpackage/
│   └── PKGBUILD (66 lines, 2.1 KB, ~597 tokens)
├── mingw-w64-kparts/
│   └── PKGBUILD (70 lines, 2.2 KB, ~627 tokens)
├── mingw-w64-kpeople/
│   └── PKGBUILD (76 lines, 2.5 KB, ~701 tokens)
├── mingw-w64-kplotting/
│   └── PKGBUILD (63 lines, 1.9 KB, ~557 tokens)
├── mingw-w64-kqtquickcharts/
│   └── PKGBUILD (62 lines, 2.2 KB, ~618 tokens)
├── mingw-w64-krita/
│   └── PKGBUILD (164 lines, 5.4 KB, ~1.5k tokens)
├── mingw-w64-krpc-cpp/
│   └── PKGBUILD (72 lines, 2.6 KB, ~750 tokens)
├── mingw-w64-kseexpr/
│   └── PKGBUILD (45 lines, 1.3 KB, ~402 tokens)
├── mingw-w64-kservice/
│   └── PKGBUILD (66 lines, 2.0 KB, ~587 tokens)
├── mingw-w64-kstatusnotifieritem/
│   └── PKGBUILD (69 lines, 2.1 KB, ~600 tokens)
├── mingw-w64-ktexteditor/
│   └── PKGBUILD (85 lines, 2.8 KB, ~779 tokens)
├── mingw-w64-ktextwidgets/
│   └── PKGBUILD (72 lines, 2.3 KB, ~648 tokens)
├── mingw-w64-ktouch/
│   └── PKGBUILD (81 lines, 2.8 KB, ~769 tokens)
├── mingw-w64-ktx-software/
│   └── PKGBUILD (75 lines, 2.2 KB, ~642 tokens)
├── mingw-w64-kunitconversion/
│   └── PKGBUILD (65 lines, 2.0 KB, ~580 tokens)
├── mingw-w64-kuserfeedback/
│   └── PKGBUILD (80 lines, 2.7 KB, ~764 tokens)
├── mingw-w64-kvazaar/
│   └── PKGBUILD (53 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-kwallet/
│   └── PKGBUILD (78 lines, 2.5 KB, ~708 tokens)
├── mingw-w64-kwidgetsaddons/
│   └── PKGBUILD (63 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-kwindowsystem/
│   └── PKGBUILD (67 lines, 2.0 KB, ~591 tokens)
├── mingw-w64-kxmlgui/
│   └── PKGBUILD (74 lines, 2.4 KB, ~669 tokens)
├── mingw-w64-l-smash/
│   └── PKGBUILD (48 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-labplot/
│   └── PKGBUILD (146 lines, 5.2 KB, ~1.4k tokens)
├── mingw-w64-ladspa-sdk/
│   └── PKGBUILD (28 lines, 877 B, ~263 tokens)
├── mingw-w64-lager/
│   └── PKGBUILD (56 lines, 1.8 KB, ~517 tokens)
├── mingw-w64-lal-refactor/
│   └── PKGBUILD (71 lines, 2.3 KB, ~660 tokens)
├── mingw-w64-lame/
│   └── PKGBUILD (70 lines, 2.4 KB, ~698 tokens)
├── mingw-w64-lammps/
│   └── PKGBUILD (118 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-langkit/
│   └── PKGBUILD (53 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-langkit_support/
│   └── PKGBUILD (68 lines, 2.1 KB, ~633 tokens)
├── mingw-w64-lapack/
│   └── PKGBUILD (216 lines, 7.6 KB, ~2.3k tokens)
├── mingw-w64-lapce/
│   └── PKGBUILD (68 lines, 1.8 KB, ~521 tokens)
├── mingw-w64-lasem/
│   └── PKGBUILD (66 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-laszip/
│   └── PKGBUILD (76 lines, 2.1 KB, ~623 tokens)
├── mingw-w64-lazygit/
│   └── PKGBUILD (65 lines, 1.9 KB, ~601 tokens)
├── mingw-w64-lcms2/
│   └── PKGBUILD (59 lines, 1.8 KB, ~553 tokens)
├── mingw-w64-lcov/
│   └── PKGBUILD (38 lines, 1.6 KB, ~450 tokens)
├── mingw-w64-ldns/
│   └── PKGBUILD (86 lines, 3.1 KB, ~905 tokens)
├── mingw-w64-ledger/
│   └── PKGBUILD (74 lines, 2.3 KB, ~672 tokens)
├── mingw-w64-lensfun/
│   └── PKGBUILD (77 lines, 3.0 KB, ~854 tokens)
├── mingw-w64-leocad/
│   └── PKGBUILD (80 lines, 2.2 KB, ~623 tokens)
├── mingw-w64-leptonica/
│   └── PKGBUILD (97 lines, 2.7 KB, ~758 tokens)
├── mingw-w64-leptosfmt/
│   └── PKGBUILD (58 lines, 1.8 KB, ~546 tokens)
├── mingw-w64-lerc/
│   └── PKGBUILD (63 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-letos/
│   └── PKGBUILD (114 lines, 3.4 KB, ~960 tokens)
├── mingw-w64-level-zero/
│   └── PKGBUILD (91 lines, 3.0 KB, ~893 tokens)
├── mingw-w64-leveldb/
│   └── PKGBUILD (92 lines, 2.8 KB, ~813 tokens)
├── mingw-w64-lexbor/
│   └── PKGBUILD (57 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-lf/
│   └── PKGBUILD (107 lines, 2.9 KB, ~838 tokens)
├── mingw-w64-lfcbase/
│   └── PKGBUILD (78 lines, 2.3 KB, ~714 tokens)
├── mingw-w64-lfcxml/
│   └── PKGBUILD (63 lines, 1.4 KB, ~457 tokens)
├── mingw-w64-lfortran/
│   └── PKGBUILD (114 lines, 3.1 KB, ~896 tokens)
├── mingw-w64-lib2geom/
│   └── PKGBUILD (75 lines, 2.8 KB, ~833 tokens)
├── mingw-w64-lib3mf/
│   └── PKGBUILD (58 lines, 1.8 KB, ~521 tokens)
├── mingw-w64-libaacs/
│   └── PKGBUILD (47 lines, 1.6 KB, ~494 tokens)
├── mingw-w64-libabw/
│   └── PKGBUILD (54 lines, 1.4 KB, ~436 tokens)
├── mingw-w64-libad9361-iio/
│   └── PKGBUILD (55 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-libadalang/
│   └── PKGBUILD (85 lines, 2.7 KB, ~807 tokens)
├── mingw-w64-libadalang-tools/
│   └── PKGBUILD (63 lines, 2.0 KB, ~617 tokens)
├── mingw-w64-libadlmidi/
│   └── PKGBUILD (59 lines, 1.7 KB, ~464 tokens)
├── mingw-w64-libadwaita/
│   └── PKGBUILD (96 lines, 2.7 KB, ~764 tokens)
├── mingw-w64-libaec/
│   └── PKGBUILD (47 lines, 1.5 KB, ~427 tokens)
├── mingw-w64-libao/
│   └── PKGBUILD (49 lines, 1.3 KB, ~400 tokens)
├── mingw-w64-libarchive/
│   └── PKGBUILD (103 lines, 3.0 KB, ~852 tokens)
├── mingw-w64-libaribcaption/
│   └── PKGBUILD (68 lines, 2.1 KB, ~602 tokens)
├── mingw-w64-libart_lgpl/
│   └── PKGBUILD (71 lines, 2.1 KB, ~633 tokens)
├── mingw-w64-libass/
│   └── PKGBUILD (64 lines, 2.0 KB, ~570 tokens)
├── mingw-w64-libassuan/
│   └── PKGBUILD (85 lines, 2.8 KB, ~775 tokens)
├── mingw-w64-libatomic_ops/
│   └── PKGBUILD (71 lines, 2.3 KB, ~669 tokens)
├── mingw-w64-libavif/
│   └── PKGBUILD (107 lines, 3.5 KB, ~973 tokens)
├── mingw-w64-libavro/
│   └── PKGBUILD (109 lines, 3.4 KB, ~976 tokens)
├── mingw-w64-libb2/
│   └── PKGBUILD (80 lines, 2.7 KB, ~737 tokens)
├── mingw-w64-libb64/
│   └── PKGBUILD (46 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-libbacktrace/
│   └── PKGBUILD (68 lines, 1.9 KB, ~542 tokens)
├── mingw-w64-libbdplus/
│   └── PKGBUILD (44 lines, 1.4 KB, ~442 tokens)
├── mingw-w64-libbluray/
│   └── PKGBUILD (71 lines, 2.1 KB, ~623 tokens)
├── mingw-w64-libbotan/
│   └── PKGBUILD (96 lines, 3.0 KB, ~891 tokens)
├── mingw-w64-libbraiding/
│   └── PKGBUILD (61 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-libbs2b/
│   └── PKGBUILD (43 lines, 1.1 KB, ~353 tokens)
├── mingw-w64-libbsdf/
│   └── PKGBUILD (61 lines, 2.2 KB, ~633 tokens)
├── mingw-w64-libc++/
│   └── PKGBUILD (153 lines, 5.3 KB, ~1.5k tokens)
├── mingw-w64-libcaca/
│   └── PKGBUILD (75 lines, 2.6 KB, ~726 tokens)
├── mingw-w64-libcacard/
│   └── PKGBUILD (61 lines, 1.9 KB, ~542 tokens)
├── mingw-w64-libcbor/
│   └── PKGBUILD (49 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-libcddb/
│   └── PKGBUILD (67 lines, 2.7 KB, ~727 tokens)
├── mingw-w64-libcdio/
│   └── PKGBUILD (56 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-libcdio-paranoia/
│   └── PKGBUILD (55 lines, 1.6 KB, ~500 tokens)
├── mingw-w64-libcdr/
│   └── PKGBUILD (52 lines, 1.6 KB, ~458 tokens)
├── mingw-w64-libcello/
│   └── PKGBUILD (46 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-libcerf/
│   └── PKGBUILD (70 lines, 2.3 KB, ~685 tokens)
├── mingw-w64-libclc/
│   └── PKGBUILD (97 lines, 3.2 KB, ~893 tokens)
├── mingw-w64-libcloudproviders/
│   └── PKGBUILD (83 lines, 2.4 KB, ~705 tokens)
├── mingw-w64-libcmis/
│   └── PKGBUILD (65 lines, 1.9 KB, ~588 tokens)
├── mingw-w64-libconfig/
│   └── PKGBUILD (57 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-libconfini/
│   └── PKGBUILD (47 lines, 1.3 KB, ~431 tokens)
├── mingw-w64-libcue/
│   └── PKGBUILD (62 lines, 2.0 KB, ~596 tokens)
├── mingw-w64-libdatrie/
│   └── PKGBUILD (68 lines, 2.2 KB, ~684 tokens)
├── mingw-w64-libdazzle/
│   └── PKGBUILD (62 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-libdca/
│   └── PKGBUILD (57 lines, 1.9 KB, ~587 tokens)
├── mingw-w64-libde265/
│   └── PKGBUILD (66 lines, 2.1 KB, ~598 tokens)
├── mingw-w64-libdeflate/
│   └── PKGBUILD (69 lines, 2.1 KB, ~617 tokens)
├── mingw-w64-libdex/
│   └── PKGBUILD (49 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-libdicom/
│   └── PKGBUILD (50 lines, 1.6 KB, ~457 tokens)
├── mingw-w64-libdiscid/
│   └── PKGBUILD (49 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-libdispatch/
│   └── PKGBUILD (89 lines, 3.3 KB, ~960 tokens)
├── mingw-w64-libdmtx/
│   └── PKGBUILD (43 lines, 1.2 KB, ~351 tokens)
├── mingw-w64-libdovi/
│   └── PKGBUILD (65 lines, 1.7 KB, ~486 tokens)
├── mingw-w64-libdsm/
│   └── PKGBUILD (51 lines, 1.8 KB, ~518 tokens)
├── mingw-w64-libdvbpsi/
│   └── PKGBUILD (35 lines, 1.1 KB, ~349 tokens)
├── mingw-w64-libdvdcss/
│   └── PKGBUILD (40 lines, 1.3 KB, ~394 tokens)
├── mingw-w64-libdvdnav/
│   └── PKGBUILD (50 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-libdvdread/
│   └── PKGBUILD (41 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-libdwarf/
│   └── PKGBUILD (60 lines, 2.3 KB, ~661 tokens)
├── mingw-w64-libe-book/
│   └── PKGBUILD (61 lines, 1.8 KB, ~523 tokens)
├── mingw-w64-libebml/
│   └── PKGBUILD (75 lines, 2.4 KB, ~711 tokens)
├── mingw-w64-libebur128/
│   └── PKGBUILD (58 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-libelf/
│   └── PKGBUILD (32 lines, 949 B, ~288 tokens)
├── mingw-w64-libepoxy/
│   └── PKGBUILD (60 lines, 2.2 KB, ~627 tokens)
├── mingw-w64-libepubgen/
│   └── PKGBUILD (58 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-liberime/
│   └── PKGBUILD (51 lines, 1.7 KB, ~525 tokens)
├── mingw-w64-libetonyek/
│   └── PKGBUILD (64 lines, 1.9 KB, ~554 tokens)
├── mingw-w64-libevent/
│   └── PKGBUILD (109 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-libexif/
│   └── PKGBUILD (55 lines, 1.7 KB, ~516 tokens)
├── mingw-w64-libexodus/
│   └── PKGBUILD (68 lines, 2.4 KB, ~698 tokens)
├── mingw-w64-libexttextcat/
│   └── PKGBUILD (52 lines, 1.3 KB, ~390 tokens)
├── mingw-w64-libfdf/
│   └── PKGBUILD (58 lines, 1.8 KB, ~539 tokens)
├── mingw-w64-libffi/
│   └── PKGBUILD (42 lines, 1.3 KB, ~390 tokens)
├── mingw-w64-libfido2/
│   └── PKGBUILD (85 lines, 3.0 KB, ~811 tokens)
├── mingw-w64-libfilezilla/
│   └── PKGBUILD (76 lines, 2.1 KB, ~630 tokens)
├── mingw-w64-libfixmath/
│   └── PKGBUILD (72 lines, 2.2 KB, ~663 tokens)
├── mingw-w64-libfreehand/
│   └── PKGBUILD (57 lines, 1.6 KB, ~463 tokens)
├── mingw-w64-libfreexl/
│   └── PKGBUILD (51 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-libftdi/
│   └── PKGBUILD (91 lines, 2.6 KB, ~762 tokens)
├── mingw-w64-libfyaml/
│   └── PKGBUILD (50 lines, 1.7 KB, ~478 tokens)
├── mingw-w64-libgadu/
│   └── PKGBUILD (56 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-libgcrypt/
│   └── PKGBUILD (80 lines, 2.5 KB, ~714 tokens)
├── mingw-w64-libgd/
│   └── PKGBUILD (99 lines, 3.9 KB, ~1.0k tokens)
├── mingw-w64-libgda/
│   └── PKGBUILD (137 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-libgdiplus/
│   └── PKGBUILD (73 lines, 2.7 KB, ~764 tokens)
├── mingw-w64-libgedit-amtk/
│   └── PKGBUILD (111 lines, 3.1 KB, ~925 tokens)
├── mingw-w64-libgedit-gfls/
│   └── PKGBUILD (108 lines, 3.0 KB, ~900 tokens)
├── mingw-w64-libgedit-gtksourceview/
│   └── PKGBUILD (93 lines, 2.8 KB, ~800 tokens)
├── mingw-w64-libgedit-tepl/
│   └── PKGBUILD (120 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-libgee/
│   └── PKGBUILD (62 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-libgeotiff/
│   └── PKGBUILD (108 lines, 3.2 KB, ~970 tokens)
├── mingw-w64-libgig/
│   └── PKGBUILD (55 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-libgit2/
│   └── PKGBUILD (157 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-libgit2-glib/
│   └── PKGBUILD (97 lines, 3.3 KB, ~980 tokens)
├── mingw-w64-libgme/
│   └── PKGBUILD (51 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-libgoom2/
│   └── PKGBUILD (66 lines, 2.1 KB, ~597 tokens)
├── mingw-w64-libgovirt/
│   └── PKGBUILD (64 lines, 2.0 KB, ~583 tokens)
├── mingw-w64-libgpg-error/
│   └── PKGBUILD (87 lines, 3.0 KB, ~813 tokens)
├── mingw-w64-libgphoto2/
│   └── PKGBUILD (91 lines, 3.1 KB, ~878 tokens)
├── mingw-w64-libgpr/
│   └── PKGBUILD (54 lines, 1.5 KB, ~474 tokens)
├── mingw-w64-libgridxc/
│   └── PKGBUILD (77 lines, 2.5 KB, ~732 tokens)
├── mingw-w64-libgsf/
│   └── PKGBUILD (68 lines, 2.0 KB, ~596 tokens)
├── mingw-w64-libguess/
│   └── PKGBUILD (55 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-libgusb/
│   └── PKGBUILD (54 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-libgweather/
│   └── PKGBUILD (66 lines, 2.3 KB, ~638 tokens)
├── mingw-w64-libgxps/
│   └── PKGBUILD (64 lines, 2.2 KB, ~621 tokens)
├── mingw-w64-libhandy/
│   └── PKGBUILD (87 lines, 2.4 KB, ~727 tokens)
├── mingw-w64-libharu/
│   └── PKGBUILD (64 lines, 1.8 KB, ~510 tokens)
├── mingw-w64-libhdr10plus-rs/
│   └── PKGBUILD (62 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-libheif/
│   └── PKGBUILD (98 lines, 3.1 KB, ~882 tokens)
├── mingw-w64-libhomfly/
│   └── PKGBUILD (51 lines, 1.3 KB, ~408 tokens)
├── mingw-w64-libical/
│   └── PKGBUILD (77 lines, 2.6 KB, ~769 tokens)
├── mingw-w64-libiconv/
│   └── PKGBUILD (128 lines, 4.7 KB, ~1.4k tokens)
├── mingw-w64-libicsneo/
│   └── PKGBUILD (69 lines, 2.3 KB, ~634 tokens)
├── mingw-w64-libid3tag/
│   └── PKGBUILD (80 lines, 2.2 KB, ~671 tokens)
├── mingw-w64-libidl2/
│   └── PKGBUILD (44 lines, 1.3 KB, ~404 tokens)
├── mingw-w64-libidn/
│   └── PKGBUILD (56 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-libidn2/
│   └── PKGBUILD (76 lines, 2.1 KB, ~644 tokens)
├── mingw-w64-libieee1284/
│   └── PKGBUILD (53 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-libiff/
│   └── PKGBUILD (58 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-libiio/
│   └── PKGBUILD (73 lines, 2.4 KB, ~699 tokens)
├── mingw-w64-libilbc/
│   └── PKGBUILD (49 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-libilbm/
│   └── PKGBUILD (55 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-libimagequant/
│   └── PKGBUILD (58 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-libimobiledevice/
│   └── PKGBUILD (97 lines, 3.5 KB, ~929 tokens)
├── mingw-w64-libimobiledevice-glue/
│   └── PKGBUILD (45 lines, 1.3 KB, ~381 tokens)
├── mingw-w64-libinih/
│   └── PKGBUILD (69 lines, 2.3 KB, ~669 tokens)
├── mingw-w64-libint2/
│   └── PKGBUILD (118 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-libipt/
│   └── PKGBUILD (67 lines, 2.0 KB, ~606 tokens)
├── mingw-w64-libiptcdata/
│   └── PKGBUILD (52 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-libirecovery/
│   └── PKGBUILD (55 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-libjaylink/
│   └── PKGBUILD (68 lines, 2.0 KB, ~586 tokens)
├── mingw-w64-libjpeg-turbo/
│   └── PKGBUILD (83 lines, 3.1 KB, ~908 tokens)
├── mingw-w64-libjxl/
│   └── PKGBUILD (115 lines, 3.8 KB, ~1.0k tokens)
├── mingw-w64-libkexiv2/
│   └── PKGBUILD (61 lines, 2.0 KB, ~564 tokens)
├── mingw-w64-libkml/
│   └── PKGBUILD (64 lines, 2.3 KB, ~648 tokens)
├── mingw-w64-libkqueue/
│   └── PKGBUILD (78 lines, 2.2 KB, ~621 tokens)
├── mingw-w64-libksba/
│   └── PKGBUILD (58 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-liblangtag/
│   └── PKGBUILD (78 lines, 2.4 KB, ~668 tokens)
├── mingw-w64-liblas/
│   └── PKGBUILD (89 lines, 2.7 KB, ~783 tokens)
├── mingw-w64-liblastfm/
│   └── PKGBUILD (54 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-liblc3/
│   └── PKGBUILD (58 lines, 1.8 KB, ~525 tokens)
├── mingw-w64-liblcf/
│   └── PKGBUILD (66 lines, 2.2 KB, ~647 tokens)
├── mingw-w64-liblktlang/
│   └── PKGBUILD (86 lines, 2.9 KB, ~858 tokens)
├── mingw-w64-liblo/
│   └── PKGBUILD (46 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-liblqr/
│   └── PKGBUILD (37 lines, 1.1 KB, ~335 tokens)
├── mingw-w64-libluv/
│   └── PKGBUILD (54 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-libmad/
│   └── PKGBUILD (73 lines, 2.4 KB, ~661 tokens)
├── mingw-w64-libmangle/
│   └── PKGBUILD (48 lines, 1.5 KB, ~469 tokens)
├── mingw-w64-libmariadbclient/
│   └── PKGBUILD (117 lines, 4.0 KB, ~1.1k tokens)
├── mingw-w64-libmatroska/
│   └── PKGBUILD (74 lines, 2.3 KB, ~693 tokens)
├── mingw-w64-libmaxminddb/
│   └── PKGBUILD (70 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-libmbd/
│   └── PKGBUILD (70 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-libmd/
│   └── PKGBUILD (57 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-libmediainfo/
│   └── PKGBUILD (98 lines, 2.9 KB, ~828 tokens)
├── mingw-w64-libmem/
│   └── PKGBUILD (90 lines, 3.0 KB, ~882 tokens)
├── mingw-w64-libmfx/
│   └── PKGBUILD (50 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-libmicrodns/
│   └── PKGBUILD (47 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-libmicrohttpd/
│   └── PKGBUILD (101 lines, 2.7 KB, ~811 tokens)
├── mingw-w64-libmikmod/
│   └── PKGBUILD (53 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-libmimic/
│   └── PKGBUILD (53 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-libminpack/
│   └── PKGBUILD (107 lines, 4.1 KB, ~1.0k tokens)
├── mingw-w64-libmng/
│   └── PKGBUILD (91 lines, 3.3 KB, ~911 tokens)
├── mingw-w64-libmodbus/
│   └── PKGBUILD (56 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-libmodplug/
│   └── PKGBUILD (52 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-libmongocrypt/
│   └── PKGBUILD (120 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-libmongoose/
│   └── PKGBUILD (69 lines, 2.1 KB, ~643 tokens)
├── mingw-w64-libmowgli/
│   └── PKGBUILD (49 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-libmpack/
│   └── PKGBUILD (38 lines, 1.1 KB, ~325 tokens)
├── mingw-w64-libmpcdec/
│   └── PKGBUILD (69 lines, 2.4 KB, ~612 tokens)
├── mingw-w64-libmpeg2/
│   └── PKGBUILD (75 lines, 2.5 KB, ~686 tokens)
├── mingw-w64-libmspack/
│   └── PKGBUILD (51 lines, 1.4 KB, ~434 tokens)
├── mingw-w64-libmspub/
│   └── PKGBUILD (57 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-libmsym/
│   └── PKGBUILD (60 lines, 2.1 KB, ~599 tokens)
├── mingw-w64-libmwaw/
│   └── PKGBUILD (55 lines, 1.6 KB, ~492 tokens)
├── mingw-w64-libmypaint/
│   └── PKGBUILD (72 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-libmysofa/
│   └── PKGBUILD (89 lines, 2.5 KB, ~717 tokens)
├── mingw-w64-libnatpmp/
│   └── PKGBUILD (68 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-libnegf/
│   └── PKGBUILD (75 lines, 2.5 KB, ~711 tokens)
├── mingw-w64-libnfs/
│   └── PKGBUILD (63 lines, 2.2 KB, ~672 tokens)
├── mingw-w64-libnice/
│   └── PKGBUILD (66 lines, 2.2 KB, ~643 tokens)
├── mingw-w64-libnotify/
│   └── PKGBUILD (79 lines, 2.2 KB, ~631 tokens)
├── mingw-w64-libnova/
│   └── PKGBUILD (48 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-libnpupnp/
│   └── PKGBUILD (64 lines, 1.8 KB, ~555 tokens)
├── mingw-w64-libntlm/
│   └── PKGBUILD (42 lines, 1.3 KB, ~402 tokens)
├── mingw-w64-libnumbertext/
│   └── PKGBUILD (52 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-liboauth/
│   └── PKGBUILD (54 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-libobjc2/
│   └── PKGBUILD (87 lines, 2.8 KB, ~816 tokens)
├── mingw-w64-libodfgen/
│   └── PKGBUILD (57 lines, 1.6 KB, ~516 tokens)
├── mingw-w64-libogg/
│   └── PKGBUILD (77 lines, 2.3 KB, ~676 tokens)
├── mingw-w64-libomemo-c/
│   └── PKGBUILD (42 lines, 1.2 KB, ~363 tokens)
├── mingw-w64-libopenmpt/
│   └── PKGBUILD (61 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-libopenmpt-modplug/
│   └── PKGBUILD (54 lines, 1.5 KB, ~466 tokens)
├── mingw-w64-libopusenc/
│   └── PKGBUILD (37 lines, 1.1 KB, ~330 tokens)
├── mingw-w64-liboqs/
│   └── PKGBUILD (79 lines, 2.1 KB, ~619 tokens)
├── mingw-w64-liborigin/
│   └── PKGBUILD (55 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-libosmpbf/
│   └── PKGBUILD (57 lines, 2.0 KB, ~577 tokens)
├── mingw-w64-libosmscout/
│   └── PKGBUILD (92 lines, 2.9 KB, ~794 tokens)
├── mingw-w64-libotr/
│   └── PKGBUILD (53 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-libp11/
│   └── PKGBUILD (74 lines, 2.9 KB, ~800 tokens)
├── mingw-w64-libpagemaker/
│   └── PKGBUILD (52 lines, 1.3 KB, ~412 tokens)
├── mingw-w64-libpanel/
│   └── PKGBUILD (82 lines, 2.3 KB, ~688 tokens)
├── mingw-w64-libpaper/
│   └── PKGBUILD (54 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-libpcap/
│   └── PKGBUILD (81 lines, 2.7 KB, ~777 tokens)
├── mingw-w64-libpeas/
│   └── PKGBUILD (120 lines, 3.2 KB, ~938 tokens)
├── mingw-w64-libpeas2/
│   └── PKGBUILD (98 lines, 2.6 KB, ~795 tokens)
├── mingw-w64-libplacebo/
│   └── PKGBUILD (87 lines, 2.9 KB, ~790 tokens)
├── mingw-w64-libplacebo-demos/
│   └── PKGBUILD (59 lines, 1.9 KB, ~550 tokens)
├── mingw-w64-libplist/
│   └── PKGBUILD (71 lines, 2.0 KB, ~590 tokens)
├── mingw-w64-libpng/
│   └── PKGBUILD (97 lines, 3.4 KB, ~972 tokens)
├── mingw-w64-libpqxx/
│   └── PKGBUILD (58 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-libpreferencepanes/
│   └── PKGBUILD (41 lines, 1.6 KB, ~459 tokens)
├── mingw-w64-libprojectm/
│   └── PKGBUILD (68 lines, 1.9 KB, ~557 tokens)
├── mingw-w64-libproxy/
│   └── PKGBUILD (77 lines, 2.5 KB, ~706 tokens)
├── mingw-w64-libpsl/
│   └── PKGBUILD (75 lines, 2.4 KB, ~706 tokens)
├── mingw-w64-libpsml/
│   └── PKGBUILD (59 lines, 1.9 KB, ~565 tokens)
├── mingw-w64-libpst/
│   └── PKGBUILD (77 lines, 2.0 KB, ~598 tokens)
├── mingw-w64-libqalculate/
│   └── PKGBUILD (57 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-libqxp/
│   └── PKGBUILD (54 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-libraqm/
│   └── PKGBUILD (54 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-librasterlite2/
│   └── PKGBUILD (77 lines, 2.5 KB, ~733 tokens)
├── mingw-w64-libraw/
│   └── PKGBUILD (93 lines, 3.2 KB, ~913 tokens)
├── mingw-w64-librdata/
│   └── PKGBUILD (52 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-librdkafka/
│   └── PKGBUILD (73 lines, 2.3 KB, ~661 tokens)
├── mingw-w64-libreplaygain/
│   └── PKGBUILD (39 lines, 1.1 KB, ~330 tokens)
├── mingw-w64-libresidfp/
│   └── PKGBUILD (53 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-libresprite/
│   └── PKGBUILD (75 lines, 2.5 KB, ~686 tokens)
├── mingw-w64-libressl/
│   └── PKGBUILD (101 lines, 3.0 KB, ~853 tokens)
├── mingw-w64-librest/
│   └── PKGBUILD (57 lines, 1.8 KB, ~524 tokens)
├── mingw-w64-librevenge/
│   └── PKGBUILD (69 lines, 1.8 KB, ~574 tokens)
├── mingw-w64-librime/
│   └── PKGBUILD (119 lines, 4.0 KB, ~1.1k tokens)
├── mingw-w64-librist/
│   └── PKGBUILD (71 lines, 2.2 KB, ~660 tokens)
├── mingw-w64-librsvg/
│   └── PKGBUILD (128 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-librsync/
│   └── PKGBUILD (70 lines, 2.1 KB, ~621 tokens)
├── mingw-w64-librttopo/
│   └── PKGBUILD (48 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-libsamplerate/
│   └── PKGBUILD (70 lines, 2.4 KB, ~694 tokens)
├── mingw-w64-libsass/
│   └── PKGBUILD (50 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-libsbml/
│   └── PKGBUILD (83 lines, 2.8 KB, ~795 tokens)
├── mingw-w64-libsbsms/
│   └── PKGBUILD (55 lines, 1.7 KB, ~486 tokens)
├── mingw-w64-libsecret/
│   └── PKGBUILD (82 lines, 2.3 KB, ~662 tokens)
├── mingw-w64-libserdes/
│   └── PKGBUILD (48 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-libserialport/
│   └── PKGBUILD (49 lines, 1.2 KB, ~375 tokens)
├── mingw-w64-libshout/
│   └── PKGBUILD (80 lines, 2.9 KB, ~815 tokens)
├── mingw-w64-libshumate/
│   └── PKGBUILD (122 lines, 3.4 KB, ~994 tokens)
├── mingw-w64-libsidplayfp/
│   └── PKGBUILD (62 lines, 1.7 KB, ~533 tokens)
├── mingw-w64-libsigc++/
│   └── PKGBUILD (48 lines, 1.5 KB, ~430 tokens)
├── mingw-w64-libsigc++-3.0/
│   └── PKGBUILD (50 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-libsignal-protocol-c/
│   └── PKGBUILD (59 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-libsigsegv/
│   └── PKGBUILD (43 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-libsixel/
│   └── PKGBUILD (57 lines, 1.6 KB, ~494 tokens)
├── mingw-w64-libslirp/
│   └── PKGBUILD (77 lines, 2.1 KB, ~638 tokens)
├── mingw-w64-libsmi/
│   └── PKGBUILD (51 lines, 1.5 KB, ~470 tokens)
├── mingw-w64-libsndfile/
│   └── PKGBUILD (82 lines, 2.7 KB, ~777 tokens)
├── mingw-w64-libsodium/
│   └── PKGBUILD (44 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-libsoundio/
│   └── PKGBUILD (55 lines, 1.6 KB, ~450 tokens)
├── mingw-w64-libsoup3/
│   └── PKGBUILD (91 lines, 2.8 KB, ~840 tokens)
├── mingw-w64-libsoxr/
│   └── PKGBUILD (92 lines, 3.1 KB, ~856 tokens)
├── mingw-w64-libspatialaudio/
│   └── PKGBUILD (49 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-libspatialite/
│   └── PKGBUILD (66 lines, 2.5 KB, ~701 tokens)
├── mingw-w64-libspectre/
│   └── PKGBUILD (51 lines, 1.8 KB, ~529 tokens)
├── mingw-w64-libspelling/
│   └── PKGBUILD (60 lines, 1.8 KB, ~525 tokens)
├── mingw-w64-libspiro/
│   └── PKGBUILD (47 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-libspng/
│   └── PKGBUILD (45 lines, 1.4 KB, ~415 tokens)
├── mingw-w64-libsquish/
│   └── PKGBUILD (80 lines, 2.9 KB, ~862 tokens)
├── mingw-w64-libsrtp/
│   └── PKGBUILD (57 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-libssh/
│   └── PKGBUILD (87 lines, 2.7 KB, ~780 tokens)
├── mingw-w64-libssh2/
│   └── PKGBUILD (95 lines, 2.6 KB, ~749 tokens)
├── mingw-w64-libstaroffice/
│   └── PKGBUILD (54 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-libsystre/
│   └── PKGBUILD (51 lines, 1.7 KB, ~432 tokens)
├── mingw-w64-libtasn1/
│   └── PKGBUILD (68 lines, 1.9 KB, ~594 tokens)
├── mingw-w64-libtermkey/
│   └── PKGBUILD (45 lines, 1.6 KB, ~455 tokens)
├── mingw-w64-libthai/
│   └── PKGBUILD (76 lines, 2.2 KB, ~661 tokens)
├── mingw-w64-libtheora/
│   └── PKGBUILD (52 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-libtiff/
│   └── PKGBUILD (127 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-libtimidity/
│   └── PKGBUILD (44 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-libtomcrypt/
│   └── PKGBUILD (63 lines, 2.1 KB, ~587 tokens)
├── mingw-w64-libtommath/
│   └── PKGBUILD (45 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-libtool/
│   └── PKGBUILD (124 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-libtorrent-rasterbar/
│   └── PKGBUILD (89 lines, 2.9 KB, ~825 tokens)
├── mingw-w64-libtre/
│   └── PKGBUILD (72 lines, 1.8 KB, ~535 tokens)
├── mingw-w64-libu2f-emu/
│   └── PKGBUILD (66 lines, 2.0 KB, ~583 tokens)
├── mingw-w64-libuhd/
│   └── PKGBUILD (106 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-libultrahdr/
│   └── PKGBUILD (62 lines, 2.1 KB, ~579 tokens)
├── mingw-w64-libunibreak/
│   └── PKGBUILD (54 lines, 1.5 KB, ~485 tokens)
├── mingw-w64-libunifex/
│   └── PKGBUILD (69 lines, 2.1 KB, ~602 tokens)
├── mingw-w64-libuninameslist/
│   └── PKGBUILD (51 lines, 1.5 KB, ~468 tokens)
├── mingw-w64-libunistring/
│   └── PKGBUILD (63 lines, 2.1 KB, ~629 tokens)
├── mingw-w64-libusb/
│   └── PKGBUILD (56 lines, 1.4 KB, ~453 tokens)
├── mingw-w64-libusb-compat/
│   └── PKGBUILD (58 lines, 1.6 KB, ~508 tokens)
├── mingw-w64-libusb-win32/
│   └── PKGBUILD (37 lines, 1.2 KB, ~356 tokens)
├── mingw-w64-libusbmuxd/
│   └── PKGBUILD (57 lines, 1.7 KB, ~489 tokens)
├── mingw-w64-libutf8proc/
│   └── PKGBUILD (75 lines, 2.2 KB, ~667 tokens)
├── mingw-w64-libutp/
│   └── PKGBUILD (66 lines, 2.1 KB, ~617 tokens)
├── mingw-w64-libuv/
│   └── PKGBUILD (71 lines, 2.3 KB, ~671 tokens)
├── mingw-w64-libva/
│   └── PKGBUILD (66 lines, 2.1 KB, ~615 tokens)
├── mingw-w64-libva-utils/
│   └── PKGBUILD (45 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-libvips/
│   └── PKGBUILD (103 lines, 3.1 KB, ~889 tokens)
├── mingw-w64-libvirt/
│   └── PKGBUILD (107 lines, 3.5 KB, ~972 tokens)
├── mingw-w64-libvirt-glib/
│   └── PKGBUILD (50 lines, 1.7 KB, ~504 tokens)
├── mingw-w64-libvisio/
│   └── PKGBUILD (52 lines, 1.5 KB, ~432 tokens)
├── mingw-w64-libvmime/
│   └── PKGBUILD (84 lines, 2.4 KB, ~699 tokens)
├── mingw-w64-libvncserver/
│   └── PKGBUILD (75 lines, 2.6 KB, ~720 tokens)
├── mingw-w64-libvoikko/
│   └── PKGBUILD (61 lines, 2.2 KB, ~679 tokens)
├── mingw-w64-libvorbis/
│   └── PKGBUILD (42 lines, 1.1 KB, ~335 tokens)
├── mingw-w64-libvpl/
│   └── PKGBUILD (91 lines, 2.8 KB, ~816 tokens)
├── mingw-w64-libvpx/
│   └── PKGBUILD (101 lines, 2.6 KB, ~790 tokens)
├── mingw-w64-libvterm/
│   └── PKGBUILD (43 lines, 1.4 KB, ~419 tokens)
├── mingw-w64-libwebm/
│   └── PKGBUILD (80 lines, 2.6 KB, ~772 tokens)
├── mingw-w64-libwebp/
│   └── PKGBUILD (100 lines, 3.2 KB, ~917 tokens)
├── mingw-w64-libwebsockets/
│   └── PKGBUILD (70 lines, 2.4 KB, ~701 tokens)
├── mingw-w64-libwmf/
│   └── PKGBUILD (61 lines, 1.9 KB, ~581 tokens)
├── mingw-w64-libwpd/
│   └── PKGBUILD (62 lines, 1.9 KB, ~557 tokens)
├── mingw-w64-libwpg/
│   └── PKGBUILD (47 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-libwps/
│   └── PKGBUILD (55 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-libxc/
│   └── PKGBUILD (69 lines, 2.3 KB, ~653 tokens)
├── mingw-w64-libxisf/
│   └── PKGBUILD (76 lines, 2.1 KB, ~610 tokens)
├── mingw-w64-libxlsxwriter/
│   └── PKGBUILD (50 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-libxml++/
│   └── PKGBUILD (57 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-libxml++5.0/
│   └── PKGBUILD (47 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-libxml2/
│   └── PKGBUILD (163 lines, 5.1 KB, ~1.5k tokens)
├── mingw-w64-libxmlb/
│   └── PKGBUILD (54 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-libxmp/
│   └── PKGBUILD (52 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-libxs/
│   └── PKGBUILD (59 lines, 1.7 KB, ~495 tokens)
├── mingw-w64-libxslt/
│   └── PKGBUILD (108 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-libxsmm/
│   └── PKGBUILD (87 lines, 2.5 KB, ~760 tokens)
├── mingw-w64-libyaml/
│   └── PKGBUILD (48 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-libyuv/
│   └── PKGBUILD (70 lines, 2.2 KB, ~649 tokens)
├── mingw-w64-libzen/
│   └── PKGBUILD (73 lines, 2.1 KB, ~586 tokens)
├── mingw-w64-libzip/
│   └── PKGBUILD (86 lines, 2.9 KB, ~832 tokens)
├── mingw-w64-libzmf/
│   └── PKGBUILD (58 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-lilv/
│   └── PKGBUILD (62 lines, 1.8 KB, ~519 tokens)
├── mingw-w64-lis/
│   └── PKGBUILD (83 lines, 2.3 KB, ~731 tokens)
├── mingw-w64-lite-xl/
│   └── PKGBUILD (56 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-litehtml/
│   └── PKGBUILD (76 lines, 2.2 KB, ~647 tokens)
├── mingw-w64-live-chart/
│   └── PKGBUILD (45 lines, 1.3 KB, ~383 tokens)
├── mingw-w64-live-media/
│   └── PKGBUILD (88 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-live-photo-conv/
│   └── PKGBUILD (67 lines, 2.4 KB, ~681 tokens)
├── mingw-w64-livechart-gtk3/
│   └── PKGBUILD (45 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-llama.cpp/
│   └── PKGBUILD (71 lines, 2.0 KB, ~586 tokens)
├── mingw-w64-llama.qtcreator/
│   └── PKGBUILD (52 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-lldb/
│   └── PKGBUILD (107 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-lldb-mi/
│   └── PKGBUILD (63 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-llvm/
│   └── PKGBUILD (521 lines, 17.6 KB, ~5.1k tokens)
├── mingw-w64-llvm-openmp/
│   └── PKGBUILD (118 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-llvm22/
│   └── PKGBUILD (283 lines, 9.4 KB, ~2.6k tokens)
├── mingw-w64-lmdb/
│   └── PKGBUILD (57 lines, 1.9 KB, ~547 tokens)
├── mingw-w64-lmdbxx/
│   └── PKGBUILD (50 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-log4cpp/
│   └── PKGBUILD (67 lines, 1.7 KB, ~488 tokens)
├── mingw-w64-log4cxx/
│   └── PKGBUILD (59 lines, 1.9 KB, ~546 tokens)
├── mingw-w64-lokalize/
│   └── PKGBUILD (92 lines, 3.1 KB, ~856 tokens)
├── mingw-w64-lpsolve/
│   └── PKGBUILD (76 lines, 2.3 KB, ~625 tokens)
├── mingw-w64-lrcalc/
│   └── PKGBUILD (51 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-lrdf/
│   └── PKGBUILD (59 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-lrs/
│   └── PKGBUILD (71 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-lsd/
│   └── PKGBUILD (78 lines, 2.2 KB, ~643 tokens)
├── mingw-w64-lsp-dsp-lib/
│   └── PKGBUILD (36 lines, 1.2 KB, ~352 tokens)
├── mingw-w64-lua/
│   └── PKGBUILD (91 lines, 3.1 KB, ~895 tokens)
├── mingw-w64-lua-bitop/
│   └── PKGBUILD (49 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-lua-cjson/
│   └── PKGBUILD (227 lines, 6.9 KB, ~2.2k tokens)
├── mingw-w64-lua-lgi/
│   └── PKGBUILD (108 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-lua-lpeg/
│   └── PKGBUILD (84 lines, 2.9 KB, ~923 tokens)
├── mingw-w64-lua-lsqlite3/
│   └── PKGBUILD (80 lines, 2.7 KB, ~791 tokens)
├── mingw-w64-lua-luarocks/
│   └── PKGBUILD (49 lines, 1.9 KB, ~559 tokens)
├── mingw-w64-lua-mpack/
│   └── PKGBUILD (56 lines, 2.2 KB, ~675 tokens)
├── mingw-w64-lua-winapi/
│   └── PKGBUILD (36 lines, 1.1 KB, ~334 tokens)
├── mingw-w64-lua51/
│   └── PKGBUILD (85 lines, 3.0 KB, ~936 tokens)
├── mingw-w64-lua53/
│   └── PKGBUILD (90 lines, 3.1 KB, ~936 tokens)
├── mingw-w64-lua54/
│   └── PKGBUILD (93 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-luafilesystem/
│   └── PKGBUILD (207 lines, 5.7 KB, ~1.8k tokens)
├── mingw-w64-luajit/
│   └── PKGBUILD (79 lines, 2.5 KB, ~735 tokens)
├── mingw-w64-luanti/
│   └── PKGBUILD (174 lines, 6.3 KB, ~1.8k tokens)
├── mingw-w64-lumis/
│   └── PKGBUILD (43 lines, 1.3 KB, ~412 tokens)
├── mingw-w64-lv2/
│   └── PKGBUILD (93 lines, 2.8 KB, ~827 tokens)
├── mingw-w64-lz4/
│   └── PKGBUILD (66 lines, 1.7 KB, ~542 tokens)
├── mingw-w64-lzo2/
│   └── PKGBUILD (52 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-m4ri/
│   └── PKGBUILD (61 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-m4rie/
│   └── PKGBUILD (56 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-m68k-apple-macos-binutils/
│   └── PKGBUILD (48 lines, 1.3 KB, ~408 tokens)
├── mingw-w64-maeparser/
│   └── PKGBUILD (69 lines, 2.2 KB, ~659 tokens)
├── mingw-w64-magnum/
│   └── PKGBUILD (117 lines, 4.1 KB, ~1.1k tokens)
├── mingw-w64-magnum-integration/
│   └── PKGBUILD (71 lines, 2.4 KB, ~703 tokens)
├── mingw-w64-magnum-plugins/
│   └── PKGBUILD (101 lines, 4.1 KB, ~1.0k tokens)
├── mingw-w64-make/
│   └── PKGBUILD (163 lines, 6.2 KB, ~1.7k tokens)
├── mingw-w64-make-ls/
│   └── PKGBUILD (42 lines, 1.1 KB, ~348 tokens)
├── mingw-w64-manifold/
│   └── PKGBUILD (84 lines, 2.8 KB, ~774 tokens)
├── mingw-w64-manim/
│   └── PKGBUILD (76 lines, 2.7 KB, ~770 tokens)
├── mingw-w64-mapbox-earcut/
│   └── PKGBUILD (45 lines, 1.6 KB, ~463 tokens)
├── mingw-w64-mapserver/
│   └── PKGBUILD (133 lines, 4.5 KB, ~1.3k tokens)
├── mingw-w64-mariadb-clients/
│   └── PKGBUILD (80 lines, 2.7 KB, ~749 tokens)
├── mingw-w64-marisa/
│   └── PKGBUILD (75 lines, 2.0 KB, ~602 tokens)
├── mingw-w64-markdown/
│   └── PKGBUILD (63 lines, 1.9 KB, ~563 tokens)
├── mingw-w64-markdown-oxide/
│   └── PKGBUILD (51 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-mathgl/
│   └── PKGBUILD (96 lines, 3.2 KB, ~928 tokens)
├── mingw-w64-mathilda/
│   └── PKGBUILD (75 lines, 2.2 KB, ~674 tokens)
├── mingw-w64-mathjax2/
│   └── PKGBUILD (38 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-matio/
│   └── PKGBUILD (65 lines, 1.9 KB, ~585 tokens)
├── mingw-w64-maturin/
│   └── PKGBUILD (83 lines, 2.7 KB, ~805 tokens)
├── mingw-w64-maxflow/
│   └── PKGBUILD (53 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-mbedtls/
│   └── PKGBUILD (96 lines, 3.0 KB, ~849 tokens)
├── mingw-w64-mcfgthread/
│   └── PKGBUILD (74 lines, 2.0 KB, ~603 tokens)
├── mingw-w64-mcpp/
│   └── PKGBUILD (49 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-mcqd/
│   └── PKGBUILD (40 lines, 1.3 KB, ~416 tokens)
├── mingw-w64-mctc-lib/
│   └── PKGBUILD (56 lines, 1.8 KB, ~521 tokens)
├── mingw-w64-md4c/
│   └── PKGBUILD (73 lines, 2.3 KB, ~690 tokens)
├── mingw-w64-mdbook/
│   └── PKGBUILD (72 lines, 2.5 KB, ~753 tokens)
├── mingw-w64-mdbook-admonish/
│   └── PKGBUILD (52 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-mdbook-mermaid/
│   └── PKGBUILD (52 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-mdbook-pikchr/
│   └── PKGBUILD (58 lines, 1.7 KB, ~534 tokens)
├── mingw-w64-mdcat/
│   └── PKGBUILD (58 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-mdds/
│   └── PKGBUILD (57 lines, 1.3 KB, ~404 tokens)
├── mingw-w64-mdloader/
│   └── PKGBUILD (36 lines, 1.0 KB, ~316 tokens)
├── mingw-w64-meanwhile/
│   └── PKGBUILD (70 lines, 2.1 KB, ~598 tokens)
├── mingw-w64-mecab/
│   └── PKGBUILD (65 lines, 2.3 KB, ~676 tokens)
├── mingw-w64-med/
│   └── PKGBUILD (101 lines, 3.4 KB, ~964 tokens)
├── mingw-w64-mediainfo/
│   └── PKGBUILD (133 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-meilisearch/
│   └── PKGBUILD (87 lines, 2.4 KB, ~686 tokens)
├── mingw-w64-meld3/
│   └── PKGBUILD (90 lines, 2.7 KB, ~768 tokens)
├── mingw-w64-mesa/
│   └── PKGBUILD (109 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-meshoptimizer/
│   └── PKGBUILD (44 lines, 1.4 KB, ~404 tokens)
├── mingw-w64-meson/
│   └── PKGBUILD (87 lines, 2.6 KB, ~728 tokens)
├── mingw-w64-meson-python/
│   └── PKGBUILD (63 lines, 1.9 KB, ~560 tokens)
├── mingw-w64-mesonlsp/
│   └── PKGBUILD (73 lines, 2.6 KB, ~703 tokens)
├── mingw-w64-metis/
│   └── PKGBUILD (74 lines, 3.0 KB, ~829 tokens)
├── mingw-w64-mfem/
│   └── PKGBUILD (111 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-mgba/
│   └── PKGBUILD (57 lines, 1.9 KB, ~545 tokens)
├── mingw-w64-mhook/
│   └── PKGBUILD (73 lines, 2.0 KB, ~604 tokens)
├── mingw-w64-micro/
│   └── PKGBUILD (52 lines, 2.0 KB, ~571 tokens)
├── mingw-w64-microsoft-gsl/
│   └── PKGBUILD (45 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-mimalloc/
│   └── PKGBUILD (62 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-miniaudio/
│   └── PKGBUILD (55 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-minidump-stackwalk/
│   └── PKGBUILD (52 lines, 1.4 KB, ~416 tokens)
├── mingw-w64-minio/
│   └── PKGBUILD (65 lines, 1.9 KB, ~585 tokens)
├── mingw-w64-minio-client/
│   └── PKGBUILD (62 lines, 1.9 KB, ~591 tokens)
├── mingw-w64-minio-docs/
│   └── PKGBUILD (50 lines, 1.6 KB, ~457 tokens)
├── mingw-w64-miniserve/
│   └── PKGBUILD (50 lines, 1.9 KB, ~574 tokens)
├── mingw-w64-minisign/
│   └── PKGBUILD (46 lines, 1.6 KB, ~459 tokens)
├── mingw-w64-miniupnpc/
│   └── PKGBUILD (86 lines, 2.8 KB, ~815 tokens)
├── mingw-w64-minizip-ng/
│   └── PKGBUILD (105 lines, 3.1 KB, ~929 tokens)
├── mingw-w64-mkvtoolnix/
│   └── PKGBUILD (118 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-mlir/
│   └── PKGBUILD (128 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-mlpack/
│   └── PKGBUILD (68 lines, 2.3 KB, ~671 tokens)
├── mingw-w64-mlt/
│   └── PKGBUILD (117 lines, 3.4 KB, ~953 tokens)
├── mingw-w64-mman-win32/
│   └── PKGBUILD (68 lines, 2.0 KB, ~597 tokens)
├── mingw-w64-mmtf-cpp/
│   └── PKGBUILD (43 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-moab/
│   └── PKGBUILD (73 lines, 2.4 KB, ~676 tokens)
├── mingw-w64-mold/
│   └── PKGBUILD (73 lines, 2.4 KB, ~719 tokens)
├── mingw-w64-molequeue/
│   └── PKGBUILD (61 lines, 2.1 KB, ~584 tokens)
├── mingw-w64-mongo-c-driver/
│   └── PKGBUILD (101 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-mono/
│   ├── PKGBUILD (119 lines, 4.7 KB, ~1.3k tokens)
│   └── bootstrap/
│       └── PKGBUILD (142 lines, 6.2 KB, ~1.8k tokens)
├── mingw-w64-mono-basic/
│   └── PKGBUILD (48 lines, 1.3 KB, ~413 tokens)
├── mingw-w64-moor/
│   └── PKGBUILD (70 lines, 1.8 KB, ~546 tokens)
├── mingw-w64-mopac/
│   └── PKGBUILD (90 lines, 2.7 KB, ~793 tokens)
├── mingw-w64-mosquitto/
│   └── PKGBUILD (94 lines, 2.8 KB, ~812 tokens)
├── mingw-w64-mpc/
│   └── PKGBUILD (48 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-mpdecimal/
│   └── PKGBUILD (47 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-mpfi/
│   └── PKGBUILD (50 lines, 1.4 KB, ~435 tokens)
├── mingw-w64-mpfr/
│   └── PKGBUILD (57 lines, 1.5 KB, ~471 tokens)
├── mingw-w64-mpg123/
│   └── PKGBUILD (60 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-mpv/
│   └── PKGBUILD (97 lines, 2.8 KB, ~828 tokens)
├── mingw-w64-mruby/
│   └── PKGBUILD (59 lines, 2.0 KB, ~614 tokens)
├── mingw-w64-mscgen/
│   └── PKGBUILD (61 lines, 2.0 KB, ~566 tokens)
├── mingw-w64-msgpack-c/
│   └── PKGBUILD (51 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-msgpack-cxx/
│   └── PKGBUILD (52 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-msitools/
│   └── PKGBUILD (61 lines, 2.0 KB, ~588 tokens)
├── mingw-w64-msmpi/
│   └── PKGBUILD (146 lines, 5.4 KB, ~1.5k tokens)
├── mingw-w64-msmtp/
│   └── PKGBUILD (55 lines, 1.5 KB, ~464 tokens)
├── mingw-w64-msolve/
│   └── PKGBUILD (69 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-mstore/
│   └── PKGBUILD (53 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-mtex2MML/
│   └── PKGBUILD (61 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-mtn/
│   └── PKGBUILD (32 lines, 1.1 KB, ~348 tokens)
├── mingw-w64-mtools/
│   └── PKGBUILD (65 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-mujs/
│   └── PKGBUILD (72 lines, 2.2 KB, ~656 tokens)
├── mingw-w64-multicharge/
│   └── PKGBUILD (56 lines, 1.8 KB, ~525 tokens)
├── mingw-w64-mumps/
│   └── PKGBUILD (241 lines, 8.7 KB, ~2.5k tokens)
├── mingw-w64-munt/
│   └── PKGBUILD (64 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-munt-mt32emu/
│   └── PKGBUILD (55 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-muon/
│   └── PKGBUILD (70 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-muparser/
│   └── PKGBUILD (54 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-mupdf/
│   └── PKGBUILD (235 lines, 8.2 KB, ~2.3k tokens)
├── mingw-w64-mxml/
│   └── PKGBUILD (55 lines, 1.8 KB, ~545 tokens)
├── mingw-w64-mypaint/
│   └── PKGBUILD (92 lines, 3.2 KB, ~911 tokens)
├── mingw-w64-mypaint-brushes/
│   └── PKGBUILD (56 lines, 1.4 KB, ~450 tokens)
├── mingw-w64-mypaint-brushes2/
│   └── PKGBUILD (62 lines, 1.6 KB, ~504 tokens)
├── mingw-w64-mypy/
│   └── PKGBUILD (62 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-mythes/
│   └── PKGBUILD (59 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-nana/
│   └── PKGBUILD (63 lines, 1.8 KB, ~503 tokens)
├── mingw-w64-nanoarrow/
│   └── PKGBUILD (48 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-nanobind/
│   └── PKGBUILD (50 lines, 1.7 KB, ~507 tokens)
├── mingw-w64-nanodbc/
│   └── PKGBUILD (68 lines, 2.3 KB, ~677 tokens)
├── mingw-w64-nanogui/
│   └── PKGBUILD (89 lines, 3.0 KB, ~876 tokens)
├── mingw-w64-nanovg/
│   └── PKGBUILD (65 lines, 2.0 KB, ~618 tokens)
├── mingw-w64-nasm/
│   └── PKGBUILD (43 lines, 1.2 KB, ~377 tokens)
├── mingw-w64-nativefiledialog-extended/
│   └── PKGBUILD (55 lines, 1.7 KB, ~485 tokens)
├── mingw-w64-nauty/
│   └── PKGBUILD (49 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-ncurses/
│   └── PKGBUILD (109 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-neocmakelsp/
│   └── PKGBUILD (77 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-neon/
│   └── PKGBUILD (83 lines, 2.5 KB, ~752 tokens)
├── mingw-w64-neovim/
│   └── PKGBUILD (108 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-neovim-qt/
│   └── PKGBUILD (77 lines, 2.5 KB, ~723 tokens)
├── mingw-w64-nerd-fonts/
│   └── PKGBUILD (870 lines, 39.0 KB, ~10.9k tokens)
├── mingw-w64-netcdf/
│   └── PKGBUILD (158 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-netcdf-cxx/
│   └── PKGBUILD (56 lines, 1.6 KB, ~497 tokens)
├── mingw-w64-netcdf-fortran/
│   └── PKGBUILD (72 lines, 2.8 KB, ~858 tokens)
├── mingw-w64-nettle/
│   └── PKGBUILD (64 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-nettle3/
│   └── PKGBUILD (73 lines, 2.1 KB, ~654 tokens)
├── mingw-w64-newton-dynamics/
│   └── PKGBUILD (100 lines, 3.2 KB, ~875 tokens)
├── mingw-w64-nextpnr/
│   └── PKGBUILD (119 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-nfft/
│   └── PKGBUILD (58 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-ng-log/
│   └── PKGBUILD (86 lines, 2.9 KB, ~851 tokens)
├── mingw-w64-nghttp2/
│   └── PKGBUILD (94 lines, 3.0 KB, ~882 tokens)
├── mingw-w64-nghttp3/
│   └── PKGBUILD (64 lines, 2.1 KB, ~583 tokens)
├── mingw-w64-ngraph-gtk/
│   └── PKGBUILD (61 lines, 2.0 KB, ~562 tokens)
├── mingw-w64-ngspice/
│   └── PKGBUILD (113 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-ngtcp2/
│   └── PKGBUILD (98 lines, 2.8 KB, ~806 tokens)
├── mingw-w64-nicotine+/
│   └── PKGBUILD (58 lines, 2.1 KB, ~592 tokens)
├── mingw-w64-nim/
│   └── PKGBUILD (134 lines, 4.2 KB, ~1.3k tokens)
├── mingw-w64-nimble/
│   └── PKGBUILD (79 lines, 3.8 KB, ~996 tokens)
├── mingw-w64-ninja/
│   └── PKGBUILD (54 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-nlohmann-json/
│   └── PKGBUILD (54 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-nlopt/
│   └── PKGBUILD (72 lines, 2.4 KB, ~712 tokens)
├── mingw-w64-nme/
│   └── PKGBUILD (44 lines, 1.4 KB, ~435 tokens)
├── mingw-w64-nng/
│   └── PKGBUILD (51 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-nodeeditor/
│   └── PKGBUILD (63 lines, 2.1 KB, ~595 tokens)
├── mingw-w64-nodejs/
│   └── PKGBUILD (272 lines, 10.8 KB, ~2.8k tokens)
├── mingw-w64-nodejs-neovim/
│   └── PKGBUILD (28 lines, 980 B, ~295 tokens)
├── mingw-w64-nodejs-webpack-cli/
│   └── PKGBUILD (30 lines, 909 B, ~277 tokens)
├── mingw-w64-notcurses/
│   └── PKGBUILD (78 lines, 2.5 KB, ~687 tokens)
├── mingw-w64-notepad++/
│   └── PKGBUILD (66 lines, 2.3 KB, ~698 tokens)
├── mingw-w64-npth/
│   └── PKGBUILD (53 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-nsis/
│   └── PKGBUILD (149 lines, 4.5 KB, ~1.3k tokens)
├── mingw-w64-nsis-nsisunz/
│   └── PKGBUILD (61 lines, 2.1 KB, ~600 tokens)
├── mingw-w64-nspr/
│   └── PKGBUILD (91 lines, 2.9 KB, ~827 tokens)
├── mingw-w64-nss/
│   └── PKGBUILD (173 lines, 6.2 KB, ~1.8k tokens)
├── mingw-w64-nsync/
│   └── PKGBUILD (62 lines, 1.9 KB, ~541 tokens)
├── mingw-w64-ntl/
│   └── PKGBUILD (72 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-ntldd/
│   └── PKGBUILD (45 lines, 1.5 KB, ~479 tokens)
├── mingw-w64-nuspell/
│   └── PKGBUILD (61 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-oatpp/
│   └── PKGBUILD (40 lines, 1.2 KB, ~338 tokens)
├── mingw-w64-objfw/
│   └── PKGBUILD (212 lines, 6.9 KB, ~2.1k tokens)
├── mingw-w64-ocaml/
│   └── PKGBUILD (139 lines, 4.7 KB, ~1.4k tokens)
├── mingw-w64-oce/
│   └── PKGBUILD (85 lines, 3.3 KB, ~905 tokens)
├── mingw-w64-ocrmypdf/
│   └── PKGBUILD (68 lines, 2.7 KB, ~763 tokens)
├── mingw-w64-octave/
│   └── PKGBUILD (169 lines, 5.8 KB, ~1.6k tokens)
├── mingw-w64-ode/
│   └── PKGBUILD (81 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-odpi/
│   └── PKGBUILD (45 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-odt2txt/
│   └── PKGBUILD (36 lines, 1.2 KB, ~340 tokens)
├── mingw-w64-ogre3d/
│   └── PKGBUILD (155 lines, 5.2 KB, ~1.4k tokens)
├── mingw-w64-oh-my-posh/
│   └── PKGBUILD (49 lines, 1.9 KB, ~569 tokens)
├── mingw-w64-ois/
│   └── PKGBUILD (74 lines, 2.1 KB, ~594 tokens)
├── mingw-w64-okular/
│   └── PKGBUILD (107 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-ollama/
│   └── PKGBUILD (144 lines, 4.4 KB, ~1.3k tokens)
├── mingw-w64-onednn/
│   └── PKGBUILD (56 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-onefetch/
│   └── PKGBUILD (84 lines, 2.4 KB, ~723 tokens)
├── mingw-w64-oniguruma/
│   └── PKGBUILD (58 lines, 1.6 KB, ~505 tokens)
├── mingw-w64-onnx/
│   └── PKGBUILD (111 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-onnxruntime/
│   └── PKGBUILD (245 lines, 10.4 KB, ~2.7k tokens)
├── mingw-w64-open62541/
│   └── PKGBUILD (60 lines, 2.2 KB, ~638 tokens)
├── mingw-w64-openFPGALoader/
│   └── PKGBUILD (54 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-openai-codex/
│   └── PKGBUILD (101 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-openal/
│   └── PKGBUILD (103 lines, 3.3 KB, ~905 tokens)
├── mingw-w64-openapv/
│   └── PKGBUILD (44 lines, 1.6 KB, ~448 tokens)
├── mingw-w64-openbabel/
│   └── PKGBUILD (103 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-openblas/
│   └── PKGBUILD (172 lines, 5.8 KB, ~1.6k tokens)
├── mingw-w64-opencamlib/
│   └── PKGBUILD (117 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-opencascade/
│   └── PKGBUILD (242 lines, 10.5 KB, ~2.9k tokens)
├── mingw-w64-opencc/
│   └── PKGBUILD (115 lines, 4.0 KB, ~1.2k tokens)
├── mingw-w64-opencl-clhpp/
│   └── PKGBUILD (45 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-opencl-headers/
│   └── PKGBUILD (40 lines, 1.2 KB, ~353 tokens)
├── mingw-w64-opencl-icd/
│   └── PKGBUILD (52 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-opencollada/
│   └── PKGBUILD (102 lines, 3.7 KB, ~941 tokens)
├── mingw-w64-opencolorio/
│   └── PKGBUILD (101 lines, 3.5 KB, ~951 tokens)
├── mingw-w64-opencore-amr/
│   └── PKGBUILD (44 lines, 1.1 KB, ~349 tokens)
├── mingw-w64-opencsg/
│   └── PKGBUILD (65 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-opencv/
│   └── PKGBUILD (264 lines, 9.9 KB, ~2.6k tokens)
├── mingw-w64-openexr/
│   └── PKGBUILD (99 lines, 2.9 KB, ~835 tokens)
├── mingw-w64-openfa/
│   └── PKGBUILD (50 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-opengl-man-pages/
│   └── PKGBUILD (44 lines, 1.6 KB, ~450 tokens)
├── mingw-w64-openh264/
│   └── PKGBUILD (77 lines, 2.2 KB, ~646 tokens)
├── mingw-w64-openimagedenoise/
│   └── PKGBUILD (63 lines, 2.1 KB, ~594 tokens)
├── mingw-w64-openimageio/
│   └── PKGBUILD (134 lines, 4.9 KB, ~1.3k tokens)
├── mingw-w64-openjpeg2/
│   └── PKGBUILD (132 lines, 4.1 KB, ~1.2k tokens)
├── mingw-w64-openjph/
│   └── PKGBUILD (69 lines, 2.2 KB, ~620 tokens)
├── mingw-w64-openldap/
│   └── PKGBUILD (92 lines, 2.8 KB, ~782 tokens)
├── mingw-w64-openlibm/
│   └── PKGBUILD (80 lines, 2.1 KB, ~648 tokens)
├── mingw-w64-openocd/
│   └── PKGBUILD (78 lines, 2.3 KB, ~653 tokens)
├── mingw-w64-openpgl/
│   └── PKGBUILD (76 lines, 2.2 KB, ~662 tokens)
├── mingw-w64-openscad/
│   └── PKGBUILD (151 lines, 5.8 KB, ~1.6k tokens)
├── mingw-w64-openshadinglanguage/
│   └── PKGBUILD (123 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-openslide/
│   └── PKGBUILD (61 lines, 1.8 KB, ~517 tokens)
├── mingw-w64-openssl/
│   └── PKGBUILD (123 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-opensubdiv/
│   └── PKGBUILD (120 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-opentimelineio/
│   └── PKGBUILD (81 lines, 2.2 KB, ~634 tokens)
├── mingw-w64-openturns/
│   └── PKGBUILD (84 lines, 2.6 KB, ~746 tokens)
├── mingw-w64-openvdb/
│   └── PKGBUILD (78 lines, 2.5 KB, ~714 tokens)
├── mingw-w64-openvr/
│   └── PKGBUILD (87 lines, 2.7 KB, ~753 tokens)
├── mingw-w64-openxr-sdk/
│   └── PKGBUILD (87 lines, 2.9 KB, ~781 tokens)
├── mingw-w64-optipng/
│   └── PKGBUILD (48 lines, 1.6 KB, ~500 tokens)
├── mingw-w64-opus/
│   └── PKGBUILD (106 lines, 2.8 KB, ~860 tokens)
├── mingw-w64-opus-tools/
│   └── PKGBUILD (39 lines, 1.3 KB, ~387 tokens)
├── mingw-w64-opusfile/
│   └── PKGBUILD (54 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-oqsprovider/
│   └── PKGBUILD (72 lines, 2.1 KB, ~600 tokens)
├── mingw-w64-orc/
│   └── PKGBUILD (42 lines, 1.3 KB, ~378 tokens)
├── mingw-w64-orcus/
│   └── PKGBUILD (91 lines, 3.0 KB, ~892 tokens)
├── mingw-w64-osgQt/
│   └── PKGBUILD (62 lines, 2.1 KB, ~599 tokens)
├── mingw-w64-osgbullet/
│   └── PKGBUILD (64 lines, 2.1 KB, ~616 tokens)
├── mingw-w64-osgearth/
│   └── PKGBUILD (103 lines, 3.5 KB, ~986 tokens)
├── mingw-w64-osgocean/
│   └── PKGBUILD (97 lines, 3.2 KB, ~897 tokens)
├── mingw-w64-osgqtquick/
│   └── PKGBUILD (61 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-osgworks/
│   └── PKGBUILD (78 lines, 2.5 KB, ~758 tokens)
├── mingw-w64-osl/
│   └── PKGBUILD (55 lines, 1.8 KB, ~542 tokens)
├── mingw-w64-osm-gps-map/
│   └── PKGBUILD (53 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-ossia-score/
│   └── PKGBUILD (121 lines, 4.0 KB, ~1.1k tokens)
├── mingw-w64-osslsigncode/
│   └── PKGBUILD (49 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-oxipng/
│   └── PKGBUILD (38 lines, 1.3 KB, ~376 tokens)
├── mingw-w64-p11-kit/
│   └── PKGBUILD (112 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-paho.mqtt.c/
│   └── PKGBUILD (61 lines, 1.9 KB, ~573 tokens)
├── mingw-w64-panache/
│   └── PKGBUILD (46 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-panamax/
│   └── PKGBUILD (59 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-pango/
│   └── PKGBUILD (125 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-pangomm/
│   └── PKGBUILD (75 lines, 1.9 KB, ~594 tokens)
├── mingw-w64-pangomm-2.48/
│   └── PKGBUILD (70 lines, 2.1 KB, ~634 tokens)
├── mingw-w64-paper-terminal/
│   └── PKGBUILD (48 lines, 1.1 KB, ~340 tokens)
├── mingw-w64-papers/
│   └── PKGBUILD (105 lines, 3.3 KB, ~942 tokens)
├── mingw-w64-paraview/
│   └── PKGBUILD (156 lines, 5.8 KB, ~1.5k tokens)
├── mingw-w64-pari/
│   └── PKGBUILD (100 lines, 3.1 KB, ~904 tokens)
├── mingw-w64-pari-galdata/
│   └── PKGBUILD (27 lines, 900 B, ~254 tokens)
├── mingw-w64-pari-galpol/
│   └── PKGBUILD (28 lines, 978 B, ~276 tokens)
├── mingw-w64-pari-seadata/
│   └── PKGBUILD (30 lines, 1.0 KB, ~305 tokens)
├── mingw-w64-pari-seadata-small/
│   └── PKGBUILD (27 lines, 919 B, ~260 tokens)
├── mingw-w64-parmetis/
│   └── PKGBUILD (93 lines, 3.0 KB, ~850 tokens)
├── mingw-w64-parsec/
│   └── PKGBUILD (71 lines, 2.2 KB, ~659 tokens)
├── mingw-w64-partio/
│   └── PKGBUILD (75 lines, 2.2 KB, ~636 tokens)
├── mingw-w64-passagemath-benzene/
│   └── PKGBUILD (51 lines, 2.0 KB, ~548 tokens)
├── mingw-w64-passagemath-bliss/
│   └── PKGBUILD (47 lines, 1.7 KB, ~487 tokens)
├── mingw-w64-passagemath-bootstrap/
│   └── PKGBUILD (40 lines, 1.3 KB, ~385 tokens)
├── mingw-w64-passagemath-buckygen/
│   └── PKGBUILD (53 lines, 2.1 KB, ~580 tokens)
├── mingw-w64-passagemath-categories/
│   └── PKGBUILD (49 lines, 1.9 KB, ~529 tokens)
├── mingw-w64-passagemath-cddlib/
│   └── PKGBUILD (46 lines, 1.7 KB, ~490 tokens)
├── mingw-w64-passagemath-cliquer/
│   └── PKGBUILD (48 lines, 1.8 KB, ~517 tokens)
├── mingw-w64-passagemath-cmr/
│   └── PKGBUILD (48 lines, 1.8 KB, ~511 tokens)
├── mingw-w64-passagemath-combinat/
│   └── PKGBUILD (59 lines, 2.3 KB, ~630 tokens)
├── mingw-w64-passagemath-database-cunningham/
│   └── PKGBUILD (41 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-passagemath-environment/
│   └── PKGBUILD (44 lines, 1.7 KB, ~519 tokens)
├── mingw-w64-passagemath-flint/
│   └── PKGBUILD (60 lines, 2.4 KB, ~651 tokens)
├── mingw-w64-passagemath-glpk/
│   └── PKGBUILD (57 lines, 2.2 KB, ~632 tokens)
├── mingw-w64-passagemath-graphs/
│   └── PKGBUILD (93 lines, 4.7 KB, ~1.2k tokens)
├── mingw-w64-passagemath-graphviz/
│   └── PKGBUILD (51 lines, 1.7 KB, ~487 tokens)
├── mingw-w64-passagemath-gsl/
│   └── PKGBUILD (55 lines, 2.1 KB, ~583 tokens)
├── mingw-w64-passagemath-highs/
│   └── PKGBUILD (54 lines, 2.1 KB, ~581 tokens)
├── mingw-w64-passagemath-homfly/
│   └── PKGBUILD (47 lines, 1.8 KB, ~503 tokens)
├── mingw-w64-passagemath-iml/
│   └── PKGBUILD (51 lines, 1.9 KB, ~544 tokens)
├── mingw-w64-passagemath-libbraiding/
│   └── PKGBUILD (47 lines, 1.7 KB, ~487 tokens)
├── mingw-w64-passagemath-lrslib/
│   └── PKGBUILD (54 lines, 2.0 KB, ~568 tokens)
├── mingw-w64-passagemath-m4ri-m4rie/
│   └── PKGBUILD (54 lines, 2.1 KB, ~575 tokens)
├── mingw-w64-passagemath-mathilda/
│   └── PKGBUILD (58 lines, 1.9 KB, ~552 tokens)
├── mingw-w64-passagemath-mcqd/
│   └── PKGBUILD (48 lines, 1.8 KB, ~498 tokens)
├── mingw-w64-passagemath-meataxe/
│   └── PKGBUILD (56 lines, 1.9 KB, ~540 tokens)
├── mingw-w64-passagemath-modules/
│   └── PKGBUILD (63 lines, 2.6 KB, ~716 tokens)
├── mingw-w64-passagemath-msolve/
│   └── PKGBUILD (55 lines, 2.1 KB, ~593 tokens)
├── mingw-w64-passagemath-nauty/
│   └── PKGBUILD (47 lines, 1.8 KB, ~508 tokens)
├── mingw-w64-passagemath-ntl/
│   └── PKGBUILD (51 lines, 2.0 KB, ~547 tokens)
├── mingw-w64-passagemath-objects/
│   └── PKGBUILD (47 lines, 1.8 KB, ~514 tokens)
├── mingw-w64-passagemath-planarity/
│   └── PKGBUILD (47 lines, 1.8 KB, ~505 tokens)
├── mingw-w64-passagemath-plantri/
│   └── PKGBUILD (50 lines, 1.9 KB, ~533 tokens)
├── mingw-w64-passagemath-plot/
│   └── PKGBUILD (62 lines, 2.4 KB, ~676 tokens)
├── mingw-w64-passagemath-polyhedra/
│   └── PKGBUILD (83 lines, 3.6 KB, ~954 tokens)
├── mingw-w64-passagemath-ppl/
│   └── PKGBUILD (69 lines, 2.4 KB, ~718 tokens)
├── mingw-w64-passagemath-rankwidth/
│   └── PKGBUILD (47 lines, 1.8 KB, ~502 tokens)
├── mingw-w64-passagemath-repl/
│   └── PKGBUILD (71 lines, 2.6 KB, ~784 tokens)
├── mingw-w64-passagemath-setup/
│   └── PKGBUILD (39 lines, 1.4 KB, ~406 tokens)
├── mingw-w64-passagemath-sirocco/
│   └── PKGBUILD (48 lines, 1.8 KB, ~501 tokens)
├── mingw-w64-passagemath-tdlib/
│   └── PKGBUILD (48 lines, 1.8 KB, ~507 tokens)
├── mingw-w64-pastix/
│   └── PKGBUILD (130 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-pcaudiolib/
│   └── PKGBUILD (52 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-pcre/
│   └── PKGBUILD (65 lines, 1.8 KB, ~549 tokens)
├── mingw-w64-pcre2/
│   └── PKGBUILD (98 lines, 2.7 KB, ~790 tokens)
├── mingw-w64-pdal/
│   └── PKGBUILD (86 lines, 3.0 KB, ~825 tokens)
├── mingw-w64-pdcurses/
│   └── PKGBUILD (117 lines, 4.4 KB, ~1.3k tokens)
├── mingw-w64-pdf2djvu/
│   └── PKGBUILD (66 lines, 2.3 KB, ~687 tokens)
├── mingw-w64-pdf2svg/
│   └── PKGBUILD (37 lines, 1.2 KB, ~373 tokens)
├── mingw-w64-pdfarranger/
│   └── PKGBUILD (54 lines, 2.0 KB, ~563 tokens)
├── mingw-w64-pdfpc/
│   └── PKGBUILD (74 lines, 2.5 KB, ~714 tokens)
├── mingw-w64-pegtl/
│   └── PKGBUILD (59 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-pelican/
│   └── PKGBUILD (76 lines, 2.7 KB, ~773 tokens)
├── mingw-w64-perl/
│   └── PKGBUILD (1174 lines, 60.7 KB, ~18.4k tokens)
├── mingw-w64-perl-algorithm-diff/
│   └── PKGBUILD (34 lines, 1.0 KB, ~303 tokens)
├── mingw-w64-perl-alien-build/
│   └── PKGBUILD (52 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-perl-alien-build-plugin-download-gitlab/
│   └── PKGBUILD (40 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-perl-alien-libxml2/
│   └── PKGBUILD (44 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-perl-authen-sasl/
│   └── PKGBUILD (38 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-perl-autovivification/
│   └── PKGBUILD (35 lines, 1.1 KB, ~317 tokens)
├── mingw-w64-perl-b-hooks-endofscope/
│   └── PKGBUILD (43 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-perl-business-isbn/
│   └── PKGBUILD (38 lines, 1.3 KB, ~372 tokens)
├── mingw-w64-perl-business-isbn-data/
│   └── PKGBUILD (50 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-perl-business-ismn/
│   └── PKGBUILD (38 lines, 1.3 KB, ~370 tokens)
├── mingw-w64-perl-business-issn/
│   └── PKGBUILD (36 lines, 1.2 KB, ~350 tokens)
├── mingw-w64-perl-capture-tiny/
│   └── PKGBUILD (36 lines, 1.2 KB, ~351 tokens)
├── mingw-w64-perl-class-accessor/
│   └── PKGBUILD (34 lines, 1.0 KB, ~309 tokens)
├── mingw-w64-perl-class-data-inheritable/
│   └── PKGBUILD (35 lines, 1.1 KB, ~326 tokens)
├── mingw-w64-perl-class-inspector/
│   └── PKGBUILD (36 lines, 1.2 KB, ~359 tokens)
├── mingw-w64-perl-class-load/
│   └── PKGBUILD (44 lines, 1.6 KB, ~461 tokens)
├── mingw-w64-perl-class-singleton/
│   └── PKGBUILD (36 lines, 1.2 KB, ~359 tokens)
├── mingw-w64-perl-clone/
│   └── PKGBUILD (47 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-perl-clone-choose/
│   └── PKGBUILD (37 lines, 1.2 KB, ~351 tokens)
├── mingw-w64-perl-config-autoconf/
│   └── PKGBUILD (40 lines, 1.4 KB, ~407 tokens)
├── mingw-w64-perl-convert-binhex/
│   └── PKGBUILD (37 lines, 1.2 KB, ~366 tokens)
├── mingw-w64-perl-cpan-requirements-dynamic/
│   └── PKGBUILD (38 lines, 1.3 KB, ~387 tokens)
├── mingw-w64-perl-data-compare/
│   └── PKGBUILD (40 lines, 1.4 KB, ~423 tokens)
├── mingw-w64-perl-data-dump/
│   └── PKGBUILD (36 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-perl-data-optlist/
│   └── PKGBUILD (50 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-perl-data-uniqid/
│   └── PKGBUILD (35 lines, 1.0 KB, ~309 tokens)
├── mingw-w64-perl-datetime/
│   └── PKGBUILD (57 lines, 1.7 KB, ~512 tokens)
├── mingw-w64-perl-datetime-calendar-julian/
│   └── PKGBUILD (38 lines, 1.3 KB, ~385 tokens)
├── mingw-w64-perl-datetime-format-builder/
│   └── PKGBUILD (50 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-perl-datetime-format-strptime/
│   └── PKGBUILD (51 lines, 1.6 KB, ~461 tokens)
├── mingw-w64-perl-datetime-locale/
│   └── PKGBUILD (52 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-perl-datetime-timezone/
│   └── PKGBUILD (52 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-perl-dbi/
│   └── PKGBUILD (51 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-perl-devel-cover/
│   └── PKGBUILD (38 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-perl-devel-stacktrace/
│   └── PKGBUILD (37 lines, 1.2 KB, ~357 tokens)
├── mingw-w64-perl-digest-sha/
│   └── PKGBUILD (35 lines, 1.1 KB, ~340 tokens)
├── mingw-w64-perl-dist-checkconflicts/
│   └── PKGBUILD (38 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-perl-encode-compat/
│   └── PKGBUILD (38 lines, 1.0 KB, ~305 tokens)
├── mingw-w64-perl-encode-eucjpascii/
│   └── PKGBUILD (36 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-perl-encode-hanextra/
│   └── PKGBUILD (37 lines, 1.1 KB, ~332 tokens)
├── mingw-w64-perl-encode-locale/
│   └── PKGBUILD (35 lines, 1.1 KB, ~326 tokens)
├── mingw-w64-perl-error/
│   └── PKGBUILD (37 lines, 1.2 KB, ~362 tokens)
├── mingw-w64-perl-eval-closure/
│   └── PKGBUILD (39 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-perl-exception-class/
│   └── PKGBUILD (39 lines, 1.4 KB, ~402 tokens)
├── mingw-w64-perl-exporter-tiny/
│   └── PKGBUILD (36 lines, 1.2 KB, ~366 tokens)
├── mingw-w64-perl-extutils-config/
│   └── PKGBUILD (37 lines, 1.2 KB, ~368 tokens)
├── mingw-w64-perl-extutils-helpers/
│   └── PKGBUILD (37 lines, 1.2 KB, ~370 tokens)
├── mingw-w64-perl-extutils-installpaths/
│   └── PKGBUILD (38 lines, 1.3 KB, ~386 tokens)
├── mingw-w64-perl-extutils-libbuilder/
│   └── PKGBUILD (33 lines, 1.1 KB, ~331 tokens)
├── mingw-w64-perl-ffi-checklib/
│   └── PKGBUILD (37 lines, 1.2 KB, ~365 tokens)
├── mingw-w64-perl-file-chdir/
│   └── PKGBUILD (37 lines, 1.2 KB, ~367 tokens)
├── mingw-w64-perl-file-find-rule/
│   └── PKGBUILD (37 lines, 1.1 KB, ~337 tokens)
├── mingw-w64-perl-file-homedir/
│   └── PKGBUILD (37 lines, 1.2 KB, ~373 tokens)
├── mingw-w64-perl-file-listing/
│   └── PKGBUILD (38 lines, 1.2 KB, ~374 tokens)
├── mingw-w64-perl-file-remove/
│   └── PKGBUILD (36 lines, 1.2 KB, ~352 tokens)
├── mingw-w64-perl-file-sharedir/
│   └── PKGBUILD (37 lines, 1.3 KB, ~376 tokens)
├── mingw-w64-perl-file-sharedir-install/
│   └── PKGBUILD (36 lines, 1.2 KB, ~363 tokens)
├── mingw-w64-perl-file-slurp-tiny/
│   └── PKGBUILD (37 lines, 1.2 KB, ~373 tokens)
├── mingw-w64-perl-file-slurper/
│   └── PKGBUILD (37 lines, 1.2 KB, ~368 tokens)
├── mingw-w64-perl-file-which/
│   └── PKGBUILD (42 lines, 1.2 KB, ~363 tokens)
├── mingw-w64-perl-html-parser/
│   └── PKGBUILD (41 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-perl-html-tagset/
│   └── PKGBUILD (41 lines, 1.1 KB, ~325 tokens)
├── mingw-w64-perl-http-cookiejar/
│   └── PKGBUILD (38 lines, 1.2 KB, ~369 tokens)
├── mingw-w64-perl-http-cookies/
│   └── PKGBUILD (39 lines, 1.3 KB, ~387 tokens)
├── mingw-w64-perl-http-daemon/
│   └── PKGBUILD (37 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-perl-http-date/
│   └── PKGBUILD (37 lines, 1.2 KB, ~364 tokens)
├── mingw-w64-perl-http-message/
│   └── PKGBUILD (42 lines, 1.5 KB, ~429 tokens)
├── mingw-w64-perl-http-negotiate/
│   └── PKGBUILD (37 lines, 1.2 KB, ~349 tokens)
├── mingw-w64-perl-inc-latest/
│   └── PKGBUILD (36 lines, 1.2 KB, ~355 tokens)
├── mingw-w64-perl-io-html/
│   └── PKGBUILD (36 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-perl-io-socket-ssl/
│   └── PKGBUILD (38 lines, 1.2 KB, ~368 tokens)
├── mingw-w64-perl-io-string/
│   └── PKGBUILD (38 lines, 1019 B, ~302 tokens)
├── mingw-w64-perl-io-stringy/
│   └── PKGBUILD (37 lines, 1.2 KB, ~371 tokens)
├── mingw-w64-perl-ipc-run3/
│   └── PKGBUILD (37 lines, 1.2 KB, ~371 tokens)
├── mingw-w64-perl-json/
│   └── PKGBUILD (35 lines, 1.1 KB, ~322 tokens)
├── mingw-w64-perl-libwww/
│   └── PKGBUILD (50 lines, 1.9 KB, ~533 tokens)
├── mingw-w64-perl-lingua-translit/
│   └── PKGBUILD (35 lines, 1.1 KB, ~321 tokens)
├── mingw-w64-perl-list-allutils/
│   └── PKGBUILD (41 lines, 1.5 KB, ~425 tokens)
├── mingw-w64-perl-list-moreutils/
│   └── PKGBUILD (38 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-perl-list-moreutils-xs/
│   └── PKGBUILD (37 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-perl-list-someutils/
│   └── PKGBUILD (38 lines, 1.3 KB, ~382 tokens)
├── mingw-w64-perl-list-utilsby/
│   └── PKGBUILD (35 lines, 1.1 KB, ~337 tokens)
├── mingw-w64-perl-log-log4perl/
│   └── PKGBUILD (37 lines, 1.2 KB, ~360 tokens)
├── mingw-w64-perl-lwp-mediatypes/
│   └── PKGBUILD (37 lines, 1.3 KB, ~378 tokens)
├── mingw-w64-perl-lwp-protocol-https/
│   └── PKGBUILD (41 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-perl-mailtools/
│   └── PKGBUILD (37 lines, 1.2 KB, ~344 tokens)
├── mingw-w64-perl-math-int64/
│   └── PKGBUILD (36 lines, 1.1 KB, ~326 tokens)
├── mingw-w64-perl-math-round/
│   └── PKGBUILD (37 lines, 1.2 KB, ~361 tokens)
├── mingw-w64-perl-memory-usage/
│   └── PKGBUILD (36 lines, 1.1 KB, ~334 tokens)
├── mingw-w64-perl-mime-base32/
│   └── PKGBUILD (36 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-perl-mime-charset/
│   └── PKGBUILD (39 lines, 1.3 KB, ~397 tokens)
├── mingw-w64-perl-mime-tools/
│   └── PKGBUILD (50 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-perl-module-build/
│   └── PKGBUILD (44 lines, 1.5 KB, ~442 tokens)
├── mingw-w64-perl-module-build-tiny/
│   └── PKGBUILD (38 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-perl-module-implementation/
│   └── PKGBUILD (39 lines, 1.4 KB, ~399 tokens)
├── mingw-w64-perl-module-install/
│   └── PKGBUILD (42 lines, 1.5 KB, ~426 tokens)
├── mingw-w64-perl-module-runtime/
│   └── PKGBUILD (38 lines, 1.3 KB, ~380 tokens)
├── mingw-w64-perl-module-scandeps/
│   └── PKGBUILD (38 lines, 1.3 KB, ~373 tokens)
├── mingw-w64-perl-mozilla-ca/
│   └── PKGBUILD (41 lines, 1.2 KB, ~351 tokens)
├── mingw-w64-perl-mro-compat/
│   └── PKGBUILD (37 lines, 1.2 KB, ~367 tokens)
├── mingw-w64-perl-namespace-autoclean/
│   └── PKGBUILD (39 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-perl-namespace-clean/
│   └── PKGBUILD (38 lines, 1.3 KB, ~371 tokens)
├── mingw-w64-perl-net-http/
│   └── PKGBUILD (37 lines, 1.2 KB, ~363 tokens)
├── mingw-w64-perl-net-smtp-ssl/
│   └── PKGBUILD (36 lines, 1.1 KB, ~322 tokens)
├── mingw-w64-perl-net-ssleay/
│   └── PKGBUILD (46 lines, 1.5 KB, ~436 tokens)
├── mingw-w64-perl-number-compare/
│   └── PKGBUILD (35 lines, 1.0 KB, ~302 tokens)
├── mingw-w64-perl-package-stash/
│   └── PKGBUILD (42 lines, 1.4 KB, ~419 tokens)
├── mingw-w64-perl-package-stash-xs/
│   └── PKGBUILD (47 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-perl-par-dist/
│   └── PKGBUILD (36 lines, 1.2 KB, ~353 tokens)
├── mingw-w64-perl-params-someutil/
│   └── PKGBUILD (52 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-perl-params-validate/
│   └── PKGBUILD (36 lines, 1.3 KB, ~373 tokens)
├── mingw-w64-perl-params-validationcompiler/
│   └── PKGBUILD (40 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-perl-parse-recdescent/
│   └── PKGBUILD (36 lines, 1.1 KB, ~339 tokens)
├── mingw-w64-perl-path-tiny/
│   └── PKGBUILD (37 lines, 1.2 KB, ~349 tokens)
├── mingw-w64-perl-perlio-utf8-strict/
│   └── PKGBUILD (40 lines, 1.3 KB, ~399 tokens)
├── mingw-w64-perl-pkgconfig/
│   └── PKGBUILD (37 lines, 1.2 KB, ~365 tokens)
├── mingw-w64-perl-readonly/
│   └── PKGBUILD (35 lines, 1.2 KB, ~357 tokens)
├── mingw-w64-perl-regexp-common/
│   └── PKGBUILD (37 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-perl-role-tiny/
│   └── PKGBUILD (37 lines, 1.2 KB, ~366 tokens)
├── mingw-w64-perl-scalar-list-utils/
│   └── PKGBUILD (36 lines, 1.2 KB, ~366 tokens)
├── mingw-w64-perl-sort-key/
│   └── PKGBUILD (36 lines, 1.1 KB, ~316 tokens)
├── mingw-w64-perl-sort-versions/
│   └── PKGBUILD (37 lines, 1.2 KB, ~368 tokens)
├── mingw-w64-perl-specio/
│   └── PKGBUILD (44 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-perl-sub-exporter/
│   └── PKGBUILD (50 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-perl-sub-exporter-progressive/
│   └── PKGBUILD (37 lines, 1.3 KB, ~375 tokens)
├── mingw-w64-perl-sub-install/
│   └── PKGBUILD (37 lines, 1.2 KB, ~362 tokens)
├── mingw-w64-perl-sub-uplevel/
│   └── PKGBUILD (37 lines, 1.2 KB, ~370 tokens)
├── mingw-w64-perl-termreadkey/
│   └── PKGBUILD (38 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-perl-test-differences/
│   └── PKGBUILD (47 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-perl-test-exception/
│   └── PKGBUILD (37 lines, 1.2 KB, ~350 tokens)
├── mingw-w64-perl-test-fatal/
│   └── PKGBUILD (49 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-perl-test-requires/
│   └── PKGBUILD (36 lines, 1.2 KB, ~358 tokens)
├── mingw-w64-perl-text-bibtex/
│   └── PKGBUILD (43 lines, 1.5 KB, ~442 tokens)
├── mingw-w64-perl-text-csv/
│   └── PKGBUILD (36 lines, 1.1 KB, ~341 tokens)
├── mingw-w64-perl-text-csv-xs/
│   └── PKGBUILD (46 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-perl-text-diff/
│   └── PKGBUILD (38 lines, 1.3 KB, ~386 tokens)
├── mingw-w64-perl-text-glob/
│   └── PKGBUILD (35 lines, 1.0 KB, ~318 tokens)
├── mingw-w64-perl-text-roman/
│   └── PKGBUILD (37 lines, 1.2 KB, ~364 tokens)
├── mingw-w64-perl-tie-cycle/
│   └── PKGBUILD (36 lines, 1.2 KB, ~347 tokens)
├── mingw-w64-perl-timedate/
│   └── PKGBUILD (36 lines, 1.2 KB, ~350 tokens)
├── mingw-w64-perl-try-tiny/
│   └── PKGBUILD (36 lines, 1.1 KB, ~343 tokens)
├── mingw-w64-perl-unicode-linebreak/
│   └── PKGBUILD (40 lines, 1.4 KB, ~402 tokens)
├── mingw-w64-perl-uri/
│   └── PKGBUILD (49 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-perl-variable-magic/
│   └── PKGBUILD (36 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-perl-win32-api/
│   └── PKGBUILD (45 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-perl-win32-console/
│   └── PKGBUILD (36 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-perl-win32-shellquote/
│   └── PKGBUILD (37 lines, 1.2 KB, ~364 tokens)
├── mingw-w64-perl-win32-shortcut/
│   └── PKGBUILD (36 lines, 1.2 KB, ~355 tokens)
├── mingw-w64-perl-win32-tieregistry/
│   └── PKGBUILD (41 lines, 1.2 KB, ~360 tokens)
├── mingw-w64-perl-win32-unicode/
│   └── PKGBUILD (39 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-perl-win32-winerror/
│   └── PKGBUILD (36 lines, 1.2 KB, ~355 tokens)
├── mingw-w64-perl-win32api-registry/
│   └── PKGBUILD (35 lines, 1.1 KB, ~344 tokens)
├── mingw-w64-perl-www-robotrules/
│   └── PKGBUILD (38 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-perl-xml-libxml/
│   └── PKGBUILD (45 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-perl-xml-libxml-simple/
│   └── PKGBUILD (38 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-perl-xml-libxslt/
│   └── PKGBUILD (51 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-perl-xml-namespacesupport/
│   └── PKGBUILD (37 lines, 1.2 KB, ~367 tokens)
├── mingw-w64-perl-xml-parser/
│   └── PKGBUILD (44 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-perl-xml-sax/
│   └── PKGBUILD (40 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-perl-xml-sax-base/
│   └── PKGBUILD (36 lines, 1.1 KB, ~340 tokens)
├── mingw-w64-perl-xml-writer/
│   └── PKGBUILD (36 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-perl-yaml-tiny/
│   └── PKGBUILD (36 lines, 1.2 KB, ~361 tokens)
├── mingw-w64-petsc/
│   └── PKGBUILD (282 lines, 9.9 KB, ~3.0k tokens)
├── mingw-w64-pgmodeler/
│   └── PKGBUILD (121 lines, 4.4 KB, ~1.3k tokens)
├── mingw-w64-phodav/
│   └── PKGBUILD (56 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-phonon/
│   └── PKGBUILD (76 lines, 2.3 KB, ~651 tokens)
├── mingw-w64-physfs/
│   └── PKGBUILD (52 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-picosha2/
│   └── PKGBUILD (23 lines, 823 B, ~246 tokens)
├── mingw-w64-picotool/
│   └── PKGBUILD (62 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-pidgin/
│   └── PKGBUILD (102 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-pikchr/
│   └── PKGBUILD (41 lines, 1.3 KB, ~390 tokens)
├── mingw-w64-pinact/
│   └── PKGBUILD (57 lines, 2.2 KB, ~660 tokens)
├── mingw-w64-pinentry/
│   └── PKGBUILD (73 lines, 2.3 KB, ~664 tokens)
├── mingw-w64-pixi/
│   └── PKGBUILD (76 lines, 2.3 KB, ~701 tokens)
├── mingw-w64-pixman/
│   └── PKGBUILD (61 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-pkcs11-helper/
│   └── PKGBUILD (61 lines, 1.5 KB, ~474 tokens)
├── mingw-w64-pkgconf/
│   └── PKGBUILD (71 lines, 2.1 KB, ~664 tokens)
├── mingw-w64-planarity/
│   └── PKGBUILD (55 lines, 1.4 KB, ~441 tokens)
├── mingw-w64-plantri/
│   └── PKGBUILD (61 lines, 2.0 KB, ~601 tokens)
├── mingw-w64-plasma-activities/
│   └── PKGBUILD (71 lines, 2.3 KB, ~636 tokens)
├── mingw-w64-plfit/
│   └── PKGBUILD (70 lines, 2.0 KB, ~604 tokens)
├── mingw-w64-plplot/
│   └── PKGBUILD (203 lines, 8.7 KB, ~2.5k tokens)
├── mingw-w64-plutosvg/
│   └── PKGBUILD (64 lines, 2.6 KB, ~773 tokens)
├── mingw-w64-plutovg/
│   └── PKGBUILD (52 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-pm2/
│   └── PKGBUILD (31 lines, 963 B, ~288 tokens)
├── mingw-w64-png2ico/
│   └── PKGBUILD (40 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-pngcrush/
│   └── PKGBUILD (49 lines, 1.6 KB, ~457 tokens)
├── mingw-w64-pngnq/
│   └── PKGBUILD (57 lines, 1.7 KB, ~487 tokens)
├── mingw-w64-pngquant/
│   └── PKGBUILD (50 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-pnpm/
│   └── PKGBUILD (60 lines, 2.2 KB, ~667 tokens)
├── mingw-w64-pocl/
│   └── PKGBUILD (146 lines, 6.2 KB, ~1.7k tokens)
├── mingw-w64-poco/
│   └── PKGBUILD (122 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-podman/
│   └── PKGBUILD (93 lines, 2.9 KB, ~873 tokens)
├── mingw-w64-podman-compose/
│   └── PKGBUILD (50 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-podofo/
│   └── PKGBUILD (98 lines, 2.7 KB, ~778 tokens)
├── mingw-w64-polipo/
│   └── PKGBUILD (54 lines, 2.0 KB, ~540 tokens)
├── mingw-w64-polly/
│   └── PKGBUILD (76 lines, 2.6 KB, ~744 tokens)
├── mingw-w64-polyclipping/
│   └── PKGBUILD (45 lines, 1.4 KB, ~389 tokens)
├── mingw-w64-poppler/
│   └── PKGBUILD (173 lines, 5.2 KB, ~1.5k tokens)
├── mingw-w64-poppler-data/
│   └── PKGBUILD (23 lines, 807 B, ~234 tokens)
├── mingw-w64-popt/
│   └── PKGBUILD (76 lines, 2.4 KB, ~670 tokens)
├── mingw-w64-port-scanner/
│   └── PKGBUILD (64 lines, 2.2 KB, ~638 tokens)
├── mingw-w64-portablexdr/
│   └── PKGBUILD (54 lines, 1.6 KB, ~494 tokens)
├── mingw-w64-portaudio/
│   └── PKGBUILD (114 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-portmidi/
│   └── PKGBUILD (66 lines, 2.0 KB, ~595 tokens)
├── mingw-w64-portsmf/
│   └── PKGBUILD (68 lines, 2.0 KB, ~608 tokens)
├── mingw-w64-postgis/
│   └── PKGBUILD (88 lines, 2.4 KB, ~685 tokens)
├── mingw-w64-postgresql/
│   └── PKGBUILD (172 lines, 5.4 KB, ~1.6k tokens)
├── mingw-w64-postgresql-16/
│   └── PKGBUILD (195 lines, 7.3 KB, ~2.1k tokens)
├── mingw-w64-potrace/
│   └── PKGBUILD (50 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-powerpc-apple-macos-binutils/
│   └── PKGBUILD (49 lines, 1.3 KB, ~410 tokens)
├── mingw-w64-powersession-rs/
│   └── PKGBUILD (48 lines, 1.1 KB, ~346 tokens)
├── mingw-w64-ppl/
│   └── PKGBUILD (91 lines, 2.7 KB, ~796 tokens)
├── mingw-w64-pqp/
│   └── PKGBUILD (47 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-pragtical/
│   └── PKGBUILD (67 lines, 1.9 KB, ~553 tokens)
├── mingw-w64-precice/
│   └── PKGBUILD (93 lines, 2.9 KB, ~827 tokens)
├── mingw-w64-prek/
│   └── PKGBUILD (52 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-premake/
│   └── PKGBUILD (79 lines, 2.0 KB, ~604 tokens)
├── mingw-w64-premake4/
│   └── PKGBUILD (30 lines, 886 B, ~259 tokens)
├── mingw-w64-prettier/
│   └── PKGBUILD (41 lines, 1.6 KB, ~448 tokens)
├── mingw-w64-prettier-ada/
│   └── PKGBUILD (45 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-primecount/
│   └── PKGBUILD (68 lines, 2.1 KB, ~603 tokens)
├── mingw-w64-primesieve/
│   └── PKGBUILD (55 lines, 1.5 KB, ~442 tokens)
├── mingw-w64-prison/
│   └── PKGBUILD (69 lines, 2.2 KB, ~643 tokens)
├── mingw-w64-prjtrellis/
│   └── PKGBUILD (83 lines, 2.7 KB, ~782 tokens)
├── mingw-w64-procs/
│   └── PKGBUILD (57 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-proj/
│   └── PKGBUILD (68 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-projectchrono/
│   └── PKGBUILD (137 lines, 4.7 KB, ~1.3k tokens)
├── mingw-w64-protobuf/
│   └── PKGBUILD (101 lines, 3.5 KB, ~953 tokens)
├── mingw-w64-protobuf-c/
│   └── PKGBUILD (52 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-psmux/
│   └── PKGBUILD (54 lines, 1.3 KB, ~381 tokens)
├── mingw-w64-ptex/
│   └── PKGBUILD (103 lines, 3.0 KB, ~859 tokens)
├── mingw-w64-pugixml/
│   └── PKGBUILD (68 lines, 2.0 KB, ~571 tokens)
├── mingw-w64-pulseaudio/
│   └── PKGBUILD (87 lines, 3.0 KB, ~832 tokens)
├── mingw-w64-pupnp/
│   └── PKGBUILD (100 lines, 2.8 KB, ~803 tokens)
├── mingw-w64-purpose/
│   └── PKGBUILD (74 lines, 2.4 KB, ~681 tokens)
├── mingw-w64-putty/
│   └── PKGBUILD (65 lines, 2.1 KB, ~642 tokens)
├── mingw-w64-putty-ssh/
│   └── PKGBUILD (27 lines, 851 B, ~252 tokens)
├── mingw-w64-pybind11/
│   └── PKGBUILD (69 lines, 2.5 KB, ~767 tokens)
├── mingw-w64-pybind11-json/
│   └── PKGBUILD (41 lines, 1.2 KB, ~355 tokens)
├── mingw-w64-pycairo/
│   └── PKGBUILD (72 lines, 1.8 KB, ~560 tokens)
├── mingw-w64-pygobject/
│   └── PKGBUILD (52 lines, 1.7 KB, ~478 tokens)
├── mingw-w64-pyinstaller/
│   └── PKGBUILD (69 lines, 2.5 KB, ~720 tokens)
├── mingw-w64-pyinstaller-hooks-contrib/
│   └── PKGBUILD (46 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-pymol/
│   └── PKGBUILD (67 lines, 2.6 KB, ~732 tokens)
├── mingw-w64-pyqt-builder/
│   └── PKGBUILD (62 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-pyqt5/
│   └── PKGBUILD (95 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-pyqt5-3d/
│   └── PKGBUILD (49 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-pyqt5-sip/
│   └── PKGBUILD (44 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-pyqt6/
│   └── PKGBUILD (84 lines, 2.5 KB, ~750 tokens)
├── mingw-w64-pyqt6-sip/
│   └── PKGBUILD (43 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-pyright/
│   └── PKGBUILD (32 lines, 940 B, ~280 tokens)
├── mingw-w64-pyside2/
│   └── PKGBUILD (247 lines, 8.8 KB, ~2.5k tokens)
├── mingw-w64-pyside6/
│   └── PKGBUILD (221 lines, 7.7 KB, ~2.2k tokens)
├── mingw-w64-pystring/
│   └── PKGBUILD (43 lines, 1.2 KB, ~373 tokens)
├── mingw-w64-python/
│   └── PKGBUILD (493 lines, 26.3 KB, ~6.6k tokens)
├── mingw-w64-python-aafigure/
│   └── PKGBUILD (63 lines, 2.2 KB, ~638 tokens)
├── mingw-w64-python-absl-py/
│   └── PKGBUILD (47 lines, 1.4 KB, ~443 tokens)
├── mingw-w64-python-aenum/
│   └── PKGBUILD (46 lines, 1.3 KB, ~410 tokens)
├── mingw-w64-python-aio-pika/
│   └── PKGBUILD (50 lines, 1.5 KB, ~469 tokens)
├── mingw-w64-python-aiofiles/
│   └── PKGBUILD (41 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-aiohappyeyeballs/
│   └── PKGBUILD (45 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-python-aiohttp/
│   └── PKGBUILD (74 lines, 2.3 KB, ~676 tokens)
├── mingw-w64-python-aiohttp-cors/
│   └── PKGBUILD (48 lines, 1.4 KB, ~445 tokens)
├── mingw-w64-python-aioquic/
│   └── PKGBUILD (53 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-aioresponses/
│   └── PKGBUILD (59 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-python-aiormq/
│   └── PKGBUILD (49 lines, 1.5 KB, ~456 tokens)
├── mingw-w64-python-aiosignal/
│   └── PKGBUILD (56 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-aiosmtpd/
│   └── PKGBUILD (52 lines, 1.7 KB, ~521 tokens)
├── mingw-w64-python-aiosqlite/
│   └── PKGBUILD (38 lines, 1.4 KB, ~416 tokens)
├── mingw-w64-python-alembic/
│   └── PKGBUILD (55 lines, 1.6 KB, ~474 tokens)
├── mingw-w64-python-altgraph/
│   └── PKGBUILD (39 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-python-amqp/
│   └── PKGBUILD (55 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-annotated-doc/
│   └── PKGBUILD (50 lines, 1.5 KB, ~466 tokens)
├── mingw-w64-python-annotated-types/
│   └── PKGBUILD (53 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-python-anyio/
│   └── PKGBUILD (50 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-anytree/
│   └── PKGBUILD (50 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-python-apipkg/
│   └── PKGBUILD (45 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-appdirs/
│   └── PKGBUILD (42 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-apycula/
│   └── PKGBUILD (43 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-archinfo/
│   └── PKGBUILD (61 lines, 1.8 KB, ~517 tokens)
├── mingw-w64-python-argcomplete/
│   └── PKGBUILD (43 lines, 1.5 KB, ~456 tokens)
├── mingw-w64-python-argon2-cffi-bindings/
│   └── PKGBUILD (58 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-argon2_cffi/
│   └── PKGBUILD (54 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-python-arrow/
│   └── PKGBUILD (48 lines, 1.5 KB, ~465 tokens)
├── mingw-w64-python-asgiref/
│   └── PKGBUILD (56 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-asn1crypto/
│   └── PKGBUILD (38 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-ast-serialize/
│   └── PKGBUILD (66 lines, 2.0 KB, ~603 tokens)
├── mingw-w64-python-astor/
│   └── PKGBUILD (43 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-astroid/
│   └── PKGBUILD (57 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-python-asttokens/
│   └── PKGBUILD (62 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-python-astunparse/
│   └── PKGBUILD (39 lines, 1.5 KB, ~431 tokens)
├── mingw-w64-python-async-lru/
│   └── PKGBUILD (48 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-python-async-timeout/
│   └── PKGBUILD (44 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-python-async_generator/
│   └── PKGBUILD (44 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-asyncpg/
│   └── PKGBUILD (48 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-asyncssh/
│   └── PKGBUILD (50 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-asynctest/
│   └── PKGBUILD (46 lines, 1.5 KB, ~453 tokens)
├── mingw-w64-python-atomicwrites/
│   └── PKGBUILD (44 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-python-atpublic/
│   └── PKGBUILD (53 lines, 1.4 KB, ~438 tokens)
├── mingw-w64-python-attrs/
│   └── PKGBUILD (56 lines, 1.9 KB, ~568 tokens)
├── mingw-w64-python-audioop-lts/
│   └── PKGBUILD (53 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-audioread/
│   └── PKGBUILD (40 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-automat/
│   └── PKGBUILD (40 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-autopage/
│   └── PKGBUILD (53 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-python-autopep8/
│   └── PKGBUILD (40 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-autopxd2/
│   └── PKGBUILD (47 lines, 1.5 KB, ~433 tokens)
├── mingw-w64-python-av/
│   └── PKGBUILD (51 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-awesomeversion/
│   └── PKGBUILD (52 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-python-babel/
│   └── PKGBUILD (54 lines, 1.6 KB, ~498 tokens)
├── mingw-w64-python-bcrypt/
│   └── PKGBUILD (50 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-python-beaker/
│   └── PKGBUILD (47 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-beautifulsoup4/
│   └── PKGBUILD (50 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-python-beniget/
│   └── PKGBUILD (46 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-python-billiard/
│   └── PKGBUILD (55 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-binaryornot/
│   └── PKGBUILD (48 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-python-biopython/
│   └── PKGBUILD (39 lines, 1.4 KB, ~404 tokens)
├── mingw-w64-python-biscuits/
│   └── PKGBUILD (50 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-python-black/
│   └── PKGBUILD (65 lines, 1.9 KB, ~573 tokens)
├── mingw-w64-python-blake3/
│   └── PKGBUILD (54 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-bleach/
│   └── PKGBUILD (42 lines, 1.5 KB, ~434 tokens)
├── mingw-w64-python-blinker/
│   └── PKGBUILD (42 lines, 1.6 KB, ~474 tokens)
├── mingw-w64-python-boolean.py/
│   └── PKGBUILD (43 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-python-bootstrap-flask/
│   └── PKGBUILD (84 lines, 3.0 KB, ~919 tokens)
├── mingw-w64-python-boto3/
│   └── PKGBUILD (50 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-botocore/
│   └── PKGBUILD (60 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-python-bottle/
│   └── PKGBUILD (48 lines, 1.8 KB, ~539 tokens)
├── mingw-w64-python-branca/
│   └── PKGBUILD (47 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-python-breathe/
│   └── PKGBUILD (56 lines, 1.7 KB, ~507 tokens)
├── mingw-w64-python-brotli/
│   └── PKGBUILD (48 lines, 1.4 KB, ~411 tokens)
├── mingw-w64-python-brotlicffi/
│   └── PKGBUILD (48 lines, 1.4 KB, ~423 tokens)
├── mingw-w64-python-bsddb3/
│   └── PKGBUILD (68 lines, 2.2 KB, ~645 tokens)
├── mingw-w64-python-build/
│   └── PKGBUILD (60 lines, 1.7 KB, ~524 tokens)
├── mingw-w64-python-cabarchive/
│   └── PKGBUILD (55 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-cachecontrol/
│   └── PKGBUILD (48 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-python-cached-property/
│   └── PKGBUILD (39 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-python-cachetools/
│   └── PKGBUILD (57 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-cachy/
│   └── PKGBUILD (48 lines, 1.6 KB, ~498 tokens)
├── mingw-w64-python-calver/
│   └── PKGBUILD (45 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-can/
│   └── PKGBUILD (71 lines, 2.5 KB, ~715 tokens)
├── mingw-w64-python-cattrs/
│   └── PKGBUILD (48 lines, 1.5 KB, ~464 tokens)
├── mingw-w64-python-celery/
│   └── PKGBUILD (84 lines, 2.8 KB, ~809 tokens)
├── mingw-w64-python-cerberus/
│   └── PKGBUILD (44 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-certifi/
│   └── PKGBUILD (44 lines, 1.4 KB, ~415 tokens)
├── mingw-w64-python-cffi/
│   └── PKGBUILD (53 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-python-cfgv/
│   └── PKGBUILD (43 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-chardet/
│   └── PKGBUILD (50 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-charset-normalizer/
│   └── PKGBUILD (54 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-python-cleo/
│   └── PKGBUILD (48 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-python-click/
│   └── PKGBUILD (109 lines, 3.4 KB, ~977 tokens)
├── mingw-w64-python-click-default-group/
│   └── PKGBUILD (53 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-python-click-didyoumean/
│   └── PKGBUILD (39 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-python-click-plugins/
│   └── PKGBUILD (55 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-python-click-repl/
│   └── PKGBUILD (49 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-python-cliff/
│   └── PKGBUILD (66 lines, 2.1 KB, ~603 tokens)
├── mingw-w64-python-cloudpickle/
│   └── PKGBUILD (50 lines, 2.1 KB, ~600 tokens)
├── mingw-w64-python-cloup/
│   └── PKGBUILD (55 lines, 1.5 KB, ~467 tokens)
├── mingw-w64-python-cmap/
│   └── PKGBUILD (41 lines, 1.3 KB, ~394 tokens)
├── mingw-w64-python-cmd2/
│   └── PKGBUILD (62 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-python-codespell/
│   └── PKGBUILD (51 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-python-colorama/
│   └── PKGBUILD (58 lines, 1.8 KB, ~535 tokens)
├── mingw-w64-python-colored-traceback/
│   └── PKGBUILD (41 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-coloredlogs/
│   └── PKGBUILD (41 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-colorlog/
│   └── PKGBUILD (40 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-python-colour-science/
│   └── PKGBUILD (57 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-python-comm/
│   └── PKGBUILD (52 lines, 1.5 KB, ~467 tokens)
├── mingw-w64-python-commonmark/
│   └── PKGBUILD (39 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-comtypes/
│   └── PKGBUILD (52 lines, 1.5 KB, ~467 tokens)
├── mingw-w64-python-conan/
│   └── PKGBUILD (60 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-python-conan-server/
│   └── PKGBUILD (63 lines, 2.0 KB, ~590 tokens)
├── mingw-w64-python-configargparse/
│   └── PKGBUILD (45 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-constantly/
│   └── PKGBUILD (42 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-python-contextlib2/
│   └── PKGBUILD (37 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-contourpy/
│   └── PKGBUILD (58 lines, 1.9 KB, ~553 tokens)
├── mingw-w64-python-conway-polynomials/
│   └── PKGBUILD (51 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-python-cookiecutter/
│   └── PKGBUILD (72 lines, 2.2 KB, ~649 tokens)
├── mingw-w64-python-coverage/
│   └── PKGBUILD (47 lines, 1.5 KB, ~442 tokens)
├── mingw-w64-python-cppy/
│   └── PKGBUILD (46 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-python-cryptography/
│   └── PKGBUILD (66 lines, 2.5 KB, ~690 tokens)
├── mingw-w64-python-cssselect/
│   └── PKGBUILD (44 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-python-cssselect2/
│   └── PKGBUILD (47 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-csv23/
│   └── PKGBUILD (49 lines, 1.7 KB, ~506 tokens)
├── mingw-w64-python-customtkinter/
│   └── PKGBUILD (49 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-python-cvxopt/
│   └── PKGBUILD (80 lines, 3.1 KB, ~829 tokens)
├── mingw-w64-python-cx-freeze/
│   └── PKGBUILD (96 lines, 3.0 KB, ~889 tokens)
├── mingw-w64-python-cx-logging/
│   └── PKGBUILD (48 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-cycler/
│   └── PKGBUILD (44 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-cysignals/
│   └── PKGBUILD (59 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-python-darkdetect/
│   └── PKGBUILD (41 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-python-databases/
│   └── PKGBUILD (49 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-dateutil/
│   └── PKGBUILD (61 lines, 1.9 KB, ~545 tokens)
├── mingw-w64-python-ddt/
│   └── PKGBUILD (53 lines, 1.6 KB, ~494 tokens)
├── mingw-w64-python-debtcollector/
│   └── PKGBUILD (61 lines, 2.0 KB, ~574 tokens)
├── mingw-w64-python-debugpy/
│   └── PKGBUILD (53 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-decorator/
│   └── PKGBUILD (47 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-python-decouple/
│   └── PKGBUILD (39 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-python-defusexml/
│   └── PKGBUILD (42 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-python-dependency-groups/
│   └── PKGBUILD (66 lines, 1.9 KB, ~579 tokens)
├── mingw-w64-python-deprecated/
│   └── PKGBUILD (51 lines, 1.6 KB, ~490 tokens)
├── mingw-w64-python-deprecation/
│   └── PKGBUILD (44 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-diff-match-patch/
│   └── PKGBUILD (41 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-dill/
│   └── PKGBUILD (43 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-distlib/
│   └── PKGBUILD (104 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-python-distro/
│   └── PKGBUILD (42 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-python-django/
│   └── PKGBUILD (64 lines, 2.1 KB, ~611 tokens)
├── mingw-w64-python-dnspython/
│   └── PKGBUILD (67 lines, 2.0 KB, ~603 tokens)
├── mingw-w64-python-docopt/
│   └── PKGBUILD (35 lines, 1.2 KB, ~358 tokens)
├── mingw-w64-python-docstring-to-markdown/
│   └── PKGBUILD (48 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-docutils/
│   └── PKGBUILD (60 lines, 2.0 KB, ~619 tokens)
├── mingw-w64-python-docx/
│   └── PKGBUILD (47 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-python-docxcompose/
│   └── PKGBUILD (49 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-docxtpl/
│   └── PKGBUILD (55 lines, 1.8 KB, ~535 tokens)
├── mingw-w64-python-dotenv/
│   └── PKGBUILD (47 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-dotty-dict/
│   └── PKGBUILD (44 lines, 1.3 KB, ~401 tokens)
├── mingw-w64-python-dulwich/
│   └── PKGBUILD (60 lines, 1.8 KB, ~566 tokens)
├── mingw-w64-python-dunamai/
│   └── PKGBUILD (44 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-python-e3-core/
│   └── PKGBUILD (52 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-python-ecdsa/
│   └── PKGBUILD (39 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-editables/
│   └── PKGBUILD (48 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-elastic-transport/
│   └── PKGBUILD (56 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-elasticsearch/
│   └── PKGBUILD (47 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-python-elementpath/
│   └── PKGBUILD (49 lines, 1.6 KB, ~487 tokens)
├── mingw-w64-python-email-validator/
│   └── PKGBUILD (48 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-python-emoji/
│   └── PKGBUILD (46 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-entrypoints/
│   └── PKGBUILD (45 lines, 1.4 KB, ~406 tokens)
├── mingw-w64-python-et-xmlfile/
│   └── PKGBUILD (39 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-python-eventlet/
│   └── PKGBUILD (77 lines, 2.3 KB, ~687 tokens)
├── mingw-w64-python-execnet/
│   └── PKGBUILD (37 lines, 1.4 KB, ~407 tokens)
├── mingw-w64-python-executing/
│   └── PKGBUILD (64 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-expandvars/
│   └── PKGBUILD (54 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-fabric/
│   └── PKGBUILD (47 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-python-faker/
│   └── PKGBUILD (62 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-python-fastapi/
│   └── PKGBUILD (63 lines, 2.3 KB, ~665 tokens)
├── mingw-w64-python-fastcrc/
│   └── PKGBUILD (45 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-fasteners/
│   └── PKGBUILD (44 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-python-fastexcel/
│   └── PKGBUILD (49 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-fastjsonschema/
│   └── PKGBUILD (56 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-feedgenerator/
│   └── PKGBUILD (55 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-python-fido2/
│   └── PKGBUILD (48 lines, 1.7 KB, ~495 tokens)
├── mingw-w64-python-filelock/
│   └── PKGBUILD (61 lines, 1.9 KB, ~553 tokens)
├── mingw-w64-python-findpython/
│   └── PKGBUILD (57 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-fire/
│   └── PKGBUILD (39 lines, 1.5 KB, ~434 tokens)
├── mingw-w64-python-fixtures/
│   └── PKGBUILD (52 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-flake8/
│   └── PKGBUILD (61 lines, 1.8 KB, ~528 tokens)
├── mingw-w64-python-flaky/
│   └── PKGBUILD (38 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-flasgger/
│   └── PKGBUILD (59 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-python-flask/
│   └── PKGBUILD (48 lines, 1.8 KB, ~518 tokens)
├── mingw-w64-python-flask-babel/
│   └── PKGBUILD (93 lines, 3.3 KB, ~1.0k tokens)
├── mingw-w64-python-flask-cors/
│   └── PKGBUILD (48 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-python-flask-login/
│   └── PKGBUILD (53 lines, 1.9 KB, ~545 tokens)
├── mingw-w64-python-flask-marshmallow/
│   └── PKGBUILD (48 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-python-flask-migrate/
│   └── PKGBUILD (80 lines, 2.5 KB, ~756 tokens)
├── mingw-w64-python-flask-sqlalchemy/
│   └── PKGBUILD (100 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-python-flask-wtf/
│   └── PKGBUILD (88 lines, 3.3 KB, ~996 tokens)
├── mingw-w64-python-flexcache/
│   └── PKGBUILD (48 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-flexmock/
│   └── PKGBUILD (45 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-python-flexparser/
│   └── PKGBUILD (48 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-flit/
│   └── PKGBUILD (87 lines, 2.6 KB, ~775 tokens)
├── mingw-w64-python-flit-core/
│   └── PKGBUILD (46 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-python-folium/
│   └── PKGBUILD (50 lines, 1.6 KB, ~474 tokens)
├── mingw-w64-python-fonttools/
│   └── PKGBUILD (75 lines, 2.6 KB, ~753 tokens)
├── mingw-w64-python-ford/
│   └── PKGBUILD (57 lines, 2.2 KB, ~636 tokens)
├── mingw-w64-python-formulaic/
│   └── PKGBUILD (47 lines, 1.6 KB, ~458 tokens)
├── mingw-w64-python-fortls/
│   └── PKGBUILD (48 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-fpdf2/
│   └── PKGBUILD (48 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-fprettify/
│   └── PKGBUILD (43 lines, 1.4 KB, ~419 tokens)
├── mingw-w64-python-freetype-py/
│   └── PKGBUILD (59 lines, 2.0 KB, ~581 tokens)
├── mingw-w64-python-freeze-core/
│   └── PKGBUILD (89 lines, 2.5 KB, ~748 tokens)
├── mingw-w64-python-freezegun/
│   └── PKGBUILD (49 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-python-frozenlist/
│   └── PKGBUILD (58 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-python-fsspec/
│   └── PKGBUILD (53 lines, 1.7 KB, ~504 tokens)
├── mingw-w64-python-ftfy/
│   └── PKGBUILD (36 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-python-func-timeout/
│   └── PKGBUILD (46 lines, 1.5 KB, ~459 tokens)
├── mingw-w64-python-funcy/
│   └── PKGBUILD (43 lines, 1.2 KB, ~383 tokens)
├── mingw-w64-python-future/
│   └── PKGBUILD (44 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-fypp/
│   └── PKGBUILD (49 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-gast/
│   └── PKGBUILD (44 lines, 1.3 KB, ~410 tokens)
├── mingw-w64-python-geoalchemy2/
│   └── PKGBUILD (63 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-python-geographiclib/
│   └── PKGBUILD (79 lines, 2.7 KB, ~801 tokens)
├── mingw-w64-python-glad/
│   └── PKGBUILD (42 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-glcontext/
│   └── PKGBUILD (44 lines, 1.3 KB, ~397 tokens)
├── mingw-w64-python-glfw/
│   └── PKGBUILD (47 lines, 1.4 KB, ~416 tokens)
├── mingw-w64-python-gmpy2/
│   └── PKGBUILD (58 lines, 1.9 KB, ~553 tokens)
├── mingw-w64-python-google-api-core/
│   └── PKGBUILD (52 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-python-google-auth/
│   └── PKGBUILD (76 lines, 2.6 KB, ~767 tokens)
├── mingw-w64-python-google-auth-httplib2/
│   └── PKGBUILD (60 lines, 2.0 KB, ~589 tokens)
├── mingw-w64-python-google-auth-oauthlib/
│   └── PKGBUILD (63 lines, 2.0 KB, ~603 tokens)
├── mingw-w64-python-google-cloud-core/
│   └── PKGBUILD (50 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-python-google-cloud-storage/
│   └── PKGBUILD (51 lines, 2.0 KB, ~597 tokens)
├── mingw-w64-python-google-crc32c/
│   └── PKGBUILD (46 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-google-resumable-media/
│   └── PKGBUILD (46 lines, 1.7 KB, ~495 tokens)
├── mingw-w64-python-googleapis-common-protos/
│   └── PKGBUILD (47 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-python-gpgme/
│   └── PKGBUILD (63 lines, 2.2 KB, ~615 tokens)
├── mingw-w64-python-graphviz/
│   └── PKGBUILD (46 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-greenlet/
│   └── PKGBUILD (46 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-gssapi/
│   └── PKGBUILD (88 lines, 3.0 KB, ~866 tokens)
├── mingw-w64-python-gym/
│   └── PKGBUILD (42 lines, 1.6 KB, ~456 tokens)
├── mingw-w64-python-gym-notices/
│   └── PKGBUILD (43 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-python-h11/
│   └── PKGBUILD (43 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-python-h2/
│   └── PKGBUILD (41 lines, 1.4 KB, ~400 tokens)
├── mingw-w64-python-h5py/
│   └── PKGBUILD (67 lines, 2.2 KB, ~613 tokens)
├── mingw-w64-python-h5pyd/
│   └── PKGBUILD (58 lines, 2.1 KB, ~596 tokens)
├── mingw-w64-python-hacking/
│   └── PKGBUILD (63 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-python-halo/
│   └── PKGBUILD (41 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-hatch-build-scripts/
│   └── PKGBUILD (59 lines, 1.8 KB, ~553 tokens)
├── mingw-w64-python-hatch-fancy-pypi-readme/
│   └── PKGBUILD (46 lines, 1.5 KB, ~459 tokens)
├── mingw-w64-python-hatch-jupyter-builder/
│   └── PKGBUILD (57 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-hatch-nodejs-version/
│   └── PKGBUILD (51 lines, 1.5 KB, ~472 tokens)
├── mingw-w64-python-hatch-vcs/
│   └── PKGBUILD (46 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-python-hatchling/
│   └── PKGBUILD (52 lines, 1.7 KB, ~504 tokens)
├── mingw-w64-python-headerkit/
│   └── PKGBUILD (50 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-python-hid/
│   └── PKGBUILD (45 lines, 1.3 KB, ~397 tokens)
├── mingw-w64-python-hightime/
│   └── PKGBUILD (53 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-hiredis/
│   └── PKGBUILD (61 lines, 1.6 KB, ~490 tokens)
├── mingw-w64-python-hjson/
│   └── PKGBUILD (45 lines, 1.3 KB, ~401 tokens)
├── mingw-w64-python-hpack/
│   └── PKGBUILD (38 lines, 1.3 KB, ~383 tokens)
├── mingw-w64-python-html5lib/
│   └── PKGBUILD (62 lines, 2.3 KB, ~653 tokens)
├── mingw-w64-python-httpcore/
│   └── PKGBUILD (46 lines, 2.0 KB, ~558 tokens)
├── mingw-w64-python-httplib2/
│   └── PKGBUILD (58 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-httpretty/
│   └── PKGBUILD (43 lines, 1.4 KB, ~434 tokens)
├── mingw-w64-python-httpx/
│   └── PKGBUILD (53 lines, 2.3 KB, ~652 tokens)
├── mingw-w64-python-humanfriendly/
│   └── PKGBUILD (41 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-python-humanize/
│   └── PKGBUILD (70 lines, 1.9 KB, ~579 tokens)
├── mingw-w64-python-hunter/
│   └── PKGBUILD (50 lines, 1.9 KB, ~540 tokens)
├── mingw-w64-python-hyperframe/
│   └── PKGBUILD (37 lines, 1.3 KB, ~390 tokens)
├── mingw-w64-python-hyperlink/
│   └── PKGBUILD (38 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-python-hypothesis/
│   └── PKGBUILD (80 lines, 2.4 KB, ~697 tokens)
├── mingw-w64-python-icecream/
│   └── PKGBUILD (50 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-icu/
│   └── PKGBUILD (66 lines, 2.0 KB, ~591 tokens)
├── mingw-w64-python-id/
│   └── PKGBUILD (41 lines, 1.3 KB, ~408 tokens)
├── mingw-w64-python-identify/
│   └── PKGBUILD (54 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-python-idna/
│   └── PKGBUILD (49 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-ifaddr/
│   └── PKGBUILD (49 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-python-ifstools/
│   └── PKGBUILD (50 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-igraph/
│   └── PKGBUILD (37 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-python-imagecodecs/
│   └── PKGBUILD (87 lines, 3.8 KB, ~1.0k tokens)
├── mingw-w64-python-imageio/
│   └── PKGBUILD (62 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-python-imagesize/
│   └── PKGBUILD (42 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-python-imbalanced-learn/
│   └── PKGBUILD (45 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-imgviz/
│   └── PKGBUILD (56 lines, 1.6 KB, ~487 tokens)
├── mingw-w64-python-immutabledict/
│   └── PKGBUILD (47 lines, 1.4 KB, ~408 tokens)
├── mingw-w64-python-immutables/
│   └── PKGBUILD (41 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-python-importlib-metadata/
│   └── PKGBUILD (57 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-importlib_resources/
│   └── PKGBUILD (47 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-python-incremental/
│   └── PKGBUILD (41 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-inflect/
│   └── PKGBUILD (59 lines, 1.8 KB, ~537 tokens)
├── mingw-w64-python-inflection/
│   └── PKGBUILD (38 lines, 1.3 KB, ~394 tokens)
├── mingw-w64-python-iniconfig/
│   └── PKGBUILD (46 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-installer/
│   └── PKGBUILD (109 lines, 3.9 KB, ~1.1k tokens)
├── mingw-w64-python-interface-meta/
│   └── PKGBUILD (41 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-python-intervaltree/
│   └── PKGBUILD (40 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-invoke/
│   └── PKGBUILD (51 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-python-ipycanvas/
│   └── PKGBUILD (64 lines, 2.0 KB, ~596 tokens)
├── mingw-w64-python-ipykernel/
│   └── PKGBUILD (62 lines, 1.9 KB, ~572 tokens)
├── mingw-w64-python-ipympl/
│   └── PKGBUILD (52 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-python-ipython/
│   └── PKGBUILD (76 lines, 2.4 KB, ~695 tokens)
├── mingw-w64-python-ipython-pygments-lexers/
│   └── PKGBUILD (55 lines, 1.7 KB, ~501 tokens)
├── mingw-w64-python-ipywidgets/
│   └── PKGBUILD (60 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-python-iso8601/
│   └── PKGBUILD (37 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-python-isodate/
│   └── PKGBUILD (42 lines, 1.4 KB, ~408 tokens)
├── mingw-w64-python-isort/
│   └── PKGBUILD (57 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-python-isosurfaces/
│   └── PKGBUILD (38 lines, 1.5 KB, ~432 tokens)
├── mingw-w64-python-itsdangerous/
│   └── PKGBUILD (45 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-jaraco.classes/
│   └── PKGBUILD (53 lines, 1.7 KB, ~515 tokens)
├── mingw-w64-python-jaraco.context/
│   └── PKGBUILD (49 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-python-jaraco.envs/
│   └── PKGBUILD (60 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-python-jaraco.functools/
│   └── PKGBUILD (49 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-jaraco.itertools/
│   └── PKGBUILD (43 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-jaraco.path/
│   └── PKGBUILD (46 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-python-jedi/
│   └── PKGBUILD (56 lines, 1.6 KB, ~499 tokens)
├── mingw-w64-python-jeepney/
│   └── PKGBUILD (44 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-python-jellyfish/
│   └── PKGBUILD (54 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-jinja/
│   └── PKGBUILD (41 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-jinja-docs/
│   └── PKGBUILD (39 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-jmespath/
│   └── PKGBUILD (56 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-joblib/
│   └── PKGBUILD (52 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-python-json-logger/
│   └── PKGBUILD (41 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-python-json-rpc/
│   └── PKGBUILD (35 lines, 1.2 KB, ~371 tokens)
├── mingw-w64-python-json5/
│   └── PKGBUILD (46 lines, 1.4 KB, ~413 tokens)
├── mingw-w64-python-jsonpatch/
│   └── PKGBUILD (63 lines, 1.9 KB, ~581 tokens)
├── mingw-w64-python-jsonpath-ng/
│   └── PKGBUILD (56 lines, 1.6 KB, ~499 tokens)
├── mingw-w64-python-jsonpointer/
│   └── PKGBUILD (54 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-jsonrpc-server/
│   └── PKGBUILD (74 lines, 2.1 KB, ~628 tokens)
├── mingw-w64-python-jsonschema/
│   └── PKGBUILD (69 lines, 2.3 KB, ~679 tokens)
├── mingw-w64-python-jsonschema-specifications/
│   └── PKGBUILD (47 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-jupyter-builder/
│   └── PKGBUILD (50 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-jupyter-events/
│   └── PKGBUILD (63 lines, 2.0 KB, ~602 tokens)
├── mingw-w64-python-jupyter-lsp/
│   └── PKGBUILD (48 lines, 1.4 KB, ~435 tokens)
├── mingw-w64-python-jupyter-nbclassic/
│   └── PKGBUILD (75 lines, 2.6 KB, ~750 tokens)
├── mingw-w64-python-jupyter-nbclient/
│   └── PKGBUILD (52 lines, 1.7 KB, ~504 tokens)
├── mingw-w64-python-jupyter-nbconvert/
│   └── PKGBUILD (68 lines, 2.4 KB, ~691 tokens)
├── mingw-w64-python-jupyter-nbformat/
│   └── PKGBUILD (45 lines, 1.6 KB, ~458 tokens)
├── mingw-w64-python-jupyter-nbviewer/
│   └── PKGBUILD (58 lines, 1.9 KB, ~578 tokens)
├── mingw-w64-python-jupyter-server-terminals/
│   └── PKGBUILD (54 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-jupyter-threejs-sage/
│   └── PKGBUILD (39 lines, 1.4 KB, ~406 tokens)
├── mingw-w64-python-jupyter_client/
│   └── PKGBUILD (50 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-jupyter_console/
│   └── PKGBUILD (53 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-python-jupyter_core/
│   └── PKGBUILD (67 lines, 2.2 KB, ~642 tokens)
├── mingw-w64-python-jupyter_notebook/
│   └── PKGBUILD (57 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-python-jupyter_notebook_shim/
│   └── PKGBUILD (46 lines, 1.4 KB, ~413 tokens)
├── mingw-w64-python-jupyter_server/
│   └── PKGBUILD (67 lines, 2.4 KB, ~691 tokens)
├── mingw-w64-python-jupyterlab/
│   └── PKGBUILD (61 lines, 2.0 KB, ~585 tokens)
├── mingw-w64-python-jupyterlab-pygments/
│   └── PKGBUILD (46 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-jupyterlab-server/
│   └── PKGBUILD (55 lines, 1.7 KB, ~512 tokens)
├── mingw-w64-python-jupyterlab-widgets/
│   └── PKGBUILD (50 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-python-kbinxml/
│   └── PKGBUILD (45 lines, 1.3 KB, ~407 tokens)
├── mingw-w64-python-keras/
│   └── PKGBUILD (59 lines, 1.9 KB, ~559 tokens)
├── mingw-w64-python-keras_applications/
│   └── PKGBUILD (40 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-keras_preprocessing/
│   └── PKGBUILD (40 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-keyboard/
│   └── PKGBUILD (35 lines, 1.2 KB, ~364 tokens)
├── mingw-w64-python-keyring/
│   └── PKGBUILD (54 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-python-kiwisolver/
│   └── PKGBUILD (56 lines, 1.8 KB, ~537 tokens)
├── mingw-w64-python-kombu/
│   └── PKGBUILD (82 lines, 3.2 KB, ~898 tokens)
├── mingw-w64-python-labelme/
│   └── PKGBUILD (72 lines, 2.6 KB, ~764 tokens)
├── mingw-w64-python-lark-parser/
│   └── PKGBUILD (45 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-lazy-importer/
│   └── PKGBUILD (42 lines, 1.2 KB, ~382 tokens)
├── mingw-w64-python-lazy-loader/
│   └── PKGBUILD (58 lines, 2.0 KB, ~596 tokens)
├── mingw-w64-python-lazy-object-proxy/
│   └── PKGBUILD (44 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-ldap/
│   └── PKGBUILD (50 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-python-ldap3/
│   └── PKGBUILD (43 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-levenshtein/
│   └── PKGBUILD (47 lines, 1.7 KB, ~486 tokens)
├── mingw-w64-python-lhafile/
│   └── PKGBUILD (39 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-librosa/
│   └── PKGBUILD (66 lines, 2.1 KB, ~606 tokens)
├── mingw-w64-python-librt/
│   └── PKGBUILD (66 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-libsass/
│   └── PKGBUILD (52 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-python-license-expression/
│   └── PKGBUILD (53 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-python-lief/
│   └── PKGBUILD (123 lines, 3.4 KB, ~981 tokens)
├── mingw-w64-python-llvmlite/
│   └── PKGBUILD (84 lines, 2.4 KB, ~718 tokens)
├── mingw-w64-python-lmdb/
│   └── PKGBUILD (68 lines, 1.9 KB, ~576 tokens)
├── mingw-w64-python-log_symbols/
│   └── PKGBUILD (38 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-loguru/
│   └── PKGBUILD (55 lines, 1.7 KB, ~507 tokens)
├── mingw-w64-python-lrcalc/
│   └── PKGBUILD (44 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-lsp-black/
│   └── PKGBUILD (48 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-lsp-jsonrpc/
│   └── PKGBUILD (48 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-lsp-ruff/
│   └── PKGBUILD (52 lines, 1.5 KB, ~472 tokens)
├── mingw-w64-python-lsp-server/
│   └── PKGBUILD (55 lines, 1.8 KB, ~536 tokens)
├── mingw-w64-python-lsprotocol/
│   └── PKGBUILD (53 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-lws/
│   └── PKGBUILD (40 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-python-lxml/
│   └── PKGBUILD (84 lines, 2.7 KB, ~789 tokens)
├── mingw-w64-python-lz4/
│   └── PKGBUILD (51 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-python-lzo/
│   └── PKGBUILD (51 lines, 1.7 KB, ~532 tokens)
├── mingw-w64-python-mako/
│   └── PKGBUILD (54 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-mallard-ducktype/
│   └── PKGBUILD (49 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-python-manhole/
│   └── PKGBUILD (43 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-python-manimpango/
│   └── PKGBUILD (55 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-python-markdown/
│   └── PKGBUILD (55 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-python-markdown-include/
│   └── PKGBUILD (40 lines, 1.6 KB, ~463 tokens)
├── mingw-w64-python-markdown-it-py/
│   └── PKGBUILD (47 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-markdown-math/
│   └── PKGBUILD (44 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-markups/
│   └── PKGBUILD (45 lines, 1.7 KB, ~490 tokens)
├── mingw-w64-python-markupsafe/
│   └── PKGBUILD (55 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-python-marshmallow/
│   └── PKGBUILD (47 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-marshmallow-sqlalchemy/
│   └── PKGBUILD (49 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-python-matplotlib/
│   └── PKGBUILD (74 lines, 2.9 KB, ~801 tokens)
├── mingw-w64-python-matplotlib-inline/
│   └── PKGBUILD (49 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-python-mccabe/
│   └── PKGBUILD (43 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-mdit_py_plugins/
│   └── PKGBUILD (42 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-mdurl/
│   └── PKGBUILD (45 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-memory-allocator/
│   └── PKGBUILD (53 lines, 1.7 KB, ~516 tokens)
├── mingw-w64-python-meshio/
│   └── PKGBUILD (41 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-milc/
│   └── PKGBUILD (62 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-python-mimeparse/
│   └── PKGBUILD (42 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-mingw-ldd/
│   └── PKGBUILD (44 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-python-minio/
│   └── PKGBUILD (60 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-python-mistune/
│   └── PKGBUILD (55 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-ml_dtypes/
│   └── PKGBUILD (52 lines, 1.9 KB, ~545 tokens)
├── mingw-w64-python-mock/
│   └── PKGBUILD (37 lines, 1.3 KB, ~406 tokens)
├── mingw-w64-python-moderngl/
│   └── PKGBUILD (45 lines, 1.4 KB, ~418 tokens)
├── mingw-w64-python-moderngl-window/
│   └── PKGBUILD (49 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-more-itertools/
│   └── PKGBUILD (56 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-mpi4py/
│   └── PKGBUILD (52 lines, 2.4 KB, ~715 tokens)
├── mingw-w64-python-mpmath/
│   └── PKGBUILD (52 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-msgpack/
│   └── PKGBUILD (56 lines, 1.6 KB, ~492 tokens)
├── mingw-w64-python-msgspec/
│   └── PKGBUILD (65 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-python-msilib/
│   └── PKGBUILD (69 lines, 2.0 KB, ~610 tokens)
├── mingw-w64-python-multidict/
│   └── PKGBUILD (56 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-python-multipledispatch/
│   └── PKGBUILD (41 lines, 1.3 KB, ~399 tokens)
├── mingw-w64-python-multiprocess/
│   └── PKGBUILD (44 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-mutagen/
│   └── PKGBUILD (41 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-python-mypy_extensions/
│   └── PKGBUILD (42 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-python-mysqlclient/
│   └── PKGBUILD (59 lines, 1.8 KB, ~521 tokens)
├── mingw-w64-python-myst-parser/
│   └── PKGBUILD (50 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-narwhals/
│   └── PKGBUILD (52 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-natsort/
│   └── PKGBUILD (39 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-nest-asyncio/
│   └── PKGBUILD (47 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-nest-asyncio2/
│   └── PKGBUILD (45 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-netaddr/
│   └── PKGBUILD (60 lines, 1.8 KB, ~554 tokens)
├── mingw-w64-python-netifaces/
│   └── PKGBUILD (46 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-python-networkx/
│   └── PKGBUILD (60 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-python-nh3/
│   └── PKGBUILD (50 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-nidaqmx/
│   └── PKGBUILD (53 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-python-nitypes/
│   └── PKGBUILD (45 lines, 1.3 KB, ~404 tokens)
├── mingw-w64-python-node-semver/
│   └── PKGBUILD (37 lines, 1.3 KB, ~402 tokens)
├── mingw-w64-python-nodeenv/
│   └── PKGBUILD (51 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-nox/
│   └── PKGBUILD (89 lines, 2.7 KB, ~802 tokens)
├── mingw-w64-python-nuitka/
│   └── PKGBUILD (51 lines, 1.5 KB, ~456 tokens)
├── mingw-w64-python-numba/
│   └── PKGBUILD (53 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-numexpr/
│   └── PKGBUILD (59 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-python-numpy/
│   └── PKGBUILD (92 lines, 2.8 KB, ~845 tokens)
├── mingw-w64-python-numpydoc/
│   └── PKGBUILD (49 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-nvchecker/
│   └── PKGBUILD (77 lines, 2.5 KB, ~716 tokens)
├── mingw-w64-python-nvidia-ml/
│   └── PKGBUILD (47 lines, 1.4 KB, ~436 tokens)
├── mingw-w64-python-oauthlib/
│   └── PKGBUILD (53 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-olefile/
│   └── PKGBUILD (43 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-python-openmdao/
│   └── PKGBUILD (48 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-openpyxl/
│   └── PKGBUILD (42 lines, 1.6 KB, ~458 tokens)
├── mingw-w64-python-opentelemetry-api/
│   └── PKGBUILD (55 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-opt_einsum/
│   └── PKGBUILD (40 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-optking/
│   └── PKGBUILD (44 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-optree/
│   └── PKGBUILD (49 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-ordered-set/
│   └── PKGBUILD (38 lines, 1.5 KB, ~432 tokens)
├── mingw-w64-python-os-win/
│   └── PKGBUILD (79 lines, 2.4 KB, ~713 tokens)
├── mingw-w64-python-osam/
│   └── PKGBUILD (52 lines, 1.8 KB, ~523 tokens)
├── mingw-w64-python-oslo-concurrency/
│   └── PKGBUILD (69 lines, 2.2 KB, ~658 tokens)
├── mingw-w64-python-oslo-config/
│   └── PKGBUILD (77 lines, 2.4 KB, ~715 tokens)
├── mingw-w64-python-oslo-context/
│   └── PKGBUILD (63 lines, 1.9 KB, ~582 tokens)
├── mingw-w64-python-oslo-db/
│   └── PKGBUILD (79 lines, 2.5 KB, ~739 tokens)
├── mingw-w64-python-oslo-i18n/
│   └── PKGBUILD (61 lines, 2.0 KB, ~589 tokens)
├── mingw-w64-python-oslo-log/
│   └── PKGBUILD (75 lines, 2.3 KB, ~683 tokens)
├── mingw-w64-python-oslo-serialization/
│   └── PKGBUILD (66 lines, 2.1 KB, ~623 tokens)
├── mingw-w64-python-oslo-utils/
│   └── PKGBUILD (72 lines, 2.3 KB, ~682 tokens)
├── mingw-w64-python-oslotest/
│   └── PKGBUILD (61 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-python-outcome/
│   └── PKGBUILD (43 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-python-overrides/
│   └── PKGBUILD (41 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-python-owslib/
│   └── PKGBUILD (50 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-python-pacdb/
│   └── PKGBUILD (39 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-packageurl-python/
│   └── PKGBUILD (43 lines, 1.3 KB, ~400 tokens)
├── mingw-w64-python-packaging/
│   └── PKGBUILD (52 lines, 1.7 KB, ~519 tokens)
├── mingw-w64-python-pallets-sphinx-themes/
│   └── PKGBUILD (40 lines, 1.6 KB, ~467 tokens)
├── mingw-w64-python-pamqp/
│   └── PKGBUILD (44 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-python-pandas/
│   └── PKGBUILD (76 lines, 2.9 KB, ~834 tokens)
├── mingw-w64-python-pandocfilters/
│   └── PKGBUILD (42 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-paramiko/
│   └── PKGBUILD (47 lines, 1.4 KB, ~435 tokens)
├── mingw-w64-python-parso/
│   └── PKGBUILD (56 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-python-passlib/
│   └── PKGBUILD (43 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-pastel/
│   └── PKGBUILD (48 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-patch-ng/
│   └── PKGBUILD (37 lines, 1.3 KB, ~403 tokens)
├── mingw-w64-python-path/
│   └── PKGBUILD (55 lines, 2.0 KB, ~589 tokens)
├── mingw-w64-python-pathspec/
│   └── PKGBUILD (45 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-python-patool/
│   └── PKGBUILD (73 lines, 2.0 KB, ~589 tokens)
├── mingw-w64-python-patsy/
│   └── PKGBUILD (50 lines, 1.7 KB, ~491 tokens)
├── mingw-w64-python-pbr/
│   └── PKGBUILD (71 lines, 2.3 KB, ~672 tokens)
├── mingw-w64-python-pbs-installer/
│   └── PKGBUILD (48 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-pcpp/
│   └── PKGBUILD (39 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-python-pdfminer/
│   └── PKGBUILD (49 lines, 1.7 KB, ~501 tokens)
├── mingw-w64-python-pdm-backend/
│   └── PKGBUILD (76 lines, 2.3 KB, ~697 tokens)
├── mingw-w64-python-pebble/
│   └── PKGBUILD (56 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-pefile/
│   └── PKGBUILD (53 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-python-pesq/
│   └── PKGBUILD (42 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-python-pexpect/
│   └── PKGBUILD (49 lines, 1.6 KB, ~474 tokens)
├── mingw-w64-python-pgen2/
│   └── PKGBUILD (43 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-pglive/
│   └── PKGBUILD (63 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-python-phitigra/
│   └── PKGBUILD (54 lines, 1.8 KB, ~519 tokens)
├── mingw-w64-python-pi-heif/
│   └── PKGBUILD (49 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-pickleshare/
│   └── PKGBUILD (51 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-pika/
│   └── PKGBUILD (45 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-python-pikepdf/
│   └── PKGBUILD (81 lines, 2.5 KB, ~753 tokens)
├── mingw-w64-python-pillow/
│   └── PKGBUILD (71 lines, 2.6 KB, ~759 tokens)
├── mingw-w64-python-pint/
│   └── PKGBUILD (51 lines, 1.6 KB, ~462 tokens)
├── mingw-w64-python-pip/
│   └── PKGBUILD (68 lines, 2.2 KB, ~638 tokens)
├── mingw-w64-python-pip-tools/
│   └── PKGBUILD (48 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-pipcl/
│   └── PKGBUILD (54 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-python-pipenv/
│   └── PKGBUILD (55 lines, 2.1 KB, ~629 tokens)
├── mingw-w64-python-pipx/
│   └── PKGBUILD (59 lines, 1.9 KB, ~569 tokens)
├── mingw-w64-python-pivy/
│   └── PKGBUILD (74 lines, 2.4 KB, ~680 tokens)
├── mingw-w64-python-pkg-resources/
│   └── PKGBUILD (36 lines, 1.3 KB, ~383 tokens)
├── mingw-w64-python-pkgconfig/
│   └── PKGBUILD (43 lines, 1.5 KB, ~438 tokens)
├── mingw-w64-python-pkginfo/
│   └── PKGBUILD (52 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-platformdirs/
│   └── PKGBUILD (56 lines, 1.8 KB, ~540 tokens)
├── mingw-w64-python-plotly/
│   └── PKGBUILD (49 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-pluggy/
│   └── PKGBUILD (57 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-python-pluginbase/
│   └── PKGBUILD (36 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-python-plumbum/
│   └── PKGBUILD (53 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-python-ply/
│   └── PKGBUILD (38 lines, 1.4 KB, ~406 tokens)
├── mingw-w64-python-poetry/
│   └── PKGBUILD (63 lines, 2.4 KB, ~674 tokens)
├── mingw-w64-python-poetry-core/
│   └── PKGBUILD (55 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-poetry-dynamic-versioning/
│   └── PKGBUILD (52 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-python-poetry-plugin-export/
│   └── PKGBUILD (56 lines, 1.7 KB, ~524 tokens)
├── mingw-w64-python-poetry-plugin-shell/
│   └── PKGBUILD (48 lines, 1.7 KB, ~489 tokens)
├── mingw-w64-python-polars/
│   └── PKGBUILD (135 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-python-pooch/
│   └── PKGBUILD (53 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-pptx/
│   └── PKGBUILD (50 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-python-pre-commit/
│   └── PKGBUILD (77 lines, 2.1 KB, ~640 tokens)
├── mingw-w64-python-pretend/
│   └── PKGBUILD (37 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-python-prettytable/
│   └── PKGBUILD (52 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-python-priority/
│   └── PKGBUILD (38 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-progress/
│   └── PKGBUILD (40 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-prometheus-client/
│   └── PKGBUILD (56 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-python-prompt_toolkit/
│   └── PKGBUILD (46 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-propcache/
│   └── PKGBUILD (49 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-python-proto-plus/
│   └── PKGBUILD (46 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-protobuf/
│   └── PKGBUILD (52 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-python-psleak/
│   └── PKGBUILD (54 lines, 1.9 KB, ~568 tokens)
├── mingw-w64-python-psutil/
│   └── PKGBUILD (85 lines, 3.1 KB, ~859 tokens)
├── mingw-w64-python-psycopg2/
│   └── PKGBUILD (72 lines, 2.0 KB, ~597 tokens)
├── mingw-w64-python-ptpython/
│   └── PKGBUILD (58 lines, 1.7 KB, ~499 tokens)
├── mingw-w64-python-ptyprocess/
│   └── PKGBUILD (39 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-pure-eval/
│   └── PKGBUILD (56 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-purl/
│   └── PKGBUILD (45 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-py-cpuinfo/
│   └── PKGBUILD (45 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-python-py-cpuinfo2/
│   └── PKGBUILD (52 lines, 1.4 KB, ~434 tokens)
├── mingw-w64-python-py2exe/
│   └── PKGBUILD (74 lines, 2.7 KB, ~795 tokens)
├── mingw-w64-python-pyamg/
│   └── PKGBUILD (64 lines, 2.0 KB, ~587 tokens)
├── mingw-w64-python-pyaml/
│   └── PKGBUILD (49 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-python-pyarrow/
│   └── PKGBUILD (64 lines, 2.1 KB, ~583 tokens)
├── mingw-w64-python-pyasn1/
│   └── PKGBUILD (46 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-pyasn1-modules/
│   └── PKGBUILD (39 lines, 1.4 KB, ~429 tokens)
├── mingw-w64-python-pybase64/
│   └── PKGBUILD (55 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-pybox2d/
│   └── PKGBUILD (50 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-python-pycares/
│   └── PKGBUILD (56 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-pycodestyle/
│   └── PKGBUILD (54 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-pycountry/
│   └── PKGBUILD (58 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-pycparser/
│   └── PKGBUILD (52 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-pycryptodome/
│   └── PKGBUILD (56 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-python-pycryptodomex/
│   └── PKGBUILD (47 lines, 1.6 KB, ~463 tokens)
├── mingw-w64-python-pycurl/
│   └── PKGBUILD (62 lines, 1.8 KB, ~537 tokens)
├── mingw-w64-python-pydantic/
│   └── PKGBUILD (65 lines, 2.1 KB, ~605 tokens)
├── mingw-w64-python-pydantic-core/
│   └── PKGBUILD (48 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-python-pydantic-settings/
│   └── PKGBUILD (57 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-pydocstyle/
│   └── PKGBUILD (43 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-python-pydoe2/
│   └── PKGBUILD (44 lines, 1.3 KB, ~407 tokens)
├── mingw-w64-python-pydub/
│   └── PKGBUILD (42 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-pyelftools/
│   └── PKGBUILD (45 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-python-pyfastbti/
│   └── PKGBUILD (45 lines, 1.7 KB, ~498 tokens)
├── mingw-w64-python-pyfasttextureutils/
│   └── PKGBUILD (55 lines, 2.1 KB, ~589 tokens)
├── mingw-w64-python-pyfdt/
│   └── PKGBUILD (35 lines, 1.2 KB, ~370 tokens)
├── mingw-w64-python-pyfilesystem2/
│   └── PKGBUILD (42 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-pyflakes/
│   └── PKGBUILD (58 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-python-pyft232/
│   └── PKGBUILD (45 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-pygad/
│   └── PKGBUILD (41 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-python-pygame/
│   └── PKGBUILD (99 lines, 3.0 KB, ~846 tokens)
├── mingw-w64-python-pygccxml/
│   └── PKGBUILD (46 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-python-pygit2/
│   └── PKGBUILD (50 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-pygithub/
│   └── PKGBUILD (64 lines, 1.9 KB, ~562 tokens)
├── mingw-w64-python-pyglet/
│   └── PKGBUILD (46 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-pyglm/
│   └── PKGBUILD (39 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-pygls/
│   └── PKGBUILD (52 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-pygments/
│   └── PKGBUILD (55 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-python-pygments-docs/
│   └── PKGBUILD (43 lines, 1.3 KB, ~400 tokens)
├── mingw-w64-python-pygments-github-lexers/
│   └── PKGBUILD (48 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-python-pygobject-stubs/
│   └── PKGBUILD (47 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-pyhamcrest/
│   └── PKGBUILD (52 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-pyjwt/
│   └── PKGBUILD (48 lines, 1.3 KB, ~408 tokens)
├── mingw-w64-python-pykwalify/
│   └── PKGBUILD (43 lines, 1.6 KB, ~457 tokens)
├── mingw-w64-python-pylablib/
│   └── PKGBUILD (56 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-python-pylev/
│   └── PKGBUILD (48 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-python-pylint/
│   └── PKGBUILD (82 lines, 2.6 KB, ~749 tokens)
├── mingw-w64-python-pylint-venv/
│   └── PKGBUILD (50 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-pyls-spyder/
│   └── PKGBUILD (46 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-pylsqpack/
│   └── PKGBUILD (46 lines, 1.4 KB, ~415 tokens)
├── mingw-w64-python-pymi/
│   └── PKGBUILD (56 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-pymupdf/
│   └── PKGBUILD (72 lines, 2.3 KB, ~665 tokens)
├── mingw-w64-python-pynacl/
│   └── PKGBUILD (52 lines, 1.6 KB, ~496 tokens)
├── mingw-w64-python-pynndescent/
│   └── PKGBUILD (60 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-pynput/
│   └── PKGBUILD (41 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-pynvim/
│   └── PKGBUILD (41 lines, 1.5 KB, ~434 tokens)
├── mingw-w64-python-pyodbc/
│   └── PKGBUILD (54 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-pyopengl/
│   └── PKGBUILD (54 lines, 1.9 KB, ~561 tokens)
├── mingw-w64-python-pyopengl-accelerate/
│   └── PKGBUILD (51 lines, 1.9 KB, ~546 tokens)
├── mingw-w64-python-pyopenssl/
│   └── PKGBUILD (43 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-pyparsing/
│   └── PKGBUILD (55 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-pyperclip/
│   └── PKGBUILD (39 lines, 1.5 KB, ~423 tokens)
├── mingw-w64-python-pyphen/
│   └── PKGBUILD (55 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-python-pypng/
│   └── PKGBUILD (64 lines, 2.1 KB, ~627 tokens)
├── mingw-w64-python-pyproj/
│   └── PKGBUILD (48 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-pyproject-api/
│   └── PKGBUILD (62 lines, 1.9 KB, ~575 tokens)
├── mingw-w64-python-pyproject-hooks/
│   └── PKGBUILD (41 lines, 1.2 KB, ~380 tokens)
├── mingw-w64-python-pyproject-metadata/
│   └── PKGBUILD (53 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-pyqtgraph/
│   └── PKGBUILD (56 lines, 1.9 KB, ~552 tokens)
├── mingw-w64-python-pyreadline3/
│   └── PKGBUILD (49 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-pyrr/
│   └── PKGBUILD (52 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-pyrsistent/
│   └── PKGBUILD (46 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-python-pyscroll/
│   └── PKGBUILD (37 lines, 1.4 KB, ~416 tokens)
├── mingw-w64-python-pysequoia/
│   └── PKGBUILD (46 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-pyserial/
│   └── PKGBUILD (53 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-pysfcgal/
│   └── PKGBUILD (44 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-pyshp/
│   └── PKGBUILD (44 lines, 1.4 KB, ~405 tokens)
├── mingw-w64-python-pysocks/
│   └── PKGBUILD (39 lines, 1.5 KB, ~430 tokens)
├── mingw-w64-python-pyspnego/
│   └── PKGBUILD (56 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-pystac/
│   └── PKGBUILD (40 lines, 1.4 KB, ~411 tokens)
├── mingw-w64-python-pystemmer/
│   └── PKGBUILD (50 lines, 1.8 KB, ~518 tokens)
├── mingw-w64-python-pystoi/
│   └── PKGBUILD (42 lines, 1.4 KB, ~406 tokens)
├── mingw-w64-python-pyswarm/
│   └── PKGBUILD (55 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-python-pytest/
│   └── PKGBUILD (75 lines, 2.3 KB, ~685 tokens)
├── mingw-w64-python-pytest-asyncio/
│   └── PKGBUILD (59 lines, 1.8 KB, ~540 tokens)
├── mingw-w64-python-pytest-benchmark/
│   └── PKGBUILD (50 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-pytest-black/
│   └── PKGBUILD (50 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-pytest-checkdocs/
│   └── PKGBUILD (47 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-pytest-cov/
│   └── PKGBUILD (53 lines, 2.2 KB, ~629 tokens)
├── mingw-w64-python-pytest-datafiles/
│   └── PKGBUILD (50 lines, 1.5 KB, ~456 tokens)
├── mingw-w64-python-pytest-enabler/
│   └── PKGBUILD (45 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-python-pytest-fixture-config/
│   └── PKGBUILD (41 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-python-pytest-flake8/
│   └── PKGBUILD (48 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-python-pytest-isort/
│   └── PKGBUILD (45 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-pytest-localserver/
│   └── PKGBUILD (56 lines, 2.2 KB, ~633 tokens)
├── mingw-w64-python-pytest-mock/
│   └── PKGBUILD (59 lines, 1.9 KB, ~560 tokens)
├── mingw-w64-python-pytest-mpl/
│   └── PKGBUILD (55 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-python-pytest-rerunfailures/
│   └── PKGBUILD (46 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-python-pytest-shutil/
│   └── PKGBUILD (44 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-python-pytest-subprocess/
│   └── PKGBUILD (63 lines, 1.9 KB, ~567 tokens)
├── mingw-w64-python-pytest-timeout/
│   └── PKGBUILD (46 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-pytest-virtualenv/
│   └── PKGBUILD (46 lines, 1.5 KB, ~459 tokens)
├── mingw-w64-python-pytest-xdist/
│   └── PKGBUILD (57 lines, 2.0 KB, ~597 tokens)
├── mingw-w64-python-python-discovery/
│   └── PKGBUILD (50 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-python-multipart/
│   └── PKGBUILD (49 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-python-sbom/
│   └── PKGBUILD (53 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-python-pythran/
│   └── PKGBUILD (67 lines, 2.1 KB, ~611 tokens)
├── mingw-w64-python-pytmx/
│   └── PKGBUILD (38 lines, 1.4 KB, ~407 tokens)
├── mingw-w64-python-pytokens/
│   └── PKGBUILD (59 lines, 1.7 KB, ~521 tokens)
├── mingw-w64-python-pytoolconfig/
│   └── PKGBUILD (46 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-python-pytorch/
│   └── PKGBUILD (172 lines, 5.5 KB, ~1.5k tokens)
├── mingw-w64-python-pytz/
│   └── PKGBUILD (52 lines, 1.4 KB, ~434 tokens)
├── mingw-w64-python-pyu2f/
│   └── PKGBUILD (43 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-python-pyuca/
│   └── PKGBUILD (39 lines, 1.3 KB, ~394 tokens)
├── mingw-w64-python-pyusb/
│   └── PKGBUILD (50 lines, 1.4 KB, ~439 tokens)
├── mingw-w64-python-pyvcd/
│   └── PKGBUILD (52 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-pyvda/
│   └── PKGBUILD (44 lines, 1.3 KB, ~398 tokens)
├── mingw-w64-python-pyvisa/
│   └── PKGBUILD (58 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-python-pywavelets/
│   └── PKGBUILD (52 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-pywin32/
│   └── PKGBUILD (76 lines, 2.7 KB, ~720 tokens)
├── mingw-w64-python-pywin32-ctypes/
│   └── PKGBUILD (37 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-pywinpty/
│   └── PKGBUILD (62 lines, 1.8 KB, ~524 tokens)
├── mingw-w64-python-pyzmq/
│   └── PKGBUILD (51 lines, 1.6 KB, ~492 tokens)
├── mingw-w64-python-pyzopfli/
│   └── PKGBUILD (65 lines, 2.1 KB, ~610 tokens)
├── mingw-w64-python-qasync/
│   └── PKGBUILD (70 lines, 1.9 KB, ~546 tokens)
├── mingw-w64-python-qcelemental/
│   └── PKGBUILD (47 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-qcengine/
│   └── PKGBUILD (60 lines, 1.9 KB, ~569 tokens)
├── mingw-w64-python-qdarkstyle/
│   └── PKGBUILD (44 lines, 1.4 KB, ~416 tokens)
├── mingw-w64-python-qmk/
│   └── PKGBUILD (53 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-qstylizer/
│   └── PKGBUILD (49 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-qtawesome/
│   └── PKGBUILD (43 lines, 1.3 KB, ~399 tokens)
├── mingw-w64-python-qtconsole/
│   └── PKGBUILD (55 lines, 1.8 KB, ~545 tokens)
├── mingw-w64-python-qtpy/
│   └── PKGBUILD (60 lines, 1.8 KB, ~545 tokens)
├── mingw-w64-python-quart/
│   └── PKGBUILD (46 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-rapidfuzz/
│   └── PKGBUILD (65 lines, 2.3 KB, ~670 tokens)
├── mingw-w64-python-rawpy/
│   └── PKGBUILD (52 lines, 1.6 KB, ~487 tokens)
├── mingw-w64-python-rdflib/
│   └── PKGBUILD (56 lines, 1.5 KB, ~453 tokens)
├── mingw-w64-python-re-assert/
│   └── PKGBUILD (44 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-readme-renderer/
│   └── PKGBUILD (49 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-redis/
│   └── PKGBUILD (47 lines, 1.6 KB, ~459 tokens)
├── mingw-w64-python-referencing/
│   └── PKGBUILD (53 lines, 1.7 KB, ~515 tokens)
├── mingw-w64-python-regex/
│   └── PKGBUILD (54 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-python-rencode/
│   └── PKGBUILD (62 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-rendercanvas/
│   └── PKGBUILD (53 lines, 1.4 KB, ~436 tokens)
├── mingw-w64-python-reportlab/
│   └── PKGBUILD (48 lines, 1.7 KB, ~515 tokens)
├── mingw-w64-python-requests/
│   └── PKGBUILD (45 lines, 1.9 KB, ~537 tokens)
├── mingw-w64-python-requests-cache/
│   └── PKGBUILD (45 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-requests-kerberos/
│   └── PKGBUILD (55 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-python-requests-mock/
│   └── PKGBUILD (47 lines, 1.9 KB, ~550 tokens)
├── mingw-w64-python-requests-oauthlib/
│   └── PKGBUILD (62 lines, 1.8 KB, ~529 tokens)
├── mingw-w64-python-requests-toolbelt/
│   └── PKGBUILD (49 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-python-requests-unixsocket/
│   └── PKGBUILD (46 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-resampy/
│   └── PKGBUILD (44 lines, 1.3 KB, ~403 tokens)
├── mingw-w64-python-resolvelib/
│   └── PKGBUILD (41 lines, 1.4 KB, ~402 tokens)
├── mingw-w64-python-responses/
│   └── PKGBUILD (63 lines, 2.0 KB, ~593 tokens)
├── mingw-w64-python-retrying/
│   └── PKGBUILD (40 lines, 1.5 KB, ~434 tokens)
├── mingw-w64-python-rfc3339-validator/
│   └── PKGBUILD (44 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-rfc3986/
│   └── PKGBUILD (43 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-python-rfc3986-validator/
│   └── PKGBUILD (55 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-python-rfc3987/
│   └── PKGBUILD (35 lines, 1.3 KB, ~387 tokens)
├── mingw-w64-python-rich/
│   └── PKGBUILD (41 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-rich-argparse/
│   └── PKGBUILD (54 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-rlpycairo/
│   └── PKGBUILD (41 lines, 1.4 KB, ~413 tokens)
├── mingw-w64-python-roman-numerals/
│   └── PKGBUILD (45 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-rope/
│   └── PKGBUILD (47 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-rpds-py/
│   └── PKGBUILD (56 lines, 1.7 KB, ~512 tokens)
├── mingw-w64-python-rpyc/
│   └── PKGBUILD (47 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-rst2pdf/
│   └── PKGBUILD (73 lines, 2.3 KB, ~672 tokens)
├── mingw-w64-python-rtree/
│   └── PKGBUILD (55 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-ruamel-yaml/
│   └── PKGBUILD (49 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-python-ruamel.yaml.clib/
│   └── PKGBUILD (55 lines, 1.8 KB, ~554 tokens)
├── mingw-w64-python-s3transfer/
│   └── PKGBUILD (47 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-schema/
│   └── PKGBUILD (48 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-python-scikit-build/
│   └── PKGBUILD (75 lines, 2.2 KB, ~655 tokens)
├── mingw-w64-python-scikit-build-core/
│   └── PKGBUILD (72 lines, 2.4 KB, ~700 tokens)
├── mingw-w64-python-scikit-image/
│   └── PKGBUILD (79 lines, 2.6 KB, ~786 tokens)
├── mingw-w64-python-scikit-learn/
│   └── PKGBUILD (71 lines, 2.2 KB, ~650 tokens)
├── mingw-w64-python-scipy/
│   └── PKGBUILD (91 lines, 2.8 KB, ~803 tokens)
├── mingw-w64-python-scooby/
│   └── PKGBUILD (43 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-python-screeninfo/
│   └── PKGBUILD (42 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-python-scripttest/
│   └── PKGBUILD (34 lines, 1.2 KB, ~354 tokens)
├── mingw-w64-python-seaborn/
│   └── PKGBUILD (49 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-secretstorage/
│   └── PKGBUILD (45 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-semantic-version/
│   └── PKGBUILD (37 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-semver/
│   └── PKGBUILD (57 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-python-send2trash/
│   └── PKGBUILD (44 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-python-service-identity/
│   └── PKGBUILD (63 lines, 1.9 KB, ~566 tokens)
├── mingw-w64-python-setproctitle/
│   └── PKGBUILD (53 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-python-setuptools/
│   └── PKGBUILD (158 lines, 5.9 KB, ~1.7k tokens)
├── mingw-w64-python-setuptools-git/
│   └── PKGBUILD (52 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-python-setuptools-git-versioning/
│   └── PKGBUILD (48 lines, 1.6 KB, ~469 tokens)
├── mingw-w64-python-setuptools-reproducible/
│   └── PKGBUILD (44 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-python-setuptools-rust/
│   └── PKGBUILD (52 lines, 1.7 KB, ~495 tokens)
├── mingw-w64-python-setuptools-scm/
│   └── PKGBUILD (58 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-setuptools-scm-git-archive/
│   └── PKGBUILD (45 lines, 1.5 KB, ~464 tokens)
├── mingw-w64-python-shapely/
│   └── PKGBUILD (57 lines, 1.7 KB, ~518 tokens)
├── mingw-w64-python-shellingham/
│   └── PKGBUILD (48 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-python-shtab/
│   └── PKGBUILD (67 lines, 2.0 KB, ~602 tokens)
├── mingw-w64-python-similarity_measures/
│   └── PKGBUILD (45 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-python-six/
│   └── PKGBUILD (42 lines, 1.4 KB, ~430 tokens)
├── mingw-w64-python-skia-pathops/
│   └── PKGBUILD (59 lines, 1.8 KB, ~532 tokens)
├── mingw-w64-python-slugify/
│   └── PKGBUILD (47 lines, 1.4 KB, ~436 tokens)
├── mingw-w64-python-smartypants/
│   └── PKGBUILD (74 lines, 2.4 KB, ~714 tokens)
├── mingw-w64-python-sniffio/
│   └── PKGBUILD (38 lines, 1.4 KB, ~408 tokens)
├── mingw-w64-python-snowballstemmer/
│   └── PKGBUILD (42 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-sortedcontainers/
│   └── PKGBUILD (37 lines, 1.4 KB, ~419 tokens)
├── mingw-w64-python-sounddevice/
│   └── PKGBUILD (49 lines, 1.8 KB, ~512 tokens)
├── mingw-w64-python-soundfile/
│   └── PKGBUILD (53 lines, 1.9 KB, ~540 tokens)
├── mingw-w64-python-soupsieve/
│   └── PKGBUILD (60 lines, 1.7 KB, ~501 tokens)
├── mingw-w64-python-soxr/
│   └── PKGBUILD (70 lines, 2.1 KB, ~622 tokens)
├── mingw-w64-python-sphinx/
│   └── PKGBUILD (80 lines, 2.6 KB, ~749 tokens)
├── mingw-w64-python-sphinx-alabaster-theme/
│   └── PKGBUILD (40 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-sphinx-argparse/
│   └── PKGBUILD (52 lines, 1.9 KB, ~541 tokens)
├── mingw-w64-python-sphinx-basic-ng/
│   └── PKGBUILD (39 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-sphinx-copybutton/
│   └── PKGBUILD (41 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-sphinx-issues/
│   └── PKGBUILD (59 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-python-sphinx-lv2-theme/
│   └── PKGBUILD (41 lines, 1.4 KB, ~419 tokens)
├── mingw-w64-python-sphinx-notfound-page/
│   └── PKGBUILD (38 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-python-sphinx-tabs/
│   └── PKGBUILD (40 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-sphinx_rtd_theme/
│   └── PKGBUILD (45 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-sphinxcontrib-applehelp/
│   └── PKGBUILD (43 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-python-sphinxcontrib-devhelp/
│   └── PKGBUILD (45 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-python-sphinxcontrib-github-alt/
│   └── PKGBUILD (41 lines, 1.5 KB, ~431 tokens)
├── mingw-w64-python-sphinxcontrib-htmlhelp/
│   └── PKGBUILD (45 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-sphinxcontrib-jquery/
│   └── PKGBUILD (45 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-python-sphinxcontrib-jsmath/
│   └── PKGBUILD (52 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-sphinxcontrib-log-cabinet/
│   └── PKGBUILD (46 lines, 1.8 KB, ~525 tokens)
├── mingw-w64-python-sphinxcontrib-moderncmakedomain/
│   └── PKGBUILD (41 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-sphinxcontrib-programoutput/
│   └── PKGBUILD (38 lines, 1.4 KB, ~420 tokens)
├── mingw-w64-python-sphinxcontrib-qthelp/
│   └── PKGBUILD (45 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-sphinxcontrib-serializinghtml/
│   └── PKGBUILD (45 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-sphinxcontrib-svg2pdfconverter/
│   └── PKGBUILD (43 lines, 1.6 KB, ~475 tokens)
├── mingw-w64-python-sphinxcontrib-websupport/
│   └── PKGBUILD (42 lines, 1.5 KB, ~456 tokens)
├── mingw-w64-python-spin/
│   └── PKGBUILD (55 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-python-spinners/
│   └── PKGBUILD (37 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-python-spyder/
│   └── PKGBUILD (109 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-python-spyder-kernels/
│   └── PKGBUILD (48 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-sqlalchemy/
│   └── PKGBUILD (66 lines, 2.0 KB, ~587 tokens)
├── mingw-w64-python-sqlmodel/
│   └── PKGBUILD (45 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-python-sqlparse/
│   └── PKGBUILD (46 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-python-srt/
│   └── PKGBUILD (47 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-python-sse-starlette/
│   └── PKGBUILD (50 lines, 1.5 KB, ~458 tokens)
├── mingw-w64-python-sspilib/
│   └── PKGBUILD (54 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-python-stack-data/
│   └── PKGBUILD (61 lines, 1.9 KB, ~563 tokens)
├── mingw-w64-python-standard-aifc/
│   └── PKGBUILD (42 lines, 1.5 KB, ~445 tokens)
├── mingw-w64-python-standard-chunk/
│   └── PKGBUILD (39 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-python-standard-sunau/
│   └── PKGBUILD (41 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-python-starlette/
│   └── PKGBUILD (56 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-python-statsd/
│   └── PKGBUILD (43 lines, 1.4 KB, ~428 tokens)
├── mingw-w64-python-statsmodels/
│   └── PKGBUILD (64 lines, 2.2 KB, ~619 tokens)
├── mingw-w64-python-stestr/
│   └── PKGBUILD (51 lines, 1.8 KB, ~517 tokens)
├── mingw-w64-python-stevedore/
│   └── PKGBUILD (57 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-python-strict-rfc3339/
│   └── PKGBUILD (36 lines, 1.3 KB, ~391 tokens)
├── mingw-w64-python-striprtf/
│   └── PKGBUILD (46 lines, 1.3 KB, ~401 tokens)
├── mingw-w64-python-structlog/
│   └── PKGBUILD (58 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-python-subunit/
│   └── PKGBUILD (51 lines, 2.0 KB, ~578 tokens)
├── mingw-w64-python-superqt/
│   └── PKGBUILD (45 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-svgelements/
│   └── PKGBUILD (45 lines, 1.5 KB, ~443 tokens)
├── mingw-w64-python-svglib/
│   └── PKGBUILD (52 lines, 1.6 KB, ~489 tokens)
├── mingw-w64-python-sympy/
│   └── PKGBUILD (51 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-python-tabulate/
│   └── PKGBUILD (65 lines, 2.1 KB, ~635 tokens)
├── mingw-w64-python-tempita/
│   └── PKGBUILD (40 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-python-termcolor/
│   └── PKGBUILD (40 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-terminado/
│   └── PKGBUILD (52 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-python-test2ref/
│   └── PKGBUILD (60 lines, 1.7 KB, ~518 tokens)
├── mingw-w64-python-testpath/
│   └── PKGBUILD (50 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-python-testrepository/
│   └── PKGBUILD (58 lines, 2.2 KB, ~644 tokens)
├── mingw-w64-python-testresources/
│   └── PKGBUILD (56 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-testscenarios/
│   └── PKGBUILD (49 lines, 1.5 KB, ~434 tokens)
├── mingw-w64-python-testtools/
│   └── PKGBUILD (58 lines, 1.9 KB, ~550 tokens)
├── mingw-w64-python-text-unidecode/
│   └── PKGBUILD (41 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-python-textdistance/
│   └── PKGBUILD (36 lines, 1.3 KB, ~396 tokens)
├── mingw-w64-python-texttable/
│   └── PKGBUILD (44 lines, 1.3 KB, ~396 tokens)
├── mingw-w64-python-threadpoolctl/
│   └── PKGBUILD (42 lines, 1.4 KB, ~408 tokens)
├── mingw-w64-python-three-merge/
│   └── PKGBUILD (40 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-tifffile/
│   └── PKGBUILD (60 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-python-tinyaes/
│   └── PKGBUILD (42 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-tinycss2/
│   └── PKGBUILD (40 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-python-toml/
│   └── PKGBUILD (51 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-python-tomli/
│   └── PKGBUILD (51 lines, 1.4 KB, ~440 tokens)
├── mingw-w64-python-tomli-w/
│   └── PKGBUILD (44 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-tomlkit/
│   └── PKGBUILD (44 lines, 1.4 KB, ~433 tokens)
├── mingw-w64-python-toposort/
│   └── PKGBUILD (45 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-python-toptica-lasersdk/
│   └── PKGBUILD (47 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-python-tornado/
│   └── PKGBUILD (48 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-python-tox/
│   └── PKGBUILD (60 lines, 2.0 KB, ~588 tokens)
├── mingw-w64-python-tqdm/
│   └── PKGBUILD (57 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-traitlets/
│   └── PKGBUILD (58 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-python-trimesh/
│   └── PKGBUILD (52 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-python-trio/
│   └── PKGBUILD (52 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-trio-websocket/
│   └── PKGBUILD (44 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-trove-classifiers/
│   └── PKGBUILD (49 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-python-trustme/
│   └── PKGBUILD (52 lines, 1.8 KB, ~548 tokens)
├── mingw-w64-python-truststore/
│   └── PKGBUILD (47 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-python-twisted/
│   └── PKGBUILD (64 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-python-typeguard/
│   └── PKGBUILD (57 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-python-typer/
│   └── PKGBUILD (52 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-python-types-python-dateutil/
│   └── PKGBUILD (43 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-python-types-pyyaml/
│   └── PKGBUILD (42 lines, 1.2 KB, ~376 tokens)
├── mingw-w64-python-typing-inspection/
│   └── PKGBUILD (47 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-python-typing_extensions/
│   └── PKGBUILD (41 lines, 1.6 KB, ~466 tokens)
├── mingw-w64-python-typogrify/
│   └── PKGBUILD (42 lines, 1.5 KB, ~432 tokens)
├── mingw-w64-python-tzdata/
│   └── PKGBUILD (42 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-python-tzlocal/
│   └── PKGBUILD (44 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-python-u-msgpack/
│   └── PKGBUILD (49 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-python-udsoncan/
│   └── PKGBUILD (44 lines, 1.4 KB, ~409 tokens)
├── mingw-w64-python-ufolib2/
│   └── PKGBUILD (65 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-python-uharfbuzz/
│   └── PKGBUILD (68 lines, 1.9 KB, ~562 tokens)
├── mingw-w64-python-ujson/
│   └── PKGBUILD (58 lines, 1.6 KB, ~492 tokens)
├── mingw-w64-python-ukpostcodeparser/
│   └── PKGBUILD (43 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-python-umap-learn/
│   └── PKGBUILD (53 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-python-unidecode/
│   └── PKGBUILD (41 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-python-unidiff/
│   └── PKGBUILD (48 lines, 1.4 KB, ~436 tokens)
├── mingw-w64-python-url-normalize/
│   └── PKGBUILD (45 lines, 1.3 KB, ~411 tokens)
├── mingw-w64-python-urllib3/
│   └── PKGBUILD (51 lines, 1.8 KB, ~537 tokens)
├── mingw-w64-python-urwid/
│   └── PKGBUILD (51 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-python-userpath/
│   └── PKGBUILD (45 lines, 1.4 KB, ~434 tokens)
├── mingw-w64-python-vcs-versioning/
│   └── PKGBUILD (59 lines, 1.9 KB, ~556 tokens)
├── mingw-w64-python-versioneer/
│   └── PKGBUILD (51 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-python-versioningit/
│   └── PKGBUILD (41 lines, 1.5 KB, ~433 tokens)
├── mingw-w64-python-vine/
│   └── PKGBUILD (52 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-python-virtualenv/
│   └── PKGBUILD (56 lines, 1.8 KB, ~529 tokens)
├── mingw-w64-python-virtualenv-clone/
│   └── PKGBUILD (41 lines, 1.5 KB, ~425 tokens)
├── mingw-w64-python-voluptuous/
│   └── PKGBUILD (55 lines, 1.5 KB, ~449 tokens)
├── mingw-w64-python-watchdog/
│   └── PKGBUILD (46 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-python-watchfiles/
│   └── PKGBUILD (74 lines, 2.3 KB, ~667 tokens)
├── mingw-w64-python-wcag-contrast-ratio/
│   └── PKGBUILD (43 lines, 1.5 KB, ~453 tokens)
├── mingw-w64-python-wcwidth/
│   └── PKGBUILD (58 lines, 1.6 KB, ~493 tokens)
├── mingw-w64-python-webcolors/
│   └── PKGBUILD (42 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-python-webencodings/
│   └── PKGBUILD (52 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-python-websocket-client/
│   └── PKGBUILD (48 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-python-websockets/
│   └── PKGBUILD (50 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-werkzeug/
│   └── PKGBUILD (42 lines, 1.5 KB, ~444 tokens)
├── mingw-w64-python-west/
│   └── PKGBUILD (53 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-python-wgpu/
│   └── PKGBUILD (102 lines, 2.9 KB, ~875 tokens)
├── mingw-w64-python-whatthepatch/
│   └── PKGBUILD (46 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-python-wheel/
│   └── PKGBUILD (54 lines, 1.5 KB, ~473 tokens)
├── mingw-w64-python-win32-setctime/
│   └── PKGBUILD (41 lines, 1.3 KB, ~408 tokens)
├── mingw-w64-python-winkerberos/
│   └── PKGBUILD (50 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-python-winloop/
│   └── PKGBUILD (45 lines, 1.6 KB, ~465 tokens)
├── mingw-w64-python-wmi/
│   └── PKGBUILD (48 lines, 1.6 KB, ~488 tokens)
├── mingw-w64-python-wordcloud/
│   └── PKGBUILD (52 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-python-wrapt/
│   └── PKGBUILD (56 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-python-wsproto/
│   └── PKGBUILD (70 lines, 2.1 KB, ~629 tokens)
├── mingw-w64-python-wtforms/
│   └── PKGBUILD (96 lines, 3.3 KB, ~984 tokens)
├── mingw-w64-python-xdg/
│   └── PKGBUILD (46 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-python-xlrd/
│   └── PKGBUILD (42 lines, 1.5 KB, ~467 tokens)
├── mingw-w64-python-xlsxwriter/
│   └── PKGBUILD (53 lines, 1.7 KB, ~496 tokens)
├── mingw-w64-python-xmlschema/
│   └── PKGBUILD (50 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-python-xpra/
│   └── PKGBUILD (87 lines, 3.5 KB, ~979 tokens)
├── mingw-w64-python-xxhash/
│   └── PKGBUILD (52 lines, 1.5 KB, ~459 tokens)
├── mingw-w64-python-xyzservices/
│   └── PKGBUILD (55 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-python-yaml/
│   └── PKGBUILD (61 lines, 2.1 KB, ~617 tokens)
├── mingw-w64-python-yarl/
│   └── PKGBUILD (55 lines, 1.7 KB, ~502 tokens)
├── mingw-w64-python-zeroconf/
│   └── PKGBUILD (67 lines, 2.3 KB, ~661 tokens)
├── mingw-w64-python-zipp/
│   └── PKGBUILD (53 lines, 1.5 KB, ~454 tokens)
├── mingw-w64-python-zipremove/
│   └── PKGBUILD (43 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-python-zope.event/
│   └── PKGBUILD (38 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-python-zope.interface/
│   └── PKGBUILD (46 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-python-zstandard/
│   └── PKGBUILD (55 lines, 2.0 KB, ~579 tokens)
├── mingw-w64-python-zxing-cpp/
│   └── PKGBUILD (73 lines, 2.2 KB, ~652 tokens)
├── mingw-w64-qalculate-gtk/
│   └── PKGBUILD (51 lines, 1.5 KB, ~463 tokens)
├── mingw-w64-qalculate-qt/
│   └── PKGBUILD (46 lines, 1.5 KB, ~442 tokens)
├── mingw-w64-qbittorrent/
│   └── PKGBUILD (84 lines, 2.5 KB, ~704 tokens)
├── mingw-w64-qbs/
│   └── PKGBUILD (86 lines, 3.2 KB, ~907 tokens)
├── mingw-w64-qca/
│   └── PKGBUILD (141 lines, 4.9 KB, ~1.4k tokens)
├── mingw-w64-qdia/
│   └── PKGBUILD (51 lines, 1.4 KB, ~424 tokens)
├── mingw-w64-qemu/
│   └── PKGBUILD (348 lines, 11.3 KB, ~3.3k tokens)
├── mingw-w64-qgis/
│   └── PKGBUILD (157 lines, 5.6 KB, ~1.5k tokens)
├── mingw-w64-qgpgme/
│   └── PKGBUILD (71 lines, 2.1 KB, ~597 tokens)
├── mingw-w64-qhttpengine/
│   └── PKGBUILD (46 lines, 1.5 KB, ~433 tokens)
├── mingw-w64-qhull/
│   └── PKGBUILD (69 lines, 2.3 KB, ~673 tokens)
├── mingw-w64-qjackctl/
│   └── PKGBUILD (60 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-qmdnsengine/
│   └── PKGBUILD (45 lines, 1.5 KB, ~425 tokens)
├── mingw-w64-qoi/
│   └── PKGBUILD (31 lines, 999 B, ~294 tokens)
├── mingw-w64-qownnotes/
│   └── PKGBUILD (80 lines, 2.3 KB, ~643 tokens)
├── mingw-w64-qpdf/
│   └── PKGBUILD (87 lines, 2.4 KB, ~684 tokens)
├── mingw-w64-qqc2-desktop-style/
│   └── PKGBUILD (84 lines, 2.6 KB, ~734 tokens)
├── mingw-w64-qr-code-generator/
│   └── PKGBUILD (65 lines, 2.1 KB, ~610 tokens)
├── mingw-w64-qrencode/
│   └── PKGBUILD (56 lines, 1.3 KB, ~405 tokens)
├── mingw-w64-qrtool/
│   └── PKGBUILD (58 lines, 2.3 KB, ~721 tokens)
├── mingw-w64-qrupdate/
│   └── PKGBUILD (98 lines, 3.1 KB, ~947 tokens)
├── mingw-w64-qscintilla/
│   └── PKGBUILD (180 lines, 6.1 KB, ~1.9k tokens)
├── mingw-w64-qt-advanced-docking-system/
│   └── PKGBUILD (54 lines, 1.7 KB, ~493 tokens)
├── mingw-w64-qt-creator/
│   └── PKGBUILD (210 lines, 7.2 KB, ~2.1k tokens)
├── mingw-w64-qt-installer-framework/
│   └── PKGBUILD (116 lines, 4.8 KB, ~1.3k tokens)
├── mingw-w64-qt5-3d/
│   └── PKGBUILD (113 lines, 4.1 KB, ~1.3k tokens)
├── mingw-w64-qt5-activeqt/
│   └── PKGBUILD (109 lines, 3.8 KB, ~1.2k tokens)
├── mingw-w64-qt5-base/
│   └── PKGBUILD (341 lines, 14.2 KB, ~3.9k tokens)
├── mingw-w64-qt5-charts/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-connectivity/
│   └── PKGBUILD (116 lines, 4.0 KB, ~1.3k tokens)
├── mingw-w64-qt5-datavis3d/
│   └── PKGBUILD (102 lines, 3.6 KB, ~1.2k tokens)
├── mingw-w64-qt5-declarative/
│   └── PKGBUILD (137 lines, 4.6 KB, ~1.4k tokens)
├── mingw-w64-qt5-doc/
│   └── PKGBUILD (291 lines, 11.5 KB, ~3.2k tokens)
├── mingw-w64-qt5-gamepad/
│   └── PKGBUILD (103 lines, 3.7 KB, ~1.2k tokens)
├── mingw-w64-qt5-graphicaleffects/
│   └── PKGBUILD (82 lines, 2.8 KB, ~874 tokens)
├── mingw-w64-qt5-imageformats/
│   └── PKGBUILD (104 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-qt5-location/
│   └── PKGBUILD (124 lines, 4.2 KB, ~1.3k tokens)
├── mingw-w64-qt5-lottie/
│   └── PKGBUILD (92 lines, 3.2 KB, ~1.0k tokens)
├── mingw-w64-qt5-multimedia/
│   └── PKGBUILD (112 lines, 4.1 KB, ~1.3k tokens)
├── mingw-w64-qt5-networkauth/
│   └── PKGBUILD (99 lines, 3.5 KB, ~1.1k tokens)
├── mingw-w64-qt5-pdf/
│   └── PKGBUILD (148 lines, 4.7 KB, ~1.4k tokens)
├── mingw-w64-qt5-purchasing/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-quick3d/
│   └── PKGBUILD (133 lines, 4.6 KB, ~1.4k tokens)
├── mingw-w64-qt5-quickcontrols/
│   └── PKGBUILD (91 lines, 3.3 KB, ~1.0k tokens)
├── mingw-w64-qt5-quickcontrols2/
│   └── PKGBUILD (110 lines, 3.8 KB, ~1.2k tokens)
├── mingw-w64-qt5-quicktimeline/
│   └── PKGBUILD (89 lines, 3.1 KB, ~964 tokens)
├── mingw-w64-qt5-remoteobjects/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-script/
│   └── PKGBUILD (99 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-scxml/
│   └── PKGBUILD (99 lines, 3.5 KB, ~1.1k tokens)
├── mingw-w64-qt5-sensors/
│   └── PKGBUILD (118 lines, 4.1 KB, ~1.3k tokens)
├── mingw-w64-qt5-serialbus/
│   └── PKGBUILD (109 lines, 3.8 KB, ~1.2k tokens)
├── mingw-w64-qt5-serialport/
│   └── PKGBUILD (99 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-speech/
│   └── PKGBUILD (109 lines, 4.1 KB, ~1.3k tokens)
├── mingw-w64-qt5-static/
│   └── PKGBUILD (381 lines, 17.2 KB, ~4.7k tokens)
├── mingw-w64-qt5-svg/
│   └── PKGBUILD (104 lines, 3.5 KB, ~1.1k tokens)
├── mingw-w64-qt5-tools/
│   └── PKGBUILD (161 lines, 6.6 KB, ~1.9k tokens)
├── mingw-w64-qt5-translations/
│   └── PKGBUILD (62 lines, 2.0 KB, ~615 tokens)
├── mingw-w64-qt5-virtualkeyboard/
│   └── PKGBUILD (105 lines, 3.8 KB, ~1.2k tokens)
├── mingw-w64-qt5-webchannel/
│   └── PKGBUILD (107 lines, 3.8 KB, ~1.2k tokens)
├── mingw-w64-qt5-webglplugin/
│   └── PKGBUILD (92 lines, 3.2 KB, ~998 tokens)
├── mingw-w64-qt5-websockets/
│   └── PKGBUILD (108 lines, 3.7 KB, ~1.2k tokens)
├── mingw-w64-qt5-webview/
│   └── PKGBUILD (99 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-qt5-winextras/
│   └── PKGBUILD (101 lines, 3.7 KB, ~1.2k tokens)
├── mingw-w64-qt5-xmlpatterns/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.2k tokens)
├── mingw-w64-qt6-3d/
│   └── PKGBUILD (84 lines, 3.0 KB, ~902 tokens)
├── mingw-w64-qt6-5compat/
│   └── PKGBUILD (79 lines, 2.8 KB, ~835 tokens)
├── mingw-w64-qt6-activeqt/
│   └── PKGBUILD (94 lines, 3.0 KB, ~908 tokens)
├── mingw-w64-qt6-base/
│   └── PKGBUILD (253 lines, 9.8 KB, ~2.7k tokens)
├── mingw-w64-qt6-canvaspainter/
│   └── PKGBUILD (77 lines, 2.7 KB, ~798 tokens)
├── mingw-w64-qt6-charts/
│   └── PKGBUILD (78 lines, 2.7 KB, ~813 tokens)
├── mingw-w64-qt6-connectivity/
│   └── PKGBUILD (76 lines, 2.7 KB, ~805 tokens)
├── mingw-w64-qt6-datavis3d/
│   └── PKGBUILD (78 lines, 2.7 KB, ~811 tokens)
├── mingw-w64-qt6-declarative/
│   └── PKGBUILD (95 lines, 3.2 KB, ~957 tokens)
├── mingw-w64-qt6-doc/
│   └── PKGBUILD (85 lines, 2.9 KB, ~787 tokens)
├── mingw-w64-qt6-graphs/
│   └── PKGBUILD (78 lines, 2.7 KB, ~815 tokens)
├── mingw-w64-qt6-grpc/
│   └── PKGBUILD (82 lines, 2.9 KB, ~863 tokens)
├── mingw-w64-qt6-httpserver/
│   └── PKGBUILD (75 lines, 2.5 KB, ~770 tokens)
├── mingw-w64-qt6-imageformats/
│   └── PKGBUILD (87 lines, 3.1 KB, ~915 tokens)
├── mingw-w64-qt6-languageserver/
│   └── PKGBUILD (48 lines, 1.7 KB, ~506 tokens)
├── mingw-w64-qt6-location/
│   └── PKGBUILD (80 lines, 2.9 KB, ~861 tokens)
├── mingw-w64-qt6-lottie/
│   └── PKGBUILD (78 lines, 2.7 KB, ~823 tokens)
├── mingw-w64-qt6-mqtt/
│   └── PKGBUILD (75 lines, 2.5 KB, ~764 tokens)
├── mingw-w64-qt6-multimedia/
│   └── PKGBUILD (132 lines, 5.1 KB, ~1.5k tokens)
├── mingw-w64-qt6-networkauth/
│   └── PKGBUILD (74 lines, 2.5 KB, ~758 tokens)
├── mingw-w64-qt6-pdf/
│   └── PKGBUILD (104 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-qt6-positioning/
│   └── PKGBUILD (79 lines, 2.9 KB, ~857 tokens)
├── mingw-w64-qt6-quick3d/
│   └── PKGBUILD (99 lines, 3.4 KB, ~988 tokens)
├── mingw-w64-qt6-quick3dphysics/
│   └── PKGBUILD (79 lines, 2.8 KB, ~826 tokens)
├── mingw-w64-qt6-quickeffectmaker/
│   └── PKGBUILD (80 lines, 2.8 KB, ~838 tokens)
├── mingw-w64-qt6-quicktimeline/
│   └── PKGBUILD (75 lines, 2.6 KB, ~779 tokens)
├── mingw-w64-qt6-remoteobjects/
│   └── PKGBUILD (79 lines, 2.8 KB, ~846 tokens)
├── mingw-w64-qt6-scxml/
│   └── PKGBUILD (85 lines, 2.8 KB, ~854 tokens)
├── mingw-w64-qt6-sensors/
│   └── PKGBUILD (77 lines, 2.7 KB, ~815 tokens)
├── mingw-w64-qt6-serialbus/
│   └── PKGBUILD (88 lines, 2.8 KB, ~853 tokens)
├── mingw-w64-qt6-serialport/
│   └── PKGBUILD (74 lines, 2.5 KB, ~776 tokens)
├── mingw-w64-qt6-shadertools/
│   └── PKGBUILD (75 lines, 2.7 KB, ~818 tokens)
├── mingw-w64-qt6-speech/
│   └── PKGBUILD (80 lines, 2.8 KB, ~850 tokens)
├── mingw-w64-qt6-static/
│   └── PKGBUILD (241 lines, 9.6 KB, ~2.6k tokens)
├── mingw-w64-qt6-svg/
│   └── PKGBUILD (74 lines, 2.5 KB, ~771 tokens)
├── mingw-w64-qt6-tasktree/
│   └── PKGBUILD (74 lines, 2.5 KB, ~769 tokens)
├── mingw-w64-qt6-tools/
│   └── PKGBUILD (88 lines, 3.3 KB, ~965 tokens)
├── mingw-w64-qt6-translations/
│   └── PKGBUILD (48 lines, 1.6 KB, ~490 tokens)
├── mingw-w64-qt6-virtualkeyboard/
│   └── PKGBUILD (80 lines, 2.8 KB, ~839 tokens)
├── mingw-w64-qt6-webchannel/
│   └── PKGBUILD (77 lines, 2.8 KB, ~839 tokens)
├── mingw-w64-qt6-websockets/
│   └── PKGBUILD (76 lines, 2.7 KB, ~803 tokens)
├── mingw-w64-qt6-webview/
│   └── PKGBUILD (76 lines, 2.6 KB, ~804 tokens)
├── mingw-w64-qtkeychain/
│   └── PKGBUILD (79 lines, 2.3 KB, ~693 tokens)
├── mingw-w64-qtwebkit/
│   └── PKGBUILD (182 lines, 6.9 KB, ~1.7k tokens)
├── mingw-w64-quantlib/
│   └── PKGBUILD (81 lines, 2.3 KB, ~665 tokens)
├── mingw-w64-quantum-espresso/
│   └── PKGBUILD (142 lines, 5.2 KB, ~1.4k tokens)
├── mingw-w64-quarter/
│   └── PKGBUILD (52 lines, 1.7 KB, ~487 tokens)
├── mingw-w64-quassel/
│   └── PKGBUILD (74 lines, 2.6 KB, ~720 tokens)
├── mingw-w64-quazip/
│   └── PKGBUILD (68 lines, 2.1 KB, ~639 tokens)
├── mingw-w64-qucs-s/
│   └── PKGBUILD (55 lines, 1.5 KB, ~448 tokens)
├── mingw-w64-quickjs/
│   └── PKGBUILD (55 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-quickjs-ng/
│   └── PKGBUILD (58 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-qwen-code/
│   └── PKGBUILD (26 lines, 906 B, ~271 tokens)
├── mingw-w64-qwt/
│   └── PKGBUILD (143 lines, 5.5 KB, ~1.6k tokens)
├── mingw-w64-qxlsx/
│   └── PKGBUILD (58 lines, 1.6 KB, ~494 tokens)
├── mingw-w64-qxmpp/
│   └── PKGBUILD (94 lines, 2.6 KB, ~795 tokens)
├── mingw-w64-qxorm/
│   └── PKGBUILD (81 lines, 2.5 KB, ~741 tokens)
├── mingw-w64-r/
│   └── PKGBUILD (91 lines, 2.8 KB, ~848 tokens)
├── mingw-w64-rabbitmq-c/
│   └── PKGBUILD (63 lines, 2.0 KB, ~569 tokens)
├── mingw-w64-ragel/
│   └── PKGBUILD (35 lines, 1.2 KB, ~356 tokens)
├── mingw-w64-range-v3/
│   └── PKGBUILD (45 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-rankwidth/
│   └── PKGBUILD (49 lines, 1.2 KB, ~381 tokens)
├── mingw-w64-rapidfuzz-cpp/
│   └── PKGBUILD (48 lines, 1.7 KB, ~491 tokens)
├── mingw-w64-rapidjson/
│   └── PKGBUILD (98 lines, 3.8 KB, ~988 tokens)
├── mingw-w64-raptor/
│   └── PKGBUILD (77 lines, 2.6 KB, ~799 tokens)
├── mingw-w64-rasqal/
│   └── PKGBUILD (76 lines, 2.5 KB, ~753 tokens)
├── mingw-w64-rav1e/
│   └── PKGBUILD (84 lines, 2.1 KB, ~633 tokens)
├── mingw-w64-raylib/
│   └── PKGBUILD (72 lines, 2.0 KB, ~595 tokens)
├── mingw-w64-rcedit/
│   └── PKGBUILD (73 lines, 2.1 KB, ~604 tokens)
├── mingw-w64-rclone/
│   └── PKGBUILD (95 lines, 2.7 KB, ~832 tokens)
├── mingw-w64-re2/
│   └── PKGBUILD (96 lines, 3.1 KB, ~919 tokens)
├── mingw-w64-readline/
│   └── PKGBUILD (101 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-readosm/
│   └── PKGBUILD (48 lines, 1.3 KB, ~403 tokens)
├── mingw-w64-readstat/
│   └── PKGBUILD (68 lines, 2.1 KB, ~586 tokens)
├── mingw-w64-recode/
│   └── PKGBUILD (56 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-redis-plus-plus/
│   └── PKGBUILD (51 lines, 1.7 KB, ~495 tokens)
├── mingw-w64-redland/
│   └── PKGBUILD (75 lines, 2.6 KB, ~749 tokens)
├── mingw-w64-reflect-cpp/
│   └── PKGBUILD (61 lines, 1.8 KB, ~523 tokens)
├── mingw-w64-repgrep/
│   └── PKGBUILD (71 lines, 2.5 KB, ~723 tokens)
├── mingw-w64-restbed/
│   └── PKGBUILD (81 lines, 2.6 KB, ~758 tokens)
├── mingw-w64-restic/
│   └── PKGBUILD (68 lines, 2.2 KB, ~652 tokens)
├── mingw-w64-resvg/
│   └── PKGBUILD (121 lines, 3.0 KB, ~909 tokens)
├── mingw-w64-rhash/
│   └── PKGBUILD (63 lines, 2.0 KB, ~578 tokens)
├── mingw-w64-rime-bopomofo/
│   └── PKGBUILD (25 lines, 1.0 KB, ~291 tokens)
├── mingw-w64-rime-cangjie/
│   └── PKGBUILD (23 lines, 889 B, ~246 tokens)
├── mingw-w64-rime-double-pinyin/
│   └── PKGBUILD (25 lines, 1.0 KB, ~284 tokens)
├── mingw-w64-rime-emoji/
│   └── PKGBUILD (22 lines, 899 B, ~252 tokens)
├── mingw-w64-rime-essay/
│   └── PKGBUILD (21 lines, 836 B, ~232 tokens)
├── mingw-w64-rime-luna-pinyin/
│   └── PKGBUILD (21 lines, 838 B, ~236 tokens)
├── mingw-w64-rime-pinyin-simp/
│   └── PKGBUILD (23 lines, 926 B, ~259 tokens)
├── mingw-w64-rime-prelude/
│   └── PKGBUILD (33 lines, 1.4 KB, ~371 tokens)
├── mingw-w64-rime-stroke/
│   └── PKGBUILD (23 lines, 874 B, ~240 tokens)
├── mingw-w64-rime-terra-pinyin/
│   └── PKGBUILD (23 lines, 913 B, ~254 tokens)
├── mingw-w64-rime-wubi/
│   └── PKGBUILD (23 lines, 880 B, ~247 tokens)
├── mingw-w64-rio/
│   └── PKGBUILD (58 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-ripgrep/
│   └── PKGBUILD (65 lines, 2.1 KB, ~639 tokens)
├── mingw-w64-ripgrep-all/
│   └── PKGBUILD (64 lines, 2.0 KB, ~580 tokens)
├── mingw-w64-ripunzip/
│   └── PKGBUILD (56 lines, 1.9 KB, ~577 tokens)
├── mingw-w64-riscv32-unknown-elf-binutils/
│   └── PKGBUILD (58 lines, 1.8 KB, ~540 tokens)
├── mingw-w64-riscv32-unknown-elf-gcc/
│   └── PKGBUILD (160 lines, 5.4 KB, ~1.6k tokens)
├── mingw-w64-riscv32-unknown-elf-newlib/
│   └── PKGBUILD (155 lines, 5.3 KB, ~1.6k tokens)
├── mingw-w64-riscv64-unknown-elf-binutils/
│   └── PKGBUILD (58 lines, 1.8 KB, ~540 tokens)
├── mingw-w64-riscv64-unknown-elf-gcc/
│   └── PKGBUILD (160 lines, 5.4 KB, ~1.6k tokens)
├── mingw-w64-riscv64-unknown-elf-newlib/
│   └── PKGBUILD (152 lines, 5.2 KB, ~1.6k tokens)
├── mingw-w64-rkcommon/
│   └── PKGBUILD (75 lines, 2.2 KB, ~652 tokens)
├── mingw-w64-rkdeveloptool/
│   └── PKGBUILD (66 lines, 1.7 KB, ~530 tokens)
├── mingw-w64-rnnoise/
│   └── PKGBUILD (64 lines, 1.8 KB, ~542 tokens)
├── mingw-w64-rnote/
│   └── PKGBUILD (78 lines, 2.5 KB, ~738 tokens)
├── mingw-w64-robin-hood-hashing/
│   └── PKGBUILD (42 lines, 1.6 KB, ~456 tokens)
├── mingw-w64-robin-map/
│   └── PKGBUILD (40 lines, 1.4 KB, ~412 tokens)
├── mingw-w64-rocksdb/
│   └── PKGBUILD (84 lines, 3.0 KB, ~877 tokens)
├── mingw-w64-roswell/
│   └── PKGBUILD (49 lines, 1.1 KB, ~346 tokens)
├── mingw-w64-rpi-imager/
│   └── PKGBUILD (99 lines, 3.0 KB, ~841 tokens)
├── mingw-w64-rrdtool/
│   └── PKGBUILD (69 lines, 1.7 KB, ~528 tokens)
├── mingw-w64-rssguard/
│   └── PKGBUILD (63 lines, 1.8 KB, ~512 tokens)
├── mingw-w64-rtaudio/
│   └── PKGBUILD (54 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-rtl-sdr/
│   └── PKGBUILD (67 lines, 2.1 KB, ~635 tokens)
├── mingw-w64-rtl_433/
│   └── PKGBUILD (56 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-rtmidi/
│   └── PKGBUILD (68 lines, 2.1 KB, ~610 tokens)
├── mingw-w64-rtmpdump/
│   └── PKGBUILD (92 lines, 3.3 KB, ~874 tokens)
├── mingw-w64-rubberband/
│   └── PKGBUILD (72 lines, 1.9 KB, ~569 tokens)
├── mingw-w64-ruby/
│   └── PKGBUILD (167 lines, 6.3 KB, ~2.0k tokens)
├── mingw-w64-ruby-dbus/
│   └── PKGBUILD (33 lines, 1.2 KB, ~367 tokens)
├── mingw-w64-ruby-mustache/
│   └── PKGBUILD (59 lines, 2.2 KB, ~690 tokens)
├── mingw-w64-ruby-native-package-installer/
│   └── PKGBUILD (31 lines, 1.1 KB, ~345 tokens)
├── mingw-w64-ruby-pkg-config/
│   └── PKGBUILD (34 lines, 1.1 KB, ~342 tokens)
├── mingw-w64-ruby-rake-compiler/
│   └── PKGBUILD (67 lines, 2.3 KB, ~738 tokens)
├── mingw-w64-ruby-rdiscount/
│   └── PKGBUILD (60 lines, 2.2 KB, ~695 tokens)
├── mingw-w64-ruc/
│   └── PKGBUILD (74 lines, 2.5 KB, ~697 tokens)
├── mingw-w64-ruc-vm/
│   └── PKGBUILD (60 lines, 2.1 KB, ~612 tokens)
├── mingw-w64-ruff/
│   └── PKGBUILD (94 lines, 2.9 KB, ~862 tokens)
├── mingw-w64-rufus/
│   └── PKGBUILD (41 lines, 1.2 KB, ~356 tokens)
├── mingw-w64-rust/
│   └── PKGBUILD (281 lines, 10.5 KB, ~3.0k tokens)
├── mingw-w64-rust-analyzer/
│   └── PKGBUILD (51 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-rust-bindgen/
│   └── PKGBUILD (56 lines, 1.6 KB, ~509 tokens)
├── mingw-w64-rustfs/
│   └── PKGBUILD (78 lines, 2.4 KB, ~692 tokens)
├── mingw-w64-rustfs-launcher/
│   └── PKGBUILD (61 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-rustlings/
│   └── PKGBUILD (59 lines, 1.7 KB, ~517 tokens)
├── mingw-w64-rustscan/
│   └── PKGBUILD (58 lines, 1.6 KB, ~446 tokens)
├── mingw-w64-rustup/
│   └── PKGBUILD (99 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-rxspencer/
│   └── PKGBUILD (73 lines, 2.2 KB, ~629 tokens)
├── mingw-w64-s-dftd3/
│   └── PKGBUILD (59 lines, 1.9 KB, ~546 tokens)
├── mingw-w64-s2geometry/
│   └── PKGBUILD (103 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-sad/
│   └── PKGBUILD (49 lines, 1.2 KB, ~370 tokens)
├── mingw-w64-safetyhook/
│   └── PKGBUILD (91 lines, 2.5 KB, ~751 tokens)
├── mingw-w64-sage-data-cunningham_tables/
│   └── PKGBUILD (27 lines, 853 B, ~252 tokens)
├── mingw-w64-samply/
│   └── PKGBUILD (41 lines, 1.3 KB, ~414 tokens)
├── mingw-w64-samtools/
│   └── PKGBUILD (70 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-sane/
│   └── PKGBUILD (78 lines, 2.7 KB, ~764 tokens)
├── mingw-w64-sass/
│   └── PKGBUILD (41 lines, 1.2 KB, ~376 tokens)
├── mingw-w64-sassc/
│   └── PKGBUILD (44 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-sbc/
│   └── PKGBUILD (53 lines, 1.6 KB, ~499 tokens)
├── mingw-w64-sbcl/
│   └── PKGBUILD (83 lines, 2.8 KB, ~862 tokens)
├── mingw-w64-scalapack/
│   └── PKGBUILD (108 lines, 3.2 KB, ~938 tokens)
├── mingw-w64-scc/
│   └── PKGBUILD (70 lines, 2.0 KB, ~618 tokens)
├── mingw-w64-sccache/
│   └── PKGBUILD (87 lines, 2.1 KB, ~626 tokens)
├── mingw-w64-scdoc/
│   └── PKGBUILD (56 lines, 1.6 KB, ~470 tokens)
├── mingw-w64-schroedinger/
│   └── PKGBUILD (51 lines, 1.8 KB, ~519 tokens)
├── mingw-w64-scite/
│   └── PKGBUILD (125 lines, 4.2 KB, ~1.3k tokens)
├── mingw-w64-scnlib/
│   └── PKGBUILD (82 lines, 2.5 KB, ~722 tokens)
├── mingw-w64-scons/
│   └── PKGBUILD (57 lines, 1.8 KB, ~522 tokens)
├── mingw-w64-scopehal-apps/
│   └── PKGBUILD (90 lines, 2.7 KB, ~792 tokens)
├── mingw-w64-scotch/
│   └── PKGBUILD (206 lines, 6.5 KB, ~2.0k tokens)
├── mingw-w64-scour/
│   └── PKGBUILD (42 lines, 1.4 KB, ~415 tokens)
├── mingw-w64-scrcpy/
│   └── PKGBUILD (63 lines, 1.9 KB, ~552 tokens)
├── mingw-w64-scribus/
│   └── PKGBUILD (157 lines, 5.4 KB, ~1.4k tokens)
├── mingw-w64-scummvm/
│   └── PKGBUILD (108 lines, 3.2 KB, ~923 tokens)
├── mingw-w64-sd/
│   └── PKGBUILD (56 lines, 1.6 KB, ~495 tokens)
├── mingw-w64-sdcc/
│   └── PKGBUILD (100 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-sdcv/
│   └── PKGBUILD (64 lines, 1.8 KB, ~539 tokens)
├── mingw-w64-sdl-gfx/
│   └── PKGBUILD (54 lines, 1.4 KB, ~438 tokens)
├── mingw-w64-sdl-image/
│   └── PKGBUILD (68 lines, 1.9 KB, ~551 tokens)
├── mingw-w64-sdl-mixer/
│   └── PKGBUILD (106 lines, 3.2 KB, ~886 tokens)
├── mingw-w64-sdl-net/
│   └── PKGBUILD (61 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-sdl-ttf/
│   └── PKGBUILD (81 lines, 2.1 KB, ~596 tokens)
├── mingw-w64-sdl12-compat/
│   └── PKGBUILD (93 lines, 3.4 KB, ~979 tokens)
├── mingw-w64-sdl2-compat/
│   └── PKGBUILD (87 lines, 2.9 KB, ~825 tokens)
├── mingw-w64-sdl2-gfx/
│   └── PKGBUILD (54 lines, 1.4 KB, ~437 tokens)
├── mingw-w64-sdl2-image/
│   └── PKGBUILD (77 lines, 2.3 KB, ~649 tokens)
├── mingw-w64-sdl2-mixer/
│   └── PKGBUILD (93 lines, 2.6 KB, ~741 tokens)
├── mingw-w64-sdl2-net/
│   └── PKGBUILD (61 lines, 1.8 KB, ~523 tokens)
├── mingw-w64-sdl2-pango/
│   └── PKGBUILD (60 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-sdl2-sound/
│   └── PKGBUILD (55 lines, 1.7 KB, ~494 tokens)
├── mingw-w64-sdl2-ttf/
│   └── PKGBUILD (71 lines, 2.1 KB, ~592 tokens)
├── mingw-w64-sdl3/
│   └── PKGBUILD (78 lines, 2.4 KB, ~685 tokens)
├── mingw-w64-sdl3-image/
│   └── PKGBUILD (71 lines, 2.3 KB, ~626 tokens)
├── mingw-w64-sdl3-mixer/
│   └── PKGBUILD (70 lines, 2.2 KB, ~616 tokens)
├── mingw-w64-sdl3-net/
│   └── PKGBUILD (64 lines, 1.8 KB, ~533 tokens)
├── mingw-w64-sdl3-sound/
│   └── PKGBUILD (49 lines, 1.4 KB, ~414 tokens)
├── mingw-w64-sdl3-ttf/
│   └── PKGBUILD (65 lines, 2.0 KB, ~566 tokens)
├── mingw-w64-seacas/
│   └── PKGBUILD (122 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-sed/
│   └── PKGBUILD (59 lines, 2.0 KB, ~596 tokens)
├── mingw-w64-seexpr/
│   └── PKGBUILD (87 lines, 3.1 KB, ~904 tokens)
├── mingw-w64-sequoia-sq/
│   └── PKGBUILD (71 lines, 2.3 KB, ~699 tokens)
├── mingw-w64-serd/
│   └── PKGBUILD (57 lines, 1.6 KB, ~479 tokens)
├── mingw-w64-serial-studio/
│   └── PKGBUILD (90 lines, 2.7 KB, ~750 tokens)
├── mingw-w64-sfcgal/
│   └── PKGBUILD (54 lines, 1.8 KB, ~518 tokens)
├── mingw-w64-sfml/
│   └── PKGBUILD (112 lines, 3.1 KB, ~897 tokens)
├── mingw-w64-sgml-common/
│   └── PKGBUILD (64 lines, 2.6 KB, ~777 tokens)
├── mingw-w64-shaderc/
│   └── PKGBUILD (90 lines, 3.1 KB, ~916 tokens)
├── mingw-w64-shapelib/
│   └── PKGBUILD (50 lines, 1.3 KB, ~397 tokens)
├── mingw-w64-shards/
│   └── PKGBUILD (42 lines, 1.2 KB, ~344 tokens)
├── mingw-w64-shared-mime-info/
│   └── PKGBUILD (77 lines, 2.9 KB, ~831 tokens)
├── mingw-w64-shared_meataxe/
│   └── PKGBUILD (58 lines, 1.4 KB, ~442 tokens)
├── mingw-w64-shfmt/
│   └── PKGBUILD (65 lines, 1.7 KB, ~535 tokens)
├── mingw-w64-shim_executable/
│   └── PKGBUILD (47 lines, 1.5 KB, ~419 tokens)
├── mingw-w64-shimmy/
│   └── PKGBUILD (47 lines, 1.1 KB, ~352 tokens)
├── mingw-w64-shine/
│   └── PKGBUILD (48 lines, 1.5 KB, ~478 tokens)
├── mingw-w64-shishi/
│   └── PKGBUILD (50 lines, 1.4 KB, ~417 tokens)
├── mingw-w64-shotcut/
│   └── PKGBUILD (83 lines, 2.3 KB, ~678 tokens)
├── mingw-w64-sidplayfp/
│   └── PKGBUILD (42 lines, 1.3 KB, ~401 tokens)
├── mingw-w64-siesta/
│   └── PKGBUILD (117 lines, 4.1 KB, ~1.1k tokens)
├── mingw-w64-sigutils/
│   └── PKGBUILD (64 lines, 1.8 KB, ~544 tokens)
├── mingw-w64-silc-toolkit/
│   └── PKGBUILD (88 lines, 3.2 KB, ~894 tokens)
├── mingw-w64-simdjson/
│   └── PKGBUILD (81 lines, 2.5 KB, ~766 tokens)
├── mingw-w64-simple-mail/
│   └── PKGBUILD (53 lines, 1.7 KB, ~506 tokens)
├── mingw-w64-simvoleon/
│   └── PKGBUILD (72 lines, 2.5 KB, ~713 tokens)
├── mingw-w64-sip/
│   └── PKGBUILD (74 lines, 2.1 KB, ~593 tokens)
├── mingw-w64-sirocco/
│   └── PKGBUILD (55 lines, 1.4 KB, ~432 tokens)
├── mingw-w64-skia/
│   └── PKGBUILD (150 lines, 5.4 KB, ~1.5k tokens)
├── mingw-w64-skyr-url/
│   └── PKGBUILD (63 lines, 2.0 KB, ~595 tokens)
├── mingw-w64-sl/
│   └── PKGBUILD (34 lines, 1.2 KB, ~351 tokens)
├── mingw-w64-sleef/
│   └── PKGBUILD (107 lines, 3.0 KB, ~858 tokens)
├── mingw-w64-slepc/
│   └── PKGBUILD (165 lines, 5.3 KB, ~1.6k tokens)
├── mingw-w64-slim-simulator/
│   └── PKGBUILD (58 lines, 1.7 KB, ~511 tokens)
├── mingw-w64-smpeg/
│   └── PKGBUILD (68 lines, 1.8 KB, ~526 tokens)
├── mingw-w64-smpeg2/
│   └── PKGBUILD (76 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-snappy/
│   └── PKGBUILD (99 lines, 2.9 KB, ~827 tokens)
├── mingw-w64-snoregrowl/
│   └── PKGBUILD (47 lines, 1.6 KB, ~452 tokens)
├── mingw-w64-snorenotify/
│   └── PKGBUILD (61 lines, 1.9 KB, ~564 tokens)
├── mingw-w64-snowball/
│   └── PKGBUILD (64 lines, 1.8 KB, ~555 tokens)
├── mingw-w64-soapyhackrf/
│   └── PKGBUILD (55 lines, 1.5 KB, ~446 tokens)
├── mingw-w64-soapyrtlsdr/
│   └── PKGBUILD (56 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-soapysdr/
│   └── PKGBUILD (66 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-soci/
│   └── PKGBUILD (71 lines, 2.1 KB, ~609 tokens)
├── mingw-w64-soil/
│   └── PKGBUILD (53 lines, 1.7 KB, ~542 tokens)
├── mingw-w64-sol2/
│   └── PKGBUILD (41 lines, 1.4 KB, ~400 tokens)
├── mingw-w64-solid/
│   └── PKGBUILD (62 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-solid3/
│   └── PKGBUILD (63 lines, 2.3 KB, ~666 tokens)
├── mingw-w64-sonivox/
│   └── PKGBUILD (85 lines, 2.6 KB, ~722 tokens)
├── mingw-w64-sonixflasher/
│   └── PKGBUILD (35 lines, 1012 B, ~292 tokens)
├── mingw-w64-sonnet/
│   └── PKGBUILD (80 lines, 2.6 KB, ~729 tokens)
├── mingw-w64-soqt/
│   └── PKGBUILD (57 lines, 1.9 KB, ~534 tokens)
├── mingw-w64-sord/
│   └── PKGBUILD (60 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-soundtouch/
│   └── PKGBUILD (59 lines, 1.9 KB, ~563 tokens)
├── mingw-w64-source-highlight/
│   └── PKGBUILD (82 lines, 2.7 KB, ~756 tokens)
├── mingw-w64-sox/
│   └── PKGBUILD (102 lines, 2.9 KB, ~857 tokens)
├── mingw-w64-sox-ng/
│   └── PKGBUILD (114 lines, 3.4 KB, ~975 tokens)
├── mingw-w64-spandsp/
│   └── PKGBUILD (54 lines, 1.9 KB, ~529 tokens)
├── mingw-w64-sparsehash/
│   └── PKGBUILD (41 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-spatialindex/
│   └── PKGBUILD (82 lines, 2.3 KB, ~668 tokens)
├── mingw-w64-spatialite-gui/
│   └── PKGBUILD (69 lines, 2.4 KB, ~682 tokens)
├── mingw-w64-spatialite-tools/
│   └── PKGBUILD (47 lines, 1.3 KB, ~392 tokens)
├── mingw-w64-spdlog/
│   └── PKGBUILD (87 lines, 2.6 KB, ~753 tokens)
├── mingw-w64-spdylay/
│   └── PKGBUILD (58 lines, 1.8 KB, ~524 tokens)
├── mingw-w64-spectra/
│   └── PKGBUILD (60 lines, 1.8 KB, ~534 tokens)
├── mingw-w64-speex/
│   └── PKGBUILD (47 lines, 1.3 KB, ~419 tokens)
├── mingw-w64-speexdsp/
│   └── PKGBUILD (48 lines, 1.5 KB, ~460 tokens)
├── mingw-w64-spglib/
│   └── PKGBUILD (98 lines, 3.5 KB, ~1.0k tokens)
├── mingw-w64-spice/
│   └── PKGBUILD (96 lines, 3.2 KB, ~912 tokens)
├── mingw-w64-spice-gtk/
│   └── PKGBUILD (114 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-spice-protocol/
│   └── PKGBUILD (40 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-spirv-cross/
│   └── PKGBUILD (72 lines, 2.4 KB, ~699 tokens)
├── mingw-w64-spirv-headers/
│   └── PKGBUILD (50 lines, 1.7 KB, ~515 tokens)
├── mingw-w64-spirv-llvm-translator/
│   └── PKGBUILD (73 lines, 2.7 KB, ~771 tokens)
├── mingw-w64-spirv-tools/
│   └── PKGBUILD (97 lines, 3.4 KB, ~991 tokens)
├── mingw-w64-spooles/
│   └── PKGBUILD (63 lines, 2.4 KB, ~694 tokens)
├── mingw-w64-sqlcipher/
│   └── PKGBUILD (87 lines, 2.7 KB, ~800 tokens)
├── mingw-w64-sqlite/
│   └── PKGBUILD (164 lines, 5.3 KB, ~1.5k tokens)
├── mingw-w64-sqlite-orm/
│   └── PKGBUILD (54 lines, 1.7 KB, ~528 tokens)
├── mingw-w64-sqlite3mc/
│   └── PKGBUILD (50 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-sqlitebrowser/
│   └── PKGBUILD (62 lines, 2.1 KB, ~575 tokens)
├── mingw-w64-squirrel/
│   └── PKGBUILD (83 lines, 2.6 KB, ~738 tokens)
├── mingw-w64-sratom/
│   └── PKGBUILD (58 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-srecord/
│   └── PKGBUILD (83 lines, 2.8 KB, ~766 tokens)
├── mingw-w64-srt/
│   └── PKGBUILD (71 lines, 2.0 KB, ~584 tokens)
├── mingw-w64-sse2neon/
│   └── PKGBUILD (23 lines, 857 B, ~253 tokens)
├── mingw-w64-starpu/
│   └── PKGBUILD (86 lines, 2.3 KB, ~708 tokens)
├── mingw-w64-starship/
│   └── PKGBUILD (62 lines, 1.8 KB, ~543 tokens)
├── mingw-w64-stb/
│   └── PKGBUILD (42 lines, 1.3 KB, ~388 tokens)
├── mingw-w64-stellarium/
│   └── PKGBUILD (96 lines, 2.9 KB, ~824 tokens)
├── mingw-w64-stk/
│   └── PKGBUILD (64 lines, 2.3 KB, ~667 tokens)
├── mingw-w64-stlink/
│   └── PKGBUILD (62 lines, 2.0 KB, ~580 tokens)
├── mingw-w64-stoken/
│   └── PKGBUILD (57 lines, 1.6 KB, ~473 tokens)
├── mingw-w64-stork/
│   └── PKGBUILD (55 lines, 1.4 KB, ~421 tokens)
├── mingw-w64-streamlink/
│   └── PKGBUILD (64 lines, 2.2 KB, ~627 tokens)
├── mingw-w64-strumpack/
│   └── PKGBUILD (69 lines, 2.3 KB, ~677 tokens)
├── mingw-w64-stxxl/
│   └── PKGBUILD (72 lines, 2.1 KB, ~630 tokens)
├── mingw-w64-styrene/
│   └── PKGBUILD (43 lines, 1.6 KB, ~468 tokens)
├── mingw-w64-suitesparse/
│   └── PKGBUILD (67 lines, 2.2 KB, ~644 tokens)
├── mingw-w64-sundials/
│   └── PKGBUILD (202 lines, 7.3 KB, ~2.0k tokens)
├── mingw-w64-supercollider/
│   └── PKGBUILD (92 lines, 3.1 KB, ~806 tokens)
├── mingw-w64-superlu/
│   └── PKGBUILD (125 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-superlu_dist/
│   └── PKGBUILD (95 lines, 3.0 KB, ~828 tokens)
├── mingw-w64-superlu_mt/
│   └── PKGBUILD (90 lines, 2.7 KB, ~767 tokens)
├── mingw-w64-supertux/
│   └── PKGBUILD (126 lines, 4.0 KB, ~1.1k tokens)
├── mingw-w64-supertuxkart/
│   └── PKGBUILD (92 lines, 2.7 KB, ~755 tokens)
├── mingw-w64-surrealdb/
│   └── PKGBUILD (68 lines, 2.1 KB, ~617 tokens)
├── mingw-w64-svg2pdf/
│   └── PKGBUILD (47 lines, 1.5 KB, ~471 tokens)
├── mingw-w64-svgo/
│   └── PKGBUILD (32 lines, 1.0 KB, ~320 tokens)
├── mingw-w64-svgpp/
│   └── PKGBUILD (33 lines, 1.3 KB, ~379 tokens)
├── mingw-w64-svt-av1/
│   └── PKGBUILD (67 lines, 2.1 KB, ~621 tokens)
├── mingw-w64-svt-jpeg-xs/
│   └── PKGBUILD (52 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-swi-prolog/
│   └── PKGBUILD (310 lines, 13.0 KB, ~3.8k tokens)
├── mingw-w64-swig/
│   └── PKGBUILD (87 lines, 2.5 KB, ~750 tokens)
├── mingw-w64-symengine/
│   └── PKGBUILD (84 lines, 2.4 KB, ~703 tokens)
├── mingw-w64-symmetrica/
│   └── PKGBUILD (57 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-syndication/
│   └── PKGBUILD (63 lines, 1.9 KB, ~565 tokens)
├── mingw-w64-syntax-highlighting/
│   └── PKGBUILD (66 lines, 2.1 KB, ~599 tokens)
├── mingw-w64-systemc/
│   └── PKGBUILD (54 lines, 1.9 KB, ~547 tokens)
├── mingw-w64-t1utils/
│   └── PKGBUILD (67 lines, 1.7 KB, ~526 tokens)
├── mingw-w64-taglib/
│   └── PKGBUILD (71 lines, 2.1 KB, ~613 tokens)
├── mingw-w64-talkatu/
│   └── PKGBUILD (60 lines, 1.6 KB, ~503 tokens)
├── mingw-w64-taucs/
│   └── PKGBUILD (79 lines, 3.4 KB, ~1.0k tokens)
├── mingw-w64-tbb/
│   └── PKGBUILD (91 lines, 2.7 KB, ~767 tokens)
├── mingw-w64-tblite/
│   └── PKGBUILD (77 lines, 2.4 KB, ~691 tokens)
├── mingw-w64-tcl/
│   └── PKGBUILD (156 lines, 6.6 KB, ~2.1k tokens)
├── mingw-w64-tcl-nsf/
│   └── PKGBUILD (41 lines, 967 B, ~291 tokens)
├── mingw-w64-tcllib/
│   └── PKGBUILD (32 lines, 1.1 KB, ~333 tokens)
├── mingw-w64-tclvfs/
│   └── PKGBUILD (66 lines, 1.6 KB, ~477 tokens)
├── mingw-w64-tclx/
│   └── PKGBUILD (44 lines, 1.4 KB, ~435 tokens)
├── mingw-w64-tdlib/
│   └── PKGBUILD (89 lines, 3.4 KB, ~917 tokens)
├── mingw-w64-tealdeer/
│   └── PKGBUILD (61 lines, 1.6 KB, ~495 tokens)
├── mingw-w64-teensy-loader-cli/
│   └── PKGBUILD (47 lines, 1.3 KB, ~384 tokens)
├── mingw-w64-template-glib/
│   └── PKGBUILD (46 lines, 1.6 KB, ~487 tokens)
├── mingw-w64-templates-parser/
│   └── PKGBUILD (45 lines, 1.4 KB, ~431 tokens)
├── mingw-w64-termcap/
│   └── PKGBUILD (69 lines, 2.3 KB, ~705 tokens)
├── mingw-w64-tesseract-data/
│   └── PKGBUILD (57 lines, 2.2 KB, ~628 tokens)
├── mingw-w64-tesseract-ocr/
│   └── PKGBUILD (119 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-testu01/
│   └── PKGBUILD (56 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-tetgen/
│   └── PKGBUILD (54 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-texinfo/
│   └── PKGBUILD (76 lines, 2.5 KB, ~726 tokens)
├── mingw-w64-texlive-bibtex-extra/
│   └── PKGBUILD (99 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-bin/
│   └── PKGBUILD (475 lines, 21.1 KB, ~6.6k tokens)
├── mingw-w64-texlive-core/
│   └── PKGBUILD (297 lines, 13.8 KB, ~4.0k tokens)
├── mingw-w64-texlive-extra-utils/
│   └── PKGBUILD (105 lines, 4.0 KB, ~1.2k tokens)
├── mingw-w64-texlive-font-utils/
│   └── PKGBUILD (99 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-fonts-extra/
│   └── PKGBUILD (99 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-fonts-recommended/
│   └── PKGBUILD (99 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-formats-extra/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-games/
│   └── PKGBUILD (96 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-humanities/
│   └── PKGBUILD (96 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-arabic/
│   └── PKGBUILD (99 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-chinese/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-cjk/
│   └── PKGBUILD (97 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-cyrillic/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-czechslovak/
│   └── PKGBUILD (98 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-english/
│   └── PKGBUILD (98 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-european/
│   └── PKGBUILD (101 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-french/
│   └── PKGBUILD (101 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-german/
│   └── PKGBUILD (101 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-greek/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-italian/
│   └── PKGBUILD (101 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-japanese/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-korean/
│   └── PKGBUILD (100 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-other/
│   └── PKGBUILD (97 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-polish/
│   └── PKGBUILD (102 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-portuguese/
│   └── PKGBUILD (101 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-lang-spanish/
│   └── PKGBUILD (101 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-latex-extra/
│   └── PKGBUILD (101 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-latex-recommended/
│   └── PKGBUILD (100 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-luatex/
│   └── PKGBUILD (97 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-metapost/
│   └── PKGBUILD (101 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-texlive-music/
│   └── PKGBUILD (96 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-pictures/
│   └── PKGBUILD (97 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-plain-generic/
│   └── PKGBUILD (99 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texlive-pstricks/
│   └── PKGBUILD (98 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-texlive-publishers/
│   └── PKGBUILD (96 lines, 3.6 KB, ~1.1k tokens)
├── mingw-w64-texlive-science/
│   └── PKGBUILD (99 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-texstudio/
│   └── PKGBUILD (100 lines, 2.9 KB, ~819 tokens)
├── mingw-w64-tfel/
│   └── PKGBUILD (77 lines, 2.3 KB, ~687 tokens)
├── mingw-w64-tgui/
│   └── PKGBUILD (70 lines, 2.3 KB, ~663 tokens)
├── mingw-w64-thorvg/
│   └── PKGBUILD (54 lines, 1.6 KB, ~466 tokens)
├── mingw-w64-threadweaver/
│   └── PKGBUILD (62 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-thrift/
│   └── PKGBUILD (109 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-tidy/
│   └── PKGBUILD (55 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-tigervnc/
│   └── PKGBUILD (83 lines, 2.5 KB, ~707 tokens)
├── mingw-w64-tiled/
│   └── PKGBUILD (85 lines, 2.8 KB, ~809 tokens)
├── mingw-w64-tiledb/
│   └── PKGBUILD (99 lines, 3.2 KB, ~931 tokens)
├── mingw-w64-tinyexpr/
│   └── PKGBUILD (38 lines, 1.3 KB, ~416 tokens)
├── mingw-w64-tinyformat/
│   └── PKGBUILD (20 lines, 747 B, ~220 tokens)
├── mingw-w64-tinymist/
│   └── PKGBUILD (60 lines, 1.8 KB, ~544 tokens)
├── mingw-w64-tinyxml/
│   └── PKGBUILD (55 lines, 2.2 KB, ~666 tokens)
├── mingw-w64-tinyxml2/
│   └── PKGBUILD (66 lines, 2.2 KB, ~640 tokens)
├── mingw-w64-tixi/
│   └── PKGBUILD (75 lines, 2.8 KB, ~789 tokens)
├── mingw-w64-tk/
│   └── PKGBUILD (104 lines, 3.9 KB, ~1.3k tokens)
├── mingw-w64-tkimg/
│   └── PKGBUILD (68 lines, 1.8 KB, ~527 tokens)
├── mingw-w64-tklib/
│   └── PKGBUILD (41 lines, 1.3 KB, ~393 tokens)
├── mingw-w64-tktable/
│   └── PKGBUILD (35 lines, 1.0 KB, ~308 tokens)
├── mingw-w64-tl-expected/
│   └── PKGBUILD (54 lines, 1.6 KB, ~472 tokens)
├── mingw-w64-tldr/
│   └── PKGBUILD (67 lines, 2.1 KB, ~611 tokens)
├── mingw-w64-tlfloat/
│   └── PKGBUILD (54 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-tmxlite/
│   └── PKGBUILD (85 lines, 2.8 KB, ~856 tokens)
├── mingw-w64-tokei/
│   └── PKGBUILD (47 lines, 1.1 KB, ~346 tokens)
├── mingw-w64-tolua/
│   └── PKGBUILD (45 lines, 1.3 KB, ~444 tokens)
├── mingw-w64-tombi/
│   └── PKGBUILD (53 lines, 1.6 KB, ~483 tokens)
├── mingw-w64-toml-f/
│   └── PKGBUILD (54 lines, 1.8 KB, ~512 tokens)
├── mingw-w64-toml11/
│   └── PKGBUILD (43 lines, 1.3 KB, ~386 tokens)
├── mingw-w64-tomlc17/
│   └── PKGBUILD (43 lines, 1.2 KB, ~361 tokens)
├── mingw-w64-tomlplusplus/
│   └── PKGBUILD (45 lines, 1.5 KB, ~441 tokens)
├── mingw-w64-tools/
│   └── PKGBUILD (57 lines, 1.9 KB, ~612 tokens)
├── mingw-w64-tor/
│   └── PKGBUILD (83 lines, 2.4 KB, ~712 tokens)
├── mingw-w64-totem-pl-parser/
│   └── PKGBUILD (59 lines, 2.1 KB, ~609 tokens)
├── mingw-w64-transmission/
│   └── PKGBUILD (180 lines, 5.5 KB, ~1.6k tokens)
├── mingw-w64-tree-sitter/
│   └── PKGBUILD (99 lines, 2.8 KB, ~837 tokens)
├── mingw-w64-tree-sitter-c/
│   └── PKGBUILD (52 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-tree-sitter-lua/
│   └── PKGBUILD (52 lines, 1.7 KB, ~518 tokens)
├── mingw-w64-tree-sitter-markdown/
│   └── PKGBUILD (53 lines, 1.8 KB, ~564 tokens)
├── mingw-w64-tree-sitter-query/
│   └── PKGBUILD (51 lines, 1.7 KB, ~508 tokens)
├── mingw-w64-tree-sitter-vim/
│   └── PKGBUILD (45 lines, 1.5 KB, ~468 tokens)
├── mingw-w64-tree-sitter-vimdoc/
│   └── PKGBUILD (44 lines, 1.6 KB, ~487 tokens)
├── mingw-w64-treedec/
│   └── PKGBUILD (50 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-trilinos/
│   └── PKGBUILD (158 lines, 5.1 KB, ~1.4k tokens)
├── mingw-w64-trippy/
│   └── PKGBUILD (48 lines, 1.6 KB, ~504 tokens)
├── mingw-w64-triton/
│   └── PKGBUILD (96 lines, 3.1 KB, ~900 tokens)
├── mingw-w64-trompeloeil/
│   └── PKGBUILD (48 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-trunk/
│   └── PKGBUILD (94 lines, 2.7 KB, ~820 tokens)
├── mingw-w64-tslib/
│   └── PKGBUILD (40 lines, 1.1 KB, ~342 tokens)
├── mingw-w64-ttf-cm-unicode/
│   └── PKGBUILD (26 lines, 1.0 KB, ~319 tokens)
├── mingw-w64-ttf-dejavu/
│   └── PKGBUILD (45 lines, 1.6 KB, ~484 tokens)
├── mingw-w64-ttf-nerd-fonts-symbols/
│   └── PKGBUILD (70 lines, 2.9 KB, ~839 tokens)
├── mingw-w64-ttf-paratype/
│   └── PKGBUILD (45 lines, 1.6 KB, ~435 tokens)
├── mingw-w64-ttfautohint/
│   └── PKGBUILD (58 lines, 1.9 KB, ~582 tokens)
├── mingw-w64-ttyd/
│   └── PKGBUILD (51 lines, 1.6 KB, ~463 tokens)
├── mingw-w64-tulip/
│   └── PKGBUILD (128 lines, 4.7 KB, ~1.2k tokens)
├── mingw-w64-turbo/
│   └── PKGBUILD (74 lines, 2.5 KB, ~715 tokens)
├── mingw-w64-tuxpaint/
│   └── PKGBUILD (106 lines, 3.1 KB, ~906 tokens)
├── mingw-w64-tvision/
│   └── PKGBUILD (72 lines, 2.1 KB, ~616 tokens)
├── mingw-w64-twapi/
│   └── PKGBUILD (33 lines, 979 B, ~294 tokens)
├── mingw-w64-twine/
│   └── PKGBUILD (62 lines, 2.2 KB, ~624 tokens)
├── mingw-w64-twolame/
│   └── PKGBUILD (57 lines, 1.6 KB, ~456 tokens)
├── mingw-w64-ty/
│   └── PKGBUILD (69 lines, 2.4 KB, ~674 tokens)
├── mingw-w64-typescript/
│   └── PKGBUILD (34 lines, 1017 B, ~302 tokens)
├── mingw-w64-typst/
│   └── PKGBUILD (43 lines, 1.2 KB, ~369 tokens)
├── mingw-w64-typstyle/
│   └── PKGBUILD (52 lines, 1.5 KB, ~437 tokens)
├── mingw-w64-tzdata/
│   └── PKGBUILD (47 lines, 2.0 KB, ~565 tokens)
├── mingw-w64-uasm/
│   └── PKGBUILD (47 lines, 2.1 KB, ~635 tokens)
├── mingw-w64-uchardet/
│   └── PKGBUILD (53 lines, 1.7 KB, ~505 tokens)
├── mingw-w64-ucl/
│   └── PKGBUILD (66 lines, 1.9 KB, ~543 tokens)
├── mingw-w64-udis86/
│   └── PKGBUILD (58 lines, 2.0 KB, ~551 tokens)
├── mingw-w64-udunits/
│   └── PKGBUILD (52 lines, 1.5 KB, ~435 tokens)
├── mingw-w64-uhttpmock/
│   └── PKGBUILD (52 lines, 1.7 KB, ~478 tokens)
├── mingw-w64-umbrello/
│   └── PKGBUILD (76 lines, 2.8 KB, ~770 tokens)
├── mingw-w64-unbound/
│   └── PKGBUILD (91 lines, 2.8 KB, ~830 tokens)
├── mingw-w64-uncrustify/
│   └── PKGBUILD (60 lines, 1.9 KB, ~562 tokens)
├── mingw-w64-unibilium/
│   └── PKGBUILD (46 lines, 1.3 KB, ~381 tokens)
├── mingw-w64-unicode-character-database/
│   └── PKGBUILD (36 lines, 1.7 KB, ~484 tokens)
├── mingw-w64-unicorn/
│   └── PKGBUILD (120 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-unifdef/
│   └── PKGBUILD (28 lines, 1009 B, ~297 tokens)
├── mingw-w64-unittest-cpp/
│   └── PKGBUILD (55 lines, 1.8 KB, ~511 tokens)
├── mingw-w64-unixodbc/
│   └── PKGBUILD (65 lines, 1.9 KB, ~570 tokens)
├── mingw-w64-unordered-dense/
│   └── PKGBUILD (47 lines, 1.6 KB, ~459 tokens)
├── mingw-w64-unpaper/
│   └── PKGBUILD (53 lines, 1.8 KB, ~523 tokens)
├── mingw-w64-unrar/
│   └── PKGBUILD (63 lines, 1.5 KB, ~439 tokens)
├── mingw-w64-upx/
│   └── PKGBUILD (59 lines, 1.6 KB, ~496 tokens)
├── mingw-w64-uriparser/
│   └── PKGBUILD (92 lines, 2.8 KB, ~813 tokens)
├── mingw-w64-usbredir/
│   └── PKGBUILD (55 lines, 1.6 KB, ~497 tokens)
├── mingw-w64-usbview/
│   └── PKGBUILD (90 lines, 2.9 KB, ~827 tokens)
├── mingw-w64-usql/
│   └── PKGBUILD (60 lines, 1.4 KB, ~422 tokens)
├── mingw-w64-usrsctp/
│   └── PKGBUILD (54 lines, 1.5 KB, ~461 tokens)
├── mingw-w64-utf8cpp/
│   └── PKGBUILD (51 lines, 1.5 KB, ~451 tokens)
├── mingw-w64-uthash/
│   └── PKGBUILD (38 lines, 1.3 KB, ~395 tokens)
├── mingw-w64-uutils-coreutils/
│   └── PKGBUILD (48 lines, 1.6 KB, ~447 tokens)
├── mingw-w64-uutils-diffutils/
│   └── PKGBUILD (40 lines, 1.3 KB, ~389 tokens)
├── mingw-w64-uutils-findutils/
│   └── PKGBUILD (44 lines, 1.3 KB, ~376 tokens)
├── mingw-w64-uutils-grep/
│   └── PKGBUILD (42 lines, 1.2 KB, ~359 tokens)
├── mingw-w64-uutils-sed/
│   └── PKGBUILD (39 lines, 1.1 KB, ~331 tokens)
├── mingw-w64-uv/
│   └── PKGBUILD (118 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-uvatlas/
│   └── PKGBUILD (73 lines, 2.3 KB, ~665 tokens)
├── mingw-w64-uvicorn/
│   └── PKGBUILD (49 lines, 1.5 KB, ~450 tokens)
├── mingw-w64-v8/
│   └── PKGBUILD (259 lines, 12.9 KB, ~3.4k tokens)
├── mingw-w64-vala/
│   └── PKGBUILD (62 lines, 2.0 KB, ~578 tokens)
├── mingw-w64-vala-language-server/
│   └── PKGBUILD (64 lines, 1.8 KB, ~538 tokens)
├── mingw-w64-vamp-plugin-sdk/
│   └── PKGBUILD (54 lines, 1.7 KB, ~513 tokens)
├── mingw-w64-vapoursynth/
│   └── PKGBUILD (94 lines, 3.2 KB, ~923 tokens)
├── mingw-w64-vcdimager/
│   └── PKGBUILD (55 lines, 1.8 KB, ~501 tokens)
├── mingw-w64-vector_blf/
│   └── PKGBUILD (62 lines, 2.2 KB, ~617 tokens)
├── mingw-w64-vera++/
│   └── PKGBUILD (65 lines, 2.1 KB, ~576 tokens)
├── mingw-w64-verdict/
│   └── PKGBUILD (50 lines, 1.7 KB, ~478 tokens)
├── mingw-w64-verilator/
│   └── PKGBUILD (65 lines, 1.7 KB, ~503 tokens)
├── mingw-w64-vhs/
│   └── PKGBUILD (61 lines, 1.6 KB, ~481 tokens)
├── mingw-w64-vid.stab/
│   └── PKGBUILD (100 lines, 2.8 KB, ~822 tokens)
├── mingw-w64-vigra/
│   └── PKGBUILD (121 lines, 3.6 KB, ~1.0k tokens)
├── mingw-w64-virglrenderer/
│   └── PKGBUILD (86 lines, 2.5 KB, ~713 tokens)
├── mingw-w64-virt-viewer/
│   └── PKGBUILD (104 lines, 3.6 KB, ~976 tokens)
├── mingw-w64-virtualpg/
│   └── PKGBUILD (47 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-viskores/
│   └── PKGBUILD (69 lines, 2.4 KB, ~665 tokens)
├── mingw-w64-visualizationlibrary/
│   └── PKGBUILD (91 lines, 3.0 KB, ~850 tokens)
├── mingw-w64-vivid/
│   └── PKGBUILD (41 lines, 1.1 KB, ~334 tokens)
├── mingw-w64-vk-bootstrap/
│   └── PKGBUILD (52 lines, 1.7 KB, ~492 tokens)
├── mingw-w64-vlc/
│   └── PKGBUILD (218 lines, 8.7 KB, ~2.3k tokens)
├── mingw-w64-vlfeat/
│   └── PKGBUILD (70 lines, 2.1 KB, ~578 tokens)
├── mingw-w64-vmaf/
│   └── PKGBUILD (57 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-vo-amrwbenc/
│   └── PKGBUILD (44 lines, 1.2 KB, ~359 tokens)
├── mingw-w64-volk/
│   └── PKGBUILD (95 lines, 2.9 KB, ~832 tokens)
├── mingw-w64-vrpn/
│   └── PKGBUILD (88 lines, 2.6 KB, ~742 tokens)
├── mingw-w64-vsgimgui/
│   └── PKGBUILD (89 lines, 3.2 KB, ~941 tokens)
├── mingw-w64-vsgpoints/
│   └── PKGBUILD (72 lines, 2.5 KB, ~723 tokens)
├── mingw-w64-vsgqt/
│   └── PKGBUILD (73 lines, 2.4 KB, ~720 tokens)
├── mingw-w64-vsgxchange/
│   └── PKGBUILD (82 lines, 2.7 KB, ~793 tokens)
├── mingw-w64-vss-extra/
│   └── PKGBUILD (45 lines, 1.4 KB, ~427 tokens)
├── mingw-w64-vss-text/
│   └── PKGBUILD (54 lines, 1.7 KB, ~518 tokens)
├── mingw-w64-vtk/
│   └── PKGBUILD (254 lines, 11.0 KB, ~2.8k tokens)
├── mingw-w64-vulkan-headers/
│   └── PKGBUILD (58 lines, 1.9 KB, ~568 tokens)
├── mingw-w64-vulkan-loader/
│   └── PKGBUILD (80 lines, 2.6 KB, ~758 tokens)
├── mingw-w64-vulkan-memory-allocator/
│   └── PKGBUILD (27 lines, 995 B, ~286 tokens)
├── mingw-w64-vulkan-utility-libraries/
│   └── PKGBUILD (56 lines, 1.9 KB, ~574 tokens)
├── mingw-w64-vulkan-validation-layers/
│   └── PKGBUILD (71 lines, 2.6 KB, ~755 tokens)
├── mingw-w64-vulkan-volk/
│   └── PKGBUILD (54 lines, 1.5 KB, ~447 tokens)
├── mingw-w64-vulkanscenegraph/
│   └── PKGBUILD (101 lines, 3.3 KB, ~964 tokens)
├── mingw-w64-w3c-mathml2/
│   └── PKGBUILD (71 lines, 5.8 KB, ~1.3k tokens)
├── mingw-w64-wabt/
│   └── PKGBUILD (96 lines, 3.2 KB, ~832 tokens)
├── mingw-w64-wac/
│   └── PKGBUILD (48 lines, 1.2 KB, ~361 tokens)
├── mingw-w64-waf/
│   └── PKGBUILD (70 lines, 2.6 KB, ~800 tokens)
├── mingw-w64-wakatime/
│   └── PKGBUILD (57 lines, 1.8 KB, ~553 tokens)
├── mingw-w64-wannier90/
│   └── PKGBUILD (58 lines, 2.0 KB, ~628 tokens)
├── mingw-w64-wasi-compiler-rt/
│   └── PKGBUILD (122 lines, 4.4 KB, ~1.2k tokens)
├── mingw-w64-wasi-libc/
│   └── PKGBUILD (106 lines, 3.3 KB, ~951 tokens)
├── mingw-w64-wasi-libc++/
│   └── PKGBUILD (152 lines, 5.3 KB, ~1.4k tokens)
├── mingw-w64-wasm-bindgen/
│   └── PKGBUILD (84 lines, 2.3 KB, ~675 tokens)
├── mingw-w64-wasm-component-ld/
│   └── PKGBUILD (47 lines, 1.4 KB, ~410 tokens)
├── mingw-w64-wasm-pack/
│   └── PKGBUILD (97 lines, 2.9 KB, ~879 tokens)
├── mingw-w64-wasm-pkg-tools/
│   └── PKGBUILD (33 lines, 1020 B, ~300 tokens)
├── mingw-w64-wasm-server-runner/
│   └── PKGBUILD (56 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-wasm-tools/
│   └── PKGBUILD (45 lines, 1.6 KB, ~471 tokens)
├── mingw-w64-wasmtime/
│   └── PKGBUILD (145 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-watchexec/
│   └── PKGBUILD (60 lines, 1.9 KB, ~548 tokens)
├── mingw-w64-wavpack/
│   └── PKGBUILD (43 lines, 1.4 KB, ~425 tokens)
├── mingw-w64-wb32-dfu-updater_cli/
│   └── PKGBUILD (46 lines, 1.4 KB, ~394 tokens)
├── mingw-w64-webgpu-headers/
│   └── PKGBUILD (57 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-webp-pixbuf-loader/
│   └── PKGBUILD (47 lines, 1.5 KB, ~465 tokens)
├── mingw-w64-webrtc-audio-processing-1/
│   └── PKGBUILD (64 lines, 2.3 KB, ~637 tokens)
├── mingw-w64-webview/
│   └── PKGBUILD (91 lines, 3.0 KB, ~856 tokens)
├── mingw-w64-webview2-loader/
│   └── PKGBUILD (29 lines, 1.0 KB, ~307 tokens)
├── mingw-w64-wezterm/
│   └── PKGBUILD (64 lines, 2.3 KB, ~632 tokens)
├── mingw-w64-wget/
│   └── PKGBUILD (80 lines, 2.2 KB, ~653 tokens)
├── mingw-w64-wget2/
│   └── PKGBUILD (107 lines, 2.8 KB, ~826 tokens)
├── mingw-w64-wgpu-native/
│   └── PKGBUILD (51 lines, 1.5 KB, ~462 tokens)
├── mingw-w64-wgsl-analyzer/
│   └── PKGBUILD (51 lines, 1.3 KB, ~411 tokens)
├── mingw-w64-whisper.cpp/
│   └── PKGBUILD (77 lines, 2.2 KB, ~660 tokens)
├── mingw-w64-widelands/
│   └── PKGBUILD (91 lines, 2.9 KB, ~809 tokens)
├── mingw-w64-wiiuse/
│   └── PKGBUILD (68 lines, 2.0 KB, ~574 tokens)
├── mingw-w64-win7appid/
│   └── PKGBUILD (33 lines, 1.1 KB, ~322 tokens)
├── mingw-w64-windows-default-manifest/
│   └── PKGBUILD (27 lines, 960 B, ~265 tokens)
├── mingw-w64-wined3d/
│   └── PKGBUILD (94 lines, 2.4 KB, ~724 tokens)
├── mingw-w64-wineditline/
│   └── PKGBUILD (67 lines, 2.3 KB, ~651 tokens)
├── mingw-w64-winfile/
│   └── PKGBUILD (51 lines, 1.5 KB, ~455 tokens)
├── mingw-w64-winico/
│   └── PKGBUILD (54 lines, 1.9 KB, ~564 tokens)
├── mingw-w64-winpthreads/
│   └── PKGBUILD (115 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-winpthreads-stub/
│   └── PKGBUILD (24 lines, 743 B, ~222 tokens)
├── mingw-w64-winpty/
│   └── PKGBUILD (46 lines, 1.6 KB, ~449 tokens)
├── mingw-w64-winsparkle/
│   └── PKGBUILD (64 lines, 2.3 KB, ~640 tokens)
├── mingw-w64-winstorecompat/
│   └── PKGBUILD (49 lines, 1.5 KB, ~471 tokens)
├── mingw-w64-wintab-sdk/
│   └── PKGBUILD (21 lines, 739 B, ~206 tokens)
├── mingw-w64-wireshark/
│   └── PKGBUILD (105 lines, 3.1 KB, ~888 tokens)
├── mingw-w64-wit-bindgen/
│   └── PKGBUILD (49 lines, 1.2 KB, ~360 tokens)
├── mingw-w64-wkhtmltopdf/
│   └── PKGBUILD (67 lines, 2.4 KB, ~741 tokens)
├── mingw-w64-woff2/
│   └── PKGBUILD (57 lines, 1.8 KB, ~520 tokens)
├── mingw-w64-wolfssl/
│   └── PKGBUILD (100 lines, 3.0 KB, ~859 tokens)
├── mingw-w64-wslay/
│   └── PKGBUILD (55 lines, 1.5 KB, ~440 tokens)
├── mingw-w64-wt/
│   └── PKGBUILD (124 lines, 4.5 KB, ~1.2k tokens)
├── mingw-w64-wv/
│   └── PKGBUILD (56 lines, 1.5 KB, ~452 tokens)
├── mingw-w64-wwrando/
│   └── PKGBUILD (52 lines, 1.7 KB, ~523 tokens)
├── mingw-w64-wxPython/
│   └── PKGBUILD (127 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-wxSVG/
│   └── PKGBUILD (79 lines, 2.3 KB, ~687 tokens)
├── mingw-w64-wxmacmolplt/
│   └── PKGBUILD (66 lines, 2.0 KB, ~594 tokens)
├── mingw-w64-wxwidgets3.2/
│   └── PKGBUILD (463 lines, 18.6 KB, ~5.5k tokens)
├── mingw-w64-wxwidgets3.3/
│   └── PKGBUILD (448 lines, 19.2 KB, ~5.6k tokens)
├── mingw-w64-x264/
│   └── PKGBUILD (94 lines, 3.1 KB, ~930 tokens)
├── mingw-w64-x265/
│   └── PKGBUILD (121 lines, 3.2 KB, ~945 tokens)
├── mingw-w64-x86-simd-sort/
│   └── PKGBUILD (48 lines, 1.3 KB, ~404 tokens)
├── mingw-w64-x86_64-elf-binutils/
│   └── PKGBUILD (63 lines, 2.0 KB, ~601 tokens)
├── mingw-w64-x86_64-elf-gcc/
│   └── PKGBUILD (130 lines, 3.9 KB, ~1.2k tokens)
├── mingw-w64-x86_64-elf-newlib/
│   └── PKGBUILD (146 lines, 5.2 KB, ~1.5k tokens)
├── mingw-w64-xa65/
│   └── PKGBUILD (51 lines, 1.2 KB, ~366 tokens)
├── mingw-w64-xalan-c/
│   └── PKGBUILD (91 lines, 2.7 KB, ~763 tokens)
├── mingw-w64-xapian-core/
│   └── PKGBUILD (81 lines, 2.2 KB, ~686 tokens)
├── mingw-w64-xavs/
│   └── PKGBUILD (62 lines, 1.7 KB, ~509 tokens)
├── mingw-w64-xerces-c/
│   └── PKGBUILD (57 lines, 1.9 KB, ~555 tokens)
├── mingw-w64-xeus/
│   └── PKGBUILD (66 lines, 1.7 KB, ~497 tokens)
├── mingw-w64-xeus-zmq/
│   └── PKGBUILD (59 lines, 1.6 KB, ~476 tokens)
├── mingw-w64-xevd/
│   └── PKGBUILD (64 lines, 1.8 KB, ~542 tokens)
├── mingw-w64-xeve/
│   └── PKGBUILD (75 lines, 2.1 KB, ~623 tokens)
├── mingw-w64-xlnt/
│   └── PKGBUILD (89 lines, 2.7 KB, ~793 tokens)
├── mingw-w64-xlsxio/
│   └── PKGBUILD (74 lines, 2.2 KB, ~653 tokens)
├── mingw-w64-xmake/
│   └── PKGBUILD (53 lines, 1.3 KB, ~406 tokens)
├── mingw-w64-xmlada/
│   └── PKGBUILD (66 lines, 2.0 KB, ~613 tokens)
├── mingw-w64-xmlf90/
│   └── PKGBUILD (55 lines, 1.7 KB, ~500 tokens)
├── mingw-w64-xmlsec/
│   └── PKGBUILD (109 lines, 3.7 KB, ~1.1k tokens)
├── mingw-w64-xmlstarlet/
│   └── PKGBUILD (61 lines, 2.3 KB, ~659 tokens)
├── mingw-w64-xmlto/
│   └── PKGBUILD (69 lines, 2.0 KB, ~602 tokens)
├── mingw-w64-xournalpp/
│   └── PKGBUILD (80 lines, 2.4 KB, ~687 tokens)
├── mingw-w64-xpdf/
│   └── PKGBUILD (101 lines, 3.1 KB, ~898 tokens)
├── mingw-w64-xpm-nox/
│   └── PKGBUILD (48 lines, 1.8 KB, ~541 tokens)
├── mingw-w64-xsimd/
│   └── PKGBUILD (49 lines, 1.5 KB, ~425 tokens)
├── mingw-w64-xvidcore/
│   └── PKGBUILD (49 lines, 1.5 KB, ~474 tokens)
├── mingw-w64-xxhash/
│   └── PKGBUILD (61 lines, 1.7 KB, ~510 tokens)
├── mingw-w64-xz/
│   └── PKGBUILD (70 lines, 2.1 KB, ~649 tokens)
├── mingw-w64-yajl/
│   └── PKGBUILD (67 lines, 1.9 KB, ~550 tokens)
├── mingw-w64-yaml-cpp/
│   └── PKGBUILD (81 lines, 2.3 KB, ~682 tokens)
├── mingw-w64-yarn/
│   └── PKGBUILD (52 lines, 1.6 KB, ~482 tokens)
├── mingw-w64-yasm/
│   └── PKGBUILD (64 lines, 2.1 KB, ~669 tokens)
├── mingw-w64-yazi/
│   └── PKGBUILD (68 lines, 2.4 KB, ~688 tokens)
├── mingw-w64-yelp-tools/
│   └── PKGBUILD (85 lines, 2.5 KB, ~759 tokens)
├── mingw-w64-yelp-xsl/
│   └── PKGBUILD (56 lines, 1.5 KB, ~457 tokens)
├── mingw-w64-yices/
│   └── PKGBUILD (73 lines, 1.7 KB, ~520 tokens)
├── mingw-w64-yosys/
│   └── PKGBUILD (81 lines, 2.3 KB, ~682 tokens)
├── mingw-w64-yq/
│   └── PKGBUILD (58 lines, 2.0 KB, ~606 tokens)
├── mingw-w64-yt-dlp/
│   └── PKGBUILD (71 lines, 2.2 KB, ~661 tokens)
├── mingw-w64-yt-dlp-ejs/
│   └── PKGBUILD (52 lines, 1.6 KB, ~485 tokens)
├── mingw-w64-yubico-c/
│   └── PKGBUILD (60 lines, 1.4 KB, ~426 tokens)
├── mingw-w64-yubikey-personalization/
│   └── PKGBUILD (70 lines, 1.7 KB, ~523 tokens)
├── mingw-w64-yuview/
│   └── PKGBUILD (64 lines, 1.8 KB, ~531 tokens)
├── mingw-w64-yyjson/
│   └── PKGBUILD (71 lines, 2.1 KB, ~624 tokens)
├── mingw-w64-z3/
│   └── PKGBUILD (116 lines, 3.5 KB, ~978 tokens)
├── mingw-w64-zbar/
│   └── PKGBUILD (70 lines, 2.0 KB, ~577 tokens)
├── mingw-w64-zeal/
│   └── PKGBUILD (83 lines, 2.4 KB, ~722 tokens)
├── mingw-w64-zed/
│   └── PKGBUILD (146 lines, 5.2 KB, ~1.5k tokens)
├── mingw-w64-zeromq/
│   └── PKGBUILD (59 lines, 1.9 KB, ~558 tokens)
├── mingw-w64-zig/
│   └── PKGBUILD (76 lines, 2.3 KB, ~665 tokens)
├── mingw-w64-zimg/
│   └── PKGBUILD (48 lines, 1.6 KB, ~480 tokens)
├── mingw-w64-zint/
│   └── PKGBUILD (83 lines, 2.4 KB, ~721 tokens)
├── mingw-w64-zix/
│   └── PKGBUILD (56 lines, 1.7 KB, ~514 tokens)
├── mingw-w64-zizmor/
│   └── PKGBUILD (52 lines, 1.6 KB, ~491 tokens)
├── mingw-w64-zlib/
│   └── PKGBUILD (134 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-zlib-ng/
│   └── PKGBUILD (131 lines, 4.3 KB, ~1.2k tokens)
├── mingw-w64-zoitechat/
│   └── PKGBUILD (121 lines, 3.7 KB, ~1.0k tokens)
├── mingw-w64-zola/
│   └── PKGBUILD (57 lines, 1.7 KB, ~522 tokens)
├── mingw-w64-zopfli/
│   └── PKGBUILD (117 lines, 3.8 KB, ~1.1k tokens)
├── mingw-w64-zoxide/
│   └── PKGBUILD (56 lines, 1.6 KB, ~486 tokens)
├── mingw-w64-zstd/
│   └── PKGBUILD (66 lines, 2.1 KB, ~630 tokens)
├── mingw-w64-zug/
│   └── PKGBUILD (54 lines, 1.6 KB, ~478 tokens)
├── mingw-w64-zvbi/
│   └── PKGBUILD (67 lines, 1.7 KB, ~522 tokens)
├── mingw-w64-zxcvbn-c/
│   └── PKGBUILD (76 lines, 2.3 KB, ~703 tokens)
├── mingw-w64-zxing-cpp/
│   └── PKGBUILD (87 lines, 2.5 KB, ~737 tokens)
├── mingw-w64-zycore-c/
│   └── PKGBUILD (73 lines, 1.9 KB, ~584 tokens)
├── mingw-w64-zydis/
│   └── PKGBUILD (85 lines, 2.2 KB, ~643 tokens)
└── mingw-w64-zziplib/
    └── PKGBUILD (96 lines, 3.0 KB, ~878 tokens)
```

## Source Files

================================================
[TRUNCATED: Token limit of 60000 reached for remaining files]

