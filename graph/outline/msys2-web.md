# Codebase Digest: msys2-web

- Files analyzed: 63
- Total lines: 949
- Total size: 39.5 KB
- Git branch: `main`
- Git HEAD commit: `06a0d8c6 (Update deps)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-web/
├── Dockerfile (1 lines, 35 B, ~11 tokens)
├── LICENSES/
│   ├── Apache-2.0.txt (73 lines, 10.0 KB, ~2.4k tokens)
│   ├── LicenseRef-Custom.txt (0 lines, 0 B, ~0 tokens)
│   └── MIT.txt (9 lines, 1.1 KB, ~251 tokens)
├── README.rst (20 lines, 337 B, ~99 tokens)
├── REUSE.toml (31 lines, 1.1 KB, ~321 tokens)
├── app/
│   ├── __init__.py (15 lines, 489 B, ~136 tokens)
│   ├── api.py (27 lines, 1.4 KB, ~387 tokens)
│   ├── appconfig.py (1 lines, 35 B, ~11 tokens)
│   ├── appstate.py (121 lines, 5.6 KB, ~1.7k tokens)
│   ├── exttarfile.py (4 lines, 91 B, ~26 tokens)
│   ├── fetch/
│   │   ├── arch.py (10 lines, 233 B, ~69 tokens)
│   │   ├── buildstatus.py (6 lines, 166 B, ~49 tokens)
│   │   ├── cdx.py (11 lines, 400 B, ~119 tokens)
│   │   ├── cygwin.py (11 lines, 282 B, ~80 tokens)
│   │   ├── gentoo.py (11 lines, 312 B, ~90 tokens)
│   │   ├── pypi.py (17 lines, 656 B, ~189 tokens)
│   │   ├── source.py (15 lines, 577 B, ~174 tokens)
│   │   ├── sourceinfos.py (10 lines, 232 B, ~70 tokens)
│   │   ├── update.py (23 lines, 588 B, ~174 tokens)
│   │   └── utils.py (17 lines, 601 B, ~169 tokens)
│   ├── pkgextra.py (7 lines, 346 B, ~100 tokens)
│   ├── static/
│   │   ├── index.css (1 lines, 34 B, ~10 tokens)
│   │   ├── index.js (226 lines, 5.2 KB, ~1.9k tokens)
│   │   └── theme.js (2 lines, 71 B, ~21 tokens)
│   ├── templates/
│   │   ├── base.html (1 lines, 36 B, ~11 tokens)
│   │   ├── basegroup.html (1 lines, 35 B, ~11 tokens)
│   │   ├── basegroups.html (1 lines, 35 B, ~11 tokens)
│   │   ├── baseindex.html (1 lines, 35 B, ~11 tokens)
│   │   ├── group.html (1 lines, 35 B, ~11 tokens)
│   │   ├── groups.html (1 lines, 35 B, ~11 tokens)
│   │   ├── layout.html (1 lines, 35 B, ~11 tokens)
│   │   ├── macros.html (1 lines, 35 B, ~11 tokens)
│   │   ├── mirrors.html (1 lines, 35 B, ~11 tokens)
│   │   ├── navbar.html (1 lines, 35 B, ~11 tokens)
│   │   ├── outofdate.html (1 lines, 36 B, ~11 tokens)
│   │   ├── package.html (1 lines, 36 B, ~11 tokens)
│   │   ├── packages.html (1 lines, 35 B, ~11 tokens)
│   │   ├── packagevirtual.html (1 lines, 35 B, ~11 tokens)
│   │   ├── queue.html (1 lines, 36 B, ~11 tokens)
│   │   ├── repos.html (1 lines, 35 B, ~11 tokens)
│   │   ├── search.html (1 lines, 36 B, ~11 tokens)
│   │   ├── security.html (1 lines, 35 B, ~11 tokens)
│   │   ├── stats.html (1 lines, 35 B, ~11 tokens)
│   │   └── updates.html (1 lines, 35 B, ~11 tokens)
│   ├── utils.py (17 lines, 761 B, ~245 tokens)
│   └── web.py (72 lines, 4.0 KB, ~1.2k tokens)
├── docker-compose.yml (5 lines, 59 B, ~18 tokens)
├── frontend/
│   ├── index.js (8 lines, 241 B, ~74 tokens)
│   ├── package.json (20 lines, 708 B, ~273 tokens)
│   ├── rollup.config.js (9 lines, 258 B, ~71 tokens)
│   └── style.scss (1 lines, 36 B, ~11 tokens)
├── justfile (16 lines, 280 B, ~76 tokens)
├── pyproject.toml (56 lines, 1.2 KB, ~443 tokens)
├── run.py (9 lines, 200 B, ~62 tokens)
└── tests/
    ├── __init__.py (1 lines, 34 B, ~10 tokens)
    ├── conftest.py (6 lines, 134 B, ~41 tokens)
    ├── test_api.py (2 lines, 66 B, ~21 tokens)
    ├── test_appstate.py (4 lines, 147 B, ~42 tokens)
    ├── test_cdx.py (4 lines, 138 B, ~37 tokens)
    ├── test_exttarfile.py (7 lines, 213 B, ~65 tokens)
    ├── test_main.py (20 lines, 723 B, ~202 tokens)
    └── test_web.py (3 lines, 101 B, ~30 tokens)
```

## Source Files

================================================
FILE: frontend/package.json
================================================
// [OUTLINE - 19 symbols, 23 lines]
// L2: "type": "module"
// L3-L18: "devDependencies":
// L4: "@babel/core": "^8.0.1"
// L5: "@babel/preset-env": "^8.0.1"
// L6: "@fontsource/roboto": "^5.0.3"
// L7: "@rollup/plugin-babel": "^7.1.0"
// L8: "autoprefixer": "^10.4.14"
// L9: "bootstrap": "^5.3.0"
// L10: "postcss": "^8.4.23"
// L11: "postcss-logical": "^9.0.0"
// L12: "rolldown": "^1.0.0"
// L13: "rollup-plugin-copy": "^3.4.0"
// L14: "rollup-plugin-license": "^3.0.1"
// L15: "rollup-plugin-postcss": "^4.0.2"
// L16: "sass": "^1.94.0"
// L17: "tippy.js": "^6.3.7"
// L19-L22: "scripts":
// L20: "build": "rolldown --config rollup.config.js"
// L21: "dev": "rolldown --config rollup.config.js --watch"


================================================
FILE: justfile
================================================
# Copyright 2016-2026 Christoph Reiter
# SPDX-License-Identifier: MIT

check:
    uv run ruff check
    uv run ruff format --check
    uv run ty check
    uv run reuse lint
    uv run pytest

fix:
    uv run ruff check --fix
    uv run ruff format

run:
    uv run run.py --cache


================================================
FILE: pyproject.toml
================================================
[project]
name = "msys2-web"
version = "0.1.0"
description = ""
authors = [{ name = "Christoph Reiter", email = "reiter.christoph@gmail.com" }]
requires-python = ">=3.12.0,<4.0"
license = "MIT"
dependencies = [
    "httpx2[http2]>=2.3.0,<3",
    "fastapi>=0.156.0,<0.157",
    "uvicorn>=0.54.0,<0.55",
    "jinja2>=3.1.2,<4",
    "fastapi-etag>=0.4.0,<0.5",
    "gunicorn>=26.0.0,<27",
    "aiolimiter>=1.0.0,<2",
    "pydantic>=2.0.3,<3",
    "MarkupSafe>=3.0.2,<4",
    "uvicorn-worker>=0.4.0,<0.5",
    "packageurl-python>=0.17.0,<0.18",
    "backports-zstd>=1.2.0,<2.0.0; python_version < '3.14'",
]

[dependency-groups]
dev = [
    "reuse[charset-normalizer]>=6.0.0,<7",
    "ty>=0.0.27",
    "pytest>=8.0.0,<10",
    "ruff>=0.17.0,<0.18.0",
]

[tool.poetry]
package-mode = false

[tool.uv]
package = false
exclude-newer = "3 days"

[build-system]
requires = ["uv_build>=0.9.3,<0.12.0"]
build-backend = "uv_build"

[tool.ty.environment]
python-version = "3.14"

[tool.pytest.ini_options]
filterwarnings = ["ignore::DeprecationWarning"]
norecursedirs = ["frontend"]

[tool.ruff]
line-length = 100
exclude = ["frontend", ".venv"]
target-version = "py312"

[tool.ruff.lint]
select = ["E", "F", "W"]
ignore = ["E501", "E741"]


================================================
FILE: Dockerfile
================================================
// [OUTLINE - 0 symbols, 15 lines]


================================================
FILE: LICENSES/Apache-2.0.txt
================================================
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


================================================
FILE: LICENSES/LicenseRef-Custom.txt
================================================


================================================
FILE: LICENSES/MIT.txt
================================================
MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


================================================
FILE: README.rst
================================================
MSYS2 Web Interface
===================

A simple web interface for browsing the MSYS2 repos.

Rebuild CSS/JS (optional)::

    cd frontend
    npm install
    npm run build

Run for Development::

    uv run run.py --cache

Run for Production::

    # See the Dockerfile
    docker build .
    docker run --rm -it -p 8080:80 <image-id>


================================================
FILE: REUSE.toml
================================================
version = 1

[[annotations]]
path = ["docker-compose.yml", ".dockerignore", ".github/**", ".gitignore", "app/**.py", "app/static/theme.js", "app/templates/**", "Dockerfile", "frontend/**", "uv.lock", "pyproject.toml", "README.rst", "setup.cfg", "tests/**", "REUSE.toml"]
precedence = "aggregate"
SPDX-FileCopyrightText = "The MSYS2 Authors"
SPDX-License-Identifier = "MIT"

[[annotations]]
path = "app/static/fonts/roboto**"
precedence = "aggregate"
SPDX-FileCopyrightText = "Copyright 2011 Google Inc"
SPDX-License-Identifier = "Apache-2.0"

[[annotations]]
path = "app/static/index.css"
precedence = "aggregate"
SPDX-FileCopyrightText = "The Bootstrap Authors"
SPDX-License-Identifier = "MIT"

[[annotations]]
path = "app/static/index.js"
precedence = "aggregate"
SPDX-FileCopyrightText = "bootstrap, @popperjs/core, tippy.js and MSYS2 authors"
SPDX-License-Identifier = "MIT"

[[annotations]]
path = ["app/static/images/favicon.ico", "app/static/images/logo.svg"]
precedence = "aggregate"
SPDX-FileCopyrightText = "The MSYS2 Authors"
SPDX-License-Identifier = "LicenseRef-Custom"


================================================
FILE: app/__init__.py
================================================
// [OUTLINE - 3 symbols, 53 lines]
// import os
// import asyncio
// import contextlib
// import collections.abc
// import fastapi
// import .web
// import .api
// import .utils
// import .fetch.update
// import traceback
// import traceback
// L22-L27: async def lifespan(app: FastAPI) -> AsyncGenerator[None]:
// L41-L45: async def webapp_exception_handler(request: Request, exc: Exception) -> None:
// L49-L53: async def api_exception_handler(request: Request, exc: Exception) -> None:


================================================
FILE: app/api.py
================================================
// [OUTLINE - 18 symbols, 326 lines]
// import fastapi
// import fastapi.responses
// import fastapi_etag
// import pydantic
// import collections.abc
// import .appstate
// import .utils
// import .fetch.update
// L12-L15: class QueueBuild(BaseModel):
// L18-L25: class QueueEntry(BaseModel):
// L28-L29: async def get_etag(request: Request) -> str:
// L35-L69: def get_srcinfos_to_build() -> tuple[list[SrcInfoPackage], set[str]]:
// L73-L234: async def buildqueue2(request: Request, response: Response) -> list[QueueEntry]:
// L84-L96: def resolve_package(pkgname: str) -> str:
// L98-L109: def get_transitive_depends_and_resolve(packages: Iterable[str]) -> set[str]:
// L111-L119: def get_transitive_makedepends(packages: Iterable[str]) -> set[str]:
// L121-L124: def srcinfo_get_repo_version(si: SrcInfoPackage) -> str | None:
// L126-L132: def srcinfo_has_src(si: SrcInfoPackage) -> bool:
// L134-L135: def srcinfo_is_new(si: SrcInfoPackage) -> bool:
// L137-L138: def build_key(srcinfo: SrcInfoPackage) -> tuple[str, str]:
// L186-L192: def group_by_repo(sequence: Iterable[str]) -> dict[str, list]:
// L238-L248: async def removals(
// L252-L281: async def search(
// L285-L287: async def do_trigger_update(request: Request) -> Response:
// L290-L295: class OutOfDateEntry(BaseModel):
// L301-L322: async def outofdate(request: Request, response: Response) -> list[OutOfDateEntry]:


================================================
FILE: app/appconfig.py
================================================
// [OUTLINE - 0 symbols, 99 lines]


================================================
FILE: app/appstate.py
================================================
// [OUTLINE - 104 symbols, 977 lines]
// import re
// import uuid
// import time
// import datetime
// import enum
// import functools
// import urllib.parse
// import typing
// import collections.abc
// import collections.abc
// import pydantic
// import dataclasses
// import packageurl
// import .appconfig
// import .utils
// import .pkgextra
// L34-L54: class ExtId(NamedTuple):
// L47-L54: def get_key_from_references(self, references: dict[str, list[str | None]]) -> str | None:
// L57-L62: class ExtInfo(NamedTuple):
// L65-L67: class PackagerInfo(NamedTuple):
// L70-L76: def parse_packager(text: str, _re: Any = re.compile("(.*?)<(.*?)>")) -> PackagerInfo:
// L79-L83: class DepType(Enum):
// L86-L90: def get_repositories() -> list[Repository]:
// L93-L109: def get_removable_packages(recursive: bool = False) -> list[Package]:
// L112-L125: def get_realname_variants(s: Source) -> Iterable[str]:
// L128-L139: def cleanup_files(files: list[str]) -> list[str]:
// L142-L147: def get_base_group_name(p: Package, group_name: str) -> str:
// L150-L192: class Repository:
// L151-L167: def __init__(
// L170-L171: def db_url(self) -> str:
// L174-L175: def files_url(self) -> str:
// L178-L184: def packages(self) -> list[Package]:
// L187-L188: def csize(self) -> int:
// L191-L192: def isize(self) -> int:
// L195-L198: class BuildStatusBuild(BaseModel):
// L201-L204: class BuildStatusPackage(BaseModel):
// L207-L210: class BuildStatus(BaseModel):
// L213-L227: class Severity(Enum):
// L222-L223: def __str__(self) -> str:
// L226-L227: def sort_key(self) -> int:
// L231-L240: class Vulnerability:
// L239-L240: def sort_key(self) -> tuple[bool, int, str, str]:
// L243-L324: class AppState:
// L244-L256: def __init__(self) -> None:
// L258-L260: def _update_etag(self) -> None:
// L263-L264: def last_update(self) -> float:
// L267-L268: def etag(self) -> str:
// L271-L272: def sources(self) -> dict[str, Source]:
// L275-L277: def sources(self, sources: dict[str, Source]) -> None:
// L280-L281: def sourceinfos(self) -> dict[str, SrcInfoPackage]:
// L284-L286: def sourceinfos(self, sourceinfos: dict[str, SrcInfoPackage]) -> None:
// L289-L290: def pkgextra(self) -> PkgExtra:
// L293-L295: def pkgextra(self, pkgextra: PkgExtra) -> None:
// L298-L299: def ext_info_ids(self) -> list[ExtId]:
// L301-L302: def get_ext_infos(self, id: ExtId) -> dict[str, ExtInfo]:
// L304-L306: def set_ext_infos(self, id: ExtId, info: dict[str, ExtInfo]) -> None:
// L309-L310: def build_status(self) -> BuildStatus:
// L313-L315: def build_status(self, build_status: BuildStatus) -> None:
// L318-L319: def vulnerabilities(self) -> dict[str, list[Vulnerability]]:
// L322-L324: def vulnerabilities(self, vulnerabilities: dict[str, list[Vulnerability]]) -> None:
// L327-L514: class Package:
// L328-L389: def __init__(
// L392-L393: def files(self) -> Sequence[str]:
// L395-L396: def __repr__(self) -> str:
// L399-L403: def pkgextra(self) -> PkgExtraEntry:
// L406-L423: def urls(self) -> list[tuple[str, str]]:
// L426-L432: def realprovides(self) -> dict[str, set[str]]:
// L435-L438: def realname(self) -> str:
// L441-L444: def git_version(self) -> str:
// L447-L453: def repo_url(self) -> str:
// L456-L459: def repo_path(self) -> str:
// L462-L463: def history_url(self) -> str:
// L466-L467: def source_url(self) -> str:
// L470-L474: def source_only_tarball_url(self) -> str:
// L477-L478: def key(self) -> PackageKey:
// L481-L514: def from_desc(
// L517-L823: class Source:
// L518-L520: def __init__(self, name: str):
// L523-L532: def desc(self) -> str:
// L535-L536: def _package(self) -> Package:
// L539-L544: def all_vulnerabilities(self) -> list[Vulnerability]:
// L547-L549: def active_vulnerabilities(self) -> list[Vulnerability]:
// L552-L559: def worst_active_vulnerability(self) -> Vulnerability | None:
// L562-L566: def can_have_vulnerabilities(self) -> bool:
// L569-L575: def has_unaffected_versions(self) -> bool:
// L578-L579: def repos(self) -> list[str]:
// L582-L583: def url(self) -> str:
// L586-L587: def arches(self) -> list[str]:
// L590-L594: def groups(self) -> list[str]:
// L597-L601: def basegroups(self) -> list[str]:
// L604-L607: def version(self) -> str:
// L610-L613: def git_version(self) -> str:
// L616-L621: def licenses(self) -> list[list[str]]:
// L624-L645: def upstream_info(self) -> ExtInfo | None:
// L648-L651: def upstream_version(self) -> str | None:
// L654-L658: def pkgextra(self) -> PkgExtraEntry:
// L661-L662: def urls(self) -> list[tuple[str, str]]:
// L665-L740: def external_infos(self) -> Sequence[tuple[ExtId, ExtInfo]]:
// L743-L747: def is_outdated_in_git(self) -> bool:
// L750-L753: def realname(self) -> str:
// L756-L759: def date(self) -> int:
// L762-L763: def repo_url(self) -> str:
// L766-L767: def repo_path(self) -> str:
// L770-L771: def source_url(self) -> str:
// L774-L775: def history_url(self) -> str:
// L778-L781: def filebug_url(self) -> str:
// L784-L785: def searchbug_url(self) -> str:
// L788-L789: def source_only_tarball_url(self) -> str:
// L792-L803: def from_desc(cls, d: dict[str, list[str]], repo: Repository) -> Source:
// L805-L808: def add_desc(self, d: dict[str, list[str]], repo: Repository) -> None:
// L810-L823: def get_info(self) -> dict[str, Any]:
// L826-L932: class SrcInfoPackage:
// L827-L855: def __init__(
// L858-L859: def history_url(self) -> str:
// L862-L863: def source_url(self) -> str:
// L866-L870: def build_version(self) -> str:
// L872-L873: def __repr__(self) -> str:
// L876-L932: def for_srcinfo(
// L938-L977: def find_packages(query: str, qtype: str) -> list[Package | Source]:
// L945-L951: def get_score(name: str, parts: list[str]) -> float:


================================================
FILE: app/exttarfile.py
================================================
// [OUTLINE - 0 symbols, 8 lines]
// import sys
// import tarfile
// import backports.zstd


================================================
FILE: app/fetch/arch.py
================================================
// [OUTLINE - 1 symbols, 89 lines]
// import asyncio
// import json
// import gzip
// import ..appconfig
// import ..appstate
// import ..utils
// import .source
// import .utils
// L15-L89: async def update_arch_versions() -> None:


================================================
FILE: app/fetch/buildstatus.py
================================================
// [OUTLINE - 1 symbols, 26 lines]
// import ..appconfig
// import ..appstate
// import ..utils
// import .utils
// L10-L26: async def update_build_status() -> None:


================================================
FILE: app/fetch/cdx.py
================================================
// [OUTLINE - 4 symbols, 85 lines]
// import json
// import urllib.parse
// import ..appconfig
// import ..appstate
// import ..utils
// import .utils
// L13-L16: def _format_version_range(value: str) -> str:
// L19-L69: def parse_cdx(data: bytes) -> dict[str, list[Vulnerability]]:
// L34-L58: def parse_vuln(vuln: dict, affected: dict) -> Vulnerability:
// L72-L85: async def update_cdx() -> None:


================================================
FILE: app/fetch/cygwin.py
================================================
// [OUTLINE - 2 symbols, 85 lines]
// import sys
// import asyncio
// import compression
// import backports
// import ..appconfig
// import ..appstate
// import ..utils
// import .utils
// L18-L68: def parse_cygwin_versions(
// L71-L85: async def update_cygwin_versions() -> None:


================================================
FILE: app/fetch/gentoo.py
================================================
// [OUTLINE - 2 symbols, 85 lines]
// import asyncio
// import functools
// import io
// import tarfile
// import ..appconfig
// import ..appstate
// import ..utils
// import .utils
// L15-L24: async def update_gentoo_versions() -> None:
// L27-L85: def parse_gentoo_versions(data: bytes) -> dict[str, ExtInfo]:


================================================
FILE: app/fetch/pypi.py
================================================
// [OUTLINE - 6 symbols, 88 lines]
// import datetime
// import gzip
// import json
// import re
// import urllib.parse
// import ..appconfig
// import ..appstate
// import ..pkgextra
// import ..utils
// import .utils
// L17-L19: def normalize(name: str) -> str:
// L22-L34: def extract_pypi_project_from_purl(purl: str) -> str | None:
// L37-L45: def extract_pypi_project_from_references(references: dict[str, list[str | None]]) -> str | None:
// L48-L50: class PyPIExtId(ExtId):
// L49-L50: def get_key_from_references(self, references: dict[str, list[str | None]]) -> str | None:
// L53-L88: async def update_pypi_versions(pkgextra: PkgExtra) -> None:


================================================
FILE: app/fetch/source.py
================================================
// [OUTLINE - 6 symbols, 138 lines]
// import asyncio
// import io
// import typing
// import ..appconfig
// import ..appstate
// import ..exttarfile
// import ..utils
// import .utils
// L15-L31: def parse_desc(t: str) -> dict[str, list[str]]:
// L34-L73: async def parse_repo(repo: Repository, include_files: bool = True) -> dict[str, Source]:
// L37-L44: def add_desc(d: Any) -> None:
// L76-L100: def fill_rdepends(sources: dict[str, Source]) -> None:
// L103-L113: def fill_provided_by(sources: dict[str, Source]) -> None:
// L116-L138: async def update_source() -> None:


================================================
FILE: app/fetch/sourceinfos.py
================================================
// [OUTLINE - 1 symbols, 47 lines]
// import gzip
// import json
// import ..appconfig
// import ..appstate
// import ..pkgextra
// import ..utils
// import .pypi
// import .utils
// L15-L47: async def update_sourceinfos() -> None:


================================================
FILE: app/fetch/update.py
================================================
// [OUTLINE - 5 symbols, 91 lines]
// import asyncio
// import functools
// import sys
// import time
// import traceback
// import aiolimiter
// import ..
// import ..appconfig
// import ..appstate
// import ..utils
// import .arch
// import .buildstatus
// import .cygwin
// import .gentoo
// import .source
// import .sourceinfos
// import .cdx
// L29-L30: def _get_update_queue() -> asyncio.Queue[None]:
// L33-L35: async def wait_for_update() -> None:
// L38-L43: def queue_update() -> None:
// L46-L50: async def trigger_loop() -> None:
// L56-L91: async def update_loop() -> None:


================================================
FILE: app/fetch/utils.py
================================================
// [OUTLINE - 5 symbols, 115 lines]
// import asyncio
// import datetime
// import hashlib
// import os
// import email.utils
// import typing
// import urllib.parse
// import httpx2
// import ..
// import ..appconfig
// import ..utils
// L19-L24: def get_mtime_for_response(response: httpx2.Response) -> datetime.datetime | None:
// L27-L63: async def get_content_cached_mtime(
// L66-L67: async def get_content_cached(url: str, *args: Any, **kwargs: Any) -> bytes:
// L73-L115: async def check_needs_update(urls: list[str], _cache: dict[str, CacheHeaders] =
// L79-L99: async def get_cache_headers(


================================================
FILE: app/pkgextra.py
================================================
// [OUTLINE - 4 symbols, 62 lines]
// import pydantic
// import collections.abc
// L8-L30: class PkgExtraEntry(BaseModel):
// L33-L35: class PkgExtra(BaseModel):
// L38-L48: def convert_mapping(array: Sequence[str]) -> dict[str, list[str | None]]:
// L51-L62: def extra_to_pkgextra_entry(data: dict[str, str | Collection[str]]) -> PkgExtraEntry:


================================================
FILE: app/static/index.css
================================================
// [OUTLINE - 0 symbols, 6 lines]


================================================
FILE: app/static/index.js
================================================
// [OUTLINE - 225 symbols, 8 lines]
// L8: set(t,n,r)
// L8: get(t,n)
// L8: remove(t,n)
// L8: function T(e,t)
// L8: function E(e)
// L8: function D(e,t)
// L8: function O(e,t,n)
// L8: function k(e,t,n=null)
// L8: function A(e,t,n)
// L8: function j(e,t,n,r,i)
// L8: function M(e,t,n,r,i)
// L8: function N(e,t,n,r)
// L8: function P(e)
// L8: on(e,t,n,r)
// L8: one(e,t,n,r)
// L8: off(e,t,n,r)
// L8: trigger(e,t,n)
// L8: function I(e,t=
// L8: get()
// L8: function L(e)
// L8: function ee(e)
// L8: setDataAttribute(e,t,n)
// L8: removeDataAttribute(e,t)
// L8: getDataAttributes(e)
// L8: getDataAttribute(e,t)
// L8: static get Default()
// L8: static get DefaultType()
// L8: static get NAME()
// L8: _getConfig(e)
// L8: _configAfterMerge(e)
// L8: _mergeConfigObj(e,t)
// L8: _typeCheckConfig(e,t=this.constructor.DefaultType)
// L8: constructor(e,n)
// L8: dispose()
// L8: _queueCallback(e,t,n=!0)
// L8: _getConfig(e)
// L8: static getInstance(e)
// L8: static getOrCreateInstance(e,t=
// L8: static get VERSION()
// L8: static get DATA_KEY()
// L8: static get EVENT_KEY()
// L8: static eventName(e)
// L8: find(e,t=document.documentElement)
// L8: findOne(e,t=document.documentElement)
// L8: children(e,t)
// L8: parents(e,t)
// L8: prev(e,t)
// L8: next(e,t)
// L8: focusableChildren(e)
// L8: getSelectorFromElement(e)
// L8: getElementFromSelector(e)
// L8: getMultipleElementsFromSelector(e)
// L8: constructor(e,t)
// L8: static get Default()
// L8: static get DefaultType()
// L8: static get NAME()
// L8: toggle()
// L8: show()
// L8: hide()
// L8: _isShown(e=this._element)
// L8: _configAfterMerge(e)
// L8: _getDimension()
// L8: _initializeChildren()
// L8: _getFirstLevelChildren(e)
// L8: _addAriaAndCollapsedClass(e,t)
// L8: static jQueryInterface(t)
// L8: function K(e)
// L8: function q(e)
// L8: function Te(e)
// L8: function J(e)
// L8: function Ee(e)
// L8: function De(e)
// L8: function Oe(e)
// L8: function Y(e)
// L8: function Ne()
// L8: function Pe()
// L8: function Fe(e,t,n)
// L8: function Ie(e)
// L8: function Le(e,t)
// L8: function X(e)
// L8: function Re(e)
// L8: function Z(e)
// L8: function ze(e)
// L8: function Be(e)
// L8: function Ve(e)
// L8: function He(e)
// L8: function Ue(e)
// L8: function We(e,t,n)
// L8: function Ge(e,t,n)
// L8: function Ke()
// L8: function qe(e)
// L8: function Je(e,t)
// L8: function Xe(e)
// L8: function Ze(e)
// L8: function $e(e)
// L8: function tt(e,t)
// L8: function nt(e)
// L8: function rt(e)
// L8: function ot(e)
// L8: function lt(e)
// L8: function dt(e)
// L8: function ft(e)
// L8: function pt(e)
// L8: function mt(e,t)
// L8: function ht(e)
// L8: function gt(e)
// L8: function _t(e)
// L8: function vt(e,t)
// L8: function yt(e)
// L8: function bt(e,t)
// L8: function xt(e,t,n)
// L8: function St(e)
// L8: function Ct(e,t,n,r)
// L8: function wt(e)
// L8: function Tt(e,t)
// L8: function Et(e,t)
// L8: function Dt(e)
// L8: function Ot(e)
// L8: function At(e,t,n)
// L8: function jt(e)
// L8: function Mt(e)
// L8: function Pt(e,t,n)
// L8: function Ft(e)
// L8: function Lt(e)
// L8: function zt(e)
// L8: function Bt(e)
// L8: function Ht(e)
// L8: function Ut(e)
// L8: function Wt(e)
// L8: function Gt(e,t,n)
// L8: function Kt(e)
// L8: function i(e)
// L8: function qt(e)
// L8: function Jt(e)
// L8: function Yt(e)
// L8: function Zt()
// L8: function Qt(e)
// L8: function l()
// L8: function u()
// L8: function cn(e,t,n)
// L8: function ln(e,t)
// L8: function un(e,t)
// L8: function dn(e,t)
// L8: function fn(e)
// L8: function pn(e)
// L8: function mn(e,t)
// L8: function hn(e)
// L8: function gn(e)
// L8: function _n(e)
// L8: function vn(e)
// L8: function yn()
// L8: function bn(e)
// L8: function xn(e)
// L8: function Sn(e)
// L8: function Cn(e)
// L8: function wn(e)
// L8: function Tn(e,t)
// L8: function En(e,t)
// L8: function Dn(e)
// L8: function On(e,t)
// L8: function kn(e,t,n)
// L8: function An(e,t)
// L8: function Mn()
// L8: function Nn()
// L8: function Pn()
// L8: function Fn()
// L8: function zn(e)
// L8: function Bn(e,t)
// L8: function Vn(e,t)
// L8: function Un(e,t)
// L8: function Wn(e)
// L8: function Gn(e,t)
// L8: function Kn(e)
// L8: function qn(e)
// L8: function i(n,r)
// L8: function Zn(e,t)
// L8: function T()
// L8: function E()
// L8: function D()
// L8: function O()
// L8: function k()
// L8: function A()
// L8: function j(e)
// L8: function M(e)
// L8: function N(e,t,n)
// L8: function P()
// L8: function F()
// L8: function I()
// L8: function L(t)
// L8: function ee()
// L8: function te()
// L8: function ne()
// L8: function re()
// L8: function ie(e,t)
// L8: function R(e,t)
// L8: function ae(e,t)
// L8: function r(e)
// L8: function z(t,n,r)
// L8: function oe()
// L8: function se()
// L8: function ce(e)
// L8: function le(e)
// L8: function ue(e)
// L8: function B(e)
// L8: function de(e)
// L8: function fe()
// L8: function V()
// L8: function pe()
// L8: function me()
// L8: function he(e)
// L8: function H(e)
// L8: function U()
// L8: function W()
// L8: function ge()
// L8: function G(t)
// L8: function _e(e)
// L8: function ve()
// L8: function ye()
// L8: function be(e)
// L8: function xe()
// L8: function Se()
// L8: function Qn(e,t)
// L8: static copyToClipboard(e)
// L8: content(e)
// L8: content(e)


================================================
FILE: app/static/theme.js
================================================
// [OUTLINE - 1 symbols, 49 lines]
// L4-L46: function setupDarkMode()


================================================
FILE: app/templates/base.html
================================================
// [OUTLINE - 0 symbols, 122 lines]


================================================
FILE: app/templates/basegroup.html
================================================
// [OUTLINE - 0 symbols, 30 lines]


================================================
FILE: app/templates/basegroups.html
================================================
// [OUTLINE - 0 symbols, 30 lines]


================================================
FILE: app/templates/baseindex.html
================================================
// [OUTLINE - 0 symbols, 55 lines]


================================================
FILE: app/templates/group.html
================================================
// [OUTLINE - 0 symbols, 41 lines]


================================================
FILE: app/templates/groups.html
================================================
// [OUTLINE - 0 symbols, 30 lines]


================================================
FILE: app/templates/layout.html
================================================
// [OUTLINE - 0 symbols, 80 lines]


================================================
FILE: app/templates/macros.html
================================================
// [OUTLINE - 0 symbols, 32 lines]


================================================
FILE: app/templates/mirrors.html
================================================
// [OUTLINE - 0 symbols, 18 lines]


================================================
FILE: app/templates/navbar.html
================================================
// [OUTLINE - 0 symbols, 38 lines]


================================================
FILE: app/templates/outofdate.html
================================================
// [OUTLINE - 0 symbols, 105 lines]


================================================
FILE: app/templates/package.html
================================================
// [OUTLINE - 0 symbols, 259 lines]


================================================
FILE: app/templates/packages.html
================================================
// [OUTLINE - 0 symbols, 54 lines]


================================================
FILE: app/templates/packagevirtual.html
================================================
// [OUTLINE - 0 symbols, 41 lines]


================================================
FILE: app/templates/queue.html
================================================
// [OUTLINE - 0 symbols, 186 lines]


================================================
FILE: app/templates/repos.html
================================================
// [OUTLINE - 0 symbols, 39 lines]


================================================
FILE: app/templates/search.html
================================================
// [OUTLINE - 0 symbols, 114 lines]


================================================
FILE: app/templates/security.html
================================================
// [OUTLINE - 0 symbols, 65 lines]


================================================
FILE: app/templates/stats.html
================================================
// [OUTLINE - 0 symbols, 18 lines]


================================================
FILE: app/templates/updates.html
================================================
// [OUTLINE - 0 symbols, 68 lines]


================================================
FILE: app/utils.py
================================================
// [OUTLINE - 11 symbols, 167 lines]
// import re
// import sys
// import logging
// import itertools
// import typing
// L24-L131: def vercmp(v1: str, v2: str) -> int:
// L28-L31: def cmp(a: Any, b: Any) -> int:
// L33-L45: def split(v: str) -> tuple[str, str, str | None]:
// L49-L56: def get_type(c: str) -> int:
// L58-L75: def parse(v: str) -> list[tuple[int, str]]:
// L77-L120: def rpmvercmp(v1: str, v2: str) -> int:
// L134-L135: def extract_upstream_version(version: str) -> str:
// L138-L139: def arch_version_to_msys(v: str) -> str:
// L142-L143: def version_is_newer_than(v1: str, v2: str) -> bool:
// L146-L153: def split_depends(deps: list[str]) -> dict[str, set[str]]:
// L156-L167: def split_optdepends(deps: list[str]) -> dict[str, set[str]]:


================================================
FILE: app/web.py
================================================
// [OUTLINE - 54 symbols, 883 lines]
// import os
// import re
// import datetime
// import enum
// import urllib.parse
// import typing
// import collections.abc
// import jinja2
// import markupsafe
// import fastapi
// import fastapi.templating
// import fastapi.responses
// import fastapi_etag
// import fastapi.staticfiles
// import fastapi_etag
// import .appstate
// import .utils
// L45-L53: class PackageStatus(Enum):
// L56-L72: class PackageBuildStatus(NamedTuple):
// L63-L64: def status_text(self) -> str:
// L67-L68: def category(self) -> str:
// L71-L72: def priority(self) -> tuple[int, str]:
// L75-L76: async def get_etag(request: Request) -> str:
// L79-L84: def template_filter(name: str) -> Callable:
// L80-L82: def wrap(f: Callable) -> Callable:
// L87-L96: def context_function(name: str) -> Callable:
// L88-L94: def wrap(f: Callable) -> Callable:
// L90-L91: def ctxfunc(context: dict, *args: Any, **kwargs: Any) -> Any:
// L100-L102: def is_endpoint(request: Request, endpoint: str) -> bool:
// L106-L107: def update_timestamp(request: Request) -> float:
// L111-L121: def package_url(request: Request, package: Package, name: str | None = None) -> str:
// L132-L159: def _license_to_html(license: str) -> str:
// L134-L136: def create_url(license: str) -> str:
// L138-L152: def spdx_to_html(s: str) -> str:
// L154-L155: def needs_quote(s: str) -> bool:
// L162-L172: def _licenses_to_html(licenses: list[str]) -> str:
// L176-L177: def licenses_to_html(request: Request, licenses: list[str]) -> str:
// L181-L194: def rdepends_type(types: set[DepType]) -> list[str]:
// L198-L199: def rdepends_sort(rdepends: dict[Package, set[str]]) -> list[tuple[Package, set[str]]]:
// L203-L207: def filter_timestamp(d: int) -> str:
// L211-L216: def filter_filesize(d: int) -> str:
// L220-L229: def group_by_repo(packages: dict[PackageKey, Package]) -> list[tuple[str, list[Package]]]:
// L233-L238: async def robots() -> Response:
// L242-L245: async def repos(request: Request, response: Response) -> Response:
// L249-L250: async def stats(request: Request, response: Response) -> Response:
// L254-L255: async def mirrors(request: Request, response: Response) -> Response:
// L259-L260: async def index(request: Request, response: Response) -> Response:
// L264-L287: async def baseindex(request: Request, response: Response, repo: str | None = None) -> Response:
// L291-L304: async def base(request: Request, response: Response, base_name: str) -> Response:
// L308-L334: async def security(request: Request, response: Response, fix_only: bool = False) -> Response:
// L309-L312: def sort_key(s: Source) -> tuple:
// L339-L343: async def group(request: Request, response: Response, group_name: str | None = None) -> Response:
// L348-L379: async def groups(request: Request, response: Response, group_name: str | None = None) -> Response:
// L384-L421: async def basegroups(
// L425-L429: async def packages_redir(request: Request, response: Response) -> Response:
// L433-L455: async def packages(
// L459-L465: async def package_redir(request: Request, response: Response, package_name: str) -> Response:
// L469-L508: async def package(
// L512-L534: async def updates(request: Request, response: Response, repo: str = "") -> Response:
// L537-L559: def get_transitive_depends(related: list[str]) -> set[str]:
// L563-L627: async def outofdate(
// L630-L652: def get_status_text(key: str) -> str:
// L655-L677: def get_status_category(key: str) -> str:
// L680-L702: def get_status_priority(key: str) -> tuple[int, str]:
// L705-L709: def repo_to_build_type(repo: str) -> list[str]:
// L712-L719: def get_build_types() -> list[str]:
// L722-L749: def get_build_status(
// L753-L842: async def queue(request: Request, response: Response, build_type: str = "") -> Response:
// L847-L848: async def new(request: Request, response: Response) -> Response:
// L852-L870: async def search(request: Request, response: Response, q: str = "", t: str = "") -> Response:
// L873-L877: async def check_is_ready(request: Request, call_next: Callable) -> Response:


================================================
FILE: docker-compose.yml
================================================
services:
  app:
    build: .
    ports:
      - "8160:80"


================================================
FILE: frontend/index.js
================================================
// [OUTLINE - 4 symbols, 59 lines]
// import ./style.scss
// import bootstrap/js/src/collapse.js
// import tippy.js
// L5-L17: class App
// L7-L15: static copyToClipboard(button)
// L33-L35: content(reference)
// L54-L56: content(reference)


================================================
FILE: frontend/rollup.config.js
================================================
// [OUTLINE - 0 symbols, 73 lines]
// import node:process
// import rollup-plugin-postcss
// import postcss-logical
// import autoprefixer
// import rolldown/plugins
// import rollup-plugin-copy
// import rollup-plugin-license
// import @rollup/plugin-babel


================================================
FILE: frontend/style.scss
================================================
// [OUTLINE - 0 symbols, 147 lines]


================================================
FILE: run.py
================================================
// [OUTLINE - 1 symbols, 39 lines]
// import os
// import sys
// import argparse
// import uvicorn
// import app
// import app
// import app
// L14-L35: def main(argv: list[str]) -> int | str | None:


================================================
FILE: tests/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: tests/conftest.py
================================================
// [OUTLINE - 1 symbols, 14 lines]
// import os
// import pytest
// import fastapi.testclient
// import app
// L11-L14: def client():


================================================
FILE: tests/test_api.py
================================================
// [OUTLINE - 1 symbols, 2 lines]
// L1-L2: def test_api(client):


================================================
FILE: tests/test_appstate.py
================================================
// [OUTLINE - 2 symbols, 62 lines]
// import app.appstate
// L11-L62: def test_get_removable_packages(monkeypatch):
// L14-L28: def package(name):


================================================
FILE: tests/test_cdx.py
================================================
// [OUTLINE - 1 symbols, 69 lines]
// import json
// import app.fetch.cdx
// L6-L69: def test_parse_cdx_unaffected_versions_and_ranges():


================================================
FILE: tests/test_exttarfile.py
================================================
// [OUTLINE - 3 symbols, 50 lines]
// import io
// import pytest
// import app.exttarfile
// L7-L23: def test_zst() -> None:
// L26-L40: def test_zstd_write() -> None:
// L43-L50: def test_zstd_invalid() -> None:


================================================
FILE: tests/test_main.py
================================================
// [OUTLINE - 12 symbols, 230 lines]
// import os
// import pytest
// import app.appstate
// import app.fetch.cygwin
// import app.fetch.pypi
// import app.utils
// import app.pkgextra
// L39-L47: def test_main_endpoints(client, endpoint):
// L50-L66: def test_parse_cygwin_versions():
// L69-L109: def test_parse_cygwin_multiple():
// L112-L127: def test_parse_cygwin_mingw64():
// L130-L137: def test_parse_packager():
// L140-L144: def test_split_optdepends():
// L147-L168: def test_for_srcinfo():
// L171-L180: def test_for_pkgbasedesc():
// L183-L213: def test_vercmp():
// L185-L187: def test_ver(a, b, res):
// L216-L221: def test_extra_to_pkgextra_entry():
// L224-L230: def test_extract_pypi_project_from_purl():


================================================
FILE: tests/test_web.py
================================================
// [OUTLINE - 1 symbols, 43 lines]
// import app.web
// L6-L43: def test_licenses_to_html() -> None:


