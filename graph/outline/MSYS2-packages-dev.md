# Codebase Digest: MSYS2-packages-dev

- Files analyzed: 42
- Total lines: 20682
- Total size: 625.5 KB
- Git branch: `master`
- Git HEAD commit: `48cd82ab (CI: sync with MSYS2-packages)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
MSYS2-packages-dev/
├── LICENSE (27 lines, 1.5 KB, ~342 tokens)
├── crosstool-ng-git/
│   ├── 0001-stat-check.patch (11 lines, 477 B, ~138 tokens)
│   └── PKGBUILD (47 lines, 1.3 KB, ~388 tokens)
├── elfutils/
│   ├── 001-libintl-linking.patch (33 lines, 1.5 KB, ~441 tokens)
│   ├── 002-disable-new-dtags-flag.patch (10 lines, 482 B, ~158 tokens)
│   └── PKGBUILD (49 lines, 1.4 KB, ~405 tokens)
├── irssi-git/
│   ├── 0000-msys2ize.patch (11 lines, 668 B, ~207 tokens)
│   └── PKGBUILD (57 lines, 2.0 KB, ~581 tokens)
├── libffi-git/
│   ├── 0001-msys2ize.patch (31 lines, 1.1 KB, ~338 tokens)
│   ├── PKGBUILD (92 lines, 2.4 KB, ~722 tokens)
│   ├── config.guess (1443 lines, 42.5 KB, ~13.4k tokens)
│   ├── config.sub (1810 lines, 35.2 KB, ~11.0k tokens)
│   └── libffi.install (20 lines, 406 B, ~124 tokens)
├── make-git/
│   ├── 0001-remove-Werror.patch (13 lines, 641 B, ~173 tokens)
│   ├── 0002-no-symlinks-test.patch (13 lines, 568 B, ~176 tokens)
│   ├── PKGBUILD (52 lines, 1.3 KB, ~388 tokens)
│   └── make-git.install (20 lines, 433 B, ~134 tokens)
├── midipix-cross-gcc-git/
│   ├── PKGBUILD (140 lines, 3.9 KB, ~1.2k tokens)
│   └── gcc-4.6.4-msys2.host.patch (31 lines, 1.2 KB, ~370 tokens)
├── midipix-cross-musl/
│   └── PKGBUILD (68 lines, 1.7 KB, ~557 tokens)
├── midipix-cross-psxstub/
│   └── PKGBUILD (47 lines, 1.2 KB, ~378 tokens)
├── mingw-w64-cross-binutils-git/
│   ├── 0001-Patch-early-arm-pe.patch (749 lines, 22.2 KB, ~5.9k tokens)
│   ├── 0002-Continue-on-it.patch (133 lines, 4.3 KB, ~1.2k tokens)
│   ├── 0003-msys2-support-for-binutils.patch (2294 lines, 84.0 KB, ~25.8k tokens)
│   └── PKGBUILD (101 lines, 2.7 KB, ~819 tokens)
├── mingw-w64-cross-gcc-git/
│   ├── 4.7-execstack.patch (46 lines, 2.0 KB, ~616 tokens)
│   ├── 5.0-libitm-cygwin.patch (178 lines, 6.7 KB, ~1.9k tokens)
│   ├── 5.0-lto-plugin-soname.patch (34 lines, 1.6 KB, ~458 tokens)
│   ├── PKGBUILD (164 lines, 4.5 KB, ~1.4k tokens)
│   ├── armv7-w32-mingw32ce.patch (2298 lines, 79.1 KB, ~22.3k tokens)
│   ├── gcc-4.7-stdthreads.patch (11 lines, 352 B, ~93 tokens)
│   ├── gcc-4.8-libstdc++export.patch (13 lines, 379 B, ~116 tokens)
│   ├── gcc-4.8.0-msys2-spec.patch (370 lines, 13.4 KB, ~4.0k tokens)
│   └── gcc-5.0-configure-msys2.patch (9844 lines, 289.8 KB, ~86.5k tokens)
├── mintty-git/
│   └── PKGBUILD (49 lines, 1.5 KB, ~518 tokens)
├── openbios-git/
│   ├── 0001-fix-printk-to-use-FMT-cell-instead-of-x-where-it-sho.patch (39 lines, 1.5 KB, ~473 tokens)
│   └── PKGBUILD (53 lines, 1.0 KB, ~344 tokens)
├── vimpager-git/
│   └── PKGBUILD (33 lines, 777 B, ~249 tokens)
├── winpty-git/
│   ├── 0001-Apply-POSIX-to-Win-conversion-on-all-arguments-on-MSYS.patch (32 lines, 934 B, ~279 tokens)
│   ├── 0002-fix-path-conversion.patch (66 lines, 2.6 KB, ~754 tokens)
│   └── PKGBUILD (69 lines, 2.4 KB, ~687 tokens)
└── xz-git/
    └── PKGBUILD (81 lines, 2.0 KB, ~663 tokens)
```

## Source Files

================================================
FILE: LICENSE
================================================
Copyright (c) 2013, Алексей
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the {organization} nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


================================================
FILE: crosstool-ng-git/0001-stat-check.patch
================================================
diff -Naur crosstool-ng.orig/configure.ac crosstool-ng/configure.ac
--- crosstool-ng.orig/configure.ac
+++ crosstool-ng/configure.ac
@@ -240,7 +240,7 @@ AC_CACHE_CHECK([whether stat takes GNU or BSD format],
      rm -f conftest
      AS_IF([test "$attr_bsd" = "642"],
        [acx_cv_stat_flavor=BSD],
-       [test "$attr_gnu" = "642"],
+       [test "$attr_gnu" = "644"],
        [acx_cv_stat_flavor=GNU],
        [AC_MSG_ERROR([cannot determine stat(1) format option])])])


================================================
FILE: crosstool-ng-git/PKGBUILD
================================================
# Maintainer: Ray Donnelly <mingw.android@gmail.com>
# Maintainer: Martell Malone <martellmalone@gmail.com>

_realname="crosstool-ng"
pkgname="$_realname"-git
replaces=("$_realname")
pkgver=r4296.c609be17
pkgrel=1
pkgdesc="A cross-platform open-source toolchain system (git)"
arch=('i686' 'x86_64')
url="http://www.crosstool-ng.org/"
license=("MIT")
makedepends=("autoconf" "automake-wrapper" "binutils" "bison"
             "flex" "gettext-devel" "git" "gcc" "gperf"
             "patch" "libtool" "make" "ncurses-devel"
             "tar" "texinfo" "wget" "xz")
depends=("ncurses" "libintl")
options=('staticlibs' 'strip')
source=('crosstool-ng::git+https://github.com/crosstool-ng/crosstool-ng.git#branch=master'
         0001-stat-check.patch)
sha256sums=('SKIP'
            '53a283a29972490d1ddc369aa68ef1837240a195dbcfefa6a0a24b2f848c87d3')
pkgver() {
  cd "${srcdir}/${_realname}"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_realname}"
  patch -p1 -i patch -p1 -i "${srcdir}/0001-stat-check.patch"
  ./bootstrap
  autoreconf -fiv
}

build() {
  cd "${srcdir}/${_realname}"
  ./configure \
    --build=${CHOST} \
    --prefix=/usr

  make
}

package() {
  cd "${srcdir}/${_realname}"
  make DESTDIR=${pkgdir} install
}


================================================
FILE: elfutils/001-libintl-linking.patch
================================================
--- elfutils-0.173/libelf/Makefile.am.orig	2018-07-30 10:25:51.581470000 +0300
+++ elfutils-0.173/libelf/Makefile.am	2018-07-30 10:26:08.741500100 +0300
@@ -96,7 +96,7 @@
 am_libelf_pic_a_OBJECTS = $(libelf_a_SOURCES:.c=.os)
 
 libelf_so_DEPS = ../lib/libeu.a
-libelf_so_LDLIBS = $(libelf_so_DEPS) -lz
+libelf_so_LDLIBS = $(libelf_so_DEPS) -lz -lintl
 if USE_LOCKS
 libelf_so_LDLIBS += -lpthread
 endif
--- elfutils-0.173/libdw/Makefile.am.orig	2018-07-30 10:53:44.228407500 +0300
+++ elfutils-0.173/libdw/Makefile.am	2018-07-30 10:53:49.173616200 +0300
@@ -108,7 +108,7 @@
 libdw_so_LIBS = libdw_pic.a ../libdwelf/libdwelf_pic.a \
 	  ../libdwfl/libdwfl_pic.a ../libebl/libebl.a
 libdw_so_DEPS = ../lib/libeu.a ../libelf/libelf.so
-libdw_so_LDLIBS = $(libdw_so_DEPS) -ldl -lz $(argp_LDADD) $(zip_LIBS)
+libdw_so_LDLIBS = $(libdw_so_DEPS) -ldl -lz -lintl $(argp_LDADD) $(zip_LIBS)
 libdw_so_SOURCES =
 libdw.so$(EXEEXT): $(srcdir)/libdw.map $(libdw_so_LIBS) $(libdw_so_DEPS)
 # The rpath is necessary for libebl because its $ORIGIN use will
--- elfutils-0.173/libasm/Makefile.am.orig	2018-07-30 11:02:16.191106800 +0300
+++ elfutils-0.173/libasm/Makefile.am	2018-07-30 11:02:37.048343400 +0300
@@ -56,7 +56,7 @@
 am_libasm_pic_a_OBJECTS = $(libasm_a_SOURCES:.c=.os)
 
 libasm_so_DEPS = ../lib/libeu.a ../libebl/libebl.a ../libelf/libelf.so ../libdw/libdw.so
-libasm_so_LDLIBS = $(libasm_so_DEPS)
+libasm_so_LDLIBS = $(libasm_so_DEPS) -lintl
 if USE_LOCKS
 libasm_so_LDLIBS += -lpthread
 endif


================================================
FILE: elfutils/002-disable-new-dtags-flag.patch
================================================
--- elfutils-0.173/libdw/Makefile.am.orig	2018-07-30 10:45:42.116360700 +0300
+++ elfutils-0.173/libdw/Makefile.am	2018-07-30 10:46:09.978009700 +0300
@@ -115,7 +115,6 @@
 # not fly in a setuid executable that links in libdw.
 	$(AM_V_CCLD)$(LINK) $(dso_LDFLAGS) -o $@ \
 		-Wl,--soname,$@.$(VERSION) \
-		-Wl,--enable-new-dtags,-rpath,$(pkglibdir) \
 		-Wl,--version-script,$<,--no-undefined \
 		-Wl,--whole-archive $(libdw_so_LIBS) -Wl,--no-whole-archive \
 		$(libdw_so_LDLIBS)


================================================
FILE: elfutils/PKGBUILD
================================================
# Maintainer: Ray Donnelly <mingw.android@gmail.com>
# Contributor: Martell Malone <martellmalone@gmail.com>

pkgname=elfutils
pkgver=0.173
pkgrel=1
pkgdesc="Libraries and utilities to handle ELF object files and DWARF debugging information"
arch=('i686' 'x86_64')
url="https://fedorahosted.org/elfutils/"
license=('LGPL3' 'GPL' 'GPL3')
depends=('gcc-libs' 'bzip2')
provides=('libelf')
replaces=('libelf')
conflicts=('libelf')
source=(https://fedorahosted.org/releases/e/l/elfutils/${pkgver}/elfutils-${pkgver}.tar.bz2
        001-libintl-linking.patch
        002-disable-new-dtags-flag.patch)
options=('staticlibs')
sha256sums=('b76d8c133f68dad46250f5c223482c8299d454a69430d9aa5c19123345a000ff'
            '5078201680c7626f3d60c882d3088a5bf4d74c61101f90d54f882bb998f7c47e'
            '8e0745d32f85b1cc2bb6b117bce1fdb9d4a4a22a76a16aaf9803ccd33270e45b')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p1 -i ${srcdir}/001-libintl-linking.patch
  patch -p1 -i ${srcdir}/002-disable-new-dtags-flag.patch
  #rm -f config.guess config.sub
  #automake -a || true
  autoreconf -fi
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  CFLAGS+=" -g"  # required for test-suite success
  ./configure \
    --prefix=/usr \
    --build=${CHOST} \
    --enable-shared \
    --disable-symbol-versioning \
    --program-prefix="eu-"

  make
}

package() {
  cd ${srcdir}/${_realname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}


================================================
FILE: irssi-git/0000-msys2ize.patch
================================================
diff -ur irssi-orig/irssi.conf irssi/irssi.conf
--- irssi-orig/irssi.conf	2015-03-14 12:09:29.769857100 -0500
+++ irssi/irssi.conf	2015-03-14 12:10:59.681229900 -0500
@@ -97,6 +97,7 @@
   { name = "#lobby";     chatnet = "EsperNet";  autojoin = "No"; },
   { name = "#freenode";  chatnet = "Freenode";  autojoin = "No"; },
   { name = "#irssi";     chatnet = "Freenode";  autojoin = "No"; },
+  { name = "#msys2";     chatnet = "Freenode";  autojoin = "No"; },
   { name = "#gamesurge"; chatnet = "GameSurge"; autojoin = "No"; },
   { name = "#irssi";     chatnet = "IRCNet";    autojoin = "No"; },
   { name = "#ircsource"; chatnet = "IRCSource"; autojoin = "No"; },


================================================
FILE: irssi-git/PKGBUILD
================================================
# Maintainer: Richard F. Ashwell III <rashwell AT gmail DOT com>

_pkgname=irssi
pkgname=${_pkgname}-git
pkgver=r5277.aac20b15
pkgrel=2
pkgdesc="Modular text mode IRC client with Perl Scripting"
arch=('i686' 'x86_64')
depends=('openssl' 'gettext' 'perl' 'ncurses' 'glib2')
makedepends=('git' 'glib2-devel' 'perl-devel' 'pcre-devel' 'gettext-devel' 'ncurses-devel' 'elinks' 'openssl-devel')
optdepends=('perl-libwww: for scriptassist script')
url="https://github.com/irssi/irssi"
license=('GPL')
source=('irssi::git+https://github.com/irssi/irssi.git#branch=master'
        '0000-msys2ize.patch')
sha256sums=('SKIP'
            'ec2dc647191717c4abd9b86a51c085e9bb8ca13998726ef0be97f4d213577eb3')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    # echo 'Snap shotting /usr structure in case anything squeaks through fakeroot'
    # Used only when debugging installs
    # find /usr -xdev -printf '%p\t%c\n' | sort > before
    echo 'Autogen preventing configure until later'
    NOCONFIGURE=1 ./autogen.sh
    echo 'Applying patches simply adding #msys2 to default config'
    patch -p1 -i ${srcdir}/0000-msys2ize.patch
}

build() {
    cd "${srcdir}/${_pkgname}"
    ./configure --prefix=/usr \
       --disable-glibtest \
       --enable-ipv6 \
       --sysconfdir=/etc \
       --with-perl-lib=vendor \
       --with-perl-staticlib  
    make
 }

package() {
  cd "${srcdir}/${_pkgname}"
  echo 'Applying patches to Perl MakeMaker library misname'
  find . -name "Makefile" -type f | while read line; do sed -i 's/\([i|c|I]\)\.dll$/\1.a/' $line; done
  make DESTDIR="${pkgdir}" install
  # echo 'Snap shotting /usr structure post make to watch for leaks from fakeroot'
  # Used only whne debugging installs
  # find /usr -xdev -printf '%p\t%c\n' | sort > after
  # diff -u before after > usrchanges.diff
  # if [ -s userchanges.diff ]; then echo 'Review userchanges.diff something might have escaped fakeroot'; fi   
}



================================================
FILE: libffi-git/0001-msys2ize.patch
================================================
From d6819221d58742bfc1c57397db716820b4d8f46a Mon Sep 17 00:00:00 2001
From: Ray Donnelly <mingw.android@gmail.com>
Date: Tue, 30 Jun 2015 18:48:00 +0100
Subject: [PATCH] msys2ize

---
 configure.host | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)

diff --git a/configure.host b/configure.host
index 4062a48..9985b3e 100644
--- a/configure.host
+++ b/configure.host
@@ -64,7 +64,7 @@ case "${host}" in
 	TARGET=X86_FREEBSD; TARGETDIR=x86
 	;;
 
-  i?86-*-cygwin* | i?86-*-mingw* | i?86-*-os2* | i?86-*-interix* \
+  i?86-*-cygwin* | i?86-*-msys* | i?86-*-mingw* | i?86-*-os2* | i?86-*-interix* \
   | x86_64-*-cygwin* | x86_64-*-mingw* | x86_64-*-win* )
 	TARGETDIR=x86
 	if test $ac_cv_sizeof_size_t = 4; then
@@ -81,7 +81,7 @@ case "${host}" in
 	    UNSUPPORTED=1
           fi
 	fi
-	# All mingw/cygwin/win32 builds require -no-undefined for sharedlib.
+	# All mingw/cygwin/msys/win32 builds require -no-undefined for sharedlib.
 	# We must also check with_cross_host to decide if this is a native
 	# or cross-build and select where to install dlls appropriately.
 	if test -n "$with_cross_host" &&


================================================
FILE: libffi-git/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>

_realname='libffi'
pkgname=("${_realname}-git" "${_realname}-devel-git")
pkgver=v3.2.1.r283.gba2757a
pkgrel=2
pkgdesc="Portable, high level programming interface to various calling conventions"
arch=('i686' 'x86_64')
url="https://sourceware.org/libffi/"
groups=('libraries')
license=('MIT')
depends=()
checkdepends=('dejagnu')
#options=('!strip' 'debug')
install=libffi.install
source=("libffi"::"git+https://github.com/atgreen/libffi.git"
        config.sub
        config.guess
        0001-msys2ize.patch)
sha256sums=('SKIP'
            '6ef568e79ee95214ecb8b187bf14f168bd0889575e922e5e866c455186cfb063'
            '5744cab7fda627ef53dbd0d8cb1fa08b30d3702e01a621e028c5a12deee7c21c'
            '03af8e3eccb37048aa59a866bcd5f0b5b156ee28a0f59de1e7013a1d21ba4a18')

pkgver() {
  cd ${_realname}
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${_realname}
  cp ${srcdir}/config.sub .
  cp ${srcdir}/config.guess .
  git am ${srcdir}/0001-msys2ize.patch

  autoreconf -fi
}

build() {
  cd ${_realname}
  # Perform the build outside of srcdir so that
  # srcdir is not simplified to '.' as relative
  # paths in debug information are not ideal.
  [ -d build ] && rm -rf build
  mkdir build
  cd build
  local -a extra_config
  if check_option "debug" "y"; then
    extra_config+=("--enable-debug")
  fi
  ${srcdir}/${_realname}/configure \
    --prefix=/usr \
    --srcdir=${srcdir}/${_realname} \
    --build=${CHOST} \
    --enable-static \
    --enable-shared \
    "${extra_config[@]}"
  make
  make DESTDIR="${srcdir}/dest" install
}

check() {
  cd ${_realname}/build
  make check
}

package_libffi-git() {
  provides=("libffi=${pkgver}")
  conflicts=("libffi")

  mkdir -p $pkgdir/usr/bin
  cp -f ${srcdir}/dest/usr/bin/*.dll ${pkgdir}/usr/bin/
  cp -rf ${srcdir}/dest/usr/share ${pkgdir}/usr/
  install -Dm644 ${srcdir}/${_realname}/LICENSE "${pkgdir}"/usr/share/licenses/${_realname}/LICENSE
}

package_libffi-devel-git() {
  pkgdesc="Libffi headers and libraries"
  groups=('development')
  if check_option "debug" "y"; then
    options=('staticlibs' '!strip' 'debug')
  else
    options=('staticlibs' '!strip' 'debug')
  fi
  depends=("libffi=${pkgver}")
  provides=("libffi-devel=${pkgver}")
  conflicts=("libffi-devel")

  mkdir -p ${pkgdir}/usr
  #cp -rf ${srcdir}/dest/usr/include ${pkgdir}/usr/
  cp -rf ${srcdir}/dest/usr/lib ${pkgdir}/usr/
}


================================================
FILE: libffi-git/config.guess
================================================
#! /bin/sh
# Attempt to guess a canonical system name.
#   Copyright 1992-2015 Free Software Foundation, Inc.

timestamp='2015-03-04'

# This file is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, see <http://www.gnu.org/licenses/>.
#
# As a special exception to the GNU General Public License, if you
# distribute this file as part of a program that contains a
# configuration script generated by Autoconf, you may include it under
# the same distribution terms that you use for the rest of that
# program.  This Exception is an additional permission under section 7
# of the GNU General Public License, version 3 ("GPLv3").
#
# Originally written by Per Bothner; maintained since 2000 by Ben Elliston.
#
# You can get the latest version of this script from:
# http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD
#
# Please send patches to <config-patches@gnu.org>.


me=`echo "$0" | sed -e 's,.*/,,'`

usage="\
Usage: $0 [OPTION]

Output the configuration name of the system \`$me' is run on.

Operation modes:
  -h, --help         print this help, then exit
  -t, --time-stamp   print date of last modification, then exit
  -v, --version      print version number, then exit

Report bugs and patches to <config-patches@gnu.org>."

version="\
GNU config.guess ($timestamp)

Originally written by Per Bothner.
Copyright 1992-2015 Free Software Foundation, Inc.

This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE."

help="
Try \`$me --help' for more information."

# Parse command line
while test $# -gt 0 ; do
  case $1 in
    --time-stamp | --time* | -t )
       echo "$timestamp" ; exit ;;
    --version | -v )
       echo "$version" ; exit ;;
    --help | --h* | -h )
       echo "$usage"; exit ;;
    -- )     # Stop option processing
       shift; break ;;
    - )	# Use stdin as input.
       break ;;
    -* )
       echo "$me: invalid option $1$help" >&2
       exit 1 ;;
    * )
       break ;;
  esac
done

if test $# != 0; then
  echo "$me: too many arguments$help" >&2
  exit 1
fi

trap 'exit 1' 1 2 15

# CC_FOR_BUILD -- compiler used by this script. Note that the use of a
# compiler to aid in system detection is discouraged as it requires
# temporary files to be created and, as you can see below, it is a
# headache to deal with in a portable fashion.

# Historically, `CC_FOR_BUILD' used to be named `HOST_CC'. We still
# use `HOST_CC' if defined, but it is deprecated.

# Portable tmp directory creation inspired by the Autoconf team.

set_cc_for_build='
trap "exitcode=\$?; (rm -f \$tmpfiles 2>/dev/null; rmdir \$tmp 2>/dev/null) && exit \$exitcode" 0 ;
trap "rm -f \$tmpfiles 2>/dev/null; rmdir \$tmp 2>/dev/null; exit 1" 1 2 13 15 ;
: ${TMPDIR=/tmp} ;
 { tmp=`(umask 077 && mktemp -d "$TMPDIR/cgXXXXXX") 2>/dev/null` && test -n "$tmp" && test -d "$tmp" ; } ||
 { test -n "$RANDOM" && tmp=$TMPDIR/cg$$-$RANDOM && (umask 077 && mkdir $tmp) ; } ||
 { tmp=$TMPDIR/cg-$$ && (umask 077 && mkdir $tmp) && echo "Warning: creating insecure temp directory" >&2 ; } ||
 { echo "$me: cannot create a temporary directory in $TMPDIR" >&2 ; exit 1 ; } ;
dummy=$tmp/dummy ;
tmpfiles="$dummy.c $dummy.o $dummy.rel $dummy" ;
case $CC_FOR_BUILD,$HOST_CC,$CC in
 ,,)    echo "int x;" > $dummy.c ;
	for c in cc gcc c89 c99 ; do
	  if ($c -c -o $dummy.o $dummy.c) >/dev/null 2>&1 ; then
	     CC_FOR_BUILD="$c"; break ;
	  fi ;
	done ;
	if test x"$CC_FOR_BUILD" = x ; then
	  CC_FOR_BUILD=no_compiler_found ;
	fi
	;;
 ,,*)   CC_FOR_BUILD=$CC ;;
 ,*,*)  CC_FOR_BUILD=$HOST_CC ;;
esac ; set_cc_for_build= ;'

# This is needed to find uname on a Pyramid OSx when run in the BSD universe.
# (ghazi@noc.rutgers.edu 1994-08-24)
if (test -f /.attbin/uname) >/dev/null 2>&1 ; then
	PATH=$PATH:/.attbin ; export PATH
fi

UNAME_MACHINE=`(uname -m) 2>/dev/null` || UNAME_MACHINE=unknown
UNAME_RELEASE=`(uname -r) 2>/dev/null` || UNAME_RELEASE=unknown
UNAME_SYSTEM=`(uname -s) 2>/dev/null`  || UNAME_SYSTEM=unknown
UNAME_VERSION=`(uname -v) 2>/dev/null` || UNAME_VERSION=unknown

case "${UNAME_SYSTEM}" in
Linux|GNU|GNU/*)
	# If the system lacks a compiler, then just pick glibc.
	# We could probably try harder.
	LIBC=gnu

	eval $set_cc_for_build
	cat <<-EOF > $dummy.c
	#include <features.h>
	#if defined(__UCLIBC__)
	LIBC=uclibc
	#elif defined(__dietlibc__)
	LIBC=dietlibc
	#else
	LIBC=gnu
	#endif
	EOF
	eval `$CC_FOR_BUILD -E $dummy.c 2>/dev/null | grep '^LIBC' | sed 's, ,,g'`
	;;
esac

# Note: order is significant - the case branches are not exclusive.

case "${UNAME_MACHINE}:${UNAME_SYSTEM}:${UNAME_RELEASE}:${UNAME_VERSION}" in
    *:NetBSD:*:*)
	# NetBSD (nbsd) targets should (where applicable) match one or
	# more of the tuples: *-*-netbsdelf*, *-*-netbsdaout*,
	# *-*-netbsdecoff* and *-*-netbsd*.  For targets that recently
	# switched to ELF, *-*-netbsd* would select the old
	# object file format.  This provides both forward
	# compatibility and a consistent mechanism for selecting the
	# object file format.
	#
	# Note: NetBSD doesn't particularly care about the vendor
	# portion of the name.  We always set it to "unknown".
	sysctl="sysctl -n hw.machine_arch"
	UNAME_MACHINE_ARCH=`(uname -p 2>/dev/null || \
	    /sbin/$sysctl 2>/dev/null || \
	    /usr/sbin/$sysctl 2>/dev/null || \
	    echo unknown)`
	case "${UNAME_MACHINE_ARCH}" in
	    armeb) machine=armeb-unknown ;;
	    arm*) machine=arm-unknown ;;
	    sh3el) machine=shl-unknown ;;
	    sh3eb) machine=sh-unknown ;;
	    sh5el) machine=sh5le-unknown ;;
	    earmv*)
		arch=`echo ${UNAME_MACHINE_ARCH} | sed -e 's,^e\(armv[0-9]\).*$,\1,'`
		endian=`echo ${UNAME_MACHINE_ARCH} | sed -ne 's,^.*\(eb\)$,\1,p'`
		machine=${arch}${endian}-unknown
		;;
	    *) machine=${UNAME_MACHINE_ARCH}-unknown ;;
	esac
	# The Operating System including object format, if it has switched
	# to ELF recently, or will in the future.
	case "${UNAME_MACHINE_ARCH}" in
	    arm*|earm*|i386|m68k|ns32k|sh3*|sparc|vax)
		eval $set_cc_for_build
		if echo __ELF__ | $CC_FOR_BUILD -E - 2>/dev/null \
			| grep -q __ELF__
		then
		    # Once all utilities can be ECOFF (netbsdecoff) or a.out (netbsdaout).
		    # Return netbsd for either.  FIX?
		    os=netbsd
		else
		    os=netbsdelf
		fi
		;;
	    *)
		os=netbsd
		;;
	esac
	# Determine ABI tags.
	case "${UNAME_MACHINE_ARCH}" in
	    earm*)
		expr='s/^earmv[0-9]/-eabi/;s/eb$//'
		abi=`echo ${UNAME_MACHINE_ARCH} | sed -e "$expr"`
		;;
	esac
	# The OS release
	# Debian GNU/NetBSD machines have a different userland, and
	# thus, need a distinct triplet. However, they do not need
	# kernel version information, so it can be replaced with a
	# suitable tag, in the style of linux-gnu.
	case "${UNAME_VERSION}" in
	    Debian*)
		release='-gnu'
		;;
	    *)
		release=`echo ${UNAME_RELEASE}|sed -e 's/[-_].*/\./'`
		;;
	esac
	# Since CPU_TYPE-MANUFACTURER-KERNEL-OPERATING_SYSTEM:
	# contains redundant information, the shorter form:
	# CPU_TYPE-MANUFACTURER-OPERATING_SYSTEM is used.
	echo "${machine}-${os}${release}${abi}"
	exit ;;
    *:Bitrig:*:*)
	UNAME_MACHINE_ARCH=`arch | sed 's/Bitrig.//'`
	echo ${UNAME_MACHINE_ARCH}-unknown-bitrig${UNAME_RELEASE}
	exit ;;
    *:OpenBSD:*:*)
	UNAME_MACHINE_ARCH=`arch | sed 's/OpenBSD.//'`
	echo ${UNAME_MACHINE_ARCH}-unknown-openbsd${UNAME_RELEASE}
	exit ;;
    *:ekkoBSD:*:*)
	echo ${UNAME_MACHINE}-unknown-ekkobsd${UNAME_RELEASE}
	exit ;;
    *:SolidBSD:*:*)
	echo ${UNAME_MACHINE}-unknown-solidbsd${UNAME_RELEASE}
	exit ;;
    macppc:MirBSD:*:*)
	echo powerpc-unknown-mirbsd${UNAME_RELEASE}
	exit ;;
    *:MirBSD:*:*)
	echo ${UNAME_MACHINE}-unknown-mirbsd${UNAME_RELEASE}
	exit ;;
    alpha:OSF1:*:*)
	case $UNAME_RELEASE in
	*4.0)
		UNAME_RELEASE=`/usr/sbin/sizer -v | awk '{print $3}'`
		;;
	*5.*)
		UNAME_RELEASE=`/usr/sbin/sizer -v | awk '{print $4}'`
		;;
	esac
	# According to Compaq, /usr/sbin/psrinfo has been available on
	# OSF/1 and Tru64 systems produced since 1995.  I hope that
	# covers most systems running today.  This code pipes the CPU
	# types through head -n 1, so we only detect the type of CPU 0.
	ALPHA_CPU_TYPE=`/usr/sbin/psrinfo -v | sed -n -e 's/^  The alpha \(.*\) processor.*$/\1/p' | head -n 1`
	case "$ALPHA_CPU_TYPE" in
	    "EV4 (21064)")
		UNAME_MACHINE="alpha" ;;
	    "EV4.5 (21064)")
		UNAME_MACHINE="alpha" ;;
	    "LCA4 (21066/21068)")
		UNAME_MACHINE="alpha" ;;
	    "EV5 (21164)")
		UNAME_MACHINE="alphaev5" ;;
	    "EV5.6 (21164A)")
		UNAME_MACHINE="alphaev56" ;;
	    "EV5.6 (21164PC)")
		UNAME_MACHINE="alphapca56" ;;
	    "EV5.7 (21164PC)")
		UNAME_MACHINE="alphapca57" ;;
	    "EV6 (21264)")
		UNAME_MACHINE="alphaev6" ;;
	    "EV6.7 (21264A)")
		UNAME_MACHINE="alphaev67" ;;
	    "EV6.8CB (21264C)")
		UNAME_MACHINE="alphaev68" ;;
	    "EV6.8AL (21264B)")
		UNAME_MACHINE="alphaev68" ;;
	    "EV6.8CX (21264D)")
		UNAME_MACHINE="alphaev68" ;;
	    "EV6.9A (21264/EV69A)")
		UNAME_MACHINE="alphaev69" ;;
	    "EV7 (21364)")
		UNAME_MACHINE="alphaev7" ;;
	    "EV7.9 (21364A)")
		UNAME_MACHINE="alphaev79" ;;
	esac
	# A Pn.n version is a patched version.
	# A Vn.n version is a released version.
	# A Tn.n version is a released field test version.
	# A Xn.n version is an unreleased experimental baselevel.
	# 1.2 uses "1.2" for uname -r.
	echo ${UNAME_MACHINE}-dec-osf`echo ${UNAME_RELEASE} | sed -e 's/^[PVTX]//' | tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz'`
	# Reset EXIT trap before exiting to avoid spurious non-zero exit code.
	exitcode=$?
	trap '' 0
	exit $exitcode ;;
    Alpha\ *:Windows_NT*:*)
	# How do we know it's Interix rather than the generic POSIX subsystem?
	# Should we change UNAME_MACHINE based on the output of uname instead
	# of the specific Alpha model?
	echo alpha-pc-interix
	exit ;;
    21064:Windows_NT:50:3)
	echo alpha-dec-winnt3.5
	exit ;;
    Amiga*:UNIX_System_V:4.0:*)
	echo m68k-unknown-sysv4
	exit ;;
    *:[Aa]miga[Oo][Ss]:*:*)
	echo ${UNAME_MACHINE}-unknown-amigaos
	exit ;;
    *:[Mm]orph[Oo][Ss]:*:*)
	echo ${UNAME_MACHINE}-unknown-morphos
	exit ;;
    *:OS/390:*:*)
	echo i370-ibm-openedition
	exit ;;
    *:z/VM:*:*)
	echo s390-ibm-zvmoe
	exit ;;
    *:OS400:*:*)
	echo powerpc-ibm-os400
	exit ;;
    arm:RISC*:1.[012]*:*|arm:riscix:1.[012]*:*)
	echo arm-acorn-riscix${UNAME_RELEASE}
	exit ;;
    arm*:riscos:*:*|arm*:RISCOS:*:*)
	echo arm-unknown-riscos
	exit ;;
    SR2?01:HI-UX/MPP:*:* | SR8000:HI-UX/MPP:*:*)
	echo hppa1.1-hitachi-hiuxmpp
	exit ;;
    Pyramid*:OSx*:*:* | MIS*:OSx*:*:* | MIS*:SMP_DC-OSx*:*:*)
	# akee@wpdis03.wpafb.af.mil (Earle F. Ake) contributed MIS and NILE.
	if test "`(/bin/universe) 2>/dev/null`" = att ; then
		echo pyramid-pyramid-sysv3
	else
		echo pyramid-pyramid-bsd
	fi
	exit ;;
    NILE*:*:*:dcosx)
	echo pyramid-pyramid-svr4
	exit ;;
    DRS?6000:unix:4.0:6*)
	echo sparc-icl-nx6
	exit ;;
    DRS?6000:UNIX_SV:4.2*:7* | DRS?6000:isis:4.2*:7*)
	case `/usr/bin/uname -p` in
	    sparc) echo sparc-icl-nx7; exit ;;
	esac ;;
    s390x:SunOS:*:*)
	echo ${UNAME_MACHINE}-ibm-solaris2`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    sun4H:SunOS:5.*:*)
	echo sparc-hal-solaris2`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    sun4*:SunOS:5.*:* | tadpole*:SunOS:5.*:*)
	echo sparc-sun-solaris2`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    i86pc:AuroraUX:5.*:* | i86xen:AuroraUX:5.*:*)
	echo i386-pc-auroraux${UNAME_RELEASE}
	exit ;;
    i86pc:SunOS:5.*:* | i86xen:SunOS:5.*:*)
	eval $set_cc_for_build
	SUN_ARCH="i386"
	# If there is a compiler, see if it is configured for 64-bit objects.
	# Note that the Sun cc does not turn __LP64__ into 1 like gcc does.
	# This test works for both compilers.
	if [ "$CC_FOR_BUILD" != 'no_compiler_found' ]; then
	    if (echo '#ifdef __amd64'; echo IS_64BIT_ARCH; echo '#endif') | \
		(CCOPTS= $CC_FOR_BUILD -E - 2>/dev/null) | \
		grep IS_64BIT_ARCH >/dev/null
	    then
		SUN_ARCH="x86_64"
	    fi
	fi
	echo ${SUN_ARCH}-pc-solaris2`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    sun4*:SunOS:6*:*)
	# According to config.sub, this is the proper way to canonicalize
	# SunOS6.  Hard to guess exactly what SunOS6 will be like, but
	# it's likely to be more like Solaris than SunOS4.
	echo sparc-sun-solaris3`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    sun4*:SunOS:*:*)
	case "`/usr/bin/arch -k`" in
	    Series*|S4*)
		UNAME_RELEASE=`uname -v`
		;;
	esac
	# Japanese Language versions have a version number like `4.1.3-JL'.
	echo sparc-sun-sunos`echo ${UNAME_RELEASE}|sed -e 's/-/_/'`
	exit ;;
    sun3*:SunOS:*:*)
	echo m68k-sun-sunos${UNAME_RELEASE}
	exit ;;
    sun*:*:4.2BSD:*)
	UNAME_RELEASE=`(sed 1q /etc/motd | awk '{print substr($5,1,3)}') 2>/dev/null`
	test "x${UNAME_RELEASE}" = "x" && UNAME_RELEASE=3
	case "`/bin/arch`" in
	    sun3)
		echo m68k-sun-sunos${UNAME_RELEASE}
		;;
	    sun4)
		echo sparc-sun-sunos${UNAME_RELEASE}
		;;
	esac
	exit ;;
    aushp:SunOS:*:*)
	echo sparc-auspex-sunos${UNAME_RELEASE}
	exit ;;
    # The situation for MiNT is a little confusing.  The machine name
    # can be virtually everything (everything which is not
    # "atarist" or "atariste" at least should have a processor
    # > m68000).  The system name ranges from "MiNT" over "FreeMiNT"
    # to the lowercase version "mint" (or "freemint").  Finally
    # the system name "TOS" denotes a system which is actually not
    # MiNT.  But MiNT is downward compatible to TOS, so this should
    # be no problem.
    atarist[e]:*MiNT:*:* | atarist[e]:*mint:*:* | atarist[e]:*TOS:*:*)
	echo m68k-atari-mint${UNAME_RELEASE}
	exit ;;
    atari*:*MiNT:*:* | atari*:*mint:*:* | atarist[e]:*TOS:*:*)
	echo m68k-atari-mint${UNAME_RELEASE}
	exit ;;
    *falcon*:*MiNT:*:* | *falcon*:*mint:*:* | *falcon*:*TOS:*:*)
	echo m68k-atari-mint${UNAME_RELEASE}
	exit ;;
    milan*:*MiNT:*:* | milan*:*mint:*:* | *milan*:*TOS:*:*)
	echo m68k-milan-mint${UNAME_RELEASE}
	exit ;;
    hades*:*MiNT:*:* | hades*:*mint:*:* | *hades*:*TOS:*:*)
	echo m68k-hades-mint${UNAME_RELEASE}
	exit ;;
    *:*MiNT:*:* | *:*mint:*:* | *:*TOS:*:*)
	echo m68k-unknown-mint${UNAME_RELEASE}
	exit ;;
    m68k:machten:*:*)
	echo m68k-apple-machten${UNAME_RELEASE}
	exit ;;
    powerpc:machten:*:*)
	echo powerpc-apple-machten${UNAME_RELEASE}
	exit ;;
    RISC*:Mach:*:*)
	echo mips-dec-mach_bsd4.3
	exit ;;
    RISC*:ULTRIX:*:*)
	echo mips-dec-ultrix${UNAME_RELEASE}
	exit ;;
    VAX*:ULTRIX*:*:*)
	echo vax-dec-ultrix${UNAME_RELEASE}
	exit ;;
    2020:CLIX:*:* | 2430:CLIX:*:*)
	echo clipper-intergraph-clix${UNAME_RELEASE}
	exit ;;
    mips:*:*:UMIPS | mips:*:*:RISCos)
	eval $set_cc_for_build
	sed 's/^	//' << EOF >$dummy.c
#ifdef __cplusplus
#include <stdio.h>  /* for printf() prototype */
	int main (int argc, char *argv[]) {
#else
	int main (argc, argv) int argc; char *argv[]; {
#endif
	#if defined (host_mips) && defined (MIPSEB)
	#if defined (SYSTYPE_SYSV)
	  printf ("mips-mips-riscos%ssysv\n", argv[1]); exit (0);
	#endif
	#if defined (SYSTYPE_SVR4)
	  printf ("mips-mips-riscos%ssvr4\n", argv[1]); exit (0);
	#endif
	#if defined (SYSTYPE_BSD43) || defined(SYSTYPE_BSD)
	  printf ("mips-mips-riscos%sbsd\n", argv[1]); exit (0);
	#endif
	#endif
	  exit (-1);
	}
EOF
	$CC_FOR_BUILD -o $dummy $dummy.c &&
	  dummyarg=`echo "${UNAME_RELEASE}" | sed -n 's/\([0-9]*\).*/\1/p'` &&
	  SYSTEM_NAME=`$dummy $dummyarg` &&
	    { echo "$SYSTEM_NAME"; exit; }
	echo mips-mips-riscos${UNAME_RELEASE}
	exit ;;
    Motorola:PowerMAX_OS:*:*)
	echo powerpc-motorola-powermax
	exit ;;
    Motorola:*:4.3:PL8-*)
	echo powerpc-harris-powermax
	exit ;;
    Night_Hawk:*:*:PowerMAX_OS | Synergy:PowerMAX_OS:*:*)
	echo powerpc-harris-powermax
	exit ;;
    Night_Hawk:Power_UNIX:*:*)
	echo powerpc-harris-powerunix
	exit ;;
    m88k:CX/UX:7*:*)
	echo m88k-harris-cxux7
	exit ;;
    m88k:*:4*:R4*)
	echo m88k-motorola-sysv4
	exit ;;
    m88k:*:3*:R3*)
	echo m88k-motorola-sysv3
	exit ;;
    AViiON:dgux:*:*)
	# DG/UX returns AViiON for all architectures
	UNAME_PROCESSOR=`/usr/bin/uname -p`
	if [ $UNAME_PROCESSOR = mc88100 ] || [ $UNAME_PROCESSOR = mc88110 ]
	then
	    if [ ${TARGET_BINARY_INTERFACE}x = m88kdguxelfx ] || \
	       [ ${TARGET_BINARY_INTERFACE}x = x ]
	    then
		echo m88k-dg-dgux${UNAME_RELEASE}
	    else
		echo m88k-dg-dguxbcs${UNAME_RELEASE}
	    fi
	else
	    echo i586-dg-dgux${UNAME_RELEASE}
	fi
	exit ;;
    M88*:DolphinOS:*:*)	# DolphinOS (SVR3)
	echo m88k-dolphin-sysv3
	exit ;;
    M88*:*:R3*:*)
	# Delta 88k system running SVR3
	echo m88k-motorola-sysv3
	exit ;;
    XD88*:*:*:*) # Tektronix XD88 system running UTekV (SVR3)
	echo m88k-tektronix-sysv3
	exit ;;
    Tek43[0-9][0-9]:UTek:*:*) # Tektronix 4300 system running UTek (BSD)
	echo m68k-tektronix-bsd
	exit ;;
    *:IRIX*:*:*)
	echo mips-sgi-irix`echo ${UNAME_RELEASE}|sed -e 's/-/_/g'`
	exit ;;
    ????????:AIX?:[12].1:2)   # AIX 2.2.1 or AIX 2.1.1 is RT/PC AIX.
	echo romp-ibm-aix     # uname -m gives an 8 hex-code CPU id
	exit ;;               # Note that: echo "'`uname -s`'" gives 'AIX '
    i*86:AIX:*:*)
	echo i386-ibm-aix
	exit ;;
    ia64:AIX:*:*)
	if [ -x /usr/bin/oslevel ] ; then
		IBM_REV=`/usr/bin/oslevel`
	else
		IBM_REV=${UNAME_VERSION}.${UNAME_RELEASE}
	fi
	echo ${UNAME_MACHINE}-ibm-aix${IBM_REV}
	exit ;;
    *:AIX:2:3)
	if grep bos325 /usr/include/stdio.h >/dev/null 2>&1; then
		eval $set_cc_for_build
		sed 's/^		//' << EOF >$dummy.c
		#include <sys/systemcfg.h>

		main()
			{
			if (!__power_pc())
				exit(1);
			puts("powerpc-ibm-aix3.2.5");
			exit(0);
			}
EOF
		if $CC_FOR_BUILD -o $dummy $dummy.c && SYSTEM_NAME=`$dummy`
		then
			echo "$SYSTEM_NAME"
		else
			echo rs6000-ibm-aix3.2.5
		fi
	elif grep bos324 /usr/include/stdio.h >/dev/null 2>&1; then
		echo rs6000-ibm-aix3.2.4
	else
		echo rs6000-ibm-aix3.2
	fi
	exit ;;
    *:AIX:*:[4567])
	IBM_CPU_ID=`/usr/sbin/lsdev -C -c processor -S available | sed 1q | awk '{ print $1 }'`
	if /usr/sbin/lsattr -El ${IBM_CPU_ID} | grep ' POWER' >/dev/null 2>&1; then
		IBM_ARCH=rs6000
	else
		IBM_ARCH=powerpc
	fi
	if [ -x /usr/bin/lslpp ] ; then
		IBM_REV=`/usr/bin/lslpp -Lqc bos.rte.libc |
			   awk -F: '{ print $3 }' | sed s/[0-9]*$/0/`
	else
		IBM_REV=${UNAME_VERSION}.${UNAME_RELEASE}
	fi
	echo ${IBM_ARCH}-ibm-aix${IBM_REV}
	exit ;;
    *:AIX:*:*)
	echo rs6000-ibm-aix
	exit ;;
    ibmrt:4.4BSD:*|romp-ibm:BSD:*)
	echo romp-ibm-bsd4.4
	exit ;;
    ibmrt:*BSD:*|romp-ibm:BSD:*)            # covers RT/PC BSD and
	echo romp-ibm-bsd${UNAME_RELEASE}   # 4.3 with uname added to
	exit ;;                             # report: romp-ibm BSD 4.3
    *:BOSX:*:*)
	echo rs6000-bull-bosx
	exit ;;
    DPX/2?00:B.O.S.:*:*)
	echo m68k-bull-sysv3
	exit ;;
    9000/[34]??:4.3bsd:1.*:*)
	echo m68k-hp-bsd
	exit ;;
    hp300:4.4BSD:*:* | 9000/[34]??:4.3bsd:2.*:*)
	echo m68k-hp-bsd4.4
	exit ;;
    9000/[34678]??:HP-UX:*:*)
	HPUX_REV=`echo ${UNAME_RELEASE}|sed -e 's/[^.]*.[0B]*//'`
	case "${UNAME_MACHINE}" in
	    9000/31? )            HP_ARCH=m68000 ;;
	    9000/[34]?? )         HP_ARCH=m68k ;;
	    9000/[678][0-9][0-9])
		if [ -x /usr/bin/getconf ]; then
		    sc_cpu_version=`/usr/bin/getconf SC_CPU_VERSION 2>/dev/null`
		    sc_kernel_bits=`/usr/bin/getconf SC_KERNEL_BITS 2>/dev/null`
		    case "${sc_cpu_version}" in
		      523) HP_ARCH="hppa1.0" ;; # CPU_PA_RISC1_0
		      528) HP_ARCH="hppa1.1" ;; # CPU_PA_RISC1_1
		      532)                      # CPU_PA_RISC2_0
			case "${sc_kernel_bits}" in
			  32) HP_ARCH="hppa2.0n" ;;
			  64) HP_ARCH="hppa2.0w" ;;
			  '') HP_ARCH="hppa2.0" ;;   # HP-UX 10.20
			esac ;;
		    esac
		fi
		if [ "${HP_ARCH}" = "" ]; then
		    eval $set_cc_for_build
		    sed 's/^		//' << EOF >$dummy.c

		#define _HPUX_SOURCE
		#include <stdlib.h>
		#include <unistd.h>

		int main ()
		{
		#if defined(_SC_KERNEL_BITS)
		    long bits = sysconf(_SC_KERNEL_BITS);
		#endif
		    long cpu  = sysconf (_SC_CPU_VERSION);

		    switch (cpu)
			{
			case CPU_PA_RISC1_0: puts ("hppa1.0"); break;
			case CPU_PA_RISC1_1: puts ("hppa1.1"); break;
			case CPU_PA_RISC2_0:
		#if defined(_SC_KERNEL_BITS)
			    switch (bits)
				{
				case 64: puts ("hppa2.0w"); break;
				case 32: puts ("hppa2.0n"); break;
				default: puts ("hppa2.0"); break;
				} break;
		#else  /* !defined(_SC_KERNEL_BITS) */
			    puts ("hppa2.0"); break;
		#endif
			default: puts ("hppa1.0"); break;
			}
		    exit (0);
		}
EOF
		    (CCOPTS= $CC_FOR_BUILD -o $dummy $dummy.c 2>/dev/null) && HP_ARCH=`$dummy`
		    test -z "$HP_ARCH" && HP_ARCH=hppa
		fi ;;
	esac
	if [ ${HP_ARCH} = "hppa2.0w" ]
	then
	    eval $set_cc_for_build

	    # hppa2.0w-hp-hpux* has a 64-bit kernel and a compiler generating
	    # 32-bit code.  hppa64-hp-hpux* has the same kernel and a compiler
	    # generating 64-bit code.  GNU and HP use different nomenclature:
	    #
	    # $ CC_FOR_BUILD=cc ./config.guess
	    # => hppa2.0w-hp-hpux11.23
	    # $ CC_FOR_BUILD="cc +DA2.0w" ./config.guess
	    # => hppa64-hp-hpux11.23

	    if echo __LP64__ | (CCOPTS= $CC_FOR_BUILD -E - 2>/dev/null) |
		grep -q __LP64__
	    then
		HP_ARCH="hppa2.0w"
	    else
		HP_ARCH="hppa64"
	    fi
	fi
	echo ${HP_ARCH}-hp-hpux${HPUX_REV}
	exit ;;
    ia64:HP-UX:*:*)
	HPUX_REV=`echo ${UNAME_RELEASE}|sed -e 's/[^.]*.[0B]*//'`
	echo ia64-hp-hpux${HPUX_REV}
	exit ;;
    3050*:HI-UX:*:*)
	eval $set_cc_for_build
	sed 's/^	//' << EOF >$dummy.c
	#include <unistd.h>
	int
	main ()
	{
	  long cpu = sysconf (_SC_CPU_VERSION);
	  /* The order matters, because CPU_IS_HP_MC68K erroneously returns
	     true for CPU_PA_RISC1_0.  CPU_IS_PA_RISC returns correct
	     results, however.  */
	  if (CPU_IS_PA_RISC (cpu))
	    {
	      switch (cpu)
		{
		  case CPU_PA_RISC1_0: puts ("hppa1.0-hitachi-hiuxwe2"); break;
		  case CPU_PA_RISC1_1: puts ("hppa1.1-hitachi-hiuxwe2"); break;
		  case CPU_PA_RISC2_0: puts ("hppa2.0-hitachi-hiuxwe2"); break;
		  default: puts ("hppa-hitachi-hiuxwe2"); break;
		}
	    }
	  else if (CPU_IS_HP_MC68K (cpu))
	    puts ("m68k-hitachi-hiuxwe2");
	  else puts ("unknown-hitachi-hiuxwe2");
	  exit (0);
	}
EOF
	$CC_FOR_BUILD -o $dummy $dummy.c && SYSTEM_NAME=`$dummy` &&
		{ echo "$SYSTEM_NAME"; exit; }
	echo unknown-hitachi-hiuxwe2
	exit ;;
    9000/7??:4.3bsd:*:* | 9000/8?[79]:4.3bsd:*:* )
	echo hppa1.1-hp-bsd
	exit ;;
    9000/8??:4.3bsd:*:*)
	echo hppa1.0-hp-bsd
	exit ;;
    *9??*:MPE/iX:*:* | *3000*:MPE/iX:*:*)
	echo hppa1.0-hp-mpeix
	exit ;;
    hp7??:OSF1:*:* | hp8?[79]:OSF1:*:* )
	echo hppa1.1-hp-osf
	exit ;;
    hp8??:OSF1:*:*)
	echo hppa1.0-hp-osf
	exit ;;
    i*86:OSF1:*:*)
	if [ -x /usr/sbin/sysversion ] ; then
	    echo ${UNAME_MACHINE}-unknown-osf1mk
	else
	    echo ${UNAME_MACHINE}-unknown-osf1
	fi
	exit ;;
    parisc*:Lites*:*:*)
	echo hppa1.1-hp-lites
	exit ;;
    C1*:ConvexOS:*:* | convex:ConvexOS:C1*:*)
	echo c1-convex-bsd
	exit ;;
    C2*:ConvexOS:*:* | convex:ConvexOS:C2*:*)
	if getsysinfo -f scalar_acc
	then echo c32-convex-bsd
	else echo c2-convex-bsd
	fi
	exit ;;
    C34*:ConvexOS:*:* | convex:ConvexOS:C34*:*)
	echo c34-convex-bsd
	exit ;;
    C38*:ConvexOS:*:* | convex:ConvexOS:C38*:*)
	echo c38-convex-bsd
	exit ;;
    C4*:ConvexOS:*:* | convex:ConvexOS:C4*:*)
	echo c4-convex-bsd
	exit ;;
    CRAY*Y-MP:*:*:*)
	echo ymp-cray-unicos${UNAME_RELEASE} | sed -e 's/\.[^.]*$/.X/'
	exit ;;
    CRAY*[A-Z]90:*:*:*)
	echo ${UNAME_MACHINE}-cray-unicos${UNAME_RELEASE} \
	| sed -e 's/CRAY.*\([A-Z]90\)/\1/' \
	      -e y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/ \
	      -e 's/\.[^.]*$/.X/'
	exit ;;
    CRAY*TS:*:*:*)
	echo t90-cray-unicos${UNAME_RELEASE} | sed -e 's/\.[^.]*$/.X/'
	exit ;;
    CRAY*T3E:*:*:*)
	echo alphaev5-cray-unicosmk${UNAME_RELEASE} | sed -e 's/\.[^.]*$/.X/'
	exit ;;
    CRAY*SV1:*:*:*)
	echo sv1-cray-unicos${UNAME_RELEASE} | sed -e 's/\.[^.]*$/.X/'
	exit ;;
    *:UNICOS/mp:*:*)
	echo craynv-cray-unicosmp${UNAME_RELEASE} | sed -e 's/\.[^.]*$/.X/'
	exit ;;
    F30[01]:UNIX_System_V:*:* | F700:UNIX_System_V:*:*)
	FUJITSU_PROC=`uname -m | tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz'`
	FUJITSU_SYS=`uname -p | tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz' | sed -e 's/\///'`
	FUJITSU_REL=`echo ${UNAME_RELEASE} | sed -e 's/ /_/'`
	echo "${FUJITSU_PROC}-fujitsu-${FUJITSU_SYS}${FUJITSU_REL}"
	exit ;;
    5000:UNIX_System_V:4.*:*)
	FUJITSU_SYS=`uname -p | tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz' | sed -e 's/\///'`
	FUJITSU_REL=`echo ${UNAME_RELEASE} | tr 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz' | sed -e 's/ /_/'`
	echo "sparc-fujitsu-${FUJITSU_SYS}${FUJITSU_REL}"
	exit ;;
    i*86:BSD/386:*:* | i*86:BSD/OS:*:* | *:Ascend\ Embedded/OS:*:*)
	echo ${UNAME_MACHINE}-pc-bsdi${UNAME_RELEASE}
	exit ;;
    sparc*:BSD/OS:*:*)
	echo sparc-unknown-bsdi${UNAME_RELEASE}
	exit ;;
    *:BSD/OS:*:*)
	echo ${UNAME_MACHINE}-unknown-bsdi${UNAME_RELEASE}
	exit ;;
    *:FreeBSD:*:*)
	UNAME_PROCESSOR=`/usr/bin/uname -p`
	case ${UNAME_PROCESSOR} in
	    amd64)
		echo x86_64-unknown-freebsd`echo ${UNAME_RELEASE}|sed -e 's/[-(].*//'` ;;
	    *)
		echo ${UNAME_PROCESSOR}-unknown-freebsd`echo ${UNAME_RELEASE}|sed -e 's/[-(].*//'` ;;
	esac
	exit ;;
    i*:CYGWIN*:*)
	echo ${UNAME_MACHINE}-pc-cygwin
	exit ;;
    *:MINGW64*:*)
	echo ${UNAME_MACHINE}-w64-mingw32
	exit ;;
    *:MINGW32*:*)
	case "${UNAME_RELEASE}" in
	    1.*)
		echo ${UNAME_MACHINE}-pc-mingw32
		exit ;;
	esac
	echo ${UNAME_MACHINE}-w64-mingw32
	exit ;;
    *:MSYS*:*)
	echo ${UNAME_MACHINE}-pc-msys
	exit ;;
    i*:windows32*:*)
	# uname -m includes "-pc" on this system.
	echo ${UNAME_MACHINE}-mingw32
	exit ;;
    i*:PW*:*)
	echo ${UNAME_MACHINE}-pc-pw32
	exit ;;
    *:Interix*:*)
	case ${UNAME_MACHINE} in
	    x86)
		echo i586-pc-interix${UNAME_RELEASE}
		exit ;;
	    authenticamd | genuineintel | EM64T)
		echo x86_64-unknown-interix${UNAME_RELEASE}
		exit ;;
	    IA64)
		echo ia64-unknown-interix${UNAME_RELEASE}
		exit ;;
	esac ;;
    [345]86:Windows_95:* | [345]86:Windows_98:* | [345]86:Windows_NT:*)
	echo i${UNAME_MACHINE}-pc-mks
	exit ;;
    8664:Windows_NT:*)
	echo x86_64-pc-mks
	exit ;;
    i*:Windows_NT*:* | Pentium*:Windows_NT*:*)
	# How do we know it's Interix rather than the generic POSIX subsystem?
	# It also conflicts with pre-2.0 versions of AT&T UWIN. Should we
	# UNAME_MACHINE based on the output of uname instead of i386?
	echo i586-pc-interix
	exit ;;
    i*:UWIN*:*)
	echo ${UNAME_MACHINE}-pc-uwin
	exit ;;
    amd64:CYGWIN*:*:* | x86_64:CYGWIN*:*:*)
	echo x86_64-unknown-cygwin
	exit ;;
    p*:CYGWIN*:*)
	echo powerpcle-unknown-cygwin
	exit ;;
    prep*:SunOS:5.*:*)
	echo powerpcle-unknown-solaris2`echo ${UNAME_RELEASE}|sed -e 's/[^.]*//'`
	exit ;;
    *:GNU:*:*)
	# the GNU system
	echo `echo ${UNAME_MACHINE}|sed -e 's,[-/].*$,,'`-unknown-${LIBC}`echo ${UNAME_RELEASE}|sed -e 's,/.*$,,'`
	exit ;;
    *:GNU/*:*:*)
	# other systems with GNU libc and userland
	echo ${UNAME_MACHINE}-unknown-`echo ${UNAME_SYSTEM} | sed 's,^[^/]*/,,' | tr '[A-Z]' '[a-z]'``echo ${UNAME_RELEASE}|sed -e 's/[-(].*//'`-${LIBC}
	exit ;;
    i*86:Minix:*:*)
	echo ${UNAME_MACHINE}-pc-minix
	exit ;;
    aarch64:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    aarch64_be:Linux:*:*)
	UNAME_MACHINE=aarch64_be
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    alpha:Linux:*:*)
	case `sed -n '/^cpu model/s/^.*: \(.*\)/\1/p' < /proc/cpuinfo` in
	  EV5)   UNAME_MACHINE=alphaev5 ;;
	  EV56)  UNAME_MACHINE=alphaev56 ;;
	  PCA56) UNAME_MACHINE=alphapca56 ;;
	  PCA57) UNAME_MACHINE=alphapca56 ;;
	  EV6)   UNAME_MACHINE=alphaev6 ;;
	  EV67)  UNAME_MACHINE=alphaev67 ;;
	  EV68*) UNAME_MACHINE=alphaev68 ;;
	esac
	objdump --private-headers /bin/sh | grep -q ld.so.1
	if test "$?" = 0 ; then LIBC="gnulibc1" ; fi
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    arc:Linux:*:* | arceb:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    arm*:Linux:*:*)
	eval $set_cc_for_build
	if echo __ARM_EABI__ | $CC_FOR_BUILD -E - 2>/dev/null \
	    | grep -q __ARM_EABI__
	then
	    echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	else
	    if echo __ARM_PCS_VFP | $CC_FOR_BUILD -E - 2>/dev/null \
		| grep -q __ARM_PCS_VFP
	    then
		echo ${UNAME_MACHINE}-unknown-linux-${LIBC}eabi
	    else
		echo ${UNAME_MACHINE}-unknown-linux-${LIBC}eabihf
	    fi
	fi
	exit ;;
    avr32*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    cris:Linux:*:*)
	echo ${UNAME_MACHINE}-axis-linux-${LIBC}
	exit ;;
    crisv32:Linux:*:*)
	echo ${UNAME_MACHINE}-axis-linux-${LIBC}
	exit ;;
    e2k:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    frv:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    hexagon:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    i*86:Linux:*:*)
	echo ${UNAME_MACHINE}-pc-linux-${LIBC}
	exit ;;
    ia64:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    m32r*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    m68*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    mips:Linux:*:* | mips64:Linux:*:*)
	eval $set_cc_for_build
	sed 's/^	//' << EOF >$dummy.c
	#undef CPU
	#undef ${UNAME_MACHINE}
	#undef ${UNAME_MACHINE}el
	#if defined(__MIPSEL__) || defined(__MIPSEL) || defined(_MIPSEL) || defined(MIPSEL)
	CPU=${UNAME_MACHINE}el
	#else
	#if defined(__MIPSEB__) || defined(__MIPSEB) || defined(_MIPSEB) || defined(MIPSEB)
	CPU=${UNAME_MACHINE}
	#else
	CPU=
	#endif
	#endif
EOF
	eval `$CC_FOR_BUILD -E $dummy.c 2>/dev/null | grep '^CPU'`
	test x"${CPU}" != x && { echo "${CPU}-unknown-linux-${LIBC}"; exit; }
	;;
    openrisc*:Linux:*:*)
	echo or1k-unknown-linux-${LIBC}
	exit ;;
    or32:Linux:*:* | or1k*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    padre:Linux:*:*)
	echo sparc-unknown-linux-${LIBC}
	exit ;;
    parisc64:Linux:*:* | hppa64:Linux:*:*)
	echo hppa64-unknown-linux-${LIBC}
	exit ;;
    parisc:Linux:*:* | hppa:Linux:*:*)
	# Look for CPU level
	case `grep '^cpu[^a-z]*:' /proc/cpuinfo 2>/dev/null | cut -d' ' -f2` in
	  PA7*) echo hppa1.1-unknown-linux-${LIBC} ;;
	  PA8*) echo hppa2.0-unknown-linux-${LIBC} ;;
	  *)    echo hppa-unknown-linux-${LIBC} ;;
	esac
	exit ;;
    ppc64:Linux:*:*)
	echo powerpc64-unknown-linux-${LIBC}
	exit ;;
    ppc:Linux:*:*)
	echo powerpc-unknown-linux-${LIBC}
	exit ;;
    ppc64le:Linux:*:*)
	echo powerpc64le-unknown-linux-${LIBC}
	exit ;;
    ppcle:Linux:*:*)
	echo powerpcle-unknown-linux-${LIBC}
	exit ;;
    s390:Linux:*:* | s390x:Linux:*:*)
	echo ${UNAME_MACHINE}-ibm-linux-${LIBC}
	exit ;;
    sh64*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    sh*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    sparc:Linux:*:* | sparc64:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    tile*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    vax:Linux:*:*)
	echo ${UNAME_MACHINE}-dec-linux-${LIBC}
	exit ;;
    x86_64:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    xtensa*:Linux:*:*)
	echo ${UNAME_MACHINE}-unknown-linux-${LIBC}
	exit ;;
    i*86:DYNIX/ptx:4*:*)
	# ptx 4.0 does uname -s correctly, with DYNIX/ptx in there.
	# earlier versions are messed up and put the nodename in both
	# sysname and nodename.
	echo i386-sequent-sysv4
	exit ;;
    i*86:UNIX_SV:4.2MP:2.*)
	# Unixware is an offshoot of SVR4, but it has its own version
	# number series starting with 2...
	# I am not positive that other SVR4 systems won't match this,
	# I just have to hope.  -- rms.
	# Use sysv4.2uw... so that sysv4* matches it.
	echo ${UNAME_MACHINE}-pc-sysv4.2uw${UNAME_VERSION}
	exit ;;
    i*86:OS/2:*:*)
	# If we were able to find `uname', then EMX Unix compatibility
	# is probably installed.
	echo ${UNAME_MACHINE}-pc-os2-emx
	exit ;;
    i*86:XTS-300:*:STOP)
	echo ${UNAME_MACHINE}-unknown-stop
	exit ;;
    i*86:atheos:*:*)
	echo ${UNAME_MACHINE}-unknown-atheos
	exit ;;
    i*86:syllable:*:*)
	echo ${UNAME_MACHINE}-pc-syllable
	exit ;;
    i*86:LynxOS:2.*:* | i*86:LynxOS:3.[01]*:* | i*86:LynxOS:4.[02]*:*)
	echo i386-unknown-lynxos${UNAME_RELEASE}
	exit ;;
    i*86:*DOS:*:*)
	echo ${UNAME_MACHINE}-pc-msdosdjgpp
	exit ;;
    i*86:*:4.*:* | i*86:SYSTEM_V:4.*:*)
	UNAME_REL=`echo ${UNAME_RELEASE} | sed 's/\/MP$//'`
	if grep Novell /usr/include/link.h >/dev/null 2>/dev/null; then
		echo ${UNAME_MACHINE}-univel-sysv${UNAME_REL}
	else
		echo ${UNAME_MACHINE}-pc-sysv${UNAME_REL}
	fi
	exit ;;
    i*86:*:5:[678]*)
	# UnixWare 7.x, OpenUNIX and OpenServer 6.
	case `/bin/uname -X | grep "^Machine"` in
	    *486*)	     UNAME_MACHINE=i486 ;;
	    *Pentium)	     UNAME_MACHINE=i586 ;;
	    *Pent*|*Celeron) UNAME_MACHINE=i686 ;;
	esac
	echo ${UNAME_MACHINE}-unknown-sysv${UNAME_RELEASE}${UNAME_SYSTEM}${UNAME_VERSION}
	exit ;;
    i*86:*:3.2:*)
	if test -f /usr/options/cb.name; then
		UNAME_REL=`sed -n 's/.*Version //p' </usr/options/cb.name`
		echo ${UNAME_MACHINE}-pc-isc$UNAME_REL
	elif /bin/uname -X 2>/dev/null >/dev/null ; then
		UNAME_REL=`(/bin/uname -X|grep Release|sed -e 's/.*= //')`
		(/bin/uname -X|grep i80486 >/dev/null) && UNAME_MACHINE=i486
		(/bin/uname -X|grep '^Machine.*Pentium' >/dev/null) \
			&& UNAME_MACHINE=i586
		(/bin/uname -X|grep '^Machine.*Pent *II' >/dev/null) \
			&& UNAME_MACHINE=i686
		(/bin/uname -X|grep '^Machine.*Pentium Pro' >/dev/null) \
			&& UNAME_MACHINE=i686
		echo ${UNAME_MACHINE}-pc-sco$UNAME_REL
	else
		echo ${UNAME_MACHINE}-pc-sysv32
	fi
	exit ;;
    pc:*:*:*)
	# Left here for compatibility:
	# uname -m prints for DJGPP always 'pc', but it prints nothing about
	# the processor, so we play safe by assuming i586.
	# Note: whatever this is, it MUST be the same as what config.sub
	# prints for the "djgpp" host, or else GDB configury will decide that
	# this is a cross-build.
	echo i586-pc-msdosdjgpp
	exit ;;
    Intel:Mach:3*:*)
	echo i386-pc-mach3
	exit ;;
    paragon:*:*:*)
	echo i860-intel-osf1
	exit ;;
    i860:*:4.*:*) # i860-SVR4
	if grep Stardent /usr/include/sys/uadmin.h >/dev/null 2>&1 ; then
	  echo i860-stardent-sysv${UNAME_RELEASE} # Stardent Vistra i860-SVR4
	else # Add other i860-SVR4 vendors below as they are discovered.
	  echo i860-unknown-sysv${UNAME_RELEASE}  # Unknown i860-SVR4
	fi
	exit ;;
    mini*:CTIX:SYS*5:*)
	# "miniframe"
	echo m68010-convergent-sysv
	exit ;;
    mc68k:UNIX:SYSTEM5:3.51m)
	echo m68k-convergent-sysv
	exit ;;
    M680?0:D-NIX:5.3:*)
	echo m68k-diab-dnix
	exit ;;
    M68*:*:R3V[5678]*:*)
	test -r /sysV68 && { echo 'm68k-motorola-sysv'; exit; } ;;
    3[345]??:*:4.0:3.0 | 3[34]??A:*:4.0:3.0 | 3[34]??,*:*:4.0:3.0 | 3[34]??/*:*:4.0:3.0 | 4400:*:4.0:3.0 | 4850:*:4.0:3.0 | SKA40:*:4.0:3.0 | SDS2:*:4.0:3.0 | SHG2:*:4.0:3.0 | S7501*:*:4.0:3.0)
	OS_REL=''
	test -r /etc/.relid \
	&& OS_REL=.`sed -n 's/[^ ]* [^ ]* \([0-9][0-9]\).*/\1/p' < /etc/.relid`
	/bin/uname -p 2>/dev/null | grep 86 >/dev/null \
	  && { echo i486-ncr-sysv4.3${OS_REL}; exit; }
	/bin/uname -p 2>/dev/null | /bin/grep entium >/dev/null \
	  && { echo i586-ncr-sysv4.3${OS_REL}; exit; } ;;
    3[34]??:*:4.0:* | 3[34]??,*:*:4.0:*)
	/bin/uname -p 2>/dev/null | grep 86 >/dev/null \
	  && { echo i486-ncr-sysv4; exit; } ;;
    NCR*:*:4.2:* | MPRAS*:*:4.2:*)
	OS_REL='.3'
	test -r /etc/.relid \
	    && OS_REL=.`sed -n 's/[^ ]* [^ ]* \([0-9][0-9]\).*/\1/p' < /etc/.relid`
	/bin/uname -p 2>/dev/null | grep 86 >/dev/null \
	    && { echo i486-ncr-sysv4.3${OS_REL}; exit; }
	/bin/uname -p 2>/dev/null | /bin/grep entium >/dev/null \
	    && { echo i586-ncr-sysv4.3${OS_REL}; exit; }
	/bin/uname -p 2>/dev/null | /bin/grep pteron >/dev/null \
	    && { echo i586-ncr-sysv4.3${OS_REL}; exit; } ;;
    m68*:LynxOS:2.*:* | m68*:LynxOS:3.0*:*)
	echo m68k-unknown-lynxos${UNAME_RELEASE}
	exit ;;
    mc68030:UNIX_System_V:4.*:*)
	echo m68k-atari-sysv4
	exit ;;
    TSUNAMI:LynxOS:2.*:*)
	echo sparc-unknown-lynxos${UNAME_RELEASE}
	exit ;;
    rs6000:LynxOS:2.*:*)
	echo rs6000-unknown-lynxos${UNAME_RELEASE}
	exit ;;
    PowerPC:LynxOS:2.*:* | PowerPC:LynxOS:3.[01]*:* | PowerPC:LynxOS:4.[02]*:*)
	echo powerpc-unknown-lynxos${UNAME_RELEASE}
	exit ;;
    SM[BE]S:UNIX_SV:*:*)
	echo mips-dde-sysv${UNAME_RELEASE}
	exit ;;
    RM*:ReliantUNIX-*:*:*)
	echo mips-sni-sysv4
	exit ;;
    RM*:SINIX-*:*:*)
	echo mips-sni-sysv4
	exit ;;
    *:SINIX-*:*:*)
	if uname -p 2>/dev/null >/dev/null ; then
		UNAME_MACHINE=`(uname -p) 2>/dev/null`
		echo ${UNAME_MACHINE}-sni-sysv4
	else
		echo ns32k-sni-sysv
	fi
	exit ;;
    PENTIUM:*:4.0*:*)	# Unisys `ClearPath HMP IX 4000' SVR4/MP effort
			# says <Richard.M.Bartel@ccMail.Census.GOV>
	echo i586-unisys-sysv4
	exit ;;
    *:UNIX_System_V:4*:FTX*)
	# From Gerald Hewes <hewes@openmarket.com>.
	# How about differentiating between stratus architectures? -djm
	echo hppa1.1-stratus-sysv4
	exit ;;
    *:*:*:FTX*)
	# From seanf@swdc.stratus.com.
	echo i860-stratus-sysv4
	exit ;;
    i*86:VOS:*:*)
	# From Paul.Green@stratus.com.
	echo ${UNAME_MACHINE}-stratus-vos
	exit ;;
    *:VOS:*:*)
	# From Paul.Green@stratus.com.
	echo hppa1.1-stratus-vos
	exit ;;
    mc68*:A/UX:*:*)
	echo m68k-apple-aux${UNAME_RELEASE}
	exit ;;
    news*:NEWS-OS:6*:*)
	echo mips-sony-newsos6
	exit ;;
    R[34]000:*System_V*:*:* | R4000:UNIX_SYSV:*:* | R*000:UNIX_SV:*:*)
	if [ -d /usr/nec ]; then
		echo mips-nec-sysv${UNAME_RELEASE}
	else
		echo mips-unknown-sysv${UNAME_RELEASE}
	fi
	exit ;;
    BeBox:BeOS:*:*)	# BeOS running on hardware made by Be, PPC only.
	echo powerpc-be-beos
	exit ;;
    BeMac:BeOS:*:*)	# BeOS running on Mac or Mac clone, PPC only.
	echo powerpc-apple-beos
	exit ;;
    BePC:BeOS:*:*)	# BeOS running on Intel PC compatible.
	echo i586-pc-beos
	exit ;;
    BePC:Haiku:*:*)	# Haiku running on Intel PC compatible.
	echo i586-pc-haiku
	exit ;;
    x86_64:Haiku:*:*)
	echo x86_64-unknown-haiku
	exit ;;
    SX-4:SUPER-UX:*:*)
	echo sx4-nec-superux${UNAME_RELEASE}
	exit ;;
    SX-5:SUPER-UX:*:*)
	echo sx5-nec-superux${UNAME_RELEASE}
	exit ;;
    SX-6:SUPER-UX:*:*)
	echo sx6-nec-superux${UNAME_RELEASE}
	exit ;;
    SX-7:SUPER-UX:*:*)
	echo sx7-nec-superux${UNAME_RELEASE}
	exit ;;
    SX-8:SUPER-UX:*:*)
	echo sx8-nec-superux${UNAME_RELEASE}
	exit ;;
    SX-8R:SUPER-UX:*:*)
	echo sx8r-nec-superux${UNAME_RELEASE}
	exit ;;
    Power*:Rhapsody:*:*)
	echo powerpc-apple-rhapsody${UNAME_RELEASE}
	exit ;;
    *:Rhapsody:*:*)
	echo ${UNAME_MACHINE}-apple-rhapsody${UNAME_RELEASE}
	exit ;;
    *:Darwin:*:*)
	UNAME_PROCESSOR=`uname -p` || UNAME_PROCESSOR=unknown
	eval $set_cc_for_build
	if test "$UNAME_PROCESSOR" = unknown ; then
	    UNAME_PROCESSOR=powerpc
	fi
	if test `echo "$UNAME_RELEASE" | sed -e 's/\..*//'` -le 10 ; then
	    if [ "$CC_FOR_BUILD" != 'no_compiler_found' ]; then
		if (echo '#ifdef __LP64__'; echo IS_64BIT_ARCH; echo '#endif') | \
		    (CCOPTS= $CC_FOR_BUILD -E - 2>/dev/null) | \
		    grep IS_64BIT_ARCH >/dev/null
		then
		    case $UNAME_PROCESSOR in
			i386) UNAME_PROCESSOR=x86_64 ;;
			powerpc) UNAME_PROCESSOR=powerpc64 ;;
		    esac
		fi
	    fi
	elif test "$UNAME_PROCESSOR" = i386 ; then
	    # Avoid executing cc on OS X 10.9, as it ships with a stub
	    # that puts up a graphical alert prompting to install
	    # developer tools.  Any system running Mac OS X 10.7 or
	    # later (Darwin 11 and later) is required to have a 64-bit
	    # processor. This is not true of the ARM version of Darwin
	    # that Apple uses in portable devices.
	    UNAME_PROCESSOR=x86_64
	fi
	echo ${UNAME_PROCESSOR}-apple-darwin${UNAME_RELEASE}
	exit ;;
    *:procnto*:*:* | *:QNX:[0123456789]*:*)
	UNAME_PROCESSOR=`uname -p`
	if test "$UNAME_PROCESSOR" = "x86"; then
		UNAME_PROCESSOR=i386
		UNAME_MACHINE=pc
	fi
	echo ${UNAME_PROCESSOR}-${UNAME_MACHINE}-nto-qnx${UNAME_RELEASE}
	exit ;;
    *:QNX:*:4*)
	echo i386-pc-qnx
	exit ;;
    NEO-?:NONSTOP_KERNEL:*:*)
	echo neo-tandem-nsk${UNAME_RELEASE}
	exit ;;
    NSE-*:NONSTOP_KERNEL:*:*)
	echo nse-tandem-nsk${UNAME_RELEASE}
	exit ;;
    NSR-?:NONSTOP_KERNEL:*:*)
	echo nsr-tandem-nsk${UNAME_RELEASE}
	exit ;;
    *:NonStop-UX:*:*)
	echo mips-compaq-nonstopux
	exit ;;
    BS2000:POSIX*:*:*)
	echo bs2000-siemens-sysv
	exit ;;
    DS/*:UNIX_System_V:*:*)
	echo ${UNAME_MACHINE}-${UNAME_SYSTEM}-${UNAME_RELEASE}
	exit ;;
    *:Plan9:*:*)
	# "uname -m" is not consistent, so use $cputype instead. 386
	# is converted to i386 for consistency with other x86
	# operating systems.
	if test "$cputype" = "386"; then
	    UNAME_MACHINE=i386
	else
	    UNAME_MACHINE="$cputype"
	fi
	echo ${UNAME_MACHINE}-unknown-plan9
	exit ;;
    *:TOPS-10:*:*)
	echo pdp10-unknown-tops10
	exit ;;
    *:TENEX:*:*)
	echo pdp10-unknown-tenex
	exit ;;
    KS10:TOPS-20:*:* | KL10:TOPS-20:*:* | TYPE4:TOPS-20:*:*)
	echo pdp10-dec-tops20
	exit ;;
    XKL-1:TOPS-20:*:* | TYPE5:TOPS-20:*:*)
	echo pdp10-xkl-tops20
	exit ;;
    *:TOPS-20:*:*)
	echo pdp10-unknown-tops20
	exit ;;
    *:ITS:*:*)
	echo pdp10-unknown-its
	exit ;;
    SEI:*:*:SEIUX)
	echo mips-sei-seiux${UNAME_RELEASE}
	exit ;;
    *:DragonFly:*:*)
	echo ${UNAME_MACHINE}-unknown-dragonfly`echo ${UNAME_RELEASE}|sed -e 's/[-(].*//'`
	exit ;;
    *:*VMS:*:*)
	UNAME_MACHINE=`(uname -p) 2>/dev/null`
	case "${UNAME_MACHINE}" in
	    A*) echo alpha-dec-vms ; exit ;;
	    I*) echo ia64-dec-vms ; exit ;;
	    V*) echo vax-dec-vms ; exit ;;
	esac ;;
    *:XENIX:*:SysV)
	echo i386-pc-xenix
	exit ;;
    i*86:skyos:*:*)
	echo ${UNAME_MACHINE}-pc-skyos`echo ${UNAME_RELEASE}` | sed -e 's/ .*$//'
	exit ;;
    i*86:rdos:*:*)
	echo ${UNAME_MACHINE}-pc-rdos
	exit ;;
    i*86:AROS:*:*)
	echo ${UNAME_MACHINE}-pc-aros
	exit ;;
    x86_64:VMkernel:*:*)
	echo ${UNAME_MACHINE}-unknown-esx
	exit ;;
esac

cat >&2 <<EOF
$0: unable to guess system type

This script, last modified $timestamp, has failed to recognize
the operating system you are using. It is advised that you
download the most up to date version of the config scripts from

  http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD
and
  http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD

If the version you run ($0) is already up to date, please
send the following data and any information you think might be
pertinent to <config-patches@gnu.org> in order to provide the needed
information to handle your system.

config.guess timestamp = $timestamp

uname -m = `(uname -m) 2>/dev/null || echo unknown`
uname -r = `(uname -r) 2>/dev/null || echo unknown`
uname -s = `(uname -s) 2>/dev/null || echo unknown`
uname -v = `(uname -v) 2>/dev/null || echo unknown`

/usr/bin/uname -p = `(/usr/bin/uname -p) 2>/dev/null`
/bin/uname -X     = `(/bin/uname -X) 2>/dev/null`

hostinfo               = `(hostinfo) 2>/dev/null`
/bin/universe          = `(/bin/universe) 2>/dev/null`
/usr/bin/arch -k       = `(/usr/bin/arch -k) 2>/dev/null`
/bin/arch              = `(/bin/arch) 2>/dev/null`
/usr/bin/oslevel       = `(/usr/bin/oslevel) 2>/dev/null`
/usr/convex/getsysinfo = `(/usr/convex/getsysinfo) 2>/dev/null`

UNAME_MACHINE = ${UNAME_MACHINE}
UNAME_RELEASE = ${UNAME_RELEASE}
UNAME_SYSTEM  = ${UNAME_SYSTEM}
UNAME_VERSION = ${UNAME_VERSION}
EOF

exit 1

# Local variables:
# eval: (add-hook 'write-file-hooks 'time-stamp)
# time-stamp-start: "timestamp='"
# time-stamp-format: "%:y-%02m-%02d"
# time-stamp-end: "'"
# End:


================================================
FILE: libffi-git/config.sub
================================================
#! /bin/sh
# Configuration validation subroutine script.
#   Copyright 1992-2015 Free Software Foundation, Inc.

timestamp='2015-03-08'

# This file is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, see <http://www.gnu.org/licenses/>.
#
# As a special exception to the GNU General Public License, if you
# distribute this file as part of a program that contains a
# configuration script generated by Autoconf, you may include it under
# the same distribution terms that you use for the rest of that
# program.  This Exception is an additional permission under section 7
# of the GNU General Public License, version 3 ("GPLv3").


# Please send patches to <config-patches@gnu.org>.
#
# Configuration subroutine to validate and canonicalize a configuration type.
# Supply the specified configuration type as an argument.
# If it is invalid, we print an error message on stderr and exit with code 1.
# Otherwise, we print the canonical config type on stdout and succeed.

# You can get the latest version of this script from:
# http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD

# This file is supposed to be the same for all GNU packages
# and recognize all the CPU types, system types and aliases
# that are meaningful with *any* GNU software.
# Each package is responsible for reporting which valid configurations
# it does not support.  The user should be able to distinguish
# a failure to support a valid configuration from a meaningless
# configuration.

# The goal of this file is to map all the various variations of a given
# machine specification into a single specification in the form:
#	CPU_TYPE-MANUFACTURER-OPERATING_SYSTEM
# or in some cases, the newer four-part form:
#	CPU_TYPE-MANUFACTURER-KERNEL-OPERATING_SYSTEM
# It is wrong to echo any other type of specification.

me=`echo "$0" | sed -e 's,.*/,,'`

usage="\
Usage: $0 [OPTION] CPU-MFR-OPSYS
       $0 [OPTION] ALIAS

Canonicalize a configuration name.

Operation modes:
  -h, --help         print this help, then exit
  -t, --time-stamp   print date of last modification, then exit
  -v, --version      print version number, then exit

Report bugs and patches to <config-patches@gnu.org>."

version="\
GNU config.sub ($timestamp)

Copyright 1992-2015 Free Software Foundation, Inc.

This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE."

help="
Try \`$me --help' for more information."

# Parse command line
while test $# -gt 0 ; do
  case $1 in
    --time-stamp | --time* | -t )
       echo "$timestamp" ; exit ;;
    --version | -v )
       echo "$version" ; exit ;;
    --help | --h* | -h )
       echo "$usage"; exit ;;
    -- )     # Stop option processing
       shift; break ;;
    - )	# Use stdin as input.
       break ;;
    -* )
       echo "$me: invalid option $1$help"
       exit 1 ;;

    *local*)
       # First pass through any local machine types.
       echo $1
       exit ;;

    * )
       break ;;
  esac
done

case $# in
 0) echo "$me: missing argument$help" >&2
    exit 1;;
 1) ;;
 *) echo "$me: too many arguments$help" >&2
    exit 1;;
esac

# Separate what the user gave into CPU-COMPANY and OS or KERNEL-OS (if any).
# Here we must recognize all the valid KERNEL-OS combinations.
maybe_os=`echo $1 | sed 's/^\(.*\)-\([^-]*-[^-]*\)$/\2/'`
case $maybe_os in
  nto-qnx* | linux-gnu* | linux-android* | linux-dietlibc | linux-newlib* | \
  linux-musl* | linux-uclibc* | uclinux-uclibc* | uclinux-gnu* | kfreebsd*-gnu* | \
  knetbsd*-gnu* | netbsd*-gnu* | netbsd*-eabi* | \
  kopensolaris*-gnu* | \
  storm-chaos* | os2-emx* | rtmk-nova*)
    os=-$maybe_os
    basic_machine=`echo $1 | sed 's/^\(.*\)-\([^-]*-[^-]*\)$/\1/'`
    ;;
  android-linux)
    os=-linux-android
    basic_machine=`echo $1 | sed 's/^\(.*\)-\([^-]*-[^-]*\)$/\1/'`-unknown
    ;;
  *)
    basic_machine=`echo $1 | sed 's/-[^-]*$//'`
    if [ $basic_machine != $1 ]
    then os=`echo $1 | sed 's/.*-/-/'`
    else os=; fi
    ;;
esac

### Let's recognize common machines as not being operating systems so
### that things like config.sub decstation-3100 work.  We also
### recognize some manufacturers as not being operating systems, so we
### can provide default operating systems below.
case $os in
	-sun*os*)
		# Prevent following clause from handling this invalid input.
		;;
	-dec* | -mips* | -sequent* | -encore* | -pc532* | -sgi* | -sony* | \
	-att* | -7300* | -3300* | -delta* | -motorola* | -sun[234]* | \
	-unicom* | -ibm* | -next | -hp | -isi* | -apollo | -altos* | \
	-convergent* | -ncr* | -news | -32* | -3600* | -3100* | -hitachi* |\
	-c[123]* | -convex* | -sun | -crds | -omron* | -dg | -ultra | -tti* | \
	-harris | -dolphin | -highlevel | -gould | -cbm | -ns | -masscomp | \
	-apple | -axis | -knuth | -cray | -microblaze*)
		os=
		basic_machine=$1
		;;
	-bluegene*)
		os=-cnk
		;;
	-sim | -cisco | -oki | -wec | -winbond)
		os=
		basic_machine=$1
		;;
	-scout)
		;;
	-wrs)
		os=-vxworks
		basic_machine=$1
		;;
	-chorusos*)
		os=-chorusos
		basic_machine=$1
		;;
	-chorusrdb)
		os=-chorusrdb
		basic_machine=$1
		;;
	-hiux*)
		os=-hiuxwe2
		;;
	-sco6)
		os=-sco5v6
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco5)
		os=-sco3.2v5
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco4)
		os=-sco3.2v4
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco3.2.[4-9]*)
		os=`echo $os | sed -e 's/sco3.2./sco3.2v/'`
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco3.2v[4-9]*)
		# Don't forget version if it is 3.2v4 or newer.
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco5v6*)
		# Don't forget version if it is 3.2v4 or newer.
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-sco*)
		os=-sco3.2v2
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-udk*)
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-isc)
		os=-isc2.2
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-clix*)
		basic_machine=clipper-intergraph
		;;
	-isc*)
		basic_machine=`echo $1 | sed -e 's/86-.*/86-pc/'`
		;;
	-lynx*178)
		os=-lynxos178
		;;
	-lynx*5)
		os=-lynxos5
		;;
	-lynx*)
		os=-lynxos
		;;
	-ptx*)
		basic_machine=`echo $1 | sed -e 's/86-.*/86-sequent/'`
		;;
	-windowsnt*)
		os=`echo $os | sed -e 's/windowsnt/winnt/'`
		;;
	-psos*)
		os=-psos
		;;
	-mint | -mint[0-9]*)
		basic_machine=m68k-atari
		os=-mint
		;;
esac

# Decode aliases for certain CPU-COMPANY combinations.
case $basic_machine in
	# Recognize the basic CPU types without company name.
	# Some are omitted here because they have special meanings below.
	1750a | 580 \
	| a29k \
	| aarch64 | aarch64_be \
	| alpha | alphaev[4-8] | alphaev56 | alphaev6[78] | alphapca5[67] \
	| alpha64 | alpha64ev[4-8] | alpha64ev56 | alpha64ev6[78] | alpha64pca5[67] \
	| am33_2.0 \
	| arc | arceb \
	| arm | arm[bl]e | arme[lb] | armv[2-8] | armv[3-8][lb] | armv7[arm] \
	| avr | avr32 \
	| be32 | be64 \
	| bfin \
	| c4x | c8051 | clipper \
	| d10v | d30v | dlx | dsp16xx \
	| e2k | epiphany \
	| fido | fr30 | frv | ft32 \
	| h8300 | h8500 | hppa | hppa1.[01] | hppa2.0 | hppa2.0[nw] | hppa64 \
	| hexagon \
	| i370 | i860 | i960 | ia64 \
	| ip2k | iq2000 \
	| k1om \
	| le32 | le64 \
	| lm32 \
	| m32c | m32r | m32rle | m68000 | m68k | m88k \
	| maxq | mb | microblaze | microblazeel | mcore | mep | metag \
	| mips | mipsbe | mipseb | mipsel | mipsle \
	| mips16 \
	| mips64 | mips64el \
	| mips64octeon | mips64octeonel \
	| mips64orion | mips64orionel \
	| mips64r5900 | mips64r5900el \
	| mips64vr | mips64vrel \
	| mips64vr4100 | mips64vr4100el \
	| mips64vr4300 | mips64vr4300el \
	| mips64vr5000 | mips64vr5000el \
	| mips64vr5900 | mips64vr5900el \
	| mipsisa32 | mipsisa32el \
	| mipsisa32r2 | mipsisa32r2el \
	| mipsisa32r6 | mipsisa32r6el \
	| mipsisa64 | mipsisa64el \
	| mipsisa64r2 | mipsisa64r2el \
	| mipsisa64r6 | mipsisa64r6el \
	| mipsisa64sb1 | mipsisa64sb1el \
	| mipsisa64sr71k | mipsisa64sr71kel \
	| mipsr5900 | mipsr5900el \
	| mipstx39 | mipstx39el \
	| mn10200 | mn10300 \
	| moxie \
	| mt \
	| msp430 \
	| nds32 | nds32le | nds32be \
	| nios | nios2 | nios2eb | nios2el \
	| ns16k | ns32k \
	| open8 | or1k | or1knd | or32 \
	| pdp10 | pdp11 | pj | pjl \
	| powerpc | powerpc64 | powerpc64le | powerpcle \
	| pyramid \
	| riscv32 | riscv64 \
	| rl78 | rx \
	| score \
	| sh | sh[1234] | sh[24]a | sh[24]aeb | sh[23]e | sh[34]eb | sheb | shbe | shle | sh[1234]le | sh3ele \
	| sh64 | sh64le \
	| sparc | sparc64 | sparc64b | sparc64v | sparc86x | sparclet | sparclite \
	| sparcv8 | sparcv9 | sparcv9b | sparcv9v \
	| spu \
	| tahoe | tic4x | tic54x | tic55x | tic6x | tic80 | tron \
	| ubicom32 \
	| v850 | v850e | v850e1 | v850e2 | v850es | v850e2v3 \
	| visium \
	| we32k \
	| x86 | xc16x | xstormy16 | xtensa \
	| z8k | z80)
		basic_machine=$basic_machine-unknown
		;;
	c54x)
		basic_machine=tic54x-unknown
		;;
	c55x)
		basic_machine=tic55x-unknown
		;;
	c6x)
		basic_machine=tic6x-unknown
		;;
	leon|leon[3-9])
		basic_machine=sparc-$basic_machine
		;;
	m6811 | m68hc11 | m6812 | m68hc12 | m68hcs12x | nvptx | picochip)
		basic_machine=$basic_machine-unknown
		os=-none
		;;
	m88110 | m680[12346]0 | m683?2 | m68360 | m5200 | v70 | w65 | z8k)
		;;
	ms1)
		basic_machine=mt-unknown
		;;

	strongarm | thumb | xscale)
		basic_machine=arm-unknown
		;;
	xgate)
		basic_machine=$basic_machine-unknown
		os=-none
		;;
	xscaleeb)
		basic_machine=armeb-unknown
		;;

	xscaleel)
		basic_machine=armel-unknown
		;;

	# We use `pc' rather than `unknown'
	# because (1) that's what they normally are, and
	# (2) the word "unknown" tends to confuse beginning users.
	i*86 | x86_64)
	  basic_machine=$basic_machine-pc
	  ;;
	# Object if more than one company name word.
	*-*-*)
		echo Invalid configuration \`$1\': machine \`$basic_machine\' not recognized 1>&2
		exit 1
		;;
	# Recognize the basic CPU types with company name.
	580-* \
	| a29k-* \
	| aarch64-* | aarch64_be-* \
	| alpha-* | alphaev[4-8]-* | alphaev56-* | alphaev6[78]-* \
	| alpha64-* | alpha64ev[4-8]-* | alpha64ev56-* | alpha64ev6[78]-* \
	| alphapca5[67]-* | alpha64pca5[67]-* | arc-* | arceb-* \
	| arm-*  | armbe-* | armle-* | armeb-* | armv*-* \
	| avr-* | avr32-* \
	| be32-* | be64-* \
	| bfin-* | bs2000-* \
	| c[123]* | c30-* | [cjt]90-* | c4x-* \
	| c8051-* | clipper-* | craynv-* | cydra-* \
	| d10v-* | d30v-* | dlx-* \
	| e2k-* | elxsi-* \
	| f30[01]-* | f700-* | fido-* | fr30-* | frv-* | fx80-* \
	| h8300-* | h8500-* \
	| hppa-* | hppa1.[01]-* | hppa2.0-* | hppa2.0[nw]-* | hppa64-* \
	| hexagon-* \
	| i*86-* | i860-* | i960-* | ia64-* \
	| ip2k-* | iq2000-* \
	| k1om-* \
	| le32-* | le64-* \
	| lm32-* \
	| m32c-* | m32r-* | m32rle-* \
	| m68000-* | m680[012346]0-* | m68360-* | m683?2-* | m68k-* \
	| m88110-* | m88k-* | maxq-* | mcore-* | metag-* \
	| microblaze-* | microblazeel-* \
	| mips-* | mipsbe-* | mipseb-* | mipsel-* | mipsle-* \
	| mips16-* \
	| mips64-* | mips64el-* \
	| mips64octeon-* | mips64octeonel-* \
	| mips64orion-* | mips64orionel-* \
	| mips64r5900-* | mips64r5900el-* \
	| mips64vr-* | mips64vrel-* \
	| mips64vr4100-* | mips64vr4100el-* \
	| mips64vr4300-* | mips64vr4300el-* \
	| mips64vr5000-* | mips64vr5000el-* \
	| mips64vr5900-* | mips64vr5900el-* \
	| mipsisa32-* | mipsisa32el-* \
	| mipsisa32r2-* | mipsisa32r2el-* \
	| mipsisa32r6-* | mipsisa32r6el-* \
	| mipsisa64-* | mipsisa64el-* \
	| mipsisa64r2-* | mipsisa64r2el-* \
	| mipsisa64r6-* | mipsisa64r6el-* \
	| mipsisa64sb1-* | mipsisa64sb1el-* \
	| mipsisa64sr71k-* | mipsisa64sr71kel-* \
	| mipsr5900-* | mipsr5900el-* \
	| mipstx39-* | mipstx39el-* \
	| mmix-* \
	| mt-* \
	| msp430-* \
	| nds32-* | nds32le-* | nds32be-* \
	| nios-* | nios2-* | nios2eb-* | nios2el-* \
	| none-* | np1-* | ns16k-* | ns32k-* \
	| open8-* \
	| or1k*-* \
	| orion-* \
	| pdp10-* | pdp11-* | pj-* | pjl-* | pn-* | power-* \
	| powerpc-* | powerpc64-* | powerpc64le-* | powerpcle-* \
	| pyramid-* \
	| rl78-* | romp-* | rs6000-* | rx-* \
	| sh-* | sh[1234]-* | sh[24]a-* | sh[24]aeb-* | sh[23]e-* | sh[34]eb-* | sheb-* | shbe-* \
	| shle-* | sh[1234]le-* | sh3ele-* | sh64-* | sh64le-* \
	| sparc-* | sparc64-* | sparc64b-* | sparc64v-* | sparc86x-* | sparclet-* \
	| sparclite-* \
	| sparcv8-* | sparcv9-* | sparcv9b-* | sparcv9v-* | sv1-* | sx?-* \
	| tahoe-* \
	| tic30-* | tic4x-* | tic54x-* | tic55x-* | tic6x-* | tic80-* \
	| tile*-* \
	| tron-* \
	| ubicom32-* \
	| v850-* | v850e-* | v850e1-* | v850es-* | v850e2-* | v850e2v3-* \
	| vax-* \
	| visium-* \
	| we32k-* \
	| x86-* | x86_64-* | xc16x-* | xps100-* \
	| xstormy16-* | xtensa*-* \
	| ymp-* \
	| z8k-* | z80-*)
		;;
	# Recognize the basic CPU types without company name, with glob match.
	xtensa*)
		basic_machine=$basic_machine-unknown
		;;
	# Recognize the various machine names and aliases which stand
	# for a CPU type and a company and sometimes even an OS.
	386bsd)
		basic_machine=i386-unknown
		os=-bsd
		;;
	3b1 | 7300 | 7300-att | att-7300 | pc7300 | safari | unixpc)
		basic_machine=m68000-att
		;;
	3b*)
		basic_machine=we32k-att
		;;
	a29khif)
		basic_machine=a29k-amd
		os=-udi
		;;
	abacus)
		basic_machine=abacus-unknown
		;;
	adobe68k)
		basic_machine=m68010-adobe
		os=-scout
		;;
	alliant | fx80)
		basic_machine=fx80-alliant
		;;
	altos | altos3068)
		basic_machine=m68k-altos
		;;
	am29k)
		basic_machine=a29k-none
		os=-bsd
		;;
	amd64)
		basic_machine=x86_64-pc
		;;
	amd64-*)
		basic_machine=x86_64-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	amdahl)
		basic_machine=580-amdahl
		os=-sysv
		;;
	amiga | amiga-*)
		basic_machine=m68k-unknown
		;;
	amigaos | amigados)
		basic_machine=m68k-unknown
		os=-amigaos
		;;
	amigaunix | amix)
		basic_machine=m68k-unknown
		os=-sysv4
		;;
	apollo68)
		basic_machine=m68k-apollo
		os=-sysv
		;;
	apollo68bsd)
		basic_machine=m68k-apollo
		os=-bsd
		;;
	aros)
		basic_machine=i386-pc
		os=-aros
		;;
        asmjs)
		basic_machine=asmjs-unknown
		;;
	aux)
		basic_machine=m68k-apple
		os=-aux
		;;
	balance)
		basic_machine=ns32k-sequent
		os=-dynix
		;;
	blackfin)
		basic_machine=bfin-unknown
		os=-linux
		;;
	blackfin-*)
		basic_machine=bfin-`echo $basic_machine | sed 's/^[^-]*-//'`
		os=-linux
		;;
	bluegene*)
		basic_machine=powerpc-ibm
		os=-cnk
		;;
	c54x-*)
		basic_machine=tic54x-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	c55x-*)
		basic_machine=tic55x-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	c6x-*)
		basic_machine=tic6x-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	c90)
		basic_machine=c90-cray
		os=-unicos
		;;
	cegcc)
		basic_machine=arm-unknown
		os=-cegcc
		;;
	convex-c1)
		basic_machine=c1-convex
		os=-bsd
		;;
	convex-c2)
		basic_machine=c2-convex
		os=-bsd
		;;
	convex-c32)
		basic_machine=c32-convex
		os=-bsd
		;;
	convex-c34)
		basic_machine=c34-convex
		os=-bsd
		;;
	convex-c38)
		basic_machine=c38-convex
		os=-bsd
		;;
	cray | j90)
		basic_machine=j90-cray
		os=-unicos
		;;
	craynv)
		basic_machine=craynv-cray
		os=-unicosmp
		;;
	cr16 | cr16-*)
		basic_machine=cr16-unknown
		os=-elf
		;;
	crds | unos)
		basic_machine=m68k-crds
		;;
	crisv32 | crisv32-* | etraxfs*)
		basic_machine=crisv32-axis
		;;
	cris | cris-* | etrax*)
		basic_machine=cris-axis
		;;
	crx)
		basic_machine=crx-unknown
		os=-elf
		;;
	da30 | da30-*)
		basic_machine=m68k-da30
		;;
	decstation | decstation-3100 | pmax | pmax-* | pmin | dec3100 | decstatn)
		basic_machine=mips-dec
		;;
	decsystem10* | dec10*)
		basic_machine=pdp10-dec
		os=-tops10
		;;
	decsystem20* | dec20*)
		basic_machine=pdp10-dec
		os=-tops20
		;;
	delta | 3300 | motorola-3300 | motorola-delta \
	      | 3300-motorola | delta-motorola)
		basic_machine=m68k-motorola
		;;
	delta88)
		basic_machine=m88k-motorola
		os=-sysv3
		;;
	dicos)
		basic_machine=i686-pc
		os=-dicos
		;;
	djgpp)
		basic_machine=i586-pc
		os=-msdosdjgpp
		;;
	dpx20 | dpx20-*)
		basic_machine=rs6000-bull
		os=-bosx
		;;
	dpx2* | dpx2*-bull)
		basic_machine=m68k-bull
		os=-sysv3
		;;
	ebmon29k)
		basic_machine=a29k-amd
		os=-ebmon
		;;
	elxsi)
		basic_machine=elxsi-elxsi
		os=-bsd
		;;
	encore | umax | mmax)
		basic_machine=ns32k-encore
		;;
	es1800 | OSE68k | ose68k | ose | OSE)
		basic_machine=m68k-ericsson
		os=-ose
		;;
	fx2800)
		basic_machine=i860-alliant
		;;
	genix)
		basic_machine=ns32k-ns
		;;
	gmicro)
		basic_machine=tron-gmicro
		os=-sysv
		;;
	go32)
		basic_machine=i386-pc
		os=-go32
		;;
	h3050r* | hiux*)
		basic_machine=hppa1.1-hitachi
		os=-hiuxwe2
		;;
	h8300hms)
		basic_machine=h8300-hitachi
		os=-hms
		;;
	h8300xray)
		basic_machine=h8300-hitachi
		os=-xray
		;;
	h8500hms)
		basic_machine=h8500-hitachi
		os=-hms
		;;
	harris)
		basic_machine=m88k-harris
		os=-sysv3
		;;
	hp300-*)
		basic_machine=m68k-hp
		;;
	hp300bsd)
		basic_machine=m68k-hp
		os=-bsd
		;;
	hp300hpux)
		basic_machine=m68k-hp
		os=-hpux
		;;
	hp3k9[0-9][0-9] | hp9[0-9][0-9])
		basic_machine=hppa1.0-hp
		;;
	hp9k2[0-9][0-9] | hp9k31[0-9])
		basic_machine=m68000-hp
		;;
	hp9k3[2-9][0-9])
		basic_machine=m68k-hp
		;;
	hp9k6[0-9][0-9] | hp6[0-9][0-9])
		basic_machine=hppa1.0-hp
		;;
	hp9k7[0-79][0-9] | hp7[0-79][0-9])
		basic_machine=hppa1.1-hp
		;;
	hp9k78[0-9] | hp78[0-9])
		# FIXME: really hppa2.0-hp
		basic_machine=hppa1.1-hp
		;;
	hp9k8[67]1 | hp8[67]1 | hp9k80[24] | hp80[24] | hp9k8[78]9 | hp8[78]9 | hp9k893 | hp893)
		# FIXME: really hppa2.0-hp
		basic_machine=hppa1.1-hp
		;;
	hp9k8[0-9][13679] | hp8[0-9][13679])
		basic_machine=hppa1.1-hp
		;;
	hp9k8[0-9][0-9] | hp8[0-9][0-9])
		basic_machine=hppa1.0-hp
		;;
	hppa-next)
		os=-nextstep3
		;;
	hppaosf)
		basic_machine=hppa1.1-hp
		os=-osf
		;;
	hppro)
		basic_machine=hppa1.1-hp
		os=-proelf
		;;
	i370-ibm* | ibm*)
		basic_machine=i370-ibm
		;;
	i*86v32)
		basic_machine=`echo $1 | sed -e 's/86.*/86-pc/'`
		os=-sysv32
		;;
	i*86v4*)
		basic_machine=`echo $1 | sed -e 's/86.*/86-pc/'`
		os=-sysv4
		;;
	i*86v)
		basic_machine=`echo $1 | sed -e 's/86.*/86-pc/'`
		os=-sysv
		;;
	i*86sol2)
		basic_machine=`echo $1 | sed -e 's/86.*/86-pc/'`
		os=-solaris2
		;;
	i386mach)
		basic_machine=i386-mach
		os=-mach
		;;
	i386-vsta | vsta)
		basic_machine=i386-unknown
		os=-vsta
		;;
	iris | iris4d)
		basic_machine=mips-sgi
		case $os in
		    -irix*)
			;;
		    *)
			os=-irix4
			;;
		esac
		;;
	isi68 | isi)
		basic_machine=m68k-isi
		os=-sysv
		;;
	leon-*|leon[3-9]-*)
		basic_machine=sparc-`echo $basic_machine | sed 's/-.*//'`
		;;
	m68knommu)
		basic_machine=m68k-unknown
		os=-linux
		;;
	m68knommu-*)
		basic_machine=m68k-`echo $basic_machine | sed 's/^[^-]*-//'`
		os=-linux
		;;
	m88k-omron*)
		basic_machine=m88k-omron
		;;
	magnum | m3230)
		basic_machine=mips-mips
		os=-sysv
		;;
	merlin)
		basic_machine=ns32k-utek
		os=-sysv
		;;
	microblaze*)
		basic_machine=microblaze-xilinx
		;;
	mingw64)
		basic_machine=x86_64-pc
		os=-mingw64
		;;
	mingw32)
		basic_machine=i686-pc
		os=-mingw32
		;;
	mingw32ce)
		basic_machine=arm-unknown
		os=-mingw32ce
		;;
	miniframe)
		basic_machine=m68000-convergent
		;;
	*mint | -mint[0-9]* | *MiNT | *MiNT[0-9]*)
		basic_machine=m68k-atari
		os=-mint
		;;
	mips3*-*)
		basic_machine=`echo $basic_machine | sed -e 's/mips3/mips64/'`
		;;
	mips3*)
		basic_machine=`echo $basic_machine | sed -e 's/mips3/mips64/'`-unknown
		;;
	monitor)
		basic_machine=m68k-rom68k
		os=-coff
		;;
	morphos)
		basic_machine=powerpc-unknown
		os=-morphos
		;;
	moxiebox)
		basic_machine=moxie-unknown
		os=-moxiebox
		;;
	msdos)
		basic_machine=i386-pc
		os=-msdos
		;;
	ms1-*)
		basic_machine=`echo $basic_machine | sed -e 's/ms1-/mt-/'`
		;;
	msys)
		basic_machine=i686-pc
		os=-msys
		;;
	mvs)
		basic_machine=i370-ibm
		os=-mvs
		;;
	nacl)
		basic_machine=le32-unknown
		os=-nacl
		;;
	ncr3000)
		basic_machine=i486-ncr
		os=-sysv4
		;;
	netbsd386)
		basic_machine=i386-unknown
		os=-netbsd
		;;
	netwinder)
		basic_machine=armv4l-rebel
		os=-linux
		;;
	news | news700 | news800 | news900)
		basic_machine=m68k-sony
		os=-newsos
		;;
	news1000)
		basic_machine=m68030-sony
		os=-newsos
		;;
	news-3600 | risc-news)
		basic_machine=mips-sony
		os=-newsos
		;;
	necv70)
		basic_machine=v70-nec
		os=-sysv
		;;
	next | m*-next )
		basic_machine=m68k-next
		case $os in
		    -nextstep* )
			;;
		    -ns2*)
		      os=-nextstep2
			;;
		    *)
		      os=-nextstep3
			;;
		esac
		;;
	nh3000)
		basic_machine=m68k-harris
		os=-cxux
		;;
	nh[45]000)
		basic_machine=m88k-harris
		os=-cxux
		;;
	nindy960)
		basic_machine=i960-intel
		os=-nindy
		;;
	mon960)
		basic_machine=i960-intel
		os=-mon960
		;;
	nonstopux)
		basic_machine=mips-compaq
		os=-nonstopux
		;;
	np1)
		basic_machine=np1-gould
		;;
	neo-tandem)
		basic_machine=neo-tandem
		;;
	nse-tandem)
		basic_machine=nse-tandem
		;;
	nsr-tandem)
		basic_machine=nsr-tandem
		;;
	op50n-* | op60c-*)
		basic_machine=hppa1.1-oki
		os=-proelf
		;;
	openrisc | openrisc-*)
		basic_machine=or32-unknown
		;;
	os400)
		basic_machine=powerpc-ibm
		os=-os400
		;;
	OSE68000 | ose68000)
		basic_machine=m68000-ericsson
		os=-ose
		;;
	os68k)
		basic_machine=m68k-none
		os=-os68k
		;;
	pa-hitachi)
		basic_machine=hppa1.1-hitachi
		os=-hiuxwe2
		;;
	paragon)
		basic_machine=i860-intel
		os=-osf
		;;
	parisc)
		basic_machine=hppa-unknown
		os=-linux
		;;
	parisc-*)
		basic_machine=hppa-`echo $basic_machine | sed 's/^[^-]*-//'`
		os=-linux
		;;
	pbd)
		basic_machine=sparc-tti
		;;
	pbb)
		basic_machine=m68k-tti
		;;
	pc532 | pc532-*)
		basic_machine=ns32k-pc532
		;;
	pc98)
		basic_machine=i386-pc
		;;
	pc98-*)
		basic_machine=i386-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	pentium | p5 | k5 | k6 | nexgen | viac3)
		basic_machine=i586-pc
		;;
	pentiumpro | p6 | 6x86 | athlon | athlon_*)
		basic_machine=i686-pc
		;;
	pentiumii | pentium2 | pentiumiii | pentium3)
		basic_machine=i686-pc
		;;
	pentium4)
		basic_machine=i786-pc
		;;
	pentium-* | p5-* | k5-* | k6-* | nexgen-* | viac3-*)
		basic_machine=i586-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	pentiumpro-* | p6-* | 6x86-* | athlon-*)
		basic_machine=i686-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	pentiumii-* | pentium2-* | pentiumiii-* | pentium3-*)
		basic_machine=i686-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	pentium4-*)
		basic_machine=i786-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	pn)
		basic_machine=pn-gould
		;;
	power)	basic_machine=power-ibm
		;;
	ppc | ppcbe)	basic_machine=powerpc-unknown
		;;
	ppc-* | ppcbe-*)
		basic_machine=powerpc-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	ppcle | powerpclittle | ppc-le | powerpc-little)
		basic_machine=powerpcle-unknown
		;;
	ppcle-* | powerpclittle-*)
		basic_machine=powerpcle-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	ppc64)	basic_machine=powerpc64-unknown
		;;
	ppc64-*) basic_machine=powerpc64-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	ppc64le | powerpc64little | ppc64-le | powerpc64-little)
		basic_machine=powerpc64le-unknown
		;;
	ppc64le-* | powerpc64little-*)
		basic_machine=powerpc64le-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	ps2)
		basic_machine=i386-ibm
		;;
	pw32)
		basic_machine=i586-unknown
		os=-pw32
		;;
	rdos | rdos64)
		basic_machine=x86_64-pc
		os=-rdos
		;;
	rdos32)
		basic_machine=i386-pc
		os=-rdos
		;;
	rom68k)
		basic_machine=m68k-rom68k
		os=-coff
		;;
	rm[46]00)
		basic_machine=mips-siemens
		;;
	rtpc | rtpc-*)
		basic_machine=romp-ibm
		;;
	s390 | s390-*)
		basic_machine=s390-ibm
		;;
	s390x | s390x-*)
		basic_machine=s390x-ibm
		;;
	sa29200)
		basic_machine=a29k-amd
		os=-udi
		;;
	sb1)
		basic_machine=mipsisa64sb1-unknown
		;;
	sb1el)
		basic_machine=mipsisa64sb1el-unknown
		;;
	sde)
		basic_machine=mipsisa32-sde
		os=-elf
		;;
	sei)
		basic_machine=mips-sei
		os=-seiux
		;;
	sequent)
		basic_machine=i386-sequent
		;;
	sh)
		basic_machine=sh-hitachi
		os=-hms
		;;
	sh5el)
		basic_machine=sh5le-unknown
		;;
	sh64)
		basic_machine=sh64-unknown
		;;
	sparclite-wrs | simso-wrs)
		basic_machine=sparclite-wrs
		os=-vxworks
		;;
	sps7)
		basic_machine=m68k-bull
		os=-sysv2
		;;
	spur)
		basic_machine=spur-unknown
		;;
	st2000)
		basic_machine=m68k-tandem
		;;
	stratus)
		basic_machine=i860-stratus
		os=-sysv4
		;;
	strongarm-* | thumb-*)
		basic_machine=arm-`echo $basic_machine | sed 's/^[^-]*-//'`
		;;
	sun2)
		basic_machine=m68000-sun
		;;
	sun2os3)
		basic_machine=m68000-sun
		os=-sunos3
		;;
	sun2os4)
		basic_machine=m68000-sun
		os=-sunos4
		;;
	sun3os3)
		basic_machine=m68k-sun
		os=-sunos3
		;;
	sun3os4)
		basic_machine=m68k-sun
		os=-sunos4
		;;
	sun4os3)
		basic_machine=sparc-sun
		os=-sunos3
		;;
	sun4os4)
		basic_machine=sparc-sun
		os=-sunos4
		;;
	sun4sol2)
		basic_machine=sparc-sun
		os=-solaris2
		;;
	sun3 | sun3-*)
		basic_machine=m68k-sun
		;;
	sun4)
		basic_machine=sparc-sun
		;;
	sun386 | sun386i | roadrunner)
		basic_machine=i386-sun
		;;
	sv1)
		basic_machine=sv1-cray
		os=-unicos
		;;
	symmetry)
		basic_machine=i386-sequent
		os=-dynix
		;;
	t3e)
		basic_machine=alphaev5-cray
		os=-unicos
		;;
	t90)
		basic_machine=t90-cray
		os=-unicos
		;;
	tile*)
		basic_machine=$basic_machine-unknown
		os=-linux-gnu
		;;
	tx39)
		basic_machine=mipstx39-unknown
		;;
	tx39el)
		basic_machine=mipstx39el-unknown
		;;
	toad1)
		basic_machine=pdp10-xkl
		os=-tops20
		;;
	tower | tower-32)
		basic_machine=m68k-ncr
		;;
	tpf)
		basic_machine=s390x-ibm
		os=-tpf
		;;
	udi29k)
		basic_machine=a29k-amd
		os=-udi
		;;
	ultra3)
		basic_machine=a29k-nyu
		os=-sym1
		;;
	v810 | necv810)
		basic_machine=v810-nec
		os=-none
		;;
	vaxv)
		basic_machine=vax-dec
		os=-sysv
		;;
	vms)
		basic_machine=vax-dec
		os=-vms
		;;
	vpp*|vx|vx-*)
		basic_machine=f301-fujitsu
		;;
	vxworks960)
		basic_machine=i960-wrs
		os=-vxworks
		;;
	vxworks68)
		basic_machine=m68k-wrs
		os=-vxworks
		;;
	vxworks29k)
		basic_machine=a29k-wrs
		os=-vxworks
		;;
	w65*)
		basic_machine=w65-wdc
		os=-none
		;;
	w89k-*)
		basic_machine=hppa1.1-winbond
		os=-proelf
		;;
	xbox)
		basic_machine=i686-pc
		os=-mingw32
		;;
	xps | xps100)
		basic_machine=xps100-honeywell
		;;
	xscale-* | xscalee[bl]-*)
		basic_machine=`echo $basic_machine | sed 's/^xscale/arm/'`
		;;
	ymp)
		basic_machine=ymp-cray
		os=-unicos
		;;
	z8k-*-coff)
		basic_machine=z8k-unknown
		os=-sim
		;;
	z80-*-coff)
		basic_machine=z80-unknown
		os=-sim
		;;
	none)
		basic_machine=none-none
		os=-none
		;;

# Here we handle the default manufacturer of certain CPU types.  It is in
# some cases the only manufacturer, in others, it is the most popular.
	w89k)
		basic_machine=hppa1.1-winbond
		;;
	op50n)
		basic_machine=hppa1.1-oki
		;;
	op60c)
		basic_machine=hppa1.1-oki
		;;
	romp)
		basic_machine=romp-ibm
		;;
	mmix)
		basic_machine=mmix-knuth
		;;
	rs6000)
		basic_machine=rs6000-ibm
		;;
	vax)
		basic_machine=vax-dec
		;;
	pdp10)
		# there are many clones, so DEC is not a safe bet
		basic_machine=pdp10-unknown
		;;
	pdp11)
		basic_machine=pdp11-dec
		;;
	we32k)
		basic_machine=we32k-att
		;;
	sh[1234] | sh[24]a | sh[24]aeb | sh[34]eb | sh[1234]le | sh[23]ele)
		basic_machine=sh-unknown
		;;
	sparc | sparcv8 | sparcv9 | sparcv9b | sparcv9v)
		basic_machine=sparc-sun
		;;
	cydra)
		basic_machine=cydra-cydrome
		;;
	orion)
		basic_machine=orion-highlevel
		;;
	orion105)
		basic_machine=clipper-highlevel
		;;
	mac | mpw | mac-mpw)
		basic_machine=m68k-apple
		;;
	pmac | pmac-mpw)
		basic_machine=powerpc-apple
		;;
	*-unknown)
		# Make sure to match an already-canonicalized machine name.
		;;
	*)
		echo Invalid configuration \`$1\': machine \`$basic_machine\' not recognized 1>&2
		exit 1
		;;
esac

# Here we canonicalize certain aliases for manufacturers.
case $basic_machine in
	*-digital*)
		basic_machine=`echo $basic_machine | sed 's/digital.*/dec/'`
		;;
	*-commodore*)
		basic_machine=`echo $basic_machine | sed 's/commodore.*/cbm/'`
		;;
	*)
		;;
esac

# Decode manufacturer-specific aliases for certain operating systems.

if [ x"$os" != x"" ]
then
case $os in
	# First match some system type aliases
	# that might get confused with valid system types.
	# -solaris* is a basic system type, with this one exception.
	-auroraux)
		os=-auroraux
		;;
	-solaris1 | -solaris1.*)
		os=`echo $os | sed -e 's|solaris1|sunos4|'`
		;;
	-solaris)
		os=-solaris2
		;;
	-svr4*)
		os=-sysv4
		;;
	-unixware*)
		os=-sysv4.2uw
		;;
	-gnu/linux*)
		os=`echo $os | sed -e 's|gnu/linux|linux-gnu|'`
		;;
	# First accept the basic system types.
	# The portable systems comes first.
	# Each alternative MUST END IN A *, to match a version number.
	# -sysv* is not here because it comes later, after sysvr4.
	-gnu* | -bsd* | -mach* | -minix* | -genix* | -ultrix* | -irix* \
	      | -*vms* | -sco* | -esix* | -isc* | -aix* | -cnk* | -sunos | -sunos[34]*\
	      | -hpux* | -unos* | -osf* | -luna* | -dgux* | -auroraux* | -solaris* \
	      | -sym* | -kopensolaris* | -plan9* \
	      | -amigaos* | -amigados* | -msdos* | -newsos* | -unicos* | -aof* \
	      | -aos* | -aros* | -cloudabi* \
	      | -nindy* | -vxsim* | -vxworks* | -ebmon* | -hms* | -mvs* \
	      | -clix* | -riscos* | -uniplus* | -iris* | -rtu* | -xenix* \
	      | -hiux* | -386bsd* | -knetbsd* | -mirbsd* | -netbsd* \
	      | -bitrig* | -openbsd* | -solidbsd* \
	      | -ekkobsd* | -kfreebsd* | -freebsd* | -riscix* | -lynxos* \
	      | -bosx* | -nextstep* | -cxux* | -aout* | -elf* | -oabi* \
	      | -ptx* | -coff* | -ecoff* | -winnt* | -domain* | -vsta* \
	      | -udi* | -eabi* | -lites* | -ieee* | -go32* | -aux* \
	      | -chorusos* | -chorusrdb* | -cegcc* \
	      | -cygwin* | -msys* | -pe* | -psos* | -moss* | -proelf* | -rtems* \
	      | -mingw32* | -mingw64* | -linux-gnu* | -linux-android* \
	      | -linux-newlib* | -linux-musl* | -linux-uclibc* \
	      | -uxpv* | -beos* | -mpeix* | -udk* | -moxiebox* \
	      | -interix* | -uwin* | -mks* | -rhapsody* | -darwin* | -opened* \
	      | -openstep* | -oskit* | -conix* | -pw32* | -nonstopux* \
	      | -storm-chaos* | -tops10* | -tenex* | -tops20* | -its* \
	      | -os2* | -vos* | -palmos* | -uclinux* | -nucleus* \
	      | -morphos* | -superux* | -rtmk* | -rtmk-nova* | -windiss* \
	      | -powermax* | -dnix* | -nx6 | -nx7 | -sei* | -dragonfly* \
	      | -skyos* | -haiku* | -rdos* | -toppers* | -drops* | -es* | -tirtos*)
	# Remember, each alternative MUST END IN *, to match a version number.
		;;
	-qnx*)
		case $basic_machine in
		    x86-* | i*86-*)
			;;
		    *)
			os=-nto$os
			;;
		esac
		;;
	-nto-qnx*)
		;;
	-nto*)
		os=`echo $os | sed -e 's|nto|nto-qnx|'`
		;;
	-sim | -es1800* | -hms* | -xray | -os68k* | -none* | -v88r* \
	      | -windows* | -osx | -abug | -netware* | -os9* | -beos* | -haiku* \
	      | -macos* | -mpw* | -magic* | -mmixware* | -mon960* | -lnews*)
		;;
	-mac*)
		os=`echo $os | sed -e 's|mac|macos|'`
		;;
	-linux-dietlibc)
		os=-linux-dietlibc
		;;
	-linux*)
		os=`echo $os | sed -e 's|linux|linux-gnu|'`
		;;
	-sunos5*)
		os=`echo $os | sed -e 's|sunos5|solaris2|'`
		;;
	-sunos6*)
		os=`echo $os | sed -e 's|sunos6|solaris3|'`
		;;
	-opened*)
		os=-openedition
		;;
	-os400*)
		os=-os400
		;;
	-wince*)
		os=-wince
		;;
	-osfrose*)
		os=-osfrose
		;;
	-osf*)
		os=-osf
		;;
	-utek*)
		os=-bsd
		;;
	-dynix*)
		os=-bsd
		;;
	-acis*)
		os=-aos
		;;
	-atheos*)
		os=-atheos
		;;
	-syllable*)
		os=-syllable
		;;
	-386bsd)
		os=-bsd
		;;
	-ctix* | -uts*)
		os=-sysv
		;;
	-nova*)
		os=-rtmk-nova
		;;
	-ns2 )
		os=-nextstep2
		;;
	-nsk*)
		os=-nsk
		;;
	# Preserve the version number of sinix5.
	-sinix5.*)
		os=`echo $os | sed -e 's|sinix|sysv|'`
		;;
	-sinix*)
		os=-sysv4
		;;
	-tpf*)
		os=-tpf
		;;
	-triton*)
		os=-sysv3
		;;
	-oss*)
		os=-sysv3
		;;
	-svr4)
		os=-sysv4
		;;
	-svr3)
		os=-sysv3
		;;
	-sysvr4)
		os=-sysv4
		;;
	# This must come after -sysvr4.
	-sysv*)
		;;
	-ose*)
		os=-ose
		;;
	-es1800*)
		os=-ose
		;;
	-xenix)
		os=-xenix
		;;
	-*mint | -mint[0-9]* | -*MiNT | -MiNT[0-9]*)
		os=-mint
		;;
	-aros*)
		os=-aros
		;;
	-zvmoe)
		os=-zvmoe
		;;
	-dicos*)
		os=-dicos
		;;
	-nacl*)
		;;
	-none)
		;;
	*)
		# Get rid of the `-' at the beginning of $os.
		os=`echo $os | sed 's/[^-]*-//'`
		echo Invalid configuration \`$1\': system \`$os\' not recognized 1>&2
		exit 1
		;;
esac
else

# Here we handle the default operating systems that come with various machines.
# The value should be what the vendor currently ships out the door with their
# machine or put another way, the most popular os provided with the machine.

# Note that if you're going to try to match "-MANUFACTURER" here (say,
# "-sun"), then you have to tell the case statement up towards the top
# that MANUFACTURER isn't an operating system.  Otherwise, code above
# will signal an error saying that MANUFACTURER isn't an operating
# system, and we'll never get to this point.

case $basic_machine in
	score-*)
		os=-elf
		;;
	spu-*)
		os=-elf
		;;
	*-acorn)
		os=-riscix1.2
		;;
	arm*-rebel)
		os=-linux
		;;
	arm*-semi)
		os=-aout
		;;
	c4x-* | tic4x-*)
		os=-coff
		;;
	c8051-*)
		os=-elf
		;;
	hexagon-*)
		os=-elf
		;;
	tic54x-*)
		os=-coff
		;;
	tic55x-*)
		os=-coff
		;;
	tic6x-*)
		os=-coff
		;;
	# This must come before the *-dec entry.
	pdp10-*)
		os=-tops20
		;;
	pdp11-*)
		os=-none
		;;
	*-dec | vax-*)
		os=-ultrix4.2
		;;
	m68*-apollo)
		os=-domain
		;;
	i386-sun)
		os=-sunos4.0.2
		;;
	m68000-sun)
		os=-sunos3
		;;
	m68*-cisco)
		os=-aout
		;;
	mep-*)
		os=-elf
		;;
	mips*-cisco)
		os=-elf
		;;
	mips*-*)
		os=-elf
		;;
	or32-*)
		os=-coff
		;;
	*-tti)	# must be before sparc entry or we get the wrong os.
		os=-sysv3
		;;
	sparc-* | *-sun)
		os=-sunos4.1.1
		;;
	*-be)
		os=-beos
		;;
	*-haiku)
		os=-haiku
		;;
	*-ibm)
		os=-aix
		;;
	*-knuth)
		os=-mmixware
		;;
	*-wec)
		os=-proelf
		;;
	*-winbond)
		os=-proelf
		;;
	*-oki)
		os=-proelf
		;;
	*-hp)
		os=-hpux
		;;
	*-hitachi)
		os=-hiux
		;;
	i860-* | *-att | *-ncr | *-altos | *-motorola | *-convergent)
		os=-sysv
		;;
	*-cbm)
		os=-amigaos
		;;
	*-dg)
		os=-dgux
		;;
	*-dolphin)
		os=-sysv3
		;;
	m68k-ccur)
		os=-rtu
		;;
	m88k-omron*)
		os=-luna
		;;
	*-next )
		os=-nextstep
		;;
	*-sequent)
		os=-ptx
		;;
	*-crds)
		os=-unos
		;;
	*-ns)
		os=-genix
		;;
	i370-*)
		os=-mvs
		;;
	*-next)
		os=-nextstep3
		;;
	*-gould)
		os=-sysv
		;;
	*-highlevel)
		os=-bsd
		;;
	*-encore)
		os=-bsd
		;;
	*-sgi)
		os=-irix
		;;
	*-siemens)
		os=-sysv4
		;;
	*-masscomp)
		os=-rtu
		;;
	f30[01]-fujitsu | f700-fujitsu)
		os=-uxpv
		;;
	*-rom68k)
		os=-coff
		;;
	*-*bug)
		os=-coff
		;;
	*-apple)
		os=-macos
		;;
	*-atari*)
		os=-mint
		;;
	*)
		os=-none
		;;
esac
fi

# Here we handle the case where we know the os, and the CPU type, but not the
# manufacturer.  We pick the logical manufacturer.
vendor=unknown
case $basic_machine in
	*-unknown)
		case $os in
			-riscix*)
				vendor=acorn
				;;
			-sunos*)
				vendor=sun
				;;
			-cnk*|-aix*)
				vendor=ibm
				;;
			-beos*)
				vendor=be
				;;
			-hpux*)
				vendor=hp
				;;
			-mpeix*)
				vendor=hp
				;;
			-hiux*)
				vendor=hitachi
				;;
			-unos*)
				vendor=crds
				;;
			-dgux*)
				vendor=dg
				;;
			-luna*)
				vendor=omron
				;;
			-genix*)
				vendor=ns
				;;
			-mvs* | -opened*)
				vendor=ibm
				;;
			-os400*)
				vendor=ibm
				;;
			-ptx*)
				vendor=sequent
				;;
			-tpf*)
				vendor=ibm
				;;
			-vxsim* | -vxworks* | -windiss*)
				vendor=wrs
				;;
			-aux*)
				vendor=apple
				;;
			-hms*)
				vendor=hitachi
				;;
			-mpw* | -macos*)
				vendor=apple
				;;
			-*mint | -mint[0-9]* | -*MiNT | -MiNT[0-9]*)
				vendor=atari
				;;
			-vos*)
				vendor=stratus
				;;
		esac
		basic_machine=`echo $basic_machine | sed "s/unknown/$vendor/"`
		;;
esac

echo $basic_machine$os
exit

# Local variables:
# eval: (add-hook 'write-file-hooks 'time-stamp)
# time-stamp-start: "timestamp='"
# time-stamp-format: "%:y-%02m-%02d"
# time-stamp-end: "'"
# End:


================================================
FILE: libffi-git/libffi.install
================================================
infodir=usr/share/info
filelist=libffi.info.gz

post_install() {
  [ -x usr/bin/install-info ] || return 0
  for file in ${filelist}; do
    install-info $infodir/$file $infodir/dir 2> /dev/null
  done
}

post_upgrade() {
  post_install $1
}

pre_remove() {
  [ -x usr/bin/install-info ] || return 0
  for file in ${filelist}; do
    install-info --delete $infodir/$file $infodir/dir 2> /dev/null
  done
}


================================================
FILE: make-git/0001-remove-Werror.patch
================================================
diff --git a/maintMakefile b/maintMakefile
index a467ac0..792becb 100644
--- a/maintMakefile
+++ b/maintMakefile
@@ -32,7 +32,7 @@ PERLFLAGS := -w
 # We like mondo-warnings!
 # Also force comments to be preserved.  This helps when using ccache, in
 # combination with GCC 7's implicit-fallthrough warning.
-MAKE_CFLAGS := -C -Wall -Wextra -Werror -Wwrite-strings -Wshadow \
+MAKE_CFLAGS := -C -Wall -Wextra -Wwrite-strings -Wshadow \
 	-Wdeclaration-after-statement -Wbad-function-cast -Wformat-security \
 	-Wtype-limits -Wunused-but-set-parameter -Wlogical-op -Wpointer-arith \
 	-Wignored-qualifiers -Wformat-signedness -Wduplicated-cond


================================================
FILE: make-git/0002-no-symlinks-test.patch
================================================
diff --git a/tests/scripts/options/symlinks b/tests/scripts/options/symlinks
index bf8a892..7532f7f 100644
--- a/tests/scripts/options/symlinks
+++ b/tests/scripts/options/symlinks
@@ -10,7 +10,7 @@ $details = "Verify that symlink handling with and without -L works properly.";
 # (in that the symlink() function doesn't fail) but it really doesn't, so
 # check for it explicitly.
 
-if ($port_type eq 'W32' || !( eval { symlink("",""); 1 })) {
+if ($port_type eq 'W32' || $osname =~ /msys/i || !( eval { symlink("",""); 1 })) {
   # This test is N/A
   return -1;
 }


================================================
FILE: make-git/PKGBUILD
================================================
# Maintainer: Alexey Pavlov <alexpux@gmail.com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

pkgname=make-git
pkgver=4.2.92
pkgrel=1
pkgdesc="GNU make utility to maintain groups of programs"
arch=('i686' 'x86_64')
url="https://www.gnu.org/software/make"
license=('GPL3')
provides=("make")
conflicts=("make")
depends=('guile')
options=() # 'debug' '!strip')
makedepends=('gcc' 'git' 'rsync' 'libguile-devel' 'gmp-devel' 'libunistring-devel' 'libgc-devel' 'libffi-devel' 'libcrypt-devel')
install=$pkgname.install
source=("$pkgname"::'git+https://git.savannah.gnu.org/git/make.git'
		0001-remove-Werror.patch
		0002-no-symlinks-test.patch
		)
sha256sums=('SKIP'
			'99b6f851491847f739a0817f3decf50ccbf1911a0e4f7a3cb15eed7cb511b258'
			'5a8a9b1a9665b6d1536a98d3f94e5b5c2a4ae9214fc6d2cd3efdcdf0f50b2a23'
			)

prepare() {
  cd ${srcdir}/${pkgname}
  patch -p1 -i ${srcdir}/0001-remove-Werror.patch
  patch -p1 -i ${srcdir}/0002-no-symlinks-test.patch
  ./bootstrap
}

build() {
  cd ${srcdir}/${pkgname}
  ./configure \
    --prefix=/usr \
    --build=${CHOST} \
    --without-libintl-prefix \
    --without-libiconv-prefix \
    ac_cv_dos_paths=yes
  make -j1 all
}

check() {
  cd ${srcdir}/${pkgname}
  make check
}

package() {
  cd ${srcdir}/${pkgname}
  make DESTDIR=${pkgdir} install
}


================================================
FILE: make-git/make-git.install
================================================
infodir=usr/share/info
filelist="make.info make.info-1 make.info-2"

post_install() {
  [ -x usr/bin/install-info ] || return 0
  for file in ${filelist}; do
    install-info $infodir/$file.gz $infodir/dir 2> /dev/null
  done
}

post_upgrade() {
  post_install $1
}

pre_remove() {
  [ -x usr/bin/install-info ] || return 0
  for file in ${filelist}; do
    install-info --delete $infodir/$file.gz $infodir/dir 2> /dev/null
  done
}


================================================
FILE: midipix-cross-gcc-git/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

_realname=gcc
_mingw_suff=midipix-cross
_base_ver=4.6.4
pkgname=("${_mingw_suff}-${_realname}-git")
provides=("${_mingw_suff}-${_realname}")
conflicts=("${_mingw_suff}-${_realname}")
pkgver=4.6.4.51.e093428
pkgrel=1
pkgdesc="The GNU Compiler Collection"
arch=('i686' 'x86_64')
url="https://gcc.gnu.org/"
license=('GPL' 'LGPL' 'FDL' 'custom')
groups=("${_mingw_suff}-toolchain" "${_mingw_suff}")
depends=("zlib" "${_mingw_suff}-binutils")
makedepends=('gcc' 'git' 'lndir' 'gmp-devel' 'mpfr-devel' 'mpc-devel' 'zlib-devel')
options=('!strip' 'staticlibs' '!emptydirs' '!buildflags')
source=("${_realname}"::"git+git://midipix.org/cbb/cbb-gcc-4.6.4"
        'gcc-4.6.4-msys2.host.patch')

sha256sums=('SKIP'
            'f1073c1bd9cf2e4b9817cd2b0aacdb97c8bd0f126ca7c1bf89b6f3f721ff63b3')

#not supported yet
#i686-nt32-midipix
_targets="x86_64-nt64-midipix"

pkgver() {
  cd "$srcdir/$_realname"
  printf "%s.%s.%s" "${_base_ver}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${srcdir}/${_realname}

  #do not install libiberty
  sed -i 's/install_to_$(INSTALL_DEST) //' libiberty/Makefile.in
  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  #sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

  #msys2 patches
  patch -p1 -i ${srcdir}/gcc-4.6.4-msys2.host.patch

  #make sysroot dirs
  for _target in ${_targets}; do
    mkdir -p /opt/${_target}/usr/include
  done
}

build() {
  for _target in ${_targets}; do
  mkdir -p ${srcdir}/gcc-build-${_target} && cd ${srcdir}/gcc-build-${_target}

  GCCFLAGS="--include $(pwd)/../${_realname}/libc/cbb-musl-pe.h"
  GCCTARGET_FLAGS="$FLAGS -DIN_TARGET_LIBRARY_BUILD --sysroot=/opt/${_target}"

  export CFLAGS="$GCCFLAGS"
  export CXXFLAGS="$GCCFLAGS"

  export CFLAGS_FOR_BUILD="$GCCFLAGS"
  export CPPFLAGS_FOR_BUILD="$GCCFLAGS"
  export CXXFLAGS_FOR_BUILD="$GCCFLAGS"

  export CFLAGS_FOR_TARGET="$GCCTARGET_FLAGS"
  export XGCC_FLAGS_FOR_TARGET="$GCCTARGET_FLAGS"
  export CPPFLAGS_FOR_TARGET="$GCCTARGET_FLAGS"
  export CXXFLAGS_FOR_TARGET="$GCCTARGET_FLAGS"
  export LIBCFLAGS_FOR_TARGET="$GCCTARGET_FLAGS"

  export cbb_neutral_libiberty=no
  
  cbb_target=${_target} \
  cbb_xgcc_for_specs="$(pwd)/gcc/xgcc" \
  cbb_ldflags_for_target="--sysroot=/opt/${_target}" \
  cbb_sysroot_for_libgcc=/opt/${_target} \
  cbb_cflags_for_stage1="$CFLAGS_FOR_BUILD" \
  cbb_cflags_for_stage2="$CFLAGS_FOR_BUILD" \
  cbb_cflags_for_stage3="$CFLAGS_FOR_BUILD" \
  cbb_cflags_for_stage4="$CFLAGS_FOR_BUILD" \
  ../${_realname}/configure \
    --prefix=/opt \
    --with-sysroot=/opt/${_target} \
    --build=${CHOST} \
    --host=${CHOST} \
    --target=${_target} \
    --libexecdir=/opt/lib \
    --disable-bootstrap \
    --with-arch=${_arch} \
    --with-tune=generic \
    --disable-nls \
    --disable-multilib \
    --disable-libmudflap \
    --disable-obsolete \
    --disable-symvers \
    --disable-sjlj-exceptions \
    --with-fpmath=sse \
    --enable-multiarch \
    --enable-shared \
    --enable-initfini-array \
    --enable-threads=posix \
    --enable-lto \
    --enable-__cxa_atexit \
    --enable-gnu-indirect-function \
    --enable-gnu-unique-object \
    --enable-libstdcxx-debug \
    --enable-canonical-system-headers \
    --enable-languages=c,c++,lto \
    --enable-secureplt \
    --enable-debug \
    --disable-bootstrap \
    --with-system-zlib

  #stage 1
  make all-gcc
  #stage 2
  make all-target-libgcc
  #stage 3
  #make
  done
}

package() {
  for _target in ${_targets}; do
    cd ${srcdir}/gcc-build-${_target}
    #stage1
    make -j1 DESTDIR=${pkgdir} install-gcc
    #stage2
    make -j1 DESTDIR=${pkgdir} install-target-libgcc
    #stage3
    #make -j1 DESTDIR=${pkgdir} install
    for _f in ${pkgdir}/opt/bin/*.exe; do
      strip -s ${_f}
    done
    for _f in ${pkgdir}/opt/lib/gcc/${_target}/${_base_ver}/*.exe; do
      strip -s ${_f}
    done
    rm -rf ${pkgdir}/opt/share
  done
}


================================================
FILE: midipix-cross-gcc-git/gcc-4.6.4-msys2.host.patch
================================================
diff --git a/config.sub b/config.sub
index b0e45f3..cbf5907 100755
--- a/config.sub
+++ b/config.sub
@@ -1315,7 +1315,7 @@ case $os in
 	      | -ptx* | -coff* | -ecoff* | -winnt* | -domain* | -vsta* \
 	      | -udi* | -eabi* | -lites* | -ieee* | -go32* | -aux* \
 	      | -chorusos* | -chorusrdb* | -cegcc* \
-	      | -cygwin* | -pe* | -psos* | -moss* | -proelf* | -rtems* \
+	      | -cygwin* | -msys* | -pe* | -psos* | -moss* | -proelf* | -rtems* \
 	      | -mingw32* | -linux-gnu* | -linux-android* \
 	      | -linux-newlib* | -linux-uclibc* \
 	      | -uxpv* | -beos* | -mpeix* | -udk* \
diff --git a/gcc/config.host b/gcc/config.host
index 5fded10..c0a9c5d 100644
--- a/gcc/config.host
+++ b/gcc/config.host
@@ -218,6 +218,13 @@ case ${host} in
     host_exeext=.exe
     host_lto_plugin_soname=cyglto_plugin-0.dll
     ;;
+  i[34567]86-*-msys* | x86_64-*-msys*)
+    host_xm_file=i386/xm-cygwin.h
+    out_host_hook_obj=host-cygwin.o
+    host_xmake_file="${host_xmake_file} i386/x-cygwin"
+    host_exeext=.exe
+    host_lto_plugin_soname=msys-lto_plugin.dll
+    ;;
   i[34567]86-*-mingw32*)
     host_xm_file=i386/xm-mingw32.h
     host_xmake_file="${host_xmake_file} i386/x-mingw32"


================================================
FILE: midipix-cross-musl/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

_realname=musl
_mingw_suff=midipix-cross
_base_ver=1.1.9
pkgname=("${_mingw_suff}-${_realname}")
provides=("${_mingw_suff}-libc")
conflicts=("${_mingw_suff}-libc")
pkgver=1.1.9.36.44d991d
pkgrel=1
pkgdesc="Stub for the midipix system call layer"
arch=('i686' 'x86_64')
url="https://midipix.org/"
groups=("${_mingw_suff}-toolchain" "${_mingw_suff}")
depends=("zlib")
makedepends=("${_mingw_suff}-gcc" 'make')
options=('!strip' 'staticlibs' '!emptydirs' '!buildflags')
source=("https://www.musl-libc.org/releases/${_realname}-${_base_ver}.tar.gz"
        "git+git://midipix.org/mmglue"
        "git+git://midipix.org/lazy")

sha256sums=('00bf7173caf972c88cd07cb0d420c082a2f35efcccc1a81f8909bec2d030283e'
            'SKIP'
            'SKIP')

#noextract=("${_realname}-${_base_ver}.tar.gz")
#not supported yet
#i686-nt32-midipix
_targets="x86_64-nt64-midipix"

pkgver() {
  cd "$srcdir/mmglue"
  printf "%s.%s.%s" "${_base_ver}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  #mv ${srcdir}/${_realname}-${_base_ver} ${srcdir}/${_realname}
  cd "${srcdir}/$_realname-${_base_ver}" 
  cp -R ../mmglue/* .
}


build() {
  [ -d ${srcdir}/build-$(arch) ] && rm -rf ${srcdir}/build-$(arch)
  mkdir ${srcdir}/build-$(arch)
  cd ${srcdir}/build-$(arch)

  for _target in ${_targets}; do
    ../lazy/lazy \
    -x config \
    -t "${_target}" \
    -a nt64 \
    -c gcc \
    -n musl \
    -p "../$_realname-${_base_ver}" \
    -f "${pkgdir}/opt/${_target}"
  done
}

package() {
  cd ${srcdir}/build-$(arch)
  for _target in ${_targets}; do
    #stage 1
    #./lazy -x build -e install_no_complex
    #stage 2
    PATH=/opt/bin:$PATH ./lazy -x build -e install
  done
}


================================================
FILE: midipix-cross-psxstub/PKGBUILD
================================================
# Maintainer: Martell Malone <martellmalone@gmail.com>

_realname=psxstub
_mingw_suff=midipix-cross
_base_ver=0.0
pkgname=("${_mingw_suff}-${_realname}")
provides=("${_mingw_suff}-psxscl")
conflicts=("${_mingw_suff}-psxscl")
pkgver=0.0.7.92a6ceb
pkgrel=1
pkgdesc="Stub for the midipix system call layer"
arch=('i686' 'x86_64')
url="https://midipix.org/"
groups=("${_mingw_suff}-toolchain" "${_mingw_suff}")
depends=("zlib")
makedepends=("${_mingw_suff}-gcc" 'make')
options=('!strip' 'staticlibs' '!emptydirs' '!buildflags')
source=("${_realname}"::"git+git://midipix.org/psxstub")
sha256sums=('SKIP')

#not supported yet
#i686-nt32-midipix
_targets="x86_64-nt64-midipix"

pkgver() {
  cd "$srcdir/$_realname"
  printf "%s.%s.%s" "${_base_ver}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_realname"
  for _target in ${_targets}; do
    make clean
    make TARGET="${_target}"

    #hack because -mout-implib is not working on cygwin host binutils
    ${_target}-dlltool -D libpsxscl.so -l libpsxscl.lib.a
  done
}


package() {
  cd "$srcdir/$_realname"
  for _target in ${_targets}; do
    make TARGET="${_target}" DESTDIR="${pkgdir}/opt/${_target}" install
  done
}


================================================
FILE: mingw-w64-cross-binutils-git/0001-Patch-early-arm-pe.patch
================================================
From 093ec986a3608f5eb4d8f45e74786ed7791115c2 Mon Sep 17 00:00:00 2001
From: Kai Tietz <ktietz@daphne.(none)>
Date: Wed, 24 Sep 2014 15:44:22 -0700
Subject: [PATCH 1/3] Patch early arm pe

---
 bfd/coff-arm.c                           | 371 ++++++++++---------------------
 bfd/coffcode.h                           |  11 +-
 bfd/config.bfd                           |   2 +-
 bfd/peicode.h                            |  15 ++
 gas/config/tc-arm.c                      |  20 +-
 gas/testsuite/gas/arm/t2-branch-global.d |   2 +-
 ld/emulparams/arm_wince_pe.sh            |   2 +
 ld/emultempl/pe.em                       |   6 +-
 8 files changed, 157 insertions(+), 272 deletions(-)

diff --git a/bfd/coff-arm.c b/bfd/coff-arm.c
index d47b77e..4435490 100644
--- a/bfd/coff-arm.c
+++ b/bfd/coff-arm.c
@@ -146,7 +146,12 @@ coff_arm_reloc (bfd *abfd,
       }
 
   /* Now let bfd_perform_relocation finish everything up.  */
+#ifndef ARM_WINCE
   return bfd_reloc_continue;
+#else
+  /* This seems to fix ARM_32 relocations to external functions. */
+  return bfd_reloc_ok;
+#endif
 }
 
 /* If USER_LABEL_PREFIX is defined as "_" (see coff_arm_is_local_label_name()
@@ -172,6 +177,10 @@ coff_arm_reloc (bfd *abfd,
 #define ARM_THUMB12  4
 #define ARM_SECTION  14
 #define ARM_SECREL   15
+#define ARM_MOV32T   17
+#define ARM_BRANCH20T 18
+#define ARM_BRANCH24T 20
+#define ARM_BLX23T    21
 
 #else
 
@@ -193,19 +202,32 @@ coff_arm_reloc (bfd *abfd,
 
 #endif
 
-static bfd_reloc_status_type aoutarm_fix_pcrel_26_done
+static bfd_reloc_status_type bfd_coff_generic_reloc
   (bfd *, arelent *, asymbol *, void *, asection *, bfd *, char **);
-static bfd_reloc_status_type aoutarm_fix_pcrel_26
-  (bfd *, arelent *, asymbol *, void *, asection *, bfd *, char **);
-static bfd_reloc_status_type coff_thumb_pcrel_12
-  (bfd *, arelent *, asymbol *, void *, asection *, bfd *, char **);
-#ifndef ARM_WINCE
-static bfd_reloc_status_type coff_thumb_pcrel_9
-  (bfd *, arelent *, asymbol *, void *, asection *, bfd *, char **);
-static bfd_reloc_status_type coff_thumb_pcrel_23
+#ifdef ARM_WINCE
+static bfd_reloc_status_type coff_reloc_mov32t
   (bfd *, arelent *, asymbol *, void *, asection *, bfd *, char **);
 #endif
 
+static bfd_reloc_status_type
+bfd_coff_generic_reloc (bfd *abfd ATTRIBUTE_UNUSED,
+                        arelent *reloc_entry,
+                        asymbol *symbol,
+                        void * data ATTRIBUTE_UNUSED,
+                        asection *input_section,
+                        bfd *output_bfd,
+                        char **error_message ATTRIBUTE_UNUSED)
+{
+  if (output_bfd != (bfd *) NULL
+      && (symbol->flags & BSF_SECTION_SYM) == 0)
+    {
+      reloc_entry->address += input_section->output_offset;
+      return bfd_reloc_ok;
+    }
+
+  return bfd_reloc_continue;
+}
+
 static reloc_howto_type aoutarm_std_reloc_howto[] =
   {
 #ifdef ARM_WINCE
@@ -216,7 +238,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_dont,
-	   aoutarm_fix_pcrel_26_done,
+	   bfd_coff_generic_reloc,
 	   "ARM_26D",
 	   TRUE, 	/* partial_inplace.  */
 	   0x00ffffff,
@@ -234,7 +256,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE, 	/* partial_inplace.  */
 	   0xffffffff,
 	   0xffffffff,
-	   PCRELOFFSET),
+	   FALSE),
     HOWTO (ARM_RVA32,
 	   0,
 	   2,
@@ -255,7 +277,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   aoutarm_fix_pcrel_26 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_26",
 	   FALSE,
 	   0x00ffffff,
@@ -268,7 +290,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   coff_thumb_pcrel_12 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_THUMB12",
 	   FALSE,
 	   0x000007ff,
@@ -309,6 +331,60 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   0xffffffff,
 	   0xffffffff,
 	   PCRELOFFSET),
+    EMPTY_HOWTO (-1), /* ARM_MOV32A */
+    HOWTO (ARM_MOV32T,
+	   0,
+	   2,
+	   16,
+	   FALSE,
+	   0,
+	   complain_overflow_bitfield,
+	   coff_reloc_mov32t,
+	   "ARM_MOV32T",
+	   FALSE, 	/* partial_inplace.  */
+	   0x040f70ff,
+	   0x040f70ff,
+	   FALSE),
+    HOWTO (ARM_BRANCH20T,
+	   1,
+	   2,
+	   19,
+	   TRUE,
+	   0,
+	   complain_overflow_bitfield,
+	   bfd_coff_generic_reloc,
+	   "ARM_BRANCH20T",
+	   FALSE, 	/* partial_inplace.  */
+	   0x043f2fff,
+	   0x043f2fff,
+	   PCRELOFFSET),
+    EMPTY_HOWTO (-1), /* unallocated */
+    HOWTO (ARM_BRANCH24T,
+	   1,
+	   2,
+	   24,
+	   TRUE,
+	   0,
+	   complain_overflow_bitfield,
+	   bfd_coff_generic_reloc,
+	   "ARM_BRANCH24T",
+	   FALSE, 	/* partial_inplace.  */
+	   0x07ff2fff,
+	   0x07ff2fff,
+	   PCRELOFFSET),
+    HOWTO (ARM_BLX23T,
+	   2,
+	   2,
+	   24,
+	   TRUE,
+	   0,
+	   complain_overflow_bitfield,
+	   bfd_coff_generic_reloc,
+	   "ARM_BLX23T",
+	   FALSE, 	/* partial_inplace.  */
+	   0x07ff2fff,
+	   0x07ff2fff,
+	   PCRELOFFSET),
 #else /* not ARM_WINCE */
     HOWTO (ARM_8,
 	   0,
@@ -356,7 +432,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   aoutarm_fix_pcrel_26 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_26",
 	   FALSE,
 	   0x00ffffff,
@@ -408,7 +484,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   FALSE,
 	   0,
 	   complain_overflow_dont,
-	   aoutarm_fix_pcrel_26_done,
+	   bfd_coff_generic_reloc,
 	   "ARM_26D",
 	   TRUE,
 	   0x00ffffff,
@@ -462,7 +538,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   coff_thumb_pcrel_9 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_THUMB9",
 	   FALSE,
 	   0x000000ff,
@@ -475,7 +551,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   coff_thumb_pcrel_12 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_THUMB12",
 	   FALSE,
 	   0x000007ff,
@@ -488,7 +564,7 @@ static reloc_howto_type aoutarm_std_reloc_howto[] =
 	   TRUE,
 	   0,
 	   complain_overflow_signed,
-	   coff_thumb_pcrel_23 ,
+	   bfd_coff_generic_reloc,
 	   "ARM_THUMB23",
 	   FALSE,
 	   0x07ff07ff,
@@ -565,249 +641,20 @@ coff_arm_rtype_to_howto (bfd *abfd ATTRIBUTE_UNUSED,
   return howto;
 }
 
-/* Used by the assembler.  */
-
+#ifdef ARM_WINCE
 static bfd_reloc_status_type
-aoutarm_fix_pcrel_26_done (bfd *abfd ATTRIBUTE_UNUSED,
-			   arelent *reloc_entry ATTRIBUTE_UNUSED,
-			   asymbol *symbol ATTRIBUTE_UNUSED,
-			   void * data ATTRIBUTE_UNUSED,
-			   asection *input_section ATTRIBUTE_UNUSED,
-			   bfd *output_bfd ATTRIBUTE_UNUSED,
-			   char **error_message ATTRIBUTE_UNUSED)
+coff_reloc_mov32t (bfd *abfd ATTRIBUTE_UNUSED,
+		   arelent *reloc_entry ATTRIBUTE_UNUSED,
+		   asymbol *symbol ATTRIBUTE_UNUSED,
+		   void * data ATTRIBUTE_UNUSED,
+		   asection *input_section ATTRIBUTE_UNUSED,
+		   bfd *output_bfd ATTRIBUTE_UNUSED,
+		   char **error_message ATTRIBUTE_UNUSED)
 {
-  /* This is dead simple at present.  */
   return bfd_reloc_ok;
 }
+#endif
 
-/* Used by the assembler.  */
-
-static bfd_reloc_status_type
-aoutarm_fix_pcrel_26 (bfd *abfd,
-		      arelent *reloc_entry,
-		      asymbol *symbol,
-		      void * data,
-		      asection *input_section,
-		      bfd *output_bfd,
-		      char **error_message ATTRIBUTE_UNUSED)
-{
-  bfd_vma relocation;
-  bfd_size_type addr = reloc_entry->address;
-  long target = bfd_get_32 (abfd, (bfd_byte *) data + addr);
-  bfd_reloc_status_type flag = bfd_reloc_ok;
-
-  /* If this is an undefined symbol, return error.  */
-  if (bfd_is_und_section (symbol->section)
-      && (symbol->flags & BSF_WEAK) == 0)
-    return output_bfd ? bfd_reloc_continue : bfd_reloc_undefined;
-
-  /* If the sections are different, and we are doing a partial relocation,
-     just ignore it for now.  */
-  if (symbol->section->name != input_section->name
-      && output_bfd != (bfd *)NULL)
-    return bfd_reloc_continue;
-
-  relocation = (target & 0x00ffffff) << 2;
-  relocation = (relocation ^ 0x02000000) - 0x02000000; /* Sign extend.  */
-  relocation += symbol->value;
-  relocation += symbol->section->output_section->vma;
-  relocation += symbol->section->output_offset;
-  relocation += reloc_entry->addend;
-  relocation -= input_section->output_section->vma;
-  relocation -= input_section->output_offset;
-  relocation -= addr;
-
-  if (relocation & 3)
-    return bfd_reloc_overflow;
-
-  /* Check for overflow.  */
-  if (relocation & 0x02000000)
-    {
-      if ((relocation & ~ (bfd_vma) 0x03ffffff) != ~ (bfd_vma) 0x03ffffff)
-	flag = bfd_reloc_overflow;
-    }
-  else if (relocation & ~(bfd_vma) 0x03ffffff)
-    flag = bfd_reloc_overflow;
-
-  target &= ~0x00ffffff;
-  target |= (relocation >> 2) & 0x00ffffff;
-  bfd_put_32 (abfd, (bfd_vma) target, (bfd_byte *) data + addr);
-
-  /* Now the ARM magic... Change the reloc type so that it is marked as done.
-     Strictly this is only necessary if we are doing a partial relocation.  */
-  reloc_entry->howto = &aoutarm_std_reloc_howto[ARM_26D];
-
-  return flag;
-}
-
-static bfd_reloc_status_type
-coff_thumb_pcrel_common (bfd *abfd,
-			 arelent *reloc_entry,
-			 asymbol *symbol,
-			 void * data,
-			 asection *input_section,
-			 bfd *output_bfd,
-			 char **error_message ATTRIBUTE_UNUSED,
-			 thumb_pcrel_branchtype btype)
-{
-  bfd_vma relocation = 0;
-  bfd_size_type addr = reloc_entry->address;
-  long target = bfd_get_32 (abfd, (bfd_byte *) data + addr);
-  bfd_reloc_status_type flag = bfd_reloc_ok;
-  bfd_vma dstmsk;
-  bfd_vma offmsk;
-  bfd_vma signbit;
-
-  /* NOTE: This routine is currently used by GAS, but not by the link
-     phase.  */
-  switch (btype)
-    {
-    case b9:
-      dstmsk  = 0x000000ff;
-      offmsk  = 0x000001fe;
-      signbit = 0x00000100;
-      break;
-
-    case b12:
-      dstmsk  = 0x000007ff;
-      offmsk  = 0x00000ffe;
-      signbit = 0x00000800;
-      break;
-
-    case b23:
-      dstmsk  = 0x07ff07ff;
-      offmsk  = 0x007fffff;
-      signbit = 0x00400000;
-      break;
-
-    default:
-      abort ();
-    }
-
-  /* If this is an undefined symbol, return error.  */
-  if (bfd_is_und_section (symbol->section)
-      && (symbol->flags & BSF_WEAK) == 0)
-    return output_bfd ? bfd_reloc_continue : bfd_reloc_undefined;
-
-  /* If the sections are different, and we are doing a partial relocation,
-     just ignore it for now.  */
-  if (symbol->section->name != input_section->name
-      && output_bfd != (bfd *)NULL)
-    return bfd_reloc_continue;
-
-  switch (btype)
-    {
-    case b9:
-    case b12:
-      relocation = ((target & dstmsk) << 1);
-      break;
-
-    case b23:
-      if (bfd_big_endian (abfd))
-	relocation = ((target & 0x7ff) << 1)  | ((target & 0x07ff0000) >> 4);
-      else
-	relocation = ((target & 0x7ff) << 12) | ((target & 0x07ff0000) >> 15);
-      break;
-
-    default:
-      abort ();
-    }
-
-  relocation = (relocation ^ signbit) - signbit; /* Sign extend.  */
-  relocation += symbol->value;
-  relocation += symbol->section->output_section->vma;
-  relocation += symbol->section->output_offset;
-  relocation += reloc_entry->addend;
-  relocation -= input_section->output_section->vma;
-  relocation -= input_section->output_offset;
-  relocation -= addr;
-
-  if (relocation & 1)
-    return bfd_reloc_overflow;
-
-  /* Check for overflow.  */
-  if (relocation & signbit)
-    {
-      if ((relocation & ~offmsk) != ~offmsk)
-	flag = bfd_reloc_overflow;
-    }
-  else if (relocation & ~offmsk)
-    flag = bfd_reloc_overflow;
-
-  target &= ~dstmsk;
-  switch (btype)
-   {
-   case b9:
-   case b12:
-     target |= (relocation >> 1);
-     break;
-
-   case b23:
-     if (bfd_big_endian (abfd))
-       target |= (((relocation & 0xfff) >> 1)
-		  | ((relocation << 4)  & 0x07ff0000));
-     else
-       target |= (((relocation & 0xffe) << 15)
-		  | ((relocation >> 12) & 0x7ff));
-     break;
-
-   default:
-     abort ();
-   }
-
-  bfd_put_32 (abfd, (bfd_vma) target, (bfd_byte *) data + addr);
-
-  /* Now the ARM magic... Change the reloc type so that it is marked as done.
-     Strictly this is only necessary if we are doing a partial relocation.  */
-  reloc_entry->howto = & aoutarm_std_reloc_howto [ARM_26D];
-
-  /* TODO: We should possibly have DONE entries for the THUMB PCREL relocations.  */
-  return flag;
-}
-
-#ifndef ARM_WINCE
-static bfd_reloc_status_type
-coff_thumb_pcrel_23 (bfd *abfd,
-		     arelent *reloc_entry,
-		     asymbol *symbol,
-		     void * data,
-		     asection *input_section,
-		     bfd *output_bfd,
-		     char **error_message)
-{
-  return coff_thumb_pcrel_common (abfd, reloc_entry, symbol, data,
-                                  input_section, output_bfd, error_message,
-				  b23);
-}
-
-static bfd_reloc_status_type
-coff_thumb_pcrel_9 (bfd *abfd,
-		    arelent *reloc_entry,
-		    asymbol *symbol,
-		    void * data,
-		    asection *input_section,
-		    bfd *output_bfd,
-		    char **error_message)
-{
-  return coff_thumb_pcrel_common (abfd, reloc_entry, symbol, data,
-                                  input_section, output_bfd, error_message,
-				  b9);
-}
-#endif /* not ARM_WINCE */
-
-static bfd_reloc_status_type
-coff_thumb_pcrel_12 (bfd *abfd,
-		     arelent *reloc_entry,
-		     asymbol *symbol,
-		     void * data,
-		     asection *input_section,
-		     bfd *output_bfd,
-		     char **error_message)
-{
-  return coff_thumb_pcrel_common (abfd, reloc_entry, symbol, data,
-                                  input_section, output_bfd, error_message,
-				  b12);
-}
 
 static const struct reloc_howto_struct *
 coff_arm_reloc_type_lookup (bfd * abfd, bfd_reloc_code_real_type code)
@@ -829,9 +676,14 @@ coff_arm_reloc_type_lookup (bfd * abfd, bfd_reloc_code_real_type code)
 #ifdef ARM_WINCE
       ASTD (BFD_RELOC_32,                   ARM_32);
       ASTD (BFD_RELOC_RVA,                  ARM_RVA32);
-      ASTD (BFD_RELOC_ARM_PCREL_BRANCH,     ARM_26);
-      ASTD (BFD_RELOC_THUMB_PCREL_BRANCH12, ARM_THUMB12);
+       ASTD (BFD_RELOC_ARM_PCREL_BRANCH,     ARM_26);
+       ASTD (BFD_RELOC_THUMB_PCREL_BRANCH12, ARM_THUMB12);
       ASTD (BFD_RELOC_32_SECREL,            ARM_SECREL);
+       ASTD (BFD_RELOC_THUMB_PCREL_BRANCH23, ARM_BLX23T);
+       ASTD (BFD_RELOC_THUMB_PCREL_BLX,      ARM_BLX23T);
+      ASTD (BFD_RELOC_THUMB_PCREL_BRANCH25, ARM_BRANCH24T);
+      ASTD (BFD_RELOC_THUMB_PCREL_BRANCH20, ARM_BRANCH20T);
+      ASTD (BFD_RELOC_ARM_THUMB_MOVW,       ARM_MOV32T);
 #else
       ASTD (BFD_RELOC_8,                    ARM_8);
       ASTD (BFD_RELOC_16,                   ARM_16);
@@ -1236,7 +1088,7 @@ coff_arm_relocate_section (bfd *output_bfd,
     	       TRUE,
     	       0,
     	       complain_overflow_signed,
-    	       aoutarm_fix_pcrel_26 ,
+    	       bfd_coff_generic_reloc,
     	       "ARM_26",
     	       TRUE,
     	       0x00ffffff,
@@ -2558,3 +2410,4 @@ extern const bfd_target TARGET_BIG_SYM ;
 /* Target vectors.  */
 CREATE_LITTLE_COFF_TARGET_VEC (TARGET_LITTLE_SYM, TARGET_LITTLE_NAME, D_PAGED, EXTRA_S_FLAGS, TARGET_UNDERSCORE, & TARGET_BIG_SYM, COFF_SWAP_TABLE)
 CREATE_BIG_COFF_TARGET_VEC (TARGET_BIG_SYM, TARGET_BIG_NAME, D_PAGED, EXTRA_S_FLAGS, TARGET_UNDERSCORE, & TARGET_LITTLE_SYM, COFF_SWAP_TABLE)
+
diff --git a/bfd/coffcode.h b/bfd/coffcode.h
index 6678b88..04a352a 100644
--- a/bfd/coffcode.h
+++ b/bfd/coffcode.h
@@ -2124,6 +2124,7 @@ coff_set_arch_mach_hook (bfd *abfd, void * filehdr)
     case ARMMAGIC:
     case ARMPEMAGIC:
     case THUMBPEMAGIC:
+    case ARMV7PEMAGIC:
       arch = bfd_arch_arm;
       machine = bfd_arm_get_mach_from_notes (abfd, ARM_NOTE_SECTION);
       if (machine == bfd_mach_arm_unknown)
@@ -2890,7 +2891,11 @@ coff_set_flags (bfd * abfd,
 #ifdef ARMMAGIC
     case bfd_arch_arm:
 #ifdef ARM_WINCE
+#ifdef ARMV7_WIN
+      * magicp = ARMV7PEMAGIC;
+#else
       * magicp = ARMPEMAGIC;
+#endif
 #else
       * magicp = ARMMAGIC;
 #endif
@@ -2919,9 +2924,9 @@ coff_set_flags (bfd * abfd,
 	case bfd_mach_arm_5:  * flagsp |= F_ARM_5;  break;
 	  /* FIXME: we do not have F_ARM vaues greater than F_ARM_5.
 	     See also the comment in coff_set_arch_mach_hook().  */
-	case bfd_mach_arm_5T: * flagsp |= F_ARM_5;  break;
-	case bfd_mach_arm_5TE: * flagsp |= F_ARM_5; break;
-	case bfd_mach_arm_XScale: * flagsp |= F_ARM_5; break;
+	case bfd_mach_arm_5T: * flagsp |= F_ARM_3M;  break;
+	case bfd_mach_arm_5TE: * flagsp |= F_ARM_3M; break;
+	case bfd_mach_arm_XScale: * flagsp |= F_ARM_3M; break;
 	}
       return TRUE;
 #endif
diff --git a/bfd/config.bfd b/bfd/config.bfd
index 7bcb92a..05ab14b 100644
--- a/bfd/config.bfd
+++ b/bfd/config.bfd
@@ -304,7 +304,7 @@ case "${targ}" in
     targ_defvec=arm_pe_wince_le_vec
     targ_selvecs="arm_pe_wince_le_vec arm_pe_wince_be_vec arm_pei_wince_le_vec arm_pei_wince_be_vec"
     targ_underscore=no
-    targ_cflags="-DARM_WINCE -DARM_COFF_BUGFIX"
+    targ_cflags="-DARM_WINCE -DARMV7_WIN -DARM_COFF_BUGFIX"
     ;;
   arm-*-pe*)
     targ_defvec=arm_pe_le_vec
diff --git a/bfd/peicode.h b/bfd/peicode.h
index 157879b..15445a4 100644
--- a/bfd/peicode.h
+++ b/bfd/peicode.h
@@ -717,6 +717,13 @@ static jump_table jtab[] =
     16, 12
   },
 #endif
+#ifdef ARMV7PEMAGIC
+  { ARMV7PEMAGIC,
+    { 0x40, 0xb4, 0x02, 0x4e, 0x36, 0x68, 0xb4, 0x46,
+      0x40, 0xbc, 0x60, 0x47, 0x00, 0x00, 0x00, 0x00 },
+    16, 12
+  },
+#endif
   { 0, { 0 }, 0, 0 }
 };
 
@@ -1146,9 +1153,13 @@ pe_ILF_object_p (bfd * abfd)
       break;
 
     case IMAGE_FILE_MACHINE_ARM:
+#ifdef ARMV7PEMAGIC
+      magic = ARMV7PEMAGIC;
+#else
 #ifdef ARMPEMAGIC
       magic = ARMPEMAGIC;
 #endif
+#endif
       break;
 
     case IMAGE_FILE_MACHINE_THUMB:
@@ -1157,7 +1168,11 @@ pe_ILF_object_p (bfd * abfd)
 	extern const bfd_target TARGET_LITTLE_SYM;
 
 	if (abfd->xvec == & TARGET_LITTLE_SYM)
+#ifdef ARMV7PEMAGIC
+	  magic = ARMV7PEMAGIC;
+#else
 	  magic = THUMBPEMAGIC;
+#endif
       }
 #endif
       break;
diff --git a/gas/config/tc-arm.c b/gas/config/tc-arm.c
index 5077f87..0f173b0 100644
--- a/gas/config/tc-arm.c
+++ b/gas/config/tc-arm.c
@@ -138,7 +138,11 @@ static int fix_v4bx	     = FALSE;
 static int warn_on_deprecated = TRUE;
 
 /* Understand CodeComposer Studio assembly syntax.  */
+#ifdef TE_WINCE
+bfd_boolean codecomposer_syntax = TRUE;
+#else
 bfd_boolean codecomposer_syntax = FALSE;
+#endif
 
 /* Variables that we set while parsing command-line options.  Once all
    options have been read we re-process these values to set the real
@@ -868,7 +872,11 @@ static void it_fsm_post_encode (void);
 
 /* This array holds the chars that always start a comment.  If the
    pre-processor is disabled, these aren't very useful.	 */
+#ifdef TE_WINCE
+char arm_comment_chars[] = "@;";
+#else
 char arm_comment_chars[] = "@";
+#endif
 
 /* This array holds the chars that only start a comment at the beginning of
    a line.  If the line seems to have the form '# 123 filename'
@@ -879,7 +887,11 @@ char arm_comment_chars[] = "@";
 /* Also note that comments like this one will always work.  */
 const char line_comment_chars[] = "#";
 
+#ifdef TE_WINCE
+char arm_line_separator_chars[] = "\0\0";
+#else
 char arm_line_separator_chars[] = ";";
+#endif
 
 /* Chars that can be used to separate mant
    from exp in floating point numbers.	*/
@@ -3474,14 +3486,15 @@ s_ltorg (int ignored ATTRIBUTE_UNUSED)
   pool->symbol = NULL;
 }
 
-#ifdef OBJ_ELF
 /* Forward declarations for functions below, in the MD interface
    section.  */
 static void fix_new_arm (fragS *, int, short, expressionS *, int, int);
+#ifdef OBJ_ELF
 static valueT create_unwind_entry (int);
 static void start_unwind_section (const segT, int);
 static void add_unwind_opcode (valueT, int);
 static void flush_pending_unwind (void);
+#endif
 
 /* Directives: Data.  */
 
@@ -3738,6 +3751,7 @@ s_arm_rel31 (int ignored ATTRIBUTE_UNUSED)
   demand_empty_rest_of_line ();
 }
 
+#ifdef OBJ_ELF
 /* Directives: AEABI stack-unwind tables.  */
 
 /* Parse an unwind_fnstart directive.  Simply records the current location.  */
@@ -4693,13 +4707,13 @@ const pseudo_typeS md_pseudo_table[] =
   { "object_arch", s_arm_object_arch,	0 },
   { "fpu",	   s_arm_fpu,	  0 },
   { "arch_extension", s_arm_arch_extension, 0 },
-#ifdef OBJ_ELF
   { "word",	        s_arm_elf_cons, 4 },
   { "long",	        s_arm_elf_cons, 4 },
   { "inst.n",           s_arm_elf_inst, 2 },
   { "inst.w",           s_arm_elf_inst, 4 },
   { "inst",             s_arm_elf_inst, 0 },
   { "rel31",	        s_arm_rel31,	  0 },
+#ifdef OBJ_ELF
   { "fnstart",		s_arm_unwind_fnstart,	0 },
   { "fnend",		s_arm_unwind_fnend,	0 },
   { "cantunwind",	s_arm_unwind_cantunwind, 0 },
@@ -4715,7 +4729,7 @@ const pseudo_typeS md_pseudo_table[] =
   { "eabi_attribute",	s_arm_eabi_attribute,	0 },
   { "tlsdescseq",	s_arm_tls_descseq,      0 },
 #else
-  { "word",	   cons, 4},
+  /* { "word",	   cons, 4}, */
 
   /* These are used for dwarf.  */
   {"2byte", cons, 2},
diff --git a/gas/testsuite/gas/arm/t2-branch-global.d b/gas/testsuite/gas/arm/t2-branch-global.d
index 5850d6b..8dee280 100644
--- a/gas/testsuite/gas/arm/t2-branch-global.d
+++ b/gas/testsuite/gas/arm/t2-branch-global.d
@@ -11,4 +11,4 @@ Disassembly of section .text:
 
 00000000 <foo>:
    0:	f... b... 	b\.w	.*
-			0: R_ARM_THM_JUMP24	\*ABS\*.*
+			0: (R_ARM_THM_JUMP24|ARM_BRANCH24T)	\*ABS\*.*
diff --git a/ld/emulparams/arm_wince_pe.sh b/ld/emulparams/arm_wince_pe.sh
index 133a51c..8c95287 100644
--- a/ld/emulparams/arm_wince_pe.sh
+++ b/ld/emulparams/arm_wince_pe.sh
@@ -11,3 +11,5 @@ TEMPLATE_NAME=pe
 SUBSYSTEM=PE_DEF_SUBSYSTEM
 INITIAL_SYMBOL_CHAR=\"\"
 TARGET_PAGE_SIZE=0x1000
+GENERATE_AUTO_IMPORT_SCRIPT=1
+
diff --git a/ld/emultempl/pe.em b/ld/emultempl/pe.em
index 979cc8b..4d4e909 100644
--- a/ld/emultempl/pe.em
+++ b/ld/emultempl/pe.em
@@ -116,7 +116,7 @@ fragment <<EOF
 
 #if defined(TARGET_IS_armpe) || defined(TARGET_IS_arm_wince_pe)
 #define PE_DEF_SECTION_ALIGNMENT	0x00001000
-#define	PE_DEF_SUBSYSTEM		9
+#define	PE_DEF_SUBSYSTEM		3
 #else
 #define PE_DEF_SECTION_ALIGNMENT	0x00000400
 #define	PE_DEF_SUBSYSTEM		2
@@ -410,11 +410,7 @@ static definfo init[] =
   D(MinorOperatingSystemVersion,"__minor_os_version__", 0, FALSE),
   D(MajorImageVersion,"__major_image_version__", 1, FALSE),
   D(MinorImageVersion,"__minor_image_version__", 0, FALSE),
-#if defined(TARGET_IS_armpe)  || defined(TARGET_IS_arm_wince_pe)
-  D(MajorSubsystemVersion,"__major_subsystem_version__", 3, FALSE),
-#else
   D(MajorSubsystemVersion,"__major_subsystem_version__", 4, FALSE),
-#endif
   D(MinorSubsystemVersion,"__minor_subsystem_version__", 0, FALSE),
   D(Subsystem,"__subsystem__", ${SUBSYSTEM}, FALSE),
   D(SizeOfStackReserve,"__size_of_stack_reserve__", 0x200000, FALSE),
-- 
2.1.2



================================================
FILE: mingw-w64-cross-binutils-git/0002-Continue-on-it.patch
================================================
From 12a49124614ce5af0d6ef364a04813528e112619 Mon Sep 17 00:00:00 2001
From: Kai Tietz <ktietz@daphne.(none)>
Date: Fri, 26 Sep 2014 02:23:26 -0700
Subject: [PATCH 2/3] Continue on it ...

---
 bfd/coff-arm.c      |  4 +++-
 bfd/coffcode.h      | 20 +++++++++++++++-----
 gas/config/tc-arm.c |  7 +++++++
 3 files changed, 25 insertions(+), 6 deletions(-)

diff --git a/bfd/coff-arm.c b/bfd/coff-arm.c
index 4435490..14c0fe8 100644
--- a/bfd/coff-arm.c
+++ b/bfd/coff-arm.c
@@ -676,7 +676,7 @@ coff_arm_reloc_type_lookup (bfd * abfd, bfd_reloc_code_real_type code)
 #ifdef ARM_WINCE
       ASTD (BFD_RELOC_32,                   ARM_32);
       ASTD (BFD_RELOC_RVA,                  ARM_RVA32);
-       ASTD (BFD_RELOC_ARM_PCREL_BRANCH,     ARM_26);
+       ASTD (BFD_RELOC_ARM_PCREL_BRANCH,     ARM_BLX23T);
        ASTD (BFD_RELOC_THUMB_PCREL_BRANCH12, ARM_THUMB12);
       ASTD (BFD_RELOC_32_SECREL,            ARM_SECREL);
        ASTD (BFD_RELOC_THUMB_PCREL_BRANCH23, ARM_BLX23T);
@@ -1105,11 +1105,13 @@ coff_arm_relocate_section (bfd *output_bfd,
         }
 
 #ifdef ARM_WINCE
+#if 0
       /* MS ARM-CE makes the reloc relative to the opcode's pc, not
 	 the next opcode's pc, so is off by one.  */
       if (howto->pc_relative && !info->relocatable)
 	addend -= 8;
 #endif
+#endif
 
       /* If we are doing a relocatable link, then we can just ignore
          a PC relative reloc that is pcrel_offset.  It will already
diff --git a/bfd/coffcode.h b/bfd/coffcode.h
index 04a352a..24b00a4 100644
--- a/bfd/coffcode.h
+++ b/bfd/coffcode.h
@@ -2129,6 +2129,9 @@ coff_set_arch_mach_hook (bfd *abfd, void * filehdr)
       machine = bfd_arm_get_mach_from_notes (abfd, ARM_NOTE_SECTION);
       if (machine == bfd_mach_arm_unknown)
 	{
+#ifdef ARMV7_WIN
+	  machine = bfd_mach_arm_XScale;
+#else
 	  switch (internal_f->f_flags & F_ARM_ARCHITECTURE_MASK)
 	    {
 	    case F_ARM_2:  machine = bfd_mach_arm_2;  break;
@@ -2145,6 +2148,7 @@ coff_set_arch_mach_hook (bfd *abfd, void * filehdr)
 		 currently the XScale.  */
 	    case F_ARM_5:  machine = bfd_mach_arm_XScale;  break;
 	    }
+#endif
 	}
       break;
 #endif
@@ -2900,6 +2904,7 @@ coff_set_flags (bfd * abfd,
       * magicp = ARMMAGIC;
 #endif
       * flagsp = 0;
+#ifndef ARMV7_WIN
       if (APCS_SET (abfd))
 	{
 	  if (APCS_26_FLAG (abfd))
@@ -2913,6 +2918,7 @@ coff_set_flags (bfd * abfd,
 	}
       if (INTERWORK_SET (abfd) && INTERWORK_FLAG (abfd))
 	* flagsp |= F_INTERWORK;
+
       switch (bfd_get_mach (abfd))
 	{
 	case bfd_mach_arm_2:  * flagsp |= F_ARM_2;  break;
@@ -2924,10 +2930,11 @@ coff_set_flags (bfd * abfd,
 	case bfd_mach_arm_5:  * flagsp |= F_ARM_5;  break;
 	  /* FIXME: we do not have F_ARM vaues greater than F_ARM_5.
 	     See also the comment in coff_set_arch_mach_hook().  */
-	case bfd_mach_arm_5T: * flagsp |= F_ARM_3M;  break;
-	case bfd_mach_arm_5TE: * flagsp |= F_ARM_3M; break;
-	case bfd_mach_arm_XScale: * flagsp |= F_ARM_3M; break;
+	case bfd_mach_arm_5T: * flagsp |= F_ARM_5;  break;
+	case bfd_mach_arm_5TE: * flagsp |= F_ARM_5; break;
+	case bfd_mach_arm_XScale: * flagsp |= F_ARM_5; break;
 	}
+#endif
       return TRUE;
 #endif
 
@@ -3139,8 +3146,7 @@ coff_compute_section_file_positions (bfd * abfd)
 #ifdef COFF_IMAGE_WITH_PE
   int page_size;
 
-  if (coff_data (abfd)->link_info
-      || (pe_data (abfd) && pe_data (abfd)->pe_opthdr.FileAlignment))
+  if (coff_data (abfd)->link_info)
     {
       page_size = pe_data (abfd)->pe_opthdr.FileAlignment;
 
@@ -5361,6 +5367,10 @@ dummy_reloc16_extra_cases (bfd *abfd ATTRIBUTE_UNUSED,
 }
 #endif
 
+#ifndef coff_bfd_link_hash_table_free
+#define coff_bfd_link_hash_table_free _bfd_generic_link_hash_table_free
+#endif
+
 /* If coff_relocate_section is defined, we can use the optimized COFF
    backend linker.  Otherwise we must continue to use the old linker.  */
 
diff --git a/gas/config/tc-arm.c b/gas/config/tc-arm.c
index 0f173b0..2e3206f 100644
--- a/gas/config/tc-arm.c
+++ b/gas/config/tc-arm.c
@@ -21492,6 +21492,13 @@ md_pcrel_from_section (fixS * fixP, segT seg)
       return base + 4;
 
     case BFD_RELOC_THUMB_PCREL_BRANCH23:
+#ifdef TE_WINCE
+      if (fixP->fx_pcrel
+	  && fixP->fx_addsy != NULL
+	  && (S_GET_SEGMENT (fixP->fx_addsy) == seg)
+	  && (!S_IS_EXTERNAL (fixP->fx_addsy)))
+	return base + 4;
+#endif
       if (fixP->fx_addsy
 	  && (S_GET_SEGMENT (fixP->fx_addsy) == seg)
 	  && !S_FORCE_RELOC (fixP->fx_addsy, TRUE)
-- 
2.1.2



================================================
FILE: mingw-w64-cross-binutils-git/0003-msys2-support-for-binutils.patch
================================================
From f04279527573bd79698a94bfc54c6f9c2783a3d8 Mon Sep 17 00:00:00 2001
From: martell <martellmalone@gmail.com>
Date: Wed, 1 Oct 2014 22:46:09 +0100
Subject: [PATCH 3/3] msys2 support for binutils

---
 bfd/acinclude.m4                            |  2 +-
 bfd/config.bfd                              |  4 +--
 bfd/configure                               | 39 ++++++++++++++--------
 binutils/configure                          | 47 +++++++++++++++-----------
 binutils/dllwrap.c                          | 13 +++++++-
 binutils/testsuite/binutils-all/copy-3.d    |  2 +-
 binutils/testsuite/binutils-all/dlltool.exp |  1 +
 binutils/testsuite/binutils-all/objcopy.exp |  2 +-
 binutils/testsuite/lib/binutils-common.exp  |  1 +
 binutils/testsuite/lib/utils-lib.exp        |  2 +-
 config.guess                                |  3 ++
 config.rpath                                |  8 ++---
 config/dfp.m4                               |  3 +-
 config/elf.m4                               |  2 +-
 config/lthostflags.m4                       |  2 +-
 config/mmap.m4                              |  4 +--
 config/picflag.m4                           |  2 ++
 config/tcl.m4                               |  4 +--
 configure                                   | 20 +++++------
 configure.ac                                | 18 +++++-----
 gas/configure                               | 32 ++++++++++--------
 gas/configure.tgt                           |  2 +-
 gas/testsuite/gas/all/gas.exp               |  4 ++-
 gas/testsuite/gas/i386/i386.exp             |  2 +-
 gprof/configure                             | 28 ++++++++++------
 ld/configure                                | 45 +++++++++++++++----------
 ld/configure.host                           |  4 +++
 ld/configure.tgt                            | 10 ++++--
 ld/emultempl/pe.em                          |  2 +-
 ld/emultempl/pep.em                         |  2 +-
 ld/pe-dll.c                                 |  9 +++++
 ld/testsuite/ld-auto-import/auto-import.exp | 14 ++++++--
 ld/testsuite/ld-bootstrap/bootstrap.exp     |  3 +-
 ld/testsuite/ld-cygwin/exe-export.exp       |  4 +--
 ld/testsuite/ld-fastcall/fastcall.exp       |  1 +
 ld/testsuite/ld-pe/export_dynamic_warning.d |  2 +-
 ld/testsuite/ld-pe/image_size.d             |  2 +-
 ld/testsuite/ld-pe/pe-compile.exp           |  1 +
 ld/testsuite/ld-pe/pe.exp                   |  3 +-
 ld/testsuite/ld-scripts/script.exp          |  1 +
 ld/testsuite/ld-srec/srec.exp               |  4 +--
 ld/testsuite/lib/ld-lib.exp                 |  3 +-
 libiberty/configure                         | 14 ++++----
 libiberty/configure.ac                      |  2 +-
 libtool.m4                                  | 36 +++++++++++---------
 ltmain.sh                                   | 52 ++++++++++++++---------------
 ltoptions.m4                                |  2 +-
 opcodes/configure                           | 34 ++++++++++++-------
 48 files changed, 307 insertions(+), 190 deletions(-)

diff --git a/bfd/acinclude.m4 b/bfd/acinclude.m4
index 31a4bf9..cdc3741 100644
--- a/bfd/acinclude.m4
+++ b/bfd/acinclude.m4
@@ -23,7 +23,7 @@ AC_DEFUN([BFD_BINARY_FOPEN],
 [AC_REQUIRE([AC_CANONICAL_TARGET])
 case "${host}" in
 changequote(,)dnl
-*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-windows*)
+*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-msys* | *-*-windows*)
 changequote([,])dnl
   AC_DEFINE(USE_BINARY_FOPEN, 1, [Use b modifier when opening binary files?]) ;;
 esac])dnl
diff --git a/bfd/config.bfd b/bfd/config.bfd
index 05ab14b..45fc473 100644
--- a/bfd/config.bfd
+++ b/bfd/config.bfd
@@ -682,7 +682,7 @@ case "${targ}" in
     targ_archs="$targ_archs bfd_arm_arch"
     want64=true
     ;;
-  x86_64-*-mingw* | x86_64-*-pe | x86_64-*-pep | x86_64-*-cygwin)
+  x86_64-*-mingw* | x86_64-*-pe | x86_64-*-pep | x86_64-*-cygwin | x86_64-*-msys)
     targ_defvec=x86_64_pe_vec
     targ_selvecs="x86_64_pe_vec x86_64_pei_vec x86_64_pe_be_vec x86_64_elf64_vec l1om_elf64_vec k1om_elf64_vec i386_pe_vec i386_pei_vec i386_elf32_vec"
     want64=true
@@ -734,7 +734,7 @@ case "${targ}" in
     targ_defvec=i386_elf32_vec
     targ_selvecs=i386_coff_vec
     ;;
-  i[3-7]86-*-mingw32* | i[3-7]86-*-cygwin* | i[3-7]86-*-winnt | i[3-7]86-*-pe)
+  i[3-7]86-*-mingw32* | i[3-7]86-*-cygwin* | i[3-7]86-*-msys* | i[3-7]86-*-winnt | i[3-7]86-*-pe)
     targ_defvec=i386_pe_vec
     targ_selvecs="i386_pe_vec i386_pei_vec i386_elf32_vec"
     targ_underscore=yes
diff --git a/bfd/configure b/bfd/configure
index 243c97f..da237b7 100755
--- a/bfd/configure
+++ b/bfd/configure
@@ -5990,7 +5990,7 @@ else
     lt_cv_sys_max_cmd_len=-1;
     ;;
 
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     # On Win9x/ME, this test blows up -- it succeeds, but takes
     # about 5 minutes as the teststring grows exponentially.
     # Worse, since 9x/ME are not pre-emptively multitasking,
@@ -6332,7 +6332,7 @@ bsdi[45]*)
   lt_cv_file_magic_test_file=/shlib/libc.so
   ;;
 
-cygwin*)
+cygwin* | msys*)
   # func_win32_libid is a shell function defined in ltmain.sh
   lt_cv_deplibs_check_method='file_magic ^x86 archive import|^x86 DLL'
   lt_cv_file_magic_cmd='func_win32_libid'
@@ -6912,7 +6912,7 @@ case $host_os in
 aix*)
   symcode='[BCDT]'
   ;;
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   symcode='[ABCDGISTW]'
   ;;
 hpux*)
@@ -8496,7 +8496,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       # PIC is the default for these OSes.
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -8578,7 +8578,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       fi
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       lt_prog_compiler_pic='-DDLL_EXPORT'
@@ -9040,7 +9040,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   extract_expsyms_cmds=
 
   case $host_os in
-  cygwin* | mingw* | pw32* | cegcc*)
+  cygwin* | msys* | mingw* | pw32* | cegcc*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -9155,7 +9155,7 @@ _LT_EOF
       fi
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # _LT_TAGVAR(hardcode_libdir_flag_spec, ) is actually meaningless,
       # as there is no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -9586,7 +9586,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
       export_dynamic_flag_spec=-rdynamic
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -10487,14 +10487,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -10518,6 +10518,13 @@ cygwin* | mingw* | pw32* | cegcc*)
 
       sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
       ;;
+
+	msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -11154,7 +11161,7 @@ else
     lt_cv_dlopen_libs=
     ;;
 
-  cygwin*)
+  cygwin* | msys*)
     lt_cv_dlopen="dlopen"
     lt_cv_dlopen_libs=
     ;;
@@ -13734,7 +13741,7 @@ _ACEOF
 
 
 case "${host}" in
-*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-windows*)
+*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-msys* | *-*-windows*)
 
 $as_echo "#define USE_BINARY_FOPEN 1" >>confdefs.h
  ;;
@@ -15022,7 +15029,7 @@ $as_echo "$bfd_cv_ld_as_needed" >&6; }
 
 LIBM=
 case $host in
-*-*-beos* | *-*-cegcc* | *-*-cygwin* | *-*-haiku* | *-*-pw32* | *-*-darwin*)
+*-*-beos* | *-*-cegcc* | *-*-cygwin* | *-*-msys* | *-*-haiku* | *-*-pw32* | *-*-darwin*)
   # These system don't have libm, or don't need it
   ;;
 *-ncr-sysv4.3*)
@@ -15177,8 +15184,12 @@ if test "$enable_shared" = "yes"; then
   or1k*-*-darwin*)
     SHARED_LIBADD="-L`pwd`/../libiberty/pic -L`pwd`/../intl -liberty -lintl"
   ;;
+  *-*-msys*)
+    SHARED_LDFLAGS="-no-undefined"
+    SHARED_LIBADD="-L`pwd`/../libiberty -liberty -L`pwd`/../intl -lintl -lmsys-2.0 -lkernel32"
+  ;;
   esac
-
+  
   if test -n "$SHARED_LIBADD"; then
     if test -n "$LIBM"; then
       if test x"$bfd_cv_ld_as_needed" = xyes; then
diff --git a/binutils/configure b/binutils/configure
index 4198e12..900d2e2 100755
--- a/binutils/configure
+++ b/binutils/configure
@@ -672,6 +672,7 @@ CPP
 am__fastdepCC_FALSE
 am__fastdepCC_TRUE
 CCDEPMODE
+am__nodep
 AMDEPBACKSLASH
 AMDEP_FALSE
 AMDEP_TRUE
@@ -3708,6 +3709,7 @@ fi
 if test "x$enable_dependency_tracking" != xno; then
   am_depcomp="$ac_aux_dir/depcomp"
   AMDEPBACKSLASH='\'
+  am__nodep='_no'
 fi
  if test "x$enable_dependency_tracking" != xno; then
   AMDEP_TRUE=
@@ -3770,11 +3772,11 @@ MAKEINFO=${MAKEINFO-"${am_missing_run}makeinfo"}
 
 # We need awk for the "check" target.  The system "awk" is bad on
 # some platforms.
-# Always define AMTAR for backward compatibility.
+# Always define AMTAR for backward compatibility.  Yes, it's still used
+# in the wild :-(  We should find a proper way to deprecate it ...
+AMTAR='$${TAR-tar}'
 
-AMTAR=${AMTAR-"${am_missing_run}tar"}
-
-am__tar='${AMTAR} chof - "$$tardir"'; am__untar='${AMTAR} xf -'
+am__tar='$${TAR-tar} chof - "$$tardir"' am__untar='$${TAR-tar} xf -'
 
 
 
@@ -3792,6 +3794,7 @@ else
   # instance it was reported that on HP-UX the gcc test will end up
   # making a dummy file named `D' -- because `-MD' means `put the output
   # in D'.
+  rm -rf conftest.dir
   mkdir conftest.dir
   # Copy depcomp to subdir because otherwise we won't find it if we're
   # using a relative directory.
@@ -3851,7 +3854,7 @@ else
 	break
       fi
       ;;
-    msvisualcpp | msvcmsys)
+    msvc7 | msvc7msys | msvisualcpp | msvcmsys)
       # This compiler won't grok `-c -o', but also, the minuso test has
       # not run yet.  These depmodes are late enough in the game, and
       # so weak that their functioning should not be impacted.
@@ -5522,7 +5525,7 @@ else
     lt_cv_sys_max_cmd_len=-1;
     ;;
 
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     # On Win9x/ME, this test blows up -- it succeeds, but takes
     # about 5 minutes as the teststring grows exponentially.
     # Worse, since 9x/ME are not pre-emptively multitasking,
@@ -5864,7 +5867,7 @@ bsdi[45]*)
   lt_cv_file_magic_test_file=/shlib/libc.so
   ;;
 
-cygwin*)
+cygwin* | msys*)
   # func_win32_libid is a shell function defined in ltmain.sh
   lt_cv_deplibs_check_method='file_magic ^x86 archive import|^x86 DLL'
   lt_cv_file_magic_cmd='func_win32_libid'
@@ -6444,7 +6447,7 @@ case $host_os in
 aix*)
   symcode='[BCDT]'
   ;;
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   symcode='[ABCDGISTW]'
   ;;
 hpux*)
@@ -8059,7 +8062,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       # PIC is the default for these OSes.
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -8141,7 +8144,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       fi
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       lt_prog_compiler_pic='-DDLL_EXPORT'
@@ -8603,7 +8606,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   extract_expsyms_cmds=
 
   case $host_os in
-  cygwin* | mingw* | pw32* | cegcc*)
+  cygwin* | msys* | mingw* | pw32* | cegcc*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -8718,7 +8721,7 @@ _LT_EOF
       fi
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # _LT_TAGVAR(hardcode_libdir_flag_spec, ) is actually meaningless,
       # as there is no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -9149,7 +9152,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
       export_dynamic_flag_spec=-rdynamic
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -10050,14 +10053,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -10081,6 +10084,12 @@ cygwin* | mingw* | pw32* | cegcc*)
 
       sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
       ;;
+	msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -10717,7 +10726,7 @@ else
     lt_cv_dlopen_libs=
     ;;
 
-  cygwin*)
+  cygwin* | msys*)
     lt_cv_dlopen="dlopen"
     lt_cv_dlopen_libs=
     ;;
@@ -13294,7 +13303,7 @@ fi
 
 
 case "${host}" in
-*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-windows*)
+*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-msys* | *-*-windows*)
 
 $as_echo "#define USE_BINARY_FOPEN 1" >>confdefs.h
  ;;
@@ -14105,7 +14114,7 @@ do
 	  BUILD_WINDRES='$(WINDRES_PROG)$(EXEEXT)'
 	  BUILD_WINDMC='$(WINDMC_PROG)$(EXEEXT)'
 	  ;;
-	x86_64-*-mingw* | x86_64-*-cygwin*)
+	x86_64-*-mingw* | x86_64-*-cygwin* | x86_64-*-msys*)
   	  BUILD_DLLTOOL='$(DLLTOOL_PROG)$(EXEEXT)'
 	  if test -z "$DLLTOOL_DEFAULT"; then
 	    DLLTOOL_DEFAULT="-DDLLTOOL_DEFAULT_MX86_64"
@@ -14115,7 +14124,7 @@ do
 	  BUILD_WINDMC='$(WINDMC_PROG)$(EXEEXT)'
 	  BUILD_DLLWRAP='$(DLLWRAP_PROG)$(EXEEXT)'
 	  ;;
-	i[3-7]86-*-pe* | i[3-7]86-*-cygwin* | i[3-7]86-*-mingw32** | i[3-7]86-*-netbsdpe*)
+	i[3-7]86-*-pe* | i[3-7]86-*-cygwin* | i[3-7]86-*-msys* | i[3-7]86-*-mingw** | i[3-7]86-*-netbsdpe*)
   	  BUILD_DLLTOOL='$(DLLTOOL_PROG)$(EXEEXT)'
 	  if test -z "$DLLTOOL_DEFAULT"; then
 	    DLLTOOL_DEFAULT="-DDLLTOOL_DEFAULT_I386"
diff --git a/binutils/dllwrap.c b/binutils/dllwrap.c
index 85ace9b..b7d8ef4 100644
--- a/binutils/dllwrap.c
+++ b/binutils/dllwrap.c
@@ -78,6 +78,7 @@ static int is_leading_underscore = -1;
 typedef enum {
   UNKNOWN_TARGET,
   CYGWIN_TARGET,
+  MSYS_TARGET,
   MINGW_TARGET
 }
 target_type;
@@ -831,6 +832,8 @@ Creating one, but that may not be what you want"));
   /* Set the target platform.  */
   if (strstr (target, "cygwin"))
     which_target = CYGWIN_TARGET;
+  else if (strstr (target, "msys"))
+    which_target = MSYS_TARGET;
   else if (strstr (target, "mingw"))
     which_target = MINGW_TARGET;
   else
@@ -882,6 +885,10 @@ Creating one, but that may not be what you want"));
 	  driver_flags = cygwin_driver_flags;
 	  break;
 
+	case MSYS_TARGET:
+	  driver_flags = cygwin_driver_flags;
+	  break;
+
 	case MINGW_TARGET:
 	  driver_flags = mingw32_driver_flags;
 	  break;
@@ -915,6 +922,10 @@ Creating one, but that may not be what you want"));
 	  name_entry = "_cygwin_dll_entry";
 	  break;
 
+	case MSYS_TARGET:
+	  name_entry = "_msys_dll_entry";
+	  break;
+
 	case MINGW_TARGET:
 	  name_entry = "DllMainCRTStartup";
 	  break;
@@ -978,7 +989,7 @@ Creating one, but that may not be what you want"));
 	{
 	  dyn_string_append_cstr (step_pre1, " --export-all --exclude-symbol=");
 	  dyn_string_append_cstr (step_pre1,
-	  "_cygwin_dll_entry@12,DllMainCRTStartup@12,DllMain@12,DllEntryPoint@12");
+	  "_cygwin_dll_entry@12,_msys_dll_entry@12,DllMainCRTStartup@12,DllMain@12,DllEntryPoint@12");
 	}
       dyn_string_append_cstr (step_pre1, " --output-def ");
       dyn_string_append_cstr (step_pre1, def_file_name);
diff --git a/binutils/testsuite/binutils-all/copy-3.d b/binutils/testsuite/binutils-all/copy-3.d
index 655986a..d41d377 100644
--- a/binutils/testsuite/binutils-all/copy-3.d
+++ b/binutils/testsuite/binutils-all/copy-3.d
@@ -3,7 +3,7 @@
 #objcopy: --set-section-flags .text=alloc,data
 #name: copy with setting section flags 3
 #source: bintest.s
-#not-target: *-*-*aout *-*-*pe *-*-*coff hppa*-*-hpux* *-*-cygwin* *-*-mingw* m68k-*-netbsd m68k-*-openbsd* ns32k-*-netbsd rs6000-*-*
+#not-target: *-*-*aout *-*-*pe *-*-*coff hppa*-*-hpux* *-*-cygwin* *-*-msys* *-*-mingw* m68k-*-netbsd m68k-*-openbsd* ns32k-*-netbsd rs6000-*-*
 # The .text # section in PE/COFF has a fixed set of flags and these
 # cannot be changed.  We skip it for them.
 
diff --git a/binutils/testsuite/binutils-all/dlltool.exp b/binutils/testsuite/binutils-all/dlltool.exp
index 169fe2c..ecb0bb9 100644
--- a/binutils/testsuite/binutils-all/dlltool.exp
+++ b/binutils/testsuite/binutils-all/dlltool.exp
@@ -22,6 +22,7 @@ if {![istarget "i*86-*-*"]
 
 if {![istarget "i*86-*-*pe*"] \
     && ![istarget "i*86-*-cygwin*"] \
+    && ![istarget "i*86-*-msys*"] \
     && ![istarget "i*86-*-mingw32*"] \
     && ![istarget "arm-*-pe*"] \
     && ![istarget "x86_64-*-mingw*"] } {
diff --git a/binutils/testsuite/binutils-all/objcopy.exp b/binutils/testsuite/binutils-all/objcopy.exp
index 49d466d..55d667c 100644
--- a/binutils/testsuite/binutils-all/objcopy.exp
+++ b/binutils/testsuite/binutils-all/objcopy.exp
@@ -545,7 +545,7 @@ strip_test_with_saving_a_symbol
 
 # Build a final executable.
 
-if { [istarget *-*-cygwin] || [istarget *-*-mingw*] } {
+if { [istarget *-*-cygwin] || [istarget *-*-mingw*] || [istarget *-*-msys*] } {
     set test_prog "testprog.exe"
 } else {
     set test_prog "testprog"
diff --git a/binutils/testsuite/lib/binutils-common.exp b/binutils/testsuite/lib/binutils-common.exp
index 14a8122..683da87 100644
--- a/binutils/testsuite/lib/binutils-common.exp
+++ b/binutils/testsuite/lib/binutils-common.exp
@@ -119,6 +119,7 @@ proc is_aout_format {} {
 proc is_pecoff_format {} {
     if { ![istarget *-*-mingw*]
 	 && ![istarget *-*-cygwin*]
+	 && ![istarget *-*-msys*]
 	 && ![istarget *-*-cegcc*]
 	 && ![istarget *-*-pe*] } {
 	return 0
diff --git a/binutils/testsuite/lib/utils-lib.exp b/binutils/testsuite/lib/utils-lib.exp
index b7f5101..7fba2e5 100644
--- a/binutils/testsuite/lib/utils-lib.exp
+++ b/binutils/testsuite/lib/utils-lib.exp
@@ -128,7 +128,7 @@ proc default_binutils_assemble_flags { source object asflags } {
 #	Returns target executable extension, if any.
 #
 proc exe_ext {} {
-    if { [istarget *-*-mingw*] || [istarget *-*-cygwin*] } {
+    if { [istarget *-*-mingw*] || [istarget *-*-cygwin*] || [istarget *-*-msys*] } {
         return ".exe"
     } else {
         return ""
diff --git a/config.guess b/config.guess
index 1f5c50c..add24d7 100755
--- a/config.guess
+++ b/config.guess
@@ -866,6 +866,9 @@ EOF
     amd64:CYGWIN*:*:* | x86_64:CYGWIN*:*:*)
 	echo x86_64-unknown-cygwin
 	exit ;;
+	amd64:MSYS*:*:* | x86_64:MSYS*:*:*)
+	echo x86_64-unknown-msys
+	exit ;;
     p*:CYGWIN*:*)
 	echo powerpcle-unknown-cygwin
 	exit ;;
diff --git a/config.rpath b/config.rpath
index 4dea759..ae1f5d9 100755
--- a/config.rpath
+++ b/config.rpath
@@ -109,7 +109,7 @@ hardcode_direct=no
 hardcode_minus_L=no
 
 case "$host_os" in
-  cygwin* | mingw* | pw32*)
+  cygwin* | mingw* | msys* | pw32*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -149,7 +149,7 @@ if test "$with_gnu_ld" = yes; then
         ld_shlibs=no
       fi
       ;;
-    cygwin* | mingw* | pw32*)
+    cygwin* | mingw* | msys* | pw32*)
       # hardcode_libdir_flag_spec is actually meaningless, as there is
       # no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -268,7 +268,7 @@ else
       ;;
     bsdi4*)
       ;;
-    cygwin* | mingw* | pw32*)
+    cygwin* | mingw* | msys* | pw32*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -437,7 +437,7 @@ case "$host_os" in
     ;;
   bsdi4*)
     ;;
-  cygwin* | mingw* | pw32*)
+  cygwin* | mingw* | msys* | pw32*)
     shrext=.dll
     ;;
   darwin* | rhapsody*)
diff --git a/config/dfp.m4 b/config/dfp.m4
index 48683f0..1b2f40a 100644
--- a/config/dfp.m4
+++ b/config/dfp.m4
@@ -23,7 +23,8 @@ Valid choices are 'yes', 'bid', 'dpd', and 'no'.]) ;;
     powerpc*-*-linux* | i?86*-*-linux* | x86_64*-*-linux* | s390*-*-linux* | \
     i?86*-*-gnu* | \
     i?86*-*-mingw* | x86_64*-*-mingw* | \
-    i?86*-*-cygwin* | x86_64*-*-cygwin*)
+    i?86*-*-cygwin* | x86_64*-*-cygwin* | \
+    i?86*-*-msys* | x86_64*-*-msys*)
       enable_decimal_float=yes
       ;;
     *)
diff --git a/config/elf.m4 b/config/elf.m4
index da051cb..5c8bdfa 100644
--- a/config/elf.m4
+++ b/config/elf.m4
@@ -13,7 +13,7 @@ AC_REQUIRE([AC_CANONICAL_TARGET])
 
 target_elf=no
 case $target in
-  *-darwin* | *-aix* | *-cygwin* | *-mingw* | *-aout* | *-*coff* | \
+  *-darwin* | *-aix* | *-cygwin* | *-msys* | *-mingw* | *-aout* | *-*coff* | \
   *-msdosdjgpp* | *-vms* | *-wince* | *-*-pe* | \
   alpha*-dec-osf* | *-interix* | hppa[[12]]*-*-hpux*)
     target_elf=no
diff --git a/config/lthostflags.m4 b/config/lthostflags.m4
index bc0f59e..253e7aa 100644
--- a/config/lthostflags.m4
+++ b/config/lthostflags.m4
@@ -13,7 +13,7 @@ AC_DEFUN([ACX_LT_HOST_FLAGS], [
 AC_REQUIRE([AC_CANONICAL_SYSTEM])
 
 case $host in
-  *-cygwin* | *-mingw*)
+  *-cygwin* | *-mingw* | *-msys*)
     # 'host' will be top-level target in the case of a target lib,
     # we must compare to with_cross_host to decide if this is a native
     # or cross-compiler and select where to install dlls appropriately.
diff --git a/config/mmap.m4 b/config/mmap.m4
index fba0d9d..df2c778 100644
--- a/config/mmap.m4
+++ b/config/mmap.m4
@@ -42,7 +42,7 @@ else
    # Systems known to be in this category are Windows (all variants),
    # VMS, and Darwin.
    case "$host_os" in
-     *vms* | cygwin* | pe | mingw* | darwin* | ultrix* | hpux10* | hpux11.00)
+     *vms* | cygwin* | msys* | pe | mingw* | darwin* | ultrix* | hpux10* | hpux11.00)
         gcc_cv_func_mmap_dev_zero=no ;;
      *)
         gcc_cv_func_mmap_dev_zero=yes;;
@@ -74,7 +74,7 @@ else
    # above for use of /dev/zero.
    # Systems known to be in this category are Windows, VMS, and SCO Unix.
    case "$host_os" in
-     *vms* | cygwin* | pe | mingw* | sco* | udk* )
+     *vms* | cygwin* | msys* | pe | mingw* | sco* | udk* )
         gcc_cv_func_mmap_anon=no ;;
      *)
         gcc_cv_func_mmap_anon=yes;;
diff --git a/config/picflag.m4 b/config/picflag.m4
index 3bcdbf1..9d99d78 100644
--- a/config/picflag.m4
+++ b/config/picflag.m4
@@ -19,6 +19,8 @@ case "${$2}" in
 	;;
     i[[34567]]86-*-cygwin* | x86_64-*-cygwin*)
 	;;
+    i[[34567]]86-*-msys* | x86_64-*-msys*)
+	;;
     i[[34567]]86-*-mingw* | x86_64-*-mingw*)
 	;;
     i[[34567]]86-*-interix[[3-9]]*)
diff --git a/config/tcl.m4 b/config/tcl.m4
index 59a0c7e..2f889ae 100644
--- a/config/tcl.m4
+++ b/config/tcl.m4
@@ -33,7 +33,7 @@ AC_DEFUN([SC_PATH_TCLCONFIG], [
 
 	    # First check to see if --with-tcl was specified.
 	    case "${host}" in
-		*-*-cygwin*) platDir="win" ;;
+		*-*-cygwin* | *-*-msys*) platDir="win" ;;
 		*) platDir="unix" ;;
 	    esac
 	    if test x"${with_tclconfig}" != x ; then
@@ -165,7 +165,7 @@ AC_DEFUN([SC_PATH_TKCONFIG], [
 
 	    # then check for a private Tk library
 	    case "${host}" in
-		*-*-cygwin*) platDir="win" ;;
+		*-*-cygwin* | *-*-msys*) platDir="win" ;;
 		*) platDir="unix" ;;
 	    esac
 	    if test x"${ac_cv_c_tkconfig}" = x ; then
diff --git a/configure b/configure
index 4d0985e..0f301f7 100755
--- a/configure
+++ b/configure
@@ -3019,7 +3019,7 @@ esac
 # Configure extra directories which are host specific
 
 case "${host}" in
-  *-cygwin*)
+  *-cygwin* | *-msys*)
     configdirs="$configdirs libtermcap" ;;
 esac
 
@@ -3451,7 +3451,7 @@ if test x$enable_libgo = x; then
 	# PR 46986
 	noconfigdirs="$noconfigdirs target-libgo"
 	;;
-    *-*-cygwin* | *-*-mingw*)
+    *-*-cygwin* | *-*-msys* | *-*-mingw*)
 	noconfigdirs="$noconfigdirs target-libgo"
 	;;
     *-*-aix*)
@@ -3711,7 +3711,7 @@ case "${target}" in
   i[3456789]86-*-mingw*)
     target_configdirs="$target_configdirs target-winsup"
     ;;
-  *-*-cygwin*)
+  *-*-cygwin* | *-msys*)
     target_configdirs="$target_configdirs target-libtermcap target-winsup"
     noconfigdirs="$noconfigdirs target-libgloss"
     # always build newlib if winsup directory is present.
@@ -3852,7 +3852,7 @@ case "${host}" in
   i[3456789]86-*-msdosdjgpp*)
     host_makefile_frag="config/mh-djgpp"
     ;;
-  *-cygwin*)
+  *-cygwin* | *-msys*)
 
 { $as_echo "$as_me:${as_lineno-$LINENO}: checking to see if cat works as expected" >&5
 $as_echo_n "checking to see if cat works as expected... " >&6; }
@@ -6267,7 +6267,7 @@ fi
 
 target_elf=no
 case $target in
-  *-darwin* | *-aix* | *-cygwin* | *-mingw* | *-aout* | *-*coff* | \
+  *-darwin* | *-aix* | *-cygwin* | *-mingw* | *-msys* | *-aout* | *-*coff* | \
   *-msdosdjgpp* | *-vms* | *-wince* | *-*-pe* | \
   alpha*-dec-osf* | *-interix* | hppa[12]*-*-hpux*)
     target_elf=no
@@ -6284,7 +6284,7 @@ if test $target_elf = yes; then :
 else
   if test x"$default_enable_lto" = x"yes" ; then
     case $target in
-      *-apple-darwin9* | *-cygwin* | *-mingw*) ;;
+      *-apple-darwin9* | *-cygwin* | *-mingw* | *-msys*) ;;
       # On other non-ELF platforms, LTO has yet to be validated.
       *) enable_lto=no ;;
     esac
@@ -6295,7 +6295,7 @@ else
   # warn during gcc/ subconfigure; unless you're bootstrapping with
   # -flto it won't be needed until after installation anyway.
     case $target in
-      *-cygwin* | *-mingw* | *-apple-darwin*) ;;
+      *-cygwin* | *-mingw* | *-msys* | *-apple-darwin*) ;;
       *) if test x"$enable_lto" = x"yes"; then
 	as_fn_error "LTO support is not enabled for this target." "$LINENO" 5
         fi
@@ -6305,7 +6305,7 @@ else
   # Among non-ELF, only Windows platforms support the lto-plugin so far.
   # Build it unless LTO was explicitly disabled.
   case $target in
-    *-cygwin* | *-mingw*) build_lto_plugin=$enable_lto ;;
+    *-cygwin* | *-mingw* | *-msys*) build_lto_plugin=$enable_lto ;;
     *) ;;
   esac
 
@@ -7094,7 +7094,7 @@ rm -f conftest*
 case "${host}" in
   *-*-hpux*) RPATH_ENVVAR=SHLIB_PATH ;;
   *-*-darwin*) RPATH_ENVVAR=DYLD_LIBRARY_PATH ;;
-  *-*-mingw* | *-*-cygwin ) RPATH_ENVVAR=PATH ;;
+  *-*-mingw* | *-*-cygwin  | *-msys*) RPATH_ENVVAR=PATH ;;
   *) RPATH_ENVVAR=LD_LIBRARY_PATH ;;
 esac
 
@@ -7595,7 +7595,7 @@ case " $target_configdirs " in
   case " $target_configargs " in
   *" --with-newlib "*)
    case "$target" in
-    *-cygwin*)
+    *-cygwin* | *-msys*)
       FLAGS_FOR_TARGET=$FLAGS_FOR_TARGET' -L$$r/$(TARGET_SUBDIR)/winsup/cygwin -isystem $$s/winsup/cygwin/include'
       ;;
    esac
diff --git a/configure.ac b/configure.ac
index fe2fda3..ed9e3cd 100644
--- a/configure.ac
+++ b/configure.ac
@@ -376,7 +376,7 @@ esac
 # Configure extra directories which are host specific
 
 case "${host}" in
-  *-cygwin*)
+  *-cygwin* | *-msys*)
     configdirs="$configdirs libtermcap" ;;
 esac
 
@@ -779,7 +779,7 @@ if test x$enable_libgo = x; then
 	# PR 46986
 	noconfigdirs="$noconfigdirs target-libgo"
 	;;
-    *-*-cygwin* | *-*-mingw*)
+    *-*-cygwin* | *-*-msys* | *-*-mingw*)
 	noconfigdirs="$noconfigdirs target-libgo"
 	;;
     *-*-aix*)
@@ -1039,7 +1039,7 @@ case "${target}" in
   i[[3456789]]86-*-mingw*)
     target_configdirs="$target_configdirs target-winsup"
     ;;
-  *-*-cygwin*)
+  *-*-cygwin* | *-msys*)
     target_configdirs="$target_configdirs target-libtermcap target-winsup"
     noconfigdirs="$noconfigdirs target-libgloss"
     # always build newlib if winsup directory is present.
@@ -1180,7 +1180,7 @@ case "${host}" in
   i[[3456789]]86-*-msdosdjgpp*)
     host_makefile_frag="config/mh-djgpp"
     ;;
-  *-cygwin*)
+  *-cygwin* | *-msys*)
     ACX_CHECK_CYGWIN_CAT_WORKS
     host_makefile_frag="config/mh-cygwin"
     ;;
@@ -1715,7 +1715,7 @@ ACX_ELF_TARGET_IFELSE([# ELF platforms build the lto-plugin always.
   build_lto_plugin=yes
 ],[if test x"$default_enable_lto" = x"yes" ; then
     case $target in
-      *-apple-darwin9* | *-cygwin* | *-mingw*) ;;
+      *-apple-darwin9* | *-cygwin* | *-mingw* | *-msys*) ;;
       # On other non-ELF platforms, LTO has yet to be validated.
       *) enable_lto=no ;;
     esac
@@ -1726,7 +1726,7 @@ ACX_ELF_TARGET_IFELSE([# ELF platforms build the lto-plugin always.
   # warn during gcc/ subconfigure; unless you're bootstrapping with
   # -flto it won't be needed until after installation anyway.
     case $target in
-      *-cygwin* | *-mingw* | *-apple-darwin*) ;;
+      *-cygwin* | *-mingw* | *-msys* | *-apple-darwin*) ;;
       *) if test x"$enable_lto" = x"yes"; then
 	AC_MSG_ERROR([LTO support is not enabled for this target.])
         fi
@@ -1736,7 +1736,7 @@ ACX_ELF_TARGET_IFELSE([# ELF platforms build the lto-plugin always.
   # Among non-ELF, only Windows platforms support the lto-plugin so far.
   # Build it unless LTO was explicitly disabled.
   case $target in
-    *-cygwin* | *-mingw*) build_lto_plugin=$enable_lto ;;
+    *-cygwin* | *-mingw* | *-msys*) build_lto_plugin=$enable_lto ;;
     *) ;;
   esac
 ])
@@ -2472,7 +2472,7 @@ rm -f conftest*
 case "${host}" in
   *-*-hpux*) RPATH_ENVVAR=SHLIB_PATH ;;
   *-*-darwin*) RPATH_ENVVAR=DYLD_LIBRARY_PATH ;;
-  *-*-mingw* | *-*-cygwin ) RPATH_ENVVAR=PATH ;;
+  *-*-mingw* | *-*-cygwin  | *-msys*) RPATH_ENVVAR=PATH ;;
   *) RPATH_ENVVAR=LD_LIBRARY_PATH ;;
 esac
 
@@ -2967,7 +2967,7 @@ case " $target_configdirs " in
   case " $target_configargs " in
   *" --with-newlib "*)
    case "$target" in
-    *-cygwin*)
+    *-cygwin* | *-msys*)
       FLAGS_FOR_TARGET=$FLAGS_FOR_TARGET' -L$$r/$(TARGET_SUBDIR)/winsup/cygwin -isystem $$s/winsup/cygwin/include'
       ;;
    esac
diff --git a/gas/configure b/gas/configure
index 2c3c21a..3272c89 100755
--- a/gas/configure
+++ b/gas/configure
@@ -5505,7 +5505,7 @@ else
     lt_cv_sys_max_cmd_len=-1;
     ;;
 
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     # On Win9x/ME, this test blows up -- it succeeds, but takes
     # about 5 minutes as the teststring grows exponentially.
     # Worse, since 9x/ME are not pre-emptively multitasking,
@@ -5847,7 +5847,7 @@ bsdi[45]*)
   lt_cv_file_magic_test_file=/shlib/libc.so
   ;;
 
-cygwin*)
+cygwin* | msys*)
   # func_win32_libid is a shell function defined in ltmain.sh
   lt_cv_deplibs_check_method='file_magic ^x86 archive import|^x86 DLL'
   lt_cv_file_magic_cmd='func_win32_libid'
@@ -6427,7 +6427,7 @@ case $host_os in
 aix*)
   symcode='[BCDT]'
   ;;
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   symcode='[ABCDGISTW]'
   ;;
 hpux*)
@@ -8042,7 +8042,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       # PIC is the default for these OSes.
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | msys* | cygwin* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -8124,7 +8124,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       fi
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | msys* | cygwin* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       lt_prog_compiler_pic='-DDLL_EXPORT'
@@ -8586,7 +8586,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   extract_expsyms_cmds=
 
   case $host_os in
-  cygwin* | mingw* | pw32* | cegcc*)
+  cygwin* | msys* | mingw* | pw32* | cegcc*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -8701,7 +8701,7 @@ _LT_EOF
       fi
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # _LT_TAGVAR(hardcode_libdir_flag_spec, ) is actually meaningless,
       # as there is no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -9132,7 +9132,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
       export_dynamic_flag_spec=-rdynamic
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -10033,14 +10033,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -10064,6 +10064,12 @@ cygwin* | mingw* | pw32* | cegcc*)
 
       sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
       ;;
+    msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -10700,7 +10706,7 @@ else
     lt_cv_dlopen_libs=
     ;;
 
-  cygwin*)
+  cygwin* | msys*)
     lt_cv_dlopen="dlopen"
     lt_cv_dlopen_libs=
     ;;
@@ -13731,7 +13737,7 @@ case "${need_libm}" in
 yes)
   LIBM=
 case $host in
-*-*-beos* | *-*-cegcc* | *-*-cygwin* | *-*-haiku* | *-*-pw32* | *-*-darwin*)
+*-*-beos* | *-*-cegcc* | *-*-cygwin* | *-*-msys* | *-*-haiku* | *-*-pw32* | *-*-darwin*)
   # These system don't have libm, or don't need it
   ;;
 *-ncr-sysv4.3*)
@@ -14313,7 +14319,7 @@ _ACEOF
 
 
 case "${host}" in
-*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-windows*)
+*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-msys* | *-*-windows*)
 
 $as_echo "#define USE_BINARY_FOPEN 1" >>confdefs.h
  ;;
diff --git a/gas/configure.tgt b/gas/configure.tgt
index d07d445..bd855cc 100644
--- a/gas/configure.tgt
+++ b/gas/configure.tgt
@@ -260,7 +260,7 @@ case ${generic_target} in
   i386-*-msdos*)			fmt=aout ;;
   i386-*-moss*)				fmt=elf ;;
   i386-*-pe)				fmt=coff em=pe ;;
-  i386-*-cygwin*)
+  i386-*-cygwin* | i386-*-msys*)
    case ${cpu} in
      x86_64*)				fmt=coff em=pep ;;
      i*)				fmt=coff em=pe ;;
diff --git a/gas/testsuite/gas/all/gas.exp b/gas/testsuite/gas/all/gas.exp
index 8fa89e4..f99716e 100644
--- a/gas/testsuite/gas/all/gas.exp
+++ b/gas/testsuite/gas/all/gas.exp
@@ -166,7 +166,7 @@ case $target_triplet in {
 	# failures.
 	setup_xfail "bfin-*-*" "i\[3-7\]86-*-*coff" \
 	    "i\[3-7\]86-*-*pe" "i\[3-7\]86-*-go32*" \
-	    "i\[3-7\]86-*-cygwin*" "i\[3-7\]86-*-mingw*" "x86_64-*-mingw*"
+	    "i\[3-7\]86-*-cygwin*" "i\[3-7\]86-*-msys*" "i\[3-7\]86-*-mingw*" "x86_64-*-mingw*"
 	run_dump_test redef3
 	gas_test_error "redef4.s" "" ".set for symbol already used as label"
 	gas_test_error "redef5.s" "" ".set for symbol already defined through .comm"
@@ -318,6 +318,7 @@ if {   ([istarget *-*-coff*] && ![istarget arm*-*-coff] && ![istarget *c4x*-*-co
      || [istarget i*86-*-isc*] \
      || [istarget i*86-*-go32*] \
      || [istarget i*86-*-cygwin*] \
+     || [istarget i*86-*-msys*] \
      || [istarget x86_64-*-mingw*] \
      || [istarget i*86-*-*nt] \
      || [istarget i*86-*-interix*] \
@@ -363,6 +364,7 @@ case $target_triplet in {
 
 if {  ([istarget "i*86-*-*pe*"] && ![istarget "i*86-*-openbsd*"]) \
     || [istarget "i*86-*-cygwin*"] \
+    || [istarget "i*86-*-msys*"] \
     || [istarget "i*86-*-mingw32*"] } {
   gas_test "fastcall.s" ""   "" "fastcall labels"
 }
diff --git a/gas/testsuite/gas/i386/i386.exp b/gas/testsuite/gas/i386/i386.exp
index c55f3bf..a36f497 100644
--- a/gas/testsuite/gas/i386/i386.exp
+++ b/gas/testsuite/gas/i386/i386.exp
@@ -386,7 +386,7 @@ if [expr ([istarget "i*86-*-*"] ||  [istarget "x86_64-*-*"]) && [gas_32_check]]
 
     # This is a PE specific test.
     if { [istarget "*-*-cygwin*"] || [istarget "*-*-pe"]
-	 || [istarget "*-*-mingw*"]
+	  || [istarget "*-*-msys*"] || [istarget "*-*-mingw*"]
     } then {
 	run_dump_test "secrel"
     }
diff --git a/gprof/configure b/gprof/configure
index 9d84962..e7b6da6 100755
--- a/gprof/configure
+++ b/gprof/configure
@@ -5435,7 +5435,7 @@ else
     lt_cv_sys_max_cmd_len=-1;
     ;;
 
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     # On Win9x/ME, this test blows up -- it succeeds, but takes
     # about 5 minutes as the teststring grows exponentially.
     # Worse, since 9x/ME are not pre-emptively multitasking,
@@ -5777,7 +5777,7 @@ bsdi[45]*)
   lt_cv_file_magic_test_file=/shlib/libc.so
   ;;
 
-cygwin*)
+cygwin* | msys*)
   # func_win32_libid is a shell function defined in ltmain.sh
   lt_cv_deplibs_check_method='file_magic ^x86 archive import|^x86 DLL'
   lt_cv_file_magic_cmd='func_win32_libid'
@@ -6357,7 +6357,7 @@ case $host_os in
 aix*)
   symcode='[BCDT]'
   ;;
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   symcode='[ABCDGISTW]'
   ;;
 hpux*)
@@ -7972,7 +7972,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       # PIC is the default for these OSes.
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -8054,7 +8054,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       fi
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       lt_prog_compiler_pic='-DDLL_EXPORT'
@@ -8516,7 +8516,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   extract_expsyms_cmds=
 
   case $host_os in
-  cygwin* | mingw* | pw32* | cegcc*)
+  cygwin* | msys* | mingw* | pw32* | cegcc*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -8631,7 +8631,7 @@ _LT_EOF
       fi
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # _LT_TAGVAR(hardcode_libdir_flag_spec, ) is actually meaningless,
       # as there is no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -9062,7 +9062,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
       export_dynamic_flag_spec=-rdynamic
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -9963,14 +9963,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -9994,6 +9994,12 @@ cygwin* | mingw* | pw32* | cegcc*)
 
       sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
       ;;
+    msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -10630,7 +10636,7 @@ else
     lt_cv_dlopen_libs=
     ;;
 
-  cygwin*)
+  cygwin* | msys*)
     lt_cv_dlopen="dlopen"
     lt_cv_dlopen_libs=
     ;;
diff --git a/ld/configure b/ld/configure
index f2bcc19..87c9921 100755
--- a/ld/configure
+++ b/ld/configure
@@ -6249,7 +6249,7 @@ else
     lt_cv_sys_max_cmd_len=-1;
     ;;
 
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     # On Win9x/ME, this test blows up -- it succeeds, but takes
     # about 5 minutes as the teststring grows exponentially.
     # Worse, since 9x/ME are not pre-emptively multitasking,
@@ -6591,7 +6591,7 @@ bsdi[45]*)
   lt_cv_file_magic_test_file=/shlib/libc.so
   ;;
 
-cygwin*)
+cygwin* | msys*)
   # func_win32_libid is a shell function defined in ltmain.sh
   lt_cv_deplibs_check_method='file_magic ^x86 archive import|^x86 DLL'
   lt_cv_file_magic_cmd='func_win32_libid'
@@ -7171,7 +7171,7 @@ case $host_os in
 aix*)
   symcode='[BCDT]'
   ;;
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   symcode='[ABCDGISTW]'
   ;;
 hpux*)
@@ -8787,7 +8787,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       # PIC is the default for these OSes.
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | msys* | cygwin* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -8869,7 +8869,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
       fi
       ;;
 
-    mingw* | cygwin* | pw32* | os2* | cegcc*)
+    mingw* | cygwin* | msys* | pw32* | os2* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       lt_prog_compiler_pic='-DDLL_EXPORT'
@@ -9331,7 +9331,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   extract_expsyms_cmds=
 
   case $host_os in
-  cygwin* | mingw* | pw32* | cegcc*)
+  cygwin* | msys* | mingw* | pw32* | cegcc*)
     # FIXME: the MSVC++ port hasn't been tested in a loooong time
     # When not using gcc, we currently assume that we are using
     # Microsoft Visual C++.
@@ -9446,7 +9446,7 @@ _LT_EOF
       fi
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # _LT_TAGVAR(hardcode_libdir_flag_spec, ) is actually meaningless,
       # as there is no search path for DLLs.
       hardcode_libdir_flag_spec='-L$libdir'
@@ -9877,7 +9877,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
       export_dynamic_flag_spec=-rdynamic
       ;;
 
-    cygwin* | mingw* | pw32* | cegcc*)
+    cygwin* | msys* | mingw* | pw32* | cegcc*)
       # When not using gcc, we currently assume that we are using
       # Microsoft Visual C++.
       # hardcode_libdir_flag_spec is actually meaningless, as there is
@@ -10778,14 +10778,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -10809,6 +10809,12 @@ cygwin* | mingw* | pw32* | cegcc*)
 
       sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
       ;;
+    msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      sys_lib_search_path_spec="$sys_lib_search_path_spec /usr/lib/w32api"
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -11445,7 +11451,7 @@ else
     lt_cv_dlopen_libs=
     ;;
 
-  cygwin*)
+  cygwin* | msys*)
     lt_cv_dlopen="dlopen"
     lt_cv_dlopen_libs=
     ;;
@@ -12667,7 +12673,7 @@ if test -z "$aix_libpath"; then aix_libpath="/usr/lib:/lib"; fi
         esac
         ;;
 
-      cygwin* | mingw* | pw32* | cegcc*)
+      cygwin* | msys* | mingw* | pw32* | cegcc*)
         # _LT_TAGVAR(hardcode_libdir_flag_spec, CXX) is actually meaningless,
         # as there is no search path for DLLs.
         hardcode_libdir_flag_spec_CXX='-L$libdir'
@@ -13636,7 +13642,7 @@ $as_echo_n "checking for $compiler option to produce PIC... " >&6; }
     beos* | irix5* | irix6* | nonstopux* | osf3* | osf4* | osf5*)
       # PIC is the default for these OSes.
       ;;
-    mingw* | cygwin* | os2* | pw32* | cegcc*)
+    mingw* | msys* | cygwin* | os2* | pw32* | cegcc*)
       # This hack is so that the source file can tell whether it is being
       # built for inclusion in a dll (and should export symbols for example).
       # Although the cygwin gcc ignores -fPIC, still need this for old-style
@@ -14176,7 +14182,7 @@ $as_echo_n "checking whether the $compiler linker ($LD) supports shared librarie
   pw32*)
     export_symbols_cmds_CXX="$ltdll_cmds"
   ;;
-  cygwin* | mingw* | cegcc*)
+  cygwin* | msys* | mingw* | cegcc*)
     export_symbols_cmds_CXX='$NM $libobjs $convenience | $global_symbol_pipe | $SED -e '\''/^[BCDGRS][ ]/s/.*[ ]\([^ ]*\)/\1 DATA/;/^.*[ ]__nm__/s/^.*[ ]__nm__\([^ ]*\)[ ][^ ]*/\1 DATA/;/^I[ ]/d;/^[AITW][ ]/s/.* //'\'' | sort | uniq > $export_symbols'
   ;;
   *)
@@ -14440,14 +14446,14 @@ bsdi[45]*)
   # libtool to hard-code these into programs
   ;;
 
-cygwin* | mingw* | pw32* | cegcc*)
+cygwin* | msys* | mingw* | pw32* | cegcc*)
   version_type=windows
   shrext_cmds=".dll"
   need_version=no
   need_lib_prefix=no
 
   case $GCC,$host_os in
-  yes,cygwin* | yes,mingw* | yes,pw32* | yes,cegcc*)
+  yes,cygwin* | yes,msys* | yes,mingw* | yes,pw32* | yes,cegcc*)
     library_names_spec='$libname.dll.a'
     # DLL is installed to $(libdir)/../bin by postinstall_cmds
     postinstall_cmds='base_file=`basename \${file}`~
@@ -14470,6 +14476,11 @@ cygwin* | mingw* | pw32* | cegcc*)
       soname_spec='`echo ${libname} | sed -e 's/^lib/cyg/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
 
       ;;
+    msys*)
+      # Msys DLLs use 'msys-' prefix rather than 'lib'
+      soname_spec='`echo ${libname} | sed -e 's/^lib/msys-/'``echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
+
+      ;;
     mingw* | cegcc*)
       # MinGW DLLs use traditional 'lib' prefix
       soname_spec='${libname}`echo ${release} | $SED -e 's/[.]/-/g'`${versuffix}${shared_ext}'
@@ -16696,7 +16707,7 @@ fi
 
 
 case "${host}" in
-*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-windows*)
+*-*-msdos* | *-*-go32* | *-*-mingw32* | *-*-cygwin* | *-*-msys* | *-*-windows*)
 
 $as_echo "#define USE_BINARY_FOPEN 1" >>confdefs.h
  ;;
diff --git a/ld/configure.host b/ld/configure.host
index 042ebbc..6ce86c4 100644
--- a/ld/configure.host
+++ b/ld/configure.host
@@ -176,6 +176,10 @@ i[3-7]86-*-cygwin* | x86_64-*-cygwin*)
   HOSTING_LIBS="$HOSTING_LIBS"' -lcygwin -L/usr/lib/w32api -luser32 -lkernel32 -ladvapi32 -lshell32 `if [ -f ../gcc/libgcc.a ] ; then echo ../gcc/libgcc.a ; else ${CC} -print-libgcc-file-name; fi`'
   ;;
 
+i[3-7]86-*-msys* | x86_64-*-msys*)
+  HOSTING_LIBS="$HOSTING_LIBS"' -lmsys-2.0 -L/usr/lib/w32api -luser32 -lkernel32 -ladvapi32 -lshell32 `if [ -f ../gcc/libgcc.a ] ; then echo ../gcc/libgcc.a ; else ${CC} -print-libgcc-file-name; fi`'
+  ;;
+
 i[3-7]86-*-mingw*)
   #We only support msvcrt.dll, crtid == 2.
   HOSTING_CRT0='/mingw/lib/crt2.o'
diff --git a/ld/configure.tgt b/ld/configure.tgt
index 24e36d1..bd81835 100644
--- a/ld/configure.tgt
+++ b/ld/configure.tgt
@@ -317,7 +317,8 @@ i[3-7]86-*-winnt*)	targ_emul=i386pe ;
 			targ_extra_ofiles="deffilep.o pe-dll.o" ;;
 i[3-7]86-*-pe)		targ_emul=i386pe ;
 			targ_extra_ofiles="deffilep.o pe-dll.o" ;;
-i[3-7]86-*-cygwin*)	targ_emul=i386pe ;
+i[3-7]86-*-cygwin* | i[3-7]86-*-msys*)
+			targ_emul=i386pe ;
 			targ_extra_ofiles="deffilep.o pe-dll.o" ;
 			test "$targ" != "$host" && LIB_PATH='${tooldir}/lib/w32api' ;;
 i[3-7]86-*-mingw32*)	targ_emul=i386pe ;
@@ -325,7 +326,8 @@ i[3-7]86-*-mingw32*)	targ_emul=i386pe ;
 x86_64-*-pe | x86_64-*-pep) targ_emul=i386pep ;
 			targ_extra_emuls=i386pe ;
 			targ_extra_ofiles="deffilep.o pep-dll.o pe-dll.o" ;;
-x86_64-*-cygwin)	targ_emul=i386pep ;
+x86_64-*-cygwin* | x86_64-*-msys*)
+			targ_emul=i386pep ;
 			targ_extra_emuls=i386pe
 			targ_extra_ofiles="deffilep.o pep-dll.o pe-dll.o"
 			test "$targ" != "$host" && LIB_PATH='${tooldir}/lib/w32api' ;;
@@ -825,6 +827,10 @@ i[03-9x]86-*-cygwin* | x86_64-*-cygwin*)
   NATIVE_LIB_DIRS='/usr/lib /usr/lib/w32api'
   ;;
 
+i[03-9x]86-*-msys* | x86_64-*-msys*)
+  NATIVE_LIB_DIRS='/usr/lib /usr/lib/w32api'
+  ;;
+
 *-*-linux*)
   ;;
 
diff --git a/ld/emultempl/pe.em b/ld/emultempl/pe.em
index 4d4e909..57cdd74 100644
--- a/ld/emultempl/pe.em
+++ b/ld/emultempl/pe.em
@@ -177,7 +177,7 @@ EOF
 # merge_rdata defaults to 0 for cygwin:
 #  http://cygwin.com/ml/cygwin-apps/2013-04/msg00187.html
 case ${target} in
-  *-*-cygwin*)
+  *-*-cygwin* | *-*-msys)
     default_auto_import=1
     default_merge_rdata=0
     ;;
diff --git a/ld/emultempl/pep.em b/ld/emultempl/pep.em
index b24a608..b7a828d 100644
--- a/ld/emultempl/pep.em
+++ b/ld/emultempl/pep.em
@@ -7,7 +7,7 @@ else
 fi
 
 case ${target} in
-  *-*-cygwin*)
+  *-*-cygwin* | *-*-msys*)
     move_default_addr_high=1
     ;;
   *)
diff --git a/ld/pe-dll.c b/ld/pe-dll.c
index 61d8fa5..8141efb 100644
--- a/ld/pe-dll.c
+++ b/ld/pe-dll.c
@@ -207,6 +207,7 @@ static const autofilter_entry_type autofilter_symbollist_i386[] =
   { STRING_COMMA_LEN ("_NULL_IMPORT_DESCRIPTOR") },
   /* Entry point symbols, and entry hooks.  */
   { STRING_COMMA_LEN ("cygwin_crt0") },
+  { STRING_COMMA_LEN ("msys_crt0") },
 #ifdef pe_use_x86_64
   { STRING_COMMA_LEN ("DllMain") },
   { STRING_COMMA_LEN ("DllEntryPoint") },
@@ -214,6 +215,9 @@ static const autofilter_entry_type autofilter_symbollist_i386[] =
   { STRING_COMMA_LEN ("_cygwin_dll_entry") },
   { STRING_COMMA_LEN ("_cygwin_crt0_common") },
   { STRING_COMMA_LEN ("_cygwin_noncygwin_dll_entry") },
+  { STRING_COMMA_LEN ("_msys_dll_entry") },
+  { STRING_COMMA_LEN ("_msys_crt0_common") },
+  { STRING_COMMA_LEN ("_msys_nonmsys_dll_entry") },
 #else
   { STRING_COMMA_LEN ("DllMain@12") },
   { STRING_COMMA_LEN ("DllEntryPoint@0") },
@@ -222,6 +226,10 @@ static const autofilter_entry_type autofilter_symbollist_i386[] =
   { STRING_COMMA_LEN ("_cygwin_crt0_common@8") },
   { STRING_COMMA_LEN ("_cygwin_noncygwin_dll_entry@12") },
   { STRING_COMMA_LEN ("cygwin_attach_dll") },
+  { STRING_COMMA_LEN ("_msys_dll_entry@12") },
+  { STRING_COMMA_LEN ("_msys_crt0_common@8") },
+  { STRING_COMMA_LEN ("_msys_nonmsys_dll_entry@12") },
+  { STRING_COMMA_LEN ("msys_attach_dll") },
 #endif
   { STRING_COMMA_LEN ("cygwin_premain0") },
   { STRING_COMMA_LEN ("cygwin_p

[... truncated by token budget ...]

