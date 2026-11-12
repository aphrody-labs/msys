# Codebase Digest: setup-msys2

- Files analyzed: 18
- Total lines: 1301
- Total size: 47.9 KB
- Git branch: `main`
- Git HEAD commit: `7fc5b595 (Bump fast-xml-parser from 5.7.1 to 5.12.0 (#675))`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
setup-msys2/
├── CHANGELOG.md (625 lines, 27.7 KB, ~8.4k tokens)
├── HACKING.md (27 lines, 760 B, ~220 tokens)
├── LICENSE (21 lines, 1.0 KB, ~254 tokens)
├── README.md (337 lines, 9.5 KB, ~2.7k tokens)
├── action.yml (52 lines, 1.6 KB, ~386 tokens)
├── examples/
│   ├── README.md (25 lines, 1.3 KB, ~358 tokens)
│   ├── cmake.yml (51 lines, 1.2 KB, ~340 tokens)
│   └── pkgbuild/
│       ├── PKGBUILD (21 lines, 442 B, ~133 tokens)
│       └── TOOL (3 lines, 44 B, ~16 tokens)
├── jsconfig.json (9 lines, 292 B, ~96 tokens)
├── main.js (36 lines, 1.4 KB, ~394 tokens)
├── matrix/
│   └── action.yml (40 lines, 1.1 KB, ~316 tokens)
├── package.json (29 lines, 974 B, ~365 tokens)
├── release.sh (1 lines, 35 B, ~11 tokens)
├── rolldown.config.js (8 lines, 208 B, ~62 tokens)
├── src/
│   └── fs-hash.js (7 lines, 237 B, ~67 tokens)
├── test/
│   └── fs-hash.js (7 lines, 169 B, ~54 tokens)
└── test.sh (2 lines, 56 B, ~18 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# Setup MSYS2

**setup-msys2** is a GitHub Action (GHA) to setup an [MSYS2](https://www.msys2.org/) environment (i.e. MSYS,
MINGW32, MINGW64, UCRT64, CLANG64 and/or CLANGARM64 shells)

It provides:

* Easy installation and updates
* Easy package installation including caching for faster re-runs
* A shell helper for running your commands or your whole job in an MSYS2 environment

## Usage

```yaml
  - uses: msys2/setup-msys2@v2
```

Then, for scripts:

```yaml
  - shell: msys2 {0}
    run: |
      uname -a
```

It is also possible to execute specific commands from cmd/powershell scripts/snippets.
In order to do so, `-c` is required:

```yaml
  - shell: powershell
    run: msys2 -c 'uname -a'
```

```yaml
  - shell: cmd
    run: msys2 -c 'uname -a'
```

### Default shell

In order to reduce verbosity, it is possible to set `msys2` as the default shell. For example:

```yaml
  defaults:
    run:
      shell: msys2 {0}
  steps:
  - uses: msys2/setup-msys2@v2
    with:
      update: true
      install: >-
        curl
        git
  - uses: actions/checkout@v4
```

### Build matrix

It is common to test some package/tool on multiple environments, which typically requires installing different sets of
packages through option `install`.
GitHub Actions' `strategy` and `matrix` fields allow to do so, as explained in [docs.github.com: Running variations of jobs in a workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow)
and [docs.github.com: `jobs.<job_id>.strategy.matrix`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).
See, for instance:

```yml
  strategy:
    matrix:
      include:
        - { sys: mingw64, env: x86_64 }
        - { sys: mingw32, env: i686 }
        - { sys: ucrt64,  env: ucrt-x86_64 }
        - { sys: clang64, env: clang-x86_64 }
  steps:
    - uses: msys2/setup-msys2@v2
      with:
        msystem: ${{matrix.sys}}
        install: mingw-w64-${{matrix.env}}-openssl
```

Alternatively, option `pacboy` allows using a single matrix variable:

```yml
  strategy:
    matrix:
      sys:
        - mingw64
        - mingw32
        - ucrt64
        - clang64
  steps:
    - uses: msys2/setup-msys2@v2
      with:
        msystem: ${{matrix.sys}}
        pacboy: openssl:p
```

Furthermore, [.github/workflows/PKGBUILD.yml](.github/workflows/PKGBUILD.yml) is a [Reusable Workflow](https://docs.github.com/en/actions/sharing-automations/reusing-workflows)
to build and test a package in GitHub Actions using a PKGBUILD recipe.
It can be used along with [matrix](./matrix) (a [Composite Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-composite-action)),
as shown in [.github/workflows/Tool.yml](.github/workflows/Tool.yml).

Note: By default, GitHub Actions terminates any running jobs if any job in matrix
fails. This default behavior can be disabled by setting `fail-fast: false` in
strategy section. See
[docs.github.com: `jobs.<job_id>.strategy.fail-fast`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)
for more details.

Find similar patterns in the following workflows:

- [examples/cmake.yml](examples/cmake.yml)
- [msys2/MINGW-packages: .github/workflows/main.yml](https://github.com/msys2/MINGW-packages/blob/master/.github/workflows/main.yml)

Find further details at [#171](https://github.com/msys2/setup-msys2/issues/171#issuecomment-961458598) and [#102](https://github.com/msys2/setup-msys2/issues/102).

### Options

#### msystem

* Type: `string`
* Allowed values: `MSYS | MINGW64 | MINGW32 | UCRT64 | CLANG64 | CLANGARM64`
* Default: `MINGW64`

The default [environment](https://www.msys2.org/docs/environments/) that is used in the `msys2` command/shell provided by this action.

`MINGW32` and `MINGW64` are deprecated. There is no replacement for `MINGW32`; use `UCRT64` or `CLANG64` instead of `MINGW64`. Selecting either environment emits a warning.

For example:

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      msystem: UCRT64
```

The environment can be later overridden using the `MSYSTEM` environment variable if needed.
This is useful when multiple commands need to be executed in different contexts.
For example, in order to build a PKGBUILD file and then test the installed artifact:

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      msystem: MSYS
  - shell: msys2 {0}
    run: |
      makepkg-mingw -sCLfc --noconfirm --noprogressbar
      pacman --noconfirm -U mingw-w64-*-any.pkg.tar.xz
  - run: |
      set MSYSTEM=UCRT64
      msys2 -c '<command to test the package>'
```

#### suppress-deprecation-warnings

* Type: `string`
* Allowed values: `msystem-mingw32 | msystem-mingw64`
* Default: -

Suppress warnings for deprecated environments that you still need to use:

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      msystem: MINGW32
      suppress-deprecation-warnings: msystem-mingw32
```

Multiple IDs can be separated by whitespace. Unknown IDs emit a warning and are ignored.

#### update

* Type: `boolean`
* Default: `false`

By default, the installation is not updated; hence package versions are those of the installation tarball.
By setting option `update` to `true`, the action will update the package database and all already installed packages.

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      update: true
```

#### install

* Type: `string`
* Allowed values: a whitespace separated list of packages
* Default: -

Installing additional packages after updating the system is supported through option `install`.
The package or list of packages are installed through `pacman --noconfirm -S --needed --overwrite *`.

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      update: true
      install: >-
        git
        curl
```

#### pacboy

* Type: `string`
* Allowed values: s whitespace separated list of packages
* Default: -

Installing additional packages with [pacboy](https://www.msys2.org/docs/package-naming/#avoiding-writing-long-package-names) after updating the system is supported through option `pacboy`.
The package or list of packages are installed through `pacboy --noconfirm -S --needed`.

```yaml
  strategy:
    fail-fast: false
    matrix:
      sys: [ MINGW64, MINGW32, UCRT64, CLANG64 ]
  steps:
  - uses: msys2/setup-msys2@v2
    with:
      msystem: ${{matrix.sys}}
      install: >-
        git
        curl
      pacboy: >-
        openssl:p
```

#### platform-check-severity

* Type: `string`
* Allowed values: `warn | fatal`
* Default: `fatal`

By default (`fatal`), throw an error if the runner OS is not Windows.
If set to `warn`, simply log a message and skip the rest:

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      platform-check-severity: warn
```

### Outputs

#### msys2-location

The absolute path of the MSYS2 installation location. Example: `D:\a\_temp\msys64` or `C:\msys64`.

```yaml
  - uses: msys2/setup-msys2@v2
    id: msys2
  - env:
      MSYS2_LOCATION: ${{ steps.msys2.outputs.msys2-location }}
    run: echo "$env:MSYS2_LOCATION"
```

Available since v2.24.1

### Advanced Options

These options are rarely needed and shouldn't be used unless there is a good reason.

#### path-type

* Type: `string`
* Allowed values: `minimal | strict | inherit`
* Default: `minimal`

Defines which parts of the Windows `$env:PATH` environment variable leak into the MSYS2 environment.
Allowed values:

- `strict`: do not inherit anything from `$env:PATH`.
- `minimal` *(default)*: only inherit the default Windows paths from `$env:PATH` (so that `cmd.exe` and `powershell.exe`
  are available for example).
- `inherit`: inherit everything; warning: this can lead to interference with other tools installed on the system.

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      path-type: minimal
```

This option corresponds to the `MSYS2_PATH_TYPE` setting in MSYS2; hence it can be overridden per step through `env`.
See [msys2/MSYS2-packages: filesystem/profile](https://github.com/msys2/MSYS2-packages/blob/915946a637e1f2b7e26e32782f3af322009293db/filesystem/profile#L28-L45)
for further details about the configuration of each option.

#### cache

* Type: `boolean`
* Default: `true`

By default (`true`), caches various things between runs to make repeated runs faster.

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      cache: false
```

#### location

* Type: `string`
* Default: -

Specify an alternate location where to install MSYS2 to.

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      location: D:\
```

#### release

* Type: `boolean`
* Default: `true`

If `true` (the default) it makes a fresh install of the latest MSYS2 installer release.
If `false` it will try to re-use the [existing MSYS2 installation](https://github.com/actions/runner-images/blob/main/images/windows/Windows2022-Readme.md#msys2) which is part of the official [GitHub Actions Runner Images](https://github.com/actions/runner-images).

```yaml
  - uses: msys2/setup-msys2@v2
    with:
      release: false
```

## Known Problems

### actions/checkout and line endings

In case you use the [actions/checkout](https://github.com/actions/checkout) action in your workflow and haven't configured git attributes for line endings, then git might auto convert your text files in the git repo to Windows line endings, which might lead to problems with tools provided by MSYS2.

To work around this issue disable the auto conversion before running `actions/checkout`:

```yaml
  steps:
  - run: git config --global core.autocrlf input
  - uses: actions/checkout@v4
```


================================================
FILE: examples/README.md
================================================
# Examples

## CMake

[cmake.yml](cmake.yml) shows how to install the relevant toolchain package for each msystem choice.
See [the MSYS2 documentation](https://www.msys2.org/docs/environments/) for explanations on the different msystem
options available.

See [msys2/msys2.github.io#144](https://github.com/msys2/msys2.github.io/issues/144).

Compared to the GitHub Actions CMake examples/templates
(see [actions/starter-workflows: ci/cmake.yml](https://github.com/actions/starter-workflows/blob/main/ci/cmake.yml)),
`${{github.workspace}}` cannot be used directly for specifying an absolute path.
That is spelled out with backslashes, which don't work as intended when interpreted by the bash shell.
Instead, use either of:

- Use relative paths (the run commands start out with `${{github.workspace}}` as the current working directory anyway).
- Use `cygwin -u` to convert the backslashed into forward slashes.

## PKGBUILD

[PKGBUILD.yml](../.github/workflows/PKGBUILD.yml) is a [Reusable Workflow](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)
to build and test a package in GitHub Actions using a PKGBUILD recipe.
[Tool.yml](../.github/workflows/Tool.yml) shows how to use it from any repo.
As an example, the dummy TOOL in subdir [pkgbuild](pkgbuild) is built and tested.


================================================
FILE: package.json
================================================
// [OUTLINE - 28 symbols, 44 lines]
// L2: "name": "setup-msys2"
// L3: "version": "1.0.0"
// L4: "description": "MSYS2 Setup GitHub Action"
// L5-L8: "repository":
// L6: "type": "git"
// L7: "url": "git+https://github.com/msys2/setup-msys2.git"
// L9: "type": "module"
// L10-L14: "scripts":
// L11: "pkg": "rolldown -c"
// L12: "lint": "oxlint ."
// L13: "test": "node --test"
// L15-L24: "keywords": [
// L25: "license": "MIT"
// L26-L28: "bugs":
// L27: "url": "https://github.com/msys2/setup-msys2/issues"
// L29: "homepage": "https://github.com/msys2/setup-msys2"
// L30-L35: "dependencies":
// L31: "@actions/cache": "^6.3.0"
// L32: "@actions/core": "^3.0.1"
// L33: "@actions/exec": "^3.0.0"
// L34: "@actions/tool-cache": "^4.0.0"
// L36-L43: "devDependencies":
// L37: "@types/node": "^24.19.2"
// L38: "oxlint": "^1.90.0"
// L39: "oxlint-tsgolint": "^7.0.2005"
// L40: "rolldown": "^1.2.16"
// L41: "rollup-plugin-sbom": "^5.0.1"
// L42: "typescript": "^7.0.2"


================================================
FILE: CHANGELOG.md
================================================
# Changelog

## 2.33.0

- Update base distribution to [20260927](https://github.com/msys2/msys2-installer/releases/tag/2026-09-27). [[#657](https://github.com/msys2/setup-msys2/pull/657)]
- Due to dependency cleanups "perl" and some related libraries are no longer installed by default.
- Add a deprecation warning for MINGW32/MINGW64. See the new `suppress-deprecation-warnings` option for how to silence them. [[#644](https://github.com/msys2/setup-msys2/pull/644)]
- pacboy caching fixes [[#650](https://github.com/msys2/setup-msys2/pull/650)]
- Update dependencies

## 2.32.0

- Update base distribution to [20260611](https://github.com/msys2/msys2-installer/releases/tag/2026-06-11). [[#624](https://github.com/msys2/setup-msys2/pull/624)]
- Port from ncc to rolldown for bundling
- Include an SBOM of the bundle
- Update dependencies

## 2.31.1

- input: allow empty input for "install" and "pacboy", meaning not packages will
  be installed [[#589](https://github.com/msys2/setup-msys2/issues/589)]
- input: deprecate the special "RUNNER_TEMP" value for "location" in favor of an
  empty string
- Update dependencies

## 2.31.0

- Update base distribution to [20260322](https://github.com/msys2/msys2-installer/releases/tag/2026-03-22). [[#597](https://github.com/msys2/setup-msys2/pull/597)]
- Update dependencies
- Move to node24 from node20

## 2.30.0

- Update base distribution to [20251213](https://github.com/msys2/msys2-installer/releases/tag/2025-12-13). [[#565](https://github.com/msys2/setup-msys2/pull/565)]
- Remove folder-hash dependency [[#555](https://github.com/msys2/setup-msys2/pull/555)]
- Update dependencies

## 2.29.0

- Allow installation to C:\msys64 if it doesn't exist already. Like with the new `windows-11-arm` image, for example. [[#542](https://github.com/msys2/setup-msys2/issues/542)]
- Update base distribution to [20250830](https://github.com/msys2/msys2-installer/releases/tag/2025-08-30). [[#548](https://github.com/msys2/setup-msys2/pull/548)]
- Update dependencies

## 2.28.0

- Update base distribution to [20250622](https://github.com/msys2/msys2-installer/releases/tag/2025-06-22). [[#518](https://github.com/msys2/setup-msys2/pull/518)]
- Update dependencies

## 2.27.0

- Update base distribution to [20250221](https://github.com/msys2/msys2-installer/releases/tag/2025-02-21). [[#480](https://github.com/msys2/setup-msys2/pull/480)]
- Update dependencies
- Drop support for CLANG32

## 2.26.0

- Update base distribution to [20241208](https://github.com/msys2/msys2-installer/releases/tag/2024-12-08). [[#444](https://github.com/msys2/setup-msys2/pull/444)]
- Update dependencies
- Update @actions/cache to v4 which will be required for the GitHub cache
  backend migration, which is scheduled for 2025-02, see
  https://github.com/actions/toolkit/discussions/1890 for details. There is no
  action required for users of this action, but old versions of this action may
  start to fail after the legacy cache backend is sunset.

## 2.25.0

- Update base distribution to [20241116](https://github.com/msys2/msys2-installer/releases/tag/2024-11-16). [[#444](https://github.com/msys2/setup-msys2/pull/444)]

## 2.24.1

- Added a new action output `msys2-location` to get the path to the MSYS2 installation directory. [[#404](https://github.com/msys2/setup-msys2/pull/404)]

## 2.24.0

- Update base distribution to [20240727](https://github.com/msys2/msys2-installer/releases/tag/2024-07-27). [[#402](https://github.com/msys2/setup-msys2/pull/402)]

## 2.23.0

- Update base distribution to [20240507](https://github.com/msys2/msys2-installer/releases/tag/2024-05-07). [[#381](https://github.com/msys2/setup-msys2/pull/381)]

## 2.22.0

- Update base distribution to [20240113](https://github.com/msys2/msys2-installer/releases/tag/2024-01-13). [[#355](https://github.com/msys2/setup-msys2/pull/355)]

## 2.21.1

- Work around @actions/cache preventing node from exiting after a cache upload [#354](https://github.com/msys2/setup-msys2/pull/354)
- Update dependencies

## [2.21.0](https://github.com/msys2/setup-msys2/compare/a2166def46067f1a4e25754ed80420d5cc32752a...bbe68c7e8f9cbe6bdcb0cd8afb3e0c3aa4d56397)

- Update base distribution to [20231026](https://github.com/msys2/msys2-installer/releases/tag/2023-10-26). [[#334](https://github.com/msys2/setup-msys2/pull/334)]
- Update to node20 from node16 [#333](https://github.com/msys2/setup-msys2/pull/333)
- Update dependencies

## [2.20.1](https://github.com/msys2/setup-msys2/compare/4c4ae2a60182e50f886507d959a50e7f63ac2ad0...a2166def46067f1a4e25754ed80420d5cc32752a)

### Changed

- Tag all releases with semver tags [[#327](https://github.com/msys2/setup-msys2/issues/327)]
- Bump dependencies:
  - @actions/cache to v3.2.2
  - eslint to 8.46.0
  - eslint-plugin-jsdoc to 46.4.6

## [2.20.0](https://github.com/msys2/setup-msys2/compare/287411083877ecfd4b906a1af5c5ce5a7ec90d47...4c4ae2a60182e50f886507d959a50e7f63ac2ad0)

### Changed

- Update base distribution to [20230718](https://github.com/msys2/msys2-installer/releases/tag/2023-07-18). [[#322](https://github.com/msys2/setup-msys2/pull/322)]

## [2.19.0](https://github.com/msys2/setup-msys2/compare/86132ac62b5f7963e748fab1b1f14e5f76113434...287411083877ecfd4b906a1af5c5ce5a7ec90d47)

- Remove dependency on powershell
- Add new option for disabling caching
- Don't fail if the GitHub caching service isn't working
- Bump dependencies:
  - @actions/cache to v3.2.1

## [2.18.0](https://github.com/msys2/setup-msys2/compare/b200fe9693ae23c5c6a9ebef9c925475f72cb457...86132ac62b5f7963e748fab1b1f14e5f76113434)

### Changed

- Update base distribution to [20230526](https://github.com/msys2/msys2-installer/releases/tag/2023-05-26). [[#303](https://github.com/msys2/setup-msys2/pull/303)]
- Bump dependencies:
  - eslint to v8.41.0

## [2.17.0](https://github.com/msys2/setup-msys2/compare/399a23b7b6bdbce5da87f846bc294c0de56eb3b6...b200fe9693ae23c5c6a9ebef9c925475f72cb457)

### Changed

- Update base distribution to [20230318](https://github.com/msys2/msys2-installer/releases/tag/2023-03-18). [[#289](https://github.com/msys2/setup-msys2/pull/289)]
- Bump dependencies:
  - eslint to v8.36.0
  - @vercel/ncc to v0.36.1

## [2.16.0](https://github.com/msys2/setup-msys2/compare/b2bddebfd2ddd377a6a2348a6ffb10c1db00c3f4...399a23b7b6bdbce5da87f846bc294c0de56eb3b6)

### Changed

- Update base distribution to [20230127](https://github.com/msys2/msys2-installer/releases/tag/2023-01-27). [[#280](https://github.com/msys2/setup-msys2/pull/280)]
- Bump dependencies:
  - eslint to v8.32.0

## [2.15.1](https://github.com/msys2/setup-msys2/compare/f24c3cf0a0a43ccba2eacfd674bc51dc5d783471...b2bddebfd2ddd377a6a2348a6ffb10c1db00c3f4)

### Changed

- Downgrade @actions/cache to v3.0.6 as it breaks caching on self hosted runners and leaks MSYS related env vars.
  See https://github.com/actions/toolkit/issues/1311

## [2.15.0](https://github.com/msys2/setup-msys2/compare/b2b99bf1b1555a6d130258fe0e4c80f275f665e2...f24c3cf0a0a43ccba2eacfd674bc51dc5d783471)

### Changed

- Update base distribution to [20221216](https://github.com/msys2/msys2-installer/releases/tag/2022-12-16). [[#268](https://github.com/msys2/setup-msys2/pull/268)]
- Port to ES modules. [[#260](https://github.com/msys2/setup-msys2/pull/260)]
- Bump dependencies:
  - @actions/cache to v3.1.2
  - @vercel/ncc to v0.36.0
  - eslint to v8.31.0
  - folder-hash to v4.0.4

## [2.14.0](https://github.com/msys2/setup-msys2/compare/9426ebb2048a2428ebfda0c5686251bfb6ae41dd...b2b99bf1b1555a6d130258fe0e4c80f275f665e2) - 2022/11/01

### Changed

- Update base distribution to [20221028](https://github.com/msys2/msys2-installer/releases/tag/2022-10-28). [[#259](https://github.com/msys2/setup-msys2/pull/259)]
- Bump dependencies:
  - @actions/cache to v3.0.6
  - @actions/core to v1.10.0
  - eslint to v8.26.0

## [2.13.0](https://github.com/msys2/setup-msys2/compare/2e083bbad7fe8c91e321ac59a20c1b7ea88c449d...9426ebb2048a2428ebfda0c5686251bfb6ae41dd) - 2022/09/04

### Changed

- Update base distribution to [20220904](https://github.com/msys2/msys2-installer/releases/tag/2022-09-04). [[#250](https://github.com/msys2/setup-msys2/pull/250)]
- Disable pacman's disk space checking also when not updating [[#242](https://github.com/msys2/setup-msys2/pull/242)]
- Add github-actions to dependabot.yml [[#240](https://github.com/msys2/setup-msys2/pull/240)]
- Bump dependencies:
  - @actions/cache to v3.0.4
  - @actions/core to v1.9.1
  - eslint to v8.23.0

## [2.12.0](https://github.com/msys2/setup-msys2/compare/08026e284f453584d7bfb47c2af42855734d6d1e...2e083bbad7fe8c91e321ac59a20c1b7ea88c449d) - 2022/06/06

### Changed

- Update base distribution to [20220603](https://github.com/msys2/msys2-installer/releases/tag/2022-06-03). [[#233](https://github.com/msys2/setup-msys2/pull/233)]
- Bump dependencies:
  - @actions/cache to v2.0.5
  - @actions/core to v1.8.2
  - @actions/tool-cache to v2.0.1
  - eslint to v8.17.0
  - @vercel/ncc to v0.34.0

## [2.11.0](https://github.com/msys2/setup-msys2/compare/019417bff62dcc533ad9f4caee190aa3487fe97a...08026e284f453584d7bfb47c2af42855734d6d1e) - 2022/05/03

### Changed

- Update base distribution to [20220503](https://github.com/msys2/msys2-installer/releases/tag/2022-05-03). [[#219](https://github.com/msys2/setup-msys2/pull/219)]

## [2.10.3](https://github.com/msys2/setup-msys2/compare/5bb19b04198a16a0282d7abcc1fdb877a1514790...019417bff62dcc533ad9f4caee190aa3487fe97a) - 2022/05/03

### Changed

- CLANG32 is enabled by default in latest pacman.
- Bump dependencies:
  - @actions/core to v1.7.0

## [2.10.2](https://github.com/msys2/setup-msys2/compare/f501cd73399eab7b5442a4ce4ced5cb538cd7751...5bb19b04198a16a0282d7abcc1fdb877a1514790) - 2022/05/01

### Changed

- Use mingw mirrorlist for CLANG32.
- Require 'update: true' to install packages on CLANG32.

## [2.10.1](https://github.com/msys2/setup-msys2/compare/ded8116e9f153e66965b1ed147c3c15c0b60fce3...f501cd73399eab7b5442a4ce4ced5cb538cd7751) - 2022/05/01

### Changed

- Enable CLANG32 when `release` is `true`.
- Bump dependencies:
  - @actions/cache to v2.0.2
  - @vercel/ncc to v0.33.4
  - eslint to v8.14.0

## [2.10.0](https://github.com/msys2/setup-msys2/compare/01ac7b3f1f49a74acd8a1cfe362df8311c8c8c56...ded8116e9f153e66965b1ed147c3c15c0b60fce3) - 2022/03/21

### Changed

- Update base distribution to [20220319](https://github.com/msys2/msys2-installer/releases/tag/2022-03-19). [[#205](https://github.com/msys2/setup-msys2/pull/205)]
- Quote 'destination' when calling Get-FileHash. [[#203](https://github.com/msys2/setup-msys2/issues/203)]
- Bump dependencies:
  - @actions/cache to v1.0.10
  - @actions/exec to v1.1.1
  - @actions/tool-cache to v1.7.2

## [2.9.0](https://github.com/msys2/setup-msys2/compare/ccd141b53295291b51f22fa27a10deedc0d86f44...01ac7b3f1f49a74acd8a1cfe362df8311c8c8c56) - 2022/03/14

### Changed

- Update base distribution to [20220128](https://github.com/msys2/msys2-installer/releases/tag/2022-01-28).
- Switch to nodejs v16 [[#201](https://github.com/msys2/setup-msys2/pull/201)]
- Bump dependencies:
  - @actions/cache to v1.0.9
  - eslint to v8.11.0

## [2.8.1](https://github.com/msys2/setup-msys2/compare/15654cd818544c9006b12959f1a948fed7828850...ccd141b53295291b51f22fa27a10deedc0d86f44) - 2022/01/19

### Changed

- Update base distribution to [20220118](https://github.com/msys2/msys2-installer/releases/tag/2022-01-18). [[#192](https://github.com/msys2/setup-msys2/pull/192)]
- Bump dependencies:
  - eslint to v8.7.0

## [2.8.0](https://github.com/msys2/setup-msys2/compare/3b0f3eb45312eb0a404c4d67de7696b833170b5f...15654cd818544c9006b12959f1a948fed7828850) - 2022/01/05

### Added

- [Composite Action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) `matrix`.

### Changed

- Default branch renamed from `master` to `main`.
- Update workflow `Test` to use Action `matrix`.
- Examples:
  - Update cmake example workflow to use option `pacboy`.
  - Convert `PKGBUILD.yml` into a [Reusable Workflow](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows). Add workflow `Tool.yml`, which uses it.
- Bump dependencies:
  - @vercel/ncc to v0.33.1
  - eslint to v8.6.0

## [2.7.0](https://github.com/msys2/setup-msys2/compare/a5dfcea55d4fe86ab2bdc6289102ba2da5a74744...3b0f3eb45312eb0a404c4d67de7696b833170b5f) - 2021/12/01

### Changed

- Update base distribution to [20211130](https://github.com/msys2/msys2-installer/releases/tag/2021-11-30). [[#179](https://github.com/msys2/setup-msys2/pull/179)]
- Bump dependencies:
  - @actions/cache to v1.0.8
  - @vercel/ncc to v0.32.0
  - eslint to v8.3.0

## [2.6.1](https://github.com/msys2/setup-msys2/compare/d7eeada078b00988a612156b15f6bb92c8f29e6c...a5dfcea55d4fe86ab2bdc6289102ba2da5a74744) - 2021/11/03

### Changed

- location: mkdirP msysRootDir before using it. [[#174](https://github.com/msys2/setup-msys2/pull/174)]

## [2.6.0](https://github.com/msys2/setup-msys2/compare/a3cc4d82700448fea6cb3bcfc9cbb23f916762c4...d7eeada078b00988a612156b15f6bb92c8f29e6c) - 2021/11/03

### Added

- Options:
  - `platform-check-severity`. [[#172](https://github.com/msys2/setup-msys2/pull/172)]
  - `location`. [[#173](https://github.com/msys2/setup-msys2/pull/173)]
  - `pacboy`. [[#166](https://github.com/msys2/setup-msys2/pull/166)]

### Changed

- Bump dependencies:
  - eslint to v8.1.0

## [2.5.0](https://github.com/msys2/setup-msys2/compare/5f027e0ad12b5d8cf6e794847cec272f9d59825c...a3cc4d82700448fea6cb3bcfc9cbb23f916762c4) - 2021/10/13

### Changed

- Try to shorten the release install path a bit. [[#163](https://github.com/msys2/setup-msys2/pull/163)]
- Bump dependencies:
  - @actions/core to v1.6.0
  - @vercel/ncc to v0.31.0
  - eslint to v8.0.0

## [2.4.2](https://github.com/msys2/setup-msys2/compare/2ffbfd30567f4031016002fcb5a6e6e7c0de067a...5f027e0ad12b5d8cf6e794847cec272f9d59825c) - 2021/07/30

### Added

- Examples. [[#149](https://github.com/msys2/setup-msys2/pull/149)]

### Changed

- Update base distribution to [20210725](https://github.com/msys2/msys2-installer/releases/tag/2021-07-25). [[#154](https://github.com/msys2/setup-msys2/pull/154)]
- Force date into a semver-compliant version. [[#148](https://github.com/msys2/setup-msys2/pull/148)]
- Bump dependencies:
  - @vercel/ncc to v0.29.0
  - eslint to v7.31.0

## [2.4.1](https://github.com/msys2/setup-msys2/compare/c381b3e3bb2726b3263ecb5a7204b2ba19f3fc10...2ffbfd30567f4031016002fcb5a6e6e7c0de067a) - 2021/07/06

### Added

- Cache installer in the tool cache. [[#147](https://github.com/msys2/setup-msys2/pull/147)]

### Changed

- Bump dependencies:
  - eslint to v7.30.0

## [2.4.0](https://github.com/msys2/setup-msys2/compare/28da3da2173118160b7ebf24f4f170f30f00cc5e...c381b3e3bb2726b3263ecb5a7204b2ba19f3fc10) - 2021/06/16

### Added

- Support CLANG32 system too. [[#143](https://github.com/msys2/setup-msys2/issues/143)]

### Changed

- Bump dependencies:
  - eslint to v7.28.0

## [2.3.1](https://github.com/msys2/setup-msys2/compare/1dffee870e9df3fac027dfa450c30a6ee18d7a80...28da3da2173118160b7ebf24f4f170f30f00cc5e) - 2021/06/07

### Changed

- Update base distribution to [20210604](https://github.com/msys2/msys2-installer/releases/tag/2021-06-04). [[#141](https://github.com/msys2/setup-msys2/pull/141)]
- Bump dependencies:
  - @actions/core to v1.3.0
  - @actions/tool-cache to v1.7.0
  - @vercel/ncc to v0.28.6
  - eslint to v7.27.0

## [2.3.0](https://github.com/msys2/setup-msys2/compare/78d2b743f702aad2fd3040417b6747b3f342eb66...1dffee870e9df3fac027dfa450c30a6ee18d7a80) - 2021/05/11

### Added

- Support CLANG64 system too. [[#135](https://github.com/msys2/setup-msys2/issues/135)]

## [2.2.0](https://github.com/msys2/setup-msys2/compare/c59fdfa7c5bcce581e57856d9ad73804c6786f2e...78d2b743f702aad2fd3040417b6747b3f342eb66) - 2021/04/20

### Added

- Support UCRT64 system too. [[#130](https://github.com/msys2/setup-msys2/pull/130)]

### Changed

- Update base distribution to [20210419](https://github.com/msys2/msys2-installer/releases/tag/2021-04-19). [[#129](https://github.com/msys2/setup-msys2/pull/129)]
- Bump dependencies:
  - @actions/core to v1.2.7
  - @actions/cache to v1.0.7
  - @vercel/ncc to v0.28.3
  - eslint to v7.24.0

## [2.1.6](https://github.com/msys2/setup-msys2/compare/42cc92da65286e00a692258fd5d7bb4624eb5b05...c59fdfa7c5bcce581e57856d9ad73804c6786f2e) - 2021/03/26

### Changed

- Refresh the DBs before the final upgrade. [[#119](https://github.com/msys2/setup-msys2/pull/119), [#120](https://github.com/msys2/setup-msys2/pull/120)]
- Bump dependencies:
  - eslint to v7.22.0
  - folder-hash to v4.0.1

## [2.1.5](https://github.com/msys2/setup-msys2/compare/e7846a8b67444fb87744a711404045b782e7ff63...42cc92da65286e00a692258fd5d7bb4624eb5b05) - 2021/02/28

### Changed

- Update base distribution to [20210228](https://github.com/msys2/msys2-installer/releases/tag/2021-02-28). [[#114](https://github.com/msys2/setup-msys2/pull/114)]

## [2.1.4](https://github.com/msys2/setup-msys2/compare/4d3b22f79f56c4983da648b6b9bfa63815481610...e7846a8b67444fb87744a711404045b782e7ff63) - 2021/02/15

### Changed

- Fix splitting list of 'install' when items are separated by multiple spaces. [[#103](https://github.com/msys2/setup-msys2/issues/103)]
- Update base distribution to [20210215](https://github.com/msys2/msys2-installer/releases/tag/2021-02-15). [[#112](https://github.com/msys2/setup-msys2/pull/112)]
- Dependencies:
  - Bump @actions/cache to v1.0.6
  - Bump eslint to v7.20.0
  - @zeit/ncc is no longer maintained; @vercel/ncc v0.27.0 is used instead

## [2.1.3](https://github.com/msys2/setup-msys2/compare/bd0bdf22fe90699697c5c2b4bc1cc842bd4e1a5f...4d3b22f79f56c4983da648b6b9bfa63815481610) - 2021/01/06

### Changed

- Add `CACHE_FLUSH_COUNTER` to CacheKey hash computation, for allowing flushing all the caches by bumping the Action. [[#99](https://github.com/msys2/setup-msys2/issues/99)]
- Update base distribution to [20210105](https://github.com/msys2/msys2-installer/releases/tag/2021-01-05). [[#101](https://github.com/msys2/setup-msys2/pull/101)]
- README:
  - Add section 'Context'. [[#88](https://github.com/msys2/setup-msys2/pull/88)]
  - Update the syntax for the install list (use fold+strip). [[#90](https://github.com/msys2/setup-msys2/issues/90)]
  - Move developer related docs into a separate file (`HACKING.md`).
- Bump dependencies:
  - @actions/cache to v1.0.5
  - @actions/tool-cache to v1.6.1
  - eslint to v7.17.0

## [2.1.2](https://github.com/msys2/setup-msys2/compare/46faddb10578f4ed77e9db446a5077f6c980041a...bd0bdf22fe90699697c5c2b4bc1cc842bd4e1a5f) - 2020/11/14

### Changed

- Update base distribution to [20201109](https://github.com/msys2/msys2-installer/releases/tag/2020-11-09).
- Bump dependencies:
  - @actions/cache to v1.0.4
  - eslint to v7.13.0
  - folder-hash to v4.0.0

## [2.1.1](https://github.com/msys2/setup-msys2/compare/72120a5f5986349f2babced564e027a96001c99a...46faddb10578f4ed77e9db446a5077f6c980041a) - 2020/10/05

### Changed

- Bump dependencies:
  - @actions/core to v1.2.6
  - eslint to v7.10.0
  - folder-bash to v3.3.3

## [2.1.0](https://github.com/msys2/setup-msys2/compare/654f62ffd14ab50887ad19e09b1ae277fc1f538c...72120a5f5986349f2babced564e027a96001c99a) - 2020/09/04

### Changed

- Update base distribution to [20200903](https://github.com/msys2/msys2-installer/releases/tag/2020-09-03). [[#66](https://github.com/msys2/setup-msys2/pull/66)]
- Conditionally disable the install cache, unset by default. [[#63](https://github.com/msys2/setup-msys2/pull/63)]
- Switch dependabot interval from 'daily' to 'weekly'.
- Bump dependencies:
  - @actions/cache to v1.0.2
  - @actions/core to v1.2.5
  - eslint to v7.7.0

## [2.0.1](https://github.com/msys2/setup-msys2/compare/0908a2926547f3a4fa10a13a11156a09e3cdd8a4...654f62ffd14ab50887ad19e09b1ae277fc1f538c) - 2020/07/27

### Added

- `eslint` support (`.eslintrc.json`).
- Create `dependabot.yml`.

### Changed

- Refactor code into multiple functions. [[#53](https://github.com/msys2/setup-msys2/pull/53)]
- Cache the whole installation when possible. [[#54](https://github.com/msys2/setup-msys2/pull/54)]
- `pacman`:
  - Always pass `--overwrite '*'`. [[#55](https://github.com/msys2/setup-msys2/pull/55)]
  - Handle upgrade creating `.pacnew` files. [[#56](https://github.com/msys2/setup-msys2/pull/56)]
- CI: only build the action once. [[#57](https://github.com/msys2/setup-msys2/pull/57)]
- Dependencies:
  - Bump @actions/cache to v1.0.1
  - Fix: @actions/tool-cache should not be pinned

## [2.0.0](https://github.com/msys2/setup-msys2/compare/05abb8d585d071301cc19e6177945011875d9479...0908a2926547f3a4fa10a13a11156a09e3cdd8a4) - 2020/07/20

### Changed

- Update base distribution to [20200719](https://github.com/msys2/msys2-installer/releases/tag/2020-07-19). [[#47](https://github.com/msys2/setup-msys2/pull/47)]
- Change default of option `path-type` from `strict` to `minimal`. [[#42](https://github.com/msys2/setup-msys2/pull/42)]
- Allow lowercase values for option `msystem`, and validate them. [[#41](https://github.com/msys2/setup-msys2/pull/41), [#48](https://github.com/msys2/setup-msys2/pull/48)]
- Disable initial key refresh to accelerate the setup. [[#45](https://github.com/msys2/setup-msys2/pull/45)]
- README:
  - Add refs about 'matrix'. [[#40](https://github.com/msys2/setup-msys2/pull/40)]
  - Explain that specific commands can/need be executed with `msys2 -c`.
- Bump dependencies:
  - @actions/cache to v1.0.0
  - @actions/tool-cache to v1.6.0

### Removed

- Shell arguments are passed directly to bash. Now, `msys2 -c mybinary` can be used in cmd/powershell, instead of `msys2 mybinary`. However, using `shell: msys2 {0}` is recommended. [[#43](https://github.com/msys2/setup-msys2/pull/43), [#44](https://github.com/msys2/setup-msys2/pull/44)]
- `pacman` package cache is reworked and enabled by default. As a result, option `cache` is removed. [[#51](https://github.com/msys2/setup-msys2/pull/51)]

## [1.1.2](https://github.com/msys2/setup-msys2/compare/a4332eaf3b970340d6495b2076e1405ee48ea573...05abb8d585d071301cc19e6177945011875d9479) - 2020/07/04

### Added

- Check the SHA256 of the installer, before extracting it. [[#36](https://github.com/msys2/setup-msys2/pull/36)]

### Changed

- Update base distribution to [20200629](https://github.com/msys2/msys2-installer/releases/tag/2020-06-29). [[#35](https://github.com/msys2/setup-msys2/pull/35)]

## [1.1.1](https://github.com/msys2/setup-msys2/compare/9da8a47f7acedd87a157ef2d99246f877fc15e9c...a4332eaf3b970340d6495b2076e1405ee48ea573) - 2020/06/27

### Changed

- Transfer from 'eine' to 'msys2'.
- Call `/usr/bin/env` instead of `/usr/bin/bash` directly.
- Fix the path to be cached, which depends on `p_release`, not `p_update`.
- Use `--needed` when installing additional packages (`install`). [[#30](https://github.com/msys2/setup-msys2/pull/30)]
- Use the self extracting archive instead of the `.tar.xz`. [[#31](https://github.com/msys2/setup-msys2/pull/31)]
- Bump dependencies:
  - folder-hash to v3.3.2

## [1.1.0](https://github.com/msys2/setup-msys2/compare/b506907ae6185e399cfae0191555c6c99523fdb1...9da8a47f7acedd87a157ef2d99246f877fc15e9c) - 2020/06/05

### Added

- Option `cache`.
- Option `release`.

### Changed

- `update: true` alone now defaults to using the installation from GitHub Releases, instead of the default installation in the virtual environment. [[#23](https://github.com/msys2/setup-msys2/issues/23)]
- Disable `CheckSpace` to reduce update time.
- ignoreReturnCode when executing `pacman -Syuu` for the first time.

## [1.0.1](https://github.com/msys2/setup-msys2/compare/877608b23cc3051911e4c84b919db4e9e14ad65c...b506907ae6185e399cfae0191555c6c99523fdb1) - 2020/06/04

## Changed

- Update base distribution to [20200602](https://github.com/msys2/msys2-installer/releases/tag/2020-06-02).

## [1.0.0](https://github.com/msys2/setup-msys2/compare/5cb94deb40d2e279c09e837a8f5350dd3a3aef8e...877608b23cc3051911e4c84b919db4e9e14ad65c) - 2020/05/28

### Changed

- Update base distribution to [20200522](https://github.com/msys2/msys2-installer/releases/tag/2020-05-22).
- CI: update actions/checkout to v2.
- README:
  - Show how to set a default shell.
  - Recommended version is v1.
- Update keywords in `package.json`.
- Bump dependencies
  - @actions/tool-cache to v1.5.5
  - @zeit/ncc to v0.22.3

### Removed

- `msys2do` and `msys2` are now unified and `msys2do` is removed.

## [0.2.0](https://github.com/msys2/setup-msys2/compare/66aff8cc8c73a1a40b56953dce3d39f96f7e38c3...5cb94deb40d2e279c09e837a8f5350dd3a3aef8e) - 2020/05/22

### Changed

- If `update: true`, use default MSYS2 installation now available in `windows-latest`.
- Call `taskkill` once only.

## [0.1.2](https://github.com/msys2/setup-msys2/compare/fb70b5f428b0a20d604299c6fe2df3a5252866dc...66aff8cc8c73a1a40b56953dce3d39f96f7e38c3) - 2020/05/20

### Changed

- Do not update `pacman` separatedly.

## [0.1.1](https://github.com/msys2/setup-msys2/compare/db03b1e38ae651b71bff93b00e794eb89303ddf7...fb70b5f428b0a20d604299c6fe2df3a5252866dc) - 2020/05/20

### Changed

- Execute `taskkill` after updating packages and before the final upgrade.

## [0.1.0](https://github.com/msys2/setup-msys2/compare/188ae2ba73f7e612a8d35c57b25b679874850bf3...db03b1e38ae651b71bff93b00e794eb89303ddf7) - 2020/05/19

### Added

- Option `install`.

### Changed

- Update base distribution to [20200517](https://github.com/msys2/msys2-installer/releases/tag/2020-05-17), from [msys2/msys2-installer GitHub Releases](https://github.com/msys2/msys2-installer/releases).
- Execute `taskkill` after `pacman -Syu`.
- README: recommended version is v0.

## [0.0.2](https://github.com/msys2/setup-msys2/compare/287bc00c1ce99eb99aa853c3c866ec66ed7a8bf2...188ae2ba73f7e612a8d35c57b25b679874850bf3) - 2020/05/14

### Changed
- Rename from 'numworks' to 'eine'.
- Rename `npm run build` task to `npm run pkg`.
- Update description of the Action.
- Bump dependencies:
   - @actions/core to v1.2.4
   - @actions/exec to v1.0.4
   - @actions/tool-cache to v1.3.5
   - @zeit/ncc to v0.22.1

## [0.0.1](https://github.com/msys2/setup-msys2/compare/0a7d108a24ab21d01436197d61e330816e522816...287bc00c1ce99eb99aa853c3c866ec66ed7a8bf2) - 2020/01/19

### Added
- Options: `msystem`, `update` and `path-type`. [[numworks/setup-msys2#1](https://github.com/numworks/setup-msys2/pull/1), [numworks/setup-msys2#3](https://github.com/numworks/setup-msys2/pull/3), [numworks/setup-msys2#6](https://github.com/numworks/setup-msys2/pull/6), [numworks/setup-msys2#7](https://github.com/numworks/setup-msys2/pull/7), [numworks/setup-msys2#14](https://github.com/numworks/setup-msys2/pull/14)]
- `msys2.cmd`, to support multi-line run steps. [[numworks/setup-msys2#8](https://github.com/numworks/setup-msys2/pull/8), [numworks/setup-msys2#21](https://github.com/numworks/setup-msys2/pull/21)]
- Bundle for deployment with [ncc](https://github.com/vercel/ncc). [[numworks/setup-msys2#4](https://github.com/numworks/setup-msys2/pull/4), [numworks/setup-msys2#5](https://github.com/numworks/setup-msys2/pull/5)]
- Add GitHub Actions workflow. [[numworks/setup-msys2#3](https://github.com/numworks/setup-msys2/pull/3), [numworks/setup-msys2#15](https://github.com/numworks/setup-msys2/pull/15), [numworks/setup-msys2#16](https://github.com/numworks/setup-msys2/pull/16), [numworks/setup-msys2#18](https://github.com/numworks/setup-msys2/pull/18)]
- README: badges/shields. , [[numworks/setup-msys2#9](https://github.com/numworks/setup-msys2/pull/9)]
- `.gitignore`.

### Changed
- Checks:
  - Is the host platform Windows?
  - Is RUNNER_TMP empty?
- Extraction:
  - Use `7z` instead of `tar`. [[numworks/setup-msys2#26](https://github.com/numworks/setup-msys2/pull/26), [numworks/setup-msys2#28](https://github.com/numworks/setup-msys2/pull/28)]
  - Use `ExecOptions.cwd`.
- `msys2do.cmd`:
  - Hardcode it in `index.js`.
  - Do not overwrite MSYS2_PATH_TYPE envvar.
  - Add `@echo off` and `--norc -eo pipefail`.
  - Use `\r\n` instead of `\n\r`.
- Ensure that MSYS2 is initialized.
- Bump dependencies:
  - @actions/core to v1.2.0
  - @actions/exec to v1.0.2 [[numworks/setup-msys2#24](https://github.com/numworks/setup-msys2/pull/24)]

### Removed
- `io.which` is not required anymore.
- Clean `package-lock.json`.


================================================
FILE: HACKING.md
================================================
## Development

The steps to publish a new release are the following:

```sh
# Remove/clean everything
git clean -xfd

# Create a clone of this repo under "release" with all the new commits/tags
./release.sh v2.x.x

# Review and push to the remote
cd release
git push
git push --tags
git push origin +v2

# Fetch the new changed major version tag
cd ..
git fetch origin --tags --force

# Create a new GH release named "v2.x.x" from the release tag
# https://github.com/msys2/setup-msys2/releases/new?tag=v2.x.x
# Copy over the changelog entry to the GH release and set as latest release
```

> NOTE: tag `tag-for-git-describe` is used for testing `git describe --dirty --tags` in CI. See [actions/checkout#250](https://github.com/actions/checkout/issues/250).


================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2019 GitHub Actions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


================================================
FILE: action.yml
================================================
name: 'Setup MSYS2'
description: 'Setup an MSYS2 environment'
branding:
  color: purple
  icon: terminal
inputs:
  msystem:
    description: 'Variant of the environment to set by default: MSYS, MINGW32, MINGW64, UCRT64, CLANG64 or CLANGARM64'
    required: false
    default: 'MINGW64'
  path-type:
    description: 'Default value for MSYS2_PATH_TYPE environment variable: strict, inherit or minimal'
    required: false
    default: 'minimal'
  update:
    description: 'Update MSYS2 installation through pacman'
    required: false
    default: false
  install:
    description: 'After installation and/or update, install additional packages through pacman'
    required: false
    default: ''
  pacboy:
    description: 'After installation and/or update, install additional packages through pacboy'
    required: false
    default: ''
  release:
    description: 'Retrieve and extract base installation from upstream GitHub Releases'
    required: false
    default: true
  location:
    description: 'Where to install MSYS2'
    required: false
    default: ''
  platform-check-severity:
    description: 'What to do when run on an incompatible runner: fatal, warn'
    required: false
    default: 'fatal'
  cache:
    description: 'If caching should be used'
    required: false
    default: true
  suppress-deprecation-warnings:
    description: 'Whitespace-separated deprecation warning IDs to acknowledge and suppress'
    required: false
    default: ''
outputs:
  msys2-location:
    description: 'The absolute path of the MSYS2 installation location'
runs:
  using: 'node24'
  main: 'index.js'


================================================
FILE: examples/cmake.yml
================================================
name: Example CMake

on:
  push:
  pull_request:
  schedule:
    - cron: '0 0 * * 3'
  workflow_dispatch:

jobs:

  build:
    runs-on: ${{ matrix.runs-on }}
    strategy:
      fail-fast: false
      matrix:
        include:
          - { icon: '⬛', sys: mingw32, runs-on: 'windows-latest' }
          - { icon: '🟦', sys: mingw64, runs-on: 'windows-latest' }
          - { icon: '🟨', sys: ucrt64, runs-on: 'windows-latest' }
          - { icon: '🟧', sys: clang64, runs-on: 'windows-latest' }
          - { icon: '🟩', sys: clangarm64, runs-on: 'windows-11-arm' }
    name: 🚧${{ matrix.icon }} ${{ matrix.sys }}
    defaults:
      run:
        shell: msys2 {0}
    steps:

    - name: '🧰 Checkout'
      uses: actions/checkout@v4
      with:
        fetch-depth: 0
        persist-credentials: false

    - name: '${{ matrix.icon }} Setup MSYS2'
      uses: msys2/setup-msys2@v2
      with:
        msystem: ${{matrix.sys}}
        update: true
        install: >-
          git
          make
        pacboy: >-
          toolchain:p
          cmake:p
          ninja:p

    - name: '🚧 Build TOOL'
      run: |
        cmake -G Ninja -B build -DCMAKE_BUILD_TYPE=Release
        cmake --build build


================================================
FILE: examples/pkgbuild/PKGBUILD
================================================
_realname=TOOL
pkgbase=mingw-w64-${_realname}
pkgname=("${MINGW_PACKAGE_PREFIX}-${_realname}")
pkgver=ci
pkgrel=1
pkgdesc="Demo recipe for TOOL (mingw-w64)"
arch=('any')
pkgname=("${MINGW_PACKAGE_PREFIX}-${_realname}")

source=('TOOL')
sha256sums=('18773261f8931adb11297544267335ab036c58216073715edb1956b5bbe4935a')

build() {
  cd "${srcdir}"
  ls -lah
}

package() {
  cd "${srcdir}"
  install -D TOOL "${pkgdir}${MINGW_PREFIX}"/bin/TOOL
}


================================================
FILE: examples/pkgbuild/TOOL
================================================
#!/usr/bin/env bash

echo "This is a TOOL!"


================================================
FILE: jsconfig.json
================================================
// [OUTLINE - 8 symbols, 11 lines]
// L2-L9: "compilerOptions":
// L3: "checkJs": true
// L4: "maxNodeModuleJsDepth": 0
// L5: "module": "nodenext"
// L6: "moduleResolution": "nodenext"
// L7: "target": "esnext"
// L8: "types": ["node"]
// L10: "exclude": ["node_modules", "dist", "release"]


================================================
FILE: main.js
================================================
// [OUTLINE - 24 symbols, 561 lines]
// import @actions/cache
// import @actions/core
// import @actions/io
// import @actions/exec
// import @actions/tool-cache
// import node:path
// import node:fs
// import node:crypto
// import node:assert/strict
// import node:process
// import ./src/fs-hash.js
// L24-L47: class Input
// L54-L58: function deprecationWarning(id, message, suppressedWarnings)
// L63-L152: function parseInput()
// L158-L173: async function computeChecksum(filePath)
// L178-L188: async function downloadInstaller()
// L194-L199: async function disableKeyRefresh(msysRootDir)
// L205-L211: async function configureMainMirror(msysRootDir)
// L218-L227: async function configurePacman(msysRootDir, staging)
// L235-L256: async function saveCacheMaybe(paths, restoreKey, saveKey)
// L264-L276: async function restoreCache(paths, primaryKey, restoreKeys)
// L278-L323: class PackageCache
// L284-L298: constructor(msysRootDir, input)
// L300-L304: async restore()
// L306-L310: async save()
// L312-L317: async prune()
// L319-L322: async clear()
// L325-L351: class InstallCache
// L331-L336: constructor(msysRootDir, input)
// L338-L342: async restore()
// L344-L350: async save()
// L363-L375: function writeWrapper(msysRootDir, msystem, pathtype, destDir, name)
// L381-L385: async function runMsys(args, opts)
// L392-L394: async function pacman(args, opts, command)
// L399-L555: async function run()


================================================
FILE: matrix/action.yml
================================================
name: Matrix

inputs:
  systems:
    description: 'Space separated list of systems to build and test the tool on.'
    required: false
    type: string
    default: 'msys mingw32 mingw64 ucrt64 clang64 clangarm64'
outputs:
  jobs:
    description: "List of MSYS2 systems to be used in the matrix of other jobs."
    value: ${{ steps.jobs.outputs.jobs }}

runs:
  using: 'composite'
  steps:
    - name: Generate list of jobs
      shell: python
      id: jobs
      env:
        INPUT_SYSTEMS: ${{ inputs.systems }}
      run: |
        import os
        icons = {
          'msys':       '🟪',
          'mingw32':    '⬛',
          'mingw64':    '🟦',
          'ucrt64':     '🟨',
          'clang64':    '🟧',
          'clangarm64': '🟩',
        }
        jobs = [
            {
              'sys': sys.lower(),
              'icon': icons[sys.lower()],
              'runs-on': 'windows-11-arm' if sys.lower() == 'clangarm64' else 'windows-latest',
            } for sys in os.environ['INPUT_SYSTEMS'].split(' ')
        ]
        with open(os.environ['GITHUB_OUTPUT'], 'a', encoding='utf-8') as h:
          h.write(f"jobs={jobs!s}\n")


================================================
FILE: release.sh
================================================
// [OUTLINE - 0 symbols, 35 lines]


================================================
FILE: rolldown.config.js
================================================
// [OUTLINE - 2 symbols, 53 lines]
// import rolldown
// import node:fs
// import node:path
// import node:url
// import rollup-plugin-sbom
// L13-L31: function copyAssets(files)
// L16-L29: generateBundle()


================================================
FILE: src/fs-hash.js
================================================
// [OUTLINE - 3 symbols, 76 lines]
// import node:fs
// import node:path
// import node:crypto
// L9-L19: async function hashPath(inputPath)
// L25-L39: async function hashFile(filePath)
// L45-L76: async function hashDirectory(dirPath)


================================================
FILE: test/fs-hash.js
================================================
// [OUTLINE - 0 symbols, 133 lines]
// import node:test
// import node:assert/strict
// import node:fs
// import node:path
// import node:os
// import ../src/fs-hash.js


================================================
FILE: test.sh
================================================
// [OUTLINE - 1 symbols, 25 lines]
// L7-L12: run_cmd()


