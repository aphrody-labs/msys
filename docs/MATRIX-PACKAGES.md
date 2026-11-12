# Per-package matrix

Generated. `cachy` = a CachyOS PKGBUILD/patch set exists in `$SRC_ROOT/third_party/CachyOS-PKGBUILDS` (source of truth). ISA: upstream MSYS2 builds -march=nocona -O2 (armv8.1-a for clangarm64), see third_party/MSYS2-packages/pacman/makepkg_mingw.d.*.conf; target variants come from `buildsys/makepkg/`.

| pkgbase | repo | envs | LLVM/GCC | cachy | ISA (upstream -> target) |
|---|---|---|---|---|---|
| ack | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ansible | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ansible-core | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| apr | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| apr-util | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| asciidoc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| asciidoctor | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| aspell | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| aspell-de | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| aspell-en | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| atool | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf-archive | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf2.13 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf2.69 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf2.71 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf2.72 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autoconf2.73 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autogen | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.11 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.12 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.13 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.14 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.15 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.16 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.17 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.18 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| automake1.19 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autotools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| autotools-wrappers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| axel | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| base | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| base-devel | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| bash | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| bash-completion | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| bash-preexec | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| bc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| binutils | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| bison | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| breezy | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| brotli | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| btyacc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| busybox | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| bzip2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| c-ares | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ca-certificates | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cargo-c | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cargo-edit | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ccache | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cdecl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cflow | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cgdb | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cjson | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cloc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cmake | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cmake-bootstrap | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cmatrix | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cocom | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| colordiff | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| coreutils | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cpio | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cppdap | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| crosstool-ng | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cscope | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ctags | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| curl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cvs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cygnative | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cygrunsrv | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cygutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cyrus-sasl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| cython | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dash | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| db | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dejagnu | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dialog | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| diffstat | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| diffutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-dsssl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-mathml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-sgml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-sgml31 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-xml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-xsl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docbook-xsl-ns | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| doctest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| docx2txt-rs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dos2unix | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dosfstools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| doxygen | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| dtc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ed | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| editorconfig-vim | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| efitools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| elinks | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| emacs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| enscript | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| etc-update | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| expat | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| expect | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| fcode-utils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| file | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| filesystem | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| findutils | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| fish | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| fisher | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| flex | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| fmt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| fzy | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gawk | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gcc | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gdb | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gdbm | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gengetopt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| genromfs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| getent | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gettext | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gi-docgen | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| git | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| git-crypt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| git-extras | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| git-filter-repo | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| git-flow | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| glib2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| global | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gmp | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gnu-efi | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gnu-netcat | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gnulib-l10n | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gnupg | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gnutls | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gperf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gpgme | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gradle | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| grep | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| groff | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gtest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gtk-doc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| guile | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| guile-mqtt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gyp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| gzip | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| heimdal | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| help2man | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| hexcurse | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| icu | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| idutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| inetutils | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| intltool | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| iperf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| iperf3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| irssi | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| isl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| itstool | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| jansson | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| joe | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| jq | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| jsoncpp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| just | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lcov | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| less | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lftp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libarchive | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libargp | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libassuan | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libatomic_ops | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libblake3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libbsd | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libcbor | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libedit | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libevent | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libffi | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libfido2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libgcrypt | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libgit2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libgpg-error | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libiconv | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libidn | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libidn2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libinih | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libksba | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libmd | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libmicrohttpd | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libpcap | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libpipeline | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libpsl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libqrencode | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libssh | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libssh2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libtasn1 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libtirpc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libtool | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libtre | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libunistring | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libuv | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libwebsockets | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libxcrypt | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libxml2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libxslt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| libyaml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| llvm | extra | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| lndir | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| localepurge | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lua | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| luit | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lynx | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lz4 | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| lzip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lzo2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| lzop | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| m4 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| make | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| man-db | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| man-pages-posix | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| man2html | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| maturin | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mercurial | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| meson | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| meson-python | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-${_basename} | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-3proxy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-4th | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-4ti2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-64tass | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-7zip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-86box | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-a52dec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aalib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aas-sign | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-abinit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-abiword | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-abseil-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-accesskit-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ada_language_server | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ada_spawn | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ada-libfswatch | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ada-url | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ada-xdiff | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-adasat | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ADIOS2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-adobe-source-code-pro-fonts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-adol-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-advancecomp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-adwaita-icon-theme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-adwaita-icon-theme-legacy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aegisub | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ag | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-agar | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-age | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-age-plugin-yubikey | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aichat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-akira | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-alacritty | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-alembic | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-allegro | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-alure | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-alure2 | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-amf-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-amgcl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-amqp-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-anari-sdk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-android-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-angleproject | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ansifilter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-antiword | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-antlr3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-antlr4-runtime-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aom | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-apps-systempreferences | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-appstream | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-appstream-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-apr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-apr-util | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aravis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-argon2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-args | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-argtable | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aria2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aribb24 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ark | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arm-none-eabi-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arm-none-eabi-gcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arm-none-eabi-newlib | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-armadillo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arpack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arrow | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arrow-adbc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arrow-adbc-glib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arrpc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-arturo | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asciidoc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asciidoctor | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asiosdk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asm-lsp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-asmjit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell-de | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell-en | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell-es | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell-fr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aspell-ru | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-assimp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-astyle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-at-spi2-core | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-atkmm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-atkmm-2.36 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-attica | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-atuin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aubio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-audaspace | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-autohotkey | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-autotools | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avogadroapp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avogadrolibs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avr-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avr-gcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avr-libc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-avrdude | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-awf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-auth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-cal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-common | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-compression | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-event-stream | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-http | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-io | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-mqtt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-s3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-c-sdkutils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-checksums | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-crt-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aws-sdk-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-aztecgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-babl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-badvpn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-baobab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-basedpyright | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bcftools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bcg729 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bcunit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bear | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-benchmark | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-benzene | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-biber | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bin2header | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-binaryen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-binutils | mingw | mingw32 mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-binwalk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bitwise | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blake3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blender | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bliss | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blosc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blosc2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-blueprint-compiler | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-boost | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bootloadhid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bottom | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-box2d | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bpmdetect | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-breakpad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-breeze | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-breeze-icons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-brotli | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-brush | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bscan-spi-bitstreams | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bsdfprocessor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-btyacc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-buckygen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bullet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-butler | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bwidget | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bzip2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-bzip3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-c-ares | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-c3c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-c4core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ca-certificates | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cabextract | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cairo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cairomm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cairomm-1.16 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-calceph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-calcmysky | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-calculix-ccx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cantarell-fonts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-capnproto | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-capstone | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-about | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-component | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-create-tauri-app | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-edit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-expand | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-generate | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-leptos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-local-registry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-msrv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-nextest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cargo-tauri | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cas-offinder | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-castxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-catch | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cava | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cbindgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ccache | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cccl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cddlib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cego | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cereal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ceres-solver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cfitsio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cgal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cglm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cgns | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chafa | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-charls | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-check | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chicken | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chipmunk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chmlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chromaprint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-chrono-date | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-civetweb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cjose | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cjson | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clazy | mingw | clang64 clangarm64 | llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clblast | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-CLI11 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clinfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clipper2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cliquer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-clucene | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmake | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmake-bootstrap | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmakelang | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmakerc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmark | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmdpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmocka | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cmr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cninja | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-codeblocks | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-codeblocks-fortranproject | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-codebook-lsp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-codec2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-codelite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cogl | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-asl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-buildtools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-cbc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-cgl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-clp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-coinutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-data-sample | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-mp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coin-or-osi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-collada-dom | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-concurrentqueue | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-confuse | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-connect | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-coordgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-corrade | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-corrosion | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cotp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cowsay | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cp2k | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppcheck | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppcoro | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppdap | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppreference-qt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cpptest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppunit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cpputest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppwinrt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cppzmq | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cpr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-crc32c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-creduce | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-croc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-binutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-clang | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-clang-crt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-clang-headers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-compiler-rt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-crt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-gcc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-headers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-binutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-crt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-gcc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-headers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-windows-default-manifest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-mingwarm64-winpthreads | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-windows-default-manifest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-winpthreads | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cross-zlib | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-crt | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-crypto++ | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-crystal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-csfml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ctags | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ctpl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cuba | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cubature | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cubelib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cubew | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cunit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-curl | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cusp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cvise | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cxxopts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cyrus-sasl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-cython | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-czkawka | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-d-feet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-daala | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-darktable | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dav1d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dav2d | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-db | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dbc_parser_cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dbcsr | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dbus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dbus-c++ | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dbus-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dcadec | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dcmtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dcraw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-delta | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-desktop-file-utils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-devcon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-devil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dftbplus | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dftd4 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dfu-programmer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dfu-util | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dht | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dia | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-difftastic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-diffutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dino | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-directx-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-directxmath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-directxmesh | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-directxtex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-directxtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-discount | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-distorm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-djview | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-djvulibre | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dlfcn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dnscrypt-proxy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dnslookup | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dnssec-anchors | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docbook-dsssl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docbook-mathml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docbook-xml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docbook-xsl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docbook5-xml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docker-compose | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-doctest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-docx2txt-rs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dosbox-staging | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dotslash | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-double-conversion | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-doxygen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-draco | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dragon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dragonbox | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-drmingw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-drogon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dsdp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dtc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dua-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-duckdb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-duktape | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dumb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dust | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dwarfstack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-dxvk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ebook-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eccodes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ecpprog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-edit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-editorconfig-core-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-editrights | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-edyn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-efl | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-efxc2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-egl-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eigen3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-elementary-icon-theme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-elisa | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-elmerfem | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-emacs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-emacs-pdf-tools-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-embree | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-emscripten | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-enca | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-enchant | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-enet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-engauge-digitizer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ensmallen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-enter-tex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-entt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eog-plugins | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-epstool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-esbuild | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eslint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-espeak-ng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-evcxr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-evince | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-exiv2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-expat | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-expresscpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-exprtk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-extra-cmake-modules | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-extremetuxracer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-eza | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-f2c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-f2cblaslapack | mingw | clang64 clangarm64 | llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-faac | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-faad2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fann | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-farstream | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fast_float | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fastfetch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fastgltf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fastjar | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-faudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fcrackzip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fdk-aac | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffcall | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffmpeg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffmpeg-python | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffms2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffnvcodec-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ffts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fftw | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fgsl | mingw | ucrt64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-file | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-filezilla | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-firebird | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flac | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flameshot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flang | mingw | clang64 clangarm64 | llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flann | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flashrom | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flatbuffers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flecs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flexdll | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flickcurl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flif | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-flint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fltk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fltk1.3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fluidsynth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fmt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-folly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fontconfig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fontforge | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fortran-stdlib | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fortune-mod | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fossil | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fox | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fpm | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freealut | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freecad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freeglut | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freeimage | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freerdp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freetds | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-freetype | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-frei0r-plugins | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fribidi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fritzing | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-frontistr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-frozen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fswatch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ftgl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ftxui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fxc2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fzf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-fzssh | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gammaray | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gau2grid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gavl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gcab | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gcc | mingw | mingw32 mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gcovr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdbm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdcm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdk-pixbuf2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdown | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gdu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geany | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geany-plugins | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gedit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gegl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gemini-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-genromfs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geocode-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geographiclib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geoip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geoipupdate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-geos | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gettext | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gexiv2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gf2x | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gflags | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ggml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ghc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ghdl | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ghex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ghostscript | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gi-docgen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-giflib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gimp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ginkgo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-git | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-git-lfs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gitea-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gitg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-github-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gitoxide | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gitu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gitui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gjs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gl2ps | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glade | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glaze | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glbinding | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gles-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glew | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glfw | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glib-networking | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glib2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glibmm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glibmm-2.68 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-global | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-globjects | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glog | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glpk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glsl-optimizer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glslang | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glslviewer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-glycin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gmic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gmime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gmp | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gmp-ecm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gmsh | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatcoll-bindings | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatcoll-core | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatcoll-db | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatdoc | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatformat | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnatstudio | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnome-calculator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnome-common | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnome-sound-recorder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnome-text-editor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnucobol | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnumeric | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnupg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnuplot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnuradio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnustep-back | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnustep-base | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnustep-gui | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnustep-make | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gnutls | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-go | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gobject-introspection | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-godot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-godot-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-goffice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gojq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-goocanvas | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-goxel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gperf | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gpgme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gpgmepp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gphoto2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gplugin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gpr | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gprbuild | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gprbuild-bootstrap | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gptfdisk | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gputils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gram | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-granite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-granite7 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-grantlee | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-graphene | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-graphicsmagick | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-graphite2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-graphviz | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-grep | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gromacs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-groonga | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-grpc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-grype | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsasl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsettings-desktop-schemas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsfonts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsl-lite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gsoap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gspell | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gss | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gssdp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-devtools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-editing-services | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-libav | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-plugins-bad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-plugins-base | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-plugins-good | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-plugins-rs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-plugins-ugly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-python | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gst-rtsp-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gstreamer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk-doc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk-elementary-theme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk-vnc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtk4 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkada | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkdatabox | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkmm-4.0 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkmm3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtksourceview3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtksourceview4 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtksourceview5 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtksourceviewmm3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkspell3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gtkwave | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gumbo-parser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-gxml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hackrf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-handbrake | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-harfbuzz | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-harper | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hayagriva | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hclient | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hdf4 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hdf5 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hdr10plus_tool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-headers | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-heimdall | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-helics | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-helix | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hererocks | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hexchat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hexyl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hicolor-icon-theme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hid-bootloader-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hidapi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hidapitester | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-highfive | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-highlight | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-highs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-highway | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hiredis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hlsl2glsl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-htslib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-http-parser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-httpbin | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hugo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hunspell | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hunspell-en | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hurl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hwloc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hypercorn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hyperfine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hyphen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-hypre | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-i2pd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-icesprog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-icestorm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-icoutils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-icu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-id3lib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ideviceinstaller | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-idevicerestore | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ifcopenshell | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-igraph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-iir | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-imageinfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-imagemagick | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-imath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-img2pdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-iml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-immer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-include-what-you-use | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-indent | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-inja | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-inkscape | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-innex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-innoextract | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-intel-xed | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-irrlicht | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-is_utf8 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-isa-l | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-isl | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-iso-codes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ispc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-itk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-itstool | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-iverilog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ixion | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jack2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jansson | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jaq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jasper | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jbig2dec | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jbigkit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jemalloc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jj | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jkqtplotter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jolt-physics | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jom | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jp2-pixbuf-loader | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jpegoptim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jq-lsp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-js140 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-js153 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-json-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-json-fortran | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-json-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-json-schema-validator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jsoncpp | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jsonnet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jsonrpc-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-judy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-julia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-junitparser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-just | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-jxrlib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-karchive | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kate-wakatime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kbookmarks | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcachegrind | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcmutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcodecs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcolorscheme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcompletion | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kconfig | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kconfigwidgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcontacts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcoreaddons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kcrash | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdbusaddons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kddockwidgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdeclarative | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdeconnect | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdegraphics-mobipocket | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdenlive | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdiagram | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdiff3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdnssd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdoctools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdsingleapplication | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kdstatemachineeditor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-keepassxc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-keepawake | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-keystone | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kfilemetadata | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kglobalaccel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kguiaddons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kholidays | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ki18n | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kicad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kicad-doc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kicad-library | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kiconthemes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kidletime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kimageformats | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kimi-code | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kirigami | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kirigami-addons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kiss_fft | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kitemmodels | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kitemviews | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kjobwidgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-knewstuff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-knotifications | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-knotifyconfig | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-koboldcpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-konsole | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-konversation | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kpackage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kparts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kpeople | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kplotting | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kqtquickcharts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-krita | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-krpc-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kseexpr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kservice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kstatusnotifieritem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ktexteditor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ktextwidgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ktouch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ktx-software | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kunitconversion | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kuserfeedback | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kvazaar | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kwallet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kwidgetsaddons | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kwindowsystem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-kxmlgui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-l-smash | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-labplot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ladspa-sdk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lager | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lal-refactor | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lame | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lammps | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-langkit | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-langkit_support | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lapack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lapce | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lasem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-laszip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lazygit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lcms2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lcov | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ldns | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ledger | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lensfun | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-leocad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-leptonica | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-leptosfmt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lerc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-letos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-level-zero | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-leveldb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lexbor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lfcbase | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lfcxml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lfortran | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lib2geom | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lib3mf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libaacs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libabw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libad9361-iio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libadalang | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libadalang-tools | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libadlmidi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libadwaita | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libaec | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libao | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libarchive | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libaribcaption | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libart_lgpl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libass | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libassuan | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libatomic_ops | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libavif | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libavro | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libb2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libb64 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbacktrace | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbdplus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbluray | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbotan | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbraiding | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbs2b | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libbsdf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libc++ | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcaca | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcacard | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcbor | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcddb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcdio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcdio-paranoia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcdr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcello | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcerf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libclc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcloudproviders | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcmis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libconfig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libconfini | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libcue | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdatrie | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdazzle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdca | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libde265 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdeflate | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdicom | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdiscid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdispatch | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdmtx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdovi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdsm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdvbpsi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdvdcss | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdvdnav | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdvdread | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libdwarf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libe-book | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libebml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libebur128 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libelf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libepoxy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libepubgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liberime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libetonyek | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libevent | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libexif | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libexodus | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libexttextcat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libffi | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfido2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfilezilla | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfixmath | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfreehand | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfreexl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libftdi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libfyaml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgadu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgcrypt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgda | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgdiplus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgedit-amtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgedit-gfls | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgedit-gtksourceview | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgedit-tepl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgee | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgeotiff | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgit2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgit2-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgoom2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgovirt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgpg-error | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgphoto2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgpr | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgridxc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgsf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libguess | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgusb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgweather | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libgxps | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libhandy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libharu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libhdr10plus-rs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libheif | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libhomfly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libical | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libiconv | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libicsneo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libid3tag | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libidl2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libidn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libidn2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libieee1284 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libiff | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libiio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libilbc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libilbm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libimagequant | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libimobiledevice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libimobiledevice-glue | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libinih | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libint2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libipt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libiptcdata | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libirecovery | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libjaylink | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libjpeg-turbo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libjxl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libkexiv2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libkml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libkqueue | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libksba | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblangtag | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblastfm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblc3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblcf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblktlang | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liblqr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libluv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmad | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmangle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmariadbclient | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmatroska | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmaxminddb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmbd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmediainfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmfx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmicrodns | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmicrohttpd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmikmod | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmimic | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libminpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmodbus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmodplug | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmongocrypt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmongoose | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmowgli | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmpack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmpcdec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmpeg2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmspack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmspub | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmsym | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmwaw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmypaint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libmysofa | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnatpmp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnegf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnfs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnice | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnotify | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnova | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnpupnp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libntlm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libnumbertext | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liboauth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libobjc2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libodfgen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libogg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libomemo-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libopenmpt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libopenmpt-modplug | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libopusenc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liboqs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-liborigin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libosmpbf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libosmscout | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libotr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libp11 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpagemaker | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpanel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpaper | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpcap | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpeas | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpeas2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libplacebo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libplacebo-demos | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libplist | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpqxx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libprojectm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libproxy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpsl | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpsml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libpst | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libqalculate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libqxp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libraqm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librasterlite2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libraw | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librdata | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librdkafka | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libreplaygain | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libresidfp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libresprite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libressl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librevenge | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librist | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librsvg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librsync | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-librttopo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsamplerate | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsass | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsbml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsbsms | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsecret | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libserdes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libserialport | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libshout | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libshumate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsidplayfp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsigc++ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsigc++-3.0 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsignal-protocol-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsigsegv | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsixel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libslirp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsmi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsndfile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsodium | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsoundio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsoup3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsoxr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspatialaudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspatialite | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspectre | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspelling | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspiro | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libspng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsquish | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsrtp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libssh | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libssh2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libstaroffice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libsystre | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtasn1 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtermkey | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libthai | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtheora | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtiff | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtimidity | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtomcrypt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtommath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtool | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtorrent-rasterbar | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libtre | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libu2f-emu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libuhd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libultrahdr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libunibreak | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libunifex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libuninameslist | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libunistring | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libusb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libusb-compat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libusb-win32 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libusbmuxd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libutf8proc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libutp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libuv | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libva | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libva-utils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvips | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvirt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvirt-glib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvisio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvmime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvncserver | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvoikko | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvorbis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvpl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvpx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libvterm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwebm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwebp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwebsockets | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwmf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwpd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwpg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libwps | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxisf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxlsxwriter | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxml++ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxml++-5.0 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxml2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxmlb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxmp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxslt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libxsmm | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libyaml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libyuv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libzen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libzip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-libzmf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lilv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lite-xl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-litehtml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-live-chart | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-live-chart-gtk3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-live-media | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-live-photo-conv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-llama.cpp | mingw | ucrt64 clang64 clangarm64 mingw64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-llama.qtcreator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lldb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lldb-mi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-llvm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-llvm-openmp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-llvm22 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lmdb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lmdbxx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-log4cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-log4cxx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lokalize | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lpsolve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lrcalc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lrdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lrs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lsd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lsp-dsp-lib | mingw | mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-bitop | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-cjson | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-lgi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-lpeg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-lsqlite3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-luarocks | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-mpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua-winapi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua51 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua53 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lua54 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-luafilesystem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-luajit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-luanti | mingw | clang64 clangarm64 | llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lumis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lv2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lz4 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-lzo2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-m4ri | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-m4rie | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-m68k-apple-macos-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-maeparser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-magnum | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-magnum-integration | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-magnum-plugins | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-make | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-make-ls | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-manifold | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-manim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mapbox-earcut | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-MapServer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mariadb-clients | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-marisa | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-markdown | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-markdown-oxide | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mathgl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mathilda | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mathjax2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-matio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-maturin | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-maxflow | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mbedtls | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mcfgthread | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mcpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mcqd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mctc-lib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-md4c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdBook | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdbook-admonish | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdbook-mermaid | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdbook-pikchr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdcat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdds | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mdloader | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meanwhile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mecab | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-med | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mediainfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meilisearch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meld3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mesa | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meshoptimizer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meson | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-meson-python | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mesonlsp | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-metis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mfem | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mgba | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mhook | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-micro | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-microsoft-GSL | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mimalloc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-MinHook | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-miniaudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minidump-stackwalk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minio-client | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minio-docs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-miniserve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minisign | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-miniupnpc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-minizip-ng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mkvtoolnix | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mlir | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mlpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mlt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mman-win32 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mmtf-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-moab | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mold | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-molequeue | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mongo-c-driver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mono | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mono-basic | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-moor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mopac | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mosquitto | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpc | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpdecimal | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpfi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpfr | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpg123 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mpv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mruby | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mscgen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msgpack-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msgpack-cxx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msitools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msmpi | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msmtp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-msolve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mstore | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mtex2MML | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mtn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mtools | mingw | mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mujs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-multicharge | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mumps | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-munt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-munt-mt32emu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-muon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-muparser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mupdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mypaint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mypaint-brushes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mypaint-brushes2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mypy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-mythes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nana | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nanoarrow | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nanobind | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nanodbc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nanogui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nanovg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nasm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nativefiledialog-extended | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nauty | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ncurses | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-neocmakelsp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-neon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-neovim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-neovim-qt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nerd-fonts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-netcdf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-netcdf-cxx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-netcdf-fortran | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nettle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nettle3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-newton-dynamics | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nextpnr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nfft | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ng-log | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nghttp2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nghttp3 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ngraph-gtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ngspice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ngtcp2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nicotine+ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nim | mingw | mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nimble | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ninja | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nlohmann-json | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nlopt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nodeeditor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nodejs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nodejs-neovim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nodejs-webpack-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-notcurses | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-notepad++ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-npth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nsis | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nsis-nsisunz | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nspr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nss | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nsync | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ntl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ntldd | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-nuspell | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oatpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-objfw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ocaml | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oce | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ocrmypdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-octave | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ode | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-odpi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-odt2txt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ogre3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oh-my-posh | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ois | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-okular | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ollama | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-onednn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-onefetch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oniguruma | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-onnx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-onnxruntime | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-open62541 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openai-codex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openapv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openbabel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openblas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencascade | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencl-clhpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencl-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencl-icd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencollada | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencolorio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencore-amr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencsg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opencv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openexr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openfa | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openFPGALoader | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opengl-man-pages | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openh264 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openimagedenoise | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openimageio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openjpeg2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openjph | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openldap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openlibm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openocd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openpgl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openscad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-OpenSceneGraph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openshadinglanguage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openslide | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openssl | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opensubdiv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opentimelineio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openturns | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openvdb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openvr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-openxr-sdk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-optipng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opus-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-opusfile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oqsprovider | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-orc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-orcus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgbullet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgearth | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgocean | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgQt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgqtquick | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osgworks | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osm-gps-map | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ossia-score | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-osslsigncode | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-oxipng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-p11-kit | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-paho.mqtt.c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-panache | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-panamax | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pango | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pangomm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pangomm-2.48 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-paper-terminal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-papers | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-paraview | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pari | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pari-galdata | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pari-galpol | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pari-seadata | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pari-seadata-small | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-parmetis | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-parsec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-partio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pastix | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pcaudiolib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pcre | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pcre2 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdcurses | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdf2djvu | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdf2svg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdfarranger | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pdfpc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pegtl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pelican | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-${_realname/_/-} | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-${_realname/_/-} | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Algorithm-Diff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Alien-Build | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Alien-Build-Plugin-Download-GitLab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Alien-Libxml2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Authen-SASL | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-autovivification | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-B-Hooks-EndOfScope | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Business-ISBN | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Business-ISBN-Data | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Business-ISMN | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Business-ISSN | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Capture-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Class-Accessor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Class-Data-Inheritable | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Class-Inspector | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Class-Load | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Class-Singleton | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Clone | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Clone-Choose | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Config-AutoConf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Convert-BinHex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-CPAN-Requirements-Dynamic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Data-Compare | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Data-Dump | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Data-OptList | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Data-Uniqid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime-Calendar-Julian | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime-Format-Builder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime-Format-Strptime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime-Locale | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DateTime-TimeZone | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-DBI | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Devel-Cover | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Devel-StackTrace | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Digest-SHA | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Dist-CheckConflicts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Encode-compat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Encode-EUCJPASCII | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Encode-HanExtra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Encode-Locale | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Error | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Eval-Closure | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Exception-Class | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Exporter-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-ExtUtils-Config | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-ExtUtils-Helpers | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-ExtUtils-InstallPaths | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-ExtUtils-LibBuilder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-FFI-CheckLib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-chdir | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Find-Rule | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-HomeDir | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Listing | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Remove | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-ShareDir | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-ShareDir-Install | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Slurp-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Slurper | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-File-Which | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTML-Parser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTML-Tagset | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-CookieJar | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-Cookies | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-Daemon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-Date | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-Message | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-HTTP-Negotiate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-inc-latest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-IO-HTML | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-IO-Socket-SSL | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-IO-String | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-IO-Stringy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-IPC-Run3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-JSON | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-libwww | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Lingua-Translit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-List-AllUtils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-List-MoreUtils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-List-MoreUtils-XS | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-List-SomeUtils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-List-UtilsBy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Log-Log4perl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-LWP-MediaTypes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-LWP-Protocol-https | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-MailTools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Math-Int64 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Math-Round | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Memory-Usage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-MIME-Base32 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-MIME-Charset | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-MIME-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-Build | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-Build-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-Implementation | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-Install | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-Runtime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Module-ScanDeps | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Mozilla-CA | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-MRO-Compat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-namespace-autoclean | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-namespace-clean | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Net-HTTP | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Net-SMTP-SSL | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Net-SSLeay | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Number-Compare | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Package-Stash | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Package-Stash-XS | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-PAR-Dist | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Params-SomeUtil | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Params-Validate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Params-ValidationCompiler | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Parse-RecDescent | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Path-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-PkgConfig | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Readonly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Regexp-Common | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Role-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Scalar-List-Utils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sort-Key | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sort-Versions | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Specio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sub-Exporter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sub-Exporter-Progressive | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sub-Install | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Sub-Uplevel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-TermReadKey | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Test-Differences | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Test-Exception | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Test-Fatal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Test-Requires | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Text-BibTeX | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Text-CSV | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Text-Diff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Text-Glob | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Text-Roman | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Tie-Cycle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-TimeDate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Try-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Unicode-LineBreak | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-URI | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Variable-Magic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-API | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-Console | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-ShellQuote | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-Shortcut | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-TieRegistry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-Unicode | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32-WinError | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-Win32API-Registry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-WWW-RobotRules | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-LibXML | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-LibXML-Simple | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-LibXSLT | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-NamespaceSupport | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-Parser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-SAX | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-SAX-Base | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-XML-Writer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-perl-YAML-Tiny | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-petsc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pgmodeler | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-phodav | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-phonon | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-physfs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-picosha2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-picotool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pidgin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pikchr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pinact | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pinentry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pixi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pixman | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pkcs11-helper | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pkg-resources | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pkgconf | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-planarity | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plantri | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plasma-activities | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plfit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plplot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plutosvg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-plutovg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pm2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-png2ico | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pngcrush | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pngnq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pngquant | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pnpm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pocl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-poco | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-podman | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-podman-compose | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-podofo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-polipo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-polly | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-polyclipping | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-poppler | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-poppler-data | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-popt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-port-scanner | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-portablexdr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-portaudio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-portmidi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-portsmf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-postgis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-postgresql | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-postgresql-16.15 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-potrace | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-powerpc-apple-macos-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-powersession-rs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ppl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pqp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pragtical | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-precice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-prek | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-premake | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-premake4 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-prettier | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-prettier-ada | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-primecount | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-primesieve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-prison | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-prjtrellis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-procs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-proj | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-projectchrono | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-protobuf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-protobuf-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-psmux | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ptex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pugixml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pulseaudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pupnp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-purpose | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-putty | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-putty-ssh | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pybind11 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pybind11-json | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pycairo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pygobject | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyinstaller | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyinstaller-hooks-contrib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pymol | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt-builder | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt5 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt5-3d | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt5-sip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt6 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyqt6-sip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyright | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyside2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pyside6 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-pystring | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aafigure | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-absl-py | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aenum | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aio-pika | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiofiles | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiohappyeyeballs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiohttp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiohttp-cors | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aioquic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aioresponses | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiormq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiosignal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiosmtpd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-aiosqlite | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-alembic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-altgraph | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-amqp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-annotated-doc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-annotated-types | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-anyio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-anytree | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-apipkg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-appdirs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-apycula | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-archinfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-argcomplete | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-argon2_cffi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-argon2-cffi-bindings | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-arrow | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asgiref | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asn1crypto | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ast-serialize | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-astor | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-astroid | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asttokens | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-astunparse | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-async_generator | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-async-lru | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-async-timeout | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asyncpg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asyncssh | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-asynctest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-atomicwrites | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-atpublic | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-attrs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-audioop-lts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-audioread | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-automat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-autopage | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-autopep8 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-autopxd2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-av | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-awesomeversion | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-babel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-bcrypt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-beaker | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-beautifulsoup4 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-beniget | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-billiard | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-binaryornot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-biopython | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-biscuits | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-black | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-blake3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-bleach | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-blinker | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-boolean.py | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-Bootstrap-Flask | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-boto3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-botocore | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-bottle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-branca | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-breathe | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-brotli | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-brotlicffi | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-bsddb3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-build | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cabarchive | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cachecontrol | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cached-property | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cachetools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cachy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-calver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-can | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cattrs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-celery | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cerberus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-certifi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cffi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cfgv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-chardet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-charset-normalizer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cleo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-click | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-click-default-group | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-click-didyoumean | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-click-plugins | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-click-repl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cliff | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cloudpickle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cloup | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cmap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cmd2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-codespell | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-colorama | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-colored-traceback | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-coloredlogs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-colorlog | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-colour-science | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-comm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-commonmark | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-comtypes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-conan | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-conan-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-configargparse | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-constantly | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-contextlib2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-contourpy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-conway-polynomials | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cookiecutter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-coverage | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cppy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cryptography | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cssselect | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cssselect2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-csv23 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-customtkinter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cvxopt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cx-freeze | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cx-logging | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cycler | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-cysignals | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-darkdetect | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-databases | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dateutil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ddt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-debtcollector | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-debugpy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-decorator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-decouple | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-defusedxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dependency-groups | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-deprecated | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-deprecation | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-diff-match-patch | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dill | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-distlib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-distro | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-django | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dnspython | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docopt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docstring-to-markdown | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docutils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docxcompose | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-docxtpl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dotenv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dotty-dict | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dulwich | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-dunamai | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-e3-core | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ecdsa | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-editables | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-elastic-transport | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-elasticsearch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-elementpath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-email-validator | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-emoji | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-entrypoints | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-et-xmlfile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-eventlet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-execnet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-executing | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-expandvars | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fabric | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-faker | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fastapi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fastcrc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fasteners | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fastexcel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fastjsonschema | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-feedgenerator | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fido2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-filelock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-findpython | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fire | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fixtures | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flake8 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flaky | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flasgger | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask_migrate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-babel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-cors | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-login | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-marshmallow | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-sqlalchemy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flask-wtf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flexcache | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flexmock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flexparser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-flit-core | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-folium | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fonttools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ford | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-formulaic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fortls | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fpdf2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fprettify | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-freetype-py | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-freeze-core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-freezegun | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-frozenlist | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fsspec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ftfy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-func-timeout | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-funcy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-future | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-fypp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gast | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-geoalchemy2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-geographiclib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-glad | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-glcontext | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-glfw | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gmpy2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-api-core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-auth | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-auth-httplib2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-auth-oauthlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-cloud-core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-cloud-storage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-crc32c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-google-resumable-media | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-googleapis-common-protos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gpgme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-graphviz | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-greenlet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gssapi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gym | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-gym-notices | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-h11 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-h2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-h5py | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-h5pyd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hacking | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-halo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatch-build-scripts | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatch-fancy-pypi-readme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatch-jupyter-builder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatch-nodejs-version | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatch-vcs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hatchling | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-headerkit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hightime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hiredis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hjson | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hpack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-html5lib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-httpcore | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-httplib2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-httpretty | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-httpx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-humanfriendly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-humanize | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hunter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hyperframe | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hyperlink | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-hypothesis | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-icecream | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-icu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-id | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-identify | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-idna | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ifaddr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ifstools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-igraph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-imagecodecs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-imageio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-imagesize | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-imbalanced-learn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-imgviz | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-immutabledict | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-immutables | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-importlib_resources | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-importlib-metadata | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-incremental | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-inflect | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-inflection | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-iniconfig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-installer | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-interface-meta | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-intervaltree | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-invoke | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipycanvas | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipykernel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipympl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipython | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipython-pygments-lexers | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ipywidgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-iso8601 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-isodate | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-isort | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-isosurfaces | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-itsdangerous | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.classes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.context | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.envs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.functools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.itertools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jaraco.path | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jedi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jeepney | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jellyfish | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jinja | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jinja-docs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jmespath | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-joblib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-json-logger | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-json-rpc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-json5 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonpatch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonpath-ng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonpointer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonrpc-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonschema | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jsonschema-specifications | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_client | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_console | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_notebook | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_notebook_shim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter_server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-builder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-events | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-lsp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-nbclassic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-nbclient | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-nbconvert | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-nbformat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-nbviewer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-server-terminals | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyter-threejs-sage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyterlab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyterlab-pygments | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyterlab-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-jupyterlab-widgets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-kbinxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-keras | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-keras_applications | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-keras_preprocessing | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-keyboard | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-keyring | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-kiwisolver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-kombu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-labelme | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lark-parser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lazy-importer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lazy-loader | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lazy-object-proxy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ldap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ldap3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-levenshtein | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lhafile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-librosa | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-librt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-libsass | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-license-expression | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lief | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-llvmlite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lmdb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-log_symbols | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-loguru | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lrcalc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lsp-black | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lsp-jsonrpc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lsp-ruff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lsp-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lsprotocol | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lws | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lz4 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-lzo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mako | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mallard-ducktype | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-manhole | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-manimpango | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markdown | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markdown-include | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markdown-it-py | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markdown-math | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markups | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-markupsafe | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-marshmallow | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-marshmallow-sqlalchemy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-matplotlib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-matplotlib-inline | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mccabe | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mdit_py_plugins | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mdurl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-memory-allocator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-meshio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-milc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mimeparse | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mingw-ldd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-minio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mistune | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ml_dtypes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-moderngl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-moderngl-window | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-more-itertools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mpi4py | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mpmath | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-msgpack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-msgspec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-msilib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-multidict | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-multipledispatch | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-multiprocess | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mutagen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mypy_extensions | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-mysqlclient | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-myst-parser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-narwhals | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-natsort | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nest-asyncio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nest-asyncio2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-netaddr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-netifaces | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-networkx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nh3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nidaqmx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nitypes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-node-semver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nodeenv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nox | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nuitka | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-numba | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-numexpr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-numpy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-numpydoc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nvchecker | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-nvidia-ml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oauthlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-olefile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-opencamlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-openmdao | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-openpyxl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-opentelemetry-api | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-opt_einsum | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-optking | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-optree | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ordered-set | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-os-win | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-osam | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-concurrency | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-config | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-context | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-db | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-i18n | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-log | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-serialization | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslo-utils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-oslotest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-outcome | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-overrides | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-owslib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pacdb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-packageurl-python | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-packaging | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pallets-sphinx-themes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pamqp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pandas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pandocfilters | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-paramiko | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-parso | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-benzene | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-bliss | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-bootstrap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-buckygen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-categories | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-cddlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-cliquer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-cmr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-combinat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-database-cunningham | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-environment | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-flint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-glpk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-graphs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-graphviz | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-gsl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-highs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-homfly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-iml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-libbraiding | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-lrslib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-m4ri-m4rie | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-mathilda | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-mcqd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-meataxe | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-modules | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-msolve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-nauty | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-ntl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-objects | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-planarity | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-plantri | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-plot | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-polyhedra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-ppl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-rankwidth | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-repl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-setup | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-sirocco | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passagemath-tdlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-passlib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pastel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-patch-ng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-path | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pathspec | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-patool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-patsy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pbr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pbs-installer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pcpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pdfminer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pdm-backend | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pebble | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pefile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pesq | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pexpect | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pgen2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pglive | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-phitigra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pi-heif | mingw | mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pickleshare | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pika | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pikepdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pillow | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pip-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pipcl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pipenv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pipx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pivy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pkgconfig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pkginfo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-platformdirs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-plotly | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pluggy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pluginbase | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-plumbum | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ply | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-poetry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-poetry-core | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-poetry-dynamic-versioning | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-poetry-plugin-export | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-poetry-plugin-shell | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-polars | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pooch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pptx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pre-commit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pretend | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-prettytable | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-priority | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-progress | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-prometheus-client | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-prompt_toolkit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-propcache | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-proto-plus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-protobuf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-psleak | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-psutil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-psycopg2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ptpython | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ptyprocess | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pure-eval | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-purl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-py-cpuinfo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-py-cpuinfo2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-py2exe | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyamg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyaml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyarrow | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyasn1 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyasn1-modules | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pybase64 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pybox2d | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycares | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycodestyle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycountry | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycparser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycryptodome | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycryptodomex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pycurl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydantic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydantic-core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydantic-settings | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydocstyle | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydoe2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pydub | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyelftools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyfastbti | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyfasttextureutils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyfdt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyfilesystem2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyflakes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyft232 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygame | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygccxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygit2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygithub | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyglet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyglm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygls | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygments | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygments-docs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygments-github-lexers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pygobject-stubs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyhamcrest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyjwt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pykwalify | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pylablib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pylev | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pylint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pylint-venv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyls-spyder | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pylsqpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pymi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pymupdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pynacl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pynndescent | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pynput | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pynvim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyodbc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyopengl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyopengl-accelerate | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyopenssl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyparsing | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyperclip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyphen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pypng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyproj | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyproject-api | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyproject-hooks | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyproject-metadata | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyqtgraph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyreadline3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyrr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyrsistent | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyscroll | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pysequoia | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyserial | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pysfcgal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyshp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pysocks | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyspnego | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pystac | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pystemmer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pystoi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyswarm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-asyncio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-benchmark | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-black | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-checkdocs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-cov | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-datafiles | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-enabler | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-fixture-config | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-flake8 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-isort | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-localserver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-mock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-mpl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-rerunfailures | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-shutil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-subprocess | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-timeout | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-virtualenv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytest-xdist | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-python-discovery | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-python-multipart | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-python-sbom | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pythran | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytmx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytokens | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytoolconfig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytorch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pytz | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyu2f | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyuca | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyusb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyvcd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyvda | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyvisa | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pywavelets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pywin32 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pywin32-ctypes | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pywinpty | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyzmq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-pyzopfli | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qasync | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qcelemental | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qcengine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qdarkstyle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qmk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qstylizer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qtawesome | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qtconsole | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-qtpy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-quart | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rapidfuzz | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rawpy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rdflib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-re-assert | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-readme-renderer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-redis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-referencing | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-regex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rencode | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rendercanvas | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-reportlab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-cache | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-kerberos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-mock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-oauthlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-toolbelt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-requests-unixsocket | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-resampy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-resolvelib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-responses | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-retrying | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rfc3339-validator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rfc3986 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rfc3986-validator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rfc3987 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rich | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rich-argparse | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rlpycairo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-roman-numerals | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rope | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rpds-py | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rpyc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rst2pdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-rtree | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ruamel-yaml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ruamel.yaml.clib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-s3transfer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-schema | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scikit-build | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scikit-build-core | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scikit-image | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scikit-learn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scipy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scooby | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-screeninfo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-scripttest | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-seaborn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-secretstorage | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-semantic-version | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-semver | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-send2trash | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-service-identity | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setproctitle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-git | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-git-versioning | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-reproducible | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-rust | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-scm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-setuptools-scm-git-archive | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-shapely | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-shellingham | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-shtab | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-similarity_measures | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-six | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-skia-pathops | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-slugify | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-smartypants | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sniffio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-snowballstemmer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sortedcontainers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sounddevice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-soundfile | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-soupsieve | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-soxr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx_rtd_theme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-alabaster-theme | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-argparse | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-basic-ng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-copybutton | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-issues | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-lv2-theme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-notfound-page | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinx-tabs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-applehelp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-devhelp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-github-alt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-htmlhelp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-jquery | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-jsmath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-log-cabinet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-moderncmakedomain | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-programoutput | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-qthelp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-serializinghtml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-svg2pdfconverter | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sphinxcontrib-websupport | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-spin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-spinners | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-spyder | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-spyder-kernels | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sqlalchemy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sqlmodel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sqlparse | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-srt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sse-starlette | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sspilib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-stack-data | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-standard-aifc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-standard-chunk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-standard-sunau | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-starlette | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-statsd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-statsmodels | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-stestr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-stevedore | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-strict-rfc3339 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-striprtf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-structlog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-subunit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-superqt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-svgelements | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-svglib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-sympy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tabulate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tempita | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-termcolor | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-terminado | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-test2ref | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-testpath | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-testrepository | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-testresources | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-testscenarios | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-testtools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-text-unidecode | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-textdistance | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-texttable | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-threadpoolctl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-three-merge | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tifffile | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tinyaes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tinycss2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-toml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tomli | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tomli-w | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tomlkit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-toposort | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-toptica-lasersdk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tornado | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tox | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tqdm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-traitlets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-trimesh | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-trio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-trio-websocket | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-trove-classifiers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-trustme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-truststore | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-twisted | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-typeguard | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-typer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-types-python-dateutil | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-types-pyyaml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-typing_extensions | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-typing-inspection | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-typogrify | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tzdata | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-tzlocal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-u-msgpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-udsoncan | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ufolib2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-uharfbuzz | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ujson | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-ukpostcodeparser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-umap-learn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-unidecode | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-unidiff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-url-normalize | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-urllib3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-urwid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-userpath | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-vcs-versioning | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-versioneer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-versioningit | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-vine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-virtualenv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-virtualenv-clone | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-voluptuous | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-watchdog | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-watchfiles | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wcag-contrast-ratio | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wcwidth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-webcolors | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-webencodings | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-websocket-client | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-websockets | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-werkzeug | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-west | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wgpu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-whatthepatch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wheel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-win32-setctime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-winkerberos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-winloop | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-WMI | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wordcloud | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wrapt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wsproto | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-wtforms | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xdg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xlrd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xlsxwriter | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xmlschema | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xpra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xxhash | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-xyzservices | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-yaml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-yarl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zeroconf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zipp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zipremove | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zope.event | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zope.interface | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zstandard | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python-zxing-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-python3.14 | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qalculate-gtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qalculate-qt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qbittorrent | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qbs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qca | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qdia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qemu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qgis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qgpgme | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qhttpengine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qhull | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qjackctl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qmdnsengine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qoi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qownnotes | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qpdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qqc2-desktop-style | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qr-code-generator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qrencode | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qrtool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qrupdate | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qscintilla | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt-advanced-docking-system | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt-creator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt-installer-framework | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-activeqt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-base | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-charts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-connectivity | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-datavis3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-declarative | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-doc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-gamepad | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-graphicaleffects | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-imageformats | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-location | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-lottie | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-multimedia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-networkauth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-pdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-purchasing | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-quick3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-quickcontrols | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-quickcontrols2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-quicktimeline | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-remoteobjects | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-script | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-scxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-sensors | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-serialbus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-serialport | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-speech | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-static | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-svg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-tools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-translations | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-virtualkeyboard | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-webchannel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-webglplugin | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-websockets | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-webview | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-winextras | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt5-xmlpatterns | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-5compat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-activeqt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-base | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-canvaspainter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-charts | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-connectivity | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-datavis3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-declarative | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-doc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-graphs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-grpc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-httpserver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-imageformats | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-languageserver | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-location | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-lottie | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-mqtt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-multimedia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-networkauth | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-pdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-positioning | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-quick3d | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-quick3dphysics | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-quickeffectmaker | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-quicktimeline | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-remoteobjects | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-scxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-sensors | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-serialbus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-serialport | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-shadertools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-speech | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-static | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-svg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-tasktree | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-tools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-translations | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-virtualkeyboard | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-webchannel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-websockets | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qt6-webview | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qtkeychain | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qtwebkit | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quantlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quantum-espresso | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quarter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quassel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quazip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qucs-s | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quickjs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-quickjs-ng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qwen-code | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qwt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qxlsx | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-qxmpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-QxOrm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-r | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rabbitmq-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ragel | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-range-v3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rankwidth | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rapidfuzz-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rapidjson | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-raptor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rasqal | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rav1e | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-raylib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rcedit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rclone | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-re2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-readline | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-readosm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-readstat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-recode | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-redis-plus-plus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-redland | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-reflect-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-repgrep | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-restbed | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-restic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-resvg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rhash | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-bopomofo | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-cangjie | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-double-pinyin | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-emoji | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-essay | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-luna-pinyin | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-pinyin-simp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-prelude | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-stroke | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-terra-pinyin | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rime-wubi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ripgrep | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ripgrep-all | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ripunzip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv32-unknown-elf-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv32-unknown-elf-gcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv32-unknown-elf-newlib | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv64-unknown-elf-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv64-unknown-elf-gcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-riscv64-unknown-elf-newlib | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rkcommon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rkdeveloptool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rnnoise | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rnote | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-robin-hood-hashing | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-robin-map | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rocksdb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-roswell | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rpi-imager | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rrdtool | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rssguard | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rtaudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rtl_433 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rtl-sdr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rtmidi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rtmpdump | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rubberband | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-dbus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-mustache | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-native-package-installer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-pkg-config | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-rake-compiler | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruby-rdiscount | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-RuC | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-RuC-VM | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ruff | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rufus | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rust | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rust-analyzer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rust-bindgen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rustfs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rustfs-launcher | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rustlings | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rustscan | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rustup | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-rxspencer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-s-dftd3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-s2geometry | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sad | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-safetyhook | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sage-data-cunningham_tables | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-samply | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-samtools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sane | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sass | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sassc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sbc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sbcl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scalapack | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sccache | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scdoc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-schroedinger | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scnlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scons | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scopehal-apps | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scotch | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scour | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scrcpy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scribus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-scummvm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdcv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-SDL | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl-gfx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl-image | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl-mixer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl-net | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl-ttf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl12-compat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-SDL2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-compat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-gfx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-image | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-mixer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-net | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-pango | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-sound | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl2-ttf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3-image | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3-mixer | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3-net | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3-sound | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sdl3-ttf | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-seacas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sed | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-seexpr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sequoia-sq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-serd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-serial-studio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sfcgal | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sfml | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sgml-common | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shaderc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shapelib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shards | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shared_meataxe | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shared-mime-info | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shfmt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shim_executable | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shimmy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shine | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shishi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-shotcut | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sidplayfp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-siesta | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sigutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-silc-toolkit | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-simdjson | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-simple-mail | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-simvoleon | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sip | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sirocco | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-skia | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-skyr-url | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sleef | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-slepc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-slim-simulator | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-smpeg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-smpeg2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-snappy | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-snoregrowl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-snowball | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soapyhackrf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soapyrtlsdr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soapysdr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soci | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sol2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-solid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-solid3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sonivox | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sonixflasher | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sonnet | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soqt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sord | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-soundtouch | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-source-highlight | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sox | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sox-ng | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spandsp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sparsehash | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spatialindex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spatialite-gui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spatialite-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spdlog | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spdylay | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spectra | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-speex | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-speexdsp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spglib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spice | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spice-gtk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spice-protocol | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spirv-cross | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spirv-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spirv-llvm-translator | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spirv-tools | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-spooles | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sqlcipher | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sqlite | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sqlite-orm | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sqlite3mc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sqlitebrowser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-squirrel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sratom | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-srecord | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-srt | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sse2neon | mingw | clangarm64 | llvm | - | armv8.1-a -> armv8.2-a+ |
| mingw-w64-starpu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-starship | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stb | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stellarium | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stlink | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stoken | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stork | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-streamlink | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-strumpack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-stxxl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-styrene | mingw | mingw64 ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-suitesparse | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-sundials | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-supercollider | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-superlu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-superlu_dist | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-superlu_mt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-supertux | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-supertuxkart | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-surrealdb | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-svg2pdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-svgo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-svgpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-svt-av1 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-svt-jpeg-xs | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-swi-prolog | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-swig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-symengine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-symmetrica | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-syndication | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-syntax-highlighting | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-systemc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-t1utils | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-taglib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-talkatu | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-taucs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tbb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tblite | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tcl | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tcl-nsf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tcllib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tclvfs | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tclx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tdlib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tealdeer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-teensy-loader-cli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-template-glib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-templates-parser | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-termcap | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tesseract-data | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tesseract-ocr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-testu01 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tetgen | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texinfo | mingw | mingw64 ucrt64 clang64 clangarm64 mingw32 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-bibtex-extra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-bin | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-core | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-extra-utils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-font-utils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-fonts-extra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-fonts-recommended | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-formats-extra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-games | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-humanities | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-arabic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-chinese | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-cjk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-cyrillic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-czechslovak | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-english | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-european | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-french | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-german | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-greek | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-italian | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-japanese | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-korean | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-other | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-polish | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-portuguese | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-lang-spanish | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-latex-extra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-latex-recommended | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-luatex | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-metapost | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-music | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-pictures | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-plain-generic | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-pstricks | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-publishers | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texlive-science | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-texstudio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tfel | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tgui | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-thorvg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-threadweaver | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-thrift | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tidy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tigervnc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tiled | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tiledb | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tinyexpr | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tinyformat | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tinymist | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tinyxml | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tinyxml2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tixi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tk | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tkimg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tklib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tktable | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tl-expected | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tldr | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tlfloat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tmxlite | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tokei | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tolua | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tombi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-toml-f | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-toml11 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tomlc17 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tomlplusplus | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tools-xctest | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-totem-pl-parser | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-transmission | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-lua | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-markdown | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-query | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-vim | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tree-sitter-vimdoc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-treedec | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-trilinos | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-trippy | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-triton | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-trompeloeil | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-trunk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tslib | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttf-cm-unicode | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttf-dejavu | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttf-nerd-fonts-symbols | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttf-paratype | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttfautohint | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ttyd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tulip | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-turbo | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tuxpaint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tvision | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-twapi | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-twine | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-twolame | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ty | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-typescript | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-typst | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-typstyle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-tzdata | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uasm | mingw | mingw64 ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uchardet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-ucl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-udis86 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-udunits | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uhttpmock | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-umbrello | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unbound | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uncrustify | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unibilium | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unicode-character-database | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unicorn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unifdef | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unittest-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unixodbc | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unordered_dense | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unpaper | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-unrar | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-upx | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uriparser | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-usbredir | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-usbview | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-usql | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-usrsctp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-utf8cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uthash | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uutils-coreutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uutils-diffutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uutils-findutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uutils-grep | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uutils-sed | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uv | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uvatlas | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-uvicorn | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-v8 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vala | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vala-language-server | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vamp-plugin-sdk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vapoursynth | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vcdimager | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vector_blf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vera++ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-verdict | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-verilator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vhs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vid.stab | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vigra | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-virglrenderer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-virt-viewer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-virtualpg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-viskores | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-visualizationlibrary | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vivid | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vk-bootstrap | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vlc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vlfeat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vmaf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vo-amrwbenc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-volk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vrpn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vsgImGui | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vsgPoints | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vsgQt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vsgXchange | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vss-extra | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vss-text | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vtk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-headers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-loader | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-memory-allocator | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-utility-libraries | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-validation-layers | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-vulkan-volk | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-VulkanSceneGraph | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-w3c-mathml2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wabt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wac | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-waf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wakatime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wannier90 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasi-compiler-rt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasi-libc | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasi-libc++ | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-bindgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-component-ld | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-pack | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-pkg-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-server-runner | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasm-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wasmtime | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-watchexec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wavpack | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wb32-dfu-updater | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-webgpu-headers | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-webp-pixbuf-loader | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-webrtc-audio-processing-1 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-webview | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-webview2-loader | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wezterm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wget | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wget2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wgpu-native | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wgsl-analyzer | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-whisper.cpp | mingw | ucrt64 clang64 clangarm64 mingw64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-widelands | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wiiuse | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-win7appid | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-windows-default-manifest | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wined3d | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wineditline | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winfile | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winico | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winpthreads | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winpthreads-stub | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winpty | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winsparkle | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-winstorecompat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wintab-sdk | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wireshark | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wit-bindgen | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wkhtmltopdf | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-woff2 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wolfssl | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wslay | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wv | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wwrando | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wxmacmolplt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wxPython | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wxsvg | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wxWidgets3.2 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-wxWidgets3.3 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x264 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x265 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x86_64-elf-binutils | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x86_64-elf-gcc | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x86_64-elf-newlib | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-x86-simd-sort | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xa65 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xalan-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xapian-core | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xavs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xerces-c | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xeus | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xeus-zmq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xevd | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xeve | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xlnt | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xlsxio | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmake | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmlada | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmlf90 | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmlsec | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmlstarlet | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xmlto | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xournalpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xpdf | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xpm-nox | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xsimd | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xvidcore | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xxhash | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-xz | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yajl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yaml-cpp | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yarn | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yasm | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yazi | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yelp-tools | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yelp-xsl | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yices | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yosys | mingw | ucrt64 | gcc | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yq | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yt-dlp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yt-dlp-ejs | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yubico-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yubikey-personalization | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yuview | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-yyjson | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-z3 | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zbar | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zeal | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zed | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zeromq | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zig | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zimg | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zint | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zix | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zizmor | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zlib | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zlib-ng | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zoitechat | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zola | mingw | ucrt64 clang64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zopfli | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zoxide | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zstd | mingw | mingw32 mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | yes | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zug | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zvbi | mingw | mingw64 ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zxcvbn-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zxing-cpp | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zycore-c | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zydis | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mingw-w64-zziplib | mingw | ucrt64 clang64 clangarm64 | gcc+llvm | - | nocona -> x86-64-v3/v4/znver4 |
| mintty | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mm-common | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| moreutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mosh | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mosquitto | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mpc | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mpdecimal | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mpfr | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msgpack-c | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-keyring | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-launcher | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-runtime | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-runtime-3.3 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-runtime-3.4 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-runtime-3.5 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-w32api-headers | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| msys2-w32api-runtime | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| mutt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| namcap | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nano | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nano-syntax-highlighting | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nasm | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nawk | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ncdu | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ncurses | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| neomutt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| neon | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nettle | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nghttp2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nghttp3 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ngtcp2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ninja | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nnn | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| npth | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nsinstall | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| nyacc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| oniguruma | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| openbsd-netcat | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| opensp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| openssh | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| openssl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| p11-kit | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| p7zip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pacman | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| pacman-contrib | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| pacman-mirrors | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pactoys | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pacutils | extra | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| parallel | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pass | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| patch | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| patchutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pax | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pcre | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pcre2 | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-algorithm-diff | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-alien-build | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-alien-build-plugin-download-gitlab | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-alien-libxml2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-archive-zip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-authen-sasl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-benchmark-timer | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-capture-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-carp-clan | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-class-inspector | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-class-method-modifiers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-clone | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-common-sense | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-compress-bzip2 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-convert-binhex | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-data-munge | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-data-optlist | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-date-calc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-dbi | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-devel-globaldestruction | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-digest-hmac | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-encode-locale | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-error | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-exporter-lite | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-exporter-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-config | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-depends | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-helpers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-installpaths | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-makemaker | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-extutils-pkgconfig | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-ffi-checklib | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-chdir | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-copy-recursive | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-listing | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-next | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-sharedir | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-sharedir-install | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-file-which | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-font-ttf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-getopt-tabular | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-html-parser | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-html-tagset | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-cookiejar | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-cookies | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-daemon | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-date | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-message | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-http-negotiate | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-import-into | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-importer | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-inc-latest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-io-html | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-io-socket-inet6 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-io-socket-ssl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-io-string | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-io-stringy | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-ipc-run3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-json | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-libwww | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-list-moreutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-list-moreutils-xs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-locale-gettext | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-lwp-mediatypes | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-lwp-protocol-https | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-mailtools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-math-int64 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-mime-charset | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-mime-tools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-module-build | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-module-build-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-module-pluggable | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-module-runtime | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-moo | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-mozilla-ca | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-net-dns | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-net-http | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-net-ip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-net-smtp-ssl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-net-ssleay | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-padwalker | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-parallel-forkmanager | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-params-someutil | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-path-class | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-path-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-perlio-gzip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-pod-parser | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-probe-perl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-regexp-common | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-return-multilevel | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-role-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-scope-guard | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sgmls | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-socket6 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sort-versions | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-spiffy | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sub-exporter | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sub-exporter-progressive | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sub-info | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sub-install | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-sub-quote | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-tap-harness-archive | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-term-table | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-termreadkey | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-base | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-deep | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-fatal | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-needs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-nowarnings | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-pod | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-requires | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-requiresinternet | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-script | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-warnings | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test-yaml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-test2-suite | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-text-charwidth | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-text-diff | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-text-wrapi18n | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-timedate | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-try-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-unicode-linebreak | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-uri | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-www-robotrules | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-libxml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-namespacesupport | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-parser | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-sax | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-sax-base | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-xml-simple | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-yaml-syck | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| perl-yaml-tiny | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pinentry | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pkgconf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pkgfile | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| po4a | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| popt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| procps-ng | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| protobuf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| psmisc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| publicsuffix-list | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pv | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| pwgen | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python | extra | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| python-appdirs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-attrs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-babel | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-beaker | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-brotli | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-build | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-calver | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-certifi | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-cffi | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-charset-normalizer | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-colorama | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-configobj | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-cryptography | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-docutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-dulwich | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-editables | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-fastbencode | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-fastimport | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-flit-core | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-hatch-fancy-pypi-readme | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-hatch-vcs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-hatchling | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-idna | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-imagesize | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-iniconfig | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-installer | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-jinja | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-lxml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-mako | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-mallard-ducktype | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-markdown | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-markupsafe | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-merge3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-more-itertools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pacdb | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-packaging | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pathspec | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-patiencediff | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pkgconfig | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pluggy | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-poetry-core | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-py3c | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pyalpm | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pycparser | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pygments | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pyparsing | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pyproject-hooks | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pyproject-metadata | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pytest | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-pytest-pacman | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-requests | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-resolvelib | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-roman-numerals | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-semantic-version | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-setuptools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-setuptools-gettext | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-setuptools-rust | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-setuptools-scm | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-six | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-smartypants | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-snowballstemmer | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinx | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinx-alabaster-theme | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-applehelp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-devhelp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-htmlhelp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-jsmath | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-qthelp | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-sphinxcontrib-serializinghtml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-tomlkit | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-trove-classifiers | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-typing_extensions | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-typogrify | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-urllib3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-vcs-versioning | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-wcwidth | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-yaml | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| python-zstandard | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| quilt | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rcs | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| re2c | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| readline | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rebase | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| reflex | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| remake | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rhash | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rlwrap | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rpcsvc-proto | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rsync | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ruby | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| rust | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| scons | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| screenfetch | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| sed | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| serf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| setconf | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| sgml-common | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| sharutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| shellspec | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| shutdown | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| socat | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| sqlite | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| squashfs-tools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ssh-pageant | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| sshpass | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| stow | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| subversion | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| swig | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tar | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| task | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tcl | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tcsh | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| texinfo | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tftp-hpa | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tig | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| time | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tio | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tmate | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tmux | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| trash | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tree | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| tzcode | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| u-boot-tools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| ucl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| unrar | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| unzip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| upx | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| util-linux | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| uutils-coreutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| uutils-findutils | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| uutils-sed | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| uv | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| vifm | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| vim | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| vimpager | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| w3m | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| wcd | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| wget | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| which | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| whois | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| windows-default-manifest | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| winpty | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xdelta3 | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xmlto | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xorg-util-macros | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xorgproto | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xorriso | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xxhash | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| xz | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| yasm | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| yelp-tools | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| yelp-xsl | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| zip | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| zlib | core | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| znc | extra | msys | gcc (cygwin) | - | nocona -> x86-64-v3/v4/znver4 |
| zsh | extra | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
| zstd | core | msys | gcc (cygwin) | yes | nocona -> x86-64-v3/v4/znver4 |
