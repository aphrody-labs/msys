# Codebase Digest: msys2-installer

- Files analyzed: 10
- Total lines: 254
- Total size: 8.7 KB
- Git branch: `main`
- Git HEAD commit: `25bc4905 (CI: move to ubuntu-26.04)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-installer/
├── HACKING.md (15 lines, 703 B, ~192 tokens)
├── LICENSE (26 lines, 1.4 KB, ~337 tokens)
├── README.md (39 lines, 1.2 KB, ~333 tokens)
├── create-release.sh (1 lines, 35 B, ~11 tokens)
├── create-sfx.sh (1 lines, 35 B, ~11 tokens)
├── make-msys2-installer (135 lines, 3.8 KB, ~1.2k tokens)
└── qt-ifw/
    ├── config/
    │   ├── config.xml (21 lines, 974 B, ~230 tokens)
    │   └── control.js (2 lines, 67 B, ~20 tokens)
    └── packages/
        └── com.msys2.root/
            └── meta/
                ├── installscript.js (5 lines, 187 B, ~53 tokens)
                └── package.xml (9 lines, 304 B, ~88 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# MSYS2 Installer

## Nightly build

https://github.com/msys2/msys2-installer/releases/tag/nightly-x86_64

![screenshot](screenshot.png)

## CLI Usage examples

Installing the GUI installer via the CLI to `C:\msys64`:

```powershell
.\msys2-x86_64-latest.exe in --confirm-command --accept-messages --root C:/msys64
```

Uninstalling an existing installation in `C:\msys64` via the CLI:

```powershell
C:\msys64\uninstall.exe pr --confirm-command
```

Installing the self extracting archive to `C:\msys64`:

```powershell
.\msys2-base-x86_64-latest.sfx.exe -y -oC:\
```

## FAQ

### What's the difference between the installer and the archives?

The installer provides some additional features such as installing shortcuts, registering an uninstaller, a GUI for selecting the installation path and automatically running a login shell at the end to initialize the MSYS2 environment.

If you unpack the archives and run a login shell once, you will get a functionally equivalent MSYS2 installation.

### What is contained in the installer/archives?

It contains the [base](https://packages.msys2.org/package/base) package and all its dependencies. You can list the contained packages using: `pactree base -lu | sort`


================================================
FILE: HACKING.md
================================================
## Build Instructions

```bash
# Run in a MINGW64 environment
./make-msys2-installer
```

## New Release TODO List

* Trigger a new nightly build via https://github.com/msys2/msys2-installer/actions/workflows/build.yml or use an existing one
* Run create-release.sh
* Publish the draft release
* Update the download link and checksum for the GiHub action and verify that all tests pass: https://github.com/msys2/setup-msys2/blob/master/main.js
* Run `msys2-devtools/update-installer "$(date -I)"` on the server to copy the release from GitHub
* Update the link, name and checksum on the main website (pointing to GitHub): https://github.com/msys2/msys2.github.io/blob/source/web/index.md


================================================
FILE: LICENSE
================================================
Copyright 2021 MSYS2 devs

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

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
FILE: create-release.sh
================================================
// [OUTLINE - 0 symbols, 47 lines]


================================================
FILE: create-sfx.sh
================================================
// [OUTLINE - 0 symbols, 35 lines]


================================================
FILE: make-msys2-installer
================================================
#!/usr/bin/env bash

set -e

_thisdir="$( cd "$( dirname "$0" )" && pwd )"
_build="${_thisdir}/_build"
_ifwroot="${_build}/qt-ifw"
_date=$(date +'%Y%m%d')
_dateqif=$(date +'%Y-%m-%d')
_version="${_date}"
_newmsysbase="${_build}/newmsys"
_newmsys="${_newmsysbase}/msys64"

if [ "$MSYSTEM" = "CLANGARM64" ]; then
    _arch_name="arm64"
else
    _arch_name="x86_64"
fi

create_installer_archive() {
  echo "[Creating installer archive...]"

  local _data="${_ifwroot}"/packages/com.msys2.root/data
  pushd / > /dev/null
    mkdir -p "${_data}"
    7z a -mx9 -md128m "${_data}/msys64.7z" "${_newmsys}/"*
  popd > /dev/null
}

create_archives() {
  echo "[Creating tarball...]"
  pushd "${_newmsysbase}" > /dev/null
  /usr/bin/tar --transform='s/:/_/g' --dereference --hard-dereference -cf "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar" msys64
  popd > /dev/null

  echo "[Creating xz archive...]"
  xz -9 --keep --verbose --force --compress --threads=0 "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar"
  xz --test "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar.xz"

  echo "[Creating zstd archive...]"
  zstd -T0 -22 --ultra --force "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar" -o "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar.zst"
  zstd --test "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar.zst"

  rm "${_thisdir}/msys2-base-${_arch_name}-${_date}.tar"
}

create_sfx() {
  echo "[Creating SFX...]"

  pushd "${_newmsysbase}" > /dev/null
    "${_thisdir}/create-sfx.sh" "msys64" "${_thisdir}/msys2-base-${_arch_name}-${_date}.sfx.exe"
  popd > /dev/null
}

copy_installer() {
  echo "[Copying installer...]"
  rm -Rf "${_ifwroot}" && cp -r "${_thisdir}"/qt-ifw "${_ifwroot}"

  find "${_ifwroot}" \( -name "package.xml" -or -name "config.xml" \) -exec sed -i "s|@DATE@|${_dateqif}|g" "{}" \;
  find "${_ifwroot}" \( -name "package.xml" -or -name "config.xml" \) -exec sed -i "s|@VERSION@|${_version}|g" "{}" \;
}

create_installer() {
  echo "[Creating installer...]"

  pushd "${_build}" > /dev/null
    binarycreator \
      -t "$(command -v installerbase)" \
      -p "${_ifwroot}/packages" \
      -c "${_ifwroot}/config/config.xml" \
      --offline-only \
      "${_thisdir}/msys2-${_arch_name}-${_date}.exe" \
      -v
  popd > /dev/null
}

dynamicbase_hack() {
  local _runtime="${_newmsys}/usr/bin/msys-2.0.dll"
  local _host_hash _target_hash

  _host_hash=$(sha256sum < /usr/bin/msys-2.0.dll)
  _target_hash=$(sha256sum < "${_runtime}")
  if [ "${_host_hash}" != "${_target_hash}" ]; then
    echo "Host and target MSYS2 runtimes differ; cannot hardlink them." >&2
    return 1
  fi

  # Work around cross-installation ASLR failures by sharing the host DLL.
  ln /usr/bin/msys-2.0.dll "${_runtime}.tmp"
  mv -f "${_runtime}.tmp" "${_runtime}"

  "$@"

  # Restore an independent DLL before archiving the target installation.
  cp "${_runtime}" "${_runtime}.tmp"
  mv -f "${_runtime}.tmp" "${_runtime}"
}

create_chroot_system() {
  echo "[Creating chroot system...]"
  rm -Rf "${_newmsysbase}" && mkdir -p "${_newmsys}"

  pushd "${_newmsys}" > /dev/null
    mkdir -p var/lib/pacman
    mkdir -p var/log
    mkdir -p tmp

    pacman -Syu --root "${_newmsys}"
    pacman -S filesystem msys2-runtime --noconfirm --root "${_newmsys}"
    dynamicbase_hack pacman -S base --noconfirm --root "${_newmsys}"
    pacman -Q --root "${_newmsys}" > "${_thisdir}/msys2-base-${_arch_name}-${_date}.packages.txt"
  popd > /dev/null
}

main() {
  pacman -S --noconfirm --needed \
    "${MINGW_PACKAGE_PREFIX}-qt-installer-framework" \
    "${MINGW_PACKAGE_PREFIX}-7zip" \
    "${MINGW_PACKAGE_PREFIX}-xz" \
    "${MINGW_PACKAGE_PREFIX}-zstd" \
    "tar"

  create_chroot_system

  copy_installer
  create_installer_archive
  create_installer

  if [ "$_arch_name" != "arm64" ]; then
    create_archives
    create_sfx
  fi
}

main

================================================
FILE: qt-ifw/config/config.xml
================================================
<?xml version="1.0" encoding="UTF-8"?>
<Installer>
    <Name>MSYS2</Name>
    <Version>@VERSION@</Version>
    <Title>MSYS2</Title>
    <Publisher>The MSYS2 Developers</Publisher>
    <ControlScript>control.js</ControlScript>
    <StartMenuDir>MSYS2</StartMenuDir>
    <RunProgram>@TargetDir@/ucrt64.exe</RunProgram>
    <RunProgramArguments></RunProgramArguments>
    <InstallerApplicationIcon>msys2</InstallerApplicationIcon>
    <InstallerWindowIcon>msys2.ico</InstallerWindowIcon>
    <InstallActionColumnVisible>false</InstallActionColumnVisible>
    <WizardStyle>Modern</WizardStyle>
    <WizardDefaultWidth>40em</WizardDefaultWidth>
    <MaintenanceToolName>uninstall</MaintenanceToolName>
    <SupportsModify>false</SupportsModify>
    <RepositorySettingsPageVisible>false</RepositorySettingsPageVisible>
    <SaveDefaultRepositories>false</SaveDefaultRepositories>
    <AllowRepositoriesForOfflineInstaller>false</AllowRepositoriesForOfflineInstaller>
</Installer>


================================================
FILE: qt-ifw/config/control.js
================================================
// [OUTLINE - 1 symbols, 20 lines]
// L1-L8: function Controller()


================================================
FILE: qt-ifw/packages/com.msys2.root/meta/installscript.js
================================================
// [OUTLINE - 4 symbols, 68 lines]
// L1-L14: function cancelInstaller(message)
// L16-L27: function isSupported()
// L29-L45: function createShortcuts()
// L47-L62: function Component()


================================================
FILE: qt-ifw/packages/com.msys2.root/meta/package.xml
================================================
<?xml version="1.0"?>
<Package>
  <DisplayName>MSYS2</DisplayName>
  <Description>Cygwin-derived Posix-like env. for Windows with Arch Linux's Pacman</Description>
  <Version>@VERSION@</Version>
  <ReleaseDate>@DATE@</ReleaseDate>
  <Default>true</Default>
  <Script>installscript.js</Script>
</Package>


