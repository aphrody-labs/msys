# Codebase Digest: msys2-devtools

- Files analyzed: 39
- Total lines: 1938
- Total size: 63.3 KB
- Git branch: `main`
- Git HEAD commit: `e12728f1 (Update deps)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-devtools/
├── LICENSE (28 lines, 1.5 KB, ~342 tokens)
├── README.md (21 lines, 567 B, ~147 tokens)
├── experiments/
│   └── shellcheck-pkgbuild (13 lines, 414 B, ~111 tokens)
├── msys2-dbadd (114 lines, 3.8 KB, ~1.3k tokens)
├── msys2-dbremove (74 lines, 2.0 KB, ~678 tokens)
├── msys2-dbremove-api (48 lines, 1.1 KB, ~319 tokens)
├── msys2-dbssh (16 lines, 395 B, ~135 tokens)
├── msys2-lint (5 lines, 76 B, ~21 tokens)
├── msys2-logstats (467 lines, 15.8 KB, ~4.4k tokens)
├── msys2-logstats-report.sh (1 lines, 35 B, ~11 tokens)
├── msys2-pypi-cache (5 lines, 79 B, ~21 tokens)
├── msys2-repo-buildinfo (215 lines, 7.2 KB, ~1.9k tokens)
├── msys2-repo-prune (220 lines, 7.7 KB, ~2.0k tokens)
├── msys2-repo-sigstats (174 lines, 5.1 KB, ~1.4k tokens)
├── msys2-repo-verify (260 lines, 8.1 KB, ~2.1k tokens)
├── msys2-sbom (5 lines, 68 B, ~20 tokens)
├── msys2-srcinfo-cache (5 lines, 85 B, ~22 tokens)
├── msys2_devtools/
│   ├── __init__.py (1 lines, 34 B, ~10 tokens)
│   ├── cmd_lint.py (16 lines, 442 B, ~130 tokens)
│   ├── cpe.py (12 lines, 656 B, ~195 tokens)
│   ├── db.py (5 lines, 205 B, ~67 tokens)
│   ├── exttarfile.py (4 lines, 91 B, ~26 tokens)
│   ├── pkgbuild.py (6 lines, 186 B, ~51 tokens)
│   ├── pkgbuild2json.sh (6 lines, 187 B, ~56 tokens)
│   ├── pkgextra.py (6 lines, 298 B, ~86 tokens)
│   ├── pypi_cache.py (18 lines, 575 B, ~169 tokens)
│   ├── sbom.py (24 lines, 849 B, ~242 tokens)
│   ├── srcinfo.py (2 lines, 143 B, ~47 tokens)
│   ├── srcinfo_cache.py (28 lines, 1.2 KB, ~343 tokens)
│   └── utils.py (9 lines, 364 B, ~125 tokens)
├── pyproject.toml (65 lines, 1.4 KB, ~504 tokens)
├── tests/
│   ├── __init__.py (1 lines, 34 B, ~10 tokens)
│   ├── test_cpe.py (7 lines, 226 B, ~66 tokens)
│   ├── test_db.py (8 lines, 229 B, ~66 tokens)
│   ├── test_main.py (2 lines, 66 B, ~21 tokens)
│   ├── test_sbom.py (4 lines, 156 B, ~42 tokens)
│   ├── test_srcinfo.py (4 lines, 143 B, ~40 tokens)
│   └── test_utils.py (4 lines, 131 B, ~41 tokens)
└── update-installer (35 lines, 2.0 KB, ~684 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# msys2-devtools

Tools for MSYS2 package maintainers

Repo server commands:

* `msys2-dbssh`: Connect to the server and forward the gpg agent

CI commands:

* `msys2-srcinfo-cache`: Maintains srcinfo data for all packages in a git repo
* `msys2-pypi-cache`: Maintains a pypi metadata cache for all packages
* `msys2-sbom`: Generate a SBOM file for all packages

Installation:

For every CLI command there exists a Python package extra with the same name:

* `pip install msys2-devtools[sbom]`

In addition there exists an `all` extra that installs all dependencies.


================================================
FILE: pyproject.toml
================================================
[project]
name = "msys2-devtools"
version = "0.1.0"
description = ""
authors = [{ name = "Christoph Reiter", email = "reiter.christoph@gmail.com" }]
requires-python = ">=3.11.0,<4.0"
readme = "README.md"
license = "BSD-3-Clause"
dependencies = [
    "tabulate>=0.10.0,<0.11",
    "requests>=2.28.2,<3",
    "pydantic>=2.0,<3",
    "backports-zstd>=1.2.0,<2.0.0; python_version < '3.14'",
]

[project.optional-dependencies]
sbom = [
    "cyclonedx-python-lib>=11.0.0,<12",
    "packageurl-python>=0.17.0,<0.18",
]
logstats = [
    "netaddr>=1.0.0,<2",
    "requests-cache>=1.2.1,<2",
]
sigstats = [
    "pgpdump>=1.5,<2",
    "fastprogress>=1.0.3,<1.1",
]
pypi-cache = ["packageurl-python>=0.17.0,<0.18"]
all = [
    "cyclonedx-python-lib>=11.0.0,<12",
    "packageurl-python>=0.17.0,<0.18",
    "netaddr>=1.0.0,<2",
    "pgpdump>=1.5,<2",
    "fastprogress>=1.0.3,<1.1",
    "requests-cache>=1.2.1,<2",
    "pefile>=2024.8.26",
]

[project.scripts]
msys2-srcinfo-cache = "msys2_devtools.srcinfo_cache:run"
msys2-pypi-cache = "msys2_devtools.pypi_cache:run"
msys2-sbom = "msys2_devtools.sbom:run"

[dependency-groups]
dev = [
    "pytest>=8.0.0,<10",
    "ruff>=0.16.0,<0.17.0",
    "msys2-devtools[all]",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.ruff]
line-length = 130
exclude = [".venv"]

[tool.ruff.lint]
select = ["E", "F"]
ignore = ["E741"]

[tool.uv]
exclude-newer = "7 days"


================================================
FILE: LICENSE
================================================
Copyright (c) 2022, MSYS2 developers

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
FILE: experiments/shellcheck-pkgbuild
================================================
#!/bin/bash
# Run with: shellcheck -o check-unassigned-uppercase -ax shellcheck-pkgbuild
set -e
# fake the ones provided by makepkg
pkgdir=""
srcdir=""
MINGW_PACKAGE_PREFIX=""
MINGW_PREFIX=""
CARCH=""
source ./PKGBUILD
# fake usage of all others
# shellcheck disable=SC2086,SC2128,SC2154
echo $srcdir $sha256sums $source $makedepends $depends $install $license $pkgdir $pkgdesc $arch $url $pkgrel $pkgname $pkgbase

================================================
FILE: msys2-dbadd
================================================
#!/bin/bash

set -e

export ZSTD_CLEVEL=19
export ZSTD_NBTHREADS="$(nproc)"

pub=/srv/msys2repo
staging=/home/repo/staging

SIGNWITHKEY=()
if [ -n "${GPGKEY}" ]
then
    SIGNWITHKEY=(-u "${GPGKEY}")
    gpg --recv-key "0x${GPGKEY}"
fi
gpg --detach-sign "${SIGNWITHKEY[@]}" "${0}"
rm "${0}.sig"

(
    shopt -s nullglob
    for f in "${staging}"/*/*/*.{pkg,src}.tar.zst
    do
        echo "$f"

        # Verify that the archives aren't corrupt or truncated etc.
        zstd --quiet --test "$f"

        # Sign, if not already
        test -f "$f.sig" || gpg --detach-sign "${SIGNWITHKEY[@]}" "$f"

        # Make sure the signature file got written properly
        gpg --list-packets "$f.sig" > /dev/null
    done
)

update_packages() {
    local repo="${1}"
    shift
    local path="${1}"
    shift
    local srcpath="${1}"
    shift

    # Skip embedded signatures for everything but msys
    # https://github.com/msys2/msys2-devtools/issues/5
    local repo_options=()
    if [ "${repo}" = "msys" ]; then
        repo_options=(--include-sigs)
    fi

    local files=( $(find "${staging}/${path}" -name "*.pkg.tar.*" -not -name "*.sig") )
    if [ "${#files[@]}" -gt 0 ]
    then
        echo "==> ${path}"

        cp "${pub}/${path}/${repo}".{db,files}{,.tar.zst}{,.sig} "${staging}/${path}/"
        repo-add "${repo_options[@]}" -n -p -s -v "${staging}/${path}/${repo}.db.tar.zst" "${files[@]}"
        zstd --quiet --test "${staging}/${path}/${repo}.db.tar.zst"
        zstd --quiet --test "${staging}/${path}/${repo}.files.tar.zst"
        gpg --verify "${staging}/${path}/${repo}.db.tar.zst.sig" "${staging}/${path}/${repo}.db.tar.zst"
        gpg --verify "${staging}/${path}/${repo}.files.tar.zst.sig" "${staging}/${path}/${repo}.files.tar.zst"
        mv "${staging}/${path}"/* "${pub}/${path}/"

        # check packages
        inrepo="$(bsdtar -xOf "${pub}/${path}/${repo}.db.tar.zst" "*/desc" | grep -A 1 %FILENAME% | sed -e '/^%FILENAME%$/d' -e '/^--$/d' | sed -r 's/^(.*)$/\1\n\1.sig/' | sort)"
        infs="$(find "${pub}/${path}" -name "*.pkg.tar.*" -printf '%f\n' | sort)"
        for f in $(echo "${inrepo}" | grep -vxF -f <(echo "${infs}"))
        do
            echo "==> WARNING: '${f}' is missing."
        done

        # check sources
        inrepo="$(bsdtar -xOf "${pub}/${path}/${repo}.db.tar.zst" "*/desc" | grep -A 4 -e %BASE% | awk '/^%BASE%$/ { getline; printf "%s-", $0; getline; getline; getline; printf "%s\n", $0 }' | sort | uniq)"
        infs="$(find "${pub}/${srcpath}" -name "*.src.tar.*" -not -name "*.src.tar.*.sig" -printf '%f\n' | sort | rev | cut -d. -f 4- | rev)"
        for f in $(echo "${inrepo}" | grep -vxF -f <(echo "${infs}"))
        do
            echo "==> WARNING: '${f}.src.tar.*' is missing."
        done
        infssig="$(find "${pub}/${srcpath}" -name "*.src.tar.*.sig" -printf '%f\n' | sort | rev | cut -d. -f 5- | rev)"
        for f in $(echo "${inrepo}" | grep -vxF -f <(echo "${infssig}"))
        do
            echo "==> WARNING: '${f}.src.tar.*.sig' is missing."
        done

        echo
    fi
}

update_sources() {
    local path="${1}"
    shift

    if [ -n "$(find "${staging}/${path}/sources" -name "*.src.tar.*")" ]
    then
        echo "==> ${path}"
        mv "${staging}/${path}/sources"/* "${pub}/${path}/sources/"
    fi
}

update_sources mingw
update_sources msys

update_packages mingw64 "mingw/mingw64"  "mingw/sources"
update_packages mingw32 "mingw/mingw32"    "mingw/sources"
update_packages ucrt64  "mingw/ucrt64"  "mingw/sources"
update_packages clang64 "mingw/clang64" "mingw/sources"
update_packages clang32 "mingw/clang32" "mingw/sources"
update_packages clangarm64 "mingw/clangarm64" "mingw/sources"
update_packages mingwarm64 "mingw/mingwarm64" "mingw/sources"
update_packages msys    "msys/x86_64"   "msys/sources"
update_packages msys    "msys/i686"     "msys/sources"

date +%s > "${pub}/lastupdate"


================================================
FILE: msys2-dbremove
================================================
#!/bin/bash

set -e

export ZSTD_CLEVEL=19
export ZSTD_NBTHREADS="$(nproc)"

pub=/srv/msys2repo
staging=/home/repo/staging

SIGNWITHKEY=()
if [ -n "${GPGKEY}" ]
then
    SIGNWITHKEY=(-u "${GPGKEY}")
    gpg --recv-key "0x${GPGKEY}"
fi
gpg --detach-sign "${SIGNWITHKEY[@]}" "${0}"
rm "${0}.sig"

update_packages() {
    local repo="${1}"
    shift
    local path="${1}"
    shift

    local pkgs=("${@}")

    if [ "${#pkgs[@]}" -gt 0 ]
    then
        echo "==> ${path}"
        mkdir -p "${staging}/${path}/"
        cp "${pub}/${path}/${repo}".{db,files}{,.tar.zst}{,.sig} "${staging}/${path}/"
        repo-remove -s -v "${staging}/${path}/${repo}.db.tar.zst" "${pkgs[@]}"
        zstd --quiet --test "${staging}/${path}/${repo}.db.tar.zst"
        zstd --quiet --test "${staging}/${path}/${repo}.files.tar.zst"
        gpg --verify "${staging}/${path}/${repo}.db.tar.zst.sig" "${staging}/${path}/${repo}.db.tar.zst"
        gpg --verify "${staging}/${path}/${repo}.files.tar.zst.sig" "${staging}/${path}/${repo}.files.tar.zst"
        mv "${staging}/${path}/${repo}".{db,files}{,.tar.zst}{,.sig} "${pub}/${path}/"
        echo
    fi
}

repo="${1}"
shift
if [ "${repo}" = "mingw64" ]
then
    update_packages mingw64 "mingw/mingw64" "${@}"
elif [ "${repo}" = "mingw32" ]
then
    update_packages mingw32 "mingw/mingw32" "${@}"
elif [ "${repo}" = "ucrt64" ]
then
    update_packages ucrt64 "mingw/ucrt64" "${@}"
elif [ "${repo}" = "clang64" ]
then
    update_packages clang64 "mingw/clang64" "${@}"
elif [ "${repo}" = "clang32" ]
then
    update_packages clang32 "mingw/clang32" "${@}"
elif [ "${repo}" = "clangarm64" ]
then
    update_packages clangarm64 "mingw/clangarm64" "${@}"
elif [ "${repo}" = "mingwarm64" ]
then
    update_packages mingwarm64 "mingw/mingwarm64" "${@}"
elif [ "${repo}" = "msys" ]
then
    update_packages msys "msys/x86_64" "${@}"
else
    echo "Missing or unrecognized first argument: msys|mingw32|mingw64|ucrt64|clang64|clang32|clangarm64|mingwarm64" >&2
    exit 1
fi

date +%s > "${pub}/lastupdate"


================================================
FILE: msys2-dbremove-api
================================================
#!/usr/bin/env python3

import os
import sys
import requests
import argparse
import subprocess
import shutil


DIR = os.path.dirname(os.path.realpath(__file__))


def remove_all(args):
    r = requests.get("https://packages.msys2.org/api/removals?recursive=true")
    r.raise_for_status()
    to_remove = []

    for entry in r.json():
        repo = entry["repo"]
        name = entry["name"]
        to_remove.append((repo, name))

    for repo, name in to_remove:
        print(f"Removing '{name}' from '{repo}'")

    choice = input("OK to remove? [Y/n] ")
    if choice.upper() != "Y":
        print("Aborting")
        return

    grouped = {}
    for repo, name in to_remove:
        grouped.setdefault(repo, []).append(name)

    for repo, names in grouped.items():
        subprocess.check_call([
            shutil.which("bash"), os.path.join(DIR, "msys2-dbremove"), repo, *names])


def main(argv):
    parser = argparse.ArgumentParser(description="Remove packages", allow_abbrev=False)
    args = parser.parse_args(argv[1:])
    remove_all(args)


if __name__ == "__main__":
    main(sys.argv)


================================================
FILE: msys2-dbssh
================================================
#!/bin/bash

set -e

# https://wiki.gnupg.org/AgentForwarding
host=repo@repo.msys2.org
local_gpga_socket="$(gpgconf --list-dirs agent-extra-socket)"
remote_gpga_socket="$(ssh "${host}" -- gpgconf --list-dirs agent-socket)"

if test "${#}" -eq 0
then
	args=()
else
	args=(bash -lc "'\"\$@\"'" bash)
fi
exec ssh -tt -R "${remote_gpga_socket}:${local_gpga_socket}" "${host}" -- "${args[@]}" "${@}"


================================================
FILE: msys2-lint
================================================
#!/usr/bin/env python3

from msys2_devtools import cmd_lint

cmd_lint.run()


================================================
FILE: msys2-logstats
================================================
#!/usr/bin/env python3
# Expects traefik json access logs either by passing a log file as the first argument, or via stdin

import json
import re
import sys
import argparse
from datetime import datetime
from collections import Counter
from typing import List, Tuple, Optional
from dataclasses import dataclass

from tabulate import tabulate
import requests_cache
from netaddr import IPSet, IPAddress


@dataclass
class LogEntry:
    ClientHost: str
    DownstreamStatus: int
    RequestHost: str
    RequestMethod: str
    RequestPath: str
    RequestProtocol: str
    UserAgent: str
    time: str
    client_info: "Optional[ClientInfo]"


@dataclass
class UserAgent:
    pacman_version: Tuple[int, int, int]
    windows_version: Tuple[int, int]
    build_number: int
    cygwin_arch: str
    host_arch: str
    libalpm_version: Tuple[int, int, int]


@dataclass
class ClientInfo:
    pacman_version: str
    windows_edition: str
    user_agent: UserAgent
    ci: str


def is_valid_user_agent(ua: str) -> bool:
    return ua.startswith("pacman") and "_NT-" in ua


def parse_user_agent(ua: str) -> UserAgent:
    assert is_valid_user_agent(ua)
    m = re.match(r"pacman/([^\s]+) \(([^-]+)-([^-]+)-?([0-9]+|)-?(.+|) ([^)]+)\) libalpm/(.+)", ua)
    assert m is not None
    pacman_version, _, windows_version, build_number, extra, arch, alpm_version = m.groups()

    pacman_version = tuple(map(int, pacman_version.split("-")[0].split(".")))
    windows_version = tuple(map(int, windows_version.split(".")))
    build_number = int(build_number or "-1")
    cygwin_arch = arch
    if extra in ("WOW64", "WOW") and cygwin_arch == "i686":
        host_arch = "x86_64"
    elif extra == "ARM64":
        host_arch = "aarch64"
    elif extra:
        host_arch = "???"
    else:
        host_arch = cygwin_arch
    alpm_version = tuple(map(int, alpm_version.split(".")))

    return UserAgent(
        pacman_version,
        windows_version,
        build_number,
        cygwin_arch,
        host_arch,
        alpm_version
    )


def test_parse_user_agent():
    ua = "pacman/6.0.1 (MSYS_NT-10.0-19042 x86_64) libalpm/13.0.1"
    assert parse_user_agent(ua).pacman_version == (6, 0, 1)
    ua = "pacman/6.0.1 (MSYS_NT-10.0-19042-WOW64 i686) libalpm/13.0.1"
    assert parse_user_agent(ua).cygwin_arch == "i686"
    assert parse_user_agent(ua).host_arch == "x86_64"
    assert parse_user_agent(ua).build_number == 19042
    ua = "pacman/5.2.1 (MSYS_NT-6.1-7601-WOW64 i686) libalpm/12.0.1"
    assert parse_user_agent(ua).cygwin_arch == "i686"
    assert parse_user_agent(ua).host_arch == "x86_64"
    assert parse_user_agent(ua).build_number == 7601
    ua = "pacman/5.1.0 (MINGW64_NT-10.0 x86_64) libalpm/11.0.0"
    assert parse_user_agent(ua).build_number == -1
    assert parse_user_agent(ua).cygwin_arch == "x86_64"
    assert parse_user_agent(ua).host_arch == "x86_64"
    ua = "pacman/5.0.1 (UCRT64_NT-10.0-WOW i686) libalpm/10.0.1"
    assert parse_user_agent(ua).build_number == -1
    assert parse_user_agent(ua).host_arch == "x86_64"
    assert parse_user_agent(ua).cygwin_arch == "i686"
    ua = "pacman/4.2.1-313-g5535-dirty (MINGW64_NT-6.1 x86_64) libalpm/9.0.1"
    assert parse_user_agent(ua).pacman_version == (4, 2, 1)
    ua = "pacman/6.0.1 (MSYS_NT-6.0-6002 x86_64) libalpm/13.0.1"
    assert parse_user_agent(ua).windows_version == (6, 0)
    ua = "pacman/6.1.0 (MSYS_NT-10.0-22631-ARM64 x86_64) libalpm/14.0.0"
    assert parse_user_agent(ua).host_arch == "aarch64"
    assert parse_user_agent(ua).cygwin_arch == "x86_64"
    ua = "pacman/6.1.0 (MSYS_NT-10.0-22631-ARM64 i686) libalpm/14.0.0"
    assert parse_user_agent(ua).host_arch == "aarch64"
    assert parse_user_agent(ua).cygwin_arch == "i686"


def test_get_windows_edition():
    ua = "pacman/6.0.1 (MSYS_NT-6.0-6002 x86_64) libalpm/13.0.1"
    assert get_windows_edition(parse_user_agent(ua)) == "Vista"
    ua = "pacman/4.2.1-463-gbb493-dirty (MINGW32_NT-5.0 i686) libalpm/10.0.0"
    assert get_windows_edition(parse_user_agent(ua)) == "2000"


def get_windows_edition(ua: UserAgent):
    if ua.windows_version >= (10, 0):
        if ua.build_number >= 22000:
            return "11"
        else:
            return "10"
    elif ua.windows_version == (5, 0):
        return "2000"
    elif ua.windows_version == (5, 1):
        return "XP"
    elif ua.windows_version == (5, 2):
        return "XP"
    elif ua.windows_version == (6, 0):
        return "Vista"
    elif ua.windows_version == (6, 1):
        return "7"
    elif ua.windows_version == (6, 2):
        return "8"
    elif ua.windows_version == (6, 3):
        return "8.1"
    else:
        assert 0, ua


def get_ci_networks():
    session = requests_cache.CachedSession(
        'msys2-logstats-ci', expire_after=360, use_cache_dir=True)
    r = session.get("https://api.github.com/meta")
    r.raise_for_status()
    gha = IPSet(r.json()["actions"])

    r = session.get("https://www.appveyor.com/ips.json")
    r.raise_for_status()
    appveyor = IPSet(r.json())

    r = session.get("https://www.gstatic.com/ipranges/cloud.json")
    r.raise_for_status()
    prefixes = set()
    for prefix in r.json()["prefixes"]:
        prefixes.add(prefix.get("ipv4Prefix", prefix.get("ipv6Prefix")))
    gcp = IPSet(prefixes)

    r = session.get("https://ip-ranges.amazonaws.com/ip-ranges.json")
    r.raise_for_status()
    prefixes = set()
    for prefix in r.json()["prefixes"]:
        prefixes.add(prefix["ip_prefix"])
    for prefix in r.json()["ipv6_prefixes"]:
        prefixes.add(prefix["ipv6_prefix"])
    aws = IPSet(prefixes)

    r = session.get(
        "https://www.microsoft.com/en-us/download/details.aspx?id=56519",
        headers={
            'User-Agent':
                'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0'
        }
    )
    r.raise_for_status()
    match = re.search("(https://download.microsoft.com/.*?/ServiceTags_Public_.*?\\.json)", r.text)
    r = session.get(match.groups(0)[0])
    r.raise_for_status()
    prefixes = set()
    for value in r.json()["values"]:
        for nw in value["properties"]["addressPrefixes"]:
            prefixes.add(nw)
    azure = IPSet(prefixes)

    return {"GHA": gha, "APPV": appveyor, "GCP": gcp, "AWS": aws, "AZ": azure}


def get_repo_for_path(path: str) -> str:
    repo = path.rsplit("/", 1)[0].lstrip("/")
    if repo == "mingw/i686":
        repo = "mingw/mingw32"
    elif repo == "mingw/x86_64":
        repo = "mingw/mingw64"

    return repo


def get_type_for_path(path: str) -> str:
    if path.endswith(".db") or ".db." in path:
        return "db"
    elif path.endswith(".files") or ".files." in path:
        return "db"
    else:
        return "pkg"


def print_repos(entries, show_ci):
    for request_type in ["pkg", "db"]:
        type_requests = [e for e in entries if get_type_for_path(e.RequestPath) == request_type]
        table = []
        for (repo, type_, ci), count in Counter([
                (get_repo_for_path(e.RequestPath), get_type_for_path(e.RequestPath),
                 e.client_info.ci) for e in type_requests]).most_common():
            pcnt = count / len(type_requests) * 100
            line = [repo, type_, ci, f"{pcnt:.2f}%", f"{count}"]
            if not show_ci:
                line.pop(2)
            table.append(line)
        headers = ["Repo", "Type", "CI", "% Requests", "Requests"]
        if not show_ci:
            headers.pop(2)
        print()
        print(tabulate(table, headers, stralign="right", numalign="right"))


def print_windows_major(clients, entries, show_ci):
    per_request = {}
    for (edition, ci), count in Counter([(e.client_info.windows_edition, e.client_info.ci) for e in entries]).most_common():
        per_request[(edition, ci)] = count
    table = []
    for (edition, ci), count_clients in Counter([(u.windows_edition, u.ci) for u in clients]).most_common():
        pcnt_clients = count_clients / len(clients) * 100
        count_req = per_request[(edition, ci)]
        pcnt_req = count_req / len(entries) * 100
        line = [edition, ci, f"{pcnt_clients:.2f}%", f"{count_clients}", f"{pcnt_req:.2f}%", f"{count_req}"]
        if not show_ci:
            line.pop(1)
        table.append(line)
    headers = ["Windows", "CI", "% Clients", "Clients", "% Requests", "Requests"]
    if not show_ci:
        headers.pop(1)
    print()
    print(tabulate(table, headers, stralign="right", numalign="right"))


def print_ci_systems(clients, entries):
    per_request = {}
    for ci, count in Counter([e.client_info.ci for e in entries]).most_common():
        per_request[ci] = count
    table = []
    for ci, count_clients in Counter([u.ci for u in clients]).most_common():
        pcnt_clients = count_clients / len(clients) * 100
        count_req = per_request[ci]
        pcnt_req = count_req / len(entries) * 100
        line = [ci, f"{pcnt_clients:.2f}%", f"{count_clients}", f"{pcnt_req:.2f}%", f"{count_req}"]
        table.append(line)
    headers = ["CI", "% Clients", "Clients", "% Requests", "Requests"]
    print()
    print(tabulate(table, headers, stralign="right", numalign="right"))


def print_windows_version_details(clients, show_ci):
    table = []
    for (windows_version, build_number, ci), count in Counter(
            [(u.user_agent.windows_version, u.user_agent.build_number, u.ci) for u in clients]).most_common():
        pcnt = count / len(clients) * 100
        line = [".".join(map(str, windows_version)), build_number, ci, f"{pcnt:.2f}%", f"{count}"]
        if not show_ci:
            line.pop(2)
        table.append(line)
    headers = ["Win Ver", "Build Number", "CI", "% Clients", "Clients"]
    if not show_ci:
        headers.pop(2)
    print()
    print(tabulate(table, headers, stralign="right", numalign="right"))


def print_pacman(clients, show_ci):
    table = []
    for (version, ci), count in Counter([(u.pacman_version, u.ci) for u in clients]).most_common():
        pcnt = count / len(clients) * 100
        line = [version, ci, f"{pcnt:.2f}%", f"{count}"]
        if not show_ci:
            line.pop(1)
        table.append(line)
    headers = ["Pacman Ver", "CI", "% Clients", "Clients"]
    if not show_ci:
        headers.pop(1)
    print()
    print(tabulate(table, headers, stralign="right", numalign="right"))


def print_system_arch(clients, show_ci):
    table = []
    for (cygwin_arch, host_arch, ci), count in Counter([(u.user_agent.cygwin_arch, u.user_agent.host_arch, u.ci) for u in clients]).most_common():
        pcnt = count / len(clients) * 100
        line = [cygwin_arch, host_arch, ci, f"{pcnt:.2f}%", f"{count}"]
        if not show_ci:
            line.pop(2)
        table.append(line)
    headers = ["Cygwin Arch", "Host Arch", "CI", "% Clients", "Clients"]
    if not show_ci:
        headers.pop(2)
    print()
    print(tabulate(table, headers, stralign="right", numalign="right"))


def datetime_fromisoformat(value: str) -> datetime:
    # For Python <3.11
    if value.endswith("Z"):
        value = value[:-1] + "+00:00"
    return datetime.fromisoformat(value)


def main(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument('infile', nargs='?', type=argparse.FileType('r', encoding="utf-8"), default=sys.stdin)
    parser.add_argument('--show-ci', action='store_true', help='show CI/cloud providers')
    parser.add_argument('--skip-ci', action='store_true', help='skip CI/cloud IP ranges')
    parser.add_argument('--only-ci', action='store_true', help='only CI/cloud IP ranges')
    parser.add_argument('--show-summary', action='store_true', help='show only a CI/cloud summary')
    args = parser.parse_args(argv[1:])

    assert not (args.skip_ci and args.only_ci)

    detect_ci = False

    if args.show_summary:
        assert not args.skip_ci
        assert not args.only_ci
        args.show_ci = True
        detect_ci = True

    if args.skip_ci or args.only_ci:
        detect_ci = True

    if detect_ci:
        ci_networks = get_ci_networks()

    entries: List[LogEntry] = []
    decoder = json.JSONDecoder()
    with args.infile as h:
        for line in h:
            if not line.startswith("{"):
                continue
            decoded = decoder.decode(line)
            if "RequestHost" not in decoded or "request_User-Agent" not in decoded:
                continue
            entry = LogEntry(
                decoded["ClientHost"],
                decoded["DownstreamStatus"],
                decoded["RequestHost"],
                decoded["RequestMethod"],
                decoded["RequestPath"],
                decoded["RequestProtocol"],
                decoded["request_User-Agent"],
                decoded["time"],
                None,
            )
            if entry.RequestMethod != "GET":
                continue
            if entry.RequestHost == "repo.msys2.org":
                if entry.DownstreamStatus not in [200, 206, 304]:
                    continue
            elif entry.RequestHost == "mirror.msys2.org":
                if entry.DownstreamStatus not in [302, 304]:
                    continue
            else:
                continue
            if not is_valid_user_agent(entry.UserAgent):
                continue
            entries.append(entry)

    def user_key(entry):
        # only take the system part of the UA, so we don't count
        # a client twice if it upgrades during a job for example
        system_id = "".join(entry.UserAgent.split()[1:3])
        return system_id + entry.ClientHost

    first = entries[0].time
    last = entries[0].time
    grouped = {}
    for entry in entries:
        if entry.time < first:
            first = entry.time
        if entry.time > last:
            last = entry.time
        key = user_key(entry)
        grouped.setdefault(key, []).append(entry)

    ip_to_ci = {}
    if detect_ci:
        def get_ip_to_ci(ip_addr: str) -> str:
            ip = IPAddress(ip_addr)
            for name, ipset in ci_networks.items():
                if ip in ipset:
                    return name
            return ""

        for group_entries in grouped.values():
            ip = group_entries[0].ClientHost
            ip_to_ci[ip] = get_ip_to_ci(ip)

    clients: List[ClientInfo] = []
    for group_entries in grouped.values():
        user_agent = parse_user_agent(group_entries[0].UserAgent)
        ci = ip_to_ci.get(group_entries[0].ClientHost, "")
        client_info = ClientInfo(
            ".".join(map(str, user_agent.pacman_version)),
            get_windows_edition(user_agent),
            user_agent,
            ci
        )
        clients.append(client_info)
        for e in group_entries:
            e.client_info = client_info

    if args.skip_ci:
        entries = [e for e in entries if not ip_to_ci.get(e.ClientHost, "")]
        clients = [c for c in clients if not c.ci]

    if args.only_ci:
        entries = [e for e in entries if ip_to_ci.get(e.ClientHost, "")]
        clients = [c for c in clients if c.ci]

    # Log info
    diff = datetime_fromisoformat(last) - datetime_fromisoformat(first)
    duration = (diff).total_seconds()
    requests_per_second = len(entries) / duration
    print(tabulate([
        ["Duration", f"from {first} to {last} ({diff})"],
        ["Requests", f"{len(entries)} ({requests_per_second:.2f}/s)"],
        ["Clients", f"{len(clients)} (clients are grouped by IP+WinVer+Arch)"],
        ["Included", "CI only" if args.only_ci else "non-CI only" if args.skip_ci else "all"],
    ]))

    # Repos
    if not args.show_summary:
        print_repos(entries, args.show_ci)

    # CI Systems
    if args.show_ci:
        print_ci_systems(clients, entries)

    # Windows versions
    if not args.show_summary:
        print_windows_major(clients, entries, args.show_ci)

    # Windows versions detailed
    if not args.show_summary:
        print_windows_version_details(clients, args.show_ci)

    # Pacman
    if not args.show_summary:
        print_pacman(clients, args.show_ci)

    # CPU Arch
    if not args.show_summary:
        print_system_arch(clients, args.show_ci)


if __name__ == "__main__":
    main(sys.argv)


================================================
FILE: msys2-logstats-report.sh
================================================
// [OUTLINE - 0 symbols, 33 lines]


================================================
FILE: msys2-pypi-cache
================================================
#!/usr/bin/env python3

from msys2_devtools import pypi_cache

pypi_cache.run()

================================================
FILE: msys2-repo-buildinfo
================================================
#!/bin/env python3

import argparse
import fnmatch
import os
import sys
from contextlib import contextmanager, closing

from msys2_devtools.exttarfile import tarfile
from msys2_devtools.utils import vercmp
from fastprogress.fastprogress import progress_bar
from concurrent.futures import ThreadPoolExecutor
import pefile


def find_dbs(target_dir: str) -> list[str]:
    db_paths = set()
    target_dir = os.path.realpath(target_dir)
    for root, dirs, files in os.walk(target_dir):
        for name in files:
            if fnmatch.fnmatch(name, "*.db"):
                db_paths.add(os.path.realpath(os.path.join(root, name)))

    return sorted(db_paths)


def get_package_paths(root_path: str) -> list[str]:
    dbs = find_dbs(root_path)
    paths = set()
    for db_path in dbs:

        with tarfile.TarFile.open(db_path, mode="r") as tar:
            for info in tar.getmembers():
                file_name = info.name.rsplit("/", 1)[-1]
                if file_name == "desc":
                    infodata = tar.extractfile(info).read().decode()
                    lines = infodata.splitlines()
                    filename = lines[lines.index("%FILENAME%") + 1]
                    paths.add(os.path.join(os.path.dirname(db_path), filename))
    return sorted(paths)


def parse_buildinfo(buildinfo: str) -> dict[str, list[str]]:
    res: dict[str, list[str]] = {}
    for line in buildinfo.splitlines():
        line = line.strip()
        if not line:
            continue

        key, value = line.split(" =", 1)
        value = value.strip()
        values = [value] if value else []
        res.setdefault(key, []).extend(values)

    return res


@contextmanager
def pefile_set_max_import_symbols(max_symbols: int):
    old = pefile.MAX_IMPORT_SYMBOLS
    pefile.MAX_IMPORT_SYMBOLS = max_symbols
    try:
        yield
    finally:
        pefile.MAX_IMPORT_SYMBOLS = old


# python uses .pyd for extensions, ruby uses .so, and octave uses .oct
PE_FILE_EXTENSIONS = (".dll", ".exe", ".pyd", ".so", ".oct")


def get_imported_dlls(data: bytes, name: str) -> set[str]:
    try:
        with pefile_set_max_import_symbols(0x10000), \
            closing(pefile.PE(data=data, fast_load=True)) as pe:
            pe.parse_data_directories(directories=[
                pefile.DIRECTORY_ENTRY['IMAGE_DIRECTORY_ENTRY_IMPORT']
            ])

            if len(pe.get_warnings()) > 0:
                print(f"Warnings for PE ({name}):")
                pe.show_warnings()

            if not hasattr(pe, 'DIRECTORY_ENTRY_IMPORT'):
                return set()
            return {entry.dll.decode().lower() for entry in pe.DIRECTORY_ENTRY_IMPORT}
    except pefile.PEFormatError:
        print(f"PEFormatError while parsing PE file ({name}), skipping imports")
        return set()


def get_buildinfo(path: str, needs_files: bool, needs_imports: bool) -> tuple[dict, set[str], set[str]]:
    buildinfo = None
    files = set()
    imports = set()
    with tarfile.TarFile.open(path, mode="r") as tar:
        for info in tar.getmembers():
            if info.name == ".BUILDINFO":
                buildinfo = tar.extractfile(info).read().decode()
            if needs_files and info.isfile() and not info.name.startswith("."):
                files.add(info.name)
            if needs_imports and info.isfile() and info.name.lower().endswith(PE_FILE_EXTENSIONS):
                data = tar.extractfile(info).read()
                imports.update(get_imported_dlls(data, info.name))

    if buildinfo is None:
        raise RuntimeError(f"Cannot find .BUILDINFO in {path}")
    return parse_buildinfo(buildinfo), files, imports


def parse_vercmp(comparison_expression) -> tuple[str, str | None, str | None]:
    operators = ['>=', '<=', '=', '>', '<']

    package_name = comparison_expression
    operator = None
    version = None

    for op in operators:
        if op in comparison_expression:
            parts = comparison_expression.split(op, 1)
            package_name = parts[0].strip()
            version = parts[1].strip()
            operator = op
            break

    return package_name, operator, version


def parse_full_package_name(full_name: str) -> tuple[str, str]:
    name = full_name.rsplit("-", 3)[0]
    version = full_name[len(name) + 1:].rsplit("-", 1)[0]
    return name, version


def package_matches(full_name: str, expression: str) -> bool:
    package_name, package_version = parse_full_package_name(full_name)
    ex_name, ex_operator, ex_version = parse_vercmp(expression)
    if ex_name != package_name:
        return False

    if ex_operator is None or ex_version is None:
        return True

    if ex_operator == "=":
        return ex_version == package_version
    elif ex_operator == ">":
        return vercmp(package_version, ex_version) > 0
    elif ex_operator == "<":
        return vercmp(package_version, ex_version) < 0
    elif ex_operator == ">=":
        return vercmp(package_version, ex_version) >= 0
    elif ex_operator == "<=":
        return vercmp(package_version, ex_version) <= 0
    else:
        raise ValueError(f"Unknown operator: {ex_operator}")


def main(argv):
    parser = argparse.ArgumentParser(
        description="List things about the package contents", allow_abbrev=False
    )
    parser.add_argument("root", help="path to root dir")
    parser.add_argument("--built-with-package",
                        help="filter packages that had this package installed during build time "
                             "(optionally with a version constraint, e.g. 'foo>=1.0')")
    parser.add_argument("--contains-file",
                        help="filter packages that contain files matching this glob pattern (e.g. '*.a')")
    parser.add_argument("--imports-dll",
                        action="append",
                        default=[],
                        metavar="DLL",
                        help="filter packages that import this DLL (e.g. 'libfoo.dll'); "
                             "can be given multiple times")

    args = parser.parse_args(argv[1:])

    installed_filter = args.built_with_package
    file_pattern = args.contains_file
    dll_filters = args.imports_dll

    found = set()
    paths = get_package_paths(args.root)

    def process_path(p):
        buildinfo, files, imports = get_buildinfo(p, needs_files=file_pattern is not None, needs_imports=bool(dll_filters))
        return buildinfo, files, imports

    with ThreadPoolExecutor(4) as executor:
        for buildinfo, files, imports in progress_bar(executor.map(process_path, paths), total=len(paths), leave=False):
            if installed_filter is not None:
                for installed_full_name in buildinfo["installed"]:
                    if package_matches(installed_full_name, installed_filter):
                        break
                else:
                    continue

            if file_pattern is not None:
                for file in files:
                    if fnmatch.fnmatch(file, file_pattern):
                        break
                else:
                    continue

            if dll_filters:
                if not any(dll in imports for dll in dll_filters):
                    continue

            found.update(buildinfo["pkgbase"])

    for f in sorted(found):
        print(f)


if __name__ == "__main__":
    main(sys.argv)


================================================
FILE: msys2-repo-prune
================================================
#!/usr/bin/env python3

import os
import re
import sys
import fnmatch
import argparse
from datetime import datetime, timedelta

from msys2_devtools.exttarfile import tarfile


def get_safe_patterns_for_db(db_path):
    """Returns a list of filename patterns that are 'referenced' by the DB

    Any files matching any of the patterns should not be deleted.
    """

    safe_patterns = {
        "*.db.*",
        "*.files.*",
        "*.db",
        "*.files",
    }

    with tarfile.TarFile.open(db_path, mode='r') as tar:
        for info in tar.getmembers():
            file_name = info.name.rsplit("/", 1)[-1]
            if file_name == "desc":
                infodata = tar.extractfile(info).read().decode()
                lines = infodata.splitlines()

                def get_value(key, default=None):
                    if key in lines:
                        return lines[lines.index(key) + 1]
                    assert default is not None
                    return default

                filename = get_value("%FILENAME%")
                assert fnmatch.fnmatchcase(filename, "*.pkg.*")
                filename += "*"
                sourcename = get_value("%BASE%", get_value("%NAME%"))
                sourcename += "-" + get_value("%VERSION%") + "*.src.*"
                safe_patterns.add(filename)
                safe_patterns.add(sourcename)

    return safe_patterns


def log(*message):
    """Print to stderr, so we can redirect stdout for the file list"""

    print('\033[94m' + "[LOG]" + '\033[0m', end=" ", file=sys.stderr)
    print(*message, file=sys.stderr)


def find_dbs(target_dir):
    """Recursively look for DB files"""

    db_paths = set()
    target_dir = os.path.realpath(target_dir)
    for root, dirs, files in os.walk(target_dir):
        for name in files:
            if fnmatch.fnmatch(name, '*.db'):
                db_paths.add(os.path.join(root, name))

    return db_paths


def get_dirs_to_prune(db_path):
    """For every DB file we also have a sources directory"""

    dir_ = os.path.dirname(db_path)
    sources = os.path.normpath(os.path.join(dir_, '..', 'sources'))
    assert os.path.exists(dir_)
    assert os.path.exists(sources)
    return {dir_, sources}


def fnmatch_filter_case_multi(names, patterns):
    """Like fnmatch.filter() but case sensitive and supports multiple patterns"""

    regex = re.compile('|'.join(fnmatch.translate(p) for p in patterns))
    return [e for e in names if regex.match(e)]


def get_files_to_prune(target_dir, time_delta):
    """Gives a list of paths to delete"""

    newest_mtime = 0.0
    prune_mapping = {}
    for db_path in find_dbs(target_dir):
        # Make sure we don't look at one repo alone, otherwise we might delete sources
        # referenced from another repo
        if os.path.samefile(os.path.dirname(db_path), target_dir):
            raise SystemExit("Error: root dir is same as repo dir, move one level up at least")

        log("Found DB:", db_path)
        db_mtime = os.path.getmtime(db_path)
        if db_mtime > newest_mtime:
            newest_mtime = db_mtime

        patterns = get_safe_patterns_for_db(db_path)
        for prune_dir in get_dirs_to_prune(db_path):
            if prune_dir not in prune_mapping:
                log("Found prune location:", prune_dir)
                prune_mapping[prune_dir] = set(patterns)
            else:
                prune_mapping[prune_dir].update(patterns)

    log("Searching...")
    ref_mtime = datetime.fromtimestamp(newest_mtime)
    paths_to_delete = set()
    for prune_dir, safe_patterns in sorted(prune_mapping.items()):
        log("Dir:", prune_dir)

        def get_entries_not_to_delete(entries):
            return set(fnmatch_filter_case_multi(entries, safe_patterns))

        def group_by_package_name_and_ext(entries):
            groups = {}
            for e in entries:
                name = e.rsplit("-", 3)[0]
                ext = e.rsplit("-", 1)[-1].split(".", 1)[-1]
                # normalize different compression types
                ext = ext.replace(".xz", "").replace(".zst", "").replace(".gz", "")
                if ext.startswith("src."):
                    name = e.rsplit("-", 2)[0]
                else:
                    name = e.rsplit("-", 3)[0]
                groups.setdefault((name, ext), []).append(e)
            return list(groups.values())

        def get_timestamp(entry):
            path = os.path.join(prune_dir, entry)
            return datetime.fromtimestamp(os.path.getmtime(path))

        def is_too_old(entry, factor=1):
            dt = get_timestamp(entry)
            return dt <= ref_mtime and ref_mtime - dt > time_delta * factor

        def group_get_paths_too_old(group, not_to_delete):
            # For every group we keep one package that is older than the cut-off point
            # so that at the cut-off point all packages of the DB synced at the time still exist
            group.sort(key=get_timestamp)
            maybe_too_old = set()
            for i, e in enumerate(group):
                if not is_too_old(e):
                    maybe_too_old.update(group[:max(0, i-1)])
                    break
            else:
                # XXX: In case a package got removed from the DB and all are too old we might still
                # want to keep the last one since it might have been in the DB back then.
                # We can't be sure though, so just keek it if it's not older than 4 * time_delta
                if is_too_old(group[-1], 4):
                    maybe_too_old.update(group)
                else:
                    maybe_too_old.update(group[:-1])
            return [os.path.join(prune_dir, e) for e in maybe_too_old if e not in not_to_delete]

        # we group package by type and name and keep only one package per group around
        # that is older than the prune date
        entries = sorted(os.listdir(prune_dir))
        not_to_delete = get_entries_not_to_delete(entries)

        for group in group_by_package_name_and_ext(entries):
            paths_to_delete.update(group_get_paths_too_old(group, not_to_delete))

    def get_related_files(path: str) -> list[str]:
        """Returns a list of related files which should be deleted together with the given file"""

        if not path.endswith(".sig"):
            return [path + ".sig"]
        else:
            return [path[:-4]]

    def related_also_to_delete(path: str) -> bool:
        """Returns True if all related files are also to be deleted, or don't exist"""

        for related in get_related_files(path):
            if related not in paths_to_delete and os.path.exists(related):
                return False
        return True

    paths_to_delete = set(p for p in paths_to_delete if related_also_to_delete(p))

    return paths_to_delete


def main(argv):
    parser = argparse.ArgumentParser(
        description="List old packages to prune", allow_abbrev=False)
    parser.add_argument("root", help="path to root dir")
    parser.add_argument("--days", default=365 * 1.75, type=int,
                        help="days after which a package can be pruned")

    args = parser.parse_args(argv[1:])
    log(f"Pruning unused files older than {args.days} days")
    time_delta = timedelta(days=args.days)
    paths = get_files_to_prune(args.root, time_delta)
    log(f"Found {len(paths)} files to prune")

    size = 0
    for path in sorted(paths):
        size += os.path.getsize(path)
        log(str(datetime.fromtimestamp(os.path.getmtime(path))).split()[0], path)
    log(f"Removing would save {size / 1024 ** 3: .3f} GB")

    choice = input("OK to delete? [Y/n] ")
    if choice.upper() != "Y":
        print("Aborting")
        return

    for path in sorted(paths):
        log(f"Removing {path}")
        os.remove(path)


if __name__ == '__main__':
    main(sys.argv)


================================================
FILE: msys2-repo-sigstats
================================================
#!/bin/env python3

import argparse
import binascii
import fnmatch
import glob
import os
import struct
import sys
from collections import Counter
from datetime import datetime, UTC
from typing import NamedTuple, Iterator

from pgpdump import BinaryData
from pgpdump.utils import PgpdumpException
from tabulate import tabulate
from fastprogress.fastprogress import progress_bar

from msys2_devtools.exttarfile import tarfile

KNOWN_KEYS = {
    "AD351C50AE085775EB59333B5F92EFC1A47D45A1": "Alexey Pavlov",
    "909F9599D1A2046B21FAEB3C4DF3B7664CA56930": "Ray Donnelly",
    "C65EC8966983541D52B97A16D595C9AB2C51581E": "Martell Malone",
    "87771331B3F1FF5263856A6D974C8BE49078F532": "David Macek",
    "5F944B027F7FE2091985AA2EFA11531AA0AA7F57": "Christoph Reiter",
    "4A6129F4E4B84AE46ED7F635628F528CF3053E04": "David Macek",
}


SHORT_KEYS = {k[-16:]: v for k, v in KNOWN_KEYS.items()}


def get_name(keyid: str) -> str:
    keyid = keyid.upper()
    return KNOWN_KEYS.get(keyid, SHORT_KEYS.get(keyid, "Unknown"))


class Signature(NamedTuple):
    keyid: str
    date: datetime

    @property
    def url(self) -> str:
        return (
            "https://keyserver.ubuntu.com/pks/lookup?op=vindex&fingerprint=on&search=0x"
            + self.keyid
        )

    @property
    def name(self) -> str:
        return get_name(self.keyid)


class SigError(Exception):
    pass


def parse_signature(sig_data: bytes) -> Signature:
    date = None
    keyid = None

    try:
        parsed = BinaryData(sig_data)
    except PgpdumpException as e:
        raise SigError(e)

    for x in parsed.packets():
        if x.raw == 2:
            for sub in x.subpackets:
                if sub.subtype == 2:
                    date = datetime.fromtimestamp(struct.unpack(">I", sub.data)[0], UTC)
                elif sub.subtype == 16 and keyid is None:
                    keyid = binascii.hexlify(sub.data).decode()
                elif sub.subtype == 33:
                    if sub.data[0] != 4:
                        raise SigError("not supported")
                    keyid = binascii.hexlify(sub.data[1:]).decode()

    if keyid is None:
        raise SigError("keyid missing")
    if date is None:
        raise SigError("date missing")

    return Signature(keyid, date)


def find_dbs(target_dir: str) -> list[str]:
    """Recursively look for DB files"""

    db_paths = set()
    target_dir = os.path.realpath(target_dir)
    for root, dirs, files in os.walk(target_dir):
        for name in files:
            if fnmatch.fnmatch(name, "*.db"):
                db_paths.add(os.path.realpath(os.path.join(root, name)))

    return sorted(db_paths)


def get_signature_paths(root_path: str, include_all: bool) -> list[str]:
    dbs = find_dbs(root_path)
    paths = set()
    for db_path in dbs:
        if include_all:
            paths.update(glob.glob(os.path.join(os.path.dirname(db_path), "*.sig")))
            continue
        with tarfile.TarFile.open(db_path, mode="r") as tar:
            for info in tar.getmembers():
                file_name = info.name.rsplit("/", 1)[-1]
                if file_name == "desc":
                    infodata = tar.extractfile(info).read().decode()
                    lines = infodata.splitlines()
                    filename = lines[lines.index("%FILENAME%") + 1]
                    paths.add(os.path.join(os.path.dirname(db_path), filename + ".sig"))
    return sorted(paths)


def parse_signatures(paths: list[str]) -> Iterator[tuple[str, Signature]]:
    for p in progress_bar(paths, leave=False):
        with open(p, "rb") as h:
            data = h.read()
        yield (p, parse_signature(data))


def list_stats(root_path: str, include_all: bool) -> None:
    c = Counter()
    paths = get_signature_paths(root_path, include_all)
    for p, sig in parse_signatures(paths):
        c[sig.keyid] += 1

    table_data = []
    for keyid, count in c.most_common():
        name = get_name(keyid)
        table_data.append([count, keyid.upper(), name])

    headers = ["Count", "Key ID", "Name"]
    print(tabulate(table_data, headers=headers, colalign=("right", "right", "left")))


def list_keyid(root_path: str, include_all: bool, keyid: str) -> None:
    table_data = []
    paths = get_signature_paths(root_path, include_all)
    for p, sig in parse_signatures(paths):
        if sig.keyid.upper() == keyid.upper():
            table_data.append([sig.name, sig.date, os.path.relpath(p, root_path)])

    table_data.sort(key=lambda x: x[1])
    headers = ["Name", "Date", "Path"]
    print(tabulate(table_data, headers=headers))


def main(argv):
    parser = argparse.ArgumentParser(
        description="List info about the package signatures", allow_abbrev=False
    )
    parser.add_argument("root", help="path to root dir")
    parser.add_argument("--id", help="list files for a speficic key id")
    parser.add_argument(
        "--all",
        action="store_true",
        default=False,
        help="List all signature files, not just the ones in the repos",
    )
    args = parser.parse_args(argv[1:])

    if args.id is None:
        list_stats(args.root, args.all)
    else:
        list_keyid(args.root, args.all, args.id)


if __name__ == "__main__":
    main(sys.argv)


================================================
FILE: msys2-repo-verify
================================================
#!/usr/bin/env python3
"""
This script verifies that all files in a repository are properly signed by trusted keys.

It ensures that:
  * all required files in the repo have signatures
  * signatures are from keys we know about
  * signatures are valid
  * checksums of archives are correct (since we are already reading the files)
"""

from __future__ import annotations

import os
import sys
import tempfile
import shutil
import subprocess
import argparse
import logging
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path


from fastprogress.fastprogress import progress_bar


PACKAGER_KEYS = [
    "AD35 1C50 AE08 5775 EB59 333B 5F92 EFC1 A47D 45A1",
    "8777 1331 B3F1 FF52 6385 6A6D 974C 8BE4 9078 F532",
    "5F94 4B02 7F7F E209 1985 AA2E FA11 531A A0AA 7F57",
]

INSTALLER_KEYS = ["0EBF 782C 5D53 F7E5 FB02 A667 46BD 761F 7A49 B0EC"]

# Files that don't need signatures
NOT_SIGNED = {"lastupdate", "lastsync", "README.txt"}


def is_archive(path: str | Path) -> bool:
    path = Path(path)
    extensions = {".zst", ".xz", ".gz"}
    return path.suffix in extensions or path.resolve().suffix in extensions


def test_archive(path: str | Path) -> bool:
    """Test the integrity of an archive file"""

    path = Path(path)
    resolved = path.resolve()
    if path.suffix == ".zst" or resolved.suffix == ".zst":
        cmd = ["zstd", "--quiet", "--test", str(path.resolve())]
    elif path.suffix == ".xz" or resolved.suffix == ".xz":
        cmd = ["xz", "--quiet", "--test", str(path.resolve())]
    elif path.suffix == ".gz" or resolved.suffix == ".gz":
        cmd = ["gzip", "--quiet", "--test", str(path.resolve())]
    else:
        raise Exception(f"Unknown file extension: {path.suffix!r}")

    result = subprocess.run(cmd, capture_output=True, check=False, text=True)
    return result.returncode == 0


class GpgManager:

    def __init__(self, keys: list[str]) -> None:
        self.keys = keys
        self.gnupghome: str | None = None
        self.logger = logging.getLogger("GpgManager")

    def __enter__(self) -> GpgManager:
        return self

    def __exit__(
        self, exc_type: type | None, exc_val: Exception | None, exc_tb: object
    ) -> None:
        self.cleanup()

    def cleanup(self) -> None:
        if self.gnupghome is not None:
            shutil.rmtree(self.gnupghome)

    def _get_env(self) -> dict[str, str]:
        if self.gnupghome is None:
            self.gnupghome = tempfile.mkdtemp(prefix="gpg_verify_")
            os.chmod(self.gnupghome, 0o700)
        env: dict[str, str] = os.environ.copy()
        env["GNUPGHOME"] = self.gnupghome
        return env

    def setup(self) -> None:
        self.logger.info("Importing trusted keys")
        subprocess.run(
            [
                "gpg",
                "--batch",
                "--quiet",
                "--keyserver",
                "keyserver.ubuntu.com",
                "--recv",
            ]
            + self.keys,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            env=self._get_env(),
            text=True,
        )

        for key in self.keys:
            self.logger.debug(f"Setting trust for key: {key}")
            subprocess.run(
                [
                    "gpg",
                    "--quiet",
                    "--batch",
                    "--no-tty",
                    "--command-fd",
                    "0",
                    "--expert",
                    "--edit-key",
                    key,
                    "trust",
                ],
                input="5\ny\n",
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                env=self._get_env(),
                text=True,
            )

    def verify_signature(self, sig_path: Path, file_path: Path) -> bool:
        result = subprocess.run(
            ["gpg", "--batch", "--quiet", "--verify", str(sig_path), str(file_path)],
            check=False,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            env=self._get_env(),
            text=True,
        )
        if result.returncode != 0 or not result.stderr.strip().endswith("[ultimate]"):
            self.logger.error(f"GPG verification failed for: {file_path}")
            self.logger.error(f"GPG error: {result.stderr}")
            return False

        return True


class SignatureVerifier:

    def __init__(self, repo_path: str | Path, gpg_manager: GpgManager) -> None:
        self.repo_path: Path = Path(repo_path)
        self.gpg_manager: GpgManager = gpg_manager
        self.logger = logging.getLogger("SignatureVerifier")

    def verify_file(self, filepath: Path) -> tuple[bool, str]:
        rel_path: Path = filepath.relative_to(self.repo_path)
        self.logger.debug(f"Processing: {rel_path}")

        if filepath.name.endswith(".sig"):
            base_path: Path = filepath.with_suffix("")
            if not base_path.is_file():
                return False, "signature file without base file"
            return True, "ok"

        sig_path: Path = Path(f"{filepath}.sig")
        if not sig_path.is_file():
            if filepath.name in NOT_SIGNED:
                return True, "skipped"
            return False, "missing signature file"

        if is_archive(filepath):
            self.logger.debug(f"Testing archive: {rel_path}")
            if not test_archive(filepath):
                return False, "invalid archive"

        self.logger.debug(f"Verifying signature: {rel_path}")
        if self.gpg_manager.verify_signature(sig_path, filepath):
            return True, "ok"
        else:
            return False, "invalid signature"

    def verify_repository(self) -> bool:
        failed_files: list[tuple[Path, str]] = []

        if not self.repo_path.exists():
            self.logger.error(f"Repository path does not exist: {self.repo_path}")
            raise FileNotFoundError(f"Repository not found: {self.repo_path}")

        files: list[Path] = []
        for root, _, filenames in os.walk(self.repo_path):
            for filename in filenames:
                files.append(Path(root) / filename)

        self.logger.info(f"Found {len(files)} files to verify")

        def verify(filepath: Path) -> tuple[tuple[bool, str], Path]:
            return (self.verify_file(filepath), filepath)

        with ThreadPoolExecutor(max_workers=os.cpu_count() or 8) as executor:
            for result, filepath in progress_bar(
                executor.map(verify, files), leave=False, total=len(files)
            ):
                status, message = result
                if not status:
                    failed_files.append((filepath, message))

        if failed_files:
            self.logger.error("Failed files:")
            for filepath, message in failed_files:
                self.logger.error(f"{filepath}: {message}")
            return False

        return True


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Verify signatures for all files in a repository"
    )

    parser.add_argument(
        "repo",
        metavar="REPO",
        help="Path to the repository to verify",
    )

    parser.add_argument(
        "--verbose", "-v", action="store_true", help="Enable verbose output"
    )

    args = parser.parse_args()

    log_level: int = logging.DEBUG if args.verbose else logging.INFO
    logging.basicConfig(
        level=log_level, format="%(asctime)s - %(levelname)s - %(name)s - %(message)s"
    )
    logger = logging.getLogger("main")

    with GpgManager(PACKAGER_KEYS + INSTALLER_KEYS) as gpg_manager:
        gpg_manager.setup()

        verifier = SignatureVerifier(args.repo, gpg_manager)
        if verifier.verify_repository():
            logger.info("All files have valid signatures")
            print("\nALL OK! All files have valid signatures.")
            return 0
        else:
            logger.error(
                "Some files have missing or invalid signatures, or are corrupt"
            )
            print(
                "\nVERIFICATION FAILED! Some files have missing or invalid signatures, or are corrupt."
            )
            return 1


if __name__ == "__main__":
    sys.exit(main())


================================================
FILE: msys2-sbom
================================================
#!/usr/bin/env python3

from msys2_devtools import sbom

sbom.run()


================================================
FILE: msys2-srcinfo-cache
================================================
#!/usr/bin/env python3

from msys2_devtools import srcinfo_cache

srcinfo_cache.run()

================================================
FILE: msys2_devtools/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: msys2_devtools/cmd_lint.py
================================================
// [OUTLINE - 7 symbols, 115 lines]
// import requests
// import os
// import argparse
// import sys
// import gzip
// import json
// import .db
// import .srcinfo
// L12-L17: def check_base_missing(repo):
// L20-L51: def check_pycache_missing(repo):
// L54-L69: def lint_repos(args):
// L72-L82: def check_srcinfo_same_pkgbase(srcinfo):
// L85-L97: def lint_srcinfos(args):
// L100-L105: def add_parser(subparsers):
// L108-L115: def run():


================================================
FILE: msys2_devtools/cpe.py
================================================
// [OUTLINE - 9 symbols, 119 lines]
// import urllib.parse
// import enum
// L5-L7: class CPESpecial(Enum):
// L15-L30: def parse_cpe22(cpe: str) -> tuple[CPEValue, CPEValue, CPEValue, CPEValue]:
// L33-L77: def parse_cpe23(cpe: str) -> tuple[CPEValue, CPEValue, CPEValue, CPEValue]:
// L39-L72: def split_and_unquote(s: str) -> list[CPEValue]:
// L45-L54: def push():
// L80-L88: def parse_cpe(cpe: str) -> tuple[CPEValue, CPEValue, CPEValue, CPEValue]:
// L91-L113: def build_cpe22(part: CPEValue, vendor: CPEValue, product: CPEValue, version: CPEValue) -> str:
// L96-L106: def add(v: CPEValue) -> str:
// L116-L119: def normalize_cpe(cpe: str) -> str:


================================================
FILE: msys2_devtools/db.py
================================================
// [OUTLINE - 2 symbols, 52 lines]
// import io
// import .exttarfile
// L6-L22: def parse_desc(t: str) -> dict[str, list[str]]:
// L25-L52: def parse_repo(data: bytes) -> dict[str, dict[str, list[str]]]:


================================================
FILE: msys2_devtools/exttarfile.py
================================================
// [OUTLINE - 0 symbols, 8 lines]
// import sys
// import tarfile
// import backports.zstd


================================================
FILE: msys2_devtools/pkgbuild.py
================================================
// [OUTLINE - 1 symbols, 27 lines]
// import typing
// import json
// import subprocess
// import os
// L9-L27: def get_extra_meta_for_pkgbuild(msys2_root: str, pkgbuild_path: str) -> \


================================================
FILE: msys2_devtools/pkgbuild2json.sh
================================================
// [OUTLINE - 5 symbols, 84 lines]
// L12-L20: escape_json_string()
// L23-L43: get_variable_as_json()
// L45-L54: check_prefixes()
// L58-L76: get_variables_as_json()
// L78-L82: main()


================================================
FILE: msys2_devtools/pkgextra.py
================================================
// [OUTLINE - 3 symbols, 57 lines]
// import pydantic
// import typing
// L5-L30: class PkgExtraEntry(BaseModel):
// L33-L43: def convert_mapping(array: Sequence[str]) -> dict[str, list[str | None]]:
// L46-L57: def extra_to_pkgextra_entry(data: dict[str, str | Collection[str]]) -> PkgExtraEntry:


================================================
FILE: msys2_devtools/pypi_cache.py
================================================
// [OUTLINE - 7 symbols, 141 lines]
// import requests
// import json
// import gzip
// import logging
// import sys
// import re
// import argparse
// import typing
// import packageurl
// import .pkgextra
// L25-L27: def normalize(name):
// L30-L50: def get_project_names(srcinfo_path: str):
// L53-L72: def get_all_serials() -> dict[str, int]:
// L75-L87: def get_project_metadata(project_name: str) -> dict:
// L90-L127: def dump_pypi_metadata(project_names: list[str], output_path: str):
// L130-L137: def main(argv: List[str]) -> None:
// L140-L141: def run() -> None:


================================================
FILE: msys2_devtools/sbom.py
================================================
// [OUTLINE - 9 symbols, 234 lines]
// import sys
// import os
// import argparse
// import logging
// import json
// import gzip
// import packageurl
// import cyclonedx.model.bom
// import cyclonedx.model.component
// import cyclonedx.model.vulnerability
// import cyclonedx.output.json
// import .srcinfo
// import .pkgextra
// import .cpe
// L19-L25: def extract_upstream_version(version: str) -> str:
// L28-L89: def generate_components(value) -> list[Component]:
// L92-L112: def write_sbom(srcinfo_cache: str, sbom: str) -> None:
// L115-L124: def handle_create_command(args) -> None:
// L127-L136: def add_create_subcommand(subparsers) -> None:
// L139-L203: def handle_fixup_command(args) -> None:
// L206-L219: def add_fixup_subcommand(subparsers) -> None:
// L222-L230: def main(argv: list[str]) -> None:
// L233-L234: def run() -> None:


================================================
FILE: msys2_devtools/srcinfo.py
================================================
// [OUTLINE - 1 symbols, 33 lines]
// L1-L33: def parse_srcinfo(srcinfo: str) -> tuple[dict[str, list[str]], dict[str, dict[str, list[str]]]]:


================================================
FILE: msys2_devtools/srcinfo_cache.py
================================================
// [OUTLINE - 12 symbols, 229 lines]
// import sys
// import argparse
// import os
// import json
// import collections
// import hashlib
// import time
// import shlex
// import subprocess
// import gzip
// import concurrent.futures
// import functools
// import typing
// import .pkgbuild
// import .pkgextra
// L24-L27: def normalize_repo(repo: str) -> str:
// L30-L31: def normalize_path(path: str) -> str:
// L34-L53: def get_mingw_arch_list(msys2_root: str, dir: str, pkgbuild_path: str) -> List[str]:
// L56-L64: def check_output_msys(msys2_root: str, args: Sequence[str], **kwargs: Any):
// L67-L87: def get_cache_key(pkgbuild_path: str) -> str:
// L90-L143: def get_srcinfo_for_pkgbuild(msys2_root: str, args: Tuple[str, str]) -> Optional[CacheTuple]:
// L146-L155: def iter_pkgbuild_paths(repo_path: str) -> Iterator[str]:
// L158-L164: def get_srcinfo_from_cache(args: Tuple[str, Cache]) -> Tuple[str, Optional[CacheTuple]]:
// L167-L180: def iter_srcinfo(msys2_root: str, repo_path: str, mode: str, cache: Cache) -> Iterator[Optional[CacheTuple]]:
// L183-L185: def validate_srcinfo(entry: CacheEntry):
// L188-L225: def main(argv: List[str]) -> None:
// L228-L229: def run() -> None:


================================================
FILE: msys2_devtools/utils.py
================================================
// [OUTLINE - 6 symbols, 103 lines]
// import typing
// import itertools
// L5-L103: def vercmp(v1: str, v2: str) -> int:
// L7-L10: def cmp(a: Any, b: Any) -> int:
// L12-L24: def split(v: str) -> tuple[str, str, str | None]:
// L28-L35: def get_type(c: str) -> int:
// L37-L53: def parse(v: str) -> list[str]:
// L55-L92: def rpmvercmp(v1: str, v2: str) -> int:


================================================
FILE: tests/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: tests/test_cpe.py
================================================
// [OUTLINE - 4 symbols, 47 lines]
// import pytest
// import msys2_devtools.cpe
// L6-L13: def test_parse_cpe_22():
// L16-L28: def test_parse_cpe_23():
// L31-L42: def test_build_cpe():
// L45-L47: def test_normalize_cpe():


================================================
FILE: tests/test_db.py
================================================
// [OUTLINE - 3 symbols, 57 lines]
// import io
// import pytest
// import msys2_devtools.db
// import msys2_devtools.exttarfile
// L7-L32: def test_parse_desc():
// L35-L47: def test_zstd():
// L50-L57: def test_zstd_invalid():


================================================
FILE: tests/test_main.py
================================================
// [OUTLINE - 1 symbols, 2 lines]
// L1-L2: def test_something():


================================================
FILE: tests/test_sbom.py
================================================
// [OUTLINE - 2 symbols, 60 lines]
// import msys2_devtools.sbom
// L4-L7: def test_extract_upstream_version():
// L10-L60: def test_generate_components():


================================================
FILE: tests/test_srcinfo.py
================================================
// [OUTLINE - 2 symbols, 45 lines]
// import msys2_devtools.srcinfo
// L4-L28: def test_for_srcinfo():
// L31-L45: def test_for_pkgbasedesc():


================================================
FILE: tests/test_utils.py
================================================
// [OUTLINE - 2 symbols, 34 lines]
// import msys2_devtools.utils
// L4-L34: def test_vercmp():
// L6-L8: def test_ver(a, b, res):


================================================
FILE: update-installer
================================================
#!/bin/bash

set -e

pub=/srv/msys2repo

if test -z "${1}"
then
    echo "Missing installer release date." >&2
    echo "Example usage: ${0} 2021-02-28" >&2
    exit 1
fi

RELEASE="${1}"
shift

cd "${pub}/distrib/x86_64/"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.tar.xz"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.tar.xz.sig"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.tar.zst"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.tar.zst.sig"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-x86_64-${RELEASE//-/}.exe"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-x86_64-${RELEASE//-/}.exe.sig"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.sfx.exe"
curl --fail -sLO "https://github.com/msys2/msys2-installer/releases/download/${RELEASE}/msys2-base-x86_64-${RELEASE//-/}.sfx.exe.sig"
ln -sf x86_64/$(ls -t | grep '.tar.xz$' | head -1) ../msys2-x86_64-latest.tar.xz
ln -sf x86_64/$(ls -t | grep '.tar.xz.sig$' | head -1) ../msys2-x86_64-latest.tar.xz.sig
ln -sf x86_64/$(ls -t | grep '.tar.zst$' | head -1) ../msys2-x86_64-latest.tar.zst
ln -sf x86_64/$(ls -t | grep '.tar.zst.sig$' | head -1) ../msys2-x86_64-latest.tar.zst.sig
ln -sf x86_64/$(ls -t | grep '.exe$' | grep -v '.sfx.exe$' | head -1) ../msys2-x86_64-latest.exe
ln -sf x86_64/$(ls -t | grep '.exe.sig$' | grep -v '.sfx.exe.sig$' | head -1) ../msys2-x86_64-latest.exe.sig
ln -sf x86_64/$(ls -t | grep '.sfx.exe$' | head -1) ../msys2-x86_64-latest.sfx.exe
ln -sf x86_64/$(ls -t | grep '.sfx.exe.sig$' | head -1) ../msys2-x86_64-latest.sfx.exe.sig

date +%s > "${pub}/lastupdate"


