# Codebase Digest: pacdb

- Files analyzed: 14
- Total lines: 187
- Total size: 7.4 KB
- Git branch: `main`
- Git HEAD commit: `7ca74287 (Drop EOL Python versions)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
pacdb/
├── LICENSE (21 lines, 1.0 KB, ~254 tokens)
├── README.md (2 lines, 61 B, ~16 tokens)
├── examples/
│   ├── both_toml_tomli.py (2 lines, 51 B, ~15 tokens)
│   ├── clang64_gccdep.py (4 lines, 91 B, ~26 tokens)
│   ├── dlgrep.py (4 lines, 77 B, ~24 tokens)
│   ├── mingw64_ucrt64.py (3 lines, 64 B, ~19 tokens)
│   ├── msys32.py (3 lines, 78 B, ~25 tokens)
│   ├── msys32_unupdated.py (4 lines, 83 B, ~24 tokens)
│   ├── pacmirror.py (8 lines, 208 B, ~60 tokens)
│   ├── pacmirror_rsync.py (7 lines, 149 B, ~44 tokens)
│   └── time.py (4 lines, 90 B, ~29 tokens)
├── pacdb.py (88 lines, 4.2 KB, ~1.4k tokens)
├── pyproject.toml (19 lines, 461 B, ~147 tokens)
└── test_pacdb.py (18 lines, 759 B, ~217 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# pacdb
Pure-python module to parse and read pacman sync dbs


================================================
FILE: pyproject.toml
================================================
[project]
name = "pacdb"
version = "0.2.0"
description = "Pure-python module to parse and read pacman sync dbs."
authors = [{ name = "Jeremy Drake", email = "github@jdrake.com" }]
requires-python = ">=3.9.0,<4"
readme = "README.md"
license = "MIT"
dependencies = ["zstandard"]

[project.urls]
Repository = "https://github.com/msys2/pacdb"

[dependency-groups]
dev = []

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"


================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2021 Jeremy Drake

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
FILE: examples/both_toml_tomli.py
================================================
// [OUTLINE - 0 symbols, 15 lines]
// import pacdb


================================================
FILE: examples/clang64_gccdep.py
================================================
// [OUTLINE - 0 symbols, 38 lines]
// import pacdb
// import json
// import urllib.request


================================================
FILE: examples/dlgrep.py
================================================
// [OUTLINE - 0 symbols, 37 lines]
// import os
// import pacdb
// import re


================================================
FILE: examples/mingw64_ucrt64.py
================================================
// [OUTLINE - 0 symbols, 20 lines]
// import re
// import pacdb


================================================
FILE: examples/msys32.py
================================================
// [OUTLINE - 1 symbols, 26 lines]
// import pacdb
// L21-L22: def base(pkg):


================================================
FILE: examples/msys32_unupdated.py
================================================
// [OUTLINE - 0 symbols, 19 lines]
// import glob
// import shutil
// import pacdb


================================================
FILE: examples/pacmirror.py
================================================
// [OUTLINE - 1 symbols, 73 lines]
// import argparse
// import os
// import pacdb
// import sys
// import urllib.request
// import urllib.error
// L23-L34: def fetch_file(url, filename, expected_size=None):


================================================
FILE: examples/pacmirror_rsync.py
================================================
// [OUTLINE - 1 symbols, 54 lines]
// import argparse
// import os
// import pacdb
// import subprocess
// import sys
// L18-L19: def popen_rsync():


================================================
FILE: examples/time.py
================================================
// [OUTLINE - 1 symbols, 10 lines]
// import timeit
// import pacdb
// L5-L6: def test():


================================================
FILE: pacdb.py
================================================
// [OUTLINE - 76 symbols, 609 lines]
// import datetime
// import os
// import re
// import sys
// import tarfile
// import collections
// import itertools
// import typing
// import zstandard
// import urllib.request
// import io
// L22-L55: class ExtTarFile(tarfile.TarFile):
// L28-L53: def zstdopen(cls, name, mode="r", fileobj=None, cctx=None, dctx=None, **kwargs):
// L58-L253: class Version(object):
// L62-L82: def __init__(self, ver: Union[str, "Version", None]):
// L84-L85: def __str__(self):
// L87-L88: def __repr__(self):
// L90-L91: class _ExtentType(object):
// L96-L103: def _get_type(cls, c: str) -> _ExtentType:
// L106-L122: def _parse(cls, v: str) -> Iterator[Tuple[str, _ExtentType]]:
// L125-L162: def _rpmvercmp(cls, v1: str, v2: str) -> int:
// L126-L127: def cmp(a: Any, b: Any) -> int:
// L164-L190: def vercmp(self, other: Union["Version", str, None]) -> int:
// L194-L197: def __lt__(self, other):
// L199-L202: def __le__(self, other):
// L204-L207: def __eq__(self, other):
// L209-L212: def __gt__(self, other):
// L214-L217: def __ge__(self, other):
// L221-L224: def __ne__(self, other):
// L226-L227: def __bool__(self):
// L231-L232: def __hash__(self):
// L234-L253: def canonicalize(self, epochsep: str=':') -> Optional[str]:
// L255-L256: def vercmp(v1: str, v2: str) -> int:
// L259-L269: class DependEntry(namedtuple('DependEntry', ['name', 'mod', 'version_str', 'desc'])):
// L263-L269: def version(self) -> Optional[Version]:
// L273-L280: def _split_depends(deps: List[str]) -> Depends:
// L283-L363: class Database(object):
// L284-L312: def __init__(self, name: str, filename=None, fileobj=None):
// L315-L326: def from_url(cls, name: str, url: str, dbtype: str="db") -> "Database":
// L328-L332: def get_pkg(self, pkgname: str) -> Optional["Package"]:
// L334-L335: def __iter__(self) -> Iterator["Package"]:
// L337-L341: def __contains__(self, pkg_or_name: Union[str, "Package"]) -> bool:
// L343-L344: def __repr__(self) -> str:
// L347-L363: def _parse_desc(t: str) -> _PackageEntry:
// L366-L602: class Package(object):
// L367-L371: def __init__(self, db: Optional[Database], entry: _PackageEntry):
// L374-L405: def from_file(cls, filename, fileobj=None) -> "Package":
// L407-L408: def __str__(self) -> str:
// L410-L411: def __repr__(self) -> str:
// L413-L416: def __eq__(self, other) -> bool:
// L418-L421: def __lt__(self, other) -> bool:
// L423-L426: def __le__(self, other) -> bool:
// L428-L431: def __gt__(self, other) -> bool:
// L433-L436: def __ge__(self, other) -> bool:
// L440-L443: def __ne__(self, other):
// L445-L446: def __hash__(self):
// L448-L449: def _get_list_entry(self, name: str) -> List[str]:
// L451-L452: def _get_single_entry(self, name: str) -> Optional[str]:
// L455-L456: def arch(self) -> Optional[str]:
// L459-L460: def base(self) -> Optional[str]:
// L463-L464: def base64_sig(self) -> Optional[str]:
// L467-L471: def builddate(self) -> Optional[datetime.datetime]:
// L474-L475: def checkdepends(self) -> Depends:
// L478-L479: def conflicts(self) -> Depends:
// L482-L483: def depends(self) -> Depends:
// L486-L487: def desc(self) -> Optional[str]:
// L490-L494: def download_size(self) -> Optional[int]:
// L497-L498: def filename(self) -> str:
// L501-L502: def files(self) -> List[str]:
// L505-L506: def groups(self) -> List[str]:
// L509-L513: def isize(self) -> Optional[int]:
// L516-L517: def licenses(self) -> List[str]:
// L520-L521: def makedepends(self) -> Depends:
// L524-L525: def md5sum(self) -> Optional[str]:
// L528-L529: def name(self) -> str:
// L532-L533: def optdepends(self) -> Depends:
// L536-L537: def packager(self) -> Optional[str]:
// L540-L541: def provides(self) -> Depends:
// L544-L545: def replaces(self) -> Depends:
// L548-L549: def sha256sum(self) -> Optional[str]:
// L554-L555: def url(self) -> Optional[str]:
// L558-L561: def version(self) -> Version:
// L563-L575: def compute_rdepends(self, dependattr: str='depends',
// L577-L578: def compute_optionalfor(self, db: Optional[Iterable["Package"]] = None) -> List[str]:
// L580-L581: def compute_requiredby(self, db: Optional[Iterable["Package"]] = None) -> List[str]:
// L605-L606: def mingw_db_by_name(name: str, dbtype: str="db") -> Database:
// L608-L609: def msys_db_by_arch(arch: str='x86_64', dbtype: str="db") -> Database:


================================================
FILE: test_pacdb.py
================================================
// [OUTLINE - 15 symbols, 107 lines]
// import unittest
// import pacdb
// L7-L104: class VerCmpTest(unittest.TestCase):
// L8-L13: def _runtest(self, ver1: str, ver2:str, exp:int) -> None:
// L16-L18: def test_similarlength(self):
// L21-L22: def test_mixedlength(self):
// L25-L29: def test_pkgrel_simple(self):
// L32-L35: def test_pkgrel_mixedlength(self):
// L38-L43: def test_mixed_pkgrel(self):
// L46-L50: def test_alphanumeric_versions(self):
// L53-L58: def test_fromthemanpage(self):
// L61-L64: def test_alphadotted(self):
// L67-L69: def test_alphadotsanddashes(self):
// L72-L76: def test_differingseparators(self):
// L79-L86: def test_epochincluded(self):
// L89-L93: def test_epoch_pkgrel(self):
// L96-L104: def test_epoch_oneversion(self):


