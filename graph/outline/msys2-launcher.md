# Codebase Digest: msys2-launcher

- Files analyzed: 10
- Total lines: 199
- Total size: 8.0 KB
- Git branch: `master`
- Git HEAD commit: `d83aab4d (CI: update actions)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-launcher/
├── LICENSE.md (21 lines, 1.1 KB, ~258 tokens)
├── Makefile (53 lines, 1.9 KB, ~585 tokens)
├── PKGBUILD (39 lines, 1.8 KB, ~444 tokens)
├── README.md (25 lines, 1.6 KB, ~429 tokens)
├── icons/
│   ├── Makefile (21 lines, 468 B, ~166 tokens)
│   └── build.sh (1 lines, 35 B, ~11 tokens)
├── launcher.c (14 lines, 616 B, ~178 tokens)
├── launcher.rc (23 lines, 457 B, ~121 tokens)
├── macros.h (1 lines, 35 B, ~11 tokens)
└── version.h (1 lines, 34 B, ~10 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
MSYS2 launcher
==============

A helper for launching MSYS2 shells.  Features blink-less launching and correct taskbar/start pinning.

Installation
------------

Just `make` and put the .exe and .ini files inside your MSYS2 root.  Needs mintty v2.1.6 or newer.

Configuration
-------------

All three default launchers are the same (except for embedded icons and descriptions) and are configured by corresponding .ini files.  The .ini file has to be in the same directory as the .exe file and have the same filename (except for the `.exe` -> `.ini` change).

The .ini file contains environment variables, each on a separate line, in the usual `VAR=val` format.  Lines starting with `#` are ignored.  The values are expanded using the current environment (use Windows `%var%` syntax), evaluated from top to bottom.  By default, only `MSYSTEM` is set and the rest is inherited from the outside environment, but some common options are prepared and commented out in the files:

- `MSYS=...`: configures runtime behavior
- `CHERE_INVOKING=1`: prevent the login scripts from changing the working directory to the user's home directory
- `MSYS2_PATH_TYPE=strict|minimal|inherit`: configures how the login scripts set up `PATH`

Pinning
-------

As with many other applications, the correct way to pin a shortcut to the taskbar is by right-clicking the button of a running MSYS2 shell (started by this launcher) on the taskbar and choosing "Pin this program to taskbar".  Pinning the `.exe` file itself won't create the shortcut correctly.  There are tools to diagnose and fix such a situation (7+ Taskbar Tweaker and Win7AppId) in case re-pinning is not preferred.


================================================
FILE: LICENSE.md
================================================
The MIT License (MIT)

Copyright (c) 2015 David Macek

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
FILE: Makefile
================================================
PREFIX=

all: msys2.exe msys2.ini mingw32.exe mingw32.ini mingw64.exe mingw64.ini ucrt64.exe ucrt64.ini clang64.exe clang64.ini clangarm64.exe clangarm64.ini

.PHONY: all

msys2.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=MSYS>> $@
msys2.res: launcher.rc msys2.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=MSYS -DICONFILE=msys2.ico
msys2.exe: launcher.c msys2.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^

mingw32.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=MINGW32>> $@
mingw32.res: launcher.rc mingw32.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=MINGW32 -DICONFILE=mingw32.ico
mingw32.exe: launcher.c mingw32.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^

mingw64.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=MINGW64>> $@
mingw64.res: launcher.rc mingw64.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=MINGW64 -DICONFILE=mingw64.ico
mingw64.exe: launcher.c mingw64.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^

ucrt64.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=UCRT64>> $@
ucrt64.res: launcher.rc ucrt64.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=UCRT64 -DICONFILE=ucrt64.ico
ucrt64.exe: launcher.c ucrt64.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^

clang64.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=CLANG64>> $@
clang64.res: launcher.rc clang64.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=CLANG64 -DICONFILE=clang64.ico
clang64.exe: launcher.c clang64.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^

clangarm64.ini: launcher.ini
	cp -f $^ $@
	echo MSYSTEM=CLANGARM64>> $@
clangarm64.res: launcher.rc clangarm64.ico
	$(PREFIX)windres -O COFF -o $@ $< -DMSYSTEM=CLANGARM64 -DICONFILE=clangarm64.ico
clangarm64.exe: launcher.c clangarm64.res
	$(PREFIX)gcc -std=c11 -Wall -Wextra -Werror -static -municode -mwindows -o $@ $^


================================================
FILE: PKGBUILD
================================================
_realname="msys2-launcher"
pkgname=("${_realname}-git")
pkgver=1.5
pkgrel=1
pkgdesc="Helper for launching MSYS2 shells"
arch=('x86_64' 'i686')
license=('MIT')
backup=({msys2,mingw32,mingw64,ucrt64,clang64}.ini)
provides=("${_realname}")
conflicts=("${_realname}")
depends=("mintty>=2.2.1")
makedepends=('mingw-w64-cross-gcc')
source=(launcher.{c,ini,rc} {macros,version}.h Makefile {msys2,mingw32,mingw64,ucrt64,clang64,clangarm64}.ico)
sha256sums=('8e3912d38ba631a525caec2be982b462181125c8767b0b5d7271d13df8ad85be'
            '232eaa3de03c5c2cde8106a229b4df768d26f2343ea5df88e22e0e8c088f017e'
            '0b118e093f514fdabfabf69dd6148d56a3a282b77add1d53ef31f50635c21d7a'
            'ca88f2e77322c0d2a7930b84a981723897eb720131026356f4e14d2be8a35291'
            '30b6807a39d8bf0857767daa0dfe0227fd3583c1ee099a496c35a7f9e75dbdac'
            'd1e1298433ee116b0a61bfe738aa736422742acd6208f7999fb2ca3dad818578'
            '793b9450a1a59a6c294e51fd0c2a47090d68c68ff2f33a25a11b45f6408c3917'
            'f8f1b5943d385e8a7e3b5a4a2c7d64004108c94c17b2f936016e2ae50bdb65af'
            '91b4a790aad38a102565f0cfcba6c0e6d274f6cda0b37b128d9cc43c5ad6b24d'
            '733e97cbb823773e1a08a91a41035a7692bc0ff270d3c894224911b4b091db44'
            '56d4080c15dff89a6263f3d5f9aa68849b2062179cabd6d78edfe0e3af6bf64a'
            '3b7af99516768485383b34d606749e6f98a250372a8191bc8d3a962d66bdfe35')

pkgver() {
  local _major=$(cat version.h | grep -F 'VER_MAJOR' | head -1 | sed -e 's/.* //')
  local _minor=$(cat version.h | grep -F 'VER_MINOR' | head -1 | sed -e 's/.* //')
  printf "%s.%s.%s.%s" "${_major}" "${_minor}"  "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  make PREFIX=/opt/bin/${CARCH}-w64-mingw32-
}

package() {
  cp {msys2,mingw32,mingw64,ucrt64,clang64,clangarm64}.{exe,ini} "${pkgdir}"
}


================================================
FILE: icons/Makefile
================================================
all: ../msys2.ico ../mingw32.ico ../mingw64.ico ../ucrt64.ico ../clang64.ico ../clangarm64.ico

sources=icon-large.svg icon-medium.svg icon-small.svg

../msys2.ico: $(sources)
	./build.sh '#894c84' $@

../mingw32.ico: $(sources)
	./build.sh '#748787' $@

../mingw64.ico: $(sources)
	./build.sh '#276597' $@

../ucrt64.ico: $(sources)
	./build.sh '#8b7b16' $@

../clang64.ico: $(sources)
	./build.sh '#be643e' $@

../clangarm64.ico: $(sources)
	./build.sh '#238423' $@


================================================
FILE: icons/build.sh
================================================
// [OUTLINE - 0 symbols, 18 lines]


================================================
FILE: launcher.c
================================================
// [OUTLINE - 7 symbols, 284 lines]
// import <windows.h>
// import <stdlib.h>
// import <stdbool.h>
// import <stdio.h>
// import <wchar.h>
// import "macros.h"
// L18-L23: static void ShowError(const wchar_t* desc, const wchar_t* err, const long code)
// L25-L33: static void ShowLastError(const wchar_t* desc)
// L35-L40: static void ShowErrno(const wchar_t* desc)
// L44-L56: static unsigned int APHash(const wchar_t* str, size_t length)
// L58-L75: static PROCESS_INFORMATION StartChild(wchar_t* cmdline)
// L77-L160: static wchar_t* SetEnv(wchar_t* conffile)
// L162-L284: int wmain(int argc, wchar_t* argv[])


================================================
FILE: launcher.rc
================================================
#include "macros.h"
#include "version.h"

1 VERSIONINFO
FILEVERSION     VER_MAJOR,VER_MINOR,0,0
BEGIN
	BLOCK "StringFileInfo"
	BEGIN
		BLOCK "040904E4"
		BEGIN
			VALUE "ProductName", "MSYS2"
			VALUE "FileDescription", "MSYS2 " STRINGIFY_A(MSYSTEM) " shell launcher"
			VALUE "FileVersion", STRINGIFY_A(VER_MAJOR) "." STRINGIFY_A(VER_MINOR)
		END
	END

	BLOCK "VarFileInfo"
	BEGIN
		VALUE "Translation", 0x409, 1252
	END
END

id ICON STRINGIFY_A(ICONFILE)


================================================
FILE: macros.h
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: version.h
================================================
// [OUTLINE - 0 symbols, 7 lines]


