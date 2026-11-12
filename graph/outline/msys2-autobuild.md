# Codebase Digest: msys2-autobuild

- Files analyzed: 30
- Total lines: 846
- Total size: 44.7 KB
- Git branch: `main`
- Git HEAD commit: `7cf128ee (Disable dep cooldown for gha-artifact-client)`
- Digest mode: `AST-Smart Outline`

## Directory Structure

```text
msys2-autobuild/
├── LICENSE (21 lines, 1.1 KB, ~255 tokens)
├── README.md (51 lines, 1.9 KB, ~485 tokens)
├── msys2_autobuild/
│   ├── __init__.py (1 lines, 34 B, ~10 tokens)
│   ├── __main__.py (2 lines, 50 B, ~16 tokens)
│   ├── asset_cleanup.py (15 lines, 552 B, ~153 tokens)
│   ├── build-src.sh (2 lines, 57 B, ~18 tokens)
│   ├── build.py (45 lines, 2.1 KB, ~592 tokens)
│   ├── build_plan.py (14 lines, 656 B, ~193 tokens)
│   ├── buildqueue_report.py (8 lines, 318 B, ~97 tokens)
│   ├── cmd_build.py (16 lines, 415 B, ~121 tokens)
│   ├── cmd_clean_assets.py (5 lines, 180 B, ~53 tokens)
│   ├── cmd_clear_failed.py (7 lines, 224 B, ~65 tokens)
│   ├── cmd_fetch_assets.py (22 lines, 786 B, ~222 tokens)
│   ├── cmd_show_build.py (7 lines, 214 B, ~64 tokens)
│   ├── cmd_show_status.py (6 lines, 187 B, ~57 tokens)
│   ├── cmd_supervise.py (19 lines, 590 B, ~164 tokens)
│   ├── cmd_update_status.py (5 lines, 174 B, ~52 tokens)
│   ├── cmd_upload_assets.py (8 lines, 213 B, ~66 tokens)
│   ├── config.py (6 lines, 227 B, ~65 tokens)
│   ├── fetch-validpgpkeys.sh (1 lines, 35 B, ~11 tokens)
│   ├── gh.py (66 lines, 3.1 KB, ~875 tokens)
│   ├── main.py (8 lines, 193 B, ~62 tokens)
│   ├── queue.py (53 lines, 2.8 KB, ~818 tokens)
│   └── utils.py (22 lines, 835 B, ~228 tokens)
├── pyproject.toml (51 lines, 991 B, ~359 tokens)
├── requirements.txt (357 lines, 26.1 KB, ~5.1k tokens)
└── tests/
    ├── __init__.py (1 lines, 34 B, ~10 tokens)
    ├── main_test.py (16 lines, 486 B, ~131 tokens)
    ├── test_build.py (3 lines, 112 B, ~31 tokens)
    └── test_gh.py (8 lines, 254 B, ~69 tokens)
```

## Source Files

================================================
FILE: README.md
================================================
# msys2-autobuild

msys2-autobuild is a Python tool for

* automatically building MSYS2 packages in GitHub Actions
* manually uploading packages, or retrying builds
* retrieving the built packages for upload to the pacman repo

## Installation

```console
$ pacman -S mingw-w64-x86_64-python-tabulate mingw-w64-x86_64-python-pygithub mingw-w64-x86_64-python-requests
# or
$ uv sync
# or
$ python -m pip install --user -r requirements.txt
# or
$ uv tool install git+https://github.com/msys2/msys2-autobuild
```

## Usage

```console
$ msys2-autobuild --help
usage: msys2-autobuild [-h] [-v]
    {build,show,update-status,show-status,fetch-assets,upload-assets,clear-failed,clean-assets,supervise} ...

Build packages

options:
  -h, --help            show this help message and exit
  -v, --verbose         Increase verbosity (can be used multiple times)

subcommands:
  {build,show,update-status,show-status,fetch-assets,upload-assets,clear-failed,clean-assets,supervise}
    build               Build all packages
    show                Show all packages to be built
    update-status       Update the status file
    show-status         Show the status
    fetch-assets        Download all staging packages
    upload-assets       Upload packages
    clear-failed        Clear the failed state for packages
    clean-assets        Clean up GHA assets
    supervise           Plan, dispatch, and supervise build jobs
```

## Configuration

* `GITHUB_TOKEN` (required) - a GitHub token with write access to the current repo.
* `GITHUB_TOKEN_READONLY` (optional) - a GitHub token with read access to the current repo. This is used for read operations to not get limited by the API access limits.
* `GITHUB_REPOSITORY` (optional) - the path to the GitHub repo this is uploading to. Used for deciding which things can be built and where to upload them to. Defaults to `msys2/msys2-autobuild`.


================================================
FILE: pyproject.toml
================================================
[project]
name = "msys2-autobuild"
version = "0.1.0"
description = ""
license = "MIT"
authors = [
  { name = "Christoph Reiter", email = "reiter.christoph@gmail.com" }
]
requires-python = ">=3.12.0,<4.0"
dependencies = [
  "PyGithub>=2.10.0,<3",
  "tabulate>=0.10.0,<0.11",
  "requests>=2.28.1,<3",
  "requests-cache>=1.0.0,<2",
  "urllib3>=2.2.1,<3",
  "cryptography==46.0.3",
  "gha-artifact-client>=0.2.0",
]

[project.scripts]
msys2-autobuild = "msys2_autobuild.main:run"

[tool.uv]
exclude-newer = "3 days"
exclude-newer-package = { gha-artifact-client = false }

[tool.uv.build-backend]
module-root = ""

[tool.ty.environment]
python-version = "3.12"

[dependency-groups]
dev = [
  "pytest>=8.0.0,<10",
  "ruff>=0.17.0,<0.18.0",
  "types-tabulate>=0.10.0.0,<0.11",
  "types-requests>=2.25.0,<3",
  "ty>=0.0.29",
]

[build-system]
requires = ["uv_build>=0.9.5,<0.12.0"]
build-backend = "uv_build"

[tool.ruff]
line-length = 110
exclude = [".venv"]

[tool.ruff.lint]
select = ["E", "F"]


================================================
FILE: msys2_autobuild/main.py
================================================
// [OUTLINE - 2 symbols, 44 lines]
// import argparse
// import sys
// import logging
// import .
// import .utils
// L11-L40: def main(argv: list[str]) -> None:
// L43-L44: def run() -> None:


================================================
FILE: LICENSE
================================================
The MIT License

Copyright (c) 2020 Christoph Reiter

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
FILE: msys2_autobuild/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: msys2_autobuild/__main__.py
================================================
// [OUTLINE - 0 symbols, 3 lines]
// import .main


================================================
FILE: msys2_autobuild/asset_cleanup.py
================================================
// [OUTLINE - 5 symbols, 81 lines]
// import fnmatch
// import random
// import re
// import github.GithubException
// import github.GitRelease
// import github.GitReleaseAsset
// import .config
// import .gh
// import .queue
// L15-L50: def get_assets_to_delete() -> list[GitReleaseAsset]:
// L24-L26: def should_be_deleted(asset: GitReleaseAsset) -> bool:
// L28-L34: def get_to_delete(release: GitRelease) -> list[GitReleaseAsset]:
// L36-L43: def get_all_releases() -> list[GitRelease]:
// L53-L81: def clean_assets(dry_run: bool = False) -> None:


================================================
FILE: msys2_autobuild/build-src.sh
================================================
// [OUTLINE - 1 symbols, 39 lines]
// L21-L32: cleanup()


================================================
FILE: msys2_autobuild/build.py
================================================
// [OUTLINE - 23 symbols, 447 lines]
// import fnmatch
// import json
// import os
// import time
// import shlex
// import shutil
// import stat
// import subprocess
// import tempfile
// import concurrent.futures
// import contextlib
// import pathlib
// import subprocess
// import typing
// import collections.abc
// import urllib.parse
// import github.GitReleaseAsset
// import .config
// import .gh
// import .queue
// import .utils
// L28-L29: class BuildError(Exception):
// L32-L33: def get_python_path(msys2_root: PathLike, msys2_path: PathLike) -> Path:
// L36-L37: def to_pure_posix_path(path: PathLike) -> PurePath:
// L40-L41: def to_pure_posix_uri(path: PathLike) -> str:
// L44-L46: def pure_posix_path_to_uri(path: PurePath) -> str:
// L49-L58: def get_packager(build_type: BuildType) -> str:
// L61-L67: def get_build_environ(build_type: BuildType) -> dict[str, str]:
// L71-L94: def temp_pacman_script(pacman_config: PathLike) -> Generator[PathLike, None, None]:
// L98-L114: def temp_pacman_conf(msys2_root: PathLike) -> Generator[Path, None, None]:
// L118-L135: def temp_makepkg_confd(msys2_root: PathLike, config_name: str) -> Generator[Path, None, None]:
// L138-L149: def clean_environ(environ: dict[str, str]) -> dict[str, str]:
// L152-L159: def run_cmd(msys2_root: PathLike, args: Sequence[PathLike], **kwargs: Any) -> None:
// L162-L180: def make_tree_writable(topdir: PathLike) -> None:
// L167-L168: def chmod(p: PathLike) -> None:
// L183-L193: def remove_junctions(topdir: PathLike) -> None:
// L196-L231: def reset_git_repo(path: PathLike):
// L198-L210: def clean():
// L235-L247: def fresh_git_repo(url: str, path: PathLike) -> Generator:
// L251-L338: def staging_dependencies(
// L255-L302: def add_to_repo(repo_root: PathLike, pacman_config: PathLike, repo_name: str,
// L265-L268: def fetch_item(item: tuple[str, GitReleaseAsset]) -> tuple[str, GitReleaseAsset]:
// L294-L296: def chunks(lst: list[ChunkItem], n: int) -> Generator[list[ChunkItem], None, None]:
// L341-L447: def build_package(build_type: BuildType, pkg: Package, msys2_root: PathLike, builddir: PathLike) -> None:


================================================
FILE: msys2_autobuild/build_plan.py
================================================
// [OUTLINE - 6 symbols, 113 lines]
// import itertools
// import shlex
// import collections.abc
// import typing
// import .config
// import .gh
// import .queue
// L11-L28: def generate_jobs_for(build_type: BuildType, optional_deps: str, count: int) -> Iterator[dict[str, Any]]:
// L31-L49: def generate_src_jobs(optional_deps: str, count: int) -> Iterator[dict[str, Any]]:
// L53-L65: def roundrobin(*iterables: list[dict[str, Any]]) -> Iterator[dict[str, Any]]:
// L68-L113: def create_build_plan(
// L79-L87: def get_job_count(build_type: BuildType) -> int:
// L91-L92: def filter_active_jobs(jobs: Iterator[dict[str, Any]]) -> list[dict[str, Any]]:


================================================
FILE: msys2_autobuild/buildqueue_report.py
================================================
// [OUTLINE - 4 symbols, 51 lines]
// import tabulate
// import .queue
// import .utils
// L7-L16: def show_cycles(pkgs: list[Package]) -> None:
// L10-L11: def format_package(p: Package) -> str:
// L19-L51: def show_buildqueue(pkgs: list[Package]) -> None:
// L43-L46: def show_table(name: str, items: list) -> None:


================================================
FILE: msys2_autobuild/cmd_build.py
================================================
// [OUTLINE - 4 symbols, 127 lines]
// import os
// import shutil
// import sys
// import time
// import traceback
// import typing
// import .build
// import .config
// import .gh
// import .queue
// import .utils
// L17-L44: def get_package_to_build(
// L47-L56: def wait_for_artifacts_to_be_drained() -> None:
// L59-L114: def run_build(args: Any) -> None:
// L117-L127: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_clean_assets.py
================================================
// [OUTLINE - 2 symbols, 13 lines]
// import typing
// import .asset_cleanup
// L5-L6: def clean_gha_assets(args: Any) -> None:
// L9-L13: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_clear_failed.py
================================================
// [OUTLINE - 2 symbols, 55 lines]
// import typing
// import github.GithubException
// import .gh
// import .queue
// L10-L43: def clear_failed_state(args: Any) -> None:
// L46-L55: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_fetch_assets.py
================================================
// [OUTLINE - 7 symbols, 204 lines]
// import fnmatch
// import os
// import io
// import hashlib
// import concurrent.futures
// import pathlib
// import typing
// import subprocess
// import github.GitReleaseAsset
// import .config
// import .gh
// import .queue
// import .utils
// import pprint
// L19-L29: def get_repo_subdir(build_type: BuildType) -> Path:
// L32-L44: def file_matches_digest(path: str, asset: GitReleaseAsset) -> bool:
// L47-L179: def fetch_assets(args: Any) -> None:
// L102-L112: def file_is_uptodate(path: str, asset: GitReleaseAsset) -> bool:
// L163-L167: def verify_file(path: str, target: str) -> None:
// L169-L173: def fetch_item(item: tuple[str, GitReleaseAsset]) -> tuple[str, GitReleaseAsset]:
// L182-L204: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_show_build.py
================================================
// [OUTLINE - 2 symbols, 21 lines]
// import typing
// import .buildqueue_report
// import .queue
// import .utils
// L8-L12: def show_build(args: Any) -> None:
// L15-L21: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_show_status.py
================================================
// [OUTLINE - 2 symbols, 15 lines]
// import typing
// import json
// import .queue
// L7-L9: def run_show_status(args: Any) -> None:
// L12-L15: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_supervise.py
================================================
// [OUTLINE - 4 symbols, 185 lines]
// import json
// import fnmatch
// import time
// import traceback
// import typing
// import github.Artifact
// import github.Workflow
// import github.WorkflowRun
// import .asset_cleanup
// import .build_plan
// import .buildqueue_report
// import .gh
// import .queue
// import .utils
// L21-L29: def has_active_newer_run(workflow: Workflow, current_run: WorkflowRun) -> bool:
// L32-L173: def supervise(args: Any) -> None:
// L60-L112: def deploy_artifacts(artifacts: list[Artifact]) -> bool:
// L176-L185: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_update_status.py
================================================
// [OUTLINE - 2 symbols, 13 lines]
// import typing
// import .queue
// L6-L7: def run_update_status(args: Any) -> None:
// L10-L13: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/cmd_upload_assets.py
================================================
// [OUTLINE - 2 symbols, 65 lines]
// import glob
// import os
// import typing
// import .gh
// import .queue
// L9-L54: def upload_assets(args: Any) -> None:
// L57-L65: def add_parser(subparsers: Any) -> None:


================================================
FILE: msys2_autobuild/config.py
================================================
// [OUTLINE - 3 symbols, 114 lines]
// import typing
// import urllib3.util
// L13-L19: def get_all_build_types() -> list[BuildType]:
// L22-L23: def build_type_is_src(build_type: BuildType) -> bool:
// L26-L114: class Config:


================================================
FILE: msys2_autobuild/fetch-validpgpkeys.sh
================================================
// [OUTLINE - 0 symbols, 17 lines]


================================================
FILE: msys2_autobuild/gh.py
================================================
// [OUTLINE - 38 symbols, 416 lines]
// import io
// import os
// import shutil
// import sys
// import tempfile
// import time
// import base64
// import hashlib
// import contextlib
// import datetime
// import functools
// import pathlib
// import typing
// import collections.abc
// import requests
// import github
// import github.Auth
// import github.GithubException
// import github.GithubObject
// import github.GitRelease
// import github.GitReleaseAsset
// import github.Artifact
// import github.Repository
// import github
// import gha_artifact_client
// import .config
// import .utils
// L32-L43: def get_auth(write: bool = False) -> Auth | None:
// L47-L55: def make_writable(obj: GithubObject) -> Generator:
// L59-L61: def _get_repo(name: str, write: bool = False) -> Repository:
// L64-L66: def get_current_repo(write: bool = False) -> Repository:
// L69-L70: def get_repo_for_build_type(build_type: BuildType, write: bool = False) -> Repository:
// L74-L87: def get_github(write: bool = False) -> Github:
// L90-L94: def asset_is_complete(asset: GitReleaseAsset) -> bool:
// L97-L102: def download_text_asset(asset: GitReleaseAsset, cache=False) -> str:
// L105-L108: def get_workflow_run_id() -> int:
// L111-L114: def get_job_check_run_id() -> int:
// L117-L127: def get_current_run_urls() -> dict[str, str] | None:
// L130-L153: def wait_for_api_limit_reset(
// L156-L159: def get_asset_mtime_ns(asset: GitReleaseAsset) -> int:
// L162-L181: def download_artifact(artifact: Artifact) -> bytes:
// L184-L207: def download_asset(asset: GitReleaseAsset, target_path: str,
// L210-L212: def encode_filename(filename: str) -> str:
// L215-L218: def decode_filename(encoded: str) -> str:
// L221-L228: def get_upload_safe_name(basename: PathLike, text: bool = False) -> str:
// L231-L235: def get_asset_filename(asset: GitReleaseAsset) -> str:
// L238-L239: def get_artifact_filename(artifact: Artifact) -> str:
// L243-L256: def verify_asset_digest(asset: GitReleaseAsset) -> Generator[Any, None, None]:
// L259-L270: def verify_artifact_digest(artifact: Artifact) -> Generator[Any, None, None]:
// L273-L277: def is_asset_from_gha(asset: GitReleaseAsset) -> bool:
// L280-L284: def is_asset_from_allowed_user(asset: GitReleaseAsset) -> bool:
// L287-L291: def get_asset_uploader_name(asset: GitReleaseAsset) -> str:
// L294-L306: def get_release_assets(release: GitRelease, include_incomplete: bool = False) -> list[GitReleaseAsset]:
// L309-L310: def is_running_in_gha() -> bool:
// L313-L314: def can_upload_artifacts() -> bool:
// L317-L332: def upload_artifact(path: PathLike, text: bool = False, retention_hours: int = 7,
// L335-L338: def list_artifact_ids() -> list[int]:
// L341-L380: def upload_asset(release: GitRelease, path: PathLike, replace: bool = False,
// L348-L360: def should_upload() -> bool:
// L362-L371: def upload() -> None:
// L383-L392: def get_release(repo: Repository, name: str, create: bool = True) -> GitRelease:
// L395-L416: class CachedAssets:
// L397-L399: def __init__(self) -> None:
// L401-L406: def get_assets(self, build_type: BuildType) -> list[GitReleaseAsset]:
// L408-L416: def get_failed_assets(self, build_type: BuildType) -> list[GitReleaseAsset]:


================================================
FILE: msys2_autobuild/queue.py
================================================
// [OUTLINE - 37 symbols, 500 lines]
// import fnmatch
// import hashlib
// import functools
// import io
// import json
// import concurrent.futures
// import datetime
// import enum
// import typing
// import requests
// import github.GithubException
// import github.WorkflowJob
// import .config
// import .gh
// import .utils
// L23-L34: class PackageStatus(Enum):
// L33-L34: def __str__(self) -> str:
// L37-L147: class Package(dict):
// L39-L40: def __repr__(self) -> str:
// L42-L43: def __hash__(self) -> int:
// L45-L46: def __eq__(self, other: object) -> bool:
// L49-L50: def key(self) -> tuple[str, str]:
// L53-L55: def _active_builds(self) -> dict:
// L57-L58: def _get_build(self, build_type: BuildType) -> dict:
// L60-L62: def get_status(self, build_type: BuildType) -> PackageStatus:
// L64-L66: def get_status_details(self, build_type: BuildType) -> dict[str, Any]:
// L68-L78: def set_status(self, build_type: BuildType, status: PackageStatus,
// L80-L96: def set_blocked(
// L98-L100: def is_new(self, build_type: BuildType) -> bool:
// L102-L111: def get_build_patterns(self, build_type: BuildType) -> list[str]:
// L113-L114: def get_failed_patterns(self, build_type: BuildType) -> list[str]:
// L116-L117: def get_failed_name(self, build_type: BuildType) -> str:
// L119-L126: def get_build_types(self) -> list[BuildType]:
// L128-L133: def _get_dep_build(self, build_type: BuildType) -> dict:
// L135-L139: def is_optional_dep(self, dep: "Package", dep_type: BuildType) -> bool:
// L141-L143: def get_depends(self, build_type: BuildType) -> "dict[ArchType, set[Package]]":
// L145-L147: def get_rdepends(self, build_type: BuildType) -> "dict[ArchType, set[Package]]":
// L150-L155: def get_buildqueue() -> list[Package]:
// L158-L192: def parse_buildqueue(payload: str) -> list[Package]:
// L195-L246: def get_cycles(pkgs: list[Package]) -> set[tuple[Package, Package]]:
// L199-L204: def pkg_is_finished(pkg: Package, build_type: BuildType) -> bool:
// L207-L230: def get_buildqueue_deps(pkg: Package, build_type: ArchType) -> "dict[ArchType, set[Package]]":
// L249-L398: def get_buildqueue_with_status(full_details: bool = False) -> list[Package]:
// L270-L274: def pkg_is_done(build_type: BuildType, pkg: Package) -> bool:
// L276-L280: def get_failed_urls(build_type: BuildType, pkg: Package) -> dict[str, str] | None:
// L282-L284: def pkg_has_failed(build_type: BuildType, pkg: Package) -> bool:
// L286-L293: def pkg_is_manual(build_type: BuildType, pkg: Package) -> bool:
// L401-L407: def get_build_jobs_status(jobs: list[WorkflowJob]) -> list[dict[str, str]]:
// L410-L422: def get_active_build_jobs() -> list[WorkflowJob]:
// L425-L426: def get_active_build_job_names() -> set[str]:
// L429-L455: def get_status(pkgs: list[Package]) -> dict[str, Any]:
// L458-L500: def update_status(pkgs: list[Package]) -> None:


================================================
FILE: msys2_autobuild/utils.py
================================================
// [OUTLINE - 8 symbols, 125 lines]
// import os
// import contextlib
// import datetime
// import functools
// import typing
// import collections.abc
// import importlib.metadata
// import requests
// import requests.adapters
// import .config
// import requests_cache
// import requests_cache
// import requests_cache.backends.sqlite
// L18-L20: def requests_cache_disabled() -> Any:
// L24-L33: def get_requests_session(nocache: bool = False) -> requests.Session:
// L37-L73: def install_requests_cache() -> Generator:
// L77-L82: def gha_group(title: str) -> Generator:
// L85-L92: def queue_website_update() -> None:
// L95-L104: def parse_optional_deps(optional_deps: str) -> dict[str, list[str]]:
// L107-L109: def apply_optional_deps(optional_deps: str) -> None:
// L112-L125: def ask_yes_no(prompt, default_no: bool = True):


================================================
FILE: requirements.txt
================================================
# This file was autogenerated by uv via the following command:
#    uv export --frozen --no-dev --no-emit-project -o requirements.txt
attrs==26.1.0 \
    --hash=sha256:c647aa4a12dfbad9333ca4e71fe62ddc36f4e63b2d260a37a8b83d2f043ac309 \
    --hash=sha256:d03ceb89cb322a8fd706d4fb91940737b6642aa36998fe130a9bc96c985eff32
    # via
    #   cattrs
    #   requests-cache
cattrs==26.2.1 \
    --hash=sha256:679132bfdc225c5ee40c024fc42519954767c387f950dc6751946c586bccdc6d \
    --hash=sha256:a12aaa3453dc8f633a815293179f08b7421ed18d2575c459c3c736f840beac24
    # via requests-cache
certifi==2026.10.23 \
    --hash=sha256:a9895e6e2758b371e0545e321a3a8fd1fcfd9829ada8824a936dfb16aaaf36cd \
    --hash=sha256:e9b54de76e530bb6cf0ccd036787103acb58fd42ba930ea8bf948ddbaa2f61d1
    # via requests
cffi==2.1.1 ; platform_python_implementation != 'PyPy' \
    --hash=sha256:046bfc24911b37851ee1b51aab8bffe713d89c68c6a057b09484ce9fd5f69b4e \
    --hash=sha256:06c72bb76605a4b0cd0aad6930b69d4baf7dd5d806cfc409b824191099700e66 \
    --hash=sha256:0beceaabe56af686895136a2de78db54ecd8e4046b236b8fd6d6cb61389e9bf2 \
    --hash=sha256:19ee6127ee34de7d83ce3d371ebc5ed91addbdcc39f9ab15ce4eb35a4e534971 \
    --hash=sha256:1a18a57b58cfb21fc28d72e876acf10eaed67a1ed96226f92af4df681d571c4c \
    --hash=sha256:1aa5645c30469b09530c4ebca77ebf8f17618293c58f8549cb1a543a50236e7d \
    --hash=sha256:208f941bb9d18e768138677f0a6d2ce01f590df56043dda1df1535ac57c88517 \
    --hash=sha256:210019b6c7cf07f081b4c54635c8cf744377001350e29cc0f81c4377b4797735 \
    --hash=sha256:246fa40ce8645a614ff682e0b70f37134e460eaf93a775e0cbe3cca585a67a80 \
    --hash=sha256:25792eac27877609e7bb06d42ff88278a6624fff2ba9bbb523c09616b117e80f \
    --hash=sha256:27350daa11d4f10c540e6e89dada4c54feb7256ad03e9a4dc075ebad7ba360d1 \
    --hash=sha256:28907ab9bfb6aa13184cfc17c6b8e1023c5ab6fd7076d8c20a35e59fe04f8f29 \
    --hash=sha256:2ae64be792b8966f2c69538199728b290e34726562896df1e5dc8ffd8d8188e8 \
    --hash=sha256:31348097ff5bbe827ccc41795d4dd099d9f0625e7def00ee653c137a490c2a6c \
    --hash=sha256:3143d81e29e1e20a9ce10901ec369012947876596f75a222235965f2b7ae832e \
    --hash=sha256:3222ba5d678f80a030e6afbcc33dc1ae5cb45facabb61cee2c7016b8432fde48 \
    --hash=sha256:334644fbac4eff73d985a17a91226df55d0f394160c4cfb880e084c8f7161cac \
    --hash=sha256:363e05fa78e15116c3c32c210ee36884fd6b9afa6d440e47112c3bd511d64cb6 \
    --hash=sha256:42a494cee34437f05546455144f2b5d9ac09b1face62bcfce597d2e521066688 \
    --hash=sha256:456a61fa52d579ebf9df2e9552ead5129855dbaff6c1e5a9b1bc408809bdc062 \
    --hash=sha256:471cee653ae88de62096552e6d24ccb4a5adb8c8c9f10b5054d0122c15bf2779 \
    --hash=sha256:49cbc70e6542d4ccccb936558d1064a8012541e78f821f955cff24e357776c94 \
    --hash=sha256:4a7c934f7360e8cd64fe9efadcbd10c7c6364f531e432b9a4bf5ccbc9e0e8b50 \
    --hash=sha256:4be96343e422f2dfcd12ab5c9f5aebe03f82f737c6bffeca6830b3875cb44aab \
    --hash=sha256:4f42141fc14250de6dde5ee7ea4432be017252d91f19c5ad043c084cea629cac \
    --hash=sha256:507a24c282e0f42f8ed737cf048572cbf580468da5555764a8331735e9c736b6 \
    --hash=sha256:51b31d1c98274844cfd7838ce00bfc27c7423a4dc00fc0772fc3331c2cc90676 \
    --hash=sha256:58acb8ab8e295e6c5ea12f888cbb13cf21511ef2a3303a23f4325c29d17fe5c1 \
    --hash=sha256:5c58fe613dc5e5336357eff555824a314d8e43282600435c8d1cb6a7a2fedd13 \
    --hash=sha256:5e7cecbaadb83884793e05828cee59b210b24583b9c7425d0ba6a754fe22eb4e \
    --hash=sha256:616f097f2fe415bc92a247f02e11f634e1f9e9a83d327e3c915c15089c87869e \
    --hash=sha256:63bbfd5ded17c4840ac07cd8f1c21ba9d9708141f840b324f422f41b207e3973 \
    --hash=sha256:64faea20f4e2613363a1a9b9c7dd73058f3ecd00133a511e72ad7c511658f527 \
    --hash=sha256:661c298b4821edebead0c91edd2b00374d67ad7c5a1f7a91d4442633b79d6a72 \
    --hash=sha256:68e62fe11f30d5ca8289242866f0a5291402d8529ca2178ab8afc5c9694ae890 \
    --hash=sha256:6a8dddef476fab96d066d578fc88526767b836ab5ab21754e1d5bf3879c31c7c \
    --hash=sha256:770de9db11e84213beec501cfcaa013b019820ca881e03344dea5844f7876d94 \
    --hash=sha256:7750c6449dff7864bb9bb27ddfb0267756189201a3afc911d82b3caacd70dfc3 \
    --hash=sha256:7bde5e4cc5c10140859842b9d383af292b22639a4dffb725314baf45968cef80 \
    --hash=sha256:7da0c5eff80f0197f3b3d1232ec5a682a9325f4ae9016a78f5f5ca35f9ced1f5 \
    --hash=sha256:7dbb61fe3a7699468030f71bbe5f8a0e326a151daa91beb11a6fc1f980c55e1c \
    --hash=sha256:811bd1e21d32de12efca32393a0ab3f5133b54fce9bd44b8bd77ab07da14bf6a \
    --hash=sha256:8ef53b2de9bcb9197d31854256575d59dbac0cba72ac627bb291ef5eceb74be4 \
    --hash=sha256:937c0052c05a31ca1daf18de3158eed4dbfcb9cc107adbea227728d647be701e \
    --hash=sha256:9d2055050ea716bd38b7f7f1579c275386646b4894c155a3e2f3cd62ed41b7c6 \
    --hash=sha256:a2d7755bef5a12ed488f4ef1f1b69ee9191d7396083b755a5d2295f6edb4768b \
    --hash=sha256:a4f00aa42f75d6e4595e8866e748cc1705adc0cddfeb2ca86d0d03993d63ba03 \
    --hash=sha256:a730a083190634c65cca36ba5f489531576ebd79bcd5c8e172130f6453127231 \
    --hash=sha256:a931079504ecc49efed7744c476a5c343a92fabf66dec2db95edb1b2fdc770e2 \
    --hash=sha256:aa9511c62d14da7aacc9b4bf51f3f697a621e83b2d6919008243c3aad168eea3 \
    --hash=sha256:ab36d55f9ed2d067327667c2fea18dda018eb628dd6347aa01dda6cf1f5d3836 \
    --hash=sha256:ad2c86c495b899d862ea0f4b42891b8713a3bd45dd4105c7fd51c2a72f39f3a5 \
    --hash=sha256:aeae0e330c9f6acd681f647d46cefd30c29f93e3392882e792e82080c9691399 \
    --hash=sha256:b0431303acaea1089ad4b3e9ce4e6518193def1118d4073ca848635ee4ea2e96 \
    --hash=sha256:b5bdfd1c873d4e093aabc0ca84c4ca6dbc4f752afb5c86f146d9742580c9da2e \
    --hash=sha256:c1453022f490d2459a11819d83ad1d586e9ff65a12ac3e705ffebd46d3685dcf \
    --hash=sha256:c26608d2222fb1e94487e4a387d85f13eb55d5ed725cb25a0c589ac4ee60e7bc \
    --hash=sha256:c8c69575568085ba0b1b10c0249d779a214aea6f6522e949a0fc9fb0fcb449d0 \
    --hash=sha256:cc572dace3f60ef98d7b12ff411d20f5362feb31a0439eab0085bbfd349982d7 \
    --hash=sha256:d18e5ac0f2f03f4f518d3e23db0f0cad7faa1da8620e9c09461d443bbf6e6692 \
    --hash=sha256:d28630f5854ab07ab1fd4aba756de52326c82e6be15d414b12793f1975048b54 \
    --hash=sha256:d9c275eaacd24aa73f94ffd6de08fc3f932424d8b6c376f4bed7cde376fe7bc3 \
    --hash=sha256:da0e573f9f97159390c89d9f1a9e41908b66d408cc5b58d08cf3847d844c531b \
    --hash=sha256:dd31f52ea1086513bb9df30f8fcee9b8918323ae067a3d5b78bc826a000712be \
    --hash=sha256:dddad92b554513a31f272570678ba307fb9f618f05e3d4a5eacafff9eae03e1d \
    --hash=sha256:df423d40ee8654634421812bc3b196da3f9bd7d32929da813f8394c4348a5358 \
    --hash=sha256:e0bcb7e0f677f543555d2adff3bf19c05f66cdb4796e5ff602442ab2fe3c4ef7 \
    --hash=sha256:e2d65b31f36619cda3999b78b2aa9632e76b78448e7a56fc4240824200e7c4fc \
    --hash=sha256:e6e8cff14d6fb0be70a09c0bdc58096f501952d04624ebf867e0e56da2df8960 \
    --hash=sha256:f16c709686a78c727bbbf059f92b0bf41c6fc60deec706d2dc19f529175a6125 \
    --hash=sha256:f24fb43132a4c6b4cb4eb029492919b2db645be6808d738f244fd146c03c32cb \
    --hash=sha256:f53e442b08449d42821fa4a4fba000095af9f62742a500f978a9f557ec44339a \
    --hash=sha256:f81b3b8f3d4e343550fa4baa0e479bba9f2d29ce9c2e9b51d1ce1718d7442fcf \
    --hash=sha256:fb92203a88b3d3053034db775110081c49d28be6551923805e039924093761e4 \
    --hash=sha256:fcd22650c908d7b7da162bbfaab594a1227a15d1643a98c68b122ac642fa2264
    # via
    #   cryptography
    #   pynacl
charset-normalizer==3.5.2 \
    --hash=sha256:01077390b03f7988f11d700a2194e69b119741a86b1a638b1db88891e3eced8e \
    --hash=sha256:01b0c0d2262a9e28e8484a278c7e1b5d650e3ac8cf2683d2967e25899f208bdf \
    --hash=sha256:04851f73ae72b8413dddadb16a49dfee95263553741fd42d546f7d66907e6be5 \
    --hash=sha256:0521c5665880b33d603717defa76c094048900010897909952397feb3039da56 \
    --hash=sha256:0774bf9bf620249fee3e0b8b9fd3065de213be30f3aa94ce2494b3b638949e26 \
    --hash=sha256:0c951d5e6dd9c2ff60609476752bee49da4206adde960ebc247766937f72e718 \
    --hash=sha256:0fed1d06615f022ee3b13caf5e8b180cfea32bb2c5aded8a9d44277afc040f93 \
    --hash=sha256:11912e4bb14baae7c5d8791aa55ba0a3a03ec6729073307b0f57270abaa713d3 \
    --hash=sha256:11a4d68a6ecda3292cb1e50239e111543ba5d709bb62a6b4ea1afcfa729d8875 \
    --hash=sha256:124fbf1a8ff966d87ae05bb8bd45a71f966055ed8bba320d0c7cf450bc5f4d0e \
    --hash=sha256:1503bccbeb36d5527790c3930327704c39af22de3112f1b1666a9f3ce15ee204 \
    --hash=sha256:15c44f7edfd477b06f517a5cc317fc1707edb9de2c865f43d4b6513907473234 \
    --hash=sha256:16fa0eccf81304b79c5cd87f9271c3b85dd9dd99245e4422ae9c0dd45e0f99d3 \
    --hash=sha256:183b88127acdb4fabe59d951ab424faf1af7b63cdbb5f776186c1ea2ffcaed98 \
    --hash=sha256:1afb975bd5d68d5ce9f6b6d44fdf2f7e34b895a35e95708a7a91b20a3b51d187 \
    --hash=sha256:1b4cbc7c3491ccb4aa17fcd8165649d01cf39f76de1696da8631b5f71b85401d \
    --hash=sha256:1bc0baf5ef96b6ede57d47f4b8fe4d9d84019c3bfcbeb20a41edc6a6ee341f1f \
    --hash=sha256:1c50fe28bbc2ced33386f298650d91218076c05420e6cbd790b913adc41659e7 \
    --hash=sha256:1db38f4c5496827c1a501846d64d14c3b80c7e6714e406cd7dc36a9899fa1011 \
    --hash=sha256:23851fb4e1b85ed3f6c2a27b777cdfe2e19fb5b38429a8faf38c7542b7665869 \
    --hash=sha256:281cb91036248400f4cc957495cccd44c275c2e0c5854f7e45ac5cf7dc193847 \
    --hash=sha256:28b4f0d66fb834ff90f28209ac7bce77868c45d8c93e26f906709d9b7c2e1af9 \
    --hash=sha256:2a925889534b3748302dae5dead07cc13480de1dac3aea80a941b729b471ef93 \
    --hash=sha256:2b7b3bbfb4fe8ef40600792d762fbaa9057559f9d3fad209525b7a22b99e91fd \
    --hash=sha256:2c9ad19a6cfcd5ea5c0d41161d22f9df1dcc277e9bef2751391334546a314c00 \
    --hash=sha256:2ce45c6627b22c47e390bc91a41c3d13032192e699fa0bea96e9671b373d69b0 \
    --hash=sha256:2e06a3a98f916dd41d27f3105e02e7a40181c98c94b9158733d03a6f80506c09 \
    --hash=sha256:304d8e4d493af723536393eee0c689eb7813f4a474c8b479dee63f1fdd98f621 \
    --hash=sha256:31f3930700408d211f13378ccbe1c40845d8da54bd0681fac3a9b5aae81c7aa8 \
    --hash=sha256:34276fd796040bf0993ab33a369aa572e6979c7aab225a88893667ad8eac8f7a \
    --hash=sha256:355ad8011081dec5412240c087a9a0c9d4d5039f3ed11a3f13e18c2b29b56c51 \
    --hash=sha256:38a873987f3be698494da8b2e3085e29da02da7b633dce73e79c699a113d7bf0 \
    --hash=sha256:39de2a259fc954455c57274dc94c79d5842774e1247a016aff30bc0efed0f4ef \
    --hash=sha256:3d31298449090ab8d47b7b1b2a555ff73cac7ed438a08b7ac160980c7ebed649 \
    --hash=sha256:3df041de8887954562c9b261cba85ca0e9ded74048daf125f45edcfaa4832229 \
    --hash=sha256:40ab6bffa02ae10a0581e6c198be7d2d8ca5c2a0c64e4ed3465d766df457573e \
    --hash=sha256:4275811936e2f06feff5e598fb42a1b7ae852da8e39605211892b56b81a34efd \
    --hash=sha256:443eae2bf318abeaf6f15d785138f71fd6de770e99a92158b8b814265e079115 \
    --hash=sha256:498dc3188ca05a68231ac3fdbfc7f57eb67e1343c30e0fea17f8218c1599b253 \
    --hash=sha256:4c2b5031f63e331e3839b40aed2dd6f191e9c07edbde303e7876846ea1946995 \
    --hash=sha256:4d48f2d08b9de5864e2c8744d4461b862fb149a18274abc8b698c45975573438 \
    --hash=sha256:4f87960d57feabfb618e4e0af6e7371645fa26a277860739d6e5d6e0012c92f0 \
    --hash=sha256:51cf45226a9b588d0d2b4880c62d686934b63ab0bd79ca23ab0e9762eb27441b \
    --hash=sha256:52aa6992700996af31f375de0c6bacd402b0097fe40b53c426b9f51a90ebabc7 \
    --hash=sha256:56bc200a365efb37383b7852e4cc5898d3b2da5987289b543956cf8cad71018a \
    --hash=sha256:58ca3755ee7ff7f59b57789ec9833c9de9ea275405cdd240eda1f193112e398a \
    --hash=sha256:58f361dcbab699cf8f42db3f47c8e7fd1036f138c23a5d08de9fde5f425a730c \
    --hash=sha256:598a11a2c7ebaa5334bf698bf29568c9c390abac6a154d8170fedecd1cea38c5 \
    --hash=sha256:5cde776b7cc66e4f6c99612cea4aa7269aa65863f7a15841b2c264f103822f4e \
    --hash=sha256:5e2b6b57e9733d39f0c9fd3185efa6b8e29652c4cd8fe94180272cf6ed9a78c4 \
    --hash=sha256:5fb29fb8cd1a46c27a1bf9613ad5ec2599310d46b4025d9556404a6b6a292800 \
    --hash=sha256:6045373d5a89a5ec71afde535db987ca28e76dfa276c2d4c818265b375d4b055 \
    --hash=sha256:62603db9a7caa0802eaa28c1c46fecd7b3a263a774069c24c3c28c302448721c \
    --hash=sha256:65cd72beeeca9d3aaea1201e5923859f308f952f9c71de93f06063c79f0f7a3b \
    --hash=sha256:6bd128f206a7752ae1f2ab6c61bf8a24ba28913a10df8b14c2637b973ff97a80 \
    --hash=sha256:6be488a102b8cf28d0391d8c4ba7748938ae28b78ad901f8585520fca33ead1a \
    --hash=sha256:7218e8f32b0956cfcd048fd42d9d5779809745ca1d86113ca56f66e7ae1549c4 \
    --hash=sha256:7441d755b7ab94f8d4eb3e43ec05482d760842fd263d003a99102d742cd835e2 \
    --hash=sha256:749e97e1b32313717a565abbe321bc2190bc8b35f1a67e4cdbc7c56c8d8ffe58 \
    --hash=sha256:780fbe7cab297b81dad9fb8dc5eb003c0468ffb0d9e5f65068c53a34661a96bc \
    --hash=sha256:78456a747de8dc58360ffa581f30a002baf5aa28cb262536545e91f113ed7639 \
    --hash=sha256:7967d08cf06dee78443b874f98c98036f624f3a4e73e11f9f64f5be4d25393cf \
    --hash=sha256:7a881931aa470808df94a8c380eed2bbbc76cd9dc622310f99665658c821eb6d \
    --hash=sha256:7dcd882da75ef9adf94903b1e3b9419e8aa8fb4c7396822b834b9ef7fb96954f \
    --hash=sha256:7e841fb9010836c992c9f12fcbd43a831de93a5f726fc1ccd8ca1d0268c5014c \
    --hash=sha256:7fdde2c9fd9e3eca40631e024664cf2584272cc8f96308cbe5fdfc930f51d8bc \
    --hash=sha256:8024d00c3faf3fc0c16e07a69f4405e8eac7cc0ab15f65fe6cf43827c4cf72b4 \
    --hash=sha256:80d02b6f04e92601a081dd97b23d3128033098bff5d35d392ddcc0476ea11253 \
    --hash=sha256:838dcc90063569a0448120554591a1d6c4a4ffe11babf048908793154ab86ade \
    --hash=sha256:849df64e889b2e17230d58410a03dba311a65b163508fd33679b2b737d4b7858 \
    --hash=sha256:87475fabc8d9996fd9c27debb395e642e8c838d78a00b6e932227a0e06b81e26 \
    --hash=sha256:89b53f3cda69831909888e0494f4fa0bcd3537e3e138dabeb620bd6ad946bae8 \
    --hash=sha256:8d86d6fc60743dc916eb79e2eb1ec4818e21e427731543af40a3021851174a13 \
    --hash=sha256:915563965d418f986e7e145accc592eae9e1a1be3566ff98a05d7a9ec42a76e1 \
    --hash=sha256:92888bb3187c5ba50500b00b3b310c9f2c651709d28036077680cb5255450a03 \
    --hash=sha256:9409a8bf35cf78353942504b24a57de3d75b708997a1e4bd8db71ac8633ce364 \
    --hash=sha256:9b7f416ff0978e2f2249330527f0ad6fa02f4932e6199692d3b52da2048c19e4 \
    --hash=sha256:9cae88599c7219005d879f98e5ed53341e9a122af585e1091200358a3003d2a0 \
    --hash=sha256:9f56f72050826f63dcee7a7f55b0a77168cb3bfc553fd405e7f8f9ece75a4036 \
    --hash=sha256:a090bb2c68df85450502e3e20d665e3a5af9c65a84d6508ed477badd49166fd3 \
    --hash=sha256:a192e2c40070d92c3ccf777e3a5c4ff515573cd2bb7ed0c537fdadbbec5bbf21 \
    --hash=sha256:a19a731138fc27d5682277d3b9df22855cea1239bce7fcec5f78f42ef2d1f3c3 \
    --hash=sha256:a66c3bc5ab1f0ff2164fc9965ddd611ff0802173f4b9d24554c563f6ab7e1d6e \
    --hash=sha256:a815775b6c38d4e0ff7bcffbeba67feded90202bb6a226b8dd35f1c855217413 \
    --hash=sha256:a89012d6d5476ee112d20d998570ed58df2260a852afb1758809cd6900411d21 \
    --hash=sha256:ae4f5fea5b8b8ccff88238cc8569303e5ee95efae67fa62922a311397a71f346 \
    --hash=sha256:b6856554c4f44d79fc2307d5768854310a8f0096e501c75637542c82292b0429 \
    --hash=sha256:b6b751274acb69d77b3323d6b7dbaa3c7fdfc1eb829b7eb61d262f32e1af9685 \
    --hash=sha256:b7fd005a73d9e657273b7a10dc71a9e03c8fb9ee6999798d6918ce095b81ac7f \
    --hash=sha256:b91363207bd9dc966a691e959bb47f64b30f7ac4b072be9968b366982f7db77c \
    --hash=sha256:ba0b1d2620edf869789c3879223f52bf2afc5d31b3cb47cc57b3a12c05e2aa9d \
    --hash=sha256:bbbfc8e28816f19d7c0f1816664980c0a9875d01b27cdf8eedddb639d9e108ad \
    --hash=sha256:c0afc6800ba57ccc350374c5bd6150419915d95ce93cdbab2d783d75eaf30ecb \
    --hash=sha256:c7c9ab723cde841fefb34efbad91e87f00a674b1fe1cd0784fde742bf2c154dc \
    --hash=sha256:c8f3d67aeaf55f017982b73683f0e7342ba2f6635a78f69ce89ebb26aa411e5c \
    --hash=sha256:ca403d7e4798f525fdfc78e258820419cbbd0f0ecbab9de7840e3c017cf6b8cf \
    --hash=sha256:d008d90a7f2471519aef0c90dfbe73b3e6e4d5e66ac48e19154c17e89e98b604 \
    --hash=sha256:d19fbd981a488e22cd04883659ca6b08f50b5974f9fd7c95655ef6a043e5893f \
    --hash=sha256:d1befeed746d247c81127bb14de9dc3d30edb6e5976d34f83f86ed262b1d9105 \
    --hash=sha256:d2374b62878abb00cd8309b32af6c0b715cd02dec0ca74ef12e5069bdc64144a \
    --hash=sha256:d376bbd28b3a8999db1a103b3b388aee6f1ddeb3e51bc2172993efdcd86e064d \
    --hash=sha256:d6734d2ef8a50fbf8445c139477da401f50d62a0606bf00e20ec6d87773fefb1 \
    --hash=sha256:db19d07e2e0129e974a0e65d0064fc222a446cd5122c2fd4184d2af9fc734a9e \
    --hash=sha256:dca9ab98072a5a54ebacebdc45f53e645336b320c667410b061be1ca588ae709 \
    --hash=sha256:ddc7dacc8ece3a182e7f15cb862d1fd616b46d076cb1ae9dd232b2c38b655874 \
    --hash=sha256:def79fa35ef0cef8d2accec024f4fdc7ead3012ff02f5215c783f39f03ef8cfc \
    --hash=sha256:df29a0a7107f7011e77f4eebdddec4c7331e24d787a0b21a46d63bdf7445da95 \
    --hash=sha256:e09a3942ecbdee5cce73ea9d42da82b81b72ac1bf031ce069b93b5adf4eac8cd \
    --hash=sha256:e242bb1c5e76e97dfa9e7f209a71e93a01d7f19ffdd5cfbb2e2d55b4f08f8ab0 \
    --hash=sha256:e243bd13217235fc7290c621941c3f5cc8b66e4872495be821d7436ba2fb838d \
    --hash=sha256:e2af3aad578aa6bd1384bcf4750fc285e5a9de53f40b7d41e5a0bf748edeb2b3 \
    --hash=sha256:e4e81e09c1578b8df602e3db08b0b3ea0a6947ad612f52bf8dc5ea8d47691f0c \
    --hash=sha256:e54da4baf05720032d527874d40b65fa4d7e5c6c6a43d0c3adbeffcaf275a2b3 \
    --hash=sha256:ed2a239c0ea213acc1908150a3037257083c7c083128f1a4cec2ec4b97dca491 \
    --hash=sha256:ed905975ab14056a2e5eb1c376cb2e1ebc5396baf84163939c518556fccde9f5 \
    --hash=sha256:ee21e28f0430bd6dc9086c6e525d5e818a44a5ad19720c8a0ef766792f3eb5e5 \
    --hash=sha256:ee43c17b173d46a3212baa6ead3ae258eeabdae48c263a01ccf0218c366dd655 \
    --hash=sha256:eff0ac9dbe711a4aee69bf04a83896aa9b85f19641264053a9f6d48573abb7dd \
    --hash=sha256:f0aa869112ef88429ae17820d99c3dd9504c9e9c671d3c246f3d7442cb051084 \
    --hash=sha256:f3c96f633825733f735c5a9cf21d21a257d8e1edf0b1cee0a064b9c424ca0f7d \
    --hash=sha256:f5ec61164adcec446f8969a3358ec3f9b26bbda3b9213e5586d219afa8df2915 \
    --hash=sha256:f7d486c83842422badd511868fd8a9a20e9407ace71564b6af47ce7e60a336c1 \
    --hash=sha256:fcff63213e8e6e47770541a4607175404f47cbb3ebea7b6058cc82d524a0e424 \
    --hash=sha256:fe9753dfee015c570d73df76f899f18444d41388bffcde097deba51c4fadbb9f
    # via requests
cryptography==46.0.3 \
    --hash=sha256:00a5e7e87938e5ff9ff5447ab086a5706a957137e6e433841e9d24f38a065217 \
    --hash=sha256:01ca9ff2885f3acc98c29f1860552e37f6d7c7d013d7334ff2a9de43a449315d \
    --hash=sha256:09859af8466b69bc3c27bdf4f5d84a665e0f7ab5088412e9e2ec49758eca5cbc \
    --hash=sha256:0abf1ffd6e57c67e92af68330d05760b7b7efb243aab8377e583284dbab72c71 \
    --hash=sha256:1000713389b75c449a6e979ffc7dcc8ac90b437048766cef052d4d30b8220971 \
    --hash=sha256:109d4ddfadf17e8e7779c39f9b18111a09efb969a301a31e987416a0191ed93a \
    --hash=sha256:10b01676fc208c3e6feeb25a8b83d81767e8059e1fe86e1dc62d10a3018fa926 \
    --hash=sha256:10ca84c4668d066a9878890047f03546f3ae0a6b8b39b697457b7757aaf18dbc \
    --hash=sha256:15ab9b093e8f09daab0f2159bb7e47532596075139dd74365da52ecc9cb46c5d \
    --hash=sha256:22d7e97932f511d6b0b04f2bfd818d73dcd5928db509460aaf48384778eb6d20 \
    --hash=sha256:23b1a8f26e43f47ceb6d6a43115f33a5a37d57df4ea0ca295b780ae8546e8044 \
    --hash=sha256:36e627112085bb3b81b19fed209c05ce2a52ee8b15d161b7c643a7d5a88491f3 \
    --hash=sha256:39b6755623145ad5eff1dab323f4eae2a32a77a7abef2c5089a04a3d04366715 \
    --hash=sha256:3b51b8ca4f1c6453d8829e1eb7299499ca7f313900dd4d89a24b8b87c0a780d4 \
    --hash=sha256:402b58fc32614f00980b66d6e56a5b4118e6cb362ae8f3fda141ba4689bd4506 \
    --hash=sha256:416260257577718c05135c55958b674000baef9a1c7d9e8f306ec60d71db850f \
    --hash=sha256:46acf53b40ea38f9c6c229599a4a13f0d46a6c3fa9ef19fc1a124d62e338dfa0 \
    --hash=sha256:4b7387121ac7d15e550f5cb4a43aef2559ed759c35df7336c402bb8275ac9683 \
    --hash=sha256:50fc3343ac490c6b08c0cf0d704e881d0d660be923fd3076db3e932007e726e3 \
    --hash=sha256:516ea134e703e9fe26bcd1277a4b59ad30586ea90c365a87781d7887a646fe21 \
    --hash=sha256:549e234ff32571b1f4076ac269fcce7a808d3bf98b76c8dd560e42dbc66d7d91 \
    --hash=sha256:5d7f93296ee28f68447397bf5198428c9aeeab45705a55d53a6343455dcb2c3c \
    --hash=sha256:5ecfccd2329e37e9b7112a888e76d9feca2347f12f37918facbb893d7bb88ee8 \
    --hash=sha256:6276eb85ef938dc035d59b87c8a7dc559a232f954962520137529d77b18ff1df \
    --hash=sha256:6eae65d4c3d33da080cff9c4ab1f711b15c1d9760809dad6ea763f3812d254cb \
    --hash=sha256:6f61efb26e76c45c4a227835ddeae96d83624fb0d29eb5df5b96e14ed1a0afb7 \
    --hash=sha256:71e842ec9bc7abf543b47cf86b9a743baa95f4677d22baa4c7d5c69e49e9bc04 \
    --hash=sha256:760f83faa07f8b64e9c33fc963d790a2edb24efb479e3520c14a45741cd9b2db \
    --hash=sha256:78a97cf6a8839a48c49271cdcbd5cf37ca2c1d6b7fdd86cc864f302b5e9bf459 \
    --hash=sha256:8a6e050cb6164d3f830453754094c086ff2d0b2f3a897a1d9820f6139a1f0914 \
    --hash=sha256:a04bee9ab6a4da801eb9b51f1b708a1b5b5c9eb48c03f74198464c66f0d344ac \
    --hash=sha256:a2c0cd47381a3229c403062f764160d57d4d175e022c1df84e168c6251a22eec \
    --hash=sha256:a8b17438104fed022ce745b362294d9ce35b4c2e45c1d958ad4a4b019285f4a1 \
    --hash=sha256:a9a3008438615669153eb86b26b61e09993921ebdd75385ddd748702c5adfddb \
    --hash=sha256:b02cf04496f6576afffef5ddd04a0cb7d49cf6be16a9059d793a30b035f6b6ac \
    --hash=sha256:b419ae593c86b87014b9be7396b385491ad7f320bde96826d0dd174459e54665 \
    --hash=sha256:c0a7bb1a68a5d3471880e264621346c48665b3bf1c3759d682fc0864c540bd9e \
    --hash=sha256:c8daeb2d2174beb4575b77482320303f3d39b8e81153da4f0fb08eb5fe86a6c5 \
    --hash=sha256:cb3d760a6117f621261d662bccc8ef5bc32ca673e037c83fbe565324f5c46936 \
    --hash=sha256:d55f3dffadd674514ad19451161118fd010988540cee43d8bc20675e775925de \
    --hash=sha256:d89c3468de4cdc4f08a57e214384d0471911a3830fcdaf7a8cc587e42a866372 \
    --hash=sha256:db391fa7c66df6762ee3f00c95a89e6d428f4d60e7abc8328f4fe155b5ac6e54 \
    --hash=sha256:dfb781ff7eaa91a6f7fd41776ec37c5853c795d3b358d4896fdbb5df168af422 \
    --hash=sha256:e5bf0ed4490068a2e72ac03d786693adeb909981cc596425d09032d372bcc849 \
    --hash=sha256:ef639cb3372f69ec44915fafcd6698b6cc78fbe0c2ea41be867f6ed612811963 \
    --hash=sha256:f260d0d41e9b4da1ed1e0f1ce571f97fe370b152ab18778e9e8f67d6af432018
    # via
    #   msys2-autobuild
    #   pyjwt
gha-artifact-client==0.2.4 \
    --hash=sha256:4572c2065282de16a368d8dc10141c04b77936497e8d1be0c30d1b8a7eef6a79 \
    --hash=sha256:92ce6047ba392ae147b3b1946da6f3130643bd0e49cdfe9bb92fe8144acf6587
    # via msys2-autobuild
idna==3.20 \
    --hash=sha256:a7db850025b95ded1eae8a46181a1a6c56c92c96f0e2b005d9ff8dc0210cab44 \
    --hash=sha256:ab7ae7122974553370f0bdb919e1a960b2cd1bc1ef0276416d896db81c14582c
    # via
    #   requests
    #   url-normalize
platformdirs==4.14.5 \
    --hash=sha256:32e9921db7385aa8169bee4fe9501923e5715ba9fb7ea3b9c69b0d8e0639f7a1 \
    --hash=sha256:8e778c6fa421516f4d3369449f8df3b0e1b72c0e0005fe88e3ec772d0a14e750
    # via requests-cache
pycparser==3.12 ; implementation_name != 'PyPy' and platform_python_implementation != 'PyPy' \
    --hash=sha256:a076f3f489b39b43ed13563a1dafe42447445bec2e294154ec5c57fcdda4c85e \
    --hash=sha256:f03387877eab82ce01bbdfd0ba7252ee55a90b1c708d5129e2ce915475cf1db6
    # via cffi
pygithub==2.10.0 \
    --hash=sha256:192ada2a76e4afc7d6b37e500c9bfeba1731e6506697445a5ba1c4af8bf0b924 \
    --hash=sha256:90ff24ef1cd1bd57124c2a3869cafee9d7b066909129ecdaba2c2d1903bc118d
    # via msys2-autobuild
pyjwt==2.15.1 \
    --hash=sha256:42d59d631f7768a1028a64c7ff581a9bf7519804daf91fc5b6c56e30eec5e193 \
    --hash=sha256:4f259e80cdfb6b3fc18a7de51fd1ef9ec79652f25019bae68975ca2468a34df8
    # via pygithub
pynacl==1.6.2 \
    --hash=sha256:018494d6d696ae03c7e656e5e74cdfd8ea1326962cc401bcf018f1ed8436811c \
    --hash=sha256:04316d1fc625d860b6c162fff704eb8426b1a8bcd3abacea11142cbd99a6b574 \
    --hash=sha256:22de65bb9010a725b0dac248f353bb072969c94fa8d6b1f34b87d7953cf7bbe4 \
    --hash=sha256:26bfcd00dcf2cf160f122186af731ae30ab120c18e8375684ec2670dccd28130 \
    --hash=sha256:2fef529ef3ee487ad8113d287a593fa26f48ee3620d92ecc6f1d09ea38e0709b \
    --hash=sha256:320ef68a41c87547c91a8b58903c9caa641ab01e8512ce291085b5fe2fcb7590 \
    --hash=sha256:3bffb6d0f6becacb6526f8f42adfb5efb26337056ee0831fb9a7044d1a964444 \
    --hash=sha256:44081faff368d6c5553ccf55322ef2819abb40e25afaec7e740f159f74813634 \
    --hash=sha256:46065496ab748469cdd999246d17e301b2c24ae2fdf739132e580a0e94c94a87 \
    --hash=sha256:5811c72b473b2f38f7e2a3dc4f8642e3a3e9b5e7317266e4ced1fba85cae41aa \
    --hash=sha256:622d7b07cc5c02c666795792931b50c91f3ce3c2649762efb1ef0d5684c81594 \
    --hash=sha256:62985f233210dee6548c223301b6c25440852e13d59a8b81490203c3227c5ba0 \
    --hash=sha256:68be3a09455743ff9505491220b64440ced8973fe930f270c8e07ccfa25b1f9e \
    --hash=sha256:834a43af110f743a754448463e8fd61259cd4ab5bbedcf70f9dabad1d28a394c \
    --hash=sha256:8845c0631c0be43abdd865511c41eab235e0be69c81dc66a50911594198679b0 \
    --hash=sha256:8a66d6fb6ae7661c58995f9c6435bda2b1e68b54b598a6a10247bfcdadac996c \
    --hash=sha256:8b097553b380236d51ed11356c953bf8ce36a29a3e596e934ecabe76c985a577 \
    --hash=sha256:a84bf1c20339d06dc0c85d9aea9637a24f718f375d861b2668b2f9f96fa51145 \
    --hash=sha256:a9f9932d8d2811ce1a8ffa79dcbdf3970e7355b5c8eb0c1a881a57e7f7d96e88 \
    --hash=sha256:bc4a36b28dd72fb4845e5d8f9760610588a96d5a51f01d84d8c6ff9849968c14 \
    --hash=sha256:c8a231e36ec2cab018c4ad4358c386e36eede0319a0c41fed24f840b1dac59f6 \
    --hash=sha256:c949ea47e4206af7c8f604b8278093b674f7c79ed0d4719cc836902bf4517465 \
    --hash=sha256:d071c6a9a4c94d79eb665db4ce5cedc537faf74f2355e4d502591d850d3913c0 \
    --hash=sha256:d29bfe37e20e015a7d8b23cfc8bd6aa7909c92a1b8f41ee416bbb3e79ef182b2 \
    --hash=sha256:fe9847ca47d287af41e82be1dd5e23023d3c31a951da134121ab02e42ac218c9
    # via pygithub
requests==2.34.2 \
    --hash=sha256:2a0d60c172f83ac6ab31e4554906c0f3b3588d37b5cb939b1c061f4907e278e0 \
    --hash=sha256:f288924cae4e29463698d6d60bc6a4da69c89185ad1e0bcc4104f584e960b9ed
    # via
    #   msys2-autobuild
    #   pygithub
    #   requests-cache
requests-cache==1.3.3 \
    --hash=sha256:79b72d5ac5143992d1836ad78f4d8e65666061dd44e220548caab3723089826b \
    --hash=sha256:c8df20ff874ebfc026959e3874e6c12bd6724934cdb10925915908453d4b17e4
    # via msys2-autobuild
tabulate==0.10.0 \
    --hash=sha256:e2cfde8f79420f6deeffdeda9aaec3b6bc5abce947655d17ac662b126e48a60d \
    --hash=sha256:f0b0622e567335c8fabaaa659f1b33bcb6ddfe2e496071b743aa113f8774f2d3
    # via msys2-autobuild
typing-extensions==4.16.0 \
    --hash=sha256:481caa481374e813c1b176ada14e97f1f67a4539ce9cfeb3f350d78d6370c2e8 \
    --hash=sha256:dc983d19a509c94dba722ee6abd33940f7c05a89e243c47e907eb4db6f1a43e5
    # via
    #   cattrs
    #   pygithub
url-normalize==3.1.0 \
    --hash=sha256:138912833c0005ec77e756ec220590f8971ff046227280790ceb00f5ab9d56b6 \
    --hash=sha256:34c386c6b2dbde760eaaaa8542dc29995c75f2baf94acceee18e5b6b29579469
    # via requests-cache
urllib3==2.8.0 \
    --hash=sha256:0cf3cae568d36aa9576b28dfb35f11328f1cb974ca7647d9475ebb86c75ac6e3 \
    --hash=sha256:63bf2ead4c879426ebf22ef2a781eeb4aa3b4ae798a0435506f8687fd5bb9b63
    # via
    #   msys2-autobuild
    #   pygithub
    #   requests
    #   requests-cache


================================================
FILE: tests/__init__.py
================================================
// [OUTLINE - 0 symbols, 0 lines]


================================================
FILE: tests/main_test.py
================================================
// [OUTLINE - 6 symbols, 147 lines]
// import os
// import stat
// import tempfile
// import pathlib
// import msys2_autobuild.utils
// import msys2_autobuild.queue
// import msys2_autobuild.build
// import _winapi
// import _winapi
// L12-L36: def test_make_tree_writable():
// L39-L53: def test_remove_junctions():
// L56-L57: def test_parse_optional_deps():
// L60-L139: def test_get_cycles():
// L142-L143: def test_to_pure_posix_path():
// L146-L147: def test_to_pure_posix_uri():


================================================
FILE: tests/test_build.py
================================================
// [OUTLINE - 1 symbols, 9 lines]
// import msys2_autobuild.build
// L4-L9: def test_get_packager(monkeypatch):


================================================
FILE: tests/test_gh.py
================================================
// [OUTLINE - 3 symbols, 29 lines]
// import unittest.mock
// import pytest
// import github
// import msys2_autobuild.gh
// L10-L14: def test_encode_decode_filename():
// L17-L22: def test_get_gh_asset_name():
// L25-L29: def test_get_asset_filename():


