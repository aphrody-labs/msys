# Codebase Digest: msys2-tests

- Files analyzed: 134
- Total lines: 1088
- Total size: 34.8 KB
- Git branch: `main`
- Git HEAD commit: `3eb58fe9 (Skip removed Ruby and Asciidoctor packages on MINGW32)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-tests/
├── LICENSE.txt (15 lines, 766 B, ~181 tokens)
├── Makefile (57 lines, 892 B, ~280 tokens)
├── README.md (4 lines, 236 B, ~58 tokens)
├── action.yml (57 lines, 2.0 KB, ~539 tokens)
├── ada/
│   ├── gnat_exception_internal.adb (10 lines, 371 B, ~94 tokens)
│   ├── hello.adb (6 lines, 96 B, ~28 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── autotools/
│   ├── Makefile (22 lines, 756 B, ~172 tokens)
│   ├── build.sh (1 lines, 35 B, ~11 tokens)
│   └── example/
│       ├── Makefile.am (4 lines, 67 B, ~16 tokens)
│       ├── configure.ac (11 lines, 200 B, ~64 tokens)
│       └── example.c (3 lines, 79 B, ~27 tokens)
├── cmake/
│   ├── CMakeLists.txt (28 lines, 855 B, ~214 tokens)
│   ├── example.cxx (3 lines, 98 B, ~32 tokens)
│   ├── i686-w64-mingw32.cmake (6 lines, 201 B, ~52 tokens)
│   ├── test.sh (1 lines, 35 B, ~11 tokens)
│   ├── x86_64-w64-mingw32.cmake (6 lines, 209 B, ~53 tokens)
│   └── x86_64-w64-mingw32ucrt.cmake (6 lines, 221 B, ~55 tokens)
├── fortran/
│   ├── hello.f90 (4 lines, 117 B, ~31 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── gettext/
│   ├── meson/
│   │   ├── meson.build (9 lines, 254 B, ~71 tokens)
│   │   └── test_snprintf_i64u.c (5 lines, 124 B, ~42 tokens)
│   ├── test.sh (1 lines, 35 B, ~11 tokens)
│   └── tools/
│       ├── test.appdata.xml (10 lines, 361 B, ~102 tokens)
│       └── test.sh (1 lines, 34 B, ~10 tokens)
├── gha-matrix-gen/
│   └── action.yml (111 lines, 4.7 KB, ~1.4k tokens)
├── golang/
│   ├── cgo.go (4 lines, 102 B, ~33 tokens)
│   ├── hello.go (3 lines, 79 B, ~26 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── keyring/
│   └── test.sh (2 lines, 88 B, ~23 tokens)
├── libtool/
│   ├── mylib/
│   │   ├── Makefile (21 lines, 663 B, ~222 tokens)
│   │   ├── main.c (3 lines, 79 B, ~27 tokens)
│   │   ├── mylib.c (4 lines, 103 B, ~35 tokens)
│   │   └── mylib.h (1 lines, 34 B, ~10 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── makepkg/
│   ├── mingw/
│   │   └── PKGBUILD (15 lines, 215 B, ~69 tokens)
│   ├── msys/
│   │   └── PKGBUILD (12 lines, 135 B, ~47 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── nodejs/
│   ├── hello.mjs (1 lines, 34 B, ~10 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── perl/
│   ├── hello.pl (1 lines, 24 B, ~8 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── python/
│   ├── setuptools-cext/
│   │   ├── cwrapper.c (5 lines, 138 B, ~41 tokens)
│   │   ├── setup.py (2 lines, 56 B, ~16 tokens)
│   │   ├── test.py (2 lines, 53 B, ~15 tokens)
│   │   └── test.sh (1 lines, 34 B, ~10 tokens)
│   ├── setuptools-cython/
│   │   ├── hello.pyx (2 lines, 52 B, ~16 tokens)
│   │   ├── setup.py (3 lines, 78 B, ~22 tokens)
│   │   ├── test.py (2 lines, 50 B, ~15 tokens)
│   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   ├── setuptools-rust/
│   │   ├── Cargo.toml (11 lines, 166 B, ~55 tokens)
│   │   ├── setup.py (3 lines, 82 B, ~22 tokens)
│   │   ├── setuptools_rust_test/
│   │   │   └── __main__.py (2 lines, 50 B, ~16 tokens)
│   │   ├── src/
│   │   │   └── lib.rs (4 lines, 151 B, ~51 tokens)
│   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── ruby/
│   ├── hello.rb (1 lines, 20 B, ~6 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── run-tests.sh (1 lines, 35 B, ~11 tokens)
├── runtime/
│   ├── custom.sh (2 lines, 69 B, ~20 tokens)
│   ├── path_convert/
│   │   ├── README.md (1 lines, 72 B, ~18 tokens)
│   │   ├── src/
│   │   │   ├── main.cpp (9 lines, 295 B, ~92 tokens)
│   │   │   ├── path_conv.cpp (34 lines, 2.2 KB, ~658 tokens)
│   │   │   └── path_conv.h (2 lines, 57 B, ~18 tokens)
│   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   ├── path_convert_integration/
│   │   ├── echo.c (11 lines, 375 B, ~115 tokens)
│   │   ├── test.py (17 lines, 636 B, ~194 tokens)
│   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   ├── symlinks/
│   │   ├── make-menagerie.sh (1 lines, 35 B, ~11 tokens)
│   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   └── test.sh (1 lines, 34 B, ~10 tokens)
├── rust/
│   ├── hello.rs (2 lines, 54 B, ~19 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
├── toolchain/
│   ├── README.md (4 lines, 175 B, ~43 tokens)
│   ├── custom/
│   │   ├── test-cc-stack-size/
│   │   │   └── test.sh (2 lines, 65 B, ~20 tokens)
│   │   ├── test-delayload/
│   │   │   ├── main.c (8 lines, 255 B, ~77 tokens)
│   │   │   ├── test.sh (1 lines, 35 B, ~11 tokens)
│   │   │   └── ws2_32.def.in (3 lines, 37 B, ~11 tokens)
│   │   ├── test-delayload-failhook/
│   │   │   ├── lib.c (8 lines, 317 B, ~89 tokens)
│   │   │   ├── main.c (6 lines, 170 B, ~55 tokens)
│   │   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   │   ├── test-libc++-static/
│   │   │   ├── test-libc++-static.cc (4 lines, 95 B, ~31 tokens)
│   │   │   └── test.sh (1 lines, 35 B, ~11 tokens)
│   │   ├── test-reproducible/
│   │   │   └── test.sh (2 lines, 77 B, ~21 tokens)
│   │   └── test.sh (1 lines, 34 B, ~10 tokens)
│   ├── meson/
│   │   ├── aarch64-w64-mingw32.txt (15 lines, 326 B, ~95 tokens)
│   │   ├── i686-w64-mingw32.txt (15 lines, 304 B, ~92 tokens)
│   │   ├── meson.build (11 lines, 223 B, ~69 tokens)
│   │   ├── meson_options.txt (4 lines, 91 B, ~26 tokens)
│   │   ├── tests/
│   │   │   ├── call_once.cpp (4 lines, 96 B, ~31 tokens)
│   │   │   ├── cfguard-test.c (10 lines, 365 B, ~112 tokens)
│   │   │   ├── cygwin_wmemset.c (5 lines, 123 B, ~42 tokens)
│   │   │   ├── def-undec-stdcall/
│   │   │   │   ├── meson.build (15 lines, 597 B, ~161 tokens)
│   │   │   │   ├── my-executable.c (4 lines, 119 B, ~40 tokens)
│   │   │   │   ├── my-shared-lib.c (4 lines, 105 B, ~33 tokens)
│   │   │   │   └── my-shared-lib.def (2 lines, 23 B, ~5 tokens)
│   │   │   ├── exception_handling.cpp (3 lines, 79 B, ~25 tokens)
│   │   │   ├── fstat64.c (6 lines, 148 B, ~49 tokens)
│   │   │   ├── huge_val.c (4 lines, 100 B, ~34 tokens)
│   │   │   ├── ices/
│   │   │   │   ├── gcc-115038-1.cpp (2 lines, 55 B, ~19 tokens)
│   │   │   │   ├── gcc-115038-2.cpp (6 lines, 138 B, ~51 tokens)
│   │   │   │   ├── gcc-115038-3.c (2 lines, 53 B, ~18 tokens)
│   │   │   │   └── meson.build (20 lines, 647 B, ~195 tokens)
│   │   │   ├── libcpp_long_double.cpp (5 lines, 118 B, ~38 tokens)
│   │   │   ├── meson.build (70 lines, 4.0 KB, ~1.1k tokens)
│   │   │   ├── openmp_for_if.c (2 lines, 61 B, ~20 tokens)
│   │   │   ├── pch/
│   │   │   │   └── pch.hpp (94 lines, 1.9 KB, ~584 tokens)
│   │   │   ├── pch.cpp (2 lines, 60 B, ~20 tokens)
│   │   │   ├── pformat_wputchars.c (4 lines, 102 B, ~34 tokens)
│   │   │   ├── posix_sem.c (5 lines, 168 B, ~54 tokens)
│   │   │   ├── posix_sem_named.c (8 lines, 194 B, ~66 tokens)
│   │   │   ├── posix_shm.c (9 lines, 214 B, ~74 tokens)
│   │   │   ├── pow.c (4 lines, 92 B, ~31 tokens)
│   │   │   ├── printf_format.c (4 lines, 102 B, ~34 tokens)
│   │   │   ├── quick_exit.cpp (4 lines, 99 B, ~33 tokens)
│   │   │   ├── snprintf_redef.c (3 lines, 80 B, ~27 tokens)
│   │   │   ├── stackprotector_custom.c (7 lines, 202 B, ~65 tokens)
│   │   │   ├── stpcpy_fortify.c (5 lines, 180 B, ~58 tokens)
│   │   │   ├── tls_destructor_order.cpp (7 lines, 182 B, ~58 tokens)
│   │   │   ├── undef_memrchr.c (3 lines, 97 B, ~32 tokens)
│   │   │   ├── wcstok_nonconform.c (3 lines, 81 B, ~27 tokens)
│   │   │   ├── wildcard.c (3 lines, 101 B, ~33 tokens)
│   │   │   ├── windres.c (2 lines, 59 B, ~20 tokens)
│   │   │   └── windres.rc (30 lines, 673 B, ~174 tokens)
│   │   ├── x86_64-w64-mingw32.txt (15 lines, 319 B, ~94 tokens)
│   │   └── x86_64-w64-mingw32ucrt.txt (15 lines, 339 B, ~97 tokens)
│   └── test.sh (1 lines, 35 B, ~11 tokens)
└── tools/
    ├── asciidoctor.sh (1 lines, 35 B, ~11 tokens)
    ├── git.sh (1 lines, 35 B, ~11 tokens)
    ├── gnupg.sh (1 lines, 35 B, ~11 tokens)
    ├── openssh.sh (1 lines, 34 B, ~10 tokens)
    ├── patch.sh (22 lines, 1.1 KB, ~255 tokens)
    ├── shells.sh (1 lines, 35 B, ~11 tokens)
    └── test.sh (1 lines, 35 B, ~11 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
This repo contains various integration tests which get run once a day against the staging repository.

All scripts and code in this repo is licensed under the [ISC
License](https://spdx.org/licenses/ISC.html) unless specified otherwise.

================================================
FILE: runtime/path_convert/README.md
================================================
This directory was dervided from https://github.com/msys2/path_convert/


================================================
FILE: toolchain/README.md
================================================
Some regression/smoke tests for our toolchains.

Each test should contain a short one line description and a link
to a bug report/commit/post for more details on the problem.


================================================
FILE: python/setuptools-rust/Cargo.toml
================================================
[package]
name = "setuptools_rust_test"
version = "0.1.0"
edition = "2021"

[lib]
name = "_lib"
crate-type = ["cdylib"]

[dependencies]
pyo3 = { version = "0.27.2" }


================================================
FILE: python/setuptools-rust/src/lib.rs
================================================
// [OUTLINE - 2 symbols, 12 lines]
// import pyo3
// L4-L6: fn hello() -> PyResult<String>
// L9-L12: fn _lib(m: &Bound<'_, PyModule>) -> PyResult<()>


================================================
FILE: LICENSE.txt
================================================
https://spdx.org/licenses/ISC.html

Copyright 2022 Christoph Reiter

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.


================================================
FILE: Makefile
================================================
.PHONY: toolchain rust python cmake autotools golang fortran ruby perl nodejs runtime ada tools makepkg libtool gettext keyring clean

all: toolchain rust python cmake autotools golang fortran ruby perl nodejs runtime ada tools makepkg libtool gettext keyring clean

toolchain:
	(cd toolchain && ./test.sh)

rust:
	(cd rust && ./test.sh)

python:
	(cd python && ./test.sh)

cmake:
	(cd cmake && ./test.sh)

autotools:
	$(MAKE) -C autotools

golang:
	(cd golang && ./test.sh)

fortran:
	(cd fortran && ./test.sh)

ruby:
	(cd ruby && ./test.sh)

perl:
	(cd perl && ./test.sh)

nodejs:
	(cd nodejs && ./test.sh)

runtime:
	(cd runtime && ./test.sh)

ada:
	(cd ada && ./test.sh)

tools:
	(cd tools && ./test.sh)

makepkg:
	(cd makepkg && ./test.sh)

libtool:
	(cd libtool && ./test.sh)

gettext:
	(cd gettext && ./test.sh)

keyring:
	(cd keyring && ./test.sh)

clean:
	$(MAKE) -C autotools clean


================================================
FILE: action.yml
================================================
name: 'Run msys2-tests'
description: 'Runs msys2-tests'
runs:
  using: 'composite'
  steps:
    - shell: msys2 {0}
      if: matrix.type != 'docker'
      run: |
        bash '${{ github.action_path }}/run-tests.sh'

    - name: Locate MSYS2 installation
      if: matrix.type == 'docker'
      id: msys2-location
      shell: msys2 {0}
      run: |
        echo "path=$(cygpath -am /)" >> "$GITHUB_OUTPUT"

    - name: Run tests in Docker
      if: matrix.type == 'docker'
      shell: pwsh
      env:
        MSYS2_LOCATION: ${{ steps.msys2-location.outputs.path }}
        TEST_PATH: ${{ github.action_path }}
      run: |
        # https://github.com/actions/runner-images/issues/13729
        if ((Get-Service docker).Status -ne 'Running') {
          Start-Service docker
        }

        $build = [Environment]::OSVersion.Version.Build
        $tag = switch ($build) {
          20348 { 'ltsc2022' }
          26100 { 'ltsc2025' }
          default { throw "Unsupported Windows host build: $build" }
        }

        $container = 'msys2-tests'
        # Keep the container running for the subsequent docker exec calls.
        docker run --detach --interactive --name $container `
          --mount "type=bind,source=$env:MSYS2_LOCATION,target=C:\msys64" `
          --env MSYSTEM --env CC --env CXX --env FC --env CHERE_INVOKING=1 `
          "mcr.microsoft.com/windows/servercore:$tag" `
          cmd.exe /Q /K
        if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

        try {
          # Copy the action's tests to local storage.
          docker exec $container cmd.exe /D /C 'mkdir C:\msys2-tests'
          if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
          docker cp "$env:TEST_PATH/." "${container}:C:/msys2-tests"
          if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

          docker exec $container C:\msys64\usr\bin\bash.exe -lc 'bash /c/msys2-tests/run-tests.sh'
          exit $LASTEXITCODE
        } finally {
          docker rm --force $container
        }


================================================
FILE: ada/gnat_exception_internal.adb
================================================
-- This triggers an internal exception in the ada compiler
-- and makes sure exception handling works there
-- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=109670
with GNAT.Spitbol.Patterns;
procedure gnat_exception_internal is
   M : GNAT.Spitbol.Patterns.Match_Result;
   type Header_Symbol is (None, Name, Attr, Conv, Prag);
begin
   null;
end gnat_exception_internal;

================================================
FILE: ada/hello.adb
================================================
with Ada.Text_IO;

procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, world!");
end Hello;

================================================
FILE: ada/test.sh
================================================
// [OUTLINE - 0 symbols, 16 lines]


================================================
FILE: autotools/Makefile
================================================
.PHONY: all clean ac_latest_am_latest ac_272_am_117 ac_271_am_116 ac_269_am_115

all: ac_latest_am_latest ac_272_am_117 ac_271_am_116 ac_269_am_115

ac_latest_am_latest:
	rm -Rf _build_ac_latest_am_latest
	WANT_AUTOCONF='latest' WANT_AUTOMAKE='latest' ./build.sh _build_ac_latest_am_latest

ac_272_am_117:
	rm -Rf _build_ac_272_am_117
	WANT_AUTOCONF='2.72' WANT_AUTOMAKE='1.17' ./build.sh _build_ac_272_am_117

ac_271_am_116:
	rm -Rf _build_ac_271_am_116
	WANT_AUTOCONF='2.71' WANT_AUTOMAKE='1.16' ./build.sh _build_ac_271_am_116

ac_269_am_115:
	rm -Rf _build_ac_269_am_115
	WANT_AUTOCONF='2.69' WANT_AUTOMAKE='1.15' ./build.sh _build_ac_269_am_115

clean:
	rm -rf _build_ac_latest_am_latest _build_ac_272_am_117 _build_ac_271_am_116 _build_ac_269_am_115


================================================
FILE: autotools/build.sh
================================================
// [OUTLINE - 0 symbols, 16 lines]


================================================
FILE: autotools/example/Makefile.am
================================================
bin_PROGRAMS = example
example_SOURCES = example.c

TESTS = example

================================================
FILE: autotools/example/configure.ac
================================================
AC_PREREQ([2.63])
AC_INIT([msys2-tests], [0.0.1])

AM_INIT_AUTOMAKE([1.11 no-define foreign])
AM_SILENT_RULES([yes])

LT_PREREQ([2.2])
LT_INIT([disable-static])

AC_CONFIG_FILES([Makefile])
AC_OUTPUT


================================================
FILE: autotools/example/example.c
================================================
// [OUTLINE - 1 symbols, 7 lines]
// import <stdio.h>
// L3-L7: int main(void)


================================================
FILE: cmake/CMakeLists.txt
================================================
cmake_minimum_required(VERSION 3.10)

project(Example VERSION 1.0)

add_executable(example example.cxx)

enable_testing()
add_test(NAME test COMMAND $<TARGET_FILE:example>)

# Make sure MSYS, CYGWIN, MINGW, WIN32 are defined correctly.
if(NOT CMAKE_CROSSCOMPILING)
    set(MSYSTEM $ENV{MSYSTEM})
    if(MSYSTEM STREQUAL "MSYS" OR MSYSTEM STREQUAL "CYGWIN")
        if(NOT MSYS OR NOT CYGWIN OR WIN32 OR MINGW)
            message(FATAL_ERROR "broken")
        endif()
    else()
        if(NOT MINGW OR NOT WIN32 OR CYGWIN)
            message(FATAL_ERROR "broken")
        endif()
        if (CMAKE_GENERATOR STREQUAL "MSYS Makefiles" AND NOT MSYS)
            message(FATAL_ERROR "broken")
        endif()
        if (NOT (CMAKE_GENERATOR STREQUAL "MSYS Makefiles") AND MSYS)
            message(FATAL_ERROR "broken")
        endif()
    endif()
endif()

================================================
FILE: cmake/example.cxx
================================================
// [OUTLINE - 1 symbols, 7 lines]
// import <iostream>
// L3-L7: int main(int argc, char* argv[])


================================================
FILE: cmake/i686-w64-mingw32.cmake
================================================
set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_PROCESSOR i686)

set(CMAKE_C_COMPILER i686-w64-mingw32-gcc)
set(CMAKE_CXX_COMPILER i686-w64-mingw32-g++)
set(CMAKE_RC_COMPILER i686-w64-mingw32-windres)


================================================
FILE: cmake/test.sh
================================================
// [OUTLINE - 0 symbols, 42 lines]


================================================
FILE: cmake/x86_64-w64-mingw32.cmake
================================================
set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_PROCESSOR x86_64)

set(CMAKE_C_COMPILER x86_64-w64-mingw32-gcc)
set(CMAKE_CXX_COMPILER x86_64-w64-mingw32-g++)
set(CMAKE_RC_COMPILER x86_64-w64-mingw32-windres)


================================================
FILE: cmake/x86_64-w64-mingw32ucrt.cmake
================================================
set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_PROCESSOR x86_64)

set(CMAKE_C_COMPILER x86_64-w64-mingw32ucrt-gcc)
set(CMAKE_CXX_COMPILER x86_64-w64-mingw32ucrt-g++)
set(CMAKE_RC_COMPILER x86_64-w64-mingw32ucrt-windres)


================================================
FILE: fortran/hello.f90
================================================
program hello
  ! This is a comment line; it is ignored by the compiler
  print *, 'Hello, World!'
end program hello


================================================
FILE: fortran/test.sh
================================================
// [OUTLINE - 0 symbols, 19 lines]


================================================
FILE: gettext/meson/meson.build
================================================
project('gettext-tests', 'c',
  version : '0.1',
  default_options : ['warning_level=3'])

intl_dep = dependency('intl')

exe = executable('test_snprintf_i64u', 'test_snprintf_i64u.c', dependencies : [intl_dep])

test('test_snprintf_i64u', exe)


================================================
FILE: gettext/meson/test_snprintf_i64u.c
================================================
// [OUTLINE - 1 symbols, 19 lines]
// import <stdio.h>
// import <stdint.h>
// import <libintl.h>
// L7-L19: int main(void)


================================================
FILE: gettext/test.sh
================================================
// [OUTLINE - 0 symbols, 14 lines]


================================================
FILE: gettext/tools/test.appdata.xml
================================================
<?xml version="1.0" encoding="UTF-8"?>
<component>
    <id>example-app</id>
    <name>Example App</name>
    <summary>This is a summary of Example App</summary>
    <description>
        <p>This is a longer description of Example App.</p>
        <p>This app is used for demonstrating xgettext extraction from XML.</p>
    </description>
</component>


================================================
FILE: gettext/tools/test.sh
================================================
// [OUTLINE - 0 symbols, 9 lines]


================================================
FILE: gha-matrix-gen/action.yml
================================================
name: 'Generate matrix for msys2-tests'
description: 'Generate GitHub Actions matrix for running msys2-tests'
outputs:
  matrix:
    description: 'matrix suitable for use in subsequent jobs'
    value: ${{ steps.generate.outputs.matrix }}
runs:
  using: 'composite'
  steps:
    - name: Generate matrix
      shell: python
      id: generate
      run: |
        import json
        import os
        matrix = [
          { 'msystem': 'MINGW64', 'prefix':  'mingw-w64-x86_64', 'cc': 'gcc', 'cxx': 'g++', 'fc': 'gfortran' },
          { 'msystem': 'MINGW32', 'prefix':  'mingw-w64-i686', 'cc': 'gcc', 'cxx': 'g++', 'fc': '' },
          { 'msystem': 'UCRT64',  'prefix':  'mingw-w64-ucrt-x86_64', 'cc': 'gcc', 'cxx': 'g++', 'fc': 'gfortran' },
          { 'msystem': 'UCRT64',  'prefix':  'mingw-w64-ucrt-x86_64', 'cc': 'clang', 'cxx': 'clang++', 'fc': '' },
          { 'msystem': 'CLANG64', 'prefix':  'mingw-w64-clang-x86_64', 'cc': 'clang', 'cxx': 'clang++', 'fc': 'flang' },
          { 'msystem': 'CLANGARM64', 'prefix': 'mingw-w64-clang-aarch64', 'cc': 'clang', 'cxx': 'clang++', 'fc': 'flang' },
          { 'msystem': 'MSYS', 'cc': 'gcc', 'cxx': 'g++', 'fc': 'gfortran' },
        ]
        for entry in matrix:
          entry['name'] = f"{entry['msystem']}-{entry['cc']}"
          entry['type'] = 'host'
          entry['runner'] = 'windows-2025' if entry['msystem'] != 'CLANGARM64' else 'windows-11-arm'
          if entry['msystem'] != 'MSYS':
            entry['packages'] = [
              f"{ entry['prefix'] }-meson",
              f"{ entry['prefix'] }-ninja",
              f"{ entry['prefix'] }-cmake",
              f"{ entry['prefix'] }-{ entry['cc'] }",
              f"{ entry['prefix'] }-python",
              f"{ entry['prefix'] }-python-setuptools",
              f"{ entry['prefix'] }-cython",
              f"{ entry['prefix'] }-autotools",
              f"{ entry['prefix'] }-gettext",
              f"{ entry['prefix'] }-git",
              f"{ entry['prefix'] }-omp",
              "make",
              'zsh',
              'fish',
              'openssh',
              'patch',
            ]

            if 'i686' not in entry['prefix']:
              entry['packages'].append(f"{ entry['prefix'] }-ruby")
              entry['packages'].append(f"{ entry['prefix'] }-asciidoctor")
              entry['packages'].append(f"{ entry['prefix'] }-make")

            if 'clang-aarch64' not in entry['prefix'] and 'i686' not in entry['prefix']:
              entry['packages'].append(f"{ entry['prefix'] }-gdb")

            if 'i686' not in entry['prefix']:
              entry['packages'].append(f"{ entry['prefix'] }-python-setuptools-rust")
              entry['packages'].append(f"{ entry['prefix'] }-rust")
              entry['packages'].append(f"{ entry['prefix'] }-go")

            if entry['cc'] != "gcc":
              entry['packages'].extend([
                f"{ entry['prefix'] }-lld",
                f"{ entry['prefix'] }-libc++",
                f"{ entry['prefix'] }-llvm-tools"
              ])
            if entry['fc'] == 'gfortran':
              entry['packages'].append(f"{ entry['prefix'] }-gcc-fortran")
            elif entry['fc'] != '':
              entry['packages'].append(f"{ entry['prefix'] }-{ entry['fc'] }")
            if 'i686' not in entry['prefix']:
              entry['packages'].append(f"{ entry['prefix'] }-perl")
              if entry['cc'] == 'gcc':
                entry['packages'].append(f"{ entry['prefix'] }-gcc-ada")
              else:
                entry['packages'].append(f"{ entry['prefix'] }-llvm-openmp")
            if 'i686' not in entry['prefix'] and 'MINGW64' not in entry['msystem']:
              entry['packages'].append(f"{ entry['prefix'] }-nodejs")
          else:
            entry['packages'] = [
              'meson',
              'ninja',
              'cmake',
              'make',
              'gcc',
              'python',
              'python-setuptools',
              'python-setuptools-rust',
              'cython',
              'autotools',
              'ruby',
              'perl',
              'mingw-w64-cross-gcc',
              'mingw-w64-cross-mingwarm64-gcc',
              'gdb',
              'git',
              'asciidoctor',
              'gettext-devel',
              'zsh',
              'fish',
              'rust',
              'openssh',
              'patch',
            ]
          entry['packages'] = " ".join(entry['packages'])

        matrix.extend([{**entry, 'name': f"{entry['name']}-docker", 'type': 'docker', 'runner': 'windows-2022'} for entry in matrix if entry['msystem'] == 'MSYS' or (entry['msystem'] == 'UCRT64' and entry['cc'] == 'gcc')])

        with open(os.environ['GITHUB_OUTPUT'], 'a', encoding='utf-8') as h:
          h.write(f"matrix={json.dumps(matrix)}\n")


================================================
FILE: golang/cgo.go
================================================
// [OUTLINE - 1 symbols, 11 lines]
// import import "C"
// import import "fmt"
// L9-L11: func main()


================================================
FILE: golang/hello.go
================================================
// [OUTLINE - 1 symbols, 7 lines]
// import import "fmt"
// L5-L7: func main()


================================================
FILE: golang/test.sh
================================================
// [OUTLINE - 0 symbols, 18 lines]


================================================
FILE: keyring/test.sh
================================================
// [OUTLINE - 1 symbols, 23 lines]
// L11-L17: function check_packager_key_full_trust()


================================================
FILE: libtool/mylib/Makefile
================================================
LIB=mylib
LIBNAME=lib$(LIB).la
HEADER=mylib.h
DESTDIR ?=
LIBPATH ?= /lib
INCPATH ?= /include
BUILDDIR ?= build

all: ${LIBNAME}

$(BUILDDIR)/$(LIB).o: $(HEADER)
	libtool --mode=compile --tag=CC $(CC) $(CFLAGS) $(LDFLAGS) -o $(BUILDDIR)/$(LIB).o -c $(LIB).c

$(LIBNAME): $(BUILDDIR)/$(LIB).o
	libtool --mode=link --tag=CC $(CC) $(LDFLAGS) $(BUILDDIR)/$(LIB).lo -o $(BUILDDIR)/$(LIBNAME) -rpath $(LIBPATH) -version-info 42 -no-undefined

install: $(LIBNAME)
	install -d $(DESTDIR)$(LIBPATH)
	install -d $(DESTDIR)$(INCPATH)
	libtool --mode=install install -m 644 $(BUILDDIR)/$(LIBNAME) $(DESTDIR)$(LIBPATH)/$(LIBNAME)
	install -m 644 $(HEADER) $(DESTDIR)$(INCPATH)


================================================
FILE: libtool/mylib/main.c
================================================
// [OUTLINE - 1 symbols, 5 lines]
// import <mylib.h>
// L3-L5: int main(void)


================================================
FILE: libtool/mylib/mylib.c
================================================
// [OUTLINE - 1 symbols, 7 lines]
// import <stdio.h>
// import "mylib.h"
// L4-L7: int do_print(void)


================================================
FILE: libtool/mylib/mylib.h
================================================
// [OUTLINE - 0 symbols, 3 lines]


================================================
FILE: libtool/test.sh
================================================
// [OUTLINE - 0 symbols, 17 lines]


================================================
FILE: makepkg/mingw/PKGBUILD
================================================

_realname=mingw-dummy
pkgbase=mingw-w64-${_realname}
pkgname=("${MINGW_PACKAGE_PREFIX}-${_realname}")
pkgver=0
pkgrel=1
pkgdesc=Placeholder
arch=('any')
license=('MIT')
source=()
md5sums=()

package() {
    true
}


================================================
FILE: makepkg/msys/PKGBUILD
================================================
pkgname=("msys-dummy")
pkgver=0
pkgrel=1
pkgdesc=Placeholder
arch=('any')
license=('MIT')
source=()
md5sums=()

package() {
    true
}


================================================
FILE: makepkg/test.sh
================================================
// [OUTLINE - 0 symbols, 13 lines]


================================================
FILE: nodejs/hello.mjs
================================================
// [OUTLINE - 0 symbols, 1 lines]


================================================
FILE: nodejs/test.sh
================================================
// [OUTLINE - 0 symbols, 11 lines]


================================================
FILE: perl/hello.pl
================================================
print "Hello World!\n";


================================================
FILE: perl/test.sh
================================================
// [OUTLINE - 0 symbols, 11 lines]


================================================
FILE: python/setuptools-cext/cwrapper.c
================================================
// [OUTLINE - 3 symbols, 28 lines]
// import <Python.h>
// L3-L8: static PyObject *
// L16: struct PyModuleDef
// L24-L28: PyMODINIT_FUNC


================================================
FILE: python/setuptools-cext/setup.py
================================================
// [OUTLINE - 0 symbols, 11 lines]
// import setuptools


================================================
FILE: python/setuptools-cext/test.py
================================================
// [OUTLINE - 0 symbols, 3 lines]
// import cwrapper


================================================
FILE: python/setuptools-cext/test.sh
================================================
// [OUTLINE - 0 symbols, 6 lines]


================================================
FILE: python/setuptools-cython/hello.pyx
================================================
def say_hello_to(name):
    print(f"Hello {name}!")


================================================
FILE: python/setuptools-cython/setup.py
================================================
// [OUTLINE - 0 symbols, 8 lines]
// import setuptools
// import Cython.Build


================================================
FILE: python/setuptools-cython/test.py
================================================
// [OUTLINE - 0 symbols, 3 lines]
// import hello


================================================
FILE: python/setuptools-cython/test.sh
================================================
// [OUTLINE - 0 symbols, 11 lines]


================================================
FILE: python/setuptools-rust/setup.py
================================================
// [OUTLINE - 0 symbols, 12 lines]
// import setuptools
// import setuptools_rust


================================================
FILE: python/setuptools-rust/setuptools_rust_test/__main__.py
================================================
// [OUTLINE - 0 symbols, 4 lines]
// import ._lib


================================================
FILE: python/setuptools-rust/test.sh
================================================
// [OUTLINE - 0 symbols, 15 lines]


================================================
FILE: python/test.sh
================================================
// [OUTLINE - 0 symbols, 17 lines]


================================================
FILE: ruby/hello.rb
================================================
puts 'Hello, world!'

================================================
FILE: ruby/test.sh
================================================
// [OUTLINE - 0 symbols, 19 lines]


================================================
FILE: run-tests.sh
================================================
// [OUTLINE - 0 symbols, 13 lines]


================================================
FILE: runtime/custom.sh
================================================
// [OUTLINE - 1 symbols, 13 lines]
// L5-L11: test_dev_fd_symlinks()


================================================
FILE: runtime/path_convert/src/main.cpp
================================================
// [OUTLINE - 4 symbols, 313 lines]
// import "path_conv.h"
// import <stdio.h>
// import <stdlib.h>
// import <string.h>
// L13-L17: struct test_data_t
// L245-L271: const char* escape(const char* str, char* dst)
// L273-L277: void litter_buffer(char* buf, size_t len)
// L279-L311: int main()


================================================
FILE: runtime/path_convert/src/path_conv.cpp
================================================
// [OUTLINE - 26 symbols, 740 lines]
// import <stdio.h>
// import <stdlib.h>
// import <string.h>
// import <ctype.h>
// import <vector>
// import <sys/cygwin.h>
// import "path_conv.h"
// L157-L169: class tmp_pathbuf
// L160-L164: ~tmp_pathbuf()
// L165-L168: char *c_get ()
// L171-L183: class path_conv
// L175-L179: path_conv (const char *src, uint32_t)
// L180-L182: const char *get_win32 () const
// L185-L188: int set_errno(int val)
// L234-L241: void find_end_of_posix_list(const char** to, int* in_string)
// L243-L267: void find_end_of_rooted_path(const char** from, const char** to, int* in_string)
// L269-L292: void sub_convert(const char** from, const char** to, char** dst, const char* dstend, int* in_string)
// L294-L357: const char* convert(char *dst, size_t dstlen, const char *src)
// L359-L363: void copy_to_dst(const char* from, const char* to, char** dst, const char* dstend)
// L365-L368: const char** move(const char** p, int count)
// L370-L570: path_type find_path_start_and_type(const char** src, int recurse, const char* end)
// L572-L587: void convert_path(const char** from, const char* to, path_type type, char** dst, const char* dstend)
// L589-L591: void swp_convert(const char** from, const char* to, char** dst, const char* dstend)
// L593-L596: void ewp_convert(const char** from, const char* to, char** dst, const char* dstend)
// L598-L600: void wpl_convert(const char** from, const char* to, char** dst, const char* dstend)
// L602-L611: void unc_convert(const char** from, const char* to, char** dst, const char* dstend)
// L613-L615: void ep_convert(const char** from, const char* to, char** dst, const char* dstend)
// L617-L636: void rp_convert(const char** from, const char* to, char** dst, const char* dstend)
// L638-L640: void url_convert(const char** from, const char* to, char** dst, const char* dstend)
// L642-L661: void subp_convert(const char** from, const char* end, int is_url, char** dst, const char* dstend)
// L663-L707: void ppl_convert(const char** from, const char* to, char** dst, const char* dstend)
// L709-L717: int is_special_posix_path(const char* from, const char* to, char** dst, const char* dstend)
// L719-L739: void posix_to_win32_path(const char* from, const char* to, char** dst, const char* dstend)


================================================
FILE: runtime/path_convert/src/path_conv.h
================================================
// [OUTLINE - 0 symbols, 147 lines]
// import <stdlib.h>


================================================
FILE: runtime/path_convert/test.sh
================================================
// [OUTLINE - 0 symbols, 25 lines]


================================================
FILE: runtime/path_convert_integration/echo.c
================================================
// [OUTLINE - 4 symbols, 100 lines]
// import <stdio.h>
// import <fcntl.h>
// import <stdlib.h>
// import <stringapiset.h>
// import <processenv.h>
// import <assert.h>
// L13-L40: static char *encodeUtf8(const wchar_t *wstr)
// L46-L69: static void printEnvVars()
// L75-L87: static void printArgs(int argc, wchar_t **argv)
// L95-L100: int wmain(int argc, wchar_t **argv)


================================================
FILE: runtime/path_convert_integration/test.py
================================================
// [OUTLINE - 10 symbols, 86 lines]
// import subprocess
// import os
// import sys
// import unittest
// import typing
// import contextlib
// L13-L22: def set_env(name, value):
// L25-L36: def parse_echo(args: List[str]=[], env: Dict[str, str]=os.environ) -> Tuple[List[str], Dict[str, str]]:
// L39-L41: def cygpath(mode: str, path: str) -> str:
// L44-L76: class Tests(unittest.TestCase):
// L46-L49: def test_path_root(self):
// L51-L54: def test_env_root(self):
// L56-L64: def test_with_spaces(self):
// L66-L70: def test_disable_everything(self):
// L72-L76: def test_pass_string_to_preprocessor(self):
// L79-L80: def suite():


================================================
FILE: runtime/path_convert_integration/test.sh
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: runtime/symlinks/make-menagerie.sh
================================================
// [OUTLINE - 0 symbols, 26 lines]


================================================
FILE: runtime/symlinks/test.sh
================================================
// [OUTLINE - 0 symbols, 91 lines]


================================================
FILE: runtime/test.sh
================================================
// [OUTLINE - 0 symbols, 9 lines]


================================================
FILE: rust/hello.rs
================================================
// [OUTLINE - 1 symbols, 3 lines]
// L1-L3: fn main()


================================================
FILE: rust/test.sh
================================================
// [OUTLINE - 0 symbols, 12 lines]


================================================
FILE: toolchain/custom/test-cc-stack-size/test.sh
================================================
// [OUTLINE - 1 symbols, 32 lines]
// L5-L27: check_stack_size()


================================================
FILE: toolchain/custom/test-delayload/main.c
================================================
// [OUTLINE - 2 symbols, 56 lines]
// import <assert.h>
// import <stdio.h>
// import <winsock2.h>
// import <windows.h>
// import <delayimp.h>
// L17-L48: FARPROC WINAPI dll_notify_hook(unsigned dliNotify, PDelayLoadInfo pdli)
// L50-L56: int main(void)


================================================
FILE: toolchain/custom/test-delayload/test.sh
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: toolchain/custom/test-delayload/ws2_32.def.in
================================================
LIBRARY "WS2_32.dll"
EXPORTS
htonl@4


================================================
FILE: toolchain/custom/test-delayload-failhook/lib.c
================================================
// [OUTLINE - 3 symbols, 72 lines]
// import <assert.h>
// import <stdio.h>
// import <windows.h>
// import <delayimp.h>
// L8-L27: FARPROC WINAPI dll_failure_hook(unsigned dliNotify, PDelayLoadInfo pdli)
// L32-L63: FARPROC WINAPI dll_notify_hook(unsigned dliNotify, PDelayLoadInfo pdli)
// L67-L72: int lib_f(void)


================================================
FILE: toolchain/custom/test-delayload-failhook/main.c
================================================
// [OUTLINE - 2 symbols, 20 lines]
// import <assert.h>
// import <stdio.h>
// import <windows.h>
// L5: __declspec(dllexport) int main_f(void)
// L7-L20: int main(void)


================================================
FILE: toolchain/custom/test-delayload-failhook/test.sh
================================================
// [OUTLINE - 0 symbols, 26 lines]


================================================
FILE: toolchain/custom/test-libc++-static/test-libc++-static.cc
================================================
// [OUTLINE - 1 symbols, 9 lines]
// import <string>
// import <iostream>
// L4-L9: int main()


================================================
FILE: toolchain/custom/test-libc++-static/test.sh
================================================
// [OUTLINE - 0 symbols, 13 lines]


================================================
FILE: toolchain/custom/test-reproducible/test.sh
================================================
// [OUTLINE - 1 symbols, 26 lines]
// L5-L19: check_libraries_reproducible()


================================================
FILE: toolchain/custom/test.sh
================================================
// [OUTLINE - 0 symbols, 9 lines]


================================================
FILE: toolchain/meson/aarch64-w64-mingw32.txt
================================================
[binaries]
c = 'aarch64-w64-mingw32-gcc'
cpp = 'aarch64-w64-mingw32-g++'
ar = 'aarch64-w64-mingw32-ar'
strip = 'aarch64-w64-mingw32-strip'
windres = 'aarch64-w64-mingw32-windres'

[host_machine]
system = 'windows'
cpu_family = 'aarch64'
cpu = 'aarch64'
endian = 'little'

[properties]
needs_exe_wrapper = false


================================================
FILE: toolchain/meson/i686-w64-mingw32.txt
================================================
[binaries]
c = 'i686-w64-mingw32-gcc'
cpp = 'i686-w64-mingw32-g++'
ar = 'i686-w64-mingw32-ar'
strip = 'i686-w64-mingw32-strip'
windres = 'i686-w64-mingw32-windres'

[host_machine]
system = 'windows'
cpu_family = 'x86'
cpu = 'i686'
endian = 'little'

[properties]
needs_exe_wrapper = false


================================================
FILE: toolchain/meson/meson.build
================================================
project('msys2-toolchain-tests', 'c', 'cpp',
  version : '0.1',
  default_options : [
    'warning_level=3',
    'buildtype=debugoptimized',
  ]
)

add_project_arguments('-Werror', language : ['c', 'cpp'])

subdir('tests')


================================================
FILE: toolchain/meson/meson_options.txt
================================================
option('openmp',
  type: 'boolean',
  value: true,
  description: 'Enable OpenMP support')


================================================
FILE: toolchain/meson/tests/call_once.cpp
================================================
// [OUTLINE - 1 symbols, 13 lines]
// import <iostream>
// import <mutex>
// L7-L13: int main()


================================================
FILE: toolchain/meson/tests/cfguard-test.c
================================================
// [OUTLINE - 6 symbols, 126 lines]
// import <windows.h>
// import <stdlib.h>
// import <stdio.h>
// L32-L57: __attribute__ (( noinline ))
// L59-L62: __attribute__ (( noinline ))
// L64-L67: __attribute__ (( noinline ))
// L69-L72: __attribute__ (( noinline, guard(nocf) ))
// L74-L83: int check_cfguard_status(void)
// L87-L126: int main(int argc, char *argv[])


================================================
FILE: toolchain/meson/tests/cygwin_wmemset.c
================================================
// [OUTLINE - 1 symbols, 15 lines]
// import <wchar.h>
// import <stdlib.h>
// import <string.h>
// L8-L15: int main(void)


================================================
FILE: toolchain/meson/tests/def-undec-stdcall/meson.build
================================================
# https://github.com/msys2/MINGW-packages/pull/17163
# https://sourceforge.net/p/mingw-w64/mailman/message/37839853/
# https://sourceware.org/bugzilla/show_bug.cgi?id=30421
# In case the exported symbols are forced undecorated via a .def file
# then binutils also wrongly added them undecortaed to the import library.

lib = shared_library('my-shared-lib',
                     'my-shared-lib.c',
                     vs_module_defs: 'my-shared-lib.def')

exec = executable('my-executable',
                  'my-executable.c',
                  link_with: [lib])

test('def_undec_stdcall', exec)


================================================
FILE: toolchain/meson/tests/def-undec-stdcall/my-executable.c
================================================
// [OUTLINE - 1 symbols, 15 lines]
// import <stdlib.h>
// import <stdio.h>
// L6-L15: int main(int argc, char **argv)


================================================
FILE: toolchain/meson/tests/def-undec-stdcall/my-shared-lib.c
================================================
// [OUTLINE - 2 symbols, 13 lines]
// import <stdlib.h>
// L3-L7: int __stdcall
// L9-L13: int __stdcall


================================================
FILE: toolchain/meson/tests/def-undec-stdcall/my-shared-lib.def
================================================
EXPORTS
   add_numbers


================================================
FILE: toolchain/meson/tests/exception_handling.cpp
================================================
// [OUTLINE - 1 symbols, 13 lines]
// import <iostream>
// L6-L13: int main ()


================================================
FILE: toolchain/meson/tests/fstat64.c
================================================
// [OUTLINE - 2 symbols, 20 lines]
// import <sys/stat.h>
// import <stdlib.h>
// import <stdio.h>
// L6-L20: int main( void )
// L9: struct stat64


================================================
FILE: toolchain/meson/tests/huge_val.c
================================================
// [OUTLINE - 1 symbols, 13 lines]
// import <math.h>
// import <stdio.h>
// L7-L13: int main(void)


================================================
FILE: toolchain/meson/tests/ices/gcc-115038-1.cpp
================================================
// [OUTLINE - 1 symbols, 10 lines]
// L6-L10: void e()


================================================
FILE: toolchain/meson/tests/ices/gcc-115038-2.cpp
================================================
// [OUTLINE - 5 symbols, 21 lines]
// L3-L5: struct d
// L6-L9: struct e
// L7: e() : c(1.0)
// L10-L12: struct j
// L13-L16: class k : j


================================================
FILE: toolchain/meson/tests/ices/gcc-115038-3.c
================================================
// [OUTLINE - 1 symbols, 6 lines]
// L4-L6: void a()


================================================
FILE: toolchain/meson/tests/ices/meson.build
================================================
c_compiler_program = find_program(meson.get_compiler('c').cmd_array().get(-1))
cpp_compiler_program = find_program(meson.get_compiler('cpp').cmd_array().get(-1))

test('ice-gcc-115038-1',
     cpp_compiler_program, args: [
        '-c', '-O2', '-fno-omit-frame-pointer',
        meson.current_source_dir() / 'gcc-115038-1.cpp'
    ])

test('ice-gcc-115038-2',
     cpp_compiler_program, args: [
        '-c', '-O2', '-fno-omit-frame-pointer',
        meson.current_source_dir() / 'gcc-115038-2.cpp'
    ])

test('ice-gcc-115038-3',
     c_compiler_program, args: [
        '-c', '-O2',
        meson.current_source_dir() / 'gcc-115038-3.c'
    ])


================================================
FILE: toolchain/meson/tests/libcpp_long_double.cpp
================================================
// [OUTLINE - 1 symbols, 16 lines]
// import <sstream>
// import <string>
// import <iostream>
// L10-L16: int main()


================================================
FILE: toolchain/meson/tests/meson.build
================================================
test('huge_val', executable('huge_val', 'huge_val.c'))
test('snprintf_redef', executable('snprintf_redef', 'snprintf_redef.c'))
test('quick_exit', executable('quick_exit', 'quick_exit.cpp'))
test('exception_handling', executable('exception_handling', 'exception_handling.cpp'))
test('printf_format', executable('printf_format', 'printf_format.c'))
# FIXME: c++11 to work around gcc 15 git failing on its own deprecation warnings
test('pch', executable('pch', 'pch.cpp', cpp_pch : 'pch/pch.hpp', override_options : ['cpp_std=c++11']))
test('libcpp_long_double', executable('libcpp_long_double', 'libcpp_long_double.cpp'))
test('fstat64', executable('fstat64', 'fstat64.c'))
test('pformat_wputchars', executable('pformat_wputchars', 'pformat_wputchars.c'))

openmp = dependency('openmp', required: get_option('openmp'))
if openmp.found()
    env = environment()
    env.set('OMP_NUM_THREADS', '1')
    test('openmp_for_if', executable('openmp_for_if', 'openmp_for_if.c', dependencies : [openmp]), env : env)
endif
test('pow', executable('pow', 'pow.c', c_args: ['-fno-builtin', '-fno-strict-aliasing']))

windres_res = import('windows').compile_resources('windres.rc')
windres = executable('windres', 'windres.c', windres_res)
test('windres', windres)

test('call_once', executable('call_once', 'call_once.cpp'))

test('undef_memrchr', executable('undef_memrchr', 'undef_memrchr.c', c_args: ['-O3']))

test('stpcpy_fortify', executable('stpcpy_fortify', 'stpcpy_fortify.c', c_args: ['-O3', '-D_FORTIFY_SOURCE=2']))

test('stackprotector_custom', executable('stackprotector_custom', 'stackprotector_custom.c', c_args: ['-O0', '-fstack-protector-strong']))

test('cygwin_wmemset', executable('cygwin_wmemset', 'cygwin_wmemset.c'))

test('posix_sem', executable('posix_sem', 'posix_sem.c', dependencies: [dependency('threads')]))

test('posix_sem_named', executable('posix_sem_named', 'posix_sem_named.c', dependencies: [dependency('threads')]))

test('posix_shm', executable('posix_shm', 'posix_shm.c'))

test('wcstok_nonconform', executable('wcstok_nonconform', 'wcstok_nonconform.c'))

test('wildcard_on', executable('wildcard_on', 'wildcard.c', c_args: ['-DDO_WILDCARD=1']), args : ['tests/wildc*_on.exe'])
test('wildcard_off', executable('wildcard_off', 'wildcard.c', c_args: ['-DDO_WILDCARD=0']), args : ['tests/wildc*_on.exe'])
test('wildcard_default', executable('wildcard_default', 'wildcard.c'), args : ['tests/wildc*_on.exe'])

test('tls_destructor_order', executable('tls_destructor_order', 'tls_destructor_order.cpp'))

compiler = meson.get_compiler('c')
if compiler.get_id() == 'clang' and compiler.get_linker_id() == 'ld.lld'
    guard_none = executable('guard_none', 'cfguard-test.c', c_args: ['-mguard=none'], link_args: ['-Wl,-Xlink,-guard:no'])
    test('guard_none-check_enabled', guard_none, args : ['check_enabled'], should_fail: true)
    test('guard_none-normal_icall', guard_none, args : ['normal_icall'])
    test('guard_none-invalid_icall', guard_none, args : ['invalid_icall'])
    test('guard_none-invalid_icall_nocf', guard_none, args : ['invalid_icall_nocf'])

    guard_cf = executable('guard_cf', 'cfguard-test.c', c_args: ['-mguard=cf'], link_args: ['-Wl,-Xlink,-guard:cf'])
    test('guard_cf-check_enabled', guard_cf, args : ['check_enabled'])
    test('guard_cf-normal_icall', guard_cf, args : ['normal_icall'])
    test('guard_cf-invalid_icall', guard_cf, args : ['invalid_icall'], should_fail: true)
    test('guard_cf-invalid_icall_nocf', guard_cf, args : ['invalid_icall_nocf'])

    guard_cf_nochecks = executable('guard_cf_nochecks', 'cfguard-test.c', c_args: ['-mguard=cf-nochecks'], link_args: ['-Wl,-Xlink,-guard:cf'])
    test('guard_cf_nochecks-check_enabled', guard_cf_nochecks, args : ['check_enabled'])
    test('guard_cf_nochecks-normal_icall', guard_cf_nochecks, args : ['normal_icall'])
    test('guard_cf_nochecks-invalid_icall', guard_cf_nochecks, args : ['invalid_icall'])
    test('guard_cf_nochecks-invalid_icall_nocf', guard_cf_nochecks, args : ['invalid_icall_nocf'])
endif

subdir('def-undec-stdcall')
subdir('ices')

================================================
FILE: toolchain/meson/tests/openmp_for_if.c
================================================
// [OUTLINE - 1 symbols, 11 lines]
// L5-L11: int main(void)


================================================
FILE: toolchain/meson/tests/pch/pch.hpp
================================================
// [OUTLINE - 0 symbols, 93 lines]
// import <algorithm>
// import <any>
// import <array>
// import <atomic>
// import <barrier>
// import <bit>
// import <bitset>
// import <cassert>
// import <ccomplex>
// import <cctype>
// import <cerrno>
// import <cfenv>
// import <cfloat>
// import <charconv>
// import <chrono>
// import <cinttypes>
// import <ciso646>
// import <climits>
// import <clocale>
// import <cmath>
// import <codecvt>
// import <compare>
// import <complex>
// import <concepts>
// import <condition_variable>
// import <csetjmp>
// import <csignal>
// import <cstdarg>
// import <cstdbool>
// import <cstddef>
// import <cstdint>
// import <cstdio>
// import <cstdlib>
// import <cstring>
// import <ctgmath>
// import <ctime>
// import <cwchar>
// import <cwctype>
// import <deque>
// import <exception>
// import <filesystem>
// import <forward_list>
// import <fstream>
// import <functional>
// import <future>
// import <initializer_list>
// import <iomanip>
// import <ios>
// import <iosfwd>
// import <iostream>
// import <istream>
// import <iterator>
// import <latch>
// import <limits>
// import <list>
// import <locale>
// import <map>
// import <memory>
// import <mutex>
// import <new>
// import <numbers>
// import <numeric>
// import <optional>
// import <ostream>
// import <queue>
// import <random>
// import <ranges>
// import <ratio>
// import <regex>
// import <scoped_allocator>
// import <semaphore>
// import <set>
// import <shared_mutex>
// import <span>
// import <sstream>
// import <stack>
// import <stdexcept>
// import <streambuf>
// import <string_view>
// import <string>
// import <system_error>
// import <thread>
// import <tuple>
// import <type_traits>
// import <typeindex>
// import <typeinfo>
// import <unordered_map>
// import <unordered_set>
// import <utility>
// import <valarray>
// import <variant>
// import <vector>
// import <version>


================================================
FILE: toolchain/meson/tests/pch.cpp
================================================
// [OUTLINE - 1 symbols, 8 lines]
// L4-L8: int main (void)


================================================
FILE: toolchain/meson/tests/pformat_wputchars.c
================================================
// [OUTLINE - 1 symbols, 11 lines]
// import <stdio.h>
// import <string.h>
// L5-L11: int main(void)


================================================
FILE: toolchain/meson/tests/posix_sem.c
================================================
// [OUTLINE - 2 symbols, 27 lines]
// import <pthread.h>
// import <semaphore.h>
// L10-L15: void *thread(void* arg __attribute__((unused)))
// L17-L27: int main(void)


================================================
FILE: toolchain/meson/tests/posix_sem_named.c
================================================
// [OUTLINE - 2 symbols, 47 lines]
// import <fcntl.h>
// import <semaphore.h>
// import <errno.h>
// import <string.h>
// import <stdio.h>
// L11-L36: int main(void)
// L42-L45: int main(void)


================================================
FILE: toolchain/meson/tests/posix_shm.c
================================================
// [OUTLINE - 2 symbols, 48 lines]
// import <stdio.h>
// import <string.h>
// import <fcntl.h>
// import <errno.h>
// import <sys/mman.h>
// import <unistd.h>
// L11-L37: int main(void)
// L43-L46: int main(void)


================================================
FILE: toolchain/meson/tests/pow.c
================================================
// [OUTLINE - 1 symbols, 17 lines]
// import <math.h>
// import <inttypes.h>
// L9-L17: int


================================================
FILE: toolchain/meson/tests/printf_format.c
================================================
// [OUTLINE - 1 symbols, 12 lines]
// import <stdio.h>
// import <stdint.h>
// L6-L12: int main(void)


================================================
FILE: toolchain/meson/tests/quick_exit.cpp
================================================
// [OUTLINE - 1 symbols, 14 lines]
// import <process.h>
// import <cstdlib>
// L8-L14: int main()


================================================
FILE: toolchain/meson/tests/snprintf_redef.c
================================================
// [OUTLINE - 1 symbols, 9 lines]
// import <stdio.h>
// L7-L9: int main (void)


================================================
FILE: toolchain/meson/tests/stackprotector_custom.c
================================================
// [OUTLINE - 3 symbols, 23 lines]
// import <string.h>
// import <stdlib.h>
// import <stdio.h>
// L8-L11: void __stack_chk_fail(void)
// L13-L16: void get_input(char *data)
// L18-L23: int main(void)


================================================
FILE: toolchain/meson/tests/stpcpy_fortify.c
================================================
// [OUTLINE - 3 symbols, 26 lines]
// import <string.h>
// L11-L15: char *stpcpy(char *_Dest, const char *_Source)
// L18-L22: int func(const char* src)
// L24-L26: int main(void)


================================================
FILE: toolchain/meson/tests/tls_destructor_order.cpp
================================================
// [OUTLINE - 5 symbols, 25 lines]
// import <cstdlib>
// L8-L14: struct Global
// L9-L13: ~Global()
// L17-L19: struct ThreadLocal
// L18: ~ThreadLocal()
// L21-L25: int main(void)


================================================
FILE: toolchain/meson/tests/undef_memrchr.c
================================================
// [OUTLINE - 1 symbols, 8 lines]
// import <string.h>
// L6-L8: int main(int argc, char **argv)


================================================
FILE: toolchain/meson/tests/wcstok_nonconform.c
================================================
// [OUTLINE - 1 symbols, 22 lines]
// import <wchar.h>
// L6-L22: int main(void)


================================================
FILE: toolchain/meson/tests/wildcard.c
================================================
// [OUTLINE - 1 symbols, 22 lines]
// import <string.h>
// L15-L22: int main(int argc, char *argv[])


================================================
FILE: toolchain/meson/tests/windres.c
================================================
// [OUTLINE - 1 symbols, 3 lines]
// L1-L3: int main(void)


================================================
FILE: toolchain/meson/tests/windres.rc
================================================
#include <winver.h>

VS_VERSION_INFO VERSIONINFO
  FILEVERSION 2,73,0,0
  PRODUCTVERSION 2,73,0,0
  FILEFLAGSMASK 0
  FILEFLAGS 0
  FILEOS VOS__WINDOWS32
  FILETYPE VFT_APP
  FILESUBTYPE VFT2_UNKNOWN
  BEGIN
    BLOCK "StringFileInfo"
    BEGIN
      BLOCK "040904B0"
      BEGIN
	VALUE "CompanyName", "Some Company"
	VALUE "FileDescription", "windres"
	VALUE "FileVersion", "2.73.0.0"
	VALUE "InternalName", "windres"
	VALUE "LegalCopyright", "Copyright 2000"
	VALUE "OriginalFilename", "windres.exe"
	VALUE "ProductName", "Windres"
	VALUE "ProductVersion", "2.73.0"
      END
    END
    BLOCK "VarFileInfo"
    BEGIN
      VALUE "Translation", 0x409, 1200
    END
  END


================================================
FILE: toolchain/meson/x86_64-w64-mingw32.txt
================================================
[binaries]
c = 'x86_64-w64-mingw32-gcc'
cpp = 'x86_64-w64-mingw32-g++'
ar = 'x86_64-w64-mingw32-ar'
strip = 'x86_64-w64-mingw32-strip'
windres = 'x86_64-w64-mingw32-windres'

[host_machine]
system = 'windows'
cpu_family = 'x86_64'
cpu = 'x86_64'
endian = 'little'

[properties]
needs_exe_wrapper = false


================================================
FILE: toolchain/meson/x86_64-w64-mingw32ucrt.txt
================================================
[binaries]
c = 'x86_64-w64-mingw32ucrt-gcc'
cpp = 'x86_64-w64-mingw32ucrt-g++'
ar = 'x86_64-w64-mingw32ucrt-ar'
strip = 'x86_64-w64-mingw32ucrt-strip'
windres = 'x86_64-w64-mingw32ucrt-windres'

[host_machine]
system = 'windows'
cpu_family = 'x86_64'
cpu = 'x86_64'
endian = 'little'

[properties]
needs_exe_wrapper = false


================================================
FILE: toolchain/test.sh
================================================
// [OUTLINE - 0 symbols, 44 lines]


================================================
FILE: tools/asciidoctor.sh
================================================
// [OUTLINE - 0 symbols, 28 lines]


================================================
FILE: tools/git.sh
================================================
// [OUTLINE - 0 symbols, 39 lines]


================================================
FILE: tools/gnupg.sh
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: tools/openssh.sh
================================================
// [OUTLINE - 0 symbols, 5 lines]


================================================
FILE: tools/patch.sh
================================================
// [OUTLINE - 21 symbols, 280 lines]
// L40-L44: new_case()
// L46-L56: write_patch_from_eol_fixtures()
// L58-L71: write_patch_converted_to_crlf()
// L73-L77: run_patch()
// L79-L89: print_case_output()
// L91-L96: assert_bytes()
// L98-L104: test_apply_lf_patch_to_lf_file()
// L106-L113: test_apply_lf_patch_to_crlf_file()
// L115-L125: test_apply_lf_patch_to_mixed_eol_file()
// L127-L133: test_apply_crlf_converted_patch_to_lf_file()
// L135-L143: test_apply_crlf_converted_patch_to_crlf_file()
// L145-L155: test_reject_crlf_patch_for_crlf_file()
// L157-L169: test_apply_lf_patch_from_tty()
// L171-L177: test_apply_lf_patch_to_lf_file_in_binary_mode()
// L179-L188: test_reject_lf_patch_for_crlf_file_in_binary_mode()
// L190-L199: test_apply_lf_patch_to_mixed_eol_file_in_binary_mode()
// L201-L210: test_reject_crlf_converted_patch_for_lf_file_in_binary_mode()
// L212-L218: test_apply_crlf_converted_patch_to_crlf_file_in_binary_mode()
// L220-L226: test_apply_crlf_patch_to_crlf_file_in_binary_mode()
// L228-L241: test_apply_lf_patch_from_tty_in_binary_mode()
// L243-L257: run_test()


================================================
FILE: tools/shells.sh
================================================
// [OUTLINE - 0 symbols, 13 lines]


================================================
FILE: tools/test.sh
================================================
// [OUTLINE - 0 symbols, 23 lines]


