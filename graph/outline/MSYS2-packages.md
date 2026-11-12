# Codebase Digest: MSYS2-packages

- Files analyzed: 595
- Total lines: 37147
- Total size: 1.06 MB
- Git branch: `master`
- Git HEAD commit: `4ed2f3b1 (gradle: Update to 9.9.1 (#6977))`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
MSYS2-packages/
├── ack/
│   └── PKGBUILD (46 lines, 1.3 KB, ~406 tokens)
├── ansible/
│   └── PKGBUILD (50 lines, 1.5 KB, ~440 tokens)
├── ansible-core/
│   └── PKGBUILD (66 lines, 1.7 KB, ~518 tokens)
├── apr/
│   └── PKGBUILD (77 lines, 1.9 KB, ~585 tokens)
├── apr-util/
│   └── PKGBUILD (69 lines, 1.7 KB, ~539 tokens)
├── asciidoc/
│   └── PKGBUILD (43 lines, 1.3 KB, ~387 tokens)
├── asciidoctor/
│   └── PKGBUILD (53 lines, 1.3 KB, ~393 tokens)
├── aspell/
│   └── PKGBUILD (79 lines, 2.1 KB, ~649 tokens)
├── aspell-de/
│   └── PKGBUILD (32 lines, 738 B, ~235 tokens)
├── aspell-en/
│   └── PKGBUILD (33 lines, 956 B, ~287 tokens)
├── atool/
│   └── PKGBUILD (43 lines, 1.7 KB, ~468 tokens)
├── autoconf-archive/
│   └── PKGBUILD (46 lines, 1.3 KB, ~390 tokens)
├── autoconf2.13/
│   └── PKGBUILD (75 lines, 2.7 KB, ~765 tokens)
├── autoconf2.69/
│   └── PKGBUILD (80 lines, 3.0 KB, ~814 tokens)
├── autoconf2.71/
│   └── PKGBUILD (94 lines, 3.3 KB, ~874 tokens)
├── autoconf2.72/
│   └── PKGBUILD (76 lines, 2.5 KB, ~675 tokens)
├── autoconf2.73/
│   └── PKGBUILD (76 lines, 2.4 KB, ~655 tokens)
├── autogen/
│   └── PKGBUILD (52 lines, 1.8 KB, ~543 tokens)
├── automake1.11/
│   └── PKGBUILD (76 lines, 2.3 KB, ~680 tokens)
├── automake1.12/
│   └── PKGBUILD (77 lines, 2.4 KB, ~713 tokens)
├── automake1.13/
│   └── PKGBUILD (77 lines, 2.4 KB, ~713 tokens)
├── automake1.14/
│   └── PKGBUILD (78 lines, 2.4 KB, ~720 tokens)
├── automake1.15/
│   └── PKGBUILD (100 lines, 2.9 KB, ~857 tokens)
├── automake1.16/
│   └── PKGBUILD (99 lines, 2.8 KB, ~838 tokens)
├── automake1.17/
│   └── PKGBUILD (90 lines, 2.5 KB, ~743 tokens)
├── automake1.18/
│   └── PKGBUILD (89 lines, 2.5 KB, ~762 tokens)
├── automake1.19/
│   └── PKGBUILD (80 lines, 2.3 KB, ~692 tokens)
├── autotools/
│   └── PKGBUILD (22 lines, 516 B, ~145 tokens)
├── autotools-wrappers/
│   └── PKGBUILD (67 lines, 1.5 KB, ~451 tokens)
├── axel/
│   └── PKGBUILD (43 lines, 1.1 KB, ~333 tokens)
├── base/
│   └── PKGBUILD (53 lines, 886 B, ~262 tokens)
├── base-devel/
│   └── PKGBUILD (27 lines, 573 B, ~162 tokens)
├── bash/
│   └── PKGBUILD (180 lines, 6.0 KB, ~1.6k tokens)
├── bash-completion/
│   └── PKGBUILD (31 lines, 792 B, ~241 tokens)
├── bash-preexec/
│   └── PKGBUILD (18 lines, 602 B, ~183 tokens)
├── bc/
│   └── PKGBUILD (46 lines, 1.1 KB, ~379 tokens)
├── binutils/
│   └── PKGBUILD (71 lines, 2.2 KB, ~641 tokens)
├── bison/
│   └── PKGBUILD (46 lines, 1.1 KB, ~347 tokens)
├── breezy/
│   └── PKGBUILD (66 lines, 1.6 KB, ~491 tokens)
├── brotli/
│   └── PKGBUILD (82 lines, 1.9 KB, ~621 tokens)
├── btyacc/
│   └── PKGBUILD (39 lines, 1.0 KB, ~319 tokens)
├── busybox/
│   └── PKGBUILD (47 lines, 1.2 KB, ~366 tokens)
├── bzip2/
│   └── PKGBUILD (77 lines, 1.8 KB, ~565 tokens)
├── c-ares/
│   └── PKGBUILD (63 lines, 1.9 KB, ~596 tokens)
├── ca-certificates/
│   └── PKGBUILD (136 lines, 5.3 KB, ~1.7k tokens)
├── cargo-c/
│   └── PKGBUILD (83 lines, 1.9 KB, ~567 tokens)
├── cargo-edit/
│   └── PKGBUILD (61 lines, 1.5 KB, ~468 tokens)
├── ccache/
│   └── PKGBUILD (81 lines, 1.8 KB, ~541 tokens)
├── cdecl/
│   └── PKGBUILD (36 lines, 905 B, ~281 tokens)
├── cflow/
│   └── PKGBUILD (41 lines, 1.0 KB, ~330 tokens)
├── cgdb/
│   └── PKGBUILD (43 lines, 990 B, ~307 tokens)
├── cjson/
│   └── PKGBUILD (42 lines, 1012 B, ~279 tokens)
├── cloc/
│   └── PKGBUILD (24 lines, 793 B, ~249 tokens)
├── cmake/
│   └── PKGBUILD (112 lines, 3.0 KB, ~913 tokens)
├── cmake-bootstrap/
│   └── PKGBUILD (53 lines, 1.4 KB, ~449 tokens)
├── cmatrix/
│   └── PKGBUILD (39 lines, 1.0 KB, ~320 tokens)
├── cocom/
│   └── PKGBUILD (54 lines, 1.2 KB, ~364 tokens)
├── colordiff/
│   └── PKGBUILD (33 lines, 1.1 KB, ~338 tokens)
├── coreutils/
│   └── PKGBUILD (120 lines, 4.1 KB, ~1.3k tokens)
├── cpio/
│   └── PKGBUILD (40 lines, 952 B, ~304 tokens)
├── cppdap/
│   └── PKGBUILD (64 lines, 1.7 KB, ~497 tokens)
├── crosstool-ng/
│   └── PKGBUILD (73 lines, 1.7 KB, ~532 tokens)
├── cscope/
│   └── PKGBUILD (48 lines, 1.2 KB, ~372 tokens)
├── ctags/
│   └── PKGBUILD (32 lines, 990 B, ~293 tokens)
├── curl/
│   └── PKGBUILD (106 lines, 3.2 KB, ~989 tokens)
├── cvs/
│   └── PKGBUILD (120 lines, 5.4 KB, ~1.5k tokens)
├── cygnative/
│   └── PKGBUILD (26 lines, 813 B, ~243 tokens)
├── cygrunsrv/
│   └── PKGBUILD (43 lines, 1.0 KB, ~323 tokens)
├── cygutils/
│   └── PKGBUILD (62 lines, 1.8 KB, ~533 tokens)
├── cyrus-sasl/
│   └── PKGBUILD (123 lines, 4.6 KB, ~1.3k tokens)
├── cython/
│   └── PKGBUILD (44 lines, 1.1 KB, ~343 tokens)
├── dash/
│   └── PKGBUILD (40 lines, 1.1 KB, ~367 tokens)
├── db/
│   └── PKGBUILD (88 lines, 2.5 KB, ~811 tokens)
├── dejagnu/
│   └── PKGBUILD (55 lines, 1.5 KB, ~424 tokens)
├── dialog/
│   └── PKGBUILD (31 lines, 854 B, ~261 tokens)
├── diffstat/
│   └── PKGBUILD (36 lines, 959 B, ~283 tokens)
├── diffutils/
│   └── PKGBUILD (44 lines, 1.2 KB, ~358 tokens)
├── docbook-dsssl/
│   └── PKGBUILD (33 lines, 1.1 KB, ~318 tokens)
├── docbook-mathml/
│   └── PKGBUILD (20 lines, 717 B, ~199 tokens)
├── docbook-sgml/
│   └── PKGBUILD (51 lines, 1.3 KB, ~412 tokens)
├── docbook-sgml31/
│   └── PKGBUILD (35 lines, 1020 B, ~296 tokens)
├── docbook-xml/
│   └── PKGBUILD (291 lines, 12.7 KB, ~4.1k tokens)
├── docbook-xsl/
│   └── PKGBUILD (32 lines, 1.2 KB, ~354 tokens)
├── docbook-xsl-ns/
│   └── PKGBUILD (27 lines, 889 B, ~267 tokens)
├── doctest/
│   └── PKGBUILD (36 lines, 926 B, ~273 tokens)
├── docx2txt-rs/
│   └── PKGBUILD (43 lines, 1.1 KB, ~355 tokens)
├── dos2unix/
│   └── PKGBUILD (31 lines, 893 B, ~280 tokens)
├── dosfstools/
│   └── PKGBUILD (45 lines, 1.2 KB, ~372 tokens)
├── doxygen/
│   └── PKGBUILD (54 lines, 1.4 KB, ~422 tokens)
├── dtc/
│   └── PKGBUILD (65 lines, 1.3 KB, ~422 tokens)
├── ed/
│   └── PKGBUILD (39 lines, 1.0 KB, ~301 tokens)
├── editorconfig-vim/
│   └── PKGBUILD (28 lines, 1.0 KB, ~308 tokens)
├── efitools/
│   └── PKGBUILD (42 lines, 1.3 KB, ~378 tokens)
├── elinks/
│   └── PKGBUILD (99 lines, 1.7 KB, ~559 tokens)
├── emacs/
│   └── PKGBUILD (75 lines, 2.3 KB, ~708 tokens)
├── enscript/
│   └── PKGBUILD (63 lines, 2.3 KB, ~627 tokens)
├── etc-update/
│   └── PKGBUILD (43 lines, 1.1 KB, ~364 tokens)
├── expat/
│   └── PKGBUILD (62 lines, 1.6 KB, ~506 tokens)
├── expect/
│   └── PKGBUILD (55 lines, 1.5 KB, ~475 tokens)
├── fcode-utils/
│   └── PKGBUILD (27 lines, 876 B, ~284 tokens)
├── file/
│   └── PKGBUILD (55 lines, 1.5 KB, ~480 tokens)
├── filesystem/
│   └── PKGBUILD (176 lines, 6.6 KB, ~1.6k tokens)
├── findutils/
│   └── PKGBUILD (61 lines, 1.5 KB, ~460 tokens)
├── fish/
│   └── PKGBUILD (88 lines, 2.3 KB, ~652 tokens)
├── fisher/
│   └── PKGBUILD (20 lines, 746 B, ~219 tokens)
├── flex/
│   └── PKGBUILD (68 lines, 2.0 KB, ~596 tokens)
├── fmt/
│   └── PKGBUILD (43 lines, 1.1 KB, ~342 tokens)
├── fzy/
│   └── PKGBUILD (24 lines, 737 B, ~213 tokens)
├── gawk/
│   └── PKGBUILD (54 lines, 1.4 KB, ~429 tokens)
├── gc/
│   └── PKGBUILD (67 lines, 1.4 KB, ~461 tokens)
├── gcc/
│   └── PKGBUILD (279 lines, 9.6 KB, ~2.7k tokens)
├── gdb/
│   └── PKGBUILD (157 lines, 4.3 KB, ~1.3k tokens)
├── gdbm/
│   └── PKGBUILD (79 lines, 2.3 KB, ~704 tokens)
├── gengetopt/
│   └── PKGBUILD (53 lines, 1.1 KB, ~334 tokens)
├── genromfs/
│   └── PKGBUILD (31 lines, 778 B, ~238 tokens)
├── getent/
│   └── PKGBUILD (43 lines, 1007 B, ~304 tokens)
├── gettext/
│   └── PKGBUILD (192 lines, 7.4 KB, ~2.1k tokens)
├── gi-docgen/
│   └── PKGBUILD (46 lines, 1.2 KB, ~366 tokens)
├── git/
│   └── PKGBUILD (174 lines, 5.3 KB, ~1.5k tokens)
├── git-crypt/
│   └── PKGBUILD (29 lines, 831 B, ~257 tokens)
├── git-extras/
│   └── PKGBUILD (36 lines, 996 B, ~315 tokens)
├── git-filter-repo/
│   └── PKGBUILD (30 lines, 1.2 KB, ~375 tokens)
├── git-flow/
│   └── PKGBUILD (36 lines, 1014 B, ~321 tokens)
├── glib2/
│   └── PKGBUILD (140 lines, 4.2 KB, ~1.4k tokens)
├── global/
│   └── PKGBUILD (72 lines, 1.4 KB, ~445 tokens)
├── gmp/
│   └── PKGBUILD (67 lines, 1.7 KB, ~523 tokens)
├── gnu-efi/
│   └── PKGBUILD (53 lines, 1.3 KB, ~414 tokens)
├── gnu-netcat/
│   └── PKGBUILD (62 lines, 1.2 KB, ~377 tokens)
├── gnulib-l10n/
│   └── PKGBUILD (34 lines, 770 B, ~226 tokens)
├── gnupg/
│   └── PKGBUILD (214 lines, 10.3 KB, ~2.7k tokens)
├── gnutls/
│   └── PKGBUILD (106 lines, 3.4 KB, ~1.0k tokens)
├── gperf/
│   └── PKGBUILD (41 lines, 991 B, ~314 tokens)
├── gpgme/
│   └── PKGBUILD (90 lines, 2.7 KB, ~848 tokens)
├── gradle/
│   └── PKGBUILD (63 lines, 2.8 KB, ~831 tokens)
├── grep/
│   └── PKGBUILD (68 lines, 2.0 KB, ~615 tokens)
├── groff/
│   └── PKGBUILD (76 lines, 1.8 KB, ~552 tokens)
├── gtest/
│   └── PKGBUILD (56 lines, 1.7 KB, ~538 tokens)
├── gtk-doc/
│   └── PKGBUILD (55 lines, 1.2 KB, ~368 tokens)
├── guile/
│   └── PKGBUILD (154 lines, 5.8 KB, ~1.8k tokens)
├── guile-mqtt/
│   └── PKGBUILD (48 lines, 1.6 KB, ~427 tokens)
├── gyp/
│   └── PKGBUILD (52 lines, 1.2 KB, ~391 tokens)
├── gzip/
│   └── PKGBUILD (47 lines, 1.0 KB, ~324 tokens)
├── heimdal/
│   └── PKGBUILD (172 lines, 5.6 KB, ~1.7k tokens)
├── help2man/
│   └── PKGBUILD (65 lines, 1.6 KB, ~507 tokens)
├── hexcurse/
│   └── PKGBUILD (61 lines, 1.7 KB, ~499 tokens)
├── icu/
│   └── PKGBUILD (89 lines, 2.3 KB, ~698 tokens)
├── idutils/
│   └── PKGBUILD (28 lines, 795 B, ~250 tokens)
├── inetutils/
│   └── PKGBUILD (112 lines, 2.9 KB, ~843 tokens)
├── intltool/
│   └── PKGBUILD (39 lines, 1.1 KB, ~318 tokens)
├── iperf/
│   └── PKGBUILD (43 lines, 998 B, ~301 tokens)
├── iperf3/
│   └── PKGBUILD (44 lines, 1.1 KB, ~366 tokens)
├── irssi/
│   └── PKGBUILD (59 lines, 1.9 KB, ~564 tokens)
├── isl/
│   └── PKGBUILD (62 lines, 1.6 KB, ~512 tokens)
├── itstool/
│   └── PKGBUILD (50 lines, 1.3 KB, ~398 tokens)
├── jansson/
│   └── PKGBUILD (87 lines, 2.0 KB, ~626 tokens)
├── joe/
│   └── PKGBUILD (50 lines, 1.6 KB, ~500 tokens)
├── jq/
│   └── PKGBUILD (48 lines, 1.0 KB, ~313 tokens)
├── jsoncpp/
│   └── PKGBUILD (71 lines, 2.0 KB, ~632 tokens)
├── just/
│   └── PKGBUILD (64 lines, 1.8 KB, ~590 tokens)
├── lcov/
│   └── PKGBUILD (35 lines, 1.2 KB, ~354 tokens)
├── less/
│   └── PKGBUILD (41 lines, 1.0 KB, ~309 tokens)
├── lftp/
│   └── PKGBUILD (84 lines, 2.2 KB, ~645 tokens)
├── libarchive/
│   └── PKGBUILD (91 lines, 2.8 KB, ~885 tokens)
├── libargp/
│   └── PKGBUILD (69 lines, 2.2 KB, ~655 tokens)
├── libassuan/
│   └── PKGBUILD (92 lines, 2.5 KB, ~782 tokens)
├── libatomic_ops/
│   └── PKGBUILD (64 lines, 1.6 KB, ~525 tokens)
├── libblake3/
│   └── PKGBUILD (40 lines, 985 B, ~289 tokens)
├── libbsd/
│   └── PKGBUILD (49 lines, 1.1 KB, ~329 tokens)
├── libcbor/
│   └── PKGBUILD (44 lines, 1.3 KB, ~388 tokens)
├── libedit/
│   └── PKGBUILD (67 lines, 1.9 KB, ~560 tokens)
├── libevent/
│   └── PKGBUILD (62 lines, 1.8 KB, ~542 tokens)
├── libffi/
│   └── PKGBUILD (74 lines, 1.9 KB, ~598 tokens)
├── libfido2/
│   └── PKGBUILD (77 lines, 2.5 KB, ~736 tokens)
├── libgcrypt/
│   └── PKGBUILD (99 lines, 2.4 KB, ~757 tokens)
├── libgit2/
│   └── PKGBUILD (85 lines, 2.1 KB, ~666 tokens)
├── libgpg-error/
│   └── PKGBUILD (80 lines, 2.5 KB, ~732 tokens)
├── libiconv/
│   └── PKGBUILD (99 lines, 2.6 KB, ~770 tokens)
├── libidn/
│   └── PKGBUILD (62 lines, 1.8 KB, ~581 tokens)
├── libidn2/
│   └── PKGBUILD (62 lines, 1.9 KB, ~600 tokens)
├── libinih/
│   └── PKGBUILD (60 lines, 1.4 KB, ~446 tokens)
├── libksba/
│   └── PKGBUILD (87 lines, 2.0 KB, ~647 tokens)
├── libmd/
│   └── PKGBUILD (52 lines, 1013 B, ~306 tokens)
├── libmicrohttpd/
│   └── PKGBUILD (53 lines, 1.3 KB, ~350 tokens)
├── libpcap/
│   └── PKGBUILD (73 lines, 1.8 KB, ~579 tokens)
├── libpipeline/
│   └── PKGBUILD (61 lines, 1.7 KB, ~505 tokens)
├── libpsl/
│   └── PKGBUILD (96 lines, 2.9 KB, ~885 tokens)
├── libqrencode/
│   └── PKGBUILD (64 lines, 1.6 KB, ~527 tokens)
├── libssh/
│   └── PKGBUILD (44 lines, 1.3 KB, ~397 tokens)
├── libssh2/
│   └── PKGBUILD (77 lines, 2.2 KB, ~651 tokens)
├── libtasn1/
│   └── PKGBUILD (63 lines, 1.6 KB, ~517 tokens)
├── libtirpc/
│   └── PKGBUILD (105 lines, 3.2 KB, ~935 tokens)
├── libtool/
│   └── PKGBUILD (106 lines, 3.4 KB, ~922 tokens)
├── libtre/
│   └── PKGBUILD (64 lines, 1.7 KB, ~518 tokens)
├── libunistring/
│   └── PKGBUILD (60 lines, 1.8 KB, ~532 tokens)
├── libuv/
│   └── PKGBUILD (84 lines, 2.3 KB, ~718 tokens)
├── libwebsockets/
│   └── PKGBUILD (62 lines, 1.5 KB, ~405 tokens)
├── libxcrypt/
│   └── PKGBUILD (67 lines, 1.6 KB, ~507 tokens)
├── libxml2/
│   └── PKGBUILD (106 lines, 2.7 KB, ~842 tokens)
├── libxslt/
│   └── PKGBUILD (75 lines, 2.0 KB, ~649 tokens)
├── libyaml/
│   └── PKGBUILD (54 lines, 1.4 KB, ~426 tokens)
├── llvm/
│   └── PKGBUILD (338 lines, 12.5 KB, ~3.5k tokens)
├── lndir/
│   └── PKGBUILD (34 lines, 867 B, ~250 tokens)
├── localepurge/
│   └── PKGBUILD (51 lines, 2.2 KB, ~623 tokens)
├── lua/
│   └── PKGBUILD (52 lines, 1.3 KB, ~400 tokens)
├── luit/
│   └── PKGBUILD (60 lines, 1.4 KB, ~408 tokens)
├── lynx/
│   └── PKGBUILD (54 lines, 1.5 KB, ~482 tokens)
├── lz4/
│   └── PKGBUILD (64 lines, 1.4 KB, ~482 tokens)
├── lzip/
│   └── PKGBUILD (29 lines, 713 B, ~217 tokens)
├── lzo2/
│   └── PKGBUILD (64 lines, 1.4 KB, ~439 tokens)
├── lzop/
│   └── PKGBUILD (36 lines, 808 B, ~257 tokens)
├── m4/
│   └── PKGBUILD (84 lines, 2.5 KB, ~744 tokens)
├── make/
│   └── PKGBUILD (67 lines, 1.6 KB, ~497 tokens)
├── man-db/
│   └── PKGBUILD (79 lines, 2.3 KB, ~721 tokens)
├── man-pages-posix/
│   └── PKGBUILD (18 lines, 518 B, ~159 tokens)
├── man2html/
│   └── PKGBUILD (32 lines, 1.1 KB, ~346 tokens)
├── maturin/
│   └── PKGBUILD (91 lines, 2.7 KB, ~805 tokens)
├── mc/
│   └── PKGBUILD (88 lines, 2.9 KB, ~886 tokens)
├── mercurial/
│   └── PKGBUILD (79 lines, 2.8 KB, ~819 tokens)
├── meson/
│   └── PKGBUILD (58 lines, 1.4 KB, ~409 tokens)
├── meson-python/
│   └── PKGBUILD (64 lines, 1.6 KB, ~504 tokens)
├── mingw-w64-cross-binutils/
│   └── PKGBUILD (147 lines, 4.5 KB, ~1.4k tokens)
├── mingw-w64-cross-clang/
│   └── PKGBUILD (125 lines, 5.6 KB, ~1.7k tokens)
├── mingw-w64-cross-clang-crt/
│   └── PKGBUILD (91 lines, 2.8 KB, ~873 tokens)
├── mingw-w64-cross-clang-headers/
│   └── PKGBUILD (68 lines, 2.0 KB, ~604 tokens)
├── mingw-w64-cross-compiler-rt/
│   └── PKGBUILD (100 lines, 3.2 KB, ~889 tokens)
├── mingw-w64-cross-crt/
│   └── PKGBUILD (109 lines, 3.2 KB, ~1.0k tokens)
├── mingw-w64-cross-gcc/
│   └── PKGBUILD (236 lines, 8.6 KB, ~2.4k tokens)
├── mingw-w64-cross-headers/
│   └── PKGBUILD (102 lines, 3.3 KB, ~1.0k tokens)
├── mingw-w64-cross-mingwarm64-binutils/
│   └── PKGBUILD (127 lines, 4.2 KB, ~1.2k tokens)
├── mingw-w64-cross-mingwarm64-crt/
│   └── PKGBUILD (87 lines, 2.6 KB, ~789 tokens)
├── mingw-w64-cross-mingwarm64-gcc/
│   └── PKGBUILD (210 lines, 7.5 KB, ~2.1k tokens)
├── mingw-w64-cross-mingwarm64-headers/
│   └── PKGBUILD (78 lines, 2.5 KB, ~768 tokens)
├── mingw-w64-cross-mingwarm64-windows-default-manifest/
│   └── PKGBUILD (61 lines, 1.6 KB, ~505 tokens)
├── mingw-w64-cross-mingwarm64-winpthreads/
│   └── PKGBUILD (68 lines, 2.3 KB, ~684 tokens)
├── mingw-w64-cross-windows-default-manifest/
│   └── PKGBUILD (78 lines, 2.3 KB, ~705 tokens)
├── mingw-w64-cross-winpthreads/
│   └── PKGBUILD (95 lines, 3.0 KB, ~940 tokens)
├── mingw-w64-cross-zlib/
│   └── PKGBUILD (101 lines, 3.2 KB, ~964 tokens)
├── mintty/
│   └── PKGBUILD (66 lines, 2.2 KB, ~702 tokens)
├── mm-common/
│   └── PKGBUILD (47 lines, 1.3 KB, ~406 tokens)
├── moreutils/
│   └── PKGBUILD (26 lines, 885 B, ~268 tokens)
├── mosh/
│   └── PKGBUILD (34 lines, 1.0 KB, ~314 tokens)
├── mosquitto/
│   └── PKGBUILD (75 lines, 2.1 KB, ~596 tokens)
├── mpc/
│   └── PKGBUILD (61 lines, 1.4 KB, ~446 tokens)
├── mpdecimal/
│   └── PKGBUILD (52 lines, 1.2 KB, ~384 tokens)
├── mpfr/
│   └── PKGBUILD (67 lines, 1.6 KB, ~525 tokens)
├── msgpack-c/
│   └── PKGBUILD (66 lines, 1.6 KB, ~499 tokens)
├── msys2-keyring/
│   └── PKGBUILD (21 lines, 537 B, ~161 tokens)
├── msys2-launcher/
│   └── PKGBUILD (33 lines, 908 B, ~286 tokens)
├── msys2-runtime/
│   └── PKGBUILD (255 lines, 10.5 KB, ~2.7k tokens)
├── msys2-runtime-3.3/
│   └── PKGBUILD (355 lines, 17.2 KB, ~4.5k tokens)
├── msys2-runtime-3.4/
│   └── PKGBUILD (339 lines, 17.2 KB, ~4.5k tokens)
├── msys2-runtime-3.5/
│   └── PKGBUILD (315 lines, 15.5 KB, ~4.1k tokens)
├── msys2-w32api-headers/
│   └── PKGBUILD (56 lines, 1.4 KB, ~442 tokens)
├── msys2-w32api-runtime/
│   └── PKGBUILD (70 lines, 1.6 KB, ~540 tokens)
├── mutt/
│   └── PKGBUILD (90 lines, 1.7 KB, ~548 tokens)
├── namcap/
│   └── PKGBUILD (58 lines, 1.6 KB, ~478 tokens)
├── nano/
│   └── PKGBUILD (56 lines, 1.4 KB, ~419 tokens)
├── nano-syntax-highlighting/
│   └── PKGBUILD (32 lines, 1003 B, ~309 tokens)
├── nasm/
│   └── PKGBUILD (40 lines, 929 B, ~281 tokens)
├── nawk/
│   └── PKGBUILD (53 lines, 1.2 KB, ~361 tokens)
├── ncdu/
│   └── PKGBUILD (41 lines, 932 B, ~277 tokens)
├── ncurses/
│   └── PKGBUILD (127 lines, 4.3 KB, ~1.3k tokens)
├── neomutt/
│   └── PKGBUILD (71 lines, 1.6 KB, ~485 tokens)
├── neon/
│   └── PKGBUILD (62 lines, 1.6 KB, ~532 tokens)
├── nettle/
│   └── PKGBUILD (84 lines, 2.1 KB, ~674 tokens)
├── nghttp2/
│   └── PKGBUILD (74 lines, 2.0 KB, ~623 tokens)
├── nghttp3/
│   └── PKGBUILD (73 lines, 1.8 KB, ~530 tokens)
├── ngtcp2/
│   └── PKGBUILD (80 lines, 1.9 KB, ~581 tokens)
├── ninja/
│   └── PKGBUILD (51 lines, 1.6 KB, ~528 tokens)
├── nnn/
│   └── PKGBUILD (48 lines, 1.4 KB, ~432 tokens)
├── npth/
│   └── PKGBUILD (69 lines, 1.8 KB, ~562 tokens)
├── nsinstall/
│   └── PKGBUILD (24 lines, 744 B, ~224 tokens)
├── nyacc/
│   └── PKGBUILD (41 lines, 838 B, ~257 tokens)
├── oniguruma/
│   └── PKGBUILD (36 lines, 849 B, ~269 tokens)
├── openbsd-netcat/
│   └── PKGBUILD (44 lines, 1.4 KB, ~433 tokens)
├── opensp/
│   └── PKGBUILD (54 lines, 1.4 KB, ~440 tokens)
├── openssh/
│   └── PKGBUILD (111 lines, 2.9 KB, ~838 tokens)
├── openssl/
│   └── PKGBUILD (115 lines, 3.7 KB, ~1.2k tokens)
├── p11-kit/
│   └── PKGBUILD (93 lines, 3.0 KB, ~930 tokens)
├── p7zip/
│   └── PKGBUILD (72 lines, 2.1 KB, ~634 tokens)
├── pacman/
│   └── PKGBUILD (238 lines, 8.7 KB, ~2.1k tokens)
├── pacman-contrib/
│   └── PKGBUILD (60 lines, 1.4 KB, ~403 tokens)
├── pacman-mirrors/
│   └── PKGBUILD (26 lines, 738 B, ~206 tokens)
├── pactoys/
│   └── PKGBUILD (59 lines, 1.0 KB, ~329 tokens)
├── pacutils/
│   └── PKGBUILD (61 lines, 1.7 KB, ~527 tokens)
├── parallel/
│   └── PKGBUILD (47 lines, 1.4 KB, ~417 tokens)
├── pass/
│   └── PKGBUILD (33 lines, 868 B, ~247 tokens)
├── patch/
│   └── PKGBUILD (81 lines, 1.8 KB, ~605 tokens)
├── patchutils/
│   └── PKGBUILD (52 lines, 1.5 KB, ~455 tokens)
├── pax/
│   └── PKGBUILD (61 lines, 1.8 KB, ~563 tokens)
├── pcre/
│   └── PKGBUILD (114 lines, 3.1 KB, ~992 tokens)
├── pcre2/
│   └── PKGBUILD (131 lines, 3.1 KB, ~997 tokens)
├── perl/
│   └── PKGBUILD (352 lines, 12.9 KB, ~3.8k tokens)
├── perl-algorithm-diff/
│   └── PKGBUILD (34 lines, 931 B, ~279 tokens)
├── perl-alien-build/
│   └── PKGBUILD (49 lines, 1.5 KB, ~473 tokens)
├── perl-alien-build-plugin-download-gitlab/
│   └── PKGBUILD (36 lines, 968 B, ~299 tokens)
├── perl-alien-libxml2/
│   └── PKGBUILD (50 lines, 1.4 KB, ~423 tokens)
├── perl-archive-zip/
│   └── PKGBUILD (38 lines, 920 B, ~287 tokens)
├── perl-authen-sasl/
│   └── PKGBUILD (38 lines, 1.1 KB, ~348 tokens)
├── perl-benchmark-timer/
│   └── PKGBUILD (36 lines, 947 B, ~288 tokens)
├── perl-capture-tiny/
│   └── PKGBUILD (33 lines, 917 B, ~281 tokens)
├── perl-carp-clan/
│   └── PKGBUILD (38 lines, 956 B, ~297 tokens)
├── perl-class-inspector/
│   └── PKGBUILD (46 lines, 1.3 KB, ~395 tokens)
├── perl-class-method-modifiers/
│   └── PKGBUILD (43 lines, 1.2 KB, ~374 tokens)
├── perl-clone/
│   └── PKGBUILD (46 lines, 1.3 KB, ~396 tokens)
├── perl-common-sense/
│   └── PKGBUILD (35 lines, 838 B, ~259 tokens)
├── perl-compress-bzip2/
│   └── PKGBUILD (34 lines, 1002 B, ~308 tokens)
├── perl-convert-binhex/
│   └── PKGBUILD (36 lines, 1017 B, ~309 tokens)
├── perl-data-munge/
│   └── PKGBUILD (39 lines, 933 B, ~292 tokens)
├── perl-data-optlist/
│   └── PKGBUILD (65 lines, 1.6 KB, ~479 tokens)
├── perl-date-calc/
│   └── PKGBUILD (38 lines, 894 B, ~281 tokens)
├── perl-dbi/
│   └── PKGBUILD (54 lines, 1.1 KB, ~365 tokens)
├── perl-devel-globaldestruction/
│   └── PKGBUILD (37 lines, 1.1 KB, ~316 tokens)
├── perl-digest-hmac/
│   └── PKGBUILD (45 lines, 1.1 KB, ~343 tokens)
├── perl-encode-locale/
│   └── PKGBUILD (52 lines, 1.2 KB, ~376 tokens)
├── perl-error/
│   └── PKGBUILD (42 lines, 1.1 KB, ~360 tokens)
├── perl-exporter-lite/
│   └── PKGBUILD (36 lines, 972 B, ~300 tokens)
├── perl-exporter-tiny/
│   └── PKGBUILD (38 lines, 1.0 KB, ~310 tokens)
├── perl-extutils-config/
│   └── PKGBUILD (48 lines, 1.3 KB, ~404 tokens)
├── perl-extutils-depends/
│   └── PKGBUILD (42 lines, 973 B, ~303 tokens)
├── perl-extutils-helpers/
│   └── PKGBUILD (52 lines, 1.4 KB, ~427 tokens)
├── perl-extutils-installpaths/
│   └── PKGBUILD (52 lines, 1.5 KB, ~437 tokens)
├── perl-extutils-makemaker/
│   └── PKGBUILD (42 lines, 1016 B, ~308 tokens)
├── perl-extutils-pkgconfig/
│   └── PKGBUILD (38 lines, 924 B, ~285 tokens)
├── perl-ffi-checklib/
│   └── PKGBUILD (39 lines, 1.0 KB, ~322 tokens)
├── perl-file-chdir/
│   └── PKGBUILD (32 lines, 885 B, ~275 tokens)
├── perl-file-copy-recursive/
│   └── PKGBUILD (38 lines, 1.0 KB, ~321 tokens)
├── perl-file-listing/
│   └── PKGBUILD (47 lines, 1.2 KB, ~379 tokens)
├── perl-file-next/
│   └── PKGBUILD (45 lines, 1.2 KB, ~367 tokens)
├── perl-file-sharedir/
│   └── PKGBUILD (46 lines, 1.3 KB, ~403 tokens)
├── perl-file-sharedir-install/
│   └── PKGBUILD (44 lines, 1.3 KB, ~405 tokens)
├── perl-file-which/
│   └── PKGBUILD (32 lines, 902 B, ~282 tokens)
├── perl-font-ttf/
│   └── PKGBUILD (41 lines, 1016 B, ~321 tokens)
├── perl-getopt-tabular/
│   └── PKGBUILD (37 lines, 954 B, ~296 tokens)
├── perl-html-parser/
│   └── PKGBUILD (42 lines, 1.1 KB, ~365 tokens)
├── perl-html-tagset/
│   └── PKGBUILD (45 lines, 1.0 KB, ~321 tokens)
├── perl-http-cookiejar/
│   └── PKGBUILD (41 lines, 1.1 KB, ~321 tokens)
├── perl-http-cookies/
│   └── PKGBUILD (52 lines, 1.3 KB, ~402 tokens)
├── perl-http-daemon/
│   └── PKGBUILD (40 lines, 1.0 KB, ~342 tokens)
├── perl-http-date/
│   └── PKGBUILD (50 lines, 1.2 KB, ~366 tokens)
├── perl-http-message/
│   └── PKGBUILD (57 lines, 1.5 KB, ~470 tokens)
├── perl-http-negotiate/
│   └── PKGBUILD (52 lines, 1.3 KB, ~397 tokens)
├── perl-import-into/
│   └── PKGBUILD (43 lines, 1.1 KB, ~344 tokens)
├── perl-importer/
│   └── PKGBUILD (41 lines, 1.0 KB, ~326 tokens)
├── perl-inc-latest/
│   └── PKGBUILD (35 lines, 863 B, ~271 tokens)
├── perl-io-html/
│   └── PKGBUILD (40 lines, 974 B, ~299 tokens)
├── perl-io-socket-inet6/
│   └── PKGBUILD (49 lines, 1.3 KB, ~400 tokens)
├── perl-io-socket-ssl/
│   └── PKGBUILD (41 lines, 1.1 KB, ~347 tokens)
├── perl-io-string/
│   └── PKGBUILD (36 lines, 1.0 KB, ~327 tokens)
├── perl-io-stringy/
│   └── PKGBUILD (41 lines, 1.0 KB, ~337 tokens)
├── perl-ipc-run3/
│   └── PKGBUILD (42 lines, 1017 B, ~326 tokens)
├── perl-json/
│   └── PKGBUILD (41 lines, 1.1 KB, ~350 tokens)
├── perl-libwww/
│   └── PKGBUILD (46 lines, 1.5 KB, ~467 tokens)
├── perl-list-moreutils/
│   └── PKGBUILD (39 lines, 1.0 KB, ~316 tokens)
├── perl-list-moreutils-xs/
│   └── PKGBUILD (39 lines, 961 B, ~298 tokens)
├── perl-locale-gettext/
│   └── PKGBUILD (49 lines, 1.4 KB, ~423 tokens)
├── perl-lwp-mediatypes/
│   └── PKGBUILD (46 lines, 1.2 KB, ~373 tokens)
├── perl-lwp-protocol-https/
│   └── PKGBUILD (38 lines, 1.0 KB, ~324 tokens)
├── perl-mailtools/
│   └── PKGBUILD (38 lines, 890 B, ~270 tokens)
├── perl-math-int64/
│   └── PKGBUILD (52 lines, 1.1 KB, ~353 tokens)
├── perl-mime-charset/
│   └── PKGBUILD (43 lines, 1.0 KB, ~329 tokens)
├── perl-mime-tools/
│   └── PKGBUILD (70 lines, 1.7 KB, ~563 tokens)
├── perl-module-build/
│   └── PKGBUILD (42 lines, 1.1 KB, ~335 tokens)
├── perl-module-build-tiny/
│   └── PKGBUILD (52 lines, 1.6 KB, ~473 tokens)
├── perl-module-pluggable/
│   └── PKGBUILD (41 lines, 1.1 KB, ~336 tokens)
├── perl-module-runtime/
│   └── PKGBUILD (36 lines, 1017 B, ~303 tokens)
├── perl-moo/
│   └── PKGBUILD (42 lines, 1.2 KB, ~375 tokens)
├── perl-mozilla-ca/
│   └── PKGBUILD (44 lines, 1.1 KB, ~346 tokens)
├── perl-net-dns/
│   └── PKGBUILD (47 lines, 1.2 KB, ~374 tokens)
├── perl-net-http/
│   └── PKGBUILD (51 lines, 1.2 KB, ~386 tokens)
├── perl-net-ip/
│   └── PKGBUILD (39 lines, 1004 B, ~318 tokens)
├── perl-net-smtp-ssl/
│   └── PKGBUILD (39 lines, 1.0 KB, ~334 tokens)
├── perl-net-ssleay/
│   └── PKGBUILD (50 lines, 1.4 KB, ~427 tokens)
├── perl-padwalker/
│   └── PKGBUILD (38 lines, 1.0 KB, ~313 tokens)
├── perl-parallel-forkmanager/
│   └── PKGBUILD (42 lines, 1.2 KB, ~372 tokens)
├── perl-params-someutil/
│   └── PKGBUILD (55 lines, 1.3 KB, ~390 tokens)
├── perl-path-class/
│   └── PKGBUILD (45 lines, 1.2 KB, ~351 tokens)
├── perl-path-tiny/
│   └── PKGBUILD (42 lines, 1.1 KB, ~340 tokens)
├── perl-perlio-gzip/
│   └── PKGBUILD (39 lines, 1013 B, ~315 tokens)
├── perl-pod-parser/
│   └── PKGBUILD (38 lines, 931 B, ~291 tokens)
├── perl-probe-perl/
│   └── PKGBUILD (42 lines, 1010 B, ~322 tokens)
├── perl-regexp-common/
│   └── PKGBUILD (32 lines, 935 B, ~281 tokens)
├── perl-return-multilevel/
│   └── PKGBUILD (42 lines, 1.1 KB, ~349 tokens)
├── perl-role-tiny/
│   └── PKGBUILD (49 lines, 1.2 KB, ~370 tokens)
├── perl-scope-guard/
│   └── PKGBUILD (41 lines, 1.0 KB, ~329 tokens)
├── perl-sgmls/
│   └── PKGBUILD (44 lines, 1.1 KB, ~340 tokens)
├── perl-socket6/
│   └── PKGBUILD (39 lines, 893 B, ~270 tokens)
├── perl-sort-versions/
│   └── PKGBUILD (44 lines, 1.2 KB, ~375 tokens)
├── perl-spiffy/
│   └── PKGBUILD (36 lines, 903 B, ~283 tokens)
├── perl-sub-exporter/
│   └── PKGBUILD (54 lines, 1.4 KB, ~429 tokens)
├── perl-sub-exporter-progressive/
│   └── PKGBUILD (36 lines, 1014 B, ~313 tokens)
├── perl-sub-info/
│   └── PKGBUILD (41 lines, 1.0 KB, ~332 tokens)
├── perl-sub-install/
│   └── PKGBUILD (36 lines, 926 B, ~292 tokens)
├── perl-sub-quote/
│   └── PKGBUILD (45 lines, 1.2 KB, ~357 tokens)
├── perl-tap-harness-archive/
│   └── PKGBUILD (39 lines, 1020 B, ~318 tokens)
├── perl-term-table/
│   └── PKGBUILD (52 lines, 1.3 KB, ~411 tokens)
├── perl-termreadkey/
│   └── PKGBUILD (43 lines, 1.1 KB, ~353 tokens)
├── perl-test-base/
│   └── PKGBUILD (38 lines, 928 B, ~294 tokens)
├── perl-test-deep/
│   └── PKGBUILD (38 lines, 945 B, ~296 tokens)
├── perl-test-fatal/
│   └── PKGBUILD (39 lines, 1.1 KB, ~332 tokens)
├── perl-test-needs/
│   └── PKGBUILD (36 lines, 943 B, ~296 tokens)
├── perl-test-nowarnings/
│   └── PKGBUILD (38 lines, 956 B, ~293 tokens)
├── perl-test-pod/
│   └── PKGBUILD (38 lines, 903 B, ~287 tokens)
├── perl-test-requires/
│   └── PKGBUILD (36 lines, 969 B, ~301 tokens)
├── perl-test-requiresinternet/
│   └── PKGBUILD (36 lines, 1016 B, ~305 tokens)
├── perl-test-script/
│   └── PKGBUILD (38 lines, 1.0 KB, ~332 tokens)
├── perl-test-warnings/
│   └── PKGBUILD (50 lines, 1.3 KB, ~398 tokens)
├── perl-test-yaml/
│   └── PKGBUILD (38 lines, 923 B, ~290 tokens)
├── perl-test2-suite/
│   └── PKGBUILD (48 lines, 1.2 KB, ~374 tokens)
├── perl-text-charwidth/
│   └── PKGBUILD (44 lines, 1.1 KB, ~357 tokens)
├── perl-text-diff/
│   └── PKGBUILD (42 lines, 1.1 KB, ~352 tokens)
├── perl-text-wrapi18n/
│   └── PKGBUILD (43 lines, 1.1 KB, ~353 tokens)
├── perl-timedate/
│   └── PKGBUILD (40 lines, 911 B, ~279 tokens)
├── perl-try-tiny/
│   └── PKGBUILD (39 lines, 953 B, ~299 tokens)
├── perl-unicode-linebreak/
│   └── PKGBUILD (51 lines, 1.2 KB, ~378 tokens)
├── perl-uri/
│   └── PKGBUILD (57 lines, 1.3 KB, ~409 tokens)
├── perl-www-robotrules/
│   └── PKGBUILD (48 lines, 1.3 KB, ~408 tokens)
├── perl-xml-libxml/
│   └── PKGBUILD (57 lines, 1.6 KB, ~508 tokens)
├── perl-xml-namespacesupport/
│   └── PKGBUILD (42 lines, 1.1 KB, ~340 tokens)
├── perl-xml-parser/
│   └── PKGBUILD (61 lines, 1.6 KB, ~499 tokens)
├── perl-xml-sax/
│   └── PKGBUILD (49 lines, 1.3 KB, ~396 tokens)
├── perl-xml-sax-base/
│   └── PKGBUILD (41 lines, 1.0 KB, ~332 tokens)
├── perl-xml-simple/
│   └── PKGBUILD (38 lines, 946 B, ~303 tokens)
├── perl-yaml-syck/
│   └── PKGBUILD (50 lines, 1.3 KB, ~412 tokens)
├── perl-yaml-tiny/
│   └── PKGBUILD (44 lines, 1.0 KB, ~335 tokens)
├── pinentry/
│   └── PKGBUILD (57 lines, 1.8 KB, ~512 tokens)
├── pkgconf/
│   └── PKGBUILD (56 lines, 1.4 KB, ~446 tokens)
├── pkgfile/
│   └── PKGBUILD (77 lines, 1.5 KB, ~471 tokens)
├── po4a/
│   └── PKGBUILD (41 lines, 1.3 KB, ~390 tokens)
├── popt/
│   └── PKGBUILD (64 lines, 1.6 KB, ~520 tokens)
├── procps-ng/
│   └── PKGBUILD (79 lines, 2.4 KB, ~701 tokens)
├── protobuf/
│   └── PKGBUILD (75 lines, 2.1 KB, ~652 tokens)
├── psmisc/
│   └── PKGBUILD (44 lines, 1.2 KB, ~361 tokens)
├── publicsuffix-list/
│   └── PKGBUILD (34 lines, 1.1 KB, ~336 tokens)
├── pv/
│   └── PKGBUILD (49 lines, 959 B, ~310 tokens)
├── pwgen/
│   └── PKGBUILD (31 lines, 776 B, ~229 tokens)
├── python/
│   └── PKGBUILD (196 lines, 7.3 KB, ~1.9k tokens)
├── python-appdirs/
│   └── PKGBUILD (44 lines, 1.0 KB, ~319 tokens)
├── python-attrs/
│   └── PKGBUILD (44 lines, 1.1 KB, ~341 tokens)
├── python-babel/
│   └── PKGBUILD (39 lines, 1.1 KB, ~335 tokens)
├── python-beaker/
│   └── PKGBUILD (45 lines, 1.3 KB, ~396 tokens)
├── python-brotli/
│   └── PKGBUILD (39 lines, 966 B, ~297 tokens)
├── python-build/
│   └── PKGBUILD (43 lines, 1.1 KB, ~328 tokens)
├── python-calver/
│   └── PKGBUILD (37 lines, 912 B, ~278 tokens)
├── python-certifi/
│   └── PKGBUILD (41 lines, 1.0 KB, ~321 tokens)
├── python-cffi/
│   └── PKGBUILD (31 lines, 927 B, ~272 tokens)
├── python-charset-normalizer/
│   └── PKGBUILD (51 lines, 1.5 KB, ~463 tokens)
├── python-colorama/
│   └── PKGBUILD (36 lines, 999 B, ~301 tokens)
├── python-configobj/
│   └── PKGBUILD (34 lines, 859 B, ~260 tokens)
├── python-cryptography/
│   └── PKGBUILD (59 lines, 1.8 KB, ~505 tokens)
├── python-docutils/
│   └── PKGBUILD (39 lines, 1.1 KB, ~334 tokens)
├── python-dulwich/
│   └── PKGBUILD (54 lines, 1.4 KB, ~428 tokens)
├── python-editables/
│   └── PKGBUILD (33 lines, 802 B, ~232 tokens)
├── python-fastbencode/
│   └── PKGBUILD (45 lines, 1.1 KB, ~316 tokens)
├── python-fastimport/
│   └── PKGBUILD (34 lines, 863 B, ~267 tokens)
├── python-flit-core/
│   └── PKGBUILD (47 lines, 1.3 KB, ~409 tokens)
├── python-hatch-fancy-pypi-readme/
│   └── PKGBUILD (35 lines, 989 B, ~308 tokens)
├── python-hatch-vcs/
│   └── PKGBUILD (37 lines, 866 B, ~269 tokens)
├── python-hatchling/
│   └── PKGBUILD (50 lines, 1.3 KB, ~402 tokens)
├── python-idna/
│   └── PKGBUILD (47 lines, 1.2 KB, ~364 tokens)
├── python-imagesize/
│   └── PKGBUILD (42 lines, 1.1 KB, ~336 tokens)
├── python-iniconfig/
│   └── PKGBUILD (43 lines, 1.1 KB, ~329 tokens)
├── python-installer/
│   └── PKGBUILD (43 lines, 1.2 KB, ~362 tokens)
├── python-jinja/
│   └── PKGBUILD (43 lines, 1.1 KB, ~344 tokens)
├── python-lxml/
│   └── PKGBUILD (54 lines, 1.2 KB, ~375 tokens)
├── python-mako/
│   └── PKGBUILD (60 lines, 1.6 KB, ~503 tokens)
├── python-mallard-ducktype/
│   └── PKGBUILD (44 lines, 1.1 KB, ~335 tokens)
├── python-markdown/
│   └── PKGBUILD (54 lines, 1.3 KB, ~389 tokens)
├── python-markupsafe/
│   └── PKGBUILD (40 lines, 1.2 KB, ~355 tokens)
├── python-merge3/
│   └── PKGBUILD (46 lines, 1017 B, ~311 tokens)
├── python-more-itertools/
│   └── PKGBUILD (45 lines, 1.2 KB, ~378 tokens)
├── python-pacdb/
│   └── PKGBUILD (38 lines, 971 B, ~298 tokens)
├── python-packaging/
│   └── PKGBUILD (32 lines, 940 B, ~287 tokens)
├── python-pathspec/
│   └── PKGBUILD (32 lines, 862 B, ~254 tokens)
├── python-patiencediff/
│   └── PKGBUILD (45 lines, 1.2 KB, ~375 tokens)
├── python-pip/
│   └── PKGBUILD (49 lines, 1.2 KB, ~384 tokens)
├── python-pkgconfig/
│   └── PKGBUILD (36 lines, 809 B, ~237 tokens)
├── python-pluggy/
│   └── PKGBUILD (55 lines, 1.4 KB, ~430 tokens)
├── python-poetry-core/
│   └── PKGBUILD (40 lines, 1.1 KB, ~351 tokens)
├── python-py3c/
│   └── PKGBUILD (49 lines, 1.3 KB, ~433 tokens)
├── python-pyalpm/
│   └── PKGBUILD (90 lines, 2.3 KB, ~677 tokens)
├── python-pycparser/
│   └── PKGBUILD (43 lines, 1.1 KB, ~323 tokens)
├── python-pygments/
│   └── PKGBUILD (46 lines, 1.3 KB, ~390 tokens)
├── python-pyparsing/
│   └── PKGBUILD (44 lines, 1.2 KB, ~357 tokens)
├── python-pyproject-hooks/
│   └── PKGBUILD (42 lines, 1.1 KB, ~341 tokens)
├── python-pyproject-metadata/
│   └── PKGBUILD (53 lines, 1.3 KB, ~412 tokens)
├── python-pytest/
│   └── PKGBUILD (61 lines, 1.3 KB, ~413 tokens)
├── python-pytest-pacman/
│   └── PKGBUILD (42 lines, 1.1 KB, ~341 tokens)
├── python-requests/
│   └── PKGBUILD (44 lines, 1.1 KB, ~346 tokens)
├── python-resolvelib/
│   └── PKGBUILD (37 lines, 914 B, ~261 tokens)
├── python-roman-numerals/
│   └── PKGBUILD (42 lines, 1.1 KB, ~351 tokens)
├── python-semantic-version/
│   └── PKGBUILD (33 lines, 897 B, ~259 tokens)
├── python-setuptools/
│   └── PKGBUILD (55 lines, 1.4 KB, ~428 tokens)
├── python-setuptools-gettext/
│   └── PKGBUILD (37 lines, 982 B, ~291 tokens)
├── python-setuptools-rust/
│   └── PKGBUILD (34 lines, 985 B, ~286 tokens)
├── python-setuptools-scm/
│   └── PKGBUILD (64 lines, 1.7 KB, ~503 tokens)
├── python-six/
│   └── PKGBUILD (44 lines, 970 B, ~305 tokens)
├── python-smartypants/
│   └── PKGBUILD (35 lines, 849 B, ~254 tokens)
├── python-snowballstemmer/
│   └── PKGBUILD (42 lines, 1.1 KB, ~336 tokens)
├── python-sphinx/
│   └── PKGBUILD (58 lines, 1.5 KB, ~452 tokens)
├── python-sphinx-alabaster-theme/
│   └── PKGBUILD (40 lines, 1.2 KB, ~360 tokens)
├── python-sphinxcontrib-applehelp/
│   └── PKGBUILD (36 lines, 1.0 KB, ~319 tokens)
├── python-sphinxcontrib-devhelp/
│   └── PKGBUILD (36 lines, 1.0 KB, ~318 tokens)
├── python-sphinxcontrib-htmlhelp/
│   └── PKGBUILD (36 lines, 1.0 KB, ~319 tokens)
├── python-sphinxcontrib-jsmath/
│   └── PKGBUILD (38 lines, 1.1 KB, ~327 tokens)
├── python-sphinxcontrib-qthelp/
│   └── PKGBUILD (36 lines, 1.0 KB, ~317 tokens)
├── python-sphinxcontrib-serializinghtml/
│   └── PKGBUILD (36 lines, 1.1 KB, ~329 tokens)
├── python-tomlkit/
│   └── PKGBUILD (46 lines, 1.2 KB, ~377 tokens)
├── python-trove-classifiers/
│   └── PKGBUILD (44 lines, 1.2 KB, ~361 tokens)
├── python-typing_extensions/
│   └── PKGBUILD (39 lines, 903 B, ~269 tokens)
├── python-typogrify/
│   └── PKGBUILD (35 lines, 902 B, ~272 tokens)
├── python-urllib3/
│   └── PKGBUILD (46 lines, 1.2 KB, ~363 tokens)
├── python-vcs-versioning/
│   └── PKGBUILD (59 lines, 1.6 KB, ~478 tokens)
├── python-wcwidth/
│   └── PKGBUILD (45 lines, 1.2 KB, ~356 tokens)
├── python-yaml/
│   └── PKGBUILD (52 lines, 1.2 KB, ~389 tokens)
├── python-zstandard/
│   └── PKGBUILD (44 lines, 1.0 KB, ~318 tokens)
├── quilt/
│   └── PKGBUILD (40 lines, 1.1 KB, ~348 tokens)
├── rcs/
│   └── PKGBUILD (46 lines, 1.2 KB, ~359 tokens)
├── re2c/
│   └── PKGBUILD (54 lines, 1.2 KB, ~360 tokens)
├── readline/
│   └── PKGBUILD (123 lines, 4.1 KB, ~1.1k tokens)
├── rebase/
│   └── PKGBUILD (91 lines, 2.7 KB, ~765 tokens)
├── reflex/
│   └── PKGBUILD (38 lines, 1022 B, ~309 tokens)
├── remake/
│   └── PKGBUILD (53 lines, 1.3 KB, ~393 tokens)
├── rhash/
│   └── PKGBUILD (117 lines, 2.8 KB, ~880 tokens)
├── rlwrap/
│   └── PKGBUILD (31 lines, 950 B, ~276 tokens)
├── rpcsvc-proto/
│   └── PKGBUILD (45 lines, 1.3 KB, ~402 tokens)
├── rsync/
│   └── PKGBUILD (84 lines, 1.9 KB, ~618 tokens)
├── ruby/
│   └── PKGBUILD (127 lines, 3.9 KB, ~1.2k tokens)
├── rust/
│   └── PKGBUILD (104 lines, 3.2 KB, ~905 tokens)
├── scons/
│   └── PKGBUILD (44 lines, 1.1 KB, ~332 tokens)
├── screenfetch/
│   └── PKGBUILD (39 lines, 1.3 KB, ~387 tokens)
├── sed/
│   └── PKGBUILD (55 lines, 1.4 KB, ~417 tokens)
├── serf/
│   └── PKGBUILD (83 lines, 2.6 KB, ~786 tokens)
├── setconf/
│   └── PKGBUILD (23 lines, 683 B, ~201 tokens)
├── sgml-common/
│   └── PKGBUILD (46 lines, 1.5 KB, ~449 tokens)
├── sharutils/
│   └── PKGBUILD (35 lines, 914 B, ~283 tokens)
├── shellspec/
│   └── PKGBUILD (31 lines, 1001 B, ~315 tokens)
├── shutdown/
│   └── PKGBUILD (35 lines, 865 B, ~274 tokens)
├── socat/
│   └── PKGBUILD (48 lines, 1.5 KB, ~458 tokens)
├── sqlite/
│   └── PKGBUILD (247 lines, 7.7 KB, ~2.3k tokens)
├── squashfs-tools/
│   └── PKGBUILD (71 lines, 1.6 KB, ~448 tokens)
├── ssh-pageant/
│   └── PKGBUILD (32 lines, 834 B, ~274 tokens)
├── sshpass/
│   └── PKGBUILD (28 lines, 694 B, ~204 tokens)
├── stow/
│   └── PKGBUILD (30 lines, 853 B, ~258 tokens)
├── subversion/
│   └── PKGBUILD (227 lines, 9.8 KB, ~2.6k tokens)
├── swig/
│   └── PKGBUILD (63 lines, 1.4 KB, ~421 tokens)
├── tar/
│   └── PKGBUILD (74 lines, 2.4 KB, ~691 tokens)
├── task/
│   └── PKGBUILD (85 lines, 3.1 KB, ~899 tokens)
├── tcl/
│   └── PKGBUILD (173 lines, 4.9 KB, ~1.6k tokens)
├── tcsh/
│   └── PKGBUILD (58 lines, 1.3 KB, ~411 tokens)
├── texinfo/
│   └── PKGBUILD (111 lines, 4.0 KB, ~1.2k tokens)
├── tftp-hpa/
│   └── PKGBUILD (60 lines, 1.8 KB, ~518 tokens)
├── tig/
│   └── PKGBUILD (43 lines, 1.1 KB, ~361 tokens)
├── time/
│   └── PKGBUILD (38 lines, 895 B, ~282 tokens)
├── tio/
│   └── PKGBUILD (37 lines, 1.1 KB, ~338 tokens)
├── tmate/
│   └── PKGBUILD (53 lines, 1.9 KB, ~528 tokens)
├── tmux/
│   └── PKGBUILD (71 lines, 1.7 KB, ~558 tokens)
├── trash/
│   └── PKGBUILD (36 lines, 906 B, ~276 tokens)
├── tree/
│   └── PKGBUILD (37 lines, 1.2 KB, ~346 tokens)
├── tzcode/
│   └── PKGBUILD (58 lines, 2.0 KB, ~573 tokens)
├── u-boot-tools/
│   └── PKGBUILD (58 lines, 2.4 KB, ~714 tokens)
├── ucl/
│   └── PKGBUILD (72 lines, 2.1 KB, ~633 tokens)
├── unrar/
│   └── PKGBUILD (83 lines, 1.7 KB, ~536 tokens)
├── unzip/
│   └── PKGBUILD (134 lines, 5.0 KB, ~1.6k tokens)
├── upx/
│   └── PKGBUILD (50 lines, 1.5 KB, ~459 tokens)
├── util-linux/
│   └── PKGBUILD (207 lines, 6.6 KB, ~1.9k tokens)
├── uutils-coreutils/
│   └── PKGBUILD (51 lines, 1.4 KB, ~418 tokens)
├── uutils-findutils/
│   └── PKGBUILD (46 lines, 1.1 KB, ~345 tokens)
├── uutils-sed/
│   └── PKGBUILD (42 lines, 1001 B, ~315 tokens)
├── uv/
│   └── PKGBUILD (92 lines, 2.8 KB, ~843 tokens)
├── vifm/
│   └── PKGBUILD (31 lines, 930 B, ~273 tokens)
├── vim/
│   └── PKGBUILD (168 lines, 4.9 KB, ~1.5k tokens)
├── vimpager/
│   └── PKGBUILD (35 lines, 965 B, ~295 tokens)
├── w3m/
│   └── PKGBUILD (66 lines, 1.4 KB, ~441 tokens)
├── wcd/
│   └── PKGBUILD (34 lines, 927 B, ~288 tokens)
├── wget/
│   └── PKGBUILD (70 lines, 2.1 KB, ~625 tokens)
├── which/
│   └── PKGBUILD (44 lines, 1.2 KB, ~385 tokens)
├── whois/
│   └── PKGBUILD (45 lines, 1.3 KB, ~394 tokens)
├── windows-default-manifest/
│   └── PKGBUILD (21 lines, 685 B, ~192 tokens)
├── winpty/
│   └── PKGBUILD (65 lines, 2.6 KB, ~702 tokens)
├── xdelta3/
│   └── PKGBUILD (68 lines, 1.3 KB, ~401 tokens)
├── xmlto/
│   └── PKGBUILD (35 lines, 759 B, ~239 tokens)
├── xorg-util-macros/
│   └── PKGBUILD (50 lines, 1.2 KB, ~393 tokens)
├── xorgproto/
│   └── PKGBUILD (47 lines, 920 B, ~280 tokens)
├── xorriso/
│   └── PKGBUILD (63 lines, 1.4 KB, ~418 tokens)
├── xxhash/
│   └── PKGBUILD (55 lines, 1.5 KB, ~461 tokens)
├── xz/
│   └── PKGBUILD (81 lines, 2.2 KB, ~684 tokens)
├── yasm/
│   └── PKGBUILD (61 lines, 1.6 KB, ~512 tokens)
├── yelp-tools/
│   └── PKGBUILD (49 lines, 1.3 KB, ~396 tokens)
├── yelp-xsl/
│   └── PKGBUILD (35 lines, 760 B, ~239 tokens)
├── zip/
│   └── PKGBUILD (45 lines, 1.5 KB, ~452 tokens)
├── zlib/
│   └── PKGBUILD (84 lines, 2.4 KB, ~733 tokens)
├── znc/
│   └── PKGBUILD (82 lines, 1.8 KB, ~550 tokens)
├── zsh/
│   └── PKGBUILD (123 lines, 4.0 KB, ~1.1k tokens)
└── zstd/
    └── PKGBUILD (71 lines, 1.9 KB, ~630 tokens)
```

## Source Files

================================================
FILE: ack/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

pkgname=ack
pkgver=3.10.0
pkgrel=2
pkgdesc="A Perl-based grep replacement, aimed at programmers with large trees of heterogeneous source code"
arch=('any')
url="https://beyondgrep.com/"
msys2_references=(
  "cpe: cpe:/a:beyondgrep:ack"
  "purl: pkg:cpan/PETDANCE/ack"
)
license=('spdx:Artistic-1.0-Perl OR GPL-1.0-or-later')
depends=('perl-file-next')
groups=('perl-modules')
options=(!emptydirs)
source=("https://www.cpan.org/authors/id/P/PE/PETDANCE/${pkgname}-v${pkgver}.tar.gz"
        '0002-ack-2.12-match-makefiles-with-more-generality.patch')
sha256sums=('65e83cfb38a71fca725e9a14a8201ee871e629fc6b10231e1303dd3501ba563a'
            '3f2bec65a174465babb5fef6c179ae25b7d85bee2263683396b574c3d3d33cab')
conflicts=("perl-ack")
provides=("perl-ack=${pkgver}")
replaces=("perl-ack")

prepare() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  patch -p1 -i ${srcdir}/0002-ack-2.12-match-makefiles-with-more-generality.patch
}

build() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make
}

check() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  # some standalone tests are failing
  make test || true
}

package() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  make install DESTDIR="${pkgdir}"
}


================================================
FILE: ansible/PKGBUILD
================================================
# Maintainer: Alexandre Ferreira <contact@alexjorgef.com>

pkgname=ansible
# Note: When packaging a new version of ansible, bump version of ansible-core in
# depends, if required.
pkgver=14.6.0
pkgrel=1
pkgdesc='Official assortment of Ansible collections'
arch=('any')
url='https://pypi.org/project/ansible/'
msys2_repository_url='https://github.com/ansible/ansible'
msys2_references=(
  'anitya: 195814'
  'archlinux: ansible'
  "cpe: cpe:/a:ansible:ansible"
  "cpe: cpe:/a:redhat:ansible"
  "cpe: cpe:/a:redhat:ansible_engine"
  'gentoo: app-admin/ansible'
  "purl: pkg:pypi/ansible"
)
license=('spdx:GPL-3.0-or-later')
depends=(
  'python'
  # Bump the version of ansible-core at least whenever a new major version of
  # ansible is packaged / released. Check the ansible release notes to get the
  # corresponding version of ansible-core. It usually has a statement like
  # "Ansible x.y.z depends on ansible-core a.b.c" in it.
  'ansible-core>=2.21.6'
)
makedepends=(
  'python-build'
  'python-installer'
  'python-setuptools'
)
source=("https://pypi.python.org/packages/source/a/ansible/${pkgname}-${pkgver}.tar.gz")
sha512sums=('3125efbb5702c8b8836ce94a0dca697bf6f73c8d6d129abc886954fc35e712406c0a9fda42134032b1916c13026bf84d06e3d2f42b96aef0208c5622533e6aeb')

build() {
  cd "${pkgname}-${pkgver}"

  python -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd "${pkgname}-${pkgver}"

  python -m installer --destdir="${pkgdir}" dist/*.whl

  install -Dm644 COPYING -t "${pkgdir}/usr/share/doc/${pkgname}"
}


================================================
FILE: ansible-core/PKGBUILD
================================================
# Maintainer: Alexandre Ferreira <contact@alexjorgef.com>

pkgname=ansible-core
_pyname="${pkgname/-/_}"
pkgver=2.22.0
pkgrel=1
pkgdesc='Radically simple IT automation platform'
arch=('any')
url='https://pypi.org/project/ansible-core'
msys2_repository_url='https://github.com/ansible/ansible'
msys2_references=(
  'anitya: 165410'
  'archlinux: ansible-core'
  'aur:' # ignore ansible-core-2.16
  'cpe: cpe:/a:ansible:ansible'
  'cpe: cpe:/a:redhat:ansible'
  'cpe: cpe:/a:redhat:ansible_engine'
  'gentoo: app-admin/ansible-core'
  'purl: pkg:pypi/ansible-core'
)
license=('spdx:GPL-3.0-or-later')
depends=(
  'msys2-runtime-devel' # needed for ctypes.util.find_library("c") as it provides libc.a
  'python'
  'python-cryptography'
  'python-jinja'
  'python-packaging'
  'python-resolvelib'
  'python-yaml'
)
makedepends=(
  'python-build'
  'python-installer'
  'python-setuptools'
  'tar'
)
optdepends=(
  'sshpass: for ssh connections with password'
)
provides=(
  'ansible-base'
  'python-ansible'
)
replaces=('ansible-base')
backup=('etc/ansible/ansible.cfg')
source=("https://pypi.python.org/packages/source/a/ansible-core/ansible_core-${pkgver}.tar.gz")
noextract=("${_pyname}-${pkgver}.tar.gz")
sha512sums=('598c14b922759b35f67787e55653a40c1cf94edd4fae579f0893074c2fe67f779759cb9f3d8f9c17fdbe94c4dfbe68f8514c8d341b7c4cc69f57f5e26d30a2d5')

prepare() {
  tar zxf "${_pyname}-${pkgver}.tar.gz" || tar zxf "${_pyname}-${pkgver}.tar.gz"
}

build() {
  cd "${_pyname}-${pkgver}"

  python -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd "${_pyname}-${pkgver}"

  python -m installer --destdir="${pkgdir}" dist/*.whl

  install -Dm644 COPYING -t "${pkgdir}/usr/share/doc/${pkgname}"
}


================================================
FILE: apr/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=('apr' 'apr-devel')
pkgver=1.7.6
pkgrel=2
pkgdesc="The Apache Portable Runtime"
arch=('i686' 'x86_64')
url="https://apr.apache.org/"
msys2_repository_url='https://github.com/apache/apr'
msys2_references=(
  "cpe: cpe:/a:apache:portable_runtime"
)
makedepends=('libxcrypt-devel' 'libuuid-devel' 'autotools' 'gcc')
options=('!libtool')
license=('spdx:Apache-2.0')

_patches=(
  0001-fixes-building-with-gcc-15.patch
)

source=(https://archive.apache.org/dist/apr/apr-${pkgver}.tar.bz2
        ${_patches[@]})
sha256sums=('49030d92d2575da735791b496dc322f3ce5cff9494779ba8cc28c7f46c5deb32'
            '672e5807eded9d26cfb6774e4d02bc104ce5fd36ddbfc357c835b7faf04e2c36')

prepare() {
  cd "${srcdir}/apr-${pkgver}"

  for patch in "${_patches[@]}"; do
    msg2 "Patching with ${patch}"
    patch -Nbp1 -i "${srcdir}/${patch}"
  done

  autoreconf -fi
}

build() {
  cd "${srcdir}/apr-${pkgver}"

  export MSYSTEM=CYGWIN
  ./configure \
      --build=${CHOST} \
      --prefix=/usr \
      --libexecdir=/usr/lib/apr/modules \
      --datadir=/usr/share/apr \
      ac_cv_header_windows_h=no \
      ac_cv_header_winsock2_h=no

  make
  make DESTDIR="${srcdir}/dest" install
}

check() {
  cd "${srcdir}/apr-${pkgver}"
  make -j1 check || true
}

package_apr() {
  depends=('libxcrypt' 'libuuid')
  groups=('libraries')

  mkdir -p ${pkgdir}/usr/{bin,share}
  cp -f ${srcdir}/dest/usr/bin/*.dll ${pkgdir}/usr/bin/
}

package_apr-devel() {
  pkgdesc="Libapr headers and libraries"
  groups=('development')
  depends=("apr=${pkgver}" "libxcrypt-devel" "libuuid-devel")
  options=('staticlibs')

  mkdir -p ${pkgdir}/usr/{bin,share}
  cp -f ${srcdir}/dest/usr/bin/*-config ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/share/apr ${pkgdir}/usr/share/
}


================================================
FILE: apr-util/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=('apr-util' 'apr-util-devel')
pkgver=1.6.5
pkgrel=1
pkgdesc="The Apache Portable Runtime"
arch=('i686' 'x86_64')
url="https://apr.apache.org/"
msys2_references=(
  "cpe: cpe:/a:apache:apr-util"
)
makedepends=('apr-devel' 'libexpat-devel' 'libsqlite-devel' 'autotools' 'gcc' 'libxcrypt-devel')
options=('!libtool')
license=('spdx:Apache-2.0')
source=("https://archive.apache.org/dist/apr/apr-util-${pkgver}.tar.bz2"
        plugins.patch)
sha256sums=('96de1dd6f6a0476d2d2e7964926d8c1ddc3bb0e210e1b1812d3ba5a454a392e2'
            '3280d6ed8e577b626e60d495856d16f6944c3144c495fe9ed8cad6b39332824c')

prepare() {
  cd "${srcdir}/apr-util-${pkgver}"

  patch -p1 -i ${srcdir}/plugins.patch

  autoreconf -fi
}

build() {
  cd "${srcdir}/apr-util-${pkgver}"

  export MSYSTEM=CYGWIN
  ./configure \
    --build=${CHOST} \
    --prefix=/usr \
    --with-apr=/usr \
    --with-expat=/usr \
    --without-gdbm \
    --without-ldap \
    --without-pgsql \
    --with-sqlite3=/usr

  make -j1
  make DESTDIR="${srcdir}/dest" install
}

check() {
  cd "${srcdir}/apr-util-${pkgver}"
  make -j1 check
}

package_apr-util() {
  depends=('apr' 'expat' 'libsqlite' 'libxcrypt')
  groups=('libraries')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*.dll ${pkgdir}/usr/bin/
}

package_apr-util-devel() {
  pkgdesc="Libapr-util headers and libraries"
  groups=('development')
  depends=("apr-util=${pkgver}" "apr-devel" "libexpat-devel" "libsqlite-devel")
  options=('staticlibs')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*-config ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/
}


================================================
FILE: asciidoc/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=asciidoc
pkgver=10.2.1
pkgrel=3
pkgdesc='Text document format for short documents, articles, books and UNIX man pages.'
arch=('any')
url='https://asciidoc.org/'
msys2_repository_url="https://github.com/asciidoc-py/asciidoc-py"
msys2_references=(
  "purl: pkg:pypi/asciidoc"
)
license=('spdx:GPL-2.0-or-later')
depends=('python' 'libxslt' 'docbook-xsl')
makedepends=(
  'gcc'
  "python-setuptools"
  "python-build"
  "python-installer"
)
# optdepends=('lilypond: music-filter'
            # 'imagemagick: music-filter (used in conjunction with lilypond)'
            # 'source-highlight: source-highlight-filter'
            # 'dblatex: pdf generation'
            # 'fop: alternative pdf generation'
            # 'lynx: text generation'
            # 'w3m: text generation (alternative to lynx)')
source=("https://github.com/asciidoc-py/asciidoc-py/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('aa7be8ae894f6cc1e67784d76ffa6c6b9e9f96efdc695db43c6bd63820e5072b')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  python -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  python -m installer --destdir="${pkgdir}" dist/*.whl

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/asciidoc/LICENSE"
}


================================================
FILE: asciidoctor/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname='asciidoctor'
pkgver=2.0.26
pkgrel=1
pkgdesc='An implementation of AsciiDoc in Ruby'
arch=('any')
url='https://asciidoctor.org'
msys2_references=(
  "cpe: cpe:/a:asciidoctor:asciidoctor"
  'purl: pkg:gem/asciidoctor'
)
msys2_repository_url='https://github.com/asciidoctor/asciidoctor'
license=('spdx:MIT')
depends=(
  ruby
)
makedepends=(
  git
)
source=("git+https://github.com/asciidoctor/asciidoctor#tag=v${pkgver}")
sha256sums=('4d5e261a1425a8e24607cd427115e5abb8003f9990a9332e9f5044aae8e79fdf')

build() {
  cd "${pkgname}"

  local _gemdir="$(gem env gemdir)"

  gem build "${pkgname}.gemspec"

  gem install \
    --local \
    --ignore-dependencies \
    --no-user-install \
    --no-document \
    --install-dir "tmp_install${_gemdir}" \
    --bindir "tmp_install/usr/bin" \
    "${pkgname}-${pkgver}.gem"
}

package() {
  cd "${pkgname}"

  local _gemdir="$(gem env gemdir)"

  install -D -m644 "tmp_install${_gemdir}/gems/${pkgname}-${pkgver}/man/asciidoctor.1" \
    "${pkgdir}/usr/share/man/man1/asciidoctor.1"

  cp -a tmp_install/. "${pkgdir}/"

  install -D -m644 LICENSE* --target-directory "${pkgdir}/usr/share/licenses/${pkgname}"
  install -D -m644 *.adoc --target-directory "${pkgdir}/usr/share/doc/${pkgname}"
}


================================================
FILE: aspell/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=("aspell" "aspell-devel")
pkgver=0.60.8.3
pkgrel=1
pkgdesc="A Free and Open Source spell checker (libraries)"
arch=('i686' 'x86_64')
url="http://aspell.net/"
msys2_repository_url="https://github.com/GNUAspell/aspell"
msys2_references=(
  "cpe: cpe:/a:gnu:aspell"
)
license=('spdx:LGPL-2.0-or-later AND LGPL-2.1-only AND GPL-2.0-or-later AND BSD-2-Clause')
groups=('libraries')
makedepends=(
  'autotools'
  'gcc'
  'gettext-devel'
  'libiconv-devel'
  'ncurses-devel'
)
options=()
source=("https://ftp.gnu.org/gnu/aspell/${pkgname}-${pkgver}.tar.gz"
        "aspell-noundefined.patch"
        "aspell-so2dll.patch"
        "aspell-fileno.patch")
sha256sums=('0534eae11132405120d11e46bf595bd5dd189bc124ba77a5dd6aae861b48a162'
            '35c0a786f580302052bab7569007735436dad9ceb551910205651bc2ad6bcb85'
            '9b9e4300d35a92f029c098da7001235d1dd6aeb03a854591afd84606b5cd257b'
            '8054609ba63038c7f488782a1f80ed31ba1fe18ded842707702ad08793903c7b')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p1 -i ${srcdir}/aspell-noundefined.patch
  patch -p1 -i ${srcdir}/aspell-so2dll.patch
  patch -p1 -i ${srcdir}/aspell-fileno.patch

  autoreconf -ivf
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure -C \
    --prefix=/usr \
    --sysconfdir=/etc \
    --build=${CHOST} \
    --enable-static

  make
  make DESTDIR="${srcdir}/dest" install
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make check
}

package_aspell() {
  depends=("gcc-libs" "gettext" "libiconv" "ncurses")

  mkdir -p ${pkgdir}/usr/bin
  cp -rf ${srcdir}/dest/usr/bin ${pkgdir}/usr/

  mkdir -p ${pkgdir}/usr/lib/aspell-0.60
  cp -rf ${srcdir}/dest/usr/lib/aspell-0.60 ${pkgdir}/usr/lib/

  mkdir -p ${pkgdir}/usr/share
  cp -rf ${srcdir}/dest/usr/share ${pkgdir}/usr/
}

package_aspell-devel() {
  pkgdesc="Aspell headers and libraries (development)"
  groups=('development')
  depends=("aspell=${pkgver}" "gettext-devel" "libiconv-devel" "ncurses-devel")

  mkdir -p ${pkgdir}/usr/lib
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -f ${srcdir}/dest/usr/lib/*.a ${pkgdir}/usr/lib
}


================================================
FILE: aspell-de/PKGBUILD
================================================
_lang=de
_realname=aspell-${_lang}
pkgname=${_realname}
_pkgver=20161207-7-0
pkgver=${_pkgver//-/.}
pkgrel=1
_pkgname=aspell6-${_lang}-${_pkgver}
pkgdesc='German dictionary for aspell'
arch=('i686' 'x86_64')
url="http://aspell.net/"
license=('spdx:GPL-2.0-or-later')
depends=('aspell')
makedepends=('autotools')
source=("https://ftp.gnu.org/gnu/aspell/dict/${_lang}/${_pkgname}.tar.bz2")
sha256sums=('c2125d1fafb1d4effbe6c88d4e9127db59da9ed92639c7cbaeae1b7337655571')

prepare() {
  cd "${srcdir}/${_pkgname}"
}

build() {
  cd "${srcdir}/${_pkgname}"
  ./configure
  make
}

package() {
  cd "${srcdir}/${_pkgname}"
  make install DESTDIR="${pkgdir}"

  install -vDm444 -T Copyright "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"
}


================================================
FILE: aspell-en/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgbase=aspell-en
pkgname=aspell6-en
pkgver=2026.02.25
_pkg_subver=0
pkgrel=1
pkgdesc="English dictionary for aspell"
arch=('i686' 'x86_64')
url="http://aspell.net/"
license=('spdx:LicenseRef-aspell-en-wordlist')
groups=()
makedepends=('aspell-devel' 'autotools' 'gcc')
depends=('aspell>=0.60')
provides=('aspell-en')
options=()
source=("https://ftp.gnu.org/gnu/aspell/dict/en/${pkgname}-${pkgver}-${_pkg_subver}.tar.bz2"{,.sig})
sha256sums=('77a5cb437c45d1115f3b593802c20651d8c93803ed1073278dc1a1240016f10d'
            'SKIP')
validpgpkeys=('78DEC3DB0AEA763951322BBF71C636695B147849') # Aspell Dictionary Upload <dict-upload@aspell.net>

build() {
  cd "${srcdir}/${pkgname}-${pkgver}-${_pkg_subver}"
  ./configure
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}-${_pkg_subver}"
  make DESTDIR="${pkgdir}/" install

  install -Dm644 Copyright ${pkgdir}/usr/share/licenses/aspell-en/Copyright
}


================================================
FILE: atool/PKGBUILD
================================================
# $Id$
# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: leif_thande <leif.thande@gmail.com>
# Contributor: tranquility <trankas@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=atool
pkgver=0.39.0
pkgrel=3
pkgdesc="A script for managing file archives of various types"
arch=('any')
url="https://www.nongnu.org/atool/"
license=('spdx:GPL-3.0-or-later')
depends=('file' 'perl')
makedepends=('autotools')
optdepends=('bzip2: for using atool with bzip2 compressed archives'
            'cpio: for using atool with cpio archives'
            'gzip: for using atool with gzip compressed archives'
            'lha: for using atool with lha, lharc and similar archives'
            'xz: for using atool with lzma compressed archives'
            'lzop: for using atool with lzop compressed archives'
            'p7zip: for using atool with 7z archives'
            'tar: for using atool with tar archives'
            'unace: for using atool with ace archives'
            'zip: for using atool for creating zip archives'
            'unzip: for using atool for unpacking archives')
source=(https://download.savannah.gnu.org/releases/${pkgname}/${pkgname}-${pkgver}.tar.gz)
sha256sums=('aaf60095884abb872e25f8e919a8a63d0dabaeca46faeba87d12812d6efc703b')

build() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  ./configure --prefix=/usr
  
  sed -i 's/ln -s -f/cp -p -i/' Makefile
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  make prefix="${pkgdir}"/usr install
  
  install -Dm644 COPYING "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
  install -Dm644 extra/bash-completion-atool_0.1-1 "${pkgdir}"/usr/share/bash-completion/completions/atool
}


================================================
FILE: autoconf-archive/PKGBUILD
================================================
# Maintainer: Andrea Zagli <andrea.zagli.free@gmail.com>

pkgname=autoconf-archive
pkgver=2024.10.16
pkgrel=1
pkgdesc="Autoconf Macro Archive"
arch=('any')
license=('spdx:GPL-3.0-or-later')
url="https://www.gnu.org/software/autoconf-archive"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/autoconf-archive.git'
conflicts=(gnome-common)
replaces=(gnome-common)
provides=(gnome-common)
makedepends=('autotools')
source=(https://ftp.gnu.org/pub/gnu/${pkgname}/${pkgname}-${pkgver}.tar.xz
        msysize-autoconf-archive-2019.01.06.patch)
sha256sums=('7bcd5d001916f3a50ed7436f4f700e3d2b1bade3ed803219c592d62502a57363'
            'd2afa48081316320faea33683eecf3eb146617a8cab85ae8590b4f7882c1a529')

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying $_patch"
    patch -Nbp1 -i "${srcdir}/$_patch"
  done
}

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}
  apply_patch_with_msg msysize-autoconf-archive-2019.01.06.patch
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  ./configure --prefix=/usr
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install

  install -Dm644 COPYING $pkgdir/usr/share/licenses/${pkgname}-${pkgver}/COPYING
  install -Dm644 COPYING.EXCEPTION $pkgdir/usr/share/licenses/${pkgname}-${pkgver}/COPYING.EXCEPTION
}


================================================
FILE: autoconf2.13/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=autoconf2.13
pkgver=2.13
pkgrel=6
pkgdesc="A GNU tool for automatically configuring source code"
arch=('any')
license=('spdx:GPL-2.0-or-later AND GPL-3.0-or-later WITH Autoconf-exception-3.0')
url="https://www.gnu.org/software/autoconf"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/autoconf.git'
depends=('awk' 'm4' 'diffutils' 'bash' 'perl')
makedepends=('make')
source=(https://ftp.gnu.org/pub/gnu/autoconf/autoconf-${pkgver}.tar.gz
        0001-autoconf-2.13-version-specific-share-directory.patch
        autoconf2.1-texinfo.patch
        autoconf-2.13-msys2.patch
        autoconf-2.13-Clang-16-fixes-for-various-tests.patch
        autoconf-2.13-K-R-decls-clang.patch
        autoconf-2.13-msys2.patch
        autoconf-2.13-perl-5.26.patch
        autoconf-2.13-test-fixes.patch)
sha256sums=('f0611136bee505811e9ca11ca7ac188ef5323a8e2ef19cffd3edb3cf08fd791e'
            '85257fad008fff943942e676fcc45df76d38429d5807fa59eb3eb1812dcd3a77'
            'bb987bcd817988830d77c7acf377d14ca89629fb1e5dcea4cf193a7b0d44d62f'
            '4d57e9ab72c5084233fce61bc0d9edb177971de5dd2ec376300dd224b029f87e'
            '52aa69dbd82470c3b8d23e35477d40798a16814201c3c206f3cc058d7234d1b6'
            '54406429dfe85950717e13a0a501f778f340d2395a82f830b740408c5284102c'
            '4d57e9ab72c5084233fce61bc0d9edb177971de5dd2ec376300dd224b029f87e'
            '770d85b03a90787950225bdf52e9e14ab66bd5d85dacb422e947fb8f644e55a6'
            '43929d95e6050642385530df91084d4c073cec5cca727918d5ff84bc1e3059f5')

prepare() {
  cd ${srcdir}/autoconf-${pkgver}

  # MSYS2
  patch -p2 -i ${srcdir}/autoconf2.1-texinfo.patch
  patch -p1 -i ${srcdir}/autoconf-2.13-msys2.patch
  patch -p1 -i ${srcdir}/0001-autoconf-2.13-version-specific-share-directory.patch

  # from gentoo: https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-devel/autoconf/files
  patch -p1 -i ${srcdir}/autoconf-2.13-test-fixes.patch
  patch -p1 -i ${srcdir}/autoconf-2.13-perl-5.26.patch
  patch -p1 -i ${srcdir}/autoconf-2.13-K-R-decls-clang.patch
  patch -p1 -i ${srcdir}/autoconf-2.13-Clang-16-fixes-for-various-tests.patch
}

build() {
  cd ${srcdir}/autoconf-${pkgver}

  ./configure \
    --prefix=/usr \
    --program-suffix=-2.13

  make
}

check() {
  cd ${srcdir}/autoconf-${pkgver}
  # autoconf 2.13: 4 out of 255 unexpected failures
  make check || exit 0
}

package() {
  cd ${srcdir}/autoconf-${pkgver}
  make prefix=${pkgdir}/usr install

  makeinfo --no-split -I ${srcdir}/autoconf-${pkgver} -o autoconf2.13.info autoconf.texi
  # license exception
  install -Dm644 COPYING \
    $pkgdir/usr/share/licenses/autoconf${pkgver}/COPYING

  rm -rf ${pkgdir}/usr/info
  mkdir -p ${pkgdir}/usr/share/info
  cp autoconf2.13.info ${pkgdir}/usr/share/info/autoconf2.13.info
}


================================================
FILE: autoconf2.69/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

_realname=autoconf
pkgname=${_realname}2.69
pkgver=2.69
pkgrel=4
pkgdesc="A GNU tool for automatically configuring source code"
arch=('any')
license=('spdx:GPL-2.0-or-later AND GPL-3.0-or-later WITH Autoconf-exception-3.0')
url="https://www.gnu.org/software/autoconf"
depends=('awk' 'm4' 'diffutils' 'bash' 'perl')
makedepends=('make')
source=(https://ftp.gnu.org/pub/gnu/${_realname}/${_realname}-${pkgver}.tar.xz
        0001-fix-texinfo.patch
        0002-msys2.patch
        0003-autotest-remove-cr-from-prog-stdout-stderr.patch
        0004-docs.patch
        0005-package.patch
        autoconf-2.69-K-R-decls-clang.patch
        autoconf-2.69-fix-libtool-test.patch
        autoconf-2.69-make-tests-bash5-compatible.patch
        autoconf-2.69-perl-5.26-2.patch
        autoconf-2.69-perl-5.26.patch)
sha256sums=('64ebcec9f8ac5b2487125a86a7760d2591ac9e1d3dbd59489633f9de62a57684'
            'ad42ff57d1ff3dd6ba06fe94f913a369f9210963856e8c955efed9a164609a64'
            '9f31df02eb41df57a05ceea1d1442424d1cca63cd9304c953732fa6c65279a5a'
            '74e2135a3f34f5692a77de85c21cb2f0fd8a1dcf396f7fbba7deb0c59faa54eb'
            'bc973e76f3ea3941818099cb5a22081c8a9703338b3194fce3534a07ac32c078'
            'a9bd30264a812672bf7fa7b67135871ccac4c84b30113b82ea7c2f5987e0d951'
            '1253d17e557310f538b0a37fff8c36061a99c43158ed97a68cdf109cd58686b6'
            '7793209b33013dc0f81208718c68440c5aae80e7a1c4b8d336e382525af791a7'
            '176d4bf66920f66115aba6c44a71a7197b3d65038aac51ba51f61e241bc3e398'
            'a49dd5bac3b62daa0ff688ab4d508d71dbd2f4f8d7e2a02321926346161bf3ee'
            '35c449281546376449766f92d49fc121ca50e330e60fefcfc9be2af3253082c2')

prepare() {
  cd ${srcdir}/${_realname}-${pkgver}

  # MSYS2
  patch -p1 -i ${srcdir}/0001-fix-texinfo.patch
  patch -p1 -i ${srcdir}/0002-msys2.patch
  patch -p1 -i ${srcdir}/0003-autotest-remove-cr-from-prog-stdout-stderr.patch
  patch -p1 -i ${srcdir}/0004-docs.patch
  patch -p1 -i ${srcdir}/0005-package.patch

  # from gentoo: https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-devel/autoconf/files
  patch -p1 -i ${srcdir}/autoconf-2.69-perl-5.26.patch
  patch -p1 -i ${srcdir}/autoconf-2.69-fix-libtool-test.patch
  patch -p1 -i ${srcdir}/autoconf-2.69-perl-5.26-2.patch
  patch -p1 -i ${srcdir}/autoconf-2.69-make-tests-bash5-compatible.patch
  patch -p1 -i ${srcdir}/autoconf-2.69-K-R-decls-clang.patch
}

build() {
  mkdir -p build-${MSYSTEM} && cd build-${MSYSTEM}

  ../${_realname}-${pkgver}/configure \
    --prefix=/usr \
    --program-suffix=-2.69

  make
}

check() {
  cd ${srcdir}/build-${MSYSTEM}
  make check
}

package() {
  cd ${srcdir}/build-${MSYSTEM}
  make DESTDIR=${pkgdir} install

  # license exception
  install -Dm644 ${srcdir}/${_realname}-${pkgver}/COPYING.EXCEPTION \
    $pkgdir/usr/share/licenses/autoconf${pkgver}/COPYING.EXCEPTION

  # conflicts with autoconf
  rm -rf ${pkgdir}/usr/share/{emacs,info}
}


================================================
FILE: autoconf2.71/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

_realname=autoconf
pkgname=${_realname}2.71
pkgver=2.71
pkgrel=4
pkgdesc="A GNU tool for automatically configuring source code"
arch=('any')
license=('spdx:GPL-2.0-or-later AND GPL-3.0-or-later WITH Autoconf-exception-3.0')
url="https://www.gnu.org/software/autoconf"
depends=('awk' 'm4' 'diffutils' 'bash' 'perl' 'sed')
makedepends=('make')
source=(https://ftp.gnu.org/pub/gnu/${_realname}/${_realname}-${pkgver}.tar.xz
        0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch
        0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch
        0003-autoconf-2.70-MSYS2-specifics-config.guess.patch
        0004-LLVM-Flang.patch
        0005-package.patch
        autoconf-2.71-AC_C_BIGENDIAN-lto.patch
        autoconf-2.71-AC_LANG_CALL_C_cxx.patch
        autoconf-2.71-K-R-decls-clang-deux.patch
        autoconf-2.71-K-R-decls-clang.patch
        autoconf-2.71-make-4.4.patch)
sha256sums=('f14c83cfebcc9427f2c3cea7258bd90df972d92eb26752da4ddad81c87a0faa4'
            '3a5337e2269407405ee4c7feb12dbe2ae711610c3144c07cd085272676005db6'
            'c4e4952cc63a2ddaf7bf539f6e59353c4fadbf04cd48c3cfa789f8b175d0bd27'
            'a7671bef559a5f3edbd811a7cf9b557f216f1d3e9502dc046fd3a0ea665da7da'
            'b055f013c85720dabe21947d2dbb67d0a282383d44b39d1a78ba05949834e649'
            '01894e38f901629373ff8ca6c55571b14450eacc625e717cd0da0ca65860f5e5'
            '1499271fa3004079bc2ce9db2697a7f4bd29666b2dfd7e1c39ad8fa397a4c08e'
            'befc2e2ae932e2247eee7fdd17d17e6b3065a741a47e0154670a009907d0860b'
            'c0e2215f983763587521c3925e6ebb73c6e2e8cd9ac1e5d649720252a26cca78'
            '65f2b02e96db437fc8fa974ba4b9db76eb9d053ceebcaf309c19f87eae3f8158'
            '402350041cbfb092321a5998f6abec6b0c59d3d03ae63735120e96a5a4a09d47')

apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying $_patch"
    patch -Np1 -i "${srcdir}/$_patch"
  done
}

prepare() {
  cd ${srcdir}/${_realname}-${pkgver}

  # MSYS2
  apply_patch_with_msg \
    0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch \
    0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch \
    0003-autoconf-2.70-MSYS2-specifics-config.guess.patch \
    0004-LLVM-Flang.patch \
    0005-package.patch

  # from gentoo: https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-devel/autoconf/files
  apply_patch_with_msg \
    autoconf-2.71-AC_LANG_CALL_C_cxx.patch \
    autoconf-2.71-AC_C_BIGENDIAN-lto.patch \
    autoconf-2.71-K-R-decls-clang.patch \
    autoconf-2.71-make-4.4.patch \
    autoconf-2.71-K-R-decls-clang-deux.patch
}

build() {
  mkdir -p build-${MSYSTEM} && cd build-${MSYSTEM}

  ../${_realname}-${pkgver}/configure \
    --prefix=/usr \
    --program-suffix=-2.71

  make
}

check() {
  cd build-${MSYSTEM}
  # CAUTION: The tests run very very long, even on a server.
  make check TESTSUITEFLAGS='-j16'
}

package() {
  make -C build-${MSYSTEM} DESTDIR=${pkgdir} install

  # license exception
  install -Dm644 ${_realname}-${pkgver}/COPYING.EXCEPTION \
    $pkgdir/usr/share/licenses/autoconf${pkgver}/COPYING.EXCEPTION

  find ${pkgdir}/usr/share

  # conflict with bintuils
  rm -f ${pkgdir}/usr/share/info/standards.info
  # conflicts with autoconf
  rm -rf ${pkgdir}/usr/share/{emacs,info}
}


================================================
FILE: autoconf2.72/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

_realname=autoconf
pkgname=${_realname}2.72
pkgver=2.72
pkgrel=4
pkgdesc="A GNU tool for automatically configuring source code"
arch=('any')
license=('spdx:GPL-2.0-or-later AND GPL-3.0-or-later WITH Autoconf-exception-3.0')
url="https://www.gnu.org/software/autoconf"
depends=('awk' 'm4' 'diffutils' 'bash' 'perl' 'sed')
makedepends=('make')
source=(https://ftp.gnu.org/pub/gnu/${_realname}/${_realname}-${pkgver}.tar.xz
        0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch
        0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch
        0003-autoconf-2.70-MSYS2-specifics-config.guess.patch
        0004-LLVM-Flang.patch
        0005-package.patch
        0006-fortran-mingw-libs.patch)
sha256sums=('ba885c1319578d6c94d46e9b0dceb4014caafe2490e437a0dbca3f270a223f5a'
            '3a5337e2269407405ee4c7feb12dbe2ae711610c3144c07cd085272676005db6'
            'c4e4952cc63a2ddaf7bf539f6e59353c4fadbf04cd48c3cfa789f8b175d0bd27'
            'e3819dac51673591148e56872ad09d6c46527e7e48bc69fe9d49475fac2af179'
            'b055f013c85720dabe21947d2dbb67d0a282383d44b39d1a78ba05949834e649'
            '5743a28cf0af0c10ec049c6d8df6801c675c9656ff623fbda5c2a29b3b15e8f4'
            'bad3cffb9a4ebbef350227439b4e4bd1654b4cc9e2faf898971703779f4c113e')

apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying $_patch"
    patch -Np1 -i "${srcdir}/$_patch"
  done
}

prepare() {
  cd "${srcdir}"/${_realname}-${pkgver}

  # MSYS2
  apply_patch_with_msg \
    0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch \
    0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch \
    0003-autoconf-2.70-MSYS2-specifics-config.guess.patch \
    0004-LLVM-Flang.patch \
    0005-package.patch \
    0006-fortran-mingw-libs.patch
}

build() {
  mkdir -p build-${MSYSTEM} && cd build-${MSYSTEM}

  ../${_realname}-${pkgver}/configure \
    --prefix=/usr \
    --program-suffix=-2.72

  make
}

check() {
  cd build-${MSYSTEM}
  # CAUTION: The tests run very very long, even on a server.
  make check TESTSUITEFLAGS='-j16'
}

package() {
  make -C build-${MSYSTEM} DESTDIR="${pkgdir}" install

  # license exception
  install -Dm644 ${_realname}-${pkgver}/COPYING.EXCEPTION \
    "${pkgdir}"/usr/share/licenses/autoconf${pkgver}/COPYING.EXCEPTION

  # Note: Remove these files once a newer autoconf is added, and add
  # a versioned conflict to the old version of this package to make
  # upgrades work.
  rm -rf "${pkgdir}"/usr/share/info
}


================================================
FILE: autoconf2.73/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

_realname=autoconf
pkgname=${_realname}2.73
pkgver=2.73
pkgrel=1
pkgdesc="A GNU tool for automatically configuring source code"
arch=('any')
url="https://www.gnu.org/software/autoconf"
msys2_references=(
  'archlinux: autoconf'
)
license=('spdx:GPL-2.0-or-later AND GPL-3.0-or-later WITH Autoconf-exception-3.0')
depends=('awk' 'm4' 'diffutils' 'bash' 'perl' 'sed')
makedepends=('make')
source=(https://ftp.gnu.org/pub/gnu/${_realname}/${_realname}-${pkgver}.tar.xz
        0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch
        0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch
        0003-autoconf-2.70-MSYS2-specifics-config.guess.patch
        0004-LLVM-Flang.patch
        0005-package.patch)
sha256sums=('9fd672b1c8425fac2fa67fa0477b990987268b90ff36d5f016dae57be0d6b52e'
            '01edbaa771818518dc64fe54740d60909feb581428eb3751e0c2b6851e104038'
            '3d37cb317d88843b07cadaf2981e1f6293bce2245fa0f0265fdaf08c18ffac61'
            '82cb932ea114ad79d63072350457cde64bd60ece835a605e8aea0e4b7806b03c'
            'd43d4bd0ca33820305d8eefb1940f23c8e474b94429281796c5fd55e0cd0d09d'
            '4fc790e3ac5ee3595e80023095f6f1b13a9115307b84bd23e13cbac7e49d5d39')

apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying $_patch"
    patch -Np1 -i "${srcdir}"/$_patch
  done
}

prepare() {
  cd "${srcdir}"/${_realname}-${pkgver}

  # MSYS2
  apply_patch_with_msg \
    0001-autoconf-2.70-MSYS2-specifics-AC_CYGWIN.patch \
    0002-autoconf-2.70-MSYS2-Autotest-Unify-EOLs-By-Default.patch \
    0003-autoconf-2.70-MSYS2-specifics-config.guess.patch \
    0004-LLVM-Flang.patch \
    0005-package.patch
}

build() {
  mkdir -p build-${MSYSTEM} && cd build-${MSYSTEM}

  ../${_realname}-${pkgver}/configure \
    --prefix=/usr \
    --program-suffix=-2.73

  make
}

check() {
  cd build-${MSYSTEM}
  # CAUTION: The tests run very very long, even on a server.
  make check TESTSUITEFLAGS='-j16'
}

package() {
  make -C build-${MSYSTEM} DESTDIR="${pkgdir}" install

  # license exception
  install -Dm644 ${_realname}-${pkgver}/COPYING.EXCEPTION \
    "${pkgdir}"/usr/share/licenses/autoconf${pkgver}/COPYING.EXCEPTION

  # Note: Remove these files once a newer autoconf is added, and add
  # a versioned conflict to the old version of this package to make
  # upgrades work.
  # rm -rf "${pkgdir}"/usr/share/info
}


================================================
FILE: autogen/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=autogen
pkgver=5.18.16
pkgrel=6
pkgdesc="A tool designed to simplify the creation and maintenance of programs that contain large amounts of repetitious text"
arch=('i686' 'x86_64')
url="https://autogen.sourceforge.io/"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/autogen.git'
license=('spdx:GPL-3.0-or-later')
makedepends=('gcc' 'gmp-devel' 'libxcrypt-devel' 'libffi-devel' 'libgc-devel' 'libguile-devel' 'libxml2-devel' 'make' 'autoconf' 'automake' 'libtool' 'gperf')
depends=('gcc-libs' 'gmp' 'libxcrypt' 'libffi' 'libgc' 'libguile' 'libxml2')
source=("https://ftp.gnu.org/gnu/${pkgname}/rel${pkgver}/${pkgname}-${pkgver}.tar.xz"{,.sig}
        autogen-guile-3.0.patch
        autogen-5.18.1-msys2.patch)
sha256sums=('f8a13466b48faa3ba99fe17a069e71c9ab006d9b1cfabe699f8c60a47d5bb49a'
            'SKIP'
            'f57152bb9b192ddd2ae31741b2b0bf43f8bea58211fcbf15fb3b7f4084e5aaa3'
            'ff3df8d191a6269a2f64b6ec19d24bb5d169d316104f97f14a094633aaa77386')
validpgpkeys=('3EEE51D1355B8EC40D9F3122495143D05D0712D1')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p1 -i ${srcdir}/autogen-guile-3.0.patch
  patch -p1 -i ${srcdir}/autogen-5.18.1-msys2.patch
  autoreconf -fiv
}

build() {
  LDFLAGS+=' -Wl,--export-all-symbols'
  CFLAGS+=" -Wno-implicit-fallthrough -Wno-format-overflow -Wno-format-truncation -Wno-char-subscripts"
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure \
    --build=${CHOST} \
    --host=${CHOST} \
    --prefix=/usr \
    --disable-dependency-tracking
  make all
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  #make -k check
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  if [ -d ${pkgdir}/usr/share/pkgconfig ]; then
    mv ${pkgdir}/usr/share/pkgconfig ${pkgdir}/usr/lib/
  fi
}


================================================
FILE: automake1.11/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.11
pkgver=1.11.6
pkgrel=6
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz
        automake-1.11-msys2.patch
        automake1.11-documentation.patch
        automake-1.11-makeinfo-fix.patch
        automake-1.11-perl-escape-curly-bracket.patch)
sha256sums=('1ffbc6cc41f0ea6c864fbe9485b981679dc5e350f6c4bc6c3512f5a4226936b5'
            '41cbfaa428a8e7a90836df4fcfc76f5eeb32d04a4cac446bdb8eb712d51a3f89'
            '0d003623915b7580b170008a3070e100645ff6d4f28887ad1af7058bfa214a39'
            '9161475f1ae3fe4905f6e537d233f04bd55d86e7d79ce4626f38d9516fdac284'
            'dc3566c450efe446799800b88185101f625ef4091d7f39bcb05325eaf4604f5c')

prepare() {
  cd ${srcdir}/automake-${pkgver}

  patch -p2 -i ${srcdir}/automake1.11-documentation.patch
  patch -p1 -i ${srcdir}/automake-1.11-makeinfo-fix.patch
  patch -p1 -i ${srcdir}/automake-1.11-msys2.patch
  patch -p1 -i ${srcdir}/automake-1.11-perl-escape-curly-bracket.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.11.info automake.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  # install the 1.11 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.12/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.12
pkgver=1.12.6
pkgrel=6
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz
        automake-1.14-msys2.patch
        automake1.12-documentation.patch
        automake-1.12-perl-escape-curly-bracket.patch)
sha256sums=('f834ab2145b1ee24bd85387950044f5cb418dd0af2b84c52e60c2bf29162dbfa'
            '76ac48cce5b6d48dfbd2659e3aeb10144acc932269c94fbed8d6335da773090b'
            '0f0df05d1e9ba59362e6a9484db117e922d0c531836eccf434c5569edb68bf38'
            'dc3566c450efe446799800b88185101f625ef4091d7f39bcb05325eaf4604f5c')

prepare() {
  cd ${srcdir}/automake-${pkgver}

  patch -p2 -i ${srcdir}/automake1.12-documentation.patch
  patch -p1 -i ${srcdir}/automake-1.14-msys2.patch
  patch -p1 -i ${srcdir}/automake-1.12-perl-escape-curly-bracket.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.12.info automake.texi)
  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake-history1.12.info automake-history.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am12

  # install the 1.12 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*
  rm -f ${pkgdir}/usr/share/info/automake-history.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.13/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.13
pkgver=1.13.4
pkgrel=7
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz
        automake-1.14-msys2.patch
        automake1.13-documentation.patch
        automake-1.13-perl-escape-curly-bracket.patch)
sha256sums=('89ce4933f59b8f0c20115c39cfe450a595cca74ede27b6881e88ec27720d1d66'
            '76ac48cce5b6d48dfbd2659e3aeb10144acc932269c94fbed8d6335da773090b'
            'ab0bba1beba0a9160d56bb46fd52449aa01ed9e1c3a5e75cc2d095d5513a8ecf'
            '6538290dc53c6f8da0dd67567ca2466c7155095619547e3988da4dc492e3bdd6')

prepare() {
  cd ${srcdir}/automake-${pkgver}

  patch -p2 -i ${srcdir}/automake1.13-documentation.patch
  patch -p1 -i ${srcdir}/automake-1.14-msys2.patch
  patch -p1 -i ${srcdir}/automake-1.13-perl-escape-curly-bracket.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.13.info automake.texi)
  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake-history1.13.info automake-history.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am13

  # install the 1.13 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*
  rm -f ${pkgdir}/usr/share/info/automake-history.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.14/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.14
pkgver=1.14.1
pkgrel=6
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz
        automake1.14-documentation.patch
        automake-1.14-msys2.patch
        automake-1.14-perl-escape-curly-bracket.patch)
sha256sums=('a9b4f04b8b69cac2e832a38a718943aa976dbdad0097211f8b3448afdacf0669'
            'd08bf56f22e948896a93fb33c81a2a1b3c469487d99b56da60fa915b61cafb09'
            '76ac48cce5b6d48dfbd2659e3aeb10144acc932269c94fbed8d6335da773090b'
            '34ec3ef555b78e8f19cd87d582102f07a705cd3b98919489274f2dabbd6aade6')
replace=('automake')

prepare() {
  cd ${srcdir}/automake-${pkgver}

  patch -p2 -i ${srcdir}/automake1.14-documentation.patch
  patch -p1 -i ${srcdir}/automake-1.14-msys2.patch
  patch -p1 -i ${srcdir}/automake-1.14-perl-escape-curly-bracket.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.14.info automake.texi)
  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake-history1.14.info automake-history.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am14

  # install the 1.14 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*
  rm -f ${pkgdir}/usr/share/info/automake-history.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.15/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.15
pkgver=1.15.1
pkgrel=4
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz
        automake1.15-documentation.patch
        automake-1.15.1-msys2.patch
        automake-1.15.1-perl-escape-curly-bracket.patch)
sha256sums=('af6ba39142220687c500f79b4aa2f181d9b24e4f8d8ec497cea4ba26c64bedaf'
            'e5ca855db96fab8106239cec2dcee48ea3f7d2ab5745b116f7d85dfd962b7553'
            '0c2560b6c58446f43552e3cd43f2f9d82f1bbe6ff993d358365a77a4b460ae37'
            '18073dbcf0939419906cdb9714171f5da0ad899af229304e50321d07a19e0d26')
validpgpkeys=('E1622F96D2BB4E58018EEF9860F906016E407573'   # Stefano Lattarini
              'F2A38D7EEB2B66405761070D0ADEE10094604D37')  # Mathieu Lirzin
replace=('automake')

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _fname in "$@"
  do
    msg2 "Applying ${_fname}"
    patch -Nbp1 -i "${srcdir}"/${_fname}
  done
}

del_file_exists() {
  for _fname in "$@"
  do
    if [ -f $_fname ] || [ -d $_fname ]; then
      rm -rf $_fname
    fi
  done
}
# =========================================== #


prepare() {
  cd ${srcdir}/automake-${pkgver}

  apply_patch_with_msg  automake1.15-documentation.patch \
    automake-1.15.1-msys2.patch \
    automake-1.15.1-perl-escape-curly-bracket.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.15.info automake.texi)
  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake-history1.15.info automake-history.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am15

  # install the 1.15 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*
  rm -f ${pkgdir}/usr/share/info/automake-history.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.16/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=automake1.16
pkgver=1.16.5
pkgrel=1
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/automake.git'
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('perl' 'bash')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('dejagnu')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz{,.sig}
        automake-1.16.1-documentation.patch
        automake-1.16.1-msys2.patch)
sha256sums=('f01d58cd6d9d77fbdca9eb4bbd5ead1988228fdb73d6f7a201f5f8d6b118b469'
            'SKIP'
            '18129ade01c1b1be3cb60e20349db0c08e7ea7fae7e72b937b1317c5f36dda41'
            'fe7bf1235399d2b1ff0e6a74eef96693449bf06e71a1a18c2a995fd41abbe6ce')
validpgpkeys=('E1622F96D2BB4E58018EEF9860F906016E407573'   # Stefano Lattarini
              'F2A38D7EEB2B66405761070D0ADEE10094604D37'   # Mathieu Lirzin
              '155D3FC500C834486D1EEA677FD9FCCB000BEEEE')  # Jim Meyering
replace=('automake')

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _fname in "$@"
  do
    msg2 "Applying ${_fname}"
    patch -Nbp1 -i "${srcdir}"/${_fname}
  done
}

del_file_exists() {
  for _fname in "$@"
  do
    if [ -f $_fname ] || [ -d $_fname ]; then
      rm -rf $_fname
    fi
  done
}
# =========================================== #


prepare() {
  cd ${srcdir}/automake-${pkgver}

  apply_patch_with_msg  automake-1.16.1-documentation.patch \
    automake-1.16.1-msys2.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make

  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake1.16.info automake.texi)
  (cd doc && makeinfo -I ${srcdir}/automake-${pkgver}/doc -o automake-history1.16.info automake-history.texi)
}

check() {
  cd ${srcdir}/automake-${pkgver}

  # expect 2 failures due to perl-5.18 incompatibility
  make -k check || true
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am16

  # install the 1.16 versioned info files
  for f in `find ${pkgdir}/usr/share/info -name "*.info*"` ; do
    rm -f ${f}
  done
  for f in `find ${srcdir}/automake-${pkgver} -name "*.info*"` ; do
    bf=`basename $f`
    cp $f ${pkgdir}/usr/share/info/
  done

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1
  rm -f ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake.info*
  rm -f ${pkgdir}/usr/share/info/automake-history.info*

  rm -rf ${pkgdir}/usr/share/doc
}


================================================
FILE: automake1.17/PKGBUILD
================================================
# Maintainer: Yang Kun <ikspress@outlook.com>

_basever=1.17
pkgname=automake${_basever}
pkgver=1.17
pkgrel=2
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('bash' 'perl')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('bison' 'cscope' 'dejagnu' 'emacs' 'expect' 'flex' 'gcc' 'gettext'
              'help2man' 'libtool' 'lzip' 'sharutils' 'texinfo-tex' 'zip')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz{,.sig}
        automake-1.17-documentation.patch
        automake-1.17-msys2.patch)
sha256sums=('8920c1fc411e13b90bf704ef9db6f29d540e76d232cb3b2c9f4dc4cc599bd990'
            'SKIP'
            '64874ff1f61a832b784a0cbd75f48d7e6b1fe5f7e9f5acb75134ad7c57c5d824'
            'a6b3a7099fb23ddc3d1402b16df32cf8f21bb63ca6b9314ff7caff5869b6ed50')
validpgpkeys=('E1622F96D2BB4E58018EEF9860F906016E407573'   # Stefano Lattarini
              'F2A38D7EEB2B66405761070D0ADEE10094604D37'   # Mathieu Lirzin
              '155D3FC500C834486D1EEA677FD9FCCB000BEEEE')  # Jim Meyering

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _fname in "$@"; do
    msg2 "Applying ${_fname}"
    patch -Nbp1 -i "${srcdir}"/${_fname}
  done
}

del_file_exists() {
  for _fname in "$@"; do
    if [ -f $_fname ] || [ -d $_fname ]; then
      rm -rf $_fname
    fi
  done
}
# =========================================== #

prepare() {
  cd ${srcdir}/automake-${pkgver}

  apply_patch_with_msg \
    automake-1.17-documentation.patch \
    automake-1.17-msys2.patch
}

build() {
  cd ${srcdir}/automake-${pkgver}
  ./configure --prefix=/usr
  make
  # build versioned info files
  cd doc
  makeinfo automake.texi automake-history.texi
}

check() {
  cd ${srcdir}/automake-${pkgver}

  make -k check || warning "Tests failed"
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv ${pkgdir}/usr/share/aclocal/README ${pkgdir}/usr/share/aclocal/README.am17

  # remove the unversioned info files
  rm -f ${pkgdir}/usr/share/info/automake{,-history}.info*

  # remove the unversioned executables
  rm -f ${pkgdir}/usr/bin/automake ${pkgdir}/usr/bin/aclocal

  # remove the unversioned man pages
  rm -f ${pkgdir}/usr/share/man/man1/automake.1 \
    ${pkgdir}/usr/share/man/man1/aclocal.1

  # remove amhello
  rm -rf ${pkgdir}/usr/share/doc

  # install the versioned info files
  install -Dm644 ${srcdir}/automake-${pkgver}/doc/*${_basever}.info* -t ${pkgdir}/usr/share/info/
}


================================================
FILE: automake1.18/PKGBUILD
================================================
# Maintainer: Yang Kun <ikspress@outlook.com>

_basever=1.18
pkgname=automake${_basever}
pkgver=${_basever}.1
pkgrel=2
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url="https://cgit.git.savannah.gnu.org/cgit/automake.git"
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('bash' 'perl')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('bison' 'cscope' 'dejagnu' 'emacs' 'expect' 'flex' 'gcc' 'gettext'
              'help2man' 'libtool' 'lzip' 'sharutils' 'texinfo-tex' 'zip')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz{,.sig}
        automake-1.18-documentation.patch
        automake-1.17-msys2.patch)
sha256sums=('168aa363278351b89af56684448f525a5bce5079d0b6842bd910fdd3f1646887'
            'SKIP'
            '3b066deda7ecb755a4cab8263f7fe7d5f44cf7790b45b5dcb48e5232f800856c'
            'a6b3a7099fb23ddc3d1402b16df32cf8f21bb63ca6b9314ff7caff5869b6ed50')
validpgpkeys=('17D3311B14BC0F248267BF020716748A30D155AD') # Karl Berry

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _fname in "$@"; do
    msg2 "Applying ${_fname}"
    patch -Nbp1 -i "${srcdir}/${_fname}"
  done
}

del_file_exists() {
  for _fname in "$@"; do
    if [ -f $_fname ] || [ -d $_fname ]; then
      rm -rf $_fname
    fi
  done
}
# =========================================== #

prepare() {
  cd "${srcdir}/automake-${pkgver}"

  apply_patch_with_msg \
    automake-1.18-documentation.patch \
    automake-1.17-msys2.patch
}

build() {
  cd "${srcdir}/automake-${pkgver}"
  ./configure --prefix=/usr
  make
  # build versioned info files
  cd doc
  makeinfo automake.texi automake-history.texi
}

check() {
  cd "${srcdir}/automake-${pkgver}"

  make -k check || warning "Tests failed"
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv "${pkgdir}/usr/share/aclocal/README" "${pkgdir}/usr/share/aclocal/README.am${_basever#*.}"

  # remove the unversioned info files
  rm -f "${pkgdir}"/usr/share/info/automake{,-history}.info*

  # remove the unversioned executables
  rm -f "${pkgdir}/usr/bin/automake" "${pkgdir}/usr/bin/aclocal"

  # remove the unversioned man pages
  rm -f "${pkgdir}/usr/share/man/man1/automake.1" \
    "${pkgdir}/usr/share/man/man1/aclocal.1"

  # remove amhello
  rm -rf "${pkgdir}/usr/share/doc"

  # install the versioned info files
  install -Dm644 "${srcdir}"/automake-${pkgver}/doc/*${_basever}.info* -t "${pkgdir}/usr/share/info/"
}


================================================
FILE: automake1.19/PKGBUILD
================================================
# Maintainer: Yang Kun <ikspress@outlook.com>

_basever=1.19
pkgname=automake${_basever}
pkgver=${_basever}
pkgrel=1
pkgdesc="A GNU tool for automatically creating Makefiles"
arch=('any')
license=('spdx:GPL-2.0-or-later')
url="https://www.gnu.org/software/automake"
msys2_repository_url="https://cgit.git.savannah.gnu.org/cgit/automake.git"
msys2_references=(
  "cpe: cpe:/a:gnu:automake"
)
depends=('bash' 'perl')
makedepends=('autoconf' 'make' 'texinfo')
checkdepends=('bison' 'cscope' 'dejagnu' 'emacs' 'expect' 'flex' 'gcc' 'gettext'
              'help2man' 'libtool' 'lzip' 'sharutils' 'texinfo-tex' 'zip')
source=(https://ftp.gnu.org/gnu/automake/automake-${pkgver}.tar.xz{,.sig}
        automake-1.19-documentation.patch
        automake-1.17-msys2.patch)
sha256sums=('e3e2c2e3abf37898138db5b6c1d1dc35c9160c5978be7947d2c741705251d445'
            'SKIP'
            '9f4eb3b91a0708227212d4edb8f51d494cc8287bf562fe0391c26ff83fe73e4a'
            'a6b3a7099fb23ddc3d1402b16df32cf8f21bb63ca6b9314ff7caff5869b6ed50')
validpgpkeys=('6C222EA6B2BD216AA406516AC868F0B6DE38409D') # Kamila Szewczyk

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _fname in "$@"; do
    msg2 "Applying ${_fname}"
    patch -Nbp1 -i "${srcdir}/${_fname}"
  done
}

prepare() {
  cd "${srcdir}/automake-${pkgver}"

  apply_patch_with_msg \
    automake-1.19-documentation.patch \
    automake-1.17-msys2.patch
}

build() {
  cd "${srcdir}/automake-${pkgver}"
  ./configure --prefix=/usr
  make
  # build versioned info files
  cd doc
  makeinfo automake.texi automake-history.texi
}

check() {
  cd "${srcdir}/automake-${pkgver}"

  make -k check || warning "Tests failed"
}

package() {
  cd ${srcdir}/automake-${pkgver}
  make DESTDIR=${pkgdir} install

  mv "${pkgdir}/usr/share/aclocal/README" "${pkgdir}/usr/share/aclocal/README.am${_basever#*.}"

  # remove the unversioned info files
  rm -f "${pkgdir}"/usr/share/info/automake{,-history}.info*

  # remove the unversioned executables
  rm -f "${pkgdir}/usr/bin/automake" "${pkgdir}/usr/bin/aclocal"

  # remove the unversioned man pages
  rm -f "${pkgdir}/usr/share/man/man1/automake.1" \
    "${pkgdir}/usr/share/man/man1/aclocal.1"

  # remove amhello
  rm -rf "${pkgdir}/usr/share/doc"

  # install the versioned info files
  install -Dm644 "${srcdir}"/automake-${pkgver}/doc/*${_basever}.info* -t "${pkgdir}/usr/share/info/"
}


================================================
FILE: autotools/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=autotools
pkgver=2026.08.04
pkgrel=1
pkgdesc="A meta package for the GNU autotools build system"
arch=('any')
license=('spdx:BSD-3-Clause')
url="https://www.gnu.org/software/automake/manual/html_node/Autotools-Introduction.html"
depends=(
  'autoconf'
  'automake'
  'gettext'
  'libtool'
  'make'
  'pkgconf'
)
msys2_references=(
  'internal'
)
source=('README.md')
sha256sums=('de6ec37dee4875be8e2759dea340f6c1bbdc04457333dc666dcb81b00962a145')


================================================
FILE: autotools-wrappers/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgbase=autotools-wrappers
pkgname=('automake-wrapper' 'autoconf-wrapper' )
pkgver=20260320
pkgrel=3
arch=('any')
makedepends=('git' 'task')
url="https://gitweb.gentoo.org/proj/autotools-wrappers.git/"
msys2_repository_url='https://github.com/gentoo/autotools-wrappers'
license=('spdx:GPL-2.0-only')
source=("git+https://github.com/gentoo/autotools-wrappers#tag=at-${pkgver}")
sha256sums=('ed7e3d25d25cba5e45f8668d1f1938355e31e20ecb66d82e7b556ef402d7da17')

prepare() {
  cd "${srcdir}/${pkgbase}"
}

package_automake-wrapper() {
  pkgdesc="Wrapper scripts for automake commands"
  depends=(
    'bash'
    'gawk'
    'automake1.19'
    'automake1.18'
    'automake1.17'
    'automake1.16'
    'automake1.15'
  )
  optdepends=(
    'automake1.14'
    'automake1.13'
    'automake1.12'
    'automake1.11'
  )
  provides=("automake")
  conflicts=("automake")

  mkdir -p ${pkgdir}/usr/bin
  for prog in automake aclocal
  do
    cp "${srcdir}/${pkgbase}/am-wrapper.sh" "${pkgdir}/usr/bin/${prog}"
  done
}

package_autoconf-wrapper() {
  pkgdesc="Wrapper scripts for autoconf commands"
  depends=(
    'bash'
    'sed'
    'autoconf2.73'
    'autoconf2.72'
    'autoconf2.71'
    'autoconf2.69'
  )
  optdepends=(
    'autoconf2.13'
  )
  provides=("autoconf")
  conflicts=("autoconf")

  mkdir -p ${pkgdir}/usr/bin
  for prog in autoconf autoheader autom4te autoreconf autoscan autoupdate ifnames
  do
    cp "${srcdir}/${pkgbase}/ac-wrapper.sh" "${pkgdir}/usr/bin/${prog}"
  done
}


================================================
FILE: axel/PKGBUILD
================================================
# Maintainer: Yong-hyu, Ban <yhban@quendi.moe>
# Maintainer: Eon Jeong <administrator@korea.ac.kr>

pkgname=axel
pkgver=2.17.14
pkgrel=2
pkgdesc="Light command line download accelerator for Linux and Unix"
arch=('i686' 'x86_64')
license=('spdx:GPL-2.0-or-later')
url="https://github.com/axel-download-accelerator/axel"
msys2_repository_url='https://github.com/axel-download-accelerator/axel'
msys2_references=(
  "cpe: cpe:/a:axel:axel"
  "cpe: cpe:/a:axel_project:axel"
)
groups=()
depends=('openssl' 'gettext')
makedepends=('openssl-devel' 'gettext-devel' 'autotools' 'gcc')
options=()
source=("https://github.com/axel-download-accelerator/axel/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('73f3aeafcb00b8101b212fcf47969a4962e7a1b50843306178b527a9942d8785')

prepare() {
  cat /dev/null
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --mandir=/usr/share/man \
    --disable-nls

  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
}


================================================
FILE: base/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=base
pkgver=2022.06
pkgrel=1
pkgdesc='Minimal package set to define a basic MSYS2 installation'
url='https://www.msys2.org'
arch=('any')
license=('spdx:BSD-3-Clause')
depends=(
  'bash'
  'bash-completion'
  'bsdtar'
  'bzip2'
  'coreutils'
  'curl'
  'dash'
  'file'
  'filesystem'
  'findutils'
  'gawk'
  'getent'
  'grep'
  'gzip'
  'inetutils'
  'info'
  'less'
  'mintty'
  'msys2-keyring'
  'msys2-launcher'
  'msys2-runtime'
  'nano'
  'pacman'
  'pacman-contrib'
  'pacman-mirrors'
  'rebase'
  'sed'
  'tar'
  'time'
  'tzcode'
  'util-linux'
  'wget'
  'which'
  'zstd'
)

# these should be empty, but saneman in CI complains, so we keep them here
# until that is fixed:
source=('README.md')
sha256sums=('46702e24eebde5cf8fbb3d412a524736ef10d16e9c85efa0fc8d256cccf00484')
msys2_references=(
  'internal'
)


================================================
FILE: base-devel/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=base-devel
pkgver=2026.08
pkgrel=3
pkgdesc='Minimal package set for building packages with makepkg'
url='https://www.msys2.org'
arch=('any')
license=('spdx:BSD-3-Clause')
depends=(
  'base'
  'binutils'
  'bison'
  'diffutils'
  'dos2unix'
  'flex'
  'make'
  'patch'
)

# these should be empty, but saneman in CI complains, so we keep them here
# until that is fixed:
source=('README.md')
sha256sums=('3189b37877feaf3ab2bca4cb14aefe435c463aa0a3a74f7ee06327440b784a34')
msys2_references=(
  'internal'
)


================================================
FILE: bash/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

pkgbase=bash
pkgname=('bash' 'bash-devel')
_basever=5.3
_patchlevel=20
pkgver=${_basever}.${_patchlevel}
pkgrel=3
pkgdesc="The GNU Bourne Again shell"
arch=('i686' 'x86_64')
license=('spdx:GPL-3.0-or-later')
url="https://www.gnu.org/software/bash/bash.html"
msys2_repository_url="https://cgit.git.savannah.gnu.org/cgit/bash.git"
msys2_references=(
  "cpe: cpe:/a:gnu:bash"
)
validpgpkeys=('7C0135FB088AAF6C66C650B9BB5869F064EA74AB') # Chet Ramey
makedepends=(
  'autotools'
  'gcc'
  'gettext-devel'
  'libreadline-devel>=7.0'
  'ncurses-devel'
  'texinfo'
)
source=(https://ftp.gnu.org/gnu/bash/bash-${_basever}.tar.gz{,.sig}
        0001-bash-4.4-cygwin.patch
        0002-bash-4.3-msysize.patch
        0005-bash-4.3-msys2-fix-lineendings.patch
        0006-bash-4.3-add-pwd-W-option.patch
        0007-fix-static-build.patch)
if [ $_patchlevel -gt 0 ]; then
  for (( p=1; p<=${_patchlevel}; p++ )); do
    source+=(https://ftp.gnu.org/gnu/bash/bash-${_basever}-patches/bash${_basever//./}-$(printf "%03d" $p){,.sig})
  done
fi
validpgpkeys=('7C0135FB088AAF6C66C650B9BB5869F064EA74AB') # Chet Ramey

prepare() {
  cd "${pkgname}-${_basever}"

  for (( p=1; p<=${_patchlevel}; p++ )); do
    msg "applying patch bash${_basever//./}-$(printf "%03d" $p)"
    patch -p0 -i $srcdir/bash${_basever//./}-$(printf "%03d" $p)
  done

  patch -p1 -i ${srcdir}/0001-bash-4.4-cygwin.patch
  patch -p1 -i ${srcdir}/0002-bash-4.3-msysize.patch
  patch -p1 -i ${srcdir}/0005-bash-4.3-msys2-fix-lineendings.patch
  patch -p1 -i ${srcdir}/0006-bash-4.3-add-pwd-W-option.patch
  patch -p1 -i ${srcdir}/0007-fix-static-build.patch

  autoconf
}

build() {
  cd "${pkgname}-${_basever}"

  export MSYSTEM=CYGWIN

  # https://github.com/msys2/MSYS2-packages/issues/6797
  export CFLAGS+=" -DHEREDOC_PIPESIZE=65536"

  ./configure --build=${CHOST} \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --enable-static-link \
    --enable-readline \
    --without-libintl-prefix \
    --without-libiconv-prefix \
    --with-installed-readline \
    --without-bash-malloc \
    --with-curses \
    bash_cv_dev_stdin=present \
    bash_cv_dev_fd=standard \
    bash_cv_termcap_lib=libncurses

  # Prepopulate the release level.
  expr ${pkgrel} > .build || :

  make CPPFLAGS=-DWORDEXP_OPTION \
       HISTORY_LDFLAGS= \
       READLINE_LDFLAGS= \
       LOCAL_LDFLAGS='-Wl,--export-all,--out-implib,lib$(@:.exe=.dll.a)'
}

check() {
  cd "${pkgname}-${_basever}"
  LANG=C make check
}

package_bash() {
  provides=('sh')

  cd "${pkgname}-${_basever}"
  make DESTDIR=${pkgdir} install

  cp -fp ${pkgdir}/usr/bin/{ba,}sh.exe

  cd ${pkgdir}/usr/share/man/man1 > /dev/null
  echo '.so man1/bash.1' > sh.1
  echo '.so man1/bash_builtins.1.gz' > alias.1

  gzip alias.1
  for f in bg bind break builtin caller case cd command compgen complete \
    continue declare dirs disown do done elif else enable esac eval exec \
    exit export fc fg fi for function getopts hash help history if in jobs \
    let local logout popd pushd read readonly return select set shift shopt \
    source suspend then time times trap type typeset ulimit umask unalias \
    unset until wait while [ ; do
    cp -fp alias.1.gz $f.1.gz
  done
}

package_bash-devel() {
 pkgdesc="Bash headers and libraries"
 groups=('development')
 options=('staticlibs')
 backup=()

  mkdir -p ${pkgdir}/usr/{include,lib,bin}
  cd "bash-${_basever}"
  cp -f libbash.dll.a ${pkgdir}/usr/lib/

  mkdir -p ${pkgdir}/usr/include/bash
  for f in [^y]*.h builtins/*.h include/*.h lib/{glob,tilde}/*.h
  do
    install ${f} ${pkgdir}/usr/include/bash
  done
}

sha256sums=('0d5cd86965f869a26cf64f4b71be7b96f90a3ba8b3d74e27e8e9d9d5550f31ba'
            'SKIP'
            'd46e6b06167af61cc8639236948daf6fd57db418893330bef728efd4acc40430'
            '16584e119db9418030912171f89aecae319858ecd357d3e56c95eba83667dae7'
            '696e38540a9abfbf217d6dd17b2c6ffe274b9383815c5db76ce118fdddabd777'
            '500c75c64593a70276585345a55c807226c0cc220d08b7cccece2ab005b3bcea'
            'cbae1aa81d56eba4e916bdaf2b2983731d6e2537dd8d606a3b378e49bcb81e79'
            '1f608434364af86b9b45c8b0ea3fb3b165fb830d27697e6cdfc7ac17dee3287f'
            'SKIP'
            'e385548a00130765ec7938a56fbdca52447ab41fabc95a25f19ade527e282001'
            'SKIP'
            'f245d9c7dc3f5a20d84b53d249334747940936f09dc97e1dcb89fc3ab37d60ed'
            'SKIP'
            '9591d245045529f32f0812f94180b9d9ce9023f5a765c039b852e5dfc99747d0'
            'SKIP'
            'cca1ef52dbbf433bc98e33269b64b2c814028efe2538be1e2c9a377da90bc99d'
            'SKIP'
            '29119addefed8eff91ae37fd51822c31780ee30d4a28376e96002706c995ff10'
            'SKIP'
            'c0976bbfffa1453c7cfdd62058f206a318568ff2d690f5d4fa048793fa3eb299'
            'SKIP'
            '097cd723cbfb8907674ac32214063a3fd85282657ec5b4e544d2c0f719653fb4'
            'SKIP'
            'eee30fe78a4b0cb2fe20e010e00308899cfc613e0774ebb3c8557a1552f24f8c'
            'SKIP'
            'cf76f1cce2ea300c18bff9f002d21f280cc931acd17c28518110b93fe6e72569'
            'SKIP'
            '0298df8f5ea2a31d3be43ed7d269c5b3c7c342dd5b570bea7f64d66dcbbe7531'
            'SKIP'
            'd71379b39bebaedaf123414414e77fb458a0a43b9ad3116594c6df7ca6754573'
            'SKIP'
            '042f9cda967e24bf4211944697441e93d06ff42b4b998629a98a1b249279f200'
            'SKIP'
            'bd4360b401d38507e358783dcad8536a99c6789f0d3a5bd0cfb8c4a34144696c'
            'SKIP'
            '55b79ceee2fc27f6767eed697e939a7eb2fe2a28c01556bd75f18d581014f46e'
            'SKIP'
            '9ea29b266b7d24cb34d0ff3f1c4631e4d527bfe2d1ef15d17cdb924bf31ef767'
            'SKIP'
            '443b927b45c1558ca72052410f8b8f6e5152b617ed707061a2781d4375b0d1c3'
            'SKIP'
            'ae715d76c50341d7d7095e9a8d2eeed1ca9546152c2ac7289206f90cf30ac697'
            'SKIP'
            'a25c581e4d0057dea3833918438a930e2e86ee4c6dc17fe15267b7f04cbc4e3d'
            'SKIP'
            'df217ed3a9122aa2286d9b67bbe348661b6a9db262b580c29150dae55d532896'
            'SKIP')


================================================
FILE: bash-completion/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=bash-completion
pkgver=2.18.0
pkgrel=1
pkgdesc="Programmable completion for the bash shell"
arch=('any')
url="https://github.com/scop/bash-completion"
msys2_repository_url='https://github.com/scop/bash-completion'
license=('spdx:GPL-2.0-only')
depends=('bash')
makedepends=('autotools')
options=('!emptydirs' '!makeflags')
source=(https://github.com/scop/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.xz)
sha256sums=('88bcf85124f77f74f2f2f8bcd16ac4382d807a827ede742a64940c7116aea33f')
prepare() {
  cd ${pkgname}-${pkgver}

  autoreconf --install
}

build() {
  cd ${pkgname}-${pkgver}
  ./configure --prefix=/usr --sysconfdir=/etc
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}


================================================
FILE: bash-preexec/PKGBUILD
================================================
# Maintainer: Maksim Bondarenkov <maksapple2306@gmail.com>

pkgname=bash-preexec
pkgver=0.7.0
pkgrel=1
pkgdesc="preexec and precmd functions for Bash just like Zsh"
arch=('any')
url="https://github.com/rcaloras/bash-preexec"
license=('spdx:MIT')
source=("${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz")
install=${pkgname}.install
sha256sums=('f3d5698bde8533e9622b2ee2dcb0dd12e772d85018f4770a8899887ef6cd36a0')

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 "${pkgname}.sh" -t "${pkgdir}/usr/share/${pkgname}"
  install -Dm644 LICENSE.md -t "${pkgdir}/usr/share/licenses/${pkgname}"
}


================================================
FILE: bc/PKGBUILD
================================================
# Maintainer: Sundaram Ramaswamy <legends2k@yahoo.com>

pkgname=bc
pkgver=1.08.2
pkgrel=1
pkgdesc="An arbitrary precision calculator language"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/bc"
msys2_references=(
  "anitya: 170"
  "cpe: cpe:2.3:a:gnu:bc"
)
license=('spdx:GPL-3.0-or-later')
depends=('libreadline' 'ncurses')
makedepends=('ed' 'gcc' 'libreadline-devel' 'ncurses-devel' 'autotools')
source=(https://ftp.gnu.org/gnu/${pkgname}/${pkgname}-${pkgver}.tar.gz)
sha256sums=('ae470fec429775653e042015edc928d07c8c3b2fc59765172a330d3d87785f86')

prepare () {
  cd "${srcdir}"/${pkgname}-${pkgver}
  # patch -p1 -i "${srcdir}"/0001-Fix-readline-prototype.patch
  return 0
}

build () {
  [[ -d ${srcdir}/build-${CHOST} ]] && rm -rf ${srcdir}/build-${CHOST}
  mkdir ${srcdir}/build-${CHOST} && cd ${srcdir}/build-${CHOST}
  
  ../${pkgname}-${pkgver}/configure \
    --prefix=/usr \
    --build=${CHOST} \
    --host=${CHOST} \
    --with-readline

  make
}

check () {
  cd build-${CHOST}
  echo "quit" | ./bc/bc -l "${srcdir}"/${pkgname}-${pkgver}/Test/checklib.b # 10 failures
}

package () {
  cd build-${CHOST}
  make prefix="${pkgdir}/usr" install
}


================================================
FILE: binutils/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=binutils
pkgver=2.47
pkgrel=1
pkgdesc="A set of programs to assemble and manipulate binary and object files"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/binutils/"
msys2_repository_url='https://sourceware.org/git/binutils-gdb.git'
msys2_references=(
  "cpe: cpe:/a:gnu:binutils"
)
license=('spdx:GPL-3.0-or-later')
depends=('libiconv' 'libintl' 'zlib' 'zstd')
checkdepends=('dejagnu' 'bc')
makedepends=('libiconv-devel' 'gettext-devel' 'zlib-devel' 'libzstd-devel' 'autotools' 'gcc')
options=('staticlibs' '!distcc' '!ccache')
source=(https://ftp.gnu.org/gnu/binutils/binutils-${pkgver}.tar.xz{,.sig}
        0050-bfd-Increase-_bfd_coff_max_nscns-to-65279.patch
        0100-binutils-2.37-msys2.patch)
sha256sums=('154ab23b60070e8f27013c22977f1129425d67d1e8acd6e13010e617811e4cff'
            'SKIP'
            '4e8ac055df61b1b5d6ae29dc87e1154737c2e87c7b244b44866702cabf1a5d18'
            '4a457d6ec33c5040a4d6a897c32e0a1743aa5052f24a989c86609de508d53bdf')
validpgpkeys=('EAF1C276A747E9ED86210CBAC3126D3B4AE55E93'
              '3A24BC1E8FB409FA9F14371813FCEF89DD9E3C4F'
              '5EF3A41171BB77E6110ED2D01F3D03348DB1A3E2')

prepare() {
  cd "${srcdir}"/binutils-${pkgver}
  patch -p1 -i "${srcdir}"/0050-bfd-Increase-_bfd_coff_max_nscns-to-65279.patch
  patch -p1 -i "${srcdir}"/0100-binutils-2.37-msys2.patch

  # hack! - libiberty configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  mkdir "${srcdir}"/binutils-${CARCH}
}

build() {
  export MSYSTEM=CYGWIN

  cd "${srcdir}"/binutils-${CARCH}
  ../binutils-${pkgver}/configure \
    --prefix=/usr \
    --{build,host,target}=${CHOST} \
    --disable-werror \
    --disable-sim \
    --enable-64-bit-bfd \
    --enable-install-libiberty \
    --without-libiconv-prefix \
    --without-libintl-prefix \
    --with-system-zlib

  make
}

check() {
  # cd "${srcdir}"/binutils-${CARCH}

  # unset LDFLAGS as testsuite makes assumptions about which ones are active
  # do not abort on errors - manually check log files
  # make LDFLAGS="" -k check || true
  return 0
}

package() {
  cd "${srcdir}"/binutils-${CARCH}
  make DESTDIR=${pkgdir} install
  cp libiberty/libiberty.a ${pkgdir}/usr/lib
}


================================================
FILE: bison/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=bison
pkgver=3.8.2
pkgrel=5
pkgdesc="The GNU general-purpose parser generator"
arch=('i686' 'x86_64')
license=('spdx:GPL-3.0-or-later')
url="https://www.gnu.org/software/bison/bison.html"
msys2_repository_url='https://git.savannah.gnu.org/cgit/bison.git'
msys2_references=(
  "cpe: cpe:/a:gnu:bison"
)
depends=('m4' 'sh' 'libiconv' 'libintl')
options=('staticlibs')
makedepends=('flex' 'autotools' 'gcc' 'gettext-devel' 'libiconv-devel')
source=(https://ftp.gnu.org/gnu/bison/${pkgname}-${pkgver}.tar.xz{,.sig})
sha256sums=('9bba0214ccf7f1079c5d59210045227bcf619519840ebfa80cd3849cff5a5bf2'
            'SKIP')
validpgpkeys=('7DF84374B1EE1F9764BBE25D0DDCAA3278D5264E')  # Akim Demaille <akim.demaille@gmail.com>

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}

  autoreconf -vfi
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  ./configure -C \
    --build=${CHOST} \
    --prefix=/usr \
    gl_cv_have_weak=no
  make
}

check() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make check
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install
}


================================================
FILE: breezy/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=breezy
pkgver=3.3.25
pkgrel=1
pkgdesc='A decentralized revision control system with support for Bazaar and Git file formats'
arch=('i686' 'x86_64')
url='https://www.breezy-vcs.org/'
msys2_repository_url="https://github.com/breezy-team/breezy"
msys2_references=(
  'anitya: 235155'
  'archlinux: breezy'
  'gentoo: dev-vcs/breezy'
  'purl: pkg:pypi/breezy'
)
license=('spdx:GPL-2.0-or-later')
groups=('VCS')
depends=(
  'python-configobj'
  'python-dulwich'
  'python-fastbencode'
  'python-fastimport'
  'python-merge3'
  'python-patiencediff'
)
makedepends=(
  'cython'
  'gcc'
  'python-build'
  'python-devel'
  'python-installer'
  'python-setuptools-gettext'
  'python-setuptools-rust'
  'python-setuptools'
)
provides=('bzr')
conflicts=('bzr')
replaces=('bzr')
source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/breezy-team/breezy/archive/brz-${pkgver}.tar.gz"
  '0002-add-msys2-certs-location.patch'
)
sha256sums=('63117bcc7a3934f31889de359e4817bd16808559ac9480275764c9caa219e7aa'
            '9daea641477f7115345307363713a5f4612282e82cf604500362898bad6e5f7a')

prepare() {
  cd "${pkgname}-brz-${pkgver}"

  patch -Np1 -i "${srcdir}/0002-add-msys2-certs-location.patch"
}

build() {
  cd "${pkgname}-brz-${pkgver}"

  local link_arg=$(python -c "import sysconfig; print(sysconfig.get_config_var('LIBPYTHON'))")
  export RUSTFLAGS="-C link-arg=$link_arg"

  python -m build --wheel --no-isolation
}

package() {
  cd "${pkgname}-brz-${pkgver}"

  python -m installer --destdir="$pkgdir" dist/*.whl
  cp "${pkgdir}"/usr/bin/brz "${pkgdir}"/usr/bin/bzr
}


================================================
FILE: brotli/PKGBUILD
================================================
# Maintainer: Oleg Titov <oleg.titov@gmail.com>

pkgbase=brotli
pkgname=('brotli' 'brotli-devel' 'brotli-testdata')
pkgver=1.2.1
pkgrel=1
pkgdesc='Brotli compression library'
arch=('i686' 'x86_64')
url='https://github.com/google/brotli'
msys2_repository_url='https://github.com/google/brotli'
msys2_references=(
  'archlinux: brotli'
  'cpe: cpe:/a:google:brotli'
)
license=('spdx:MIT')
depends=(
  'gcc-libs'
)
makedepends=(
  'cmake'
  'gcc'
  'ninja'
)
source=("${pkgbase}-${pkgver}.tar.gz::https://github.com/google/$pkgbase/archive/v${pkgver}.tar.gz")
sha256sums=('98d35d11a78dc453aebb7d10c3748f3f73ff78c8267c0dc697b8631f67bf7e8f')

build() {
  cd brotli-${pkgver}

  cmake -GNinja -B "build-static" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=OFF
  cmake --build "build-static"

  cmake -GNinja -B "build-shared" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=ON
  cmake --build "build-shared"
}

check() {
  cd brotli-${pkgver}/build-shared

  make test
}

package_brotli() {
  cd brotli-${pkgver}

  cd build-static
  DESTDIR="${pkgdir}" cmake --install .
  rm -rf "${pkgdir}"/usr/{include,lib} "${pkgdir}/usr/share/man/man3"
  cd -
  cd build-shared
  DESTDIR="${pkgdir}" cmake --install .
  rm -rf "${pkgdir}"/usr/{include,lib} "${pkgdir}/usr/share/man/man3"

  install -D -m644 "${srcdir}"/brotli-${pkgver}/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_brotli-devel() {
  depends=('brotli')

  cd brotli-${pkgver}

  cd build-static
  DESTDIR="${pkgdir}" cmake --install .
  rm -rf "${pkgdir}/usr/bin" "${pkgdir}/usr/share/man/man1"
  cd -
  cd build-shared
  DESTDIR="${pkgdir}" cmake --install .
  rm -rf "${pkgdir}/usr/bin" "${pkgdir}/usr/share/man/man1"
}

package_brotli-testdata() {
  depends=()

  cd brotli-${pkgver}
  install -dm755 "${pkgdir}"/usr/share/brotli
  cp -a tests/testdata "${pkgdir}"/usr/share/brotli/
  install -D -m644 "${srcdir}"/brotli-${pkgver}/LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}


================================================
FILE: btyacc/PKGBUILD
================================================

_realname=byacc
pkgname=btyacc
pkgver=20230521
pkgrel=1
pkgdesc="btyacc - an LALR(1) parser generator with support for backtracking"
arch=('i686' 'x86_64')
url="https://invisible-island.net/byacc"
license=('spdx:LicenseRef-btyacc-Public-Domain')
makedepends=('autotools' 'gcc')
source=("${_realname}-${pkgver}.tar.gz::https://github.com/ThomasDickey/byacc-snapshots/archive/t${pkgver}.tar.gz")
sha256sums=('bbdc8cb6efd4b1f080e0a290adfdc85428a998f368f5954d6cd8fdfbe0254356')


prepare() {
  autoreconf -vfi ${_realname}-snapshots-t${pkgver}
}

build() {
  mkdir -p build-${MSYSTEM_CHOST}
  pushd build-${MSYSTEM_CHOST}
  ../${_realname}-snapshots-t${pkgver}/configure -C \
    --enable-btyacc \
    --program-prefix=bt \
    --with-max-table-size=18000 \
    --program-transform-name='s,\^,bt,'
  make
  popd
}

check() {
  make check -C build-${MSYSTEM_CHOST}
}

package() {
  make install DESTDIR="${pkgdir}" -C build-${MSYSTEM_CHOST}
  install -Dv -t "${pkgdir}/usr/share/licenses/${pkgname}" \
    "${_realname}-snapshots-t${pkgver}/package/debian/copyright"
}


================================================
FILE: busybox/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

pkgname=busybox
pkgver=1.36.1
pkgrel=1
pkgdesc="BusyBox: The Swiss Army Knife of Embedded Linux"
arch=('i686' 'x86_64')
url="https://busybox.net/"
msys2_repository_url='https://git.busybox.net/busybox'
msys2_references=(
  "cpe: cpe:/a:busybox:busybox"
  "cpe: cpe:/a:rob_landley:busybox"
)
license=('spdx:GPL-2.0-only')
install=busybox.install
makedepends=('make' 'gcc' 'libxcrypt-devel')
source=("https://busybox.net/downloads/${pkgname}-${pkgver}.tar.bz2"
        "cygwin-busybox-1.36.1-2.patch")
sha256sums=('b8cc24c9574d809e7279c3be349795c5d5ceb6fdf19ca709f80cde50e47de314'
            '0840c162e629991bff902f1b0d807e23fd3af42e2f5b349c1c4f5c7a43bebc01')

prepare() {
  cd "${pkgname}-${pkgver}"
  patch -p2 -i ../cygwin-busybox-1.36.1-2.patch
}

build() {
  cd "${pkgname}-${pkgver}"

  make cygwin_defconfig
  make
  mv -v busybox_unstripped.exe busybox.exe
}

package() {
  cd "${pkgname}-${pkgver}"

  #install busybox
  mkdir -p "${pkgdir}/usr/bin"
  install -Dm755 busybox.exe -t "${pkgdir}"/usr/bin

  # manpage
  install -Dm644 docs/busybox.1 -t "${pkgdir}"/usr/share/man/man1

  # license
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}


================================================
FILE: bzip2/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=('bzip2' 'libbz2' 'libbz2-devel')
pkgver=1.0.8
pkgrel=4
pkgdesc="A high-quality data compression program"
groups=('compression')
arch=('i686' 'x86_64')
license=('spdx:bzip2-1.0.6')
url="http://www.bzip.org"
msys2_repository_url='https://sourceware.org/git/bzip2.git'
msys2_references=(
  "cpe: cpe:/a:bzip:bzip2"
)
makedepends=('gcc' 'patch' 'autotools')
source=(https://sourceware.org/pub/bzip2/bzip2-${pkgver}.tar.gz
        bzip2-1.0.6-msys-dll.patch
        bzip2-1.0.6-msys2.patch)
sha256sums=('ab5a03176ee106d3f0fa90e381da478ddae405918153cca248e682cd0c4a2269'
            'a14e3ef3108fe843f5bd4bdf0943cc22c0a1581c382706dbd3f42ad7dc097c88'
            'b499532b538ae1faa9b07933013671fd8f34431bfaa802f9099a96a6a4135e80')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  patch -p1 -i ${srcdir}/bzip2-1.0.6-msys-dll.patch
  patch -p1 -i ${srcdir}/bzip2-1.0.6-msys2.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  CFLAGS+=" -D_FILE_OFFSET_BITS=64"
  ./configure \
    --build=${CHOST} \
    --prefix=/usr \
    --enable-shared

  make all
  make PREFIX="${srcdir}/dest" install
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make test
}

package_bzip2() {
  depends=('libbz2')

  mkdir -p ${pkgdir}/usr/bin

  cp -f ${srcdir}/dest/bin/b* ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/share ${pkgdir}/usr/

}

package_libbz2() {
  groups=('libraries')
  depends=('gcc-libs')

  mkdir -p ${pkgdir}/usr/bin

  cp -f ${srcdir}/dest/bin/*.dll ${pkgdir}/usr/bin/
}

package_libbz2-devel() {
  pkgdesc="Libbz2 headers and libraries"
  groups=('development')
  options=('staticlibs')
  depends=("libbz2=${pkgver}")

  mkdir -p ${pkgdir}/usr/{include,lib}

  cp -rf ${srcdir}/dest/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/lib ${pkgdir}/usr/
}


================================================
FILE: c-ares/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgbase="c-ares"
pkgname=("libcares" "libcares-devel")
pkgver=1.34.9
pkgrel=1
pkgdesc="C library that performs DNS requests and name resolves asynchronously (libraries)"
arch=('i686' 'x86_64')
url="https://c-ares.haxx.se/"
msys2_repository_url="https://github.com/c-ares/c-ares"
msys2_references=(
  "cpe: cpe:/a:c-ares_project:c-ares"
  "cpe: cpe:/a:daniel_stenberg:c-ares"
)
license=("spdx:MIT")
makedepends=("cmake" 'gcc' 'ninja')
depends=("gcc-libs")
source=("https://github.com/c-ares/c-ares/releases/download/v${pkgver}/c-ares-${pkgver}.tar.gz"{,.asc})
sha256sums=('9364b70a12eb59a06830fb488d9357f90100dff0d98b23ea3593a183d43e6f2f'
            'SKIP')
# keys: https://c-ares.org/#download
validpgpkeys=('27EDEAF22F3ABCEB50DB9A125CC908FDB71E12C2' # Daniel Stenberg <daniel@haxx.se>
              'DA7D64E4C82C6294CB73A20E22E3D13B5411B7CA') #Brad House <brad@brad-house.com>

build() {
  cd "${srcdir}/${pkgbase}-${pkgver}"

  cmake -GNinja -B "build-static" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCARES_STATIC=ON \
    -DCARES_SHARED=OFF
  cmake --build "build-static"
  DESTDIR="${srcdir}/dest" cmake --install "build-static"

  cmake -GNinja -B "build-shared" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCARES_STATIC=OFF \
    -DCARES_SHARED=ON
  cmake --build "build-shared"
  DESTDIR="${srcdir}/dest" cmake --install "build-shared"
}

package_libcares() {
  groups=('libraries')

  mkdir -p ${pkgdir}/usr/bin
  cp -rf ${srcdir}/dest/usr/bin ${pkgdir}/usr/

  mkdir -p ${pkgdir}/usr/share
  cp -rf ${srcdir}/dest/usr/share ${pkgdir}/usr/

  install -vDm 644 "${srcdir}/${pkgbase}-${pkgver}/LICENSE.md" -t "${pkgdir}/usr/share/licenses/${pkgbase}/"
}

package_libcares-devel() {
  pkgdesc="c-ares headers and libraries (development)"
  groups=('development')
  depends=("libcares=${pkgver}")

  mkdir -p ${pkgdir}/usr
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/
}


================================================
FILE: ca-certificates/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=ca-certificates
pkgver=20260816
pkgrel=4
pkgdesc='Common CA certificates'
arch=('any')
url='https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/'
license=('spdx:MPL-2.0 AND GPL-2.0-or-later')
source=("http://ftp.debian.org/debian/pool/main/c/${pkgname}/${pkgname}_${pkgver}+nmu1.tar.xz"
        'certdata2pem.py'
        'update-ca-trust'
        'update-ca-trust.8')
depends=('bash' 'openssl' 'findutils' 'coreutils' 'sed' 'p11-kit')
makedepends=('asciidoc' 'python' 'libxslt' 'sed' 'grep')
install='ca-certificates.install'
sha256sums=('914416a1e44a25733aff51092fe4e27fdec1c9f6e8d1db0b8364922486153134'
            '9508738b61cc89bfc1f42580b1091a650f0acbf5c1b49edc2aa4e0313276ea0d'
            'f411cb774da977d3bf6647f53030cb0d584fea09591cec8b6fcc3065f7652c98'
            'a73c6430e734178b9aa4d303709470383bc2b1cfbeb0d44fe34615df812f479d')

prepare() {
  mv "${srcdir}/${pkgname}" "${srcdir}/${pkgname}-${pkgver}"
  sed "s|/usr/bin/python|/usr/bin/python3|g" -i certdata2pem.py
  cp certdata2pem.py ${srcdir}/${pkgname}-${pkgver}/mozilla/certdata2pem.py
  cd ${srcdir}/${pkgname}-${pkgver}
  cp ${srcdir}/update-ca-trust sbin/
  cp ${srcdir}/update-ca-trust.8 sbin/
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}/mozilla
  mkdir -p legacy-{default,disable}

  PYTHONUTF8=1 PYTHONIOENCODING=utf-8 /usr/bin/python3 ./certdata2pem.py

  (
    cat <<EOF
# This is a bundle of X.509 certificates of public Certificate
# Authorities.  It was generated from the Mozilla root CA list.
# These certificates and trust/distrust attributes use the file format accepted
# by the p11-kit-trust module.
#
# Source: nss/lib/ckfw/builtins/certdata.txt
# Source: nss/lib/ckfw/builtins/nssckbi.h
#
# Generated from:
EOF
    cat nssckbi.h | grep -w NSS_BUILTINS_LIBRARY_VERSION | awk '{print "# " $2 " " $3}';
    echo '#';
  ) > ${srcdir}/${pkgname}-${pkgver}/ca-bundle.trust.crt

  touch ${srcdir}/${pkgname}-${pkgver}/ca-bundle.legacy.default.crt
  local NUM_LEGACY_DEFAULT=`find ./legacy-default -type f | wc -l`
  if [ $NUM_LEGACY_DEFAULT -ne 0 ]; then
     for f in ./legacy-default/*.crt; do 
       echo "processing $f"
       tbits=`sed -n '/^# openssl-trust/{s/^.*=//;p;}' $f`
       alias=`sed -n '/^# alias=/{s/^.*=//;p;q;}' $f | sed "s/'//g" | sed 's/"//g'`
       targs=""
       if [ -n "$tbits" ]; then
          for t in $tbits; do
             targs="${targs} -addtrust $t"
          done
       fi
       if [ -n "$targs" ]; then
          echo "legacy default flags $targs for $f" >> info.trust
          openssl x509 -text -in "$f" -trustout $targs -setalias "$alias" >> ${srcdir}/${pkgname}-${pkgver}/ca-bundle.legacy.default.crt
       fi
     done
  fi

  touch ${srcdir}/${pkgname}-${pkgver}/ca-bundle.legacy.disable.crt
  NUM_LEGACY_DISABLE=`find ./legacy-disable -type f | wc -l`
  if [ $NUM_LEGACY_DISABLE -ne 0 ]; then
     for f in ./legacy-disable/*.crt; do 
       echo "processing $f"
       tbits=`sed -n '/^# openssl-trust/{s/^.*=//;p;}' $f`
       alias=`sed -n '/^# alias=/{s/^.*=//;p;q;}' $f | sed "s/'//g" | sed 's/"//g'`
       targs=""
       if [ -n "$tbits" ]; then
          for t in $tbits; do
             targs="${targs} -addtrust $t"
          done
       fi
       if [ -n "$targs" ]; then
          echo "legacy disable flags $targs for $f" >> info.trust
          openssl x509 -text -in "$f" -trustout $targs -setalias "$alias" >> ${srcdir}/${pkgname}-${pkgver}/ca-bundle.legacy.disable.crt
       fi
     done
  fi

  local P11FILES=`find . -name \*.tmp-p11-kit | wc -l`
  if [ $P11FILES -ne 0 ]; then
    for p in ./*.tmp-p11-kit; do 
      cat "$p" >> ${srcdir}/${pkgname}-${pkgver}/ca-bundle.trust.crt
    done
  fi

}



package() {
  cd ${srcdir}/${pkgname}-${pkgver}

  mkdir -p ${pkgdir}/usr/{bin,lib,share}
  mkdir -p ${pkgdir}/etc
  mkdir -p ${pkgdir}/usr/share/man/man8

  cp -f ${srcdir}/update-ca-trust ${pkgdir}/usr/bin/
  cp -f ${srcdir}/update-ca-trust.8 ${pkgdir}/usr/share/man/man8/

  # for p11-kit
  mkdir -p ${pkgdir}/usr/lib/p11-kit
  cp -f ${srcdir}/update-ca-trust ${pkgdir}/usr/lib/p11-kit/p11-kit-extract-trust

  mkdir -p ${pkgdir}/usr/share/pki/ca-trust-{source,legacy}
  install -p -m 644 ca-bundle.trust.crt          ${pkgdir}/usr/share/pki/ca-trust-source/ca-bundle.trust.crt
  install -p -m 644 ca-bundle.legacy.default.crt ${pkgdir}/usr/share/pki/ca-trust-legacy/ca-bundle.legacy.default.crt
  install -p -m 644 ca-bundle.legacy.disable.crt ${pkgdir}/usr/share/pki/ca-trust-legacy/ca-bundle.legacy.disable.crt

  # touch all files overwritten by update-ca-trust for easy cleanup
  mkdir -p ${pkgdir}/etc/pki/ca-trust/{extracted,source}
  mkdir -p ${pkgdir}/etc/pki/ca-trust/source/{anchors,blacklist}
  mkdir -p ${pkgdir}/etc/pki/ca-trust/extracted/{openssl,pem,java}
  touch ${pkgdir}/etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt
  touch ${pkgdir}/etc/pki/ca-trust/extracted/pem/{tls,email,objsign}-ca-bundle.pem
  touch ${pkgdir}/etc/pki/ca-trust/extracted/java/cacerts

  # for OpenSSL and static ca-certificates consumers
  mkdir -p ${pkgdir}/usr/ssl/certs
  cp -f ${pkgdir}/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem ${pkgdir}/usr/ssl/certs/ca-bundle.crt
  cp -f ${pkgdir}/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem ${pkgdir}/usr/ssl/cert.pem
  cp -f ${pkgdir}/etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt ${pkgdir}/usr/ssl/certs/ca-bundle.trust.crt
}


================================================
FILE: cargo-c/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=cargo-c
pkgver=0.10.26
pkgrel=2
pkgdesc='A cargo subcommand to build and install C-ABI compatibile dynamic and static libraries'
arch=('i686' 'x86_64')
url='https://github.com/lu-zero/cargo-c/'
msys2_repository_url='https://github.com/lu-zero/cargo-c'
msys2_references=(
  'archlinux: cargo-c'
  'gentoo: dev-util/cargo-c'
  'purl: pkg:cargo/cargo-c'
)
license=('spdx:MIT')
depends=(
  "rust"
  "libsqlite"
  "libssh2"
  "libgit2"
  "libcurl"
  "openssl-devel"
)
makedepends=(
  "pkgconf"
  "libopenssl"
  "libgit2-devel"
  "libssh2-devel"
  "libsqlite-devel"
  "libcurl-devel"
)
options=('!strip')
source=("https://github.com/lu-zero/cargo-c/archive/v${pkgver}/cargo-c-${pkgver}.tar.gz"
        "cargo-c-${pkgver}.Cargo.lock::https://github.com/lu-zero/cargo-c/releases/download/v${pkgver}/Cargo.lock"
        "0002-msys-support.patch")
sha256sums=('57700786539a322a50f1848332e3465bf15efa5af2fd8b6113f36cbfce46c830'
            'd3cb865d40625de197b71fa591f1f24c0593b5a24b46b7c126eae7fecf7be315'
            'a446f41796e980df0c19ba876aabc2f820e2165e72d15c9d147c44a1d7b9a2ac')

prepare() {
  cp "cargo-c-${pkgver}.Cargo.lock" "cargo-c-${pkgver}/Cargo.lock"
  cd "cargo-c-${pkgver}"

  patch -p1 -i ../0002-msys-support.patch

  cargo fetch --locked --target "${RUST_CHOST}"
}

_env() {
  export LIBGIT2_NO_VENDOR=1
  export OPENSSL_NO_VENDOR=1
  export LIBSSH2_SYS_USE_PKG_CONFIG=1
  export LIBSQLITE3_SYS_USE_PKG_CONFIG=1
}

build() {
  cd "cargo-c-${pkgver}"

  _env
  cargo build --frozen --profile release-strip
}

check() {
  cd "cargo-c-${pkgver}"

  _env
  cargo test --frozen --profile release-strip
}

package() {
  cd "cargo-c-${pkgver}"

  _env
  cargo install \
    --frozen \
    --offline \
    --no-track \
    --path . \
    --root "${pkgdir}/usr" \
    --profile release-strip

  install -Dm644 "LICENSE" -t "${pkgdir}/usr/share/licenses/cargo-c"
}


================================================
FILE: cargo-edit/PKGBUILD
================================================
# Maintainer: Maksim Bondarenkov <maksapple2306@gmail.com>

pkgname=cargo-edit
pkgver=0.13.14
pkgrel=1
pkgdesc="A utility for managing cargo dependencies from the command line"
arch=('x86_64')
url='https://github.com/killercup/cargo-edit'
msys2_repository_url='https://github.com/killercup/cargo-edit'
msys2_changelog_url='https://github.com/killercup/cargo-edit/blob/master/CHANGELOG.md'
msys2_references=(
  'archlinux: cargo-edit'
  'purl: pkg:cargo/cargo-edit'
)
license=('spdx:MIT')
depends=("rust")
source=("${url}/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "ring-0.17.14.tar.gz::https://static.crates.io/crates/ring/0.17.14/download"
        "ring-support-cygwin.patch")
sha256sums=('52f49ea8f76e2caa48d3b57bbcdfe1768268f25ad9a1f07878d9c670488180fb'
            'a4689e6c2294d81e88dc6261c768b63bc4fcdb852be6d1352498b114f61383b7'
            '8595d93ebdcc37b023113b60196ba0d4bec2d9623e4092b19a699ed1458f33fa')

prepare() {
  cd "${pkgname}-${pkgver}"

  patch -p1 -d ../ring-0.17.14 -i ../ring-support-cygwin.patch
  cat >> Cargo.toml <<END

[patch.crates-io]
ring.path = "../ring-0.17.14"
END

  cargo update -p ring
  cargo fetch --locked --target "${RUST_CHOST}"
}

build() {
  cd "${pkgname}-${pkgver}"

  cargo build --release --frozen
}

check() {
  cd "${pkgname}-${pkgver}"

  cargo test --release --frozen
}

package() {
  cd "${pkgname}-${pkgver}"

  cargo install \
    --offline \
    --no-track \
    --frozen \
    --path . \
    --root "${pkgdir}/usr"

  install -Dm644 LICENSE-MIT LICENSE-APACHE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}


================================================
FILE: ccache/PKGBUILD
================================================
# Maintainer: Mateusz Mikuła <mati865@gmail.com>
# Contributor: Renato Silva <br.renatosilva@gmail.com>

pkgname=ccache
pkgver=4.14.1
pkgrel=1
pkgdesc='A compiler cache'
arch=('i686' 'x86_64')
url='https://ccache.dev/'
msys2_repository_url='https://github.com/ccache/ccache'
msys2_changelog_url='https://ccache.dev/releasenotes.html'
msys2_references=(
  'anitya: 257'
  'archlinux: ccache'
  'gentoo: dev-util/ccache'
)
license=('spdx:GPL-3.0-or-later')
depends=(
  'fmt'
  'gcc-libs'
  'libblake3'
  'libxxhash'
  'libzstd'
  'zlib'
)
makedepends=(
  'cmake'
  'doctest'
  'gcc'
  'libblake3'
  'libxxhash-devel'
  'libzstd-devel'
  'ninja'
  'pkgconf'
  'zlib-devel'
)
replaces=("${pkgname}-git")
options=('staticlibs' 'strip')
install="${pkgname}.install"
source=(
  "https://github.com/ccache/ccache/releases/download/v${pkgver}/ccache-${pkgver}.tar.xz"{,.minisig}
  '001-fix-includes.patch'
)
sha256sums=('29f10de481ac2c41c91bfabead63d803bd2fe823e09752aade5b0b8704cc4f30'
            '7734553f8e28f9e4763b7efa6093405fbd0346c90adb5bc844d351de73fb0861'
            '0ed05aeef57cb681e7625639a74e97461442947c4582b8426f0e9e315aff9dcb')
validpgpkeys=(
  '5A939A71A46792CF57866A51996DDA075594ADB8' # Joel Rosdahl <joel@rosdahl.net>
)

prepare() {
  cd "${pkgname}-${pkgver}"

  patch -p1 -i "${srcdir}/001-fix-includes.patch"
}

build() {
  unset CI
  cmake \
    -GNinja \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DREDIS_STORAGE_BACKEND=OFF \
    -DDEPS=LOCAL \
    -S "${pkgname}-${pkgver}" \
    -B "build-${CARCH}"

  cmake --build "build-${CARCH}"
}

check() {
  ctest --test-dir "build-${CARCH}" --output-on-failure
}

package() {
  DESTDIR="${pkgdir}" cmake --install "build-${CARCH}"

  cd "${pkgname}-${pkgver}"

  install -Dm644 GPL-3.0.txt LGPL-3.0.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
}


================================================
FILE: cdecl/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

pkgname=cdecl
pkgver=18.7.2
pkgrel=1
pkgdesc="Composing and deciphering C (or C++) declarations or casts, aka 'gibberish.'"
arch=('i686' 'x86_64')
url="https://github.com/paul-j-lucas/cdecl"
msys2_repository_url='https://github.com/paul-j-lucas/cdecl'
license=('spdx:GPL-3.0-or-later')
depends=('ncurses' 'libreadline')
makedepends=('gcc' 'make' 'ncurses-devel' 'libreadline-devel' 'flex' 'bison' 'autotools')
source=("https://github.com/paul-j-lucas/cdecl/releases/download/cdecl-${pkgver}/cdecl-${pkgver}.tar.gz")
sha256sums=('e91cc201c79456b923b45cfa779da62f5ca91824d11c545167ee7bb33a9fb810')

prepare() {
  cd "${pkgname}-${pkgver}"

  autoreconf -vfi
}

build() {
  cd "${pkgname}-${pkgver}"

  ./configure \
    --build=${CHOST} \
    --prefix=/usr

  make
}

package() {
  cd "${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
}


================================================
FILE: cflow/PKGBUILD
================================================
pkgname=cflow
pkgver=1.8
pkgrel=1
pkgdesc="C function call hierarchy analyzer"
arch=('i686' 'x86_64')
license=('spdx:GPL-3.0-or-later')
url="https://www.gnu.org/software/cflow/"
depends=('libintl' 'libiconv')
msys2_repository_url="https://cgit.git.savannah.gnu.org/cgit/cflow.git"
msys2_references=(
  "cpe: cpe:2.3:a:gnu:cflow"
)
makedepends=('flex' 'gettext-devel' 'libiconv-devel' 'autotools' 'gcc')
source=(https://ftp.gnu.org/gnu/cflow/${pkgname}-${pkgver}.tar.xz)
sha256sums=('a5830a708a587ebbf3b475b585935f89c33fc8fbd057af7d817d517aceaa7afa')

prepare() {
  cd "${pkgname}-${pkgver}"
  autoreconf -vfi
}

build() {
  mkdir -p "build-${MSYSTEM_CHOST}"
  cd "build-${MSYSTEM_CHOST}"
  ../"${pkgname}-${pkgver}"/configure -C \
    --prefix=/usr
  make
}

check() {
  cd "build-${MSYSTEM_CHOST}"
  make check
}

package() {
  make -C "build-${MSYSTEM_CHOST}" DESTDIR="${pkgdir}" install

  # license
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}/"
  cp "${pkgname}-${pkgver}/COPYING" "${pkgdir}/usr/share/licenses/${pkgname}/"
}


================================================
FILE: cgdb/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=cgdb
pkgver=0.8.0
pkgrel=2
pkgdesc="Curses-based interface to the GNU Debugger"
arch=('i686' 'x86_64')
url="https://cgdb.github.io/"
msys2_repository_url='https://github.com/cgdb/cgdb'
license=('spdx:GPL-2.0-or-later')
depends=('libreadline' 'ncurses' 'gdb')
makedepends=('help2man' 'libreadline-devel' 'ncurses-devel' 'autotools' 'gcc')
source=("https://cgdb.me/files/${pkgname}-${pkgver}.tar.gz")
sha256sums=('0d38b524d377257b106bad6d856d8ae3304140e1ee24085343e6ddf1b65811f1')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  echo "$pkgver" > VERSION
  autoreconf -vfi -I config
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  export MSYSTEM=CYGWIN

  CFLAGS+=" -D_GNU_SOURCE"
  CXXFLAGS+="   -D_GNU_SOURCE"
  ./configure \
    --prefix=/usr \
    --build=${CHOST} \
    --with-readline=/usr \
    --with-ncurses=/usr
  
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}/" install
}


================================================
FILE: cjson/PKGBUILD
================================================
pkgname=cjson
pkgver=1.7.19
pkgrel=1
pkgdesc="Ultralightweight JSON parser in ANSI C"
arch=(x86_64)
url="https://github.com/DaveGamble/cJSON"
msys2_repository_url="https://github.com/DaveGamble/cJSON"
msys2_references=(
  "cpe: cpe:/a:cjson_project:cjson"
)
license=('spdx:MIT')
depends=(
)
makedepends=(
  cmake
  gcc
)
source=(
  https://github.com/DaveGamble/cJSON/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz
)
sha512sums=(
  7b22bdd05b8e0bf8b24ab79db128dbab9f8c2c167f4b1d3073922b8ff1e0f0e8917322283d6d4091002f014f42692984f4f641761f05965d3b66fb3eca14dc46
)

build() {
  local cmake_options=(
    -B build
    -D ENABLE_CJSON_UTILS=ON
    -D ENABLE_CJSON_TEST=OFF
    -D CMAKE_INSTALL_PREFIX=/usr
    -D CMAKE_INSTALL_LIBDIR=lib
    -D CMAKE_POLICY_VERSION_MINIMUM=3.5
    -S cJSON-$pkgver
  )
  cmake "${cmake_options[@]}"
  make -C build -j$(nproc)
}

package() {
  DESTDIR="${pkgdir}" make -C build install
  install -Dm644 "$srcdir/cJSON-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


================================================
FILE: cloc/PKGBUILD
================================================
# Contributer: Baruch Burstein <bmburstein at gmail dot com>

pkgname=cloc
pkgver=2.10
pkgrel=2
pkgdesc="Count lines of code"
arch=('any')
url="https://github.com/AlDanial/cloc"
msys2_repository_url='https://github.com/AlDanial/cloc'
license=('spdx:GPL-2.0-or-later')
depends=('perl' 'perl-algorithm-diff' 'perl-regexp-common' 'perl-parallel-forkmanager')
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/AlDanial/cloc/archive/v${pkgver}.tar.gz)
sha256sums=('a8fac35f4cf42728765580ba11afc2568ad205509a22204663f526169548436d')
noextract=(${pkgname}-${pkgver}.tar.gz)

prepare() {
  [[ -d ${pkgname}-${pkgver} ]] && rm -rf ${pkgname}-${pkgver}
  tar -xzvf ${pkgname}-${pkgver}.tar.gz -C ${srcdir} || true
}

package() {
  cd ${pkgname}-${pkgver}/Unix
  make DESTDIR="${pkgdir}" install
}


================================================
FILE: cmake/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Martell Malone <martellmalone@gmail.com>

_realname=cmake
pkgname=("${_realname}" "${_realname}-emacs" "${_realname}-vim")
pkgver=4.4.5
pkgrel=1
pkgdesc="A cross-platform open-source make system"
arch=('i686' 'x86_64')
url="https://www.cmake.org/"
msys2_repository_url="https://gitlab.kitware.com/cmake/cmake"
msys2_references=(
  "anitya: 306"
  "cpe: cpe:2.3:a:cmake_project:cmake"
)
msys2_ignore_vulnerabilities=(
  'CVE-2016-10642' # Only the npm package is affected
)
license=(spdx:BSD-3-Clause)
makedepends=('gcc'
             'emacs'
             'autotools'
             'jsoncpp-devel'
             'libarchive-devel'
             'libbz2-devel'
             'libcurl-devel'
             'libexpat-devel'
             'liblzma-devel'
             'librhash-devel'
             'libutil-linux-devel'
             'libuv-devel'
             'libzstd-devel'
             'ncurses-devel'
             'zlib-devel')
depends=('gcc-libs'
         'jsoncpp'
         'libcurl'
         'libexpat'
         'libarchive'
         'librhash'
         'libutil-linux'
         'libuv'
         'ncurses'
         'pkgconf'
         'zlib'
         'cppdap')
options=('staticlibs' 'strip')
source=(https://www.cmake.org/files/v${pkgver%.*}/${pkgname}-${pkgver}.tar.gz)
sha256sums=('a0c54c88abb8078dd8eccadb717fc6bb194bf18e7d44c86309910288886e04e2')

build() {
  [[ -d ${srcdir}/build-${CARCH} ]] && rm -rf ${srcdir}/build-${CARCH}
  mkdir -p ${srcdir}/build-${CARCH}
  cd ${srcdir}/build-${CARCH}
  MSYSTEM=MSYS ${srcdir}/${_realname}-${pkgver}/configure \
    --prefix=/usr \
    --system-libs \
    --no-qt-gui \
    --parallel=$(nproc) \
    --mandir=share/man \
    --docdir=share/doc/${_realname} \
    --datadir=share/${_realname} \
    -- -DCURSES_FORM_LIBRARY=/usr/lib/libformw.dll.a \
      -DCTEST_TEST_CTEST=ON \
      -DCMAKE_BUILD_TYPE=Release
  plain "Start building..."
  make
  make DESTDIR=${srcdir}/dest install
}

#Enable once we can get all tests to pass
#check() {
#  cd ${srcdir}/build-${CARCH}
#  make test
#}


package_cmake() {
  cd ${srcdir}/dest

  install -d  ${pkgdir}/usr/bin/
  install -d  ${pkgdir}/usr/share/aclocal
  install -d  ${pkgdir}/usr/share/${_realname}

  cp -r usr/bin/* ${pkgdir}/usr/bin/
  cp -r usr/share/aclocal/* ${pkgdir}/usr/share/aclocal/
  cp -r usr/share/cmake/* ${pkgdir}/usr/share/${_realname}/

  install -Dm644 ${srcdir}/${pkgname}-${pkgver}/LICENSE.rst \
    ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

package_cmake-vim() {
  pkgdesc="A cross-platform open-source make system (vim mode)"
  depends=("cmake=${pkgver}" 'vim')
  cd ${srcdir}/dest
  install -d ${pkgdir}/usr/share

  cp -rf usr/share/vim ${pkgdir}/usr/share/
}

package_cmake-emacs() {
  pkgdesc="A cross-platform open-source make system (Emacs mode)"
  depends=(cmake=${pkgver} 'emacs')
  cd ${srcdir}/dest

  install -d ${pkgdir}/usr/share
  cp -rf usr/share/emacs ${pkgdir}/usr/share/

  /usr/bin/emacs -batch -f batch-byte-compile \
    ${pkgdir}/usr/share/emacs/site-lisp/cmake-mode.el
}


================================================
FILE: cmake-bootstrap/PKGBUILD
================================================
# Maintainer: Christoph Reiter <reiter.christoph@gmail.com>

_realname=cmake
pkgname="${_realname}-bootstrap"
pkgver=4.4.5
pkgrel=1
pkgdesc="A cross-platform open-source make system"
arch=('i686' 'x86_64')
url="https://www.cmake.org/"
msys2_repository_url="https://gitlab.kitware.com/cmake/cmake"
msys2_references=(
  "anitya: 306"
  "cpe: cpe:2.3:a:cmake_project:cmake"
)
msys2_ignore_vulnerabilities=(
  'CVE-2016-10642' # Only the npm package is affected
)
license=(spdx:BSD-3-Clause)
makedepends=('gcc'
             'libiconv-devel'
             'make')
depends=('gcc-libs')
conflicts=('cmake' 'cmake-emacs' 'cmake-vim')
provides=("cmake=$pkgver")
source=(https://www.cmake.org/files/v${pkgver%.*}/${_realname}-${pkgver}.tar.gz)
sha256sums=('a0c54c88abb8078dd8eccadb717fc6bb194bf18e7d44c86309910288886e04e2')

build() {
  [[ -d ${srcdir}/build-${CARCH} ]] && rm -rf ${srcdir}/build-${CARCH}
  mkdir -p ${srcdir}/build-${CARCH}
  cd ${srcdir}/build-${CARCH}

  "${srcdir}/${_realname}-${pkgver}/configure" \
    --prefix=/usr \
    --no-system-libs \
    --no-qt-gui \
    --parallel="$(nproc)" \
    --mandir=share/man \
    --docdir="share/doc/${_realname}" \
    --datadir="share/${_realname}" \
    -- -DCMAKE_USE_OPENSSL=OFF

  make
}

package() {
  cd ${srcdir}/build-${CARCH}

  make DESTDIR="${pkgdir}" install

  install -Dm644 ${srcdir}/${_realname}-${pkgver}/LICENSE.rst \
    ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}


================================================
FILE: cmatrix/PKGBUILD
================================================
pkgname=('cmatrix')
pkgver=2.0
pkgrel=1
pkgdesc="A curses-based scrolling 'Matrix'-like screen"
arch=('i686' 'x86_64')
url="http://www.asty.org/cmatrix/"
msys2_repository_url="https://github.com/abishekvashok/cmatrix"
license=('spdx:GPL-3.0-or-later')
depends=('ncurses')
makedepends=('ncurses-devel' 'make' 'autotools' 'gcc')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/abishekvashok/cmatrix/archive/refs/tags/v${pkgver}.tar.gz"
		"define_TIOCSTI.patch")
sha256sums=('ad93ba39acd383696ab6a9ebbed1259ecf2d3cf9f49d6b97038c66f80749e99a'
            '70b3c94813427355490b5fad29ad8a116bae87e198033e1951ca218683317874')

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	patch -p1 -i "${srcdir}/define_TIOCSTI.patch"
}

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	autoreconf -i
	./configure --prefix=/usr --mandir=/usr/share/man

	make
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	make DESTDIR="$pkgdir" install

	for i in AUTHORS NEWS COPYING README ChangeLog INSTALL; do
		install -Dm644 $i "$pkgdir/usr/share/doc/cmatrix/$i"
	done
}


================================================
FILE: cocom/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=cocom
pkgver=0.996
pkgrel=6
pkgdesc="Toolset for creation of compilers and interpreters"
arch=('i686' 'x86_64')
url="https://cocom.sourceforge.io/"
license=('spdx:LicenseRef-cocom')
depends=('gmp')
makedepends=('autotools' 'gcc' 'git' 'gmp-devel')

_commit='5fc8760a7f4eaf074ce9c116b85015fafb5af26c'
source=("cocom"::"git+https://github.com/dino-lang/dino.git#commit=$_commit"
0001-Fixes-building-with-gcc-15.patch)
sha256sums=('b173e3c3ac30315006e498a3efbbd480b2d698d93c2d16da4d6d90e87df006bc'
            'a822df8652d131de3bbe62f1ee1e302139e3d14c0615964fafb75d4e491948c3')

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying $_patch"
    patch -Nbp1 -i "${srcdir}/$_patch"
  done
}

prepare() {
  cd ${srcdir}/${pkgname}/
  apply_patch_with_msg \
    0001-Fixes-building-with-gcc-15.patch

  cd ${srcdir}/${pkgname}/
  WANT_AUTOCONF=latest autoreconf -fi

  cd ${srcdir}/${pkgname}/REGEX
  WANT_AUTOCONF=latest autoreconf -fi
}

build() {
  cd ${srcdir}/${pkgname}
  ./configure --prefix=/usr --mandir=/usr/share/man
  make
}

check() {
  cd ${srcdir}/${pkgname}
  make test
}

package() {
  cd ${srcdir}/${pkgname}
  make DESTDIR=${pkgdir} install
}


================================================
FILE: colordiff/PKGBUILD
================================================
# Maintainer: Renato Silva <br.renatosilva@gmail.com>

pkgname=colordiff
pkgver=1.0.22
pkgrel=1
pkgdesc='Diff wrapper with pretty syntax highlighting'
url='https://www.colordiff.org/'
msys2_repository_url="https://github.com/daveewart/colordiff"
license=('spdx:GPL-2.0-or-later')
arch=('any')
depends=('diffutils' 'perl')
makedepends=(w3m xmlto docbook-xsl)
backup=(etc/colordiffrc)
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/daveewart/colordiff/archive/v${pkgver}.tar.gz"
        002-build-fix.patch)
sha256sums=('221a9dae6916883f906c0f387695b8a48fda64566e20aa3d527ab4ca0abc8f62'
            '8d2f99a79126763babdf93ff1691c9e037a843f94afe5e631e1e7fcfae22713d')

prepare() {
  cd "${pkgname}-${pkgver}"
  patch -p1 -i "${srcdir}/002-build-fix.patch"

  # xmlto txt conversion apparently does not work even with w3m
  # anyhow only man page is packaged
  sed -i "s/xmlto -vv txt colordiff.xml//" Makefile
  sed -i "s/mv colordiff.txt README//" Makefile
}

package() {
  cd "${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" MAN_DIR='/usr/share/man/man1' INSTALL_DIR='/usr/bin' install doc
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}


================================================
FILE: coreutils/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=coreutils
pkgver=9.0
_cygrel=1
pkgrel=1
pkgdesc="The basic file, shell and text manipulation utilities of the GNU operating system"
arch=('i686' 'x86_64')
license=('spdx:GPL-3.0-or-later')
url="https://www.gnu.org/software/coreutils"
msys2_repository_url='https://cgit.git.savannah.gnu.org/cgit/coreutils.git'
msys2_references=(
  "cpe: cpe:/a:gnu:coreutils"
)
depends=('gmp' 'libiconv' 'libintl')
makedepends=('groff' 'gmp-devel' 'libiconv-devel' 'gettext-devel' 'help2man' 'texinfo' 'autotools' 'gcc')
source=(https://ftp.gnu.org/gnu/${pkgname}/${pkgname}-${pkgver}.tar.xz{,.sig}
        https://sourceware.org/pub/cygwin/x86_64/release/${pkgname}/${pkgname}-${pkgver}-${_cygrel}-src.tar.xz
        002-coreutils-9.0-stdbuf-dll.patch
        003-coreutils-8.32-fix-test-cases.patch
        004-msystem-osname-cygwin.patch)
sha256sums=('ce30acdf4a41bc5bb30dd955e9eaa75fa216b4e3deb08889ed32433c7b3b97ce'
            'SKIP'
            '1ee03cb2fdeaf31270fb3563b3cf73af1be96ff3f40102324f6cd2f8a6091919'
            '16ac7d9689801fa130d81e0888def067350e2f85f96efce0fdb2d4cfb052da60'
            'ad9e0582373500c0668e38483401169f48d6a2f8ad8d28ef8e7b06e4a3e08a74'
            '3922afd54b2323772f5cbd0638d0887ef858199bbaf4076a1db318173021c3dc')
validpgpkeys=('6C37DC12121A5006BC1DB804DF6FD971306037D9')

apply_patch_with_msg() {
  local patch
  for patch in "$@"
  do
    msg2 "Applying ${patch}"
    patch -Nbp1 -i "${srcdir}/${patch}"
  done
}

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}

  # Patches from Cygwin's source package
  local _cygsrc=${pkgname}-${pkgver}-${_cygrel}.src
  cp "${srcdir}/${_cygsrc}"/cygwin.{c,h} lib/
  apply_patch_with_msg \
    ${_cygsrc}/coreutils-8.32-configure.ac.patch \
    ${_cygsrc}/coreutils-8.32-doc-coreutils.texi.patch \
    ${_cygsrc}/coreutils-8.32-lib-freopen.c.patch \
    ${_cygsrc}/coreutils-8.32-lib-hash-pjw.c.patch \
    ${_cygsrc}/coreutils-8.32-lib-hash-pjw.h.patch \
    ${_cygsrc}/coreutils-8.32-lib-local.mk.patch \
    ${_cygsrc}/coreutils-9.0-lib-root-dev-ino.h.patch \
    ${_cygsrc}/coreutils-8.32-lib-root-dev-ino.c.patch \
    ${_cygsrc}/coreutils-8.32-lib-same.c.patch \
    ${_cygsrc}/coreutils-8.32-src-chcon.c.patch \
    ${_cygsrc}/coreutils-8.32-src-chgrp.c.patch \
    ${_cygsrc}/coreutils-8.32-src-chmod.c.patch \
    ${_cygsrc}/coreutils-8.32-src-chown.c.patch \
    ${_cygsrc}/coreutils-8.32-src-chown-core.h.patch \
    ${_cygsrc}/coreutils-8.32-src-chroot.c.patch \
    ${_cygsrc}/coreutils-9.0-src-copy.c.patch \
    ${_cygsrc}/coreutils-8.32-src-dd.c.patch \
    ${_cygsrc}/coreutils-8.32-src-dircolors.c.patch \
    ${_cygsrc}/coreutils-8.32-src-install.c.patch \
    ${_cygsrc}/coreutils-8.32-src-ls.c.patch \
    ${_cygsrc}/coreutils-8.32-src-mv.c.patch \
    ${_cygsrc}/coreutils-8.32-src-pwd.c.patch \
    ${_cygsrc}/coreutils-8.32-src-remove.h.patch \
    ${_cygsrc}/coreutils-8.32-src-rm.c.patch \
    ${_cygsrc}/coreutils-8.32-src-stat.c.patch

  apply_patch_with_msg \
    002-coreutils-9.0-stdbuf-dll.patch \
    003-coreutils-8.32-fix-test-cases.patch

  # https://github.com/msys2/MSYS2-packages/issues/3012
  apply_patch_with_msg \
    004-msystem-osname-cygwin.patch

  autoreconf -fi
}

build() {
  [[ -d ${srcdir}/build-${CHOST} ]] && rm -rf ${srcdir}/build-${CHOST}
  mkdir -p ${srcdir}/build-${CHOST} && cd ${srcdir}/build-${CHOST}

  export gl_cv_have_weak=no

  ../${pkgname}-${pkgver}/configure \
    --build=${CHOST} \
    --prefix=/usr \
    --libexecdir=/usr/lib \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --program-transform-name=s/kill/gkill/ \
    --without-libintl-prefix \
    --without-libiconv-prefix \
    --enable-install-program=arch,hostname \
    --enable-no-install-program=uptime \
    gl_cv_func_strtod_works=yes \
    gl_cv_func_strtold_works=yes

  make
}

check() {
  cd ${srcdir}/build-${CHOST}
  make check
}

package() {
  cd ${srcdir}/build-${CHOST}
  make DESTDIR=${pkgdir} install

  test ! -f ${pkgdir}/usr/lib/coreutils/libstdbuf.so.exe ||
  mv ${pkgdir}/usr/lib/coreutils/libstdbuf.so.exe \
    ${pkgdir}/usr/lib/coreutils/libstdbuf.dll

  install -Dm644 ${srcdir}/${pkgname}-${pkgver}/src/dircolors.hin ${pkgdir}/etc/DIR_COLORS
}


================================================
FILE: cpio/PKGBUILD
================================================
# Maintainer: Eon Jeong <administrator@korea.ac.kr>

pkgname=cpio
pkgver=2.15
pkgrel=1
pkgdesc="cpio - copy files to/from archives"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/cpio/"
msys2_repository_url="https://cgit.git.savannah.gnu.org/cgit/cpio.git"
msys2_references=(
  "cpe: cpe:/a:gnu:cpio"
)
license=('spdx:GPL-3.0-or-later')
depends=('libintl')
makedepends=('gettext-devel' 'autotools' 'gcc')
options=('staticlibs')
source=(https://ftp.gnu.org/pub/gnu/cpio/cpio-${pkgver}.tar.gz)
sha256sums=('efa50ef983137eefc0a02fdb51509d624b5e3295c980aa127ceee4183455499e')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  ./configure \
    --build=${CHOST} \
    --host=${CHOST} \
    --target=${CHOST} \
    --prefix=/usr

  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install

  # remove rmt
  rm -rf ${pkgdir}/usr/libexec
  rm -rf ${pkgdir}/usr/share/man/man8
  rm -f ${pkgdir}/usr/lib/charset.alias
}


================================================
FILE: cppdap/PKGBUILD
================================================
# Contributor: Christoph Reiter <reiter.christoph@gmail.com>

pkgbase=cppdap
pkgname=("cppdap")
_pkgver=1.58.0-a
pkgver=${_pkgver/-/}
pkgrel=3
pkgdesc="C++ library for the Debug Adapter Protocol"
arch=(i686 x86_64)
url='https://github.com/google/cppdap'
msys2_repository_url='https://github.com/google/cppdap'
license=('spdx:Apache-2.0')
depends=(
  "jsoncpp"
  "gcc-libs"
)
makedepends=(
  "gcc"
  "cmake"
  "ninja"
  "jsoncpp-devel"
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/google/cppdap/archive/dap-${_pkgver}.tar.gz"
        "https://github.com/google/cppdap/commit/6a3cc9a8.patch"
        "0001-fix-dll-location.patch")
sha256sums=('5d35ca5db78570b6bef698e3365f79bd82a4f78e8393546387f78d7bdb2a2a08'
            '7c1bed285d8bb2400ae46def282a4736b9afcb74bb3e96663fac97b73dea3cb4'
            '36e42efb7abf648211af7b75d02993ac7a227f004de0ad1803dc40e67468517a')

prepare() {
  cd "${srcdir}/${pkgname}-dap-${_pkgver}"

  patch -p1 < "${srcdir}/6a3cc9a8.patch"
  patch -p1 < "${srcdir}/0001-fix-dll-location.patch"
}

build() {
  mkdir -p "${srcdir}/build-${CARCH}" && cd "${srcdir}/build-${CARCH}"

  declare -a extra_config
  if check_option "debug" "n"; then
    extra_config+=("-DCMAKE_BUILD_TYPE=Release")
  else
    extra_config+=("-DCMAKE_BUILD_TYPE=Debug")
  fi

  cmake \
    -GNinja \
    -DCMAKE_INSTALL_PREFIX=/usr \
    "${extra_config[@]}" \
    -DCPPDAP_USE_EXTERNAL_JSONCPP_PACKAGE=ON \
    -DBUILD_SHARED_LIBS=ON \
    ../${pkgname}-dap-${_pkgver}

  cmake --build .
}

package() {
  cd "${srcdir}/build-${CARCH}"

  DESTDIR="${pkgdir}" cmake --install .

  install -Dm644 "${srcdir}/${pkgname}-dap-${_pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


================================================
FILE: crosstool-ng/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

pkgname="crosstool-ng"
pkgver=1.29.0
pkgrel=1
pkgdesc="A cross-platform open-source toolchain system"
arch=('i686' 'x86_64')
url="http://www.crosstool-ng.org/"
msys2_repository_url='https://github.com/crosstool-ng/crosstool-ng'
msys2_references=(
  'archlinux: crosstool-ng'
  'aur:' # ignore crosstool-ng-git
  'gentoo: sys-devel/crosstool-ng'
)
license=("spdx:MIT")
depends=(
  "libintl"
  "ncurses"
)
makedepends=(
  "autoconf"
  "automake"
  "autotools"
  "binutils"
  "bison"
  "bsdunzip"
  "flex"
  "gcc"
  "gettext-devel"
  "git"
  "gperf"
  "help2man"
  "ncurses-devel"
  "patch"
  "texinfo"
  "wget"
  "xz"
)
options=('staticlibs' 'strip')
source=(
  "http://crosstool-ng.org/download/crosstool-ng/${pkgname}-${pkgver}.tar.xz"
  "0001-Modify-config-to-support-correct-Mingw64-Triplet-Nam.patch"
)
noextract=("${pkgname}-${pkgver}.tar.xz")
sha256sums=('1e0c5efcf2af674993b74a1783fe78727c8d34b500ebab07eb1bb0a45c8fcc87'
            '6d470e518609df696f76c1ba57ce278254c80ba7b33705ef8e45c7d36a23c493')

prepare() {
  [[ -d ${srcdir}/${pkgname}-${pkgver} ]] && rm -rf ${srcdir}/${pkgname}-${pkgver}
  bsdtar -xf ${srcdir}/${pkgname}-${pkgver}.tar.xz -C ${srcdir} || bsdtar -xf ${srcdir}/${pkgname}-${pkgver}.tar.xz -C ${srcdir}

  cd "${srcdir}/${pkgname}-${pkgver}"

  patch -Np1 -i "${srcdir}/0001-Modify-config-to-support-correct-Mingw64-Triplet-Nam.patch"

  ./bootstrap
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  PATH="${srcdir}/bin:$PATH" ./configure \
    --build=${CHOST} \
    --prefix=/usr

  PATH="${srcdir}/bin:$PATH" make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
}


================================================
FILE: cscope/PKGBUILD
================================================
# Maintainer: Jo�o Guerra <joca.bt@gmail.com>

pkgname=cscope
pkgver=15.9
pkgrel=3
pkgdesc="A tool for browsing source code"
arch=("i686" "x86_64")
url="https://cscope.sourceforge.io/"
msys2_references=(
  "cpe: cpe:/a:cscope:cscope"
)
license=('spdx:BSD-3-Clause')
depends=('ncurses')
makedepends=("ncurses-devel" 'autotools' 'gcc')

_patches=(
  0001-cscope-Fixes-detecting-of-HAVE_SIGSETJMP-in-cygwin.patch
)

source=("https://sourceforge.net/projects/cscope/files/${pkgname}/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        ${_patches[@]})
sha256sums=('c5505ae075a871a9cd8d9801859b0ff1c09782075df281c72c23e72115d9f159'
            '6b6cbda9cb77c7c486559b60b2ce57489edba75caae7f7dacc8e588d6dd29988')

prepare () {
  cd "${pkgname}-${pkgver}"

  for patch in "${_patches[@]}"; do
    msg2 "Patching with ${patch}"
    patch -Nbp1 -i "${srcdir}/${patch}"
  done

  sed -i 's|/usr/local/lib/cs|/usr/lib/cs|' contrib/ocs
}

build () {
  cd "${pkgname}-${pkgver}"
  ./configure --prefix=/usr \
              --build=${CHOST} \
              --host=${CHOST}
  make
}

package () {
  cd "${pkgname}-${pkgver}"
  make prefix="${pkgdir}/usr" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


================================================
FILE: ctags/PKGBUILD
================================================
# Maintainer: João Guerra <joca.bt@gmail.com>

pkgname="ctags"
pkgver="6.2.1"
pkgrel=3
pkgdesc="Generate tag files for source code"
arch=("i686" "x86_64")
url="https://ctags.io/"
msys2_repository_url='https://github.com/universal-ctags/ctags'
msys2_references=(
  "cpe: cpe:/a:exuberant_ctags_project:exuberant_ctags"
)
license=('spdx:GPL-2.0-or-later')
depends=('libiconv' 'libpcre2_8' 'jansson' 'libxml2' 'libyaml')
makedepends=('autotools' 'gcc' 'git' 'libiconv-devel' 'jansson-devel' 'pcre2-devel' 'libxml2-devel' 'libyaml-devel')
source=("git+https://github.com/universal-ctags/ctags.git#tag=v$pkgver")
sha256sums=('5d5f2f091ee702c47f054d4e91aee86e34edf77d015e58b2000cfa717bdd66b9')

build () {
  cd "${pkgname}"
  ./autogen.sh
  ./configure --prefix=/usr \
              --enable-macro-patterns \
              --with-readlib
  make
}

package () {
  cd "${pkgname}"
  make prefix="${pkgdir}/usr" install
  install -Dm0644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


================================================
FILE: curl/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgbase=curl
pkgname=('curl' 'libcurl' 'libcurl-devel')
pkgver=8.23.0
pkgrel=2
pkgdesc="Multi-protocol file transfer utility"
arch=('i686' 'x86_64')
url="https://curl.se/"
msys2_repository_url="https://github.com/curl/curl"
msys2_references=(
  "cpe: cpe:/a:curl:curl"
  "cpe: cpe:/a:curl:libcurl"
  "cpe: cpe:/a:haxx:curl"
  "cpe: cpe:/a:haxx:libcurl"
  "cpe: cpe:/a:libcurl:libcurl"
)
license=('spdx:MIT')
depends=('ca-certificates')
makedepends=('brotli-devel' 'libidn2-devel' 'autotools' 'libnghttp3-devel' 'libngtcp2-devel'
             'libunistring-devel' 'libnghttp2-devel' 'libpsl-devel' 'libssh2-devel' 'openssl-devel' 'zlib-devel' 'libzstd-devel' 'gcc')
source=("https://github.com/curl/curl/releases/download/${pkgbase}-${pkgver//./_}/${pkgbase}-${pkgver}.tar.xz"{,.asc}
        0001-wcurl-force-cygwin-curl.patch)
sha256sums=('8dadd7d2536a314f982ad05a651b713f426bf7d02cc2c76cffb9796f2218e6c5'
            'SKIP'
            '2dc51428fac6c2332682e61f5c6b30be0f22217f66ea6e272842abe0559278a9')
validpgpkeys=('27EDEAF22F3ABCEB50DB9A125CC908FDB71E12C2')   # Daniel Stenberg

prepare() {
  cd "${pkgname}-${pkgver}"
  patch -p1 -i ${srcdir}/0001-wcurl-force-cygwin-curl.patch

  autoreconf -fiv
}

build() {
  cd "${pkgname}-${pkgver}"

  declare -a extra_config
  if check_option "debug" "y"; then
    extra_config+=("--enable-debug")
  fi

  ./configure \
    --build=${CHOST} \
    --prefix=/usr \
    --enable-shared \
    --enable-static \
    "${extra_config[@]}" \
    --enable-optimize \
    --enable-ipv6 \
    --disable-ares \
    --with-brotli \
    --without-gssapi \
    --with-libidn2 \
    --without-librtmp \
    --with-libssh2 \
    --with-openssl \
    --with-nghttp3 \
    --with-ngtcp2 \
    --with-zlib \
    --with-libpsl \
    --with-ca-bundle=/usr/ssl/certs/ca-bundle.crt

  make
  make DESTDIR="${srcdir}/dest" install
}

package_curl() {
  depends=('ca-certificates' 'libcurl' 'libnghttp3' 'libngtcp2'
           'libunistring' 'libnghttp2' 'libpsl' 'openssl' 'zlib')
  replaces=('wcurl')
  provides=('wcurl')
  conflicts=('wcurl')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*.exe ${pkgdir}/usr/bin/
  cp ${srcdir}/dest/usr/bin/wcurl ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/usr/share ${pkgdir}/usr/

  install -Dm644 ${srcdir}/${pkgname}-${pkgver}/COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}

package_libcurl() {
  pkgdesc="Multi-protocol file transfer library (runtime)"
  depends=('brotli' 'ca-certificates' 'libidn2' 'libnghttp3' 'libngtcp2'
          'libunistring' 'libnghttp2' 'libpsl' 'libssh2' 'openssl' 'zlib' 'libzstd')
  groups=('libraries')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*.dll ${pkgdir}/usr/bin/
}

package_libcurl-devel() {
  pkgdesc="Libcurl headers and libraries"
  depends=("libcurl=${pkgver}" 'brotli-devel' 'libidn2-devel' 'libnghttp3-devel' 'libngtcp2-devel'
           'libunistring-devel' 'libnghttp2-devel' 'libpsl-devel' 'libssh2-devel' 'openssl-devel' 'zlib-devel')
  options=('staticlibs')
  groups=('development')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*-config ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/
}



================================================
FILE: cvs/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=cvs
pkgver=1.11.23
pkgrel=7
pkgdesc="Concurrent Versions System - a source control system"
arch=('i686' 'x86_64')
license=('spdx:GPL-2.0-or-later')
url="http://cvs.nongnu.org/"
msys2_references=(
  "cpe: cpe:/a:cvs:cvs"
)
depends=('zlib' 'libxcrypt')
makedepends=('groff' 'zlib-devel' 'gcc' 'libxcrypt-devel' 'autotools' 'texinfo')
options=('staticlibs')
source=(https://ftp.gnu.org/non-gnu/cvs/source/stable/${pkgver}/${pkgname}-${pkgver}.tar.bz2
    cvs-1.11.1p1-bs.patch
    cvs-1.11.19-abortabort.patch
    cvs-1.11.19-comp.patch
    cvs-1.11.19-extzlib.patch
    cvs-1.11.19-logmsg.patch
    cvs-1.11.19-netbsd-tag.patch
    cvs-1.11.19-tagname.patch
    cvs-1.11.19-tmp.patch
    cvs-1.11.21-diff-kk.patch
    cvs-1.11.21-diff.patch
    cvs-1.11.21-proxy.patch
    cvs-1.11.21-sort.patch
    cvs-1.11.22-cvspass.patch
    cvs-1.11.22-ipv6-proxy.patch
    cvs-1.11.22-stdinargs.patch
    cvs-1.11.23-Back-port-KeywordExpand-configuration-keyword.patch
    cvs-1.11.23-cve-2010-3846.patch
    cvs-1.11.23-Fix-proxy-response-parser.patch
    cvs-1.11.23-getline64.patch
    cvs-1.11.23-make_make_check_sanity_testing_verbose.patch
    cvs-1.11.23-Pass-server-IP-address-instead-of-hostname-to-GSSAPI.patch
    cvs-1.11.23-remove_undefined_date_from_cvs_1_header.patch
    cvs-1.11.23-sanity.patch
    cvs-1.11.23-doc-Add-mandatory-argument-to-sp.patch
    )
sha256sums=('400f51b59d85116e79b844f2d5dbbad4759442a789b401a94aa5052c3d7a4aa9'
            'cc273d17a8484a350e76f77cdf000090b12acdd9d40149609bb92eb64651cd18'
            '4dfb1b2e70344b44b370a282bd618ff0f0e155472ab89fd6f7ed6359eab329f4'
            '973d2c6682e2e4b9b9a80c0aec7dd436a180adbc06c6ed6914c349627cfb9a6e'
            '0587ac3753d1257fa6d22557fa077178ee1ec004178c0a0348720e8171b1e942'
            'f97ea853f2c7cc6cc0364e1d0ca148be6229c43327417c32a4b253d74bf9fd76'
            'f8e544879d3ca5589c09f56678cd0a5166b727f65ebb4daceaeb70bd700f5f6b'
            '0cf5fa737444344f76c7b361a60e6736ccff7887b5157fb1b2ddd6bd133cc4e5'
            '1ff4ae9d167f5449fbd1c8ae3b489da73b2806df3b3d8795711deffba7856953'
            'd924459e46ea4fb438d0f71b0d87bd528b132bc53224dbfb588b090633f2fea9'
            '70af9380ea697a9ffcca8b33bd3d591ee53e23da250462dd690fca357600fab6'
            '6b73dcc541a9c9358c7436687b1f763c8e84edf2b9cf12eba666a382855a08ba'
            '775feb4094f638bf30a47be5b6e098266879ba6592d15d3694fff9365fb65b2d'
            '2901fd2fd70896fc63b9eb64dc66402b274ed9d2640615fa5c67970816be08ff'
            'ea1ea171a38088e93c0a83e3bfa87ab2d2bd52c888f97613c6e7df597dcdd0d1'
            '5ed4c490d6073b900e9ef5a31de7f4eb916ba50d9404118294d849c2f148f91f'
            'f36491c72ad354cdbcc38aff67352aeae8aaccdbbdc8473381d200b5f6c8a578'
            'c6506d0a5efc7b0cab6415f26e070ec214fb9781fac8d295506f4d0825431a8f'
            'fbd0e7ec4be5547a9443df82f5f00e85f088cfd8cd179bb2d0e23d91a18e0563'
            '9126d7992ace943980ad8a10d5a09aeb6f1eeeb9b921fc796fe31de7b1c220cf'
            '9eeb10fcee6a131210c16978f2eb91fad3e7a8df7fc579bda0ea3a4108c78e1d'
            '78e425726b51c3c18be06b6de0e44de85476a790d5779776569d5415e7602862'
            '887d09d266a796582b046ef36c80792a1b244aea714cd9280f6928cef7dc6698'
            'f661dbd97518b12d63b1cec2f3e6f1ab8219aeddfd1e96e7e505f38ffb04a4b2'
            '30f68fc13474db4468d22fbdbe771b5f107217cdd2513c058e07de8fe7300d01')

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}

  patch -p1 -i ${srcdir}/cvs-1.11.22-cvspass.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-extzlib.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-netbsd-tag.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-abortabort.patch
  patch -p1 -i ${srcdir}/cvs-1.11.1p1-bs.patch
  patch -p1 -i ${srcdir}/cvs-1.11.21-proxy.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-logmsg.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-tagname.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-comp.patch
  patch -p1 -i ${srcdir}/cvs-1.11.19-tmp.patch
  patch -p1 -i ${srcdir}/cvs-1.11.21-diff.patch
  patch -p1 -i ${srcdir}/cvs-1.11.21-diff-kk.patch
  patch -p1 -i ${srcdir}/cvs-1.11.21-sort.patch
  patch -p1 -i ${srcdir}/cvs-1.11.22-ipv6-proxy.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-getline64.patch
  patch -p1 -i ${srcdir}/cvs-1.11.22-stdinargs.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-cve-2010-3846.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-remove_undefined_date_from_cvs_1_header.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-sanity.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-make_make_check_sanity_testing_verbose.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-Back-port-KeywordExpand-configuration-keyword.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-Pass-server-IP-address-instead-of-hostname-to-GSSAPI.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-Fix-proxy-response-parser.patch
  patch -p1 -i ${srcdir}/cvs-1.11.23-doc-Add-mandatory-argument-to-sp.patch
  autoreconf -vfi

  #patch -Np1 < ../cvs-1.11.19-extzlib.patch
  #patch -Np1 < ../cvs-1.11.23-getline64.patch
  # CVE-2010-3864, https://www.redhat.com/security/data/cve/CVE-2010-3846.html
  #patch -Np1 < ../cvs-1.11.23-cve-2010-3846.patch

  sed -i -e 's/AM_CONFIG_HEADER/AC_CONFIG_HEADERS/' configure.in
  find . -name Makefile.am | xargs sed -i -e 's/^INCLUDES/AM_CPPFLAGS/'
  AUTOMAKE='automake --add-missing' autoreconf
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  unset EDITOR VISUAL
  export CFLAGS="${CFLAGS} -std=gnu17"

  ./configure --prefix=/usr
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install
  rm "${pkgdir}"/usr/share/info/dir
}


================================================
FILE: cygnative/PKGBUILD
================================================
# Maintainer: Orgad Shaneh <orgads@gmail.com>

_realname=cygnative
pkgname="${_realname}"
pkgver=r9.2cbf760
pkgrel=2
pkgdesc="A wrapper for cygwin programs which call native Win32 programs with stdin and/or stdout handle redirected"
arch=('i686' 'x86_64')
license=('spdx:MIT')
makedepends=('gcc')
url="https://github.com/davidecolombo/cygnative"
msys2_repository_url='https://github.com/davidecolombo/cygnative'
_commit="2cbf7602ebe94d0c948474b59d47bb746f041587"
source=("${_realname}"::"git+https://github.com/davidecolombo/cygnative#commit=${_commit}")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname}
  printf "r%s.%s" $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

package() {
  cd "${srcdir}/${_realname}"
  mkdir -p "${pkgdir}/usr/bin"
  gcc -O2 -o "${pkgdir}/usr/bin/cygnative" cygnative.c
}


================================================
FILE: cygrunsrv/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

pkgname=cygrunsrv
pkgver=1.65
pkgrel=1
pkgdesc="${pkgname} is a windows services tool"
_realname=cygrunsrv
arch=('i686' 'x86_64')
url="https://cygwin.org/"
msys2_repository_url='https://sourceware.org/git/cygwin-apps/cygrunsrv'
license=('spdx:GPL-3.0-or-later')
makedepends=('gcc' 'git' 'autotools')
source=(${pkgname}-${pkgver}::git+https://sourceware.org/git/cygwin-apps/${pkgname}.git#tag=rel${pkgver//./-}
        msysize.patch)
sha256sums=('2b84cc5cafda5b33ec8bed7a482ebbd136a710b36f4fa713340083c9e0689ad5'
            'fa01c51f6030f5249fafa10413cd2ae5dac86d127e715dd5aabde72eb43db846')

prepare(){
  cd ${pkgname}-${pkgver}
  patch -p1 -i ${srcdir}/msysize.patch

  autoreconf -fi
}

build() {

  mkdir -p "${srcdir}/build-${CHOST}"
  cd "${srcdir}/build-${CHOST}"

  export MSYSTEM=CYGWIN
  ../${pkgname}-${pkgver}/configure \
    --prefix=/usr \
    --build=${CHOST} \
    --host=${CHOST} \
    --target=${CHOST}

  make
}

package() {
  cd "${srcdir}/build-${CHOST}"
  make DESTDIR="${pkgdir}" install
}


================================================
FILE: cygutils/PKGBUILD
================================================
# Maintainer: Jeremy Drake <github@jdrake.com>

pkgname=cygutils
# it sucks, but upstream adds features in packaging patches, so treat
# their -4 as a .4 so we can have our own pkgrel
pkgver=1.4.17.4
_realpkgver=${pkgver%.*}
pkgrel=1
pkgdesc="${pkgname} is a collection of simple utilities"
arch=('i686' 'x86_64')
url="https://cygwin.org/"
msys2_repository_url='https://sourceware.org/git/cygwin-apps/cygutils'
license=('spdx:GPL-3.0-or-later')
depends=('gcc-libs' 'popt' 'libiconv' 'libintl')
makedepends=('gcc'
             'gettext-devel'
             'git'
             'libiconv-devel'
             'autotools'
             'popt-devel')
conflicts=('winln')
replaces=('winln')
provides=('winln')
_commit='a804501b8c33c55a45a87b6e505b4e5db41e4f2f'
source=("${pkgname}-${_realpkgver}::git+https://sourceware.org/git/cygwin-apps/${pkgname}.git#commit=${_commit}"
        "cygutils-1.4.17-4.src.patch"
        "lssparse-support-check.patch")
sha256sums=('35ad70ebebd40cafc1bf7a87d308ad658e48f65462bf641241d75f95edd50abd'
            '07d8184f5ed63c085450f9e27ca4a7d2e86d9ef7a6a23a2da20fe120f163668b'
            '6170756c292a606fcf1876a2bd57ecb72262e4c1062132874be623d8de9233af')

prepare(){
  cd ${pkgname}-${_realpkgver}

  patch -Nbp1 -i "${srcdir}/cygutils-1.4.17-4.src.patch"
  patch -Nbp1 -i "${srcdir}/lssparse-support-check.patch"

  autoreconf -fi
}

build() {
  mkdir -p "${srcdir}/build-${CHOST}"
  cd "${srcdir}/build-${CHOST}"

  CXXFLAGS+=" -std=gnu++14"

  export MSYSTEM=CYGWIN
  ../${pkgname}-${_realpkgver}/configure \
    --prefix=/usr \
    --build=${CHOST} \
    --host=${CHOST} \
    --target=${CHOST}

  make
}

package() {
  cd "${srcdir}/build-${CHOST}"
  make DESTDIR="${pkgdir}" install

  install -Dm644 "${srcdir}/${pkgname}-${_realpkgver}/COPYING" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


================================================
FILE: cyrus-sasl/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=(cyrus-sasl libsasl libsasl-devel)
_basever=2.1.28
pkgver=${_basever}
pkgrel=7
pkgdesc="Cyrus Simple Authentication Service Layer (SASL) library"
arch=('i686' 'x86_64')
url="https://www.cyrusimap.org/sasl/"
msys2_repository_url="https://github.com/cyrusimap/cyrus-sasl"
msys2_references=(
  "cpe: cpe:/a:carnegie_mellon_university:cyrus-sasl"
  "cpe: cpe:/a:cyrus:sasl"
  "cpe: cpe:/a:cyrusimap:cyrus-sasl"
)
license=('spdx:LicenseRef-cyrus-sasl')
groups=('sys-utils')
makedepends=('heimdal-devel' 'openssl-devel' 'libsqlite-devel' 'libxcrypt-devel' 'libserf-devel' 'autotools' 'gcc')
options=('emptydirs' 'strip' '!makeflags')
source=(https://github.com/cyrusimap/cyrus-sasl/releases/download/cyrus-sasl-2.1.28/cyrus-sasl-2.1.28.tar.gz{,.sig}
        01-fix-plugin-ext.patch
        03-fix-plugins.patch
        09-digest-md5-Remove-annoying-debug-message.patch
        https://github.com/cyrusimap/cyrus-sasl/commit/c3ccead6ee3773f624708ca22be41292cd5ce557.patch
        https://github.com/cyrusimap/cyrus-sasl/commit/79bce416883cab6dc45151575f2a66dc181c67e4.patch
        https://github.com/cyrusimap/cyrus-sasl/commit/5e4395aaf4d91aba66649c9915e38d343d000ef7.patch
        https://github.com/cyrusimap/cyrus-sasl/commit/899522d8d8b72ce2d22a767784dd939bb7771671.patch)
sha256sums=('7ccfc6abd01ed67c1a0924b353e526f1b766b21f42d4562ee635a8ebfc5bb38c'
            'SKIP'
            '3567f22ee5f4dc4174c4d47b10287f84992fb3dee8fd5fa9e5cbb34541b99b9f'
            '62fca7407d288e021fac6fed47d8a94ef2775c257ddcb79071428fe7719485f5'
            '8eec9903e048bf01633df93cea505a8f77aceb933dd5609fd85602c0c0baa5c0'
            'd15cf4009ecb9930749494bbe23a140a72add3a9d7d923df9af9012c6bccc194'
            '31cc772fead1e5741db10b911a4d6202714388c35ed20e1e5c0d61364b584275'
            '2018809e3f19b4abd3aba8eeb9048d14935015486890a1c44009679471324bbe'
            '349000752ca37276232fc908b55a401e92d8cf53af2a3148b6c59062a6e131a7')
validpgpkeys=(
  '829F339F8C296FE80F409D93E3D7C118C7B9F46A'  # Partha Susarla <mail@spartha.org>
  'DEA1999F0CDB1AAEBA001E0DBEE3E3B4D2F06546'  # Quanah Gibson-Mount <quanah@fast-mail.org>
)

prepare() {
  cd ${srcdir}/${pkgname}-${_basever}

  patch -p1 -i ${srcdir}/01-fix-plugin-ext.patch
  patch -p1 -i ${srcdir}/03-fix-plugins.patch
  patch -p1 -i ${srcdir}/09-digest-md5-Remove-annoying-debug-message.patch
  # https://github.com/cyrusimap/cyrus-sasl/pull/873
  patch -p1 -i ${srcdir}/c3ccead6ee3773f624708ca22be41292cd5ce557.patch
  # https://github.com/cyrusimap/cyrus-sasl/pull/873
  patch -p1 -i ${srcdir}/79bce416883cab6dc45151575f2a66dc181c67e4.patch
  # https://github.com/cyrusimap/cyrus-sasl/pull/873
  patch -p1 -i ${srcdir}/5e4395aaf4d91aba66649c9915e38d343d000ef7.patch
  patch -p1 -i ${srcdir}/899522d8d8b72ce2d22a767784dd939bb7771671.patch

  autoreconf -fiv
}

build() {
  cd ${srcdir}/${pkgname}-${_basever}

  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --build=${CHOST} \
    --host=${CHOST} \
    --with-configdir=/etc/sasl2:/etc/sasl:/usr/lib/sasl2 \
    --with-plugindir=/usr/lib/sasl2 \
    --disable-static --enable-shared \
    --enable-sql \
    --with-sqlite3=/usr \
    --disable-ldapdb \
    sasl_cv_dlsym_adds_uscore=yes

  make CFLAGS="$CFLAGS -Wall -Wno-char-subscripts -Wno-unused -Wno-pointer-sign -Wno-uninitialized"
}

package_cyrus-sasl() {
  depends=("libsasl=${pkgver}")
  pkgdesc="Cyrus saslauthd SASL authentication daemon"

  cd cyrus-sasl-${_basever}/saslauthd
  make DESTDIR="${pkgdir}" install

  install -m755 -d "${pkgdir}/usr/share/licenses/cyrus-sasl"
  cp -pR ../COPYING "${pkgdir}/usr/share/licenses/cyrus-sasl/"
}

package_libsasl() {
  groups=('libraries')
  options=('emptydirs' 'strip' 'libtool')
  pkgdesc="Cyrus Simple Authentication Service Layer (SASL) Library"
  depends=('libxcrypt' 'libopenssl' 'heimdal-libs' 'libsqlite')

  cd cyrus-sasl-${_basever}
  for dir in include lib sasldb plugins utils; do
    pushd ${dir}
    make DESTDIR="${pkgdir}" install
    popd
  done
  rm -f "${pkgdir}"/usr/lib/sasl2/*.a
  rm -f "${pkgdir}"/usr/lib/sasl2/*.la
  rm -f "${pkgdir}"/usr/lib/*.a
  rm -f "${pkgdir}"/usr/lib/*.la
  rm -rf "${pkgdir}"/usr/include
  install -m755 -d "${pkgdir}/usr/share/licenses/libsasl"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/libsasl/"
}

package_libsasl-devel() {
  pkgdesc="Libsasl headers and libraries"
  groups=('development')
  depends=("libsasl=${pkgver}" 'heimdal-devel' 'openssl-devel' 'libsqlite-devel' 'libxcrypt-devel')
  options=('strip' 'libtool')

  cd cyrus-sasl-${_basever}
  for dir in include lib; do
    pushd ${dir}
    make DESTDIR="${pkgdir}" install
    popd
  done
  rm -rf "${pkgdir}"/usr/bin
}


================================================
FILE: cython/PKGBUILD
================================================
# Maintainer: Alexandre Ferreira < alex.jorge.m [at] gmail.com >

_realname=cython
pkgbase=${_realname}
pkgname=('cython')
pkgver=3.3.1
pkgrel=2
pkgdesc='C-Extensions for Python'
arch=('i686' 'x86_64')
url='https://cython.org/'
msys2_repository_url='https://github.com/cython/cython'
msys2_changelog_url='https://cython.readthedocs.io/en/latest/src/changes.html'
msys2_references=(
  "archlinux: cython"
  "cygwin: python-cython"
  "gentoo: dev-python/cython"
  "purl: pkg:pypi/cython"
)
license=('spdx:Apache-2.0')
depends=('python')
conflicts=('cython0')
makedepends=(
  'gcc'
  'python-devel'
  "python-setuptools"
  "python-build"
  "python-installer"
)
source=("${_realname}-${pkgver}.tar.gz"::"https://github.com/cython/cython/archive/${pkgver}.tar.gz")
sha256sums=('1d06ac164c7b7982f95e48bfbbd15466ce55dfb77ec5349a9628ef342093959f')

build() {
  cd "${_realname}-${pkgver}"

  # XXX: this changes the build path, and thus the DLL base address
  MSYSTEM=CYGWIN
  python -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd "${_realname}-${pkgver}"

  python -m installer --destdir="${pkgdir}" dist/*.whl
}


================================================
FILE: dash/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=dash
pkgver=0.5.13.5
pkgrel=1
pkgdesc="A POSIX compliant shell that aims to be as small as possible"
arch=('i686' 'x86_64')
url="http://gondor.apana.org.au/~herbert/dash/"
msys2_repository_url="https://git.kernel.org/pub/scm/utils/dash/dash.git"
msys2_references=(
  "cpe: cpe:/a:dash:dash"
  "gentoo: app-shells/dash"
)
license=('spdx:BSD-3-Clause AND GPL-2.0-or-later')
depends=('grep' 'sed' 'filesystem')
makedepends=('autotools' 'gcc')
install=dash.install
source=("http://gondor.apana.org.au/~herbert/dash/files/${pkgname}-${pkgver}.tar.gz")
sha256sums=('40090101a2a491f13e901d3d48e90414f26634628b9bfff35ff540363c227a7d')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr \
      --bindir=/usr/bin \
      --mandir=/usr/share/man \
      --exec-prefix="" \
      CFLAGS='-O2 -static-libgcc'
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install

  # license
  install -m644 -D COPYING ${pkgdir}/usr/share/licenses/${pkgname}/COPYING

  ln -s ${pkgdir}/usr/bin/{d,}ash.exe
  ln -s ${pkgdir}/usr/share/man/man1/{d,}ash.1
}


================================================
FILE: db/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

pkgname=('db' 'libdb' 'libdb-devel' 'db-docs')
pkgver=6.2.32
pkgrel=6
pkgdesc="The Berkeley DB embedded database system"
url="https://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index.html"
msys2_references=(
  "cpe: cpe:/a:oracle:berkeley_db"
)
license=('spdx:AGPL-3.0-or-later')
arch=('i686' 'x86_64')
depends=('sh')
makedepends=('autotools' 'gcc')
source=(http://download.oracle.com/berkeley-db/db-${pkgver}.tar.gz)
options=('!makeflags')
sha256sums=('a9c5e2b004a5777aa03510cfe5cd766a4a3b777713406b02809c17c8e0e7a8fb')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cd dist
  ac_macrodir=aclocal libtoolize --copy --force --install
  ./s_config
}

build() {
  cd "${srcdir}"/$pkgname-${pkgver}/build_unix

  CFLAGS="$CFLAGS -Wno-incompatible-pointer-types " \
  ../dist/configure \
    --prefix=/usr \
    --build=${CHOST} \
    --enable-compat185 \
    --enable-shared \
    --enable-static \
    --enable-dynamic \
    --enable-cxx \
    --enable-dbm \
    --disable-java \
    --disable-tcl \
    --disable-test
  make
  make DESTDIR=${srcdir}/dest docdir=/usr/share/doc/db/html emode=755 fmode=644 install
}

package_db() {
  depends=(libdb=$pkgver)
  groups=('Database')

  mkdir -p ${pkgdir}/usr/{bin,share}

  cp -f ${srcdir}/dest/usr/bin/*.exe ${pkgdir}/usr/bin/
}

package_libdb() {
  depends=('gcc-libs')
  groups=('libraries')

  mkdir -p ${pkgdir}/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*.dll ${pkgdir}/usr/bin/
}

package_libdb-devel() {
  pkgdesc="libdb headers and libraries"
  options=('staticlibs')
  depends=("libdb=${pkgver}")
  groups=('development')

  mkdir -p ${pkgdir}/usr
  cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/

  # replace unslotted libs with symlinks
  rm -f ${pkgdir}/usr/lib/libdb{_cxx,}.a
  cp -f ${pkgdir}/usr/lib/libdb-${pkgver%.*}.a  ${pkgdir}/usr/lib/libdb.a
  cp -f ${pkgdir}/usr/lib/libdb-${pkgver%.*}.dll.a ${pkgdir}/usr/lib/lib

[... truncated by token budget ...]

