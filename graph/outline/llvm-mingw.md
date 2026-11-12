# Codebase Digest: llvm-mingw

- Files analyzed: 84
- Total lines: 1348
- Total size: 49.6 KB
- Git branch: `master`
- Git HEAD commit: `70bc9a60 (build-llvm: Bump to LLVM 23.1.5)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
llvm-mingw/
├── Dockerfile (1 lines, 35 B, ~11 tokens)
├── Dockerfile.cross (80 lines, 2.6 KB, ~740 tokens)
├── Dockerfile.dev (155 lines, 5.3 KB, ~1.5k tokens)
├── Dockerfile.system-clang (42 lines, 1.4 KB, ~412 tokens)
├── Dockerfile.toolchain (31 lines, 1.2 KB, ~332 tokens)
├── LICENSE.txt (21 lines, 1.1 KB, ~255 tokens)
├── README.md (181 lines, 8.8 KB, ~2.3k tokens)
├── build-all.sh (1 lines, 36 B, ~11 tokens)
├── build-busybox.sh (1 lines, 35 B, ~11 tokens)
├── build-compiler-rt.sh (1 lines, 36 B, ~11 tokens)
├── build-cross-tools.sh (1 lines, 36 B, ~11 tokens)
├── build-libcxx.sh (1 lines, 36 B, ~11 tokens)
├── build-lldb-mi.sh (1 lines, 36 B, ~11 tokens)
├── build-llvm.sh (1 lines, 36 B, ~11 tokens)
├── build-make.sh (2 lines, 58 B, ~19 tokens)
├── build-mingw-w64-libraries.sh (1 lines, 35 B, ~11 tokens)
├── build-mingw-w64-tools.sh (1 lines, 36 B, ~11 tokens)
├── build-mingw-w64.sh (1 lines, 36 B, ~11 tokens)
├── build-openmp.sh (1 lines, 36 B, ~11 tokens)
├── build-python.sh (1 lines, 36 B, ~11 tokens)
├── copy-msys-dependencies.sh (1 lines, 35 B, ~11 tokens)
├── extract-docker.sh (1 lines, 35 B, ~11 tokens)
├── install-wrappers.sh (1 lines, 36 B, ~11 tokens)
├── pgo-training.make (57 lines, 2.0 KB, ~609 tokens)
├── pgo-training.sh (2 lines, 58 B, ~19 tokens)
├── prepare-cross-toolchain-unix.sh (1 lines, 35 B, ~11 tokens)
├── prepare-cross-toolchain.sh (1 lines, 35 B, ~11 tokens)
├── release-macos.sh (1 lines, 35 B, ~11 tokens)
├── release.sh (2 lines, 57 B, ~18 tokens)
├── run-lldb-tests.sh (1 lines, 36 B, ~11 tokens)
├── run-tests.sh (2 lines, 62 B, ~19 tokens)
├── strip-llvm.sh (1 lines, 36 B, ~11 tokens)
├── test/
│   ├── Makefile (401 lines, 14.2 KB, ~4.2k tokens)
│   ├── atomic-helpers.c (6 lines, 177 B, ~57 tokens)
│   ├── atomic-load-sizes.cpp (8 lines, 177 B, ~58 tokens)
│   ├── atomic-load-store.c (6 lines, 165 B, ~55 tokens)
│   ├── autoimport-lib.c (6 lines, 208 B, ~66 tokens)
│   ├── autoimport-lib.h (1 lines, 35 B, ~11 tokens)
│   ├── autoimport-main.c (3 lines, 109 B, ~35 tokens)
│   ├── bufferoverflow.c (6 lines, 189 B, ~60 tokens)
│   ├── cfguard-test.c (10 lines, 365 B, ~112 tokens)
│   ├── crt-test.c (47 lines, 2.1 KB, ~615 tokens)
│   ├── exception-catch-ptr-ref.cpp (4 lines, 121 B, ~40 tokens)
│   ├── exception-locale.cpp (4 lines, 122 B, ~39 tokens)
│   ├── exception-reduced.cpp (9 lines, 212 B, ~75 tokens)
│   ├── global-terminate.cpp (6 lines, 167 B, ~55 tokens)
│   ├── hello-cpp.cpp (8 lines, 303 B, ~93 tokens)
│   ├── hello-exception.cpp (12 lines, 341 B, ~110 tokens)
│   ├── hello-omp.c (4 lines, 118 B, ~40 tokens)
│   ├── hello-res-rc.rc (23 lines, 887 B, ~219 tokens)
│   ├── hello-res.c (5 lines, 146 B, ~49 tokens)
│   ├── hello-res.h (1 lines, 35 B, ~11 tokens)
│   ├── hello-tls.c (7 lines, 225 B, ~71 tokens)
│   ├── hello.c (3 lines, 100 B, ~33 tokens)
│   ├── idltest.c (5 lines, 147 B, ~48 tokens)
│   ├── idltest.idl (29 lines, 1.1 KB, ~275 tokens)
│   ├── longjmp-cleanup.cpp (8 lines, 255 B, ~83 tokens)
│   ├── setjmp.c (7 lines, 196 B, ~66 tokens)
│   ├── stacksmash.c (4 lines, 138 B, ~45 tokens)
│   ├── tchar.c (4 lines, 123 B, ~41 tokens)
│   ├── test-scan-deps.cpp (7 lines, 260 B, ~71 tokens)
│   ├── throwcatch-lib.cpp (4 lines, 120 B, ~38 tokens)
│   ├── throwcatch-lib.h (7 lines, 301 B, ~84 tokens)
│   ├── throwcatch-main.cpp (5 lines, 150 B, ~50 tokens)
│   ├── tlstest-lib.cpp (11 lines, 319 B, ~102 tokens)
│   ├── tlstest-main.cpp (12 lines, 361 B, ~116 tokens)
│   ├── ubsan.c (4 lines, 121 B, ~40 tokens)
│   └── uwp-error.c (4 lines, 122 B, ~41 tokens)
├── test-libcxx-module.sh (1 lines, 35 B, ~11 tokens)
└── wrappers/
    ├── aarch64-w64-windows-gnu.cfg (3 lines, 82 B, ~23 tokens)
    ├── arm64ec-w64-windows-gnu.cfg (3 lines, 82 B, ~23 tokens)
    ├── armv7-w64-windows-gnu.cfg (3 lines, 78 B, ~22 tokens)
    ├── busybox-list-applets.c (6 lines, 177 B, ~57 tokens)
    ├── busybox-wrapper.c (3 lines, 112 B, ~36 tokens)
    ├── clang-scan-deps-wrapper.c (3 lines, 114 B, ~36 tokens)
    ├── clang-target-wrapper.c (3 lines, 114 B, ~36 tokens)
    ├── clang-target-wrapper.sh (2 lines, 57 B, ~18 tokens)
    ├── i686-w64-windows-gnu.cfg (3 lines, 78 B, ~22 tokens)
    ├── ld-wrapper.sh (2 lines, 57 B, ~18 tokens)
    ├── llvm-wrapper.c (3 lines, 112 B, ~36 tokens)
    ├── mingw32-common.cfg (4 lines, 68 B, ~22 tokens)
    ├── native-wrapper.h (17 lines, 945 B, ~265 tokens)
    ├── objdump-wrapper.sh (2 lines, 57 B, ~18 tokens)
    └── x86_64-w64-windows-gnu.cfg (3 lines, 80 B, ~23 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
LLVM MinGW
==========

This is a recipe for reproducibly building a
[LLVM](https://llvm.org)/[Clang](https://clang.llvm.org/)/[LLD](https://lld.llvm.org/)
based mingw-w64 toolchain.

Benefits of a LLVM based MinGW toolchain are:
- Support for targeting ARM/ARM64 (while GCC obviously does support
  these architectures, it doesn't support Windows on ARM)
- A single toolchain targeting all four architectures (i686, x86_64,
  armv7 and arm64) instead of separate compiler binaries for each
  architecture
- Support for generating debug info in PDB format
- Support for Address Sanitizer and Undefined Behaviour Sanitizer
- Since LLVM 16: Support for [Control Flow Guard](https://github.com/mstorsjo/llvm-mingw/issues/301)
  (`-mguard=cf` compile and link flags)

Clang on its own can also be used as compiler in the normal GNU binutils
based environments though, so the main difference lies in replacing
binutils with LLVM based tools.

Releases
--------

The [GitHub Releases](https://github.com/mstorsjo/llvm-mingw/releases)
page contains prebuilt toolchains that can be downloaded and installed
by just unpacking them.

They come primarily in two different forms; packages named
`llvm-mingw-<version>-<crt>-ubuntu-<distro_version>-<arch>.tar.xz`
are cross compilers, that can be run on Linux, compiling binaries
for any of the 4 target Windows architectures. Packages named
`llvm-mingw-<version>-<crt>-<arch>.zip` are native toolchains that
run on Windows (with binaries in the specified architecture), but
which all can compile binaries for any of the 4 architectures.

The cross compilers come in versions running on either x86_64 or
aarch64. (They're built on Ubuntu, but hopefully do run on other
contempory distributions as well.)

There are packages with two different choices of CRT (C runtime) - the
primary target is UCRT (the Universal C Runtime). The UCRT
is available preinstalled since Windows 10, but can be
[installed](https://www.microsoft.com/en-us/download/details.aspx?id=50410)
on top of Vista or newer. The other legacy alternative is `msvcrt`,
which produces binaries for (and uses) msvcrt.dll, which is a
built-in component in all versions of Windows. This allows running
directly out of the box on older versions of Windows too, without
ensuring that the UCRT is installed, but msvcrt.dll is generally
less featureful. Address Sanitizer only works properly with UCRT.

In addition to the downloadable toolchain packges, there are also
prebuilt docker linux images containing the llvm-mingw toolchain,
available from [Docker Hub](https://hub.docker.com/r/mstorsjo/llvm-mingw/).

There are also [nightly builds](https://github.com/mstorsjo/llvm-mingw/releases/tag/nightly)
with the very latest versions of LLVM and mingw-w64 from git.

Building from source
--------------------

The toolchain can be compiled for installation in the current Unix
environment, fetching sources as needed:

    ./build-all.sh <target-dir>

It can also be built, reproducibly, into a Docker image:

    docker build .

Individual components of the toolchain can be (re)built by running
the standalone shellscripts listed within `build-all.sh`. However, if
the source already is checked out, no effort is made to check out a
different version (if the build scripts have been updated to prefer
a different version) - and likewise, if configure flags in the build-\*.sh
scripts have changed, you might need to wipe the build directory under
each project for the new configure options to be taken into use.


Building in MSYS2
-----------------

To build in MSYS2, install the following set of packages with `pacman -S --needed`:

    git wget mingw-w64-x86_64-gcc mingw-w64-x86_64-ninja mingw-w64-x86_64-cmake make mingw-w64-x86_64-python3 autoconf libtool


Status
------

The toolchain currently does support both C and C++, including support
for exception handling.


Known issues
------------

LLD, the LLVM linker, is what causes most of the major differences to the
normal GCC/binutils based MinGW.

- As this toolchain uses a different CRT and C++ standard library than
  most mingw toolchains, it is incompatible with object files and
  static libraries built with other toolchains. Mixing DLLs from other
  toolchains is supported, but only as long as CRT resources aren't
  shared across DLL boundaries (no sharing of file handles etc, and memory
  should be freed by the same DLL that allocated it).
- The windres replacement, llvm-rc, isn't very mature and doesn't support
  everything that GNU windres does.
- The toolchain defaults to using the Universal CRT and targeting Windows 7.
  These defaults can be changed in `build-mingw-w64.sh` though. The Universal
  CRT is only available out of the box since Windows 10, but can be
  [installed](https://www.microsoft.com/en-us/download/details.aspx?id=50410)
  on Vista or newer. For x86, there are also releases that run on
  msvcrt.dll.
- The toolchain uses Windows native TLS support, which doesn't work properly
  until Windows Vista. This has no effect on code not using thread local
  variables.
- The runtime libraries libunwind, libcxxabi and libcxx also assume that the
  target is Windows 7 or newer.
- Address sanitizer is only supported on x86.
- LLD doesn't support linker script (in the COFF part of LLD). Linker script can be used for
  reprogramming how the linker lays out the output, but is in most cases
  in MinGW setups only used for passing lists of object files to link.
  Passing lists of files can also be done with response files, which LLD does support.
  (This was fixed in qmake in [v5.12.0](https://code.qt.io/cgit/qt/qtbase.git/commit/?id=d92c25b1b4ac0423a824715a08b2db2def4b6e25), to use response
  files instead of linker script.)
- Libtool based projects fail to link with llvm-mingw if the project contains
  C++. (This often manifests with undefined symbols like `___chkstk_ms`,
  `__alloca` or `___divdi3`.)
  For such targets, libtool tries to detect which libraries to link
  by invoking the compiler with `$CC -v` and picking up the libraries that
  are linked by default, and then invoking the linker driver with `-nostdlib`
  and specifying the default libraries manually. In doing so, libtool fails
  to detect when clang is using compiler_rt instead of libgcc, because
  clang refers to it as an absolute path to a static library, instead of
  specifying a library path with `-L` and linking the library with `-l`.
  Clang is [reluctant to changing this behaviour](https://reviews.llvm.org/D51440).
  A [bug](https://debbugs.gnu.org/cgi/bugreport.cgi?bug=27866) has been filed
  with libtool, but no fix has been committed, and as libtool files are
  shipped with the projects that use them (bundled within the configure
  script), one has to update the configure script in each project to avoid
  the issue. This can either be done by installing libtool, patching it
  and running `autoreconf -fi` in the project, or by manually applying the
  fix on the shipped `configure` script. A patched version of libtool is
  [shipped in MSYS2](https://github.com/msys2/MINGW-packages/blob/95b093e888/mingw-w64-libtool/0011-Pick-up-clang_rt-static-archives-compiler-internal-l.patch)
  at least.
- Libtool, when running on Windows, prefers using linker script over
  response files, to pass long lists of object files to the linker driver,
  but LLD doesn't support linker script (as described above). This issue
  produces errors like `lld-link: error: .libs\libfoobar.la.lnkscript: unknown file type`.
  To fix this, the bundled libtool scripts has to be fixed like explained
  above, but this fix requires changes both to `configure` and a separate
  file named `ltmain.{in,sh}`. A fix for this is also
  [shipped in MSYS2](https://github.com/msys2/MINGW-packages/blob/95b093e888/mingw-w64-libtool/0012-Prefer-response-files-over-linker-scripts-for-mingw-.patch).

Additionally, one may run into other minor differences between GCC and clang.

PDB support
-----------

LLVM does [support](http://blog.llvm.org/2017/08/llvm-on-windows-now-supports-pdb-debug.html)
generating debug info in the PDB format. Since GNU binutils based mingw
environments don't support this, there's no predecent for what command
line parameters to use for this, and llvm-mingw produces debug info in
DWARF format by default.

To produce debug info in PDB format, you currently need to do the following
changes:

- Add `-gcodeview` to the compilation commands (e.g. in
  `wrappers/clang-target-wrapper.sh`), together with using `-g` as usual to
  enable debug info in general.
- Add `-Wl,--pdb=` to linking commands. This creates a PDB file at the same
  location as the output EXE/DLL, but with a PDB extension. (By passing
  `-Wl,--pdb=module.pdb` one can explicitly specify the name of the output
  PDB file.)

Even though LLVM supports this, there are some caveats with using it when
building in MinGW mode; Microsoft debuggers might have assumptions about
the C++ ABI used, which doesn't hold up with the Itanium ABI used in MinGW.


================================================
FILE: Dockerfile
================================================
// [OUTLINE - 0 symbols, 41 lines]


================================================
FILE: Dockerfile.cross
================================================
# Cross compile an llvm-mingw toolchain for windows.
#
# This needs to be built with --build-arg BASE=<image>, where image is the name
# of a docker image that contains a working llvm-mingw cross compiler
# from a similar enough version.
#
# This builds LLVM and all other build tools that need to run on the target
# platform, but just copies over the runtime libraries from the existing
# toolchain in the base docker image.

ARG BASE=mstorsjo/llvm-mingw:dev
FROM $BASE

RUN apt-get update -qq && \
    apt-get install -qqy libltdl-dev swig autoconf-archive && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

COPY build-python.sh .

ARG WITH_PYTHON

RUN if [ -n "$WITH_PYTHON" ]; then \
        ./build-python.sh /opt/python; \
    fi

ENV PATH=/opt/python/bin:$PATH

ARG CROSS_ARCH=x86_64
ENV CROSS_TOOLCHAIN_PREFIX=/opt/llvm-mingw-$CROSS_ARCH

ENV HOST=$CROSS_ARCH-w64-mingw32

RUN if [ -n "$WITH_PYTHON" ]; then \
        ./build-python.sh $CROSS_TOOLCHAIN_PREFIX/python --host=$HOST && \
        mkdir -p $CROSS_TOOLCHAIN_PREFIX/bin && \
        cp $CROSS_TOOLCHAIN_PREFIX/python/bin/*.dll $CROSS_TOOLCHAIN_PREFIX/bin; \
    fi

ARG FULL_LLVM

COPY build-llvm.sh .
RUN if [ -n "$WITH_PYTHON" ]; then ARG="--with-python"; fi && \
    ./build-llvm.sh $CROSS_TOOLCHAIN_PREFIX --host=$HOST $ARG

COPY build-lldb-mi.sh .
RUN ./build-lldb-mi.sh $CROSS_TOOLCHAIN_PREFIX --host=$HOST

COPY strip-llvm.sh .
RUN ./strip-llvm.sh $CROSS_TOOLCHAIN_PREFIX --host=$HOST

ARG TOOLCHAIN_ARCHS="i686 x86_64 armv7 aarch64 arm64ec"

COPY build-mingw-w64.sh build-mingw-w64-tools.sh ./
RUN ./build-mingw-w64-tools.sh $CROSS_TOOLCHAIN_PREFIX --skip-include-triplet-prefix --host=$HOST

COPY wrappers/*.sh wrappers/*.c wrappers/*.h wrappers/*.cfg ./wrappers/
COPY install-wrappers.sh .
RUN ./install-wrappers.sh $CROSS_TOOLCHAIN_PREFIX --host=$HOST

COPY prepare-cross-toolchain.sh .
RUN ./prepare-cross-toolchain.sh $TOOLCHAIN_PREFIX $CROSS_TOOLCHAIN_PREFIX $CROSS_ARCH

COPY build-make.sh .
RUN ./build-make.sh $CROSS_TOOLCHAIN_PREFIX --host=$HOST

ARG WITH_BUSYBOX

COPY build-busybox.sh .
RUN if [ -n "$WITH_BUSYBOX" ]; then \
        ./build-busybox.sh $CROSS_TOOLCHAIN_PREFIX/busybox --host=$HOST && \
        cp $CROSS_TOOLCHAIN_PREFIX/bin/mingw32-make.exe $CROSS_TOOLCHAIN_PREFIX/busybox/bin/make.exe && \
        mkdir -p $CROSS_TOOLCHAIN_PREFIX/busybox/share && \
        cp -a $CROSS_TOOLCHAIN_PREFIX/share/make $CROSS_TOOLCHAIN_PREFIX/busybox/share; \
    fi

ARG TAG
RUN ln -s $CROSS_TOOLCHAIN_PREFIX llvm-mingw-$TAG$CROSS_ARCH && \
    zip -9r /llvm-mingw-$TAG$CROSS_ARCH.zip llvm-mingw-$TAG$CROSS_ARCH && \
    ls -lh /llvm-mingw-$TAG$CROSS_ARCH.zip


================================================
FILE: Dockerfile.dev
================================================
FROM ubuntu:24.04

RUN apt-get update -qq && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -qqy --no-install-recommends \
    git wget bzip2 file unzip libtool pkg-config cmake build-essential \
    automake nasm gettext autopoint vim-tiny python3 \
    ninja-build ca-certificates curl less zip && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*


RUN git config --global user.name "LLVM MinGW" && \
    git config --global user.email root@localhost

WORKDIR /build

ENV TOOLCHAIN_PREFIX=/opt/llvm-mingw

ARG FULL_LLVM

# Build LLVM
COPY build-llvm.sh ./
RUN ./build-llvm.sh $TOOLCHAIN_PREFIX

# Build LLDB-MI
COPY build-lldb-mi.sh ./
RUN ./build-lldb-mi.sh $TOOLCHAIN_PREFIX

# Strip the LLVM install output immediately. (This doesn't reduce the
# total docker image size as long as it is in a separate RUN layer though,
# but reduces build times if tweaking the contents of strip-llvm.sh.)
# Most of the size of the docker image comes from the build directory that
# we keep in any case.
COPY strip-llvm.sh ./
RUN ./strip-llvm.sh $TOOLCHAIN_PREFIX

ARG TOOLCHAIN_ARCHS="i686 x86_64 armv7 aarch64 arm64ec"

# Install the usual $TUPLE-clang binaries
COPY wrappers/*.sh wrappers/*.c wrappers/*.h wrappers/*.cfg ./wrappers/
COPY install-wrappers.sh ./
RUN ./install-wrappers.sh $TOOLCHAIN_PREFIX

ARG DEFAULT_CRT=ucrt

ARG CFGUARD_ARGS=--enable-cfguard

# Build MinGW-w64
COPY build-mingw-w64.sh ./
RUN ./build-mingw-w64.sh $TOOLCHAIN_PREFIX --with-default-msvcrt=$DEFAULT_CRT $CFGUARD_ARGS

COPY build-mingw-w64-tools.sh ./
RUN ./build-mingw-w64-tools.sh $TOOLCHAIN_PREFIX

# Build compiler-rt
COPY build-compiler-rt.sh ./
RUN ./build-compiler-rt.sh $TOOLCHAIN_PREFIX $CFGUARD_ARGS

# Build libunwind/libcxxabi/libcxx
COPY build-libcxx.sh ./
RUN ./build-libcxx.sh $TOOLCHAIN_PREFIX $CFGUARD_ARGS

# Build mingw-w64's extra libraries
COPY build-mingw-w64-libraries.sh ./
RUN ./build-mingw-w64-libraries.sh $TOOLCHAIN_PREFIX $CFGUARD_ARGS

# Build C test applications
ENV PATH=$TOOLCHAIN_PREFIX/bin:$PATH

COPY test/*.c test/*.h test/*.idl ./test/
RUN cd test && \
    for arch in $TOOLCHAIN_ARCHS; do \
        mkdir -p $arch && \
        for test in hello hello-tls crt-test setjmp; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe || exit 1; \
        done; \
        for test in autoimport-lib; do \
            $arch-w64-mingw32-clang $test.c -shared -o $arch/$test.dll -Wl,--out-implib,$arch/lib$test.dll.a || exit 1; \
        done; \
        for test in autoimport-main; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe -L$arch -l${test%-main}-lib || exit 1; \
        done; \
        for test in idltest; do \
            # The IDL output isn't arch specific, but test each arch frontend \
            $arch-w64-mingw32-widl $test.idl -h -o $arch/$test.h && \
            $arch-w64-mingw32-clang $test.c -I$arch -o $arch/$test.exe -lole32 || exit 1; \
        done; \
        for test in stacksmash; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe -fstack-protector-strong || exit 1; \
        done; \
        for test in bufferoverflow; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe -D_FORTIFY_SOURCE=2 -O2 || exit 1; \
        done; \
    done

# Build C++ test applications
COPY test/*.cpp ./test/
RUN cd test && \
    for arch in $TOOLCHAIN_ARCHS; do \
        mkdir -p $arch && \
        for test in hello-cpp hello-exception tlstest-main exception-locale exception-reduced global-terminate longjmp-cleanup; do \
            $arch-w64-mingw32-clang++ $test.cpp -o $arch/$test.exe || exit 1; \
        done; \
        for test in hello-exception; do \
            $arch-w64-mingw32-clang++ $test.cpp -static -o $arch/$test-static.exe || exit 1; \
        done; \
        for test in tlstest-lib throwcatch-lib; do \
            $arch-w64-mingw32-clang++ $test.cpp -shared -o $arch/$test.dll -Wl,--out-implib,$arch/lib$test.dll.a || exit 1; \
        done; \
        for test in throwcatch-main; do \
            $arch-w64-mingw32-clang++ $test.cpp -o $arch/$test.exe -L$arch -l${test%-main}-lib || exit 1; \
        done; \
    done

# Build sanitizers. Ubsan includes <typeinfo> from the C++ headers, so
# we need to build this after libcxx.
# $CFGUARD_ARGS is intentionally omitted here.
RUN ./build-compiler-rt.sh $TOOLCHAIN_PREFIX --build-sanitizers

# Sanitizers on windows only support x86.
RUN cd test && \
    for arch in $TOOLCHAIN_ARCHS; do \
        case $arch in \
        i686|x86_64) \
            ;; \
        *) \
            continue \
            ;; \
        esac && \
        for test in stacksmash; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test-asan.exe -fsanitize=address -g -gcodeview -Wl,--pdb= || exit 1; \
        done; \
        for test in ubsan; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe -fsanitize=undefined -fno-sanitize-recover=all || exit 1; \
        done; \
    done

# Build OpenMP
COPY build-openmp.sh ./
RUN ./build-openmp.sh $TOOLCHAIN_PREFIX $CFGUARD_ARGS

RUN cd test && \
    for arch in $TOOLCHAIN_ARCHS; do \
        for test in hello-omp; do \
            $arch-w64-mingw32-clang $test.c -o $arch/$test.exe -fopenmp=libomp || exit 1; \
        done; \
    done

RUN cd test && \
    for arch in $TOOLCHAIN_ARCHS; do \
        case $arch in \
        arm64ec) continue ;; \
        esac; \
        cp $TOOLCHAIN_PREFIX/$arch-w64-mingw32/bin/*.dll $arch || exit 1; \
    done


================================================
FILE: Dockerfile.system-clang
================================================
FROM ubuntu:24.04

RUN apt-get update -qq && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -qqy --no-install-recommends \
    git wget bzip2 file unzip libtool pkg-config cmake build-essential \
    automake nasm gettext autopoint vim-tiny python3 \
    ninja-build ca-certificates curl less zip && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

# Separate step for system-clang; the RUN line above is similar to other dockerfiles.
RUN apt-get update -qq && \
    apt-get install -qqy clang-20 lld-20 llvm-20 && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*


RUN git config --global user.name "LLVM MinGW" && \
    git config --global user.email root@localhost

WORKDIR /build

ENV TOOLCHAIN_PREFIX=/opt/llvm-mingw

# arm64ec requires Clang/LLD 21
ARG TOOLCHAIN_ARCHS="i686 x86_64 armv7 aarch64"

ARG DEFAULT_CRT=ucrt

ARG CFGUARD_ARGS=--enable-cfguard

COPY build-all.sh build-llvm.sh install-wrappers.sh build-mingw-w64.sh build-mingw-w64-tools.sh build-compiler-rt.sh build-libcxx.sh build-mingw-w64-libraries.sh build-openmp.sh ./
COPY wrappers/*.sh wrappers/*.c wrappers/*.h wrappers/*.cfg ./wrappers/
RUN ./build-all.sh $TOOLCHAIN_PREFIX --host-clang=clang-20 && \
    rm -rf /build/*

ENV PATH=$TOOLCHAIN_PREFIX/bin:$PATH

# Test the installation
COPY test/*.c test/*.cpp test/*.h test/*.idl test/*.rc test/Makefile ./test/
COPY run-tests.sh ./
RUN ./run-tests.sh $TOOLCHAIN_PREFIX


================================================
FILE: Dockerfile.toolchain
================================================
FROM ubuntu:24.04

RUN apt-get update -qq && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -qqy --no-install-recommends \
    git wget bzip2 file unzip libtool pkg-config cmake build-essential \
    automake nasm gettext autopoint vim-tiny python3 \
    ninja-build ca-certificates curl less zip && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*


RUN git config --global user.name "LLVM MinGW" && \
    git config --global user.email root@localhost

WORKDIR /build

ENV TOOLCHAIN_PREFIX=/opt/llvm-mingw

ARG TOOLCHAIN_ARCHS="i686 x86_64 armv7 aarch64 arm64ec"

# Copy prebuilt toolchains for the current architecture.
# Test executing a binary, to make sure that it works (i.e. it is not built
# requiring a newer version of glibc or libstdc++ than what is available in
# this container).
RUN --mount=type=bind,source=toolchain,target=/toolchain \
    mkdir -p $TOOLCHAIN_PREFIX && ARCH=$(uname -m) && \
    tar xf /toolchain/linux-ucrt-$ARCH-toolchain/llvm-mingw-*-$ARCH.tar.xz --strip-components 1 -C $TOOLCHAIN_PREFIX && \
    ANY_ARCH=$(echo $TOOLCHAIN_ARCHS | awk '{print $1}') && \
    $TOOLCHAIN_PREFIX/bin/$ANY_ARCH-w64-mingw32-clang --version

ENV PATH=$TOOLCHAIN_PREFIX/bin:$PATH


================================================
FILE: LICENSE.txt
================================================
The llvm-mingw project (the scripts for building and assembling a
toolchain, wrappers for executing tools and testcases) is licensed under
the ISC license.

This license only covers the components provided by llvm-mingw directly.
The final built toolchain is covered by the licenses of the individual
external projects, primarily LLVM's Apache 2 license with LLVM exceptions.

The ISC license:

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


================================================
FILE: build-all.sh
================================================
// [OUTLINE - 0 symbols, 241 lines]


================================================
FILE: build-busybox.sh
================================================
// [OUTLINE - 0 symbols, 96 lines]


================================================
FILE: build-compiler-rt.sh
================================================
// [OUTLINE - 0 symbols, 220 lines]


================================================
FILE: build-cross-tools.sh
================================================
// [OUTLINE - 0 symbols, 119 lines]


================================================
FILE: build-libcxx.sh
================================================
// [OUTLINE - 0 symbols, 143 lines]


================================================
FILE: build-lldb-mi.sh
================================================
// [OUTLINE - 0 symbols, 169 lines]


================================================
FILE: build-llvm.sh
================================================
// [OUTLINE - 0 symbols, 424 lines]


================================================
FILE: build-make.sh
================================================
// [OUTLINE - 1 symbols, 75 lines]
// L46-L52: download()


================================================
FILE: build-mingw-w64-libraries.sh
================================================
// [OUTLINE - 0 symbols, 95 lines]


================================================
FILE: build-mingw-w64-tools.sh
================================================
// [OUTLINE - 0 symbols, 156 lines]


================================================
FILE: build-mingw-w64.sh
================================================
// [OUTLINE - 0 symbols, 173 lines]


================================================
FILE: build-openmp.sh
================================================
// [OUTLINE - 0 symbols, 117 lines]


================================================
FILE: build-python.sh
================================================
// [OUTLINE - 0 symbols, 173 lines]


================================================
FILE: copy-msys-dependencies.sh
================================================
// [OUTLINE - 0 symbols, 46 lines]


================================================
FILE: extract-docker.sh
================================================
// [OUTLINE - 0 symbols, 30 lines]


================================================
FILE: install-wrappers.sh
================================================
// [OUTLINE - 0 symbols, 209 lines]


================================================
FILE: pgo-training.make
================================================
#!/bin/sh
#
# Copyright (c) 2025 Martin Storsjo
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

CFLAGS = --sysroot=$(STAGE1) -resource-dir=$(shell $(STAGE1)/bin/clang --print-resource-dir) --config-user-dir=$(STAGE1)/bin
CC = $(PREFIX)/bin/clang
CXX = $(PREFIX)/bin/clang++

hello-exception-opt-%.exe: test/hello-exception.cpp
	$(CXX) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@ -O3

hello-exception-%.exe: test/hello-exception.cpp
	$(CXX) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@

sqlite-opt-%.exe: $(SQLITE)/sqlite3.c $(SQLITE)/shell.c
	$(CC) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@ -O3

sqlite-%.exe: $(SQLITE)/sqlite3.c $(SQLITE)/shell.c
	$(CC) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@

LIBCXXTEST = llvm-project/libcxx/test/std/algorithms/alg.sorting/alg.sort/sort/sort.pass.cpp

libcxxtest-opt-%.exe: $(LIBCXXTEST)
	$(CXX) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@ -Illvm-project/libcxx/test/support -O3

libcxxtest-%.exe: $(LIBCXXTEST)
	$(CXX) -target $*-w64-mingw32 $(CFLAGS) $+ -o $@ -Illvm-project/libcxx/test/support

ARCHS ?= i686 x86_64 armv7 aarch64 arm64ec

TARGETS = hello-exception hello-exception-opt

ifneq ($(SQLITE),)
TARGETS += sqlite sqlite-opt
endif
ifneq ($(wildcard $(LIBCXXTEST)),)
TARGETS += libcxxtest libcxxtest-opt
endif

ALLTARGETS = $(foreach arch, $(ARCHS), $(foreach target, $(TARGETS), $(target)-$(arch).exe))

all: $(ALLTARGETS)

clean:
	rm -f $(ALLTARGETS)


================================================
FILE: pgo-training.sh
================================================
// [OUTLINE - 1 symbols, 78 lines]
// L43-L49: download()


================================================
FILE: prepare-cross-toolchain-unix.sh
================================================
// [OUTLINE - 0 symbols, 64 lines]


================================================
FILE: prepare-cross-toolchain.sh
================================================
// [OUTLINE - 0 symbols, 76 lines]


================================================
FILE: release-macos.sh
================================================
// [OUTLINE - 0 symbols, 44 lines]


================================================
FILE: release.sh
================================================
// [OUTLINE - 1 symbols, 67 lines]
// L41-L45: cleanup()


================================================
FILE: run-lldb-tests.sh
================================================
// [OUTLINE - 0 symbols, 132 lines]


================================================
FILE: run-tests.sh
================================================
// [OUTLINE - 1 symbols, 270 lines]
// L92-L142: set_native()


================================================
FILE: strip-llvm.sh
================================================
// [OUTLINE - 0 symbols, 159 lines]


================================================
FILE: test/Makefile
================================================
#
# Copyright (c) 2022 Martin Storsjo
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

SRC_PATH=$(word 1, $(dir $(MAKEFILE_LIST)))
vpath %.c $(SRC_PATH)
vpath %.cpp $(SRC_PATH)
vpath %.idl $(SRC_PATH)
vpath %.rc $(SRC_PATH)

ifneq ($(filter %-mingw32, $(MAKE_HOST)),)
    NATIVE = 1
endif

ifeq ($(wildcard $(SHELL)),)
    # If $(SHELL) doesn't point at an existing file, we're running as
    # mingw32-make with no sh.exe found, and using cmd.exe as shell.
    # Thus adapt/filter out things that require a POSIX shell, and use
    # cmd.exe builtins.
    CMD = 1
    TOUCH_TARGET =
    RM_F = del
else
    TOUCH_TARGET = @touch $@
    RM_F = rm -f
endif

# Run with TOOLEXT=.exe to run testing with Windows tools, from Linux make
# in WSL.

ifneq ($(ARCH),)
    CROSS = $(ARCH)-w64-mingw32-
    CROSS_UWP = $(ARCH)-w64-mingw32uwp-
endif
CC = $(CROSS)gcc$(TOOLEXT)
CXX = $(CROSS)g++$(TOOLEXT)
WIDL = $(CROSS)widl$(TOOLEXT)
WINDRES = $(CROSS)windres$(TOOLEXT)
CC_UWP = $(CROSS_UWP)clang$(TOOLEXT)

ifneq ($(COPY),)
    COPY_TARGET = $(COPY) $@
    COPY_DEP = $(COPY) $<
else
    COPY_TARGET = @:
    COPY_DEP = @:
endif
ifneq ($(RUN),)
    DO_RUN = $(RUN) # trailing whitespace
else
    DO_RUN = ./
endif

EXEEXT = .exe
DLLEXT = .dll

# Available everywhere by default, but can be skipped by passing HAVE_OPENMP=
HAVE_OPENMP = 1

TESTS_C = hello hello-tls crt-test setjmp
TESTS_C_DLL = autoimport-lib
TESTS_C_LINK_DLL = autoimport-main
TESTS_C_NO_BUILTIN = crt-test
TESTS_C_ANSI_STDIO = crt-test
TESTS_C_AS_CPP = crt-test
TESTS_CPP = hello-cpp global-terminate tlstest-main longjmp-cleanup atomic-load-sizes
TESTS_CPP_EXCEPTIONS = hello-exception exception-locale exception-reduced exception-catch-ptr-ref
TESTS_CPP_STATIC = hello-exception
TESTS_CPP_DLL = tlstest-lib throwcatch-lib
TESTS_CPP_LINK_DLL = throwcatch-main
TESTS_TCHAR = tchar
TESTS_SSP = stacksmash
TESTS_FORTIFY = bufferoverflow crt-test
ifneq ($(HAVE_ASAN),)
    TESTS_ASAN = stacksmash
endif
ifneq ($(HAVE_UBSAN),)
    TESTS_UBSAN = ubsan
endif
ifneq ($(HAVE_OPENMP),)
    TESTS_OMP = hello-omp
endif
TESTS_UWP = uwp-error
TESTS_IDL = idltest
TESTS_RES = hello-res
ifneq ($(HAVE_UWP),)
    TESTS_OTHER_TARGETS = hello hello-tls
endif
ifneq ($(HAVE_CFGUARD),)
    TESTS_CFGUARD = cfguard-test
    TESTS_ASAN_CFGUARD = $(TESTS_ASAN)
endif
TESTS_ATOMIC = atomic-helpers atomic-load-store

TARGETS_C = $(addsuffix $(EXEEXT), $(TESTS_C))
TARGETS_C_DLL = $(addsuffix $(DLLEXT), $(TESTS_C_DLL))
TARGETS_C_LINK_DLL = $(addsuffix $(EXEEXT), $(TESTS_C_LINK_DLL))
TARGETS_C_NO_BUILTIN = $(addsuffix -no-builtin$(EXEEXT), $(TESTS_C_NO_BUILTIN))
TARGETS_C_ANSI_STDIO = $(addsuffix -ansi-stdio$(EXEEXT), $(TESTS_C_ANSI_STDIO))
TARGETS_C_NOANSI_STDIO = $(addsuffix -noansi-stdio$(EXEEXT), $(TESTS_C_ANSI_STDIO))
TARGETS_C_AS_CPP = $(addsuffix -cpp$(EXEEXT), $(TESTS_C_AS_CPP))
TARGETS_CPP = $(addsuffix $(EXEEXT), $(TESTS_CPP))
TARGETS_CPP_EXCEPTIONS = $(addsuffix $(EXEEXT), $(TESTS_CPP_EXCEPTIONS))
TARGETS_CPP_EXCEPTIONS_OPT = $(addsuffix -opt$(EXEEXT), $(TESTS_CPP_EXCEPTIONS))
TARGETS_CPP_STATIC = $(addsuffix -static$(EXEEXT), $(TESTS_CPP_STATIC))
TARGETS_CPP_DLL = $(addsuffix $(DLLEXT), $(TESTS_CPP_DLL))
TARGETS_CPP_LINK_DLL = $(addsuffix $(EXEEXT), $(TESTS_CPP_LINK_DLL))
TARGETS_TCHAR_NARROW = $(addsuffix -narrow$(EXEEXT), $(TESTS_TCHAR))
TARGETS_TCHAR_UNICODE = $(addsuffix -unicode$(EXEEXT), $(TESTS_TCHAR))
TARGETS_SSP = $(addsuffix $(EXEEXT), $(TESTS_SSP))
TARGETS_CFGUARD = $(addsuffix $(EXEEXT), $(TESTS_CFGUARD))
TARGETS_FORTIFY = $(addsuffix -fortify$(EXEEXT), $(TESTS_FORTIFY))
TARGETS_IDL = $(addsuffix $(EXEEXT), $(TESTS_IDL))
TARGETS_RES = $(addsuffix $(EXEEXT), $(TESTS_RES))
TARGETS_OTHER_TARGETS = $(addsuffix -mingw32uwp$(EXEEXT), $(TESTS_OTHER_TARGETS))
TARGETS_UWP = $(addsuffix -mingw32$(EXEEXT), $(TESTS_UWP))
ifneq ($(HAVE_UWP),)
ifeq ($(CMD),)
    TARGETS_UWP_FAIL = $(addprefix .tested.build., $(addsuffix -mingw32uwp$(EXEEXT), $(TESTS_UWP)))
endif
endif
TARGETS_ASAN = $(addsuffix -asan$(EXEEXT), $(TESTS_ASAN))
TARGETS_UBSAN = $(addsuffix $(EXEEXT), $(TESTS_UBSAN))
TARGETS_ASAN_CFGUARD = $(addsuffix -asan-cfguard$(EXEEXT), $(TESTS_ASAN_CFGUARD))
TARGETS_OMP = $(addsuffix $(EXEEXT), $(TESTS_OMP))
TARGETS_ATOMIC = $(addsuffix $(EXEEXT), $(TESTS_ATOMIC))

TARGETS = \
    $(TARGETS_C) $(TARGETS_C_DLL) $(TARGETS_C_LINK_DLL) $(TARGETS_C_NO_BUILTIN) $(TARGETS_C_ANSI_STDIO) $(TARGETS_C_NOANSI_STDIO) $(TARGETS_C_AS_CPP) \
    $(TARGETS_CPP) $(TARGETS_CPP_EXCEPTIONS) $(TARGETS_CPP_EXCEPTIONS_OPT) $(TARGETS_CPP_STATIC) $(TARGETS_CPP_DLL) $(TARGETS_CPP_LINK_DLL) \
    $(TARGETS_TCHAR_NARROW) $(TARGETS_TCHAR_UNICODE) \
    $(TARGETS_SSP) $(TARGETS_CFGUARD) $(TARGETS_FORTIFY) \
    $(TARGETS_IDL) $(TARGETS_RES) \
    $(TARGETS_OTHER_TARGETS) $(TARGETS_UWP) $(TARGETS_UWP_FAIL) \
    $(TARGETS_ASAN) $(TARGETS_UBSAN) $(TARGETS_ASAN_CFGUARD) \
    $(TARGETS_OMP) $(TARGETS_ATOMIC)

# crt-test-fortify doesn't trigger failures
FAILURE_TESTS = \
    $(TARGETS_SSP) \
    $(filter-out crt-test-fortify$(EXEEXT), $(TARGETS_FORTIFY)) \
    $(TARGETS_ASAN) $(TARGETS_UBSAN) $(TARGETS_ASAN_CFGUARD)

EXTRAFILES = \
     $(addprefix lib, $(addsuffix .dll.a, $(TESTS_C_DLL))) \
     $(addprefix lib, $(addsuffix .dll.a, $(TESTS_CPP_DLL))) \
     $(addsuffix .h, $(TESTS_IDL)) \
     $(addsuffix -rc.o, $(TESTS_RES)) \

all: $(TARGETS)

# A custom dependency outside of the generic patterns
tlstest-main$(EXEEXT): tlstest-lib$(DLLEXT)

$(TARGETS_C): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@

$(TARGETS_C_DLL): %$(DLLEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -shared -o $@ -Wl,--out-implib,lib$*.dll.a
	$(COPY_TARGET)

$(TARGETS_CPP_DLL): %$(DLLEXT): %.cpp
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) $< -shared -o $@ -Wl,--out-implib,lib$*.dll.a
	$(COPY_TARGET)

$(TARGETS_C_NO_BUILTIN): %-no-builtin$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fno-builtin

$(TARGETS_C_ANSI_STDIO): %-ansi-stdio$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -D__USE_MINGW_ANSI_STDIO=1

$(TARGETS_C_NOANSI_STDIO): %-noansi-stdio$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -D__USE_MINGW_ANSI_STDIO=0

$(TARGETS_C_AS_CPP): %-cpp$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) -fno-exceptions -x c++ $< -o $@

$(TARGETS_CPP_EXCEPTIONS_OPT): %-opt$(EXEEXT): %.cpp
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) $< -o $@ -O2

$(TARGETS_CPP) $(TARGETS_CPP_EXCEPTIONS): %$(EXEEXT): %.cpp
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) $< -o $@

$(TARGETS_CPP_STATIC): %-static$(EXEEXT): %.cpp
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) -static $< -o $@

# Build these tests with -D__USE_MINGW_ANSI_STDIO=1 to make sure that tchar
# routines behave as expected even when normally using mingw stdio functions.
$(TARGETS_TCHAR_NARROW): %-narrow$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -D__USE_MINGW_ANSI_STDIO=1

$(TARGETS_TCHAR_UNICODE): %-unicode$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -D__USE_MINGW_ANSI_STDIO=1 -municode

$(TARGETS_SSP): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fstack-protector-strong

$(TARGETS_CFGUARD): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -mguard=cf

$(TARGETS_FORTIFY): %-fortify$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -O2 -D_FORTIFY_SOURCE=2

$(TARGETS_ASAN): %-asan$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fsanitize=address -g

$(TARGETS_UBSAN): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fsanitize=undefined -fno-sanitize-recover=all

# Smoke test ASAN with CFGuard to make sure it doesn't trip.
$(TARGETS_ASAN_CFGUARD): %-asan-cfguard$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fsanitize=address -g -mguard=cf

$(TARGETS_OMP): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -fopenmp=libomp

$(TARGETS_ATOMIC): %$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -Wno-atomic-alignment

%.h: %.idl
	$(WIDL) $< -h -o $@

$(TARGETS_IDL): %$(EXEEXT): %.c %.h
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -I. -lole32

%.o: %.rc
	$(WINDRES) $< $@

$(TARGETS_RES): %$(EXEEXT): %.c %-rc.o
	$(CC) $(CPPFLAGS) $(CFLAGS) $+ -o $@

$(TARGETS_OTHER_TARGETS): %-mingw32uwp$(EXEEXT): %.c
	$(CC_UWP) $(CPPFLAGS) $(CFLAGS) $< -o $@

$(TARGETS_UWP): %-mingw32$(EXEEXT): %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -Wimplicit-function-declaration -Werror

$(TARGETS_UWP_FAIL): .tested.build.%-mingw32uwp$(EXEEXT): %.c
	@echo $(CC_UWP) $(CPPFLAGS) $(CFLAGS) $< -o $@ -Wimplicit-function-declaration -Werror
	@if $(CC_UWP) $(CPPFLAGS) $(CFLAGS) $< -o $@ -Wimplicit-function-declaration -Werror; then echo ERROR: $@ should have failed; rm -f $@; exit 1; else echo OK: UWP build failed intentionally; touch $@; fi

.SECONDEXPANSION:
$(TARGETS_C_LINK_DLL): %$(EXEEXT): %.c $$(subst -main,-lib,$$*)$(DLLEXT)
	$(CC) $(CPPFLAGS) $(CFLAGS) $< -o $@ -L. -l$(subst -main,-lib,$*)

$(TARGETS_CPP_LINK_DLL): %$(EXEEXT): %.cpp $$(subst -main,-lib,$$*)$(DLLEXT)
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) $< -o $@ -L. -l$(subst -main,-lib,$*)

COMPILER_RT_ARCH = $(ARCH)
ifeq ($(ARCH), i686)
    COMPILER_RT_ARCH = i386
endif

RUNTIMES = libc++ libunwind libclang_rt.asan_dynamic-$(COMPILER_RT_ARCH) libomp
ifneq ($(RUNTIMES_SRC),)
LOCAL_RUNTIMES = $(patsubst $(RUNTIMES_SRC)/%, %, $(wildcard $(addprefix $(RUNTIMES_SRC)/, $(addsuffix $(DLLEXT), $(RUNTIMES)))))

$(LOCAL_RUNTIMES): %$(DLLEXT): $(RUNTIMES_SRC)/%$(DLLEXT)
	cp -a $< $@
	$(COPY_TARGET)

all: $(LOCAL_RUNTIMES)
endif

TESTS = $(filter-out %$(DLLEXT), $(TARGETS))
# TARGETS_UWP_FAIL isn't a real executable, but a placeholder file to indicate
# that we tested (and failed) to compile the file.
TESTS := $(filter-out $(TARGETS_UWP_FAIL), $(TESTS))
# TARGETS_IDL is a build-only test.
TESTS := $(filter-out $(TARGETS_IDL), $(TESTS))
ifeq ($(NATIVE),)
    # Only test asan on native Windows, as it doesn't run in Wine.
    TESTS := $(filter-out $(TARGETS_ASAN) $(TARGETS_ASAN_CFGUARD), $(TESTS))
    FAILURE_TESTS := $(filter-out $(TARGETS_ASAN) $(TARGETS_ASAN_CFGUARD), $(FAILURE_TESTS))
endif
TEST_TARGETS = $(addprefix .tested., $(TESTS))

ifneq ($(NATIVE),)
ifeq ($(CMD),)
    # These don't strictly require running native instead of in Wine
    # (except for asan, but that's are already filtered out at this
    # point), but some of the error situations trigger crashes, which
    # might not work robustly on all exotic Wine configurations - thus
    # only run these tests on native Windows.
    # These tests don't support being run in cmd.exe.
    FAILURE_TEST_TARGETS = $(addprefix .failtested., $(FAILURE_TESTS))
    CUSTOM1_FAILURE_TEST_TARGETS = .customtest1.bufferoverflow-fortify$(EXEEXT)
    ifneq ($(HAVE_CFGUARD),)
    ifeq ($(WSL),)
        # These tests do special calling of cmd.exe, which don't quite
        # work when running with Linux make in WSL.
        CUSTOM2_FAILURE_TEST_TARGETS = .customtest2.cfguard-test$(EXEEXT)
    endif
    endif
endif
endif

ALL_TEST_TARGETS = $(TEST_TARGETS) $(FAILURE_TEST_TARGETS) $(CUSTOM1_FAILURE_TEST_TARGETS) $(CUSTOM2_FAILURE_TEST_TARGETS)

COPY_TARGETS = $(patsubst .tested.%, .copied.%, $(TEST_TARGETS))

test: all $(ALL_TEST_TARGETS)

.copied.%: %
	$(COPY_DEP)
	$(TOUCH_TARGET)

$(TEST_TARGETS): .tested.%$(EXEEXT): %$(EXEEXT) .copied.%$(EXEEXT) $(LOCAL_RUNTIMES)
	$(DO_RUN)$<
	$(TOUCH_TARGET)

$(FAILURE_TEST_TARGETS): .failtested.%$(EXEEXT): %$(EXEEXT) .copied.%$(EXEEXT) $(LOCAL_RUNTIMES)
	@echo $(DO_RUN)$< trigger; \
	OUT=log1-$*; \
	if $(DO_RUN)$< trigger > $$OUT 2>&1; then \
		cat $$OUT; \
		rm -f $$OUT; \
		echo ERROR: $< trigger should have failed; \
		exit 1; \
	else \
		ret=$$?; \
		cat $$OUT; \
		echo OK: $< trigger failed expectedly, returned $$ret; \
		case $* in \
		stacksmash-asan|stacksmash-asan-cfguard) \
			grep -q stack-buffer-overflow $$OUT || { echo ERROR: $< missing mention of stack-buffer-overflow; exit 1; }; \
			grep -q "func.*stacksmash.c" $$OUT || { echo ERROR: $< missing source location; exit 1; }; \
			;; \
		ubsan) \
			grep -q "signed integer overflow" $$OUT || { echo ERROR: $< missing mention of signed integer overflow; exit 1; }; \
			;; \
		stacksmash) \
			grep -q "stack smashing detected" $$OUT || { echo ERROR: $< missing mention of stack smashing detected; exit 1; }; \
			;; \
		bufferoverflow-*) \
			grep -q "buffer overflow detected" $$OUT || { echo ERROR: $< missing mention of buffer overflow detected; exit 1; }; \
			;; \
		*) \
			echo Unhandled failure test $*; \
			exit 1; \
			;; \
		esac; \
		rm -f $$OUT || true; \
	fi
	@touch $@

.customtest1.%$(EXEEXT): %$(EXEEXT) .copied.%$(EXEEXT) $(LOCAL_RUNTIMES)
	@i=0; while [ $$i -le 10 ]; do \
		OUT=log2-$*; \
		rm -f $$OUT; \
		echo $(DO_RUN)$< $$i; \
		if $(DO_RUN)$< $$i > $$OUT 2>&1; then \
			cat $$OUT; \
			echo ERROR: $* $$i should have failed; \
			rm -f $$OUT; \
			exit 1; \
		else \
			ret=$$?; \
			cat $$OUT; \
			echo OK: $* $$i failed expectedly, returned $$ret; \
			grep -q "buffer overflow detected" $$OUT || { echo ERROR: $< missing mention of buffer overflow detected; exit 1; }; \
			rm -f $$OUT; \
		fi; \
		i=$$(($$i+1)); \
	done
	@touch $@

# We want to check the exit code to be 0xc0000409 (STATUS_STACK_BUFFER_OVERRUN
# aka fail fast exception). MSYS2 bash does not give us the full 32-bit exit
# code, so we have to rely on cmd.exe to perform the check. (This probably
# doesn't work on Wine, but Wine doesn't support CFG anyway, at least not for
# now...)
.customtest2.%$(EXEEXT): %$(EXEEXT) .copied.%$(EXEEXT) $(LOCAL_RUNTIMES)
	@echo $(DO_RUN)$< check_enabled
	@if $(DO_RUN)$< check_enabled; then \
		echo $(DO_RUN)$< normal_icall; \
		$(DO_RUN)$< normal_icall || exit 1; \
		echo $(DO_RUN)$< invalid_icall_nocf; \
		$(DO_RUN)$< invalid_icall_nocf; \
		[ $$? = 2 ] || exit 1; \
		echo $(DO_RUN)$< invalid_icall; \
		cmd.exe //v:on //c "$< invalid_icall & if !errorlevel! equ -1073740791 (exit 0) else (exit 1)"; \
		[ $$? = 0 ] || exit 1; \
	fi
	@touch $@

clean:
	$(RM_F) $(TARGETS) $(EXTRAFILES) $(ALL_TEST_TARGETS) $(COPY_TARGETS) $(LOCAL_RUNTIMES)

.PHONY: all test clean


================================================
FILE: test/atomic-helpers.c
================================================
// [OUTLINE - 4 symbols, 41 lines]
// import <stdatomic.h>
// L21-L23: struct large
// L25: struct large
// L29-L31: type get(void)
// L37-L41: int main(int argc, char* argv[])


================================================
FILE: test/atomic-load-sizes.cpp
================================================
// [OUTLINE - 2 symbols, 46 lines]
// import <array>
// import <atomic>
// import <cstdint>
// import <iostream>
// import <numeric>
// L28-L41: void f()
// L43-L46: int main()


================================================
FILE: test/atomic-load-store.c
================================================
// [OUTLINE - 1 symbols, 51 lines]
// import <stdatomic.h>
// import <stdint.h>
// import <stdio.h>
// import <string.h>
// L33-L51: int main(int argc, char **argv)


================================================
FILE: test/autoimport-lib.c
================================================
// [OUTLINE - 4 symbols, 39 lines]
// import "autoimport-lib.h"
// L25-L27: int getVar(void)
// L29-L31: void setVar(int val)
// L33-L35: int getArray(int index)
// L37-L39: void setArray(int index, int val)


================================================
FILE: test/autoimport-lib.h
================================================
// [OUTLINE - 0 symbols, 29 lines]


================================================
FILE: test/autoimport-main.c
================================================
// [OUTLINE - 1 symbols, 42 lines]
// import "autoimport-lib.h"
// L25-L42: int main(int argc, char *argv[])


================================================
FILE: test/bufferoverflow.c
================================================
// [OUTLINE - 2 symbols, 126 lines]
// import <stdio.h>
// import <string.h>
// import <stdlib.h>
// L49-L65: static void acceptable_use(void)
// L67-L126: int main(int argc, char *argv[])


================================================
FILE: test/cfguard-test.c
================================================
// [OUTLINE - 6 symbols, 120 lines]
// import <windows.h>
// import <stdlib.h>
// import <stdio.h>
// L26-L51: __attribute__ (( noinline ))
// L53-L56: __attribute__ (( noinline ))
// L58-L61: __attribute__ (( noinline ))
// L63-L66: __attribute__ (( noinline, guard(nocf) ))
// L68-L77: int check_cfguard_status(void)
// L81-L120: int main(int argc, char *argv[])


================================================
FILE: test/crt-test.c
================================================
// [OUTLINE - 34 symbols, 2389 lines]
// import <stdio.h>
// import <math.h>
// import <string.h>
// import <stdlib.h>
// import <fenv.h>
// import <inttypes.h>
// import <stdarg.h>
// import <errno.h>
// import <limits.h>
// import <float.h>
// import <wchar.h>
// import <windows.h>
// L49-L50: static void invalid_parameter(const wchar_t *expression, const wchar_t *function, const wchar_t *file, unsigned int line, uintptr_t pReserved)
// L166-L168: char char_wrap_impl(char c)
// L169-L171: double double_wrap_impl(double f)
// L172-L174: long long_wrap_impl(long l)
// L175-L177: unsigned long ulong_wrap_impl(unsigned long u)
// L178-L180: long long longlong_wrap_impl(long long l)
// L181-L183: unsigned long long ulonglong_wrap_impl(unsigned long long u)
// L184-L186: const char *str_wrap_impl(const char *str)
// L204-L211: int vsscanf_wrap(const char *str, const char *fmt, ...)
// L213-L219: int vswprintf_wrap(wchar_t *buf, size_t n, const wchar_t *fmt, ...)
// L223-L229: int vswprintf_overload_wrap(wchar_t *buf, const wchar_t *fmt, ...)
// L232-L238: int _vscprintf_wrap(const char *fmt, ...)
// L240-L246: int _vswprintf_wrap(wchar_t *buf, const wchar_t *fmt, ...)
// L248-L254: int _vsnwprintf_wrap(wchar_t *buf, size_t n, const wchar_t *fmt, ...)
// L257-L263: int vsnwprintf_wrap(wchar_t *buf, size_t n, const wchar_t *fmt, ...)
// L266-L272: int _vscwprintf_wrap(const wchar_t *fmt, ...)
// L275-L282: double int_to_double(uint64_t i)
// L284-L287: void fill_wchar(wchar_t *buf, wchar_t c, size_t n)
// L291-L654: void test_strings()
// L656-L684: void test_tokenize()
// L686-L771: void test_parse_numbers()
// L773-L796: void test_environment()
// L798-L1036: void test_math_rounding()
// L1038-L1081: void test_math_roots()
// L1083-L1198: void test_math_mod()
// L1200-L1319: void test_math_log_exp()
// L1321-L1422: void test_math_inspect_manipulate()
// L1424-L1468: void test_math_pow()
// L1470-L1599: void test_math_trig()
// L1601-L1686: void test_math_trig_hyp()
// L1688-L1973: void test_math_misc()
// L1975-L2164: void test_compiler_helpers()
// L2166-L2369: void test_win32_intrinsics()
// L2371-L2389: int main(int argc, char *argv[])


================================================
FILE: test/exception-catch-ptr-ref.cpp
================================================
// [OUTLINE - 1 symbols, 36 lines]
// import <stdio.h>
// import <string.h>
// L22-L36: int main(int argc, char* argv[])


================================================
FILE: test/exception-locale.cpp
================================================
// [OUTLINE - 1 symbols, 34 lines]
// import <iostream>
// import <typeinfo>
// L22-L34: int main(int argc, char *argv[])


================================================
FILE: test/exception-reduced.cpp
================================================
// [OUTLINE - 7 symbols, 46 lines]
// import <new>
// L22-L24: struct h
// L25-L27: struct c
// L28-L32: struct as
// L29: as()
// L30: ~as()
// L33-L37: void am(int)
// L38-L46: int main(int argc, char* argv[])


================================================
FILE: test/global-terminate.cpp
================================================
// [OUTLINE - 2 symbols, 31 lines]
// import <exception>
// import <stdio.h>
// import <stdlib.h>
// L23-L26: void whoa()
// L28-L31: int main(int argc, char *argv[])


================================================
FILE: test/hello-cpp.cpp
================================================
// [OUTLINE - 6 symbols, 44 lines]
// import <iostream>
// L21-L29: class Hello
// L23-L25: Hello()
// L26-L28: ~Hello()
// L33-L35: __attribute__((constructor)) static void attr_ctor(void)
// L37-L39: __attribute__((destructor)) static void attr_dtor(void)
// L41-L44: int main(int argc, char* argv[])


================================================
FILE: test/hello-exception.cpp
================================================
// [OUTLINE - 6 symbols, 102 lines]
// import <exception>
// import <stdio.h>
// import <string.h>
// import <thread>
// import <chrono>
// L25-L37: class RecurseClass
// L27-L30: RecurseClass(int v) : val(v)
// L31-L34: ~RecurseClass()
// L44-L45: void done()
// L47-L72: void recurse(int val)
// L74-L102: int main(int argc, char* argv[])


================================================
FILE: test/hello-omp.c
================================================
// [OUTLINE - 1 symbols, 27 lines]
// import <stdio.h>
// import <omp.h>
// L22-L27: int main(int argc, char *argv[])


================================================
FILE: test/hello-res-rc.rc
================================================
/*
 * Copyright (c) 2023 Martin Storsjo
 *
 * This file is part of llvm-mingw.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

#include "hello-res.h"

STRINGTABLE {
    HELLO_STRING "Hello world"
}


================================================
FILE: test/hello-res.c
================================================
// [OUTLINE - 1 symbols, 31 lines]
// import <stdio.h>
// import <windows.h>
// import "hello-res.h"
// L23-L31: int main(int argc, char *argv[])


================================================
FILE: test/hello-res.h
================================================
// [OUTLINE - 0 symbols, 24 lines]


================================================
FILE: test/hello-tls.c
================================================
// [OUTLINE - 2 symbols, 56 lines]
// import <windows.h>
// import <stdio.h>
// import <process.h>
// import <stdint.h>
// L30-L40: static unsigned __stdcall threadfunc(void* arg)
// L42-L56: int main(int argc, char* argv[])


================================================
FILE: test/hello.c
================================================
// [OUTLINE - 1 symbols, 24 lines]
// import <stdio.h>
// L21-L24: int main(int argc, char* argv[])


================================================
FILE: test/idltest.c
================================================
// [OUTLINE - 1 symbols, 35 lines]
// import <windows.h>
// import <initguid.h>
// import "idltest.h"
// L24-L35: int main(int argc, char *argv[])


================================================
FILE: test/idltest.idl
================================================
/*
 * Copyright (c) 2020 Martin Storsjo
 *
 * This file is part of llvm-mingw.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import "unknwn.idl";

[
    uuid(73ad110f-de60-4d7a-899a-58f2afc033a7),
]
interface ITestClass : IUnknown
{
    HRESULT DoSomething([in] ULONG param);
}

cpp_quote("DEFINE_GUID(CLSID_TestClassImplementation, 0x5247bb7c,0x51d6,0x42ce,0xa3,0xd1,0x1c,0xe9,0x65,0xf6,0x93,0x72);")


================================================
FILE: test/longjmp-cleanup.cpp
================================================
// [OUTLINE - 5 symbols, 55 lines]
// import <stdio.h>
// import <setjmp.h>
// L24-L34: class RecurseClass
// L26-L28: RecurseClass(int v) : val(v)
// L29-L31: ~RecurseClass()
// L36-L50: void recurse(int val)
// L52-L55: int main(int argc, char* argv[])


================================================
FILE: test/setjmp.c
================================================
// [OUTLINE - 2 symbols, 64 lines]
// import <stdio.h>
// import <setjmp.h>
// import <stdlib.h>
// import <math.h>
// L26-L35: int fibonacci(int val)
// L39-L64: int main(int argc, char* argv[])


================================================
FILE: test/stacksmash.c
================================================
// [OUTLINE - 2 symbols, 39 lines]
// import <stdio.h>
// L21-L24: __attribute__((noinline))
// L26-L39: int main(int argc, char *argv[])


================================================
FILE: test/tchar.c
================================================
// [OUTLINE - 1 symbols, 49 lines]
// import <stdio.h>
// import <tchar.h>
// L26-L49: int _tmain(int argc, TCHAR* argv[])


================================================
FILE: test/test-scan-deps.cpp
================================================
// [OUTLINE - 0 symbols, 43 lines]
// import <version>
// import <intentionally-missing-header>
// import <intentionally-missing-header>
// import <intentionally-missing-header>
// import <intentionally-missing-header>
// import <intentionally-missing-header>


================================================
FILE: test/throwcatch-lib.cpp
================================================
// [OUTLINE - 1 symbols, 40 lines]
// import "throwcatch-lib.h"
// import <stdio.h>
// L22-L40: void libFunc(int param)


================================================
FILE: test/throwcatch-lib.h
================================================
// [OUTLINE - 4 symbols, 51 lines]
// import <exception>
// import <string>
// L25-L35: class FirstException : public std::exception
// L29-L31: const char *what() const noexcept override
// L37-L47: class SecondException : public std::exception
// L41-L43: const char *what() const noexcept override


================================================
FILE: test/throwcatch-main.cpp
================================================
// [OUTLINE - 1 symbols, 60 lines]
// import "throwcatch-lib.h"
// import <string.h>
// import <stdio.h>
// L23-L60: int main(int argc, char* argv[])


================================================
FILE: test/tlstest-lib.cpp
================================================
// [OUTLINE - 7 symbols, 56 lines]
// import <stdio.h>
// import <windows.h>
// import <stdlib.h>
// L24-L36: class Hello
// L26-L30: Hello(const char* s)
// L31-L33: ~Hello()
// L41-L43: static void lib_atexit(void)
// L45-L50: class SetAtexit
// L47-L49: SetAtexit()
// L52-L56: void __declspec(dllexport) func(void)


================================================
FILE: test/tlstest-main.cpp
================================================
// [OUTLINE - 6 symbols, 116 lines]
// import <windows.h>
// import <process.h>
// import <stdio.h>
// import <stdint.h>
// import <stdlib.h>
// L29-L41: class Hello
// L31-L35: Hello(const char* s)
// L36-L38: ~Hello()
// L43-L58: unsigned __stdcall threadfunc(void *arg)
// L62-L64: static void atexit_func(void)
// L66-L116: int main(int argc, char* argv[])


================================================
FILE: test/ubsan.c
================================================
// [OUTLINE - 1 symbols, 37 lines]
// import <stdio.h>
// import <stdint.h>
// L24-L37: int main(int argc, char *argv[])


================================================
FILE: test/uwp-error.c
================================================
// [OUTLINE - 1 symbols, 26 lines]
// import <windows.h>
// import <stdio.h>
// L22-L26: int main(int argc, char *argv[])


================================================
FILE: test-libcxx-module.sh
================================================
// [OUTLINE - 0 symbols, 46 lines]


================================================
FILE: wrappers/aarch64-w64-windows-gnu.cfg
================================================
-target aarch64-w64-mingw32
@mingw32-common.cfg
# SEH is the default for aarch64.


================================================
FILE: wrappers/arm64ec-w64-windows-gnu.cfg
================================================
-target arm64ec-w64-mingw32
@mingw32-common.cfg
# SEH is the default for arm64ec.


================================================
FILE: wrappers/armv7-w64-windows-gnu.cfg
================================================
-target armv7-w64-mingw32
@mingw32-common.cfg
# SEH is the default for armv7.


================================================
FILE: wrappers/busybox-list-applets.c
================================================
// [OUTLINE - 1 symbols, 35 lines]
// import <stdint.h>
// import "include/applet_tables.h"
// import <stdio.h>
// import <string.h>
// L28-L35: int main(int argc, char **argv)


================================================
FILE: wrappers/busybox-wrapper.c
================================================
// [OUTLINE - 1 symbols, 29 lines]
// import "native-wrapper.h"
// L21-L29: int _tmain(int argc, TCHAR* argv[])


================================================
FILE: wrappers/clang-scan-deps-wrapper.c
================================================
// [OUTLINE - 1 symbols, 109 lines]
// import "native-wrapper.h"
// L28-L109: int _tmain(int argc, TCHAR *argv[])


================================================
FILE: wrappers/clang-target-wrapper.c
================================================
// [OUTLINE - 1 symbols, 108 lines]
// import "native-wrapper.h"
// L28-L108: int _tmain(int argc, TCHAR* argv[])


================================================
FILE: wrappers/clang-target-wrapper.sh
================================================
// [OUTLINE - 1 symbols, 98 lines]
// L17-L25: get_dir()


================================================
FILE: wrappers/i686-w64-windows-gnu.cfg
================================================
-target i686-w64-mingw32
@mingw32-common.cfg
# Dwarf is the default for i686.


================================================
FILE: wrappers/ld-wrapper.sh
================================================
// [OUTLINE - 1 symbols, 51 lines]
// L17-L25: get_dir()


================================================
FILE: wrappers/llvm-wrapper.c
================================================
// [OUTLINE - 1 symbols, 31 lines]
// import "native-wrapper.h"
// L21-L31: int _tmain(int argc, TCHAR* argv[])


================================================
FILE: wrappers/mingw32-common.cfg
================================================
-rtlib=compiler-rt
-unwindlib=libunwind
-stdlib=libc++
-fuse-ld=lld


================================================
FILE: wrappers/native-wrapper.h
================================================
// [OUTLINE - 8 symbols, 259 lines]
// import <stdio.h>
// import <string.h>
// import <stdlib.h>
// import <ctype.h>
// import <tchar.h>
// import <windows.h>
// import <process.h>
// import <unistd.h>
// L61-L90: static inline const TCHAR *escape(const TCHAR *str)
// L94-L111: static TCHAR *make_response_file(const TCHAR **argv)
// L113-L136: static inline int _tspawnvp_escape(int mode, const TCHAR *filename, const TCHAR * const *argv)
// L138-L144: static inline int _tcsicmp(const TCHAR *a, const TCHAR *b)
// L147-L154: static inline TCHAR *concat(const TCHAR *prefix, const TCHAR *suffix)
// L156-L166: static inline TCHAR *_tcsrchrs(const TCHAR *str, TCHAR char1, TCHAR char2)
// L168-L237: static inline void split_argv(const TCHAR *argv0, const TCHAR **dir_ptr, const TCHAR **basename_ptr, const TCHAR **target_ptr, const TCHAR **exe_ptr)
// L239-L259: static inline int run_final(const TCHAR *executable, const TCHAR *const *argv)


================================================
FILE: wrappers/objdump-wrapper.sh
================================================
// [OUTLINE - 1 symbols, 60 lines]
// L17-L25: get_dir()


================================================
FILE: wrappers/x86_64-w64-windows-gnu.cfg
================================================
-target x86_64-w64-mingw32
@mingw32-common.cfg
# SEH is the default for x86_64.


